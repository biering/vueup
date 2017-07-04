# Vue Popup

> Simple and elegant global notification popup for Vue.js

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

On one point in your app:

```html
<template>
  <div class="...">
    <notification-popup></notification-popup>
  </div>
</template>
```

In your Vue component:

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
