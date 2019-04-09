## Woga: A mind and body balancing tool for the modern day folks. ##

### Follow the steps below to start contributing to the `front` end: ###
1. Clone this repository.
2. Initialize your package.json: `npm init -f`.
3. Install our dev dependencies: 
   ```
   npm install --save-dev @babel/core @babel/plugin-proposal-class-properties @babel/plugin-proposal-decorators @babel/plugin-syntax-dynamic-import @babel/preset-env @babel/preset-react @babel/polyfill "babel-loader@^8.0.0-beta" html-webpack-plugin webpack webpack-cli webpack-dev-server
   ```
4. Install our regular dependencies: 
   ```
   npm install --save apollo-boost graphql react react-apollo react-dom react-loadable react-router-dom
   ```
5. If you're using c0d3's server: 
   * Create a your own port: https://apps.c0d3.com/
   * Modify your `webpack.config.js`'s `devServer` value to:
   ```
   devServer: {
      historyApiFallback: true,
      port: PUT_YOUR_PORT_NUMBER_IN_HERE, // for example: 9680
      allowedHosts: [
         'PUT_CHOSEN_DOMAIN_NAME_IN_HERE' // for example: '.c0d3.com'
      ],
   },
   ```
6. Use the following command to run the client: `npm run dev`.
7. If you run into issues related to files in the codebase, email Maricris for help (hello@vimgirl.com).
----
### Follow the steps below to start contributing to the `back` end: ###
1. Make sure you have Node, Go, and Dep already installed on your machine.
2. Set your GOPATH: `export GOPATH={path to app directory}/server`
3. Run the following:
   ```
   cd server/src/app
   dep init
   ```
4. Use the following command to run the server: `USER=XXXX DBNAME=XXXX go run main.go` (email Maricris for DB info).
