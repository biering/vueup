# Vue Popup

> Simple, lightweight and elegant global notification popup for Vue.js

## Installation

```
npm install --save vue-popup
```

```javascript
import Vue from 'vue'
import VuePopup from 'vue-popup'

Vue.use(VuePopup)
```

## Usage

Add the `<notification-popup>` template to one point in your application:

```html
<template>
  <div class="...">
    <notification-popup></notification-popup>
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

## API

```
this.$popup(String | Object)
```
