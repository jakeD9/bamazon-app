# Bamazon

This app uses Node JS npm packages and mySQL to simulate a basic Amazon store where the user can choose which items to purchase and a quantity amount, that updates live to the database.

## Getting Started

Simply navigate to the repository location on your machine and run customer.js using node. The prompt only accepts integers based on the IDs available in the database that is set up.

### Prerequisites

NodeJS
mySQL

npm modules used:
mysql
inquirer

```

### Installing

Once the repository is downloaded, you'll first need to install the dependencies listed in the package.json file (mysql and inquirer).

There is a schema file (bamazon.sql) inside the repo, you'll need to use this to create a table in your mySQL.

Once the schema has been applied, be sure to verify your database information is correct at the top of our customer.js file.



```
run npm install in your command line once you've cd'd into the repo
```

Then verify your database information is correct in the connection variable in customer.js


```javascript
var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "insert mysql password here",
    database: "bamazonDB"
});
```


## Deployment

Since this is just a CLI app, just run customer.js in your node terminal. The data is persistent, and if you want to manually update it (make sure some items are in stock! ;) ) you will have to go into mySQL manually to do this. 

## Built With

* [Dropwizard](http://www.dropwizard.io/1.0.2/docs/) - The web framework used
* [Maven](https://maven.apache.org/) - Dependency Management
* [ROME](https://rometools.github.io/rome/) - Used to generate RSS Feeds

## Versioning

Version 1.0

