# mip-v-snackbar

`mip-v-snackbar`组件用于向用户显示快速消息，全局提示支持定位、删除延迟和回调。

## 用例

```html
<mip-data>
  <script type="application/json">
    {
      "snackbar": false,
      "y": "top",
      "x": null,
      "mode": "",
      "timeout": 6000,
      "text": "出现了 snackbar 的内容，设置了 timeout 时间后，自动隐藏"
    }
  </script>
</mip-data>
<mip-v-card>
  <mip-v-card-text>
    <div class="container fluid">
      <div class="layout row wrap">
        <div class="flex xs12 sm3">
          <mip-v-checkbox
            m-bind:input-value.sync="x"
            label="Left"
            value="left"
          ></mip-v-checkbox>
        </div>

        <div class="flex xs6 sm3">
          <mip-v-checkbox
            m-bind:input-value.sync="x"
            label="Right"
            value="right"
          ></mip-v-checkbox>
        </div>

        <div class="flex xs6 sm3">
          <mip-v-checkbox
            m-bind:input-value.sync="y"
            label="Top"
            value="top"
          ></mip-v-checkbox>
        </div>

        <div class="flex xs6 sm3">
          <mip-v-checkbox
            m-bind:input-value.sync="y"
            label="Bottom"
            value="bottom"
          ></mip-v-checkbox>
        </div>

        <div class="flex xs12 sm3">
          <mip-v-checkbox
            m-bind:input-value.sync="mode"
            label="Multi-line (mobile)"
            value="multi-line"
          ></mip-v-checkbox>
        </div>

        <div class="flex xs12 sm3">
          <mip-v-checkbox
            m-bind:input-value.sync="mode"
            label="Vertical (mobile)"
            value="vertical"
          ></mip-v-checkbox>
        </div>

        <div class="flex xs12 sm4 offset-sm4">
          <mip-v-text-field
            m-bind:value.sync="text"
            label="Text"
            type="text"
          ></mip-v-text-field>
        </div>

        <div class="flex xs12 sm4">
          <mip-v-text-field
            m-bind:value.sync="timeout"
            label="Timeout"
            type="number"
          ></mip-v-text-field>
        </div>
      </div>

    </div>
    <mip-v-btn
      block
      color="primary"
      dark
      on="click:MIP.setData({ snackbar: true })"
    >
      Show Snackbar
    </mip-v-btn>
  </mip-v-card-text>

  <mip-v-snackbar
    m-bind:value.sync="snackbar"
    m-bind:timeout="+timeout"
    m-bind:left="x === 'left'"
    m-bind:right="x === 'right'"
    m-bind:top="y === 'top'"
    m-bind:bottom="y === 'bottom'"
    m-bind:multi-line="mode === 'multi-line'"
    m-bind:vertical="mode === 'vertical'"
    toppx="44"
  >
    <span m-text="text"></span>
    <mip-v-btn
      color="pink"
      flat
      on="click:MIP.setData({ snackbar: false })"
    >
      Close
    </mip-v-btn>
  </mip-v-snackbar>
</mip-v-card>
```

## API

### mip-v-snackbar

#### Props

名称|类型|默认值|含义
:--:|:--:|:--:|:---
absolute|boolean|/|给元素设置绝对定位
auto-height|boolean|/|设置全局提示的高度为动态
bottom|boolean|/|将组件向底部对齐
bottompx|number|/|当 `bottom` 为 `true` 时，可以通过**bottompx**设置 `snackbar` 距离屏幕底端的距离
color|string|/|将指定的色彩应用与控件
left|boolean|/|将组件向左边对齐
multi-line|boolean|/|使全局提示更高（移动设备）
right|boolean|/|将组件向右边对齐
timeout|number|6000|等待全局提示自动隐藏的时间
top|boolean|/|将组件向顶部对齐
toppx|number|/|当 `top` 为 `true` 时，可以通过**toppx**设置 `snackbar` 距离屏幕顶端的距离
value|boolean|/|控制可见性
vertical|boolean|/|垂直折叠全局提示的内容（移动设备）

## 示例

### 上下文

```html
<mip-data>
  <script type="application/json">
    {
      "snackbar": false,
      "x": null,
      "mode": "",
      "timeout": 6000,
      "text": "出现了 snackbar 的内容，设置了 timeout 时间后，自动隐藏",
      "snackbar0": false,
      "color": "",
      "timeout0": 6000,
      "text0": "Hello, I'm a snackbar"
    }
  </script>
</mip-data>
<mip-v-card>
  <mip-v-card-text>
    <div class="container fluid">
      <div class="layout row wrap">
        <div class="flex xs12">
          <mip-v-radio-group
            m-bind:value.sync="color"
            row
          >
            <mip-v-radio
              color="success"
              label="success"
              value="success"
            ></mip-v-radio>
            <mip-v-radio
              color="info"
              label="info"
              value="info"
            ></mip-v-radio>
            <mip-v-radio
              color="error"
              label="error"
              value="error"
            ></mip-v-radio>
            <mip-v-radio
              color="cyan darken-2"
              label="cyan darken-2"
              value="cyan darken-2"
            ></mip-v-radio>
          </mip-v-radio-group>
        </div>
        <div class="flex xs12 sm3">
          <mip-v-checkbox
            mip-v-model="mode"
            label="Multi-line (mobile)"
            value="multi-line"
          ></mip-v-checkbox>
        </div>
        <div class="flex xs12 sm3">
          <mip-v-checkbox
            mip-v-model="mode"
            label="Vertical (mobile)"
            value="vertical"
          ></mip-v-checkbox>
        </div>
        <div class="flex xs12 sm4 offset-sm4">
          <mip-v-text-field
            m-bind:value.sync="text0"
            label="Text"
            type="text"
          ></mip-v-text-field>
        </div>
        <div class="flex xs12 sm4">
          <mip-v-text-field
            m-bind:value.sync="timeout0"
            label="Timeout"
            type="number"
          ></mip-v-text-field>
        </div>
      </div>
    </div>

    <mip-v-btn
      block
      color="primary"
      dark
      on="click:MIP.setData({ snackbar0: true })"
    >
      Show Snackbar0
    </mip-v-btn>
  </mip-v-card-text>
  <mip-v-snackbar
    m-bind:value.sync="snackbar0"
    m-bind:color="color"
    m-bind:multi-line="mode === 'multi-line'"
    m-bind:timeout="+timeout0"
    m-bind:vertical="mode === 'vertical'"
    toppx="44"
  >
    <span m-text="text0"></span>
    <mip-v-btn
      dark
      flat
      on="click:MIP.setData({ snackbar0: false })"
    >
      Close
    </mip-v-btn>
  </mip-v-snackbar>
</mip-v-card>
```
