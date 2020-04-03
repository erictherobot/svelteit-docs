<script>
  import Prism from '../components/PrismJS.svelte'
  import PropsTable from '../components/PropsTable.svelte'
  import Description from '../components/Description.svelte'

  import {
    Card,
    Container,
    Row,
    Column,
    Button,
    Table,
  } from '@colorfuldots/svelteit'

  const propTypes = [
    {
      name: '{children}',
      type: 'string',
      isRequired: true,
      defaultValue: null,
      description:
        'Add children to the body of the card by wrapping it in <Card>{children}</Card>',
    },
    {
      name: 'title',
      type: 'string',
      isRequired: true,
      defaultValue: null,
      description: 'Sets the card title',
    },
    {
      name: 'description',
      type: 'string',
      isRequired: false,
      defaultValue: null,
      description: 'Sets a description of the card',
    },
    {
      name: 'buttonComponent',
      type: 'component',
      isRequired: false,
      defaultValue: null,
      description: 'Adds a custom component or custom button to the card',
    },
    {
      name: 'image',
      type: 'string',
      isRequired: false,
      defaultValue: null,
      description: 'Adds an image to the card',
    },
  ]

  // Example
  const example_card_default_code = `
<script>
  import { Card } from '@colorfuldots/svelteit'
</\script>

<Card
  title="This is my card title"
  description="This is my card description. It can be as long as you'd like.
  It could be in any language. It could say whatever you want." 
/>
`

  // Example
  const example_card_grid_code = `
<script>
  import { Card, Container, Row, Column } from '@colorfuldots/svelteit'
</\script>

<Container>
  <Row>
    <Column class="col-md-4">
      <Card>
        <h3>This is my card title</h3>
        <p>
          This is my card description. It can be as long as you'd like. It
          could be in any language. It could say whatever you want.
        </p>
      </Card>
    </Column>
    <Column class="col-md-4">
      <Card>
        <h3>This is my card title</h3>
        <p>
          This is my card description. It can be as long as you'd like. It
          could be in any language. It could say whatever you want.
        </p>
      </Card>
    </Column>
    <Column class="col-md-4">
      <Card>
        <h3>This is my card title</h3>
        <p>
          This is my card description. It can be as long as you'd like. It
          could be in any language. It could say whatever you want.
        </p>
      </Card>
    </Column>
  </Row>
</Container>
`

  // Example
  let title = 'Javascript'
  let description = 'Javascript is great'
  let image = 'https://picsum.photos/1000/560?random=9'
  const example_card_image_code = `
<script>
  import { Card, Container, Row, Column } from '@colorfuldots/svelteit'
  let title = 'Javascript'
  let description = 'Javascript is great'
  let image = 'https://picsum.photos/1000/560?random=9'
</\script>

<Container>
  <Row>
    <Column class="col-md-4">
      <Card {title} {description} {image} />
    </Column>
  </Row>
</Container>
`

  // Example
  let image2 = 'https://picsum.photos/500/280?random=2'
  let image3 = 'https://picsum.photos/500/280?random=3'
  let image4 = 'https://picsum.photos/500/280?random=4'
  const example_card_image_grid_code = `
<script>
  import { Card, Container, Row, Column } from '@colorfuldots/svelteit'
  let title = 'Javascript'
  let description = 'Javascript is great'
  let image = 'https://picsum.photos/1000/560?random=9'
  let image2 = 'https://picsum.photos/500/280?random=2'
  let image3 = 'https://picsum.photos/500/280?random=3'
  let image4 = 'https://picsum.photos/500/280?random=4'
</\script>

<Container>
  <Row>
    <Column class="col-sm-6">
      <Card {title} {description} image={image3} />
    </Column>
    <Column class="col-sm-6">
      <Card {title} {description} image={image4} />
    </Column>
    <Column class="col-sm-4">
      <Card {title} {description} {image} />
    </Column>
    <Column class="col-sm-4">
      <Card {title} {description} image={image2} />
    </Column>
    <Column class="col-sm-4">
      <Card {title} {description} {image} />
    </Column>
  </Row>
</Container>
`

  // Example
  const example_card_button_code = `
<script>
  import { Card, Button } from '@colorfuldots/svelteit'
</\script>

<Card>
  <h3>I have a title</h3>
  <p>I have a description</p>
  <Button success rounded medium outlined>I have a button, Baby!</Button>
</Card>

<Card
  title="I have a title"
  description="I have a description" 
  buttonComponent={<Button success rounded medium outlined>I have a button, Baby!</Button>}
/>
`
</script>

<svelte:head>
  <title>Cards - Svelteit Docs</title>
</svelte:head>

<h2>Cards</h2>

<!-- START EXAMPLE -->
<div class="example-wrapper">
  <h3 class="content-title">Example :: Card</h3>
  <div class="example">
    <Card
      title="This is my card title"
      description="This is my card description. It can be as long as you'd like.
      It could be in any language. It could say whatever you want." />
    <Prism language="markup" code={example_card_default_code} />
  </div>
</div>
<!-- END EXAMPLE -->

<!-- START EXAMPLE -->
<div class="example-wrapper">
  <h3 class="content-title">Example :: Card With Button</h3>
  <div class="example">
    <Card
      success
      outlined
      rounded
      title="I have a title"
      description="I have a description"
      buttonTitle="This is a button"
      buttonRoute={() => alert('go to route')} />
    <Prism language="markup" code={example_card_button_code} />
  </div>
</div>
<!-- END EXAMPLE -->

<!-- START EXAMPLE -->
<div class="example-wrapper">
  <h3 class="content-title">Example :: Card With Grid</h3>
  <div class="example">
    <Container>
      <Row>
        <Column class="col-md-6">
          <Card
            medium
            success
            outlined
            rounded
            title="Product One"
            description="This is a description"
            buttonTitle="Buy"
            buttonRoute={() => alert('go to route')} />
        </Column>
        <Column class="col-md-6">
          <Card
            block
            medium
            warning
            outlined
            rounded
            disabled
            title="Product Two"
            description="This is a description"
            buttonTitle="Out of Stock"
            buttonRoute={() => alert('go to route')} />
        </Column>
      </Row>
    </Container>
    <Prism language="markup" code={example_card_grid_code} />
  </div>
</div>
<!-- END EXAMPLE -->

<!-- START EXAMPLE -->
<div class="example-wrapper">
  <h3 class="content-title">Example :: Card With Image</h3>
  <div class="example">
    <Container>
      <Row>
        <Column class="col">
          <Card {title} {description} {image} />
        </Column>
      </Row>
    </Container>
    <Prism language="markup" code={example_card_image_code} />
  </div>
</div>
<!-- END EXAMPLE -->

<!-- START EXAMPLE -->
<div class="example-wrapper">
  <h3 class="content-title">Example :: Dynamic Card With Image In Grid</h3>
  <div class="example">
    <Container>
      <Row>
        <Column class="col-sm-6">
          <Card {title} {description} image={image3} />
        </Column>
        <Column class="col-sm-6">
          <Card {title} {description} image={image4} />
        </Column>
        <Column class="col-sm-4">
          <Card {title} {description} {image} />
        </Column>
        <Column class="col-sm-4">
          <Card {title} {description} image={image2} />
        </Column>
        <Column class="col-sm-4">
          <Card {title} {description} {image} />
        </Column>
      </Row>
    </Container>
    <Prism language="markup" code={example_card_image_grid_code} />
  </div>
</div>
<!-- END EXAMPLE -->

<PropsTable {propTypes} />

<Description
  title="Cards"
  description="A card component is useful in many applications that have
  requirements to display contained images, title, and description. Product
  Cards are perfect for displaying product information such as image, title,
  description, price, and more. User Cards are perfect for displaying contained
  user information such as a users avatar, name, email, and more." />
