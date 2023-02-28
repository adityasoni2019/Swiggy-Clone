
# Random Cool Stuff

1. we sometimes get 'not rendered', this is becasue, it takes time to basically fetch react from CDN, but the compiler goes on to read the file, and, if it finds something which is react related, it'll give some error for some microseconds, cause by that time, react isn't loaded. And, as soon as it loads, it renders the stuff. 

2. We want parcel just to be on our development environment. Now, why, you may ask? I think it's because it's a bundler, it'll basically convert all the things that we write to HTML, CSS, And JS, and push provide that bundled file to the server. And that's it. So, on the "client side" it's just HTML, CSS, and JS, Parcel's job is already done when it sends everything to the server.
    And, hence, we'll do `npm i -D parcel` or `npm install --save-dev parcel` (both are same). (-D is for installing it as a dev dependency)
    NOTE: `npm i -d parcel` won't work :/

3. Dist folder
    The /dist folder contains the minimized version of the source code. The code present in the /dist folder is actually the code which is used on production web applications. Along with the minified code, the /dist folder also comprises of all the compiled modules that may or may not be used with other systems.

4. .parcel-cache
    is basically used to create faster subseuent builds. We don't have to push it on to git, cause it can be created using npx parcel index.html command on the server itself.

5. Transitive dependencies
    our project depends on some "dependencies" (like, parcel or even react, or whatever), and these dependencies are further dependent on some other depencies, and we call them transitive dependencies.

6. Browserlist: 
    https://browserslist.dev/

    package.json#browserslist

    For browser targets, the browserslist field in package.json can be used to specify which browsers you support. You can query by usage statistics or by version ranges of specific browsers. See the browserslist docs for more information.
    
    {
      "browserslist": "> 0.5%, last 2 versions, not dead"
    }

7. Polyfils
    https://developer.mozilla.org/en-US/docs/Glossary/Polyfill

    A polyfill is a piece of code (usually JavaScript on the Web) used to provide modern functionality on older browsers that do not natively support it.

8. Babel    
    https://babeljs.io/
    Babel creates polyiflls.
    Babel converts JSX to JS, HTML, & CSS
    It has other functionalities as well 

9. When we push our code to GitHub, the server pulls our code from github, and exctues our project on the server. It builds it on the server. Executes all the commands, builds the node modules and everything. Then the website is published.

10. In our project, Babel comes along with parcel, so we don't need to install it separately.

11. ANY JSX COMPONENT WE WRITE CAN ONLY HAVE ONE PARENT. If we have multiple elements, we can enclose them within <></> or we can use react fragment. <React.Fragment></React.Fragment> And this is an empty tag, i.e., we won't see this in body when using inspect element.

12. When we do "root.render(HeaderComponent());", it basically overrides anything which is written inside our root already.

13. Shimmer UI / Shimmer effect