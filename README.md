# Workflow Booster

## :balloon: Overview

This project will help you bootstrap a JavaScript oriented using webpack. It has support for SASS or CSS fast. Currently, it using Webpack 5. See the features section below.

## :mega: Features

Here are the reasons you will love this boilerplate:

- **[Webpack 5](https://webpack.js.org/)** - Modern bundling & build process
- **[SASS/SCSS - Dart-Sass](https://sass-lang.com/)** - The famous CSS on steroids
- For SASS, the project uses [7-1 architecture pattern](http://sass-guidelin.es/#architecture) and sticking to [Sass Guidelines](http://sass-guidelin.es) writing conventions.

  - Each folder of this project has its own `README.md` file to explain the purpose and add extra information. Be sure to browse the repository to see how it works(This folder structure of the acheitecture pattern is maintained by Kitty Giraudel **[Here](https://github.com/KittyGiraudel/sass-boilerplate)**.

- **MULTI-PAGES SUPPORT** - now the boilerplate can allow you to build multipages application separately without building a separate development environment.

  - You add **/pages** folder in the /src path. You also have to add separate javascript entry file with a similar name to your page folder in each root directory of your page.i.e. if developing a home page under the path _src/pages/homepage_, use the name _homepage.js_ (src/pages/homepage/homepage.js) as your entry file. In this case, you don't have to name your html as homepage.html, you can name it as index.html.
  - Also, you don't have to put your different pages in different folders. You can put your files in the root directory of your pages path (folder), .i.e. _src/pages/homepage.html_ _src/pages/homepage.js_.
  - If you decide to go with the folder structure to represent your different pages, you can put your assets, scripts, and styles folders inside your pages folder. However, currently the boiler plate does not support recursive pages - like pages within pages. It simply allow you only one level deep nesting.
  - On performance, unfortunate, in each request, you will have a full page refresh to the server.
  - As a results, this is not a single page application builder like React, it is far from that. But if you are looking to build a multi-pages app with JavaScript and CSS, this **Webpack boilerplate** will really simplify your work.

- **[Autoprefixing](https://autoprefixer.github.io/)** - Automatically adds vendors prefixes to your CSS
- **[Babel Support](https://babeljs.io/)** - Write JS using ES2015+ and webpack will make it work across all browsers. Support of **[class properties](https://babeljs.io/docs/en/babel-plugin-proposal-class-properties)** is enabled too.
- **Minify** - Automatically minifies JS and CSS during production mode
- **DevServer** - Use both default dev server **[`webpack server`](https://webpack.js.org/configuration/dev-server/)** and pretty output on the console using **[`webpack-dashboard`](https://www.npmjs.com/package/webpack-dashboard)**
- **Use any styling you want** - You can use both CSS or SASS, no limitation.
- **Separate your vendors from your code** - you don't like mixing your code with 3rd party's? Then this is your solution(Your vendor's entry name is called **vendor.js**).
- **Remove Unused Styles** - Purify CSS/SCSS output using [`purgecss-webpack-plugin`]("https://purgecss.com/plugins/webpack.html#installation") for your final build.
- Support for JavaScript, CSS, & SASS **Source Maps**.

## :anger: Requirement

- Nodejs

## :scroll: QuickStart

1. Clone this repo or download the latest release. Rename it to whichever project name you want.
2. `cd <project name>`
3. Run `npm install`
4. **YOU ARE READY TO GO**

## :volcano: Modes

- `npm start` - start development mode with dev-server
- `npm run smart:start` - start development with dev-server and dashboard enabled on your console.
- `npm run dev` - start development mode without dev-server
- `npm run build` - start production mode

## :orange_book: Folder Structure

    ├── Public/                              # Distribution files
    ├── src/                                 # Source files
    |   |
    |   ├── App/
    |   |   ├── assets/                      # Assets directory
    │   |   │   ├── images/                  # Image directory
    │   |   |   └── fonts/                   # Fonts directory
    │   |   ├── styles/                      # SCSS files
    |   |   │   └── dirs/                    # SCSS directories (Follows 7-1 architecture pattern)
    │   |   └── scrips/                      # JS files
    |   |       ├── helpers/                 # Helper Scripts related to your app .i.e. consoleSeparator()
    │   |       |── vendors/                 # 3rd Party Scripts index (Vendors)
    │   |       |    └── 3rd-party-scrips/   # All Vendors
    |   |       └── app.js
    │   ├── pages/                           # Optional pages folder (Put your website different pages here)
    │   ├── index.js                         # Load SCSS and JS
    │   └── index.html                       # The default template for the website
    ├── webpack/                             # Webpack configuration files
    │   ├── webpack.common.js                # Common config used both in development and production mode
    │   ├── webpack.dev.js                   # Development mode config
    │   └── webpack.prod.js                  # Production mode config
    ├── .babelrc                             # Babel config file
    ├── .gitignore                           # Git ignored files
    ├── LICENSE                              # License agreements
    ├── postcss.config.js                    # Post CSS configuration file. (Adds autoprefixing support)
    ├── README.md                            # You are reading this
    └── webpack.config.js                    # Webpack entry config file
