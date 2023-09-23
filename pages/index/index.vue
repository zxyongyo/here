<template>
  <view class="container">
    <view class="header">
      <view class="tool">
        <view class="loc">盛福源视频公共服务站</view>
        <view class="icons">
          <image class="icon" src="/static/image/index/search.png" />
          <image class="icon" src="/static/image/index/scan.png" />
        </view>
      </view>

      <view class="banner">
        <swiper class="swiper" autoplay indicator-dots circular indicator-active-color="#fff">
          <swiper-item v-for="item in 3" :key="item">
            <image src="/static/image/index/banner.png" />
          </swiper-item>
        </swiper>
      </view>

      <view class="notification">
        <view>
          <image
            class="notice-icon"
            src="/static/image/index/notice.png"
          />
          <view class="line" />
          <view class="content">公告详情公告详情详情详情详情</view>
        </view>
        <view>
          <view class="num">2</view>
          <image
            class="arrow-right"
            src="/static/image/index/arrow-right.png"
          />
        </view>
      </view>
    </view>

    <view class="main">
      <view class="tabbar">
        <view
          class="item tab1"
          :class="{active: activeTabNum === 0}"
          @click="activeTabNum = 0"
        >出入库</view>
        <view
          class="item tab2"
          :class="{active: activeTabNum === 1}"
          @click="activeTabNum = 1"
        >派件签收</view>
      </view>

      <view class="data">
        <view class="item">
          <view class="num">0</view>
          <view class="label">库存中</view>
        </view>
        <view class="item">
          <view class="num">0</view>
          <view class="label">今日签收</view>
        </view>
        <view class="item">
          <view class="num">0</view>
          <view class="label">滞留件</view>
        </view>
      </view>

      <view class="lib">
        <view class="in">
          入库
          <text>回传:【4】</text>
        </view>
        <view class="out">出库</view>
      </view>

      <view class="tool">
        <view class="head">
          <view class="title">工具</view>
          <view class="link">编辑</view>
        </view>

        <view class="tool-list">
          <view v-for="item in tools" :key="item.label" class="item">
            <image class="icon" :src="item.icon" />
            <text>{{ item.label }}</text>
          </view>
        </view>
      </view>

      <view class="handle">
        <view class="head">
          <view class="title">待处理</view>
          <view class="link">
            <text class="update">更新于11:20:10</text>
            <text>设置</text>
          </view>
        </view>

        <view class="handle-list">
          <view v-for="item in toHandle" :key="item.label" class="item">
            <view class="label">{{ item.label }}</view>
            <view class="num">{{ item.num }}</view>
          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<script setup>
import { ref } from 'vue'

const tools = [{
  icon: '/static/image/index/tool1.png',
  label: '退件扫描'
}, {
  icon: '/static/image/index/tool2.png',
  label: '移库'
}, {
  icon: '/static/image/index/tool3.png',
  label: '代收管理'
}, {
  icon: '/static/image/index/tool4.png',
  label: '客户中心'
}, {
  icon: '/static/image/index/tool5.png',
  label: '通知中心'
}, {
  icon: '/static/image/index/tool6.png',
  label: '套餐充值'
}, {
  icon: '/static/image/index/tool6.png',
  label: '乡镇件扫描'
}]
const toHandle = [{
  num: 0,
  label: '回传异常'
}, {
  num: 0,
  label: '通知失败'
}, {
  num: 0,
  label: '送货上门'
}, {
  num: 0,
  label: '收款件'
}, {
  num: 0,
  label: '电联件'
}, {
  num: 0,
  label: '退件'
}, {
  num: 0,
  label: '无法通知'
}]


const activeTabNum = ref(0)
</script>

<style lang="scss">
.container {
  /* #ifdef APP */
  padding-top: var(--status-bar-height);
  /* #endif */
  padding-bottom: 30rpx;
  /* #ifdef H5 */
  min-height: calc(100vh - 50px);
  /* #endif */
  background: linear-gradient(0deg, #f9fbff, #acceff) no-repeat 0 0 / 100%
    700rpx;
  .header {
    padding: 42rpx 32rpx;
    .tool {
      display: flex;
      align-items: flex-end;
      justify-content: space-between;
      .loc {
        display: flex;
        font-size: 34rpx;
        color: #3b3c3f;
        font-weight: bold;
        &::after {
          content: '';
          align-self: center;
          display: block;
          margin-left: 10rpx;
          width: 22rpx;
          height: 12rpx;
          background: url('../../static/image/index/expand.png') 0 0 / cover no-repeat;
        }
      }
      .icons{
        display: flex;
        .icon {
          margin-right: 32rpx;
          width: 32rpx;
          height: 32rpx;
          &:last-child {
            margin: 0;
          }
        }
      }
    }
  }

  .banner {
    margin-top: 42rpx;
    width: 100%;
    height: 290rpx;
    border-radius: 20rpx;
    overflow: hidden;
    .swiper {
      width: 100%;
      height: 100%;
      color: white;
      font-size: 24rpx;
      image {
        width: 100%;
        height: 100%;
      }
    }
  }

  .notification {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 32rpx;
    padding: 0 32rpx;
    width: 100%;
    height: 68rpx;
    background: white;
    border-radius: 12rpx;
    box-shadow: 0 4rpx 6rpx 0 rgba(75, 97, 164, 0.05);
    > view {
      display: flex;
    }
    .notice-icon {
      width: 26rpx;
      height: 28rpx;
    }
    .line {
      margin: 0 16rpx;
      width: 4rpx;
      height: 28rpx;
      background: #dedfe2;
      border-radius: 2rpx;
    }
    .content {
      color: #4f90f3;
      font-size: 26rpx;
      letter-spacing: 1px;
    }
    .num {
      @include in-the-middle;
      margin-right: 10rpx;
      width: 26rpx;
      height: 26rpx;
      background: #ed2a2a;
      border-radius: 50%;
      font-size: 22rpx;
      color: white;
    }
    .arrow-right {
      width: 14rpx;
      height: 26rpx;
    }
  }

  .main{
    background: white;
    border-radius: 24rpx 24rpx 0 0;
    .tabbar{
      position: relative;
      height: 82rpx;
      .item{
        @include in-the-middle;
        position: absolute;
        width: 388rpx;
        height: 76rpx;
        background-size: cover;
        background-repeat: no-repeat;
        font-size: 32rpx;
        color: #65666B;
        font-weight: bold;
        &.active{
          padding-top: 16rpx;
          width: 406rpx;
          color: #4F90F3;
          &::after{
            content: "";
            position: absolute;
            top: calc(100% + 6rpx);
            display: block;
            width: 64rpx;
            height: 6rpx;
            background: #4F90F3;
            border-radius: 4rpx;
          }
        }
        &:not(.active){
          z-index: 11;
        }
      }
      .tab1 {
        background-image: url('../../static/image/index/tab1.png');
        &.active{
          background-image: url('../../static/image/index/tab1_active.png');
          transform: translateY(-16rpx);
        }
      }
      .tab2{
        right: 0;
        background-image: url('../../static/image/index/tab2.png');
        &.active{
          background-image: url('../../static/image/index/tab2_active.png');
          transform: translateY(-16rpx);
        }
      }
    }

    .data{
      display: flex;
      justify-content: space-evenly;
      margin-top: 42rpx;
      background: white;
      .item{
        flex: 1;
        position: relative;
        text-align: center;
        line-height: 1;
        &:not(:last-child)::after{
          content: "";
          position: absolute;
          top: 50%;
          right: 0;
          transform: translateY(-50%);
          display: block;
          width: 2rpx;
          height: 42rpx;
          border-radius: 2rpx;
          background: #DEDFE2;
        }
        .num{
          font-size: 54rpx;
          font-weight: 500;
        }
        .label{
          margin-top: 28rpx;
          color: #929599;
          font-size: 30;
        }
      }
    }

    .lib{
      display: flex;
      justify-content: space-between;
      margin-top: 46rpx;
      padding: 0 32rpx;
      >view{
        @include in-the-middle;
        width: 332rpx;
        height: 128rpx;
        color: white;
        text-align: center;
        font-weight: bold;
        >text{
          margin-left: 16rpx;
          font-size: 26rpx;
          font-weight: normal;
        }
      }
      .in{
        background: url('../../static/image/index/in.png') 0 0 / cover no-repeat;
      }
      .out{
        background: url('../../static/image/index/out.png') 0 0 / cover no-repeat;
      }
    }

    .tool,
    .handle{
      margin-top: 48rpx;
      padding: 0 32rpx;
      .head{
        display: flex;
        align-items: center;
        justify-content: space-between;
        .title{
          font-size: 36rpx;
          font-weight: 500;
        }
        .link{
          color: #4F90F3;
          font-size: 28rpx;
          .update{
            margin-right: 10rpx;
            color: #929599;
          }
        }
      }
    }

    .tool .tool-list{
      margin-top: 16rpx;
      display: grid;
      row-gap: 20rpx;
      place-items: center;
      grid-template: 1fr 1fr / repeat(4, 1fr);
      .item{
        display: flex;
        gap: 20rpx;
        flex-direction: column;
        align-items: center;
        padding: 20rpx 0;
        width: 100%;
        height: 100%;
        border-radius: 20rpx;
        @include active;
        image{
          width: 60rpx;
          height: 60rpx;
        }
        text{
          font-size: 26rpx;
          font-weight: 500;
        }
      }
    }

    .handle .handle-list{
      margin-top: 36rpx;
      display: grid;
      row-gap: 28rpx;
      place-items: center;
      grid-template: 1fr 1fr / repeat(4, 1fr);
      .item{
        position: relative;
        display: flex;
        gap: 20rpx;
        flex-direction: column;
        width: 100%;
        align-items: center;
        font-weight: 500;
        &:not(:nth-child(4n)):not(:last-child)::after{
          content: '';
          position: absolute;
          top: 50%;
          right: 0;
          transform: translateY(-50%);
          display: block;
          width: 2rpx;
          height: 42rpx;
          border-radius: 2rpx;
          background: #DEDFE2;
        }
      }
    }
  }
}
</style>
