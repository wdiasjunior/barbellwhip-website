import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            Docusaurus Tutorial - 5min ⏱️
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}

// <!DOCTYPE html>
// <html lang="en" dir="ltr">
//   <head>
//     <meta charset="utf-8" name="viewport" content="height=device-height, width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no, target-densitydpi=device-dpi">
//     <link rel="icon" type="image/x-icon" href="src/img/favicon.ico">
//     <link rel="stylesheet" type="text/css" href="src/css/index.css">
//     <script defer src="src/js/index.js" type="text/javascript"></script>
//     <title>BarbellWhip</title>
//   </head>
//   <body>
//
//     <header id="header">
//       <div class="header_left">
//         <div id="menu_icon" onclick="toggleMenu()">
//           <svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512">
//             <path fill="none" stroke="#ffffff" stroke-miterlimit="10" stroke-width="32" d="M80 160h352M80 256h352M80 352h352"/>
//           </svg>
//         </div>
//         <a class="header_logo_wrapper" href="#">
//           <img class="header_logo" src="src/img/logo_header.png" alt="">
//           <span class="header_title">BarbellWhip</span>
//         </a>
//       </div>
//       <div class="header_right">
//         <nav>
//           <a class="header_item" onclick="toggleMenu()" href="#">Home</a>
//           <a class="header_item" onclick="toggleMenu()" href="https://github.com/wdiasjunior/BarbellWhip/releases" target="_blank" rel="noopener noreferrer">Downloads</a>
//           <a class="header_item" onclick="toggleMenu()" href="/src/pages/programsArchive.html">Programs Archive</a>
//           <a class="header_item" onclick="toggleMenu()" href="https://www.github.com/wdiasjunior/BarbellWhip" target="_blank" rel="noopener noreferrer">GitHub</a>
//           <a class="header_item" onclick="toggleMenu()" href="https://www.reddit.com/r/BarbellWhip/" target="_blank" rel="noopener noreferrer">Reddit</a>
//           <!-- <button class="header_item_localization">English</button> -->
//         </nav>
//       </div>
//     </header>
//
//     <main>
//       <div class="intro">
//         <img class="intro_logo fade_in_bottom" src="src/img/logo.png" alt="logo">
//         <h1 class="intro_title fade_in_bottom">BarbellWhip</h1>
//         <p class="intro_description fade_in">Free and open source workout management app.</p>
//         <p class="intro_description fade_in">By powerlifters, for powerlifters.</p>
//         <div class="intro_buttons_wrapper fade_in">
//           <a class="intro_button intro_button_download" href="https://github.com/wdiasjunior/BarbellWhip/releases/download/v0.4.0/BarbellWhip_0.4.0.apk" target="_blank" rel="noopener noreferrer">Download</a>
//           <a class="intro_button intro_button_user_guide" href="/src/pages/docs/userGuide.html#doc_main_getting_started">User Guide</a>
//         </div>
//         <a class="intro_link" href="https://web.barbellwhip.com/" target="_blank"></a>
//       </div>
//
//       <div class="features">
//         <div class="features_description">
//           <p>
//             It is currently only supported on Android, and there's an
//             experimental web version for iOS users available
//             <a class="feature_web_version_link" href="https://web.barbellwhip.com" target="_blank" rel="noopener noreferrer">here</a>.
//           </p>
//
//           <p>
//             Created with the goal of improving readability of complex training programs
//             that make use of big spreadsheets mid training session.
//           </p>
//
//           <p>
//             It currently features a program review page, a program editor and a RM
//             (repetition max) and weight plate calculators.
//           </p>
//         </div>
//
//         <div class="features_items">
//           <div class="feature_item">
//             <h2 class="features_item_title">Practical</h2>
//             <p class="features_item_description">
//               Ditch the spreadsheet. Designed with simplicity and complexity in
//               mind, with support for multi set exercise entries.
//             </p>
//             <div class="feature_item_img_container">
//               <img class="feature_item_img feature_item_img_active" id="feature_1_id1" src="src/img/screenshots/1.jpg" loading="lazy" alt="feature image">
//               <img class="feature_item_img" id="feature_1_id2" src="src/img/screenshots/5.jpg" loading="lazy" alt="feature image">
//               <img class="feature_item_img" id="feature_1_id3" src="src/img/screenshots/3.jpg" loading="lazy" alt="feature image">
//               <img class="feature_item_img" id="feature_1_id4" src="src/img/screenshots/4.jpg" loading="lazy" alt="feature image">
//             </div>
//           </div>
//
//           <div class="feature_item">
//             <h2 class="features_item_title">Math</h2>
//             <p class="features_item_description">
//               Give your brain a break using the RM and Plate calculators.
//             </p>
//             <div class="feature_item_img_container">
//               <img class="feature_item_img feature_item_img_active" id="feature_2_id1" src="src/img/screenshots/6.jpg" loading="lazy" alt="feature image">
//               <img class="feature_item_img" id="feature_2_id2" src="src/img/screenshots/7.jpg" loading="lazy" alt="feature image">
//             </div>
//           </div>
//
//           <div class="feature_item">
//             <h2 class="features_item_title">Flexible</h2>
//             <p class="features_item_description">
//               Ajust your 1RMs and sets on the go with the built in editor.
//             </p>
//             <div class="feature_item_img_container">
//               <img class="feature_item_img feature_item_img_active" id="feature_3_id1" src="src/img/screenshots/8.jpg" loading="lazy" alt="feature image">
//               <img class="feature_item_img" id="feature_3_id2" src="src/img/screenshots/9.jpg" loading="lazy" alt="feature image">
//               <img class="feature_item_img" id="feature_3_id3" src="src/img/screenshots/10.jpg" loading="lazy" alt="feature image">
//               <img class="feature_item_img" id="feature_3_id4" src="src/img/screenshots/11.jpg" loading="lazy" alt="feature image">
//               <img class="feature_item_img" id="feature_3_id5" src="src/img/screenshots/12.jpg" loading="lazy" alt="feature image">
//             </div>
//           </div>
//         </div>
//
//       </div>
//
//       <div class="roadmap">
//         <h2 class="roadmap_title">Roadmap</h2>
//         <ul>
//           <li>Finish the documentation</li>
//           <li>Improve overall performance</li>
//           <li>Improve UI</li>
//           <li>Add new features to the 1RM Calculator
//             <ul>
//               <li>RPE calculator</li>
//             </ul>
//           </li>
//           <li>Improve the program editor page stack</li>
//           <li>Add a PR Tracker page</li>
//           <li>Spreadsheet conversion to the app's training program json schema</li>
//         </ul>
//       </div>
//
//       <div class="contribute">
//         <h2 class="contribute_title">Contribute</h2>
//         <p>
//           Help support the project
//         </p>
//
//         <p>
//           If you're a developer feel free to make a pull request or open an issue on our GitHub repo.
//         </p>
//
//         <p>
//           And if you're a designer feel free to suggest changes to improve the UI and UX.
//         </p>
//       </div>
//
//     </main>
//
//     <footer>
//       <span>© BarbellWhip 2023</span>
//     </footer>
//
//   </body>
// </html>
//
