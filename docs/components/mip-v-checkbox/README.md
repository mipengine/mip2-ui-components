# mip-v-checkbox

选择控制组件允许用户使用选择项，这些组件必须和 `.sync` 属性一起使用，因为他们无法保持自己的状态。

## 用例

```html
<mip-data>
  <script type="application/json">
    {
      "checkbox": true
    }
  </script>
</mip-data>
<mip-v-checkbox label="Checkbox" m-bind:input-value.sync="checkbox"></mip-v-checkbox>
```

## API

### mip-v-checkbox

#### Props

名称|类型|默认值|含义
:--:|:--:|:--:|:---
append-icon|string|/|使用与`mip-v-icon`相同的语法在组件上添加一个后置图标
append-icon-cb|function|/|单击回调添加后置图标
background-color|string|''|背景颜色
color|string|'accent'|将指定的色彩应用与控件
dark|boolean|/|应用暗黑主题变体
disabled|boolean|/|输入框是禁用的
error|boolean|/|将输入框设置为手动错误状态。
error-count|number / string|1|同时展示的错误数
error-messages|string / array|[]|将输入框置于错误状态，并传入自定义的错误信息。将与来自**规则（rules）**属性的任何验证相结合。这个字段不会触发验证。
false-value|any|/|设置虚假状态的值
height|number / string|/|设置组件高度
hide-details|boolean|/|隐藏提示，验证错误
hint|string|/|提示文本
id|string|/|设置组件上的DOM id
indeterminate|boolean|/|为复选框设置不确定状态
indeterminate-icon|string|'$vuetify.icons.checkboxIndeterminate'|
input-value|any|/|**.sync** 的绑定值
label|string|/|设置输入框标签
light|boolean|/|应用明亮主题变体
loading|boolean / string|/|显示线性进度条。可以是指定将哪种颜色应用于进度条的字符串（任何material色彩——主要（primary）, 次要（secondary）, 成功（success）, 信息（info），警告（warning），错误（error）），或者使用组件的布尔值**颜色**（由色彩属性设置——如果它被组件支持的话）还可以是原色。
messages|string / array|[]|展示一条消息，或一个消息列表
multiple|boolean|/|
off-icon|string|'$vuetify.icons.checkboxOff'|
on-icon|string|'$vuetify.icons.checkboxOn'|
persistent-hint|boolean|/|强制提示始终可见
prepend-icon|string|/|使用与`mip-v-icon`系统的语法在组件上添加一个图标
prepend-icon-cb|function|/|单击时回调添加前置图标
readonly|boolean|/|将输入之余只读状态
ripple|boolean / object|true|应用`v-ripple`指令
rules|array|[]|返回True或带有错误信息的字符串的函数数组。
success|boolean|/|设置输入框为**成功（success）**状态
success-messages|string / array|[]|设置输入框为**成功（success）**状态，并且传入自定义成功信息
toggle-keys|array|[13,32]|将切换输入框（如果它支持切换）的键码数组。
true-value|any|/|设置真值
validate-on-blur|boolean|/|延迟验证直到失去焦点的事件被触发
value|any|/|设置选择控件组件的值
value-comparator|function|true|用于值的比较算法

## 示例

### 数组

```html
<mip-data>
  <script type="application/json">
    {
      "selected": []
    }
  </script>
</mip-data>
<mip-v-checkbox m-bind:input-value.sync="selected" label="John" value="John"></mip-v-checkbox>
<mip-v-checkbox m-bind:input-value.sync="selected" label="Jacob" value="Jacob"></mip-v-checkbox>
```

### 状态

```html
<mip-v-checkbox label="on" input-value="true" value></mip-v-checkbox>
<mip-v-checkbox label="off" value></mip-v-checkbox>
<mip-v-checkbox label="indeterminate" value indeterminate></mip-v-checkbox>
<mip-v-checkbox label="on disabled" input-value="true" value disabled></mip-v-checkbox>
<mip-v-checkbox label="off disabled" value disabled></mip-v-checkbox>
```

### 色彩

```html
<mip-data>
  <script type="application/json">
    {
      "ex4": [
        "red",
        "indigo",
        "orange",
        "primary",
        "secondary",
        "success",
        "info",
        "warning",
        "error",
        "red darken-3",
        "indigo darken-3",
        "orange darken-3"
      ]
    }
  </script>
</mip-data>
<mip-v-checkbox m-bind:input-value.sync="ex4" label="red" color="red" value="red" hide-details></mip-v-checkbox>
<mip-v-checkbox m-bind:input-value.sync="ex4" label="red darken-3" color="red darken-3" value="red darken-3" hide-details></mip-v-checkbox>
<mip-v-checkbox m-bind:input-value.sync="ex4" label="indigo" color="indigo" value="indigo" hide-details></mip-v-checkbox>
<mip-v-checkbox m-bind:input-value.sync="ex4" label="indigo darken-3" color="indigo darken-3" value="indigo darken-3" hide-details></mip-v-checkbox>
<mip-v-checkbox m-bind:input-value.sync="ex4" label="orange" color="orange" value="orange" hide-details></mip-v-checkbox>
<mip-v-checkbox m-bind:input-value.sync="ex4" label="orange darken-3" color="orange darken-3" value="orange darken-3" hide-details></mip-v-checkbox>
<mip-v-checkbox m-bind:input-value.sync="ex4" label="primary" color="primary" value="primary" hide-details></mip-v-checkbox>
<mip-v-checkbox m-bind:input-value.sync="ex4" label="secondary" color="secondary" value="secondary" hide-details></mip-v-checkbox>
<mip-v-checkbox m-bind:input-value.sync="ex4" label="success" color="success" value="success" hide-details></mip-v-checkbox>
<mip-v-checkbox m-bind:input-value.sync="ex4" label="info" color="info" value="info" hide-details></mip-v-checkbox>
<mip-v-checkbox m-bind:input-value.sync="ex4" label="warning" color="warning" value="warning" hide-details></mip-v-checkbox>
<mip-v-checkbox m-bind:input-value.sync="ex4" label="error" color="error" value="error" hide-details></mip-v-checkbox>
```

### 和文本框内联

```html
<mip-data>
  <script type="application/json">
    {
      "includeFiles": true,
      "enabled": false
    }
  </script>
</mip-data>
<div class="layout align-center">
  <mip-v-checkbox m-bind:input-value.sync="includeFiles" hide-details class="shrink mr-2"></mip-v-checkbox>
  <mip-v-text-field label="Include files"></mip-v-text-field>
</div>
<div class="layout align-center">
  <mip-v-checkbox m-bind:input-value.sync="enabled" hide-details class="shrink mr-2"></mip-v-checkbox>
  <mip-v-text-field m-bind:disabled="!enabled" label="I only work if you check the box"></mip-v-text-field>
</div>
```
