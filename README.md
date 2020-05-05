# Workflow Booster

## :balloon: Overview

Will help to build any JavaScript oriented project with the support of SASS/CSS fast. Also, since I have omitted the package.json file, it means that your initial build will always contain all the latest dependancied at the time of clone.

## :mega: Features

Here are the reasons you will love this boilerplate:

- **[Webpack](https://webpack.js.org/){:target="\_blank"}** - Modern bundling & build process
- **[SASS/SCSS](https://sass-lang.com/){:target="\_blank"}** - The famous CSS on steroids
- **[Autoprefixing](https://autoprefixer.github.io/){:target="\_blank"}** - Automatically adds vendors prefixes to your CSS
- **[Babel Support](https://babeljs.io/){:target="\_blank"}** - Write JS using ES2015+ and webpack will make it work across all browsers. Support of **[class properties](https://babeljs.io/docs/en/babel-plugin-proposal-class-properties){:target="\_blank"}** is enabled too.
- **Minify** - Automatically minifies JS and CSS during production mode
- **DevServer** - Use both ndefault dev server **[`webpack-dev-server`](https://webpack.js.org/configuration/dev-server/){:target="\_blank"}** and pretty output on the console using **[`webpack-dashboard`](https://www.npmjs.com/package/webpack-dashboard){:target="\_blank"}**
- **No need to update the dependencies** - Just follow the quick start quide and you'll be fine.
- **Use any styling you want** - You can use both CSS or SASS to limitation.
- **Separate your vendors from your code** - you don't like mixing your code with 3rd party's? Then this is your solution.

## :anger: Requirement

- Nodejs

## :scroll: QuickStart

1. Clone this repo. Rename it to whichever project name you want.
2. `cd <project name>`
3. Quickly initialize the project accepting the defaults `npm init -y`
4. Run `npm i -D @babel/core @babel/plugin-proposal-class-properties @babel/preset-env autoprefixer babel-loader clean-webpack-plugin cross-env css-loader file-loader html-loader html-webpack-plugin mini-css-extract-plugin node-sass optimize-css-assets-webpack-plugin postcss-loader sass-loader style-loader webpack webpack-cli webpack-dashboard webpack-dev-server webpack-merge` to install afresh all dependencies
5. Open the package.json and replace the test script with the following scripts in the scripts section

   - `"start": "webpack-dev-server --mode development","smart:start": "webpack-dashboard -m webpack-dev-server --mode development","dev": "cross-env NODE_ENV=development webpack --mode development","build": "cross-env NODE_ENV=production webpack --mode production"`

6. **YOU ARE READY TO GO**

## :volcano: Modes

- `npm start` - start development mode with dev-server
- `npm run smart:start` - start development with dev-server and dashboard enabled on your console.
- `npm run dev` - start development mode without dev-server
- `npm run build` - start production mode

## :orange_book: Folder Structure

    ├── Public/                          # Distribution files
    ├── src/                             # Source files
    │   ├── assets/                      # Assets directory
    │   │   ├── images/                  # Image directory
    │   |   └── fonts/                   # Fonts directory
    │   ├── styles/                      # SCSS files
    |   │   └── dirs/                    # SCSS directories (Group yours you own way)
    │   ├── scrips/                      # JS files
    |   │   ├── app/                     # Scripts related to your app
    │   |   └── vendors/                 # 3rd Party Scripts index (Vendors)
    │   |       └── 3rd-party-scrips/    # All Vendors
    │   ├── index.js                     # Load SCSS and JS
    │   └── index.html                   # The default template for the website
    ├── webpack/                         # Webpack configuration files
    │   ├── webpack.common.js            # Common config used both in development and production mode
    │   ├── webpack.dev.js               # Development mode config
    │   └── webpack.prod.js              # Production mode config
    ├── .babelrc                         # Babel config file
    ├── .gitignore                       # Git ignored files
    ├── LICENSE                          # License agreements
    ├── postcss.config.js                # Post CSS configuration file. (Adds autoprefixing support)
    ├── README.md                        # You are reading this
    └── webpack.config.js                # Webpack main config file

## License

[![CC0](http://mirrors.creativecommons.org/presskit/buttons/88x31/svg/cc-zero.svg)](https://creativecommons.org/publicdomain/zero/1.0/)
