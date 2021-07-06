class ExpandingCards {
    hostElement: HTMLDivElement;
    panelElements: NodeListOf<HTMLDivElement>;
  
    
    constructor() {
      this.hostElement = document.getElementById('app')! as HTMLDivElement;
      this.panelElements = document.querySelectorAll('.panel')! as NodeListOf<HTMLDivElement>;
      this.configure();
    }

    configure(){
      this.panelElements.forEach(panel => {
        panel.addEventListener('click', ()=>{
          this.removeActiveClasses();
          panel.classList.add('active');
        })
      });
    }

    removeActiveClasses(){
      this.panelElements.forEach(el=>{
        el.classList.remove('active');
      })
    }


  }
  
  const prjExpandC = new ExpandingCards();