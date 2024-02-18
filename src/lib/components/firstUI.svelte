<!--C:\Users\NEWOWNER\OneDrive\Desktop\ruizTechServices\24hourgpt\svelte-24hourgpt\src\lib\components\firstUI.svelte-->
<script>
	import { Input, GradientButton, Dropdown, DropdownItem, DropdownDivider, DropdownHeader } from 'flowbite-svelte';
</script>

<div class="flex flex-col justify-between h-full">
	<GradientButton shadow color="green" class="w-1/3 lg:w-20">menu</GradientButton>
    <Dropdown>
		<DropdownItem href="#item-1">Login</DropdownItem>
		<DropdownItem href="#item-2">Register</DropdownItem>    
    </Dropdown>
	<div class="text-center flex justify-center items-center">
		<h1 class="lg:text-6xl text-4xl font-bold">24hourGPT</h1>
	</div>
	<div class="text-center flex justify-center items-center">
		<Input type="text" class="" placeholder="What is on your mind?..." /><!--I want to make the placeholde display dynamic content like varying the outputs of what is displayed as a placeholder.-->
		<GradientButton shadow color="green" class="">send</GradientButton>
	</div>
</div>

<style>
</style>
