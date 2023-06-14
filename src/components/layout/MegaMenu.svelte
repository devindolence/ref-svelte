<script>
	import { Navbar, NavBrand, NavHamburger, NavUl, NavLi, Chevron, MegaMenu } from 'flowbite-svelte'
	let menu = [
		{name: 'About us', href: '/about'},
		{name: 'Blog', href: '/blog'},
		{name: 'Contact us', href: '/contact'},
		{name: 'Library', href: '/library'},
		{name: 'Newsletter', href: '/news'},
		{name: 'Support Center', href: '/support'},
		{name: 'Resources', href: '/resource'},
		{name: 'Playground', href: '/play'},
		{name: 'Terms', href: '/terms'},
		{name: 'Pro Version', href: '/pro'},
		{name: 'License', href: '/license'},
	];
</script>

<Navbar let:hidden let:toggle>
	<NavBrand href="/">
		<img src="/images/flowbite-svelte-icon-logo.svg" class="mr-3 h-6 sm:h-9" alt="Flowbite Logo"/>
		<span class="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Flowbite</span>
	</NavBrand>
	<NavHamburger on:click={toggle} />
	<NavUl {hidden}>
		<NavLi href="/">Home</NavLi>
		<NavLi class="cursor-pointer"><Chevron aligned>Mega menu</Chevron></NavLi>
		<MegaMenu items={menu} let:item>
			<a href={item.href} class="hover:text-primary-600 dark:hover:text-primary-500">{item.name}</a>
		</MegaMenu>
		<NavLi href="/services">Services</NavLi>
		<NavLi href="/services">Products</NavLi>
		<NavLi href="/services">Contact</NavLi>
	</NavUl>
</Navbar>