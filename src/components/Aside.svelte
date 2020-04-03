<script>
  export let segment
  import { Button, Accordions, Accordion } from '@colorfuldots/svelteit'

  const asideNavWelcome = [
    {
      segment: undefined,
      href: '.',
      title: 'Home',
    },
    {
      segment: 'about',
      href: 'about',
      title: 'About',
    },
    {
      segment: 'news',
      href: 'news',
      title: 'News',
    },
  ]

  const asideNavInstallation = [
    {
      segment: 'svelte',
      href: 'svelte',
      title: 'With Svelte',
    },
    {
      segment: 'sapper',
      href: 'sapper',
      title: 'With Sapper',
    },
  ]

  const asideNavConfiguration = [
    {
      segment: 'rollup',
      href: 'rollup',
      title: 'With Rollup',
    },
    {
      segment: 'webpack',
      href: 'webpack',
      title: 'With Webpack',
    },
  ]

  const asideNavComponents = [
    {
      segment: 'alerts',
      href: 'alerts',
      title: 'Alerts',
    },
    {
      segment: 'accordions',
      href: 'accordions',
      title: 'Accordions',
    },
    {
      segment: 'buttons',
      href: 'buttons',
      title: 'Buttons',
    },
    {
      segment: 'cards',
      href: 'cards',
      title: 'Cards',
    },
    {
      segment: 'forms',
      href: 'forms',
      title: 'Forms',
    },
    {
      segment: 'images',
      href: 'images',
      title: 'Images',
    },
    {
      segment: 'layouts',
      href: 'layouts',
      title: 'Layouts & Grids',
    },
    {
      segment: 'lists',
      href: 'lists',
      title: 'Lists',
    },
    {
      segment: 'modals',
      href: 'modals',
      title: 'Modals',
    },
    {
      segment: 'navigation',
      href: 'navigation',
      title: 'Navigation',
    },
    {
      segment: 'progress-bars',
      href: 'progress-bars',
      title: 'Progress Bars',
    },
    {
      segment: 'tables',
      href: 'tables',
      title: 'Tables',
    },
    {
      segment: 'typography',
      href: 'typography',
      title: 'Typography',
    },
  ]

  const asideNavThemes = [
    {
      segment: 'custom-themes',
      href: 'custom-themes',
      title: 'Custom Themes',
    },
  ]

  const asideNavShowcase = [
    {
      segment: 'showcase',
      href: 'showcase',
      title: 'Showcase',
    },
  ]

  const asideNavResources = [
    {
      segment: 'external',
      href: 'https://github.com/erictherobot/svelteit',
      title: 'Github',
    },
    {
      segment: 'external',
      href: 'https://colorfuldots.com/contact',
      title: 'Contact Us',
    },
    {
      segment: 'external',
      href: 'https://svelte.dev',
      title: 'Svelte Official',
    },
    {
      segment: 'external',
      href: 'https://sapper.svelte.dev',
      title: 'Sapper Official',
    },
  ]

  //current list item selection
  let selectionID
  // handler to set current selection item
  const handleSelection = item => {
    selectionID = item
    openedAccordion = 0
  }

  // opened Accordion
  let openedAccordion = 4
  const toggleAccordion = e =>
    (openedAccordion = e.detail == openedAccordion ? 0 : e.detail)
</script>

<style lang="scss">
  @import '../../static/styles/scss/index.scss';

  nav {
    position: fixed;
    z-index: 1;
    top: $topbar-height;
    left: 0;
    height: 100vh;
    background-color: $primary;
    box-shadow: 0 0 15px -5px $dark;
    overflow-y: scroll;
    z-index: 1;
    padding: 15px 0px 0px 10px;

    ul {
      margin: 0;
      display: block;
      padding: 0 0 0 15px;

      li {
        list-style: none;
        a {
          color: $white;
          display: block;
          text-decoration: none;

          &.selected {
            text-decoration: underline;
            color: $white;
            &:after {
              float: right;
              content: url('data:image/svg+xml;utf8,<svg width="24" height="24" xmlns="http://www.w3.org/2000/svg"><g><path fill="white" d="M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z" /></g></svg>');
            }
          }

          &:hover {
            text-decoration: underline;
            color: $white;
          }
        }
      }
    }

    p {
      margin: 5px auto;
      padding: 0;
      font-weight: 600;
      cursor: pointer;
      text-transform: uppercase;
      color: $white;
      font-family: 'Heebo', sans-serif;
    }
    :global(.svelteit-accordion-header) {
      padding: 3px !important;
    }
    :global(.svelteit-accordion-body) {
      padding: 3px !important;
    }
  }

  /* // Small devices (landscape phones, 576px and up) */
  @media (max-width: 576px) {
    /* nav {
      width: 0px;
    } */
  }

  /* // Medium devices (tablets, 768px and up) */
  @media (min-width: 768px) {
    nav {
      min-width: 200px;
    }
  }

  /* // Large devices (desktops, 992px and up) */
  @media (min-width: 992px) {
    nav {
      min-width: 200px;
    }
  }

  /* // Extra large devices (large desktops, 1200px and up) */
  @media (min-width: 1200px) {
    nav {
      min-width: 190px;
      width: auto;
      max-width: 200px;
    }
  }

  /* // Extra large devices (large desktops, 1200px and up) */
  @media (min-width: 1540px) {
    nav {
      min-width: 260px;
      width: auto;
      max-width: 300px;
    }
  }
</style>

<nav>
  <Accordions>
    <Accordion id="1" {openedAccordion} on:accordionSelected={toggleAccordion}>
      <div slot="title" class="acc-header">
        <p class="valign-wrapper left">Welcome</p>
      </div>
      <div class="collection with-header">
        <ul class="collection-item">
          {#each asideNavWelcome as a, index (a.title)}
            <li>
              <a class:selected={segment === a.segment} href={a.href}>
                {a.title}
              </a>
            </li>
          {/each}
        </ul>
        <div />
      </div>
    </Accordion>

    <Accordion id="2" {openedAccordion} on:accordionSelected={toggleAccordion}>
      <div slot="title" class="acc-header">
        <p class="valign-wrapper left">Installation</p>
      </div>
      <div class="collection with-header">
        <ul class="collection-item">
          {#each asideNavInstallation as a, index (a.title)}
            <li>
              <a class:selected={segment === a.segment} href={a.href}>
                {a.title}
              </a>
            </li>
          {/each}
        </ul>
        <div />
      </div>
    </Accordion>

    <Accordion id="3" {openedAccordion} on:accordionSelected={toggleAccordion}>
      <div slot="title" class="acc-header">
        <p class="valign-wrapper left">Configuration</p>
      </div>
      <div class="collection with-header">
        <ul class="collection-item">
          {#each asideNavConfiguration as a, index (a.title)}
            <li>
              <a class:selected={segment === a.segment} href={a.href}>
                {a.title}
              </a>
            </li>
          {/each}
        </ul>
        <div />
      </div>
    </Accordion>

    <Accordion id="4" {openedAccordion} on:accordionSelected={toggleAccordion}>
      <div slot="title" class="acc-header">
        <p class="valign-wrapper left">Components</p>
      </div>
      <div class="collection with-header">
        <ul class="collection-item">
          {#each asideNavComponents as a, index (a.title)}
            <li>
              <a class:selected={segment === a.segment} href={a.href}>
                {a.title}
              </a>
            </li>
          {/each}
        </ul>
        <div />
      </div>
    </Accordion>

    <Accordion id="5" {openedAccordion} on:accordionSelected={toggleAccordion}>
      <div slot="title" class="acc-header">
        <p class="valign-wrapper left">Themes</p>
      </div>
      <div class="collection with-header">
        {#if asideNavThemes}
          <ul class="collection-item">
            {#each asideNavThemes as a, index (a.title)}
              <li>
                <a class:selected={segment === a.segment} href={a.href}>
                  {a.title}
                </a>
              </li>
            {/each}
          </ul>
        {:else}
          <ul class="collection-item">
            <li>coming soon!</li>
          </ul>
        {/if}
        <div />
      </div>
    </Accordion>

    <Accordion id="6" {openedAccordion} on:accordionSelected={toggleAccordion}>
      <div slot="title" class="acc-header">
        <p class="valign-wrapper left">Showcase</p>
      </div>
      <div class="collection with-header">
        {#if asideNavShowcase}
          <ul class="collection-item">
            {#each asideNavShowcase as a, index (a.title)}
              <li>
                <a class:selected={segment === a.segment} href={a.href}>
                  {a.title}
                </a>
              </li>
            {/each}
          </ul>
        {:else}
          <ul class="collection-item">
            <li>coming soon!</li>
          </ul>
        {/if}
        <div />
      </div>
    </Accordion>

    <Accordion id="7" {openedAccordion} on:accordionSelected={toggleAccordion}>
      <div slot="title" class="acc-header">
        <p class="valign-wrapper left">Resources</p>
      </div>
      <div class="collection with-header">
        <ul class="collection-item">
          {#each asideNavResources as a, index (a.title)}
            <li>
              <a class:selected={segment === a.segment} href={a.href}>
                {a.title}
              </a>
            </li>
          {/each}
        </ul>
        <div />
      </div>
    </Accordion>
  </Accordions>
</nav>
