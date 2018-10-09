# mip-v-alert

`mip-v-alert`组件被用来向用户传达重要信息，它有4个变种，**成功（success）**，**信息（info）**，**警告（warning）**和**错误（error）**。它们被分配了可以修改的表示不同操作的默认图标

## 用例

```html
<div>
  <mip-v-alert value type="success">
    This is a success alert.
  </mip-v-alert>

  <mip-v-alert value type="info">
    This is a info alert.
  </mip-v-alert>

  <mip-v-alert value type="warning">
    This is a warning alert.
  </mip-v-alert>

  <mip-v-alert value type="error">
    This is a error alert.
  </mip-v-alert>
</div>
```

## API

### mip-v-alert

#### Props

名称|类型|默认值|含义
:--:|:--:|:--:|:---
color|string|/|将指定的色彩应用与控件
dismissible|boolean|/|指定提示框可以关闭
icon|string|/|制定一个特定的图标
mode|string|/|设置过渡模式（不适用于“过渡组（transition-group）”）
origin|string|/|设置过渡原点
outline|boolean|/|提示框将有一个轮廓
transition|string|/|设置组件过渡效果，可以是内置的过渡配置或者是您自己的配置的其中一个。
type|string|/|指定**成功（success）**，**信息（info）**，**警告（warning）**或者**错误（error）**提示框，使用上下文颜色和预定义的图标。
value|boolean|/|控制可见性

## 示例

### 可关闭

```html
<mip-data>
  <script type="application/json">
    {
      "alert": true
    }
  </script>
</mip-data>
<div>
  <mip-v-alert m-bind:value.sync="alert" dismissible type="success">
    This is a success alert that is closable.
  </mip-v-alert>

  <div class="text-xs-center">
    <mip-v-btn m-bind:style="{ display: alert ? &apos;none&apos; : &apos;block&apos; }" color="primary" dark on="tap:MIP.setData({ alert: true })">
      Reset
    </mip-v-btn>
  </div>
</div>
```

### 自定义图标/无图标

```html
<div>
  <mip-v-alert value color="success" icon="new_releases">
    This is a success alert with a custom icon.
  </mip-v-alert>

  <mip-v-alert value color="error">
    This is an error alert with no icon.
  </mip-v-alert>
</div>
```

### 过渡显示

```html
<mip-data>
  <script type="application/json">
    {
      "alert": true
    }
  </script>
</mip-data>
<div>
  <div class="text-xs-center">
    <mip-v-btn color="primary" on="tap:MIP.setData({ alert: !m.alert })">
      Toggle
    </mip-v-btn>
  </div>

  <mip-v-alert m-bind:value="alert" type="success" transition="scale-transition">
    This is a success alert.
  </mip-v-alert>
</div>
```

### 轮廓

```html
<div>
  <mip-v-alert value color="success" icon="check_circle" outline>
    This is a success alert.
  </mip-v-alert>

  <mip-v-alert value color="info" icon="info" outline>
    This is an info alert.
  </mip-v-alert>

  <mip-v-alert value color="warning" icon="priority_high" outline>
    This is a warning alert.
  </mip-v-alert>

  <mip-v-alert value color="error" icon="warning" outline>
    This is a error alert.
  </mip-v-alert>
</div>
```
