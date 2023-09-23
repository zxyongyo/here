<script>
export default {
  onLaunch: function () {
    console.log('App Launch')
  }
}
</script>

<style>
/*每个页面公共css */
.container{
  width: 750rpx;
  height: auto;
  min-height: 100vh;
  color: #333;
}

/** 微信小程序不支持 '*' 通配符 */
view,
view::before,
view::after,
text,
text::before,
text::after,
input,
input::before,
input::after,
scroll-view,
scroll-view::before,
scroll-view::after,
navigator,
button{
  box-sizing: border-box;
}

/** 重置button样式 */
button{
  margin: 0;
  padding: 0;
  border-radius: 0;
  font-size: inherit;
  line-height: inherit;
  color: inherit;
  background-color: transparent;
  border: none;
  &::after{
    display: none;
  }
}

img,
image,
video,
canvas{
  display: block;
}
</style>
