# mip-v-btn

`mip-v-btn`组件用一个material design主题和多个选项来替换标准的html按钮。任何色彩辅助类都可以用来改变背景或文字的颜色。

## 用例

```html
<div>
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
ripple|boolean / object|true|使用`v-ripple`指令
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
<div class="layout align-center">
  <div class="flex xs12 sm4 text-xs-center">
    <div>
      <mip-v-btn
        flat
        small
      >Normal</mip-v-btn>
    </div>
    <div>
      <mip-v-btn
        flat
        small
        color="primary"
      >Primary</mip-v-btn>
    </div>
    <div>
      <mip-v-btn
        flat
        small
        color="error"
      >Error</mip-v-btn>
    </div>
    <div>
      <mip-v-btn
        flat
        small
        disabled
      >Disabled</mip-v-btn>
    </div>
  </div>
  <div class="flex xs12 sm4 text-xs-center">
    <div>
      <mip-v-btn flat>Normal</mip-v-btn>
    </div>
    <div>
      <mip-v-btn
        flat
        color="primary"
      >Primary</mip-v-btn>
    </div>
    <div>
      <mip-v-btn
        flat
        color="error"
      >Error</mip-v-btn>
    </div>
    <div>
      <mip-v-btn
        flat
        disabled
      >Disabled</mip-v-btn>
    </div>
  </div>
  <div class="flex xs12 sm4 text-xs-center">
    <div>
      <mip-v-btn
        flat
        large
      >Normal</mip-v-btn>
    </div>
    <div>
      <mip-v-btn
        flat
        large
        color="primary"
      >Primary</mip-v-btn>
    </div>
    <div>
      <mip-v-btn
        flat
        large
        color="error"
      >Error</mip-v-btn>
    </div>
    <div>
      <mip-v-btn
        flat
        large
        disabled
      >Disabled</mip-v-btn>
    </div>
  </div>
</div>
```

### 凸起

```html
<div class="layout align-center">
  <div class="flex xs12 sm4 text-xs-center">
    <div>
      <mip-v-btn small>Normal</mip-v-btn>
    </div>
    <div>
      <mip-v-btn
        small
        color="primary"
      >Primary</mip-v-btn>
    </div>
    <div>
      <mip-v-btn
        small
        color="error"
      >Error</mip-v-btn>
    </div>
    <div>
      <mip-v-btn
        small
        disabled
      >Disabled</mip-v-btn>
    </div>
  </div>
  <div class="flex xs12 sm4 text-xs-center">
    <div>
      <mip-v-btn>Normal</mip-v-btn>
    </div>
    <div>
      <mip-v-btn color="primary">Primary</mip-v-btn>
    </div>
    <div>
      <mip-v-btn color="error">Error</mip-v-btn>
    </div>
    <div>
      <mip-v-btn disabled>Disabled</mip-v-btn>
    </div>
  </div>
  <div class="flex xs12 sm4 text-xs-center">
    <div>
      <mip-v-btn large>Normal</mip-v-btn>
    </div>
    <div>
      <mip-v-btn
        large
        color="primary"
      >Primary</mip-v-btn>
    </div>
    <div>
      <mip-v-btn
        large
        color="error"
      >Error</mip-v-btn>
    </div>
    <div>
      <mip-v-btn
        large
        disabled
      >Disabled</mip-v-btn>
    </div>
  </div>
</div>
```

### 凹陷

```html
<div class="layout align-center">
  <div class="flex xs12 sm4 text-xs-center">
    <div>
      <mip-v-btn
        depressed
        small
      >Normal</mip-v-btn>
    </div>
    <div>
      <mip-v-btn
        depressed
        small
        color="primary"
      >Primary</mip-v-btn>
    </div>
    <div>
      <mip-v-btn
        depressed
        small
        color="error"
      >Error</mip-v-btn>
    </div>
    <div>
      <mip-v-btn
        depressed
        small
        disabled
      >Disabled</mip-v-btn>
    </div>
  </div>
  <div class="flex xs12 sm4 text-xs-center">
    <div>
      <mip-v-btn depressed>Normal</mip-v-btn>
    </div>
    <div>
      <mip-v-btn
        depressed
        color="primary"
      >Primary</mip-v-btn>
    </div>
    <div>
      <mip-v-btn
        depressed
        color="error"
      >Error</mip-v-btn>
    </div>
    <div>
      <mip-v-btn
        depressed
        disabled
      >Disabled</mip-v-btn>
    </div>
  </div>
  <div class="flex xs12 sm4 text-xs-center">
    <div>
      <mip-v-btn
        depressed
        large
      >Normal</mip-v-btn>
    </div>
    <div>
      <mip-v-btn
        depressed
        large
        color="primary"
      >Primary</mip-v-btn>
    </div>
    <div>
      <mip-v-btn
        depressed
        large
        color="error"
      >Error</mip-v-btn>
    </div>
    <div>
      <mip-v-btn
        depressed
        large
        disabled
      >Disabled</mip-v-btn>
    </div>
  </div>
</div>
```

### 按钮下拉菜单

```html
<mip-data>
  <script type="application/json">
    {
      "dropdownFont": [
        {
          "text": "Arial"
        },
        {
          "text": "Calibri"
        },
        {
          "text": "Courier"
        },
        {
          "text": "Verdana"
        }
      ],
      "dropdownIcon": [
        {
          "text": "list"
        },
        {
          "text": "favorite"
        },
        {
          "text": "delete"
        }
      ],
      "dropdownEdit": [
        {
          "text": "100%"
        },
        {
          "text": "75%"
        },
        {
          "text": "50%"
        },
        {
          "text": "25%"
        },
        {
          "text": "0%"
        }
      ]
    }
  </script>
</mip-data>
<div
  class="container grid-list-xl"
  id="dropdown-example"
>
  <div class="layout row wrap">
    <div class="flex xs12 sm4">
      <p>Overflow</p>

      <mip-v-overflow-btn
        m-bind:items="dropdownFont"
        label="Overflow Btn"
        target="#dropdown-example"
      ></mip-v-overflow-btn>
    </div>

    <div class="flex xs12 sm4">
      <p>Segmented</p>

      <mip-v-overflow-btn
        m-bind:items="dropdownIcon"
        label="Segmented Btn"
        segmented
        target="#dropdown-example"
      ></mip-v-overflow-btn>
    </div>

    <div class="flex xs12 sm4">
      <p>Editable</p>

      <mip-v-overflow-btn
        m-bind:items="dropdownEdit"
        label="Editable Btn"
        editable
        item-value="text"
      ></mip-v-overflow-btn>
    </div>
  </div>
</div>
```

### 按钮切换

```html
<mip-data>
  <script type="application/json">
    {
      "toggleExclusive": 2,
      "toggleMultiple": [
        0,
        1,
        2
      ],
      "toggleNone": null,
      "toggleOne": 0,
      "text": "center",
      "icon": "justify"
    }
  </script>
</mip-data>
<mip-v-card
  flat
  class="py-5"
>
  <mip-v-card-text>
    <div class="container fluid pa-0">
      <div class="layout row wrap">
        <div class="flex xs12 sm6 py-2">
          <p>Exclusive</p>
          <mip-v-btn-toggle m-bind:input-value.sync="toggleExclusive">
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
        </div>
        <div class="flex xs12 sm6 py-2">
          <p>Multiple</p>
          <mip-v-btn-toggle
            m-bind:input-value.sync="toggleMultiple"
            multiple
          >
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
        </div>
        <div class="flex xs12 sm6 py-2">
          <p>No Options Selected</p>
          <mip-v-btn-toggle m-bind:input-value.sync="toggleNone">
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
        </div>
        <div class="flex xs12 sm6 py-2">
          <p>Mandatory</p>
          <mip-v-btn-toggle
            m-bind:input-value.sync="toggleOne"
            mandatory
          >
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
        </div>
        <div class="flex xs12 sm6 py-2">
          <p>Text Options</p>
          <mip-v-btn-toggle m-bind:input-value.sync="text">
            <mip-v-btn
              flat
              value="left"
            >
              Left
            </mip-v-btn>
            <mip-v-btn
              flat
              value="center"
            >
              Center
            </mip-v-btn>
            <mip-v-btn
              flat
              value="right"
            >
              Right
            </mip-v-btn>
            <mip-v-btn
              flat
              value="justify"
            >
              Justify
            </mip-v-btn>
          </mip-v-btn-toggle>
        </div>
        <div class="flex xs12 sm6 py-2">
          <p>Text &amp; Icon Options</p>
          <mip-v-btn-toggle m-bind:input-value.sync="icon">
            <mip-v-btn
              flat
              value="left"
            >
              <span>Left</span>
              <mip-v-icon>format_align_left</mip-v-icon>
            </mip-v-btn>
            <mip-v-btn
              flat
              value="center"
            >
              <span>Center</span>
              <mip-v-icon>format_align_center</mip-v-icon>
            </mip-v-btn>
            <mip-v-btn
              flat
              value="right"
            >
              <span>Right</span>
              <mip-v-icon>format_align_right</mip-v-icon>
            </mip-v-btn>
            <mip-v-btn
              flat
              value="justify"
            >
              <span>Justify</span>
              <mip-v-icon>format_align_justify</mip-v-icon>
            </mip-v-btn>
          </mip-v-btn-toggle>
        </div>
      </div>
    </div>
  </mip-v-card-text>
</mip-v-card>
```

### 图标

```html
<mip-v-card flat>
  <mip-v-card-text>
    <div class="container fluid pa-0">
      <div class="layout row wrap">
        <div class="flex xs12">
          <p>Normal</p>
        </div>

        <div class="flex xs12 sm3">
          <mip-v-btn
            flat
            icon
            color="pink"
          >
            <mip-v-icon>favorite</mip-v-icon>
          </mip-v-btn>
        </div>

        <div class="flex xs12 sm3">
          <mip-v-btn
            flat
            icon
            color="indigo"
          >
            <mip-v-icon>star</mip-v-icon>
          </mip-v-btn>
        </div>

        <div class="flex xs12 sm3">
          <mip-v-btn
            flat
            icon
            color="green"
          >
            <mip-v-icon>cached</mip-v-icon>
          </mip-v-btn>
        </div>

        <div class="flex xs12 sm3">
          <mip-v-btn
            flat
            icon
            color="deep-orange"
          >
            <mip-v-icon>thumb_up</mip-v-icon>
          </mip-v-btn>
        </div>
      </div>

      <div class="layout row wrap mt-5">
        <div class="flex xs12">
          <p>Disabled</p>
        </div>

        <div class="flex xs12 sm3">
          <mip-v-btn
            icon
            disabled
          >
            <mip-v-icon>favorite</mip-v-icon>
          </mip-v-btn>
        </div>

        <div class="flex xs12 sm3">
          <mip-v-btn
            icon
            disabled
          >
            <mip-v-icon>star</mip-v-icon>
          </mip-v-btn>
        </div>

        <div class="flex xs12 sm3">
          <mip-v-btn
            icon
            disabled
          >
            <mip-v-icon>cached</mip-v-icon>
          </mip-v-btn>
        </div>

        <div class="flex xs12 sm3">
          <mip-v-btn
            icon
            disabled
          >
            <mip-v-icon>thumb_up</mip-v-icon>
          </mip-v-btn>
        </div>
      </div>
    </div>
  </mip-v-card-text>
</mip-v-card>
```

### 浮动

```html
<div class="text-xs-center">
  <mip-v-btn
    fab
    dark
    small
    color="primary"
  >
    <mip-v-icon dark>remove</mip-v-icon>
  </mip-v-btn>

  <mip-v-btn
    fab
    dark
    small
    color="pink"
  >
    <mip-v-icon dark>favorite</mip-v-icon>
  </mip-v-btn>

  <mip-v-btn
    fab
    dark
    color="indigo"
  >
    <mip-v-icon dark>add</mip-v-icon>
  </mip-v-btn>

  <mip-v-btn
    fab
    dark
    color="teal"
  >
    <mip-v-icon dark>list</mip-v-icon>
  </mip-v-btn>

  <mip-v-btn
    fab
    dark
    large
    color="cyan"
  >
    <mip-v-icon dark>edit</mip-v-icon>
  </mip-v-btn>

  <mip-v-btn
    fab
    dark
    large
    color="purple"
  >
    <mip-v-icon dark>android</mip-v-icon>
  </mip-v-btn>
</div>
```

### 加载器

```html
<style mip-custom>
  .custom-loader {
    animation: loader 1s infinite;
    display: flex;
  }
  @keyframes loader {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
</style>
<mip-data>
  <script type="application/json">
    {
      "loading": false
    }
  </script>
</mip-data>
<div class="text-xs-center">
  <mip-v-btn
    m-bind:loading="loading"
    m-bind:disabled="loading"
    color="secondary"
    on="click:MIP.setData({ loading: true })"
  >
    Accept Terms
  </mip-v-btn>

  <mip-v-btn
    m-bind:loading="loading"
    m-bind:disabled="loading"
    color="blue-grey"
    class="white--text"
    on="click:MIP.setData({ loading: true })"
  >
    Upload
    <mip-v-icon
      right
      dark
    >cloud_upload</mip-v-icon>
  </mip-v-btn>

  <mip-v-btn
    m-bind:loading="loading"
    m-bind:disabled="loading"
    color="success"
    on="click:MIP.setData({ loading: true })"
  >
    Custom Loader
    <span slot="loader">Loading...</span>
  </mip-v-btn>

  <mip-v-btn
    m-bind:loading="loading"
    m-bind:disabled="loading"
    color="info"
    on="click:MIP.setData({ loading: true })"
  >
    Icon Loader
    <span
      slot="loader"
      class="custom-loader"
    >
      <mip-v-icon light>cached</mip-v-icon>
    </span>
  </mip-v-btn>
</div>
<mip-script>
  MIP.watch('loading', (val) => {
    if (val) {
      setTimeout(() => MIP.setData({ loading: false }), 2000)
    }
  })
</mip-script>
<script src="https://c.mipcdn.com/static/v2/mip-script/mip-script.js"></script>
```

### 大小

```html
<div class="container fluid pa-0">
  <div class="layout raw wrap align-center">
    <div class="flex xs12 sm6">
      <div class="text-xs-center">
        <div>
          <mip-v-btn
            small
            color="primary"
            dark
          >Small Button</mip-v-btn>
        </div>
        <div>
          <mip-v-btn
            color="warning"
            dark
          >Normal Button</mip-v-btn>
        </div>
        <div>
          <mip-v-btn
            color="error"
            dark
            large
          >Large Button</mip-v-btn>
        </div>
      </div>
    </div>
    <div class="flex xs12 sm6">
      <div class="text-xs-center">
        <div>
          <mip-v-btn
            color="primary"
            fab
            small
            dark
          >
            <mip-v-icon>edit</mip-v-icon>
          </mip-v-btn>
        </div>
        <div>
          <mip-v-btn
            color="warning"
            fab
            dark
          >
            <mip-v-icon>account_circle</mip-v-icon>
          </mip-v-btn>
        </div>
        <div>
          <mip-v-btn
            color="error"
            fab
            large
            dark
          >
            <mip-v-icon>alarm</mip-v-icon>
          </mip-v-btn>
        </div>
      </div>
    </div>
  </div>
</div>
```

### 轮廓

```html
<div class="text-xs-center">
  <mip-v-btn
    outline
    color="indigo"
  >Outline Button</mip-v-btn>
  <mip-v-btn
    outline
    fab
    color="teal"
  >
    <mip-v-icon>list</mip-v-icon>
  </mip-v-btn>
  <mip-v-btn
    outline
    large
    fab
    color="indigo"
  >
    <mip-v-icon>edit</mip-v-icon>
  </mip-v-btn>
</div>
```

### 圆角

```html
<div class="text-xs-center">
  <mip-v-btn
    round
    color="primary"
    dark
  >Rounded Button</mip-v-btn>
</div>
```

### 块状

```html
<mip-v-btn
  block
  color="secondary"
  dark
>Block Button</mip-v-btn>
```

### In toolbar

```html
<mip-data>
  <script type="application/json">
    {
      "toggleExclusive": 2,
      "toggleMultiple": [
        0,
        1,
        2
      ],
      "dropdownFont": [
        {
          "text": "Arial"
        },
        {
          "text": "Calibri"
        },
        {
          "text": "Courier"
        },
        {
          "text": "Verdana"
        }
      ],
      "dropdownEdit": [
        {
          "text": "100%"
        },
        {
          "text": "75%"
        },
        {
          "text": "50%"
        },
        {
          "text": "25%"
        },
        {
          "text": "0%"
        }
      ]
    }
  </script>
</mip-data>
<mip-v-toolbar dense>
  <mip-v-overflow-btn
    m-bind:items="dropdownFont"
    label="Select font"
    hide-details
  ></mip-v-overflow-btn>

  <mip-v-divider vertical></mip-v-divider>

  <mip-v-overflow-btn
    m-bind:items="dropdownEdit"
    editable
    label="Select size"
    hide-details
    overflow
  ></mip-v-overflow-btn>

  <mip-v-divider
    class="mr-2"
    vertical
  ></mip-v-divider>

  <mip-v-btn-toggle
    m-bind:input-value.sync="toggleMultiple"
    class="transparent"
    multiple
  >
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

  <mip-v-divider
    class="mx-2"
    vertical
  ></mip-v-divider>

  <mip-v-btn-toggle
    m-bind:input-value.sync="toggleExclusive"
    class="transparent"
  >
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
</mip-v-toolbar>
```
