# Laboratory Blocks.
### These are Gutenburg blocks intended to be used with [Laboratory Theme](https://github.com/chiedolabs/chiedo-labs-theme) and its children.


This project was bootstrapped with [Create Guten Block](https://github.com/ahmadawais/create-guten-block).

Below you will find some information on how to run scripts.

### Added npm packages

* ReactStrap - [Bootstrap React Components](http://reactstrap.github.io/)

## Documentation

The [Gutenberg Handbook](https://wordpress.org/gutenberg/handbook/) is a good place to start as well as [CSS Tricks' Tutorial](https://css-tricks.com/guides/learning-gutenberg/).

**You should develop with** `SCRIPT_DEBUG` **set to true by adding** `define('SCRIPT_DEBUG', true);` **to your** `wp-config.php`



## How is this plugin organized?

Most of our code is in the `src/` folder. We've broken it down into:

```js
- src/
  - init.php // define your plugin
  - blocks/ // block code here.
    - my-custom-block // directory for each block.
      - index.js
      - style.scss
      - editor.scss
  - components/ // reusable portions for blocks
    - containers // reusable containers
    - options // reusable options e.g. background or font
    // ...
  - helpers/
  - deprecated/ // blocks that are no longer used

```

## Blocks
| Block | Description | Progress |
|---|---|---|
| Background Section | Wrap other elements with background | Ready but needs Video BG. |
| Carousel | Image with content Carousel | Complete |
| Services | Fetch Services Custom Post Type and display | In Progress |
| Team | Fetch Team Custom Post Type and display | Not Yet Started |
| Portfolio | Fetch Portfolio Custom Post Type and display | Not Yet Started |
| Video | Display Full Width Video | Not Yet Started |

| Component | Description | Progress |
|---|---|---|
| Container | Container element to wrap other elements | Ready |
| BG Option | Give element a background image or color | Ready |
| Text Option | Control text color, alignment etc. | Ready |

| Depricated Block | Reason for Deprication |
|---|---|
| Call to action | Having a hero section seems unneeded, especially as we've created a Background Section with Child Blocks. |


## Scripts:
**(We generally use [yarn](https://yarnpkg.com/lang/en/). If you do too, use yarn below)**

### 👉  `npm start` or `yarn start`
- Use to compile and run the block in development mode.
- Watches for any changes and reports back any errors in your code.

### 👉  `npm run build` or `yarn build`
- Use to build production code for your block inside `dist` folder.
- Runs once and reports back the gzip file sizes of the produced code.

### 👉  `npm run eject` or `yarn build`
- Use to eject your plugin out of `create-guten-block`.
- Provides all the configurations so you can customize the project as you want.
- It's a one-way street, `eject` and you have to maintain everything yourself.
- You don't normally have to `eject` a project because by ejecting you lose the connection with `create-guten-block` and from there onwards you have to update and maintain all the dependencies on your own.

