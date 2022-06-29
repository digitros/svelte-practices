import App from './App.svelte';

const app = new App({
	target: document.body,
	props: {
		name: 'Diego',
		lastName: 'Valdez'
	}
});

export default app;