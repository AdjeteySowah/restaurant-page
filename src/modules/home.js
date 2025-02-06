
import chef from "../assets/images/chef.png";

export let homeTab = {
   init: function() {
      this.cacheDom();
      this.render();
   },

   cacheDom: function() {
      this.content = document.querySelector("#content");
   },

   render: function() {
      this.content.innerHTML = "";
         let div = document.createElement("div");
         div.setAttribute("class", "home");
            let paragraph1 = document.createElement("p");
            paragraph1.setAttribute("class", "home__tagline");
            paragraph1.textContent = "Authentic flavours, unforgettable taste.";
            let paragraph2 = document.createElement("p");
            paragraph2.setAttribute("class", "home__history");
            paragraph2.textContent = "Crafted with passion since 2000.";
            let img = document.createElement("img");
            img.setAttribute("src", chef);
            img.setAttribute("alt", "The Chef");
            img.setAttribute("class", "home__image");
            let paragraph3 = document.createElement("p");
            paragraph3.setAttribute("class", "home__cta");
            paragraph3.textContent = "Order online or visit us today!";
         div.appendChild(paragraph1);
         div.appendChild(paragraph2);
         div.appendChild(img);
         div.appendChild(paragraph3);
      this.content.appendChild(div);
   },
};