# mip-v-pagination

`v-pagination`组件用于分隔长的数据集，以便用户更容易地使用信息。根据提供的长度，分页组件将自动缩放。要维护当前页面，只需提供一个v-model标签。

## 用例

```html
<mip-v-pagination m-bind:value.sync="page" m-bind:length="6">
</mip-v-pagination>
```

## API

### mip-v-pagination

#### Props

名称|类型|默认值|含义
:--:|:--:|:--:|:---
circle|boolean|undefined|Shape pagination elements as circles
disabled|boolean|undefined|Disables component
length|number|undefined|The length of the paginator
totalVisible|number / string|undefined|Specify the max total visible pagination numbers
nextIcon|string|$vuetify.icons.next|Specify the icon to use for the next icon
prevIcon|string|$vuetify.icons.prev|Specify the icon to use for the prev icon
value|number|undefined|Current selected page
color|string|undefined|将指定的色彩应用与控件

## 示例

### 长的

```html
<mip-v-pagination m-bind:value.sync="page" m-bind:length="15">
</mip-v-pagination>
```

### 限制

```html
<mip-v-pagination m-bind:value.sync="page" m-bind:length="15" m-bind:total-visible="5">
</mip-v-pagination>
```

### 圆形

```html
<mip-v-pagination m-bind:value.sync="page" m-bind:length="4" circle="">
</mip-v-pagination>
```

### Icons

```html
<mip-v-pagination m-bind:value.sync="page" m-bind:length="4" prev-icon="mdi-menu-left" next-icon="mdi-menu-right">
</mip-v-pagination>
```

### 禁用

```html
<mip-v-pagination m-bind:length="4" disabled>
</mip-v-pagination>
```
