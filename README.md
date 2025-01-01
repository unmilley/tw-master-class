# 🍪 Tailwind master class

Master class - this class is used exclusively during the _dev_ stage to define the boundaries of the elements.

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![License][license-src]][license-href]

## Install

Install package:

```bash
# yarn
yarn add -D @unmilley/tw-master-class
# npm
npm install -D @unmilley/tw-master-class
# pnpm
pnpm install -D @unmilley/tw-master-class
```

### Reminder:

> NODE_ENV == "production" => The classes don't work

## Usage

```ts
/* tailwind.config.ts */
import type { Config } from "tailwindcss";
import { masterClass, type MasterClassConfig } from "@unmilley/tw-master-class";

export default <Config>{
  plugins: [masterClass],
  // optional
  masterClass: <MasterClassConfig>{
    name: "DEBUG",
    color: "lightgreen",
  },
};
```

```html
<!-- example.html -->
<section class="text-gray-600 body-font">
  <div class="container px-5 py-24 mx-auto">
    <div class="flex flex-col text-center w-full mb-12 DEBUG DEBUG3">
      <h1
        class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900"
      >
        Master Cleanse Reliac Heirloom
      </h1>
      <p class="lg:w-2/3 mx-auto leading-relaxed text-base">
        Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
        gentrify, subway tile poke farm-to-table. Franzen you probably haven't
        heard of them man bun deep.
      </p>
    </div>
  </div>
</section>
```

## Development

<details>

<summary>local development</summary>

- Clone this repository
- Install latest LTS version of [Node.js](https://nodejs.org/en/)
- Enable [Corepack](https://github.com/nodejs/corepack) using `corepack enable`
- Install dependencies using `pnpm install`
- Run interactive tests using `pnpm dev`

</details>

## License

[MIT][license-href]. Made with 💛

[npm-version-src]: https://img.shields.io/npm/v/@unmilley/tw-master-class?style=flat&colorA=18181B&colorB=fbd38d
[npm-version-href]: https://npmjs.com/package/@unmilley/tw-master-class
[npm-downloads-src]: https://img.shields.io/npm/dm/@unmilley/tw-master-class?style=flat&colorA=18181B&colorB=fbd38d
[npm-downloads-href]: https://npmjs.com/package/@unmilley/tw-master-class
[license-src]: https://img.shields.io/github/license/unmilley/tw-master-class.svg?style=flat&colorA=18181B&colorB=fbd38d
[license-href]: https://github.com/unmilley/tw-master-class/blob/main/LICENSE
