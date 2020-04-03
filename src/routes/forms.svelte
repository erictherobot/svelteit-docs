<script>
  import Prism from '../components/PrismJS.svelte'
  import PropsTable from '../components/PropsTable.svelte'
  import Description from '../components/Description.svelte'

  import {
    Input,
    Select,
    Textarea,
    Table,
    Switch,
  } from '@erictherobot/svelteit'

  const propTypes = []

  // Example
  const example_forms_input_code = `
<script>
  import { Input } from '@erictherobot/svelteit'
</\script>

<Input placeholder="First Name" />
<Input placeholder="Last Name" />
`

  // Example
  const example_forms_input_labels_code = `
<script>
  import { Input } from '@erictherobot/svelteit'
</\script>

<Input placeholder="First Name" label="First Name" />
<Input placeholder="Last Name" label="Last Name" />
`

  // Example
  const example_forms_input_file_code = `
<script>
  import { Input } from '@erictherobot/svelteit'
</\script>

<Input type="file" label="Upload Resume" />
`

  // Example
  let a = 0
  const example_forms_input_range_code = `
<script>
  import { Input } from '@erictherobot/svelteit'
  let a = 0
</\script>

<Input type="number" bind:value={a} min={0} max={10} />
`

  // Example
  let pet = 'dog'
  const example_forms_input_bindings_code = `
<script>
  import { Input } from '@erictherobot/svelteit'
  let pet = "dog"
</\script>

<Input bind:value={pet} />
<p>{pet}</p>
`

  // Example
  const example_forms_select_code = `
<script>
  import { Select } from '@erictherobot/svelteit'
</\script>

<Select>
  <option value="" selected disabled hidden>Select Car</option>
  <option value="volvo">Volvo</option>
  <option value="saab">Saab</option>
  <option value="mercedes">Mercedes</option>
  <option value="audi">Audi</option>
</Select>
`

  // Example
  let numbers = ['one', 'two', 'three']
  const example_forms_select_dynamic_code = `
<script>
  import { Select } from '@erictherobot/svelteit'
  let numbers = ['one', 'two', 'three']
</\script>

<Select>
  <option value="" selected disabled hidden>Select Car</option>
  <option value="volvo">Volvo</option>
  <option value="saab">Saab</option>
  <option value="mercedes">Mercedes</option>
  <option value="audi">Audi</option>
</Select>
`

  // Example
  let things = ['one', 'two', 'three', 'four', 'five']
  const example_forms_select_multiple_code = `
<script>
  import { Select } from '@erictherobot/svelteit'
  let things = ['one','two','three','four','five','six','seven','eight','nine','ten']
</\script>

<Select bind:value={things} multiple>
  {#each things as thing}
    <option value={thing}>{thing}</option>
  {/each}
</Select>
`

  // Example
  const example_forms_textarea_code = `
<script>
  import { Textarea } from 'svelteit'
</\script>

<Textarea placeholder="First Name" label="First Name" />
`

  // Example
  let selected = null
  let words = [
    { id: 1, word: 'We' },
    { id: 2, word: 'Love' },
    { id: 3, word: 'Svelte' },
  ]
  const example_forms_radio_group_code = `
<script>
   import { Input } from 'svelteit'
   let selected = null
   let words = [
      {id: 1, word: 'We'},
      {id: 2, word: 'Love'},
      {id: 3, word: 'Svelte'}
   ]
</\script>

{#each words as w}
   <div>
      <input type="radio" bind:group={selected} value={w.id} id={w.id} />
      <label for={w.id}>{w.word}</label>
   </div>
{/each}

<p>{#if selected} Selected: {selected}  {/if}</p>
`

  // Example
  let choices = []
  let children = ['Sally', 'Mary', 'Eva', 'Zoe', 'Jane']
  const example_forms_checkboxes_code = `
<script>
  import { Input } from 'svelteit'
  let choices = []
  let children = ['Sally', 'Mary', 'Eva', 'Zoe', 'Jane']
</\script>

{#each children as child}
  <label>
    <input type="checkbox" bind:group={choices} value={child} />
    {child}
  </label>
{/each}

{#if choices.length !== 0}
  <p>Choices: {choices}</p>
{/if}
`

  // Example
  let featureToggle = false
  const example_forms_switch_code = `
<script>
  import { Switch } from 'svelteit'
  let featureToggle = false
</\script>

<Switch
  bind:checked={featureToggle}
  unCheckedColor={'lightgray'}
  checkedColor={'green'} />
`

  // Example
  let disabledToggle = false
  const example_forms_switch_disabled_code = `
<script>
  import { Switch } from 'svelteit'
  let disabledToggle = true
</\script>

<Switch bind:checked={disabledToggle} disabled />
`
</script>

<style>
  label > input {
    cursor: pointer;
    margin-left: 10px;
  }
</style>

<svelte:head>
  <title>Forms - Svelteit Docs</title>
</svelte:head>

<h2>Forms</h2>

<!-- START EXAMPLE -->
<div class="example-wrapper">
  <h3 class="content-title">Example :: Input</h3>
  <div class="example">
    <Input placeholder="First Name" />
    <Input placeholder="Last Name" />
    <Prism language="markup" code={example_forms_input_code} />
  </div>
</div>
<!-- END EXAMPLE -->

<!-- START EXAMPLE -->
<div class="example-wrapper">
  <h3 class="content-title">Example :: Input With Labels</h3>
  <div class="example">
    <Input placeholder="First Name" label="First Name" />
    <Input placeholder="Last Name" label="Last Name" />
    <Prism language="markup" code={example_forms_input_labels_code} />
  </div>
</div>
<!-- END EXAMPLE -->

<!-- START EXAMPLE -->
<div class="example-wrapper">
  <h3 class="content-title">Example :: Input File</h3>
  <div class="example">
    <Input type="file" label="Upload Resume" />
    <Prism language="markup" code={example_forms_input_file_code} />
  </div>
</div>
<!-- END EXAMPLE -->

<!-- START EXAMPLE -->
<div class="example-wrapper">
  <h3 class="content-title">Example :: Input With Range</h3>
  <div class="example">
    <Input type="number" bind:value={a} min={0} max={10} />
    <Prism language="markup" code={example_forms_input_range_code} />
  </div>
</div>
<!-- END EXAMPLE -->

<!-- START EXAMPLE -->
<div class="example-wrapper">
  <h3 class="content-title">Example :: Input With Bindings</h3>
  <div class="example">
    <Input bind:value={pet} />
    <p>{pet}</p>
    <Prism language="markup" code={example_forms_input_bindings_code} />
  </div>
</div>
<!-- END EXAMPLE -->

<!-- START EXAMPLE -->
<div class="example-wrapper">
  <h3 class="content-title">Example :: Select</h3>
  <div class="example">
    <Select primary>
      <option value="" selected disabled hidden>Select Car</option>
      <option value="volvo">Volvo</option>
      <option value="saab">Saab</option>
      <option value="mercedes">Mercedes</option>
      <option value="audi">Audi</option>
    </Select>
    <Prism language="markup" code={example_forms_select_code} />
  </div>
</div>
<!-- END EXAMPLE -->

<!-- START EXAMPLE -->
<div class="example-wrapper">
  <h3 class="content-title">Example :: Select With Data</h3>
  <div class="example">
    <Select bind:value={numbers}>
      <option value="" selected disabled hidden>Select Number</option>
      {#each numbers as number}
        <option value={number}>{number}</option>
      {/each}
    </Select>
    <Prism language="markup" code={example_forms_select_dynamic_code} />
  </div>
</div>
<!-- END EXAMPLE -->

<!-- START EXAMPLE -->
<div class="example-wrapper">
  <h3 class="content-title">Example :: Multiple Select & Data</h3>
  <div class="example">
    <Select bind:value={things} multiple>
      {#each things as thing}
        <option value={thing}>{thing}</option>
      {/each}
    </Select>
    <Prism language="markup" code={example_forms_select_multiple_code} />
  </div>
</div>
<!-- END EXAMPLE -->

<!-- START EXAMPLE -->
<div class="example-wrapper">
  <h3 class="content-title">Example :: Textarea</h3>
  <div class="example">
    <Textarea placeholder="This is a placeholder" />
    <Prism language="markup" code={example_forms_textarea_code} />
  </div>
</div>
<!-- END EXAMPLE -->

<!-- START EXAMPLE -->
<div class="example-wrapper">
  <h3 class="content-title">Example :: Radio Group</h3>
  <div class="example">
    {#each words as w}
      <label for={w.id}>
        <input type="radio" bind:group={selected} value={w.id} id={w.id} />
        {w.word}
      </label>
    {/each}

    <p>
      {#if selected}Selected: {selected}{/if}
    </p>
    <Prism language="markup" code={example_forms_radio_group_code} />
  </div>
</div>
<!-- END EXAMPLE -->

<!-- START EXAMPLE -->
<div class="example-wrapper">
  <h3 class="content-title">Example :: Checkboxes</h3>
  <div class="example">
    {#each children as child}
      <label>
        <input type="checkbox" bind:group={choices} value={child} />
        {child}
      </label>
    {/each}

    {#if choices.length !== 0}
      <p>Choices: {choices}</p>
    {/if}
    <Prism language="markup" code={example_forms_checkboxes_code} />
  </div>
</div>
<!-- END EXAMPLE -->

<!-- START EXAMPLE -->
<div class="example-wrapper">
  <h3 class="content-title">Example :: Switch (custom colors)</h3>
  <div class="example">
    <Switch
      bind:checked={featureToggle}
      unCheckedColor={'lightgray'}
      checkedColor={'green'} />
    <Prism language="markup" code={example_forms_switch_code} />
  </div>
</div>
<!-- END EXAMPLE -->

<!-- START EXAMPLE -->
<div class="example-wrapper">
  <h3 class="content-title">Example :: Disabled Switch</h3>
  <div class="example">
    <Switch
      bind:checked={disabledToggle}
      unCheckedColor={'lightgray'}
      checkedColor={'green'}
      disabled />
    <Prism language="markup" code={example_forms_switch_disabled_code} />
  </div>
</div>
<!-- END EXAMPLE -->

<PropsTable {propTypes} soon />

<Description
  title="Forms"
  description="An HTML form element is any element that may be used inside of a
  'Form' tag. These elements, along with the unique and standard attributes,
  give a form its structure as well as let it know what to do with the data
  input by users." />
