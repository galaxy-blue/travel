<template>
<div id="swiper_box">

    <swiper :options="swiperOption">
        <!-- slides -->
        <swiper-slide v-for="item in swiperList" :key="item.id">
          <img class="siwper_img"
          :src="item.url_img" alt="">   <!-- v-bind绑定属性，属性后的属性值是变量 -->
        </swiper-slide>
        <!-- Optional controls -->
        <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>

</div>
</template>

<script>
export default {
  name:'HomeSwiper',
  data(){
    return{
      swiperOption:{
        pagination:'.swiper-pagination',
        loop:true,
        autoplay: 3000,
        speed: 1000,
      },
      swiperList:[{
        id:'001',
        url_img:'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20193/d7bbc21db442366a882e04ddc984669a.jpg_750x200_85e640d9.jpg'
      },{
        id:'002',
        url_img:'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20193/26c9b54e3e02d3724f614883d77a62c6.jpg_750x200_57aa8efa.jpg'
      },{
        id:'003',
        url_img:'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20193/942d87cc1576c333c77dc1f86af145cd.jpg_750x200_d25bf3eb.jpg'
      }]
    }
  }

}
</script>

<style scoped>
/* .wrapper{
  overflow: hidden;
  width: 100%;
  height: 0;
  border-bottom: 31.25%;
} */
#swiper_box>>>.swiper-pagination-bullet-active{
  background:#fff;
}
.siwper_img{
  width: 100%;
}

</style>
