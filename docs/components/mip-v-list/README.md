# mip-v-list

`mip-v-list` 组件用于显示信息，它可以包含一个头像、内容、操作、列表组标题等等。列表也可以包含子元素并在侧边栏（sidebar）使用。

## 用例

```html
<mip-data>
  <script type="application/json">
    {
      "items": [
        {
          "icon": true,
          "avatar": "https://cdn.vuetifyjs.com/images/lists/1.jpg",
          "title": "Brunch this weekend?",
          "subtitle": "Ali Connors &mdash; I'll be in your neighborhood doing errands this weekend. Do you want to hang out?"
        },
        {
          "avatar": "https://cdn.vuetifyjs.com/images/lists/2.jpg",
          "title": "Summer BBQ",
          "subtitle": "to Alex, Scott, Jennifer &mdash; Wish I could come, but I'm out of town this weekend."
        },
        {
          "avatar": "https://cdn.vuetifyjs.com/images/lists/3.jpg",
          "title": "Oui oui",
          "subtitle": "Sandra Adams &mdash; Do you have Paris recommendations? Have you ever been?"
        }
      ]
    }
  </script>
</mip-data>
<div class="layout row">
    <div class="flex xs12 sm6 offset-sm3">
    <mip-v-card>
      <mip-v-toolbar color="cyan" dark>
        <mip-v-toolbar-side-icon></mip-v-toolbar-side-icon>
        <mip-v-toolbar-title>Inbox</mip-v-toolbar-title>
        <mip-v-spacer></mip-v-spacer>
        <mip-v-btn icon>
          <mip-v-icon>search</mip-v-icon>
        </mip-v-btn>
      </mip-v-toolbar>

      <mip-v-list two-line>
          <mip-v-subheader m-text="header"></mip-v-subheader>
          <mip-v-list-tile avatar href="#" ripple>
            <mip-v-list-tile-avatar>
              <mip-img m-bind:src="items[0].avatar">
            </mip-img></mip-v-list-tile-avatar>

            <mip-v-list-tile-content>
              <mip-v-list-tile-title m-text="items[0].title"></mip-v-list-tile-title>
              <mip-v-list-tile-sub-title m-text="items[0].subtitle"></mip-v-list-tile-sub-title>
            </mip-v-list-tile-content>
          </mip-v-list-tile>

          <mip-v-divider inset></mip-v-divider>
          <mip-v-list-tile avatar href="#" ripple>
            <mip-v-list-tile-avatar>
              <mip-img m-bind:src="items[1].avatar">
            </mip-img></mip-v-list-tile-avatar>

            <mip-v-list-tile-content>
              <mip-v-list-tile-title m-text="items[1].title"></mip-v-list-tile-title>
              <mip-v-list-tile-sub-title m-text="items[1].subtitle"></mip-v-list-tile-sub-title>
            </mip-v-list-tile-content>
          </mip-v-list-tile>

          <mip-v-divider inset></mip-v-divider>
          <mip-v-list-tile avatar href="#" ripple>
            <mip-v-list-tile-avatar>
              <mip-img m-bind:src="items[2].avatar">
            </mip-img></mip-v-list-tile-avatar>

            <mip-v-list-tile-content>
              <mip-v-list-tile-title m-text="items[2].title"></mip-v-list-tile-title>
              <mip-v-list-tile-sub-title m-text="items[2].subtitle"></mip-v-list-tile-sub-title>
            </mip-v-list-tile-content>
          </mip-v-list-tile>

      </mip-v-list>
    </mip-v-card>
    </div>
</div>
```

## API

### mip-v-list

#### Props

名称|类型|默认值|含义
:--:|:--:|:--:|:---
dark|boolean|/|应用暗黑主题变体
dense|boolean|/|减小列表块的最大宽度
expand|boolean|/|将只有在明确关闭之后才会折叠起来
light|boolean|/|应用明亮主题变体
subheader|boolean|/|会移除上边距（top padding），当前面只有一个列表组标题的时候使用
three-line|boolean|/|增加列表块的高度到3行
two-line|boolean|/|增加列表块的高度到2行

### mip-v-list-group

#### Props

名称|类型|默认值|含义
:--:|:--:|:--:|:---
active-class|string|'primary--text'|当组件处于激活状态时被绑定的类，**警告（warning）**取决于组件，这可能会导致副作用。如果您需要在默认情况下添加自定义类，只需设置<code>active-class="default-class your-class"</code>
append-icon|string|'$vuetify.icons.expand'|使用与`mip-v-icon`相同的语法在组件上添加一个后置图标
disabled|boolean|/|输入框是禁用的
group|string|/|分配一个路由命名空间。接受字符串或正则表达式来确定活动状态
lazy|boolean|/|有条件地渲染内容，只有激活时才会渲染内容
no-action|boolean|/|从组项中删除为操作图标分配的左侧内边距
prepend-icon|string|/|使用与`mip-v-icon`系统的语法在组件上添加一个图标
sub-group|boolean|/|将组件指定为嵌套列表组
value|boolean|/|展开/折叠列表组

### mip-v-list-tile

#### Props

名称|类型|默认值|含义
:--:|:--:|:--:|:---
active-class|string|'primary--text'|当组件处于激活状态时被绑定的类，**警告（warning）**取决于组件，这可能会导致副作用。如果您需要在默认情况下添加自定义类，只需设置<code>active-class="default-class your-class"</code>
append|boolean|/|Vue Router的router-link属性
avatar|boolean|/|用来设置单行列表项的最小高度（即使用该属性后将有一个头像大小的最小高度）
color|string|/|将指定的色彩应用与控件
disabled|boolean|/|输入框是禁用的
exact|boolean|/|完全匹配链接，没有这个的话，“/”将匹配每一个路由
exact-active-class|string|/|Vue Router的 router-link属性
href|string / object|/|将组件标签指定为`<a>`
inactive|boolean|/|如果设置了该属性，即使有to/href或者@click，列表块也不会响应链接。
nuxt|boolean|/|指定一个链接是nuxt链接（nuxt-link）
replace|boolean|/|Vue Router router-link 属性
ripple|boolean / object|/|使用`v-ripple`指令
tag|string|/|指定要在组件上使用的自定义标签
target|string|/|指定目标属性，仅适用于猫标签。
to|string / object|/|将组件标签指定为`<router-link>`
value|boolean|/|展开/折叠列表组

### mip-v-list-tile-action

#### Props

名称|类型|默认值|含义
:--:|:--:|:--:|:---


### mip-v-list-tile-avatar

#### Props

名称|类型|默认值|含义
:--:|:--:|:--:|:---
color|string|/|将指定的色彩应用与控件
size|number / string|40|设置元素的高度和宽度
tile|boolean|/|删除边看弧度

## 示例

### 头像和列表项标题以及操作的组合

```html
<mip-data>
  <script type="application/json">
    {
      "items": [
        {
          "icon": true,
          "avatar": "https://cdn.vuetifyjs.com/images/lists/1.jpg",
          "title": "Brunch this weekend?",
          "subtitle": "Ali Connors &mdash; I'll be in your neighborhood doing errands this weekend. Do you want to hang out?"
        },
        {
          "avatar": "https://cdn.vuetifyjs.com/images/lists/2.jpg",
          "title": "Summer BBQ",
          "subtitle": "to Alex, Scott, Jennifer &mdash; Wish I could come, but I'm out of town this weekend."
        },
        {
          "avatar": "https://cdn.vuetifyjs.com/images/lists/3.jpg",
          "title": "Oui oui",
          "subtitle": "Sandra Adams &mdash; Do you have Paris recommendations? Have you ever been?"
        }
      ]
    }
  </script>
</mip-data>
<div class="layout row">
  <div class="flex xs12 sm6 offset-sm3">
    <mip-v-card>
        <mip-v-toolbar color="indigo" dark>
          <mip-v-toolbar-side-icon></mip-v-toolbar-side-icon>

          <mip-v-toolbar-title>Inbox</mip-v-toolbar-title>

          <mip-v-spacer></mip-v-spacer>

          <mip-v-btn icon>
            <mip-v-icon>search</mip-v-icon>
          </mip-v-btn>

          <mip-v-btn icon>
            <mip-v-icon>more_vert</mip-v-icon>
          </mip-v-btn>
        </mip-v-toolbar>
        <mip-v-list>
          <mip-v-list-tile avatar href="#">
            <mip-v-list-tile-action>
              <mip-v-icon color="pink">star</mip-v-icon>
            </mip-v-list-tile-action>

            <mip-v-list-tile-content>
              <mip-v-list-tile-title m-text="items[0].title"></mip-v-list-tile-title>
            </mip-v-list-tile-content>

            <mip-v-list-tile-avatar>
              <img m-bind:src="items[0].avatar">
            </mip-v-list-tile-avatar>
          </mip-v-list-tile>
          <mip-v-list-tile avatar href="#">
            <mip-v-list-tile-action>
            </mip-v-list-tile-action>

            <mip-v-list-tile-content>
              <mip-v-list-tile-title m-text="items[1].title"></mip-v-list-tile-title>
            </mip-v-list-tile-content>

            <mip-v-list-tile-avatar>
              <img m-bind:src="items[1].avatar">
            </mip-v-list-tile-avatar>
          </mip-v-list-tile>
          <mip-v-list-tile avatar href="#">
            <mip-v-list-tile-action>
            </mip-v-list-tile-action>

            <mip-v-list-tile-content>
              <mip-v-list-tile-title m-text="items[2].title"></mip-v-list-tile-title>
            </mip-v-list-tile-content>

            <mip-v-list-tile-avatar>
              <img m-bind:src="items[2].avatar">
            </mip-v-list-tile-avatar>
          </mip-v-list-tile>
        </mip-v-list>
      </mip-v-card>
  </div>
</div>
```

### 图标加两行内容以及操作的组合

```html
<div class="layout row">
  <div class="flex xs12 sm6 offset-sm3">
    <mip-v-card>
        <mip-v-toolbar color="light-blue" dark>
          <mip-v-toolbar-side-icon></mip-v-toolbar-side-icon>

          <mip-v-toolbar-title>My files</mip-v-toolbar-title>

          <mip-v-spacer></mip-v-spacer>

          <mip-v-btn icon>
            <mip-v-icon>search</mip-v-icon>
          </mip-v-btn>

          <mip-v-btn icon>
            <mip-v-icon>view_module</mip-v-icon>
          </mip-v-btn>
        </mip-v-toolbar>

        <mip-v-list two-line subheader>
          <mip-v-subheader inset>Folders</mip-v-subheader>

          <mip-v-list-tile avatar href="#">
            <mip-v-list-tile-avatar>
              <mip-v-icon class="grey lighten-1 white--text">folder</mip-v-icon>
            </mip-v-list-tile-avatar>

            <mip-v-list-tile-content>
              <mip-v-list-tile-title m-text="items[0].title"></mip-v-list-tile-title>
              <mip-v-list-tile-sub-title m-text="folderItems[0].subtitle"></mip-v-list-tile-sub-title>
            </mip-v-list-tile-content>

            <mip-v-list-tile-action>
              <mip-v-btn icon ripple>
                <mip-v-icon color="grey lighten-1">info</mip-v-icon>
              </mip-v-btn>
            </mip-v-list-tile-action>
          </mip-v-list-tile>
          <mip-v-list-tile avatar href="#">
            <mip-v-list-tile-avatar>
              <mip-v-icon class="grey lighten-1 white--text">folder</mip-v-icon>
            </mip-v-list-tile-avatar>

            <mip-v-list-tile-content>
              <mip-v-list-tile-title m-text="folderItems[1].title"></mip-v-list-tile-title>
              <mip-v-list-tile-sub-title m-text="folderItems[1].subtitle"></mip-v-list-tile-sub-title>
            </mip-v-list-tile-content>

            <mip-v-list-tile-action>
              <mip-v-btn icon ripple>
                <mip-v-icon color="grey lighten-1">info</mip-v-icon>
              </mip-v-btn>
            </mip-v-list-tile-action>
          </mip-v-list-tile>

          <mip-v-divider inset></mip-v-divider>

          <mip-v-subheader inset>Files</mip-v-subheader>

          <mip-v-list-tile avatar href="#">
            <mip-v-list-tile-avatar>
              <mip-v-icon class="blue white--text" m-text="fileItems[0].icon"></mip-v-icon>
            </mip-v-list-tile-avatar>

            <mip-v-list-tile-content>
              <mip-v-list-tile-title m-text="fileItems[0].title"></mip-v-list-tile-title>
              <mip-v-list-tile-sub-title m-text="fileItems[0].subtitle"></mip-v-list-tile-sub-title>
            </mip-v-list-tile-content>

            <mip-v-list-tile-action>
              <mip-v-btn icon ripple>
                <mip-v-icon color="grey lighten-1">info</mip-v-icon>
              </mip-v-btn>
            </mip-v-list-tile-action>
          </mip-v-list-tile>
          <mip-v-list-tile avatar href="#">
            <mip-v-list-tile-avatar>
              <mip-v-icon class="amber white--text" m-text="fileItems[1].icon"></mip-v-icon>
            </mip-v-list-tile-avatar>

            <mip-v-list-tile-content>
              <mip-v-list-tile-title m-text="fileItems[1].title"></mip-v-list-tile-title>
              <mip-v-list-tile-sub-title m-text="fileItems[1].subtitle"></mip-v-list-tile-sub-title>
            </mip-v-list-tile-content>

            <mip-v-list-tile-action>
              <mip-v-btn icon ripple>
                <mip-v-icon color="grey lighten-1">info</mip-v-icon>
              </mip-v-btn>
            </mip-v-list-tile-action>
          </mip-v-list-tile>
        </mip-v-list>
      </mip-v-card>
  </div>
</div>
```
