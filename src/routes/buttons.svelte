<script>
  import Prism from '../components/PrismJS.svelte'
  import PropsTable from '../components/PropsTable.svelte'
  import Description from '../components/Description.svelte'

  import { Button, ButtonGroup, Table } from '@colorfuldots/svelteit'

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
  import { Button } from '@colorfuldots/svelteit'
  let title = 'Default'
</\script>

<Button>{title}</Button>
`

  // Example Button Disabled
  const example_button_disabled_code = `
<script>
  import { Button } from '@colorfuldots/svelteit'
  let title1 = 'Disabled'
  let title2 = 'Active'
</\script>

<Button success disabled>{title1}</Button>
<Button success>{title2}</Button>
`

  // Example Button Solid
  const example_button_solid_code = `
<script>
  import { Button } from '@colorfuldots/svelteit'
</\script>

<Button>Default</Button>
<Button primary>Primary</Button>
<Button secondary>Secondary</Button>
<Button success>Success</Button>
<Button danger>Danger</Button>
<Button warning>Warning</Button>
<Button info>Info</Button>
<Button light>Light</Button>
<Button dark>Dark</Button>
`

  // Example Button Outlined
  const example_button_outlined_code = `
<script>
  import { Button } from '@colorfuldots/svelteit'
</\script>

<Button>Default</Button>
<Button primary outlined>Primary</Button>
<Button secondary outlined>Secondary</Button>
<Button success outlined>Success</Button>
<Button danger outlined>Danger</Button>
<Button warning outlined>Warning</Button>
<Button info outlined>Info</Button>
<Button light outlined>Light</Button>
<Button dark outlined>Dark</Button>
`

  // Example Button Outlined
  const example_button_sizes_code = `
<script>
  import { Button } from '@colorfuldots/svelteit'
</\script>

<Button primary outlined small>Small</Button>
<Button secondary outlined medium>Medium</Button>
<Button success outlined>Default</Button>
<Button danger outlined large>Large</Button>
<Button warning small>Small</Button>
<Button info medium>Medium</Button>
<Button light>Default</Button>
<Button dark large rounded>Large</Button>
`
  // Example Button Outlined
  const example_button_rounded_code = `
<script>
  import { Button } from '@colorfuldots/svelteit'
</\script>

<Button primary rounded>Primary</Button>
<Button secondary rounded>Secondary</Button>
<Button success rounded>Success</Button>
<Button danger rounded>Danger</Button>
<Button warning outlined rounded>Warning</Button>
<Button info outlined rounded>Info</Button>
<Button light outlined rounded>Light</Button>
<Button dark outlined rounded>Dark</Button>
`
  // Example Button Outlined
  const example_button_block_code = `
<script>
  import { Button } from '@colorfuldots/svelteit'
</\script>

<Button primary block>Primary</Button>
<Button secondary block>Secondary</Button>
<Button success block>Success</Button>
<Button danger block>Danger</Button>
<Button warning outlined block>Warning</Button>
<Button info outlined block>Info</Button>
<Button light outlined block>Light</Button>
<Button dark outlined block>Dark</Button>
`

  // Example Button Outlined
  const example_button_groups_default_code = `
<script>
  import { ButtonGroup, Button } from '@colorfuldots/svelteit'
</\script>

<ButtonGroup>
  <Button>one</Button>
  <Button>two</Button>
  <Button>three</Button>
</ButtonGroup>
`

  // Example Button Outlined
  const example_button_groups_dark_code = `
<script>
  import { ButtonGroup, Button } from '@colorfuldots/svelteit'
</\script>

<ButtonGroup>
  <Button dark>one</Button>
  <Button dark>two</Button>
  <Button dark>three</Button>
</ButtonGroup>
`

  // Example Button Outlined
  const example_button_groups_outlined_code = `
<script>
  import { ButtonGroup, Button } from '@colorfuldots/svelteit'
</\script>

<ButtonGroup>
  <Button primary outlined>one</Button>
  <Button primary outlined>two</Button>
  <Button primary outlined>three</Button>
</ButtonGroup>
`

  // Example Button Outlined
  const example_button_groups_size_code = `
<script>
  import { ButtonGroup, Button } from '@colorfuldots/svelteit'
</\script>

 <ButtonGroup>
  <Button dark small>small</Button>
  <Button dark small>two</Button>
  <Button dark small>three</Button>
</ButtonGroup>
<ButtonGroup>
  <Button dark medium>medium</Button>
  <Button dark medium>two</Button>
  <Button dark medium>three</Button>
</ButtonGroup>
<ButtonGroup>
  <Button dark>default</Button>
  <Button dark>two</Button>
  <Button dark>three</Button>
</ButtonGroup>
<ButtonGroup>
  <Button dark large>large</Button>
  <Button dark large>two</Button>
  <Button dark large>three</Button>
</ButtonGroup>
`

  // Example Button Outlined
  const example_button_groups_icon_code = `
<script>
  import { ButtonGroup, Button } from '@colorfuldots/svelteit'
</\script>

<ButtonGroup>
  <Button dark>
    <i class="fa fa-bars" />
  </Button>
  <Button dark>
    <i class="fa fa-trash" />
  </Button>
  <Button dark>
    <i class="fa fa-close" />
  </Button>
</ButtonGroup>
`

  // Example Button Outlined
  const example_button_groups_icon_label_code = `
<script>
  import { ButtonGroup, Button } from '@colorfuldots/svelteit'
</\script>

<ButtonGroup>
  <Button primary>
    <i class="fa fa-home" />
    Home
  </Button>
  <Button primary>
    <i class="fa fa-trash" />
    Delete
  </Button>
  <Button primary>
    <i class="fa fa-close" />
    Close
  </Button>
</ButtonGroup>
`

  // Example Button Outlined
  const example_button_groups_icon_label_disabled_code = `
<script>
  import { ButtonGroup, Button } from '@colorfuldots/svelteit'
</\script>

<ButtonGroup>
  <Button primary>
    <i class="fa fa-home" />
    Home
  </Button>
  <Button primary disabled>
    <i class="fa fa-trash" />
    Delete
  </Button>
  <Button primary>
    <i class="fa fa-close" />
    Close
  </Button>
</ButtonGroup>
`
</script>

<svelte:head>
  <title>Buttons - Svelteit Docs</title>
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
</svelte:head>

<h2>Buttons</h2>

<!-- START EXAMPLE -->
<div class="example-wrapper">
  <h3 class="content-title">Example :: Default</h3>
  <div class="example">
    <Button>Default</Button>
    <Prism language="markup" code={example_button_default_code} />
  </div>
</div>
<!-- END EXAMPLE -->

<!-- START EXAMPLE -->
<div class="example-wrapper">
  <h3 class="content-title">Example :: Disabled</h3>
  <div class="example">
    <Button success disabled>Disabled</Button>
    <Button success>Active</Button>
    <Prism language="markup" code={example_button_disabled_code} />
  </div>
</div>
<!-- END EXAMPLE -->

<!-- START EXAMPLE -->
<div class="example-wrapper">
  <h3 class="content-title">Example :: Solid Colors</h3>
  <div class="example">
    <Button>Default</Button>
    <Button primary>Primary</Button>
    <Button secondary>Secondary</Button>
    <Button success>Success</Button>
    <Button danger>Danger</Button>
    <Button warning>Warning</Button>
    <Button info>Info</Button>
    <Button light>Light</Button>
    <Button dark>Dark</Button>
    <Prism language="markup" code={example_button_solid_code} />
  </div>
</div>
<!-- END EXAMPLE -->

<!-- START EXAMPLE -->
<div class="example-wrapper">
  <h3 class="content-title">Example :: Outlined Colors</h3>
  <div class="example">
    <Button>Default</Button>
    <Button primary outlined>Primary</Button>
    <Button secondary outlined>Secondary</Button>
    <Button success outlined>Success</Button>
    <Button danger outlined>Danger</Button>
    <Button warning outlined>Warning</Button>
    <Button info outlined>Info</Button>
    <Button light outlined>Light</Button>
    <Button dark outlined>Dark</Button>
    <Prism language="markup" code={example_button_outlined_code} />
  </div>
</div>
<!-- END EXAMPLE -->

<!-- START EXAMPLE -->
<div class="example-wrapper">
  <h3 class="content-title">Example :: Sizes</h3>
  <div class="example">
    <Button primary outlined small>Small</Button>
    <Button secondary outlined medium>Medium</Button>
    <Button success outlined>Default</Button>
    <Button danger outlined large>Large</Button>
    <Button warning small>Small</Button>
    <Button info medium>Medium</Button>
    <Button light>Default</Button>
    <Button dark large rounded>Large</Button>
    <Prism language="markup" code={example_button_sizes_code} />
  </div>
</div>
<!-- END EXAMPLE -->

<!-- START EXAMPLE -->
<div class="example-wrapper">
  <h3 class="content-title">Example :: Rounded</h3>
  <div class="example">
    <Button primary rounded>Primary</Button>
    <Button secondary rounded>Secondary</Button>
    <Button success rounded>Success</Button>
    <Button danger rounded>Danger</Button>
    <Button warning outlined rounded>Warning</Button>
    <Button info outlined rounded>Info</Button>
    <Button light outlined rounded>Light</Button>
    <Button dark outlined rounded>Dark</Button>
    <Prism language="markup" code={example_button_rounded_code} />
  </div>
</div>
<!-- END EXAMPLE -->

<!-- START EXAMPLE -->
<div class="example-wrapper">
  <h3 class="content-title">Example :: Block Level</h3>
  <div class="example">
    <Button primary block>Primary</Button>
    <Button secondary block>Secondary</Button>
    <Button success block>Success</Button>
    <Button danger block>Danger</Button>
    <Button warning outlined block>Warning</Button>
    <Button info outlined block>Info</Button>
    <Button light outlined block>Light</Button>
    <Button dark outlined block>Dark</Button>
    <Prism language="markup" code={example_button_block_code} />
  </div>
</div>
<!-- END EXAMPLE -->

<!-- START EXAMPLE -->
<div class="example-wrapper">
  <h3 class="content-title">Example :: Button Group</h3>
  <div class="example">
    <ButtonGroup>
      <Button>one</Button>
      <Button>two</Button>
      <Button>three</Button>
    </ButtonGroup>
    <Prism language="markup" code={example_button_groups_default_code} />
  </div>
</div>
<!-- END EXAMPLE -->

<!-- START EXAMPLE -->
<div class="example-wrapper">
  <h3 class="content-title">Example :: Button Group Solid Colors</h3>
  <div class="example">
    <ButtonGroup>
      <Button dark>one</Button>
      <Button dark>two</Button>
      <Button dark>three</Button>
    </ButtonGroup>
    <Prism language="markup" code={example_button_groups_dark_code} />
  </div>
</div>
<!-- END EXAMPLE -->

<!-- START EXAMPLE -->
<div class="example-wrapper">
  <h3 class="content-title">Example :: Button Group Outlined</h3>
  <div class="example">
    <ButtonGroup>
      <Button primary outlined>one</Button>
      <Button primary outlined>two</Button>
      <Button primary outlined>three</Button>
    </ButtonGroup>
    <Prism language="markup" code={example_button_groups_outlined_code} />
  </div>
</div>
<!-- END EXAMPLE -->

<!-- START EXAMPLE -->
<div class="example-wrapper">
  <h3 class="content-title">Example :: Button Group Sizes</h3>
  <div class="example">
    <ButtonGroup>
      <Button dark small>small</Button>
      <Button dark small>two</Button>
      <Button dark small>three</Button>
    </ButtonGroup>
    <br />
    <ButtonGroup>
      <Button dark medium>medium</Button>
      <Button dark medium>two</Button>
      <Button dark medium>three</Button>
    </ButtonGroup>
    <br />
    <ButtonGroup>
      <Button dark>default</Button>
      <Button dark>two</Button>
      <Button dark>three</Button>
    </ButtonGroup>
    <br />
    <ButtonGroup>
      <Button dark large>large</Button>
      <Button dark large>two</Button>
      <Button dark large>three</Button>
    </ButtonGroup>
    <Prism language="markup" code={example_button_groups_size_code} />
  </div>
</div>
<!-- END EXAMPLE -->

<!-- START EXAMPLE -->
<div class="example-wrapper">
  <h3 class="content-title">Example :: Button Group Icons</h3>
  <div class="example">
    <ButtonGroup>
      <Button dark>
        <i class="fa fa-bars" />
      </Button>
      <Button dark>
        <i class="fa fa-trash" />
      </Button>
      <Button dark>
        <i class="fa fa-close" />
      </Button>
    </ButtonGroup>
    <Prism language="markup" code={example_button_groups_icon_code} />
  </div>
</div>
<!-- END EXAMPLE -->

<!-- START EXAMPLE -->
<div class="example-wrapper">
  <h3 class="content-title">Example :: Button Group Icons + Label</h3>
  <div class="example">
    <ButtonGroup>
      <Button primary>
        <i class="fa fa-home" />
        Home
      </Button>
      <Button primary>
        <i class="fa fa-trash" />
        Delete
      </Button>
      <Button primary>
        <i class="fa fa-close" />
        Close
      </Button>
    </ButtonGroup>
    <Prism language="markup" code={example_button_groups_icon_label_code} />
  </div>
</div>
<!-- END EXAMPLE -->

<!-- START EXAMPLE -->
<div class="example-wrapper">
  <h3 class="content-title">
    Example :: Button Group Icons + Label + Disabled
  </h3>
  <div class="example">
    <ButtonGroup>
      <Button primary>
        <i class="fa fa-home" />
        Home
      </Button>
      <Button primary disabled>
        <i class="fa fa-trash" />
        Delete
      </Button>
      <Button primary>
        <i class="fa fa-close" />
        Close
      </Button>
    </ButtonGroup>
    <Prism
      language="markup"
      code={example_button_groups_icon_label_disabled_code} />
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
