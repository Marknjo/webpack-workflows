const htmlWebpackPlugin = require('html-webpack-plugin');
const DashboardPlugin = require('webpack-dashboard/plugin');
const path = require('path');
const fs = require('fs');
const { default: chalk } = require('chalk');

console.log(
  chalk.magenta(''.padEnd(5, '>')) +
    chalk.yellow(' [ Webpack Build Multi-Pages App]') +
    chalk.magenta(' : Init building templates from source folder: ./src/pages/')
);
console.log('\n');
console.time('Building Pages');

/**
 * Base path
 */
const pagesPath = path.join(process.cwd(), 'src', 'pages');
const pagesPathExists = fs.existsSync(pagesPath);

/**
 * Builds a collection of html file names with 1 level deap nested folders
 * @returns {Array} list of file names i.e. pages/home-page or about
 */
const buildPagesHtmlFileNames = function (pagesPath, pagesPathExists) {
  if (pagesPathExists) {
    const filesInPagesDir = fs.readdirSync(pagesPath);

    const pagesDirs = filesInPagesDir.filter(file => !file.includes('.'));

    const getHtmlFilesInADir = function (filesInPagesDir, pageDir) {
      return filesInPagesDir
        .filter(file => file.includes('.html'))
        .map(htmlFile =>
          pageDir
            ? `${pageDir}/${htmlFile.split('.')[0]}`
            : htmlFile.split('.')[0]
        );
    };

    let getHtmlFilesInSubDir = [];

    const htmlFilesInThePagesDir = getHtmlFilesInADir(filesInPagesDir);

    if (pagesDirs.length > 0) {
      let htmlFilesInADir = [];
      //check if they are valid dir
      for (const pageDir of pagesDirs) {
        let currentPageDir = path.join(pagesPath, pageDir);
        if (fs.existsSync(currentPageDir)) {
          //get the html files in the path
          const getDirFiles = fs.readdirSync(currentPageDir);

          htmlFilesInADir.push(getHtmlFilesInADir(getDirFiles, pageDir));
        }
      }

      getHtmlFilesInSubDir = htmlFilesInADir.flat();
    }

    return [...getHtmlFilesInSubDir, ...htmlFilesInThePagesDir];
  } else {
    return null;
  }
};

/**
 * Extract a file name given a path i.e. pages/home = home or pages/home-page = home or about = about (pages/about.html)
 * @param {String} fileName file name supplied as either about or pages/home-page
 * @returns {String}  an single string of a pages folder name or a entry identifier
 */
const extractFileName = function (fileName) {
  let file;
  if (fileName.includes('/')) {
    const path = fileName.split('/');
    file = path[fileName.split('/').length - 1];

    if (file.includes('-')) {
      file = file.split('-')[0];
    }
  } else {
    file = fileName;
  }

  return file;
};

//holds htmlPages file name array
const htmlPageNames = buildPagesHtmlFileNames(pagesPath, pagesPathExists);

/**
 * Auto-generates Html pages to merge with the plugins (Uses: htmlWebpackPlugin)
 */
let multipleHtmlPlugins =
  htmlPageNames &&
  htmlPageNames.map(name => {
    let chunkName = extractFileName(name);

    console.log(
      chalk.white(' > ') +
        chalk.bgBlack.gray(
          `[Loading ${chunkName.toUpperCase()} template...] : `
        ) +
        chalk.underline.blue(
          path.join(process.cwd(), 'src', 'pages', `${name}.html`)
        )
    );

    let fileName;
    if (name.includes('/')) {
      let htmlPath = name.split('/');
      fileName = htmlPath[htmlPath.length - 1];
    } else {
      fileName = name;
    }

    return new htmlWebpackPlugin({
      template: `./src/pages/${name}.html`, // relative path to the HTML files
      filename: `${fileName}.html`, // output HTML files
      inject: true,
      chunks: ['main', chunkName], // respective JS files
    });
  });

if (pagesPathExists) {
  //console logs
  console.log(
    chalk.bgCyanBright.black(' [ Success! ] ') +
      chalk.green(' - Html templates lodead successfully 😊!')
  );
  console.log('\n');
}

/**
 * Autogenerate entries.
 */
const pagesEntries =
  pagesPathExists &&
  htmlPageNames.reduce((currEntries, fileName) => {
    const filePath = path.join(pagesPath, `${fileName}.js`);

    if (fs.existsSync(filePath)) {
      const file = extractFileName(fileName);
      //show feedback on the console
      console.log(
        chalk.white(' > ') +
          chalk.bgBlack.gray(`[ Loading ${file.toUpperCase()} entry] : `) +
          chalk.underline.blue(filePath)
      );

      currEntries = { ...currEntries, [file]: filePath };
    }
    return currEntries;
  }, {});

if (pagesPathExists) {
  //console logs
  console.log(
    chalk.bgCyanBright.black('[ Success! ] ') +
      chalk.green(' - Entry paths loaded successfully 😊!')
  );
  console.log('\n');
  console.log(
    chalk.bgGreen.black('[ Success! ] ') +
      chalk.green(' All pages built successfully  😊!')
  );
  console.timeEnd('Building Pages');
  console.log('\n');
} else {
  console.log(chalk.blue('No pages found in the project!'));

  multipleHtmlPlugins = [];
}

//Webpack Modules
module.exports = {
  entry: {
    main: './src/index.js',
    vendor: './src/App/scripts/vendor/vendor.js',
    ...pagesEntries,
  },

  plugins: [
    new DashboardPlugin(),
    new htmlWebpackPlugin({
      template: './src/index.html',
      inject: true,
      chunks: ['main'],
      scriptLoading: 'defer',
      filename: 'index.html',
    }),
    ...multipleHtmlPlugins,
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.html$/,
        loader: 'html-loader',
      },
      {
        test: /\.(?:ico|svg|png|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
        generator: {
          filename: 'assests/images/[name].[hash].[ext]',
        },
      },
      {
        test: /\.(mp4|webm)$/,
        type: 'asset/resource',
        generator: {
          filename: 'assests/videos/[name].[hash].[ext]',
        },
      },
      {
        // Apply rule for fonts files
        test: /\.(woff|woff2|ttf|otf|eot)$/,
        type: 'asset/resource',
        generator: {
          filename: 'assests/fonts/[name].[hash].[ext]',
        },
      },
    ],
  },
};
