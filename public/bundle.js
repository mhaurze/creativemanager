/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/scss/style.scss":
/*!*****************************!*\
  !*** ./src/scss/style.scss ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2Nzcy9zdHlsZS5zY3NzLmpzIiwibWFwcGluZ3MiOiI7QUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL2NyZWF0aXZlbWFuYWdlci8uL3NyYy9zY3NzL3N0eWxlLnNjc3M/YzY5YiJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/scss/style.scss\n");

/***/ }),

/***/ "./src/CreativeAnalyzer.ts":
/*!*********************************!*\
  !*** ./src/CreativeAnalyzer.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"CreativeAnalyzer\": () => (/* binding */ CreativeAnalyzer)\n/* harmony export */ });\nclass CreativeAnalyzer {\r\n    constructor() { }\r\n    find(paramPlacementId, paramCreativeHTML) {\r\n        //do something here\r\n        return {};\r\n    }\r\n    run(data) {\r\n    }\r\n}\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvQ3JlYXRpdmVBbmFseXplci50cy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQ08sTUFBTSxnQkFBZ0I7SUFDekIsZ0JBQWMsQ0FBQztJQUVmLElBQUksQ0FBQyxnQkFBdUIsRUFBRSxpQkFBcUI7UUFDL0MsbUJBQW1CO1FBQ25CLE9BQU8sRUFBRSxDQUFDO0lBQ2QsQ0FBQztJQUVELEdBQUcsQ0FBQyxJQUFXO0lBRWYsQ0FBQztDQUNKIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY3JlYXRpdmVtYW5hZ2VyLy4vc3JjL0NyZWF0aXZlQW5hbHl6ZXIudHM/OTEyNCJdLCJzb3VyY2VzQ29udGVudCI6WyJcclxuZXhwb3J0IGNsYXNzIENyZWF0aXZlQW5hbHl6ZXIge1xyXG4gICAgY29uc3RydWN0b3IoKXt9XHJcblxyXG4gICAgZmluZChwYXJhbVBsYWNlbWVudElkOnN0cmluZywgcGFyYW1DcmVhdGl2ZUhUTUw6YW55KSA6IG9iamVjdCB7XHJcbiAgICAgICAgLy9kbyBzb21ldGhpbmcgaGVyZVxyXG4gICAgICAgIHJldHVybiB7fTtcclxuICAgIH1cclxuXHJcbiAgICBydW4oZGF0YTpvYmplY3QpIDogdm9pZHtcclxuXHJcbiAgICB9XHJcbn0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/CreativeAnalyzer.ts\n");

/***/ }),

/***/ "./src/CreativeManager.ts":
/*!********************************!*\
  !*** ./src/CreativeManager.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"CreativeManager\": () => (/* binding */ CreativeManager)\n/* harmony export */ });\n/* harmony import */ var _Logger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Logger */ \"./src/Logger.ts\");\n/* harmony import */ var _CreativeAnalyzer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CreativeAnalyzer */ \"./src/CreativeAnalyzer.ts\");\n/* harmony import */ var _PlacementStorage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PlacementStorage */ \"./src/PlacementStorage.ts\");\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\n //at fist i thought this was the actuall logger from node js :D\r\n\r\n\r\nclass CreativeManager {\r\n    constructor(initialData) {\r\n        this.fetch(initialData.publisherId);\r\n        this.creativeAnalyzer = new _CreativeAnalyzer__WEBPACK_IMPORTED_MODULE_1__.CreativeAnalyzer();\r\n        this.placementStorage = new _PlacementStorage__WEBPACK_IMPORTED_MODULE_2__.PlacementStorage();\r\n    }\r\n    fetchPublisher(publisherId) {\r\n        return __awaiter(this, void 0, void 0, function* () {\r\n            const response = yield fetch(\"/api/publishers/\" + publisherId, {\r\n                method: \"GET\",\r\n                headers: {\r\n                    \"Content-Type\": \"application/json\"\r\n                },\r\n            });\r\n            const data = yield response.json();\r\n            this.publisher = data.publisher;\r\n        });\r\n    }\r\n    fetchCreatives(result) {\r\n        return __awaiter(this, void 0, void 0, function* () {\r\n            const response = yield fetch(\"/api/publishers/\" + this.publisher.id + \"/creatives/\", {\r\n                method: \"GET\",\r\n                headers: {\r\n                    \"Content-Type\": \"application/json\"\r\n                },\r\n            });\r\n            const data = yield response.json();\r\n            this.creatives = data.creatives;\r\n        });\r\n    }\r\n    fetch(publisherId) {\r\n        return __awaiter(this, void 0, void 0, function* () {\r\n            const result = yield this.fetchPublisher(publisherId);\r\n            return this.fetchCreatives(result);\r\n        });\r\n    }\r\n    run() {\r\n        for (const creative of this.creatives) {\r\n            switch (creative.adType) {\r\n                case 'simple': {\r\n                    const logger = new _Logger__WEBPACK_IMPORTED_MODULE_0__.Logger();\r\n                    logger.send(\"Creative rendered\", {\r\n                        creative_id: creative.id,\r\n                        creative_name: creative.name,\r\n                        creative_type: creative.adType,\r\n                        creative_size: creative.size,\r\n                        creative_price: creative.price,\r\n                        creative_placement: creative.plcementId,\r\n                    });\r\n                    this.creativeAnalyzer.run({\r\n                        id: creative.id,\r\n                        name: creative.name,\r\n                        type: creative.adType,\r\n                        price: creative.price,\r\n                    });\r\n                    this.render(this.placementStorage.find(creative.placementId, creative.html));\r\n                    break;\r\n                }\r\n                case 'takeover': {\r\n                    const notAllowedTakeovers = [2233, 45435, 2352, 6683];\r\n                    if (notAllowedTakeovers.indexOf(creative.takeoverId) === -1) {\r\n                        const logger = new _Logger__WEBPACK_IMPORTED_MODULE_0__.Logger();\r\n                        logger.send(\"Creative rendered\", {\r\n                            creative_id: creative.id,\r\n                            creative_name: creative.name,\r\n                            creative_type: creative.adType,\r\n                            creative_size: creative.size,\r\n                            creative_price: creative.price,\r\n                        });\r\n                        this.creativeAnalyzer.run({\r\n                            id: creative.id,\r\n                            name: creative.name,\r\n                            type: creative.adType,\r\n                            price: creative.price,\r\n                        });\r\n                        this.renderTakeover(this.placementStorage.find(creative.placementId, creative.takeoverParams));\r\n                    }\r\n                    break;\r\n                }\r\n                case 'hybrid': {\r\n                    const logger = new _Logger__WEBPACK_IMPORTED_MODULE_0__.Logger();\r\n                    logger.send(\"Creative rendered\", {\r\n                        creative_id: creative.id,\r\n                        creative_name: creative.name,\r\n                        creative_type: creative.adType,\r\n                        creative_size: creative.size,\r\n                        creative_price: creative.price,\r\n                    });\r\n                    this.creativeAnalyzer.run({\r\n                        id: creative.id,\r\n                        name: creative.name,\r\n                        type: creative.adType,\r\n                        price: creative.price,\r\n                    });\r\n                    if (creative.hybrid.vertical) {\r\n                        this.render(this.placementStorage.find(creative.placementId), creative.hybrid.verticalHtml);\r\n                    }\r\n                    else if (creative.hybrid.horizontal) {\r\n                        this.render(this.placementStorage.find(creative.placementId), creative.hybrid.horizontalHtml);\r\n                    }\r\n                    else if (creative.hybrid.takeover) {\r\n                        const notAllowedTakeovers = [2233, 45435, 2352, 6683];\r\n                        if (notAllowedTakeovers.indexOf(creative.hybrid.takeoverId) === -1) {\r\n                            this.renderTakeover(this.placementStorage.find(creative.placementId), creative.hybrid.takeoverParams);\r\n                        }\r\n                    }\r\n                    else {\r\n                        this.render(this.placementStorage.find(creative.placementId), creative.hybrid.html);\r\n                    }\r\n                    break;\r\n                }\r\n                default: break;\r\n            }\r\n        }\r\n    }\r\n    render(placementId, htmlStr) {\r\n        const placement = document.getElementById(placementId.toString());\r\n        if (htmlStr)\r\n            placement.innerHTML = htmlStr;\r\n    }\r\n    renderTakeover(placementId, params) {\r\n        // renders creative in a specific way\r\n    }\r\n}\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvQ3JlYXRpdmVNYW5hZ2VyLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBZ0MsQ0FBQywrREFBK0Q7QUFHNUM7QUFDQTtBQUc3QyxNQUFNLGVBQWU7SUFTM0IsWUFBWSxXQUFpQjtRQUM1QixJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUNwQyxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSwrREFBZ0IsRUFBRSxDQUFDO1FBQy9DLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLCtEQUFnQixFQUFFLENBQUM7SUFFaEQsQ0FBQztJQUdLLGNBQWMsQ0FBQyxXQUFvQjs7WUFDeEMsTUFBTSxRQUFRLEdBQUcsTUFBTSxLQUFLLENBQUMsa0JBQWtCLEdBQUcsV0FBVyxFQUFFO2dCQUM5RCxNQUFNLEVBQUUsS0FBSztnQkFDYixPQUFPLEVBQUU7b0JBQ1IsY0FBYyxFQUFFLGtCQUFrQjtpQkFDbEM7YUFDRCxDQUFDLENBQUM7WUFDSCxNQUFNLElBQUksR0FBRyxNQUFNLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztZQUNuQyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUM7UUFDakMsQ0FBQztLQUFBO0lBR0ssY0FBYyxDQUFDLE1BQVk7O1lBQ2hDLE1BQU0sUUFBUSxHQUFHLE1BQU0sS0FBSyxDQUFDLGtCQUFrQixHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsRUFBRSxHQUFHLGFBQWEsRUFBRTtnQkFDcEYsTUFBTSxFQUFFLEtBQUs7Z0JBQ2IsT0FBTyxFQUFFO29CQUNSLGNBQWMsRUFBRSxrQkFBa0I7aUJBQ2xDO2FBQ0QsQ0FBQyxDQUFDO1lBQ0gsTUFBTSxJQUFJLEdBQUcsTUFBTSxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7WUFDbkMsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDO1FBQ2pDLENBQUM7S0FBQTtJQUdLLEtBQUssQ0FBQyxXQUFrQjs7WUFDN0IsTUFBTSxNQUFNLEdBQUcsTUFBTSxJQUFJLENBQUMsY0FBYyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1lBQ3RELE9BQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNwQyxDQUFDO0tBQUE7SUFHRCxHQUFHO1FBQ0YsS0FBSyxNQUFNLFFBQVEsSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFO1lBQ3RDLFFBQVEsUUFBUSxDQUFDLE1BQU0sRUFBRTtnQkFDeEIsS0FBSyxRQUFRLENBQUMsQ0FBQztvQkFDZCxNQUFNLE1BQU0sR0FBRyxJQUFJLDJDQUFNLEVBQUUsQ0FBQztvQkFDNUIsTUFBTSxDQUFDLElBQUksQ0FBQyxtQkFBbUIsRUFBRTt3QkFDaEMsV0FBVyxFQUFFLFFBQVEsQ0FBQyxFQUFFO3dCQUN4QixhQUFhLEVBQUUsUUFBUSxDQUFDLElBQUk7d0JBQzVCLGFBQWEsRUFBRSxRQUFRLENBQUMsTUFBTTt3QkFDOUIsYUFBYSxFQUFFLFFBQVEsQ0FBQyxJQUFJO3dCQUM1QixjQUFjLEVBQUUsUUFBUSxDQUFDLEtBQUs7d0JBQzlCLGtCQUFrQixFQUFFLFFBQVEsQ0FBQyxVQUFVO3FCQUN2QyxDQUFDLENBQUM7b0JBQ0gsSUFBSSxDQUFDLGdCQUFnQixDQUFDLEdBQUcsQ0FBQzt3QkFDekIsRUFBRSxFQUFFLFFBQVEsQ0FBQyxFQUFFO3dCQUNmLElBQUksRUFBRSxRQUFRLENBQUMsSUFBSTt3QkFDbkIsSUFBSSxFQUFFLFFBQVEsQ0FBQyxNQUFNO3dCQUNyQixLQUFLLEVBQUUsUUFBUSxDQUFDLEtBQUs7cUJBQ3JCLENBQUMsQ0FBQztvQkFHSCxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsRUFBRSxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztvQkFHN0UsTUFBTTtpQkFDTjtnQkFDRCxLQUFLLFVBQVUsQ0FBQyxDQUFDO29CQUNoQixNQUFNLG1CQUFtQixHQUFHLENBQUMsSUFBSSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7b0JBR3RELElBQUksbUJBQW1CLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRTt3QkFDNUQsTUFBTSxNQUFNLEdBQUcsSUFBSSwyQ0FBTSxFQUFFLENBQUM7d0JBQzVCLE1BQU0sQ0FBQyxJQUFJLENBQUMsbUJBQW1CLEVBQUU7NEJBQ2hDLFdBQVcsRUFBRSxRQUFRLENBQUMsRUFBRTs0QkFDeEIsYUFBYSxFQUFFLFFBQVEsQ0FBQyxJQUFJOzRCQUM1QixhQUFhLEVBQUUsUUFBUSxDQUFDLE1BQU07NEJBQzlCLGFBQWEsRUFBRSxRQUFRLENBQUMsSUFBSTs0QkFDNUIsY0FBYyxFQUFFLFFBQVEsQ0FBQyxLQUFLO3lCQUM5QixDQUFDLENBQUM7d0JBQ0gsSUFBSSxDQUFDLGdCQUFnQixDQUFDLEdBQUcsQ0FBQzs0QkFDekIsRUFBRSxFQUFFLFFBQVEsQ0FBQyxFQUFFOzRCQUNmLElBQUksRUFBRSxRQUFRLENBQUMsSUFBSTs0QkFDbkIsSUFBSSxFQUFFLFFBQVEsQ0FBQyxNQUFNOzRCQUNyQixLQUFLLEVBQUUsUUFBUSxDQUFDLEtBQUs7eUJBQ3JCLENBQUMsQ0FBQzt3QkFDSCxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsRUFBRSxRQUFRLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQztxQkFDL0Y7b0JBR0QsTUFBTTtpQkFDTjtnQkFDRCxLQUFLLFFBQVEsQ0FBQyxDQUFDO29CQUNkLE1BQU0sTUFBTSxHQUFHLElBQUksMkNBQU0sRUFBRSxDQUFDO29CQUM1QixNQUFNLENBQUMsSUFBSSxDQUFDLG1CQUFtQixFQUFFO3dCQUNoQyxXQUFXLEVBQUUsUUFBUSxDQUFDLEVBQUU7d0JBQ3hCLGFBQWEsRUFBRSxRQUFRLENBQUMsSUFBSTt3QkFDNUIsYUFBYSxFQUFFLFFBQVEsQ0FBQyxNQUFNO3dCQUM5QixhQUFhLEVBQUUsUUFBUSxDQUFDLElBQUk7d0JBQzVCLGNBQWMsRUFBRSxRQUFRLENBQUMsS0FBSztxQkFDOUIsQ0FBQyxDQUFDO29CQUNILElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxHQUFHLENBQUM7d0JBQ3pCLEVBQUUsRUFBRSxRQUFRLENBQUMsRUFBRTt3QkFDZixJQUFJLEVBQUUsUUFBUSxDQUFDLElBQUk7d0JBQ25CLElBQUksRUFBRSxRQUFRLENBQUMsTUFBTTt3QkFDckIsS0FBSyxFQUFFLFFBQVEsQ0FBQyxLQUFLO3FCQUNyQixDQUFDLENBQUM7b0JBR0gsSUFBSSxRQUFRLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRTt3QkFDN0IsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsRUFBRSxRQUFRLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDO3FCQUM1Rjt5QkFBTSxJQUFJLFFBQVEsQ0FBQyxNQUFNLENBQUMsVUFBVSxFQUFFO3dCQUN0QyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxFQUFFLFFBQVEsQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDLENBQUM7cUJBQzlGO3lCQUFNLElBQUksUUFBUSxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUU7d0JBQ3BDLE1BQU0sbUJBQW1CLEdBQUcsQ0FBQyxJQUFJLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQzt3QkFHdEQsSUFBSSxtQkFBbUIsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRTs0QkFDbkUsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsRUFBRSxRQUFRLENBQUMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxDQUFDO3lCQUN0RztxQkFDRDt5QkFBTTt3QkFDTixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxFQUFFLFFBQVEsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7cUJBQ3BGO29CQUdELE1BQU07aUJBQ047Z0JBQ0QsT0FBTyxDQUFDLENBQUMsTUFBTTthQUNmO1NBQ0Q7SUFDRixDQUFDO0lBR0QsTUFBTSxDQUFDLFdBQWtCLEVBQUUsT0FBZTtRQUN6QyxNQUFNLFNBQVMsR0FBZSxRQUFRLENBQUMsY0FBYyxDQUFDLFdBQVcsQ0FBQyxRQUFRLEVBQUUsQ0FBcUIsQ0FBQztRQUNsRyxJQUFHLE9BQU87WUFBRSxTQUFTLENBQUMsU0FBUyxHQUFHLE9BQU8sQ0FBQztJQUMzQyxDQUFDO0lBR0QsY0FBYyxDQUFDLFdBQWtCLEVBQUUsTUFBVztRQUM3QyxxQ0FBcUM7SUFDdEMsQ0FBQztDQUNEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY3JlYXRpdmVtYW5hZ2VyLy4vc3JjL0NyZWF0aXZlTWFuYWdlci50cz9iZDhkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7TG9nZ2VyfSBmcm9tIFwiLi9Mb2dnZXJcIjsgLy9hdCBmaXN0IGkgdGhvdWdodCB0aGlzIHdhcyB0aGUgYWN0dWFsbCBsb2dnZXIgZnJvbSBub2RlIGpzIDpEXHJcblxyXG5cclxuaW1wb3J0IHtDcmVhdGl2ZUFuYWx5emVyfSBmcm9tIFwiLi9DcmVhdGl2ZUFuYWx5emVyXCI7XHJcbmltcG9ydCB7UGxhY2VtZW50U3RvcmFnZX0gZnJvbSBcIi4vUGxhY2VtZW50U3RvcmFnZVwiO1xyXG5cclxuXHJcbmV4cG9ydCBjbGFzcyBDcmVhdGl2ZU1hbmFnZXIge1xyXG5cclxuXHRwcml2YXRlIHB1Ymxpc2hlcjphbnk7XHJcblx0cHJpdmF0ZSBjcmVhdGl2ZXM6YW55O1xyXG5cclxuXHRwcml2YXRlIGNyZWF0aXZlQW5hbHl6ZXI6IENyZWF0aXZlQW5hbHl6ZXI7XHJcblx0cHJpdmF0ZSBwbGFjZW1lbnRTdG9yYWdlOiBQbGFjZW1lbnRTdG9yYWdlO1xyXG5cclxuXHJcblx0Y29uc3RydWN0b3IoaW5pdGlhbERhdGEgOiBhbnkpIHtcclxuXHRcdHRoaXMuZmV0Y2goaW5pdGlhbERhdGEucHVibGlzaGVySWQpO1xyXG5cdFx0dGhpcy5jcmVhdGl2ZUFuYWx5emVyID0gbmV3IENyZWF0aXZlQW5hbHl6ZXIoKTtcclxuXHRcdHRoaXMucGxhY2VtZW50U3RvcmFnZSA9IG5ldyBQbGFjZW1lbnRTdG9yYWdlKCk7XHJcblxyXG5cdH1cclxuXHJcblxyXG5cdGFzeW5jIGZldGNoUHVibGlzaGVyKHB1Ymxpc2hlcklkIDogc3RyaW5nKSB7XHJcblx0XHRjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFwiL2FwaS9wdWJsaXNoZXJzL1wiICsgcHVibGlzaGVySWQsIHtcclxuXHRcdFx0bWV0aG9kOiBcIkdFVFwiLFxyXG5cdFx0XHRoZWFkZXJzOiB7XHJcblx0XHRcdFx0XCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCJcclxuXHRcdFx0fSxcclxuXHRcdH0pO1xyXG5cdFx0Y29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuXHRcdHRoaXMucHVibGlzaGVyID0gZGF0YS5wdWJsaXNoZXI7XHJcblx0fVxyXG5cclxuXHJcblx0YXN5bmMgZmV0Y2hDcmVhdGl2ZXMocmVzdWx0IDogYW55KSB7XHJcblx0XHRjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFwiL2FwaS9wdWJsaXNoZXJzL1wiICsgdGhpcy5wdWJsaXNoZXIuaWQgKyBcIi9jcmVhdGl2ZXMvXCIsIHtcclxuXHRcdFx0bWV0aG9kOiBcIkdFVFwiLFxyXG5cdFx0XHRoZWFkZXJzOiB7XHJcblx0XHRcdFx0XCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCJcclxuXHRcdFx0fSxcclxuXHRcdH0pO1xyXG5cdFx0Y29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuXHRcdHRoaXMuY3JlYXRpdmVzID0gZGF0YS5jcmVhdGl2ZXM7XHJcblx0fVxyXG5cclxuXHJcblx0YXN5bmMgZmV0Y2gocHVibGlzaGVySWQ6c3RyaW5nKSB7XHJcblx0XHRjb25zdCByZXN1bHQgPSBhd2FpdCB0aGlzLmZldGNoUHVibGlzaGVyKHB1Ymxpc2hlcklkKTtcclxuXHRcdHJldHVybiB0aGlzLmZldGNoQ3JlYXRpdmVzKHJlc3VsdCk7XHJcblx0fVxyXG5cclxuXHJcblx0cnVuKCkge1xyXG5cdFx0Zm9yIChjb25zdCBjcmVhdGl2ZSBvZiB0aGlzLmNyZWF0aXZlcykge1xyXG5cdFx0XHRzd2l0Y2ggKGNyZWF0aXZlLmFkVHlwZSkge1xyXG5cdFx0XHRcdGNhc2UgJ3NpbXBsZSc6IHtcclxuXHRcdFx0XHRcdGNvbnN0IGxvZ2dlciA9IG5ldyBMb2dnZXIoKTtcclxuXHRcdFx0XHRcdGxvZ2dlci5zZW5kKFwiQ3JlYXRpdmUgcmVuZGVyZWRcIiwge1xyXG5cdFx0XHRcdFx0XHRjcmVhdGl2ZV9pZDogY3JlYXRpdmUuaWQsXHJcblx0XHRcdFx0XHRcdGNyZWF0aXZlX25hbWU6IGNyZWF0aXZlLm5hbWUsXHJcblx0XHRcdFx0XHRcdGNyZWF0aXZlX3R5cGU6IGNyZWF0aXZlLmFkVHlwZSxcclxuXHRcdFx0XHRcdFx0Y3JlYXRpdmVfc2l6ZTogY3JlYXRpdmUuc2l6ZSxcclxuXHRcdFx0XHRcdFx0Y3JlYXRpdmVfcHJpY2U6IGNyZWF0aXZlLnByaWNlLFxyXG5cdFx0XHRcdFx0XHRjcmVhdGl2ZV9wbGFjZW1lbnQ6IGNyZWF0aXZlLnBsY2VtZW50SWQsXHJcblx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHRcdHRoaXMuY3JlYXRpdmVBbmFseXplci5ydW4oe1xyXG5cdFx0XHRcdFx0XHRpZDogY3JlYXRpdmUuaWQsXHJcblx0XHRcdFx0XHRcdG5hbWU6IGNyZWF0aXZlLm5hbWUsXHJcblx0XHRcdFx0XHRcdHR5cGU6IGNyZWF0aXZlLmFkVHlwZSxcclxuXHRcdFx0XHRcdFx0cHJpY2U6IGNyZWF0aXZlLnByaWNlLFxyXG5cdFx0XHRcdFx0fSk7XHJcblxyXG5cclxuXHRcdFx0XHRcdHRoaXMucmVuZGVyKHRoaXMucGxhY2VtZW50U3RvcmFnZS5maW5kKGNyZWF0aXZlLnBsYWNlbWVudElkLCBjcmVhdGl2ZS5odG1sKSk7XHJcblxyXG5cclxuXHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRjYXNlICd0YWtlb3Zlcic6IHtcclxuXHRcdFx0XHRcdGNvbnN0IG5vdEFsbG93ZWRUYWtlb3ZlcnMgPSBbMjIzMywgNDU0MzUsIDIzNTIsIDY2ODNdO1xyXG5cclxuXHJcblx0XHRcdFx0XHRpZiAobm90QWxsb3dlZFRha2VvdmVycy5pbmRleE9mKGNyZWF0aXZlLnRha2VvdmVySWQpID09PSAtMSkge1xyXG5cdFx0XHRcdFx0XHRjb25zdCBsb2dnZXIgPSBuZXcgTG9nZ2VyKCk7XHJcblx0XHRcdFx0XHRcdGxvZ2dlci5zZW5kKFwiQ3JlYXRpdmUgcmVuZGVyZWRcIiwge1xyXG5cdFx0XHRcdFx0XHRcdGNyZWF0aXZlX2lkOiBjcmVhdGl2ZS5pZCxcclxuXHRcdFx0XHRcdFx0XHRjcmVhdGl2ZV9uYW1lOiBjcmVhdGl2ZS5uYW1lLFxyXG5cdFx0XHRcdFx0XHRcdGNyZWF0aXZlX3R5cGU6IGNyZWF0aXZlLmFkVHlwZSxcclxuXHRcdFx0XHRcdFx0XHRjcmVhdGl2ZV9zaXplOiBjcmVhdGl2ZS5zaXplLFxyXG5cdFx0XHRcdFx0XHRcdGNyZWF0aXZlX3ByaWNlOiBjcmVhdGl2ZS5wcmljZSxcclxuXHRcdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0XHRcdHRoaXMuY3JlYXRpdmVBbmFseXplci5ydW4oe1xyXG5cdFx0XHRcdFx0XHRcdGlkOiBjcmVhdGl2ZS5pZCxcclxuXHRcdFx0XHRcdFx0XHRuYW1lOiBjcmVhdGl2ZS5uYW1lLFxyXG5cdFx0XHRcdFx0XHRcdHR5cGU6IGNyZWF0aXZlLmFkVHlwZSxcclxuXHRcdFx0XHRcdFx0XHRwcmljZTogY3JlYXRpdmUucHJpY2UsXHJcblx0XHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdFx0XHR0aGlzLnJlbmRlclRha2VvdmVyKHRoaXMucGxhY2VtZW50U3RvcmFnZS5maW5kKGNyZWF0aXZlLnBsYWNlbWVudElkLCBjcmVhdGl2ZS50YWtlb3ZlclBhcmFtcykpO1xyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHJcblx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0Y2FzZSAnaHlicmlkJzoge1xyXG5cdFx0XHRcdFx0Y29uc3QgbG9nZ2VyID0gbmV3IExvZ2dlcigpO1xyXG5cdFx0XHRcdFx0bG9nZ2VyLnNlbmQoXCJDcmVhdGl2ZSByZW5kZXJlZFwiLCB7XHJcblx0XHRcdFx0XHRcdGNyZWF0aXZlX2lkOiBjcmVhdGl2ZS5pZCxcclxuXHRcdFx0XHRcdFx0Y3JlYXRpdmVfbmFtZTogY3JlYXRpdmUubmFtZSxcclxuXHRcdFx0XHRcdFx0Y3JlYXRpdmVfdHlwZTogY3JlYXRpdmUuYWRUeXBlLFxyXG5cdFx0XHRcdFx0XHRjcmVhdGl2ZV9zaXplOiBjcmVhdGl2ZS5zaXplLFxyXG5cdFx0XHRcdFx0XHRjcmVhdGl2ZV9wcmljZTogY3JlYXRpdmUucHJpY2UsXHJcblx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHRcdHRoaXMuY3JlYXRpdmVBbmFseXplci5ydW4oe1xyXG5cdFx0XHRcdFx0XHRpZDogY3JlYXRpdmUuaWQsXHJcblx0XHRcdFx0XHRcdG5hbWU6IGNyZWF0aXZlLm5hbWUsXHJcblx0XHRcdFx0XHRcdHR5cGU6IGNyZWF0aXZlLmFkVHlwZSxcclxuXHRcdFx0XHRcdFx0cHJpY2U6IGNyZWF0aXZlLnByaWNlLFxyXG5cdFx0XHRcdFx0fSk7XHJcblxyXG5cclxuXHRcdFx0XHRcdGlmIChjcmVhdGl2ZS5oeWJyaWQudmVydGljYWwpIHtcclxuXHRcdFx0XHRcdFx0dGhpcy5yZW5kZXIodGhpcy5wbGFjZW1lbnRTdG9yYWdlLmZpbmQoY3JlYXRpdmUucGxhY2VtZW50SWQpLCBjcmVhdGl2ZS5oeWJyaWQudmVydGljYWxIdG1sKTtcclxuXHRcdFx0XHRcdH0gZWxzZSBpZiAoY3JlYXRpdmUuaHlicmlkLmhvcml6b250YWwpIHtcclxuXHRcdFx0XHRcdFx0dGhpcy5yZW5kZXIodGhpcy5wbGFjZW1lbnRTdG9yYWdlLmZpbmQoY3JlYXRpdmUucGxhY2VtZW50SWQpLCBjcmVhdGl2ZS5oeWJyaWQuaG9yaXpvbnRhbEh0bWwpO1xyXG5cdFx0XHRcdFx0fSBlbHNlIGlmIChjcmVhdGl2ZS5oeWJyaWQudGFrZW92ZXIpIHtcclxuXHRcdFx0XHRcdFx0Y29uc3Qgbm90QWxsb3dlZFRha2VvdmVycyA9IFsyMjMzLCA0NTQzNSwgMjM1MiwgNjY4M107XHJcblxyXG5cclxuXHRcdFx0XHRcdFx0aWYgKG5vdEFsbG93ZWRUYWtlb3ZlcnMuaW5kZXhPZihjcmVhdGl2ZS5oeWJyaWQudGFrZW92ZXJJZCkgPT09IC0xKSB7XHJcblx0XHRcdFx0XHRcdFx0dGhpcy5yZW5kZXJUYWtlb3Zlcih0aGlzLnBsYWNlbWVudFN0b3JhZ2UuZmluZChjcmVhdGl2ZS5wbGFjZW1lbnRJZCksIGNyZWF0aXZlLmh5YnJpZC50YWtlb3ZlclBhcmFtcyk7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdHRoaXMucmVuZGVyKHRoaXMucGxhY2VtZW50U3RvcmFnZS5maW5kKGNyZWF0aXZlLnBsYWNlbWVudElkKSwgY3JlYXRpdmUuaHlicmlkLmh0bWwpO1xyXG5cdFx0XHRcdFx0fVxyXG5cclxuXHJcblx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0ZGVmYXVsdDogYnJlYWs7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcblxyXG5cclxuXHRyZW5kZXIocGxhY2VtZW50SWQ6c3RyaW5nLCBodG1sU3RyPzpzdHJpbmcpIHtcclxuXHRcdGNvbnN0IHBsYWNlbWVudDpIVE1MRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHBsYWNlbWVudElkLnRvU3RyaW5nKCkpIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XHJcblx0XHRpZihodG1sU3RyKSBwbGFjZW1lbnQuaW5uZXJIVE1MID0gaHRtbFN0cjtcclxuXHR9XHJcblxyXG5cclxuXHRyZW5kZXJUYWtlb3ZlcihwbGFjZW1lbnRJZDpzdHJpbmcsIHBhcmFtcz86YW55KSB7XHJcblx0XHQvLyByZW5kZXJzIGNyZWF0aXZlIGluIGEgc3BlY2lmaWMgd2F5XHJcblx0fVxyXG59XHJcblxyXG5cclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/CreativeManager.ts\n");

/***/ }),

/***/ "./src/Logger.ts":
/*!***********************!*\
  !*** ./src/Logger.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Logger\": () => (/* binding */ Logger)\n/* harmony export */ });\nclass Logger {\r\n    constructor() {\r\n    }\r\n    send(paramPlacementId, paramTakeOver) {\r\n        //return 'placementStorage'; //for dummy only\r\n    }\r\n}\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvTG9nZ2VyLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFFTyxNQUFNLE1BQU07SUFDZjtJQUVBLENBQUM7SUFDRCxJQUFJLENBQUMsZ0JBQXVCLEVBQUUsYUFBb0I7UUFDOUMsNkNBQTZDO0lBQ2pELENBQUM7Q0FDSiIsInNvdXJjZXMiOlsid2VicGFjazovL2NyZWF0aXZlbWFuYWdlci8uL3NyYy9Mb2dnZXIudHM/NTIzZCJdLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXHJcbmV4cG9ydCBjbGFzcyBMb2dnZXIgeyBcclxuICAgIGNvbnN0cnVjdG9yKCl7XHJcblxyXG4gICAgfVxyXG4gICAgc2VuZChwYXJhbVBsYWNlbWVudElkOnN0cmluZywgcGFyYW1UYWtlT3ZlcjpvYmplY3QpIHtcclxuICAgICAgICAvL3JldHVybiAncGxhY2VtZW50U3RvcmFnZSc7IC8vZm9yIGR1bW15IG9ubHlcclxuICAgIH1cclxufSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/Logger.ts\n");

/***/ }),

/***/ "./src/PlacementStorage.ts":
/*!*********************************!*\
  !*** ./src/PlacementStorage.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"PlacementStorage\": () => (/* binding */ PlacementStorage)\n/* harmony export */ });\nclass PlacementStorage {\r\n    constructor() {\r\n    }\r\n    find(paramPlacementId, paramTakeOver) {\r\n        return 'placementStorage'; //for dummy only\r\n    }\r\n}\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvUGxhY2VtZW50U3RvcmFnZS50cy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBRU8sTUFBTSxnQkFBZ0I7SUFDekI7SUFFQSxDQUFDO0lBQ0QsSUFBSSxDQUFDLGdCQUF1QixFQUFFLGFBQXFCO1FBQy9DLE9BQU8sa0JBQWtCLENBQUMsQ0FBQyxnQkFBZ0I7SUFDL0MsQ0FBQztDQUNKIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY3JlYXRpdmVtYW5hZ2VyLy4vc3JjL1BsYWNlbWVudFN0b3JhZ2UudHM/Y2JiNCJdLCJzb3VyY2VzQ29udGVudCI6WyJcclxuXHJcbmV4cG9ydCBjbGFzcyBQbGFjZW1lbnRTdG9yYWdlIHtcclxuICAgIGNvbnN0cnVjdG9yKCl7XHJcblxyXG4gICAgfVxyXG4gICAgZmluZChwYXJhbVBsYWNlbWVudElkOnN0cmluZywgcGFyYW1UYWtlT3Zlcj86U3RyaW5nKTpzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiAncGxhY2VtZW50U3RvcmFnZSc7IC8vZm9yIGR1bW15IG9ubHlcclxuICAgIH1cclxufSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/PlacementStorage.ts\n");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _CreativeManager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./CreativeManager */ \"./src/CreativeManager.ts\");\n\r\nconst creativeManager = new _CreativeManager__WEBPACK_IMPORTED_MODULE_0__.CreativeManager({\r\n    publisherId: 1\r\n});\r\n// ....\r\ncreativeManager.run();\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXgudHMuanMiLCJtYXBwaW5ncyI6Ijs7QUFBaUQ7QUFHakQsTUFBTSxlQUFlLEdBQUcsSUFBSSw2REFBZSxDQUFDO0lBQzNDLFdBQVcsRUFBRSxDQUFDO0NBQ2QsQ0FBQyxDQUFDO0FBRUgsT0FBTztBQUVQLGVBQWUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2NyZWF0aXZlbWFuYWdlci8uL3NyYy9pbmRleC50cz9mZmI0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q3JlYXRpdmVNYW5hZ2VyfSBmcm9tICcuL0NyZWF0aXZlTWFuYWdlcidcclxuXHJcblxyXG5jb25zdCBjcmVhdGl2ZU1hbmFnZXIgPSBuZXcgQ3JlYXRpdmVNYW5hZ2VyKHtcclxuXHRwdWJsaXNoZXJJZDogMVxyXG59KTtcclxuXHJcbi8vIC4uLi5cclxuXHJcbmNyZWF0aXZlTWFuYWdlci5ydW4oKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.ts\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	__webpack_require__("./src/index.ts");
/******/ 	var __webpack_exports__ = __webpack_require__("./src/scss/style.scss");
/******/ 	
/******/ })()
;