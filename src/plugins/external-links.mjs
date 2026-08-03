const externalHttpUrl = /^https?:\/\//i;

/**
* Open authored absolute HTTP(S) links in a separate tab without giving the
* destination access to the source window. Existing rel tokens are preserved.
*/
export default {
	name: 'external-http-links',
	element: {
		filter: ['a'],
		visit(node, context) {
			const href = node.properties?.href;
			if (typeof href !== 'string' || !externalHttpUrl.test(href)) return;

			const currentRel = node.properties?.rel;
			const relTokens = new Set(
				(Array.isArray(currentRel) ? currentRel : String(currentRel ?? '').split(/\s+/)).filter(Boolean)
			);
			relTokens.add('noopener');
			relTokens.add('noreferrer');

			context.setProperty(node, 'target', '_blank');
			context.setProperty(node, 'rel', [...relTokens].join(' '));
		},
	},
};
