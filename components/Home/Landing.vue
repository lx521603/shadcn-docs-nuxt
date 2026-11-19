<template>
  <section class="mirai-landing-section">
    <div class="mirai-marks"></div>

    <div class="mirai-gallery">
      <div 
        v-for="(item, index) in galleryItems" 
        :key="index" 
        class="mirai-gallery-item"
      >
        <img :src="item.imageUrl" :alt="item.title" loading="lazy" class="mirai-gallery-img" />
        <div class="mirai-gallery-content">
          <h3 class="mirai-gallery-title">{{ item.title }}</h3>
          <p class="mirai-gallery-desc">{{ item.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const galleryItems = [
  { title: '✨ 笃定的弧度', description: '那种笑不张扬，但你一眼就知道——她清楚自己值得所有的好。', imageUrl: '/landing/Q30A3553.webp' },
  { title: '每一次快门、每一段文字', description: '都是对时光的温柔收藏。这里记录着旅途中的风景、街角的偶遇、以及那些让人忍不住微笑的小确幸。', imageUrl: '/landing/Q30A0695.webp' },
  { title: '🚂 铁轨上的市井', description: '汽笛声起，遮阳棚如潮水般退去。火车贴着新鲜的蔬菜与鱼虾缓缓碾过，没有惊慌，只有习以为常的默契。', imageUrl: '/landing/Q30A3643.webp' },
  { title: '转角遇见的未命名诗篇', description: '不预设构图，不等光线完美，只是用眼睛先于快门去生活。', imageUrl: '/landing/Q30A126.webp' },
  { title: '霓虹流淌的烟火人间', description: '华灯初上，步行街便成了一条流动的光河。放慢快门，让匆匆的人流化作柔光。', imageUrl: '/landing/Q30A5015.webp' },
  { title: '烈日下的光影', description: '盛夏的光线是最奢侈的馈赠。正午的硬光切割出锋利的阴影，午后的斜阳把树影拉得修长。', imageUrl: '/landing/DSC00975.webp' },
  { title: '🤪 不设防的生动', description: '有时候，最动人的肖像，恰恰诞生于放弃"完美"的那一秒。', imageUrl: '/landing/Q30A3919.webp' },
  { title: '倾泻的快乐', description: '高举的花洒，四溅的水珠。最动人的快门，永远留给那些毫无保留、野蛮生长的瞬间。', imageUrl: '/landing/Xco1qkk.webp' },
  { title: '🙏 结缘', description: '殿外香火正旺，每个人都在求点什么。而这条绳，大概什么也保不了，只是让人在转身下山的那一刻，心里稍微踏实一点。', imageUrl: '/landing/Q30A5184.webp' },
  { title: '街角微光', description: '她不仅是屏幕那端的温暖陪伴，更是这座城市夜里最动人的微光。', imageUrl: '/landing/DSC00608.webp' },
  { title: '🔥 忘我时刻', description: '身体跟着节奏失控，灵魂在人群里找到自由。这一刻，不需要理由。', imageUrl: '/landing/Q30A4133.webp' },
  { title: '✨ 允许自己放空', description: '没有明确的终点，也不需要刻意的构图。只是贪恋车窗外那一抹微凉的夜风，和放空时最真实的自我。', imageUrl: '/landing/TfH0okk.webp' },
];
</script>

<style>
/* Landing 区块：透明，绝不能盖住 HomePage 的整体背景 */
.mirai-landing-section {
  --landing-card-bg: rgba(255, 255, 255, 0.82);
  --landing-card-border: rgba(226, 232, 240, 0.9);
  --landing-title: #0f172a;
  --landing-desc: #475569;
  --landing-mark: rgba(100, 116, 139, 0.35);
  --landing-shadow: rgba(15, 23, 42, 0.08);
  --landing-shadow-hover: rgba(15, 23, 42, 0.14);

  position: relative;
  padding: 6rem 3rem;
  background: transparent;
}

/* Dark 模式 */
html.dark .mirai-landing-section,
html.dark-mode .mirai-landing-section,
html[data-theme='dark'] .mirai-landing-section,
html[data-color-mode='dark'] .mirai-landing-section,
html[data-mantine-color-scheme='dark'] .mirai-landing-section {
  --landing-card-bg: rgba(15, 23, 42, 0.72);
  --landing-card-border: rgba(71, 85, 105, 0.75);
  --landing-title: #f8fafc;
  --landing-desc: #cbd5e1;
  --landing-mark: rgba(148, 163, 184, 0.35);
  --landing-shadow: rgba(0, 0, 0, 0.28);
  --landing-shadow-hover: rgba(0, 0, 0, 0.42);
}

.mirai-landing-section {
  position: relative;
  padding: 0.25rem 0.25rem; /* 直接改这里 */
  background: transparent;
}

.mirai-marks {
  position: absolute;
  inset: -0.5rem;
  pointer-events: none;
  z-index: 0;
}

.mirai-marks::before {
  content: '';
  position: absolute;
  inset: 0;
  border: 1px solid var(--landing-mark);
  border-radius: 1rem;
}

.mirai-gallery {
  column-count: 1;
  column-gap: 1.5rem;
  position: relative;
  z-index: 1;
}

@media (min-width: 768px) {
  .mirai-gallery {
    column-count: 2;
  }
}

@media (min-width: 1024px) {
  .mirai-gallery {
    column-count: 3;
  }
}

.mirai-gallery-item {
  break-inside: avoid;
  margin-bottom: 1.5rem;
  background: var(--landing-card-bg);
  border: 1px solid var(--landing-card-border);
  border-radius: 0.75rem;
  overflow: hidden;
  box-shadow: 0 4px 6px -1px var(--landing-shadow);
  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease,
    background-color 0.2s ease,
    border-color 0.2s ease;
  backdrop-filter: blur(8px);
}

.mirai-gallery-item:hover {
  transform: translateY(-4px);
  box-shadow: 0 10px 15px -3px var(--landing-shadow-hover);
}

.mirai-gallery-img {
  width: 100%;
  height: auto;
  display: block;
  object-fit: cover;
}

.mirai-gallery-content {
  padding: 1rem 1.25rem 1.25rem;
}

.mirai-gallery-title {
  font-size: 1rem;
  font-weight: 700;
  color: var(--landing-title);
  margin-bottom: 0.5rem;
  line-height: 1.4;
}

.mirai-gallery-desc {
  font-size: 0.875rem;
  color: var(--landing-desc);
  line-height: 1.6;
}
</style>