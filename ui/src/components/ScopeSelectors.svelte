<script lang="ts">
  import {
    Select,
    SelectItem,
  } from "carbon-components-svelte";
  import { onMount } from 'svelte';


  import { context, namespace } from '../stores';
  import { getContexts, getNamespaces } from '../api';

  let contexts = [];
  let namespaces = [];

  // async () => {}

  async function loadContexts() {
    contexts = await getContexts();
  }

  async function loadNamespaces(contextId) {
    namespaces = await getNamespaces(contextId);
  }

  loadContexts();
  $: if($context == '') {
    $context = contexts[0] || '';
  }

  $: loadNamespaces($context);
  $: if(!namespaces.includes($namespace)) {
    $namespace = namespaces[0];
  }

  onMount(() => {
    const timer = setInterval(()=>{
      loadContexts();
      loadNamespaces($context);
    }, 20000);

    return () => {
      clearInterval(timer);
    }
  });
</script>

<div class="scope-selectors">
  <Select inline labelText="Context"  bind:selected={$context}>
    {#each contexts as c}
      <SelectItem value={c} text={c} />
    {/each}
  </Select>

  <Select inline labelText="Namespace" bind:selected={$namespace}>
    {#each namespaces as n}
      <SelectItem value={n} text={n} />
    {/each}
  </Select>
</div>

<style>
  .scope-selectors {
    padding-left: 1rem;

    display: inline-flex;
    width: 100%;
    justify-content: flex-end;
  }

  .scope-selectors > :global(.bx--form-item) {
    flex: 0 0 auto;
    margin-left: 1.5rem;
    margin-right: 4px;
  }
</style>