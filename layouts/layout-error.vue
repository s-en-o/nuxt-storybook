<template>
    <!-- # page wrap
    ================================================== -->
    <main class="s-pagewrap">
        <!-- ## main content
        ==================================================- -->

        <section class="row about-info narrow missing">
            <h2>Well, this is embarrasing...</h2>

            <img
                src="~/assets/images/404.webp"
                alt="Missing"
                class="missing-page-image"
            />

            <Nuxt />

            <!-- end s-content -->
        </section>
        <Footer />
    </main>
    <!-- end -s-pagewrap -->
</template>

<script>
export default {
    name: 'layoutError',
    setup() {},
};
</script>

<style scoped>
.missing-page-image {
    max-width: 70%;
    display: block;
    margin: 0 auto;
}

.missing {
    justify-content: center;
}
</style>
