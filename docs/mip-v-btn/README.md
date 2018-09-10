# mip-v-btn

`mip-v-btn`组件用一个material design主题和多个选项来替换标准的html按钮。任何色彩辅助类都可以用来改变背景或文字的颜色。

## 用例

```html
<div class="flex">
  <mip-v-btn color="success">Success</mip-v-btn>
  <mip-v-btn color="error">Error</mip-v-btn>
  <mip-v-btn color="warning">Warning</mip-v-btn>
  <mip-v-btn color="info">Info</mip-v-btn>
</div>
```

## API

### mip-v-btn

#### Props

名称|类型|默认值|含义
:--:|:--:|:--:|:---
absolute|boolean|/|给元素设置绝对定位
active-class|string|'v-btn--active'|当组件处于激活状态时被绑定的类，**警告（warning）**取决于组件，这可能会导致副作用。如果您需要在默认情况下添加自定义类，只需设置<code>active-class="default-class your-class"</code>
append|boolean|/|Vue Router的router-link属性
block|boolean|/|将按钮的扩展到可用空间的100%
bottom|boolean|/|将组件向底部对齐
color|string|/|将指定的色彩应用与控件
dark|boolean|/|应用暗黑主题变体
depressed|boolean|/|移除按钮的框阴影
disabled|boolean|/|Route列表项是被禁用的
exact|boolean|/|完全匹配链接，没有这个的话，“/”将匹配每一个路由
exact-active-class|string|/|Vue Router的 router-link属性
fab|boolean|/|使按钮变圆
fixed|boolean|/|给元素设置固定定位
flat|boolean|/|移除按钮的背景色
href|string / object|/|将组件标签指定为`<a>`
icon|boolean|/|将按钮指定为图标——圆型和平面
input-value|boolean|/|控制按钮的激活状态
large|boolean|/|大型按钮
left|boolean|/|将组件向左边对齐
light|boolean|/|应用明亮主题变体
loading|boolean|/|添加一个加载中的图标动画
nuxt|boolean|/|指定一个链接是nuxt链接（nuxt-link）
outline|boolean|/|按钮将拥有一个轮廓
replace|boolean|/|Vue Router router-link 属性
right|boolean|/|将组件向右边对齐
ripple|boolean / object|true|使用`mip-v-ripple`指令
round|boolean|/|按钮两边会变圆
small|boolean|/|小型按钮
tag|string|'button'|指定要在组件上使用的自定义标签
target|string|/|指定目标属性，仅适用于猫标签。
to|string / object|/|将组件标签指定为`<router-link>`
top|boolean|/|将组件向顶部对齐
type|string|'button'|设置按钮的类型标签
value|any|/|控制可见性

### mip-v-btn-toggle

#### Props

名称|类型|默认值|含义
:--:|:--:|:--:|:---
dark|boolean|/|应用暗黑主题变体
input-value|any|/|控制按钮的激活状态
light|boolean|/|应用明亮主题变体
mandatory|boolean|/|强制选中其中一个按钮
multiple|boolean|/|允许选中多个按钮

## 示例

### 扁平

```html
<div class="flex">
  <mip-v-btn flat small>Normal</mip-v-btn>
  <mip-v-btn flat small color="primary">Primary</mip-v-btn>
  <mip-v-btn flat small color="error">Error</mip-v-btn>
  <mip-v-btn flat small disabled>Disabled</mip-v-btn>
</div>
<div class="flex">
  <mip-v-btn flat>Normal</mip-v-btn>
  <mip-v-btn flat color="primary">Primary</mip-v-btn>
  <mip-v-btn flat color="error">Error</mip-v-btn>
  <mip-v-btn flat disabled>Disabled</mip-v-btn>
</div>
<div class="flex">
  <mip-v-btn flat large>Normal</mip-v-btn>
  <mip-v-btn flat large color="primary">Primary</mip-v-btn>
  <mip-v-btn flat large color="error">Error</mip-v-btn>
  <mip-v-btn flat large disabled>Disabled</mip-v-btn>
</div>
```

### 凸起

```html
<div class="flex">
  <mip-v-btn small>Normal</mip-v-btn>
  <mip-v-btn small color="primary">Primary</mip-v-btn>
  <mip-v-btn small color="error">Error</mip-v-btn>
  <mip-v-btn small disabled>Disabled</mip-v-btn>
</div>
<div class="flex">
  <mip-v-btn>Normal</mip-v-btn>
  <mip-v-btn color="primary">Primary</mip-v-btn>
  <mip-v-btn color="error">Error</mip-v-btn>
  <mip-v-btn disabled>Disabled</mip-v-btn>
</div>
<div class="flex">
  <mip-v-btn large>Normal</mip-v-btn>
  <mip-v-btn large color="primary">Primary</mip-v-btn>
  <mip-v-btn large color="error">Error</mip-v-btn>
  <mip-v-btn large disabled>Disabled</mip-v-btn>
</div>
```

### 凹陷

```html
<div class="flex">
  <mip-v-btn depressed small>Normal</mip-v-btn>
  <mip-v-btn depressed small color="primary">Primary</mip-v-btn>
  <mip-v-btn depressed small color="error">Error</mip-v-btn>
  <mip-v-btn depressed small disabled>Disabled</mip-v-btn>
</div>
<div class="flex">
  <mip-v-btn depressed>Normal</mip-v-btn>
  <mip-v-btn depressed color="primary">Primary</mip-v-btn>
  <mip-v-btn depressed color="error">Error</mip-v-btn>
  <mip-v-btn depressed disabled>Disabled</mip-v-btn>
</div>
<div class="flex">
  <mip-v-btn depressed large>Normal</mip-v-btn>
  <mip-v-btn depressed large color="primary">Primary</mip-v-btn>
  <mip-v-btn depressed large color="error">Error</mip-v-btn>
  <mip-v-btn depressed large disabled>Disabled</mip-v-btn>
</div>
```

### 按钮切换

```html
<mip-data>
  <script type="application/json">
    {
      "toggle_exclusive": 2,
      "toggle_multiple": [
        0,
        1,
        2
      ],
      "toggle_none": null,
      "toggle_one": 0,
      "text": "center",
      "icon": "justify"
    }
  </script>
</mip-data>
<h4>Exclusive</h4>
<mip-v-btn-toggle m-bind:input-value.sync="toggle_exclusive">
  <mip-v-btn flat>
    <mip-v-icon>format_align_left</mip-v-icon>
  </mip-v-btn>
  <mip-v-btn flat>
    <mip-v-icon>format_align_center</mip-v-icon>
  </mip-v-btn>
  <mip-v-btn flat>
    <mip-v-icon>format_align_right</mip-v-icon>
  </mip-v-btn>
  <mip-v-btn flat>
    <mip-v-icon>format_align_justify</mip-v-icon>
  </mip-v-btn>
</mip-v-btn-toggle>
<h4>Multiple</h4>
<mip-v-btn-toggle m-bind:input-value.sync="toggle_multiple" multiple>
  <mip-v-btn flat>
    <mip-v-icon>format_bold</mip-v-icon>
  </mip-v-btn>
  <mip-v-btn flat>
    <mip-v-icon>format_italic</mip-v-icon>
  </mip-v-btn>
  <mip-v-btn flat>
    <mip-v-icon>format_underlined</mip-v-icon>
  </mip-v-btn>
  <mip-v-btn flat>
    <mip-v-icon>format_color_fill</mip-v-icon>
  </mip-v-btn>
</mip-v-btn-toggle>
<h4>No Options Selected</h4>
<mip-v-btn-toggle m-bind:input-value.sync="toggle_none">
  <mip-v-btn flat>
    <mip-v-icon>format_align_left</mip-v-icon>
  </mip-v-btn>
  <mip-v-btn flat>
    <mip-v-icon>format_align_center</mip-v-icon>
  </mip-v-btn>
  <mip-v-btn flat>
    <mip-v-icon>format_align_right</mip-v-icon>
  </mip-v-btn>
  <mip-v-btn flat>
    <mip-v-icon>format_align_justify</mip-v-icon>
  </mip-v-btn>
</mip-v-btn-toggle>
<h4>Mandatory</h4>
<mip-v-btn-toggle m-bind:input-value.sync="toggle_one" mandatory>
  <mip-v-btn flat>
    <mip-v-icon>format_align_left</mip-v-icon>
  </mip-v-btn>
  <mip-v-btn flat>
    <mip-v-icon>format_align_center</mip-v-icon>
  </mip-v-btn>
  <mip-v-btn flat>
    <mip-v-icon>format_align_right</mip-v-icon>
  </mip-v-btn>
  <mip-v-btn flat>
    <mip-v-icon>format_align_justify</mip-v-icon>
  </mip-v-btn>
</mip-v-btn-toggle>
<h4>Text Options</h4>
<mip-v-btn-toggle m-bind:input-value.sync="text">
  <mip-v-btn flat value="left">
    Left
  </mip-v-btn>
  <mip-v-btn flat value="center">
    Center
  </mip-v-btn>
  <mip-v-btn flat value="right">
    Right
  </mip-v-btn>
  <mip-v-btn flat value="justify">
    Justify
  </mip-v-btn>
</mip-v-btn-toggle>
<h4>Text &amp; Icon Options</h4>
<mip-v-btn-toggle m-bind:input-value.sync="icon">
  <mip-v-btn flat value="left">
    <mip-v-icon>format_align_left</mip-v-icon>
  </mip-v-btn>
  <mip-v-btn flat value="center">
    <mip-v-icon>format_align_center</mip-v-icon>
  </mip-v-btn>
  <mip-v-btn flat value="right">
    <mip-v-icon>format_align_right</mip-v-icon>
  </mip-v-btn>
  <mip-v-btn flat value="justify">
    <mip-v-icon>format_align_justify</mip-v-icon>
  </mip-v-btn>
</mip-v-btn-toggle>
```

### 图标

```html
<mip-data>
  <script type="application/json">
    {
      "icon": "justify"
    }
  </script>
</mip-data>
<h4>Normal</h4>
<div class="flex">
  <mip-v-btn flat icon color="pink">
    <mip-v-icon>favorite</mip-v-icon>
  </mip-v-btn>
  <mip-v-btn flat icon color="indigo">
    <mip-v-icon>star</mip-v-icon>
  </mip-v-btn>
  <mip-v-btn flat icon color="green">
    <mip-v-icon>cached</mip-v-icon>
  </mip-v-btn>
  <mip-v-btn flat icon color="deep-orange">
    <mip-v-icon>thumb_up</mip-v-icon>
  </mip-v-btn>
</div>
<h4>Disabled</h4>
<div class="flex">
  <mip-v-btn icon disabled>
    <mip-v-icon>favorite</mip-v-icon>
  </mip-v-btn>
  <mip-v-btn icon disabled>
    <mip-v-icon>star</mip-v-icon>
  </mip-v-btn>
  <mip-v-btn icon disabled>
    <mip-v-icon>cached</mip-v-icon>
  </mip-v-btn>
  <mip-v-btn icon disabled>
    <mip-v-icon>thumb_up</mip-v-icon>
  </mip-v-btn>
</div>
```

### 浮动

```html
<mip-data>
  <script type="application/json">
    {
      "icon": "justify"
    }
  </script>
</mip-data>
<div class="flex">
  <mip-v-btn fab dark small color="primary">
    <mip-v-icon dark>remove</mip-v-icon>
  </mip-v-btn>
  <mip-v-btn fab dark small color="pink">
    <mip-v-icon dark>favorite</mip-v-icon>
  </mip-v-btn>
  <mip-v-btn fab dark color="indigo">
    <mip-v-icon dark>add</mip-v-icon>
  </mip-v-btn>
  <mip-v-btn fab dark color="teal">
    <mip-v-icon dark>list</mip-v-icon>
  </mip-v-btn>
  <mip-v-btn fab dark large color="cyan">
    <mip-v-icon dark>edit</mip-v-icon>
  </mip-v-btn>
  <mip-v-btn fab dark large color="purple">
    <mip-v-icon dark>android</mip-v-icon>
  </mip-v-btn>
</div>
```

### 大小

```html
<mip-data>
  <script type="application/json">
    {
      "icon": "justify"
    }
  </script>
</mip-data>
<div class="flex">
  <mip-v-btn small color="primary" dark>Small Button</mip-v-btn>
  <mip-v-btn color="warning" dark>Normal Button</mip-v-btn>
  <mip-v-btn color="error" dark large>Large Button</mip-v-btn>
</div>
<div class="flex">
  <mip-v-btn color="primary" fab small dark>
    <mip-v-icon>edit</mip-v-icon>
  </mip-v-btn>
  <mip-v-btn color="warning" fab dark>
    <mip-v-icon>account_circle</mip-v-icon>
  </mip-v-btn>
  <mip-v-btn color="error" fab large dark>
    <mip-v-icon>alarm</mip-v-icon>
  </mip-v-btn>
</div>
```

### 轮廓

```html
<mip-data>
  <script type="application/json">
    {
      "icon": "justify"
    }
  </script>
</mip-data>
<div class="flex">
  <mip-v-btn outline color="indigo">Outline Button</mip-v-btn>
  <mip-v-btn outline fab color="teal">
    <mip-v-icon>list</mip-v-icon>
  </mip-v-btn>
  <mip-v-btn outline large fab color="indigo">
    <mip-v-icon>edit</mip-v-icon>
  </mip-v-btn>
</div>
```

### 圆角

```html
<mip-v-btn round color="primary" dark>Rounded Button</mip-v-btn>
```

### 块状

```html
<mip-v-btn block color="secondary" dark style="width: 100%">Block Button</mip-v-btn>
```
