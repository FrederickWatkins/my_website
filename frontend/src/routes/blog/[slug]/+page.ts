import { error } from '@sveltejs/kit';
import type { PageLoad } from './&types';

import type { Post, ApiPost} from '../+page'

export const load = (async ({ fetch, params }) => {
	const response = await fetch(`http://localhost:1337/api/posts?filters[slug][$eq]=${params.slug}`);
	const json = await response.json();
    if(json.data.length == 0) {
        throw error(404, 'Post not found');
    }
    const attributes = json.data[0].attributes;
    const post: Post = {
        title: attributes.title,
        description: attributes.description,
        content: attributes.content,
        published: new Date(attributes.publishedAt),
        updated: new Date(attributes.updatedAt),
        slug: attributes.slug
    };
    return post;
}) satisfies PageLoad;