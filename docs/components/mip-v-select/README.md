# mip-v-select

选择器组件用于从选项列表中收集用户提供的信息。

## 用例

```html
<mip-data>
  <script type="application/json">
    {
      "items": [
        "foo",
        "bar",
        "fizz",
        "buzz"
      ]
    }
  </script>
</mip-data>
<div class="container fluid grid-list-xl">
  <div class="layout wrap align-center">
    <div class="flex wrap align-center">
      <mip-v-select
        m-bind:items="items"
        label="Standard"
      ></mip-v-select>
    </div>

    <div class="flex wrap align-center">
      <mip-v-select
        m-bind:items="items"
        box
        label="Box style"
      ></mip-v-select>
    </div>

    <div class="flex wrap align-center">
      <mip-v-select
        m-bind:items="items"
        label="Outline style"
        outline
      ></mip-v-select>
    </div>

    <div class="flex wrap align-center">
      <mip-v-select
        m-bind:items="items"
        label="Solo field"
        solo
      ></mip-v-select>
    </div>
  </div>
</div>
```

## API

### mip-v-select

#### Props

名称|类型|默认值|含义
:--:|:--:|:--:|:---
activator|any|/|在未使用激活器插槽时，可以是任何有效的查询选择器（querySelector）或Node对象。
allow-overflow|boolean|/|移除内容的移除重新定位
append-icon|string|'$vuetify.icons.dropdown'|使用与`mip-v-icon`相同的语法在组件上添加一个后置图标
append-icon-cb|function|/|单击回调添加后置图标
append-outer-icon|string|/|为 `mip-v-text-field` 输入框外部增加一个标签，使用方法同 `mip-v-icon`
append-outer-icon-cb|function|/|当点击添加的外部标签时触发的回调
attach|any|/|指定该组件应该分离到哪个DOM元素，使用CSS选择器字符串或元素的对象应用。
auto|boolean|/|在所选择的元素上居中列表
autofocus|boolean|/|启用自动聚焦
background-color|string|''|背景颜色
box|boolean|/|应用备用输入框样式
browser-autocomplete|string|'on'|设置搜索框的浏览器自动补全
cache-items|boolean|/|保留已经通过 **items** 属性的项在本地的唯一副本
chips|boolean|/|将一个已选择项改为小纸片（chips）的显示方式
clear-icon|string|'$vuetify.icons.clear'|当使用 **clearable** 属性和输入框有内容时起作用
clear-icon-cb|function|/|当清除标签被点击时的回调
clearable|boolean|/|添加输入框清除功能，默认图标是 Material Icons **clear**
close-on-click|boolean|true|指定菜单应该在外部激活器被点击时关闭。
close-on-content-click|boolean|true|指定点击内容时菜单是否应该关闭。
color|string|'primary'|将指定的色彩应用与控件
content-class|string|/|将自定义类应用于分离的元素。这是很有用的，因为内容被移动到应用程序的末尾，而不是直接通过组件传递给类。
counter|boolean / number / string|/|为输入长度创建一个计数器，如果未指定数字，则默认为25，不会应用任何验证。
dark|boolean|/|应用暗黑主题变体
deletable-chips|boolean|/|给选定的小纸片（chips）添加一个去除图标
dense|boolean|/|减小列表的最大高度
disabled|boolean|/|禁用输入
dont-fill-mask-blanks|boolean|/|键入时禁用自动字符显示
error|boolean|/|将输入框设置为手动错误状态。
error-count|number / string|1|同时展示的错误数
error-messages|string / array|[]|将输入框置于错误状态，并传入自定义的错误信息。将与来自**规则（rules）**属性的任何验证相结合。这个字段不会触发验证。
flat|boolean|/|当使用**solo**或者**solo-inverted**属性时，移除添加到元素的标高（阴影）
full-width|boolean|/|指定输入框为全屏宽度。
height|number / string|/|设置组件高度
hide-details|boolean|/|隐藏提示，验证错误
hide-selected|boolean|/|不要在选择菜单中显示已选择的项
hint|string|/|提示文本
input-activator|boolean|/|Sets a new activator target for the detached element. Use when placing detachable items in `mip-v-input` slots
item-avatar|string / array / function|'avatar'|设置 **items** 属性的头像
item-disabled|string / array / function|'disabled'| 禁用 **items** 的属性值
item-text|string / array / function|'text'|设置**items**'属性的文本值
item-value|string / array / function|'value'|设置**items**属性的值
items|array|[]|可以是一个对象数组或字符串数组，当使用对象时，会查找文本和值字段，这可以使用 **item-text** 和 **item-value** 属性来改变。
label|string|/|设置输入框标签
light|boolean|/|应用明亮主题变体
loading|boolean / string|/|显示线性进度条。可以是指定将哪种颜色应用于进度条的字符串（任何material色彩——主要（primary）, 次要（secondary）, 成功（success）, 信息（info），警告（warning），错误（error）），或者使用组件的布尔值**颜色**（由色彩属性设置——如果它被组件支持的话）还可以是原色。
mask|object / string|/|将自定义字符掩码应用于输入框。有关更多信息，请参阅上面的掩码表格。
max-height|number / string|300|设置内容的最大高度
max-width|number / string|'auto'|设置内容的最大宽度
messages|string / array|[]|展示一条消息，或一个消息列表
min-width|number / string|/|设置内容的最小宽度
multi-line|boolean|/|当选择器组件被聚焦或使用时，使标签浮动
multiple|boolean|/|多选，接受数组作为值
no-data-text|string|'$vuetify.noDataText'|当没有数据时显示的文本
nudge-bottom|number / string|/|向底部微调内容
nudge-left|number / string|/|向左侧微调内容
nudge-right|number / string|/|向右侧微调内容
nudge-top|number / string|/|向顶部微调内容
nudge-width|number / string|/|微调内容宽度
offset-overflow|boolean|/|当由于溢出而重新定位时，导致组件翻转到另一侧
offset-x|boolean|/|在x轴上偏移菜单，与左/右方向一起工作
offset-y|boolean|/|在y轴上偏移菜单，与上/下方向一起工作
open-on-clear|boolean|/|当使用 **clearable** 属性, 一旦清除，选择菜单将打开或保持打开，这个取决于当前状态
open-on-click|boolean|true|指定是否在激活器点击时打开菜单
open-on-hover|boolean|/|指定是否在激活器悬停时打开菜单
origin|string|'top left'|设置过渡原点
outline|boolean|/|设置输入框的外边缘样式
persistent-hint|boolean|/|强制提示始终可见
placeholder|string|/|设置输入的占位符文本
position-x|number|/|用于在不使用激活器插槽时定位内容
position-y|number|/|用于在不使用激活器插槽时定位内容
prefix|string|/|显示前缀
prepend-icon|string|/|使用与`mip-v-icon`系统的语法在组件上添加一个图标
prepend-icon-cb|function|/|单击时回调添加前置图标
prepend-inner-icon|string|/|
prepend-inner-icon-cb|function|/|
readonly|boolean|/|将输入之余只读状态
return-masked-value|boolean|/|返回未修改的掩码字符串
return-object|boolean|/|将选择器的行为更改为直接返回对象，而不是 item-value 指定的值
reverse|boolean|/|反转输入方向
rules|array|[]|返回True或带有错误信息的字符串的函数数组。
search-input|any|/|使用自动补全（autocomplete）属性，使用 .sync 修饰符从自动补全搜索框中捕获用户的输入
single-line|boolean|/|Label does not move on focus/dirty
small-chips|boolean|/|使用 **small** 属性可以改变选择器的外观
solo|boolean|/|改变输入框的样式
solo-inverted|boolean|/|减少元素的不透明度，知道获得焦点
success|boolean|/|设置输入框为**成功（success）**状态
success-messages|string / array|[]|设置输入框为**成功（success）**状态，并且传入自定义成功信息
suffix|string|/|显示后缀
textarea|boolean|/|Textarea 使用备用样式
transition|string / boolean|'v-menu-transition'|设置组件过渡效果，可以是内置的过渡配置或者是您自己的配置的其中一个。
type|string|'text'|设置输入类型
validate-on-blur|boolean|/|延迟验证直到失去焦点的事件被触发
value|any|/|输入值
value-comparator|function|true|用于值的比较算法
z-index|number / string|/|用于组件的z-index

## 示例

### 亮色主题

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
      ]
    }
  </script>
</mip-data>
<div class="container grid-list-xl">
  <div class="layout row wrap">
    <mip-v-select
      class="flex xs12 md6"
      m-bind:value.sync="value"
      m-bind:items="items"
      attach
      chips
      label="Chips"
      multiple
    ></mip-v-select>
    <mip-v-select
      class="flex xs12 md6"
      m-bind:value.sync="value"
      m-bind:items="items"
      box
      chips
      label="Chips"
      multiple
    ></mip-v-select>
    <mip-v-select
      class="flex xs12 md6"
      m-bind:value.sync="value"
      m-bind:items="items"
      chips
      label="Chips"
      multiple
      outline
    ></mip-v-select>
    <mip-v-select
      class="flex xs12 md6"
      m-bind:value.sync="value"
      m-bind:items="items"
      chips
      label="Chips"
      multiple
      solo
    ></mip-v-select>
  </div>
</div>
```

### 图标

```html
<mip-data>
  <script type="application/json">
    {
      "e1": "Florida",
      "e2": "Texas",
      "states": [
        "Alabama",
        "Alaska",
        "American Samoa",
        "Arizona",
        "Arkansas",
        "California",
        "Colorado",
        "Connecticut",
        "Delaware",
        "District of Columbia",
        "Federated States of Micronesia",
        "Florida",
        "Georgia",
        "Guam",
        "Hawaii",
        "Idaho",
        "Illinois",
        "Indiana",
        "Iowa",
        "Kansas",
        "Kentucky",
        "Louisiana",
        "Maine",
        "Marshall Islands",
        "Maryland",
        "Massachusetts",
        "Michigan",
        "Minnesota",
        "Mississippi",
        "Missouri",
        "Montana",
        "Nebraska",
        "Nevada",
        "New Hampshire",
        "New Jersey",
        "New Mexico",
        "New York",
        "North Carolina",
        "North Dakota",
        "Northern Mariana Islands",
        "Ohio",
        "Oklahoma",
        "Oregon",
        "Palau",
        "Pennsylvania",
        "Puerto Rico",
        "Rhode Island",
        "South Carolina",
        "South Dakota",
        "Tennessee",
        "Texas",
        "Utah",
        "Vermont",
        "Virgin Island",
        "Virginia",
        "Washington",
        "West Virginia",
        "Wisconsin",
        "Wyoming"
      ]
    }
  </script>
</mip-data>
<div class="container grid-list-xl">
  <div class="layout row wrap">
    <div class="flex xs12 md6">
      <h3>prepend-icon</h3>
      <mip-v-select
        m-bind:items="states"
        m-bind:value.sync="e1"
        auto
        label="Select"
        hide-details
        prepend-icon="map"
        single-line
      ></mip-v-select>
    </div>
    <div class="flex xs12 md6">
      <h3>append-icon</h3>
      <mip-v-select
        m-bind:items="states"
        m-bind:value.sync="e2"
        append-outer-icon="map"
        auto
        hide-details
        label="Select"
        single-line
      ></mip-v-select>
    </div>
  </div>
</div>
```

### 多选

```html
<mip-data>
  <script type="application/json">
    {
      "states": [
        "Alabama",
        "Alaska",
        "American Samoa",
        "Arizona",
        "Arkansas",
        "California",
        "Colorado",
        "Connecticut",
        "Delaware",
        "District of Columbia",
        "Federated States of Micronesia",
        "Florida",
        "Georgia",
        "Guam",
        "Hawaii",
        "Idaho",
        "Illinois",
        "Indiana",
        "Iowa",
        "Kansas",
        "Kentucky",
        "Louisiana",
        "Maine",
        "Marshall Islands",
        "Maryland",
        "Massachusetts",
        "Michigan",
        "Minnesota",
        "Mississippi",
        "Missouri",
        "Montana",
        "Nebraska",
        "Nevada",
        "New Hampshire",
        "New Jersey",
        "New Mexico",
        "New York",
        "North Carolina",
        "North Dakota",
        "Northern Mariana Islands",
        "Ohio",
        "Oklahoma",
        "Oregon",
        "Palau",
        "Pennsylvania",
        "Puerto Rico",
        "Rhode Island",
        "South Carolina",
        "South Dakota",
        "Tennessee",
        "Texas",
        "Utah",
        "Vermont",
        "Virgin Island",
        "Virginia",
        "Washington",
        "West Virginia",
        "Wisconsin",
        "Wyoming"
      ],
      "e3": [],
      "e4": []
    }
  </script>
</mip-data>
<div class="container grid-list-xl">
  <div class="layout row wrap">
    <div class="flex xs12 md6">
      <h3>Multiple with persistent hint</h3>
      <mip-v-select
        m-bind:items="states"
        m-bind:value.sync="e3"
        label="Select"
        multiple
        max-height="400"
        hint="Pick your favorite states"
        persistent-hint
      ></mip-v-select>
    </div>
    <div class="flex xs12 md6">
      <h3>Multiple (Chips) with persistent hint</h3>
      <mip-v-select
        m-bind:items="states"
        m-bind:value.sync="e4"
        label="Select"
        multiple
        chips
        hint="What are the target regions"
        persistent-hint
      ></mip-v-select>
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
        "foo",
        "bar",
        "fizz",
        "buzz"
      ],
      "select": {
        "state": "Florida",
        "abbr": "FL"
      },
      "items2": [
        {
          "state": "Florida",
          "abbr": "FL"
        },
        {
          "state": "Georgia",
          "abbr": "GA"
        },
        {
          "state": "Nebraska",
          "abbr": "NE"
        },
        {
          "state": "California",
          "abbr": "CA"
        },
        {
          "state": "New York",
          "abbr": "NY"
        }
      ]
    }
  </script>
</mip-data>
<div class="container grid-list-xl">
  <mip-v-select
    m-bind:hint="`${select.state}, ${select.abbr}`"
    m-bind:items="items2"
    m-bind:value.sync="select"
    item-text="state"
    item-value="abbr"
    label="Select"
    persistent-hint
    return-object
    single-line
  ></mip-v-select>
</div>
```
