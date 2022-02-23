<script lang="ts">
  import AppNavLayout from "./AppNavLayout.svelte";

  import Router from 'svelte-spa-router'
  import routes from '../routes'
</script>

<AppNavLayout>
  <Router {routes} />
</AppNavLayout>


<style>
  :global(body) {
    margin: 0;
  }
</style>