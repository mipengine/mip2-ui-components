# mip-v-snackbar

`v-snackbar`组件用于向用户显示快速消息，小吃吧支持定位、删除延迟和回调。

## 用例

```html
<div class="group pa-2">
  <mip-v-snackbar m-bind:value.sync="snackbar" timeout="3000" bottom="" multi-line="" vertical="">
    &#x51FA;&#x73B0;&#x4E86; snackbar &#x7684;&#x5185;&#x5BB9;&#xFF0C;&#x8BBE;&#x7F6E;&#x4E86; timeout &#x65F6;&#x95F4;&#x540E;&#xFF0C;&#x81EA;&#x52A8;&#x9690;&#x85CF;
    <mip-v-btn color="pink" flat="" on="tap:MIP.setData({snackbar:false})">
      Close
    </mip-v-btn>
  </mip-v-snackbar>
  <mip-v-btn block="" color="primary" dark="" on="tap:MIP.setData({snackbar:true})">
    Show Snackbar
  </mip-v-btn>
</div>
```

## API

### mip-v-snackbar

#### Props

名称|类型|默认值|含义
:--:|:--:|:--:|:---
autoHeight|boolean|undefined|Makes snackbar height dynamic
multiLine|boolean|undefined|识小吃吧更高（移动设备）
timeout|number|6000|等待小吃吧自动隐藏的时间
vertical|boolean|undefined|垂直折叠小吃店的内容（移动设备）
color|string|undefined|将指定的色彩应用与控件
value|boolean|undefined|控制可见性
absolute|boolean|undefined|给元素设置绝对定位
top|boolean|undefined|将组件向顶部对齐
bottom|boolean|undefined|将组件向底部对齐
left|boolean|undefined|将组件向左边对齐
right|boolean|undefined|将组件向右边对齐

