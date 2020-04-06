<script>
  import { Select, Button, Input } from '@colorfuldots/svelteit'

  import { getContext } from 'svelte'
  export let message
  export let hasForm = false
  export let onCancel = () => {}
  export let onOkay = () => {}

  const { close } = getContext('svelteit-modal')

  //   let value
  let onChange = () => {}

  function _onCancel() {
    onCancel()
    close()
  }

  function _onOkay() {
    onOkay(answer)
    close()
  }
  let questions = [
    { id: 1, text: `What is your favorite movie?` },
    { id: 2, text: `What do you do for fun?` },
    {
      id: 3,
      text: `What color is the sky?`,
    },
  ]

  let selected

  let answer = ''

  function handleSubmit() {
    alert(`Your answer: ${answer}`)
  }
</script>

<style>
  .buttons {
    display: flex;
    justify-content: space-between;
  }
</style>

<h3>{message}</h3>

{#if hasForm}
  <form on:submit|preventDefault={handleSubmit}>
    <Select bind:value={selected} on:change={() => (answer = '')}>
      {#each questions as question}
        <option value={question}>{question.text}</option>
      {/each}
    </Select>

    <Input bind:value={answer} />

    <div class="buttons">
      <Button on:click={_onCancel} warning outlined>Cancel</Button>
      <Button on:click={_onOkay} success disabled={!answer} type="submit">
        SUBMIT
      </Button>
    </div>
  </form>
{/if}
