<script lang="ts">
	import type { HTMLAttributes } from 'svelte/elements';
	interface $$Props extends HTMLAttributes<HTMLHeadElement> {}
</script>

<head {...$$restProps}>
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
	<slot />
</head>
