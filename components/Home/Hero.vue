<template>
  <section class="hero" :data-engine="site.key">
    <div class="sheet marks" aria-hidden="true" />
    
    <div class="copy">
      <NuxtLink class="pill" to="/docs/release-notes">
        <span class="pillTag">Mirai</span>
        佛系更新
        <IconArrowRight :size="14" aria-hidden="true" />
      </NuxtLink>
      
      <h1 class="title">
        老李游记 <span class="engine">Mirai</span> Studio
      </h1>
      
      <p class="lead">{{ site.lead }}</p>
      
      <div class="actions">
        <!-- 使用独特的类名，防止全局冲突 -->
        <NuxtLink to="/docs" class="hero-btn hero-btn-primary">
          <IconBook :size="20" aria-hidden="true" />
          文档
        </NuxtLink>

        <NuxtLink to="/blog/" class="hero-btn hero-btn-secondary">
          <IconBrandBlogger :size="20" aria-hidden="true" />
          Blog
        </NuxtLink>

        <a class="star" href="https://mirai.st/">
          <span class="starLabel">
            <IconBrandGithub :size="16" aria-hidden="true" />
            xxx
            <!-- 使用安全的 sr-only 类名 -->
            <span class="sr-only"> the {{ site.engine }} template on GitHub</span>
          </span>
          <span v-if="stars !== undefined" class="starCount">
            {{ compactCount(stars) }}
            <span class="sr-only"> {{ stars === 1 ? 'star' : 'stars' }}</span>
          </span>
        </a>
      </div>

      <div class="install">
        <!-- <InstallLine /> -->
      </div>

      <div v-if="$slots.badge || badge" class="badge">
        <slot name="badge">{{ badge }}</slot>
      </div>
    </div>

    <div class="visual">
      <HomeDocsWindow />
    </div>
  </section>
</template>

<script setup lang="ts">
import { IconArrowRight, IconBook, IconBrandBlogger, IconBrandGithub } from '@tabler/icons-vue';
import { site } from '~/config/site';
import HomeDocsWindow from './DocsWindow.vue';

function compactCount(value: number): string {
  if (value >= 1_000_000) {
    return `${(Math.floor(value / 100_000) / 10).toFixed(1).replace(/\.0$/, '')}M`;
  }
  return value >= 1000 ? `${Math.floor(value / 1000)}k` : String(value);
}

defineProps<{
  badge?: any;
  stars?: number;
}>();
</script>

<!-- ✅ 必须加 scoped，防止污染 Header 和其他组件！ -->
<style scoped>
.hero {
  position: relative;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
  gap: 2rem;
  min-height: min(45rem, calc(100svh - 4rem));
  padding: 5.5rem 5.25rem 5rem;
  background: radial-gradient(
    var(--light, ellipse 38% 56% at 72% 46%),
    color-mix(in srgb, var(--site-glow, #3b82f6) 42%, transparent),
    transparent 72%
  );
}

/* 引擎特定颜色 */
.hero[data-engine='nextra'] { --engine-from: #6b21a8; --engine-to: #7e22ce; }
.hero[data-engine='fumadocs'] { --engine-from: #c2410c; --engine-to: #be185d; }

/* Dark mode 覆盖 */
:global(html.dark) .hero { --site-glow: #1d4ed8; }
:global(html.dark) .hero[data-engine='nextra'] { --engine-from: #a78bfa; --engine-to: #f472b6; }
:global(html.dark) .hero[data-engine='fumadocs'] { --engine-from: #fb923c; --engine-to: #f472b6; }

@media (max-width: 1024px) {
  .hero {
    --light: ellipse 64% 26% at 50% 76%;
    flex-direction: column;
    min-height: 0;
    padding: 4rem 3.25rem 3.5rem;
  }
}
@media (max-width: 768px) {
  .hero { padding: 2.75rem 1.75rem 2.5rem; }
}

.sheet {
  position: absolute;
  inset: 2.25rem 3rem 1.75rem;
  border: 1px solid var(--site-rule, #e2e8f0);
  pointer-events: none;
}
@media (max-width: 1024px) { .sheet { inset: 1.5rem 1.75rem 1.25rem; } }
@media (max-width: 768px) { .sheet { inset: 1rem 1rem 0.875rem; } }

.marks {
  --marks-gap: 0px;
  position: relative;
}
.marks::before {
  --stroke: linear-gradient(var(--site-mark, #cbd5e1), var(--site-mark, #cbd5e1));
  position: absolute;
  inset: calc(-0.5625rem - var(--marks-gap));
  background:
    var(--stroke) left 0 top 0.5rem / 1.0625rem 1px no-repeat,
    var(--stroke) left 0.5rem top 0 / 1px 1.0625rem no-repeat,
    var(--stroke) right 0 top 0.5rem / 1.0625rem 1px no-repeat,
    var(--stroke) right 0.5rem top 0 / 1px 1.0625rem no-repeat,
    var(--stroke) left 0 bottom 0.5rem / 1.0625rem 1px no-repeat,
    var(--stroke) left 0.5rem bottom 0 / 1px 1.0625rem no-repeat,
    var(--stroke) right 0 bottom 0.5rem / 1.0625rem 1px no-repeat,
    var(--stroke) right 0.5rem bottom 0 / 1px 1.0625rem no-repeat;
  content: '';
  pointer-events: none;
}

.copy {
  flex: 1 1 50%;
  position: relative;
  z-index: 1;
  min-width: 0;
}

.pill {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 1.75rem;
  padding: 0.25rem 0.75rem 0.25rem 0.25rem;
  border: 1px solid var(--site-frame, #e2e8f0);
  border-radius: 999px;
  background: var(--site-surface, #ffffff);
  color: var(--site-ink, #0f172a);
  font-size: 0.8125rem;
  font-weight: 500;
  line-height: 1.5;
  text-decoration: none;
  transition: border-color 150ms ease;
}
.pill:hover { border-color: var(--site-accent, #3b82f6); }
.pill svg { color: var(--site-accent, #3b82f6); }

.pillTag {
  padding: 0.125rem 0.5625rem;
  border-radius: 999px;
  background: var(--site-fill, #0f172a);
  color: #ffffff;
  font-family: ui-monospace, monospace;
  font-size: 0.75rem;
  font-weight: 700;
}

.title {
  margin: 0;
  color: var(--site-ink, #0f172a);
  font-size: clamp(2.625rem, 5.6vw, 4.5rem);
  font-weight: 600;
  line-height: 1.02;
  letter-spacing: -0.04em;
  text-wrap: balance;
}

.engine {
  background-image: linear-gradient(100deg, var(--engine-from, #3b82f6) 10%, var(--engine-to, #8b5cf6) 90%);
  background-clip: text;
  color: transparent;
}

.lead {
  max-width: 33.75rem;
  margin: 1.5rem 0 0;
  color: var(--site-text, #334155);
  font-size: 1.125rem;
  line-height: 1.6;
  text-wrap: pretty;
}

.actions {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.75rem;
  margin-top: 2rem;
}

/* ✅ 使用独特的类名，防止与全局 .button 冲突导致消失 */
.hero-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  font-weight: 600;
  border-radius: 0.5rem;
  text-decoration: none;
  transition: background-color 150ms ease, border-color 150ms ease, transform 150ms ease;
}
.hero-btn:hover { transform: translateY(-1px); }
.hero-btn:active { transform: translateY(0); }

.hero-btn-primary {
  background: var(--site-fill, #0f172a);
  color: #ffffff;
  box-shadow: 0 10px 24px -12px var(--site-fill, #0f172a);
}

.hero-btn-secondary {
  background: var(--site-surface, #ffffff);
  color: var(--site-ink, #0f172a);
  border: 1px solid var(--site-frame, #e2e8f0);
}
.hero-btn-secondary:hover { border-color: var(--site-accent, #3b82f6); }
.hero-btn-secondary svg { color: var(--site-accent, #3b82f6); }

.star {
  display: inline-flex;
  overflow: hidden;
  border: 1px solid var(--site-frame, #e2e8f0);
  border-radius: 0.375rem;
  background: var(--site-surface, #ffffff);
  color: var(--site-ink, #0f172a);
  font-size: 0.8125rem;
  line-height: 1.875rem;
  text-decoration: none;
  white-space: nowrap;
  transition: border-color 150ms ease;
}
.star:hover { border-color: var(--site-accent, #3b82f6); }

.starLabel {
  display: inline-flex;
  align-items: center;
  gap: 0.375rem;
  padding-inline: 0.625rem;
  font-weight: 600;
}
.starLabel svg { color: var(--site-accent, #3b82f6); }

.starCount {
  padding-inline: 0.625rem;
  border-left: 1px solid var(--site-frame, #e2e8f0);
  background: var(--site-tint, #dbeafe);
  font-family: ui-monospace, monospace;
  font-weight: 500;
}

.install { margin-top: 1.75rem; }
.badge { display: flex; margin-top: 1.25rem; }

.visual {
  flex: 1 1 50%;
  position: relative;
  min-width: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

/* ✅ 改名 sr-only，绝对安全，不会污染全局 .hidden */
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
}
</style>