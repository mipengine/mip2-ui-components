# mip-v-slider

`v-slider`组件是数字输入的更好的可视化，它用于收集数字用户数据。

## 用例

```html
<mip-v-slider m-bind:value.sync="slider"></mip-v-slider>
<mip-v-slider disabled label="Disabled" inverse-label="" value="30"></mip-v-slider>
<mip-v-slider label="Readonly" readonly value="30"></mip-v-slider>
<mip-v-slider m-bind:value.sync="slider" label="Label"></mip-v-slider>
<mip-v-slider m-bind:value.sync="slider" inverse-label="" label="Inverse label"></mip-v-slider>
<mip-v-slider m-bind:value.sync="volume" append-icon="volume_up" prepend-icon="volume_down"></mip-v-slider>
```

## API

### mip-v-slider

#### Props

名称|类型|默认值|含义
:--:|:--:|:--:|:---
alwaysDirty|boolean|undefined|When used with the **thumb-label** prop will always show the thumb label.
inverseLabel|boolean|undefined|Reverse the label position. Works with **rtl**.
label|string|undefined|
min|number / string|undefined|设置最小宽度
max|number / string|100|设置最大宽度
range|boolean|undefined|
step|number / string|1|如果大于0，则为滑块上的点设置步骤间隔
ticks|boolean / string|undefined|
tickLabels|any|[]|When provided with Array<string>, will attempt to map the labels to each step in index order
tickSize|number / string|1|Controls the size of **ticks**
thumbColor|string|undefined|设置拇指和拇指标签颜色
thumbLabel|boolean / string|undefined|显示拇指标签
thumbSize|number / string|32|Controls the size of the **thumb-label**
trackColor|string|undefined|设置曲目填充色彩
value|number / string|undefined|控制可见性

## 示例

### Thumb

```html
<mip-v-slider m-bind:value.sync="slider" thumb-label=""></mip-v-slider>
<mip-v-slider m-bind:value.sync="slider" thumb-label="always">
</mip-v-slider>
<mip-v-slider m-bind:value.sync="slider" thumb-color="red" thumb-label="always">
</mip-v-slider>
<mip-v-slider m-bind:value.sync="slider" thumb-size="24" thumb-label="always">
</mip-v-slider>
<mip-v-slider m-bind:value.sync="slider" always-dirty="" hint="Try set it to &apos;0&apos;" persistent-hint="" thumb-label="always">
</mip-v-slider>
```

### Ticks

```html
<mip-v-slider m-bind:value.sync="value" step="10" ticks=""></mip-v-slider>
<mip-v-slider m-bind:value.sync="value" step="10">
</mip-v-slider>
<mip-v-slider m-bind:value.sync="value" step="10" tick-size="2">
</mip-v-slider>
<mip-v-slider m-bind:value.sync="fruits" max="3" step="1" tick-size="2" m-bind:tick-labels="tickLabels">
</mip-v-slider>
```

### 离散的

```html
<mip-v-slider m-bind:value.sync="value" step="10" thumb-label="" ticks=""></mip-v-slider>
```

### 图标

```html
<mip-v-slider m-bind:value.sync="zoom" append-icon="zoom_in" prepend-icon="zoom_out" on="click-append:MIP.setData({zoom: m.zoom + 10}) click-prepend:MIP.setData({zoom: m.zoom - 10})"></mip-v-slider>
```
