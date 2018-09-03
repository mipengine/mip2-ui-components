# mip-v-slider

`mip-v-slider`组件是数字输入的更好的可视化，它用于收集数字用户数据。

## 用例

```html
<mip-v-slider m-bind:value.sync="slider"></mip-v-slider>
<mip-v-slider disabled label="Disabled" inverse-label="" value="30"></mip-v-slider>
<mip-v-slider label="Readonly" readonly value="30"></mip-v-slider>
<mip-v-slider m-bind:value.sync="slider" label="Label"></mip-v-slider>
<mip-v-slider m-bind:value.sync="slider" inverse-label="" label="Inverse label"></mip-v-slider>
<mip-v-slider m-bind:value.sync="volume" append-icon="volume_up" prepend-icon="volume_down"></mip-v-slider>
```

## API

### mip-v-slider

#### Props

名称|类型|默认值|含义
:--:|:--:|:--:|:---
always-dirty|boolean|/|When used with the **thumb-label** prop will always show the thumb label.
append-icon|string|/|Append an icon to the component, uses same syntax as `mip-v-icon`
append-icon-cb|function|/|Callback for appended icon when clicked
background-color|string|''|
color|string|/|将指定的色彩应用与控件
dark|boolean|/|应用暗黑主题变体
disabled|boolean|/|Input is disabled
error|boolean|/|将输入框设置为手动错误状态。
error-count|number / string|1|The total number of errors that should display at once
error-messages|string / array|[]|将输入框置于错误状态，并传入自定义的错误信息。将与来自**规则（rules）**属性的任何验证相结合。这个字段不会触发验证。
height|number / string|/|设置组件高度
hide-details|boolean|/|Hides hint, validation errors
hint|string|/|Hint text
inverse-label|boolean|/|Reverse the label position. Works with **rtl**.
label|string|/|Sets input label
light|boolean|/|应用明亮主题变体
loading|boolean / string|/|显示线性进度条。可以是指定将哪种颜色应用于进度条的字符串（任何material色彩——主要（primary）, 次要（secondary）, 成功（success）, 信息（info），警告（warning），错误（error）），或者使用组件的布尔值**颜色**（由色彩属性设置——如果它被组件支持的话）还可以是原色。
max|number / string|100|设置最大宽度
messages|string / array|[]|Displays a list of messages or message if using a string
min|number / string|/|设置最小宽度
persistent-hint|boolean|/|Forces hint to always be visible
prepend-icon|string|/|Prepend an icon to the component, uses same syntax as `mip-v-icon`
prepend-icon-cb|function|/|Callback for prepended icon when clicked
range|boolean|/|
readonly|boolean|/|Puts input in readonly state
rules|array|[]|返回True或带有错误信息的字符串的函数数组。
step|number / string|1|如果大于0，则为滑块上的点设置步骤间隔
success|boolean|/|Puts the input in a manual success state
success-messages|string / array|[]|Puts the input in a success state and passes through custom success messsages.
thumb-color|string|/|设置拇指和拇指标签颜色
thumb-label|boolean / string|/|显示拇指标签
thumb-size|number / string|32|Controls the size of the **thumb-label**
tick-labels|array|[]|When provided with Array<string>, will attempt to map the labels to each step in index order
tick-size|number / string|1|Controls the size of **ticks**
ticks|boolean / string|/|
track-color|string|/|设置曲目填充色彩
validate-on-blur|boolean|/|延迟验证直到失去焦点的事件被触发
value|number / string|/|Input value

## 示例

### Thumb

```html
<mip-v-slider m-bind:value.sync="slider" thumb-label=""></mip-v-slider>
<mip-v-slider m-bind:value.sync="slider" thumb-label="always">
</mip-v-slider>
<mip-v-slider m-bind:value.sync="slider" thumb-color="red" thumb-label="always">
</mip-v-slider>
<mip-v-slider m-bind:value.sync="slider" thumb-size="24" thumb-label="always">
</mip-v-slider>
<mip-v-slider m-bind:value.sync="slider" always-dirty="" hint="Try set it to &apos;0&apos;" persistent-hint="" thumb-label="always">
</mip-v-slider>
```

### Ticks

```html
<mip-v-slider m-bind:value.sync="value" step="10" ticks=""></mip-v-slider>
<mip-v-slider m-bind:value.sync="value" step="10">
</mip-v-slider>
<mip-v-slider m-bind:value.sync="value" step="10" tick-size="2">
</mip-v-slider>
<mip-v-slider m-bind:value.sync="fruits" max="3" step="1" tick-size="2" m-bind:tick-labels="tickLabels">
</mip-v-slider>
```

### 离散的

```html
<mip-v-slider m-bind:value.sync="value" step="10" thumb-label="" ticks=""></mip-v-slider>
```

### 图标

```html
<mip-v-slider m-bind:value.sync="zoom" append-icon="zoom_in" prepend-icon="zoom_out" on="click-append:MIP.setData({zoom: m.zoom + 10}) click-prepend:MIP.setData({zoom: m.zoom - 10})"></mip-v-slider>
```
