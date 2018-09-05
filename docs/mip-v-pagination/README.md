# mip-v-pagination

`mip-v-pagination`组件用于分隔长的数据集，以便用户更容易地使用信息。根据提供的长度，分页组件将自动缩放。要维护当前页面，只需提供一个.sync标签。

## 用例

```html
<mip-data>
  <script type="application/json">
    {
      "page": 2
    }
  </script>
</mip-data>
<mip-v-pagination m-bind:value.sync="page" length="6">
</mip-v-pagination>
```

## API

### mip-v-pagination

#### Props

名称|类型|默认值|含义
:--:|:--:|:--:|:---
circle|boolean|/|Shape pagination elements as circles
color|string|/|将指定的色彩应用与控件
disabled|boolean|/|Disables component
length|number|/|The length of the paginator
next-icon|string|'$vuetify.icons.next'|Specify the icon to use for the next icon
prev-icon|string|'$vuetify.icons.prev'|Specify the icon to use for the prev icon
total-visible|number / string|/|Specify the max total visible pagination numbers
value|number|/|Current selected page

## 示例

### 长的

```html
<mip-data>
  <script type="application/json">
    {
      "page": 2
    }
  </script>
</mip-data>
<mip-v-pagination m-bind:value.sync="page" length="15">
</mip-v-pagination>
```

### 限制

```html
<mip-data>
  <script type="application/json">
    {
      "page": 2
    }
  </script>
</mip-data>
<mip-v-pagination m-bind:value.sync="page" length="15" total-visible="5">
</mip-v-pagination>
```

### 圆形

```html
<mip-data>
  <script type="application/json">
    {
      "page": 2
    }
  </script>
</mip-data>
<mip-v-pagination m-bind:value.sync="page" length="4" circle="">
</mip-v-pagination>
```

### Icons

```html
<mip-data>
  <script type="application/json">
    {
      "page": 2
    }
  </script>
</mip-data>
<mip-v-pagination m-bind:value.sync="page" length="4" prev-icon="mdi-menu-left" next-icon="mdi-menu-right">
</mip-v-pagination>
```

### 禁用

```html
<mip-v-pagination length="4" disabled>
</mip-v-pagination>
```
