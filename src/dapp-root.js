import { html } from "lit-element";
import { BaseView } from "./views/base-view";
import { Router } from "@vaadin/router";
import {userSession,blockstack} from '../utils/blockstack-auth.js';

export class DappRoot extends BaseView {

  render() {
    return html`
      <header class="app-header">
        <a href="/" class="logo"
          ><img
            style="height:100%;"
            src="/assets/images/soigne_full_spectrum_logo.svg"
            alt="launch logo"
        /></a>
        <div class="right-menu">
          ${!this.user
            ? html`
                <button class="icon-btn" @click="${this.blockstackSignIn}">
                  <i class="mdi mdi-account-circle btn-icon"></i>
                </button>
              `
            : html`
                <p>Hello, <span id="heading-name">${this.user.username}</span>!</p>
                <p>
                    <div class="img-rounded">
                  <img class="avatar" id="avatar-image" src="${this.person.avatarUrl || '/assets/images/avatar-placeholder.png'}" />
                  </div>
                  <button
                    class="btn btn-primary btn-lg"
                    id="signout-button"
                    @click="${this.blockstackSignOut}"
                  >
                    Log Out
                  </button>
                </p>
              `}
        </div>
      </header>
      <aside id="sidebar" class="animated" style="min-width:300px;">
        <button
          class="close-btn"
          style="float:right;"
          @click="${this.onMenuToggle}"
        >
          <i
            class="mdi ${this.drawerOpen ? "mdi-close" : "mdi-menu"} btn-icon"
          ></i>
        </button>
        <ul class="sidebar">
          <li>
            <a href="/folders">Folders</a>
            <button>Notes</button>
          </li>
          <li>
            <button>Reminders</button>
          </li>
          <hr />
          <li>
            <small>LABELS</small>
            <button>Edit Labels</button>
          </li>
        </ul>
        <div class="mint-footer">
          Made with ♥️ by
          <a
            href="https://terrapin-digital.com"
            style="font-weight:bold; color:#008361;"
            >Terrapin Digital Solutioins</a
          ><br /><small
            >&copy;${new Date().getFullYear()} all rights reserved</small
          ><br /><a href="/privacy">Privacy</a> <a href="/terms">Terms</a>
          <a href="/licenses">Licenses</a>
        </div>
      </aside>
      <main id="outlet" style="position:relative; top:50px;"></main>
      <footer class="app-footer">
        <nav class="bottom-mobile-nav" style="background:#eee;">
          <div class="menu-item">
            <a href="mailto:info@terrapin-digital.com"
              ><i class="mdi mdi-mail btn-icon"></i
            ></a>
          </div>
          <div class="menu-item">
            <a href="tel:+14805165668"
              ><i class="mdi mdi-phone btn-icon"></i
            ></a>
          </div>
          <div class="menu-item">
            <a
              href="/help"
              class="footer icon-btn"
              style="text-decoration:none; color:#fff;"
              ><i class="mdi mdi-help-box btn-icon"></i
            ></a>
          </div>
          <div class="menu-item">
            <button class="footer icon-btn" @click="${this.onMenuToggle}">
              <i
                class="mdi ${this.drawerOpen
                  ? "mdi-close"
                  : "mdi-menu"} btn-icon"
              ></i>
            </button>
          </div>
        </nav>
      </footer>
    `;
  }
  onMenuToggle() {
    // //console.log("Toggle Menu");
    const sidebar = document.querySelector("#sidebar");
    if (sidebar.hasAttribute("open")) {
      this.dispatch("updateDrawerOpened", false);
      sidebar.classList.remove("slideInLeft");
      sidebar.removeAttribute("open");
    } else {
      this.dispatch("updateDrawerOpened", true);
      sidebar.classList.add("slideInLeft");
      sidebar.setAttribute("open", true);
    }
  }

  firstUpdated() {
    const router = new Router(document.querySelector("#outlet"));
    router.setRoutes([
      {
        name: "home",
        path: "/",
        action: () => {
          import("./views/home-view");
        },
        component: "home-view"
      },
      {
        name: "admin",
        path: "/me",
        action: () => {
          import("./views/admin-view");
        },
        component: "admin-view"
      },
      {
        name:"404",
        path: "(.*)",
        action: () => {
          import("./views/view-404");
        },
        component: "view-404"
      }
    ]);
    this.setState({loading:true});
    if (userSession.isUserSignedIn()) {
      var profile = userSession.loadUserData().profile
      this.showProfile(profile);
     return window.dispatchEvent(new CustomEvent("vaadin-router-go", { detail: { pathname: `/me` } }));
      
      
    } else if (userSession.isSignInPending()) {
      userSession.handlePendingSignIn().then((userData)=> {
          console.log(userData)
      //   window.location = window.location.origin
      this.setState({person:userData.profile, user:userData,profile:userData.profile,userSession});
      window.dispatchEvent(new CustomEvent("vaadin-router-go", { detail: { pathname: `/me` } }));
     return this.setState({loading:false});
      })
    } else{
     return this.setState({loading:false});
    }
  }
  showProfile(profile) {
    var person = new blockstack.Person(profile);
    console.log(person);
    this.setState({person:person, user:userSession.loadUserData(),profile,userSession});
    window.dispatchEvent(new CustomEvent("vaadin-router-go", { detail: { pathname: `/me` } }));
    this.setState({loading:false});
  }
  blockstackSignIn(e) {
    e.preventDefault();
    userSession.redirectToSignIn();

  }
  blockstackSignOut(e) {
    e.preventDefault();
    userSession.signUserOut("/");
  }
  
}
window.customElements.define("dapp-root", DappRoot);
