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

class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    
   
    this.innerHTML = `<header>
        <nav>
            <a href="index.html">Home</a>
            <a href="pages/quiz/questions.html">quiz</a>
            <a href="pages/miniJeu/miniJeu.html">Mini Jeu</a>
        </nav>
    </header>`;
  }
}


customElements.define("hello-world", HelloWorld);
customElements.define("bye-world", Bye);
customElements.define("hea-der", Header);

