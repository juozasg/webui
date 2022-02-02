<script lang="ts">
	export let name: string = 'Flux Web UI';
	import Select, { Option } from '@smui/select';
  import Icon from '@smui/select/icon';

	let contextNames = ['gcp', 'kind-kind'];
	let selectedContext: string = contextNames[0];

	let selectedNamespace = 'all';
</script>

<main>
	<div class="topnav">
		<div>
			<Select bind:value={selectedContext} label="Context">
				<Icon class="material-icons" slot="leadingIcon">hub</Icon>
				{#each contextNames as cname}
					<Option value={cname}>{cname}</Option>
				{/each}
			</Select>
	
			<pre class="status">Context: {selectedContext}</pre>
		</div>

		<div>
			<Select bind:value={selectedNamespace} label="Namespace">
				<Icon class="material-icons" slot="leadingIcon">spoke</Icon>
					<Option value=all>all</Option>
			</Select> 
		</div>
	</div>
	
	<h1>Hello {name}!</h1>

</main>

<style>
	main {
		text-align: center;
		padding: 0em;
		max-width: 240px;
		margin: 0 auto;
	}

	.topnav {
		display: flex;
		justify-content: flex-end;
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