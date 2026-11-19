<template>
  <div class="dw-stage" aria-hidden="true">
    <div class="dw-floor" />
    
    <div class="dw-tilt">
      <span class="dw-dim" data-axis="x">
        <b>500 px</b>
      </span>
      <span class="dw-dim" data-axis="y">
        <b>500 px</b>
      </span>
      
      <!-- 纯 CSS 实现的光束动画边框 -->
      <div class="dw-border-animate">
        <div class="dw-window">
          <!-- 顶部浏览器框 -->
          <div class="dw-chrome">
            <span class="dw-dots">
              <i /><i /><i />
            </span>
            <span class="dw-address">mirai.st</span>
          </div>

          <!-- 图片区域 -->
          <div class="dw-image-container">
            <img src="/landing/TfH0okk.webp" alt="Docs Preview" loading="lazy" />
          </div>
        </div>
      </div>
    </div>

    <span class="dw-chip" data-chip="mantine">
      <IconBrandMantine :size="16" />
      Mirai
    </span>
    <span class="dw-chip" data-chip="engine">
      <IconMarkdown :size="16" />
      老李游记
    </span>
  </div>
</template>

<script setup lang="ts">
import { IconBrandMantine, IconMarkdown } from '@tabler/icons-vue';
import { site } from '~/config/site';

// 供 CSS v-bind 使用的光束颜色配置
const beamConfig = [
  { color: 'transparent', position: 0 },
  { color: 'transparent', position: 62 },
  { color: site.beam?.[0] || '#3b82f6', position: 82 },
  { color: site.beam?.[1] || '#8b5cf6', position: 94 },
  { color: 'transparent', position: 100 },
];
</script>

<style scoped>
/* 基础变量回退 */
.dw-stage {
  --site-mark: #cbd5e1;
  --site-accent: #3b82f6;
  --site-frame: #e2e8f0;
  --site-surface: #ffffff;
  --site-shadow: rgba(0, 0, 0, 0.1);
  --site-rule: #e2e8f0;
  --site-sunken: #f8fafc;
  --site-ink: #0f172a;
  --site-text: #334155;

  position: relative;
  max-width: 520px;
  margin-inline: auto;
  padding: 48px 0 36px;
}
@media (max-width: 768px) {
  .dw-stage { margin-top: 16px; }
}

.dw-floor {
  --line: var(--site-mark);
  position: absolute;
  inset: 44% -22% -34%;
  background:
    linear-gradient(var(--line) 2px, transparent 2px) center / 36px 36px,
    linear-gradient(90deg, var(--line) 1px, transparent 1px) center / 36px 36px;
  opacity: 0.55;
  transform: perspective(900px) rotateX(62deg) rotateZ(-10deg);
  mask-image: radial-gradient(ellipse 50% 50% at 50% 50%, #000 30%, transparent 100%);
  pointer-events: none;
}

.dw-dim {
  --ink: var(--site-mark);
  position: absolute;
  color: var(--site-accent);
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
  font-size: 10px;
  line-height: 1;
  white-space: nowrap;
}
.dw-dim b {
  position: absolute;
  font-weight: 500;
}
.dw-dim::before, .dw-dim::after {
  position: absolute;
  border: 3px solid transparent;
  content: '';
}

.dw-dim[data-axis='x'] {
  right: 0; bottom: calc(100% + 6px); left: 0; height: 28px;
  border-inline: 1px solid var(--ink);
  background: linear-gradient(90deg, var(--ink) calc(50% - 30px), transparent calc(50% - 30px) calc(50% + 30px), var(--ink) calc(50% + 30px)) left top 6px / 100% 1px no-repeat;
}
.dw-dim[data-axis='x'] b { top: 2px; left: 50%; transform: translateX(-50%); }
.dw-dim[data-axis='x']::before, .dw-dim[data-axis='x']::after { top: 3.5px; }
.dw-dim[data-axis='x']::before { left: 0; border-left-width: 0; border-right: 7px solid var(--ink); }
.dw-dim[data-axis='x']::after { right: 0; border-right-width: 0; border-left: 7px solid var(--ink); }

.dw-dim[data-axis='y'] {
  top: 0; bottom: 0; left: calc(100% + 6px); width: 28px;
  border-block: 1px solid var(--ink);
  background: linear-gradient(var(--ink), var(--ink)) right 6px top / 1px 100% no-repeat;
}
.dw-dim[data-axis='y'] b { top: 50%; left: calc(100% + 2px); transform: translateY(-50%); }
.dw-dim[data-axis='y']::before, .dw-dim[data-axis='y']::after { right: 3.5px; }
.dw-dim[data-axis='y']::before { top: 0; border-top-width: 0; border-bottom: 7px solid var(--ink); }
.dw-dim[data-axis='y']::after { bottom: 0; border-bottom-width: 0; border-top: 7px solid var(--ink); }
@media (max-width: 480px) { .dw-dim[data-axis='y'] { display: none; } }

.dw-tilt {
  transform: perspective(1400px) rotateY(-15deg) rotateX(7deg) rotateZ(1deg);
  transform-origin: 50% 50%;
}
@media (max-width: 768px) {
  .dw-tilt { transform: perspective(1400px) rotateY(-8deg) rotateX(5deg); }
}

@media screen and (prefers-reduced-motion: no-preference) {
  .dw-tilt {
    transition: transform 700ms ease;
    animation: dw-settle 1100ms ease backwards;
  }
  .dw-stage:hover .dw-tilt { transform: perspective(1400px) rotateY(-6deg) rotateX(3deg) rotateZ(0deg); }
  .dw-chip { animation: dw-bob 6s ease-in-out infinite alternate; }
  .dw-chip[data-chip='engine'] { animation-duration: 7.5s; animation-delay: -3s; }
}
@keyframes dw-settle {
  from { transform: perspective(1400px) rotateY(-30deg) rotateX(14deg) rotateZ(2deg) translate3d(0, 32px, 0); }
}
@keyframes dw-bob {
  from { transform: translate3d(0, -5px, 0); }
  to { transform: translate3d(0, 5px, 0); }
}

/* 纯 CSS 替代 Mantine BorderAnimate */
.dw-border-animate {
  position: relative;
  border-radius: 14px;
  z-index: 1;
  isolation: isolate;
}
.dw-border-animate::before {
  content: "";
  position: absolute;
  inset: -2px;
  border-radius: 16px;
  background: conic-gradient(
    from 0deg,
    v-bind('beamConfig[0].color') 0%,
    v-bind('beamConfig[1].color') 62%,
    v-bind('beamConfig[2].color') 82%,
    v-bind('beamConfig[3].color') 94%,
    v-bind('beamConfig[4].color') 100%
  );
  animation: dw-beam-spin 7s linear infinite;
  z-index: -1;
}
.dw-border-animate::after {
  content: "";
  position: absolute;
  inset: 2px;
  border-radius: 12px;
  background: var(--site-surface);
  z-index: -1;
}
@keyframes dw-beam-spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }

.dw-window {
  overflow: hidden;
  border: 1px solid var(--site-frame);
  border-radius: 14px;
  background: var(--site-surface);
  box-shadow: 0 0 0 6px color-mix(in srgb, var(--site-accent) 9%, transparent), 0 40px 70px -36px var(--site-shadow);
  color: var(--site-text);
  font-size: 10px;
  line-height: 1.5;
  user-select: none;
}

.dw-chrome {
  display: flex; align-items: center; gap: 12px; padding: 10px 12px;
  border-bottom: 1px solid var(--site-rule);
  background: var(--site-sunken);
}
.dw-dots { display: flex; gap: 6px; }
.dw-dots i { width: 9px; height: 9px; border-radius: 50%; background: #ff5f57; display: block; }
.dw-dots i:nth-child(2) { background: #febc2e; }
.dw-dots i:nth-child(3) { background: #28c840; }

.dw-address {
  flex: 1; max-width: 220px; margin-inline: auto; padding: 2px 10px;
  border: 1px solid var(--site-rule); border-radius: 999px;
  background: var(--site-surface);
  font-family: ui-monospace, monospace; font-size: 9px; text-align: center;
}

.dw-image-container {
  aspect-ratio: 1 / 1;
  width: min(500px, 100%);
  height: auto;
  overflow: hidden;
}
.dw-image-container img {
  width: 100%; height: 100%; object-fit: cover; object-position: center 25%; display: block;
}

.dw-chip {
  position: absolute; display: inline-flex; align-items: center; gap: 6px;
  padding: 6px 12px; border: 1px solid var(--site-frame);
  border-radius: 999px; background: var(--site-surface);
  box-shadow: 0 14px 28px -14px var(--site-shadow);
  color: var(--site-ink); font-size: 13px; font-weight: 600;
  line-height: 1.3; white-space: nowrap;
}
.dw-chip svg { color: var(--site-accent); }
.dw-chip::before, .dw-chip::after { position: absolute; background: var(--site-mark); content: ''; }
.dw-chip::before { width: 1px; height: 22px; }
.dw-chip::after { width: 5px; height: 5px; border-radius: 50%; }

.dw-chip[data-chip='mantine'] { top: 22px; right: -28px; }
.dw-chip[data-chip='mantine']::before { top: 100%; left: 24px; }
.dw-chip[data-chip='mantine']::after { top: calc(100% + 20px); left: 22px; }

.dw-chip[data-chip='engine'] { bottom: 14px; left: -26px; font-family: ui-monospace, monospace; font-size: 12px; }
.dw-chip[data-chip='engine']::before { right: 24px; bottom: 100%; }
.dw-chip[data-chip='engine']::after { right: 22px; bottom: calc(100% + 20px); }

@media (max-width: 768px) {
  .dw-chip[data-chip='mantine'] { right: 4px; }
  .dw-chip[data-chip='engine'] { left: 4px; }
}
</style>