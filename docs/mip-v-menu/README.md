# mip-v-menu

`mip-v-menu`组件在它元素的位置上展示一个菜单，可以用于激活它。

## 用例

```html
<div class="group pa-2">
  <mip-v-menu offset-y>
    <mip-v-btn slot="activator" color="primary" dark>
      Dropdown
    </mip-v-btn>
    <mip-v-list>
      <mip-v-list-tile href="#" ripple>
        <mip-v-list-tile-title>Menu1</mip-v-list-tile-title>
      </mip-v-list-tile>
      <mip-v-list-tile href="#" ripple>
        <mip-v-list-tile-title>Menu2</mip-v-list-tile-title>
      </mip-v-list-tile>
      <mip-v-list-tile href="#" ripple>
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
absolute|boolean|/|给元素设置绝对定位
activator|any|/|在未使用激活器插槽激活器4.字符串可以是任何有效的查询选择器（querySelector），对象（Object）可以是任何有效的Node对象。
allow-overflow|boolean|/|移除内容的移除重新定位
attach|any|/|指定该组件应该分离到哪个DOM元素，使用CSS选择器字符串或元素的对象应用。
auto|boolean|/|在所选择的元素上居中列表
bottom|boolean|/|将组件向底部对齐
close-delay|number / string|200|关闭组件前等待的毫秒数
close-on-click|boolean|true|指定菜单应该在外部激活器被点击时关闭。
close-on-content-click|boolean|true|指定点击内容时菜单是否应该关闭。
content-class|any|''|将自定义类应用于分离的元素。这是很有用的，因为内容被移动到应用程序的末尾，而不是直接通过组件传递给类。
dark|boolean|/|应用暗黑主题变体
disabled|boolean|/|禁用菜单
fixed|boolean|/|给元素设置固定定位
full-width|boolean|/|Forces 100% width
input-activator|boolean|/|Sets a new activator target for the detached element. Use when placing detachable items in `mip-v-input` slots
lazy|boolean|/|有条件地渲染内容，只有激活时才会渲染内容
left|boolean|/|将组件向左边对齐
light|boolean|/|应用明亮主题变体
max-height|any|'auto'|设置内容的最大高度
max-width|number / string|'auto'|设置内容的最大宽度
min-width|number / string|/|设置内容的最小宽度
nudge-bottom|number / string|/|向底部微调内容
nudge-left|number / string|/|向左侧微调内容
nudge-right|number / string|/|向右侧微调内容
nudge-top|number / string|/|向顶部微调内容
nudge-width|number / string|/|微调内容宽度
offset-overflow|boolean|/|当由于溢出而重新定位时，导致组件翻转到另一侧
offset-x|boolean|/|在x轴上偏移菜单，与左/右方向一起工作
offset-y|boolean|/|在y轴上偏移菜单，与上/下方向一起工作
open-delay|number / string|/|打开组件前等待的毫秒数
open-on-click|boolean|true|指定是否在激活器点击时打开菜单
open-on-hover|boolean|/|指定是否在激活器悬停时打开菜单
origin|string|'top left'|设置过渡原点
position-x|number|/|用于在不使用激活器插槽时定位内容
position-y|number|/|用于在不使用激活器插槽时定位内容
return-value|any|/|
right|boolean|/|将组件向右边对齐
top|boolean|/|将组件向顶部对齐
transition|string / boolean|'v-menu-transition'|设置组件过渡效果，可以是内置的过渡配置或者是您自己的配置的其中一个。
value|boolean|/|控制可见性
z-index|number / string|/|用于组件的z-index

## 示例

### 鼠标悬停

```html
<div class="group pa-2">
  <mip-v-menu open-on-hover offset-x>
    <mip-v-btn slot="activator" color="primary" dark>
      Hover
    </mip-v-btn>

    <mip-v-list>
      <mip-v-list-tile href="#" ripple>
        <mip-v-list-tile-title>Menu1</mip-v-list-tile-title>
      </mip-v-list-tile>
      <mip-v-list-tile href="#" ripple>
        <mip-v-list-tile-title>Menu2</mip-v-list-tile-title>
      </mip-v-list-tile>
      <mip-v-list-tile href="#" ripple>
        <mip-v-list-tile-title>Menu3</mip-v-list-tile-title>
      </mip-v-list-tile>
    </mip-v-list>
  </mip-v-menu>
</div>
```

### 动画

```html
<div class="group pa-2">
  <mip-v-menu bottom origin="center center" transition="scale-transition">
    <mip-v-btn slot="activator" color="primary" dark>
      Dropdown
    </mip-v-btn>
    <mip-v-list>
      <mip-v-list-tile href="#" ripple>
        <mip-v-list-tile-title>Menu1</mip-v-list-tile-title>
      </mip-v-list-tile>
      <mip-v-list-tile href="#" ripple>
        <mip-v-list-tile-title>Menu2</mip-v-list-tile-title>
      </mip-v-list-tile>
      <mip-v-list-tile href="#" ripple>
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

        <mip-v-menu bottom left>
          <mip-v-btn slot="activator" dark icon>
            <mip-v-icon>more_vert</mip-v-icon>
          </mip-v-btn>

          <mip-v-list>
            <mip-v-list-tile href="#" ripple>
              <mip-v-list-tile-title>Menu1</mip-v-list-tile-title>
            </mip-v-list-tile>
            <mip-v-list-tile href="#" ripple>
              <mip-v-list-tile-title>Menu2</mip-v-list-tile-title>
            </mip-v-list-tile>
            <mip-v-list-tile href="#" ripple>
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
  <mip-v-menu absolute offset-y style="max-width: 600px">
    <mip-v-card slot="activator" class="portrait" img="https://cdn.vuetifyjs.com/images/cards/girl.jpg" height="300" width="600"></mip-v-card>

    <mip-v-list>
      <mip-v-list-tile href="#" ripple>
        <mip-v-list-tile-title>Menu1</mip-v-list-tile-title>
      </mip-v-list-tile>
      <mip-v-list-tile href="#" ripple>
        <mip-v-list-tile-title>Menu2</mip-v-list-tile-title>
      </mip-v-list-tile>
      <mip-v-list-tile href="#" ripple>
        <mip-v-list-tile-title>Menu3</mip-v-list-tile-title>
      </mip-v-list-tile>
    </mip-v-list>
  </mip-v-menu>
</div>
```
