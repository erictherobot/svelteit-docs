<script>
  import Prism from '../components/PrismJS.svelte'
  import PropsTable from '../components/PropsTable.svelte'
  import Description from '../components/Description.svelte'
  import { Modal } from '@colorfuldots/svelteit'
  import ModalContent from '../Modals/ModalContent.svelte'

  const propTypes = [
    {
      name: 'title',
      type: 'string',
      isRequired: false,
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
      defaultValue: null,
      description: 'Sets button color',
    },
    {
      name: 'outlined',
      type: 'bool',
      isRequired: false,
      defaultValue: null,
      description: 'Sets an outline to the button',
    },
    {
      name: 'small, medium, large',
      type: 'bool',
      isRequired: false,
      defaultValue: null,
      description: 'Sets the size of the button',
    },
    {
      name: 'rounded',
      type: 'bool',
      isRequired: false,
      defaultValue: null,
      description: 'Adds rounded corners to the button',
    },
    {
      name: 'block',
      type: 'bool',
      isRequired: false,
      defaultValue: null,
      description: 'Adds block-level / full-width to button',
    },
  ]

  // Example Alert Default
  const example_navigation_default_code = `
<script>
  import { Modal } from '@colorfuldots/svelteit'
</\script>

<Modal />
`
</script>

<svelte:head>
  <title>Modals - Svelteit Docs</title>
</svelte:head>

<h2>Modals</h2>

<!-- START EXAMPLE -->
<div class="example-wrapper">
  <h3 class="content-title">Examples :: Modals</h3>
  <div class="example">
    <Modal>
      <ModalContent />
    </Modal>
    <Prism language="markup" code={example_navigation_default_code} />
  </div>
</div>
<!-- END EXAMPLE -->

<PropsTable {propTypes} soon />

<Description
  title="Modals"
  description="In user interface design for computer applications, a modal
  window is a graphical control element subordinate to an application's main
  window. It creates a mode that disables the main window but keeps it visible,
  with the modal window as a child window in front of it." />
