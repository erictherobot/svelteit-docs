<script>
  import Prism from '../components/PrismJS.svelte'
  const rollup_install = `
npm install -D @colorfuldots/svelteit

# or if you prefer yarn

yarn add @colorfuldots/svelteit --dev`
</script>

<svelte:head>
  <title>Configuration With Rollup - Svelteit Docs</title>
</svelte:head>

<h2>Configuration With Rollup</h2>

<article>
  <p>Please follow these instructions carefully.</p>
  <ul>
    <li>Svelte</li>
    <li>Sapper - (scroll down)</li>
  </ul>
  <h3>Svelte</h3>
  <p>
    <b>Note:</b>
    The instructions below assume you have an existing Svelte project or you're
    starting a new project using
    <Prism
      language="bash"
      code={`npx degit sveltejs/template my-svelte-project`} />
  </p>
  <p>and that you've already added Svelteit like so:</p>
  <Prism language="bash" code={rollup_install} />

  <h3 class="content-title">Svelteit Configuration with Svelte</h3>
  <p>
    <b>1.</b>
    Install a PostCSS loader of choice. We recommend rollup-plugin-postcss
  </p>

  <Prism
    language="bash"
    code={`yarn add rollup-plugin-postcss --dev
`} />

  <p>
    <b>2.</b>
    Open rollup.config.js in your project and import the rollup-plugin-postcss
    module to the top of the file like so:
  </p>

  <Prism language="bash" code={`import postcss from 'rollup-plugin-postcss'`} />

  <p>
    <b>3.</b>
    Add this config to your rollup.config.js plugins: [ ] like so:
  </p>
  <Prism
    language="javascript"
    code={`
postcss({
    plugins: [],
}),
`} />
  <p>
    <b>4.</b>
    Rebuild and restart your project:
  </p>

  <Prism language="bash" code={`yarn build && yarn dev`} />
  <p>
    <b>5.</b>
    Import Svelteit CSS anywhere you'd like to use it. You should only have to
    do this once in your app's entry point. i.e. App.svelte
  </p>

  <Prism
    language="markup"
    code={`
<script>
  import '@colorfuldots/svelteit/dist/css/svelteit.min.css'
</\script>
`} />
  <p>
    <b>Optional:</b>
    you can alternatively import the css file using Svelte's built in components
    like so:
  </p>

  <Prism
    language="markup"
    code={`
<svelte:head>
  <link rel="stylesheet" href="./path/to/library/svelteit.min.css" />
</\svelte:head>
`} />

  <p>
    <b>6.</b>
    Add your components of choice like so:
  </p>

  <Prism
    language="markup"
    code={`
<script>
  import { Button } from '@colorfuldots/svelteit'
</\script>

<div>
  <Button title="Hello Svelteit" primary rounded />
</div>
`} />

  <p>That's It! Now you're ready to "Svelteit"!</p>

  <h3 class="content-title">Svelteit Configuration with Sapper</h3>
  <p>
    <b>Note:</b>
    The instructions below assume you have an existing Sapper project or you're
    starting a new project using
    <Prism
      language="bash"
      code={`npx degit "sveltejs/sapper-template#rollup" my-app`} />
    and that you've already added Svelteit like so:
  </p>

  <Prism language="bash" code={rollup_install} />

  <p>
    <b>1.</b>
    Import Svelteit CSS anywhere you'd like to use it. You should only have to
    do this once in your app's entry point. i.e. App.svelte
  </p>

  <Prism
    language="markup"
    code={`
<script>
  import '@colorfuldots/svelteit/dist/css/svelteit.min.css'
</\script>
`} />

  <p>
    <b>Optional:</b>
    you can alternatively import the css file using Svelte's built in components
    like so:
  </p>
  <Prism
    language="markup"
    code={`
<svelte:head>
  <link rel="stylesheet" href="./path/to/library/svelteit.min.css" />
</\svelte:head>
`} />
  <p>
    <b>2.</b>
    Add your components of choice like so:
  </p>

  <Prism
    language="markup"
    code={`
<script>
  import { Button } from '@colorfuldots/svelteit'
</\script>

<div>
  <Button title="Hello Svelteit" primary rounded />
</div>
`} />

  <p>That's It! Now you're ready to "Svelteit"!</p>

</article>
