# mip-v-menu

`v-menu`组件展示一个菜单在用于激活它的元素的位置上。

## 用例

```html
<div class="group pa-2">
  <mip-v-menu offset-y="">
    <mip-v-btn slot="activator" color="primary" dark="">
      Dropdown
    </mip-v-btn>
    <mip-v-list>
      <mip-v-list-tile href="#" ripple="">
        <mip-v-list-tile-title>Menu1</mip-v-list-tile-title>
      </mip-v-list-tile>
      <mip-v-list-tile href="#" ripple="">
        <mip-v-list-tile-title>Menu2</mip-v-list-tile-title>
      </mip-v-list-tile>
      <mip-v-list-tile href="#" ripple="">
        <mip-v-list-tile-title>Menu3</mip-v-list-tile-title>
      </mip-v-list-tile>
    </mip-v-list>
  </mip-v-menu>
</div>
```

## API

### mip-v-menu

#### Props

名称|类型|默认值|含义
:--:|:--:|:--:|:---
auto|boolean|undefined|在所选择的元素上居中列表
closeOnClick|boolean|true|指定菜应该在外部激活器被点击时关闭。
closeOnContentClick|boolean|true|指定点击内容时菜单是否应该关闭。
disabled|boolean|undefined|禁用菜单
fullWidth|boolean|undefined|Forces 100% width
maxHeight|any|auto|设置内容的最大高度
offsetX|boolean|undefined|在x轴上偏移菜单，与左/右方向一起工作
offsetY|boolean|undefined|在y轴上偏移菜单，与上/下方向一起工作
openOnClick|boolean|true|指定是否在激活器点击时打开菜单
openOnHover|boolean|undefined|指定是否在激活器悬停时打开菜单
origin|string|top left|Mixins.Transitionable.props.origin
transition|string / boolean|v-menu-transition|Mixins.Transitionable.props.transition
openDelay|number / string|undefined|打开组件前等待的毫秒数
closeDelay|number / string|200|关闭组件前等待的毫秒数
attach|any|undefined|指定该组件应该分离到哪个DOM元素，使用CSS选择器字符串或元素的对象应用。
contentClass|any|undefined|将自定义类应用于分离的元素。这是很有用的，因为内容被移动到应用程序的末尾，而不是直接通过组件传递给类。
activator|any|undefined|在未使用激活器插槽激活器4.字符串可以是任何有效的查询选择器（querySelector），对象（Object）可以是任何有效的Node对象。
allowOverflow|boolean|undefined|移除内容的移除重新定位
inputActivator|boolean|undefined|Sets a new activator target for the detached element. Use when placing detachable items in `v-input` slots
maxWidth|number / string|auto|设置内容的最大宽度
minWidth|number / string|undefined|设置内容的最小宽度
nudgeBottom|number / string|undefined|向底部微调内容
nudgeLeft|number / string|undefined|向左侧微调内容
nudgeRight|number / string|undefined|向右侧微调内容
nudgeTop|number / string|undefined|向顶部微调内容
nudgeWidth|number / string|undefined|微调内容宽度
offsetOverflow|boolean|undefined|当由于溢出而重新定位时，导致组件翻转到另一侧
positionX|number|undefined|用于在不使用激活器插槽时定位内容
positionY|number|undefined|用于在不使用激活器插槽时定位内容
zIndex|number / string|undefined|用于组件的z-index
returnValue|any|undefined|
value|boolean|undefined|控制可见性

## 示例

### 鼠标悬停

```html
<div class="group pa-2">
  <mip-v-menu open-on-hover="" offset-x="">
    <mip-v-btn slot="activator" color="primary" dark="">
      Hover
    </mip-v-btn>

    <mip-v-list>
      <mip-v-list-tile href="#" ripple="">
        <mip-v-list-tile-title>Menu1</mip-v-list-tile-title>
      </mip-v-list-tile>
      <mip-v-list-tile href="#" ripple="">
        <mip-v-list-tile-title>Menu2</mip-v-list-tile-title>
      </mip-v-list-tile>
      <mip-v-list-tile href="#" ripple="">
        <mip-v-list-tile-title>Menu3</mip-v-list-tile-title>
      </mip-v-list-tile>
    </mip-v-list>
  </mip-v-menu>
</div>
```

### 动画

```html
<div class="group pa-2">
  <mip-v-menu bottom="" origin="center center" transition="scale-transition">
    <mip-v-btn slot="activator" color="primary" dark="">
      Dropdown
    </mip-v-btn>
    <mip-v-list>
      <mip-v-list-tile href="#" ripple="">
        <mip-v-list-tile-title>Menu1</mip-v-list-tile-title>
      </mip-v-list-tile>
      <mip-v-list-tile href="#" ripple="">
        <mip-v-list-tile-title>Menu2</mip-v-list-tile-title>
      </mip-v-list-tile>
      <mip-v-list-tile href="#" ripple="">
        <mip-v-list-tile-title>Menu3</mip-v-list-tile-title>
      </mip-v-list-tile>
    </mip-v-list>
  </mip-v-menu>
</div>
```

### 和其他组件混用

```html
<div class="layout row">
  <div class="flex xs12 sm6 offset-sm3">
    <mip-v-card height="200px">
      <mip-v-card-title class="blue white--text">
        <span class="headline">Menu</span>

        <mip-v-spacer></mip-v-spacer>

        <mip-v-menu bottom="" left="">
          <mip-v-btn slot="activator" dark="" icon="">
            <mip-v-icon>more_vert</mip-v-icon>
          </mip-v-btn>

          <mip-v-list>
            <mip-v-list-tile href="#" ripple="">
              <mip-v-list-tile-title>Menu1</mip-v-list-tile-title>
            </mip-v-list-tile>
            <mip-v-list-tile href="#" ripple="">
              <mip-v-list-tile-title>Menu2</mip-v-list-tile-title>
            </mip-v-list-tile>
            <mip-v-list-tile href="#" ripple="">
              <mip-v-list-tile-title>Menu3</mip-v-list-tile-title>
            </mip-v-list-tile>
          </mip-v-list>
        </mip-v-menu>
      </mip-v-card-title>

      <mip-v-card-text>Lorem Ipsum</mip-v-card-text>
    </mip-v-card>
  </div>
</div>
```

### 绝对定位

```html
<div class="layout d-flex justify-center">
  <mip-v-menu absolute="" offset-y="" style="max-width: 600px">
    <mip-v-card slot="activator" class="portrait" img="https://cdn.vuetifyjs.com/images/cards/girl.jpg" height="300" width="600"></mip-v-card>

    <mip-v-list>
      <mip-v-list-tile href="#" ripple="">
        <mip-v-list-tile-title>Menu1</mip-v-list-tile-title>
      </mip-v-list-tile>
      <mip-v-list-tile href="#" ripple="">
        <mip-v-list-tile-title>Menu2</mip-v-list-tile-title>
      </mip-v-list-tile>
      <mip-v-list-tile href="#" ripple="">
        <mip-v-list-tile-title>Menu3</mip-v-list-tile-title>
      </mip-v-list-tile>
    </mip-v-list>
  </mip-v-menu>
</div>
```
