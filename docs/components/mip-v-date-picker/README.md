# mip-v-date-picker

The `mip-v-date-picker` is stand-alone component that can be utilized in many existing Vuetify components. It offers the user a visual representation for selecting date/month.

## 用例

```html
<mip-data>
  <script type="application/json">
    {
      "picker": null,
      "landscape": false,
      "reactive": false
    }
  </script>
</mip-data>
<div>
  <div class="layout row wrap">
    <div class="flex xs12 sm3">
      <mip-v-checkbox
        m-bind:input-value.sync="landscape"
        hide-details
        label="Landscape"
      ></mip-v-checkbox>
    </div>
    <div class="flex xs12 sm3">
      <mip-v-checkbox
        m-bind:input-value.sync="reactive"
        hide-details
        label="Reactive"
      ></mip-v-checkbox>
    </div>
  </div>
  <mip-v-date-picker
    m-bind:value.sync="picker"
    m-bind:landscape="landscape"
    m-bind:reactive="reactive"
  ></mip-v-date-picker>
</div>
```

## 示例

### Colors

```html
<mip-data>
  <script type="application/json">
    {
      "picker": null
    }
  </script>
</mip-data>
<div class="layout row wrap">
  <div class="flex xs12 sm6">
    <mip-v-date-picker
      m-bind:value.sync="picker"
      color="green lighten-1"
    ></mip-v-date-picker>
  </div>
  <div class="flex xs12 sm6">
      <mip-v-date-picker
        m-bind:value.sync="picker"
        color="green lighten-1"
        header-color="primary"
      ></mip-v-date-picker>
    </div>
</div>
```
