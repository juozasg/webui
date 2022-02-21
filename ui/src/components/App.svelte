<script lang="ts">
  export let name: string = 'Flux Web UI uwu';

  let contextNames = ['gcp', 'kind-kind'];
  let selectedContext: string = contextNames[0];

  let selectedNamespace = 'all';
</script>

<main>
  <div class="topnav">
    <div>
      <p>select context</p>
      <pre class="status">Context: {selectedContext}</pre>
    </div>

    <div>
      <p>selected namespace</p>
    </div>
  </div>

  <h1>Hello {name}!</h1>

</main>

<style>
  :global(body) {
    margin: 0;
  }

  main {
    text-align: center;
    padding: 0em;
    max-width: 240px;
    margin: 0 auto;
  }

  .topnav {
    display: flex;
    justify-content: flex-end;
    background: blue;
    color: white !important;
    padding: 1rem;
  }

  .topnav > div {
    margin: 0 1rem;
  }

  h1 {
    color: purple;
    text-transform: uppercase;
    font-size: 4em;
    font-weight: 100;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>