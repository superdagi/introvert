<template>
  <div class="min-h-screen bg-gray-50">
    <header class="site-header">
      <nav class="container mx-auto px-4">
        <div class="flex items-center justify-between h-16">
          <NuxtLink to="/" class="text-xl font-bold text-gray-800">
            Introversjon
          </NuxtLink>
        </div>
      </nav>
    </header>

    <main class="main-content">
      <slot />
    </main>
  </div>
</template>

<style>
/* Global NuxtLink hover prevention */
a {
  text-decoration: none !important;
  transition: none !important;
}

a:hover {
  text-decoration: none !important;
  color: inherit !important;
  transform: none !important;
  opacity: 1 !important;
}

/* Remove any Tailwind hover classes at runtime */
.hover\\:text-blue-600:hover,
.hover\\:text-yellow-500:hover,
.hover\\:text-gray-600:hover,
.hover\\:text-gray-700:hover,
.hover\\:text-gray-800:hover,
.hover\\:text-gray-900:hover {
  color: inherit !important;
}

.hover\\:scale-105:hover,
.hover\\:scale-110:hover {
  transform: none !important;
}

.transition-colors,
.transition-all,
.transition-transform {
  transition: none !important;
}
</style>

<style scoped>
.site-header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  background-color: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border-bottom: 1px solid #e5e7eb;
  z-index: 9999;
}

.main-content {
  margin-top: 64px; /* Height of header */
}

/* Ensure no CSS conflicts */
* {
  box-sizing: border-box;
}
</style>
