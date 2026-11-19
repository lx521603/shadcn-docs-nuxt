<template>
  <div class="page" :data-site-paper="site.paper">
    <div class="frame">
      <HomeHero :badge="badge" :stars="props.stats?.stars?.[site.key]" />
      <HomeLanding />
    </div>
  </div>
</template>

<script setup lang="ts">
import { site } from '~/config/site';

interface HomeStats {
  stars: Record<string, number>;
  downloads?: number;
}

const props = withDefaults(defineProps<{
  badge?: any;
  stats?: HomeStats;
}>(), {
  stats: () => ({ stars: {} })
});
</script>

<style>
/* ✅ 整个页面的背景，响应 Dark Mode */
.page {
  position: relative;
  overflow-x: clip;
  width: 100%;
  min-height: 100vh;
  /* ✅ 给 .page 本身加背景色 */
  background: #ffffff;
  color: #334155;
}

/* Dark Mode */
html.dark .page,
html.dark-mode .page,
html[data-color-mode="dark"] .page,
html[data-theme="dark"] .page {
  background: #0f172a !important;
  color: #cbd5e1 !important;
}

/* 网格背景 */
.page::before {
  content: '';
  position: absolute;
  inset: 0 0 auto;
  height: 56%;
  background:
    linear-gradient(
      to bottom,
      transparent 46%,
      rgba(255, 255, 255, 0.84) 59.5%,
      rgba(255, 255, 255, 0.5) 73%,
      rgba(255, 255, 255, 0.16) 86.5%,
      #ffffff 100%
    ),
    linear-gradient(#e2e8f0 1px, transparent 1px) center top / 3.75rem 3.75rem,
    linear-gradient(90deg, #e2e8f0 1px, transparent 1px) center top / 3.75rem 3.75rem,
    linear-gradient(#f1f5f9 1px, transparent 1px) center top / 0.75rem 0.75rem,
    linear-gradient(90deg, #f1f5f9 1px, transparent 1px) center top / 0.75rem 0.75rem;
  pointer-events: none;
  z-index: 0;
}

/* ✅ Dark Mode 网格背景 */
html.dark .page::before,
html.dark-mode .page::before,
html[data-color-mode="dark"] .page::before,
html[data-theme="dark"] .page::before {
  background:
    linear-gradient(
      to bottom,
      transparent 46%,
      rgba(15, 23, 42, 0.84) 59.5%,
      rgba(15, 23, 42, 0.5) 73%,
      rgba(15, 23, 42, 0.16) 86.5%,
      #0f172a 100%
    ),
    linear-gradient(#334155 1px, transparent 1px) center top / 3.75rem 3.75rem,
    linear-gradient(90deg, #334155 1px, transparent 1px) center top / 3.75rem 3.75rem,
    linear-gradient(#1e293b 1px, transparent 1px) center top / 0.75rem 0.75rem,
    linear-gradient(90deg, #1e293b 1px, transparent 1px) center top / 0.75rem 0.75rem;
}

.frame {
  position: relative;
  z-index: 1;
  max-width: 75rem;
  margin-inline: auto;
}

/* 给 body 也加上背景，确保滚动时也有 */
html, body {
  background: #ffffff !important;
}

</style>