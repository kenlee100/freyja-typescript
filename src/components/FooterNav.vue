<template>
  <footer class="bg-netural-background text-netural-0">
    <div class="relative mx-auto mb-20 mt-20 flex max-w-[80.9375rem] px-3 md:mb-[7.5rem]">
      <div class="flex w-full flex-col">
        <div class="flex w-full flex-col md:flex-row md:justify-between">
          <div class="flex flex-col">
            <RouterLink to="/">
              <img src="@/assets/images/logo.svg" alt="" />
            </RouterLink>
            <ul class="mt-10 flex md:space-x-4">
              <li class="flex h-10 w-10 flex-none items-center justify-center rounded-full border">
                <RouterLink
                  to="/"
                  class="h-6 w-6 bg-netural-0 [mask-image:url('@/assets/images/ic_line.svg')] [mask-position:center] [mask-repeat:no-repeat] [mask-size:contain]"
                ></RouterLink>
              </li>
              <li class="flex h-10 w-10 flex-none items-center justify-center rounded-full border">
                <RouterLink
                  to="/"
                  class="h-6 w-6 bg-netural-0 [mask-position:center] [mask-repeat:no-repeat] [mask-size:contain] [mask-image:url('@/assets/images/ic_instagram.svg')]"
                ></RouterLink>
              </li>
            </ul>
          </div>
          <div class="mt-10 flex flex-col space-y-4 md:mt-0 md:flex-row md:space-x-20">
            <ul class="flex flex-col justify-between space-y-4 md:space-y-10">
              <li>
                <h5 class="text-title">TEL</h5>
                <a
                  target="_blank"
                  href="tel:+886-7-1234567"
                  title="+886-7-1234567"
                  class="text-body"
                  >+886-7-1234567</a
                >
              </li>
              <li>
                <h5 class="text-title">FAX</h5>
                <p class="text-body">+886-7-1234567</p>
              </li>
            </ul>
            <ul class="flex flex-col justify-between space-y-4 md:space-y-10">
              <li>
                <h5 class="text-title">MAIL</h5>
                <a href="mailto:elh@hexschool.com" title="elh@hexschool.com" class="text-body"
                  >elh@hexschool.com</a
                >
              </li>
              <li>
                <h5 class="text-title">WEB</h5>
                <a
                  target="_blank"
                  href="http://www.elhhexschool.com.tw"
                  title="www.elhhexschool.com.tw"
                  class="text-body"
                  >www.elhhexschool.com.tw</a
                >
              </li>
            </ul>
          </div>
        </div>
        <div class="flex flex-col space-y-4 pt-20 md:flex-row md:justify-between md:space-y-0">
          <p class="text-body">806023 台灣高雄市新興區六角路123號</p>
          <p class="text-body">© 享樂酒店 2023 All Rights Reserved.</p>
        </div>
      </div>
    </div>
  </footer>
</template>
<script setup lang="ts"></script>
