import { LitElement, html,css } from 'lit-element';

export class MouseTracker extends LitElement {
// Styles for this Component
static get styles() {
return [
 css`
:host {
  display: block;
}
  `
];
}
// The properties that your element exposes.
static get properties() { return {

state: { type: Object },

}};


constructor() {
    super();

    this.state = { x: 0, y: 0 };
  }

  handleMouseMove(event) {
    this.state = {
      x: event.clientX,
      y: event.clientY
    };
  }


render() {

return html`
<div style="height: 100vh;" @mousemove=${this.handleMouseMove}>
        <h1>Move the mouse around!</h1>
        <p>The current mouse position is (${this.state.x}, ${this.state.y})</p>
      </div>

`;
};
};
window.customElements.define('mouse-tracker', MouseTracker);