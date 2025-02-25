/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 */

import {State} from '../reducers';

export type SupportRequestDetails = {
  title?: string;
  whatAlreadyTried?: string;
};

export default function openSupportRequestForm(
  _state: State,
  _details?: SupportRequestDetails,
): void {
  throw new Error('Not implemented!');
}
