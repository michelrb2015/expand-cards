"use strict";
class ExpandingCards {
    constructor() {
        this.hostElement = document.getElementById('app');
        this.panelElements = document.querySelectorAll('.panel');
        this.configure();
    }
    configure() {
        this.panelElements.forEach(panel => {
            panel.addEventListener('click', () => {
                this.removeActiveClasses();
                panel.classList.add('active');
            });
        });
    }
    removeActiveClasses() {
        this.panelElements.forEach(el => {
            el.classList.remove('active');
        });
    }
}
const prjExpandC = new ExpandingCards();
//# sourceMappingURL=app.js.map