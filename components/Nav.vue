<template>
    <header class="s-header">
        <!-- ## site header
            ================================================== -->
        <div class="header-mobile">
            <span class="mobile-home-link"
                ><NuxtLink to="/">Home</NuxtLink></span
            >
            <button class="mobile-menu-toggle">
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

<script>
export default {
    props: {
        navLinks: {
            type: Array,
            required: true,
        },
    },
    data() {
        return {
            // navLinks: [
            //     {
            //         id: 2,
            //         name: 'about',
            //         link: '/',
            //         hidden: false,
            //     },
            //     {
            //         id: 3,
            //         name: 'contact',
            //         link: '/',
            //         hidden: false,
            //     },
            //     {
            //         id: 4,
            //         name: 'blog',
            //         link: '/',
            //         hidden: false,
            //     },
            // ],
        };
    },
};
</script>
