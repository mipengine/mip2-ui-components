# mip-v-chip

`v-chip` 组件用于传递小块信息。使用`close`属性， 可以让 `v-chip` 支持互动，允许用户交互。

## 用法

`v-chip` 有4个主要的形态，Regular, 带图标、带头像和可关闭。

``` html
  <mip-v-chip close>Example Chip</mip-v-chip>
  <mip-v-chip>Example Chip</mip-v-chip>
  <mip-v-chip close>
    <mip-v-avatar>
      <img src="https://randomuser.me/api/portraits/men/35.jpg" alt="trevor">
    </mip-v-avatar>
      Trevor Hansen
  </mip-v-chip>
  <mip-v-chip>
    <mip-v-avatar class="teal">A</mip-v-avatar>ANZ Bank
  </mip-v-chip>
```

## API

### Props

名称|类型|默认值|含义
:--:|:--:|:--:|:---
close|boolean|false|添加删除按钮
color|string|undefined|将指定的色彩应用于控件
dark|boolean|false|应用暗色主题
disabled|boolean|false|禁用，使其不可选择
label|boolean|false|移除圆形边缘
light|boolean|false|应用明亮主题
outline|boolean|false|删除背景并应用边框和文本颜色
selected|boolean|false|将选择框颜色应用于 v-chip，主要用于在 v-select 中显示高亮上下文
small|boolean|false|减小 v-chip 的尺寸
text-color|string|undefined|将指定的颜色应用于控件文本
value|boolean|true|控制可见性

## 示例

### 色彩

```html
  <mip-v-chip color="primary" text-color="white">Primary</mip-v-chip>
  <mip-v-chip color="secondary" text-color="white">Secondary</mip-v-chip>
  <mip-v-chip color="red" text-color="white">Colored Chip</mip-v-chip>
  <mip-v-chip color="green" text-color="white">Colored Chip</mip-v-chip>
```

### 图标
```html
  <mip-v-chip color="indigo" text-color="white">
    <mip-v-avatar>
      <mip-v-icon>account_circle</mip-v-icon>
    </mip-v-avatar>
    Ranee
  </mip-v-chip>
  <mip-v-chip color="orange" text-color="white">
    Premium
    <mip-v-icon right>star</mip-v-icon>
  </mip-v-chip>
  <mip-v-chip color="primary" text-color="white">
    1 Year
    <mip-v-icon right>cake</mip-v-icon>
  </mip-v-chip>
  <mip-v-chip color="green" text-color="white">
    <mip-v-avatar class="green darken-4">1</mip-v-avatar>
    Years
  </mip-v-chip>
  <mip-v-chip close color="teal" text-color="white">
    <mip-v-avatar>
      <mip-v-icon>check_circle</mip-v-icon>
    </mip-v-avatar>
    Confirmed
  </mip-v-chip>
```

### 轮廓

```html
  <mip-v-chip outline color="secondary">Outline</mip-v-chip>
  <mip-v-chip outline color="primary">Colored</mip-v-chip>
  <mip-v-chip outline color="red">
    <mip-v-icon left>build</mip-v-icon>Icon
  </mip-v-chip>
```
### 标签

```html
  <mip-v-chip label>Label</mip-v-chip>
  <mip-v-chip label color="pink" text-color="white">
    <mip-v-icon left>label</mip-v-icon>Tags
  </mip-v-chip>
  <mip-v-chip label outline color="red">Outline</mip-v-chip>
```

### 可关闭

``` html
  <mip-v-btn
    color="primary"
    dark
    on="click:MIP.setData({chip1: true, chip2: true, chip3: true, chip4: true})"
  >
    Reset Chips
  </mip-v-btn>
  <mip-v-chip
    m-bind:value.sync="chip1"
    close
  >
    Closable
  </mip-v-chip>
  <mip-v-chip
    m-bind:value.sync="chip2"
    close
    color="red"
    text-color="white"
  >
    Remove
  </mip-v-chip>
  <mip-v-chip
    m-bind:value.sync="chip3"
    close
    color="green"
    outline
  >
    Success
  </mip-v-chip>
  <mip-v-chip
    m-bind:value.sync="chip4"
    close
    color="orange"
    label
    outline
  >
    Complete
  </mip-v-chip>
```
