import { LitElement, html, TemplateResult } from 'lit';
import { ApolloQueryController } from '@apollo-elements/core';
import { customElement } from 'lit/decorators.js';

import { BlogQuery } from './App.query.graphql';

import style from './app.css';
import shared from '../shared.css';

@customElement('apollo-element-app')
export class ApolloApp extends LitElement {
  static readonly is = 'apollo-element-app';

  static readonly styles = [shared, style];

  blogQuery = new ApolloQueryController(this, BlogQuery);

  render(): TemplateResult {
    console.log(this.blogQuery);

    return html`
      <dl>
        <dt>
          Blog Count: ${this.blogQuery.data?.queryBlogList.data.length ?? 0}
        </dt>
      </dl>
    `;
  }
}
