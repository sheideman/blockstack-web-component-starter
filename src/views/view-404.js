import {html } from 'lit-element';
import {BaseView} from './base-view';

export class View404 extends BaseView {

// The properties that your element exposes.
static get properties() { return {

loading: { type: Boolean },

}};
constructor(){
    super();
    this.loading=false;
}
render() {

return html`
${this.loading ? html`<p>Loading...</p>`:html`<h1>404</h1>`}

`;
};

};
window.customElements.define('view-404', View404);