/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 */

import BaseDevice from '../devices/BaseDevice';
import {reportPlatformFailures} from 'flipper-common';
import {getRenderHostInstance} from '../RenderHost';
import {getFlipperLib, path} from 'flipper-plugin';

export function getCaptureLocation() {
  return (
    getRenderHostInstance().serverConfig.processConfig.screenCapturePath ||
    getRenderHostInstance().serverConfig.paths.desktopPath
  );
}

// TODO: refactor so this doesn't need to be exported
export function getFileName(extension: 'png' | 'mp4'): string {
  // Windows does not like `:` in its filenames. Yes, I know ...
  return `screencap-${new Date().toISOString().replace(/:/g, '')}.${extension}`;
}

export async function capture(device: BaseDevice): Promise<string> {
  if (!device.connected.get()) {
    console.log('Skipping screenshot for disconnected device');
    return '';
  }
  const pngPath = path.join(getCaptureLocation(), getFileName('png'));
  return reportPlatformFailures(
    // TODO: there is no reason to read the screenshot first, grab it over the websocket, than send it back
    // again to write in a file, probably easier to change screenshot api to `device.screenshot(): path`
    device
      .screenshot()
      .then((buffer) =>
        getFlipperLib().remoteServerContext.fs.writeFileBinary(pngPath, buffer),
      )
      .then(() => pngPath),
    'captureScreenshot',
  );
}
