<script>
  import { Table } from '@erictherobot/svelteit'

  export let propTypes = undefined
  export let soon = undefined
</script>

<style lang="scss">
  @import '../../static/styles/scss/index.scss';

  .properties {
    & .name span {
      padding: 0 0.3em;
      color: $props-types-name-text;
      background: $props-types-name-bg;
      border: 1px solid $props-types-border;
      border-radius: 0.3em;
      font-style: normal;
      font-family: $base-body-font-family-mono;
      font-size: 0.9em;
      letter-spacing: -0.05em;
      display: inline-block;
      word-wrap: break-word;
      max-width: 400px;
      white-space: normal;
      &.false {
        background: mediumvioletred;
        color: lighten(mediumvioletred, 60);
      }
      &.true {
        background: #00ce6e;
        color: lighten(#00ce6e, 60);
      }
    }

    & .type span {
      padding: 0 0.3em;
      color: $props-types-text;
      background: $props-types-bg;
      border: 1px solid $props-types-border;
      border-radius: 0.3em;
      font-style: normal;
      font-family: $base-body-font-family-mono;
      font-size: 0.9em;
      letter-spacing: -0.05em;
      &.func {
        background: #9000ce;
        color: lighten(#9000ce, 60);
      }
      &.array {
        background: #ce6e00;
        color: lighten(#ce6e00, 60);
      }
      &.object {
        background: #a8ce00;
        color: lighten(#a8ce00, 60);
      }
      &.component {
        background: #00aace;
        color: lighten(#00aace, 60);
      }
      &.string {
        background: #ce9000;
        color: lighten(#ce9000, 60);
      }
      &.bool {
        background: mediumblue;
        color: lighten(mediumblue, 60);
      }
    }

    & .isRequired span {
      padding: 0 0.3em;
      color: $props-types-text;
      background: $props-types-bg;
      border: 1px solid $props-types-border;
      border-radius: 0.3em;
      font-style: normal;
      font-family: $base-body-font-family-mono;
      font-size: 0.9em;
      letter-spacing: -0.05em;

      &.false {
        background: mediumvioletred;
        color: lighten(mediumvioletred, 60);
      }
      &.true {
        background: #00ce6e;
        color: lighten(#00ce6e, 60);
      }
    }

    & .defaultValue span {
      padding: 0 0.3em;
      color: $props-types-text;
      background: $props-types-bg;
      border: 1px solid $props-types-border;
      border-radius: 0.3em;
      font-style: normal;
      font-family: $base-body-font-family-mono;
      font-size: 0.9em;
      letter-spacing: -0.05em;
      &.null {
        background: #cf0026;
        color: lighten(#cf0026, 60);
      }
      &.false {
        background: mediumvioletred;
        color: lighten(mediumvioletred, 60);
      }
      &.true {
        background: #00ce6e;
        color: lighten(#00ce6e, 60);
      }
    }

    & .description {
      padding: 0 0.3em;
      color: $props-types-text;
      background: $props-types-bg;
      border: 1px solid $props-types-border;
      border-radius: 0.3em;
      font-style: normal;
      font-family: $base-body-font-family-mono;
      font-size: 0.9em;
      letter-spacing: -0.05em;
    }
  }
</style>

<div class="example-wrapper">
  <h3 class="content-title">API</h3>
  {#if soon}
    <p>Coming soon!</p>
  {:else}
    <Table responsive nowrap bordered rounded>
      <thead>
        <tr>
          <th style="width:200px;">Prop Name</th>
          <th>Type</th>
          <th>Is Required</th>
          <th>Default Value</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody class="properties">
        {#each propTypes as p}
          <tr>
            <td class="name">
              <span>{p.name}</span>
            </td>
            <td class="type">
              {#if p.type === 'bool'}
                <span class="bool">{p.type}</span>
              {:else if p.type === 'string'}
                <span class="string">{p.type}</span>
              {:else if p.type === 'func'}
                <span class="func">{p.type}</span>
              {:else if p.type === 'component'}
                <span class="component">{p.type}</span>
              {:else if p.type === 'number'}
                <span class="string">{p.type}</span>
              {:else if p.type === 'number|string'}
                <span class="string">{p.type}</span>
              {:else if p.type === 'Array'}
                <span class="array">{p.type}</span>
              {:else if p.type === 'Object'}
                <span class="object">{p.type}</span>
              {/if}

            </td>
            <td class="isRequired">
              {#if p.isRequired === true}
                <span class="true">{p.isRequired}</span>
              {:else}
                <span class="false">{p.isRequired}</span>
              {/if}
            </td>
            <td class="defaultValue">
              {#if p.defaultValue === null}
                <span class="null">{p.defaultValue}</span>
              {:else if p.defaultValue === false}
                <span class="false">{p.defaultValue}</span>
              {:else if p.defaultValue === true}
                <span class="true">{p.defaultValue}</span>
              {/if}
            </td>
            <td class="description">{p.description}</td>
          </tr>
        {/each}
      </tbody>
    </Table>
  {/if}
</div>
