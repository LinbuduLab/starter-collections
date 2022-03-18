import { html, TemplateResult } from 'lit';
import '../src/lit-app.js';

export default {
  title: 'LitApp',
  component: 'lit-app',
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

interface Story<T> {
  (args: T): TemplateResult;
  args?: Partial<T>;
  argTypes?: Record<string, unknown>;
}

interface ArgTypes {
  title?: string;
  backgroundColor?: string;
}

const Template: Story<ArgTypes> = ({ title, backgroundColor = 'white' }: ArgTypes) => html`
  <lit-app style="--lit-app-background-color: ${backgroundColor}" .title=${title}></lit-app>
`;

export const App = Template.bind({});
App.args = {
  title: 'My app',
};
