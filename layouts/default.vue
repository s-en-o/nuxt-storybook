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

        <Nav />

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

<script>
export default {
    name: 'DefaultLayout',
    setup() {},
};
</script>
