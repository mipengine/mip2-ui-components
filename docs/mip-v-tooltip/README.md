# mip-v-tooltip

`v-tooltip`对于用户悬停在元素上时传递信息很有用。您也可以通过一个**v-model**以编程方式控制提示组件的显示。

## 用例

```html
<mip-v-tooltip top="">
  <mip-v-btn slot="activator" color="primary" dark="">Top
  </mip-v-btn>
  <span>Tooltip</span>
</mip-v-tooltip>
<mip-v-tooltip right="">
  <mip-v-btn slot="activator" color="primary" dark="">Right
  </mip-v-btn>
  <span>Tooltip</span>
</mip-v-tooltip>
<mip-v-tooltip bottom="">
  <mip-v-btn slot="activator" color="primary" dark="">Bottom
  </mip-v-btn>
  <span>Tooltip</span>
</mip-v-tooltip>
<mip-v-tooltip left="">
  <mip-v-btn slot="activator" color="primary" dark="">Left
  </mip-v-btn>
  <span>Tooltip</span>
</mip-v-tooltip>
<mip-v-tooltip bottom="">
  <mip-v-icon slot="activator" color="primary" dark="">home
  </mip-v-icon>
  <span>Tooltip</span>
</mip-v-tooltip>
<mip-v-tooltip bottom="">
  <span slot="activator">text...</span>
  <span>Tooltip</span>
</mip-v-tooltip>
```

## API

### mip-v-tooltip

#### Props

名称|类型|默认值|含义
:--:|:--:|:--:|:---
debounce|number \| string|undefined|Duration before tooltip is shown and hidden when hovered
disabled|boolean|undefined|Disables the tooltip
fixed|boolean|true|
openDelay|number \| string|undefined|打开组件前等待的毫秒数
tag|string|span|Specifies a custom tag for the activator wrapper
transition|string|undefined|Mixins.Transitionable.props.transition
zIndex|number \| string|undefined|用于组件的z-index
color|string|undefined|将指定的色彩应用与控件
closeDelay|number \| string|200|关闭组件前等待的毫秒数
attach|any|undefined|指定该组件应该分离到哪个DOM元素，使用CSS选择器字符串或元素的对象应用。
contentClass|any|undefined|将自定义类应用于分离的元素。这是很有用的，因为内容被移动到应用程序的末尾，而不是直接通过组件传递给类。
activator|any|undefined|在未使用激活器插槽激活器4.字符串可以是任何有效的查询选择器（querySelector），对象（Object）可以是任何有效的Node对象。
allowOverflow|boolean|undefined|移除内容的移除重新定位
inputActivator|boolean|undefined|Sets a new activator target for the detached element. Use when placing detachable items in `v-input` slots
maxWidth|number \| string|auto|设置内容的最大宽度
minWidth|number \| string|undefined|设置内容的最小宽度
nudgeBottom|number \| string|undefined|向底部微调内容
nudgeLeft|number \| string|undefined|向左侧微调内容
nudgeRight|number \| string|undefined|向右侧微调内容
nudgeTop|number \| string|undefined|向顶部微调内容
nudgeWidth|number \| string|undefined|微调内容宽度
offsetOverflow|boolean|undefined|当由于溢出而重新定位时，导致组件翻转到另一侧
positionX|number|undefined|用于在不使用激活器插槽时定位内容
positionY|number|undefined|用于在不使用激活器插槽时定位内容
value|boolean|undefined|控制可见性

## 示例

### 控制是否可见

```html
<p>`show`</p>
<mip-v-btn color="primary" dark="" on="tap:MIP.setData({show:!m.show})">edit
</mip-v-btn>
<mip-v-tooltip bottom="" m-bind:value.sync="show">
  <mip-v-btn slot="activator" color="primary" dark="">Bottom
  </mip-v-btn>
  <span>Tooltip</span>
</mip-v-tooltip>
```
