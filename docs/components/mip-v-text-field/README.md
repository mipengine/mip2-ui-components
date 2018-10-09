# mip-v-text-field

文本框组件用于收集用户提供的信息。

## 用例

```html
<div class="container">
  <div class="row wrap">
    <div class="flex xs12 sm6 md3">
      <mip-v-text-field label="Regular"></mip-v-text-field>
    </div>

    <div class="flex xs12 sm6 md3">
      <mip-v-text-field
        label="Regular"
        placeholder="Placeholder"
      ></mip-v-text-field>
    </div>

    <div class="flex xs12 sm6 md3">
      <mip-v-text-field
        label="Solo"
        solo
      ></mip-v-text-field>
    </div>

    <div class="flex xs12 sm6 md3">
      <mip-v-text-field
        label="Solo"
        placeholder="Placeholder"
        solo
      ></mip-v-text-field>
    </div>

    <div class="flex xs12 sm6 md3">
      <mip-v-text-field
        label="Box"
        box
      ></mip-v-text-field>
    </div>

    <div class="flex xs12 sm6 md3">
      <mip-v-text-field
        label="Box"
        placeholder="Placeholder"
        box
      ></mip-v-text-field>
    </div>

    <div class="flex xs12 sm6 md3">
      <mip-v-text-field
        label="Outline"
        outline
      ></mip-v-text-field>
    </div>

    <div class="flex xs12 sm6 md3">
      <mip-v-text-field
        label="Outline"
        placeholder="Placeholder"
        outline
      ></mip-v-text-field>
    </div>
  </div>
</div>
```

## API

### mip-v-textarea

#### Props

名称|类型|默认值|含义
:--:|:--:|:--:|:---
append-icon|string|/|使用与`mip-v-icon`相同的语法在组件上添加一个后置图标
append-icon-cb|function|/|单击回调添加后置图标
append-outer-icon|string|/|为 `mip-v-text-field` 输入框外部增加一个标签，使用方法同 `mip-v-icon`
append-outer-icon-cb|function|/|当点击添加的外部标签时触发的回调
auto-grow|boolean|/|自动增长输入，需要使用 **.sync**
autofocus|boolean|/|启用自动聚焦
background-color|string|''|背景颜色
box|boolean|/|应用备用输入框样式
browser-autocomplete|string|/|配置`<input>` 默认的自动补全属性
clear-icon|string|'$vuetify.icons.clear'|当使用 **clearable** 属性和输入框有内容时起作用
clear-icon-cb|function|/|当清除标签被点击时的回调
clearable|boolean|/|添加输入框清除功能，默认图标是 Material Icons **clear**
color|string|'primary'|将指定的色彩应用与控件
counter|boolean / number / string|/|为输入长度创建一个计数器，如果未指定数字，则默认为25，不会应用任何验证。
dark|boolean|/|应用暗黑主题变体
disabled|boolean|/|输入框是禁用的
dont-fill-mask-blanks|boolean|/|键入时禁用自动字符显示
error|boolean|/|将输入框设置为手动错误状态。
error-count|number / string|1|同时展示的错误数
error-messages|string / array|[]|将输入框置于错误状态，并传入自定义的错误信息。将与来自**规则（rules）**属性的任何验证相结合。这个字段不会触发验证。
flat|boolean|/|当使用**solo**或者**solo-inverted**属性时，移除添加到元素的标高（阴影）
full-width|boolean|/|指定输入框为全屏宽度。
height|number / string|/|设置组件高度
hide-details|boolean|/|隐藏提示，验证错误
hint|string|/|提示文本
label|string|/|设置输入框标签
light|boolean|/|应用明亮主题变体
loading|boolean / string|/|显示线性进度条。可以是指定将哪种颜色应用于进度条的字符串（任何material色彩——主要（primary）, 次要（secondary）, 成功（success）, 信息（info），警告（warning），错误（error）），或者使用组件的布尔值**颜色**（由色彩属性设置——如果它被组件支持的话）还可以是原色。
mask|object / string|/|将自定义字符掩码应用于输入框。有关更多信息，请参阅上面的掩码表格。
messages|string / array|[]|展示一条消息，或一个消息列表
no-resize|boolean|/|移除 `resize` 的处理操作，只会对 **multi-line** 和 **textarea** 属性起作用
outline|boolean|/|设置输入框的外边缘样式
persistent-hint|boolean|/|强制提示始终可见
placeholder|string|/|设置输入的占位符文本
prefix|string|/|显示前缀
prepend-icon|string|/|使用与`mip-v-icon`系统的语法在组件上添加一个图标
prepend-icon-cb|function|/|单击时回调添加前置图标
prepend-inner-icon|string|/|
prepend-inner-icon-cb|function|/|
readonly|boolean|/|将输入之余只读状态
return-masked-value|boolean|/|返回未修改的掩码字符串
reverse|boolean|/|反转输入方向
row-height|number / string|24|当使用 **multi-line** 或 **textarea** 属性时，可以指定一个自定义的 _row-height_ 来设置输入框的高度
rows|number / string|5|Textarea 的行数
rules|array|[]|返回True或带有错误信息的字符串的函数数组。
single-line|boolean|/|Label does not move on focus/dirty
solo|boolean|/|改变输入框的样式
solo-inverted|boolean|/|减少元素的不透明度，知道获得焦点
success|boolean|/|设置输入框为**成功（success）**状态
success-messages|string / array|[]|设置输入框为**成功（success）**状态，并且传入自定义成功信息
suffix|string|/|显示后缀
textarea|boolean|/|Textarea 使用备用样式
type|string|'text'|设置输入类型
validate-on-blur|boolean|/|延迟验证直到失去焦点的事件被触发
value|any|/|输入值

### mip-v-text-field

#### Props

名称|类型|默认值|含义
:--:|:--:|:--:|:---
append-icon|string|/|使用与`mip-v-icon`相同的语法在组件上添加一个后置图标
append-icon-cb|function|/|单击回调添加后置图标
append-outer-icon|string|/|为 `mip-v-text-field` 输入框外部增加一个标签，使用方法同 `mip-v-icon`
append-outer-icon-cb|function|/|当点击添加的外部标签时触发的回调
autofocus|boolean|/|启用自动聚焦
background-color|string|''|背景颜色
box|boolean|/|应用备用输入框样式
browser-autocomplete|string|/|配置`<input>` 默认的自动补全属性
clear-icon|string|'$vuetify.icons.clear'|当使用 **clearable** 属性和输入框有内容时起作用
clear-icon-cb|function|/|当清除标签被点击时的回调
clearable|boolean|/|添加输入框清除功能，默认图标是 Material Icons **clear**
color|string|'primary'|将指定的色彩应用与控件
counter|boolean / number / string|/|为输入长度创建一个计数器，如果未指定数字，则默认为25，不会应用任何验证。
dark|boolean|/|应用暗黑主题变体
disabled|boolean|/|输入框是禁用的
dont-fill-mask-blanks|boolean|/|键入时禁用自动字符显示
error|boolean|/|将输入框设置为手动错误状态。
error-count|number / string|1|同时展示的错误数
error-messages|string / array|[]|将输入框置于错误状态，并传入自定义的错误信息。将与来自**规则（rules）**属性的任何验证相结合。这个字段不会触发验证。
flat|boolean|/|当使用**solo**或者**solo-inverted**属性时，移除添加到元素的标高（阴影）
full-width|boolean|/|指定输入框为全屏宽度。
height|number / string|/|设置组件高度
hide-details|boolean|/|隐藏提示，验证错误
hint|string|/|提示文本
label|string|/|设置输入框标签
light|boolean|/|应用明亮主题变体
loading|boolean / string|/|显示线性进度条。可以是指定将哪种颜色应用于进度条的字符串（任何material色彩——主要（primary）, 次要（secondary）, 成功（success）, 信息（info），警告（warning），错误（error）），或者使用组件的布尔值**颜色**（由色彩属性设置——如果它被组件支持的话）还可以是原色。
mask|object / string|/|将自定义字符掩码应用于输入框。有关更多信息，请参阅上面的掩码表格。
messages|string / array|[]|展示一条消息，或一个消息列表
outline|boolean|/|设置输入框的外边缘样式
persistent-hint|boolean|/|强制提示始终可见
placeholder|string|/|设置输入的占位符文本
prefix|string|/|显示前缀
prepend-icon|string|/|使用与`mip-v-icon`系统的语法在组件上添加一个图标
prepend-icon-cb|function|/|单击时回调添加前置图标
prepend-inner-icon|string|/|
prepend-inner-icon-cb|function|/|
readonly|boolean|/|将输入之余只读状态
return-masked-value|boolean|/|返回未修改的掩码字符串
reverse|boolean|/|反转输入方向
rules|array|[]|返回True或带有错误信息的字符串的函数数组。
single-line|boolean|/|Label does not move on focus/dirty
solo|boolean|/|改变输入框的样式
solo-inverted|boolean|/|减少元素的不透明度，知道获得焦点
success|boolean|/|设置输入框为**成功（success）**状态
success-messages|string / array|[]|设置输入框为**成功（success）**状态，并且传入自定义成功信息
suffix|string|/|显示后缀
textarea|boolean|/|Textarea 使用备用样式
type|string|'text'|设置输入类型
validate-on-blur|boolean|/|延迟验证直到失去焦点的事件被触发
value|any|/|输入值

## 示例

### 单行亮色主题

```html
<div class="container">
  <div class="layout row wrap">
    <mip-v-text-field
      class="flex xs12 md6"
      label="Regular"
      single-line
    ></mip-v-text-field>
    <mip-v-text-field
      class="flex xs12 md6"
      label="Solo"
      single-line
      solo
    ></mip-v-text-field>
    <mip-v-text-field
      class="flex xs12 md6"
      label="Box"
      single-line
      box
    ></mip-v-text-field>
    <mip-v-text-field
      class="flex xs12 md6"
      label="Outline"
      single-line
      outline
    ></mip-v-text-field>
  </div>
</div>
```

### Disabled and readonly

```html
<div class="container grid-list-xl">
  <div class="layout row wrap">
    <mip-v-text-field
      class="flex xs12 md6"
      value="John Doe"
      label="Regular"
      disabled
    ></mip-v-text-field>
    <mip-v-text-field
      class="flex xs12 md6"
      value="John Doe"
      label="Regular"
      readonly
    ></mip-v-text-field>
    <mip-v-text-field
      class="flex xs12 md6"
      value="John Doe"
      label="Solo"
      solo
      disabled
    ></mip-v-text-field>
    <mip-v-text-field
      class="flex xs12 md6"
      value="John Doe"
      label="Solo"
      solo
      readonly
    ></mip-v-text-field>
    <mip-v-text-field
      class="flex xs12 md6"
      value="John Doe"
      label="Box"
      box
      disabled
    ></mip-v-text-field>
    <mip-v-text-field
      class="flex xs12 md6"
      value="John Doe"
      label="Box"
      box
      readonly
    ></mip-v-text-field>
    <mip-v-text-field
      class="flex xs12 md6"
      value="John Doe"
      label="Outline"
      outline
      disabled
    ></mip-v-text-field>
    <mip-v-text-field
      class="flex xs12 md6"
      value="John Doe"
      label="Outline"
      outline
      readonly
    ></mip-v-text-field>
  </div>
</div>
```

### 带图标

```html
<div class="container grid-list-xl">
  <div class="layout row wrap">
    <mip-v-text-field
      class="flex xs12 md6"
      label="Prepend"
      prepend-icon="place"
    ></mip-v-text-field>
    <mip-v-text-field
      class="flex xs12 md6"
      label="Append"
      append-icon="place"
    ></mip-v-text-field>
    <mip-v-text-field
      class="flex xs12 md6"
      label="Append outer"
      append-outer-icon="place"
    ></mip-v-text-field>
    <mip-v-text-field
      class="flex xs12 md6"
      solo
      label="Prepend"
      prepend-icon="place"
    ></mip-v-text-field>
    <mip-v-text-field
      class="flex xs12 md6"
      solo
      label="Append"
      append-icon="place"
    ></mip-v-text-field>
    <mip-v-text-field
      class="flex xs12 md6"
      solo
      label="Append outer"
      append-outer-icon="place"
    ></mip-v-text-field>
    <mip-v-text-field
      class="flex xs12 md6"
      box
      label="Prepend"
      prepend-icon="place"
    ></mip-v-text-field>
    <mip-v-text-field
      class="flex xs12 md6"
      box
      label="Append"
      append-icon="place"
    ></mip-v-text-field>
    <mip-v-text-field
      class="flex xs12 md6"
      box
      label="Append outer"
      append-outer-icon="place"
    ></mip-v-text-field>
    <mip-v-text-field
      class="flex xs12 md6"
      outline
      label="Prepend"
      prepend-icon="place"
    ></mip-v-text-field>
    <mip-v-text-field
      class="flex xs12 md6"
      outline
      label="Append"
      append-icon="place"
    ></mip-v-text-field>
    <mip-v-text-field
      class="flex xs12 md6"
      outline
      label="Append outer"
      append-outer-icon="place"
    ></mip-v-text-field>
  </div>
</div>
```

### Clearable

```html
<mip-data>
  <script type="application/json">
    {
      "message1": "Hey!",
      "message2": "Hey!",
      "message3": "Hey!",
      "message4": "Hey!",
      "message": "Hey!"
    }
  </script>
</mip-data>
<div class="container grid-list-xl">
  <div class="layout row wrap">
    <mip-v-text-field
      class="flex xs12 md6"
      m-bind:value.sync="message1"
      label="Regular"
      clearable
    ></mip-v-text-field>
    <mip-v-text-field
      class="flex xs12 md6"
      m-bind:value.sync="message2"
      solo
      label="Solo"
      clearable
    ></mip-v-text-field>
    <mip-v-text-field
      class="flex xs12 md6"
      m-bind:value.sync="message3"
      box
      label="Box"
      clearable
    ></mip-v-text-field>
    <mip-v-text-field
      class="flex xs12 md6"
      m-bind:value.sync="message4"
      label="Outline"
      outline
      clearable
    ></mip-v-text-field>
  
  </div>
</div>
```

### Icon events

```html
<mip-data>
  <script type="application/json">
    {
      "message": "Hey!",
      "marker": true,
      "iconIndex": 0,
      "icons": [
        "mdi-emoticon",
        "mdi-emoticon-cool",
        "mdi-emoticon-dead",
        "mdi-emoticon-excited",
        "mdi-emoticon-happy",
        "mdi-emoticon-neutral",
        "mdi-emoticon-sad",
        "mdi-emoticon-tongue"
      ]
    }
  </script>
</mip-data>
<mip-v-flex xs12>
  <mip-v-text-field
    m-bind:value.sync="message"
    m-bind:append-icon="marker ? &apos;mdi-map-marker&apos; : &apos;mdi-map-marker-off&apos;"
    m-bind:append-outer-icon="message ? &apos;mdi-send&apos; : &apos;mdi-microphone&apos;"
    m-bind:prepend-icon="icons[iconIndex]"
    box
    clear-icon="mdi-close-circle"
    clearable
    label="Message"
    type="text"
    on="click-append:MIP.setData({marker: !m.marker})
        click-append-outer:MIP.setData({sendMessage: true})
        click-prepend:MIP.setData({changeIcon: true})
        click-clear:MIP.setData({message: &apos;&apos;})"
  >
</mip-v-text-field></mip-v-flex>
```

### 字符计数器

```html
<mip-data>
  <script type="application/json">
    {
      "title": "Preliminary report",
      "description": "California is a state in the western United States"
    }
  </script>
</mip-data>
<div class="container grid-list-xl">
  <div class="layout row wrap">
    <mip-v-text-field
      class="flex xs12 md6"
      m-bind:value.sync="title"
      counter="25"
      hint="This field uses counter prop"
      label="Regular"
    ></mip-v-text-field>
    <mip-v-text-field
      class="flex xs12 md6"
      m-bind:value.sync="description"
      counter
      maxlength="25"
      hint="This field uses maxlength attribute"
      label="Limit exceeded"
    ></mip-v-text-field>
    <mip-v-text-field
      class="flex xs12 md6"
      m-bind:value.sync="title"
      counter="25"
      box
      label="Box"
    ></mip-v-text-field>
    <mip-v-text-field
      class="flex xs12 md6"
      m-bind:value.sync="title"
      counter="25"
      label="Outline"
      outline
    ></mip-v-text-field>
  </div>
</div>
```

### 密码输入

```html
<mip-data>
  <script type="application/json">
    {
      "password": "Password",
      "show": false,
      "show1": false,
      "show2": true,
      "show3": false,
      "show4": false
    }
  </script>
</mip-data>
<div class="container grid-list-xl">
  <div class="layout row wrap">
    <mip-v-text-field
      class="flex xs12 sm6"
      m-bind:value.sync="password"
      m-bind:append-icon="show1 ? &apos;visibility_off&apos; : &apos;visibility&apos;"
      m-bind:type="show1 ? &apos;text&apos; : &apos;password&apos;"
      name="input-10-1"
      label="Normal with hint text"
      hint="At least 8 characters"
      counter
      on="click-append:MIP.setData({show1: !m.show1})"
    ></mip-v-text-field>
    <mip-v-text-field
      class="flex xs12 sm6 input-group--focused"
      m-bind:append-icon="show2 ? &apos;visibility_off&apos; : &apos;visibility&apos;"
      m-bind:type="show2 ? &apos;text&apos; : &apos;password&apos;"
      name="input-10-2"
      label="Visible"
      hint="At least 8 characters"
      value="wqfasds"
      on="click-append:MIP.setData({show2: !m.show2})"
    ></mip-v-text-field>
    <mip-v-text-field
      class="flex xs12 sm6 input-group--focused"
      m-bind:append-icon="show3 ? &apos;visibility_off&apos; : &apos;visibility&apos;"
      m-bind:type="show3 ? &apos;text&apos; : &apos;password&apos;"
      name="input-10-2"
      label="Not visible"
      hint="At least 8 characters"
      value="wqfasds"
      on="click-append:MIP.setData({show3: !m.show3})"
    ></mip-v-text-field>
    <mip-v-text-field
      class="flex xs12 sm6"
      m-bind:append-icon="show4 ? &apos;visibility_off&apos; : &apos;visibility&apos;"
      m-bind:type="show4 ? &apos;text&apos; : &apos;password&apos;"
      name="input-10-2"
      label="Error"
      hint="At least 8 characters"
      value="Pa"
      error
      on="click-append:MIP.setData({show4: !m.show4})"
    ></mip-v-text-field>
  </div>
</div>
```

### 全宽文本框

```html
<div class="container grid-list-xl">
  <div class="layout row wrap">
    <mip-v-text-field
      class="flex xs12 md6"
      label="Subject"
      value="Plans for the weekend"
      single-line
      full-width
      hide-details
    ></mip-v-text-field>
  </div>
</div>
```

### 提示文本

```html
<div class="container grid-list-xl">
  <div class="layout row wrap">
    <mip-v-text-field
      class="flex xs12 md6"
      label="Your product or service"
      value="Grocery delivery"
      hint="For example, flowers or used cars"
    ></mip-v-text-field>
    <mip-v-text-field
      class="flex xs12 md6"
      label="Your landing page"
      hint="www.example.com/page"
      persistent-hint
    ></mip-v-text-field>
    <mip-v-text-field
      class="flex xs12 md6"
      label="Your product or service"
      value="Grocery delivery"
      hint="For example, flowers or used cars"
      box
    ></mip-v-text-field>
    <mip-v-text-field
      class="flex xs12 md6"
      label="Your landing page"
      hint="www.example.com/page"
      persistent-hint
      box
    ></mip-v-text-field>
    <mip-v-text-field
      class="flex xs12 md6"
      label="Your product or service"
      value="Grocery delivery"
      hint="For example, flowers or used cars"
      outline
    ></mip-v-text-field>
    <mip-v-text-field
      class="flex xs12 md6"
      label="Your landing page"
      hint="www.example.com/page"
      persistent-hint
      outline
    ></mip-v-text-field>
  </div>
</div>
```

### 前缀和后缀

```html
<div class="container grid-list-xl">
  <div class="layout row wrap">
    <mip-v-text-field
      class="flex xs12 md6"
      label="Amount"
      value="10.00"
      prefix="$"
    ></mip-v-text-field>
    <mip-v-text-field
      class="flex xs12 md6"
      label="Weight"
      value="28.00"
      suffix="lbs"
    ></mip-v-text-field>
    <mip-v-text-field
      class="flex xs12 md6"
      label="Email address"
      value="example"
      suffix="@gmail.com"
    ></mip-v-text-field>
    <mip-v-text-field
      class="flex xs12 md6"
      label="Label Text"
      value="12:30:00"
      type="time"
      suffix="PST"
    ></mip-v-text-field>
  </div>
</div>
```

### 盒子样式

```html
<mip-data>
  <script type="application/json">
    {
      "first": "John",
      "last": "Doe"
    }
  </script>
</mip-data>
<div class="container grid-list-xl">
  <div class="layout row wrap">
    <mip-v-text-field
      class="flex xs12 md6"
      m-bind:value.sync="first"
      label="First Name"
      box
    ></mip-v-text-field>
    <mip-v-text-field
      class="flex xs12 md6"
      m-bind:value.sync="last"
      label="Last Name"
      box
    ></mip-v-text-field>
  </div>
</div>
```

### Solo style

```html
<mip-data>
  <script type="application/json">
    {
      "first": "John",
      "last": "Doe"
    }
  </script>
</mip-data>
<div class="container grid-list-xl">
  <div class="layout row wrap">
    <mip-v-text-field
      class="flex xs12 md6"
      m-bind:value.sync="first"
      label="First Name"
      solo
    ></mip-v-text-field>
    <mip-v-text-field
      class="flex xs12 md6"
      m-bind:value.sync="last"
      label="Last Name"
      solo-inverted
    ></mip-v-text-field>
  </div>
</div>
```

### Outline style

```html
<mip-data>
  <script type="application/json">
    {
      "first": "John",
      "last": "Doe"
    }
  </script>
</mip-data>
<div class="container grid-list-xl">
  <div class="layout row wrap">
    <mip-v-text-field
      class="flex xs12 md6"
      m-bind:value.sync="first"
      label="First Name"
      outline
    ></mip-v-text-field>
    <mip-v-text-field
      class="flex xs12 md6"
      m-bind:value.sync="last"
      label="Last Name"
      outline
    ></mip-v-text-field>
  </div>
</div>
```

### 自定义颜色

```html
<mip-data>
  <script type="application/json">
    {
      "first": "John",
      "last": "Doe",
      "form": {
        "first": "",
        "last": ""
      }
    }
  </script>
</mip-data>
<div class="container grid-list-xl">
  <div class="layout row wrap">
  <mip-v-text-field
    class="flex xs12 md6"
    m-bind:value.sync="form.first"
    color="purple darken-2"
    label="First name"
    required
  ></mip-v-text-field>
  <mip-v-text-field
    class="flex xs12 md6"
    m-bind:value.sync="form.last"
    color="blue darken-2"
    label="Last name"
    required
  ></mip-v-text-field>
  </div>
</div>
```

### 掩码

```html
<mip-data>
  <script type="application/json">
    {
      "mask": "credit-card"
    }
  </script>
</mip-data>
<mip-v-card>
  <mip-v-card-text>
    <mip-v-text-field
      m-bind:value.sync="mask"
      label="Mask"
    ></mip-v-text-field>
  </mip-v-card-text>
  <mip-v-card-text>
    <mip-v-text-field
      m-bind:mask="mask"
      m-bind:value.sync="maskValue"
      label="Value"
    ></mip-v-text-field>
  </mip-v-card-text>
</mip-v-card>
```

### 进度条

```html
<mip-data>
  <script type="application/json">
    {
      "progressValue": "",
      "custom": true,
      "progress": "",
      "color": "error"
    }
  </script>
</mip-data>
<div class="container grid-list-xl">
  <mip-v-checkbox
    m-bind:input-value.sync="custom"
    label="Custom progress bar"
  ></mip-v-checkbox>
  <mip-v-text-field
    m-bind:value.sync="progressValue"
    color="cyan darken"
    label="Text field"
    placeholder="Start typing..."
    loading
  >
    <mip-v-progress-linear
      m-bind:class="{hide: !m.custom}"
      slot="progress"
      m-bind:value="progress"
      m-bind:color="color"
      height="7"
    ></mip-v-progress-linear>
  </mip-v-text-field>
</div>
<mip-script>
  MIP.watch('sendMessage', val => {
    MIP.setData({
      iconIndex: 0,
      message: '',
      sendMessage: false
    })
  })

  MIP.watch('changeIcon', val => {
    if (val) {
      let iconIndex = MIP.getData('iconIndex')
      let icons = MIP.getData('icons')
      MIP.setData({
        iconIndex: (iconIndex === icons.length - 1) ? 0 : ++iconIndex
      })
    }
    MIP.setData({
      changeIcon: false
    })
  })
  MIP.watch('progressValue', val => {
    let progress = Math.min(100, val.length * 10)
    MIP.setData({
      progress,
      color: ['error', 'warning', 'success'][Math.floor(progress / 40)]
    })
  })
</mip-script>
<script src="https://c.mipcdn.com/static/v2/mip-script/mip-script.js"></script>
```
