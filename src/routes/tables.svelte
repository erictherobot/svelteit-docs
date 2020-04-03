<script>
  import Prism from '../components/PrismJS.svelte'
  import PropsTable from '../components/PropsTable.svelte'
  import Description from '../components/Description.svelte'

  import { Table } from '@erictherobot/svelteit'

  const propTypes = [
    {
      name: 'borderless',
      type: 'bool',
      isRequired: false,
      defaultValue: false,
      description: 'Table has no borders inside or outside',
    },
    {
      name: 'bordered',
      type: 'bool',
      isRequired: false,
      defaultValue: false,
      description: 'Table has borders inside and outside',
    },
    {
      name: 'primary, secondary, success, danger, warning, info, light, dark',
      type: 'bool',
      isRequired: false,
      defaultValue: null,
      description: 'Sets table color',
    },
    {
      name: 'rounded',
      type: 'bool',
      isRequired: false,
      defaultValue: null,
      description: 'Sets a rounded border to the table',
    },
    {
      name: 'hoverable',
      type: 'bool',
      isRequired: false,
      defaultValue: false,
      description: 'Adds mouse hovering / highlighting over each table row',
    },
    {
      name: 'striped',
      type: 'bool',
      isRequired: false,
      defaultValue: false,
      description: 'Adds odd / even zebra stripes to table rows',
    },
    {
      name: 'responsive',
      type: 'bool',
      isRequired: false,
      defaultValue: false,
      description:
        'Allows table to be properly contained on smaller screen sizes',
    },
  ]

  // Example Table Borderless
  const example_table_borderless_code = `
<script>
  import { Table } from '@erictherobot/svelteit'
</\script>

<Table borderless>
  <thead>
    <tr>
      <th>Company</th>
      <th>Contact</th>
      <th>Country</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Alfreds Futterkiste</td>
      <td>Maria Anders</td>
      <td>Germany</td>
    </tr>
    <tr>
      <td>Berglunds snabbköp</td>
      <td>Christina Berglund</td>
      <td>Sweden</td>
    </tr>
  </tbody>
</Table>
`

  // Example Table Bordered
  const example_table_bordered_code = `
<script>
  import { Table } from '@erictherobot/svelteit'
</\script>

<Table bordered>
  <thead>
    <tr>
      <th>Company</th>
      <th>Contact</th>
      <th>Country</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Alfreds Futterkiste</td>
      <td>Maria Anders</td>
      <td>Germany</td>
    </tr>
    <tr>
      <td>Berglunds snabbköp</td>
      <td>Christina Berglund</td>
      <td>Sweden</td>
    </tr>
  </tbody>
</Table>
`

  // Example Table Bordered & Rounded
  const example_table_bordered_rounded_code = `
<script>
  import { Table } from '@erictherobot/svelteit'
</\script>

<Table bordered rounded>
  <thead>
    <tr>
      <th>Company</th>
      <th>Contact</th>
      <th>Country</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Alfreds Futterkiste</td>
      <td>Maria Anders</td>
      <td>Germany</td>
    </tr>
    <tr>
      <td>Berglunds snabbköp</td>
      <td>Christina Berglund</td>
      <td>Sweden</td>
    </tr>
  </tbody>
</Table>
`

  // Example Table Hoverable
  const example_table_hoverable_code = `
<script>
  import { Table } from '@erictherobot/svelteit'
</\script>

<Table hoverable>
  <thead>
    <tr>
      <th>Company</th>
      <th>Contact</th>
      <th>Country</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Alfreds Futterkiste</td>
      <td>Maria Anders</td>
      <td>Germany</td>
    </tr>
    <tr>
      <td>Berglunds snabbköp</td>
      <td>Christina Berglund</td>
      <td>Sweden</td>
    </tr>
    <tr>
      <td>Alfreds Futterkiste</td>
      <td>Maria Anders</td>
      <td>Germany</td>
    </tr>
    <tr>
      <td>Berglunds snabbköp</td>
      <td>Christina Berglund</td>
      <td>Sweden</td>
    </tr>
  </tbody>
</Table>
`

  // Example Table Striped
  const example_table_striped_code = `
<script>
  import { Table } from '@erictherobot/svelteit'
</\script>

<Table striped>
  <thead>
    <tr>
      <th>Company</th>
      <th>Contact</th>
      <th>Country</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Alfreds Futterkiste</td>
      <td>Maria Anders</td>
      <td>Germany</td>
    </tr>
    <tr>
      <td>Berglunds snabbköp</td>
      <td>Christina Berglund</td>
      <td>Sweden</td>
    </tr>
    <tr>
      <td>Alfreds Futterkiste</td>
      <td>Maria Anders</td>
      <td>Germany</td>
    </tr>
    <tr>
      <td>Berglunds snabbköp</td>
      <td>Christina Berglund</td>
      <td>Sweden</td>
    </tr>
    <tr>
      <td>Alfreds Futterkiste</td>
      <td>Maria Anders</td>
      <td>Germany</td>
    </tr>
    <tr>
      <td>Berglunds snabbköp</td>
      <td>Christina Berglund</td>
      <td>Sweden</td>
    </tr>
  </tbody>
</Table>
`
  // Example Table Colors
  const example_table_colors_code = `
<script>
  import { Table } from '@erictherobot/svelteit'
</\script>

<Table primary>
  <thead>
    <tr>
      <th>Company</th>
      <th>Contact</th>
      <th>Country</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Alfreds Futterkiste</td>
      <td>Maria Anders</td>
      <td>Germany</td>
    </tr>
    <tr>
      <td>Berglunds snabbköp</td>
      <td>Christina Berglund</td>
      <td>Sweden</td>
    </tr>
  </tbody>
</Table>
`

  // Example Table Responsive
  const example_table_responsive_code = `
<script>
  import { Table } from '@erictherobot/svelteit'
</\script>

<Table success responsive>
  <thead>
    <tr>
      <th>Company</th>
      <th>Contact</th>
      <th>Country</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Alfreds Futterkiste</td>
      <td>Maria Anders</td>
      <td>Germany</td>
    </tr>
    <tr>
      <td>Berglunds snabbköp</td>
      <td>Christina Berglund</td>
      <td>Sweden</td>
    </tr>
    <tr>
      <td>Alfreds Futterkiste</td>
      <td>Maria Anders</td>
      <td>Germany</td>
    </tr>
    <tr>
      <td>Berglunds snabbköp</td>
      <td>Christina Berglund</td>
      <td>Sweden</td>
    </tr>
  </tbody>
</Table>
`

  // Example Table Kitchen Sink
  const example_table_kitchen_sink_code = `
<script>
  import { Table } from '@erictherobot/svelteit'
</\script>

<Table dark hoverable bordered rounded>
  <thead>
    <tr>
      <th>Company</th>
      <th>Contact</th>
      <th>Country</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Alfreds Futterkiste</td>
      <td>Maria Anders</td>
      <td>Germany</td>
    </tr>
    <tr>
      <td>Berglunds snabbköp</td>
      <td>Christina Berglund</td>
      <td>Sweden</td>
    </tr>
    <tr>
      <td>Alfreds Futterkiste</td>
      <td>Maria Anders</td>
      <td>Germany</td>
    </tr>
    <tr>
      <td>Berglunds snabbköp</td>
      <td>Christina Berglund</td>
      <td>Sweden</td>
    </tr>
  </tbody>
</Table>
`
</script>

<svelte:head>
  <title>Tables - Svelteit Docs</title>
</svelte:head>

<h2>Tables</h2>

<!-- START EXAMPLE -->
<div class="example-wrapper">
  <h3 class="content-title">Example :: Borderless</h3>
  <div class="example">
    <Table borderless>
      <thead>
        <tr>
          <th>Company</th>
          <th>Contact</th>
          <th>Country</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Alfreds Futterkiste</td>
          <td>Maria Anders</td>
          <td>Germany</td>
        </tr>
        <tr>
          <td>Berglunds snabbköp</td>
          <td>Christina Berglund</td>
          <td>Sweden</td>
        </tr>
      </tbody>
    </Table>
    <Prism language="markup" code={example_table_borderless_code} />
  </div>
</div>
<!-- END EXAMPLE -->

<!-- START EXAMPLE -->
<div class="example-wrapper">
  <h3 class="content-title">Example :: Bordered</h3>
  <div class="example">
    <Table bordered>
      <thead>
        <tr>
          <th>Company</th>
          <th>Contact</th>
          <th>Country</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Alfreds Futterkiste</td>
          <td>Maria Anders</td>
          <td>Germany</td>
        </tr>
        <tr>
          <td>Berglunds snabbköp</td>
          <td>Christina Berglund</td>
          <td>Sweden</td>
        </tr>
      </tbody>
    </Table>
    <Prism language="markup" code={example_table_bordered_code} />
  </div>
</div>
<!-- END EXAMPLE -->

<!-- START EXAMPLE -->
<div class="example-wrapper">
  <h3 class="content-title">Example :: Bordered & Rounded</h3>
  <div class="example">
    <Table bordered rounded>
      <thead>
        <tr>
          <th>Company</th>
          <th>Contact</th>
          <th>Country</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Alfreds Futterkiste</td>
          <td>Maria Anders</td>
          <td>Germany</td>
        </tr>
        <tr>
          <td>Berglunds snabbköp</td>
          <td>Christina Berglund</td>
          <td>Sweden</td>
        </tr>
      </tbody>
    </Table>
    <Prism language="markup" code={example_table_bordered_rounded_code} />
  </div>
</div>
<!-- END EXAMPLE -->

<!-- START EXAMPLE -->
<div class="example-wrapper">
  <h3 class="content-title">Example :: Hoverable</h3>
  <div class="example">
    <Table hoverable>
      <thead>
        <tr>
          <th>Company</th>
          <th>Contact</th>
          <th>Country</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Alfreds Futterkiste</td>
          <td>Maria Anders</td>
          <td>Germany</td>
        </tr>
        <tr>
          <td>Berglunds snabbköp</td>
          <td>Christina Berglund</td>
          <td>Sweden</td>
        </tr>
        <tr>
          <td>Love</td>
          <td>Always</td>
          <td>Wins</td>
        </tr>
      </tbody>
    </Table>
    <Prism language="markup" code={example_table_hoverable_code} />
  </div>
</div>
<!-- END EXAMPLE -->

<!-- START EXAMPLE -->
<div class="example-wrapper">
  <h3 class="content-title">Example :: Striped</h3>
  <div class="example">
    <Table striped>
      <thead>
        <tr>
          <th>Company</th>
          <th>Contact</th>
          <th>Country</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Alfreds Futterkiste</td>
          <td>Maria Anders</td>
          <td>Germany</td>
        </tr>
        <tr>
          <td>Berglunds snabbköp</td>
          <td>Christina Berglund</td>
          <td>Sweden</td>
        </tr>
        <tr>
          <td>Alfreds Futterkiste</td>
          <td>Maria Anders</td>
          <td>Germany</td>
        </tr>
        <tr>
          <td>Berglunds snabbköp</td>
          <td>Christina Berglund</td>
          <td>Sweden</td>
        </tr>
        <tr>
          <td>Alfreds Futterkiste</td>
          <td>Maria Anders</td>
          <td>Germany</td>
        </tr>
        <tr>
          <td>Berglunds snabbköp</td>
          <td>Christina Berglund</td>
          <td>Sweden</td>
        </tr>
      </tbody>
    </Table>
    <Prism language="markup" code={example_table_striped_code} />
  </div>
</div>
<!-- END EXAMPLE -->

<!-- START EXAMPLE -->
<div class="example-wrapper">
  <h3 class="content-title">Example :: Table Colors (Primary)</h3>
  <div class="example">
    <Table primary>
      <thead>
        <tr>
          <th>Company</th>
          <th>Contact</th>
          <th>Country</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Alfreds Futterkiste</td>
          <td>Maria Anders</td>
          <td>Germany</td>
        </tr>
        <tr>
          <td>Berglunds snabbköp</td>
          <td>Christina Berglund</td>
          <td>Sweden</td>
        </tr>
        <tr>
          <td>Alfreds Futterkiste</td>
          <td>Maria Anders</td>
          <td>Germany</td>
        </tr>
      </tbody>
    </Table>
    <Prism language="markup" code={example_table_colors_code} />
  </div>
</div>
<!-- END EXAMPLE -->

<!-- START EXAMPLE -->
<div class="example-wrapper">
  <h3 class="content-title">Example :: Table Responsive</h3>
  <div class="example">
    <Table success responsive nowrap>
      <thead>
        <tr>
          <th>Company</th>
          <th>Contact</th>
          <th>Country</th>
          <th>What</th>
          <th>Oh</th>
          <th>Say</th>
          <th>Like</th>
          <th>GMO</th>
          <th>Numbers</th>
          <th>Things</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Alfreds Futterkiste</td>
          <td>Maria Anders</td>
          <td>Germany</td>
          <td>Fun</td>
          <td>Cool</td>
          <td>Yay</td>
          <td>Wow</td>
          <td>OMG</td>
          <td>1,000,000,000,000</td>
          <td>Chickens, Dogs, Frogs, Cats, Rats, Hats, Mats, This, That</td>
        </tr>
        <tr>
          <td>Berglunds snabbköp</td>
          <td>Christina Berglund</td>
          <td>Sweden</td>
          <td>Fun</td>
          <td>Cool</td>
          <td>Yay</td>
          <td>Wow</td>
          <td>OMG</td>
          <td>1,000,000,000,000</td>
          <td>Chickens, Dogs, Frogs, Cats, Rats, Hats, Mats, This, That</td>
        </tr>
        <tr>
          <td>Alfreds Futterkiste</td>
          <td>Maria Anders</td>
          <td>Germany</td>
          <td>Fun</td>
          <td>Cool</td>
          <td>Yay</td>
          <td>Wow</td>
          <td>OMG</td>
          <td>1,000,000,000,000</td>
          <td>Chickens, Dogs, Frogs, Cats, Rats, Hats, Mats, This, That</td>
        </tr>
        <tr>
          <td>Berglunds snabbköp</td>
          <td>Christina Berglund</td>
          <td>Sweden</td>
          <td>Fun</td>
          <td>Cool</td>
          <td>Yay</td>
          <td>Wow</td>
          <td>OMG</td>
          <td>1,000,000,000,000,000,000,000,000</td>
          <td>Chickens, Dogs, Frogs, Cats, Rats, Hats, Mats, This, That</td>
        </tr>
      </tbody>
    </Table>
    <Prism language="markup" code={example_table_responsive_code} />
  </div>
</div>
<!-- END EXAMPLE -->

<!-- START EXAMPLE -->
<div class="example-wrapper">
  <h3 class="content-title">Example :: Table Kitchen Sink</h3>
  <div class="example">
    <Table dark hoverable bordered rounded>
      <thead>
        <tr>
          <th>Company</th>
          <th>Contact</th>
          <th>Country</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Alfreds Futterkiste</td>
          <td>Maria Anders</td>
          <td>Germany</td>
        </tr>
        <tr>
          <td>Berglunds snabbköp</td>
          <td>Christina Berglund</td>
          <td>Sweden</td>
        </tr>
        <tr>
          <td>Alfreds Futterkiste</td>
          <td>Maria Anders</td>
          <td>Germany</td>
        </tr>
        <tr>
          <td>Berglunds snabbköp</td>
          <td>Christina Berglund</td>
          <td>Sweden</td>
        </tr>
      </tbody>
    </Table>
    <Prism language="markup" code={example_table_kitchen_sink_code} />
  </div>
</div>
<!-- END EXAMPLE -->

<PropsTable {propTypes} />

<Description
  title="Tables"
  description="A table is an arrangement of data in rows and columns, or
  possibly in a more complex structure. Tables are widely used in communication,
  research, and data analysis. Tables appear in print media, handwritten notes,
  computer software, architectural ornamentation, traffic signs, and many other
  places." />
