# mip-v-parallax

`mip-v-parallax`组件创建一个3d效果使图像显示俾窗口滚动更慢。

## 用例

```html
<mip-v-parallax src="https://cdn.vuetifyjs.com/images/parallax/material.jpg"></mip-v-parallax>
```

## API

### mip-v-parallax

#### Props

名称|类型|默认值|含义
:--:|:--:|:--:|:---
alt|string|/|给视差图增加一个 `alt` 属性
height|string / number|500|设置组件高度
src|string|/|图片源地址

## 示例

### 内容伴随

```html
<mip-v-parallax dark="" src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg">
  <div class="layout align-center column justify-center">
    <h1 class="display-2 font-weight-thin mb-3">Vuetify.js</h1>
    <h4 class="subheading">Build your application today!</h4>
  </div>
</mip-v-parallax>
```
