# mip-v-avatar

`v-avatar`组件被用来控制用于控制响应图像的大小和边界半径，通常用于显示个人介绍的图片。

## 用例

```html
<div class="container grid-list-md">
  <div class="layout row wrap">
    <div class="flex xs12 sm6 md4">
      <mip-v-slider m-bind:value.sync="slider"></mip-v-slider>

      <mip-v-switch m-bind:value.sync="tile" label="Tile"></mip-v-switch>
    </div>

    <div class="flex xs12 sm6 md8 align-center justify-center layout text-xs-center">
      <mip-v-avatar tile="tile" size="slider" color="grey lighten-4">
        <img src="https://avatars2.githubusercontent.com/u/4878697?s=400&amp;v=4" alt="avatar">
      </mip-v-avatar>
    </div>
  </div>
</div>
```

## API

### mip-v-avatar

#### Props

名称|类型|默认值|含义
:--:|:--:|:--:|:---
color|string|undefined|将指定的色彩应用与控件
size|number \| string|48|设置元素的高度和宽度
tile|boolean|undefined|删除边看弧度

## 示例

### 数据绑定

```html
<mip-v-divider></mip-v-divider>
<mip-v-btn on="tap:MIP.setData({tile: !m.tile})" color="primary">Toggle Tile</mip-v-btn>
<input m-bind:value="avatarSize" class="avatar-size-input">
<div class="section">
  <mip-v-avatar m-bind:tile="tile" m-bind:size="avatarSize" style="display: inline-block">
    <img src="https://avatars2.githubusercontent.com/u/4878697?s=400&amp;v=4" alt="avatar">
  </mip-v-avatar>

</div>
<div class="section">
  <mip-v-avatar m-bind:tile="tile" m-bind:size="avatarSize" style="display: inline-block" color="green">
    <span class="white--text headline">J</span>
  </mip-v-avatar>
</div>
<div class="section">
  <mip-v-avatar m-bind:tile="tile" m-bind:size="avatarSize" style="display: inline-block" color="purple red--after">
    <mip-v-icon dark="">favorite</mip-v-icon>
  </mip-v-avatar>
</div>
```
