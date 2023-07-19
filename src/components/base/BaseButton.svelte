<script>
  import { Button, GradientButton } from 'flowbite-svelte';

  export let buttonStyle = {
    pill: false,
    outline: false,
    size: 'lg',
    btnClass: undefined,
    color: 'primary',
    shadow: false,
    disabled: false
  };
  export let gradient = false;
	export let content = 'button';
	export let clickEvent = function() {
	};
</script>
{#if gradient === false}
  <GradientButton
    {...buttonStyle}
    on:click={clickEvent}
  >
    {content}
    <slot name='icon'>
    </slot>
    <slot name='indicator'>
    </slot>
  </GradientButton>
{:else}
  <Button
    {...buttonStyle}
    on:click={clickEvent}
  >
    <slot name='prefix-icon'>
    </slot>
    {content}
    <slot name='suffix-icon'>
      <!--		<img src='/images/favicon.png'>-->
      <!--			or			-->
      <!--			<svg>-->
      <!--				<path d=''>-->
      <!--				</path>-->
      <!--			</svg>-->
    </slot>
    <slot name='indicator'>
    </slot>
  </Button>
{/if}
