/*
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @fileoverview Groups API namespace data generated by the external flow for Workbox.
 */

const fs = require('fs');
const path = require('path');

const workboxModules = fs
  .readdirSync(path.join(__dirname, '../en/docs/workbox/modules'), {
    withFileTypes: true,
  })
  .filter(d => d.isDirectory())
  .map(d => d.name);

module.exports = () => {
  if (process.env.ELEVENTY_IGNORE_EXTENSIONS) {
    return {};
  }

  const workboxTypesFile = path.join(
    __dirname,
    '../../external/data/workbox-types.json'
  );
  const groupTypes = require('../_utils/group-types.js');
  const workboxTypes = groupTypes(workboxTypesFile);

  for (const key in workboxTypes) {
    if (workboxModules.includes(key)) {
      workboxTypes[key]['reference'] = `/docs/workbox/modules/${key}/`;
    }
  }
  return workboxTypes;
};
