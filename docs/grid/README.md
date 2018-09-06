# grid

Vuetify拥有一个12点的栅格系统，它使用<kbd>flex-box</kbd>构建，栅格用于布局应用程序的内容。它包含5种类型的媒体断点，用于定位特定的屏幕大小或方向。栅格组件的属性实际上是从它们定义的属性派生的类，这允许您轻松地将这些辅助类指定为属性，同时仍然提供在任何地方使用的类。

## 用例

```html
<p>&#x6805;&#x683C;&#x7ED3;&#x6784;&#xFF1A;container -&gt; layout -&gt; flex&#xFF0C;&#x5176;&#x4E2D; flex &#x548C; layout &#x53EF;&#x4EE5;&#x4E92;&#x76F8;&#x5D4C;&#x5957;</p>
<p>&#x54CD;&#x5E94;&#x5F0F;&#x65AD;&#x70B9;&#x5B9A;&#x4E49;&#x5982;&#x4E0B;&#xFF1A;</p>
<div class="mb-5 v-card"><div class="v-table__overflow"><table class="v-table"><caption class="mt-3"><strong>Material Design Viewport Breakpoints</strong></caption><thead><tr class="text-xs-left"><th>Device</th><th>Code</th><th>Types</th><th>Range</th></tr></thead><tbody><tr><td><i aria-hidden="true" class="v-icon mr-3 material-icons">phone_iphone</i><span>Extra small</span></td><td><strong>xs</strong></td><td>small to large handset</td><td>&lt; 600px</td></tr><tr><td><i aria-hidden="true" class="v-icon mr-3 material-icons">tablet</i><span>Small</span></td><td><strong>sm</strong></td><td>small to medium tablet</td><td>600px &gt; &lt; 960px</td></tr><tr><td><i aria-hidden="true" class="v-icon mr-3 material-icons">laptop</i><span>Medium</span></td><td><strong>md</strong></td><td>large tablet to laptop</td><td>960px &gt; &lt; 1264*</td></tr><tr><td><i aria-hidden="true" class="v-icon mr-3 material-icons">desktop_windows</i><span>Large</span></td><td><strong>lg</strong></td><td>desktop</td><td>1264 &gt; &lt; 1904px*</td></tr><tr><td><i aria-hidden="true" class="v-icon mr-3 material-icons">tv</i><span>Extra large</span></td><td><strong>xl</strong></td><td>4k and ultra-wides</td><td>&gt; 1904px*</td></tr></tbody><tfoot><tr><td colspan="4" class="text-xs-center"><small><em class="grey--text">* -16px on Desktop</em></small></td></tr></tfoot></table></div></div>
```

