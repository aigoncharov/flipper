/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 */

import {Logger} from '../utils/Logger';
import {Device} from './DevicePlugin';
import {NormalizedMenuEntry} from './MenuEntry';
import {RealFlipperClient} from './Plugin';
import {Notification} from './Notification';
import {DetailSidebarProps} from '../ui/DetailSidebar';
import {
  ExecOptions,
  ExecOut,
  BufferEncoding,
  MkdirOptions,
  DownloadFileStartOptions,
  DownloadFileStartResponse,
  DownloadFileUpdate,
  RmOptions,
  fsConstants,
  EnvironmentInfo,
  FSStatsLike,
} from 'flipper-common';

export type FileEncoding = 'utf-8' | 'base64';

export interface FileDescriptor {
  data: string;
  name: string;
  path?: string;
}

export interface DownloadFileResponse extends DownloadFileStartResponse {
  /**
   * Indicates whether a download is completed. Resolves with the number of downloaded bytes. Rejects if the download has errors.
   */
  completed: Promise<number>;
}

export type RemoteServerContext = {
  childProcess: {
    exec(
      command: string,
      options?: {encoding?: BufferEncoding} & ExecOptions,
    ): Promise<ExecOut<string>>;
  };
  fs: {
    constants: typeof fsConstants;
    access(path: string, mode?: number): Promise<void>;
    pathExists(path: string, mode?: number): Promise<boolean>;
    unlink(path: string): Promise<void>;
    mkdir(
      path: string,
      options: {recursive: true} & MkdirOptions,
    ): Promise<string | undefined>;
    mkdir(
      path: string,
      options?: {recursive?: false} & MkdirOptions,
    ): Promise<void>;
    rm(path: string, options?: RmOptions): Promise<void>;
    copyFile(src: string, dest: string, flags?: number): Promise<void>;
    stat(path: string): Promise<FSStatsLike>;
    readlink(path: string): Promise<string>;
    readFile(
      path: string,
      options?: {encoding?: BufferEncoding},
    ): Promise<string>;
    readFileBinary(path: string): Promise<Uint8Array>; // No Buffer, which is not a browser type
    writeFile(
      path: string,
      contents: string,
      options?: {encoding?: BufferEncoding},
    ): Promise<void>;
    writeFileBinary(path: string, contents: Uint8Array): Promise<void>;
  };
  downloadFile(
    url: string,
    dest: string,
    options?: DownloadFileStartOptions & {
      onProgressUpdate?: (progressUpdate: DownloadFileUpdate) => void;
    },
  ): Promise<DownloadFileResponse>;
};

/**
 * This interface exposes all global methods for which an implementation will be provided by Flipper itself
 */
export interface FlipperLib {
  isFB: boolean;
  logger: Logger;
  enableMenuEntries(menuEntries: NormalizedMenuEntry[]): void;
  createPaste(input: string): Promise<string | undefined>;
  GK(gatekeeper: string): boolean;
  selectPlugin(
    device: Device,
    client: RealFlipperClient | null,
    pluginId: string,
    deeplink: unknown,
  ): void;
  writeTextToClipboard(text: string): void;
  openLink(url: string): void;
  showNotification(pluginKey: string, notification: Notification): void;
  DetailsSidebarImplementation?(
    props: DetailSidebarProps,
  ): React.ReactElement | null;
  /**
   * @returns
   * Imported file data.
   * If user cancelled a file selection - undefined.
   */
  importFile(options?: {
    /**
     * Default directory to start the file selection from
     */
    defaultPath?: string;
    /**
     * List of allowed file extensions
     */
    extensions?: string[];
    /**
     * Open file dialog title
     */
    title?: string;
    /**
     * File encoding
     */
    encoding?: FileEncoding;
    /**
     * Allow selection of multiple files
     */
    multi?: false;
  }): Promise<FileDescriptor | undefined>;
  importFile(options?: {
    defaultPath?: string;
    extensions?: string[];
    title?: string;
    encoding?: FileEncoding;
    multi: true;
  }): Promise<FileDescriptor[] | undefined>;

  /**
   * @returns
   * An exported file path (if available) or a file name.
   * If user cancelled a file selection - undefined.
   */
  exportFile(
    /**
     * New file data
     */
    data: string,
    options?: {
      /**
       * A file path suggestion for a new file.
       * A dialog to save file will use it as a starting point.
       * Either a complete path to the newly created file, a path to a directory containing the file, or the file name.
       */
      defaultPath?: string;
      /**
       * File encoding
       */
      encoding?: FileEncoding;
    },
  ): Promise<string | undefined>;
  paths: {
    appPath: string;
    homePath: string;
    staticPath: string;
    tempPath: string;
  };
  environmentInfo: {
    os: EnvironmentInfo['os'];
  };
  remoteServerContext: RemoteServerContext;
}

export let flipperLibInstance: FlipperLib | undefined;

export function tryGetFlipperLibImplementation(): FlipperLib | undefined {
  return flipperLibInstance;
}

export function getFlipperLib(): FlipperLib {
  if (!flipperLibInstance) {
    throw new Error('Flipper lib not instantiated');
  }
  return flipperLibInstance;
}

export function setFlipperLibImplementation(impl: FlipperLib | undefined) {
  flipperLibInstance = impl;
}
