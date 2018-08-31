# mip-v-radio

选择控制组件允许用户使用选择项，这些组件必须和 `mip-v-model` 属性一起使用，因为他们无法保持自己的状态。

## 用例

```html
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
value-comparator|any|true|Apply a custom value comparator function
column|boolean|true|单选框列显示
height|number / string|'auto'|设置组件高度
mandatory|boolean|true|强制选择复选框组的一个子复选框 `v-radio` 
name|string|/|设置组件的 name 属性
row|boolean|/|单选框行显示
value|any|/|设置选择控件组件的值

### mip-v-radio

#### Props

名称|类型|默认值|含义
:--:|:--:|:--:|:---
color|string|'accent'|将指定的色彩应用与控件
ripple|boolean / any|true|应用`v-ripple`指令
dark|boolean|/|应用暗黑主题变体
light|boolean|/|应用明亮主题变体
disabled|boolean|/|输入框是禁用的
label|string|/|设置输入框标签
on-icon|string|'$vuetify.icons.radioOn'|
off-icon|string|'$vuetify.icons.radioOff'|
readonly|boolean|/|
value|any|/|设置选择控件组件的值

## 示例

### 方向

```html
<mip-v-radio-group m-bind:value.sync="column" column="">
  <mip-v-radio label="Option 1" value="radio-1"></mip-v-radio>
  <mip-v-radio label="Option 2" value="radio-2"></mip-v-radio>
</mip-v-radio-group>
<mip-v-radio-group m-bind:value.sync="row" row="">
  <mip-v-radio label="Option 1" value="radio-1"></mip-v-radio>
  <mip-v-radio label="Option 2" value="radio-2"></mip-v-radio>
</mip-v-radio-group>
```

### 颜色

```html
<mip-v-radio-group m-bind:value.sync="ex7" column="">
  <mip-v-radio label="red" color="red" value="red"></mip-v-radio>
  <mip-v-radio label="red darken-3" color="red darken-3" value="red darken-3"></mip-v-radio>
  <mip-v-radio label="indigo" color="indigo" value="indigo"></mip-v-radio>
  <mip-v-radio label="indigo darken-3" color="indigo darken-3" value="indigo darken-3"></mip-v-radio>
  <mip-v-radio label="orange" color="orange" value="orange"></mip-v-radio>
  <mip-v-radio label="orange darken-3" color="orange darken-3" value="orange darken-3"></mip-v-radio>
</mip-v-radio-group>
<mip-v-radio-group m-bind:value.sync="ex8" column="">
  <mip-v-radio label="primary" color="primary" value="primary"></mip-v-radio>
  <mip-v-radio label="secondary" color="secondary" value="secondary"></mip-v-radio>
  <mip-v-radio label="success" color="success" value="success"></mip-v-radio>
  <mip-v-radio label="info" color="info" value="info"></mip-v-radio>
  <mip-v-radio label="warning" color="warning" value="warning"></mip-v-radio>
  <mip-v-radio label="error" color="error" value="error"></mip-v-radio>
</mip-v-radio-group>
<script src="http://localhost:8080/dist/mip.js"></script>
<script src="/dev/main.js"></script>
```
