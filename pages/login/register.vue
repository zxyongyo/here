<template>
  <view class="container">
    <view class="form">
      <view class="form-item">
        <view class="label">登录名</view>
        <input type="text">
      </view>
      <view class="form-item">
        <view class="label">手机号</view>
        <input type="text">
      </view>
      <view class="form-item">
        <view class="label">验证码</view>
        <input type="text">
        <view class="code">获取验证码</view>
      </view>
      <view class="form-item">
        <view class="label">密码</view>
        <input type="text">
      </view>
      <view class="form-item">
        <view class="label">确认密码</view>
        <input type="text">
      </view>
    </view>
    
    <view class="remind">提示：6~20个字符、字母、数字和标点符号至少包含2种</view>
    
    <view class="footer">
      <view class="agreement">
        <radio
          color="#659FF9"
          style="transform: translateY(-1px) scale(.6);"
          :checked="isAgree"
          @click="isAgree = !isAgree"
        />
        <view @click="isAgree = !isAgree">
          我已阅读
          <text @click.stop="popupVisible = true">服务协议</text> 和
          <text @click.stop="popupVisible = true">隐私政策</text>
        </view>
      </view>
      <view class="btn" :class="{disabled: true}">立即注册</view>
    </view>
    
    <AgreementPopup v-model="popupVisible" @handleAgree="(v) => isAgree = v"></AgreementPopup>
  </view>
</template>

<script setup>
import { ref } from "vue";
import AgreementPopup from './components/AgreementPopup.vue'
  
const isAgree = ref(false)
const popupVisible = ref(false)
</script>

<style lang="scss" scoped>
.container{
  display: flex;
  flex-direction: column;
  padding: 32rpx;
  background: #F9FBFF;
  .form{
    padding: 0 32rpx;
    border-radius: 12rpx;
    background: white;
    box-shadow: 0rpx 2rpx 3rpx 0rpx rgba(113,121,144,0.06);
    .form-item{
      display: flex;
      align-items: center;
      height: 92rpx;
      border-bottom: 2rpx solid #DEDFE2;
      font-size: 30rpx;
      font-weight: 500;
      &:last-child{
        border: 0;
      }
      input{
        flex: 1;
        height: 100%;
        text-align: right;
      }
      .label{
        margin-right: 16rpx;
      }
      .code{
        @include in-the-middle;
        margin-left: 16rpx;
        width: 180rpx;
        height: 54rpx;
        border-radius: 28rpx;
        background: #4F90F3;
        color: white;
        font-size: 28rpx;
        font-weight: 500;
      }
    }
  }
  
  .remind{
    margin-top: 20rpx;
    color: #929599;
    font-size: 24rpx;
  }
  
  .footer{
    margin-top: auto;
    .agreement{
      display: flex;
      align-items: center;
      justify-content: center;
      color: #929599;
      font-size: 28rpx;
      line-height: 1;
      >view{
        margin-left: -6rpx;
      }
      text{
        color: #659FF9;
      }
    }
    .btn{
      @include in-the-middle;
      margin-top: 48rpx;
      width: 100%;
      height: 88rpx;
      border-radius: 44rpx;
      background: #4F90F3;
      color: white;
      font-size: 36rpx;
      &.disabled{
        background: #929599;
      }
    }
  }
}
</style>

