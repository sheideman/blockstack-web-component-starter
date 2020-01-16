import { html } from 'lit-element';
import { BaseView } from "./base-view";

export class HomeView extends BaseView {
// Baseview handles state and property management
render() {
return html`
 <section>
     ${!this.loading ? html`<h1>Home view</h1>`:html`<h1>Loading...</h1>`}
 </section>
`;
};

  
};
window.customElements.define('home-view', HomeView);