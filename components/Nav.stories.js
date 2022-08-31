export default {
    title: 'Navigation',
    decorators: [
        () => ({ template: '<main class="s-pagewrap"><story /></main>' }),
    ],
};

// 👇 We create a “template” of how args map to rendering
const Template = (args, { argTypes }) => ({
    props: Object.keys(argTypes),
    template: '<Nav v-bind="$props" />',
});

export const Navigation = Template.bind({});

Navigation.args = {
    navLinks: [
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
    ],
};
