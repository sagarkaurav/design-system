
# Icon

Use the `Icon` component for SVG icons.

```.jsx
<Icon
  name='flame'
  color='orange'
/>
```

By default, the Icon component will look for an icon based on its name,
first in the legacy icon set, then in the new icon set.
To force the component to prefer using new icons, set the `legacy` prop to `false`.

```.jsx
<Icon
  legacy={false}
  name='pin'
  color='blue'
/>
```

## Props

Prop | Type | Description
---|---|---
`name` | string | Icon key name
`size` | number | Width and height in pixels
`color` | string | A color key from `theme.colors`
`legacy` | boolean | Force component to prefer using icons from the legacy set

For a full list of available icons, see [Iconography](/design-system/iconography).
