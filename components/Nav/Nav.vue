<template>
    <header class="s-header">
        <!-- ## site header
            ================================================== -->
        <div class="header-mobile">
            <span class="mobile-home-link"
                ><NuxtLink to="/">Home</NuxtLink></span
            >
            <button
                class="mobile-menu-toggle"
                :class="{ 'is-clicked': mobileNavStatus }"
                @click="onClickMenu"
            >
                <span>Menu</span>
            </button>
        </div>

        <div class="row wide main-nav-wrap">
            <nav class="column lg-12 main-nav">
                <ul>
                    <li>
                        <NuxtLink to="/" class="home-link">Home</NuxtLink>
                    </li>
                    <template v-for="nav in navLinks">
                        <li v-if="!nav.hidden" :key="nav.id">
                            <NuxtLink :to="nav.link" class="smoothscroll">
                                {{ nav.name }}
                            </NuxtLink>
                        </li>
                    </template>
                </ul>
            </nav>
        </div>
        <!-- end s-header -->
    </header>
</template>

<script lang="ts">
import {
    ref,
    computed,
    useMeta,
    defineComponent,
} from '@nuxtjs/composition-api';

export default defineComponent({
    props: {
        navLinks: {
            type: Array,
            required: true,
        },
    },
    head: {},
    setup() {
        // -- Mobile nav status
        let mobileNavStatus = ref(false);
        useMeta(() => ({
            bodyAttrs: {
                class: mobileNavStatus.value ? 'menu-is-open' : '',
            },
        }));
        // FUNCTION
        // -- Menu click
        function onClickMenu() {
            mobileNavStatus.value = !mobileNavStatus.value;
            // bodyClass.value = mobileNavStatus.value ? 'menu-is-open' : '';
        }

        return {
            mobileNavStatus,
            onClickMenu,
        };
    },
});
</script>
