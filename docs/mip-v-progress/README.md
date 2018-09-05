# mip-v-progress

`mip-v-progress-circular`和`mip-v-progress-linear`组件用于将数据直观地传达给用户。他们也可以代表一个不确定的数量，如加载或处理。这些组件包含一个位于组件容器中心的插槽。

## 用例

```html
<mip-data>
  <script type="application/json">
    {
      "value": 0
    }
  </script>
</mip-data>
<mip-v-progress-circular value="20"></mip-v-progress-circular>
<mip-v-progress-circular value="40"></mip-v-progress-circular>
<mip-v-progress-circular value="60"></mip-v-progress-circular>
<mip-v-progress-circular value="80"></mip-v-progress-circular>
<mip-v-progress-circular value="100"></mip-v-progress-circular>
```

## API

### mip-v-progress-circular

#### Props

名称|类型|默认值|含义
:--:|:--:|:--:|:---
button|boolean|/|
color|string|/|将指定的色彩应用与控件
indeterminate|boolean|/|
line-width|number|4|
rotate|number|/|
size|number / string|32|设置元素的高度和宽度
value|number|/|控制可见性

### mip-v-progress-linear

#### Props

名称|类型|默认值|含义
:--:|:--:|:--:|:---
active|boolean|true|
background-color|string|/|
background-opacity|number / string|/|
buffer-value|number / string|100|
color|string|'primary'|将指定的色彩应用与控件
indeterminate|boolean|/|
line-height|number / string|7|
query|boolean|/|
value|number / string|/|控制可见性

## 示例

### 圆环色彩

```html
<mip-data>
  <script type="application/json">
    {
      "value": 0
    }
  </script>
</mip-data>
<mip-v-progress-circular value="100" color="blue-grey"></mip-v-progress-circular>
<mip-v-progress-circular value="80" color="deep-orange lighten-2"></mip-v-progress-circular>
<mip-v-progress-circular value="60" color="brown"></mip-v-progress-circular>
<mip-v-progress-circular value="40" color="lime"></mip-v-progress-circular>
<mip-v-progress-circular value="20" color="indigo darken-2"></mip-v-progress-circular>
```

### 不定圆环

```html
<mip-v-progress-circular indeterminate="" color="primary"></mip-v-progress-circular>
<mip-v-progress-circular indeterminate="" color="red"></mip-v-progress-circular>
<mip-v-progress-circular indeterminate="" color="purple"></mip-v-progress-circular>
<mip-v-progress-circular indeterminate="" color="green"></mip-v-progress-circular>
<mip-v-progress-circular indeterminate="" color="amber"></mip-v-progress-circular>
```

### 圆环大小和宽度

```html
<mip-v-progress-circular size="50" color="primary" indeterminate=""></mip-v-progress-circular>
<mip-v-progress-circular line-width="3" color="red" indeterminate=""></mip-v-progress-circular>
<mip-v-progress-circular size="70" line-width="7" color="purple" indeterminate=""></mip-v-progress-circular>
<mip-v-progress-circular line-width="3" color="green" indeterminate=""></mip-v-progress-circular>
<mip-v-progress-circular size="50" color="amber" indeterminate=""></mip-v-progress-circular>
```

### 圆环环绕

```html
<mip-data>
  <script type="application/json">
    {
      "value": 0
    }
  </script>
</mip-data>
<mip-v-btn on="click:MIP.setData({value: (m.value + 10) % 100})">Progress</mip-v-btn>
<mip-v-progress-circular rotate="360" size="100" line-width="15" m-bind:value="value" color="teal"></mip-v-progress-circular>
```

### 定值线条

```html
<mip-data>
  <script type="application/json">
    {
      "value": 0,
      "valueDeterminate": 50
    }
  </script>
</mip-data>
<mip-v-progress-linear m-bind:value.sync="valueDeterminate"></mip-v-progress-linear>
```

### 不定线条

```html
<mip-v-progress-linear indeterminate=""></mip-v-progress-linear>
```

### 缓冲

```html
<mip-data>
  <script type="application/json">
    {
      "value": 0,
      "buffer": 10,
      "bufferValue": 20
    }
  </script>
</mip-data>
<mip-v-progress-linear m-bind:value.sync="buffer" m-bind:buffer-value="bufferValue" buffer=""></mip-v-progress-linear>
```

### 自定义高度和上下文色彩

```html
<mip-data>
  <script type="application/json">
    {
      "value": 0
    }
  </script>
</mip-data>
<mip-v-progress-linear color="secondary" line-height="2" value="15"></mip-v-progress-linear>
<mip-v-progress-linear color="success" line-height="5" value="30"></mip-v-progress-linear>
<mip-v-progress-linear color="info" line-height="10" value="45"></mip-v-progress-linear>
<mip-v-progress-linear color="warning" line-height="15" value="60"></mip-v-progress-linear>
<mip-v-progress-linear color="error" line-height="20" value="75"></mip-v-progress-linear>
```

### 自定义色彩

```html
<mip-data>
  <script type="application/json">
    {
      "value": 0
    }
  </script>
</mip-data>
<mip-v-progress-linear background-color="pink lighten-3" color="pink lighten-1" value="15"></mip-v-progress-linear>
<mip-v-progress-linear background-color="blue-grey" color="lime" value="30"></mip-v-progress-linear>
<mip-v-progress-linear background-color="success" color="error" value="45"></mip-v-progress-linear>
```
