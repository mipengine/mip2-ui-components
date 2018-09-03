# mip-v-autocomplete

The `mip-v-autocomplete` component offers simple and flexible type-ahead functionality. This is useful when searching large sets of data or even dynamically requesting information from an API.

## 用例

```html
<div></div>
```

## API

### mip-v-autocomplete

#### Props

名称|类型|默认值|含义
:--:|:--:|:--:|:---
activator|any|/|
allow-overflow|boolean|true|
append-icon|string|'$vuetify.icons.dropdown'|Append an icon to the component, uses same syntax as `mip-v-icon`
append-icon-cb|function|/|Callback for appended icon when clicked
append-outer-icon|string|/|Append an icon to the outside of `mip-v-text-field`'s input, uses same syntax as `v-icon`
append-outer-icon-cb|function|/|Callback for appended outer icon when clicked
attach|any|/|
auto|boolean|/|在所选择的元素上居中列表
autofocus|boolean|/|启用自动聚焦
background-color|string|''|
box|boolean|/|应用备用输入框样式
browser-autocomplete|string|'off'|Configures the default `<input>` autocomplete attribute
cache-items|boolean|/|
chips|boolean|/|
clear-icon|string|'$vuetify.icons.clear'|Applied when using **clearable** and the input is dirty
clear-icon-cb|function|/|Callback for clear icon when clicked
clearable|boolean|/|添加输入框清除功能，默认图标是 Material Icons **clear**
close-on-click|boolean|true|
close-on-content-click|boolean|true|
color|string|'primary'|将指定的色彩应用与控件
content-class|string|/|
counter|boolean / number / string|/|为输入长度创建一个计数器，如果未指定数字，则默认为25，不会应用任何验证。
dark|boolean|/|应用暗黑主题变体
deletable-chips|boolean|/|
dense|boolean|/|
disabled|boolean|/|输入框是禁用的
dont-fill-mask-blanks|boolean|/|键入时禁用自动字符显示
error|boolean|/|将输入框设置为手动错误状态。
error-count|number / string|1|The total number of errors that should display at once
error-messages|string / array|[]|将输入框置于错误状态，并传入自定义的错误信息。将与来自**规则（rules）**属性的任何验证相结合。这个字段不会触发验证。
filter|function|true|
flat|boolean|/|当使用**solo**或者**solo-inverted**属性时，移除添加到元素的标高（阴影）
full-width|boolean|/|指定输入框为全屏宽度。
height|number / string|/|设置组件高度
hide-details|boolean|/|Hides hint, validation errors
hide-no-data|boolean|/|
hide-selected|boolean|/|
hint|string|/|Hint text
input-activator|boolean|/|
item-avatar|string / array / function|'avatar'|
item-disabled|string / array / function|'disabled'|
item-text|string / array / function|'text'|
item-value|string / array / function|'value'|
items|array|[]|
label|string|/|设置输入框标签
light|boolean|/|应用明亮主题变体
loading|boolean / string|/|显示线性进度条。可以是指定将哪种颜色应用于进度条的字符串（任何material色彩——主要（primary）, 次要（secondary）, 成功（success）, 信息（info），警告（warning），错误（error）），或者使用组件的布尔值**颜色**（由色彩属性设置——如果它被组件支持的话）还可以是原色。
mask|object / string|/|将自定义字符掩码应用于输入框。有关更多信息，请参阅上面的掩码表格。
max-height|number / string|300|设置内容的最大高度
max-width|number / string|'auto'|
messages|string / array|[]|Displays a list of messages or message if using a string
min-width|number / string|/|
multi-line|boolean|/|转为多行文本框
multiple|boolean|/|
no-data-text|string|'$vuetify.noDataText'|当没有数据时显示的文本
no-filter|boolean|/|Do not apply filtering when searching. Useful when data is being filtered server side
nudge-bottom|number / string|/|
nudge-left|number / string|/|
nudge-right|number / string|/|
nudge-top|number / string|/|
nudge-width|number / string|/|
offset-overflow|boolean|true|
offset-x|boolean|/|
offset-y|boolean|true|
open-on-clear|boolean|/|
open-on-click|boolean|true|
open-on-hover|boolean|/|
origin|string|'top left'|
outline|boolean|/|Applies the outline style to the input
persistent-hint|boolean|/|Forces hint to always be visible
placeholder|string|/|Sets the input’s placeholder text
position-x|number|/|
position-y|number|/|
prefix|string|/|显示前缀
prepend-icon|string|/|Prepend an icon to the component, uses same syntax as `mip-v-icon`
prepend-icon-cb|function|/|Callback for prepended icon when clicked
prepend-inner-icon|string|/|
prepend-inner-icon-cb|function|/|
readonly|boolean|/|Puts input in readonly state
return-masked-value|boolean|/|返回未修改的掩码字符串
return-object|boolean|/|
reverse|boolean|/|Reverses the input orientation
rules|array|[]|返回True或带有错误信息的字符串的函数数组。
search-input|any|/|
single-line|boolean|/|Label does not move on focus/dirty
small-chips|boolean|/|
solo|boolean|/|改变输入框的样式
solo-inverted|boolean|/|减少元素的不透明度，知道获得焦点
success|boolean|/|Puts the input in a manual success state
success-messages|string / array|[]|Puts the input in a success state and passes through custom success messsages.
suffix|string|/|显示后缀
textarea|boolean|/|Textarea 使用备用样式
transition|boolean / string|/|
type|string|'text'|设置输入类型
validate-on-blur|boolean|/|延迟验证直到失去焦点的事件被触发
value|any|/|设置选择控件组件的值
value-comparator|function|true|Apply a custom value comparator function
z-index|number / string|/|

## 示例

### Search for Public APIs

```html
<div class="container grid-list-xl">
  <mip-v-autocomplete m-bind:value.sync="model" m-bind:items="items" m-bind:loading="isLoading" m-bind:search-input.sync="search" hide-no-data="" hide-selected="" item-text="Description" item-value="API" label="Public APIs" placeholder="Start typing to Search" prepend-icon="mdi-database-search" return-object=""></mip-v-autocomplete>
</div>
<mip-script>
  MIP.watch(&apos;entries&apos;, val =&gt; {
    let descriptionLimit = MIP.getData(&apos;descriptionLimit&apos;)
    let items = val.map(entry =&gt; {
      const Description = entry.Description.length &gt; descriptionLimit
        ? entry.Description.slice(0, descriptionLimit) + &apos;...&apos;
        : entry.Description

      return Object.assign({}, entry, { Description })
    })

    MIP.setData({items})
  })

  MIP.watch(&apos;search&apos;, val =&gt; {
    // Items have already been loaded
    if (MIP.getData(&apos;items&apos;).length &gt; 0) return

    MIP.setData({isLoading: true})

    // Lazily load input items
    fetch(&apos;https://api.publicapis.org/entries&apos;)
      .then(res =&gt; {
        if (res.ok) {
          res.json().then(data =&gt; {
            const { count, entries } = data
            MIP.setData({entries})
          })
        }
      })
      .catch(err =&gt; {
        console.log(err)
      })
      .finally(() =&gt; MIP.setData({isLoading: false}))
  })
</mip-script>
<mip-data>
  <script type="application/json">
  {
    isEditing: false,
    states: [
      { name: 'Florida', abbr: 'FL', id: 1 },
      { name: 'Georgia', abbr: 'GA', id: 2 },
      { name: 'Nebraska', abbr: 'NE', id: 3 },
      { name: 'California', abbr: 'CA', id: 4 },
      { name: 'New York', abbr: 'NY', id: 5 }
    ],
    toSave: false
  }
  </script>
</mip-data>
```

### Custom filter on autocomplete

```html
<div class="container grid-list-xl">
<!-- :filter="customFilter" -->
  <mip-v-autocomplete m-bind:disabled="!isEditing" m-bind:items="states" item-text="name" label="State"></mip-v-autocomplete>
  <mip-v-btn color="purple darken-3 white--text" fab="" small="" on="tap:MIP.setData({isEditing: !m.isEditing})">
    <mip-v-icon m-bind:class="{hide:!isEditing}">mdi-close</mip-v-icon>
    <mip-v-icon m-bind:class="{hide:isEditing}">mdi-pencil</mip-v-icon>
  </mip-v-btn>
  <mip-v-btn m-bind:disabled="!isEditing" color="success" on="tap:MIP.setData({toSave: true})">
    Save
  </mip-v-btn>
</div>
<mip-script>
  MIP.watch(&apos;toSave&apos;, val =&gt; {
    // do sth like set-data/ajax-put
    val &amp;&amp; MIP.setData({isEditing: !MIP.getData(&apos;isEditing&apos;)})
    MIP.setData({toSave: false})
  })
</mip-script>
<mip-data>
  <script type="application/json">
  {
    loading: false,
    asyncItems: [],
    searchVal: '',
    select: '',
    states: [
      'Alabama',
      'Alaska',
      'American Samoa',
      'Arizona',
      'Arkansas',
      'California',
      'Colorado',
      'Connecticut',
      'Delaware',
      'District of Columbia',
      'Federated States of Micronesia',
      'Florida',
      'Georgia',
      'Guam',
      'Hawaii',
      'Idaho',
      'Illinois',
      'Indiana',
      'Iowa',
      'Kansas',
      'Kentucky',
      'Louisiana',
      'Maine',
      'Marshall Islands',
      'Maryland',
      'Massachusetts',
      'Michigan',
      'Minnesota',
      'Mississippi',
      'Missouri',
      'Montana',
      'Nebraska',
      'Nevada',
      'New Hampshire',
      'New Jersey',
      'New Mexico',
      'New York',
      'North Carolina',
      'North Dakota',
      'Northern Mariana Islands',
      'Ohio',
      'Oklahoma',
      'Oregon',
      'Palau',
      'Pennsylvania',
      'Puerto Rico',
      'Rhode Island',
      'South Carolina',
      'South Dakota',
      'Tennessee',
      'Texas',
      'Utah',
      'Vermont',
      'Virgin Island',
      'Virginia',
      'Washington',
      'West Virginia',
      'Wisconsin',
      'Wyoming'
    ]
  }
  </script>
</mip-data>
```

### Asynchronous items

```html
<div class="container grid-list-xl">
  <mip-v-autocomplete m-bind:loading="loading" m-bind:items="asyncItems" m-bind:search-input.sync="searchVal" m-bind:value.sync="select" cache-items="" class="mx-3" flat="" hide-no-data="" hide-details="" label="What state are you from?" solo-inverted=""></mip-v-autocomplete>
</div>
<mip-script>
  function querySelections (v) {
    MIP.setData({loading: true})

    // Simulated ajax query
    setTimeout(() =&gt; {
      let states = MIP.getData(&apos;states&apos;)
      MIP.setData({
        loading: false,
        asyncItems: states.filter(e =&gt; {
          return (e || &apos;&apos;).toLowerCase().indexOf((v || &apos;&apos;).toLowerCase()) &gt; -1
        })
      })
    }, 500)
  }

  MIP.watch(&apos;searchVal&apos;, val =&gt; {
    val &amp;&amp; val !== MIP.getData(&apos;select&apos;) &amp;&amp; querySelections(val)
  })
</mip-script>
<script src="http://localhost:8080/dist/mip.js"></script>
<script src="/dev/main.js"></script>
<script src="https://c.mipcdn.com/static/v2/mip-script/mip-script.js"></script>
```
