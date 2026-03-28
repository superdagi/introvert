<template>
  <div class="container mx-auto px-4 py-8">
    <header class="text-center mb-12">
      <h1 class="text-4xl font-bold text-gray-800 mb-4">
        {{ selectedLanguage === "no" ? "Artikler" : "Articles" }}
      </h1>
      <p class="text-lg text-gray-600 mb-6">
        {{
          selectedLanguage === "no"
            ? "Utforsk vår samling av artikler"
            : "Explore our collection of articles"
        }}
      </p>

      <!-- Language Switcher -->
      <div v-if="false" class="flex justify-center gap-4 mb-8">
        <button
          @click="selectedLanguage = 'en'"
          :class="[
            'px-4 py-2 rounded-lg font-medium transition-colors',
            selectedLanguage === 'en'
              ? 'bg-blue-600 text-white'
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300',
          ]"
        >
          English
        </button>
        <button
          @click="selectedLanguage = 'no'"
          :class="[
            'px-4 py-2 rounded-lg font-medium transition-colors',
            selectedLanguage === 'no'
              ? 'bg-blue-600 text-white'
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300',
          ]"
        >
          Norsk
        </button>
      </div>
    </header>

    <div class="max-w-2xl mx-auto">
      <div class="grid grid-cols-1 gap-7">
        <ArticleCard
          v-for="article in filteredArticles"
          :key="article._path"
          :article="article"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
const selectedLanguage = ref("no");

const { data: allArticles } = await useAsyncData("all-articles", () =>
  queryContent("/articles").sort({ date: -1 }).find(),
);

const filteredArticles = computed(() => {
  if (!allArticles.value) return [];

  return allArticles.value.filter((article) => {
    if (selectedLanguage.value === "no") {
      return article.language === "no";
    }
    return !article.language || article.language === "en";
  });
});

useSeoMeta({
  title: selectedLanguage.value === "no" ? "Artikler" : "Articles",
  description:
    selectedLanguage.value === "no"
      ? "Utforsk vår samling av artikler"
      : "Browse our collection of articles",
});
</script>
