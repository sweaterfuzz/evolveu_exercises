// use module pattern to control access to functions and vars

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
    };

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

            //ID should be last ID + 1
            if (data.allItems[type].length > 0 ) {
                lastElem = data.allItems[type].length - 1;
                ID = data.allItems[type][lastElem].id + 1;
            } else {
                ID = 0;
            }            

            // create new item based on 'inc' or 'exp' type
            if (type === 'exp') {
                newItem = new Expense(ID,des,val);
            } else if (type === 'inc') {
                newItem = new Income(ID,des,val);
            }
            
            // add new item to array of all items
            data.allItems[type].push(newItem);
            // return the new element
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
        var input, newItem;
        // 1. get the field input data
        input = UICtrl.getInput();
        // 2. add item to the budget controller
        newItem = budgetCtrl.addItem(input.type, input.description, input.value);
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