<script>
  import Prism from '../components/PrismJS.svelte'
  import PropsTable from '../components/PropsTable.svelte'
  import Description from '../components/Description.svelte'

  import { List, Image } from '@colorfuldots/svelteit'

  let fruitsArray = ['Apple', 'Orange', 'Plum']
  let objectThings = { fruit: 'Apple', kind: 'Fuji', color: 'Red' }
  let users = [
    {
      id: 1,
      name: 'Sally',
      avatar: 'https://i.pravatar.cc/50',
      bio: 'This is me, Sally and I like people.',
      slug: 'javascript:void(0);',
    },
    {
      id: 2,
      name: 'Mary',
      avatar: 'https://i.pravatar.cc/50',
      bio: 'This is me, Mary and I like cats.',
      slug: 'javascript:void(0);',
    },
    {
      id: 3,
      name: 'Jane',
      avatar: 'https://i.pravatar.cc/50',
      bio: 'This is me, Jane and I like ice cream.',
      slug: 'javascript:void(0);',
    },
  ]

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
  import { List } from '@colorfuldots/svelteit'
  let fruitsArray = ["Apple", "Orange", "Plum"];
</\script>

<List>
  {#each fruitsArray as item}
    <li>{item}</li>
  {/each}
</List>
`

  // Example List Object
  const example_list_object_code = `
<script>
  import { List } from '@colorfuldots/svelteit'
  let objectThings = {fruit:"Apple", kind:"Fuji", color:"Red"};
</\script>

<List>
  {#each Object.values(objectThings) as item}
    <li>{item}</li>
  {/each}
</List>
`

  // Example List Object
  const example_list_colors_code = `
<script>
  import { List } from '@colorfuldots/svelteit'
  let objectThings = {fruit:"Apple", kind:"Fuji", color:"Red"};
</\script>

<List primary>
  {#each Object.values(objectThings) as item}
    <li>{item}</li>
  {/each}
</List>
<List secondary>
  {#each Object.values(objectThings) as item}
    <li>{item}</li>
  {/each}
</List>
<List success>
  {#each Object.values(objectThings) as item}
    <li>{item}</li>
  {/each}
</List>
<List danger>
  {#each Object.values(objectThings) as item}
    <li>{item}</li>
  {/each}
</List>
<List warning>
  {#each Object.values(objectThings) as item}
    <li>{item}</li>
  {/each}
</List>
<List info>
  {#each Object.values(objectThings) as item}
    <li>{item}</li>
  {/each}
</List>
<List light>
  {#each Object.values(objectThings) as item}
    <li>{item}</li>
  {/each}
</List>
<List dark>
  {#each Object.values(objectThings) as item}
    <li>{item}</li>
  {/each}
</List>
`

  // Example List Object
  const example_list_avatar_code = `
<script>
  import { List } from '@colorfuldots/svelteit'
  let users = [
    {
      id: 1,
      name: 'Sally',
      avatar: 'https://i.pravatar.cc/50',
      bio: 'This is me, Sally and I like people.',
      slug: 'javascript:void(0);',
    },
    {
      id: 2,
      name: 'Mary',
      avatar: 'https://i.pravatar.cc/50',
      bio: 'This is me, Mary and I like cats.',
      slug: 'javascript:void(0);',
    },
    {
      id: 3,
      name: 'Jane',
      avatar: 'https://i.pravatar.cc/50',
      bio: 'This is me, Jane and I like ice cream.',
      slug: 'javascript:void(0);',
    },
  ]
</\script>

<List>
  {#each users as user}
    <li>
      <Image
        avatar
        title={user.name}
        img={user.avatar}
        height={45}
        width={45}
        linkRoute={user.slug} />
      <div style="display:inline-grid;margin-left:5px;">
        <h3>{user.name}</h3>
      </div>
    </li>
  {/each}
</List>
`
</script>

<svelte:head>
  <title>Lists - Svelteit Docs</title>
</svelte:head>

<h2>Lists</h2>

<!-- START EXAMPLE -->
<div class="example-wrapper">
  <h3 class="content-title">Example :: List Default (Array)</h3>
  <div class="example">
    <List>
      {#each fruitsArray as item}
        <li>{item}</li>
      {/each}
    </List>
    <Prism language="markup" code={example_list_array_code} />
  </div>
</div>
<!-- END EXAMPLE -->

<!-- START EXAMPLE -->
<div class="example-wrapper">
  <h3 class="content-title">Example :: Default List (Object)</h3>
  <div class="example">
    <List>
      {#each Object.values(objectThings) as item}
        <li>{item}</li>
      {/each}
    </List>
    <Prism language="markup" code={example_list_object_code} />
  </div>
</div>
<!-- END EXAMPLE -->

<!-- START EXAMPLE -->
<div class="example-wrapper">
  <h3 class="content-title">Example :: Colors</h3>
  <div class="example">
    <List primary>
      {#each Object.values(objectThings) as item}
        <li>{item}</li>
      {/each}
    </List>
    <List secondary>
      {#each Object.values(objectThings) as item}
        <li>{item}</li>
      {/each}
    </List>
    <List success>
      {#each Object.values(objectThings) as item}
        <li>{item}</li>
      {/each}
    </List>
    <List danger>
      {#each Object.values(objectThings) as item}
        <li>{item}</li>
      {/each}
    </List>
    <List warning>
      {#each Object.values(objectThings) as item}
        <li>{item}</li>
      {/each}
    </List>
    <List info>
      {#each Object.values(objectThings) as item}
        <li>{item}</li>
      {/each}
    </List>
    <List light>
      {#each Object.values(objectThings) as item}
        <li>{item}</li>
      {/each}
    </List>
    <List dark>
      {#each Object.values(objectThings) as item}
        <li>{item}</li>
      {/each}
    </List>
    <Prism language="markup" code={example_list_colors_code} />
  </div>
</div>
<!-- END EXAMPLE -->

<!-- START EXAMPLE -->
<div class="example-wrapper">
  <h3 class="content-title">Example :: List With Avatar / Image</h3>
  <div class="example">
    <List>
      {#each users as user}
        <li>
          <Image
            avatar
            title={user.name}
            img={user.avatar}
            height={45}
            width={45}
            linkRoute={user.slug} />
          <div style="display:inline-grid;margin-left:5px;">
            <h3>{user.name}</h3>
          </div>
        </li>
      {/each}
    </List>
    <Prism language="markup" code={example_list_avatar_code} />
  </div>
</div>
<!-- END EXAMPLE -->

<PropsTable {propTypes} soon />
<Description
  title="Lists"
  description="Lists are powerful tools to group similar elements, and lists
  give visitors to your site an easy way to zoom in on groups of information.
  Just about anything fits in a list, from sets of instructions to collections
  of links. " />
