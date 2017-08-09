<template>
  <div>
      <div class="xiazaibaApp">
        <div class="wrapper">
        <span class="closebtn">
          <img src="//static.epetbar.com/static_wap/lib/common_images/closebtn_03.png" alt="关闭广告">
        </span>
          <div class="appImg">
            <a href="http://wap.epet.com/download.html?appname=epetmall" style="display: block;">
              <img src="https://img2.epetbar.com/nowater/2017-07/03/10/211547bb51dd23758f74fb86e9d7aae5.png@!water">
            </a>
          </div>
        </div>

        <div class="header">
          <div class="topFix">
            <div class="address">
              猫站|<a href="">重庆<span class="triangle"></span></a>
            </div>
            <div class="search">
              <a href="#">
                <input type="search" placeholder="搜索商品和品牌">
                <span class="iSearch"></span>
              </a>
            </div>
            <div class="dialog">
              <a href="#">
                <img src="//static.epetbar.com/static_wap/epetapp/pages/index/images/mydope.png">
              </a>
            </div>
          </div>
          <div class="tab">
            <div class="tab_item active">
              <router-link to="/home_page">首页</router-link>
              <i class="active"></i>
            </div>
            <div class="tab_item">
              <router-link to="/cat_food">猫粮</router-link>
              <i></i>
            </div>
            <div class="tab_item">
              <router-link to="/brand_sale">特卖</router-link>
              <i></i>
            </div>
            <div class="tab_item">
              <router-link to="/canned_market">罐头超市</router-link>
              <i></i>
            </div>
            <div class="tab_item">
              <router-link to="/fashion_videos">潮品视频</router-link>
              <i></i>
            </div>
            <div class="tab_item">
              <router-link to="/memow_class">新喵课堂</router-link>
              <i></i>
            </div>

          </div>
        </div>

      </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .xiazaibaApp
    position relative
    /*position fixed*/
    z-index 100

    .wrapper
      .closebtn
        display inline-block
        width 5%
        margin-right 2%
        vertical-align middle
        position absolute
        left 2%
        top 50%
        margin-top -2%
        img
          width 100%
      .appImg
        width 100%
        img
          width 100%
    .header
      .topFix
        box-sizing border-box
        width 100%
        height 43px
        padding 5px 10px
        .address
          width 20%
          float left
          color #333
          font-size 14px
          text-align center
          line-height 43px
          a
            color: #333
            .triangle
              display inline-block
              width 0
              height 0
              border-bottom 4px solid #333
              border-top 4px solid transparent
              border-left 4px solid transparent
              border-right 4px solid transparent
              line-height 43px
              margin 0 0 5px 2px
        .search
          position relative
          padding 0 10px
          box-sizing border-box
          width 70%
          float left
          line-height 43px
          input
            background-color #f6f6f6
            width 100%
            border none
            height 25px
            border-radius 4px
            font-size 13px
            text-indent 10px
            outline none
          .iSearch
            position absolute
            top 18px
            right 20px
            width 11px
            height 11px
            display inline-block
            background url(search.png)
            background-size 100% 100%
        .dialog
          width 10%
          float left
          line-height 43px
          img
            width 25px
            height 25px
            margin-bottom -9px

      .tab
        width 100%
        height 36px
        line-height 36px
        .tab_item
          position relative
          display inline-block
          float left
          width 20%
          text-align center
          i
            position absolute
            height 3px
            width 100%
            bottom 0
            left 0
            &.active
              background-color: RGB(231,63,133);
          &.active
            a
              color: RGB(231,63,133)

</style>
