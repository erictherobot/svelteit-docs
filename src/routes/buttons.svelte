<script>
  import Prism from '../components/PrismJS.svelte'
  import PropsTable from '../components/PropsTable.svelte'
  import Description from '../components/Description.svelte'

  import { Button, Table } from '@erictherobot/svelteit'

  let example_button_default_title = 'Default'
  let example_button_disabled_title = 'Disabled'

  const propTypes = [
    {
      name: 'on:click',
      type: 'func',
      isRequired: false,
      defaultValue: null,
      description: 'Handler function of your choice',
    },
    {
      name: 'title',
      type: 'string',
      isRequired: true,
      defaultValue: null,
      description: 'Sets the button title',
    },
    {
      name: 'disabled',
      type: 'bool',
      isRequired: false,
      defaultValue: false,
      description: 'Disables the button',
    },
    {
      name: 'primary, secondary, success, danger, warning, info, light, dark',
      type: 'bool',
      isRequired: false,
      defaultValue: false,
      description: 'Sets button color',
    },
    {
      name: 'outlined',
      type: 'bool',
      isRequired: false,
      defaultValue: false,
      description: 'Sets an outline to the button',
    },
    {
      name: 'small, medium, large',
      type: 'bool',
      isRequired: false,
      defaultValue: false,
      description: 'Sets the size of the button',
    },
    {
      name: 'rounded',
      type: 'bool',
      isRequired: false,
      defaultValue: false,
      description: 'Adds rounded corners to the button',
    },
    {
      name: 'block',
      type: 'bool',
      isRequired: false,
      defaultValue: false,
      description: 'Adds block-level / full-width to button',
    },
  ]

  // Example Button Default
  const example_button_default_code = `
<script>
  import { Button } from '@erictherobot/svelteit'
  let title = 'Default'
</\script>

<Button title={title} />
`

  // Example Button Disabled
  const example_button_disabled_code = `
<script>
  import { Button } from '@erictherobot/svelteit'
  let title = 'Disabled'
</\script>

<Button title={title} success disabled />
`

  // Example Button Solid
  const example_button_solid_code = `
<script>
  import { Button } from '@erictherobot/svelteit'
</\script>

<Button title={'Primary'} primary />
<Button title={'Secondary'} secondary />
<Button title={'Success'} success />
<Button title={'Danger'} danger />
<Button title={'Warning'} warning />
<Button title={'Info'} info />
<Button title={'Light'} light />
<Button title={'Dark'} dark />
`

  // Example Button Outlined
  const example_button_outlined_code = `
<script>
  import { Button } from '@erictherobot/svelteit'
</\script>

<Button title={'Primary'} primary outlined />
<Button title={'Secondary'} secondary outlined />
<Button title={'Success'} success outlined />
<Button title={'Danger'} danger outlined />
<Button title={'Warning'} warning outlined />
<Button title={'Info'} info outlined />
<Button title={'Info'} light outlined />
<Button title={'Info'} dark outlined />
`

  // Example Button Outlined
  const example_button_sizes_code = `
<script>
  import { Button } from '@erictherobot/svelteit'
</\script>

<Button title={'Small'} primary small />
<Button title={'Medium'} secondary medium />
<Button title={'Default'} success />
<Button title={'Large'} danger large />
<Button title={'Small'} warning outlined small />
<Button title={'Medium'} info outlined medium />
<Button title={'Default'} light outlined />
<Button title={'Large'} dark outlined large />
`
  // Example Button Outlined
  const example_button_rounded_code = `
<script>
  import { Button } from '@erictherobot/svelteit'
</\script>

<Button title={'Small'} primary rounded />
<Button title={'Medium'} secondary rounded />
<Button title={'Default'} success rounded />
<Button title={'Large'} danger rounded />
<Button title={'Small'} warning outlined rounded />
<Button title={'Medium'} info outlined rounded />
<Button title={'Default'} light outlined rounded />
<Button title={'Large'} dark outlined rounded />
`
  // Example Button Outlined
  const example_button_block_code = `
<script>
  import { Button } from '@erictherobot/svelteit'
</\script>

<Button title={'Small'} primary block />
<Button title={'Medium'} secondary block />
<Button title={'Default'} success block />
<Button title={'Large'} danger block />
<Button title={'Small'} warning outlined block />
<Button title={'Medium'} info outlined block />
<Button title={'Default'} light outlined block />
<Button title={'Large'} dark outlined block />
`
</script>

<svelte:head>
  <title>Buttons - Svelteit Docs</title>
</svelte:head>

<h2>Buttons</h2>

<!-- START EXAMPLE -->
<div class="example-wrapper">
  <h3 class="content-title">Example :: Default</h3>
  <div class="example">
    <Button title={example_button_default_title} />
    <Prism language="markup" code={example_button_default_code} />
  </div>
</div>
<!-- END EXAMPLE -->

<!-- START EXAMPLE -->
<div class="example-wrapper">
  <h3 class="content-title">Example :: Disabled</h3>
  <div class="example">
    <Button title={example_button_disabled_title} success disabled />
    <Button title={'Active'} success />

    <Prism language="markup" code={example_button_disabled_code} />
  </div>
</div>
<!-- END EXAMPLE -->

<!-- START EXAMPLE -->
<div class="example-wrapper">
  <h3 class="content-title">Example :: Solid Colors</h3>
  <div class="example">
    <Button title={'Primary'} primary />
    <Button title={'Secondary'} secondary />
    <Button title={'Success'} success />
    <Button title={'Danger'} danger />
    <Button title={'Warning'} warning />
    <Button title={'Info'} info />
    <Button title={'Light'} light />
    <Button title={'Dark'} dark />
    <Prism language="markup" code={example_button_solid_code} />
  </div>
</div>
<!-- END EXAMPLE -->

<!-- START EXAMPLE -->
<div class="example-wrapper">
  <h3 class="content-title">Example :: Outlined Colors</h3>
  <div class="example">
    <Button title={'Primary'} primary outlined />
    <Button title={'Secondary'} secondary outlined />
    <Button title={'Success'} success outlined />
    <Button title={'Danger'} danger outlined />
    <Button title={'Warning'} warning outlined />
    <Button title={'Info'} info outlined />
    <Button title={'Light'} light outlined />
    <Button title={'Dark'} dark outlined />
    <Prism language="markup" code={example_button_outlined_code} />
  </div>
</div>
<!-- END EXAMPLE -->

<!-- START EXAMPLE -->
<div class="example-wrapper">
  <h3 class="content-title">Example :: Sizes</h3>
  <div class="example">
    <Button title={'Small'} primary small />
    <Button title={'Medium'} secondary medium />
    <Button title={'Default'} success />
    <Button title={'Large'} danger large />
    <Button title={'Small'} warning outlined small />
    <Button title={'Medium'} info outlined medium />
    <Button title={'Default'} light outlined />
    <Button title={'Large'} dark outlined large />
    <Prism language="markup" code={example_button_sizes_code} />
  </div>
</div>
<!-- END EXAMPLE -->

<!-- START EXAMPLE -->
<div class="example-wrapper">
  <h3 class="content-title">Example :: Rounded</h3>
  <div class="example">
    <Button title={'Primary'} primary rounded />
    <Button title={'Secondary'} secondary rounded />
    <Button title={'Success'} success rounded />
    <Button title={'Danger'} danger rounded />
    <Button title={'Warning'} warning outlined rounded />
    <Button title={'Info'} info outlined rounded />
    <Button title={'Light'} light outlined rounded />
    <Button title={'Dark'} dark outlined rounded />
    <Prism language="markup" code={example_button_rounded_code} />
  </div>
</div>
<!-- END EXAMPLE -->

<!-- START EXAMPLE -->
<div class="example-wrapper">
  <h3 class="content-title">Example :: Block Level</h3>
  <div class="example">
    <Button title={'Primary'} primary block />
    <Button title={'Secondary'} secondary block />
    <Button title={'Success'} success block />
    <Button title={'Danger'} danger block />
    <Button title={'Warning'} warning outlined block />
    <Button title={'Info'} info outlined block />
    <Button title={'Light'} light outlined block />
    <Button title={'Dark'} dark outlined block />
    <Prism language="markup" code={example_button_block_code} />
  </div>
</div>
<!-- END EXAMPLE -->

<PropsTable {propTypes} />

<Description
  title="Buttons"
  description="A typical button is a rectangle or rounded rectangle, wider than
  it is tall, with a descriptive caption in its center. The most common method
  of pressing a button is clicking it with a pointer controlled by a mouse, but
  other input such as keystrokes can be used to execute the command of a button.
  A button is not however always restricted to a rectangular shape. The sole
  requirement of button interaction is that the user can execute a command by a
  click action. Thus pictures and background areas can be programmed as buttons.
  When pressed, in addition to performing a predetermined task, buttons often
  undergo a graphical change to mimic a mechanical button being depressed.
  Depending on the circumstance, buttons may be designated to be pushed only
  once and execute a command, while others may be used to receive instant feed
  back and may require the user to click more than once to receive the desired
  result. Other buttons are designed to toggle behavior on and off like a check
  box. These buttons will show a graphical clue (such as staying depressed after
  the mouse is released) to indicate the state of the option." />
