<template>
  <view class="container">
    <view class="head">
      <view class="left">
        <image class="avatar" src="" />
        <view class="name">张影（站长）</view>
      </view>
      <view class="right">
        个人信息
      </view>
    </view>
    <navigator url="/pages/login/login">登录</navigator>
  </view>
</template>

<script setup lang='ts'>

</script>

<style lang="scss" scoped>
.container{
  /* #ifdef H5 */
  min-height: calc(100vh - 50px);
  /* #endif */
  .head{
    background: linear-gradient(0deg, #F9FBFF, #ACCEFF);
  }
}
</style>
