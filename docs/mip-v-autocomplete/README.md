# mip-v-autocomplete

The `v-autocomplete` component offers simple and flexible type-ahead functionality. This is useful when searching large sets of data or even dynamically requesting information from an API.

## 用例

```html
<div></div>
```

## API

### mip-v-autocomplete

#### Props

名称|类型|默认值|含义
:--:|:--:|:--:|:---
allowOverflow|boolean|true|
browserAutocomplete|string|off|
filter|any|true|
hideNoData|boolean|undefined|
noFilter|boolean|undefined|Do not apply filtering when searching. Useful when data is being filtered server side
offsetY|boolean|true|
offsetOverflow|boolean|true|
searchInput|any|undefined|
transition|boolean / string|undefined|
value|any|undefined|控制可见性

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
