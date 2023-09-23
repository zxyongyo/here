<template>
  <UniPopup
    ref="popupRef"
    v-bind="props"
    @change="handleChange"
    @mask-click="emit('maskClick')"
  >
    <slot />
  </UniPopup>
</template>

<script setup>
import { ref, watch, nextTick } from 'vue'
import UniPopup from '@/components/uni/uni-popup/uni-popup.vue'

const props = defineProps({
  /** 开 关 */
  modelValue: {
    type: Boolean,
    required: true
  },
  /** 是否开启动画 */
  animation: {
    type: Boolean,
    default: true
  },
  /** 弹出方式 */
  type: {
    type: String,
    default: 'center'
  },
  /** 蒙版点击是否关闭弹窗 */
  isMaskClick: {
    type: Boolean,
    default: true
  },
  /** 蒙版颜色，建议使用 rgba 颜色值 */
  maskBackgroundColor: {
    type: String,
    default: 'rgba(0,0,0,0.4)'
  },
  /** 主窗口背景色 */
  backgroundColor: {
    type: String,
    default: 'none'
  },
  /** 是否适配底部安全区 */
  safeArea: {
    type: Boolean,
    default: true
  }
})

const emit = defineEmits(['change', 'maskClick', 'update:modelValue'])

const popupRef = ref()

watch(
  () => props.modelValue,
  val => {
    if (popupRef.value) {
      if (val) {
        popupRef.value.open()
      } else {
        popupRef.value.close()
      }
    } else {
      if (val) {
        nextTick(() => {
          popupRef.value.open()
        })
      }
    }
  },
  { immediate: true }
)

const handleChange = e => {
  if (e.show !== props.modelValue) {
    emit('update:modelValue', e.show)
  }
  emit('change', e)
}
</script>
