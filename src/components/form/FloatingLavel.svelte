<script>
	import { FloatingLabelInput, Helper } from 'flowbite-svelte';
</script>

<div id="exampleWrapper" class="grid gap-6 items-end w-full md:grid-cols-3">
	<FloatingLabelInput style="filled" id="floating_filled" name="floating_filled" type="text" label="Floating filled"/>
	<FloatingLabelInput style="outlined" id="floating_outlined" name="floating_outlined" type="text" label="Floating outlined" />
	<FloatingLabelInput id="floating_standard" name="floating_standard" type="text" label="Floating standard" />
</div>