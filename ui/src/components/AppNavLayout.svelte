<script lang="ts">
  import {
    Header,
    SideNav,
    SideNavItems,
    SideNavLink,
    Content,
    Grid,
    Row,
    Column,
  } from "carbon-components-svelte";

  import { location } from 'svelte-spa-router';

  import ScopeSelectors from "./ScopeSelectors.svelte";

  import { context, namespace } from '../stores';
</script>

<Header>
  <img class="logo" src="/favicon.png" alt="Flux Logo">
  <p class="title">Flux Web UI</p>
  <ScopeSelectors/>
</Header>

<SideNav fixed isOpen={true}>
  <SideNavItems>
    <SideNavLink text="Sources" href="#/sources" isSelected={$location == '/sources'} />
    <SideNavLink text="Kustomizations" href="#/kustomizations" isSelected={$location == '/kustomizations'}/>
    <SideNavLink text="Helm Releases" href="#/helm-releases" isSelected={$location == '/helm-releases'} />
    <SideNavLink text="Events" href="#/events" isSelected={$location == '/events'} />
  </SideNavItems>
</SideNav>

<Content>
  <Grid>
    <Row>
      <Column>
        <p>Context {$context}</p>
        <p>Namespace {$namespace}</p>
        <slot></slot>
      </Column>
    </Row>
  </Grid>
</Content>

<style>
  /* hide the hamburger */
  :global(.bx--header__menu-toggle), :global(.bx--header__name) {
    display: none !important;
  }

  :global(header label) {
    color: #afafaf !important;
  }

  .logo {
    height: 30px;
    margin-left: 0.5rem;
  }

  .title {
    margin-left: 0.75rem;
    font-size: 1.25rem;
    min-width: 130px;
    color: white;
  }
</style>