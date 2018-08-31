# mip-v-input

The `mip-v-input` component gives you a baseline to create your own custom inputs. It consists of a prepend/append slot, messages, and a default slot. It is _recommended_ that you extend this component, but it can be used as a standalone.

## 用例

```html
<mip-v-input label="Label" m-bind:messages="input_validation" append-icon="close" prepend-icon="phone">
  <input type="text">
</mip-v-input>
<mip-v-input label="Label" m-bind:messages="input_validation" append-icon="close" prepend-icon="phone" m-bind:loading="input_loading">
  <input type="text">
</mip-v-input>
<mip-v-input label="Label" m-bind:messages="input_validation" append-icon="close" prepend-icon="phone" error="true">
  <input type="text">
</mip-v-input>
<mip-v-input label="Label" m-bind:messages="input_validation" append-icon="close" prepend-icon="phone" disabled="true">
  <input type="text">
</mip-v-input>
```

## API

### mip-v-input

#### Props

名称|类型|默认值|含义
:--:|:--:|:--:|:---
color|string|/|将指定的色彩应用与控件
loading|boolean / string|/|显示线性进度条。可以是指定将哪种颜色应用于进度条的字符串（任何material色彩——主要（primary）, 次要（secondary）, 成功（success）, 信息（info），警告（warning），错误（error）），或者使用组件的布尔值**颜色**（由色彩属性设置——如果它被组件支持的话）还可以是原色。
dark|boolean|/|应用暗黑主题变体
light|boolean|/|应用明亮主题变体
error|boolean|/|将输入框设置为手动错误状态。
error-count|number / string|1|The total number of errors that should display at once
error-messages|string / any|[]|将输入框置于错误状态，并传入自定义的错误信息。将与来自**规则（rules）**属性的任何验证相结合。这个字段不会触发验证。
messages|string / any|[]|Displays a list of messages or message if using a string
rules|any|[]|返回True或带有错误信息的字符串的函数数组。
success|boolean|/|Puts the input in a manual success state
success-messages|string / any|[]|Puts the input in a success state and passes through custom success messsages.
validate-on-blur|boolean|/|延迟验证直到失去焦点的事件被触发
append-icon|string|/|Append an icon to the component, uses same syntax as `v-icon`
append-icon-cb|any|/|Callback for appended icon when clicked
background-color|string|''|
disabled|boolean|/|Input is disabled
height|number / string|/|设置组件高度
hide-details|boolean|/|Hides hint, validation errors
hint|string|/|Hint text
label|string|/|Sets input label
persistent-hint|boolean|/|Forces hint to always be visible
prepend-icon|string|/|Prepend an icon to the component, uses same syntax as `v-icon`
prepend-icon-cb|any|/|Callback for prepended icon when clicked
readonly|boolean|/|Puts input in readonly state
value|any|/|Input value

