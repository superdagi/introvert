// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  compatibilityDate: "2026-03-17",
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxt/content",
    "@nuxt/image",
    "@nuxtjs/seo",
    "nuxt-icon",
  ],

  // Content Configuration
  content: {
    highlight: {
      theme: "github-light",
    },
    markdown: {
      toc: {
        depth: 3,
        searchDepth: 3,
      },
    },
  },

  // Image Configuration
  image: {
    quality: 85,
    format: ["webp"],
    screens: {
      xs: 320,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      xxl: 1536,
    },
  },

  // CSS Configuration
  css: ["~/assets/css/main.css"],

  // TailwindCSS Configuration
  tailwindcss: {
    viewer: false,
    exposeConfig: false,
  },

  // Runtime Config
  runtimeConfig: {
    // Private keys (only available on server-side)
    apiSecret: "123",
    // Public keys (exposed to client-side)
    public: {
      gtag: process.env.GTAG_ID,
      siteUrl: process.env.SITE_URL || "https://your-domain.com",
    },
  },

  // App Configuration
  app: {
    head: {
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
      title: "Introvert",
      meta: [
        {
          name: "description",
          content:
            "Din ultimate guide til introversjon. Artikler, tester og ressurser for introverte.",
        },
        { property: "og:title", content: "Introvert" },
        {
          property: "og:description",
          content:
            "Din ultimate guide til introversjon. Artikler, tester og ressurser for introverte.",
        },
        { property: "og:type", content: "website" },
      ],
      htmlAttrs: {
        lang: "no",
      },
    },
  },

  // Build Configuration
  build: {
    transpile: ["gsap"],
  },
});
