
import { html} from 'lit-element';

import { BaseView } from './base-view';

class BottomExpandingPanel extends BaseView {


  render() {
    return html`
  
<div id="panel" class="animated">
  <p>Accordion Panel</p>
</div>
<button class="accordion" @click="${this.toggleAccordion}">Click Me to expand the panel</button>

<style>
    .accordion {
    background-color: #eee;
    color: #444;
    cursor: pointer;
    padding: 18px;
    width: 100vw;
    text-align: left;
    border: none;
    outline: none;
    transition: 0.4s;
    position:fixed;
    bottom:30px;
    width:100vw;
    margin-top:30px;
    z-index:100;
  }
  
  .active, .accordion:hover {
    background-color: #ccc;
  }
  #panel.open{
      transform:scale(1);
      display: block;
      height:80vh;
      overflow-y:auto;
  }
 #panel {
     width:100vw;
     position:fixed;
    bottom:30px;
    width:100vw;
    height:0;
    z-index:100;
   
     margin-top:30px;
    padding: 0 18px;
    background-color: white;
    display: none;
    overflow: hidden;
   
     background:var(--secondary-color, #eee);

    transition:all 1.5s ease-in-out;
    -webkit-transform-origin: 100% 0%;
    -moz-transform-origin: 100% 0%;
         transform-origin: 100% 0%;
  }

</style>
    `;
  }

  toggleAccordion(e){
    e.target.classList.toggle("active");
    
    /* Toggle between hiding and showing the active panel */
    var panel = document.querySelector("#panel");
    if (panel.classList.contains('open')) {
      panel.classList.remove('open', 'fadeInUp');
      panel.classList.add('fadeOutDown');
    } else {
        panel.classList.remove('fadeOutDown');
      panel.classList.add('open', 'fadeInUp');
    }
  }

  
}
window.customElements.define('bottom-expanding-panel', BottomExpandingPanel);



