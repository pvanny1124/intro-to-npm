To initialize npm:

    npm init
    --Prompts you to include information about the project

To install npm packages:

    npm install <package>
    
To install npm packages and save them to package.json: 

    npm install <package> --save
    
To install multiple packages at the same time:

    npm install <package1> <package2> <package3>... <packageN> --save
    
To require packages in app.js:

    var fooPackage = require("<package-name>");
    
To use a package:

    var foo = fooPackage();