import { html} from 'lit-element';
import {BaseView} from './base-view';
export class SnackbarMessage extends BaseView {

// The properties that your element exposes.
static get properties() { return {
open:{type:Boolean},
notification_title:{type:String},
notification_body:{type:String},
notification_icon:{type:String}
}};
constructor(){
    super()
    this.open = false;
    this.notification_text = "";
    
}
render() {

return html`
${this.open ? html`<div class="message-window animated slideInRight" style="position:fixed; top: 1em; right:1em; display:flex; justify-content:center; align-items:center; flex-direction:column; z-index:9999;">
          
    <div class="modal" style="padding: 10px;
    background: #fff;
    width: 300px;
    border-radius: 4px;
    box-shadow: 1px 1px 2px rgba(0,0,0,0.4);">
    <div style="background:#000; color:#fff; width:24px; height:24px; border-radius:50%;
    position: absolute;
    top: 10px;
    right: 10px;
    display: flex;
    justify-content: center;
    align-items: center;" @click="${this.close}"><i class="mdi mdi-close"></i></div>
    <div class="grid" style="display:grid; grid-template-rows:1fr; grid-template-columns:60px auto">
        <div class="profile_pic" style="height: 50px; width: 50px; display:flex; flex-direction:column; justify-content:center; align-items:center;">
        <i class="mdi ${this.notification_icon} beaukay-pink" style="font-size:50px;"></i>
        </div>
        <div>
<p><strong>${this.notification_title}</strong></p><br>
<p>${this.notification_body}</p>
        </div>
    <div>

</div>
    </div>
    
    </div>
</div>`:null}
`;
};

firstUpdated() {
    
    socket.on('SNACKBAR_MESSAGE', (socket_data)=>{
        console.log("SNACKBAR MESSAGE", socket_data);
    //    store.dispatch('updateProfile')
        this.notification_title = socket_data.title;
        this.notification_body = socket_data.body;
        this.notification_icon = socket_data.icon;
        this.open = true;
       
       
        setTimeout(()=>{
            const snackbar = document.querySelector('.message-window');
            if(!snackbar){
                return;
            }
            snackbar.classList.remove('slideInRight');
            snackbar.classList.add('slideOutRight');
            setTimeout(()=>{
                this.open = false;
                this.notification_text = "";
        
        snackbar.classList.remove('slideOutRight');
            snackbar.classList.add('slideInRight');
                this.requestUpdate();
            },1000)
           
        }, 3000);
    });
}
open(){
if(this.open){
    return;
}
this.open = true;

}
close(){
    const snackbar = document.querySelector('.message-window');
    snackbar.classList.remove('slideInRight');
    snackbar.classList.add('slideOutRight');
    setTimeout(()=>{
        this.open = false;
        this.requestUpdate();
    }, 1000);
   
}
toggle(){
this.open = !this.open;
}

};
window.customElements.define('snackbar-message', SnackbarMessage);