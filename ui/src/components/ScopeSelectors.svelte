<script lang="ts">
  import {
    Select,
    SelectItem,
    ToastNotification
  } from "carbon-components-svelte";
  import { onMount } from 'svelte';


  import { context, namespace } from '../stores';
  import { getContexts, getNamespaces } from '../api';

  let contexts = [];
  let namespaces = [];
  let error;

  async function loadContexts() {
    try {
      contexts = await getContexts();
      error = null;
    } catch (e) {
      error = e;
      console.log(error);
    }
  }

  async function loadNamespaces(contextId) {
    if(contextId == '') {
      return;
    }

    try {
      namespaces = await getNamespaces(contextId);
      error = null;
    } catch (e) {
      error = e;
      console.log(error);
    }
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

  {#if error}
    <ToastNotification>
      <strong slot="title">Error: </strong>
      <strong slot="subtitle">{error.message}</strong>
      <strong slot="caption">{new Date().toLocaleString()}</strong>
    </ToastNotification>
  {/if}
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

  .scope-selectors > :global(.bx--toast-notification) {
    position: absolute;
    top: 56px;
    right: 0px;
    width: 25rem;
  }

</style>