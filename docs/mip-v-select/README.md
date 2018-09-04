# mip-v-select

选择控制组件允许用户使用选择项，这些组件必须和 `.sync` 属性一起使用，因为他们无法保持自己的状态。

## 用例

```html
<mip-data>
  <script type="application/json">
    {
      "items": [
        null,
        "bar",
        "fizz",
        null
      ],
      "value": [
        null,
        "bar",
        "fizz",
        null
      ],
      "select": {}
    }
  </script>
</mip-data>
<div class="container grid-list-xl">
  <div class="layout row wrap">
    <mip-v-select class="flex xs12 md6" m-bind:value.sync="value" m-bind:items="items" attach="" chips="" label="Chips" multiple></mip-v-select>
    <mip-v-select class="flex xs12 md6" m-bind:value.sync="value" m-bind:items="items" box="" chips="" label="Chips" multiple></mip-v-select>
    <mip-v-select class="flex xs12 md6" m-bind:value.sync="value" m-bind:items="items" chips="" label="Chips" multiple outline=""></mip-v-select>
    <mip-v-select class="flex xs12 md6" m-bind:value.sync="value" m-bind:items="items" chips="" label="Chips" multiple solo=""></mip-v-select>
  </div>
</div>
```

## API

### mip-v-select

#### Props

名称|类型|默认值|含义
:--:|:--:|:--:|:---
activator|any|/|
allow-overflow|boolean|/|
append-icon|string|'$vuetify.icons.dropdown'|Append an icon to the component, uses same syntax as `mip-v-icon`
append-icon-cb|function|/|Callback for appended icon when clicked
append-outer-icon|string|/|Append an icon to the outside of `mip-v-text-field`'s input, uses same syntax as `mip-v-icon`
append-outer-icon-cb|function|/|Callback for appended outer icon when clicked
attach|any|/|
auto|boolean|/|在所选择的元素上居中列表
autofocus|boolean|/|启用自动聚焦
background-color|string|''|
box|boolean|/|应用备用输入框样式
browser-autocomplete|string|'on'|Configures the default `<input>` autocomplete attribute
cache-items|boolean|/|
chips|boolean|/|
clear-icon|string|'$vuetify.icons.clear'|Applied when using **clearable** and the input is dirty
clear-icon-cb|function|/|Callback for clear icon when clicked
clearable|boolean|/|添加输入框清除功能，默认图标是 Material Icons **clear**
close-on-click|boolean|true|
close-on-content-click|boolean|true|
color|string|'primary'|将指定的色彩应用与控件
content-class|string|/|
counter|boolean / number / string|/|为输入长度创建一个计数器，如果未指定数字，则默认为25，不会应用任何验证。
dark|boolean|/|应用暗黑主题变体
deletable-chips|boolean|/|
dense|boolean|/|
disabled|boolean|/|输入框是禁用的
dont-fill-mask-blanks|boolean|/|键入时禁用自动字符显示
error|boolean|/|将输入框设置为手动错误状态。
error-count|number / string|1|The total number of errors that should display at once
error-messages|string / array|[]|将输入框置于错误状态，并传入自定义的错误信息。将与来自**规则（rules）**属性的任何验证相结合。这个字段不会触发验证。
flat|boolean|/|当使用**solo**或者**solo-inverted**属性时，移除添加到元素的标高（阴影）
full-width|boolean|/|指定输入框为全屏宽度。
height|number / string|/|设置组件高度
hide-details|boolean|/|Hides hint, validation errors
hide-selected|boolean|/|
hint|string|/|Hint text
input-activator|boolean|/|
item-avatar|string / array / function|'avatar'|
item-disabled|string / array / function|'disabled'|
item-text|string / array / function|'text'|
item-value|string / array / function|'value'|
items|array|[]|
label|string|/|设置输入框标签
light|boolean|/|应用明亮主题变体
loading|boolean / string|/|显示线性进度条。可以是指定将哪种颜色应用于进度条的字符串（任何material色彩——主要（primary）, 次要（secondary）, 成功（success）, 信息（info），警告（warning），错误（error）），或者使用组件的布尔值**颜色**（由色彩属性设置——如果它被组件支持的话）还可以是原色。
mask|object / string|/|将自定义字符掩码应用于输入框。有关更多信息，请参阅上面的掩码表格。
max-height|number / string|300|设置内容的最大高度
max-width|number / string|'auto'|
messages|string / array|[]|Displays a list of messages or message if using a string
min-width|number / string|/|
multi-line|boolean|/|转为多行文本框
multiple|boolean|/|
no-data-text|string|'$vuetify.noDataText'|当没有数据时显示的文本
nudge-bottom|number / string|/|
nudge-left|number / string|/|
nudge-right|number / string|/|
nudge-top|number / string|/|
nudge-width|number / string|/|
offset-overflow|boolean|/|
offset-x|boolean|/|
offset-y|boolean|/|
open-on-clear|boolean|/|
open-on-click|boolean|true|
open-on-hover|boolean|/|
origin|string|'top left'|
outline|boolean|/|Applies the outline style to the input
persistent-hint|boolean|/|Forces hint to always be visible
placeholder|string|/|Sets the input’s placeholder text
position-x|number|/|
position-y|number|/|
prefix|string|/|显示前缀
prepend-icon|string|/|Prepend an icon to the component, uses same syntax as `mip-v-icon`
prepend-icon-cb|function|/|Callback for prepended icon when clicked
prepend-inner-icon|string|/|
prepend-inner-icon-cb|function|/|
readonly|boolean|/|Puts input in readonly state
return-masked-value|boolean|/|返回未修改的掩码字符串
return-object|boolean|/|
reverse|boolean|/|Reverses the input orientation
rules|array|[]|返回True或带有错误信息的字符串的函数数组。
search-input|any|/|
single-line|boolean|/|Label does not move on focus/dirty
small-chips|boolean|/|
solo|boolean|/|改变输入框的样式
solo-inverted|boolean|/|减少元素的不透明度，知道获得焦点
success|boolean|/|Puts the input in a manual success state
success-messages|string / array|[]|Puts the input in a success state and passes through custom success messsages.
suffix|string|/|显示后缀
textarea|boolean|/|Textarea 使用备用样式
transition|string / boolean|'v-menu-transition'|
type|string|'text'|设置输入类型
validate-on-blur|boolean|/|延迟验证直到失去焦点的事件被触发
value|any|/|设置选择控件组件的值
value-comparator|function|true|Apply a custom value comparator function
z-index|number / string|/|

## 示例

### 图标

```html
<mip-data>
  <script type="application/json">
    {
      "items": [
        null,
        "bar",
        "fizz",
        "buzz"
      ],
      "value": [
        null,
        "bar",
        "fizz",
        "buzz"
      ],
      "e1": "Florida",
      "e2": "Texas",
      "states": [
        null,
        "Alaska",
        "American Samoa",
        "Arizona",
        null,
        null,
        "Colorado",
        null,
        null,
        null,
        null,
        null,
        "Georgia",
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      "select": {
        "state": "Florida"
      }
    }
  </script>
</mip-data>
<div class="container grid-list-xl">
  <div class="layout row wrap">
    <div class="flex xs12 md6">
      <h3>prepend-icon</h3>
      <mip-v-select m-bind:items="states" m-bind:value.sync="e1" auto="" label="Select" hide-details="" prepend-icon="map" single-line=""></mip-v-select>
    </div>
    <div class="flex xs12 md6">
      <h3>append-icon</h3>
      <mip-v-select m-bind:items="states" m-bind:value.sync="e2" append-outer-icon="map" auto="" hide-details="" label="Select" single-line=""></mip-v-select>
    </div>
  </div>
</div>
```

### 多选

```html
<mip-data>
  <script type="application/json">
    {
      "items": [
        "foo",
        "bar",
        "fizz",
        "buzz"
      ],
      "value": [
        "foo",
        "bar",
        "fizz",
        "buzz"
      ],
      "states": [
        "Alabama",
        "Alaska",
        "American Samoa",
        "Arizona",
        "Arkansas",
        null,
        "Colorado",
        null,
        null,
        null,
        null,
        null,
        "Georgia",
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        "Ohio",
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      "e3": [],
      "e4": [],
      "select": {
        "state": "Florida"
      }
    }
  </script>
</mip-data>
<div class="container grid-list-xl">
  <div class="layout row wrap">
    <div class="flex xs12 md6">
      <h3>Multiple with persistent hint</h3>
      <mip-v-select m-bind:items="states" m-bind:value.sync="e3" label="Select" multiple max-height="400" hint="Pick your favorite states" persistent-hint=""></mip-v-select>
    </div>
    <div class="flex xs12 md6">
      <h3>Multiple (Chips) with persistent hint</h3>
      <mip-v-select m-bind:items="states" m-bind:value.sync="e4" label="Select" multiple chips="" hint="What are the target regions" persistent-hint=""></mip-v-select>
    </div>
  </div>
</div>
```

### 自定义选项的文本和值

```html
<mip-data>
  <script type="application/json">
    {
      "items": [
        null,
        null,
        "fizz",
        null
      ],
      "value": [
        null,
        null,
        "fizz",
        null
      ],
      "select": {
        "state": "Florida",
        "abbr": "FL"
      },
      "items2": [
        null,
        null,
        {
          "state": "Nebraska",
          "abbr": "NE"
        },
        null,
        null
      ]
    }
  </script>
</mip-data>
<div class="container grid-list-xl">
  <mip-v-select m-bind:hint="`${select.state}, ${select.abbr}`" m-bind:items="items2" m-bind:value.sync="select" item-text="state" item-value="abbr" label="Select" persistent-hint="" return-object="" single-line=""></mip-v-select>
</div>
```
