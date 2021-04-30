/*
 * Copyright 2021 New Relic Corporation. All rights reserved.
 * SPDX-License-Identifier: Apache-2.0
 */

'use strict'

module.exports = [{
    type: 'web-framework',
    moduleName: 'next/link',
    onRequire: require('./lib/instrumentation/next/next-server')
}]
