# mip-v-text-field

文本框组件用于收集用户提供的信息。

## 用例

```html
<div class="container grid-list-xl">
  <div class="layout row wrap">
    <mip-v-text-field class="flex xs12 md6" label="Regular" single-line=""></mip-v-text-field>
    <mip-v-text-field class="flex xs12 md6" label="Solo" single-line="" solo=""></mip-v-text-field>
    <mip-v-text-field class="flex xs12 md6" label="Box" single-line="" box=""></mip-v-text-field>
    <mip-v-text-field class="flex xs12 md6" label="Outline" single-line="" outline=""></mip-v-text-field>
  </div>
</div>
```

## API

### mip-v-text-field

#### Props

名称|类型|默认值|含义
:--:|:--:|:--:|:---
dont-fill-mask-blanks|boolean|/|键入时禁用自动字符显示
mask|any / string|/|将自定义字符掩码应用于输入框。有关更多信息，请参阅上面的掩码表格。
return-masked-value|boolean|/|返回未修改的掩码字符串
append-outer-icon|string|/|Append an icon to the outside of `v-text-field`'s input, uses same syntax as `v-icon`
append-outer-icon-cb|any|/|Callback for appended outer icon when clicked
autofocus|boolean|/|启用自动聚焦
box|boolean|/|应用备用输入框样式
browser-autocomplete|string|/|Configures the default `<input>` autocomplete attribute
clearable|boolean|/|添加输入框清除功能，默认图标是 Material Icons **clear**
clear-icon|string|'$vuetify.icons.clear'|Applied when using **clearable** and the input is dirty
clear-icon-cb|any|/|Callback for clear icon when clicked
color|string|'primary'|
counter|boolean / number / string|/|为输入长度创建一个计数器，如果未指定数字，则默认为25，不会应用任何验证。
flat|boolean|/|当使用**solo**或者**solo-inverted**属性时，移除添加到元素的标高（阴影）
full-width|boolean|/|指定输入框为全屏宽度。
label|string|/|
outline|boolean|/|Applies the outline style to the input
placeholder|string|/|Sets the input’s placeholder text
prefix|string|/|显示前缀
prepend-inner-icon|string|/|
prepend-inner-icon-cb|any|/|
reverse|boolean|/|Reverses the input orientation
single-line|boolean|/|Label does not move on focus/dirty
solo|boolean|/|改变输入框的样式
solo-inverted|boolean|/|减少元素的不透明度，知道获得焦点
suffix|string|/|显示后缀
textarea|boolean|/|Textarea 使用备用样式
type|string|'text'|设置输入类型

## 示例

### Disabled and readonly

```html
<div class="container grid-list-xl">
  <div class="layout row wrap">
    <mip-v-text-field class="flex xs12 md6" value="John Doe" label="Regular" disabled></mip-v-text-field>
    <mip-v-text-field class="flex xs12 md6" value="John Doe" label="Regular" readonly></mip-v-text-field>
    <mip-v-text-field class="flex xs12 md6" value="John Doe" label="Solo" solo="" disabled></mip-v-text-field>
    <mip-v-text-field class="flex xs12 md6" value="John Doe" label="Solo" solo="" readonly></mip-v-text-field>
    <mip-v-text-field class="flex xs12 md6" value="John Doe" label="Box" box="" disabled></mip-v-text-field>
    <mip-v-text-field class="flex xs12 md6" value="John Doe" label="Box" box="" readonly></mip-v-text-field>
    <mip-v-text-field class="flex xs12 md6" value="John Doe" label="Outline" outline="" disabled></mip-v-text-field>
    <mip-v-text-field class="flex xs12 md6" value="John Doe" label="Outline" outline="" readonly></mip-v-text-field>
  </div>
</div>
```

### 带图标

```html
<div class="container grid-list-xl">
  <div class="layout row wrap">
    <mip-v-text-field class="flex xs12 md6" label="Prepend" prepend-icon="place"></mip-v-text-field>
    <mip-v-text-field class="flex xs12 md6" label="Append" append-icon="place"></mip-v-text-field>
    <mip-v-text-field class="flex xs12 md6" label="Append outer" append-outer-icon="place"></mip-v-text-field>
    <mip-v-text-field class="flex xs12 md6" solo="" label="Prepend" prepend-icon="place"></mip-v-text-field>
    <mip-v-text-field class="flex xs12 md6" solo="" label="Append" append-icon="place"></mip-v-text-field>
    <mip-v-text-field class="flex xs12 md6" solo="" label="Append outer" append-outer-icon="place"></mip-v-text-field>
    <mip-v-text-field class="flex xs12 md6" box="" label="Prepend" prepend-icon="place"></mip-v-text-field>
    <mip-v-text-field class="flex xs12 md6" box="" label="Append" append-icon="place"></mip-v-text-field>
    <mip-v-text-field class="flex xs12 md6" box="" label="Append outer" append-outer-icon="place"></mip-v-text-field>
    <mip-v-text-field class="flex xs12 md6" outline="" label="Prepend" prepend-icon="place"></mip-v-text-field>
    <mip-v-text-field class="flex xs12 md6" outline="" label="Append" append-icon="place"></mip-v-text-field>
    <mip-v-text-field class="flex xs12 md6" outline="" label="Append outer" append-outer-icon="place"></mip-v-text-field>
  </div>
</div>
```

### Clearable

```html
<div class="container grid-list-xl">
  <div class="layout row wrap">
    <mip-v-text-field class="flex xs12 md6" m-bind:value.sync="message1" label="Regular" clearable=""></mip-v-text-field>
    <mip-v-text-field class="flex xs12 md6" m-bind:value.sync="message2" solo="" label="Solo" clearable=""></mip-v-text-field>
    <mip-v-text-field class="flex xs12 md6" m-bind:value.sync="message3" box="" label="Box" clearable=""></mip-v-text-field>
    <mip-v-text-field class="flex xs12 md6" m-bind:value.sync="message4" label="Outline" outline="" clearable=""></mip-v-text-field>
  
  </div>
</div>
```

### Icon events

```html
<mip-v-flex xs12="">
  <mip-v-text-field m-bind:value.sync="message" m-bind:append-icon="marker ? &apos;mdi-map-marker&apos; : &apos;mdi-map-marker-off&apos;" m-bind:append-outer-icon="message ? &apos;mdi-send&apos; : &apos;mdi-microphone&apos;" m-bind:prepend-icon="icons[iconIndex]" box="" clear-icon="mdi-close-circle" clearable="" label="Message" type="text" on="click-append:MIP.setData({marker: !m.marker})
        click-append-outer:MIP.setData({sendMessage: true})
        click-prepend:MIP.setData({changeIcon: true})
        click-clear:MIP.setData({message: &apos;&apos;})">
</mip-v-text-field></mip-v-flex>
```

### 字符计数器

```html
<div class="container grid-list-xl">
  <div class="layout row wrap">
    <mip-v-text-field class="flex xs12 md6" m-bind:value.sync="title" counter="25" hint="This field uses counter prop" label="Regular"></mip-v-text-field>
    <mip-v-text-field class="flex xs12 md6" m-bind:value.sync="description" counter="" maxlength="25" hint="This field uses maxlength attribute" label="Limit exceeded"></mip-v-text-field>
    <mip-v-text-field class="flex xs12 md6" m-bind:value.sync="title" counter="25" box="" label="Box"></mip-v-text-field>
    <mip-v-text-field class="flex xs12 md6" m-bind:value.sync="title" counter="25" label="Outline" outline=""></mip-v-text-field>
  </div>
</div>
```

### 密码输入

```html
<div class="container grid-list-xl">
  <div class="layout row wrap">
    <mip-v-text-field class="flex xs12 sm6" m-bind:value.sync="password" m-bind:append-icon="show1 ? &apos;visibility_off&apos; : &apos;visibility&apos;" m-bind:type="show1 ? &apos;text&apos; : &apos;password&apos;" name="input-10-1" label="Normal with hint text" hint="At least 8 characters" counter="" on="click-append:MIP.setData({show1: !m.show1})"></mip-v-text-field>
    <mip-v-text-field class="flex xs12 sm6" m-bind:append-icon="show2 ? &apos;visibility_off&apos; : &apos;visibility&apos;" m-bind:type="show2 ? &apos;text&apos; : &apos;password&apos;" name="input-10-2" label="Visible" hint="At least 8 characters" value="wqfasds" on="click-append:MIP.setData({show2: !m.show2})"></mip-v-text-field>
    <mip-v-text-field class="flex xs12 sm6" m-bind:append-icon="show3 ? &apos;visibility_off&apos; : &apos;visibility&apos;" m-bind:type="show3 ? &apos;text&apos; : &apos;password&apos;" name="input-10-2" label="Not visible" hint="At least 8 characters" value="wqfasds" on="click-append:MIP.setData({show3: !m.show3})"></mip-v-text-field>
    <mip-v-text-field class="flex xs12 sm6" m-bind:append-icon="show4 ? &apos;visibility_off&apos; : &apos;visibility&apos;" m-bind:type="show4 ? &apos;text&apos; : &apos;password&apos;" name="input-10-2" label="Error" hint="At least 8 characters" value="Pa" error="" on="click-append:MIP.setData({show4: !m.show4})"></mip-v-text-field>
  </div>
</div>
```

### 全宽文本框

```html
<div class="container grid-list-xl">
  <div class="layout row wrap">
    <mip-v-text-field class="flex xs12 md6" label="Subject" value="Plans for the weekend" single-line="" full-width="" hide-details=""></mip-v-text-field>
  </div>
</div>
```

### 提示文本

```html
<div class="container grid-list-xl">
  <div class="layout row wrap">
    <mip-v-text-field class="flex xs12 md6" label="Your product or service" value="Grocery delivery" hint="For example, flowers or used cars"></mip-v-text-field>
    <mip-v-text-field class="flex xs12 md6" label="Your landing page" hint="www.example.com/page" persistent-hint=""></mip-v-text-field>
    <mip-v-text-field class="flex xs12 md6" label="Your product or service" value="Grocery delivery" hint="For example, flowers or used cars" box=""></mip-v-text-field>
    <mip-v-text-field class="flex xs12 md6" label="Your landing page" hint="www.example.com/page" persistent-hint="" box=""></mip-v-text-field>
    <mip-v-text-field class="flex xs12 md6" label="Your product or service" value="Grocery delivery" hint="For example, flowers or used cars" outline=""></mip-v-text-field>
    <mip-v-text-field class="flex xs12 md6" label="Your landing page" hint="www.example.com/page" persistent-hint="" outline=""></mip-v-text-field>
  </div>
</div>
```

### 前缀和后缀

```html
<div class="container grid-list-xl">
  <div class="layout row wrap">
    <mip-v-text-field class="flex xs12 md6" label="Amount" value="10.00" prefix="$"></mip-v-text-field>
    <mip-v-text-field class="flex xs12 md6" label="Weight" value="28.00" suffix="lbs"></mip-v-text-field>
    <mip-v-text-field class="flex xs12 md6" label="Email address" value="example" suffix="@gmail.com"></mip-v-text-field>
    <mip-v-text-field class="flex xs12 md6" label="Label Text" value="12:30:00" type="time" suffix="PST"></mip-v-text-field>
  </div>
</div>
```

### 盒子样式

```html
<div class="container grid-list-xl">
  <div class="layout row wrap">
    <mip-v-text-field class="flex xs12 md6" m-bind:value.sync="first" label="First Name" box=""></mip-v-text-field>
    <mip-v-text-field class="flex xs12 md6" m-bind:value.sync="last" label="Last Name" box=""></mip-v-text-field>
  </div>
</div>
```

### Solo style

```html
<div class="container grid-list-xl">
  <div class="layout row wrap">
    <mip-v-text-field class="flex xs12 md6" m-bind:value.sync="first" label="First Name" solo=""></mip-v-text-field>
    <mip-v-text-field class="flex xs12 md6" m-bind:value.sync="last" label="Last Name" solo-inverted=""></mip-v-text-field>
  </div>
</div>
```

### Outline style

```html
<div class="container grid-list-xl">
  <div class="layout row wrap">
    <mip-v-text-field class="flex xs12 md6" m-bind:value.sync="first" label="First Name" outline=""></mip-v-text-field>
    <mip-v-text-field class="flex xs12 md6" m-bind:value.sync="last" label="Last Name" outline=""></mip-v-text-field>
  </div>
</div>
```

### 自定义颜色

```html
<div class="container grid-list-xl">
  <div class="layout row wrap">
  <mip-v-text-field class="flex xs12 md6" m-bind:value.sync="form.first" color="purple darken-2" label="First name" required></mip-v-text-field>
  <mip-v-text-field class="flex xs12 md6" m-bind:value.sync="form.last" color="blue darken-2" label="Last name" required></mip-v-text-field>
  </div>
</div>
```

### 掩码

```html
<mip-v-card>
  <mip-v-card-text>
    <mip-v-text-field m-bind:value.sync="mask" label="Mask"></mip-v-text-field>
  </mip-v-card-text>
  <mip-v-card-text>
    <mip-v-text-field m-bind:mask="mask" m-bind:value.sync="maskValue" label="Value"></mip-v-text-field>
  </mip-v-card-text>
</mip-v-card>
```

### 进度条

```html
<div class="container grid-list-xl">
  <mip-v-checkbox m-bind:input-value.sync="custom" label="Custom progress bar"></mip-v-checkbox>
  <mip-v-text-field m-bind:value.sync="progressValue" color="cyan darken" label="Text field" placeholder="Start typing..." loading="">
    <mip-v-progress-linear m-bind:class="{hide: !custom}" slot="progress" m-bind:value="progress" m-bind:color="color" height="7"></mip-v-progress-linear>
  </mip-v-text-field>
</div>
<mip-script>
  MIP.watch(&apos;sendMessage&apos;, val =&gt; {
    MIP.setData({
      iconIndex: 0,
      message: &apos;&apos;,
      sendMessage: false
    })
  })

  MIP.watch(&apos;changeIcon&apos;, val =&gt; {
    if (val) {
      let iconIndex = MIP.getData(&apos;iconIndex&apos;)
      let icons = MIP.getData(&apos;icons&apos;)
      MIP.setData({
        iconIndex: (iconIndex === icons.length - 1) ? 0 : ++iconIndex
      })
    }
    MIP.setData({
      changeIcon: false
    })
  })
  MIP.watch(&apos;progressValue&apos;, val =&gt; {
    let progress = Math.min(100, val.length * 10)
    MIP.setData({
      progress,
      color: [&apos;error&apos;, &apos;warning&apos;, &apos;success&apos;][Math.floor(progress / 40)]
    })
  })
</mip-script>
```
