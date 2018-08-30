# mip-v-input

The `v-input` component gives you a baseline to create your own custom inputs. It consists of a prepend/append slot, messages, and a default slot. It is _recommended_ that you extend this component, but it can be used as a standalone.

## 用例

```html
<mip-v-divider></mip-v-divider>
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
appendIcon|string|undefined|Append an icon to the component, uses same syntax as `v-icon`
appendIconCb|any|undefined|Callback for appended icon when clicked
backgroundColor|string|undefined|
disabled|boolean|undefined|Input is disabled
height|number \| string|undefined|设置组件高度
hideDetails|boolean|undefined|Hides hint, validation errors
hint|string|undefined|Hint text
label|string|undefined|Sets input label
persistentHint|boolean|undefined|Forces hint to always be visible
prependIcon|string|undefined|Prepend an icon to the component, uses same syntax as `v-icon`
prependIconCb|any|undefined|Callback for prepended icon when clicked
readonly|boolean|undefined|Puts input in readonly state
value|any|undefined|Input value
color|string|undefined|将指定的色彩应用与控件
loading|boolean \| string|undefined|显示线性进度条。可以是指定将哪种颜色应用于进度条的字符串（任何material色彩——主要（primary）, 次要（secondary）, 成功（success）, 信息（info），警告（warning），错误（error）），或者使用组件的布尔值**颜色**（由色彩属性设置——如果它被组件支持的话）还可以是原色。
dark|boolean|undefined|应用暗黑主题变体
light|boolean|undefined|应用明亮主题变体
error|boolean|undefined|将输入框设置为手动错误状态。
errorCount|number \| string|1|The total number of errors that should display at once
errorMessages|string \| any|[]|将输入框置于错误状态，并传入自定义的错误信息。将与来自**规则（rules）**属性的任何验证相结合。这个字段不会触发验证。
messages|string \| any|[]|Displays a list of messages or message if using a string
rules|any|[]|返回True或带有错误信息的字符串的函数数组。
success|boolean|undefined|Puts the input in a manual success state
successMessages|string \| any|[]|Puts the input in a success state and passes through custom success messsages.
validateOnBlur|boolean|undefined|延迟验证直到失去焦点的事件被触发

