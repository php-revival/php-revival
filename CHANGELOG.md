# Release Notes

## v2.13.1 (2025-11-23)
- 🧑‍💻 Changed "System theme" icon from "Moon and sun" to "Black & white" [#110](https://github.com/php-revival/php-revival/issues/110).
- 🎨 Fixed styles for calendar pages [#109](https://github.com/php-revival/php-revival/issues/109).

## v2.13.0 (2025-11-22)
- 🎨 Fixed styles on the [Downloads](https://www.php.net/downloads.php).
- 🎨 Fixed styles for User Contribution notes. Closes [#70](https://github.com/php-revival/php-revival/issues/70).
- 🎨 Fixed styles for home page hero links with recent PHP versions.
- 🧑‍💻 Added 1 more recommended video to the home page sidebar.
- ✨ Added dark and light themes with ability to switch between them. Closes [#44](https://github.com/php-revival/php-revival/issues/44).
- 🐛 Fixed not formatting "Execute code" button for some PHP code examples.

## v2.12.5 (2025-07-04)
- 🧑‍💻 Added an ability to use a container engine like Podman or Docker
- 🧑‍💻 Refactor SASS files to remove deprecations
- 🎨 Fixed styles breadcrumbs on functions page

## v2.12.3 (2025-01-28)
- 🎨 Fixed color for the breadcrumbs bar

## v2.12.2 (2025-01-09)
- ✨ Added "Laracasts" link to the recommended links section on the home page sidebar

## v2.12.1 (2024-12-21)
- ✨ Added additional section "Get Started" to the home page sidebar with links to Composer, Laravel, Symfony

## v2.12.0 (2024-12-08)
- 🧑‍💻 Removed `&t=1175` from the YouTube link in one of the recommended videos on the home page
- 🎨 Fixed styles for the result of code execution when you "Run code" on the function page
- ✨ Change "Run code" button on the function page into a small, styled button floating in the top right corner of the code example with a "Play" icon
- ✨ Add cmd + Enter or ctrl + Enter keyboard shortcut to run code on the function page

## v2.11.1 (2024-11-05)
- 🧑‍💻 Improve page transition effect from the extension because it didn't work for Firefox

## v2.11.0 (2024-11-05)
- 🎨 Updated styles for the navbar
- 🎨 Updated styles on php 8.3 page
- 🎨 Updated styles for the [Search Results](https://www.php.net/search.php?lang=en&q=array_map) page
- 🎨 Fixed styles for Documentation page
- 🎨 Fixed styles for breadcrumbs on the function page
- 🎨 Added opacity transition from `0` into `1` when page is loaded. It helps to avoid flickering when the page is loading
- 🎨 Improved search field styles after core team change styles for it. They've changed the search into a `button` element

## v2.10.2 (2024-10-30)
- 🐛 Bug fix on home page. The PHP logo wasn't showing up on the hero section

## v2.10.1 (2024-10-05)
- 🐛 Bug fix related to 2 small buttons on code examples "Evaluate" and "Copy". They were clickable only on icons, but now they are clickable on the whole button

## v2.10.0 (2024-10-04)
- Small changes
    - Fixed styles for the "Older News Entries" link on the home news page
    - Added 5 more recommended videos to the home page sidebar
    - Improved styles for the home page news cards
    - Fixed bug with the "Show Comments" button on the function page. It was floating in the wrong place on [this](https://www.php.net/manual/en/class.arrayobject.php) page
    - "Evaluate" and "Copy" buttons on the function page now have a label that tell what the button does
    - Improved styles for PHP 8.3 page
- Big changes
    - Fixed styles for class pages like [this](https://www.php.net/manual/en/class.outeriterator.php). It had wrong color highlighting for some elements in the code samples
    - Added tags to recommended videos. By clicking on the tag you can filter videos that related only for that tag. Current tags are: `all`, `laravel`, `symfony`
    - Added showing published date for each recommended video on the home page sidebar

## v2.9.0 (2024-09-27)
- Formatted TypeScript code with Prettier
- Improved home sidebar by splitting links into 3 sections: "Events", "Recommended" and "Social"
- Add showing nested links in the home sidebar where it's needed
- Improve styles for news, archive and other pages

## v2.8.5 (2024-09-10)
- Fixed styles for the "Changelog" section on function page. `table-layout: fixed` wasn't a good solution for that table

## v2.8.4 (2024-09-09)
- Fixed colors for links on the function page in the "Changelog" section. Some links was hard to see because they were yellow on the white background
- Fixed styles for the "Changelog" section on function page. The table was overflowing the container to the right

## v2.8.3 (2024-08-10)
- Fixed styles for the search field placeholder
- Added 5 more recommended videos to the home page sidebar
- Remove 5 outdated recommended videos from the home page sidebar

## v2.8.1 (2024-04-30)
- Change the 'dollar' icon for the 'Donate' button on the home page from png to svg
- Added a hover effect for each recommended video on the home page sidebar
- Changed logic with loading recommended videos on the home page
- Added title for Recommended videos and Recommended links
- Rewrote the whole logic related to the links section on the home page sidebar. Now it's more structured and easier to maintain. Now, we parse links first and then render them in a proper DOM structure with some additional links like PHP Sandbox, Github, Docker image, etc.
- Added "Social Links" section to the home page sidebar
- Added "Linkedin" link to the "Social Links" section on the home page sidebar
- Remove chevron right icon from the first link in the Breadcrumbs navbar

## v2.8.0 (2024-04-29)
- Aligned the "Show Comments" button vertically on the function page
- Changed Twitter to X on the home page sidebar
- Added 2 more recommended videos to the home page sidebar
- Remove 1 recommended video from the home page sidebar
- Added tests with Jest
- Improve styling of breadcrumbs
- Restyled right sidebar on pages like news, downloads, function page, etc.
- Restyled and moved breadcrumbs arrows from the top to the bottom of the page
- Added pretty glow effect to the home page for the first news card
- Improve styles for the "Select language" dropdown on the function page

## v2.7.0 (2024-04-23)
- Deleted the old recommended videos from the home page sidebar
- Added 6 new recommended videos to the home page sidebar
- Added feature that hides all the "User Contributed Notes" on the function page by default. Now you can click on the "Show Comments" button to show them
- Added a "Evaluate in Sandbox" button to the top right corner of the code examples on the function page. It opens the code example in the PHP sandbox on https://onlinephp.io

## v2.6.1 (2024-04-21)
- Moved images from the external server to the extension's folder. Now all images are served from the extension's rather than the `https://php-revival.github.io`. It doesn't effect anything, it's just a better practice
- Code refactoring and improvements for the extension's code base
- Improved styles for the search bar in the top right corner and fix it for mobile devices
- Fixed hamburger button style on mobile view
- Fixed style issue with title for "Note", "Tip", "Warning" and "Caution" blocks on the function page
- Fixed styles for mobile view for the home action buttons

## v2.6.0 (2024-04-18)
- Added a "copy code example button" for each code example on the function page to the top right corner
- Improved styles for code examples on the function page. Increased border radius and added padding
- Improved styles for notices, tips, warnings and cation blocks on the function page
- Added "Contribute" button that sticks to the bottom right corner of the function page. The "Contribute" modal appears with several links after clicking that button

## v2.5.1 (2024-04-06)
- Fixed function highlight on the https://www.php.net/manual/en/function.phpinfo.php page
- Fixed styles for https://www.php.net/manual/en/function.get-defined-constants.php page

## v2.5.0 (2024-02-25)
- Fixed styles for the notification banner under the navbar
- Fixed styles for "The PHP Foundation" link on the home page's right sidebar
- Fixed styles for the function page. Some code examples were yellow on white background and hardly visible
- Fixed styles for news and archive pages. It now looks nicer

## v2.4.0 (2024-01-05)
- Small styles fixes for search input
- Fixed styles for hover effect for breadcrumb links
- Fixed styles for hover effect for sidebar links on function page
- Updated number of recommended videos showing on home page from 3 to 7
- Updated 2 hero action button styles on home page
- Added styles for news pagination link on home page
- Added one more recommended video to a home page sidebar

## v2.3.0 (2024-01-04)
- Moved GitHub repository from `SerhiiCho/php-revival` to `php-revival/php-revival`
- Moved GitHub repository from `SerhiiCho/php-revival-api` to `php-revival/api`
- Fixed styles for the home page action buttons for the Chrome browser
- Fixed label styles issue on PHP 8.3 page. It was not visible on the Chrome browser

## v2.2.9 (2024-01-03)
- Added 5 more recommended videos to a home page sidebar
- Fixed color bug on php 8.3 page
- Fixed small label that has class `.php8-compare__label` on php 8.3 page
- Other small fixes and improvements on php 8.3 page
- Remove 2 old videos from the home page sidebar
- Added 1 Symfony video to the home page sidebar because I removed one of the old videos for Symfony 4

## v2.2.8 (2023-05-29)
- Internal code refactoring and cleanup
- Changed the structure of home hero to horizontal instead of vertical
- Changed styles of the home hero version links
- Removed one of the recommended videos
- Improved styles for the home cards in the feed section
- Links in the home page sidebar are now a bit better structured
- Links in the footer of PHP 8 page are now lighter and more visible

## v2.2.7 (2023-05-27)
- Improved styles from the right sidebar on the home page above the recommended videos
- Improved styles for php version links on home hero. Under the 2 home buttons
- Improved styles for the logo on the home page hero
- Internal code refactoring
- Small tweaks to recommended videos styles on the home page

## v2.2.6 (2023-05-26)
- Removed some videos from a home page that are outdated. Videos like "what's new in PHP 7.4" and things like that
- Fixed some of the php.net style issues on different pages
- Changed php.net to be more mobile friendly
- Changed styles of 2 main buttons on the home header
- Updated development environment to latest versions of TypeScript and other dependencies

## v2.2.5 (2023-05-23)
- Added php8.1 label to code examples on PHP 8 page
- Renamed file `changelog.md` to `CHANGELOG.md`
- Added 3 more YouTube videos to a home page
- Migrated to a manifest version 3 only for Chrome browser. For Firefox it's still v2

## v2.2.4 (2021-11-28)
- Fixed bug button on PHP 8 page on Chrome browser. It had a black text instead of white
- Added GitHub and Docker image links to a right sidebar on home page
- Increased font size for Chromium based browser

## v2.2.3 (2021-11-27)
- Added twitter link to the right sidebar on the home page
- Added 5 more recommended videos for the right sidebar on the home page
- Added styles to php 8 page
- Fixed styles on news single page

## v2.2.2 (2021-11-27)
- Changed extension icons

## v2.2.1 (2021-11-27)
- Refactored code that was responsible for injecting sidebar links on the home page
- Added new sidebar link on home page for PHP Foundation
- Added search icon to the top search field
- Changed code examples on single function page

## v2.2 (2021-04-01)
- Added more recommended videos to a home page sidebar
- Added link to a PHP playground on home page

## v2.0.8 (2020-05-02)
- Added scroll for php code examples on mobile screen

## v2.0.7 (2020-04-25)
- Changed extension logo icons
- Fixed code examples top corner buttons image

## v2.0.6 (2020-04-25)
- Removed animation and relocated the function version title on function's page
- Changed the top bar on code examples from macOS to Ubuntu like

## v2.0.5 (2020-04-18)
- Added more recommended videos to a home page sidebar

## v2.0.4 (2020-02-20)
- Added more recommended videos to a home page sidebar
- Added styles for notification box under the navbar

## v2.0.3 (2020-02-13)
- Added more recommended videos to a home page sidebar

## v2.0.2 (2020-02-09)
- Removed permissions access from manifest.json

## v2.0.1 (2020-02-09)
- Replaced ajax request on home page with import of a long array

## v2.0.0 (2020-02-08)
- Added 3 recommended video links on a https://www.php.net page sidebar
- Added styles for https://www.php.net/cal.php page
- Formatted 3 sidebar link on https://www.php.net page. Added colorful icons
- Refactored the TypeScript code base for the extension

## v1.9.8 (2020-02-06)
- Rewrote JavaScript to TypeScript

## v1.9.7 (2020-01-29)
- Changed card style on home page
- Changed styles for layout-content on all pages
- Fixed colors on downloads page
- Fixed width for the sidebar panel
- Added styles to remove border right on Downloads page
- Added styles for twitter link on home page

## v1.9.6 (2019-12-16)
- Fixed style for the home page

## v1.9.5 (2019-12-16)
- Added styles to https://www.php.net/download-logos.php page
- Added styles to footer links for mobile view
- Fixed layout background color for function page for Chrome

## v1.9.4 (2019-12-14)
- Fixed color of the element `code.parameter` on https://www.php.net/manual/en/datetime.createfromformat.php page
- Fixed colors for class properties on pages like https://www.php.net/manual/en/class.arithmeticerror.php
- Fixed styles for chrome browser for php class pages
- Fixed link in `src/readme.txt` file
- Added line separators between changes in changelog.ml file

## v1.9.3 (2019-12-14)
- Fixed method name color on page https://www.php.net/manual/en/datetime.createfromformat.php

## v1.9.2 (2019-12-12)
- Added styles for page: https://www.php.net/downloads.php

## v1.9.1 (2019-12-07)
- Fixed changed styles of "add comment" button on function page

## v1.9 (2019-12-07)
- Added styles for https://www.php.net/supported-versions.php page
- Fixed "Add comment" button on function page now has white color

## v1.8 (2019-09-02)
- Added light border for list item on right sidebar of the layout
- Added styles for home page news
- Added styles for intro block on home page
- Added styles to search page https://www.php.net/search.php?show=quickref&pattern=
- Changed border radius of php code examples windows from 5px to 4px
- Changed all links style
- Changed standard table styles
- Changed style on right sidebar links on pages like "https://www.php.net/downloads.php" and "https://www.php.net/get-involved.php"
- Removed hash symbol from titles on individual function page

## v1.7 (2019-08-25)
- Added styles for tables on PHP operators page
- Added styles for standard table on Documentation page
- Changed browser buttons image on php code examples from jpeg format to base64 in order to make it visible on chrome browser
- Removed animation from search bar when page is loading

## v1.6 (2019-08-24)
- Fixed problem with not showing new styles for search dropdown block
- Removed script that was changing favicon icon

## v1.5 (2019-08-21)
- Changed style and colors on user's comments

## v1.4 (2019-08-21)
- Added styles for standard table on "Get Involved" page
- Added styles for changelog table
- Added styles for "See also section"
- Added styles for section "Return types"
- Changed rounded extension icon image
- Fixed not showing new dark code color theme for Parameters section

## v1.3 (2019-08-20)
- Added styles for class code examples "Class synopsis" section
- Changed colors of the public, private and protected keywords in code description

## v1.2 (2019-08-18)
- Added new styles to alert box with "Tip" title
- Added styles for titles on examples sections
- Changed extension description in manifest.json file
- Changed border radius for main layout from 3px to 1px
- Changed reduced border radius for user comments sections
- Removed border bottom on breadcrumb links
- Removed italic font style from user comments
