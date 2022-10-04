<template>
    <!-- # page wrap
    ================================================== -->
    <main class="s-pagewrap">
        <!-- Background circle -->
        <div class="circles">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
        </div>

        <Nav :navLinks="navLinks" />

        <!-- ## main content
        ==================================================- -->
        <div class="s-content">
            <Nuxt />
        </div>
        <!-- end s-content -->

        <Footer />
    </main>
    <!-- end -s-pagewrap -->
</template>

<script setup>
const navLinks = [
    {
        id: 2,
        name: 'about',
        link: '/',
        hidden: false,
    },
    {
        id: 3,
        name: 'contact',
        link: '/',
        hidden: false,
    },
    {
        id: 4,
        name: 'blog',
        link: '/',
        hidden: false,
    },
];
</script>
