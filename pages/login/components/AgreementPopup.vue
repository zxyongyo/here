<template>
  <Popup v-model="popupVisible">
    <view class="popup-wrapper">
      <view class="title">在这儿服务协议和隐私政策</view>
      <view class="content">在这儿服务协议和隐私政策内容在这儿服务 协议和隐私政策内容在这儿服务协议和隐私 政策内容在这儿服务协议和隐私政策内容在 这儿服在这儿服务协议和隐私政策内容在这儿服务 协议和隐私政策内容在这儿服务协议和隐私 政策内容在这儿服务协议和隐私政策内容在 这儿服在这儿服务协议和隐私政策内容在这儿服务 协议和隐私政策内容在这儿服务协议和隐私 政策内容在这儿服务协议和隐私政策内容在 这儿服在这儿服务协议和隐私政策内容在这儿服务 协议和隐私政策内容在这儿服务协议和隐私 政策内容在这儿服务协议和隐私政策内容在 这儿服在这儿服务协议和隐私政策内容在这儿服务 协议和隐私政策内容在这儿服务协议和隐私 政策内容在这儿服务协议和隐私政策内容在 这儿服在这儿服务协议和隐私政策内容在这儿服务 协议和隐私政策内容在这儿服务协议和隐私 政策内容在这儿服务协议和隐私政策内容在 这儿服在这儿服务协议和隐私政策内容在这儿服务 协议和隐私政策内容在这儿服务协议和隐私 政策内容在这儿服务协议和隐私政策内容在 这儿服在这儿服务协议和隐私政策内容在这儿服务 协议和隐私政策内容在这儿服务协议和隐私 政策内容在这儿服务协议和隐私政策内容在 这儿服在这儿服务协议和隐私政策内容在这儿服务 协议和隐私政策内容在这儿服务协议和隐私 政策内容在这儿服务协议和隐私政策内容在 这儿服在这儿服务协议和隐私政策内容在这儿服务 协议和隐私政策内容在这儿服务协议和隐私 政策内容在这儿服务协议和隐私政策内容在 这儿服在这儿服务协议和隐私政策内容在这儿服务 协议和隐私政策内容在这儿服务协议和隐私 政策内容在这儿服务协议和隐私政策内容在 这儿服在这儿服务协议和隐私政策内容在这儿服务 协议和隐私政策内容在这儿服务协议和隐私 政策内容在这儿服务协议和隐私政策内容在 这儿服在这儿服务协议和隐私政策内容在这儿服务 协议和隐私政策内容在这儿服务协议和隐私 政策内容在这儿服务协议和隐私政策内容在 这儿服在这儿服务协议和隐私政策内容在这儿服务 协议和隐私政策内容在这儿服务协议和隐私 政策内容在这儿服务协议和隐私政策内容在 这儿服在这儿服务协议和隐私政策内容在这儿服务 协议和隐私政策内容在这儿服务协议和隐私 政策内容在这儿服务协议和隐私政策内容在 这儿服在这儿服务协议和隐私政策内容在这儿服务 协议和隐私政策内容在这儿服务协议和隐私 政策内容在这儿服务协议和隐私政策内容在 这儿服</view>
      <view class="toolbar">
        <view @click="handleAgree(false)">不同意</view>
        <view class="blue" @click="handleAgree(true)">同意</view>
      </view>
    </view>
  </Popup>
</template>

<script setup>
import Popup from '@/components/Popup/Popup.vue'
import { computed } from "vue";

const props = defineProps({
  modelValue: {
    type: Boolean,
    required: true
  }
})

const emit = defineEmits(['update:modelValue', 'handleAgree'])

const popupVisible = computed({
  get() {
    return props.modelValue
  },
  set(v) {
    emit('update:modelValue', v)
  }
})

const handleAgree = (val) => {
  emit('handleAgree', val)
  popupVisible.value = false
}
</script>

<style lang="scss" scoped>
  .popup-wrapper{
    position: relative;
    margin-top: -20%;
    padding-top: 40rpx;
    width: 622rpx;
    height: 1000rpx;
    background: white;
    border-radius: 24rpx;
    overflow: hidden;
    font-weight: 500;
    .title{
      color: #222;
      font-size: 32rpx;
      text-align: center;
    }
    .content{
      margin-top: 15rpx;
      padding: 20rpx 42rpx;
      height: 810rpx;
      overflow: scroll;
      color: #65666B;
      font-size: 28rpx;
    }
    .toolbar{
      position: absolute;
      left: 0;
      bottom: 0;
      display: flex;
      width: 100%;
      height: 96rpx;
      background: white;
      box-shadow: 0 -2rpx 3rpx 0 rgba(113,121,144,0.1);
      font-size: 32rpx;
      >view{
        @include in-the-middle;
        @include active;
        flex: 1;
        &:not(:last-child){
          border-right: 1px solid #DEDFE2;
        }
      }
      .blue{
        color: #659FF9;
      }
    }
  }
</style>