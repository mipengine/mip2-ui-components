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

props|含义|默认值|类型
----|----|----|----
close|添加删除按钮|false|boolean
color|将指定的色彩应用于控件|undefined|string
dark|应用暗色主题|false|boolean
disabled|禁用，使其不可选择|false|boolean
label|移除圆形边缘|false|boolean
light|应用明亮主题|false|boolean
outline|删除背景并应用边框和文本颜色|false|boolean
selected|将选择框颜色应用于v-chip，主要用于在v-select中显示高亮上下文|false|boolean
small|减小v-chip的尺寸|false|boolean
text-color|将指定的颜色应用于控件文本|undefined|string
value|控制可见性|true|boolean

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
