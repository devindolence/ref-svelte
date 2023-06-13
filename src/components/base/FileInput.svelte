<script>
	import { Fileupload, Label, Listgroup, ListgroupItem } from 'flowbite-svelte'
	let files;  // FileList type
</script>

<Label class="pb-2" for='multiple_files' >Upload multiple files</Label>
<Fileupload id='multiple_files' multiple bind:files />
<Listgroup items={files} let:item class="mt-2">
	{#if item}
		{item.name}
	{:else}
		<ListgroupItem>No files</ListgroupItem>
	{/if}
</Listgroup>