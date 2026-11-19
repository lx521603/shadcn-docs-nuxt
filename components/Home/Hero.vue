<template>
  <section class="mirai-hero" :data-engine="site.key">
    <div class="mirai-sheet mirai-marks" aria-hidden="true" />
    
    <div class="mirai-copy">
      <NuxtLink class="mirai-pill" to="/contact">
        <span class="mirai-pill-tag">Mirai</span>
        佛系更新
        <IconArrowRight :size="14" aria-hidden="true" />
      </NuxtLink>
      
      <h1 class="mirai-title">
        老李游记 <span class="mirai-engine">Mirai</span> Studio
      </h1>
      
      <p class="mirai-lead">{{ site.lead }}</p>
      
      <div class="mirai-actions">
        <NuxtLink to="/getting-started/introduction" class="mirai-btn mirai-btn-primary">
          <IconBook :size="20" aria-hidden="true" />
          文档
        </NuxtLink>

        <NuxtLink to="/blog/" class="mirai-btn mirai-btn-secondary">
          <IconBrandBlogger :size="20" aria-hidden="true" />
          Blog
        </NuxtLink>

        <a class="mirai-star" href="/anime">
          <span class="mirai-star-label">
            <IconBrandGithub :size="16" aria-hidden="true" />
            折腾
            <span class="mirai-sr-only"> the {{ site.engine }} template on GitHub</span>
          </span>
          <span v-if="stars !== undefined" class="mirai-star-count">
            {{ compactCount(stars) }}
            <span class="mirai-sr-only"> {{ stars === 1 ? 'star' : 'stars' }}</span>
          </span>
        </a>
      </div>

      <div class="mirai-install">
        <!-- <InstallLine /> -->
      </div>

      <div v-if="$slots.badge || badge" class="mirai-badge">
        <slot name="badge">{{ badge }}</slot>
      </div>
    </div>

    <div class="mirai-visual">
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

<!-- ✅ 注意：这里没有 scoped！使用 mirai- 前缀避免污染 -->
<style>
/* Light 模式 */
.mirai-hero {
  --mirai-ink: #0f172a;
  --mirai-text: #334155;
  --mirai-accent: #3b82f6;
  --mirai-frame: #e2e8f0;
  --mirai-surface: #ffffff;
  --mirai-fill: #0f172a;
  --mirai-glow: #3b82f6;
  --mirai-mark: #cbd5e1;
  --mirai-tint: #dbeafe;
  --mirai-rule: #e2e8f0;
  --mirai-engine-from: #3b82f6;
  --mirai-engine-to: #8b5cf6;
  --mirai-title-max: 4.5rem;

  position: relative;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
  gap: 2rem;
  min-height: min(45rem, calc(100svh - 4rem));
  padding: 5.5rem 5.25rem 5rem;
  background: radial-gradient(
    ellipse 38% 56% at 72% 46%,
    color-mix(in srgb, var(--mirai-glow) 42%, transparent),
    transparent 72%
  );
}

/* ✅ Dark 模式 - 直接覆盖变量 */
html.dark .mirai-hero,
html.dark-mode .mirai-hero,
html[data-theme='dark'] .mirai-hero,
html[data-color-mode='dark'] .mirai-hero,
html[data-mantine-color-scheme='dark'] .mirai-hero {
  --mirai-ink: #f8fafc;
  --mirai-text: #cbd5e1;
  --mirai-accent: #60a5fa;
  --mirai-frame: #334155;
  --mirai-surface: #1e293b;
  --mirai-fill: #f8fafc;
  --mirai-glow: #1d4ed8;
  --mirai-mark: #475569;
  --mirai-tint: #1e3a8a;
  --mirai-rule: #334155;
}

/* 引擎颜色 - Light */
.mirai-hero[data-engine='nextra'] {
  --mirai-engine-from: #6b21a8;
  --mirai-engine-to: #7e22ce;
}
.mirai-hero[data-engine='fumadocs'] {
  --mirai-engine-from: #c2410c;
  --mirai-engine-to: #be185d;
}

/* 引擎颜色 - Dark */
html.dark .mirai-hero[data-engine='nextra'],
html.dark-mode .mirai-hero[data-engine='nextra'],
html[data-theme='dark'] .mirai-hero[data-engine='nextra'],
html[data-color-mode='dark'] .mirai-hero[data-engine='nextra'],
html[data-mantine-color-scheme='dark'] .mirai-hero[data-engine='nextra'] {
  --mirai-engine-from: #a78bfa;
  --mirai-engine-to: #f472b6;
}

html.dark .mirai-hero[data-engine='fumadocs'],
html.dark-mode .mirai-hero[data-engine='fumadocs'],
html[data-theme='dark'] .mirai-hero[data-engine='fumadocs'],
html[data-color-mode='dark'] .mirai-hero[data-engine='fumadocs'],
html[data-mantine-color-scheme='dark'] .mirai-hero[data-engine='fumadocs'] {
  --mirai-engine-from: #fb923c;
  --mirai-engine-to: #f472b6;
}

@media (max-width: 1024px) {
  .mirai-hero {
    flex-direction: column;
    min-height: 0;
    padding: 4rem 3.25rem 3.5rem;
  }
}
@media (max-width: 768px) {
  .mirai-hero { padding: 2.75rem 1.75rem 2.5rem; }
}

.mirai-sheet {
  position: absolute;
  inset: 2.25rem 3rem 1.75rem;
  border: 1px solid var(--mirai-rule);
  pointer-events: none;
}
@media (max-width: 1024px) { .mirai-sheet { inset: 1.5rem 1.75rem 1.25rem; } }
@media (max-width: 768px) { .mirai-sheet { inset: 1rem 1rem 0.875rem; } }

.mirai-marks {
  --mirai-marks-gap: 0px;
  position: relative;
}
.mirai-marks::before {
  --mirai-stroke: linear-gradient(var(--mirai-mark), var(--mirai-mark));
  position: absolute;
  inset: calc(-0.5625rem - var(--mirai-marks-gap));
  background:
    var(--mirai-stroke) left 0 top 0.5rem / 1.0625rem 1px no-repeat,
    var(--mirai-stroke) left 0.5rem top 0 / 1px 1.0625rem no-repeat,
    var(--mirai-stroke) right 0 top 0.5rem / 1.0625rem 1px no-repeat,
    var(--mirai-stroke) right 0.5rem top 0 / 1px 1.0625rem no-repeat,
    var(--mirai-stroke) left 0 bottom 0.5rem / 1.0625rem 1px no-repeat,
    var(--mirai-stroke) left 0.5rem bottom 0 / 1px 1.0625rem no-repeat,
    var(--mirai-stroke) right 0 bottom 0.5rem / 1.0625rem 1px no-repeat,
    var(--mirai-stroke) right 0.5rem bottom 0 / 1px 1.0625rem no-repeat;
  content: '';
  pointer-events: none;
}

.mirai-copy {
  flex: 1 1 50%;
  position: relative;
  z-index: 1;
  min-width: 0;
}

.mirai-pill {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 1.75rem;
  padding: 0.25rem 0.75rem 0.25rem 0.25rem;
  border: 1px solid var(--mirai-frame);
  border-radius: 999px;
  background: var(--mirai-surface);
  color: var(--mirai-ink);
  font-size: 0.8125rem;
  font-weight: 500;
  line-height: 1.5;
  text-decoration: none;
  transition: border-color 150ms ease;
}
.mirai-pill:hover { border-color: var(--mirai-accent); }
.mirai-pill svg { color: var(--mirai-accent); }

.mirai-pill-tag {
  padding: 0.125rem 0.5625rem;
  border-radius: 999px;
  background: var(--mirai-fill);
  color: #ffffff;
  font-family: ui-monospace, monospace;
  font-size: 0.75rem;
  font-weight: 700;
}

/* Dark 模式下 pill tag 文字反转 */
html.dark .mirai-pill-tag,
html.dark-mode .mirai-pill-tag,
html[data-theme='dark'] .mirai-pill-tag,
html[data-color-mode='dark'] .mirai-pill-tag,
html[data-mantine-color-scheme='dark'] .mirai-pill-tag {
  color: #0f172a;
}

.mirai-title {
  margin: 0;
  color: var(--mirai-ink);
  font-size: clamp(2.625rem, 5.6vw, var(--mirai-title-max));
  font-weight: 600;
  line-height: 1.02;
  letter-spacing: -0.04em;
  text-wrap: balance;
}

.mirai-engine {
  background-image: linear-gradient(100deg, var(--mirai-engine-from) 10%, var(--mirai-engine-to) 90%);
  background-clip: text;
  color: transparent;
}

.mirai-lead {
  max-width: 33.75rem;
  margin: 1.5rem 0 0;
  color: var(--mirai-text);
  font-size: 1.125rem;
  line-height: 1.6;
  text-wrap: pretty;
}

.mirai-actions {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.75rem;
  margin-top: 2rem;
}

.mirai-btn {
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
.mirai-btn:hover { transform: translateY(-1px); }
.mirai-btn:active { transform: translateY(0); }

.mirai-btn-primary {
  background: var(--mirai-fill);
  color: #ffffff;
  box-shadow: 0 10px 24px -12px var(--mirai-fill);
}

/* Dark 模式下主按钮文字反转 */
html.dark .mirai-btn-primary,
html.dark-mode .mirai-btn-primary,
html[data-theme='dark'] .mirai-btn-primary,
html[data-color-mode='dark'] .mirai-btn-primary,
html[data-mantine-color-scheme='dark'] .mirai-btn-primary {
  color: #0f172a;
}

.mirai-btn-secondary {
  background: var(--mirai-surface);
  color: var(--mirai-ink);
  border: 1px solid var(--mirai-frame);
}
.mirai-btn-secondary:hover { border-color: var(--mirai-accent); }
.mirai-btn-secondary svg { color: var(--mirai-accent); }

.mirai-star {
  display: inline-flex;
  overflow: hidden;
  border: 1px solid var(--mirai-frame);
  border-radius: 0.375rem;
  background: var(--mirai-surface);
  color: var(--mirai-ink);
  font-size: 0.8125rem;
  line-height: 1.875rem;
  text-decoration: none;
  white-space: nowrap;
  transition: border-color 150ms ease;
}
.mirai-star:hover { border-color: var(--mirai-accent); }

.mirai-star-label {
  display: inline-flex;
  align-items: center;
  gap: 0.375rem;
  padding-inline: 0.625rem;
  font-weight: 600;
}
.mirai-star-label svg { color: var(--mirai-accent); }

.mirai-star-count {
  padding-inline: 0.625rem;
  border-left: 1px solid var(--mirai-frame);
  background: var(--mirai-tint);
  font-family: ui-monospace, monospace;
  font-weight: 500;
}

.mirai-install { margin-top: 1.75rem; }
.mirai-badge { display: flex; margin-top: 1.25rem; }

.mirai-visual {
  flex: 1 1 50%;
  position: relative;
  min-width: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

.mirai-sr-only {
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