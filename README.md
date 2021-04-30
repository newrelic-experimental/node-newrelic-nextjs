[![New Relic Experimental header](https://github.com/newrelic/opensource-website/raw/master/src/images/categories/Experimental.png)](https://opensource.newrelic.com/oss-category/#new-relic-experimental)

# @newrelic-experimental/nextjs

New Relic transaction tracing instrumentation for Next.js

## Installation
1. Starting from the root directory of your Next.js application, the directory where your `package.json` file resides
1. [Install and configure the New Relic Node Agent](https://docs.newrelic.com/docs/agents/nodejs-agent/installation-configuration/install-nodejs-agent/)
    - NOTE: ignore the _Add `require('newrelic');` as the first line of your app's main module._ step, we'll cover that later.
2. Install the New Relic Next.js instrumentation package
    - `npm install git+https://github.com/newrelic-experimental/node-newrelic-nextjs.git` for HTTP, or
    - `npm install git+ssh://git@github.com:newrelic-experimental/node-newrelic-nextjs.git` for SSH
3. Now we install both the New Relic Node Agent and the Next.js instrumentation into Next.js which is the actual Node application by adding this line
    ```
    require('newrelic'); require('@newrelic-experimental/nextjs');
    ```
    to `node_modules/next/dist/bin/next` inserted as line 2
4. Run your application as usual.

## Support

New Relic has open-sourced this project. This project is provided AS-IS WITHOUT WARRANTY OR DEDICATED SUPPORT. Issues and contributions should be reported to the project here on GitHub.

We encourage you to bring your experiences and questions to the [Explorers Hub](https://discuss.newrelic.com) where our community members collaborate on solutions and new ideas.

## Contributing

We encourage your contributions to improve @newrelic-experimental/nextjs Keep in mind when you submit your pull request, you'll need to sign the CLA via the click-through using CLA-Assistant. You only have to sign the CLA one time per project. If you have any questions, or to execute our corporate CLA, required if your contribution is on behalf of a company, please drop us an email at opensource@newrelic.com.

**A note about vulnerabilities**

As noted in our [security policy](../../security/policy), New Relic is committed to the privacy and security of our customers and their data. We believe that providing coordinated disclosure by security researchers and engaging with the security community are important means to achieve our security goals.

If you believe you have found a security vulnerability in this project or any of New Relic's products or websites, we welcome and greatly appreciate you reporting it to New Relic through [HackerOne](https://hackerone.com/newrelic).

## License

@newrelic-experimental/nextjs is licensed under the [Apache 2.0](http://apache.org/licenses/LICENSE-2.0.txt) License.
