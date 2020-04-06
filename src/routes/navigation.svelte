<script>
  import Prism from '../components/PrismJS.svelte'
  import Description from '../components/Description.svelte'
  import PropsTable from '../components/PropsTable.svelte'
  import fetchData from '../data'
  import {
    Navigation,
    Breadcrumbs,
    Tabs,
    TabList,
    TabPanel,
    Tab,
    Pagination,
    Table,
    Tooltip,
  } from '@colorfuldots/svelteit'

  const propTypes = [
    {
      name: 'items',
      type: 'Object',
      isRequired: true,
      defaultValue: null,
      description:
        'Navigation items such as href, title, segment - see examples',
    },
  ]

  const navItems = [
    { title: 'Home', link: 'javascript:void(0)', segment: 'Home' },
    { title: 'About', link: 'javascript:void(0)', segment: 'About' },
    { title: 'Contact', link: 'javascript:void(0)', segment: 'Contact' },
  ]

  /// PAGINATION
  let rows = []
  let path = ''
  let current_page = 1
  let from = 1
  let to = 1
  let per_page = 1
  let last_page = 1
  let total = 0
  let loading = true
  function changePage(params) {
    loading = true
    fetchData(path, params)
      .then(function(response) {
        path = response.path
        current_page = response.current_page
        from = response.from
        to = response.to
        total = response.total
        per_page = response.per_page
        last_page = response.last_page
        rows = response.data
      })
      .catch(error => {
        console.error(error)
      })
      .finally(() => {
        loading = false
      })
  }
  changePage({ page: 1 })
  /// PAGINATION

  const breadcrumbs = [
    {
      title: 'Home',
      href: 'javascript:void(0)',
    },
    {
      title: 'Catalog',
      href: 'javascript:void(0)',
    },
    {
      title: 'Accessories',
      href: 'javascript:void(0)',
    },
  ]

  const breadcrumbs1 = [
    {
      title: 'Home',
      href: 'javascript:void(0)',
    },
    {
      title: 'Catalog',
      href: 'javascript:void(0)',
    },
    {
      title: 'Accessories',
      href: 'javascript:void(0)',
    },
    {
      title: 'Cart',
      href: 'javascript:void(0)',
    },
  ]

  const breadcrumbs2 = [
    {
      title: 'Home',
      href: 'javascript:void(0)',
    },
    {
      title: 'Catalog',
      href: 'javascript:void(0)',
    },
    {
      title: 'Accessories',
      href: 'javascript:void(0)',
    },
    {
      title: 'Cart',
      href: 'javascript:void(0)',
    },
    {
      title: 'Checkout',
      href: 'javascript:void(0)',
    },
  ]

  // Example
  const example_navigation_default_code = `
<script>
  import { Navigation } from '@colorfuldots/svelteit'
  const navItems = [
    { title: 'Home', link: '.', segment: 'home' },
    { title: 'About', link: 'about', segment: 'about' },
    { title: 'Contact', link: 'contact', segment: 'contact' },
  ]
</\script>

<Navigation items={navItems} responsive />
`

  // Example
  const example_navigation_brand_code = `
<script>
  import { Navigation } from '@colorfuldots/svelteit'
  const navItems = [
    { title: 'Home', link: '.', segment: 'home' },
    { title: 'About', link: 'about', segment: 'about' },
    { title: 'Contact', link: 'contact', segment: 'contact' },
  ]
</\script>

<Navigation items={navItems} brand={'svelteit-logo-brand.svg'} responsive />
`

  // Example
  const example_navigation_search_code = `
<script>
  import { Navigation } from '@colorfuldots/svelteit'
  const navItems = [
    { title: 'Home', link: '.', segment: 'home' },
    { title: 'About', link: 'about', segment: 'about' },
    { title: 'Contact', link: 'contact', segment: 'contact' },
  ]
</\script>

<Navigation items={navItems} search responsive />
`

  // Example
  const example_navigation_breadcrumbs_code = `
<script>
  import { Breadcrumbs } from '@colorfuldots/svelteit'
</\script>

<Breadcrumbs list={breadcrumbs} />

<Breadcrumbs list={breadcrumbs1} primary />

<Breadcrumbs list={breadcrumbs2} outlined />
`

  // Example
  const example_navigation_tabs_code = `
<script>
  import { Tabs, TabList, Tab, TabPanel } from '@colorfuldots/svelteit'
</\script>

<Tabs>
  <TabList>
    <Tab>Some</Tab>
    <Tab>A Little</Tab>
    <Tab>A LOT</Tab>
  </TabList>

  <TabPanel>
    <h3>Some Content</h3>
    <p>
      Click on the tabs above.
    </p>
  </TabPanel>

  <TabPanel>
    <h3>More Content</h3>
    <p>
      Williamsburg yuccie messenger bag hammock blue bottle aesthetic
      humblebrag crucifix. Kitsch forage kickstarter messenger bag. Lo-fi
      actually marfa, tacos unicorn blog pour-over YOLO shaman yuccie
      lumbersexual brunch williamsburg gentrify af. Everyday carry scenester
      mustache gentrify pop-up synth franzen lumbersexual art party
      sustainable DIY vaporware. YOLO gluten-free drinking vinegar
      waistcoat. Neutra intelligentsia pour-over tilde, vegan cornhole wolf
      dreamcatcher enamel pin brunch master cleanse pok pok fingerstache
      retro kale chips. Enamel pin truffaut cred, hashtag viral vaporware
      asymmetrical selvage everyday carry bespoke portland pinterest.
    </p>
  </TabPanel>

  <TabPanel>
    <h3>MEGA CONTENT</h3>
    <p>
      Fam sriracha XOXO, pork belly synth tofu pabst jean shorts cray
      truffaut. Kale chips ramps VHS leggings viral cornhole live-edge
      brunch fam mustache vice everyday carry tofu retro. Gentrify man bun
      pour-over meh 8-bit next level. Pickled activated charcoal yr deep v
      celiac, poutine gentrify neutra brunch actually wayfarers banjo pug
      squid freegan. Bitters cornhole hell of asymmetrical try-hard
      wayfarers. Crucifix kinfolk glossier pour-over pitchfork seitan.
      Bicycle rights live-edge keffiyeh pickled, post-ironic put a bird on
      it pabst +1 hashtag vegan XOXO.
    </p>
    <p>
      Blue bottle scenester aesthetic sriracha butcher try-hard kombucha,
      vinyl readymade post-ironic tumeric. Woke selfies skateboard, iPhone
      thundercats green juice waistcoat glossier. Vegan lomo beard
      meditation, hexagon pork belly cold-pressed church-key migas trust
      fund cred unicorn pabst hammock. Hell of cliche keytar chicharrones
      austin, photo booth kogi wayfarers bicycle rights hoodie occupy tilde
      blue bottle.
    </p>
    <p>
      Brunch woke 3 wolf moon unicorn kombucha, umami air plant franzen.
      Freegan authentic health goth ennui hot chicken. Celiac master cleanse
      leggings hell of prism pug fashion axe taiyaki jianbing. Occupy
      williamsburg prism readymade austin taxidermy lo-fi vaporware tumeric
      man braid direct trade edison bulb umami irony DIY. Stumptown tofu
      selvage, salvia kombucha 90's try-hard tacos YOLO bespoke next level
      leggings man braid drinking vinegar chambray.
    </p>
    <p>
      Williamsburg yuccie messenger bag hammock blue bottle aesthetic
      humblebrag crucifix. Kitsch forage kickstarter messenger bag. Lo-fi
      actually marfa, tacos unicorn blog pour-over YOLO shaman yuccie
      lumbersexual brunch williamsburg gentrify af. Everyday carry scenester
      mustache gentrify pop-up synth franzen lumbersexual art party
      sustainable DIY vaporware. YOLO gluten-free drinking vinegar
      waistcoat. Neutra intelligentsia pour-over tilde, vegan cornhole wolf
      dreamcatcher enamel pin brunch master cleanse pok pok fingerstache
      retro kale chips. Enamel pin truffaut cred, hashtag viral vaporware
      asymmetrical selvage everyday carry bespoke portland pinterest.
    </p>
  </TabPanel>
</Tabs>
`

  // Example
  const example_navigation_pagination_code = `
<script>
  import { Pagination } from '@colorfuldots/svelteit'

  /// PAGINATION
  let rows = []
  let path = ''
  let current_page = 1
  let from = 1
  let to = 1
  let per_page = 1
  let last_page = 1
  let total = 0
  let loading = true
  function changePage(params) {
    loading = true
    fetchData(path, params)
      .then(function(response) {
        path = response.path
        current_page = response.current_page
        from = response.from
        to = response.to
        total = response.total
        per_page = response.per_page
        last_page = response.last_page
        rows = response.data
      })
      .catch(error => {
        console.error(error)
      })
      .finally(() => {
        loading = false
      })
  }
  changePage({ page: 1 })
</\script>

{#if total > per_page}
  <Pagination
    {current_page}
    {from}
    {last_page}
    {per_page}
    {to}
    {total}
    on:change={ev => changePage({ page: ev.detail })}>
    >
  </Pagination>

  {#if loading}
    <div class="text-center">
      <p>Loading...</p>
    </div>
  {/if}
{/if}

<Table primary striped bordered hoverable rounded>
  <thead>
    <tr>
      <th>#</th>
      <th>First Name</th>
      <th>Last Name</th>
    </tr>
  </thead>
  <tbody>
    {#each rows as row, i}
      <tr>
        <td>{row.id}</td>
        <td>{row.name}</td>
        <td>{row.lastname}</td>
      </tr>
    {:else}
      <tr>
        <td colspan="100%">
          <h5 class="text-center">There are no Users here.</h5>
        </td>
      </tr>
    {/each}
  </tbody>
</Table>
`

  const example_navigation_tooltip_code = `
<script>
  import { Tooltip } from '@colorfuldots/svelteit'
</\script>

<Tooltip title="Top" body="On the top" top primary />
<Tooltip title="Right" body="On the right" right info />
<Tooltip title="Bottom" body="On the bottom" bottom success />
<Tooltip title="Left" body="On the left" left dark />
`
</script>

<svelte:head>
  <title>Navigation - Svelteit Docs</title>
</svelte:head>

<h2>Navigation</h2>
<!-- <hr />
<strong>Components:</strong>
<ul>
  <li>
    <a href="/navigation/#top-nav">Top Nav</a>
  </li>
  <li>
    <a href="/navigation/#top-nav-branded">Top Nav Branded</a>
  </li>
  <li>
    <a href="/navigation/#tabs">Tabs</a>
  </li>
  <li>
    <a href="/navigation/#breadcrumbs">Breadcrumbs</a>
  </li>
  <li>
    <a href="/navigation/#pagination">Pagination</a>
  </li>
  <li>
    <a href="/navigation/#tooltips">Tooltips</a>
  </li>
  <li>
    <a href="/navigation/#api">API</a>
  </li>
  <li>
    <a href="/navigation/#description">Description</a>
  </li>
</ul> -->

<!-- START EXAMPLE -->
<div class="example-wrapper">
  <h3 class="content-title">
    <a href="javascript:void(0);" name="top-nav" class="anchor">#</a>
    Example :: Top Nav
  </h3>
  <div class="example">
    <Navigation items={navItems} responsive />
    <Prism language="markup" code={example_navigation_default_code} />
  </div>
</div>
<!-- END EXAMPLE -->

<!-- START EXAMPLE -->
<div class="example-wrapper">
  <h3 class="content-title">
    <a href="javascript:void(0);" name="top-nav-branded" class="anchor">#</a>
    Example :: Branded
  </h3>
  <div class="example">
    <Navigation
      items={navItems}
      brand={'../../svelteit-logo-brand.svg'}
      responsive />
    <Prism language="markup" code={example_navigation_brand_code} />
  </div>
</div>
<!-- END EXAMPLE -->

<!-- START EXAMPLE -->
<div class="example-wrapper">
  <h3 class="content-title">
    <a href="javascript:void(0);" name="top-nav-search" class="anchor">#</a>
    Example :: Search
  </h3>
  <div class="example">
    <Navigation items={navItems} search responsive />
    <Prism language="markup" code={example_navigation_search_code} />
  </div>
</div>
<!-- END EXAMPLE -->

<!-- START EXAMPLE -->
<div class="example-wrapper">
  <h3 class="content-title">
    <a href="javascript:void(0);" name="tabs" class="anchor">#</a>
    Example :: Tabs
  </h3>
  <div class="example">
    <Tabs>
      <TabList>
        <Tab>Some</Tab>
        <Tab>A Little</Tab>
        <Tab>A LOT</Tab>
      </TabList>

      <TabPanel>
        <h3>Some Content</h3>
        <p>Click on the tabs above.</p>
      </TabPanel>

      <TabPanel>
        <h3>More Content</h3>
        <p>
          Williamsburg yuccie messenger bag hammock blue bottle aesthetic
          humblebrag crucifix. Kitsch forage kickstarter messenger bag. Lo-fi
          actually marfa, tacos unicorn blog pour-over YOLO shaman yuccie
          lumbersexual brunch williamsburg gentrify af. Everyday carry scenester
          mustache gentrify pop-up synth franzen lumbersexual art party
          sustainable DIY vaporware. YOLO gluten-free drinking vinegar
          waistcoat. Neutra intelligentsia pour-over tilde, vegan cornhole wolf
          dreamcatcher enamel pin brunch master cleanse pok pok fingerstache
          retro kale chips. Enamel pin truffaut cred, hashtag viral vaporware
          asymmetrical selvage everyday carry bespoke portland pinterest.
        </p>
      </TabPanel>

      <TabPanel>
        <h3>MEGA CONTENT</h3>
        <p>
          Fam sriracha XOXO, pork belly synth tofu pabst jean shorts cray
          truffaut. Kale chips ramps VHS leggings viral cornhole live-edge
          brunch fam mustache vice everyday carry tofu retro. Gentrify man bun
          pour-over meh 8-bit next level. Pickled activated charcoal yr deep v
          celiac, poutine gentrify neutra brunch actually wayfarers banjo pug
          squid freegan. Bitters cornhole hell of asymmetrical try-hard
          wayfarers. Crucifix kinfolk glossier pour-over pitchfork seitan.
          Bicycle rights live-edge keffiyeh pickled, post-ironic put a bird on
          it pabst +1 hashtag vegan XOXO.
        </p>
        <p>
          Blue bottle scenester aesthetic sriracha butcher try-hard kombucha,
          vinyl readymade post-ironic tumeric. Woke selfies skateboard, iPhone
          thundercats green juice waistcoat glossier. Vegan lomo beard
          meditation, hexagon pork belly cold-pressed church-key migas trust
          fund cred unicorn pabst hammock. Hell of cliche keytar chicharrones
          austin, photo booth kogi wayfarers bicycle rights hoodie occupy tilde
          blue bottle.
        </p>
        <p>
          Brunch woke 3 wolf moon unicorn kombucha, umami air plant franzen.
          Freegan authentic health goth ennui hot chicken. Celiac master cleanse
          leggings hell of prism pug fashion axe taiyaki jianbing. Occupy
          williamsburg prism readymade austin taxidermy lo-fi vaporware tumeric
          man braid direct trade edison bulb umami irony DIY. Stumptown tofu
          selvage, salvia kombucha 90's try-hard tacos YOLO bespoke next level
          leggings man braid drinking vinegar chambray.
        </p>
        <p>
          Williamsburg yuccie messenger bag hammock blue bottle aesthetic
          humblebrag crucifix. Kitsch forage kickstarter messenger bag. Lo-fi
          actually marfa, tacos unicorn blog pour-over YOLO shaman yuccie
          lumbersexual brunch williamsburg gentrify af. Everyday carry scenester
          mustache gentrify pop-up synth franzen lumbersexual art party
          sustainable DIY vaporware. YOLO gluten-free drinking vinegar
          waistcoat. Neutra intelligentsia pour-over tilde, vegan cornhole wolf
          dreamcatcher enamel pin brunch master cleanse pok pok fingerstache
          retro kale chips. Enamel pin truffaut cred, hashtag viral vaporware
          asymmetrical selvage everyday carry bespoke portland pinterest.
        </p>
      </TabPanel>
    </Tabs>
    <Prism language="markup" code={example_navigation_tabs_code} />
  </div>
</div>
<!-- END EXAMPLE -->

<!-- START EXAMPLE -->
<div class="example-wrapper">
  <h3 class="content-title">
    <a href="javascript:void(0);" name="breadcrumbs" class="anchor">#</a>
    Example :: Breadcrumbs
  </h3>
  <div class="example">
    <Breadcrumbs list={breadcrumbs} />

    <Breadcrumbs list={breadcrumbs1} primary />

    <Breadcrumbs list={breadcrumbs2} outlined />
    <Prism language="markup" code={example_navigation_breadcrumbs_code} />
  </div>
</div>
<!-- END EXAMPLE -->

<!-- START EXAMPLE -->
<div class="example-wrapper">
  <h3 class="content-title">
    <a href="javascript:void(0);" name="pagination" class="anchor">#</a>
    Example :: Pagination
  </h3>
  <div class="example">
    {#if total > per_page}
      <Pagination
        {current_page}
        {from}
        {last_page}
        {per_page}
        {to}
        {total}
        on:change={ev => changePage({ page: ev.detail })}>
        >
      </Pagination>

      {#if loading}
        <div class="text-center">
          <p>Loading...</p>
        </div>
      {/if}
    {/if}

    <Table primary striped bordered hoverable rounded>
      <thead>
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
        </tr>
      </thead>
      <tbody>
        {#each rows as row, i}
          <tr>
            <td>{row.id}</td>
            <td>{row.name}</td>
            <td>{row.lastname}</td>
          </tr>
        {:else}
          <tr>
            <td colspan="100%">
              <h5 class="text-center">There are no Users here.</h5>
            </td>
          </tr>
        {/each}
      </tbody>
    </Table>
    <Prism language="markup" code={example_navigation_pagination_code} />
  </div>
</div>
<!-- END EXAMPLE -->

<!-- START EXAMPLE -->
<div class="example-wrapper">
  <h3 class="content-title">
    <a href="javascript:void(0);" name="tooltips" class="anchor">#</a>
    Example :: Tooltips
  </h3>
  <div class="example">
    <span style="padding: 25px;margin: 50px 25px; display: inline-block;">
      <Tooltip title="Top" body="On the top" top primary />
    </span>
    <span style="padding: 25px;margin: 50px 25px; display: inline-block;">
      <Tooltip title="Right" body="On the right" right info />
    </span>
    <span style="padding: 25px;margin: 50px 25px; display: inline-block;">
      <Tooltip title="Bottom" body="On the bottom" bottom success />
    </span>
    <span style="padding: 25px;margin: 50px 25px; display: inline-block;">
      <Tooltip title="Left" body="On the left" left dark />
    </span>
    <Prism language="markup" code={example_navigation_tooltip_code} />
  </div>
</div>
<!-- END EXAMPLE -->

<a href="javascript:void(0);" name="api" class="anchor">#</a>
<PropsTable {propTypes} soon />

<a href="javascript:void(0);" name="description" class="anchor">#</a>
<Description
  title="Navigation"
  description="An navigation element represents a section of a page whose
  purpose is to provide navigation links, either within the current document or
  to other documents. Common examples of navigation sections are menus, tables
  of contents, and indexes." />
