export const backendEndpoint = 'http://localhost:2345/api'


export async function getContexts() {
  const url = `${backendEndpoint}/contexts`
  try {
    const res = await fetch(url);
    const result = await res.json();
    return result;
  } catch (error) {
    throw new Error(`Failed to load ${url}`);
  }

  // const result = ['gcp', 'kind-kind'];

}

export async function getNamespaces(contextId : string) {
  const url = `${backendEndpoint}/namespaces?context=${contextId}`
  try {
    const res = await fetch(url);
    const result = await res.json();
    return result;
  } catch (error) {
    throw new Error(`Failed to load ${url}`);
  }
}
