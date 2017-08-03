var budgetController = (function() {

    var Expense = function(id, description, value) {

        this.id = id;
        this.description = description;
        this.value = value;

    };

    var Income = function(id, description, value) {

        this.id = id;
        this.description = description;
        this.value = value;

    }

    var totalExpenses = 0;

    var data = {

        allItems: {

            exp: [],
            inc: []

        },

        totals: {

            exp: 0,
            inc: 0

        }

    };

    return {

        addItem: function(type, des, val) {
            var newItem, ID;

            // Create New ID
            if (data.allItems[type].length > 0) {

                ID = data.allItems[type][data.allItems[type].length - 1].id + 1;

            } else {

                ID = 0;
            }

            // Create New item based on 'inc' or 'exp' type

            if (type === 'exp') {

                newItem = new Expense(ID, des, val);

            } else if (type === 'inc') {

                newItem = new Income(ID, des, val);

            }

            // Push it into our data structure

            data.allItems[type].push(newItem);

            // Return the new element

            return newItem;

        },

        testing: function() {

            console.log(data);
        }

    };

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


    var setupEventListeners = function() {

        var DOM = UICtrl.getDOMstrings();

        document.querySelector(DOM.inputBtn).addEventListener('click', ctrlAddItem);

        document.addEventListener('keypress', function(e) {

            if (e.keycode === 13 || e.which === 13) {

                ctrlAddItem();
            }


        });

    };


    var ctrlAddItem = function() {

        var input, newItem;

        // 1. Get the field input data

        input = UICtrl.getinput();

        // 2. Add the item to the budget controller

        budgetCtrl.addItem(input.type, input.desc, input.value);

    };

    return {

        init: function() {

            console.log('App has started');
            setupEventListeners();
        }

    };


})(budgetController, UIController);

Controller.init();