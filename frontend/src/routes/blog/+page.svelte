<script lang="ts">
	import type PageData from './$types';
	import Navbar from '../Navbar.svelte';
	import type { Post } from './+page';
	export let data: import('./$types').PageData;
</script>

<Navbar />

<h1 class="title">Blog Posts</h1>
<div class="posts">
	{#each data.posts as post (post.slug)}
		<a href={`/blog/${post.slug}`} class="post">
			<div>
				<h2>{post.title}</h2>
			</div>
			<div class="details">
				<h3>{post.description}</h3>
				<h3>{post.published.toISOString().split('T')[0]}</h3>
			</div>
		</a>
	{/each}
</div>

<style>
	.title {
		color: darkslategrey;
	}

	.posts {
		display: flex;
		flex-direction: vertical;
	}
	.post {
		width: 100%;
		padding: 10px;
        outline-style: solid;
        outline-width: 1px;
        outline-color: whitesmoke;;
        color: darkslategray;
        text-decoration: none;
	}
	.post:hover {
		background-color: whitesmoke;
	}
	.details {
		display: flex;
		flex-direction: horizontal;
		justify-content: space-between;
	}
</style>
