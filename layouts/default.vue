<template>
  <div class="min-h-screen bg-gray-50">
    <header class="site-header">
      <nav class="container mx-auto px-4">
        <div class="flex items-center justify-between h-16">
          <NuxtLink to="/" class="text-xl font-bold text-gray-800 hover:text-blue-600 transition-colors">
            Articles App
          </NuxtLink>
          
          <div class="flex items-center space-x-6">
            <NuxtLink 
              to="/" 
              class="text-gray-600 hover:text-blue-600 transition-colors font-medium"
            >
              Home
            </NuxtLink>
            <div class="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded">
              🌐 EN/NO
            </div>
          </div>
        </div>
      </nav>
    </header>
    
    <main class="main-content">
      <slot />
    </main>
    
    <footer class="bg-white border-t mt-12">
      <div class="container mx-auto px-4 py-8 text-center text-gray-600">
        <p>&copy; 2026 Articles App. All rights reserved.</p>
      </div>
    </footer>
  </div>
</template>

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