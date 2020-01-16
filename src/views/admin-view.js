import {html } from 'lit-element';
import {BaseView} from './base-view';
import {blockstack} from '../../utils/blockstack-auth.js';
export class AdminView extends BaseView {

render() {
return html`
<h1>Admin View for: ${this.user.username}</h1>
 uuid: ${blockstack.makeUUID4()}
`;
};
firstUpdated(){
    console.log(blockstack.makeECPrivateKey());
}
};
window.customElements.define('admin-view', AdminView);