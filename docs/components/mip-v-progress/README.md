# mip-v-progress

`mip-v-progress-circular`和`mip-v-progress-linear`组件用于将数据直观地传达给用户。他们也可以代表一个不确定的数量，如加载或处理。这些组件包含一个位于组件容器中心的插槽。

## 用例

```html
<div class="text-xs-center">
  <mip-v-progress-circular value="20"></mip-v-progress-circular>
  <mip-v-progress-circular value="40"></mip-v-progress-circular>
  <mip-v-progress-circular value="60"></mip-v-progress-circular>
  <mip-v-progress-circular value="80"></mip-v-progress-circular>
  <mip-v-progress-circular value="100"></mip-v-progress-circular>
</div>
```

## API

### mip-v-progress-circular

#### Props

名称|类型|默认值|含义
:--:|:--:|:--:|:---
button|boolean|/|不推荐使用 - 待删除
color|string|/|将指定的色彩应用与控件
indeterminate|boolean|/|持续动画，加载进度时使用未知
line-width|number|4|
rotate|number|/|以度为单位旋转圆起点
size|number / string|32|设置圆的直径（以像素为单位）
value|number|/|当前进度的百分比值

### mip-v-progress-linear

#### Props

名称|类型|默认值|含义
:--:|:--:|:--:|:---
active|boolean|true|将高度减为0，隐藏组件
background-color|string|/|背景颜色，若为 `null` 则跟随组件颜色
background-opacity|number / string|/|背景透明度, 如果为空则默认是 0.3，如果背景颜色也没设置则为1
buffer-value|number / string|100|缓冲的百分比值
color|string|'primary'|将指定的色彩应用与控件
indeterminate|boolean|/|持续动画，加载进度时使用未知
line-height|number / string|7|
query|boolean|/|
value|number / string|/|当前进度的百分比值

## 示例

### 圆环色彩

```html
<div class="text-xs-center">
  <mip-v-progress-circular value="100" color="blue-grey"></mip-v-progress-circular>
  <mip-v-progress-circular value="80" color="deep-orange lighten-2"></mip-v-progress-circular>
  <mip-v-progress-circular value="60" color="brown"></mip-v-progress-circular>
  <mip-v-progress-circular value="40" color="lime"></mip-v-progress-circular>
  <mip-v-progress-circular value="20" color="indigo darken-2"></mip-v-progress-circular>
</div>
```

### 不定圆环

```html
<div class="text-xs-center">
  <mip-v-progress-circular indeterminate color="primary"></mip-v-progress-circular>
  <mip-v-progress-circular indeterminate color="red"></mip-v-progress-circular>
  <mip-v-progress-circular indeterminate color="purple"></mip-v-progress-circular>
  <mip-v-progress-circular indeterminate color="green"></mip-v-progress-circular>
  <mip-v-progress-circular indeterminate color="amber"></mip-v-progress-circular>
</div>
```

### 圆环大小和宽度

```html
<div class="text-xs-center">
  <mip-v-progress-circular size="50" color="primary" indeterminate></mip-v-progress-circular>
  <mip-v-progress-circular line-width="3" color="red" indeterminate></mip-v-progress-circular>
  <mip-v-progress-circular size="70" line-width="7" color="purple" indeterminate></mip-v-progress-circular>
  <mip-v-progress-circular line-width="3" color="green" indeterminate></mip-v-progress-circular>
  <mip-v-progress-circular size="50" color="amber" indeterminate></mip-v-progress-circular>
</div>
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
<div class="text-xs-center">
  <mip-v-progress-circular rotate="360" size="100" line-width="15" m-bind:value="value" color="teal">
    <span m-text="value"></span>
  </mip-v-progress-circular>
  <mip-v-progress-circular rotate="-90" size="100" line-width="15" m-bind:value="value" color="primary">
    <span m-text="value"></span>
  </mip-v-progress-circular>
  <mip-v-progress-circular rotate="90" size="100" line-width="15" m-bind:value="value" color="red">
    <span m-text="value"></span>
  </mip-v-progress-circular>
  <mip-v-progress-circular rotate="180" size="100" line-width="15" m-bind:value="value" color="pink">
    <span m-text="value"></span>
  </mip-v-progress-circular>
</div>
<mip-script>
  setInterval(() => MIP.setData({ value: (MIP.getData('value') + 10) % 100 }), 1000)
</mip-script>
<script src="https://c.mipcdn.com/static/v2/mip-script/mip-script.js"></script>
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
<mip-v-progress-linear indeterminate></mip-v-progress-linear>
```

### 缓冲

```html
<mip-data>
  <script type="application/json">
    {
      "buffer": 10,
      "bufferValue": 20
    }
  </script>
</mip-data>
<mip-v-progress-linear m-bind:value.sync="buffer" m-bind:buffer-value="bufferValue" buffer></mip-v-progress-linear>
<mip-script>
  setInterval(() => MIP.setData({
    buffer: MIP.getData('buffer') + Math.random() * 10 + 5,
    bufferValue: MIP.getData('bufferValue') + Math.random() * 10 + 5
  }), 2000)
</mip-script>
<script src="https://c.mipcdn.com/static/v2/mip-script/mip-script.js"></script>
```

### 自定义高度和上下文色彩

```html
<div>
  <mip-v-progress-linear color="secondary" line-height="2" value="15"></mip-v-progress-linear>
  <mip-v-progress-linear color="success" line-height="5" value="30"></mip-v-progress-linear>
  <mip-v-progress-linear color="info" line-height="10" value="45"></mip-v-progress-linear>
  <mip-v-progress-linear color="warning" line-height="15" value="60"></mip-v-progress-linear>
  <mip-v-progress-linear color="error" line-height="20" value="75"></mip-v-progress-linear>
</div>
```

### 自定义色彩

```html
<div>
  <mip-v-progress-linear background-color="pink lighten-3" color="pink lighten-1" value="15"></mip-v-progress-linear>
  <mip-v-progress-linear background-color="blue-grey" color="lime" value="30"></mip-v-progress-linear>
  <mip-v-progress-linear background-color="success" color="error" value="45"></mip-v-progress-linear>
</div>
```
