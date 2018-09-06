# transitions

流畅的动画有助于给用户界面带来很棒的感觉。使用Vue的过渡系统和可复用的功能组件，您可以轻松地控制应用程序的动画效果。大多数组件可以通过`transition`属性来改变他们的过渡。

## 用例

```html
<mip-data>
  <script type="application/json">
    null
  </script>
</mip-data>
<mip-v-menu transition="slide-x-transition">
  <mip-v-btn slot="activator" dark="" color="primary">Slide X Transition</mip-v-btn>
  <mip-v-list>
    <mip-v-list-tile>
      <mip-v-list-tile-title>Item 1</mip-v-list-tile-title>
    </mip-v-list-tile>
    <mip-v-list-tile>
      <mip-v-list-tile-title>Item 2</mip-v-list-tile-title>
    </mip-v-list-tile>
    <mip-v-list-tile>
      <mip-v-list-tile-title>Item 3</mip-v-list-tile-title>
    </mip-v-list-tile>
    <mip-v-list-tile>
      <mip-v-list-tile-title>Item 4</mip-v-list-tile-title>
    </mip-v-list-tile>
    <mip-v-list-tile>
      <mip-v-list-tile-title>Item 5</mip-v-list-tile-title>
    </mip-v-list-tile>
  </mip-v-list>
</mip-v-menu>
<mip-v-menu transition="slide-x-reverse-transition">
  <mip-v-btn slot="activator" dark="" color="secondary">Slide X Reverse Transition</mip-v-btn>
  <mip-v-list>
    <mip-v-list-tile>
      <mip-v-list-tile-title>Item 1</mip-v-list-tile-title>
    </mip-v-list-tile>
    <mip-v-list-tile>
      <mip-v-list-tile-title>Item 2</mip-v-list-tile-title>
    </mip-v-list-tile>
    <mip-v-list-tile>
      <mip-v-list-tile-title>Item 3</mip-v-list-tile-title>
    </mip-v-list-tile>
    <mip-v-list-tile>
      <mip-v-list-tile-title>Item 4</mip-v-list-tile-title>
    </mip-v-list-tile>
    <mip-v-list-tile>
      <mip-v-list-tile-title>Item 5</mip-v-list-tile-title>
    </mip-v-list-tile>
  </mip-v-list>
</mip-v-menu>
<mip-v-menu transition="slide-y-transition">
  <mip-v-btn slot="activator" dark="" color="primary">Slide Y Transition</mip-v-btn>
  <mip-v-list>
    <mip-v-list-tile>
      <mip-v-list-tile-title>Item 1</mip-v-list-tile-title>
    </mip-v-list-tile>
    <mip-v-list-tile>
      <mip-v-list-tile-title>Item 2</mip-v-list-tile-title>
    </mip-v-list-tile>
    <mip-v-list-tile>
      <mip-v-list-tile-title>Item 3</mip-v-list-tile-title>
    </mip-v-list-tile>
    <mip-v-list-tile>
      <mip-v-list-tile-title>Item 4</mip-v-list-tile-title>
    </mip-v-list-tile>
    <mip-v-list-tile>
      <mip-v-list-tile-title>Item 5</mip-v-list-tile-title>
    </mip-v-list-tile>
  </mip-v-list>
</mip-v-menu>
<mip-v-menu transition="slide-y-reverse-transition">
  <mip-v-btn slot="activator" dark="" color="secondary">Slide Y Reverse Transition</mip-v-btn>
  <mip-v-list>
    <mip-v-list-tile>
      <mip-v-list-tile-title>Item 1</mip-v-list-tile-title>
    </mip-v-list-tile>
    <mip-v-list-tile>
      <mip-v-list-tile-title>Item 2</mip-v-list-tile-title>
    </mip-v-list-tile>
    <mip-v-list-tile>
      <mip-v-list-tile-title>Item 3</mip-v-list-tile-title>
    </mip-v-list-tile>
    <mip-v-list-tile>
      <mip-v-list-tile-title>Item 4</mip-v-list-tile-title>
    </mip-v-list-tile>
    <mip-v-list-tile>
      <mip-v-list-tile-title>Item 5</mip-v-list-tile-title>
    </mip-v-list-tile>
  </mip-v-list>
</mip-v-menu>
```

