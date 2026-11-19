<template>
  <section 
    :class="[$style.section, $templatesStyle.section]" 
    aria-labelledby="templates-title"
    data-render="later"
  >
    <!-- 假设 Sketch 组件已放入 components/ 目录 -->
    <Sketch name="compass" :class="$templatesStyle.arc" />
    <Sketch name="compass" :class="[$templatesStyle.arc, $templatesStyle.arcRight]" />
    
    <!-- RevealScope 替换为普通 div，保留 class 以维持布局。如需滚动动画，推荐使用 @vueuse/motion -->
    <div :class="[$style.center, $style.revealFadeIn]">
      <SectionHeader
        eyebrow="One look, three engines"
        id="templates-title"
      >
        <template #title>
          Pick the engine, <span :class="$style.gradient">keep the design</span>
        </template>
        <p>The same Mantine starter comes on three documentation engines. This is the {{ site.engine }} one; the other two look the same and work the way their engine does.</p>
      </SectionHeader>
    </div>

    <ul :class="[$style.marks, $templatesStyle.grid]">
      <li 
        v-for="(template, i) in templateList" 
        :key="template.key"
        :class="[$style.revealFadeIn]"
        :style="{ animationDelay: `${i * 90}ms` }"
      >
        <div 
          v-if="template.key === site.key" 
          :class="$templatesStyle.borderAnimate"
          :style="{
            '--beam-from': template.beam[0],
            '--beam-to': template.beam[1]
          }"
        >
          <TemplateCard :template="template" :current="true" :stars="stars?.[template.key]" />
        </div>
        <TemplateCard 
          v-else 
          :template="template" 
          :current="false" 
          :stars="stars?.[template.key]" 
        />
      </li>
    </ul>
  </section>
</template>

<script setup lang="ts">
import { site } from '~/config/site';
import { templateList, type Template } from '~/config/templates';
import type { HomeStats } from '~/components/stats';
import { compactCount } from '~/components/stats';
import { IconArrowRight, IconArrowUpRight, IconBrandGithub, IconCheck, IconStar } from '@tabler/icons-vue';

// 假设 TemplateCard 提取为独立组件以保持代码整洁，或直接写在这里
// 这里为了完整，将 Card 逻辑内联或作为子组件。为简洁，此处展示内联结构。

defineProps<{
  stars?: HomeStats['stars'];
}>();
</script>

<!-- 内部子组件 TemplateCard -->
<script setup lang="ts">
// 如果您希望保持单文件，可以将此部分放在同一个 .vue 文件的底部，或拆分为 components/Home/TemplateCard.vue
const TemplateCard = defineComponent({
  props: {
    template: Object as PropType<Template>,
    current: Boolean,
    stars: Number
  },
  setup(props) {
    return { props, IconArrowRight, IconArrowUpRight, IconBrandGithub, IconCheck, IconStar, compactCount, site };
  }
});
</script>
<!-- 注意：实际开发中建议将 TemplateCard 拆分为单独的 TemplateCard.vue 文件 -->