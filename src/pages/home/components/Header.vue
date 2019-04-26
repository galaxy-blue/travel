<template>
<div id="header">
  <div class="bg">
    <a class="toBack iconfont">&#xe624;</a>
    <div  class="search_box iconfont">&#xe632;输入城市/景点/游玩主题</div>
    <span class="city iconfont">邯郸&#xe64a;</span>
  </div>
</div>
</template>

<script>
export default {
  name:'HomeHeader'

}
</script>

<style scoped>
.bg{
  width:100%;
  height:0.88rem;
  background :#00bcd4;
  line-height: .88rem;
  position: relative;
  padding-left:0.1rem;
  padding-right: 0.1rem;
}
.toBack{
  display: inline-block;
  width:0.4rem;
  color:#fff;
}
.search_box{
  display: inline-block;
  width: 6rem;
  height: 0.6rem;
  background: #fff;
  line-height: 0.6rem;
  margin-left: 0.1rem;
  color:#ccc;
  padding-left: 0.2rem;
  border-radius: 0.05rem;
}
.city{
  color:#fff;
  margin-left: 0.1rem;
}
</style>
