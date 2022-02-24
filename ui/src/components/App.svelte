<script lang="ts">

  import "carbon-components-svelte/css/g10.css";

  import { Button } from "carbon-components-svelte";

  import { DataTable } from "carbon-components-svelte";
  import { Slider } from "carbon-components-svelte";




  import AppNavLayout from "./AppNavLayout.svelte";

  import Router from 'svelte-spa-router'
  import routes from '../routes'
</script>

<AppNavLayout>
  <Router {routes} />
 

  <DataTable
    headers={[
      { key: "name", value: "Name" },
      { key: "protocol", value: "Protocol" },
      { key: "port", value: "Port" },
      { key: "rule", value: "Rule" },
    ]}
    rows={[
      {
        id: "a",
        name: "Load Balancer 3",
        protocol: "HTTP",
        port: 3000,
        rule: "Round robin",
      },
      {
        id: "b",
        name: "Load Balancer 1",
        protocol: "HTTP",
        port: 443,
        rule: "Round robin",
      },
      {
        id: "c",
        name: "Load Balancer 2",
        protocol: "HTTP",
        port: 80,
        rule: "DNS delegation",
      },
      {
        id: "d",
        name: "Load Balancer 6",
        protocol: "HTTP",
        port: 3000,
        rule: "Round robin",
      },
      {
        id: "e",
        name: "Load Balancer 4",
        protocol: "HTTP",
        port: 443,
        rule: "Round robin",
      },
      {
        id: "f",
        name: "Load Balancer 5",
        protocol: "HTTP",
        port: 80,
        rule: "DNS delegation",
      },
    ]}
  />

  <div style="margin: 1rem 0;"> <Button>Primary button</Button></div>

  <Slider
    labelText="Runtime memory (MB)"
    min={10}
    max={990}
    maxLabel="990 MB"
    value={100}
  />

</AppNavLayout>


<style lang="scss" global>
  $flux-darkest-blue: #243f80;
  $flux-dark-blue: #3d6ddd;
  $flux-lighter-blue: #5f86e3;
  $flux-light-blue: #c3d2f4;
  $flux-white-blue: #eaeffb;

  body {
    // margin: 0rem;
    background-color: $flux-white-blue !important;
  }

  nav {
    a.bx--side-nav__link[aria-current=page]::before, a.bx--side-nav__link--current::before {
      background-color: #3d6ddd;
    }
  }


  main {
    background-color: $flux-white-blue !important;

    .bx--btn--primary {
      background-color: $flux-darkest-blue;
      &:hover {
        background-color: $flux-dark-blue;
      }
    }

    .bx--link {
      color: $flux-darkest-blue;
      font-weight: 600;

      &:hover {
        color: $flux-dark-blue;
      }
    }
  }
</style>