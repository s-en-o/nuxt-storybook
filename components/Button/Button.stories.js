export default {
    title: 'Button',
    argTypes: {
        color: {
            control: { type: 'select', options: ['default', 'red', 'green'] },
        },
    },
};

// ๐ We create a โtemplateโ of how args map to rendering
const Template = (args, { argTypes }) => ({
    props: Object.keys(argTypes),
    template: '<Button v-bind="$props" />',
});

//๐ Each story then reuses that template
export const Default = Template.bind({});

Default.args = {
    primary: false,
    label: 'Button default',
};

//๐ Each story then reuses that template
export const Primary = Template.bind({});

Primary.args = {
    primary: true,
    label: 'Button primary',
};
