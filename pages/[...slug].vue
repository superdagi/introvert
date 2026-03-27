<template>
  <div class="container mx-auto px-4 py-8">
    <div class="grid grid-cols-1 lg:grid-cols-4 gap-1 max-w-7xl mx-auto">
      <!-- Table of Contents - LEFT side -->
      
      
      <!-- Main Article Content - RIGHT side -->
      <main class="lg:col-span-3">
        <article class="prose prose-lg max-w-none">
          <ContentDoc />
        </article>
        
        <div class="mt-12">
          <NuxtLink to="/" class="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors">
            {{ backLinkText }}
          </NuxtLink>
        </div>
      </main>
      <aside class="">
        <div class="sticky top-20 space-y-6">
          <!-- Table of Contents -->
          <div class="px-4 bg-white border border-gray-200 rounded-xl p-5 shadow-lg hover:shadow-xl transition-shadow">
            <div class="flex items-center mb-4 pb-3 border-b border-gray-100">
              <h3 class="font-semibold text-gray-800 text-base">
                {{ article.language === 'no' ? 'Innholdsfortegnelse' : 'Table of Contents' }}
              </h3>
            </div>
            <TableOfContents :article="article" />
          </div>
          
          <!-- Random Articles -->
          <div class="bg-white border border-gray-200 rounded-xl p-5 shadow-lg mt-3">
            <div class="flex items-center mb-4 pb-3 border-b border-gray-100">
              <h3 class="font-semibold text-gray-800 text-base">
                {{ article.language === 'no' ? '📖 Andre artikler' : '📖 More Articles' }}
              </h3>
            </div>
            <div class="space-y-4 ">
              <div v-for="randomArticle in randomArticles" :key="randomArticle._path" class="transform scale-90 mt-3">
                <ArticleCard :article="randomArticle" />
              </div>
            </div>
          </div>
        </div>
      </aside>
    </div>
  </div>
</template>

<script setup>
const route = useRoute()
const { data: article } = await useAsyncData(`article-${route.path}`, () => 
  queryContent(route.path).findOne()
)

// Get all articles for random selection
const { data: allArticles } = await useAsyncData('all-articles', () => 
  queryContent('articles').find()
)

if (!article.value) {
  throw createError({ statusCode: 404, statusMessage: 'Article not found' })
}

const backLinkText = computed(() => {
  return article.value.language === 'no' 
    ? '← Tilbake til artikler' 
    : '← Back to Articles'
})

// Get 3 random articles excluding current one
const randomArticles = computed(() => {
  if (!allArticles.value || allArticles.value.length <= 1) return []
  
  const otherArticles = allArticles.value.filter(a => a._path !== article.value._path)
  const shuffled = [...otherArticles].sort(() => Math.random() - 0.5)
  return shuffled.slice(0, 3)
})

useSeoMeta({
  title: article.value.title,
  description: article.value.description
})
</script>