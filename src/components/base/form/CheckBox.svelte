<script>
	import { Checkbox, Table, TableHead, TableHeadCell, TableBody, TableBodyCell, Label, TableBodyRow } from 'flowbite-svelte'
</script>

<Table>
	<TableHead>
		<TableHeadCell>Left column</TableHeadCell>
		<TableHeadCell>Right column</TableHeadCell>
	</TableHead>
	<TableBody class="divide-y dark:divide-gray-700">
		<TableBodyRow class="divide-x dark:divide-gray-700">
			<TableBodyCell><Label for="checkbox1">Default checkbox</Label></TableBodyCell>
			<TableBodyCell><Label for="checkbox2">Disabled checkbox</Label></TableBodyCell>
		</TableBodyRow>
		<TableBodyRow class="divide-x dark:divide-gray-700">
			<TableBodyCell><Checkbox id="checkbox1" checked/></TableBodyCell>
			<TableBodyCell><Checkbox id="checkbox2" disabled/></TableBodyCell>
		</TableBodyRow>
	</TableBody>
</Table>

<Label color='red' class="mt-4 flex items-center font-bold italic">
	Label on the other side <Checkbox class="ml-2"/>
</Label>