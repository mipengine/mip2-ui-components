# mip-v-card

`mip-v-card`组件是一个多功能组件，可用于从面板到静态图像的任何事物。**card**组件有许多帮助组件，使标记尽可能简单。没有列出选项的组件使用**Vue的**功能组件选项来加快渲染速度，并作为标记糖来使构建更容易。

## 用例

```html
<div>
<div class="layout">
    <div class="flex xs12 sm6 offset-sm3">
    <mip-v-card>
      <mip-v-card-media src="https://cdn.vuetifyjs.com/images/cards/desert.jpg" height="200px"></mip-v-card-media>

      <mip-v-card-title primary-title>
        <div>
          <h3 class="headline mb-0">Kangaroo Valley Safari</h3>
          <div>Located two hours south of Sydney in the <br>Southern Highlands of New South Wales, ...</div>
        </div>
      </mip-v-card-title>

      <mip-v-card-actions>
        <mip-v-btn flat color="orange">Share</mip-v-btn>
        <mip-v-btn flat color="orange">Explore</mip-v-btn>
      </mip-v-card-actions>
    </mip-v-card>
    </div>
  </div>
</div>
```

## API

### mip-v-card

#### Props

名称|类型|默认值|含义
:--:|:--:|:--:|:---
active-class|string|/|当组件处于激活状态时被绑定的类，**警告（warning）**取决于组件，这可能会导致副作用。如果您需要在默认情况下添加自定义类，只需设置<code>active-class="default-class your-class"</code>
append|boolean|/|Vue Router的router-link属性
color|string|/|将指定的色彩应用与控件
dark|boolean|/|应用暗黑主题变体
disabled|boolean|/|Route列表项是被禁用的
exact|boolean|/|完全匹配链接，没有这个的话，“/”将匹配每一个路由
exact-active-class|string|/|Vue Router的 router-link属性
flat|boolean|/|移除卡片的盒子阴影
height|number / string|/|手动定义卡片的高度
hover|boolean|/|在悬停上应用更高的海拔
href|string / object|/|将组件标签指定为`<a>`
img|string|/|指定一个图像背景
light|boolean|/|应用明亮主题变体
nuxt|boolean|/|指定一个链接是nuxt链接（nuxt-link）
raised|boolean|/|指定更高的默认海拔
replace|boolean|/|Vue Router router-link 属性
ripple|boolean / object|/|使用`mip-v-ripple`指令
tag|string|'div'|指定要在组件上使用的自定义标签
target|string|/|指定目标属性，仅适用于猫标签。
tile|boolean|/|通过去除边界弧度将卡片转为贴片
to|string / object|/|将组件标签指定为`<router-link>`
width|string / number|/|内容的宽度

### mip-v-card-media

#### Props

名称|类型|默认值|含义
:--:|:--:|:--:|:---
contain|boolean|/|修改背景大小使其成为容器
height|number / string|'auto'|手动定义卡片的高度
src|string|/|被作为背景显示的图片

### mip-v-card-title

#### Props

名称|类型|默认值|含义
:--:|:--:|:--:|:---
primary-title|boolean|/|应用主标题特定的内边距

## 示例

### 媒体与文字

```html
<div class="layout">
  <div class="flex xs12 sm6 offset-sm3">
    <mip-v-card>
      <mip-v-card-media class="white--text" height="200px" src="https://cdn.vuetifyjs.com/images/cards/docks.jpg">
        <div class="container fill-height fluid">
          <div class="layout fill-height">
            <div class="flex xs12 align-end flexbox">
              <span class="headline">Top 10 Australian beaches</span>
            </div>
          </div>
        </div>
      </mip-v-card-media>
      <mip-v-card-title>
        <div>
          <span class="grey--text">Number 10</span><br>
          <span>Whitehaven Beach</span><br>
          <span>Whitsunday Island, Whitsunday Islands</span>
        </div>
      </mip-v-card-title>
      <mip-v-card-actions>
        <mip-v-btn flat color="orange">Share</mip-v-btn>
        <mip-v-btn flat color="orange">Explore</mip-v-btn>
      </mip-v-card-actions>
    </mip-v-card>
  </div>
</div>
```

### 水平的卡片

```html
<div id="e3" style="max-width: 400px; margin: auto;" class="grey lighten-3">
  <mip-v-toolbar color="pink" dark>
    <mip-v-toolbar-side-icon></mip-v-toolbar-side-icon>
    <mip-v-toolbar-title>My Music</mip-v-toolbar-title>
    <mip-v-spacer></mip-v-spacer>
    <mip-v-btn icon>
      <mip-v-icon>search</mip-v-icon>
    </mip-v-btn>
  </mip-v-toolbar>

  <mip-v-card>
      <div class="container fluid grid-list-lg">
        <div class="layout row wrap">
          <div class="flex xs12">
            <mip-v-card color="blue-grey darken-2" class="white--text">
              <mip-v-card-title primary-title>
                <div class="headline">Unlimited music now</div>
                <div>Listen to your favorite artists and albums whenever and wherever, online and offline.</div>
              </mip-v-card-title>
              <mip-v-card-actions>
                <mip-v-btn flat dark>Listen now</mip-v-btn>
              </mip-v-card-actions>
            </mip-v-card>
          </div>

          <div class="flex xs12">
            <mip-v-card color="cyan darken-2" class="white--text">
              <div class="layout">
                <div class="flex xs5">
                  <mip-v-card-media src="https://cdn.vuetifyjs.com/images/cards/foster.jpg" height="125px" contain></mip-v-card-media>
                </div>
                <div class="flex xs7">
                  <mip-v-card-title primary-title>
                    <div>
                      <div class="headline">Supermodel</div>
                      <div>Foster the People</div>
                      <div>(2014)</div>
                    </div>
                  </mip-v-card-title>
                </div>
              </div>
              <mip-v-divider light></mip-v-divider>
              <mip-v-card-actions class="pa-3">
                Rate this album
                <mip-v-spacer></mip-v-spacer>
                <mip-v-icon>star_border</mip-v-icon>
                <mip-v-icon>star_border</mip-v-icon>
                <mip-v-icon>star_border</mip-v-icon>
                <mip-v-icon>star_border</mip-v-icon>
                <mip-v-icon>star_border</mip-v-icon>
              </mip-v-card-actions>
            </mip-v-card>
          </div>

          <div class="flex xs12">
            <mip-v-card color="purple" class="white--text">
              <div class="layout row">
                <div class="flex xs7">
                  <mip-v-card-title primary-title>
                    <div>
                      <div class="headline">Halycon Days</div>
                      <div>Ellie Goulding</div>
                      <div>(2013)</div>
                    </div>
                  </mip-v-card-title>
                </div>
                <div class="flex xs5">
                  <mip-v-card-media src="https://cdn.vuetifyjs.com/images/cards/halcyon.png" height="125px" contain></mip-v-card-media>
                </div>
              </div>
              <mip-v-divider light></mip-v-divider>
              <mip-v-card-actions class="pa-3">
                Rate this album
                <mip-v-spacer></mip-v-spacer>
                <mip-v-icon>star_border</mip-v-icon>
                <mip-v-icon>star_border</mip-v-icon>
                <mip-v-icon>star_border</mip-v-icon>
                <mip-v-icon>star_border</mip-v-icon>
                <mip-v-icon>star_border</mip-v-icon>
              </mip-v-card-actions>
            </mip-v-card>
          </div>
        </div>
      </div>
  </mip-v-card>
</div>
```

### 栅格

```html
<div class="layout justify-center">
  <div class="flex xs12 sm6">
    <mip-v-toolbar color="indigo" dark>
      <mip-v-toolbar-side-icon></mip-v-toolbar-side-icon>
      <mip-v-toolbar-title>Discover</mip-v-toolbar-title>
      <mip-v-spacer></mip-v-spacer>
      <mip-v-btn icon>
        <mip-v-icon>search</mip-v-icon>
      </mip-v-btn>
    </mip-v-toolbar>

    <mip-v-card>
      <div class="container fluid grid-list-md">
        <div class="layout row wrap">
          <div class="flex xs12">
            <mip-v-card>
              <mip-v-card-media src="https://cdn.vuetifyjs.com/images/cards/house.jpg" height="200px">
                <div class="container
                  fill-height
                  fluid
                  pa-2">
                  <div class="layout fill-height">
                    <div class="flex xs12 align-end flexbox">
                      <span class="headline white--text">&#x6D4B;&#x8BD5;</span>
                    </div>
                  </div>
                </div>
              </mip-v-card-media>

              <mip-v-card-actions>
                <mip-v-spacer></mip-v-spacer>
                <mip-v-btn icon>
                  <mip-v-icon>favorite</mip-v-icon>
                </mip-v-btn>
                <mip-v-btn icon>
                  <mip-v-icon>bookmark</mip-v-icon>
                </mip-v-btn>
                <mip-v-btn icon>
                  <mip-v-icon>share</mip-v-icon>
                </mip-v-btn>
              </mip-v-card-actions>
            </mip-v-card>
          </div>
          <div class="flex xs6">
            <mip-v-card>
                <mip-v-card-media src="https://cdn.vuetifyjs.com/images/cards/house.jpg" height="200px">
                  <div class="container
                    fill-height
                    fluid
                    pa-2">
                    <div class="layout fill-height">
                      <div class="flex xs12 align-end flexbox">
                        <span class="headline white--text">&#x6D4B;&#x8BD5;</span>
                      </div>
                    </div>
                  </div>
                </mip-v-card-media>

                <mip-v-card-actions>
                  <mip-v-spacer></mip-v-spacer>
                  <mip-v-btn icon>
                    <mip-v-icon>favorite</mip-v-icon>
                  </mip-v-btn>
                  <mip-v-btn icon>
                    <mip-v-icon>bookmark</mip-v-icon>
                  </mip-v-btn>
                  <mip-v-btn icon>
                    <mip-v-icon>share</mip-v-icon>
                  </mip-v-btn>
                </mip-v-card-actions>
            </mip-v-card>
          </div>
          <div class="flex xs6">  
            <mip-v-card>
              <mip-v-card-media src="https://cdn.vuetifyjs.com/images/cards/house.jpg" height="200px">
                <div class="container
                  fill-height
                  fluid
                  pa-2">
                  <div class="layout fill-height">
                    <div class="flex xs12 align-end flexbox">
                      <span class="headline white--text">&#x6D4B;&#x8BD5;</span>
                    </div>
                  </div>
                </div>
              </mip-v-card-media>

              <mip-v-card-actions>
                <mip-v-spacer></mip-v-spacer>
                <mip-v-btn icon>
                  <mip-v-icon>favorite</mip-v-icon>
                </mip-v-btn>
                <mip-v-btn icon>
                  <mip-v-icon>bookmark</mip-v-icon>
                </mip-v-btn>
                <mip-v-btn icon>
                  <mip-v-icon>share</mip-v-icon>
                </mip-v-btn>
              </mip-v-card-actions>
            </mip-v-card>
          </div>
        </div>
      </div>
    </mip-v-card>
  </div>
</div>
```
