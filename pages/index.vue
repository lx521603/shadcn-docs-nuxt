<template>
  <!-- 
    直接渲染我们之前转换好的 HomePage 组件。
    Nuxt 4 会自动从 components/Home/HomePage.vue 导入它，无需手动 import。
  -->
  <HomePage :stats="stats" />
</template>

<script setup lang="ts">
import type { OgImageComponents } from '#og-image/components';

// 1. 获取配置 (与您 [...slug].vue 中的用法保持一致)
const config = useConfig();
const appConfig = useAppConfig();

// 2. 获取首页统计数据 
// 💡 提示：请根据您的实际业务逻辑替换这里。
// 例如，您可以使用 useFetch 从 API 获取，或者从本地 JSON 读取。
// 这里的 'mirai' 需要替换为您 config/site.ts 中定义的实际 site.key
const stats = ref({
  stars: { mirai: 1234 }, 
  downloads: 5678
});

// 3. (可选) 如果您在 content/index.md 中写了首页的 frontmatter (title, description)
// 可以取消下面这行的注释来动态获取它
// const { data: homeContent } = await useAsyncData('home-seo', () => queryContent('/').findOne())

// 4. 首页专属的 SEO 设置
const siteName = config.value.site.name || '老李游记 Mirai Studio';
const homeTitle = `首页 - ${siteName}`;
const homeDescription = config.value.site.description || '老李游记 Mirai Studio 官方首页';

useSeoMeta({
  title: homeTitle,
  ogTitle: homeTitle,
  description: homeDescription,
  ogDescription: homeDescription,
  twitterCard: 'summary_large_image',
});

// 5. OG Image (与您 [...slug].vue 保持一致)
defineOgImage(config.value.site.ogImageComponent as keyof OgImageComponents, {
  title: '首页',
  description: homeDescription,
});
</script>