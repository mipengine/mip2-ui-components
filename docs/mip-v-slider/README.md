# mip-v-slider

`mip-v-slider`组件是数字输入的更好的可视化，它用于收集数字用户数据。

## 用例

```html
<mip-data>
  <script type="application/json">
    {
      "slider": 45,
      "volume": 10
    }
  </script>
</mip-data>
<mip-v-slider m-bind:value.sync="slider"></mip-v-slider>
<mip-v-slider disabled label="Disabled" inverse-label value="30"></mip-v-slider>
<mip-v-slider label="Readonly" readonly value="30"></mip-v-slider>
<mip-v-slider m-bind:value.sync="slider" label="Label"></mip-v-slider>
<mip-v-slider m-bind:value.sync="slider" inverse-label label="Inverse label"></mip-v-slider>
<mip-v-slider m-bind:value.sync="volume" append-icon="volume_up" prepend-icon="volume_down"></mip-v-slider>
```

## API

### mip-v-slider

#### Props

名称|类型|默认值|含义
:--:|:--:|:--:|:---
always-dirty|boolean|/|当这个属性和 **thumb-label** 一起使用时，拇指标签会一直显示
append-icon|string|/|使用与`mip-v-icon`相同的语法在组件上添加一个后置图标
append-icon-cb|function|/|单击回调添加后置图标
background-color|string|''|
color|string|/|将指定的色彩应用与控件
dark|boolean|/|应用暗黑主题变体
disabled|boolean|/|输入框是禁用的
error|boolean|/|将输入框设置为手动错误状态。
error-count|number / string|1|同时展示的错误数
error-messages|string / array|[]|将输入框置于错误状态，并传入自定义的错误信息。将与来自**规则（rules）**属性的任何验证相结合。这个字段不会触发验证。
height|number / string|/|设置组件高度
hide-details|boolean|/|隐藏提示，验证错误
hint|string|/|提示文本
inverse-label|boolean|/|倒序设置标签，和 **rtl** 一起使用
label|string|/|设置输入框标签
light|boolean|/|应用明亮主题变体
loading|boolean / string|/|显示线性进度条。可以是指定将哪种颜色应用于进度条的字符串（任何material色彩——主要（primary）, 次要（secondary）, 成功（success）, 信息（info），警告（warning），错误（error）），或者使用组件的布尔值**颜色**（由色彩属性设置——如果它被组件支持的话）还可以是原色。
max|number / string|100|设置最大宽度
messages|string / array|[]|Displays a list of messages or message if using a string
min|number / string|/|设置最小宽度
persistent-hint|boolean|/|强制提示始终可见
prepend-icon|string|/|使用与`mip-v-icon`系统的语法在组件上添加一个图标
prepend-icon-cb|function|/|单击时回调添加前置图标
range|boolean|/|
readonly|boolean|/|将输入之余只读状态
rules|array|[]|返回True或带有错误信息的字符串的函数数组。
step|number / string|1|如果大于0，则为滑块上的点设置步骤间隔
success|boolean|/|设置输入框为**成功（success）**状态
success-messages|string / array|[]|设置输入框为**成功（success）**状态，并且传入自定义成功信息
thumb-color|string|/|设置拇指和拇指标签颜色
thumb-label|boolean / string|/|显示拇指标签
thumb-size|number / string|32|控制 **thumb-label** 的大小
tick-labels|array|[]|如果值为 Array<string>，则会按照序号尝试给每一步分配标签
tick-size|number / string|1|控制 **ticks** 的颜色
ticks|boolean / string|/|
track-color|string|/|设置轨迹填充颜色
validate-on-blur|boolean|/|延迟验证直到失去焦点的事件被触发
value|number / string|/|输入值

## 示例

### Thumb

```html
<mip-data>
  <script type="application/json">
    {
      "slider": 45
    }
  </script>
</mip-data>
<div class="container fluid grid-list-lg">
  <div class="layout row wrap">
    <div class="flex xs12">
      <mip-v-subheader class="pl-0">Show thumb when using slider</mip-v-subheader>
      <mip-v-slider m-bind:value.sync="slider" thumb-label></mip-v-slider>
    </div>

    <div class="flex xs12">
      <mip-v-subheader class="pl-0">Always show thumb label</mip-v-subheader>
      <mip-v-slider m-bind:value.sync="slider" thumb-label="always"></mip-v-slider>
    </div>

    <div class="flex xs12">
      <mip-v-subheader class="pl-0">Custom thumb color</mip-v-subheader>
      <mip-v-slider m-bind:value.sync="slider" thumb-color="red" thumb-label="always"></mip-v-slider>
    </div>

    <div class="flex xs12">
      <mip-v-subheader class="pl-0">Custom thumb size</mip-v-subheader>
      <mip-v-slider m-bind:value.sync="slider" thumb-size="24" thumb-label="always"></mip-v-slider>
    </div>

    <div class="flex xs12">
      <mip-v-subheader class="pl-0">Always dirty</mip-v-subheader>
      <mip-v-slider m-bind:value.sync="slider" always-dirty hint="Try set it to &apos;0&apos;" persistent-hint thumb-label="always"></mip-v-slider>
    </div>
  </div>
</div>
```

### Ticks

```html
<mip-data>
  <script type="application/json">
    {
      "value": 0,
      "fruits": 0,
      "tickLabels": [
        "Figs",
        "Lemon",
        "Pear",
        "Apple"
      ]
    }
  </script>
</mip-data>
<mip-v-slider m-bind:value.sync="value" step="10" ticks></mip-v-slider>
<mip-v-slider m-bind:value.sync="value" step="10">
</mip-v-slider>
<mip-v-slider m-bind:value.sync="value" step="10" tick-size="2">
</mip-v-slider>
<mip-v-slider m-bind:value.sync="fruits" max="3" step="1" tick-size="2" m-bind:tick-labels="tickLabels">
</mip-v-slider>
```

### 离散的

```html
<mip-data>
  <script type="application/json">
    {
      "value": 0
    }
  </script>
</mip-data>
<mip-v-slider m-bind:value.sync="value" step="10" thumb-label ticks></mip-v-slider>
```

### 图标

```html
<mip-data>
  <script type="application/json">
    {
      "zoom": 0
    }
  </script>
</mip-data>
<mip-v-slider m-bind:value.sync="zoom" append-icon="alarm"></mip-v-slider>
<mip-v-slider m-bind:value.sync="zoom" prepend-icon="volume_up"></mip-v-slider>
<mip-v-slider m-bind:value.sync="zoom" append-icon="zoom_in" prepend-icon="zoom_out" on="click-append:MIP.setData({zoom: m.zoom + 10}) click-prepend:MIP.setData({zoom: m.zoom - 10})"></mip-v-slider>
```

### 带有可编辑的数值

```html
<mip-data>
  <script type="application/json">
    {
      "red": 64,
      "green": 128,
      "blue": 0
    }
  </script>
</mip-data>
<mip-v-card>
  <div m-bind:style="{ height:&apos;300px&apos;,background:`rgb(${red}, ${green}, ${blue})`}"></div>

  <mip-v-card-text>
    <div class="container fluid grid-list-lg">
      <div class="layout row wrap">
        <div class="flex xs9">
          <mip-v-slider m-bind:value.sync="red" max="255" label="R"></mip-v-slider>
        </div>

        <div class="flex xs3">
          <mip-v-text-field m-bind:value.sync="red" class="mt-0" type="number"></mip-v-text-field>
        </div>

        <div class="flex xs9">
          <mip-v-slider m-bind:value.sync="green" max="255" label="G"></mip-v-slider>
        </div>

        <div class="flex xs3">
          <mip-v-text-field m-bind:value.sync="green" class="mt-0" type="number"></mip-v-text-field>
        </div>

        <div class="flex xs9">
          <mip-v-slider max="255" m-bind:value.sync="blue" label="B"></mip-v-slider>
        </div>

        <div class="flex xs3">
          <mip-v-text-field m-bind:value.sync="blue" class="mt-0" type="number"></mip-v-text-field>
        </div>
      </div>
    </div>
  </mip-v-card-text>
</mip-v-card>
```

### 自定义色彩

```html
<mip-data>
  <script type="application/json">
    {
      "ex1": {
        "label": "color",
        "val": 25,
        "color": "orange darken-3"
      },
      "ex2": {
        "label": "track-color",
        "val": 75,
        "color": "green lighten-1"
      },
      "ex3": {
        "label": "thumb-color",
        "val": 50,
        "color": "red"
      }
    }
  </script>
</mip-data>
<div>
  <mip-v-slider m-bind:value.sync="ex1.val" m-bind:color="ex1.color" m-bind:label="ex1.label"></mip-v-slider>

  <mip-v-slider m-bind:value.sync="ex2.val" m-bind:label="ex2.label" m-bind:track-color="ex2.color"></mip-v-slider>

  <mip-v-slider m-bind:value.sync="ex3.val" m-bind:label="ex3.label" m-bind:thumb-color="ex3.color" thumb-label="always"></mip-v-slider>
</div>
```

### 范围

```html
<mip-data>
  <script type="application/json">
    {
      "value": 0,
      "value1": [
        30,
        60
      ],
      "value2": [
        0,
        40
      ],
      "value3": [
        110,
        440
      ]
    }
  </script>
</mip-data>
<mip-v-card flat color="transparent">
  <mip-v-subheader>Default range slider</mip-v-subheader>

  <mip-v-card-text>
    <mip-v-range-slider m-bind:value.sync="value1"></mip-v-range-slider>
  </mip-v-card-text>

  <mip-v-subheader>Disabled range slider</mip-v-subheader>

  <mip-v-card-text>
    <mip-v-range-slider m-bind:value.sync="value2" disabled></mip-v-range-slider>
  </mip-v-card-text>

  <mip-v-subheader>Min and max range slider</mip-v-subheader>

  <mip-v-card-text>
    <div class="layout row">
      <div class="flex shrink" style="width: 60px">
        <mip-v-text-field m-bind:value.sync="value3[0]" class="mt-0" hide-details single-line type="number"></mip-v-text-field>
      </div>

      <div class="flex px-3">
        <mip-v-range-slider m-bind:value.sync="value3" max="600" min="20" step="10"></mip-v-range-slider>
      </div>

      <div class="flex shrink" style="width: 60px">
        <mip-v-text-field m-bind:value.sync="value3[1]" class="mt-0" hide-details single-line type="number"></mip-v-text-field>
      </div>
    </div>
  </mip-v-card-text>
</mip-v-card>
```

### 最大值和最小值

```html
<mip-data>
  <script type="application/json">
    {
      "slider": 45,
      "min": -50,
      "max": 90,
      "slider0": 40,
      "range": [
        -20,
        70
      ]
    }
  </script>
</mip-data>
<mip-v-card flat color="transparent">
  <mip-v-subheader>Min and max default slider</mip-v-subheader>

  <mip-v-card-text>
    <div class="layout row">
      <div class="flex pr-3">
        <mip-v-slider m-bind:value.sync="slider0" m-bind:max="max" m-bind:min="min"></mip-v-slider>
      </div>

      <div class="flex shrink" style="width: 60px">
        <mip-v-text-field m-bind:value.sync="slider0" class="mt-0" hide-details single-line type="number"></mip-v-text-field>
      </div>
    </div>
  </mip-v-card-text>

  <mip-v-subheader>Min and max range slider</mip-v-subheader>

  <mip-v-card-text>
    <div class="layout row">
      <div class="flex shrink" style="width: 60px">
        <mip-v-text-field m-bind:value.sync="range[0]" class="mt-0" hide-details single-line type="number"></mip-v-text-field>
      </div>
      <div class="flex px-3">
        <mip-v-range-slider m-bind:value.sync="range" m-bind:max="max" m-bind:min="min"></mip-v-range-slider>
      </div>
      <div class="flex shrink" style="width: 60px">
        <mip-v-text-field m-bind:value.sync="range[1]" class="mt-0" hide-details single-line type="number"></mip-v-text-field>
      </div>
    </div>
  </mip-v-card-text>
</mip-v-card>
```
