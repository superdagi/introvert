<template>
  <div class="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
    <div class="p-6">
 
      <h2 class="text-xl font-semibold text-gray-800 mb-3">
        <NuxtLink 
          :to="article._path" 
          class="hover:text-blue-600 transition-colors"
        >
          {{ article.title }}
        </NuxtLink>
      </h2>
      
      <p class="text-gray-600 mb-4" v-if="article.description">
        {{ article.description }}
      </p>
      
      <div class="flex items-center justify-between text-sm text-gray-500">
        <time :datetime="article.date" v-if="article.date">
          {{ formatDate(article.date) }}
        </time>
        
        <NuxtLink 
          :to="article._path" 
          class="text-blue-600 hover:text-blue-800 font-medium"
        >
          {{ article.language === 'no' ? 'Les mer →' : 'Read more →' }}
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Article {
  _path: string
  title: string
  description?: string
  date?: string
}

interface Props {
  article: Article
}

const props = defineProps<Props>()

const formatDate = (date: string) => {
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}
</script>