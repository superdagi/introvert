---
title: 'Getting Started with Vue 3'
description: 'Learn the basics of Vue 3 and its new features'
date: '2026-03-15'
---

# Getting Started with Vue 3

Vue 3 brings many exciting new features and improvements over Vue 2. In this article, we'll explore the key changes and how to get started.

## Key Features

- **Composition API**: A new way to organize component logic
- **Better TypeScript support**: Improved types and better integration
- **Performance improvements**: Faster rendering and smaller bundle size

## Example

Here's a simple Vue 3 component using the Composition API:

```vue
<template>
  <div>
    <h1>{{ message }}</h1>
    <button @click="updateMessage">Update</button>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const message = ref('Hello Vue 3!')

const updateMessage = () => {
  message.value = 'Hello from Composition API!'
}
</script>
```

This example shows how clean and concise Vue 3 components can be with the new setup syntax.