# mip-v-checkbox

选择控制组件允许用户使用选择项，这些组件必须和 `mip-v-model` 属性一起使用，因为他们无法保持自己的状态。

## 用例

```html
<mip-v-checkbox label="Checkbox" m-bind:input-value.sync="checkbox"></mip-v-checkbox>
```

## API

### mip-v-checkbox

#### Props

名称|类型|默认值|含义
:--:|:--:|:--:|:---
color|string|'accent'|
id|string|/|设置组件上的DOM id
input-value|any|/|**v-model** 的绑定值
false-value|any|/|设置虚假状态的值
true-value|any|/|设置真值
multiple|boolean|/|
label|string|/|Mixins.Input.props.label
toggle-keys|any|[13,32]|
indeterminate|boolean|/|为复选框设置不确定状态
indeterminate-icon|string|'$vuetify.icons.checkboxIndeterminate'|
on-icon|string|'$vuetify.icons.checkboxOn'|
off-icon|string|'$vuetify.icons.checkboxOff'|

## 示例

### 数组

```html
<mip-v-checkbox m-bind:input-value.sync="selected" label="John" value="John"></mip-v-checkbox>
<mip-v-checkbox m-bind:input-value.sync="selected" label="Jacob" value="Jacob"></mip-v-checkbox>
```

### 状态

```html
<mip-v-checkbox label="on" input-value="true" value=""></mip-v-checkbox>
<mip-v-checkbox label="off" value=""></mip-v-checkbox>
<mip-v-checkbox label="indeterminate" value="" indeterminate=""></mip-v-checkbox>
<mip-v-checkbox label="on disabled" input-value="true" value="" disabled></mip-v-checkbox>
<mip-v-checkbox label="off disabled" value="" disabled></mip-v-checkbox>
```

### 色彩

```html
<mip-v-checkbox m-bind:input-value.sync="ex4" label="red" color="red" value="red" hide-details=""></mip-v-checkbox>
<mip-v-checkbox m-bind:input-value.sync="ex4" label="red darken-3" color="red darken-3" value="red darken-3" hide-details=""></mip-v-checkbox>
<mip-v-checkbox m-bind:input-value.sync="ex4" label="indigo" color="indigo" value="indigo" hide-details=""></mip-v-checkbox>
<mip-v-checkbox m-bind:input-value.sync="ex4" label="indigo darken-3" color="indigo darken-3" value="indigo darken-3" hide-details=""></mip-v-checkbox>
<mip-v-checkbox m-bind:input-value.sync="ex4" label="orange" color="orange" value="orange" hide-details=""></mip-v-checkbox>
<mip-v-checkbox m-bind:input-value.sync="ex4" label="orange darken-3" color="orange darken-3" value="orange darken-3" hide-details=""></mip-v-checkbox>
<mip-v-checkbox m-bind:input-value.sync="ex4" label="primary" color="primary" value="primary" hide-details=""></mip-v-checkbox>
<mip-v-checkbox m-bind:input-value.sync="ex4" label="secondary" color="secondary" value="secondary" hide-details=""></mip-v-checkbox>
<mip-v-checkbox m-bind:input-value.sync="ex4" label="success" color="success" value="success" hide-details=""></mip-v-checkbox>
<mip-v-checkbox m-bind:input-value.sync="ex4" label="info" color="info" value="info" hide-details=""></mip-v-checkbox>
<mip-v-checkbox m-bind:input-value.sync="ex4" label="warning" color="warning" value="warning" hide-details=""></mip-v-checkbox>
<mip-v-checkbox m-bind:input-value.sync="ex4" label="error" color="error" value="error" hide-details=""></mip-v-checkbox>
```

### 和文本框内联

```html
<div class="layout align-center">
  <mip-v-checkbox m-bind:input-value.sync="includeFiles" hide-details="" class="shrink mr-2"></mip-v-checkbox>
  <mip-v-text-field label="Include files"></mip-v-text-field>
</div>
<div class="layout align-center">
  <mip-v-checkbox m-bind:input-value.sync="enabled" hide-details="" class="shrink mr-2"></mip-v-checkbox>
  <mip-v-text-field m-bind:disabled="!enabled" label="I only work if you check the box"></mip-v-text-field>
</div>
```
