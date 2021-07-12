'use strict';

window.onload = function() {
    console.log("app started");
    calculator.init();
};

let calculator = {
    buttons: null,
    input: null,

    init: function() {
        this.buttons = document.querySelectorAll(".btn");
        this.input = document.getElementById("inputField");

        for(let i=0; i<this.buttons.length; i++) {
            let temp = this.buttons[i];
            temp.addEventListener("click", this.buttonClick);
        }
    },

    buttonClick: function(e) {
        let operand = e.target.innerText;
        // calculator.addToInput(operand);

        // if(operand == "=") {
        //     calculator.evaluate();
        // }

        switch(operand) {
            case "=":
                calculator.evaluate();
                break;
            case "C":
                calculator.clear();
                break;
            default:
                calculator.addToInput(operand);
        }
    },

    addToInput: function(str) {
        this.input.value += str; 
    },

    evaluate: function() {
        let result = math.evaluate(calculator.input.value);
        calculator.input.value = result;
    },

    clear: function() {
        calculator.input.value = "";
    }
};