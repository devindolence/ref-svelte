# create-svelte

Everything you need to build a Svelte project, powered by [`create-svelte`](https://github.com/sveltejs/kit/tree/master/packages/create-svelte).

## Creating a project

If you're seeing this, you've probably already done this step. Congrats!

```bash
# create a new project in the current directory
npm create svelte@latest

# create a new project in my-app
npm create svelte@latest my-app
```

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://kit.svelte.dev/docs/adapters) for your target environment.

this project is reference for other project get start.
what module need to some actions or styling guide.

### 

### 1. svelte material ui theme.
this is open source library(apache-license2)
this give some components guide or some style(scss)
[smui](https://sveltematerialui.com/)
```bash
npm install --save-dev smui-theme
npx smui-theme template src/theme
```

### 2. capacitor
Cross-platform Native Runtime for Web Apps
this exists enterprise version.
[capacitor](https://capacitorjs.com/docs)
```bash
npm install @capacitor/core @capacitor/cli
npx cap add android
npx cap add ios
```
