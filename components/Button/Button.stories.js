export default {
    title: 'Button',
    argTypes: {
        color: {
            control: { type: 'select', options: ['default', 'red', 'green'] },
        },
    },
};

// 👇 We create a “template” of how args map to rendering
const Template = (args, { argTypes }) => ({
    props: Object.keys(argTypes),
    template: '<Button v-bind="$props" />',
});

//👇 Each story then reuses that template
export const Default = Template.bind({});

Default.args = {
    primary: false,
    label: 'Button default',
};

//👇 Each story then reuses that template
export const Primary = Template.bind({});

Primary.args = {
    primary: true,
    label: 'Button primary',
};
