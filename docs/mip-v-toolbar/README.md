# mip-v-toolbar

`mip-v-toolbar`组件对于任何GUI都很重要，因为它通常是网站导航的主要来源。工具栏组件可以与导航抽屉一起很好地工作，用于隐藏链接并呈现激活器以在移动设备上打开侧边栏。

## 用例

```html
<mip-data>
  <script type="application/json">
    {
      "items": [
        "All",
        "Family",
        "Friends",
        "Coworkers"
      ]
    }
  </script>
</mip-data>
<div class="group pa-2">
  <mip-v-toolbar>
    <mip-v-toolbar-side-icon></mip-v-toolbar-side-icon>
    <mip-v-toolbar-title>Title</mip-v-toolbar-title>

    <mip-v-spacer></mip-v-spacer>

    <mip-v-toolbar-items>
      <mip-v-btn flat>Link One</mip-v-btn>
      <mip-v-btn flat>Link Two</mip-v-btn>
      <mip-v-btn flat>Link Three</mip-v-btn>
    </mip-v-toolbar-items>
  </mip-v-toolbar>
</div>
```

## API

### mip-v-toolbar

#### Props

名称|类型|默认值|含义
:--:|:--:|:--:|:---
app|boolean|/|指定组件作为应用程序布局的一部分，用于动态调整内容的大小
card|boolean|/|在`mip-v-card`中使用时继承边框半径
clipped-left|boolean|/|指定`mip-v-navigation-drawer`应用程序在工具栏的左侧被剪切
clipped-right|boolean|/|指定`mip-v-navigation-drawer`应用程序在工具栏的右侧被剪切
color|string|/|将指定的色彩应用与控件
dark|boolean|/|应用暗黑主题变体
dense|boolean|/|减小工具栏内容和扩展的高度
extended|boolean|/|强制工具栏生成扩展名而不使用插槽
extension-height|number / string|/|为扩展插槽指定一个明确的高度
flat|boolean|/|移除工具栏的盒子阴影
floating|boolean|/|使工具栏内联浮动
height|number / string|/|为工具栏指定一个特定的高度
inverted-scroll|boolean|/|向上滚动时会滑出视图，向上滚动时会回到视图中
light|boolean|/|应用明亮主题变体
manual-scroll|boolean|/|手动应用**滚动屏幕**功能
prominent|boolean|/|增加工具栏内容和扩展的高度
scroll-off-screen|boolean|/|当向下滚动时工具栏会过渡到屏幕外
scroll-target|string|/|为滚动屏幕指定滚动目标
scroll-threshold|number|300|工具栏使用滚动屏幕之前滚动的距离
scroll-toolbar-off-screen|boolean|/|向下滚动时会将工具栏从屏幕上移开
tabs|boolean|/|将会为扩展设置一个明确的高度 **42px**，当在扩展插槽中使用默认的 `mip-v-tab` 会很有用，如果你有一个自定义高度的 `mip-v-tab`， 那也应该给 **extensionHeight** 指定一个高度

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


## 示例

### 应用程序栏

```html
<div class="group pa-2">
<mip-v-toolbar dark color="primary">
  <mip-v-toolbar-side-icon></mip-v-toolbar-side-icon>

  <mip-v-toolbar-title class="white--text">Title</mip-v-toolbar-title>

  <mip-v-spacer></mip-v-spacer>

  <mip-v-btn icon>
      <mip-v-icon>search</mip-v-icon>
  </mip-v-btn>

  <mip-v-btn icon>
      <mip-v-icon>apps</mip-v-icon>
  </mip-v-btn>

  <mip-v-btn icon>
      <mip-v-icon>refresh</mip-v-icon>
  </mip-v-btn>

  <mip-v-btn icon>
      <mip-v-icon>more_vert</mip-v-icon>
  </mip-v-btn>
</mip-v-toolbar>
</div>
```

### 具有层次结构的列宽

```html
<div class="group pa-2">
  <div class="layout row child-flex wrap">
      <div>
        <mip-v-toolbar>
          <mip-v-btn icon class="hidden-xs-only">
            <mip-v-icon>arrow_back</mip-v-icon>
          </mip-v-btn>

          <mip-v-toolbar-title>Title</mip-v-toolbar-title>

          <mip-v-spacer></mip-v-spacer>

          <mip-v-btn icon class="hidden-xs-only">
            <mip-v-icon>search</mip-v-icon>
          </mip-v-btn>
        </mip-v-toolbar>
      </div>

      <div style="flex-basis: 20%">
        <mip-v-toolbar dark>
          <mip-v-spacer></mip-v-spacer>

          <mip-v-btn icon>
            <mip-v-icon>reply</mip-v-icon>
          </mip-v-btn>

          <mip-v-btn icon>
            <mip-v-icon>more_vert</mip-v-icon>
          </mip-v-btn>
        </mip-v-toolbar>
      </div>
    </div>
</div>
```

### 灵活的工具栏和卡片工具栏

```html
<mip-v-card flat>
  <mip-v-toolbar color="primary" dark extended flat>
    <mip-v-toolbar-side-icon></mip-v-toolbar-side-icon>
  </mip-v-toolbar>

  <div class="layout row pb-2">
    <div class="flex xs8 offset-xs2">
      <mip-v-card class="card--flex-toolbar">
        <mip-v-toolbar card prominent>
          <mip-v-toolbar-title class="body-2 grey--text">Title</mip-v-toolbar-title>

          <mip-v-spacer></mip-v-spacer>

          <mip-v-btn icon>
            <mip-v-icon>search</mip-v-icon>
          </mip-v-btn>

          <mip-v-btn icon>
            <mip-v-icon>apps</mip-v-icon>
          </mip-v-btn>

          <mip-v-btn icon>
            <mip-v-icon>more_vert</mip-v-icon>
          </mip-v-btn>
        </mip-v-toolbar>

        <mip-v-divider></mip-v-divider>

        <mip-v-card-text style="height: 200px;"></mip-v-card-text>
      </mip-v-card>
    </div>
  </div>
</mip-v-card>
```

### 搜索时浮动

```html
<div class="group pa-2">
  <mip-v-card class="pa-3" flat height="300px" img="https://cdn.vuetifyjs.com/images/toolbar/map.jpg">
    <mip-v-toolbar dense floating>
      <mip-v-text-field hide-details prepend-icon="search" single-line></mip-v-text-field>

      <mip-v-btn icon>
        <mip-v-icon>my_location</mip-v-icon>
      </mip-v-btn>

      <mip-v-btn icon>
        <mip-v-icon>more_vert</mip-v-icon>
      </mip-v-btn>
    </mip-v-toolbar>
  </mip-v-card>
</div>
```

### 突出的工具栏

```html
<mip-v-card color="grey lighten-4" flat height="200px" tile>
  <mip-v-toolbar prominent extended>
    <mip-v-toolbar-side-icon></mip-v-toolbar-side-icon>

    <mip-v-toolbar-title>Title</mip-v-toolbar-title>

    <mip-v-spacer></mip-v-spacer>

    <mip-v-btn icon>
      <mip-v-icon>search</mip-v-icon>
    </mip-v-btn>

    <mip-v-btn icon>
      <mip-v-icon>favorite</mip-v-icon>
    </mip-v-btn>

    <mip-v-btn icon>
      <mip-v-icon>more_vert</mip-v-icon>
    </mip-v-btn>
  </mip-v-toolbar>
</mip-v-card>
```

### 密集的工具栏

```html
<mip-v-card color="grey lighten-4" flat height="200px" tile>
  <mip-v-toolbar dense>
    <mip-v-toolbar-side-icon></mip-v-toolbar-side-icon>

    <mip-v-toolbar-title>Title</mip-v-toolbar-title>

    <mip-v-spacer></mip-v-spacer>

    <mip-v-btn icon>
      <mip-v-icon>search</mip-v-icon>
    </mip-v-btn>

    <mip-v-btn icon>
      <mip-v-icon>favorite</mip-v-icon>
    </mip-v-btn>

    <mip-v-btn icon>
      <mip-v-icon>more_vert</mip-v-icon>
    </mip-v-btn>
  </mip-v-toolbar>
</mip-v-card>
```

### 滚动屏幕

```html
<div class="hide-overflow" style="position: relative;">
  <mip-v-toolbar absolute color="teal lighten-3" dark scroll-off-screen scroll-target="#scrolling-techniques">
    <mip-v-toolbar-side-icon></mip-v-toolbar-side-icon>

    <mip-v-toolbar-title>Title</mip-v-toolbar-title>

    <mip-v-spacer></mip-v-spacer>

    <mip-v-btn icon>
      <mip-v-icon>search</mip-v-icon>
    </mip-v-btn>

    <mip-v-btn icon>
      <mip-v-icon>favorite</mip-v-icon>
    </mip-v-btn>

    <mip-v-btn icon>
      <mip-v-icon>more_vert</mip-v-icon>
    </mip-v-btn>
  </mip-v-toolbar>
  <div id="scrolling-techniques" class="scroll-y" style="max-height: 600px;">
    <div style="height: 1000px;"></div>
  </div>
</div>
```

### 应用程序栏与菜单

```html
<mip-data>
  <script type="application/json">
    {
      "items": [
        "All",
        "Family",
        "Friends",
        "Coworkers"
      ]
    }
  </script>
</mip-data>
<mip-v-card color="grey lighten-4" flat height="200px">
  <mip-v-toolbar color="grey darken-1" dark>
    <mip-v-toolbar-side-icon></mip-v-toolbar-side-icon>

    <mip-v-menu :nudge-width="100">
      <mip-v-toolbar-title slot="activator">
        <span>All</span>
        <mip-v-icon dark>arrow_drop_down</mip-v-icon>
      </mip-v-toolbar-title>

      <mip-v-list>
        <mip-v-list-tile>
          <mip-v-list-tile-title m-text="items[0]"></mip-v-list-tile-title>
        </mip-v-list-tile>
        <mip-v-list-tile>
          <mip-v-list-tile-title m-text="items[1]"></mip-v-list-tile-title>
        </mip-v-list-tile>
        <mip-v-list-tile>
          <mip-v-list-tile-title m-text="items[2]"></mip-v-list-tile-title>
        </mip-v-list-tile>
        <mip-v-list-tile>
          <mip-v-list-tile-title m-text="items[3]"></mip-v-list-tile-title>
        </mip-v-list-tile>
      </mip-v-list>
    </mip-v-menu>

    <mip-v-spacer></mip-v-spacer>

    <mip-v-btn icon>
      <mip-v-icon>search</mip-v-icon>
    </mip-v-btn>

    <mip-v-btn icon>
      <mip-v-icon>favorite</mip-v-icon>
    </mip-v-btn>

    <mip-v-btn icon>
      <mip-v-icon>more_vert</mip-v-icon>
    </mip-v-btn>
  </mip-v-toolbar>
</mip-v-card>
```

### 系统栏——状态/窗口

```html
<div>
  <mip-v-subheader>Light status bar</mip-v-subheader>
  <mip-v-card img="https://cdn.vuetifyjs.com/images/home/vuetify_layout1.svg" height="200px">
    <mip-v-system-bar status color="primary">
      <mip-v-spacer></mip-v-spacer>
      <mip-v-icon>network_wifi</mip-v-icon>
      <mip-v-icon>signal_cellular_null</mip-v-icon>
      <mip-v-icon>battery_full</mip-v-icon>
      <span>12:30</span>
    </mip-v-system-bar>
  </mip-v-card>
  <mip-v-subheader>Lights out</mip-v-subheader>
  <mip-v-card img="https://cdn.vuetifyjs.com/images/home/vuetify_layout2.svg" height="200px">
    <mip-v-system-bar status color="primary" lights-out>
      <mip-v-spacer></mip-v-spacer>
      <mip-v-icon>network_wifi</mip-v-icon>
      <mip-v-icon>signal_cellular_null</mip-v-icon>
      <mip-v-icon>battery_full</mip-v-icon>
      <span>12:30</span>
    </mip-v-system-bar>
  </mip-v-card>
  <mip-v-subheader>Dark status bar</mip-v-subheader>
  <mip-v-card img="https://cdn.vuetifyjs.com/images/home/vuetify_layout1.svg" height="200px">
    <mip-v-system-bar status color="primary" dark>
      <mip-v-spacer></mip-v-spacer>
      <mip-v-icon>network_wifi</mip-v-icon>
      <mip-v-icon>signal_cellular_null</mip-v-icon>
      <mip-v-icon>battery_full</mip-v-icon>
      <span>12:30</span>
    </mip-v-system-bar>
  </mip-v-card>
  <mip-v-subheader>Lights out</mip-v-subheader>
  <mip-v-card img="https://cdn.vuetifyjs.com/images/home/vuetify_layout2.svg" height="200px">
    <mip-v-system-bar status color="primary" lights-out dark>
      <mip-v-spacer></mip-v-spacer>
      <mip-v-icon>network_wifi</mip-v-icon>
      <mip-v-icon>signal_cellular_null</mip-v-icon>
      <mip-v-icon>battery_full</mip-v-icon>
      <span>12:30</span>
    </mip-v-system-bar>
  </mip-v-card>
  <mip-v-divider class="my-5"></mip-v-divider>
  <mip-v-subheader>Window bar</mip-v-subheader>
  <mip-v-system-bar window dark>
    <mip-v-spacer></mip-v-spacer>
    <mip-v-icon>remove</mip-v-icon>
    <mip-v-icon>check_box_outline_blank</mip-v-icon>
    <mip-v-icon>close</mip-v-icon>
  </mip-v-system-bar>
</div>
```
