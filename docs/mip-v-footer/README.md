# mip-v-footer

`mip-v-footer`用于显示用户可能希望从站点内的所有页面访问到的公共信息。

## 用例

```html
<mip-v-footer class="pa-3">
  <mip-v-spacer></mip-v-spacer>
  <div>&#xA9; <span m-text="year"></span></div>
</mip-v-footer>
```

## API

### mip-v-footer

#### Props

名称|类型|默认值|含义
:--:|:--:|:--:|:---
app|boolean|/|指定组件作为应用程序布局的一部分，用于动态调整内容的大小
color|string|/|将指定的色彩应用与控件
dark|boolean|/|应用暗黑主题变体
height|number / string|32|设置组件高度
inset|boolean|/|定位工具栏偏离应用程序`mip-v-navigation-drawer`的位置
light|boolean|/|应用明亮主题变体

## 示例

### 靛蓝色页脚

```html
<mip-v-footer dark height="auto">
  <mip-v-card flat tile class="indigo lighten-1 white--text text-xs-center">
    <mip-v-card-text>
      <mip-v-btn class="mx-3 white--text" icon>
        <mip-v-icon size="24px">fab fa-facebook</mip-v-icon>
      </mip-v-btn>
      <mip-v-btn class="mx-3 white--text" icon>
        <mip-v-icon size="24px">fab fa-twitter</mip-v-icon>
      </mip-v-btn>
      <mip-v-btn class="mx-3 white--text" icon>
        <mip-v-icon size="24px">fab fa-google-plus</mip-v-icon>
      </mip-v-btn>
      <mip-v-btn class="mx-3 white--text" icon>
        <mip-v-icon size="24px">fab fa-linkedin</mip-v-icon>
      </mip-v-btn>
      <mip-v-btn class="mx-3 white--text" icon>
        <mip-v-icon size="24px">fab fa-instagram</mip-v-icon>
      </mip-v-btn>
    </mip-v-card-text>

    <mip-v-card-text class="white--text pt-0">
      Phasellus feugiat arcu sapien, et iaculis ipsum elementum sit amet. Mauris cursus commodo interdum. Praesent ut risus eget metus luctus accumsan id ultrices nunc. Sed at orci sed massa consectetur dignissim a sit amet dui. Duis commodo vitae velit et faucibus. Morbi vehicula lacinia malesuada. Nulla placerat augue vel ipsum ultrices, cursus iaculis dui sollicitudin. Vestibulum eu ipsum vel diam elementum tempor vel ut orci. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
    </mip-v-card-text>

    <mip-v-divider></mip-v-divider>

    <mip-v-card-text class="white--text">
      &#xA9;2018 &#x2014; <strong>Vuetify</strong>
    </mip-v-card-text>
  </mip-v-card>
</mip-v-footer>
```

### 蓝绿色页脚

```html
<mip-v-footer dark height="auto">
  <mip-v-card class="flex" flat tile style="width: 100%;">
    <div class="v-card__title teal">
      <strong class="subheading">Get connected with us on social networks!</strong>

      <mip-v-spacer></mip-v-spacer>

      <mip-v-btn class="mx-3 white--text" icon>
        <mip-v-icon size="24px">fab fa-facebook</mip-v-icon>
      </mip-v-btn>
      <mip-v-btn class="mx-3 white--text" icon>
        <mip-v-icon size="24px">fab fa-twitter</mip-v-icon>
      </mip-v-btn>
      <mip-v-btn class="mx-3 white--text" icon>
        <mip-v-icon size="24px">fab fa-google-plus</mip-v-icon>
      </mip-v-btn>
      <mip-v-btn class="mx-3 white--text" icon>
        <mip-v-icon size="24px">fab fa-linkedin</mip-v-icon>
      </mip-v-btn>
      <mip-v-btn class="mx-3 white--text" icon>
        <mip-v-icon size="24px">fab fa-instagram</mip-v-icon>
      </mip-v-btn>
    </div>

    <div class="v-card__actions grey darken-3 justify-center">
      &#xA9;2018 &#x2014; <strong>Vuetify</strong>
    </div>
  </mip-v-card>
</mip-v-footer>
```
