<script>
  import {
    Header,
    SideNav,
    SideNavItems,
    SideNavLink,
    Select,
    SelectItem,
    Content,
    Grid,
    Row,
    Column,
  } from "carbon-components-svelte";

  import {location} from 'svelte-spa-router';


</script>

<Header>
  <img class="logo" src="/favicon.png" alt="Flux Logo">
  <p class="title">Flux Web UI</p>
  <div class="scope-selectors">
    <Select inline labelText="Context" selected="gcp">
      <SelectItem value="gcp" text="gcp" />
      <SelectItem value="kind-kind" text="kind-kind" />
    </Select>

    <Select inline labelText="Namespace" selected="all">
      <SelectItem value="all" text="all" />
      <SelectItem value="flux-system" text="flux-system" />
    </Select>
  </div>
</Header>

<SideNav fixed isOpen=true>
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