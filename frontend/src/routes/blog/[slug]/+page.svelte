<script lang="ts">
    import snarkdown from 'snarkdown';
	import type PageData from './$types';
	import Navbar from '../../Navbar.svelte';
	export let data: import('./$types').PageData;
</script>

<Navbar />

<h1>{data.title}</h1>
<h2>{data.description}</h2>
<h4>
Published: {data.published.toISOString().split('T')[0]} <br />
Last Updated: {data.published.toISOString().split('T')[0]}
</h4>

{@html snarkdown(data.content)}