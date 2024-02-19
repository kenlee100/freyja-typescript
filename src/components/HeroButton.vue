<template>
  <RouterLink
    :to="Link"
    class="group flex items-center justify-end rounded-lg bg-netural-0 p-5 text-netural-100 transition-all after:ml-4 after:block after:h-[0.0625rem] after:w-[9.375rem] after:bg-netural-100 after:transition-all after:content-[''] hover:bg-primary-100 hover:after:w-[7.5rem] hover:after:bg-netural-0 md:p-10"
  >
    <span
      class="whitespace-nowrap text-title text-netural-100 transition-all group-hover:text-netural-0 md:text-h5"
      >{{ ButtonText }}</span
    >
  </RouterLink>
</template>
<script setup lang="ts">
const props = defineProps({
  ButtonText: {
    type: String,
    default: 'HeroButton'
  },
  Link: {
    type: String,
    default: '/'
  }
})
</script>
