# mip-v-card

`mip-v-card` 组件是一个多功能组件，可用于从面板到静态图像的任何事物。**card**组件有许多班助组件，使标记尽可能简单。没有列出选项的组件使用**Vue的**功能组件选项来加快渲染速度，并作为标记糖来使构建更容易。

## 用法

一个卡片有四个基本组件，`mip-v-card-media`、`mip-v-card-title`、`mip-v-card-text`和`mip-v-card-actions`。

``` html
<mip-v-card>
  <mip-v-card-media
  src="https://cdn.vuetifyjs.com/images/cards/desert.jpg"
  height="200px"
  ></mip-v-card-media>

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
```

## API

### mip-v-card
props|含义|默认值|类型
----|----|----|----
flat|移除卡片的盒子阴影|false|boolean
height|手动定义卡片的高度|undefined|number/string
hover|在悬停上应用跟高的海拔|false|boolean
img|指定一个图像背景|undefined|string
raised|指定更高的默认高度|false|boolean
tile|通过去除边界弧度将卡片卡如贴片|false|boolean

### mip-v-card-media
props|含义|默认值|类型
----|----|----|----
contain|修改包含的背景大小来|false|boolean
height|手动定义卡片的高度|auto|number/string
src|被左为背景显示的图片|undefined|string

### mip-v-card-title
props|含义|默认值|类型
----|----|----|----
primaryTitle|应用主标题特定的填充|false|boolean

## 示例

### 媒体与文字

```html
<mip-v-card>
  <mip-v-card-media
    class="white--text"
    height="200px"
    src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
  >
    <mip-v-container fill-height fluid>
      <mip-v-layout fill-height>
        <mip-v-flex xs12 align-end flexbox>
          <span class="headline">Top 10 Australian beaches</span>
        </mip-v-flex>
      </mip-v-layout>
    </mip-v-container>
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
```

### 水平的卡片
```html
<mip-v-toolbar
  color="pink"
  dark
>
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
                <mip-v-card-media
                  src="https://cdn.vuetifyjs.com/images/cards/foster.jpg"
                  height="125px"
                  contain
                ></mip-v-card-media>
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
            </div class="layout">
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
                <mip-v-card-media
                  src="https://cdn.vuetifyjs.com/images/cards/halcyon.png"
                  height="125px"
                  contain
                ></mip-v-card-media>
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
```

### 栅格

```html
<div class="layout column">
  <div class="flex xs12 sm6 offset-sm3">
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
              <mip-v-card-media
                src="https://cdn.vuetifyjs.com/images/cards/house.jpg"
                height="200px"
              >
                <div class="container
                  fill-height
                  fluid
                  pa-2"
                >
                  <div class="layout fill-height">
                    <div class="flex xs12 align-end flexbox">
                      <span class="headline white--text">测试</span>
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
                <mip-v-card-media
                  src="https://cdn.vuetifyjs.com/images/cards/house.jpg"
                  height="200px"
                >
                  <div class="container
                    fill-height
                    fluid
                    pa-2"
                  >
                    <div class="layout fill-height">
                      <div class="flex xs12 align-end flexbox">
                        <span class="headline white--text">测试</span>
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
              <mip-v-card-media
                src="https://cdn.vuetifyjs.com/images/cards/house.jpg"
                height="200px"
              >
                <div class="container
                  fill-height
                  fluid
                  pa-2"
                >
                  <div class="layout fill-height">
                    <div class="flex xs12 align-end flexbox">
                      <span class="headline white--text">测试</span>
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
