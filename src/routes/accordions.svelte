<script>
  import Prism from '../components/PrismJS.svelte'
  import PropsTable from '../components/PropsTable.svelte'
  import Description from '../components/Description.svelte'

  import { Accordions, Accordion } from '@erictherobot/svelteit'

  // current item selection
  let selectionID

  // handler to set current selection item
  const handleSelection = item => {
    selectionID = item
    openedAccordion = 0
  }

  // opened Accordion // e.detail === id
  let openedAccordion = 0
  const toggleAccordion = e =>
    (openedAccordion = e.detail == openedAccordion ? 0 : e.detail)

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

  // Examples
  const example_accordions_solid_code = `
<script>
  import { Accordions, Accordion } from '@erictherobot/svelteit'

  // current item selection
  let selectionID

  // handler to set current selection item
  const handleSelection = item => {
    selectionID = item
    openedAccordion = 0
  }

  // opened Accordion // e.detail === id
  let openedAccordion = 0
  const toggleAccordion = e =>
    (openedAccordion = e.detail == openedAccordion ? 0 : e.detail)
</\script>

<Accordions>
  <Accordion
    id="1"
    {openedAccordion}
    on:accordionSelected={toggleAccordion}
    primary>
    <span slot="title" class="valign-wrapper">Primary</span>
    <span>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
      eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
      minim veniam, quis nostrud exercitation ullamco laboris nisi ut
      aliquip ex ea commodo consequat.
    </span>
  </Accordion>

  <Accordion
    id="2"
    {openedAccordion}
    on:accordionSelected={toggleAccordion}
    secondary>
    <span slot="title" class="valign-wrapper">Secondary</span>
    <span>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
      eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
      minim veniam, quis nostrud exercitation ullamco laboris nisi ut
      aliquip ex ea commodo consequat.
    </span>
  </Accordion>

  <Accordion
    id="3"
    {openedAccordion}
    on:accordionSelected={toggleAccordion}
    success>
    <span slot="title" class="valign-wrapper">Success</span>
    <span>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
      eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
      minim veniam, quis nostrud exercitation ullamco laboris nisi ut
      aliquip ex ea commodo consequat.
    </span>
  </Accordion>

    <Accordion
    id="4"
    {openedAccordion}
    on:accordionSelected={toggleAccordion}
    danger>
    <span slot="title" class="valign-wrapper">Success</span>
    <span>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
      eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
      minim veniam, quis nostrud exercitation ullamco laboris nisi ut
      aliquip ex ea commodo consequat.
    </span>
  </Accordion>

    <Accordion
    id="5"
    {openedAccordion}
    on:accordionSelected={toggleAccordion}
    warning>
    <span slot="title" class="valign-wrapper">Success</span>
    <span>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
      eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
      minim veniam, quis nostrud exercitation ullamco laboris nisi ut
      aliquip ex ea commodo consequat.
    </span>
  </Accordion>

    <Accordion
    id="6"
    {openedAccordion}
    on:accordionSelected={toggleAccordion}
    info>
    <span slot="title" class="valign-wrapper">Success</span>
    <span>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
      eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
      minim veniam, quis nostrud exercitation ullamco laboris nisi ut
      aliquip ex ea commodo consequat.
    </span>
  </Accordion>

    <Accordion
    id="7"
    {openedAccordion}
    on:accordionSelected={toggleAccordion}
    light>
    <span slot="title" class="valign-wrapper">Success</span>
    <span>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
      eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
      minim veniam, quis nostrud exercitation ullamco laboris nisi ut
      aliquip ex ea commodo consequat.
    </span>
  </Accordion>


    <Accordion
    id="8"
    {openedAccordion}
    on:accordionSelected={toggleAccordion}
    dark>
    <span slot="title" class="valign-wrapper">Success</span>
    <span>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
      eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
      minim veniam, quis nostrud exercitation ullamco laboris nisi ut
      aliquip ex ea commodo consequat.
    </span>
  </Accordion>
</Accordions>
`

  // Examples
  const example_accordions_outlined_code = `
<script>
  import { Accordions, Accordion } from '@erictherobot/svelteit'

  // current item selection
  let selectionID

  // handler to set current selection item
  const handleSelection = item => {
    selectionID = item
    openedAccordion = 0
  }

  // opened Accordion // e.detail === id
  let openedAccordion = 0
  const toggleAccordion = e =>
    (openedAccordion = e.detail == openedAccordion ? 0 : e.detail)
</\script>

<Accordions>
  <Accordion
    id="9"
    {openedAccordion}
    on:accordionSelected={toggleAccordion}
    primary
    outlined>
    <span slot="title" class="valign-wrapper">Primary</span>
    <span>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
      eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
      minim veniam, quis nostrud exercitation ullamco laboris nisi ut
      aliquip ex ea commodo consequat.
    </span>
  </Accordion>

  <Accordion
    id="10"
    {openedAccordion}
    on:accordionSelected={toggleAccordion}
    secondary
    outlined>
    <span slot="title" class="valign-wrapper">Secondary</span>
    <span>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
      eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
      minim veniam, quis nostrud exercitation ullamco laboris nisi ut
      aliquip ex ea commodo consequat.
    </span>
  </Accordion>

  <Accordion
    id="11"
    {openedAccordion}
    on:accordionSelected={toggleAccordion}
    success
    outlined>
    <span slot="title" class="valign-wrapper">Success</span>
    <span>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
      eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
      minim veniam, quis nostrud exercitation ullamco laboris nisi ut
      aliquip ex ea commodo consequat.
    </span>
  </Accordion>

  <Accordion
    id="12"
    {openedAccordion}
    on:accordionSelected={toggleAccordion}
    danger
    outlined>
    <span slot="title" class="valign-wrapper">Success</span>
    <span>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
      eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
      minim veniam, quis nostrud exercitation ullamco laboris nisi ut
      aliquip ex ea commodo consequat.
    </span>
  </Accordion>

  <Accordion
    id="13"
    {openedAccordion}
    on:accordionSelected={toggleAccordion}
    warning
    outlined>
    <span slot="title" class="valign-wrapper">Success</span>
    <span>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
      eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
      minim veniam, quis nostrud exercitation ullamco laboris nisi ut
      aliquip ex ea commodo consequat.
    </span>
  </Accordion>

  <Accordion
    id="14"
    {openedAccordion}
    on:accordionSelected={toggleAccordion}
    info
    outlined>
    <span slot="title" class="valign-wrapper">Success</span>
    <span>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
      eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
      minim veniam, quis nostrud exercitation ullamco laboris nisi ut
      aliquip ex ea commodo consequat.
    </span>
  </Accordion>

  <Accordion
    id="15"
    {openedAccordion}
    on:accordionSelected={toggleAccordion}
    light
    outlined>
    <span slot="title" class="valign-wrapper">Success</span>
    <span>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
      eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
      minim veniam, quis nostrud exercitation ullamco laboris nisi ut
      aliquip ex ea commodo consequat.
    </span>
  </Accordion>

  <Accordion
    id="16"
    {openedAccordion}
    on:accordionSelected={toggleAccordion}
    dark
    outlined>
    <span slot="title" class="valign-wrapper">Success</span>
    <span>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
      eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
      minim veniam, quis nostrud exercitation ullamco laboris nisi ut
      aliquip ex ea commodo consequat.
    </span>
  </Accordion>
</Accordions>
`
</script>

<svelte:head>
  <title>Accordions - Svelteit Docs</title>
</svelte:head>

<h2>Accordions</h2>

<!-- START EXAMPLE -->
<div class="example-wrapper">
  <h3 class="content-title">Example :: Solid</h3>
  <div class="example">
    <Accordions>
      <Accordion
        id="1"
        {openedAccordion}
        on:accordionSelected={toggleAccordion}
        primary
        control>
        <span slot="title" class="valign-wrapper">Primary</span>
        <span>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </span>
      </Accordion>

      <Accordion
        id="2"
        {openedAccordion}
        on:accordionSelected={toggleAccordion}
        secondary
        control>
        <span slot="title" class="valign-wrapper">Secondary</span>
        <span>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </span>
      </Accordion>

      <Accordion
        id="3"
        {openedAccordion}
        on:accordionSelected={toggleAccordion}
        success
        control>
        <span slot="title" class="valign-wrapper">Success</span>
        <span>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </span>
      </Accordion>

      <Accordion
        id="4"
        {openedAccordion}
        on:accordionSelected={toggleAccordion}
        danger
        control>
        <span slot="title" class="valign-wrapper">Danger</span>
        <span>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </span>
      </Accordion>

      <Accordion
        id="5"
        {openedAccordion}
        on:accordionSelected={toggleAccordion}
        warning
        control>
        <span slot="title" class="valign-wrapper">Warning</span>
        <span>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </span>
      </Accordion>

      <Accordion
        id="6"
        {openedAccordion}
        on:accordionSelected={toggleAccordion}
        info
        control>
        <span slot="title" class="valign-wrapper">Info</span>
        <span>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </span>
      </Accordion>

      <Accordion
        id="7"
        {openedAccordion}
        on:accordionSelected={toggleAccordion}
        light
        control>
        <span slot="title" class="valign-wrapper">Light</span>
        <span>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </span>
      </Accordion>

      <Accordion
        id="8"
        {openedAccordion}
        on:accordionSelected={toggleAccordion}
        dark
        control>
        <span slot="title" class="valign-wrapper">Dark</span>
        <span>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </span>
      </Accordion>
    </Accordions>
    <Prism language="markup" code={example_accordions_solid_code} />
  </div>
</div>
<!-- END EXAMPLE -->

<!-- START EXAMPLE -->
<div class="example-wrapper">
  <h3 class="content-title">Example :: Outlined</h3>
  <div class="example">
    <Accordions>
      <Accordion
        id="9"
        {openedAccordion}
        on:accordionSelected={toggleAccordion}
        primary
        outlined>
        <span slot="title" class="valign-wrapper">Primary Outlined</span>
        <span>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </span>
      </Accordion>

      <Accordion
        id="10"
        {openedAccordion}
        on:accordionSelected={toggleAccordion}
        secondary
        outlined>
        <span slot="title" class="valign-wrapper">Secondary Outlined</span>
        <span>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </span>
      </Accordion>

      <Accordion
        id="11"
        {openedAccordion}
        on:accordionSelected={toggleAccordion}
        success
        outlined>
        <span slot="title" class="valign-wrapper">Success Outlined</span>
        <span>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </span>
      </Accordion>

      <Accordion
        id="12"
        {openedAccordion}
        on:accordionSelected={toggleAccordion}
        danger
        outlined>
        <span slot="title" class="valign-wrapper">Danger Outlined</span>
        <span>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </span>
      </Accordion>

      <Accordion
        id="13"
        {openedAccordion}
        on:accordionSelected={toggleAccordion}
        warning
        outlined>
        <span slot="title" class="valign-wrapper">Warning Outlined</span>
        <span>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </span>
      </Accordion>

      <Accordion
        id="14"
        {openedAccordion}
        on:accordionSelected={toggleAccordion}
        info
        outlined>
        <span slot="title" class="valign-wrapper">Info Outlined</span>
        <span>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </span>
      </Accordion>

      <Accordion
        id="15"
        {openedAccordion}
        on:accordionSelected={toggleAccordion}
        light
        outlined>
        <span slot="title" class="valign-wrapper">Light Outlined</span>
        <span>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </span>
      </Accordion>

      <Accordion
        id="16"
        {openedAccordion}
        on:accordionSelected={toggleAccordion}
        dark
        outlined>
        <span slot="title" class="valign-wrapper">Dark Outlined</span>
        <span>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </span>
      </Accordion>
    </Accordions>
    <Prism language="markup" code={example_accordions_outlined_code} />
  </div>
</div>
<!-- END EXAMPLE -->

<PropsTable {propTypes} soon />

<Description
  title="Accordions"
  description="The accordion is a graphical control element comprising a
  vertically stacked list of items, such as labels or thumbnails. An accordion
  is similar in purpose to a tabbed interface, a list of items where exactly one
  item is expanded into a panel (i.e. list items are shortcuts to access
  separate panels)." />
