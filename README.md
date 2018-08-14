# svelte custom element xapi with typescript support
## Use this as a template for Custom Element enabled wih xapi, bundled by rollup using Svelte compile to native components with typescript support.

This is a project template for Custom Elements xapi-enabled apps. It lives at https://github.com/garajo/template-svelte-xapi.

To create a new project based on this template using [degit](https://github.com/Rich-Harris/degit):

```bash
npm install -g degit # you only need to do this once

degit garajo/template-svelte-xapi custom-element-app
cd custom-element-app
```

*Note that you will need to have [Node.js](https://nodejs.org) installed.*


## Get started

Install the dependencies...

```bash
cd custom-element-app
npm install
```

...then start [Rollup](https://rollupjs.org):

```bash
npm run dev
```

Navigate to [localhost:5000](http://localhost:5000). You should see your app running. Edit a component file in `src`, save it, and reload the page to see your changes.


## Deploying to the web

### With [now](https://zeit.co/now)

Install `now` if you haven't already:

```bash
npm install -g now
```

Then, from within your project folder:

```bash
now
```

As an alternative, use the [Now desktop client](https://zeit.co/download) and simply drag the unzipped project folder to the taskbar icon.

### With [surge](https://surge.sh/)

Install `surge` if you haven't already:

```bash
npm install -g surge
```

Then, from within your project folder:

```bash
npm run build
surge public
```
