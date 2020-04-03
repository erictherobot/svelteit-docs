<script>
  import Prism from '../components/PrismJS.svelte'
  import { Navigation, Table } from '@erictherobot/svelteit'

  const propTypes = []

  // Example Alert Default
  const example_navigation_default_code = `
<script>
    import { Navigation } from '@erictherobot/svelteit'
</\script>

<Navigation />
`
</script>

<svelte:head>
  <title>Collapsible Panels - Svelteit Docs</title>
</svelte:head>

<h2>Collapsible Panels</h2>

<!-- START EXAMPLE -->
<div id="example_navigation_default">
  <h3>Example :: Default</h3>
  <div class="example">
    <Navigation />
    <Prism language="markup" code={example_navigation_default_code} />
  </div>
</div>
<!-- END EXAMPLE -->

<h3>Props</h3>

<Table bordered>
  <thead>
    <tr>
      <th style="width: 200px;">Prop Name</th>
      <th>Type</th>
      <th>Is Required</th>
      <th>Default Value</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody class="properties">
    {#each propTypes as p}
      <tr>
        <td>{p.name}</td>
        <td class="type">
          <span>{p.type}</span>
        </td>
        <td class="isRequired">
          <span>{p.isRequired}</span>
        </td>
        <td class="defaultValue">
          <span>{p.defaultValue}</span>
        </td>
        <td>{p.description}</td>
      </tr>
    {/each}
  </tbody>
</Table>

<h3>Description</h3>

<p>
  An navigation element represents a section of a page whose purpose is to
  provide navigation links, either within the current document or to other
  documents. Common examples of navigation sections are menus, tables of
  contents, and indexes.
</p>
