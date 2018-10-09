# mip-v-avatar

`mip-v-avatar`组件被用来控制用于控制响应图像的大小和边界半径，通常用于显示个人介绍的图片。

## 用例

```html
<mip-data>
  <script type="application/json">
    {
      "slider": 56,
      "tile": false
    }
  </script>
</mip-data>
<div class="container grid-list-md">
  <div class="layout row wrap">
    <div class="flex xs12 sm6 md4">
      <mip-v-slider
        m-bind:value.sync="slider"
        min="16"
        max="256"
        label="Size"
        thumb-label
      ></mip-v-slider>

      <mip-v-switch
        m-bind:input-value.sync="tile"
        label="Tile"
      ></mip-v-switch>
    </div>

    <div class="flex xs12 sm6 md8 align-center justify-center layout text-xs-center">
      <mip-v-avatar
        m-bind:tile="tile"
        m-bind:size="slider"
        color="grey lighten-4"
      >
        <img
          src="https://vuetifyjs.com/apple-touch-icon-180x180.png"
          alt="avatar"
        >
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
color|string|/|将指定的色彩应用与控件
size|number / string|48|设置元素的高度和宽度
tile|boolean|/|删除边看弧度

## 示例

### 图标和文本

```html
<div class="layout align-center justify-space-around wrap">
  <mip-v-avatar color="indigo">
    <mip-v-icon dark>account_circle</mip-v-icon>
  </mip-v-avatar>

  <mip-v-avatar>
    <img
      src="https://cdn.vuetifyjs.com/images/john.jpg"
      alt="John"
    >
  </mip-v-avatar>

  <mip-v-badge overlap>
    <span slot="badge">3</span>
    <mip-v-avatar color="purple red--after">
      <mip-v-icon dark>notifications</mip-v-icon>
    </mip-v-avatar>
  </mip-v-badge>

  <mip-v-avatar color="teal">
    <span class="white--text headline">C</span>
  </mip-v-avatar>

  <mip-v-avatar color="red">
    <span class="white--text headline">J</span>
  </mip-v-avatar>
</div>
```
