# Setup react with webpack and babel

React Project with [babel,redux, router, thunk, redux-persist, unit testing] installed

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:8080](http://localhost:8080) to view it in your browser.

### `npm run build`

Generates minified production files and all filenames has hash of not caching, and produces a folder called dist.

### `npm run test`

To run unit tests ( react testing library) & snapshot testing.

###

This is a project practicing installing - [webpack](https://webpack.js.org/).
Adding few components like:

- react-bootstrap
- react-testing-library
- jest
- lodash
- react-redux
- CSS to JS file
- CSS to JS file to DOM( inline tag)
- Export Css to separate file
- SASS to CSS
- ES6 to ES5
- make image paths dynamic
- Minimize CSS
- Minimize JS

## Installing webPack

- Follow Instructions Here:
  [webpack Quick Start](https://webpack.js.org/guides/installation/)

## Use HTMLWebpackPlugin to export multiple html files from multiple templates

- [check this solution on github](https://github.com/jantimon/html-webpack-plugin/issues/218#issuecomment-183066602)

-here i create multiple instances from the html plugin

- filename ==> name of the file that will be exported
- template ==> is where the content of the html page will come from
- make sure to not add `inject:false` because it will prevent adding JS to the page

```
plugins:[
        new HtmlWebpackPlugin({
            filename: "template.html",
            template:"./src/template.htm"

        }),
        new HtmlWebpackPlugin({
            filename: "template2.html",
            template:"./src/template.htm"
         }),
    ],
```

## Packages used URLS

- [react](https://www.npmjs.com/package/react)
- [react-dom](https://www.npmjs.com/package/react-dom)
- [react-bootstrap](https://www.npmjs.com/package/react-bootstrap)
- [react-testing-library](https://www.npmjs.com/package/@testing-library/react)
- [jest](https://www.npmjs.com/package/jest)
- [lodash](https://www.npmjs.com/package/lodash)
- [axios](https://www.npmjs.com/package/axios)
- [react-redux](https://www.npmjs.com/package/react-redux)
- [redux-thunk](https://www.npmjs.com/package/redux-thunk)
- [CSS1 - Style Loader](https://webpack.js.org/loaders/style-loader/)
- [CSS2 - CSS Loader](https://webpack.js.org/loaders/css-loader/)
- [CSS2 - SASS to CSS](https://github.com/webpack-contrib/sass-loader)
- [Export CSS to Separate file](https://github.com/webpack-contrib/mini-css-extract-plugin)
- [Image Path Dynamic 1](https://github.com/webpack-contrib/html-loader)
- [Image Path Dynamic 2](https://webpack.js.org/loaders/file-loader/)
- [Image Path Dynamic 2](https://webpack.js.org/loaders/file-loader/)
- [Minimize CSS](https://github.com/NMFR/optimize-css-assets-webpack-plugin)
- [Minimize JS] terser-webpack-plugin ==> Already installed with Node packages
