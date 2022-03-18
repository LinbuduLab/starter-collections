import { html } from 'lit';
import { fixture, expect } from '@open-wc/testing';
import { LitComponent } from '../src/LitComponent.js';
import '../src/lit-component.js';

describe('LitComponent', () => {
  it('has a default title "Hey there" and counter 5', async () => {
    const el = await fixture<LitComponent>(html`<lit-component></lit-component>`);

    expect(el.title).to.equal('Hey there');
    expect(el.counter).to.equal(5);
  });

  it('increases the counter on button click', async () => {
    const el = await fixture<LitComponent>(html`<lit-component></lit-component>`);
    el.shadowRoot!.querySelector('button')!.click();

    expect(el.counter).to.equal(6);
  });

  it('can override the title via attribute', async () => {
    const el = await fixture<LitComponent>(html`<lit-component title="attribute title"></lit-component>`);

    expect(el.title).to.equal('attribute title');
  });

  it('passes the a11y audit', async () => {
    const el = await fixture<LitComponent>(html`<lit-component></lit-component>`);

    await expect(el).shadowDom.to.be.accessible();
  });
});
