# mip-v-icon

`mip-v-icon`组件提供了大量的字形来为应用程序的各个方面提供上下文。Vuetify图标利用Google的Material图标字体库。有关所有可用图标的列表，请访问官方的<a href="https://material.io/icons/" target="_blank" rel="noopener">Material Icons</a>页面。

## 用例

```html
<div class="group pa-2">
  <mip-v-icon>home</mip-v-icon>
  <mip-v-icon>event</mip-v-icon>
  <mip-v-icon>info</mip-v-icon>
</div>
```

## API

### mip-v-icon

#### Props

名称|类型|默认值|含义
:--:|:--:|:--:|:---
color|string|/|将指定的色彩应用与控件
dark|boolean|/|应用暗黑主题变体
disabled|boolean|/|输入框是禁用的
large|boolean|/|设置图标为大型**（36px）**
left|boolean|/|在按钮内部使用时，把图标放置在左侧
light|boolean|/|应用明亮主题变体
medium|boolean|/|设置图标为中型**(28px)**
right|boolean|/|在按钮内部使用时，把图标放置在右侧
size|number / string|/|设置元素的高度和宽度
small|boolean|/|设置图标为小型**(16px)**
x-large|boolean|/|设置图标为超大型**(40px)**

## 示例

### 主题 light|dark 默认 light

```html
<div class="group pa-2 teal">
  <mip-v-icon dark="true">folder_open</mip-v-icon>
  <mip-v-icon dark="true">widgets</mip-v-icon>
  <mip-v-icon dark="true">gavel</mip-v-icon>
</div>
```

### 尺寸 medium size

```html
<div class="group pa-2">
  <mip-v-icon medium="true">home</mip-v-icon>
  <mip-v-icon medium="true">event</mip-v-icon>
  <mip-v-icon medium="true">info</mip-v-icon>
</div>
```

### 尺寸 large size

```html
<div class="group pa-2 teal">
  <mip-v-icon dark="true" large="true">folder_open</mip-v-icon>
  <mip-v-icon dark="true" large="true">widgets</mip-v-icon>
  <mip-v-icon dark="true" large="true">gavel</mip-v-icon>
</div>
```

### 尺寸 x-large size

```html
<div class="group pa-2">
  <mip-v-icon x-large="true">home</mip-v-icon>
  <mip-v-icon x-large="true">event</mip-v-icon>
  <mip-v-icon x-large="true">info</mip-v-icon>
</div>
```

### 彩色

```html
<div class="group pa-2">
  <mip-v-icon large color="green darken-2">business</mip-v-icon>

  <mip-v-icon large color="blue darken-2">chat</mip-v-icon>

  <mip-v-icon large color="purple darken-2">dialpad</mip-v-icon>

  <mip-v-icon large color="teal darken-2">email</mip-v-icon>

  <mip-v-icon large color="blue-grey darken-2">call_split</mip-v-icon>

  <mip-v-icon large color="orange darken-2">present_to_all</mip-v-icon>
  <mip-v-icon x-large="true" color="teal darken-2">info</mip-v-icon>
</div>
```

### 按钮

```html
<div class="group pa-a">
  <mip-v-btn color="primary" dark>Accept
    <mip-v-icon dark right>check_circle</mip-v-icon>
  </mip-v-btn>

  <mip-v-btn color="red" dark>Decline
    <mip-v-icon dark right>block</mip-v-icon>
  </mip-v-btn>

  <mip-v-btn dark>
    <mip-v-icon dark left>remove_circle</mip-v-icon>Cancel
  </mip-v-btn>
</div>
<div>
  <mip-v-btn color="orange darken-2" dark>
    <mip-v-icon dark left>arrow_back</mip-v-icon>Back
  </mip-v-btn>

  <mip-v-btn color="purple" dark>
    <mip-v-icon dark>build</mip-v-icon>
  </mip-v-btn>

  <mip-v-btn color="indigo" dark>
    <mip-v-icon dark>backup</mip-v-icon>
  </mip-v-btn>
</div>
<div>
  <mip-v-btn flat icon color="blue lighten-2">
    <mip-v-icon>thumb_up</mip-v-icon>
  </mip-v-btn>

  <mip-v-btn flat icon color="red lighten-2">
    <mip-v-icon>thumb_down</mip-v-icon>
  </mip-v-btn>
</div>
```
