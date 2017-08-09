<template>
  <div class="home_page">

<!--轮播图-->
    <div class="carouselHeader">
        <carousel :indicators="true" :auto="3000" :loop="true" :delta="100">
        <div v-for="i in srcHeader">
          <img :srcHeader="i"/>
        </div>
        </carousel>
      </div>
新人专享活动
    <div class="faddish">
      <mt-swipe :auto="0">
        <mt-swipe-item>
          <a href="#">
            <img class="faddish" src="https://img2.epetbar.com/nowater/2017-06/27/16/986dc2be74b6528cea780c2efbd51988.gif">
          </a>
        </mt-swipe-item>
      </mt-swipe>
    </div>
<!--中部导航    -->
    <div class="middleNav">
      <ul class="wrapper">
        <li>
          <a href="#">
            <img src="./1.png" alt="">
          </a>
        </li>
        <li>
          <a href="#">
            <img src="./2.png" alt="">
          </a>
        </li>
        <li>
          <a href="#">
            <img src="./3.png" alt="">
          </a>
        </li>
        <li>
          <a href="#">
            <img src="./4.png" alt="">
          </a>
        </li>
        <li>
          <a href="#">
            <img src="./5.png" alt="">
          </a>
        </li>
      </ul>
    </div>
<!--分割线   -->
      <split></split>
<!--每日疯抢    -->
      <div class="purchase">
      <div class="top">
        <img class="first" src="./suprice.png" alt="">
        <div class="time">距本场结束</div>
        <img class="last" src="./more.png" alt="" style="height:41.47px;width:70px;">
      </div>
      <div class="supriceNav">
        <div class="swiper-container">
          <div class="swiper-wrapper">
            <div class="swiper-slide">
              <img src="./6.jpg" alt="">
              <div class="price">
                <span>￥</span><span>21.90</span>
              </div>
              <div class="supPrice">
                省￥<span>13.10</span>
              </div>
            </div>
            <div class="swiper-slide">
              <img src="./6.jpg" alt="">
              <div class="price">
                <span>￥</span><span>21.90</span>
              </div>
              <div class="supPrice">
                省￥<span>13.10</span>
              </div>
            </div>
            <div class="swiper-slide">
              <img src="./7.jpg" alt="">
              <div class="price">
                <span>￥</span><span>21.90</span>
              </div>
              <div class="supPrice">
                省￥<span>13.10</span>
              </div>
            </div>
            <div class="swiper-slide">
              <img src="./6.jpg" alt=""><div class="price">
              <span>￥</span><span>21.90</span>
            </div>
              <div class="supPrice">
                省￥<span>13.10</span>
              </div>
            </div>
            <div class="swiper-slide">
              <img src="./7.jpg" alt=""><div class="price">
              <span>￥</span><span>21.90</span>
            </div>
              <div class="supPrice">
                省￥<span>13.10</span>
              </div>
            </div>
            <div class="swiper-slide">
              <img src="./7.jpg" alt="">
              <div class="price">
                <span>￥</span><span>21.90</span>
              </div>
              <div class="supPrice">
                省￥<span>13.10</span>
              </div>
            </div>
          </div>
          <div class="swiper-pagination"></div>
        </div>
      </div>
      </div>
<!--热门栏目-->
      <div class="hotColumn">
        <!--栏目标题-->
        <div class="columnTitle">
          <a href="#">
            <img src="./hotColumn.jpg">
          </a>
        </div>

        <div class="divboximg">

          <div class="divboximgleft">
            <div class="meowClassroom">
                <a href="#">
                  <img src="./meowClassroom.png" alt="新喵课堂">
                </a>
            </div>
          </div>

          <div class="divboximgright">
            <div class="groupBuy">
                <a href="#">
                  <img src="./groupBuy.jpg" alt="新团购时代">
                </a>
            </div>

              <div class="cannedMarket">
                <a href="#">
                  <img src="./cannedMarket.jpg" alt="罐头超市">
                </a>
            </div>
          </div>

        </div>

      </div>

    <!--分割线-->
    <split></split>

    <!--潮品视频-->
    <div class="fshionVideos">
      <!--栏目标题-->
      <div class="columnTitle">
        <!--fashionVideos-->
        <a href="#">
          <img src="./fashionVideos.png" style="height:52px;width:187px;">
        </a>
        <!--more-->
        <img class="last" src="./more.png" alt="" style="height:49px;width:62px;">
      </div>

      视频内容
      <div class="videosContent">
        <ul class="cvideoList">
          <li>
            <a href="#">
              <div class="video ">
                <img src="./specialWater.jpg" style="width:375px;height:210px">
                <span
                  class="smallPlayIco">
          <img src="">
        </span>
                <div class="viewBox">
                  <div class="timeProcess" >01:13</div>
                </div>
              </div>
              <div class="ft12 pt10 c333 flex pl15 pr15 pb10" data-reactid=".0.1.1.0.8.0.0.0.1">
                <div class="textover">神奇饮水除口臭<font color="#ff0000">#猫咪保健</font></div>
                <div><span class="cmallViewIco mr3"
                           data-reactid=".0.1.1.0.8.0.0.0.1.1.0"></span><i
                  data-reactid=".0.1.1.0.8.0.0.0.1.1.1">17817</i></div>
              </div>
            </a></li>
        </ul>
      </div>

      <!--体验馆-->
      <div class="experienceCenter">
        <!--栏目名-->
        <div class="columnTitle">
          <a href="#">
            <img src="./experienceCenter.png">
          </a>
          <a href="#">
            <img class="last" src="./more.png" alt="" style="height:41.47px;width:70px;">
          </a>

        </div>

        <div class="carouselMiddle">
          <carousel :indicators="true" :auto="3000" :loop="true" :delta="100">
            <div v-for="i in src">
              <img :src="i"/>
            </div>
          </carousel>
        </div>









      </div>





    </div>


  </div>
</template>

<script type="text/ecmascript-6">

  import Carousel from 'vue-m-carousel'
  import split from '../spilt/split.vue'
  import BScroll from 'better-scroll'
//  new BScroll(document.getElementById('carousel'));
  let scroll = new BScroll(Dom对象, {//options
    startX: 0,
    startY: 0
  })
  export default {
    data(){
      const imgUrl = require('./lun1.jpg')
      const imgUr2 = require('./lun2.jpg')
      const imgUr3 = require('./lun3.jpg')
      const imgUr4 = require('./lun4.png')
      const imgUr5 = require('./lun5.png')
      return {
        srcHeader:[imgUrl,imgUr2,imgUr3,imgUr4,imgUr5]
      }
    },

    data(){
      const imgUrl = require('./lunzeer.jpg')
      const imgUr2 = require('./lunwhite.jpg')
      const imgUr3 = require('./lunhua.jpg')

      return {
        src:[imgUrl,imgUr2,imgUr3]
      }
    },



    components: {
      Carousel,
      split
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">

  img
    width:100%
  .carousel-dot
    margin 0 5px
    width 8px
    height 8px
    opacity .9
    background-color #fff
    border-radius 100%
    font-size 0
  .active
    background-color #fff !important
    width 17px
    border-radius 30px

  .indexBox
  padding-top 141px
  width 100%
  height 1000px
  .banner
    width 100%
    height 160px
    img
      width 100%
      height 160px
  .faddish
    width 100%
    height 120px
    a
      width 100%
      display inline-block
      .faddish
        width 100%
  .middleNav
    clear-fix()
    .wrapper
      width 100%
      height 90px
      display flex
      li
        width 100%
        height 90px
        flex 1
        a
          width 100%
          height 90px
          img
            width 100%
            height 90px
  .purchase
    margin-bottom 10px
    .top
      clear-fix()
      width 100%
      height 64px
      padding 10px
      box-sizing border-box
      vertical-align top
      .first
        float left
        height 24px
        width  25%
        img
          width 100%
          height 100%
      .time
        float left
        height 20px
        width 40%
        margin 4px 0 0 20px
        font-size 13px
      .last
        margin-top -10px
        float right
        height 47px
    .supriceNav
      width 100%
      height 132px
      .swiper-container
        width 100%
        height 100%
        .swiper-wrapper
          width 100%
          height 100%
          .swiper-slide
            width 20%
            height 100%
            text-align center
            img
              width 100%
            .price
              margin 5px 0 2px 0
              font-size 16px
              color #f00
            .supPrice
              font-size 12px
              color: #999
    .split
      width: 100%;
      height: 10px;
      background: #f3f4f5;



    .hotColumn
      .columnTitle
        width 375px
        height 40px
      /*.divboximg*/
        /*width 375px*/
        /*height 190px*/
        /*border-top 1px solid #e7e7e7*/
        /*display flex*/

          /*.divboximgleft*/
            /*width 42%*/
            /*display block*/
            /*margin 0*/
            /*padding 0*/
            /*box-sizing border-box*/
              /*.meowClassroom*/
                /*width 159px*/
                /*height 189px*/
                /*display block*/

          /*.divboximgright*/
            /*width 57.33%*/
            /*display block*/
              /*.groupBuy*/
                /*width 214px*/
                /*height 94px*/
                /*display block*/
              /*.cannedMarket*/
                /*width 214px*/
                /*height 94px*/
                /*display block*/
    .experienceCenter
      width 375px
      hight 52px
      .columnTitle
        display block
        width 187px
        height 52px
        text-align center








</style>
