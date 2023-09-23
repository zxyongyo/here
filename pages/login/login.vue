<template>
  <view class="container">
    <view class="title">欢迎来到在这儿</view>
    <view class="tabbar">
      <view
        class="item"
        :class="{active: loginType === 0}"
        @click="loginType = 0"
      >
        <view class="label">验证码登录</view>
        <view class="line" />
      </view>
      <view
        class="item"
        :class="{active: loginType === 1}"
        @click="loginType = 1"
      >
        <view class="label">密码登录</view>
        <view class="line" />
      </view>
    </view>

    <view class="form">
      <view class="form-item">
        <input type="number" placeholder="手机号" maxlength="11">
      </view>
      <view v-show="loginType === 0" class="form-item">
        <input type="text" placeholder="验证码">
        <view class="code">发送验证码</view>
      </view>
      <view v-show="loginType === 1" class="form-item">
        <input type="password" placeholder="密码">
      </view>
    </view>

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

    <view class="btn">立即登录</view>

    <view class="footer">
      <view class="to-register" @click="toRegistor">
        还没有账号？
        <text>去注册</text>
      </view>
      <view class="other">其他方式</view>
      <view class="other-list">
        <image class="icon" src="/static/image/login/weixin.png" />
      </view>
    </view>

    <AgreementPopup v-model="popupVisible" @handleAgree="(v) => isAgree = v"></AgreementPopup>
  </view>
</template>

<script setup>
import { queuePostFlushCb, ref, watchEffect } from 'vue'
import AgreementPopup from './components/AgreementPopup.vue'

const loginType = ref(0)
const isAgree = ref(false)
const popupVisible = ref(false)

const toRegistor = () => {
  uni.navigateTo({
    url: '/pages/login/register'
  })
}
</script>

<style lang="scss" scoped>
.container{
  display: flex;
  flex-direction: column;
  padding: 0 32rpx;
  background: linear-gradient(0deg, #F9FBFF, #ACCEFF) 0 0 / 100% 600rpx no-repeat, #F9FBFF;
  overflow: hidden;
  >.title{
    margin-top: 150rpx;
    color: #222;
    font-size: 48rpx;
    font-weight: bold;
  }

  .tabbar{
    margin-top: 88rpx;
    display: flex;
    align-items: flex-end;
    gap: 50rpx;
    .item{
      position: relative;
      color: #65666B;
      font-size: 32rpx;
      font-weight: 500;
      line-height: 1;
      transition: all .1s;
      .label{
        position: relative;
        z-index: 11;
      }
      &.active .line{
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translate(-50%, 30%);
        display: block;
        width: 84rpx;
        height: 16rpx;
        border-radius: 8rpx;
        background: #659FF9;
      }
      &.active{
        color: #222;
        font-size: 36rpx;
      }
    }
  }

  .form{
    margin-top: 70rpx;
    .form-item{
      display: flex;
      margin-bottom: 32rpx;
      width: 100%;
      height: 108rpx;
      background: white;
      box-shadow: 0rpx 3rpx 6rpx 0rpx rgba(75,97,164,0.06);
      border-radius: 24rpx;
      >input{
        flex: 1;
        padding: 0 32rpx;
        height: 100%;
        font-size: 32rpx;
      }
      .code{
        display: flex;
        align-items: center;
        padding: 0 32rpx;
        height: 100%;
        color: #659FF9;
        font-size: 32rpx;
        font-weight: 500;
      }
    }
  }

  .agreement{
    display: flex;
    align-items: center;
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
    margin-top: 64rpx;
    width: 100%;
    line-height: 108rpx;
    background: #659FF9;
    border-radius: 24rpx;
    color: #fff;
    font-size: 36rpx;
    font-weight: 500;
    text-align: center;
  }

  .footer{
    margin-top: auto;
    color: #929599;
    text-align: center;
    .to-register{
      margin-top: 64rpx;
      font-size: 28rpx;
      >text{
        color: #659FF9;
      }
    }
    .other{
      position: relative;
      margin-top: 64rpx;
      font-size: 26rpx;
      &::before,
      &::after{
        content: "";
        position: absolute;
        top: 50%;
        left: 18%;
        display: block;
        width: 148rpx;
        height: 2rpx;
        background: linear-gradient(-90deg, #929599, #F9FBFF);
        border-radius: 1rpx;
      }
      &:after{
        left: unset;
        right: 18%;
        transform: rotate(180deg);
      }
    }

    .other-list{
      margin-top: 48rpx;
      margin-bottom: 110rpx;
      display: flex;
      justify-content: center;
      .icon{
        width: 88rpx;
        height: 88rpx;
      }
    }
  }
}
</style>

