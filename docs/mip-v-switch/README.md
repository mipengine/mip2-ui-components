# mip-v-switch

选择控制组件允许用户使用选择项，这些组件必须和 `mip-v-model` 属性一起使用，因为他们无法保持自己的状态。

## 用例

```html
<mip-v-switch label="Switch" m-bind:input-value.sync="switch"></mip-v-switch>
```

## API

### mip-v-switch

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

## 示例

### 数组

```html
<mip-v-switch m-bind:input-value.sync="people" label="John" value="John"></mip-v-switch>
<mip-v-switch m-bind:input-value.sync="people" label="Jacob" value="Jacob"></mip-v-switch>
```

### 开关

```html
<mip-v-switch label="on" value="" input-value="true"></mip-v-switch>
<mip-v-switch label="off"></mip-v-switch>
<mip-v-switch label="on disabled" value="" input-value="true" disabled></mip-v-switch>
<mip-v-switch label="off disabled" disabled></mip-v-switch>
```

### 色彩

```html
<mip-v-switch m-bind:input-value.sync="ex11" label="red" color="red" value="red" hide-details=""></mip-v-switch>
<mip-v-switch m-bind:input-value.sync="ex11" label="red darken-3" color="red darken-3" value="red darken-3" hide-details=""></mip-v-switch>
<mip-v-switch m-bind:input-value.sync="ex11" label="indigo" color="indigo" value="indigo" hide-details=""></mip-v-switch>
<mip-v-switch m-bind:input-value.sync="ex11" label="indigo darken-3" color="indigo darken-3" value="indigo darken-3" hide-details=""></mip-v-switch>
<mip-v-switch m-bind:input-value.sync="ex11" label="orange" color="orange" value="orange" hide-details=""></mip-v-switch>
<mip-v-switch m-bind:input-value.sync="ex11" label="orange darken-3" color="orange darken-3" value="orange darken-3" hide-details=""></mip-v-switch>
<mip-v-switch m-bind:input-value.sync="ex11" label="primary" color="primary" value="primary" hide-details=""></mip-v-switch>
<mip-v-switch m-bind:input-value.sync="ex11" label="secondary" color="secondary" value="secondary" hide-details=""></mip-v-switch>
<mip-v-switch m-bind:input-value.sync="ex11" label="success" color="success" value="success" hide-details=""></mip-v-switch>
<mip-v-switch m-bind:input-value.sync="ex11" label="info" color="info" value="info" hide-details=""></mip-v-switch>
<mip-v-switch m-bind:input-value.sync="ex11" label="warning" color="warning" value="warning" hide-details=""></mip-v-switch>
<mip-v-switch m-bind:input-value.sync="ex11" label="error" color="error" value="error" hide-details=""></mip-v-switch>
```
