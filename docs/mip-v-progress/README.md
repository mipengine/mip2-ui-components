# mip-v-progress

`v-progress-circular`和`v-progress-linear`组件用于将数据直观地传达给用户。他们也可以代表一个不确定的数量，如加载或处理。这些组件包含一个位于组件容器中心的插槽。

## 用例

## API

### mip-v-progress-circular

#### Props

名称|类型|默认值|含义
:--:|:--:|:--:|:---
button|boolean|undefined|Deprecated - Pending removal
indeterminate|boolean|undefined|Constantly animates, use when loading progress is unknown.
rotate|number|undefined|Rotates the circle start point in deg
size|number \| string|32|Sets the diameter of the circle in pixels
lineWidth|number|4|
value|number|undefined|The percentage value for current progress
color|string|undefined|将指定的色彩应用与控件

### mip-v-progress-linear

#### Props

名称|类型|默认值|含义
:--:|:--:|:--:|:---
active|boolean|true|Reduce the height to 0, hiding component
backgroundColor|string|undefined|Background color, set to component's color if null
backgroundOpacity|number \| string|undefined|Background opacity, if null it defaults to 0.3 if background color is not specified or 1 otherwise
bufferValue|number \| string|100|The percentage value for the buffer
color|string|undefined|将指定的色彩应用与控件
lineHeight|number \| string|7|
indeterminate|boolean|undefined|Constantly animates, use when loading progress is unknown.
query|boolean|undefined|
value|number \| string|undefined|The percentage value for current progress

