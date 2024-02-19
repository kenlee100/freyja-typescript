<template>
  <header class="relative left-0 right-0 top-0 z-10 flex h-[4.5rem] items-center md:h-[7.5rem]">
    <div class="container">
      <div class="flex items-center justify-between">
        <RouterLink to="/">
          <img src="@/assets/images/logo.svg" class="h-10 md:h-auto md:max-w-[12.25rem]" alt="" />
        </RouterLink>
        <nav class="hidden text-base text-netural-0 md:block">
          <ul class="flex justify-between space-x-4">
            <RouterLink
              v-for="item in navMenu"
              :key="item.name"
              custom
              v-slot="{ href }"
              :to="item.path"
            >
              <li>
                <a
                  v-if="item.path === '/book'"
                  :href="href"
                  class="rounded-lg bg-primary-100 px-8 py-4 text-center"
                  >{{ item.meta.title }}</a
                >
                <a v-else :href="href" class="p-4 text-center">{{ item.meta.title }}</a>
              </li>
            </RouterLink>
          </ul>
        </nav>
      </div>
    </div>
  </header>
</template>
<script setup lang="ts">
import { useRouter, type RouteRecordNormalized } from 'vue-router'
import { ref } from 'vue'
interface menu {}
const router = useRouter()
const navMenu = ref<RouteRecordNormalized[]>([])

const rawRoutes = router.getRoutes()
navMenu.value = rawRoutes.filter((route) => route.meta && route.meta.showInHeader)
</script>
