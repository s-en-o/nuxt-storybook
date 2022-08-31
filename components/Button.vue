<template>
    <button
        class="btn"
        :class="{ 'btn--medium': primary }"
        :style="`color: ${color}`"
    >
        {{ label }}
    </button>
</template>

<script>
export default {
    props: {
        primary: {
            type: Boolean,
            required: true,
        },
        label: {
            type: String,
            required: true,
        },
        color: {
            type: String,
            required: false,
        },
    },
};
</script>
