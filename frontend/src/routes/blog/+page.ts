import type { PageLoad } from './&types';

export type Post = {
	title: string;
	description: string;
	content: string;
	published: Date;
	updated: Date;
	slug: string;
};

type ApiPost = {
	id: number;
    attributes: ApiAttributes;
};

type ApiAttributes = {
    title: string;
	description: string;
	content: string;
	slug: string;
	createdAt: string;
	updatedAt: string;
	publishedAt: string;
}

export const load = (async ({ fetch }) => {
	const response = await fetch('http://localhost:1337/api/posts');
	const json = await response.json();
	const posts: Post[] = json.data.map((post: ApiPost) => {
        const attributes = post.attributes;
		return {
			title: attributes.title,
			description: attributes.description,
			content: attributes.content,
			published: new Date(attributes.publishedAt),
			updated: new Date(attributes.updatedAt),
			slug: post.attributes
		};
	});
	return { posts };
}) satisfies PageLoad;
