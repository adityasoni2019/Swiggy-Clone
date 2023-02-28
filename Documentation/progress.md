Yeah, so this is where I'll be storing all the progress. 

In this commit
1. We've installed react, react dom. And, now, we'll run our app using `npx parcel index.html` index.html, cause we want this to be the starting point


In this commit: 

1. Parcel, has created a server for us.


In this commit: 
1. Tried running the app, but couldn't, cause we basically don't have imported React into our App.js yet, even if we HAVE installed it. 
2. So, we'll import react, and react dom, and then 
    a. THIS IS IMPORTANT. We'll have to mention that App.js is not just a JS file, it's a module. So, we'll mention type = "module" in our index.html
3. Everything running well and good...letss goo

In this commit: 
1. Creating custom scripts package.json


aight, so for some reasons, I'm not able to push stuff on github. There's a Git curl fatal error something. I'll look into that later, I haven't updated this page in some time. 

Until today: 
1. We've made a list of Card components showing list of restaurants from Swiggy's public API. 
2. We've added a shimmer UI for "user's" to see until there's no data loaded. 

Today (22nd Jan): 
1. We basically have to update how we're using state variables. 
2. When we search something, and if it's not there, basically shimmer UI is being shown, cause if something's not there, "restaurants" goes to zero, which prompts the shimmer to be loaded.