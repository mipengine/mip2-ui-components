# v-ripple

`v-ripple`指令被用于显示用户的操作。它可以应用于任何块级元素。许多组件都带有内置的波纹指令，比如`mip-v-btn`、`mip-v-tabs-item`等等。

## 用例

```html
<div class="text-xs-center">
  <mip-v-btn
    dark
    ripple
    color="primary"
  >
    Default Ripple
  </mip-v-btn>
  <mip-v-btn
    dark
    ripple="false"
    color="primary"
  >
    Ripple Disabled
  </mip-v-btn>
</div>
```

## 示例

### 自定义色彩

```html
<div class="text-xs-center">
  <mip-v-btn dark>
    <script type="application/json">
      {
        "ripple": {
          "class": "error--text"
        }
      }
    </script>
    Colored Ripple
  </mip-v-btn>
</div>
```
