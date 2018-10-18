# mip-v-date-picker

The `mip-v-date-picker` is stand-alone component that can be utilized in many existing Vuetify components. It offers the user a visual representation for selecting date/month.

## 用例

```html
<mip-data>
  <script type="application/json">
    {
      "date": null,
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
    m-bind:value.sync="date"
    m-bind:landscape="landscape"
    m-bind:reactive="reactive"
  ></mip-v-date-picker>
</div>
```

## API

### mip-v-date-picker

#### Props

名称|类型|默认值|含义
:--:|:--:|:--:|:---
allowed-dates|function|/|Restricts which dates can be selected
color|string|/|将指定的色彩应用与控件
dark|boolean|/|应用暗黑主题变体
day-format|function|/|Allows you to customize the format of the day string that appears in the date table. Called with date (ISO 8601 string) and locale (string) arguments.
event-color|string / function / object|'warning'|Sets the color for event dot. It can be string (all events will have the same color) or `object` where attribute is the event date and value is the color for specified date or `function` taking date as a parameter and returning color for that date
events|array / object / function|null|Marks the date as an event (only for date picker)
first-day-of-week|string / number|/|Sets the first day of the week, starting with 0 for Sunday.
full-width|boolean|/|Forces 100% width
header-color|string|/|定义标题颜色。如果未指定，将使用由<code>颜色（color）</code>属性或默认选取器颜色定义的颜色。
header-date-format|function|/|Allows you to customize the format of the month string that appears in the header of the calendar. Called with date (ISO 8601 string) and locale (string) arguments.
landscape|boolean|/|Orients picker horizontal
light|boolean|/|应用明亮主题变体
locale|string|'en-us'|Sets the locale. Accepts a string with a BCP 47 language tag.
max|string|/|Maximum allowed date/month
min|string|/|Minimum allowed date/month
month-format|function|/|Formatting function used for displaying months in the months table. Called with date (ISO 8601 string) and locale (string) arguments.
multiple|boolean|/|
next-icon|string|'$vuetify.icons.next'|Sets the icon for next month/year button
no-title|boolean|/|隐藏选取器标题
picker-date|string|/|Displayed year/month
prev-icon|string|'$vuetify.icons.prev'|Sets the icon for previous month/year button
reactive|boolean|/|Updates the picker model when changing months/years automatically
readonly|boolean|/|Makes the picker readonly (doesnt't allow to select new date or navigate through months/years)
scrollable|boolean|/|Allows changing displayed month with mouse scroll
show-current|boolean / string|true|Toggles visibility of the current date/month outline or shows the provided date/month as a current
title-date-format|function|/|Allows you to customize the format of the date string that appears in the title of the date picker. Called with date (ISO 8601 string) and locale (string) arguments.
type|string|'date'|Determines the type of the picker - `date` for date picker, `month` for month picker
value|array / string|/|Date picker model (ISO 8601 format, YY-mm-dd or YY-mm)
width|number / string|290|内容的宽度
year-format|function|/|Allows you to customize the format of the year string that appears in the header of the calendar. Called with date (ISO 8601 string) and locale (string) arguments.
year-icon|string|/|Generates an icon next to the year

## 示例

### 日历 - 色彩

```html
<mip-data>
  <script type="application/json">
    {
      "date": null
    }
  </script>
</mip-data>
<div class="layout row wrap">
  <div class="flex xs12 sm6">
    <mip-v-date-picker
      m-bind:value.sync="date"
      color="green lighten-1"
    ></mip-v-date-picker>
  </div>
  <div class="flex xs12 sm6">
      <mip-v-date-picker
        m-bind:value.sync="date"
        color="green lighten-1"
        header-color="primary"
      ></mip-v-date-picker>
    </div>
</div>
```

### 日历 - 在菜单和对话框中

```html
<mip-data>
  <script type="application/json">
    {
      "date": null,
      "menu": false,
      "dialog": false
    }
  </script>
</mip-data>
<div class="layout row wrap">
  <div class="flex xs12 sm6 md4">
    <mip-v-menu
      id="menu"
      m-bind:value.sync="menu"
      m-bind:return-value.sync="date"
      close-on-content-click="false"
      nudge-right="40"
      lazy
      transition="scale-transition"
      offset-y
      full-width
      min-width="290"
    >
        <mip-v-text-field
          slot="activator"
          m-bind:value.sync="date"
          label="Picker in menu"
          prepend-icon="event"
          readonly
        ></mip-v-text-field>
        <mip-v-date-picker
          m-bind:value.sync="date"
          no-title
          scrollable
        >
          <mip-v-space></mip-v-space>
          <mip-v-btn
            flat
            color="primary"
            on="click:MIP.setData({ menu: false })"
          >
            Cancel
          </mip-v-btn>
          <mip-v-btn
            flat
            color="primary"
            on="click:menu.save"
          >
            OK
          </mip-v-btn>
        </mip-v-date-picker>
      </mip-v-menu>
  </div>
  <div class="flex xs12 sm6 md4">
    <mip-v-dialog
      id="dialog"
      m-bind:value.sync="dialog"
      m-bind:return-value.sync="date"
      persistent
      lazy
      full-width
      width="290"
    >
      <mip-v-text-field
        slot="activator"
        m-bind:value.sync="date"
        label="Picker in dialog"
        prepend-icon="event"
        readonly
      ></mip-v-text-field>
      <mip-v-date-picker
        m-bind:value.sync="date"
        scrollable
      >
        <mip-v-spacer></mip-v-spacer>
        <mip-v-btn
          flat
          color="primary"
          on="click:MIP.setData({ dialog: false })"
        >
          Cancel
        </mip-v-btn>
        <mip-v-btn
          flat
          color="primary"
          on="click:dialog.save"
        >
          OK
        </mip-v-btn>
      </mip-v-date-picker>
    </mip-v-dialog>
  </div>
</div>
```

### 日历 - 格式化日期

```html
<mip-data>
  <script type="application/json">
    {
      "date": null,
      "menu": false,
      "dateFormatted": null,
      "computedDateFormatted": null,
      "menu1": false,
      "menu2": false
    }
  </script>
</mip-data>
<div class="container grid-list-md">
  <div class="layout row wrap">
    <div class="flex xs12 lg6">
      <mip-v-menu
        m-bind:value.sync="menu1"
        close-on-content-click="false"
        nudge-right="40"
        lazy
        transition="scale-transition"
        offset-y
        full-width
        width="290"
      >
        <mip-v-text-field
          slot="activator"
          m-bind:value.sync="dateFormatted"
          label="Date"
          hint="MM/DD/YYYY format"
          persistent-hint
          prepend-icon="event"
          on="blur:MIP.setData({ blur: true })"
        ></mip-v-text-field>
        <mip-v-date-picker
          m-bind:value.sync="date"
          no-title
          on="input:MIP.setData({ menu1: false })"
        ></mip-v-date-picker>
      </mip-v-menu>
      <p>Date in ISO format: <strong m-text="date"></strong></p>
    </div>
    <div class="flex xs12 lg6">
      <mip-v-menu
        m-bind:value.sync="menu2"
        close-on-content-click="false"
        nudge-right="40"
        lazy
        transition="scale-transition"
        offset-y
        full-width
        width="290"
      >
        <mip-v-text-field
          slot="activator"
          m-bind:value.sync="computedDateFormatted"
          label="Date (readonly text field)"
          hint="MM/DD/YYYY format"
          persistent-hint
          prepend-icon="event"
          readonly
        ></mip-v-text-field>
        <mip-v-date-picker
          m-bind:value.sync="date"
          no-title
          on="input:MIP.setData({ menu2: false })"
        ></mip-v-date-picker>
      </mip-v-menu>
      <p>Date in ISO format: <strong m-text="date"></strong></p>
    </div>
  </div>
</div>
<mip-script>
  const parseDate = date => {
    if (!date) {
      return null
    }
    const [month, day, year] = date.split('/')
    return `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`
  }
  const formatDate = date => {
    if (!date) {
      return null
    }
    const [year, month, day] = date.split('-')
    return `${month}/${day}/${year}`
  }
  MIP.watch('blur', blur => {
    if (blur) {
      return
    }
    MIP.setData({
      date: parseDate(MIP.getData('dateFormatted')),
      blur: false
    })
  })
  MIP.watch('date', date => {
    const dateFormatted = formatDate(date)
    MIP.setData({
      dateFormatted,
      computedDateFormatted: dateFormatted
    })
  })
</mip-script>
<script src="https://c.mipcdn.com/static/v2/mip-script/mip-script.js"></script>
```

### 日历 - 多选

```html
<mip-data>
  <script type="application/json">
    {
      "date": null,
      "dates": [],
      "multipleMenu": false
    }
  </script>
</mip-data>
<div class="layout row wrap">
  <div class="flex xs12 sm6">
    <mip-v-date-picker
      m-bind:value.sync="dates"
      multiple
    ></mip-v-date-picker>
  </div>
  <div class="flex xs12 sm6">
    <mip-v-menu
      id="multiple-menu"
      m-bind:value.sync="multipleMenu"
      m-bind:return-value.sync="“dates”"
      close-on-content-click="false"
      nudge-right="40"
      lazy
      transition="scale-transition"
      offset-y
      full-width
      min-width="290"
    >
      <mip-v-combobox
        slot="activator"
        m-bind:value.sync="dates"
        multiple
        chips
        small-chips
        label="Multiple picker in menu"
        prepend-icon="event"
        readonly
      ></mip-v-combobox>
      <mip-v-date-picker
        m-bind:value.sync="dates"
        multiple
        no-title
        scrollable
      >
        <mip-v-spacer></mip-v-spacer>
        <mip-v-btn
          flat
          color="primary"
          on="click:MIP.setData({ multipleMenu: false })"
        ></mip-v-btn>
        <mip-v-btn
          flat
          color="primary"
          on="click:multiple-menu.save"
        ></mip-v-btn>
      </mip-v-date-picker>
    </mip-v-menu>
  </div>
</div>
```

### 日历 - 设置选择器宽度

```html
<mip-data>
  <script type="application/json">
    {
      "date": null
    }
  </script>
</mip-data>
<div>
  <mip-v-date-picker
    m-bind:value.sync="date"
    width="290"
    class="mt-3"
  ></mip-v-date-picker>
  <mip-v-date-picker
    m-bind:value.sync="date"
    full-width
    landscape
    class="mt-3"
  ></mip-v-date-picker>
</div>
```
