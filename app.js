var budgetController = (function() {

    //some code

})();


var UIController = (function() {


    var DOMstrings = {

        inputType: '.add__type',
        inputDesc: '.add__description',
        inputValue: '.add__value',
        inputBtn: '.add__btn'

    }


    return {

        getinput: function() {

            return {

                type: document.querySelector(DOMstrings.inputType).value, // Will be either inc or exp
                desc: document.querySelector(DOMstrings.inputDesc).value,
                value: document.querySelector(DOMstrings.inputValue).value

            }

        },


        getDOMstrings: function() {

            return DOMstrings;

        }

    };

})();


//GLOBAL APP Controller

var Controller = (function(budgetCtrl, UICtrl) {

    var DOM = UICtrl.getDOMstrings();

    var ctrlAddItem = function() {

        // 1. Get the field input data

        var input = UICtrl.getinput();
        console.log(input);
    }


    document.querySelector(DOM.inputBtn).addEventListener('click', ctrlAddItem);


    document.addEventListener('keypress', function(e) {

        if (e.keycode === 13 || e.which === 13) {

            ctrlAddItem();
        }


    });


})(budgetController, UIController);