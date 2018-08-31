# mip-v-select

选择控制组件允许用户使用选择项，这些组件必须和 `mip-v-model` 属性一起使用，因为他们无法保持自己的状态。

## 用例

```html
<div class="container grid-list-xl">
  <div class="layout row wrap">
    <mip-v-select class="flex xs12 md6" m-bind:value.sync="value" m-bind:items="items" attach="" chips="" label="Chips" multiple></mip-v-select>
    <mip-v-select class="flex xs12 md6" m-bind:value.sync="value" m-bind:items="items" box="" chips="" label="Chips" multiple></mip-v-select>
    <mip-v-select class="flex xs12 md6" m-bind:value.sync="value" m-bind:items="items" chips="" label="Chips" multiple outline=""></mip-v-select>
    <mip-v-select class="flex xs12 md6" m-bind:value.sync="value" m-bind:items="items" chips="" label="Chips" multiple solo=""></mip-v-select>
  </div>
</div>
```

## API

### mip-v-select

#### Props

名称|类型|默认值|含义
:--:|:--:|:--:|:---
auto|boolean|/|在所选择的元素上居中列表
close-on-click|boolean|true|
close-on-content-click|boolean|true|
disabled|boolean|/|Mixins.Input.props.disabled
full-width|boolean|/|Forces 100% width
max-height|number / string|300|设置内容的最大高度
offset-x|boolean|/|
offset-y|boolean|/|
open-on-click|boolean|true|
open-on-hover|boolean|/|
origin|string|'top left'|
transition|string / boolean|'v-menu-transition'|
activator|any|/|
allow-overflow|boolean|/|
input-activator|boolean|/|
max-width|number / string|'auto'|
min-width|number / string|/|
nudge-bottom|number / string|/|
nudge-left|number / string|/|
nudge-right|number / string|/|
nudge-top|number / string|/|
nudge-width|number / string|/|
offset-overflow|boolean|/|
position-x|number|/|
position-y|number|/|
z-index|number / string|/|
value-comparator|any|true|Apply a custom value comparator function
no-data-text|string|'$vuetify.noDataText'|当没有数据时显示的文本
append-icon|string|'$vuetify.icons.dropdown'|
append-icon-cb|any|/|
attach|any|/|
browser-autocomplete|string|'on'|
cache-items|boolean|/|
chips|boolean|/|
clearable|boolean|/|添加输入框清除功能，默认图标是 Material Icons **clear**
content-class|string|/|
deletable-chips|boolean|/|
dense|boolean|/|
hide-selected|boolean|/|
items|any|[]|
item-avatar|string / any / any|'avatar'|
item-disabled|string / any / any|'disabled'|
item-text|string / any / any|'text'|
item-value|string / any / any|'value'|
multiple|boolean|/|
multi-line|boolean|/|
open-on-clear|boolean|/|
return-object|boolean|/|
search-input|any|/|
small-chips|boolean|/|
single-line|boolean|/|Label does not move on focus/dirty

## 示例

### 图标

```html
<div class="container grid-list-xl">
  <div class="layout row wrap">
    <div class="flex xs12 md6">
      <h3>prepend-icon</h3>
      <mip-v-select m-bind:items="states" m-bind:value.sync="e1" auto="" label="Select" hide-details="" prepend-icon="map" single-line=""></mip-v-select>
    </div>
    <div class="flex xs12 md6">
      <h3>append-icon</h3>
      <mip-v-select m-bind:items="states" m-bind:value.sync="e2" append-outer-icon="map" auto="" hide-details="" label="Select" single-line=""></mip-v-select>
    </div>
  </div>
</div>
```

### 多选

```html
<div class="container grid-list-xl">
  <div class="layout row wrap">
    <div class="flex xs12 md6">
      <h3>Multiple with persistent hint</h3>
      <mip-v-select m-bind:items="states" m-bind:value.sync="e3" label="Select" multiple max-height="400" hint="Pick your favorite states" persistent-hint=""></mip-v-select>
    </div>
    <div class="flex xs12 md6">
      <h3>Multiple (Chips) with persistent hint</h3>
      <mip-v-select m-bind:items="states" m-bind:value.sync="e4" label="Select" multiple chips="" hint="What are the target regions" persistent-hint=""></mip-v-select>
    </div>
  </div>
</div>
```

### 自定义选项的文本和值

```html
<div class="container grid-list-xl">
  <mip-v-select m-bind:hint="`${select.state}, ${select.abbr}`" m-bind:items="items2" m-bind:value.sync="select" item-text="state" item-value="abbr" label="Select" persistent-hint="" return-object="" single-line=""></mip-v-select>
</div>
```
