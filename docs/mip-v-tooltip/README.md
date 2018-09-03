# mip-v-tooltip

`mip-v-tooltip`对于用户悬停在元素上时传递信息很有用。您也可以通过一个**v-model**以编程方式控制提示组件的显示。

## 用例

```html
<div class="text-xs-center d-flex align-center">
  <mip-v-tooltip bottom="">
    <mip-v-btn slot="activator" color="primary" dark="">
      Button
    </mip-v-btn>
    <span>Tooltip</span>
  </mip-v-tooltip>

  <mip-v-tooltip bottom="">
    <mip-v-icon slot="activator" color="primary" dark="">home</mip-v-icon>
    <span>Tooltip</span>
  </mip-v-tooltip>

  <mip-v-tooltip bottom="">
    <span slot="activator">This text has a tooltip</span>
    <span>Tooltip</span>
  </mip-v-tooltip>
</div>
```

## API

### mip-v-tooltip

#### Props

名称|类型|默认值|含义
:--:|:--:|:--:|:---
color|string|/|将指定的色彩应用与控件
open-delay|number / string|200|Delay (in ms) after which menu opens (when open-on-hover prop is set to true)
close-delay|number / string|200|当（open-on-hover）属性设置为true时，会在菜单关闭之后延时（以毫秒为单位）
attach|any|/|指定该组件应该分离到哪个DOM元素，使用CSS选择器字符串或元素的对象应用。
content-class|any|''|将自定义类应用于分离的元素。这是很有用的，因为内容被移动到应用程序的末尾，而不是直接通过组件传递给类。
activator|any|/|在未使用激活器插槽激活器4.字符串可以是任何有效的查询选择器（querySelector），对象（Object）可以是任何有效的Node对象。
allow-overflow|boolean|/|移除内容的移除重新定位
input-activator|boolean|/|Sets a new activator target for the detached element. Use when placing detachable items in `mip-v-input` slots
max-width|number / string|'auto'|设置内容的最大宽度
min-width|number / string|/|设置内容的最小宽度
nudge-bottom|number / string|/|向底部微调内容
nudge-left|number / string|/|向左侧微调内容
nudge-right|number / string|/|向右侧微调内容
nudge-top|number / string|/|向顶部微调内容
nudge-width|number / string|/|微调内容宽度
offset-overflow|boolean|/|当由于溢出而重新定位时，导致组件翻转到另一侧
position-x|number|/|用于在不使用激活器插槽时定位内容
position-y|number|/|用于在不使用激活器插槽时定位内容
z-index|number / string|/|用于组件的z-index
value|boolean|/|控制可见性
debounce|number / string|/|Duration before tooltip is shown and hidden when hovered
disabled|boolean|/|Disables the tooltip
fixed|boolean|true|
tag|string|'span'|Specifies a custom tag for the activator wrapper
transition|string|/|设置组件过渡效果，可以是内置的过渡配置或者是您自己的配置的其中一个。

## 示例

### 方向

```html
<div class="text-xs-center">
  <mip-v-tooltip left="">
    <mip-v-btn slot="activator" color="primary" dark="">
      Left
    </mip-v-btn>
    <span>Left tooltip</span>
  </mip-v-tooltip>

  <mip-v-tooltip top="">
    <mip-v-btn slot="activator" color="primary" dark="">
      Top
    </mip-v-btn>
    <span>Top tooltip</span>
  </mip-v-tooltip>

  <mip-v-tooltip bottom="">
    <mip-v-btn slot="activator" color="primary" dark="">
      Bottom
    </mip-v-btn>
    <span>Bottom tooltip</span>
  </mip-v-tooltip>

  <mip-v-tooltip right="">
    <mip-v-btn slot="activator" color="primary" dark="">
      Right
    </mip-v-btn>
    <span>Right tooltip</span>
  </mip-v-tooltip>
</div>
```

### 控制是否可见

```html
<div class="container fluid text-xs-center">
  <div class="layout flex justify-space-between row wrap">
    <div class="flex xs12">
      <mip-v-btn on="tap:MIP.setData({show: !m.show})">toggle</mip-v-btn>
    </div>

    <div class="flex xs12 mt-5">
      <mip-v-tooltip m-bind:value.sync="show" top="">
        <mip-v-btn slot="activator" icon="">
          <mip-v-icon color="grey lighten-1">shopping_cart</mip-v-icon>
        </mip-v-btn>
        <span>Programmatic tooltip</span>
      </mip-v-tooltip>
    </div>
  </div>
</div>
```
