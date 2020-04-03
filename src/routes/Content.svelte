<script>
  import { getContext } from 'svelte'
  import { fly } from 'svelte/transition'

  import { Button } from '@colorfuldots/svelteit'
  import Popup from './Popup.svelte'
  import PopupLong from './PopupLong.svelte'
  import Dialog from './Dialog.svelte'

  const { open } = getContext('svelteit-modal')

  const showPopup = () => {
    open(Popup, {
      message: 'BOOM! This is a basic modal',
      body: "I know... it's exciting",
    })
  }
  const showPopupLong = () => {
    open(PopupLong, { message: 'Some Title' })
  }
  const showPopupCustom = () => {
    open(
      Popup,
      {
        message: 'Custom',
        body:
          'Just like everything in life is negotiable - Everything here can be customized',
      },
      {
        styleBg: {
          background: 'rgba(145,0,255, 0.50)',
        },
        styleWindow: {
          border: '1px solid #ffffff',
          boxShadow: 'inset 0 0 0 2px white, 0 0 0 2px white',
          background: '#9100ff',
        },
        styleContent: {
          color: '#ffffff',
          fontStyle: 'italic',
        },
        transitionWindow: fly,
        transitionWindowProps: {
          y: 100,
        },
      }
    )
  }

  let name
  let status = 0

  const onCancel = text => {
    name = ''
    status = -1
  }

  const onOkay = text => {
    name = text
    status = 1
  }

  const showDialog = () => {
    open(
      Dialog,
      {
        message: "What's your first name?",
        hasForm: true,
        onCancel,
        onOkay,
      },
      {
        closeButton: false,
        closeOnEsc: false,
        closeOnOuterClick: false,
      }
    )
  }
</script>

<Button title={'Basic'} on:click={showPopup} primary outlined />
<Button title={'Scrollable'} on:click={showPopupLong} primary outlined />
<Button title={'Custom'} on:click={showPopupCustom} primary outlined />
<Button title={'Dialog'} on:click={showDialog} primary outlined />

{#if status === 1}
  <h3>Hi, {name}</h3>
{:else if status === -1}
  <h3>Dialog was canceled</h3>
{/if}
