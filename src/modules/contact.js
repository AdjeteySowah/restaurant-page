
import location from "../assets/images/location.svg";
import time from "../assets/images/time.svg";
import phone from "../assets/images/phone.svg";
import message from "../assets/images/message.svg";
import map from "../assets/images/map.png";

export let contactTab = {
   init: function() {
      this.cacheDom();
      this.bindEvents();
      this.render();
   },

   cacheDom: function() {
      this.content = document.querySelector("#content");
   },

   bindEvents: function() {
      this.content.addEventListener("focusin", this.moveLabelUp.bind(this));
      this.content.addEventListener("focusout", this.moveLabelDown.bind(this));
      this.content.addEventListener("click", this.fakeFormSubmission.bind(this));
   },

   render: function() {
      this.content.innerHTML = "";

         let div = document.createElement("div");
         div.setAttribute("class", "contact");
            let div1 = document.createElement("div");
            div1.setAttribute("class", "contact__info");
               let div11 = document.createElement("div");
               div11.setAttribute("class", "contact__info-item");
                  let img11 = document.createElement("img");
                  img11.setAttribute("src", location);
                  img11.setAttribute("alt", "Location Icon");
                  img11.setAttribute("class", "contact__icon");
                  let p11 = document.createElement("p");
                  p11.setAttribute("class", "contact__text");
                  p11.setAttribute("class", "contact__text--location");
                  p11.textContent = "East Legon";
                     let span11 = document.createElement("span");
                     span11.setAttribute("class", "block");
                     span11.textContent = "Lagos Ave, JRRM+5G Accra";
                  p11.appendChild(span11);
               div11.appendChild(img11);
               div11.appendChild(p11);
               let div12 = document.createElement("div");
               div12.setAttribute("class", "contact__info-item");
                  let img12 = document.createElement("img");
                  img12.setAttribute("src", time);
                  img12.setAttribute("alt", "Clock Icon");
                  img12.setAttribute("class", "contact__icon");
                  let p12 = document.createElement("p");
                  p12.setAttribute("class", "contact__text");
                  p12.setAttribute("class", "contact__text--hours");
                  p12.textContent = "Mon - Thu: 9am - 10pm";
                     let span12 = document.createElement("span");
                     span12.setAttribute("class", "block");
                     span12.textContent = "Fri - Sun: 9am - 12am";
                  p12.appendChild(span12);
               div12.appendChild(img12);
               div12.appendChild(p12);
               let div13 = document.createElement("div");
               div13.setAttribute("class", "contact__info-item");
                  let img13 = document.createElement("img");
                  img13.setAttribute("src", phone);
                  img13.setAttribute("alt", "Phone Icon");
                  img13.setAttribute("class", "contact__icon");
                  let p13 = document.createElement("p");
                  p13.setAttribute("class", "contact__text");
                  p13.setAttribute("class", "contact__text--number");
                  p13.textContent = "(+27)-034133397";
               div13.appendChild(img13);
               div13.appendChild(p13);
            div1.appendChild(div11);
            div1.appendChild(div12);
            div1.appendChild(div13);

            
            let div2 = document.createElement("div");
            div2.setAttribute("class", "contact__message-container");
               let img21 = document.createElement("img");
               img21.setAttribute("src", message);
               img21.setAttribute("alt", "Message Icon");
               img21.setAttribute("class", "contact__message-icon");
               let p21 = document.createElement("p");
               p21.setAttribute("class", "contact__message");
               p21.textContent = "Message us";
            div2.appendChild(img21);
            div2.appendChild(p21);

            let form1 = document.createElement("form");
            form1.setAttribute("class", "contact__form");
               let label11 = document.createElement("label");
               label11.setAttribute("for", "name");
               label11.setAttribute("class", "contact__form-label");
               label11.textContent = "Name";
               let input11 = document.createElement("input");
               input11.setAttribute("type", "text");
               input11.setAttribute("id", "name");
               input11.setAttribute("class", "contact__form-input--one");
               input11.setAttribute("required", "");
               let label12 = document.createElement("label");
               label12.setAttribute("for", "email");
               label12.setAttribute("class", "contact__form-label");
               label12.textContent = "Email";
               let input12 = document.createElement("input");
               input12.setAttribute("type", "email");
               input12.setAttribute("id", "email");
               input12.setAttribute("class", "contact__form-input--two");
               input12.setAttribute("required", "");
               let label13 = document.createElement("label");
               label13.setAttribute("for", "message");
               label13.setAttribute("class", "contact__form-label");
               label13.textContent = "Message";
               let input13 = document.createElement("input");
               input13.setAttribute("type", "text");
               input13.setAttribute("id", "message");
               input13.setAttribute("class", "contact__form-input--three");
               input13.setAttribute("required", "");
               let button11 = document.createElement("button");
               button11.setAttribute("type", "button");
               button11.setAttribute("class", "contact__form-button");
               button11.textContent = "Send";
            form1.appendChild(label11);
            form1.appendChild(input11);
            form1.appendChild(label12);
            form1.appendChild(input12);
            form1.appendChild(label13);
            form1.appendChild(input13);
            form1.appendChild(button11);

            let div3 = document.createElement("div");
            div3.setAttribute("class", "contact__image-container");
               let img31 = document.createElement("img");
               img31.setAttribute("src", map);
               img31.setAttribute("alt", "A Map");
               img31.setAttribute("class", "contact__image");
            div3.appendChild(img31);
         div.appendChild(div1);
         div.appendChild(div2);
         div.appendChild(form1);
         div.appendChild(div3);

      this.content.appendChild(div);
   },

   moveLabelUp: function(event) {
      let parent = event.target.parentElement;
      let labelSiblings = Array.from(parent.children).filter((sibling) => {
         return sibling.classList.contains("contact__form-label");
      });

      if (event.target.classList.contains("contact__form-input--one")) {
         labelSiblings[0].classList.remove("move-down");
         labelSiblings[0].classList.add("move-up");
      } else if (event.target.classList.contains("contact__form-input--two")) {
         labelSiblings[1].classList.remove("move-down");
         labelSiblings[1].classList.add("move-up");
      } else if (event.target.classList.contains("contact__form-input--three")) {
         labelSiblings[2].classList.remove("move-down");
         labelSiblings[2].classList.add("move-up");
      }
   },

   moveLabelDown: function(event) {
      let parent = event.target.parentElement;
      let labelSiblings = Array.from(parent.children).filter((sibling) => {
         return sibling.classList.contains("contact__form-label");
      });

      if (event.target.classList.contains("contact__form-input--one") && event.target.value === "") {
         labelSiblings[0].classList.remove("move-up");
         labelSiblings[0].classList.add("move-down");
      } else if (event.target.classList.contains("contact__form-input--two") && event.target.value === "") {
         labelSiblings[1].classList.remove("move-up");
         labelSiblings[1].classList.add("move-down");
      } else if (event.target.classList.contains("contact__form-input--three") && event.target.value === "") {
         labelSiblings[2].classList.remove("move-up");
         labelSiblings[2].classList.add("move-down");
      }
   },

   fakeFormSubmission: function(event) {
      let form = event.target.parentElement;

      if (event.target.classList.contains("contact__form-button") && !form.checkValidity()) {
         form.reportValidity();
      } else if (event.target.classList.contains("contact__form-button")) {
         alert("Message Sent. Thanks!");
         form.reset();
         this.render();       // This will move the labels back to their default/initial positions
      }
   },
};