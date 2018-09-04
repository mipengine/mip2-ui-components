# mip-v-badge

`mip-v-badge`组件可以包装任何类型的内容以突出显示用户的信息，或只提醒注意特定的元素。

## 用例

```html
<div class="container">
  <div class="text-xs-center">
    <mip-v-badge left="">
      <span slot="badge">6</span>
      <mip-v-icon large="" color="grey lighten-1">
        shopping_cart
      </mip-v-icon>
    </mip-v-badge>
    <mip-v-badge color="red">
      <span slot="badge">!</span>
      <mip-v-icon large="" color="grey">
        mail
      </mip-v-icon>
    </mip-v-badge>
  </div>
</div>
```

## API

### mip-v-badge

#### Props

名称|类型|默认值|含义
:--:|:--:|:--:|:---
bottom|boolean|/|将组件向底部对齐
color|string|'primary'|将指定的色彩应用与控件
left|boolean|/|将组件向左边对齐
mode|string|/|设置过渡模式（不适用于“过渡组（transition-group）”）
origin|string|/|设置过渡原点
overlap|boolean|/|组件将折叠插槽里的内容
transition|string|'fab-transition'|设置组件过渡效果，可以是内置的过渡配置或者是您自己的配置的其中一个。
value|boolean|true|控制可见性

## 示例

### 重叠

```html
<div class="container">
<div class="text-xs-center">
  <mip-v-badge color="purple" left="" overlap="">
    <mip-v-icon slot="badge" dark="" small="">
      done
    </mip-v-icon>
    <mip-v-icon color="grey lighten-1" large="">
      account_circle
    </mip-v-icon>
  </mip-v-badge>

  <mip-v-badge overlap="" color="orange">
    <mip-v-icon slot="badge" dark="" small="">
      notifications
    </mip-v-icon>
    <mip-v-icon large="" color="grey darken-1">
      account_box
    </mip-v-icon>
  </mip-v-badge>
</div>
</div>
```

### 内联

```html
<div class="container">
  <div class="text-xs-center">

  <mip-v-badge left="">
    <span slot="badge">2</span>
    <span>Examples</span>
  </mip-v-badge>

  &#xA0;&#xA0;

  <mip-v-badge color="green">
    <mip-v-icon slot="badge" dark="" small="">list</mip-v-icon>
    <span>Lists</span>
  </mip-v-badge>
  </div>
</div>
```

### 图标

```html
<div class="container">
  <div class="text-xs-center">
    <mip-v-badge left="" color="purple">
      <mip-v-icon slot="badge" dark="" small="">mdi-adjust</mip-v-icon>
      <span>
        MDI icon
      </span>
    </mip-v-badge>

    &#xA0;&#xA0;

    <mip-v-badge color="orange">
      <mip-v-icon slot="badge" dark="" small="">fas fa-fighter-jet</mip-v-icon>
      <span>
        Font Awesome icon
      </span>
    </mip-v-badge>
  </div>
</div>
```

### 可见性

```html
<mip-data>
  <script type="application/json">
    {
      "show": true
    }
  </script>
</mip-data>
<div class="container">
  <div class="text-xs-center">
    <mip-v-btn color="indigo" class="white--text" on="tap:MIP.setData({ show: !m.show })">
      Toggle
    </mip-v-btn>
  </div>
</div>
<div class="container">
  <div class="text-xs-center">
  <mip-v-badge m-bind:value="show" color="cyan" left="">
    <span slot="badge">6</span>
    <mip-v-icon large="" color="grey lighten-1">
      shopping_cart
    </mip-v-icon>
  </mip-v-badge>

  <mip-v-badge m-bind:value="show" color="purple">
    <span slot="badge">6</span>
    <mip-v-icon large="" color="grey">
      mail
    </mip-v-icon>
  </mip-v-badge>
  </div>
</div>
```
