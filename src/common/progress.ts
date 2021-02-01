/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import {ProgressType} from "coc.nvim";

export type NgccProgress = {
  done: false,
  configFilePath: string,
  message: string,
}|{
  done: true,
  configFilePath: string,
  success: boolean,
  message?: string
};
export const NgccProgressToken = 'ngcc';
export const NgccProgressType = new ProgressType<NgccProgress>();
