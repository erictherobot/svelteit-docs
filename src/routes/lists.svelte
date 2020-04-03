<script>
  import Prism from '../components/PrismJS.svelte'
  import PropsTable from '../components/PropsTable.svelte'
  import Description from '../components/Description.svelte'

  import { List, Table } from '@erictherobot/svelteit'

  let fruitsArray = ['Apple', 'Orange', 'Plum']
  let objectThings = { fruit: 'Apple', kind: 'Fuji', color: 'Red' }
  const propTypes = [
    {
      name: 'itemsArray',
      type: 'Array',
      isRequired: true,
      defaultValue: null,
      description: 'Adds your data array to the list',
    },
    {
      name: 'itemsObject',
      type: 'Object',
      isRequired: true,
      defaultValue: null,
      description: 'Adds your data object to the list',
    },
  ]

  // Example List Array
  const example_list_array_code = `
<script>
    import { List } from '@erictherobot/svelteit'
    let fruitsArray = ["Apple", "Orange", "Plum"];
</\script>

<List itemsArray={fruitsArray} />
`

  // Example List Object
  const example_list_object_code = `
<script>
    import { List } from '@erictherobot/svelteit'
    let objectThings = {fruit:"Apple", kind:"Fuji", color:"Red"};
</\script>

<List itemsObject={objectThings} />
`
</script>

<svelte:head>
  <title>Lists - Svelteit Docs</title>
</svelte:head>

<h2>Lists</h2>

<!-- START EXAMPLE -->
<div class="example-wrapper">
  <h3 class="content-title">Example :: List With Array</h3>
  <div class="example">
    <List itemsArray={fruitsArray} />
    <Prism language="markup" code={example_list_array_code} />
  </div>
</div>
<!-- END EXAMPLE -->

<!-- START EXAMPLE -->
<div class="example-wrapper">
  <h3 class="content-title">Example :: List With Object</h3>
  <div class="example">
    <List itemsObject={objectThings} />
    <Prism language="markup" code={example_list_object_code} />
  </div>
</div>
<!-- END EXAMPLE -->

<PropsTable {propTypes} />
<Description
  title="Lists"
  description="Lists are powerful tools to group similar elements, and lists
  give visitors to your site an easy way to zoom in on groups of information.
  Just about anything fits in a list, from sets of instructions to collections
  of links. " />
