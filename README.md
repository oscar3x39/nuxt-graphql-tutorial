# install
```
npx create-nuxt-app nuxt-graphql

npm install --save-dev @nuxtjs/vuetify
npm install --save @nuxtjs/axios

npm install --save @nuxtjs/apollo
npm install --save graphql-tag

```

# nuxt.config.js
```
buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    '@nuxtjs/vuetify'
],
modules: [
    '@nuxtjs/axios',
    '@nuxtjs/apollo'
],
apollo: {
    clientConfigs: {
      default: {
        // required
        httpEndpoint: "http://localhost:5000/graphql"
      }
    }
},
```

# pages
