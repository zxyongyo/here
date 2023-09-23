<template>
  <view class="container">
    <view class="header">
      <view class="title">盛福源视频公共服务站</view>
      <view class="data">
        <view class="item">
          <view class="num">0</view>
          <view class="label">今日到站</view>
        </view>
        <view class="item">
          <view class="num">0</view>
          <view class="label">今日代收</view>
        </view>
        <view class="item">
          <view class="num">0</view>
          <view class="label">今日签收</view>
        </view>
      </view>
    </view>

    <view class="main">
      <view class="date-range">07-01 ~ 07-31</view>

      <view class="stat">
        <view class="head">
          <view class="title">包裹统计</view>
          <view class="link">查看明细</view>
        </view>

        <view class="count">
          <view class="span2">
            <text>239</text>
            <text>到站</text>
          </view>
          <view>
            <text>库存：</text>
            <text class="blue">4</text>
          </view>
          <view>
            <text>派件中：</text>
            <text class="blue">4</text>
          </view>
          <view>
            <text>签收：</text>
            <text class="blue">235</text>
          </view>
          <view>
            <text>库存：</text>
            <text class="blue">4</text>
          </view>
        </view>

        <view class="chart">
          <UniChart :option="option" />
          <view class="update">数据更新至 07:59</view>
        </view>

        <view class="detail">
          <view class="head">每日统计明细</view>
          <view class="list">
            <view v-for="item in 4" :key="item" class="item">07.31</view>
          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<script setup>
import UniChart from 'uniapp-echarts/components/uni-chart/uni-chart.vue'

const option = {
  legend: {
    left: 18,
    bottom: 0,
    icon: 'circle',
    itemWidth: 10,
    itemStyle: {

    }
  },
  grid: {
    top: '15%',
    bottom: '15%',
    left: '0',
    right: '0',
    containLabel: true
  },
  xAxis: {
    type: 'category',
    axisTick: {
      show: false
    },
    data: ['7.25', '7.25', '7.25', '7.25', '7.25', '7.25', '7.25']
  },
  yAxis: {
    type: 'value',
    axisTick: {
      show: true,
      inside: true
    },
    axisLine: {
      show: true
    }
    // splitLine: {
    //   show: false
    // }
  },
  textStyle: {
    color: '#3B3C3F'
  },
  series: [
    {
      name: '到站量',
      data: [10, 20, 15, 8, 7, 11, 13],
      type: 'bar',
      barMinWidth: 5,
      barMaxWidth: 8,
      itemStyle: {
        color: '#4F90F3',
        borderRadius: [10, 10, 0, 0]
      }
    }, {
      name: '签收量',
      data: [13, 12, 20, 15, 8, 7, 11],
      type: 'bar',
      barMinWidth: 5,
      barMaxWidth: 8,
      barGap: '50%',
      itemStyle: {
        color: '#F4B259',
        borderRadius: [10, 10, 0, 0]
      }
    }
  ]
}
</script>

<style lang="scss" scoped>
.container{
  /* #ifdef H5 */
  min-height: calc(100vh - 50px);
  /* #endif */
  .header{
    background: linear-gradient(0deg, #CADCFA, #ACCEFF);
    overflow: hidden;
    .title{
      margin-top: 58rpx;
      font-size: 36rpx;
      font-weight: 800;
      text-align: center;
    }
    .data{
      padding: 46rpx 20rpx;
      display: flex;
      justify-content: space-evenly;
      .item{
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
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
          background: #DFECFF;
        }
        .num{
          font-size: 54rpx;
          font-weight: 500;
        }
        .label{
          margin-top: 26rpx;
          color: #65666B;
          font-size: 30rpx;
        }
      }
    }
  }

  .main{
    .date-range{
      @include in-the-middle;
      padding: 0 34rpx;
      margin: 48rpx auto 0;
      width: 294rpx;
      height: 64rpx;
      border-radius: 32rpx;
      background: #659FF9;
      color: white;
      font-size: 26rpx;
      &::after {
        content: '';
        display: block;
        margin-left: 10rpx;
        width: 22rpx;
        height: 12rpx;
        background: url('static/image/data/expand.png') 0 0 / cover no-repeat;
      }
    }

    .stat{
      .head{
        padding: 0 34rpx;
        margin-top: 48rpx;
        display: flex;
        align-items: center;
        justify-content: space-between;
        font-weight: 500;
        .title{
          font-size: 32rpx;
        }
        .link{
          color: #4F90F3;
          font-size: 26rpx;
        }
      }
    }

    .count{
      padding: 0 34rpx;
      margin-top: 38rpx;
      display: grid;
      grid-template: 84rpx 84rpx / 194rpx 226rpx 226rpx;
      gap: 20rpx;
      >view{
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 8rpx;
        box-shadow: 0 0 2rpx 1rpx rgba(75,97,164,0.06);
        color: #929599;
        font-size: 30rpx;
        font-weight: bold;
        .blue{
          color: #4F90F3;
        }
      }
      .span2{
        grid-row: span 2;
        display: flex;
        flex-direction: column;
        align-items: center;
        background: #4F90F3;
        color: white;
        line-height: 1;
        text:first-child{
          margin-bottom: 30rpx;
          font-size: 48rpx;
        }
      }
    }

    .chart{
      position: relative;
      padding: 0 34rpx;
      width: 100%;
      height: 480rpx;
      .update{
        position: absolute;
        bottom: 6rpx;
        right: 34rpx;
        color: #929599;
        font-size: 24rpx;
      }
    }

    .detail{
      padding: 0 32rpx;
      background: #F9FBFF;
      .head{
        padding: 40rpx 0 30rpx 0;
        font-size: 32rpx;
        font-weight: 500;
      }
      .list{
        padding-bottom: 30rpx;
        .item{
          margin-bottom: 20rpx;
          padding: 0 32rpx;
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;
          height: 84rpx;
          border-radius: 12rpx;
          background: white;
          box-shadow: 0 0 2rpx 1rpx rgba(75,97,164,0.06);
          &::after{
            content: "";
            display: block;
            width: 14rpx;
            height: 26rpx;
            background: url('static/image/data/arrow-right.png') 0 0 / cover no-repeat;
          }
        }
      }
    }
  }
}
</style>
