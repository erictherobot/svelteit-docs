<script>
  import Prism from '../components/PrismJS.svelte'
  import PropsTable from '../components/PropsTable.svelte'
  import Description from '../components/Description.svelte'

  import { Typography, Badge } from '@erictherobot/svelteit'

  const propTypes = [
    {
      name: 'borderless',
      type: 'bool',
      isRequired: false,
      defaultValue: false,
      description: 'Table has no borders inside or outside',
    },
    {
      name: 'bordered',
      type: 'bool',
      isRequired: false,
      defaultValue: false,
      description: 'Table has borders inside and outside',
    },
    {
      name: 'primary, secondary, success, danger, warning, info, light, dark',
      type: 'bool',
      isRequired: false,
      defaultValue: null,
      description: 'Sets table color',
    },
    {
      name: 'rounded',
      type: 'bool',
      isRequired: false,
      defaultValue: null,
      description: 'Sets a rounded border to the table',
    },
    {
      name: 'hoverable',
      type: 'bool',
      isRequired: false,
      defaultValue: false,
      description: 'Adds mouse hovering / highlighting over each table row',
    },
    {
      name: 'striped',
      type: 'bool',
      isRequired: false,
      defaultValue: false,
      description: 'Adds odd / even zebra stripes to table rows',
    },
    {
      name: 'responsive',
      type: 'bool',
      isRequired: false,
      defaultValue: false,
      description:
        'Allows table to be properly contained on smaller screen sizes',
    },
  ]

  // Example
  const example_typography_heading_code = `
<script>
  import { Typography } from '@erictherobot/svelteit'
</\script>

<Typography h1 title="Heading h1" />
<Typography h2 title="Heading h2" />
<Typography h3 title="Heading h3" />
<Typography h4 title="Heading h4" />
<Typography h5 title="Heading h5" />
<Typography h6 title="Heading h6" />
`

  // Example
  const example_typography_paragraph_code = `
<script>
  import { Typography } from '@erictherobot/svelteit'
</\script>

<Typography
  p="This is a paragraph, it can have a bunch of text in it. It's not really
  the best use of a component, but then again, maybe it is. It's up to you,
  but we decided to include it into our framework." />
`
  // Example
  const example_label_code = `
<script>
  import { Badge } from '@erictherobot/svelteit'
</\script>

<Badge label="Exciting" primary />
<Badge label="Stale" secondary />
<Badge label="New" success />
<Badge label="Deprecated" danger />
<Badge label="Old" warning />
<Badge label="Breaking News" info />
<Badge label="Cool" light />
<Badge label="Fun" dark />
`

  // Example
  const example_label_outlined_code = `
<script>
  import { Badge } from '@erictherobot/svelteit'
</\script>

<Badge label="Exciting" primary outlined />
<Badge label="Stale" secondary outlined />
<Badge label="New" success outlined />
<Badge label="Deprecated" danger outlined />
<Badge label="Old" warning outlined />
<Badge label="Breaking News" info outlined />
<Badge label="Cool" light outlined />
<Badge label="Fun" dark outlined />
`

  // Example
  const example_badge_code = `
<script>
  import { Badge } from '@erictherobot/svelteit'
</\script>

<Badge badge={10} primary />
<Badge badge={20} secondary />
<Badge badge={30} success />
<Badge badge={40} danger />
<Badge badge={50} warning />
<Badge badge={60} info />
<Badge badge={70} light />
<Badge badge={80} dark />
`

  // Example
  const example_badge_outlined_code = `
<script>
  import { Badge } from '@erictherobot/svelteit'
</\script>

<Badge badge={10} primary outlined />
<Badge badge={20} secondary outlined />
<Badge badge={30} success outlined />
<Badge badge={40} danger outlined />
<Badge badge={50} warning outlined />
<Badge badge={60} info outlined />
<Badge badge={70} light outlined />
<Badge badge={80} dark outlined />
`
</script>

<svelte:head>
  <title>Typography - Svelteit Docs</title>
</svelte:head>

<h2>Typography</h2>

<!-- START EXAMPLE -->
<div class="example-wrapper">
  <h3 class="content-title">Example :: Headings</h3>
  <div class="example">
    <Typography h1 title="Heading h1" />
    <Typography h2 title="Heading h2" />
    <Typography h3 title="Heading h3" />
    <Typography h4 title="Heading h4" />
    <Typography h5 title="Heading h5" />
    <Typography h6 title="Heading h6" />
    <Prism language="markup" code={example_typography_heading_code} />
  </div>
</div>
<!-- END EXAMPLE -->

<!-- START EXAMPLE -->
<div class="example-wrapper">
  <h3 class="content-title">Example :: Paragraphs</h3>
  <div class="example">
    <Typography
      p="This is a paragraph, it can have a bunch of text in it. It's not really
      the best use of a component, but then again, maybe it is. It's up to you,
      but we decided to include it into our framework." />
    <Prism language="markup" code={example_typography_paragraph_code} />
  </div>
</div>
<!-- END EXAMPLE -->

<!-- START EXAMPLE -->
<div class="example-wrapper">
  <h3 class="content-title">Example :: Labels</h3>
  <div class="example">
    <Badge label="Exciting" primary />
    <Badge label="Stale" secondary />
    <Badge label="New" success />
    <Badge label="Deprecated" danger />
    <Badge label="Old" warning />
    <Badge label="Breaking News" info />
    <Badge label="Cool" light />
    <Badge label="Fun" dark />
    <Prism language="markup" code={example_label_code} />
  </div>
</div>
<!-- END EXAMPLE -->

<!-- START EXAMPLE -->
<div class="example-wrapper">
  <h3 class="content-title">Example :: Outlined Labels</h3>
  <div class="example">
    <Badge label="Exciting" primary outlined />
    <Badge label="Stale" secondary outlined />
    <Badge label="New" success outlined />
    <Badge label="Deprecated" danger outlined />
    <Badge label="Old" warning outlined />
    <Badge label="Breaking News" info outlined />
    <Badge label="Cool" light outlined />
    <Badge label="Fun" dark outlined />
    <Prism language="markup" code={example_label_outlined_code} />
  </div>
</div>
<!-- END EXAMPLE -->

<!-- START EXAMPLE -->
<div class="example-wrapper">
  <h3 class="content-title">Example :: Badges</h3>
  <div class="example">
    <Badge badge={10} primary />
    <Badge badge={20} secondary />
    <Badge badge={30} success />
    <Badge badge={40} danger />
    <Badge badge={50} warning />
    <Badge badge={60} info />
    <Badge badge={70} light />
    <Badge badge={80} dark />
    <Prism language="markup" code={example_badge_code} />
  </div>
</div>
<!-- END EXAMPLE -->

<!-- START EXAMPLE -->
<div class="example-wrapper">
  <h3 class="content-title">Example :: Outlined Badges</h3>
  <div class="example">
    <Badge badge={10} primary outlined />
    <Badge badge={20} secondary outlined />
    <Badge badge={30} success outlined />
    <Badge badge={40} danger outlined />
    <Badge badge={50} warning outlined />
    <Badge badge={60} info outlined />
    <Badge badge={70} light outlined />
    <Badge badge={80} dark outlined />
    <Prism language="markup" code={example_badge_outlined_code} />
  </div>
</div>
<!-- END EXAMPLE -->

<PropsTable {propTypes} />

<Description
  title="Typography"
  description="Typography is the art and technique of arranging type to make
  written language legible, readable, and appealing when displayed. The
  arrangement of type involves selecting typefaces, point sizes, line lengths,
  line-spacing, and letter-spacing, and adjusting the space between pairs of
  letters." />
