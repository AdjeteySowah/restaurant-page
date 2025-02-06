
import "./styles.css";

import { homeTab } from "./modules/home.js";
import { menuTab } from "./modules/menu.js";
import { contactTab } from "./modules/contact.js";

let restaurant = {
   init: function() {
      this.cacheDom();
      this.bindEvents();
   },

   cacheDom: function() {
      this.body = document.querySelector("body");
      this.headerBtns = this.body.querySelectorAll(".header__button");
      this.footerYear = this.body.querySelector(".footer__year");
   },

   bindEvents: function() {
      this.headerBtns.forEach((btn) => {
         btn.addEventListener("click", this.addBorderBottom.bind(this));
      });
      window.addEventListener("load", this.showBorderAndGetYear.bind(this));
   },

   showBorderAndGetYear: function() {
      this.headerBtns[0].classList.add("btn-border");
      this.footerYear.textContent = new Date().getFullYear();
   },

   addBorderBottom: function(event) {
      this.headerBtns.forEach((btn) => {
         if (btn === event.target && !event.target.classList.contains("btn-border")) {
            btn.classList.add("btn-border");
            this.renderTab(event);
         } else if (btn !== event.target) {
            btn.classList.remove("btn-border");
         }
      });
   },

   renderTab: function(event) {
      if (event.target.textContent === "Home") {
         homeTab.init();
      } else if (event.target.textContent === "Menu") {
         menuTab.init();
      } else {
         contactTab.init();
      }
   },
};

restaurant.init();
homeTab.init();      // The home page needs to be rendered automatically when the page is loaded