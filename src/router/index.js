import Vue from 'vue'
import Router from 'vue-router'
import BScroll from 'better-scroll'

import home_page from '../components/home_page/home_page.vue'
import cat_food from '../components/cat_food/cat_food.vue'
import brand_sale from '../components/brand_sale/brand_sale.vue'
import canned_market from '../components/canned_market/canned_market.vue'
import fashion_videos from '../components/fashion_videos/fashion_videos.vue'
import meow_classroom from '../components/meow_classroom/meow_classroom.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: 'home_page'
    },
    {
      path: '/home_page',
      component: home_page
    },
    {
      path: '/cat_food',
      component: cat_food
    },
    {
      path: '/brand_sale',
      component: brand_sale
    },
    {
      path: '/canned_market',
      component: canned_market
    },
    {
      path: '/fashion_videos',
      component: fashion_videos
    },
    {
      path: '/meow_classroom',
      component: meow_classroom
    }
  ]
})
