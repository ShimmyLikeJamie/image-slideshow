/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("let pictures = [\r\n  '1.jpg',\r\n  '2.jfif',\r\n  '3.jfif',\r\n  '4.jpg',\r\n  '5.jfif',\r\n  '6.jfif',\r\n  '7.jfif',\r\n  '8.jfif',\r\n];\r\nlet index = 0;\r\nlet next = document.getElementById('next');\r\nlet previous = document.getElementById('previous');\r\nlet currentImage = document.getElementById('currentImage');\r\nlet navigationDots = document.getElementById('navigationDots');\r\nlet i = 0;\r\n\r\nwhile (i < pictures.length) {\r\n  // Creates a navigationDot for each picture\r\n  let dot = document.createElement('span');\r\n  dot.classList.add('navigationDot');\r\n  dot.setAttribute('id', `dot${String(i)}`);\r\n\r\n  dot.onclick = () => {\r\n    // Changes picture to current navigationDot's image\r\n    let j = 3;\r\n    let dotNumber = '';\r\n    while (j < dot.id.length) {\r\n      dotNumber += String(dot.id[j]);\r\n      j += 1;\r\n    }\r\n    changeImage(parseInt(dotNumber));\r\n  };\r\n\r\n  navigationDots.appendChild(dot);\r\n  i += 1;\r\n}\r\n\r\nlet autoPlay = setInterval(() => {\r\n  next.click();\r\n}, 5000);\r\n\r\nasync function changeImage(index) {\r\n  currentImage.id = 'invisible';\r\n  await new Promise((r) => setTimeout(r, 1000));\r\n  clearInterval(autoPlay);\r\n  autoPlay = setInterval(() => {\r\n    next.click();\r\n  }, 5000);\r\n  console.log('slept one second');\r\n  let newsrc = 'styles/media/' + pictures[index];\r\n  currentImage.setAttribute('src', newsrc);\r\n  currentImage.id = 'currentImage';\r\n}\r\n\r\nnext.onclick = () => {\r\n  if (index == pictures.length - 1) {\r\n    index = 0;\r\n  } else {\r\n    index += 1;\r\n  }\r\n  changeImage(index);\r\n};\r\nprevious.onclick = () => {\r\n  if (index == 0) {\r\n    index = pictures.length - 1;\r\n  } else {\r\n    index -= 1;\r\n  }\r\n  changeImage(index);\r\n};\r\n\n\n//# sourceURL=webpack://image-slider/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;