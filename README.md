# VastJS -  @vastjs/cyber-atoms-vue



### Install dependencies manually

First, install the `@vastjs/cyber-atoms-vue` components like so:

```sh
npm install @vastjs/cyber-atoms-vue
```

#### CSS 
`@/node_modules/@vastjs/cyber-atoms-vue/dist/style.css`

### VueJS

```js
import CyberAtomsVue from '@vastjs/cyber-atoms-vue';

app.use(CyberAtomsVue, {
})
```

### For Nuxt 

__`./plugins/cyber-atoms.ts`__

```js
import CyberAtomsVue from '@vastjs/cyber-atoms-vue';

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.vueApp.use(CyberAtomsVue, {
    })
})
```

### Build locally

```sh
npm run build
```

### Run Storybook 

```sh
npm run storybook
```

### Deploy 

```sh
npm login
npm publish --access=public
```

Story book url: http://cyber-lib-sb.s3-website-us-east-1.amazonaws.com/


<img src="https://avatars.githubusercontent.com/u/112704643?s=400&u=6a2c0a7021e8925debe1522ca6c1715df6ef147a&v=4" width="60" title="hover text">


## Contributing

This package is maintained by VastJS's Core team. You're welcome to submit an issue or PR!