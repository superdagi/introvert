<template>
  <article class="pt-8 border-t border-gray-200">
    <div :class="showImage ? 'flex items-start space-x-4' : 'block'">
      <!-- Article Content -->
      <div class="flex-grow min-w-0">
        <!-- Article Title and Content -->
        <div class="mb-3">
          <NuxtLink :to="article._path">
            <h2 class="text-xl font-bold text-gray-900 mb-2">
              {{ article.title }}
            </h2>
            <p
              v-if="article.description"
              class="text-gray-600 text-base line-clamp-2 mb-3"
            >
              {{ article.description }}
            </p>
          </NuxtLink>
        </div>
      </div>

      <!-- Article Image -->
      <div v-if="showImage" class="flex-shrink-0">
        <NuxtLink :to="article._path" class="block">
          <div
            class="bg-gray-200 rounded overflow-hidden"
            style="width: 132px; height: 100px"
          >
            <NuxtImg
              src="https://goodmenproject.com/wp-content/uploads/2021/12/ben-white-qYanN54gIrI-unsplash-768x506.jpg.webp"
              :alt="article.title"
              class="w-full h-full object-cover"
            />
          </div>
        </NuxtLink>
      </div>
    </div>

    <!-- Article Meta and Actions - Now at bottom -->
    <div class="flex items-center justify-between mt-4">
      <!-- Tags and Date (switched order) -->
      <div class="flex items-center space-x-3 text-sm">
        <time
          :datetime="article.date"
          v-if="article.date"
          class="text-gray-500"
        >
          {{ formatDate(article.date) }}
        </time>
        <span v-if="!article.date" class="text-gray-500">Recent</span>
        <span class="text-gray-500">{{ readTime }}</span>
      </div>

      <!-- Only Bookmark Button -->
      <div v-if="false" class="flex items-center">
        <button class="text-gray-400" title="Save">
          <svg
            class="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
            />
          </svg>
        </button>
      </div>
    </div>
  </article>
</template>

<script setup lang="ts">
interface Article {
  _path: string;
  title: string;
  description?: string;
  date?: string;
  language?: string;
  category?: string;
  readingTime?: string;
  image?: string; // Add image support
}

interface Props {
  article: Article;
  showImage?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  showImage: true,
});

const formatDate = (date: string) => {
  if (!date) return "";
  return new Date(date).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
  });
};

// Calculate read time (assuming 200 words per minute average reading speed)
const readTime = computed(() => {
  if (props.article.readingTime) {
    return props.article.readingTime;
  }

  // Estimate based on content length if available
  const content = props.article.description || "";
  const words = content.split(" ").length;
  const minutes = Math.ceil(words / 160);

  return minutes <= 1 ? "1 min" : `${minutes} min`;
});
</script>

<style scoped>
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
