var inquirer = require("inquirer");
var mysql = require("mysql");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "insert mysql password here",
    database: "bamazonDB"
});

connection.connect(function(err) {
    if (err) throw err;
    startApp();
});

function startApp() {
    console.log("Here is a list of items currently available for purchase:");
    console.log("\n----------------------------");
    connection.query("SELECT * FROM products", function(err, results) {
        if (err) throw err;
        for (i = 0; i < results.length; i++) {
            console.log("Product ID: " + results[i].item_id);
            console.log("Product name: " + results[i].product_name);
            console.log("Department: " + results[i].department_name);
            console.log("Price: $" + results[i].price);
            console.log("Quantity remaining: " + results[i].quantity);
            console.log("\n---------------------------");
        }
    placeOrder();
    })
}

function placeOrder() {
    inquirer
        .prompt(
        [{
            name: "itemSelect",
            type: "input",
            message: "What is the item ID of the product you'd like to buy?",
            validate: function(value) {
                if (isNaN(value) === false) {
                    return true;
                }
                return false;
            }
        },
        {
            name: "itemQuantity",
            type: "input",
            message: "How much would you like to buy?",
            validate: function(value) {
                if (isNaN(value) === false) {
                    return true;
                }
                return false;
            }
        }]
        ).then(function(answer) {
            // console.log(answer.itemSelect);
            // console.log(answer.itemQuantity);
        var chosen = answer.itemSelect;
        var amount = answer.itemQuantity;
        var chosenID = (answer.itemSelect - 1);
        connection.query("SELECT * FROM products", function(err, results) {
            if (err) throw err;

            if (amount > results[chosenID].quantity) {
                console.log("Checking quantity remaining of " + results[chosenID].item_name + "...");
                console.log("Looks like there's not enough left to complete your order!")
                continueApp();
                } 
                else {
                    connection.query("UPDATE products SET ? WHERE ?", 
                    [{
                        quantity: results[chosenID].quantity - amount
                    },
                    {
                        item_id: chosen
                    }],
                    function(err) {
                        if (err) throw err;
                        console.log("Item purchased!");
                        console.log("Total spent: $" + (results[chosenID].price * results[chosenID].quantity));
                        continueApp();
                    })
                }
        })
    })
}

function continueApp() {
    inquirer
        .prompt(
            {
                name: "choice",
                type: "rawlist",
                choices: ["PURCHASE", "QUIT"],
                message: "Would you like to purchase another item?"
            }
        ).then(function(answer) {
            console.log(answer);
            if (answer.choice === 'PURCHASE') {
                startApp();
            } else {
                connection.end();
            }
        })
}