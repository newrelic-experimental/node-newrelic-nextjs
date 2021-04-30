/*
 * Copyright 2021 New Relic Corporation. All rights reserved.
 * SPDX-License-Identifier: Apache-2.0
 */
'use strict'

const newrelic = require('newrelic')

module.exports = function onRequire(shim, NextServer, moduleName) {
    const Server = NextServer.default;
    shim.setFramework("Next.js")

    // // private async handleRequest( req: IncomingMessage, res: ServerResponse, parsedUrl?: UrlWithParsedQuery ): Promise<void> {
    shim.wrap(Server.prototype, 'handleRequest', function wrapMethod(shim, methodFn) {
        return function wrappedMethod() {
            let url = arguments && arguments[0] && arguments[0].url && arguments[0].url.replace(/.*page=/, '')
            url = url && url.replace('[', '')
            url = url && url.replace(']', '')

            const txn = newrelic.getTransaction()
            newrelic.setTransactionName(url.replace('/', ''))
            return methodFn.apply(this, arguments).then(function () {
                txn.end()
            } )
        }
    })

    // // private async handleApiRequest( req: IncomingMessage, res: ServerResponse, pathname: string, query: ParsedUrlQuery ): Promise<boolean> {
    shim.wrap(Server.prototype, 'handleApiRequest', function wrapMethod(shim, methodFn) {
        return function wrappedMethod() {

            const txn = newrelic.getTransaction()
            newrelic.setTransactionName(arguments[2].replace(/^\//, ''))
            return methodFn.apply(this, arguments).then(function () {
                txn.end()
            } )
        }
    })

    // // public async serveStatic( req: IncomingMessage, res: ServerResponse, path: string, parsedUrl?: UrlWithParsedQuery ): Promise<void>
    shim.wrap(Server.prototype, 'serveStatic', function wrapMethod(shim, methodFn) {
        return function wrappedMethod() {
            const txn = newrelic.getTransaction()
            newrelic.setTransactionName(arguments[2].replace(/^\//, ''))
            return methodFn.apply(this, arguments).then(function () {
                txn.end()
            } )
        }
    })

}
