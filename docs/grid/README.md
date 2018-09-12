# grid

Vuetify拥有一个12点的栅格系统，它使用<kbd>flex-box</kbd>构建，栅格用于布局应用程序的内容。它包含5种类型的媒体断点，用于定位特定的屏幕大小或方向。栅格定义为一系列的辅助类，这允许您轻松地将这些类应用在元素上。

## 用例

&#x6805;&#x683C;&#x7ED3;&#x6784;&#xFF1A;container -&gt; layout -&gt; flex&#xFF0C;&#x5176;&#x4E2D; flex &#x548C; layout &#x53EF;&#x4EE5;&#x4E92;&#x76F8;&#x5D4C;&#x5957;
&#x54CD;&#x5E94;&#x5F0F;&#x65AD;&#x70B9;&#x5B9A;&#x4E49;&#x5982;&#x4E0B;&#xFF1A;

```html
<div class="mb-5 v-card">
  <div class="v-table__overflow">
    <table class="v-table">
      <caption class="mt-3"><strong>Material Design Viewport Breakpoints</strong></caption>
      <thead>
        <tr class="text-xs-left">
          <th>Device</th>
          <th>Code</th>
          <th>Types</th>
          <th>Range</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><i aria-hidden="true" class="v-icon mr-3 material-icons">phone_iphone</i><span>Extra small</span></td>
          <td><strong>xs</strong></td>
          <td>small to large handset</td>
          <td>&lt; 600px</td>
        </tr>
        <tr>
          <td><i aria-hidden="true" class="v-icon mr-3 material-icons">tablet</i><span>Small</span></td>
          <td><strong>sm</strong></td>
          <td>small to medium tablet</td>
          <td>600px &gt; &lt; 960px</td>
        </tr>
        <tr>
          <td><i aria-hidden="true" class="v-icon mr-3 material-icons">laptop</i><span>Medium</span></td>
          <td><strong>md</strong></td>
          <td>large tablet to laptop</td>
          <td>960px &gt; &lt; 1264*</td>
        </tr>
        <tr>
          <td><i aria-hidden="true" class="v-icon mr-3 material-icons">desktop_windows</i><span>Large</span></td>
          <td><strong>lg</strong></td>
          <td>desktop</td>
          <td>1264 &gt; &lt; 1904px*</td>
        </tr>
        <tr>
          <td><i aria-hidden="true" class="v-icon mr-3 material-icons">tv</i><span>Extra large</span></td>
          <td><strong>xl</strong></td>
          <td>4k and ultra-wides</td>
          <td>&gt; 1904px*</td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <td colspan="4" class="text-xs-center"><small><em class="grey--text">* -16px on Desktop</em></small></td>
        </tr>
      </tfoot>
    </table>
  </div>
</div>
```

## 示例

### container 可以调整基础间距

```html
<div class="container grid-list-md text-xs-center">
  <div class="layout row wrap">
    <div class="flex xs12">
      <div class="v-card theme--dark primary">
        <div class="v-card__text px-0">12</div>
      </div>
    </div>
    <div class="flex xs6">
      <div class="v-card theme--dark secondary">
        <div class="v-card__text px-0">6</div>
      </div>
    </div>
    <div class="flex xs6">
      <div class="v-card theme--dark secondary">
        <div class="v-card__text px-0">6</div>
      </div>
    </div>
  </div>
</div>
```

### layout 可以调整排列方向

```html
<div class="container grid-list-md text-xs-center">
  <div class="layout row wrap">
    <div class="flex xs6">
      <div class="layout column wrap">
        <div class="flex">
          <div class="v-card theme--dark primary">
            <div class="v-card__text px-0">6</div>
          </div>
        </div>
        <div class="flex">
          <div class="v-card theme--dark primary">
            <div class="v-card__text px-0">6</div>
          </div>
        </div>
      </div>
    </div>
    <div class="flex xs6">
      <div class="v-card theme--dark primary">
        <div class="v-card__text px-0">Lorem ipsum dolor sit amet, mel at clita quando. Te sit oratio vituperatoribus, nam ad ipsum posidonLorem ipsum dolor sit amet, mel at clita quando. Te sit oratio vituperatoribus, nam ad ipsum posidon</div>
      </div>
    </div>
  </div>
  <div class="layout column wrap"></div>
</div>
```

### flex 栅格尺寸

```html
<div class="container grid-list-xs text-xs-center">
  <div class="layout row wrap">
    <div class="flex xs12">
      <div class="v-card theme--dark primary">
        <div class="v-card__text px-0">12</div>
      </div>
    </div>
    <div class="flex xs6">
      <div class="v-card theme--dark secondary">
        <div class="v-card__text px-0">6</div>
      </div>
    </div>
    <div class="flex xs6">
      <div class="v-card theme--dark secondary">
        <div class="v-card__text px-0">6</div>
      </div>
    </div>
    <div class="flex xs4">
      <div class="v-card theme--dark primary">
        <div class="v-card__text px-0">4</div>
      </div>
    </div>
    <div class="flex xs4">
      <div class="v-card theme--dark primary">
        <div class="v-card__text px-0">4</div>
      </div>
    </div>
    <div class="flex xs4">
      <div class="v-card theme--dark primary">
        <div class="v-card__text px-0">4</div>
      </div>
    </div>
    <div class="flex xs3">
      <div class="v-card theme--dark secondary">
        <div class="v-card__text px-0">3</div>
      </div>
    </div>
    <div class="flex xs3">
      <div class="v-card theme--dark secondary">
        <div class="v-card__text px-0">3</div>
      </div>
    </div>
    <div class="flex xs3">
      <div class="v-card theme--dark secondary">
        <div class="v-card__text px-0">3</div>
      </div>
    </div>
    <div class="flex xs3">
      <div class="v-card theme--dark secondary">
        <div class="v-card__text px-0">3</div>
      </div>
    </div>
    <div class="flex xs2">
      <div class="v-card theme--dark primary">
        <div class="v-card__text px-0">2</div>
      </div>
    </div>
    <div class="flex xs2">
      <div class="v-card theme--dark primary">
        <div class="v-card__text px-0">2</div>
      </div>
    </div>
    <div class="flex xs2">
      <div class="v-card theme--dark primary">
        <div class="v-card__text px-0">2</div>
      </div>
    </div>
    <div class="flex xs2">
      <div class="v-card theme--dark primary">
        <div class="v-card__text px-0">2</div>
      </div>
    </div>
    <div class="flex xs2">
      <div class="v-card theme--dark primary">
        <div class="v-card__text px-0">2</div>
      </div>
    </div>
    <div class="flex xs2">
      <div class="v-card theme--dark primary">
        <div class="v-card__text px-0">2</div>
      </div>
    </div>
    <div class="flex xs1">
      <div class="v-card theme--dark primary">
        <div class="v-card__text px-0">1</div>
      </div>
    </div>
    <div class="flex xs1">
      <div class="v-card theme--dark primary">
        <div class="v-card__text px-0">1</div>
      </div>
    </div>
    <div class="flex xs1">
      <div class="v-card theme--dark primary">
        <div class="v-card__text px-0">1</div>
      </div>
    </div>
    <div class="flex xs1">
      <div class="v-card theme--dark primary">
        <div class="v-card__text px-0">1</div>
      </div>
    </div>
    <div class="flex xs1">
      <div class="v-card theme--dark primary">
        <div class="v-card__text px-0">1</div>
      </div>
    </div>
    <div class="flex xs1">
      <div class="v-card theme--dark primary">
        <div class="v-card__text px-0">1</div>
      </div>
    </div>
  </div>
</div>
```

### flex 偏移

```html
<div class="container grid-list-xl text-xs-center">
  <div class="layout row wrap">
    <div class="flex xs10 offset-xs1">
      <div class="v-card theme--dark purple">
        <div class="v-card__text">xs10 offset-xs1</div>
      </div>
    </div>
    <div class="flex xs7 offset-xs5 offset-md2 offset-lg5">
      <div class="v-card theme--dark secondary">
        <div class="v-card__text">xs7 offset-(xs5 | md2 | lg5)</div>
      </div>
    </div>
    <div class="flex xs12 sm5 md3">
      <div class="v-card theme--dark primary">
        <div class="v-card__text">(xs12 | sm5 | md3)</div>
      </div>
    </div>
    <div class="flex xs12 sm5 md5 offset-xs0 offset-lg2">
      <div class="v-card theme--dark green">
        <div class="v-card__text">(xs12 | sm5 | md5) offset-(xs0 | lg2)</div>
      </div>
    </div>
  </div>
</div>
```

### 自定义组件

```html
<div class="container grid-list-xl">
  <div class="layout row wrap">
    <mip-v-text-field class="flex xs4" label="Regular" single-line></mip-v-text-field>
    <mip-v-text-field class="flex xs4" label="Regular" single-line></mip-v-text-field>
    <mip-v-text-field class="flex xs4" label="Regular" single-line></mip-v-text-field>
  </div>
  <div class="layout row wrap">
    <mip-v-text-field class="flex xs8" label="Regular" single-line></mip-v-text-field>
    <mip-v-text-field class="flex xs4" label="Regular" single-line></mip-v-text-field>
  </div>
</div>
```

### 文本对齐

```html
<div>
  <p class="text-lg-right">Right align on large viewport sizes</p>
  <p class="text-md-center">Center align on medium viewport sizes</p>
  <p class="text-sm-left">Left align on small viewport sizes</p>
  <p class="text-xs-center">Center align on all viewport sizes</p>
  <p class="text-xs-right">Right align on all viewport sizes</p>
</div>
```
