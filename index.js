/*
 * Copyright 2021 New Relic Corporation. All rights reserved.
 * SPDX-License-Identifier: Apache-2.0
 */

'use strict'

const newrelic = require('newrelic')
newrelic.instrumentWebframework("../next-server/server/next-server", require('./lib/instrumentation/next/next-server'))
