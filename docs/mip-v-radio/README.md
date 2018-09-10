# mip-v-radio

选择控制组件允许用户使用选择项，这些组件必须和 `.sync` 属性一起使用，因为他们无法保持自己的状态。

## 用例

```html
<mip-data>
  <script type="application/json">
    {
      "radioGroup": 1
    }
  </script>
</mip-data>
<mip-v-radio-group m-bind:value.sync="radioGroup">
  <mip-v-radio label="Radio 1">
    <script type="application/json">{"value": 1}</script>
  </mip-v-radio>
  <mip-v-radio label="Radio 2" value="2">
    <script type="application/json">{"value": 2}</script>
  </mip-v-radio>
  <mip-v-radio label="Radio 3" value="3">
    <script type="application/json">{"value": 3}</script>
  </mip-v-radio>
</mip-v-radio-group>
```

## API

### mip-v-radio-group

#### Props

名称|类型|默认值|含义
:--:|:--:|:--:|:---
append-icon|string|/|使用与`mip-v-icon`相同的语法在组件上添加一个后置图标
append-icon-cb|function|/|单击回调添加后置图标
background-color|string|''|
color|string|/|将指定的色彩应用与控件
column|boolean|true|单选框按列显示
dark|boolean|/|应用暗黑主题变体
disabled|boolean|/|输入框是禁用的
error|boolean|/|将输入框设置为手动错误状态。
error-count|number / string|1|同时展示的错误数
error-messages|string / array|[]|将输入框置于错误状态，并传入自定义的错误信息。将与来自**规则（rules）**属性的任何验证相结合。这个字段不会触发验证。
height|number / string|'auto'|设置组件高度
hide-details|boolean|/|隐藏提示，验证错误
hint|string|/|提示文本
label|string|/|设置输入框标签
light|boolean|/|应用明亮主题变体
loading|boolean / string|/|显示线性进度条。可以是指定将哪种颜色应用于进度条的字符串（任何material色彩——主要（primary）, 次要（secondary）, 成功（success）, 信息（info），警告（warning），错误（error）），或者使用组件的布尔值**颜色**（由色彩属性设置——如果它被组件支持的话）还可以是原色。
mandatory|boolean|true|强制选择复选框组的一个子复选框 `mip-v-radio` 
messages|string / array|[]|Displays a list of messages or message if using a string
name|string|/|设置组件的 name 属性
persistent-hint|boolean|/|强制提示始终可见
prepend-icon|string|/|使用与`mip-v-icon`系统的语法在组件上添加一个图标
prepend-icon-cb|function|/|单击时回调添加前置图标
readonly|boolean|/|将输入之余只读状态
row|boolean|/|单选框按行显示
rules|array|[]|返回True或带有错误信息的字符串的函数数组。
success|boolean|/|设置输入框为成功（success）状态
success-messages|string / array|[]|Puts the input in a success state and passes through custom success messsages.
validate-on-blur|boolean|/|延迟验证直到失去焦点的事件被触发
value|any|/|设置选择控件组件的值
value-comparator|function|true|Apply a custom value comparator function

### mip-v-radio

#### Props

名称|类型|默认值|含义
:--:|:--:|:--:|:---
color|string|'accent'|将指定的色彩应用与控件
dark|boolean|/|应用暗黑主题变体
disabled|boolean|/|输入框是禁用的
label|string|/|设置输入框标签
light|boolean|/|应用明亮主题变体
off-icon|string|'$vuetify.icons.radioOff'|
on-icon|string|'$vuetify.icons.radioOn'|
readonly|boolean|/|
ripple|boolean / object|true|应用`mip-v-ripple`指令
value|any|/|设置选择控件组件的值

## 示例

### 方向

```html
<mip-data>
  <script type="application/json">
    {
      "column": null,
      "row": null
    }
  </script>
</mip-data>
<mip-v-radio-group m-bind:value.sync="column" column>
  <mip-v-radio label="Option 1" value="radio-1"></mip-v-radio>
  <mip-v-radio label="Option 2" value="radio-2"></mip-v-radio>
</mip-v-radio-group>
<mip-v-radio-group m-bind:value.sync="row" row>
  <mip-v-radio label="Option 1" value="radio-1"></mip-v-radio>
  <mip-v-radio label="Option 2" value="radio-2"></mip-v-radio>
</mip-v-radio-group>
```

### 颜色

```html
<mip-data>
  <script type="application/json">
    {
      "ex7": "red",
      "ex8": "primary"
    }
  </script>
</mip-data>
<mip-v-radio-group m-bind:value.sync="ex7" column>
  <mip-v-radio label="red" color="red" value="red"></mip-v-radio>
  <mip-v-radio label="red darken-3" color="red darken-3" value="red darken-3"></mip-v-radio>
  <mip-v-radio label="indigo" color="indigo" value="indigo"></mip-v-radio>
  <mip-v-radio label="indigo darken-3" color="indigo darken-3" value="indigo darken-3"></mip-v-radio>
  <mip-v-radio label="orange" color="orange" value="orange"></mip-v-radio>
  <mip-v-radio label="orange darken-3" color="orange darken-3" value="orange darken-3"></mip-v-radio>
</mip-v-radio-group>
<mip-v-radio-group m-bind:value.sync="ex8" column>
  <mip-v-radio label="primary" color="primary" value="primary"></mip-v-radio>
  <mip-v-radio label="secondary" color="secondary" value="secondary"></mip-v-radio>
  <mip-v-radio label="success" color="success" value="success"></mip-v-radio>
  <mip-v-radio label="info" color="info" value="info"></mip-v-radio>
  <mip-v-radio label="warning" color="warning" value="warning"></mip-v-radio>
  <mip-v-radio label="error" color="error" value="error"></mip-v-radio>
</mip-v-radio-group>
```
