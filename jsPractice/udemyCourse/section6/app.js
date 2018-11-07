// use module pattern to control access to functions and vars

var budgetController = (function() {

 
})();

var UIController = (function() {

    var DOMstrings = {
        inputType: '.add__type',
        inputDescription: '.add__description',
        inputValue: '.add__value',
        inputBtn: '.add__btn'
    };

    return {
        getInput: function() {
            return {
                type: document.querySelector(DOMstrings.inputType).value, // can be income or expense
                description: document.querySelector(DOMstrings.inputDescription).value,
                value: document.querySelector(DOMstrings.inputValue).value,
            };
        },
        getDOMstrings: function() {
            return DOMstrings;
        }
    };

})();

// the app controller needs access to the other two controllers: 
var controller = (function(budgetCtrl, UICtrl) {

    // this function will be run in public init function; 
    // init function gets called from outside all the modules.
    var setupEventListeners = function() {
        var DOM = UICtrl.getDOMstrings(); // doms are only needed for event listeners

        document.querySelector(DOM.inputBtn).addEventListener("click", ctrlAddItem);

        document.addEventListener('keypress', function(e) {
            if (e.keyCode === 13 || e.which === 13) {
                ctrlAddItem();
            }
        });
    }; 

    var ctrlAddItem = function() {
        // 1. get the field input data
        var input = UICtrl.getInput();
        // 2. add item to the budget controller
        // 3. add the item to the UI
        // 4. calculate the budget
        // 5. display the budget on the UI
    }

    return {
        init: function() {
            console.log('App has started');
            setupEventListeners();
        }
    }

})(budgetController, UIController);

controller.init();