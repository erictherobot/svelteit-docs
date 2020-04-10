<script>
  import Prism from '../components/PrismJS.svelte'

  const quickStartInstructions = `
npm install -D @colorfuldots/svelteit

# or

yarn add @colorfuldots/svelteit --dev`

  const quickStartInstructionsCSS = `<link rel="stylesheet" href="svelteit.min.css" />`

  const quickStartInstructionsImport = `import '@colorfuldots/svelteit/dist/css/svelteit.min.css'`
</script>

<style lang="scss">
  article {
    h3 {
      margin: 35px auto 0px auto;
    }
  }
</style>

<svelte:head>
  <title>Svelteit - Svelteit Docs</title>
</svelte:head>
<article>
  <h2>Svelteit</h2>
  <p>
    Svelteit is a minimalistic UI/UX component library for
    <a href="https://svelte.dev">Svelte</a>
    and
    <a href="https://sapper.svelte.dev">Sapper</a>
    projects.
  </p>
  <h3>Why?</h3>
  <p>
    Yes, there are many component libraries out there today, but we wanted our
    own. If you like our components, use it. If you see a problem, make a pull
    request or fork your own and roll with it.
  </p>
  <h3>Quick Installation</h3>
  <p>Add Svelteit to your project by running:</p>
  <Prism language="bash" code={quickStartInstructions} />

  <h3>Contributing</h3>
  <p>
    Please read our
    <a
      href="https://github.com/erictherobot/svelteit-docs/blob/master/CONTRIBUTING.md">
      Contribution Guideline - (Svelteit Docs)
    </a>
    and
    <a
      href="https://github.com/erictherobot/svelteit/blob/master/CONTRIBUTING.md">
      Contribution Guideline - (Svelteit)
    </a>
  </p>
  <h3>MIT License</h3>
  <p>
    Copyright (c) 2020 Colorful Dots, LLC (
    <a href="https://colorfuldots.com">https://colorfuldots.com</a>
    ) Permission is hereby granted, free of charge, to any person obtaining a
    copy of this software and associated documentation files (the "Software"),
    to deal in the Software without restriction, including without limitation
    the rights to use, copy, modify, merge, publish, distribute, sublicense,
    and/or sell copies of the Software, and to permit persons to whom the
    Software is furnished to do so, subject to the following conditions:
  </p>
  <p>
    The above copyright notice and this permission notice shall be included in
    all copies or substantial portions of the Software.
  </p>
  <p>
    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
    FITNESS FOR A PARTICULAR PURPOSE AND NON-INFRINGEMENT. IN NO EVENT SHALL THE
    AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
    FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
    IN THE SOFTWARE.
  </p>
  <p>
    <a href="https://github.com/erictherobot/svelteit/blob/master/LICENSE.md">
      View MIT License
    </a>
  </p>
</article>
