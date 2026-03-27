<template>
  <div >
    <div v-if="!tocLinks || tocLinks.length === 0" class="text-gray-500 text-sm italic text-center py-4">
      {{ article?.language === 'no' ? 'Ingen overskrifter funnet' : 'No headings found' }}
    </div>
    <nav v-else>
      <a
        v-for="link in tocLinks"
        :key="link.id"
        :href="`#${link.id}`"
        class="group flex items-start py-2 px-3 rounded-lg text-sm text-gray-600 hover:text-blue-700 hover:bg-blue-50 transition-all duration-200 border-l-3 border-transparent hover:border-blue-400 no-underline"
      >
        <span class="pl-4 font-medium group-hover:font-semibold transition-all">{{ link.text }}</span>
      </a>
    </nav>
  </div>
</template>

<script setup lang="ts">
interface Props {
  article: any
}

const props = defineProps<Props>()

// Get TOC links from article body
const tocLinks = computed(() => {
  return props.article?.body?.toc?.links || []
})
</script>