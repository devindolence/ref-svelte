<script>
	import { Heading, Blockquote, P, Rating } from 'flowbite-svelte';
</script>

<Heading tag='h3' class='mb-4'>
	Props
</Heading>
<div>
	border	boolean	false
	italic	boolean	true
	borderClass	string	'border-l-4 border-gray-300 dark:border-gray-500'
	bgClass	string	'bg-gray-50 dark:bg-gray-800'
	bg	boolean	false
	baseClass	string	'font-semibold text-gray-900 dark:text-white'
	alignment	'left' | 'center' | 'right'	'left'
	size	BlockQuoteType	'lg'

	size > lg, xl, 2xl
</div>
<br>

<Heading tag='h3' class='mb-4'>
	Default blockquote
</Heading>
<div>
	<Blockquote size='xl'>
		"Flowbite is just awesome. It contains tons of predesigned components and pages starting from
		login screen to complex dashboard. Perfect choice for your next SaaS application."
	</Blockquote>
</div>
<br>


<Heading tag='h3' class='mb-4'>
	Solid background with align center
</Heading>
<div>
	<P color='text-gray-500 dark:text-gray-400'>Does your user know how to exit out of screens? Can
		they follow your intended user journey and buy something from the site you’ve designed? By
		running a usability test, you’ll be able to see how users will interact with your design once
		it’s live.</P>
	<Blockquote alignment='center' border bg class='p-4 my-4'>
		<P size='xl' height='relaxed'>"Flowbite is just awesome. It contains tons of predesigned
			components and pages starting from login screen to complex dashboard. Perfect choice for your
			next SaaS application."</P>
	</Blockquote>
	<P color='text-gray-500 dark:text-gray-400'>First of all you need to understand how Flowbite
		works. This library is not another framework. Rather, it is a set of components based on
		Tailwind CSS that you can just copy-paste from the documentation.</P>
</div>

<br>
<Heading tag='h3' class='mb-4'>
	Blockquote icon with align right
</Heading>
<div>
	<Blockquote alignment='right' size='xl'>
		<svg aria-hidden='true' class='w-10 h-10 text-gray-400 dark:text-gray-600' viewBox='0 0 24 27'
				 fill='none' xmlns='http://www.w3.org/2000/svg'>
			<path
				d='M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z'
				fill='currentColor' />
		</svg>
		"Flowbite is just awesome. It contains tons of predesigned components and pages starting from
		login screen to complex dashboard. Perfect choice for your next SaaS application."
	</Blockquote>
</div>

<br>
<Heading tag='h3' class='mb-4'>
	Paragraph context
</Heading>
<div>
	<P class='mb-3' color='text-gray-500 dark:text-gray-400'>Track work across the enterprise through
		an open, collaborative platform. Link issues across Jira and ingest data from other software
		development tools, so your IT support and operations teams have richer contextual information to
		rapidly respond to requests, incidents, and changes.</P>
	<div class='grid grid-cols-1 md:gap-6 md:grid-cols-2'>
		<P class='mb-3' color='text-gray-500 dark:text-gray-400'>Track work across the enterprise
			through an open, collaborative platform. Link issues across Jira and ingest data from other
			software development tools, so your IT support and operations teams have richer contextual
			information to rapidly respond to requests, incidents, and changes.</P>
		<Blockquote class='mb-3' size='xl'>
			" Flowbite is just awesome. It contains tons of predesigned components and pages starting from
			login screen to complex dashboard. Perfect choice for your next SaaS application. "
		</Blockquote>
	</div>
	<P class='mb-3' color='text-gray-500 dark:text-gray-400'>Deliver great service experiences fast -
		without the complexity of traditional ITSM solutions.Accelerate critical development work,
		eliminate toil, and deploy changes with ease, with a complete audit trail for every change.</P>
</div>

<!--User testimonial-->
<div>
	<figure class='mx-auto max-w-screen-md text-center'>
		<svg aria-hidden='true' class='mx-auto mb-3 w-12 h-12 text-gray-400 dark:text-gray-600'
				 viewBox='0 0 24 27' fill='none' xmlns='http://www.w3.org/2000/svg'>
			<path
				d='M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z'
				fill='currentColor' />
		</svg>
		<Blockquote alignment='center' size='2xl'>
			"Flowbite is just awesome. It contains tons of predesigned components and pages starting from
			login screen to complex dashboard. Perfect choice for your next SaaS application."
		</Blockquote>
		<figcaption class='flex justify-center items-center mt-6 space-x-3'>
			<img class='w-6 h-6 rounded-full'
					 src='https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png'
					 alt='Micheal Gough profile'>
			<div class='flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700'>
				<cite class='pr-3 font-medium text-gray-900 dark:text-white'>Micheal Gough</cite>
				<cite class='pl-3 text-sm font-light text-gray-500 dark:text-gray-400'>CEO at Google</cite>
			</div>
		</figcaption>
	</figure>
</div>

<!--User Review -->
<div>
	<figure class='max-w-screen-md'>
		<div class='flex items-center mb-4 text-yellow-300'>
			<Rating total={5} rating={4.66} ceil size='24' />
		</div>
		<Blockquote italic={false} size='2xl'>
			"Flowbite is just awesome. It contains tons of predesigned components and pages starting from
			login screen to complex dashboard. Perfect choice for your next SaaS application."
		</Blockquote>
		<figcaption class='flex items-center mt-6 space-x-3'>
			<img class='w-6 h-6 rounded-full'
					 src='https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png'
					 alt='Bonnie Green profile'>
			<div class='flex items-center divide-x-2 divide-gray-300 dark:divide-gray-700'>
				<cite class='pr-3 font-medium text-gray-900 dark:text-white'>Bonnie Green</cite>
				<cite class='pl-3 text-sm font-light text-gray-500 dark:text-gray-400'>CTO at
					Flowbite</cite>
			</div>
		</figcaption>
	</figure>
</div>