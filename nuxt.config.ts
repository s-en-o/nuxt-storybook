import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import { NuxtConfig } from '@nuxt/types';

const config: NuxtConfig = {
    // Target: https://go.nuxtjs.dev/config-target
    target: 'static',

    // Global page headers: https://go.nuxtjs.dev/config-head
    head: {
        title: 'nuxt-test',
        htmlAttrs: {
            lang: 'en',
        },
        meta: [
            { charset: 'utf-8' },
            {
                name: 'viewport',
                content: 'width=device-width, initial-scale=1',
            },
            { hid: 'description', name: 'description', content: '' },
            { name: 'format-detection', content: 'telephone=no' },
        ],
        link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    },

    // Global CSS: https://go.nuxtjs.dev/config-css
    css: [
        // SASS file in the project
        '@/assets/css/styles.css',
        '@/assets/css/vendor.css',
    ],

    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: [],

    // Auto import components: https://go.nuxtjs.dev/config-components
    components: [{ path: '~/components', extensions: ['vue'] }],

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [
        '@nuxt/postcss8',
        '@nuxtjs/composition-api/module',
        '@nuxt/typescript-build',
    ],

    // Modules: https://go.nuxtjs.dev/config-modules
    modules: [],

    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {},

    storybook: {
        // Options
        stories: [
            '~/components/**/*.stories.js',
            '~/components/**/*.stories.ts',
        ],
        parameters: {
            viewport: {
                viewports: INITIAL_VIEWPORTS,
            },
        },
    },
};

export default config;
