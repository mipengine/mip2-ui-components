# mip-v-snackbar

`mip-v-snackbar`组件用于向用户显示快速消息，小吃吧支持定位、删除延迟和回调。

## 用例

```html
<mip-data>
  <script type="application/json">
    {
      "snackbar": false
    }
  </script>
</mip-data>
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
absolute|boolean|/|给元素设置绝对定位
auto-height|boolean|/|Makes snackbar height dynamic
bottom|boolean|/|将组件向底部对齐
color|string|/|将指定的色彩应用与控件
left|boolean|/|将组件向左边对齐
multi-line|boolean|/|识小吃吧更高（移动设备）
right|boolean|/|将组件向右边对齐
timeout|number|6000|等待小吃吧自动隐藏的时间
top|boolean|/|将组件向顶部对齐
value|boolean|/|控制可见性
vertical|boolean|/|垂直折叠小吃店的内容（移动设备）

