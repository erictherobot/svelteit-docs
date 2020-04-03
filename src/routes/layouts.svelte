<script>
  import Prism from '../components/PrismJS.svelte'
  import PropsTable from '../components/PropsTable.svelte'
  import Description from '../components/Description.svelte'

  import { Container, Row, Column, Table } from '@colorfuldots/svelteit'

  const propTypes = [
    {
      name: 'full',
      type: 'bool',
      isRequired: false,
      defaultValue: false,
      description: 'Adds full-width class to container for full-width layouts',
    },
  ]

  // Example Alert Default
  const example_grid_full_code = `
<script>
  import { Container, Row, Column } from '@colorfuldots/svelteit'
</\script>

<Container>
  <Row>
    <Column class="col">col</Column>
    <Column class="col">col</Column>
    <Column class="col">col</Column>
    <Column class="col">col</Column>
    <Column class="col">col</Column>
    <Column class="col">col</Column>
    <Column class="col">col</Column>
    <Column class="col">col</Column>
    <Column class="col">col</Column>
    <Column class="col">col</Column>
    <Column class="col">col</Column>
    <Column class="col">col</Column>
  </Row>
  <Row>
    <Column class="col-2">col-2</Column>
    <Column class="col-2">col-2</Column>
    <Column class="col-2">col-2</Column>
    <Column class="col-2">col-2</Column>
    <Column class="col-2">col-2</Column>
    <Column class="col-2">col-2</Column>
  </Row>
  <Row>
    <Column class="col-3">col-3</Column>
    <Column class="col-3">col-3</Column>
    <Column class="col-3">col-3</Column>
    <Column class="col-3">col-3</Column>
  </Row>
  <Row>
    <Column class="col-4">col-4</Column>
    <Column class="col-4">col-4</Column>
    <Column class="col-4">col-4</Column>
  </Row>
  <Row>
    <Column class="col-2">col-2</Column>
    <Column class="col-5">col-5</Column>
    <Column class="col-5">col-5</Column>
  </Row>
  <Row>
    <Column class="col-6">col-6</Column>
    <Column class="col-6">col-6</Column>
  </Row>
  <Row>
    <Column class="col">col</Column>
  </Row>
</Container>
`

  // Example Alert Default
  const example_grid_two_col_layout_code = `
<script>
  import { Container, Row, Column } from '@colorfuldots/svelteit'
</\script>

<Container>
  <Row>
    <Column class="col">Header</Column>
  </Row>
  <Row>
    <Column class="col-sm-4">Side Bar</Column>
    <Column class="col-sm-8">Content</Column>
  </Row>
  <Row>
    <Column class="col">Footer</Column>
  </Row>
</Container>
`

  // Example Alert Default
  const example_grid_three_col_layout_code = `
<script>
  import { Container, Row, Column } from '@colorfuldots/svelteit'
</\script>

<Container>
  <Row>
    <Column class="col">Header</Column>
  </Row>
  <Row>
    <Column class="col-sm-2">Side Bar</Column>
    <Column class="col-sm-8">Content</Column>
    <Column class="col-sm-2">
      Side Bar with long content and more things could be inside of this it
      all depends on what you want to put into this box right here.
    </Column>
  </Row>
  <Row>
    <Column class="col">Footer</Column>
  </Row>
</Container>
`
</script>

<style>
  .example-wrapper
    .example
    :global(.col, .col-2, .col-3, .col-4, .col-5, .col-6, .col-sm-2, .col-sm-4, .col-sm-8) {
    background-color: #e5d7ff;
    border: 1px dotted #9b70ff;
    text-align: center;
    padding: 10px;
  }
</style>

<svelte:head>
  <title>Layouts & Grids - Svelteit Docs</title>
</svelte:head>

<h2>Layouts & Grids</h2>

<!-- START EXAMPLE -->
<div class="example-wrapper">
  <h3 class="content-title">Example :: 12 Column Responsive Grid</h3>
  <div class="example">
    <Container>
      <Row>
        <Column class="col">col</Column>
        <Column class="col">col</Column>
        <Column class="col">col</Column>
        <Column class="col">col</Column>
        <Column class="col">col</Column>
        <Column class="col">col</Column>
        <Column class="col">col</Column>
        <Column class="col">col</Column>
        <Column class="col">col</Column>
        <Column class="col">col</Column>
        <Column class="col">col</Column>
        <Column class="col">col</Column>
      </Row>
      <Row>
        <Column class="col-2">col-2</Column>
        <Column class="col-2">col-2</Column>
        <Column class="col-2">col-2</Column>
        <Column class="col-2">col-2</Column>
        <Column class="col-2">col-2</Column>
        <Column class="col-2">col-2</Column>
      </Row>
      <Row>
        <Column class="col-3">col-3</Column>
        <Column class="col-3">col-3</Column>
        <Column class="col-3">col-3</Column>
        <Column class="col-3">col-3</Column>
      </Row>
      <Row>
        <Column class="col-4">col-4</Column>
        <Column class="col-4">col-4</Column>
        <Column class="col-4">col-4</Column>
      </Row>
      <Row>
        <Column class="col-2">col-2</Column>
        <Column class="col-5">col-5</Column>
        <Column class="col-5">col-5</Column>
      </Row>
      <Row>
        <Column class="col-6">col-6</Column>
        <Column class="col-6">col-6</Column>
      </Row>
      <Row>
        <Column class="col">col</Column>
      </Row>
    </Container>
    <Prism language="markup" code={example_grid_full_code} />
  </div>
</div>
<!-- END EXAMPLE -->

<!-- START EXAMPLE -->
<div class="example-wrapper">
  <h3 class="content-title">Example :: 2 Column Layout</h3>
  <div class="example">
    <Container>
      <Row>
        <Column class="col">Header</Column>
      </Row>
      <Row>
        <Column class="col-sm-4">Side Bar</Column>
        <Column class="col-sm-8">Content</Column>
      </Row>
      <Row>
        <Column class="col">Footer</Column>
      </Row>
    </Container>
    <Prism language="markup" code={example_grid_two_col_layout_code} />
  </div>
</div>
<!-- END EXAMPLE -->

<!-- START EXAMPLE -->
<div class="example-wrapper">
  <h3 class="content-title">Example :: 3 Column Layout</h3>
  <div class="example">
    <Container>
      <Row>
        <Column class="col">Header</Column>
      </Row>
      <Row>
        <Column class="col-sm-2">Side Bar</Column>
        <Column class="col-sm-8">Content</Column>
        <Column class="col-sm-2">
          Side Bar with long content and more things could be inside of this it
          all depends on what you want to put into this box right here.
        </Column>
      </Row>
      <Row>
        <Column class="col">Footer</Column>
      </Row>
    </Container>
    <Prism language="markup" code={example_grid_three_col_layout_code} />
  </div>
</div>
<!-- END EXAMPLE -->

<PropsTable {propTypes} />

<Description
  title="Layouts &amp; Grids"
  description="CSS grid layout or CSS grid is a technique in Cascading Style
  Sheets that allows web developers to create complex responsive web design
  layouts more easily and consistently across browsers. There have been other
  methods for controlling web page layout methods, such as tables, the box
  model, and CSS flex box." />
