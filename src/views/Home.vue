<template>
  <div class="main-slider relative h-[50.75rem] overflow-hidden md:h-[1080px]">
    <Swiper
      :modules="[Autoplay, Pagination, EffectFade]"
      :slides-per-view="1"
      :space-between="0"
      :loop="true"
      :pagination="{ clickable: true }"
      effect="fade"
    >
      <!-- :autoplay="{
        delay: 5000,
        disableOnInteraction: false
      }" -->
      <SwiperSlide v-for="item in bannerList" :key="item.title">
        <div class="container relative">
          <div
            class="absolute inset-0 z-10 mt-[4.5rem] w-full flex-col justify-center space-x-0 pr-5 md:mt-[7.5rem] md:flex md:flex-row md:items-center md:justify-between md:space-x-6 md:px-3"
          >
            <div
              class="flex w-full flex-col py-10 text-center text-primary-100 after:mx-auto after:block after:h-[5.1875rem] after:w-[0.125rem] after:bg-gradient-to-b after:from-primary-100 after:to-netural-0 after:content-[''] md:w-[36.6%] md:py-[7.25rem] md:text-left md:after:h-[0.125rem] md:after:w-full lg:after:bg-gradient-to-r"
            >
              <h4 class="mb-2 text-h2">{{ item.name }}</h4>
              <p class="mb-5 text-h5 md:mb-10">Enjoyment Luxury Hotel</p>
            </div>
            <div
              class="relative flex min-h-[26.25rem] w-full max-w-[57.75rem] flex-col py-[3.75rem] pl-[1.625rem] text-netural-0 before:absolute before:inset-y-0 before:left-0 before:right-0 before:ml-16 before:rounded-[2.5rem] before:border before:border-b-0 before:border-l-0 before:border-netural-10 before:backdrop-blur-sm before:content-[''] after:absolute after:inset-y-0 after:-left-[0.0625rem] after:right-0 after:ml-16 after:rounded-[2.5rem] after:bg-netural-0/10 md:min-h-[auto] md:py-24 md:pl-0 md:before:ml-12 md:before:rounded-[5rem] md:after:ml-12 md:after:rounded-[5rem]"
            >
              <div class="z-10 flex flex-col pr-5 lg:pr-[20%]">
                <h2 class="mb-6 space-y-2 max-[1199px]:text-h1 md:text-display">
                  <p>{{ item.location }}</p>
                  <p>{{ item.title }}</p>
                </h2>
                <p class="mb-10 text-title md:mb-16 md:text-h3">
                  我們致力於為您提供無與倫比的奢華體驗與優質服務
                </p>
                <HeroButton ButtonText="立即訂房" />
              </div>
            </div>
          </div>
        </div>
        <div
          class="absolute inset-0 h-full w-full bg-cover bg-center bg-no-repeat"
          :style="`background-image: url('${item.imgUrl}')`"
        ></div>
      </SwiperSlide>
    </Swiper>
  </div>
  <section class="relative flex-none overflow-hidden bg-primary-tint">
    <div
      class="inner-container before:absolute before:right-6 before:top-10 before:h-[6.25rem] before:w-[6.25rem] before:bg-[url('@/assets/images/dot_m.png')] before:bg-cover before:bg-center before:bg-no-repeat before:content-[''] before:md:-right-[8.25rem] before:md:top-[6.25rem] before:md:h-[12.5rem] before:md:w-[12.5rem] before:md:bg-[url('@/assets/images/dot.png')]"
    >
      <!-- <div
        class="absolute right-6 top-10 h-[6.25rem] w-[6.25rem] bg-[url('@/assets/images/dot_m.png')] bg-cover bg-center bg-no-repeat md:-right-[8.25rem] md:-top-5 md:h-[12.5rem] md:w-[12.5rem] md:bg-[url('@/assets/images/dot.png')]"
      ></div> -->
      <!-- <div
        class="absolute -bottom-[12.5rem] h-[6.25rem] w-[6.25rem] bg-[url('@/assets/images/dot_m.png')] bg-cover bg-center bg-no-repeat md:-bottom-[12.5rem] md:-left-[7rem] md:h-[12.5rem] md:w-[12.5rem] md:bg-[url('@/assets/images/dot.png')]"
      ></div> -->
      <div class="flex flex-col md:flex-row">
        <h2
          class="mb-10 mr-20 flex w-[8.75rem] flex-none flex-col after:block after:h-[0.125rem] after:w-full after:bg-gradient-to-r after:from-primary-100 after:to-netural-0 after:content-[''] md:mb-0"
        >
          <div class="pb-10 text-h1 text-primary-100">
            <p v-for="text in titleNews" :key="text">{{ text }}</p>
          </div>
        </h2>
        <div class="relative z-[1] flex flex-col space-y-10">
          <div
            v-for="item in newsList"
            :key="item.title"
            class="flex w-full flex-col items-center md:flex-row md:space-x-6"
          >
            <div class="overflow-hidden rounded-lg md:w-[calc(46%_-_theme(space.6))]">
              <img
                :src="item.image"
                alt=""
                class="w-full object-cover object-center md:h-[18.375rem]"
              />
            </div>
            <div class="flex flex-col pt-6 md:w-[54%] md:pt-0">
              <h3 class="pb-2 text-h4 md:pb-6 md:text-h3">{{ item.title }}</h3>
              <p class="text-body2 md:text-body">
                {{ item.description }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="bg-netural-background py-20 md:pb-[12.5rem] md:pt-[7.5rem]">
    <div
      class="relative flex bg-[url('@/assets/images/aboutBg.jpg')] bg-cover bg-center bg-no-repeat"
    >
      <div
        class="relative -bottom-20 mx-auto flex flex w-full max-w-[80.9375rem] flex-col px-3 before:absolute before:-top-[12.5rem] before:left-6 before:h-[6.25rem] before:w-[6.25rem] before:bg-[url('@/assets/images/dot_m.png')] before:bg-cover before:bg-center before:bg-no-repeat before:content-[''] before:md:-left-[7.5rem] before:md:-top-[20rem] before:md:h-[12.5rem] before:md:w-[12.5rem] before:md:bg-[url('@/assets/images/dot.png')]"
      >
        <div
          class="after: relative bottom-0 ml-auto max-w-[65.25rem] rounded-[2.5rem] rounded-br-none border border-r-0 border-t-0 bg-gradient-to-b from-netural-background/80 to-primary-100/80 p-6 text-netural-0 backdrop-blur-sm after:content-[''] md:rounded-[5rem] md:p-20"
        >
          <h2
            class="mb-10 flex flex-row items-center after:block after:h-[0.125rem] after:w-full after:bg-netural-0 after:content-[''] md:mb-20 md:w-[19.125rem]"
          >
            <div class="flex-none pr-10 text-h3 text-netural-0 md:text-h1">
              <p v-for="text in titleAbout" :key="text">{{ text }}</p>
            </div>
          </h2>
          <div class="space-y-10 text-body md:text-body">
            <p>
              享樂酒店，位於美麗島高雄的心臟地帶，是這座城市的璀璨瑰寶與傲人地標。
              我們的存在，不僅僅是為了提供奢華的住宿體驗，更是為了將高雄的美麗與活力，獻給每一位蒞臨的旅客。
            </p>
            <p>
              我們的酒店，擁有時尚典雅的裝潢，每一個細節都充滿著藝術與設計的精緻。
              我們的員工，都以熱情的服務與專業的態度，讓每一位客人都能感受到賓至如歸的溫暖。
            </p>
            <p>
              在這裡，您可以遙望窗外，欣賞高雄的城市景色，感受這座城市的繁華與活力；您也可以舒適地坐在我們的餐廳，品嚐精緻的佳餚，體驗無與倫比的味覺盛宴。
            </p>
            <p>
              享樂酒店，不僅是您在高雄的住宿之選，更是您感受高雄魅力的最佳舞台。我們期待著您的蒞臨，讓我們共同編織一段難忘的高雄故事。
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="bg-netural-background py-20 md:py-[7.5rem]">
    <div class="relative mx-auto flex w-full overflow-x-hidden">
      <div
        class="flex w-full flex-col flex-wrap space-y-6 px-3 md:flex-row md:items-end md:space-y-0 md:px-0"
      >
        <Swiper
          :slidesPerView="1"
          :loop="true"
          :navigation="{
            enabled: true,
            prevEl: '.room-prev',
            nextEl: '.room-next'
          }"
          @slideChange="roomSlideChange"
          :modules="[Pagination, Navigation]"
          :pagination="{ clickable: true }"
          class="room-slider"
        >
          <SwiperSlide v-for="item in roomList" :key="item.id">
            <img :src="item.imgUrl" class="md:h-[56.25rem] md:object-cover" alt="" />
          </SwiperSlide>
        </Swiper>
        <div class="flex flex-col pr-3 md:w-[45%] md:pl-20">
          <div class="mb-6 flex w-full flex-col text-netural-0 md:mb-10">
            <h2 class="pb-4 text-h4 md:text-h2">{{ getCulinaryItem(swiperRoomIdx).title }}</h2>
            <p class="pb-6 text-body2 md:pb-10 md:text-body">
              {{ getCulinaryItem(swiperRoomIdx).description }}
            </p>
            <p class="pb-6 text-h5 md:pb-10 md:text-h3">
              {{ getCulinaryItem(swiperRoomIdx).price }}
            </p>
            <hero-button
              ButtonText="查看更多"
              :Link="getCulinaryItem(swiperRoomIdx).link"
            ></hero-button>
          </div>
          <div class="relative flex justify-end">
            <div
              class="room-prev h-14 w-14 cursor-pointer bg-primary-100 [mask-image:url('@/assets/images/ic_ArrowLeft.svg')] [mask-position:center] [mask-repeat:no-repeat] [mask-size:theme.(space.4)]"
            ></div>
            <div
              class="room-next h-14 w-14 cursor-pointer bg-primary-100 [mask-position:center] [mask-repeat:no-repeat] [mask-size:theme.(space.4)] [mask-image:url('@/assets/images/ic_ArrowRight.svg')]"
            ></div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section
    class="relative bg-primary-tint before:absolute before:left-10 before:top-[3.4375rem] before:z-[1] before:h-[66.75rem] before:w-[11.6875rem] before:bg-[url('@/assets/images/line.png')] before:bg-contain before:bg-center before:bg-no-repeat"
  >
    <div class="overflow-hidden">
      <div class="home-culinary-container relative flex flex-col px-3">
        <!-- <div
        class="absolute -left-[16.25rem] top-[3.4375rem] z-[1] h-[66.75rem] w-[11.6875rem] bg-[url('@/assets/images/line.png')] bg-contain bg-center bg-no-repeat"
      ></div> -->
        <h2
          class="mr-20 flex w-[19.125rem] flex-row items-center pb-20 after:block after:h-[0.125rem] after:w-[10.4375rem] after:bg-gradient-to-r after:from-primary-100 after:to-netural-0 after:content-['']"
        >
          <div class="flex-none pr-10 text-h1 text-primary-100">
            <p v-for="text in titleFood" :key="text">{{ text }}</p>
          </div>
        </h2>
        <Swiper
          :spaceBetween="24"
          :loop="true"
          :width="416"
          class="common-slider"
          :breakpoints="{
            // 320: {
            //   width: 300
            // },
            // 768: {
            //   width: 416
            // }
          }"
        >
          <SwiperSlide v-for="item in foodList" :key="item._id">
            <div class="relative flex w-full flex-col items-center overflow-hidden rounded-lg">
              <img :src="item.image" alt="" class="w-full rounded-lg" />
              <div
                class="absolute inset-x-0 bottom-0 flex min-h-[12.3125rem] flex-col bg-gradient-to-b from-netural-0/0 to-netural-background p-6 text-netural-0 backdrop-blur-md md:h-[11.375rem]"
              >
                <div class="flex items-center justify-between pb-6">
                  <h3 class="line-clamp-2 overflow-visible text-h5 md:text-h3">
                    {{ item.title }}
                  </h3>
                  <ul class="flex flex-none space-x-4 text-subtitle md:text-title">
                    <li>{{ item.diningTime }}</li>
                  </ul>
                </div>
                <p class="line-clamp-4 overflow-visible text-body2 md:text-body">
                  {{ item.description }}
                </p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  </section>
  <section class="bg-netural-background">
    <div class="inner-container pb-20">
      <div class="flex flex-col">
        <h2
          class="mr-20 flex max-w-[18.75rem] flex-row items-center pb-20 after:block after:h-[0.125rem] after:w-[10.4375rem] after:bg-gradient-to-r after:from-primary-100 after:to-netural-0 after:content-[''] md:w-[19.125rem]"
        >
          <div class="flex-none pr-10 text-h1 text-primary-100">
            <p v-for="text in titleTransportation" :key="text">{{ text }}</p>
          </div>
        </h2>
        <p class="pb-4 text-title text-netural-40">台灣高雄市新興區六角路123號</p>
        <div
          class="mb-10 w-full bg-[url('@/assets/images/map_m.png')] bg-contain bg-center bg-no-repeat pb-[102.5%] md:bg-[url('@/assets/images/map.png')] md:pb-[27.79%]"
        ></div>
        <ul
          class="flex flex-col space-y-6 md:flex-row md:justify-between md:space-x-6 md:space-y-0"
        >
          <li class="flex-1 text-netural-0">
            <div
              class="mb-4 h-20 w-20 bg-primary-100 [mask-position:center] [mask-repeat:no-repeat] [mask-image:url('@/assets/images/ic_car.svg')] [mask-size:contain]"
            ></div>
            <h5 class="pb-2 text-h5">自行開車</h5>
            <p class="text-body2 md:text-body">
              如果您選擇自行開車，可以透過國道一號下高雄交流道，往市區方向行駛，並依路標指示即可抵達「享樂酒店」。飯店內設有停車場，讓您停車方便。
            </p>
          </li>
          <li class="flex-1 text-netural-0">
            <div
              class="mb-4 h-20 w-20 bg-primary-100 [mask-position:center] [mask-repeat:no-repeat] [mask-size:contain] [mask-image:url('@/assets/images/ic_train.svg')]"
            ></div>
            <h5 class="pb-2 text-h5">高鐵/火車</h5>
            <p class="text-body2 md:text-body">
              如果您是搭乘高鐵或火車，可於左營站下車，外頭有計程車站，搭乘計程車約20分鐘即可抵達。或者您也可以轉乘捷運紅線至中央公園站下車，步行約10分鐘便可抵達。
            </p>
          </li>
          <li class="flex-1 text-netural-0">
            <div
              class="mb-4 h-20 w-20 bg-primary-100 [mask-position:center] [mask-repeat:no-repeat] [mask-size:contain] [mask-image:url('@/assets/images/ic_luxurycar.svg')]"
            ></div>
            <h5 class="pb-2 text-h5">禮賓車服務</h5>
            <p class="text-body2 md:text-body">
              承億酒店提供禮賓專車接送服務，但因目的地遠近會有不同的收費，請撥打電話將由專人為您服務洽詢專線：(07)123-4567
            </p>
          </li>
        </ul>
      </div>
    </div>
    <div
      class="h-[11.75rem] bg-[url('@/assets/images/line_m.png')] bg-repeat-x pb-[22.4%] md:h-[10.5rem] md:bg-[url('@/assets/images/line2.svg')] md:pb-0"
    ></div>
  </section>
</template>
<script setup lang="ts">
import { getNews, getCulinary } from '@/apis/home'
import { ref, reactive } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { FreeMode, Autoplay, Pagination, Navigation, EffectFade } from 'swiper/modules'

// import type { RoomList, News, Culinary, BannerList } from '../types/home'
import 'swiper/scss'
import 'swiper/scss/navigation'
import 'swiper/scss/pagination'
import 'swiper/scss/autoplay'
import 'swiper/scss/effect-fade'

import bannerImg01 from '@/assets/images/banner01.jpg'
import bannerImg02 from '@/assets/images/banner02.jpg'
import news01 from '@/assets/images/news01.jpg'
import news02 from '@/assets/images/news02.jpg'
import news03 from '@/assets/images/news03.jpg'
// import map from '@/assets/images/map.png'
// import map_m from '@/assets/images/map_m.png'

import decoDot from '@/assets/images/dot.png'
// import line2 from '@/assets/images/line2.png'
import line3 from '@/assets/images/line3.png'

// import aboutBg from '@/assets/images/aboutBg.jpg'

import room01 from '@/assets/images/room01.jpg'

import food01 from '@/assets/images/food01.jpg'
import food02 from '@/assets/images/food02.jpg'
import food03 from '@/assets/images/food03.jpg'
import food04 from '@/assets/images/food04.jpg'
import food05 from '@/assets/images/food05.jpg'

// const modules = ref([
//   FreeMode,
//   // Autoplay,
//   EffectFade,
//   Pagination,
// ]);

type RoomList = {
  id: string
  title: string
  description: string
  price: string
  link: string
  imgUrl: string
}

type News = {
  _id?: string
  title: string
  description: string
  image: string
  mimage?: string
  createdAt?: string
  updaetdAt?: string
}
type Culinary = {
  _id?: string
  title: string
  description: string
  diningTime: string
  image: string
  createdAt?: string
  updaetdAt?: string
}
type BannerList = {
  location: string
  title: string
  subtitle: string
  name: string
  description: string
  imgUrl: string
}
const bannerList = ref<BannerList[]>([
  {
    location: '高雄',
    title: '豪華住宿之選',
    subtitle: '我們致力於為您提供無與倫比的奢華體驗與優質服務',
    name: '享樂酒店',
    description: 'Enjoyment Luxury Hotel',
    imgUrl: bannerImg01
  },
  {
    location: '高雄',
    title: '豪華住宿之選',
    subtitle: '我們致力於為您提供無與倫比的奢華體驗與優質服務',
    name: '享樂酒店',
    description: 'Enjoyment Luxury Hotel',
    imgUrl: bannerImg02
  }
])
const newsList = ref<News[]>([])
const foodList = ref<Culinary[]>([])
const roomList = ref<RoomList[]>([
  {
    id: '尊爵雙人房1',
    title: '尊爵雙人房1',
    description: '享受高級的住宿體驗，尊爵雙人房提供給您舒適寬敞的空間和精緻的裝潢。',
    price: 'NT$ 10,000',
    link: '',
    imgUrl: room01
  },
  {
    id: '尊爵雙人房2',
    title: '尊爵雙人房2',
    description: '享受高級的住宿體驗，尊爵雙人房提供給您舒適寬敞的空間和精緻的裝潢。',
    price: 'NT$ 10,000',
    link: '',
    imgUrl: room01
  }
])
const titleNews = ref(['最新', '消息'])
const titleAbout = ref(['關於', '我們'])
const titleFood = ref(['佳餚', '美饌'])
const titleTransportation = ref(['交通', '方式'])
const getCulinaryList = async () => {
  try {
    const res = await getCulinary()
    foodList.value = res.result || []
  } catch (error) {
    console.log(error)
  }
}
const getNewsList = async () => {
  try {
    const res = await getNews()
    newsList.value = res.result || []
  } catch (error) {
    console.log(error)
  }
}

const getCulinaryItem = (id: number) => {
  return roomList.value[id]
}
const swiperRoomIdx = ref(0)

const roomSlideChange = (swiper: any) => {
  swiperRoomIdx.value = swiper.activeIndex
}

getNewsList()
getCulinaryList()
</script>
<style lang="scss">
.main-slider {
  .swiper {
    @apply h-full;
  }
  .swiper-slide {
    @apply flex h-auto after:absolute after:inset-0 after:z-0 after:h-full after:w-full after:bg-netural-100 after:opacity-50 after:content-[''];
  }

  .swiper-pagination-bullets.swiper-pagination-horizontal {
    @apply bottom-0 mb-6 leading-[0] md:mb-8;
  }
  .swiper-pagination-bullet {
    @apply h-1 w-8 rounded-full bg-primary-40 opacity-100 transition-all duration-500;
    &.swiper-pagination-bullet-active {
      @apply w-[3.75rem] bg-primary-100;
    }
  }
}

.common-slider {
  .swiper-slide {
    @apply flex h-auto;
  }
  .swiper-pagination-bullets.swiper-pagination-horizontal {
    @apply static mb-10;
  }
  .swiper-pagination-bullet {
    @apply bg-netural-100 transition-all duration-500;
    &.swiper-pagination-bullet-active {
      @apply w-4 rounded bg-netural-0;
    }
  }
}
.room-slider {
  @apply w-full rounded-br-lg rounded-tr-lg md:w-[55%];
  .swiper-button-prev {
    @apply bottom-0;
  }
  .swiper-pagination-bullets.swiper-pagination-horizontal {
    @apply bottom-0 mb-8 leading-[0];
  }
  .swiper-pagination-bullet {
    @apply h-1 w-8 rounded-full bg-primary-40 opacity-100 transition-all duration-500;
    &.swiper-pagination-bullet-active {
      @apply w-4 bg-primary-100 md:w-[3.75rem];
    }
  }
}
</style>
