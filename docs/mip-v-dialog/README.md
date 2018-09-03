# mip-v-dialog

`mip-v-dialog` 组件用来通知用户有关特定任务的信息，并且可能包含重要信息，需要作出决定或者涉及多任务；应谨慎使用对话框，因为它是中断的。

## 用例

```html
<mip-v-dialog m-bind:value.sync="dialog1" width="500">
  <mip-v-btn slot="activator" color="red lighten-2" dark="">
    Click Me
  </mip-v-btn>
  <mip-v-card>
    <mip-v-card-title class="headline grey lighten-2" primary-title="">Privacy Policy</mip-v-card-title>
    <mip-v-card-text>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </mip-v-card-text>
    <mip-v-divider></mip-v-divider>
    <mip-v-card-actions>
      <div class="spacer"></div>
      <mip-v-btn color="primary" flat="" on="tap:MIP.setData({dialog1:false})">
        I accept
      </mip-v-btn>
    
  </mip-v-card-actions></mip-v-card>
</mip-v-dialog>
```

## API

### mip-v-dialog

#### Props

名称|类型|默认值|含义
:--:|:--:|:--:|:---
attach|any|/|指定该组件应该分离到哪个DOM元素，使用CSS选择器字符串或元素的对象应用。
content-class|any|''|将自定义类应用于分离的元素。这是很有用的，因为内容被移动到应用程序的末尾，而不是直接通过组件传递给类。
disabled|boolean|/|禁用打开对话框
full-width|boolean|/|指定模态框强制100%宽度
fullscreen|boolean|/|改变布局全屏显示
hide-overlay|boolean|/|隐藏遮罩
max-width|string / number|'none'|内容的最大宽度
no-click-animation|boolean|/|Disables the bounce effect when clicking outside of a `mip-v-dialog`'s content when using the **persistent** prop
origin|string|'center center'|设置过渡原点
persistent|boolean|/|点击对话框外部不能使其关闭
return-value|any|/|
scrollable|boolean|/|当包含card, card-title, card-text 以及 card-actions这几个的对话框可滚动设为 true 的时候； card-text 应该指定高度并且设置 overflow-y
transition|string / boolean|'dialog-transition'|设置组件过渡效果，可以是内置的过渡配置或者是您自己的配置的其中一个。
value|boolean|/|控制可见性
width|string / number|'auto'|设置对话框的宽度

## 示例

### 模态框

```html
<mip-v-dialog m-bind:value.sync="dialog2" persistent="" max-width="290">
  <mip-v-btn slot="activator" color="primary" dark="">
    Open Dialog
  </mip-v-btn>
  <mip-v-card>
    <mip-v-card-title class="headline">Use Google&apos;s location service?</mip-v-card-title>
    <mip-v-card-text>
      Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running.
    </mip-v-card-text>
    <mip-v-card-actions>
      <div class="spacer"></div>
      <mip-v-btn color="green darken-1" flat="" on="tap:MIP.setData({dialog2:false})">Disagree</mip-v-btn>
      <mip-v-btn color="green darken-1" flat="" on="tap:MIP.setData({dialog2:false})">Agree</mip-v-btn>
    </mip-v-card-actions>
  </mip-v-card>
</mip-v-dialog>
```

### 可滚动

```html
<mip-v-btn outline="" large="" fab="" color="indigo" on="tap:MIP.setData({show2:true})">
  <mip-v-icon>edit</mip-v-icon>
</mip-v-btn>
<mip-v-dialog m-bind:value.sync="show2" scrollable="" max-width="290">
  <div class="v-card">
    <div class="v-card__title headline">Use Google&apos;s location service?</div>
    <div class="v-card__text" style="height: 300px;">
      Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running.
      Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running.
      Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running.
      Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running.
      Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running.
      Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running.
      Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running.
    </div>
    <div class="v-card__actions">
      <div class="spacer"></div>
      <mip-v-btn outline="" large="" fab="" color="indigo" on="tap:MIP.setData({show2:false})">
        <mip-v-icon>close</mip-v-icon>
      </mip-v-btn>
    </div>
  </div>
</mip-v-dialog>
```

### Loading 效果

```html
<p>&#x4F7F;&#x7528; hide-overlay &#x9690;&#x85CF;&#x8499;&#x5C42;</p>
<p>&#x4F7F;&#x7528; persistent &#x70B9;&#x51FB;&#x5BF9;&#x8BDD;&#x6846;&#x5916;&#x90E8;&#x4E0D;&#x80FD;&#x4F7F;&#x5176;&#x5173;&#x95ED;</p>
<mip-v-btn outline="" large="" fab="" color="indigo" on="tap:MIP.setData({show3:true})">
  <mip-v-icon>edit</mip-v-icon>
</mip-v-btn>
<mip-v-dialog m-bind:value="show3" hide-overlay="" persistent="" max-width="290">
  <div class="v-card">
    <div class="v-card__text">
      Loading...
    </div>
  </div>
</mip-v-dialog>
```
