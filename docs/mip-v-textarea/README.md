# mip-v-textarea

Textarea components are used for collecting large amounts of textual data.

## 用例

```html
<mip-v-textarea name="input-7-1" label="Default style" value="The Woodman set to work at once, and so sharp was his axe that the tree was soon chopped nearly through." hint="Hint text"></mip-v-textarea>
<mip-v-textarea solo="" name="input-7-2" label="Solo textarea" value="The Woodman set to work at once, and so sharp was his axe that the tree was soon chopped nearly through."></mip-v-textarea>
<mip-v-textarea box="" name="input-7-3" label="Box textarea" value="The Woodman set to work at once, and so sharp was his axe that the tree was soon chopped nearly through."></mip-v-textarea>
<mip-v-textarea outline="" name="input-7-4" label="Outline textarea" value="The Woodman set to work at once, and so sharp was his axe that the tree was soon chopped nearly through."></mip-v-textarea>
```

## API

### mip-v-textarea

#### Props

名称|类型|默认值|含义
:--:|:--:|:--:|:---
append-icon|string|/|Append an icon to the component, uses same syntax as `mip-v-icon`
append-icon-cb|function|/|Callback for appended icon when clicked
append-outer-icon|string|/|Append an icon to the outside of `mip-v-text-field`'s input, uses same syntax as `v-icon`
append-outer-icon-cb|function|/|Callback for appended outer icon when clicked
auto-grow|boolean|/|自动增长输入，需要使用 **v-model**
autofocus|boolean|/|启用自动聚焦
background-color|string|''|
box|boolean|/|应用备用输入框样式
browser-autocomplete|string|/|Configures the default `<input>` autocomplete attribute
clear-icon|string|'$vuetify.icons.clear'|Applied when using **clearable** and the input is dirty
clear-icon-cb|function|/|Callback for clear icon when clicked
clearable|boolean|/|添加输入框清除功能，默认图标是 Material Icons **clear**
color|string|'primary'|将指定的色彩应用与控件
counter|boolean / number / string|/|为输入长度创建一个计数器，如果未指定数字，则默认为25，不会应用任何验证。
dark|boolean|/|应用暗黑主题变体
disabled|boolean|/|Input is disabled
dont-fill-mask-blanks|boolean|/|键入时禁用自动字符显示
error|boolean|/|将输入框设置为手动错误状态。
error-count|number / string|1|The total number of errors that should display at once
error-messages|string / array|[]|将输入框置于错误状态，并传入自定义的错误信息。将与来自**规则（rules）**属性的任何验证相结合。这个字段不会触发验证。
flat|boolean|/|当使用**solo**或者**solo-inverted**属性时，移除添加到元素的标高（阴影）
full-width|boolean|/|指定输入框为全屏宽度。
height|number / string|/|设置组件高度
hide-details|boolean|/|Hides hint, validation errors
hint|string|/|Hint text
label|string|/|Sets input label
light|boolean|/|应用明亮主题变体
loading|boolean / string|/|显示线性进度条。可以是指定将哪种颜色应用于进度条的字符串（任何material色彩——主要（primary）, 次要（secondary）, 成功（success）, 信息（info），警告（warning），错误（error）），或者使用组件的布尔值**颜色**（由色彩属性设置——如果它被组件支持的话）还可以是原色。
mask|object / string|/|将自定义字符掩码应用于输入框。有关更多信息，请参阅上面的掩码表格。
messages|string / array|[]|Displays a list of messages or message if using a string
no-resize|boolean|/|Remove resize handle, only applies to **multi-line** and **textarea** props
outline|boolean|/|Applies the outline style to the input
persistent-hint|boolean|/|Forces hint to always be visible
placeholder|string|/|Sets the input’s placeholder text
prefix|string|/|显示前缀
prepend-icon|string|/|Prepend an icon to the component, uses same syntax as `mip-v-icon`
prepend-icon-cb|function|/|Callback for prepended icon when clicked
prepend-inner-icon|string|/|
prepend-inner-icon-cb|function|/|
readonly|boolean|/|Puts input in readonly state
return-masked-value|boolean|/|返回未修改的掩码字符串
reverse|boolean|/|Reverses the input orientation
row-height|number / string|24|Designate a custom _row-height_. Used for determining input height when using **multi-line** or **textarea** props
rows|number / string|5|Textarea 的行数
rules|array|[]|返回True或带有错误信息的字符串的函数数组。
single-line|boolean|/|Label does not move on focus/dirty
solo|boolean|/|改变输入框的样式
solo-inverted|boolean|/|减少元素的不透明度，知道获得焦点
success|boolean|/|Puts the input in a manual success state
success-messages|string / array|[]|Puts the input in a success state and passes through custom success messsages.
suffix|string|/|显示后缀
textarea|boolean|/|Textarea 使用备用样式
type|string|'text'|设置输入类型
validate-on-blur|boolean|/|延迟验证直到失去焦点的事件被触发
value|any|/|Input value

## 示例

### Auto grow

```html
<mip-v-textarea name="input-7-5" box="" label="Label" auto-grow="" value="The Woodman set to work at once, and so sharp was his axe that the tree was soon chopped nearly through."></mip-v-textarea>
```
