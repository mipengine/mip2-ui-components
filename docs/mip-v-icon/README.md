# mip-v-icon

`mip-v-icon`组件提供了大量的字形来为应用程序的各个方面提供上下文。Vuetify图标利用Google的Material图标字体库。有关所有可用图标的列表，请访问官方的<a href="https://material.io/icons/" target="_blank" rel="noopener">Material Icons</a>页面。

## 用例

```html
<p>&#x9ED8;&#x8BA4;&#x5F15;&#x5165; material-icons&#xFF0C;&#x4E5F;&#x53EF;&#x4EE5;&#x4F7F;&#x7528; fontawesome&#xFF0C;&#x4F46;&#x9700;&#x8981;&#x624B;&#x52A8;&#x5728;&#x9879;&#x76EE;&#x4E2D;&#x5F15;&#x5165;</p>
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
light|boolean|/|应用明亮主题变体
disabled|boolean|/|输入框是禁用的
large|boolean|/|设置图标为大型**（36px）**
left|boolean|/|在按钮内部使用时，把图标放置在左侧
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
  <mip-v-icon x-large="true" color="teal darken-2">info</mip-v-icon>
</div>
```
