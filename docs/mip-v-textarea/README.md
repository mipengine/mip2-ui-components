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
autoGrow|boolean|undefined|
noResize|boolean|undefined|
outline|boolean|undefined|
rowHeight|number \| string|24|
rows|number \| string|5|

## 示例

### Auto grow

```html
<mip-v-textarea name="input-7-5" box="" label="Label" auto-grow="" value="The Woodman set to work at once, and so sharp was his axe that the tree was soon chopped nearly through."></mip-v-textarea>
```
