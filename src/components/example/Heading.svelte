<script>
	import {
		Heading,
		Mark,
		Span,
		Breadcrumb,
		BreadcrumbItem,
		Badge,
		Secondary
	} from 'flowbite-svelte';
</script>

<div>
	<Heading tag='h1'>
		# Heading h1
	</Heading>
	<Heading tag='h2'>
		# Heading h2
	</Heading>
	<Heading tag='h3'>
		# Heading h3
	</Heading>
	<Heading tag='h4'>
		# Heading h4
	</Heading>
	<Heading tag='h5'>
		# Heading h5
	</Heading>
	<Heading tag='h6'>
		# Heading h6
	</Heading>

	<Heading tag='h3'>
		# Heading with
		<Span highlight decorationClass='decoration-blue-40'>
			highlight
		</Span>
	</Heading>
	<Heading tag='h3'>
		# Heading with
		<Mark>
			Mark
		</Mark>
	</Heading>
	<Heading tag='h3'>
		# Heading with
		<Span gradient>
			gradient
		</Span>
	</Heading>
	<Heading tag='h3'>
		# Heading with
		<Span underline>
			underline
		</Span>
	</Heading>

	<Heading tag='h3'>
		Breadcrumb menu
	</Heading>
	<Breadcrumb class='mb-4'>
		<BreadcrumbItem href='/' home>Home</BreadcrumbItem>
		<BreadcrumbItem href='/'>Settings</BreadcrumbItem>
		<BreadcrumbItem>Team</BreadcrumbItem>
	</Breadcrumb>

	<Heading tag='h3'>
		# Heading
		<Badge>
			Badge
		</Badge>
	</Heading>

	<Heading tag='h3'>
		# Heading
		<Secondary>
			Secondary
		</Secondary>
	</Heading>

</div>