import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	envPrefix: 'REACT_APP_', // lmao
	plugins: [sveltekit()]
});
