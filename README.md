# react-native-dbcontext
It is an example how all child components in react native gets database reference from parent component using React Context API.

# NOTE:
In this example, I have used watermelonDB, but you can use whatever database framework you want to use. 


# HOW TO USE:

1. Copy the db folder into your project, and Initialize your DB in the `DbProvider.js` file itself. And pass the value to `DbContext.Provider`.  
2. In the parent component surround elements with `DbProvider`.
3. In the Child component you can either surround elements with `DbContext.Consumer` or use `this.context` to get the reference of database. 
