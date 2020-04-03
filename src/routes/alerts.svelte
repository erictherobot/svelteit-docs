<script>
  import Prism from '../components/PrismJS.svelte'
  import PropsTable from '../components/PropsTable.svelte'
  import Description from '../components/Description.svelte'

  import { Alert, Button, Table } from '@colorfuldots/svelteit'

  const propTypes = [
    {
      name: 'dismissible',
      type: 'bool',
      isRequired: false,
      defaultValue: false,
      description: 'Adds button and allows the alert to be dismissed',
    },
    {
      name: 'primary, secondary, success, danger, warning, info, light, dark',
      type: 'bool',
      isRequired: false,
      defaultValue: 'light',
      description: 'Sets alert color',
    },
    {
      name: 'outlined',
      type: 'bool',
      isRequired: false,
      defaultValue: null,
      description: 'Sets an outline to the alert',
    },
    {
      name: 'rounded',
      type: 'bool',
      isRequired: false,
      defaultValue: null,
      description: 'Adds rounded corners to the alert',
    },
  ]

  // Example
  const example_alert_default_code = `
<script>
  import { Alert } from '@colorfuldots/svelteit'
</\script>

<Alert>Hello, I am an alert!</Alert>
`

  // Example
  const example_alert_dismissible_code = `
<script>
  import { Alert } from '@colorfuldots/svelteit'
</\script>

<Alert dismissible>Please remember to close this after you've read it!</Alert>
`

  // Example
  const example_alert_content_code = `
<script>
  import { Alert , Button} from '@colorfuldots/svelteit'
</\script>

<Alert dismissible success rounded>
  <h2>This is the best title!</h2>
  <p>
    Add more content as much as you want. Add more content as much as you
    want. Add more content as much as you want. Add more content as much as
    you want. Add more content as much as you want.
  </p>
  <Button light outlined title="Button" />
</Alert>
`

  // Example
  const example_alert_colors_code = `
<script>
  import { Alert } from '@colorfuldots/svelteit'
</\script>

<Alert primary dismissible>
   This is dismissible and it has a color prop
</Alert>

<Alert secondary dismissible>
   This is dismissible and it has a color prop
</Alert>

<Alert success dismissible>
   This is dismissible and it has a color prop
</Alert>

<Alert danger dismissible>
   This is dismissible and it has a color prop
</Alert>

<Alert warning dismissible>
   This is dismissible and it has a color prop
</Alert>

<Alert info dismissible>
   This is dismissible and it has a color prop
</Alert>

<Alert light dismissible>
   This is dismissible and it has a color prop
</Alert>

<Alert dark dismissible>
   This is dismissible and it has a color prop
</Alert>
`
  // Example
  const example_alert_outlined_colors_code = `
<script>
  import { Alert } from '@colorfuldots/svelteit'
</\script>

<Alert primary dismissible outlined>
  This is dismissible and it has a color prop
</Alert>

<Alert secondary dismissible outlined>
  This is dismissible and it has a color prop
</Alert>

<Alert success dismissible outlined>
  This is dismissible and it has a color prop
</Alert>

<Alert danger dismissible outlined>
  This is dismissible and it has a color prop
</Alert>

<Alert warning dismissible outlined>
  This is dismissible and it has a color prop
</Alert>

<Alert info dismissible outlined>
  This is dismissible and it has a color prop
</Alert>

<Alert light dismissible outlined>
  This is dismissible and it has a color prop
</Alert>

<Alert dark dismissible outlined>
  This is dismissible and it has a color prop
</Alert>
`
</script>

<svelte:head>
  <title>Alerts - Svelteit Docs</title>
</svelte:head>

<h2>Alerts</h2>

<!-- START EXAMPLE -->
<div class="example-wrapper">
  <h3 class="content-title">Example :: Default</h3>
  <div class="example">
    <Alert>Hello, I am an alert!</Alert>
    <Prism language="markup" code={example_alert_default_code} />
  </div>
</div>
<!-- END EXAMPLE -->

<!-- START EXAMPLE -->
<div class="example-wrapper">
  <h3 class="content-title">Example :: Dismissible</h3>
  <div class="example">
    <Alert dismissible>
      <strong>IMPORTANT:</strong>
      Please remember to close this after you've read it!
    </Alert>
    <Prism language="markup" code={example_alert_dismissible_code} />
  </div>
</div>
<!-- END EXAMPLE -->

<!-- START EXAMPLE -->
<div class="example-wrapper">
  <h3 class="content-title">Example :: Content + Rounded</h3>
  <div class="example">
    <Alert dismissible success rounded>
      <h2>This is the best title!</h2>
      <p>
        Add more content as much as you want. Add more content as much as you
        want. Add more content as much as you want. Add more content as much as
        you want. Add more content as much as you want.
      </p>
      <Button light outlined title="Button" />
    </Alert>
    <Prism language="markup" code={example_alert_content_code} />
  </div>
</div>
<!-- END EXAMPLE -->

<!-- START EXAMPLE -->
<div class="example-wrapper">
  <h3 class="content-title">Example :: Solid Colors</h3>
  <div class="example">
    <Alert primary dismissible>
      This is dismissible and it has a color prop
    </Alert>
    <br />
    <Alert secondary dismissible>
      This is dismissible and it has a color prop
    </Alert>
    <br />
    <Alert success dismissible>
      This is dismissible and it has a color prop
    </Alert>
    <br />
    <Alert danger dismissible>
      This is dismissible and it has a color prop
    </Alert>
    <br />
    <Alert warning dismissible>
      This is dismissible and it has a color prop
    </Alert>
    <br />
    <Alert info dismissible>This is dismissible and it has a color prop</Alert>
    <br />
    <Alert light dismissible>This is dismissible and it has a color prop</Alert>
    <br />
    <Alert dark dismissible>This is dismissible and it has a color prop</Alert>
    <Prism language="markup" code={example_alert_colors_code} />
  </div>
</div>
<!-- END EXAMPLE -->

<!-- START EXAMPLE -->
<div class="example-wrapper">
  <h3 class="content-title">Example :: Outlined Colors</h3>
  <div class="example">
    <Alert primary dismissible outlined rounded>
      This is dismissible with color & outline props
    </Alert>
    <br />
    <Alert secondary dismissible outlined>
      This is dismissible with color & outline props
    </Alert>
    <br />
    <Alert success dismissible outlined>
      This is dismissible with color & outline props
    </Alert>
    <br />
    <Alert danger dismissible outlined>
      This is dismissible with color & outline props
    </Alert>
    <br />
    <Alert warning dismissible outlined>
      This is dismissible with color & outline props
    </Alert>
    <br />
    <Alert info dismissible outlined>
      This is dismissible with color & outline props
    </Alert>
    <br />
    <Alert light dismissible outlined>
      This is dismissible with color & outline props
    </Alert>
    <br />
    <Alert dark dismissible outlined>
      This is dismissible with color & outline props
    </Alert>
    <Prism language="markup" code={example_alert_outlined_colors_code} />
  </div>
</div>
<!-- END EXAMPLE -->

<PropsTable {propTypes} />

<Description
  title="Alerts"
  description="An alert is a box that appears on the display screen to give you
  information or to warn you about a potentially damaging operation. For
  example, it might warn you that the system is deleting one or more files.
  Unlike dialog boxes, alert boxes do not require any user input. However, you
  need to acknowledge the alert box by pressing the Enter key or clicking a
  mouse button to make it go away." />
