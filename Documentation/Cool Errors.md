
## List of notable errors 

1. I didn't put a .gitignore file in my project. And, when I installed parcel... :) There were +3k changes that I had to push to github. All these changes were from node_modules, and we don't push it to our github, cause package-lock.json, already has a list of all the dependencies, and transitive dependencies of our app.

2. importing {ReactDOM} instead of ReactDOM, lol

3. All the functional components HAVE to follow the naming convention. 
    a. Take references from here - https://github.com/airbnb/javascript/tree/master/react