<template>
  <section
    class="mx-auto flex max-w-[980px] flex-col items-center gap-2 py-4 md:py-6 lg:py-10"
  >
    <NuxtLinkLocale
      v-if="announcement"
      :to="announcement.to"
      :target="announcement.target"
      class="bg-muted inline-flex items-center rounded-lg px-3 py-1 text-sm font-medium"
    >
      <template v-if="announcement.icon">
        <SmartIcon :name="announcement.icon" :size="16" />
        <UiSeparator class="mx-2 h-4" orientation="vertical" />
      </template>

      <span class="sm:hidden">
        {{ announcement.title }}
      </span>

      <span class="hidden sm:inline">
        {{ announcement.title }}
      </span>

      <Icon name="lucide:arrow-right" class="ml-1 size-4" />
    </NuxtLinkLocale>

    <!-- 标题 + 轮播 -->
    <div
      class="flex flex-wrap items-center justify-center gap-x-3 text-center text-3xl font-bold leading-tight tracking-tighter md:text-6xl lg:leading-[1.1]"
    >
      <div>
        <ContentSlot :use="$slots.title" unwrap="p" />
      </div>

      <span
        class="inline-flex flex-col h-[1.1em] overflow-hidden align-middle"
      >
        <div
          class="animate-rotate-words text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-cyan-600 dark:from-purple-400 dark:to-cyan-400"
        >
          <span class="block h-[1.1em]">
            记录沿途的风景
          </span>

          <span class="block h-[1.1em]">
            技术的探索
          </span>

          <span class="block h-[1.1em]">
            生活的点滴
          </span>

          <span class="block h-[1.1em]">
            光影的收藏
          </span>
        </div>
      </span>
    </div>

    <!-- 描述 -->
    <div
      class="max-w-[750px] text-center text-lg sm:text-xl text-gray-700 dark:text-gray-300"
    >
      <ContentSlot :use="$slots.description" unwrap="p" />
    </div>

    <!-- 按钮 -->
    <section
      class="flex w-full flex-wrap items-center justify-center gap-4 py-4"
    >
      <NuxtLinkLocale
        v-for="(action, i) in actions"
        :key="i"
        :to="action.to"
        :target="action.target"
      >
        <UiButton :variant="action.variant">
          <SmartIcon
            v-if="action.leftIcon"
            :name="action.leftIcon"
            class="mr-1"
          />

          {{ action.name }}

          <SmartIcon
            v-if="action.rightIcon"
            :name="action.rightIcon"
            class="ml-1"
          />
        </UiButton>
      </NuxtLinkLocale>
    </section>
  </section>
</template>

<script setup lang="ts">
defineProps<{
  announcement?: {
    to?: string
    target?: Target
    icon?: string
    title: string
  }
  actions: {
    name: string
    leftIcon?: string
    rightIcon?: string
    variant?:
      | 'default'
      | 'link'
      | 'destructive'
      | 'outline'
      | 'secondary'
      | 'ghost'
    to: string
    target?: Target
  }[]
}>()

defineSlots()
</script>

<style scoped>
@keyframes rotate-words {
  0%,
  20% {
    transform: translateY(0);
  }

  25%,
  45% {
    transform: translateY(-1.1em);
  }

  50%,
  70% {
    transform: translateY(-2.2em);
  }

  75%,
  95% {
    transform: translateY(-3.3em);
  }

  100% {
    transform: translateY(0);
  }
}

.animate-rotate-words {
  animation: rotate-words 8s infinite
    cubic-bezier(0.16, 1, 0.3, 1);
}
</style>