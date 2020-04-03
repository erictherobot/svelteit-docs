<script>
  import { Image, Container, Column, Row } from '@colorfuldots/svelteit'
  import Prism from '../components/PrismJS.svelte'
  import PropsTable from '../components/PropsTable.svelte'
  import Description from '../components/Description.svelte'

  const propTypes = [
    {
      name: 'title',
      type: 'string',
      isRequired: true,
      defaultValue: null,
      description:
        'Sets the title of the image text and alt text for SEO and accessibility compliance',
    },
    {
      name: 'img',
      type: 'string',
      isRequired: true,
      defaultValue: null,
      description: 'URL or path of your image',
    },
    {
      name: 'hero, thumbnail, slideshow, lightbox, responsive',
      type: 'bool',
      isRequired: true,
      defaultValue: null,
      description: 'Sets type of image to render',
    },
  ]

  let title = 'We Are All Heroes'
  let imgSource1 =
    'https://images.unsplash.com/photo-1500964757637-c85e8a162699?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2578&q=80'
  let imgSource2 =
    'https://images.unsplash.com/photo-1506956191951-7a88da4435e5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2167&q=80'
  let imgSource3 =
    'https://images.unsplash.com/photo-1567468219153-4b1dea5227ea?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80'
  let imgSource4 =
    'https://images.unsplash.com/photo-1577416570214-0a06be968657?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80'
  let imgSource5 =
    'https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80'
  let description = 'Just look around...'
  let buttonTitle = 'Click Me'
  let height = 500
  let width = 200
  let route = () => alert('go to route')
  let thumbRoute = 'javascript:void(0);'

  // Example
  const example_image_hero_code = `
<script>
  import { Image } from '@colorfuldots/svelteit'
  let title = "We Are All Heroes"
  let description = "Just look around..."
  let height = 500
</\script>

<Image 
  hero
  {title}
  {description}
  img={imgSource1}
  {height}
/>
`

  // Example
  const example_image_hero_button_code = `
<script>
  import { Image } from '@colorfuldots/svelteit'
  let title = "We Are All Heroes"
  let description = "Just look around..."
  let buttonTitle = "Click Me"
  let height = 500
  let route = () => alert('go to route')
</\script>

<Image 
  hero
  {title}
  {description}
  img={imgSource1}
  {buttonTitle}
  {height}
  buttonRoute={route} 
/>
`

  // Example
  const example_image_thumbnail_code = `
<script>
  import { Image } from '@colorfuldots/svelteit'
  let title = "Some Other Image"
  let thumbRoute = 'javascript:void(0);'
</\script>

<Image
  thumbnail
  {title}
  img={imgSource3}
  height={100}
  width={null}
  linkRoute={thumbRoute} 
/>
<Image
  thumbnail
  {title}
  img={imgSource4}
  height={100}
  width={null}
  linkRoute={thumbRoute} 
/>
<Image
  thumbnail
  {title}
  img={imgSource5}
  height={100}
  width={null}
  linkRoute={thumbRoute}   
/>
`
</script>

<style lang="scss">
  .example {
    .image-credit {
      text-align: center;
      margin: 5px auto 0px auto;
      display: block;
    }
    .col-4 {
      background-color: white !important;
      border: 0px;
    }
  }
</style>

<svelte:head>
  <title>Images - Svelteit Docs</title>
</svelte:head>

<h2>Images</h2>

<!-- START EXAMPLE -->
<div class="example-wrapper">
  <h3 class="content-title">Example :: Hero Image</h3>
  <div class="example">
    <Image hero {title} img={imgSource1} {height} {description} />
    <div class="image-credit">
      <em>
        <small>Source Credit: Unsplash</small>
      </em>
    </div>
    <Prism language="markup" code={example_image_hero_code} />
  </div>
</div>
<!-- END EXAMPLE -->

<!-- START EXAMPLE -->
<div class="example-wrapper">
  <h3 class="content-title">Example :: Hero Image + Button</h3>
  <div class="example">
    <Image
      hero
      light
      outlined
      rounded
      large
      {title}
      img={imgSource2}
      {height}
      buttonRoute={route}
      {buttonTitle}
      {description} />
    <div class="image-credit">
      <em>
        <small>Source Credit: Unsplash</small>
      </em>
    </div>
    <Prism language="markup" code={example_image_hero_button_code} />
  </div>
</div>
<!-- END EXAMPLE -->

<!-- START EXAMPLE -->
<div class="example-wrapper">
  <h3 class="content-title">Example :: Thumbnail Image</h3>
  <div class="example text-center">
    <Container>
      <Row>
        <Column class="col-4">
          <Image
            thumbnail
            {title}
            img={imgSource3}
            height={160}
            width={null}
            linkRoute={thumbRoute} />
        </Column>
        <Column class="col-4">
          <Image
            thumbnail
            {title}
            img={imgSource4}
            height={160}
            width={null}
            linkRoute={thumbRoute} />
        </Column>
        <Column class="col-4">
          <Image
            thumbnail
            {title}
            img={imgSource5}
            height={160}
            width={null}
            linkRoute={thumbRoute} />
        </Column>
      </Row>
    </Container>

    <div class="image-credit">
      <em>
        <small>Source Credit: Unsplash</small>
      </em>
    </div>
    <Prism language="markup" code={example_image_thumbnail_code} />
  </div>
</div>
<!-- END EXAMPLE -->

<PropsTable {propTypes} />

<Description
  title="Images"
  description="The <img> tag defines an image in an HTML page. The <img> tag has
  two required attributes: src and alt. Note: Images are not technically
  inserted into an HTML page, images are linked to HTML pages. The <img> tag
  creates a holding space for the referenced image." />
