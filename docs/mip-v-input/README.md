# mip-v-input

The `mip-v-input` component gives you a baseline to create your own custom inputs. It consists of a prepend/append slot, messages, and a default slot. It is _recommended_ that you extend this component, but it can be used as a standalone.

## 用例

```html
<mip-data>
  <script type="application/json">
    {
      "input_validation": "validation",
      "input_loading": true
    }
  </script>
</mip-data>
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
label|string|/|设置输入框标签
light|boolean|/|应用明亮主题变体
loading|boolean / string|/|显示线性进度条。可以是指定将哪种颜色应用于进度条的字符串（任何material色彩——主要（primary）, 次要（secondary）, 成功（success）, 信息（info），警告（warning），错误（error）），或者使用组件的布尔值**颜色**（由色彩属性设置——如果它被组件支持的话）还可以是原色。
messages|string / array|[]|Displays a list of messages or message if using a string
persistent-hint|boolean|/|强制提示始终可见
prepend-icon|string|/|使用与`mip-v-icon`系统的语法在组件上添加一个图标
prepend-icon-cb|function|/|单击时回调添加前置图标
readonly|boolean|/|将输入之余只读状态
rules|array|[]|返回True或带有错误信息的字符串的函数数组。
success|boolean|/|设置输入框为成功（success）状态
success-messages|string / array|[]|Puts the input in a success state and passes through custom success messsages.
validate-on-blur|boolean|/|延迟验证直到失去焦点的事件被触发
value|any|/|输入值

