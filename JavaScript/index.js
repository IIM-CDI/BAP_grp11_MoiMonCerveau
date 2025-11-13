class HelloWorld extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = "<p>hello world</p>";
    }
  }

class Bye extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      
      const name = this.getAttribute("name");
     
      this.innerHTML = `<p>Au revoir, ${name} !</p>`;
    }
  }
  
customElements.define("hello-world", HelloWorld);
customElements.define("bye-world", Bye);