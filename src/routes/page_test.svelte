<script>
  import { Pagination } from '@erictherobot/svelteit'
  import { fly } from 'svelte/transition'
  import fetchData from '../data'
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
</script>

<style type="text/css">
  :global(button) {
    color: #fff;
    background-color: #007bff;
    border: 1px solid #007bff;
    padding: 0.5em;
    line-height: 1.25;
  }
  .table {
    width: 100%;
    margin-bottom: 1rem;
    color: #212529;
    border-collapse: collapse;
  }
  .table thead th {
    vertical-align: bottom;
    border-bottom: 2px solid #dee2e6;
  }
  .table td,
  .table th {
    padding: 0.75rem;
    vertical-align: top;
    border-top: 1px solid #dee2e6;
    text-align: center;
  }
  .text-center {
    text-align: center;
  }
</style>

<div style="position: relative;">
  <table class="table" transition:fly|local={{ y: 100, duration: 1000 }}>
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
  </table>

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
</div>
