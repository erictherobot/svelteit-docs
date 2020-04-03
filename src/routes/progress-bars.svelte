<script>
  import Prism from '../components/PrismJS.svelte'
  import PropsTable from '../components/PropsTable.svelte'
  import Description from '../components/Description.svelte'

  import { ProgressBar, Table } from '@colorfuldots/svelteit'

  const propTypes = [
    {
      name: 'progress',
      type: 'number|string',
      isRequired: true,
      defaultValue: null,
      description: 'Sets progress width of the inner bar in pixels or points',
    },
    {
      name: 'primary, secondary, success, danger, warning, info, light, dark',
      type: 'bool',
      isRequired: false,
      defaultValue: null,
      description: 'Sets the color of the progress bar',
    },
    {
      name: 'bordered',
      type: 'bool',
      isRequired: false,
      defaultValue: null,
      description: 'Sets an outline to the progress bar',
    },
    {
      name: 'small, medium, large',
      type: 'bool',
      isRequired: false,
      defaultValue: null,
      description: 'Sets the size of the progress bar',
    },
  ]

  // Example Alert Default
  const example_progressbar_code = `
<script>
    import { ProgressBar } from '@colorfuldots/svelteit'
</\script>

<ProgressBar progress={20} primary />
<ProgressBar progress={30} secondary />
<ProgressBar progress={40} success />
<ProgressBar progress={50} danger />
<ProgressBar progress={60} warning />
<ProgressBar progress={70} info />
<ProgressBar progress={80} dark />
`

  // Example Alert Default
  const example_progressbar_labels_code = `
<script>
    import { ProgressBar } from '@colorfuldots/svelteit'
</\script>

<ProgressBar progress={20} label={'20%'} primary small  />
<ProgressBar progress={30} label={'30%'} secondary medium />
<ProgressBar progress={40} label={'40%'} success large />
<ProgressBar progress={50} label={'50%'} danger />
<ProgressBar progress={60} label={'60%'} warning />
<ProgressBar progress={70} label={'70%'} info />
<ProgressBar progress={80} label={'80%'} light bordered />
<ProgressBar progress={90} label={'90%'} dark />
`

  // Example Alert Default
  const example_progressbar_sizes_code = `
<script>
    import { ProgressBar } from '@colorfuldots/svelteit'
</\script>

<ProgressBar progress={20} label={'$20,000 Raised'} small primary />
<ProgressBar progress={30} label={'$30,000 Raised'} medium secondary />
<ProgressBar progress={40} label={'$40,000 Raised'} large success />
`

  // Example Alert Default
  const example_progressbar_bordered_code = `
<script>
    import { ProgressBar } from '@colorfuldots/svelteit'
</\script>

<ProgressBar progress={60} label={'60% of the population'} warning bordered />
<ProgressBar progress={70} label={'70% of the population'} info bordered />
<ProgressBar progress={80} label={'80% of the population'} light bordered />
<ProgressBar progress={90} label={'90% of the population'} dark bordered />
`
</script>

<svelte:head>
  <title>Progress Bars - Svelteit Docs</title>
</svelte:head>

<h2>Progress Bars</h2>

<!-- START EXAMPLE -->
<div class="example-wrapper">
  <h3 class="content-title">Example :: Progress Bars</h3>
  <div class="example">
    <ProgressBar progress={20} primary />
    <ProgressBar progress={30} secondary />
    <ProgressBar progress={40} success />
    <ProgressBar progress={50} danger />
    <ProgressBar progress={60} warning />
    <ProgressBar progress={70} info />
    <ProgressBar progress={80} dark />
    <Prism language="markup" code={example_progressbar_code} />
  </div>
</div>
<!-- END EXAMPLE -->

<!-- START EXAMPLE -->
<div class="example-wrapper">
  <h3 class="content-title">Example :: Progress Bars With Label</h3>
  <div class="example">
    <ProgressBar progress={20} label={'20%'} primary small />
    <ProgressBar progress={30} label={'30%'} secondary medium />
    <ProgressBar progress={40} label={'40%'} success large />
    <ProgressBar progress={50} label={'50%'} danger />
    <ProgressBar progress={60} label={'60%'} warning />
    <ProgressBar progress={70} label={'70%'} info />
    <ProgressBar progress={80} label={'80%'} light bordered />
    <ProgressBar progress={90} label={'90%'} dark />
    <Prism language="markup" code={example_progressbar_labels_code} />
  </div>
</div>
<!-- END EXAMPLE -->

<!-- START EXAMPLE -->
<div class="example-wrapper">
  <h3 class="content-title">Example :: Progress Bars With Sizes</h3>
  <div class="example">
    <ProgressBar progress={20} label={'$20,000 Raised'} small primary />
    <ProgressBar progress={30} label={'$30,000 Raised'} medium secondary />
    <ProgressBar progress={40} label={'$40,000 Raised'} large success />
    <Prism language="markup" code={example_progressbar_sizes_code} />
  </div>
</div>
<!-- END EXAMPLE -->

<!-- START EXAMPLE -->
<div class="example-wrapper">
  <h3 class="content-title">Example :: Progress Bars With Border</h3>
  <div class="example">
    <ProgressBar
      progress={60}
      label={'60% of the population'}
      warning
      bordered />
    <ProgressBar progress={70} label={'70% of the population'} info bordered />
    <ProgressBar progress={80} label={'80% of the population'} light bordered />
    <ProgressBar progress={90} label={'90% of the population'} dark bordered />
    <Prism language="markup" code={example_progressbar_bordered_code} />
  </div>
</div>
<!-- END EXAMPLE -->

<PropsTable {propTypes} />

<Description
  title="Progress Bars"
  description="A progress bar is a graphical control element used to visualize
  the progression of an extended computer operation, such as a download, file
  transfer, or installation. Sometimes, the graphic is accompanied by a textual
  representation of the progress in a percent format." />
