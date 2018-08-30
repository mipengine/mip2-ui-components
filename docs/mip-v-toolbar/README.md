# mip-v-toolbar

`v-toolbar`组件对于任何GUI都很重要，因为它通常是网站导航的主要来源。工具栏组件可以与导航抽屉一起很好地工作，用于隐藏链接并呈现激活器以在移动设备上打开侧边栏。

## 用例

```html
<div class="group pa-2">
  <mip-v-toolbar>
    <mip-v-toolbar-side-icon></mip-v-toolbar-side-icon>
    <mip-v-toolbar-title>Title</mip-v-toolbar-title>

    <mip-v-spacer></mip-v-spacer>

    <mip-v-toolbar-items>
      <mip-v-btn flat="">Link One</mip-v-btn>
      <mip-v-btn flat="">Link Two</mip-v-btn>
      <mip-v-btn flat="">Link Three</mip-v-btn>
    </mip-v-toolbar-items>
  </mip-v-toolbar>

    <mip-v-toolbar dark="" color="primary">
    <mip-v-toolbar-side-icon></mip-v-toolbar-side-icon>

    <mip-v-toolbar-title class="white--text">Title</mip-v-toolbar-title>

    <mip-v-spacer></mip-v-spacer>

    <mip-v-btn icon="">
        <mip-v-icon>search</mip-v-icon>
    </mip-v-btn>

    <mip-v-btn icon="">
        <mip-v-icon>apps</mip-v-icon>
    </mip-v-btn>

    <mip-v-btn icon="">
        <mip-v-icon>refresh</mip-v-icon>
    </mip-v-btn>

    <mip-v-btn icon="">
        <mip-v-icon>more_vert</mip-v-icon>
    </mip-v-btn>
  </mip-v-toolbar>
</div>
<mip-v-divider></mip-v-divider>
```

## API

### mip-v-toolbar-side-icon

#### Props

名称|类型|默认值|含义
:--:|:--:|:--:|:---


### mip-v-toolbar-title

#### Props

名称|类型|默认值|含义
:--:|:--:|:--:|:---


### mip-v-toolbar-items

#### Props

名称|类型|默认值|含义
:--:|:--:|:--:|:---


### mip-v-toolbar

#### Props

名称|类型|默认值|含义
:--:|:--:|:--:|:---
card|boolean|undefined|在`v-card`中使用时继承边框半径
clippedLeft|boolean|undefined|指定`v-navigation-drawer`应用程序在工具栏的左侧被剪切
clippedRight|boolean|undefined|指定`v-navigation-drawer`应用程序在工具栏的右侧被剪切
dense|boolean|undefined|减小工具栏内容和扩展的高度
extended|boolean|undefined|强制工具栏生成扩展名而不使用插槽
extensionHeight|number \| string|undefined|Specify an explicit height for the extended slot
flat|boolean|undefined|移除工具栏的盒子阴影
floating|boolean|undefined|使工具栏内联浮动
height|number \| string|undefined|为工具栏指定一个特定的高度
invertedScroll|boolean|undefined|Will slide out of view when scrolling down and back into view when scrolling up
manualScroll|boolean|undefined|手动应用**滚动屏幕**功能
prominent|boolean|undefined|增加工具栏内容和扩展的高度
scrollOffScreen|boolean|undefined|当向下滚动时工具栏会过渡到屏幕外。
scrollToolbarOffScreen|boolean|undefined|Will transition the toolbar off screen when scrolling down
scrollTarget|string|undefined|为滚动屏幕指定滚动目标
scrollThreshold|number|300|工具栏使用滚动屏幕之前滚动的距离
tabs|boolean|undefined|Will set an explicit **42px** height for extension. Useful when default `v-tab`s are used in the extended slot. If you have a custom height `v-tab`, you should specify a height with **extensionHeight**.
app|boolean|undefined|指定组件作为应用程序布局的一部分，用于动态调整内容的大小
color|string|undefined|将指定的色彩应用与控件
dark|boolean|undefined|应用暗黑主题变体
light|boolean|undefined|应用明亮主题变体

