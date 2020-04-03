<script>
  import { Button, Input } from '@erictherobot/svelteit'

  import { getContext } from 'svelte'
  export let message
  export let hasForm = false
  export let onCancel = () => {}
  export let onOkay = () => {}

  const { close } = getContext('svelteit-modal')

  let value
  let onChange = () => {}

  function _onCancel() {
    onCancel()
    close()
  }

  function _onOkay() {
    onOkay(value)
    close()
  }

  $: onChange(value)
</script>

<style>
  .buttons {
    display: flex;
    justify-content: space-between;
  }
</style>

<h3>{message}</h3>

{#if hasForm}
  <Input type="text" bind:value />
{/if}

<div class="buttons">
  <Button on:click={_onCancel} title="Cancel" warning outlined />
  <Button on:click={_onOkay} title="OK" success outlined />
</div>
