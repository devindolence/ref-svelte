<script>
	import { Listgroup } from 'flowbite-svelte'
	let simpleList = ["Profile", "Settings", "Messages", "Download"]
</script>

<Listgroup items={simpleList} let:item class="w-48">
	{item}
</Listgroup>