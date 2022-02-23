import Home from './components/pages/Home.svelte'
import Sources from './components/pages/Sources.svelte'
import Kustomizations from './components/pages/Kustomizations.svelte'

export default {
  '/': Home,
  '/sources': Sources,
  '/kustomizations': Kustomizations
}