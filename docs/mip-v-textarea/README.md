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
append-icon|string|/|使用与`mip-v-icon`相同的语法在组件上添加一个后置图标
append-icon-cb|function|/|单击回调添加后置图标
append-outer-icon|string|/|为 `mip-v-text-field` 输入框外部增加一个标签，使用方法同 `mip-v-icon`
append-outer-icon-cb|function|/|当点击添加的外部标签时触发的回调
auto-grow|boolean|/|自动增长输入，需要使用 **.sync**
autofocus|boolean|/|启用自动聚焦
background-color|string|''|
box|boolean|/|应用备用输入框样式
browser-autocomplete|string|/|配置`<input>` 默认的自动补全属性
clear-icon|string|'$vuetify.icons.clear'|当使用 **clearable** 属性和输入框有内容时起作用
clear-icon-cb|function|/|当清除标签被点击时的回调
clearable|boolean|/|添加输入框清除功能，默认图标是 Material Icons **clear**
color|string|'primary'|将指定的色彩应用与控件
counter|boolean / number / string|/|为输入长度创建一个计数器，如果未指定数字，则默认为25，不会应用任何验证。
dark|boolean|/|应用暗黑主题变体
disabled|boolean|/|输入框是禁用的
dont-fill-mask-blanks|boolean|/|键入时禁用自动字符显示
error|boolean|/|将输入框设置为手动错误状态。
error-count|number / string|1|The total number of errors that should display at once
error-messages|string / array|[]|将输入框置于错误状态，并传入自定义的错误信息。将与来自**规则（rules）**属性的任何验证相结合。这个字段不会触发验证。
flat|boolean|/|当使用**solo**或者**solo-inverted**属性时，移除添加到元素的标高（阴影）
full-width|boolean|/|指定输入框为全屏宽度。
height|number / string|/|设置组件高度
hide-details|boolean|/|隐藏提示，验证错误
hint|string|/|提示文本
label|string|/|设置输入框标签
light|boolean|/|应用明亮主题变体
loading|boolean / string|/|显示线性进度条。可以是指定将哪种颜色应用于进度条的字符串（任何material色彩——主要（primary）, 次要（secondary）, 成功（success）, 信息（info），警告（warning），错误（error）），或者使用组件的布尔值**颜色**（由色彩属性设置——如果它被组件支持的话）还可以是原色。
mask|object / string|/|将自定义字符掩码应用于输入框。有关更多信息，请参阅上面的掩码表格。
messages|string / array|[]|Displays a list of messages or message if using a string
no-resize|boolean|/|移除 `resize` 的处理操作，只会对 **multi-line** 和 **textarea** 属性起作用
outline|boolean|/|设置输入框的外边缘样式
persistent-hint|boolean|/|强制提示始终可见
placeholder|string|/|设置输入的占位符文本
prefix|string|/|显示前缀
prepend-icon|string|/|使用与`mip-v-icon`系统的语法在组件上添加一个图标
prepend-icon-cb|function|/|单击时回调添加前置图标
prepend-inner-icon|string|/|
prepend-inner-icon-cb|function|/|
readonly|boolean|/|将输入之余只读状态
return-masked-value|boolean|/|返回未修改的掩码字符串
reverse|boolean|/|反转输入方向
row-height|number / string|24|当使用 **multi-line** 或 **textarea** 属性时，可以指定一个自定义的 _row-height_ 来设置输入框的高度
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
value|any|/|输入值

## 示例

### Auto grow

```html
<mip-v-textarea name="input-7-5" box="" label="Label" auto-grow="" value="The Woodman set to work at once, and so sharp was his axe that the tree was soon chopped nearly through."></mip-v-textarea>
```
