export const backendEndpoint = 'http:// localhost:2345/api'


export async function getContexts() {
  const res = await fetch(`${backendEndpoint}/contexts`);
  const result = await res.json();
  // const result = ['gcp', 'kind-kind'];

  return result;
}

export async function getNamespaces(contextId : string) {
  const res = await fetch(`${backendEndpoint}/namespaces?context=${contextId}`);
  const result = await res.json();

  // const result = ['all', 'flux-system', contextId + '-ns'];

  return result;
}
