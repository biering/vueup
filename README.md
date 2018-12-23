# VueUp

Simple, lightweight and elegant global notification popup for Vue.js.

View the [demo](https://chryb.github.io/vueup).

[![forthebadge](http://forthebadge.com/images/badges/built-with-love.svg)](http://forthebadge.com)
[![forthebadge](http://forthebadge.com/images/badges/made-with-vue.svg)](http://forthebadge.com)
[![forthebadge](http://forthebadge.com/images/badges/uses-js.svg)](http://forthebadge.com)

---

## Install

```
npm install --save vueup
```

Somewhere in your app:

```javascript
import Vue   from 'vue'
import VueUp from 'vueup'

Vue.use(VueUp)
```


#### Nuxt.js

To use VueUp with [Nuxt.js](https://nuxtjs.org) deploy the app with the `--spa` or `--s` flag to disable server-side rendering. For more information see [nuxtjs.org/guide/commands/](https://nuxtjs.org/guide/commands/).

Otherwise, you can do the following steps:

File `plugins/vueup.js`:

```javascript
import Vue from 'vue'
import VueUp from 'vueup'

Vue.use(VueUp)
```

Then, add the file inside the plugins key of `nuxt.config.js`:

```javascript
module.exports = {
  plugins: [
    { src: '~/plugins/vueup', ssr: false }
  ]
}
```

**Note:** The key `ssr` is used to disable the server-side rendering for VueUp because it's a client side library.
For more information see [nuxtjs.org/guide/plugins/](https://nuxtjs.org/guide/plugins/).

I would recommend to add the VueUp element `<vue-up></vue-up>` under the `</nuxt>` element in the `layouts/default.vue` file.


## Usage

Add the `<vue-up>` component to one point in your application:

```html
<template>
  <div>
    <vue-up></vue-up>
  </div>
</template>
```

To trigger the notification use the `$popup` method:

```javascript
export default {
  ...
  methods: {
    notify () {
      this.$popup({ message: 'A message' })
    }
  }
}
```

You can also use a promise to execute something after the VueUp notification has ended:

```javascript
export default {
  ...
  methods: {
    notify () {
      this.$popup({ message: 'Your request is reviewed.' })
        .then(() => {
          // ... do something
        })
    }
  }
}
```

## API

```javascript
this.$popup(string | Object)

this.$popup('message')

// or

this.$popup({
    message         : 'message',
    color           : '#423452',
    backgroundColor : 'rgba(0, 0, 0, 0.4)',
    delay           : 4,
    fontSize        : 60
})
```

### Attributes

|Name|type|default|description|
|:--:|:--:|:--:|:---|
|message|string|-|The message that will be displayed in the notification|
|color|string|#ffffff|The text color of the message|
|backgroundColor|string|rgba(0, 0, 0, 0.8)|The background color of the notification|
|delay|float|3.5|How long (in seconds, e.q. 3.5 seconds) should the notification popup be displayed|
|fontSize|int|60|The font size of the notification text|

**Hint:** For the `color` and `backgroundColor` fields you can apply the color property in form of the css color property.

## License

Copyright (c) 2017 Christoph Biering, Licensed under the [MIT license](./LICENSE).
