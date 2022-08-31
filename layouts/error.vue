<template>
    <div>
        <template v-if="error.statusCode === 404">
            <h3>
                Looks like the page you're looking for isn't here.<br />
                Could be my fault, could be yours,
                <a href="/">let's get you back home.</a>
            </h3>
        </template>
        <template v-else>
            <h1>Uh oh</h1>
            <p>An error occurred</p>
        </template>
    </div>
</template>

<script>
export default {
    name: 'errorPage',
    props: ['error'],
    layout: 'layout-error',
    head() {
        return {
            title: 'Not a real page',
        };
    },
};
</script>

<style scoped>
.missing-page-image {
    max-width: 70%;
    display: block;
    margin: 0 auto;
}
</style>
