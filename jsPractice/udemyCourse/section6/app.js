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
        inputBtn: '.add__btn',
        incomeContainer: '.income__list',
        expensesContainer: '.expenses__list'
    };

    return {
        getInput: function() {
            return {
                type: document.querySelector(DOMstrings.inputType).value, // can be income or expense
                description: document.querySelector(DOMstrings.inputDescription).value,
                value: parseFloat(document.querySelector(DOMstrings.inputValue).value)
            };
        },

        addListItem: function(obj, type) {
            var html, newHtml, element;
            //create HTML string with placeholder text
            if (type === 'inc') {
                element = DOMstrings.incomeContainer;
                html = '<div class="item clearfix" id="income-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';
            } else if (type === 'exp') {
                element = DOMstrings.expensesContainer;
                html = '<div class="item clearfix" id="expense-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__percentage">21%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';
            }
            // replace the placeholder text with actual data
            newHtml = html.replace('%id%', obj.id);
            newHtml = newHtml.replace('%description%', obj.description);
            newHtml = newHtml.replace('%value%', obj.value);

            // insert HTML into the DOM (4 possible positions for insertAdjacent)
            document.querySelector(element).insertAdjacentHTML('beforeend',newHtml);

        },

        clearFields: function() {
            var fields, fieldsArray;
            fields = document.querySelectorAll(DOMstrings.inputDescription + ', ' + DOMstrings.inputValue);
            fieldsArray = Array.prototype.slice.call(fields);
            fieldsArray.forEach(function(current, index, array) {
                current.value = "";
            });
            fieldsArray[0].focus(); // resets the focus to description field
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

    var updateBudget = function() {
        // calculate budget

        // return budget

        // display budget in UI
    };

    var ctrlAddItem = function() {
        var input, newItem;
        // 1. get the field input data
        input = UICtrl.getInput();

        if (input.description && input.value) {
            // 2. add item to the budget controller
            newItem = budgetCtrl.addItem(input.type, input.description, input.value);
            // 3. add the item to the UI
            UICtrl.addListItem(newItem, input.type);
            // 3.a clear the fields
            UICtrl.clearFields();
            // 4. update budget
            updateBudget();
        }
    };

    return {
        init: function() {
            console.log('App has started');
            setupEventListeners();
        }
    };

})(budgetController, UIController);

controller.init();