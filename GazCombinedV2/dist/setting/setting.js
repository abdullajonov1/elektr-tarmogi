System.register(["jimu-core","jimu-ui","jimu-ui/basic/color-picker","jimu-ui/advanced/data-source-selector","jimu-ui/advanced/setting-components"], function(__WEBPACK_DYNAMIC_EXPORT__, __system_context__) {
	var __WEBPACK_EXTERNAL_MODULE_jimu_core__ = {};
	var __WEBPACK_EXTERNAL_MODULE_jimu_ui__ = {};
	var __WEBPACK_EXTERNAL_MODULE_jimu_ui_basic_color_picker__ = {};
	var __WEBPACK_EXTERNAL_MODULE_jimu_ui_advanced_data_source_selector__ = {};
	var __WEBPACK_EXTERNAL_MODULE_jimu_ui_advanced_setting_components__ = {};
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_core__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_ui__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_ui_basic_color_picker__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_ui_advanced_data_source_selector__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_ui_advanced_setting_components__, "__esModule", { value: true });
	return {
		setters: [
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_jimu_core__[key] = module[key];
				});
			},
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_jimu_ui__[key] = module[key];
				});
			},
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_jimu_ui_basic_color_picker__[key] = module[key];
				});
			},
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_jimu_ui_advanced_data_source_selector__[key] = module[key];
				});
			},
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_jimu_ui_advanced_setting_components__[key] = module[key];
				});
			}
		],
		execute: function() {
			__WEBPACK_DYNAMIC_EXPORT__(
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[3].use[1]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[3].use[2]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[3].use[3]!./your-extensions/widgets/GazCombinedV2/src/setting/setting.css":
/*!***********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[3].use[1]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[3].use[2]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[3].use[3]!./your-extensions/widgets/GazCombinedV2/src/setting/setting.css ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `@charset "UTF-8";
.gaz-combined-setting {
  display: flex;
  flex-direction: column;
}

.gaz-combined-setting-section {
  border-bottom: 1px solid rgba(128, 128, 128, 0.25);
  padding: 4px 0;
}

.gaz-combined-setting-section > summary {
  cursor: pointer;
  font-weight: 600;
  padding: 8px;
  list-style: none;
}

.gaz-combined-setting-section > summary::-webkit-details-marker {
  display: none;
}

.gaz-combined-setting-section > summary::before {
  content: "▸";
  display: inline-block;
  margin-right: 6px;
  transition: transform 0.15s ease;
}

.gaz-combined-setting-section[open] > summary::before {
  transform: rotate(90deg);
}`, "",{"version":3,"sources":["webpack://./your-extensions/widgets/GazCombinedV2/src/setting/setting.css"],"names":[],"mappings":"AAAA,gBAAgB;AAAhB;EACE,aAAA;EACA,sBAAA;AAEF;;AACA;EACE,kDAAA;EACA,cAAA;AAEF;;AACA;EACE,eAAA;EACA,gBAAA;EACA,YAAA;EACA,gBAAA;AAEF;;AACA;EACE,aAAA;AAEF;;AACA;EACE,YAAA;EACA,qBAAA;EACA,iBAAA;EACA,gCAAA;AAEF;;AACA;EACE,wBAAA;AAEF","sourcesContent":[".gaz-combined-setting {\n  display: flex;\n  flex-direction: column;\n}\n\n.gaz-combined-setting-section {\n  border-bottom: 1px solid rgba(128, 128, 128, 0.25);\n  padding: 4px 0;\n}\n\n.gaz-combined-setting-section > summary {\n  cursor: pointer;\n  font-weight: 600;\n  padding: 8px;\n  list-style: none;\n}\n\n.gaz-combined-setting-section > summary::-webkit-details-marker {\n  display: none;\n}\n\n.gaz-combined-setting-section > summary::before {\n  content: '\\25B8';\n  display: inline-block;\n  margin-right: 6px;\n  transition: transform 0.15s ease;\n}\n\n.gaz-combined-setting-section[open] > summary::before {\n  transform: rotate(90deg);\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./your-extensions/widgets/GazCombinedV2/src/setting/setting.css":
/*!***********************************************************************!*\
  !*** ./your-extensions/widgets/GazCombinedV2/src/setting/setting.css ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_3_use_1_node_modules_resolve_url_loader_index_js_ruleSet_1_rules_3_use_2_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_3_use_3_setting_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[3].use[1]!../../../../../node_modules/resolve-url-loader/index.js??ruleSet[1].rules[3].use[2]!../../../../../node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[3].use[3]!./setting.css */ "./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[3].use[1]!./node_modules/resolve-url-loader/index.js??ruleSet[1].rules[3].use[2]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[3].use[3]!./your-extensions/widgets/GazCombinedV2/src/setting/setting.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_3_use_1_node_modules_resolve_url_loader_index_js_ruleSet_1_rules_3_use_2_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_3_use_3_setting_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_3_use_1_node_modules_resolve_url_loader_index_js_ruleSet_1_rules_3_use_2_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_3_use_3_setting_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_3_use_1_node_modules_resolve_url_loader_index_js_ruleSet_1_rules_3_use_2_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_3_use_3_setting_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_ruleSet_1_rules_3_use_1_node_modules_resolve_url_loader_index_js_ruleSet_1_rules_3_use_2_node_modules_sass_loader_dist_cjs_js_ruleSet_1_rules_3_use_3_setting_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";


var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";


var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./your-extensions/widgets/GazCombinedV2/src/setting/components/GazDateSetting.tsx":
/*!*****************************************************************************************!*\
  !*** ./your-extensions/widgets/GazCombinedV2/src/setting/components/GazDateSetting.tsx ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Setting)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var jimu_ui_advanced_data_source_selector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jimu-ui/advanced/data-source-selector */ "jimu-ui/advanced/data-source-selector");
/* harmony import */ var jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jimu-ui/advanced/setting-components */ "jimu-ui/advanced/setting-components");
/* harmony import */ var jimu_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jimu-ui */ "jimu-ui");
/* harmony import */ var jimu_ui_basic_color_picker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jimu-ui/basic/color-picker */ "jimu-ui/basic/color-picker");
/* harmony import */ var _immutableHelper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../immutableHelper */ "./your-extensions/widgets/GazCombinedV2/src/setting/immutableHelper.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};







class Setting extends jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.PureComponent {
    constructor(props) {
        var _a, _b, _c, _d;
        super(props);
        this.supportedTypes = (0,_immutableHelper__WEBPACK_IMPORTED_MODULE_5__.Imm)([jimu_core__WEBPACK_IMPORTED_MODULE_0__.DataSourceTypes.FeatureLayer]);
        this.dsManager = jimu_core__WEBPACK_IMPORTED_MODULE_0__.DataSourceManager.getInstance();
        // Color presets for the color picker
        this.colorPresets = [
            { color: '#4CAF50', label: 'Green', value: '#4CAF50' },
            { color: '#2196F3', label: 'Blue', value: '#2196F3' },
            { color: '#F44336', label: 'Red', value: '#F44336' },
            { color: '#FFC107', label: 'Amber', value: '#FFC107' },
            { color: '#9C27B0', label: 'Purple', value: '#9C27B0' },
            { color: '#FF9800', label: 'Orange', value: '#FF9800' },
            { color: '#795548', label: 'Brown', value: '#795548' },
            { color: '#607D8B', label: 'Blue Grey', value: '#607D8B' }
        ];
        // Auto-detect map widget if not already set
        this.autoDetectMapWidget = () => {
            if (!this.props.useMapWidgetIds || this.props.useMapWidgetIds.length === 0) {
                const state = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.getAppStore)().getState();
                const mapWidgets = state.appConfig.widgets;
                const mapWidgetId = Object.keys(mapWidgets).find(wid => {
                    const widget = mapWidgets[wid];
                    return widget.manifest && widget.manifest.name === 'map';
                });
                if (mapWidgetId) {
                    this.props.onSettingChange({
                        id: this.props.id,
                        useMapWidgetIds: [mapWidgetId]
                    });
                }
            }
        };
        // Initialize data sources from config
        this.initializeDataSources = () => {
            if (this.props.useDataSources && this.props.useDataSources.length > 0) {
                this.createDataSources();
            }
        };
        // Clean up data sources when component unmounts
        this.cleanupDataSources = () => {
            if (this.props.useDataSources) {
                this.props.useDataSources.forEach(useDs => {
                    if (useDs && useDs.dataSourceId) {
                        this.dsManager.destroyDataSource(useDs.dataSourceId);
                    }
                });
            }
        };
        this.createDataSources = (customUseDataSources) => __awaiter(this, void 0, void 0, function* () {
            const useDataSourcesToUse = customUseDataSources || this.props.useDataSources;
            if (!useDataSourcesToUse || useDataSourcesToUse.length === 0) {
                this.setState({ dss: null });
                return;
            }
            const dataSources = [];
            // Ensure existingFilterFields is an Immutable object
            let existingFilterFields;
            // Check if props.config exists and has filterFields
            if (this.props.config && this.props.config.filterFields) {
                // Check if it's already an Immutable object
                if (typeof this.props.config.filterFields.get === 'function') {
                    existingFilterFields = this.props.config.filterFields;
                }
                else {
                    // Convert to Immutable if it's a regular object
                    existingFilterFields = (0,_immutableHelper__WEBPACK_IMPORTED_MODULE_5__.Imm)(this.props.config.filterFields);
                }
            }
            else {
                // Create a new empty Immutable object
                existingFilterFields = (0,_immutableHelper__WEBPACK_IMPORTED_MODULE_5__.Imm)({});
            }
            // Process each data source
            for (let useDs of useDataSourcesToUse) {
                try {
                    const ds = yield this.dsManager.createDataSourceByUseDataSource(useDs);
                    if (ds && ds.getSchema()) {
                        const fields = ds.getSchema().fields;
                        const fieldNames = Object.keys(fields);
                        // Safely check if this data source has filter fields
                        const dsId = ds.id;
                        const hasFilterFields = existingFilterFields.get
                            ? existingFilterFields.get(dsId)
                            : existingFilterFields[dsId];
                        if (!hasFilterFields) {
                            const defaultFilterFields = this.getDefaultFilterFields(fieldNames);
                            if (defaultFilterFields.length > 0) {
                                existingFilterFields = existingFilterFields.set(dsId, defaultFilterFields);
                                this.updateConfigFields('filterFields', existingFilterFields);
                            }
                        }
                        dataSources.push(ds);
                    }
                }
                catch (err) {
                    console.error('Error creating data source:', err);
                }
            }
            if (dataSources.length > 0) {
                this.setState({
                    dss: dataSources,
                    filterFields: existingFilterFields
                });
            }
        });
        // Get default filter fields based on available fields
        this.getDefaultFilterFields = (fieldNames) => {
            // Look for common filter fields in the data
            const defaultFields = fieldNames.filter(f => ['viloyat', 'tuman'].includes(f.toLowerCase()));
            if (defaultFields.length > 0) {
                return defaultFields;
            }
            // If no common filter fields found, look for string/text fields that might be categorical
            const stringFields = fieldNames.filter(field => {
                return field.toLowerCase().includes('name') ||
                    field.toLowerCase().includes('type') ||
                    field.toLowerCase().includes('category') ||
                    field.toLowerCase().includes('region') ||
                    field.toLowerCase().includes('district') ||
                    field.toLowerCase().includes('area');
            });
            if (stringFields.length > 0) {
                return stringFields.slice(0, 2);
            }
            // Return first 2 fields as a last resort
            return fieldNames.slice(0, 2);
        };
        // Update config with new field settings
        this.updateConfigFields = (configKey, fields) => {
            if (this.props.config) {
                const newConfig = this.props.config.set
                    ? this.props.config.set(configKey, fields)
                    : (0,_immutableHelper__WEBPACK_IMPORTED_MODULE_5__.Imm)(Object.assign(Object.assign({}, this.props.config), { [configKey]: fields }));
                this.props.onSettingChange({
                    id: this.props.id,
                    config: newConfig
                });
            }
        };
        // Handle data source selection change
        this.onDataSourceChange = (useDataSources) => {
            this.props.onSettingChange({
                id: this.props.id,
                useDataSources: useDataSources
            });
        };
        // Handle map widget selection change
        this.onMapWidgetSelected = (selectedIds) => __awaiter(this, void 0, void 0, function* () {
            this.props.onSettingChange({
                id: this.props.id,
                useMapWidgetIds: selectedIds
            });
            yield this.autoDetectDataSourcesFromMap(selectedIds);
        });
        // Auto-detect data sources from selected map
        this.autoDetectDataSourcesFromMap = (selectedMapIds) => __awaiter(this, void 0, void 0, function* () {
            if (selectedMapIds.length === 0)
                return;
            const state = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.getAppStore)().getState();
            const mapId = selectedMapIds[0];
            const widget = state.appConfig.widgets[mapId];
            // Look for feature layer data sources in the map
            if (widget && widget.useDataSources) {
                const mapDataSources = widget.useDataSources;
                // Filter for feature layer data sources
                const featureLayerDs = mapDataSources.filter(ds => ds.dataSourceId &&
                    state.appConfig.dataSources[ds.dataSourceId] &&
                    state.appConfig.dataSources[ds.dataSourceId].type === 'FEATURE_LAYER');
                if (featureLayerDs.length > 0) {
                    // Use the first feature layer data source
                    const featureLayerDataSource = featureLayerDs[0];
                    // Extract fields for this data source
                    const fieldsArray = this.extractFields(featureLayerDataSource);
                    // Create a plain object data source
                    const plainUseDs = {
                        dataSourceId: featureLayerDataSource.dataSourceId,
                        mainDataSourceId: featureLayerDataSource.mainDataSourceId || featureLayerDataSource.dataSourceId,
                        dataViewId: featureLayerDataSource.dataViewId || 'default',
                        rootDataSourceId: featureLayerDataSource.rootDataSourceId || featureLayerDataSource.dataSourceId,
                        fields: fieldsArray
                    };
                    this.props.onSettingChange({
                        id: this.props.id,
                        useDataSources: [plainUseDs]
                    });
                    // Create a new IMUseDataSource to pass to createDataSources
                    const imUseDs = (0,_immutableHelper__WEBPACK_IMPORTED_MODULE_5__.Imm)({
                        dataSourceId: plainUseDs.dataSourceId,
                        mainDataSourceId: plainUseDs.mainDataSourceId,
                        dataViewId: plainUseDs.dataViewId,
                        rootDataSourceId: plainUseDs.rootDataSourceId
                    });
                    yield this.createDataSources([imUseDs]);
                }
            }
        });
        // Extract fields from a data source
        this.extractFields = (dataSource) => {
            let fieldsArray = [];
            if (dataSource.fields) {
                // Handle different field formats
                if (Array.isArray(dataSource.fields)) {
                    fieldsArray = [...dataSource.fields];
                }
                else if (typeof dataSource.fields === 'object' && dataSource.fields.length >= 0) {
                    // Convert array-like object to array
                    fieldsArray = [];
                    for (let i = 0; i < dataSource.fields.length; i++) {
                        fieldsArray.push(dataSource.fields[i]);
                    }
                }
                else if (typeof dataSource.fields === 'object') {
                    fieldsArray = Object.keys(dataSource.fields);
                }
            }
            return fieldsArray;
        };
        // Handle filter field selection change
        this.onFilterFieldChange = (selectedFields, ds) => {
            if (!ds)
                return;
            console.log('Filter field selection changed:', selectedFields);
            // Get current fields or initialize new ones with the correct type
            let newFields = this.state.filterFields || (0,_immutableHelper__WEBPACK_IMPORTED_MODULE_5__.Imm)({});
            // Update fields for the data source
            newFields = newFields.set(ds.id, selectedFields.map(f => f.jimuName));
            // Update state and config
            this.setState({ filterFields: newFields });
            this.updateConfigFields('filterFields', newFields);
        };
        // Handle area field change
        this.onAreaFieldChange = (event) => {
            const areaField = event.target.value;
            this.setState({ areaField });
            if (this.props.config) {
                const newConfig = this.props.config.set
                    ? this.props.config.set('areaField', areaField)
                    : (0,_immutableHelper__WEBPACK_IMPORTED_MODULE_5__.Imm)(Object.assign(Object.assign({}, this.props.config), { areaField }));
                this.props.onSettingChange({
                    id: this.props.id,
                    config: newConfig
                });
            }
        };
        // Handle button color change
        this.onButtonColorChange = (color) => {
            console.log('Button color changed to:', color);
            this.setState({ buttonColor: color });
            if (this.props.config) {
                const newConfig = this.props.config.set
                    ? this.props.config.set('buttonColor', color)
                    : (0,_immutableHelper__WEBPACK_IMPORTED_MODULE_5__.Imm)(Object.assign(Object.assign({}, this.props.config), { buttonColor: color }));
                this.props.onSettingChange({
                    id: this.props.id,
                    config: newConfig
                });
                console.log('Updated config with new button color:', newConfig);
            }
        };
        // Handle container background color change
        this.onContainerBackgroundColorChange = (color) => {
            console.log('Container background color changed to:', color);
            this.setState({ containerBackgroundColor: color });
            if (this.props.config) {
                const newConfig = this.props.config.set
                    ? this.props.config.set('containerBackgroundColor', color)
                    : (0,_immutableHelper__WEBPACK_IMPORTED_MODULE_5__.Imm)(Object.assign(Object.assign({}, this.props.config), { containerBackgroundColor: color }));
                this.props.onSettingChange({
                    id: this.props.id,
                    config: newConfig
                });
                console.log('Updated config with new container background color:', newConfig);
            }
        };
        // Initialize state from config
        this.state = {
            dss: null,
            filterFields: ((_a = this.props.config) === null || _a === void 0 ? void 0 : _a.filterFields) || null,
            areaField: ((_b = this.props.config) === null || _b === void 0 ? void 0 : _b.areaField) || 'maydon',
            buttonColor: ((_c = this.props.config) === null || _c === void 0 ? void 0 : _c.buttonColor) || '#4CAF50',
            containerBackgroundColor: ((_d = this.props.config) === null || _d === void 0 ? void 0 : _d.containerBackgroundColor) || '#f5f5f5'
        };
        console.log('Settings initialized with config:', this.props.config);
    }
    componentDidMount() {
        const waitForAppConfig = () => {
            var _a;
            const state = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.getAppStore)().getState();
            const widgets = (_a = state === null || state === void 0 ? void 0 : state.appConfig) === null || _a === void 0 ? void 0 : _a.widgets;
            if (widgets && Object.keys(widgets).length > 0) {
                this.autoDetectMapWidget();
                this.initializeDataSources();
            }
            else {
                setTimeout(waitForAppConfig, 200); // Wait and retry
            }
        };
        waitForAppConfig();
    }
    componentDidUpdate(prevProps) {
        var _a, _b, _c, _d;
        if (this.props.useDataSources &&
            this.props.useDataSources !== prevProps.useDataSources) {
            this.initializeDataSources();
        }
        // Update local state if config changes
        if (prevProps.config !== this.props.config) {
            this.setState({
                filterFields: ((_a = this.props.config) === null || _a === void 0 ? void 0 : _a.filterFields) || this.state.filterFields,
                areaField: ((_b = this.props.config) === null || _b === void 0 ? void 0 : _b.areaField) || this.state.areaField,
                buttonColor: ((_c = this.props.config) === null || _c === void 0 ? void 0 : _c.buttonColor) || this.state.buttonColor,
                containerBackgroundColor: ((_d = this.props.config) === null || _d === void 0 ? void 0 : _d.containerBackgroundColor) || this.state.containerBackgroundColor
            });
        }
    }
    componentWillUnmount() {
        this.cleanupDataSources();
    }
    render() {
        const { areaField, buttonColor, containerBackgroundColor } = this.state;
        return (jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: "widget-setting-container p-2" },
            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: "setting-section mb-3" },
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_3__.Label, { className: "setting-label d-flex" }, "Select a Map Widget:"),
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_2__.MapWidgetSelector, { onSelect: this.onMapWidgetSelected, useMapWidgetIds: this.props.useMapWidgetIds })),
            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: "setting-section mb-3" },
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_3__.Label, { className: "setting-label d-flex" }, "Select a Data Source:"),
                !this.props.useDataSources || this.props.useDataSources.length === 0 ? (jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_3__.Alert, { type: "info", className: "w-100 mb-2" }, "Please select a map widget first to auto-detect data sources.")) : null,
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui_advanced_data_source_selector__WEBPACK_IMPORTED_MODULE_1__.DataSourceSelector, { mustUseDataSource: true, types: this.supportedTypes, useDataSources: this.props.useDataSources, onChange: this.onDataSourceChange, widgetId: this.props.id, hideDataView: true })),
            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: "setting-section mb-3" },
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_3__.Label, { className: "setting-label d-flex" }, "Appearance Settings:"),
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: "color-setting-item d-flex align-items-center justify-content-between mb-3" },
                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_3__.Label, { className: "mb-0 mr-2" }, "Button Color:"),
                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: "d-flex align-items-center" },
                        jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui_basic_color_picker__WEBPACK_IMPORTED_MODULE_4__.ColorPicker, { height: 26, width: 30, color: buttonColor || '#4CAF50', presetColors: this.colorPresets, onChange: this.onButtonColorChange, placement: "bottom" }),
                        jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: "color-preview ml-2", style: {
                                width: '24px',
                                height: '24px',
                                backgroundColor: buttonColor || '#4CAF50',
                                border: '1px solid #ddd',
                                borderRadius: '2px'
                            } }))),
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: "color-setting-item d-flex align-items-center justify-content-between" },
                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_3__.Label, { className: "mb-0 mr-2" }, "Container Background:"),
                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: "d-flex align-items-center" },
                        jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui_basic_color_picker__WEBPACK_IMPORTED_MODULE_4__.ColorPicker, { height: 26, width: 30, color: containerBackgroundColor || '#f5f5f5', presetColors: this.colorPresets, onChange: this.onContainerBackgroundColorChange, placement: "bottom" }),
                        jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: "color-preview ml-2", style: {
                                width: '24px',
                                height: '24px',
                                backgroundColor: containerBackgroundColor || '#f5f5f5',
                                border: '1px solid #ddd',
                                borderRadius: '2px'
                            } }))))));
    }
}


/***/ }),

/***/ "./your-extensions/widgets/GazCombinedV2/src/setting/components/GazExcelSetting.tsx":
/*!******************************************************************************************!*\
  !*** ./your-extensions/widgets/GazCombinedV2/src/setting/components/GazExcelSetting.tsx ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Setting)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var jimu_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jimu-ui */ "jimu-ui");
/* harmony import */ var jimu_ui_basic_color_picker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jimu-ui/basic/color-picker */ "jimu-ui/basic/color-picker");
/* harmony import */ var jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jimu-ui/advanced/setting-components */ "jimu-ui/advanced/setting-components");
/* harmony import */ var _immutableHelper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../immutableHelper */ "./your-extensions/widgets/GazCombinedV2/src/setting/immutableHelper.ts");





class Setting extends jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.PureComponent {
    constructor(props) {
        super(props);
        this.fileInput = jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createRef();
        // Color presets for the button color picker
        this.colorPresets = [
            { color: '#4CAF50', label: 'Green', value: '#4CAF50' },
            { color: '#2196F3', label: 'Blue', value: '#2196F3' },
            { color: '#F44336', label: 'Red', value: '#F44336' },
            { color: '#FF9800', label: 'Orange', value: '#FF9800' },
            { color: '#9C27B0', label: 'Purple', value: '#9C27B0' },
            { color: '#795548', label: 'Brown', value: '#795548' },
            { color: '#607D8B', label: 'Blue Grey', value: '#607D8B' },
            { color: '#00BCD4', label: 'Cyan', value: '#00BCD4' }
        ];
        // Handle Excel template file upload
        this.handleExcelTemplateUpload = (e) => {
            var _a;
            const file = (_a = e.target.files) === null || _a === void 0 ? void 0 : _a[0];
            if (!file)
                return;
            // Validate file type
            if (!file.name.endsWith('.xlsx') && !file.name.endsWith('.xls')) {
                this.setState({
                    uploadError: 'Please select a valid Excel file (.xlsx or .xls)',
                    uploadSuccess: false
                });
                return;
            }
            this.setState({
                uploadLoading: true,
                uploadError: null
            });
            // Read file as array buffer
            const reader = new FileReader();
            reader.onload = (event) => {
                var _a, _b;
                try {
                    const arrayBuffer = (_a = event.target) === null || _a === void 0 ? void 0 : _a.result;
                    // Convert to base64 for storage
                    const base64 = btoa(new Uint8Array(arrayBuffer)
                        .reduce((data, byte) => data + String.fromCharCode(byte), ''));
                    // Update config
                    const newConfig = ((_b = this.props.config) === null || _b === void 0 ? void 0 : _b.set)
                        ? this.props.config.set('excelTemplate', {
                            data: base64,
                            filename: file.name,
                            timestamp: Date.now()
                        })
                        : (0,_immutableHelper__WEBPACK_IMPORTED_MODULE_4__.Imm)(Object.assign(Object.assign({}, this.props.config), { excelTemplate: {
                                data: base64,
                                filename: file.name,
                                timestamp: Date.now()
                            } }));
                    this.props.onSettingChange({
                        id: this.props.id,
                        config: newConfig
                    });
                    this.setState({
                        uploadLoading: false,
                        uploadSuccess: true
                    });
                    // Clear success message after a few seconds
                    setTimeout(() => {
                        this.setState({ uploadSuccess: false });
                    }, 3000);
                    // Clear the file input so the same file can be uploaded again if needed
                    if (this.fileInput.current) {
                        this.fileInput.current.value = '';
                    }
                }
                catch (error) {
                    console.error('Error processing Excel file:', error);
                    this.setState({
                        uploadLoading: false,
                        uploadError: `Failed to process the Excel file: ${error instanceof Error ? error.message : 'Unknown error'}`,
                        uploadSuccess: false
                    });
                }
            };
            reader.onerror = () => {
                this.setState({
                    uploadLoading: false,
                    uploadError: 'Failed to read the file',
                    uploadSuccess: false
                });
            };
            reader.readAsArrayBuffer(file);
        };
        // Delete Excel template
        this.deleteExcelTemplate = () => {
            if (this.props.config) {
                const newConfig = this.props.config.set
                    ? this.props.config.set('excelTemplate', null)
                    : (0,_immutableHelper__WEBPACK_IMPORTED_MODULE_4__.Imm)(Object.assign(Object.assign({}, this.props.config), { excelTemplate: null }));
                this.props.onSettingChange({
                    id: this.props.id,
                    config: newConfig
                });
            }
        };
        // Handle button color change
        this.handleButtonColorChange = (color) => {
            if (this.props.config) {
                const newConfig = this.props.config.set
                    ? this.props.config.set('buttonColor', color)
                    : (0,_immutableHelper__WEBPACK_IMPORTED_MODULE_4__.Imm)(Object.assign(Object.assign({}, this.props.config), { buttonColor: color }));
                this.props.onSettingChange({
                    id: this.props.id,
                    config: newConfig
                });
            }
        };
        this.state = {
            uploadLoading: false,
            uploadError: null,
            uploadSuccess: false
        };
    }
    render() {
        var _a, _b;
        const { uploadLoading, uploadError, uploadSuccess } = this.state;
        // Get template info from config
        const excelTemplate = (_a = this.props.config) === null || _a === void 0 ? void 0 : _a.excelTemplate;
        const buttonColor = ((_b = this.props.config) === null || _b === void 0 ? void 0 : _b.buttonColor) || '#4CAF50';
        return (jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: "widget-setting-container p-2" },
            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_3__.SettingSection, { title: "Excel Template" },
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_3__.SettingRow, null,
                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: "w-100" },
                        jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("p", { className: "setting-note text-muted" }, "Upload an Excel template file to export. The template will be exported as is."),
                        jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: "d-flex mt-2 align-items-center" },
                            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("input", { type: "file", accept: ".xlsx,.xls", className: "form-control flex-grow-1", onChange: this.handleExcelTemplateUpload, disabled: uploadLoading, ref: this.fileInput })),
                        excelTemplate && (jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: "mt-2 d-flex justify-content-between align-items-center p-2 border rounded" },
                            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: "d-flex align-items-center" },
                                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Icon, { icon: "fileTypeExcel", size: 16, color: "#217346", className: "mr-2" }),
                                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("span", null, excelTemplate.filename),
                                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("span", { className: "ml-2 text-muted" },
                                    "(uploaded on ",
                                    new Date(excelTemplate.timestamp).toLocaleDateString(),
                                    ")")),
                            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", null,
                                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Button, { size: "sm", type: "danger", icon: true, onClick: this.deleteExcelTemplate, className: "mr-2", title: "Delete template" },
                                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Icon, { icon: "trash", size: 12 }))))),
                        uploadLoading && (jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: "mt-2 text-center" },
                            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: "spinner-border spinner-border-sm text-primary", role: "status" },
                                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("span", { className: "sr-only" }, "Loading...")),
                            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("span", { className: "ml-2" }, "Uploading template..."))),
                        uploadError && (jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Alert, { type: "error", className: "mt-2", withIcon: true, closable: true, onClose: () => this.setState({ uploadError: null }) }, uploadError)),
                        uploadSuccess && (jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Alert, { type: "success", className: "mt-2", withIcon: true }, "Template uploaded successfully!"))))),
            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_3__.SettingSection, { title: "Appearance" },
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_3__.SettingRow, { label: "Button Color:" },
                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: "d-flex align-items-center" },
                        jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui_basic_color_picker__WEBPACK_IMPORTED_MODULE_2__.ColorPicker, { height: 26, width: 30, color: buttonColor, presetColors: this.colorPresets, onChange: this.handleButtonColorChange, placement: "bottom" }),
                        jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: "ml-2", style: {
                                width: '24px',
                                height: '24px',
                                backgroundColor: buttonColor,
                                border: '1px solid #ddd',
                                borderRadius: '2px'
                            } }))))));
    }
}


/***/ }),

/***/ "./your-extensions/widgets/GazCombinedV2/src/setting/components/GazFiltersSetting.tsx":
/*!********************************************************************************************!*\
  !*** ./your-extensions/widgets/GazCombinedV2/src/setting/components/GazFiltersSetting.tsx ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Setting)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var jimu_ui_advanced_data_source_selector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jimu-ui/advanced/data-source-selector */ "jimu-ui/advanced/data-source-selector");
/* harmony import */ var jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jimu-ui/advanced/setting-components */ "jimu-ui/advanced/setting-components");
/* harmony import */ var jimu_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jimu-ui */ "jimu-ui");
/* harmony import */ var jimu_ui_basic_color_picker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jimu-ui/basic/color-picker */ "jimu-ui/basic/color-picker");
/* harmony import */ var _immutableHelper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../immutableHelper */ "./your-extensions/widgets/GazCombinedV2/src/setting/immutableHelper.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};







class Setting extends jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.PureComponent {
    constructor(props) {
        var _a, _b;
        super(props);
        this.supportedTypes = (0,_immutableHelper__WEBPACK_IMPORTED_MODULE_5__.Imm)([jimu_core__WEBPACK_IMPORTED_MODULE_0__.DataSourceTypes.FeatureLayer]);
        this.dsManager = jimu_core__WEBPACK_IMPORTED_MODULE_0__.DataSourceManager.getInstance();
        // Color presets for the color pickers
        this.colorPresets = [
            { color: '#4CAF50', label: 'Green', value: '#4CAF50' },
            { color: '#2196F3', label: 'Blue', value: '#2196F3' },
            { color: '#F44336', label: 'Red', value: '#F44336' },
            { color: '#FFC107', label: 'Amber', value: '#FFC107' },
            { color: '#9C27B0', label: 'Purple', value: '#9C27B0' },
            { color: '#FF9800', label: 'Orange', value: '#FF9800' },
            { color: '#795548', label: 'Brown', value: '#795548' },
            { color: '#607D8B', label: 'Blue Grey', value: '#607D8B' }
        ];
        // Background color presets
        this.bgColorPresets = [
            { color: '#FFFFFF', label: 'White', value: '#FFFFFF' },
            { color: '#F5F5F5', label: 'Light Grey', value: '#F5F5F5' },
            { color: '#EEEEEE', label: 'Grey', value: '#EEEEEE' },
            { color: '#2B2B2B', label: 'Dark', value: '#2B2B2B' },
            { color: '#E3F2FD', label: 'Light Blue', value: '#E3F2FD' },
            { color: '#E8F5E9', label: 'Light Green', value: '#E8F5E9' },
            { color: '#FFF8E1', label: 'Light Amber', value: '#FFF8E1' },
            { color: 'rgba(0,0,0,0)', label: 'Transparent', value: 'rgba(0,0,0,0)' }
        ];
        // Auto-detect map widget if not already set
        this.autoDetectMapWidget = () => {
            if (!this.props.useMapWidgetIds || this.props.useMapWidgetIds.length === 0) {
                const state = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.getAppStore)().getState();
                const mapWidgets = state.appConfig.widgets;
                const mapWidgetId = Object.keys(mapWidgets).find(wid => {
                    const widget = mapWidgets[wid];
                    return widget.manifest && widget.manifest.name === 'map';
                });
                if (mapWidgetId) {
                    this.props.onSettingChange({
                        id: this.props.id,
                        useMapWidgetIds: [mapWidgetId]
                    });
                }
            }
        };
        // Initialize data sources from config
        this.initializeDataSources = () => {
            if (this.props.useDataSources && this.props.useDataSources.length > 0) {
                this.createDataSources();
            }
        };
        // Clean up data sources when component unmounts
        this.cleanupDataSources = () => {
            if (this.props.useDataSources) {
                this.props.useDataSources.forEach(useDs => {
                    if (useDs && useDs.dataSourceId) {
                        this.dsManager.destroyDataSource(useDs.dataSourceId);
                    }
                });
            }
        };
        this.createDataSources = (customUseDataSources) => __awaiter(this, void 0, void 0, function* () {
            const useDataSourcesToUse = customUseDataSources || this.props.useDataSources;
            if (!useDataSourcesToUse || useDataSourcesToUse.length === 0) {
                this.setState({ dss: null });
                return;
            }
            const dataSources = [];
            // Ensure existingFilterFields is an Immutable object
            let existingFilterFields;
            // Check if props.config exists and has filterFields
            if (this.props.config && this.props.config.filterFields) {
                // Check if it's already an Immutable object
                if (typeof this.props.config.filterFields.get === 'function') {
                    existingFilterFields = this.props.config.filterFields;
                }
                else {
                    // Convert to Immutable if it's a regular object
                    existingFilterFields = (0,_immutableHelper__WEBPACK_IMPORTED_MODULE_5__.Imm)(this.props.config.filterFields);
                }
            }
            else {
                // Create a new empty Immutable object
                existingFilterFields = (0,_immutableHelper__WEBPACK_IMPORTED_MODULE_5__.Imm)({});
            }
            // Process each data source
            for (let useDs of useDataSourcesToUse) {
                try {
                    const ds = yield this.dsManager.createDataSourceByUseDataSource(useDs);
                    if (ds && ds.getSchema()) {
                        const fields = ds.getSchema().fields;
                        const fieldNames = Object.keys(fields);
                        // Safely check if this data source has filter fields
                        const dsId = ds.id;
                        const hasFilterFields = existingFilterFields.get
                            ? existingFilterFields.get(dsId)
                            : existingFilterFields[dsId];
                        if (!hasFilterFields) {
                            const defaultFilterFields = this.getDefaultFilterFields(fieldNames);
                            if (defaultFilterFields.length > 0) {
                                existingFilterFields = existingFilterFields.set(dsId, defaultFilterFields);
                                this.updateConfigFields('filterFields', existingFilterFields);
                            }
                        }
                        dataSources.push(ds);
                    }
                }
                catch (err) {
                    console.error('Error creating data source:', err);
                }
            }
            if (dataSources.length > 0) {
                this.setState({
                    dss: dataSources,
                    filterFields: existingFilterFields
                });
            }
        });
        // Get default filter fields based on available fields
        this.getDefaultFilterFields = (fieldNames) => {
            // Look for common filter fields in the data
            const defaultFields = fieldNames.filter(f => ['viloyat', 'tuman'].includes(f.toLowerCase()));
            if (defaultFields.length > 0) {
                return defaultFields;
            }
            // If no common filter fields found, look for string/text fields that might be categorical
            const stringFields = fieldNames.filter(field => {
                return field.toLowerCase().includes('name') ||
                    field.toLowerCase().includes('type') ||
                    field.toLowerCase().includes('category') ||
                    field.toLowerCase().includes('region') ||
                    field.toLowerCase().includes('district') ||
                    field.toLowerCase().includes('area');
            });
            if (stringFields.length > 0) {
                return stringFields.slice(0, 2);
            }
            // Return first 2 fields as a last resort
            return fieldNames.slice(0, 2);
        };
        // Update config with new field settings
        this.updateConfigFields = (configKey, fields) => {
            if (this.props.config) {
                const newConfig = this.props.config.set
                    ? this.props.config.set(configKey, fields)
                    : (0,_immutableHelper__WEBPACK_IMPORTED_MODULE_5__.Imm)(Object.assign(Object.assign({}, this.props.config), { [configKey]: fields }));
                this.props.onSettingChange({
                    id: this.props.id,
                    config: newConfig
                });
            }
        };
        // Handle data source selection change
        this.onDataSourceChange = (useDataSources) => {
            this.props.onSettingChange({
                id: this.props.id,
                useDataSources: useDataSources
            });
        };
        // Handle map widget selection change
        this.onMapWidgetSelected = (selectedIds) => __awaiter(this, void 0, void 0, function* () {
            this.props.onSettingChange({
                id: this.props.id,
                useMapWidgetIds: selectedIds
            });
            yield this.autoDetectDataSourcesFromMap(selectedIds);
        });
        // Auto-detect data sources from selected map
        this.autoDetectDataSourcesFromMap = (selectedMapIds) => __awaiter(this, void 0, void 0, function* () {
            if (selectedMapIds.length === 0)
                return;
            const state = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.getAppStore)().getState();
            const mapId = selectedMapIds[0];
            const widget = state.appConfig.widgets[mapId];
            // Look for feature layer data sources in the map
            if (widget && widget.useDataSources) {
                const mapDataSources = widget.useDataSources;
                // Filter for feature layer data sources
                const featureLayerDs = mapDataSources.filter(ds => ds.dataSourceId &&
                    state.appConfig.dataSources[ds.dataSourceId] &&
                    state.appConfig.dataSources[ds.dataSourceId].type === 'FEATURE_LAYER');
                if (featureLayerDs.length > 0) {
                    // Use the first feature layer data source
                    const featureLayerDataSource = featureLayerDs[0];
                    // Extract fields for this data source
                    const fieldsArray = this.extractFields(featureLayerDataSource);
                    // Create a plain object data source
                    const plainUseDs = {
                        dataSourceId: featureLayerDataSource.dataSourceId,
                        mainDataSourceId: featureLayerDataSource.mainDataSourceId || featureLayerDataSource.dataSourceId,
                        dataViewId: featureLayerDataSource.dataViewId || 'default',
                        rootDataSourceId: featureLayerDataSource.rootDataSourceId || featureLayerDataSource.dataSourceId,
                        fields: fieldsArray
                    };
                    this.props.onSettingChange({
                        id: this.props.id,
                        useDataSources: [plainUseDs]
                    });
                    // Create a new IMUseDataSource to pass to createDataSources
                    const imUseDs = (0,_immutableHelper__WEBPACK_IMPORTED_MODULE_5__.Imm)({
                        dataSourceId: plainUseDs.dataSourceId,
                        mainDataSourceId: plainUseDs.mainDataSourceId,
                        dataViewId: plainUseDs.dataViewId,
                        rootDataSourceId: plainUseDs.rootDataSourceId
                    });
                    yield this.createDataSources([imUseDs]);
                }
            }
        });
        // Extract fields from a data source
        this.extractFields = (dataSource) => {
            let fieldsArray = [];
            if (dataSource.fields) {
                // Handle different field formats
                if (Array.isArray(dataSource.fields)) {
                    fieldsArray = [...dataSource.fields];
                }
                else if (typeof dataSource.fields === 'object' && dataSource.fields.length >= 0) {
                    // Convert array-like object to array
                    fieldsArray = [];
                    for (let i = 0; i < dataSource.fields.length; i++) {
                        fieldsArray.push(dataSource.fields[i]);
                    }
                }
                else if (typeof dataSource.fields === 'object') {
                    fieldsArray = Object.keys(dataSource.fields);
                }
            }
            return fieldsArray;
        };
        // Handle filter field selection change
        this.onFilterFieldChange = (selectedFields, ds) => {
            if (!ds)
                return;
            console.log('Filter field selection changed:', selectedFields);
            // Get current fields or initialize new ones with the correct type
            let newFields = this.state.filterFields || (0,_immutableHelper__WEBPACK_IMPORTED_MODULE_5__.Imm)({});
            // Update fields for the data source
            newFields = newFields.set(ds.id, selectedFields.map(f => f.jimuName));
            // Update state and config
            this.setState({ filterFields: newFields });
            this.updateConfigFields('filterFields', newFields);
        };
        // Handle area field change
        this.onAreaFieldChange = (event) => {
            const areaField = event.target.value;
            this.setState({ areaField });
            if (this.props.config) {
                const newConfig = this.props.config.set
                    ? this.props.config.set('areaField', areaField)
                    : (0,_immutableHelper__WEBPACK_IMPORTED_MODULE_5__.Imm)(Object.assign(Object.assign({}, this.props.config), { areaField }));
                this.props.onSettingChange({
                    id: this.props.id,
                    config: newConfig
                });
            }
        };
        // Toggle advanced options display
        this.toggleAdvancedOptions = () => {
            this.setState(prevState => ({
                showAdvancedOptions: !prevState.showAdvancedOptions
            }));
        };
        // Handle chart color change
        this.onChartColorChange = (color) => {
            if (this.props.config) {
                const newConfig = this.props.config.set
                    ? this.props.config.set('chartColor', color)
                    : (0,_immutableHelper__WEBPACK_IMPORTED_MODULE_5__.Imm)(Object.assign(Object.assign({}, this.props.config), { chartColor: color }));
                this.props.onSettingChange({
                    id: this.props.id,
                    config: newConfig
                });
            }
        };
        // Handle background color change
        this.onBackgroundColorChange = (color) => {
            if (this.props.config) {
                const newConfig = this.props.config.set
                    ? this.props.config.set('backgroundColor', color)
                    : (0,_immutableHelper__WEBPACK_IMPORTED_MODULE_5__.Imm)(Object.assign(Object.assign({}, this.props.config), { backgroundColor: color }));
                this.props.onSettingChange({
                    id: this.props.id,
                    config: newConfig
                });
            }
        };
        // Initialize state from config
        this.state = {
            dss: null,
            filterFields: ((_a = this.props.config) === null || _a === void 0 ? void 0 : _a.filterFields) || null,
            areaField: ((_b = this.props.config) === null || _b === void 0 ? void 0 : _b.areaField) || 'maydon',
            showAdvancedOptions: false
        };
    }
    componentDidMount() {
        const waitForAppConfig = () => {
            var _a;
            const state = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.getAppStore)().getState();
            const widgets = (_a = state === null || state === void 0 ? void 0 : state.appConfig) === null || _a === void 0 ? void 0 : _a.widgets;
            if (widgets && Object.keys(widgets).length > 0) {
                this.autoDetectMapWidget();
                this.initializeDataSources();
            }
            else {
                setTimeout(waitForAppConfig, 200); // Wait and retry
            }
        };
        waitForAppConfig();
    }
    componentDidUpdate(prevProps) {
        if (this.props.useDataSources &&
            this.props.useDataSources !== prevProps.useDataSources) {
            this.initializeDataSources();
        }
    }
    componentWillUnmount() {
        this.cleanupDataSources();
    }
    render() {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
        const { showAdvancedOptions, areaField, dss } = this.state;
        const chartColor = ((_a = this.props.config) === null || _a === void 0 ? void 0 : _a.chartColor) || '#4CAF50';
        const backgroundColor = ((_b = this.props.config) === null || _b === void 0 ? void 0 : _b.backgroundColor) || '#FFFFFF';
        // Find available numeric fields for the area field selector
        let numericFields = [];
        if (dss && dss.length > 0) {
            const ds = dss[0];
            const schema = ds.getSchema();
            if (schema && schema.fields) {
                numericFields = Object.keys(schema.fields)
                    .filter(fieldName => {
                    const field = schema.fields[fieldName];
                    // Fixed: Only use JimuFieldType.Number as it's the only numeric type available
                    return field.type === jimu_core__WEBPACK_IMPORTED_MODULE_0__.JimuFieldType.Number;
                });
            }
        }
        return (jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: "widget-setting-container p-2" },
            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: "setting-section mb-3" },
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_3__.Label, { className: "setting-label d-flex" }, "Select a Map Widget:"),
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_2__.MapWidgetSelector, { onSelect: this.onMapWidgetSelected, useMapWidgetIds: this.props.useMapWidgetIds })),
            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: "setting-section mb-3" },
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_3__.Label, { className: "setting-label d-flex" }, "Select a Data Source:"),
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("p", { className: "setting-note text-muted" }, "Choose a feature layer containing viloyat, tuman, and area fields."),
                !this.props.useDataSources || this.props.useDataSources.length === 0 ? (jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_3__.Alert, { type: "info", className: "w-100 mb-2" }, "Please select a map widget first to auto-detect data sources.")) : null,
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui_advanced_data_source_selector__WEBPACK_IMPORTED_MODULE_1__.DataSourceSelector, { mustUseDataSource: true, 
                    // Limit to Feature Layers
                    types: this.supportedTypes, 
                    // ✅ MULTI-SELECT
                    isMultiple: true, useDataSources: this.props.useDataSources, onChange: this.onDataSourceChange, widgetId: this.props.id, hideDataView: true })),
            this.props.useDataSources && this.props.useDataSources.length > 0 && (jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: "setting-section mb-3" },
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_3__.Label, { className: "setting-label d-flex" }, "Select Region Fields:"),
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("p", { className: "setting-note text-muted" }, "These fields will be used for filtering regions (viloyat and tuman)."),
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui_advanced_data_source_selector__WEBPACK_IMPORTED_MODULE_1__.FieldSelector, { useDataSources: this.props.useDataSources, onChange: this.onFilterFieldChange, selectedFields: this.state.filterFields, isMultiple: true, isSearchInputHidden: false, isDataSourceDropDownHidden: false }),
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: "setting-hint d-flex align-items-center mt-2" },
                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_3__.Checkbox, { disabled: true, checked: true, className: "mr-2" }),
                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("small", null, "Default fields include: viloyat, tuman")))),
            this.props.useDataSources && this.props.useDataSources.length > 0 && (jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: "setting-section mb-3" },
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_3__.Label, { className: "setting-label d-flex" }, "Select Area Field:"),
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("p", { className: "setting-note text-muted" }, "This numeric field will be used for the chart values."),
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("select", { className: "form-control", value: areaField, onChange: this.onAreaFieldChange },
                    numericFields.map(field => (jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("option", { key: field, value: field }, field))),
                    numericFields.length === 0 && (jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("option", { value: "maydon" }, "maydon (default)"))))),
            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: "setting-section mb-3" },
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_3__.Label, { className: "setting-label d-flex" }, "Appearance Settings:"),
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: "color-setting-item d-flex align-items-center justify-content-between mb-3" },
                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_3__.Label, { className: "mb-0 mr-2" }, "Chart Color:"),
                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: "d-flex align-items-center" },
                        jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui_basic_color_picker__WEBPACK_IMPORTED_MODULE_4__.ColorPicker, { height: 26, width: 30, color: chartColor, presetColors: this.colorPresets, onChange: this.onChartColorChange, placement: "bottom" }),
                        jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: "color-preview ml-2", style: {
                                width: '24px',
                                height: '24px',
                                backgroundColor: chartColor,
                                border: '1px solid #ddd',
                                borderRadius: '2px'
                            } }))),
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: "color-setting-item d-flex align-items-center justify-content-between" },
                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_3__.Label, { className: "mb-0 mr-2" }, "Background Color:"),
                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: "d-flex align-items-center" },
                        jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui_basic_color_picker__WEBPACK_IMPORTED_MODULE_4__.ColorPicker, { height: 26, width: 30, color: backgroundColor, presetColors: this.bgColorPresets, onChange: this.onBackgroundColorChange, placement: "bottom" }),
                        jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: "color-preview ml-2", style: {
                                width: '24px',
                                height: '24px',
                                backgroundColor: backgroundColor,
                                border: '1px solid #ddd',
                                borderRadius: '2px'
                            } })))),
            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: "setting-section border-top pt-3" },
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: "d-flex justify-content-between align-items-center mb-2", onClick: this.toggleAdvancedOptions, style: { cursor: 'pointer' } },
                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_3__.Label, { className: "setting-label mb-0" }, "Advanced Options"),
                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_3__.Switch, { checked: showAdvancedOptions, onChange: this.toggleAdvancedOptions })),
                showAdvancedOptions && (jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: "advanced-options-container pl-2 border-left" },
                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: "mb-3" },
                        jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: "d-flex align-items-center mb-2" },
                            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_3__.Checkbox, { checked: ((_d = (_c = this.props.config) === null || _c === void 0 ? void 0 : _c.settings) === null || _d === void 0 ? void 0 : _d.enableAutoZoom) !== false, onChange: (evt) => {
                                    var _a;
                                    const settings = ((_a = this.props.config) === null || _a === void 0 ? void 0 : _a.settings) || {};
                                    this.props.onSettingChange({
                                        id: this.props.id,
                                        config: this.props.config.set('settings', Object.assign(Object.assign({}, settings), { enableAutoZoom: evt.target.checked }))
                                    });
                                }, className: "mr-2" }),
                            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_3__.Label, { className: "mb-0" }, "Auto-zoom to selected region")),
                        jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: "d-flex align-items-center mb-3" },
                            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_3__.Checkbox, { checked: ((_f = (_e = this.props.config) === null || _e === void 0 ? void 0 : _e.settings) === null || _f === void 0 ? void 0 : _f.enableDrilldown) !== false, onChange: (evt) => {
                                    var _a;
                                    const settings = ((_a = this.props.config) === null || _a === void 0 ? void 0 : _a.settings) || {};
                                    this.props.onSettingChange({
                                        id: this.props.id,
                                        config: this.props.config.set('settings', Object.assign(Object.assign({}, settings), { enableDrilldown: evt.target.checked }))
                                    });
                                }, className: "mr-2" }),
                            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_3__.Label, { className: "mb-0" }, "Enable viloyat-to-tuman drill-down")),
                        jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: "advanced-chart-options mb-3" },
                            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_3__.Label, { className: "mb-2" }, "Chart Display Options:"),
                            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: "d-flex align-items-center mb-2" },
                                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_3__.Checkbox, { checked: ((_h = (_g = this.props.config) === null || _g === void 0 ? void 0 : _g.settings) === null || _h === void 0 ? void 0 : _h.showPercentages) !== false, onChange: (evt) => {
                                        var _a;
                                        const settings = ((_a = this.props.config) === null || _a === void 0 ? void 0 : _a.settings) || {};
                                        this.props.onSettingChange({
                                            id: this.props.id,
                                            config: this.props.config.set('settings', Object.assign(Object.assign({}, settings), { showPercentages: evt.target.checked }))
                                        });
                                    }, className: "mr-2" }),
                                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_3__.Label, { className: "mb-0" }, "Show percentages in tooltip")),
                            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: "d-flex align-items-center" },
                                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_3__.Checkbox, { checked: ((_k = (_j = this.props.config) === null || _j === void 0 ? void 0 : _j.settings) === null || _k === void 0 ? void 0 : _k.showValueLabels) !== false, onChange: (evt) => {
                                        var _a;
                                        const settings = ((_a = this.props.config) === null || _a === void 0 ? void 0 : _a.settings) || {};
                                        this.props.onSettingChange({
                                            id: this.props.id,
                                            config: this.props.config.set('settings', Object.assign(Object.assign({}, settings), { showValueLabels: evt.target.checked }))
                                        });
                                    }, className: "mr-2" }),
                                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_3__.Label, { className: "mb-0" }, "Show value labels on bars")))))))));
    }
}


/***/ }),

/***/ "./your-extensions/widgets/GazCombinedV2/src/setting/components/GazHodimTableSetting.tsx":
/*!***********************************************************************************************!*\
  !*** ./your-extensions/widgets/GazCombinedV2/src/setting/components/GazHodimTableSetting.tsx ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Setting)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var jimu_ui_advanced_data_source_selector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jimu-ui/advanced/data-source-selector */ "jimu-ui/advanced/data-source-selector");
/* harmony import */ var jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jimu-ui/advanced/setting-components */ "jimu-ui/advanced/setting-components");
/* harmony import */ var jimu_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jimu-ui */ "jimu-ui");
/* harmony import */ var jimu_ui_basic_color_picker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jimu-ui/basic/color-picker */ "jimu-ui/basic/color-picker");
/* harmony import */ var _immutableHelper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../immutableHelper */ "./your-extensions/widgets/GazCombinedV2/src/setting/immutableHelper.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};







class Setting extends jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.PureComponent {
    constructor(props) {
        super(props);
        this.supportedTypes = (0,_immutableHelper__WEBPACK_IMPORTED_MODULE_5__.Imm)([jimu_core__WEBPACK_IMPORTED_MODULE_0__.DataSourceTypes.FeatureLayer]);
        this.dsManager = jimu_core__WEBPACK_IMPORTED_MODULE_0__.DataSourceManager.getInstance();
        // Color presets for the color pickers
        this.colorPresets = [
            { color: '#007BFF', label: 'Blue', value: '#007BFF' },
            { color: '#28A745', label: 'Green', value: '#28A745' },
            { color: '#DC3545', label: 'Red', value: '#DC3545' },
            { color: '#FFC107', label: 'Amber', value: '#FFC107' },
            { color: '#6F42C1', label: 'Purple', value: '#6F42C1' },
            { color: '#FD7E14', label: 'Orange', value: '#FD7E14' },
            { color: '#20C997', label: 'Teal', value: '#20C997' },
            { color: '#17A2B8', label: 'Cyan', value: '#17A2B8' }
        ];
        // Background color presets
        this.bgColorPresets = [
            { color: '#FFFFFF', label: 'White', value: '#FFFFFF' },
            { color: '#F5F5F5', label: 'Light Grey', value: '#F5F5F5' },
            { color: '#EEEEEE', label: 'Grey', value: '#EEEEEE' },
            { color: '#2B2B2B', label: 'Dark', value: '#2B2B2B' },
            { color: '#E3F2FD', label: 'Light Blue', value: '#E3F2FD' },
            { color: '#E8F5E9', label: 'Light Green', value: '#E8F5E9' },
            { color: '#FFF8E1', label: 'Light Amber', value: '#FFF8E1' },
            { color: 'rgba(0,0,0,0)', label: 'Transparent', value: 'rgba(0,0,0,0)' }
        ];
        // Auto-detect map widget if not already set
        this.autoDetectMapWidget = () => {
            if (!this.props.useMapWidgetIds || this.props.useMapWidgetIds.length === 0) {
                const state = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.getAppStore)().getState();
                const mapWidgets = state.appConfig.widgets;
                const mapWidgetId = Object.keys(mapWidgets).find(wid => {
                    const widget = mapWidgets[wid];
                    return widget.manifest && widget.manifest.name === 'map';
                });
                if (mapWidgetId) {
                    this.props.onSettingChange({
                        id: this.props.id,
                        useMapWidgetIds: [mapWidgetId]
                    });
                }
            }
        };
        // Initialize data sources from config
        this.initializeDataSources = () => {
            if (this.props.useDataSources && this.props.useDataSources.length > 0) {
                this.createDataSources();
            }
        };
        // Clean up data sources when component unmounts
        this.cleanupDataSources = () => {
            if (this.props.useDataSources) {
                this.props.useDataSources.forEach(useDs => {
                    if (useDs && useDs.dataSourceId) {
                        this.dsManager.destroyDataSource(useDs.dataSourceId);
                    }
                });
            }
        };
        this.createDataSources = (customUseDataSources) => __awaiter(this, void 0, void 0, function* () {
            const useDataSourcesToUse = customUseDataSources || this.props.useDataSources;
            if (!useDataSourcesToUse || useDataSourcesToUse.length === 0) {
                this.setState({ dss: null });
                return;
            }
            const dataSources = [];
            // Process each data source
            for (let useDs of useDataSourcesToUse) {
                try {
                    const ds = yield this.dsManager.createDataSourceByUseDataSource(useDs);
                    if (ds && ds.getSchema()) {
                        dataSources.push(ds);
                    }
                }
                catch (err) {
                    console.error('Error creating data source:', err);
                }
            }
            if (dataSources.length > 0) {
                this.setState({
                    dss: dataSources
                });
            }
        });
        // Handle data source selection change
        this.onDataSourceChange = (useDataSources) => {
            this.props.onSettingChange({
                id: this.props.id,
                useDataSources: useDataSources
            });
        };
        // Handle map widget selection change
        this.onMapWidgetSelected = (selectedIds) => __awaiter(this, void 0, void 0, function* () {
            this.props.onSettingChange({
                id: this.props.id,
                useMapWidgetIds: selectedIds
            });
        });
        // Toggle advanced options display
        this.toggleAdvancedOptions = () => {
            this.setState(prevState => ({
                showAdvancedOptions: !prevState.showAdvancedOptions
            }));
        };
        // Handle highlight color change (for map markers and selected rows)
        this.onHighlightColorChange = (color) => {
            if (this.props.config) {
                const newConfig = this.props.config.set
                    ? this.props.config.set('highlightColor', color)
                    : (0,_immutableHelper__WEBPACK_IMPORTED_MODULE_5__.Imm)(Object.assign(Object.assign({}, this.props.config), { highlightColor: color }));
                this.props.onSettingChange({
                    id: this.props.id,
                    config: newConfig
                });
            }
        };
        // Handle background color change
        this.onBackgroundColorChange = (color) => {
            if (this.props.config) {
                const newConfig = this.props.config.set
                    ? this.props.config.set('backgroundColor', color)
                    : (0,_immutableHelper__WEBPACK_IMPORTED_MODULE_5__.Imm)(Object.assign(Object.assign({}, this.props.config), { backgroundColor: color }));
                this.props.onSettingChange({
                    id: this.props.id,
                    config: newConfig
                });
            }
        };
        // Initialize state from config
        this.state = {
            dss: null,
            showAdvancedOptions: false
        };
    }
    componentDidMount() {
        const waitForAppConfig = () => {
            var _a;
            const state = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.getAppStore)().getState();
            const widgets = (_a = state === null || state === void 0 ? void 0 : state.appConfig) === null || _a === void 0 ? void 0 : _a.widgets;
            if (widgets && Object.keys(widgets).length > 0) {
                this.autoDetectMapWidget();
                this.initializeDataSources();
            }
            else {
                setTimeout(waitForAppConfig, 200); // Wait and retry
            }
        };
        waitForAppConfig();
    }
    componentDidUpdate(prevProps) {
        if (this.props.useDataSources &&
            this.props.useDataSources !== prevProps.useDataSources) {
            this.initializeDataSources();
        }
    }
    componentWillUnmount() {
        this.cleanupDataSources();
    }
    render() {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p;
        const { showAdvancedOptions } = this.state;
        const highlightColor = ((_a = this.props.config) === null || _a === void 0 ? void 0 : _a.highlightColor) || '#007BFF';
        const backgroundColor = ((_b = this.props.config) === null || _b === void 0 ? void 0 : _b.backgroundColor) || '#FFFFFF';
        return (jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: "widget-setting-container p-2" },
            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: "setting-section mb-3" },
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_3__.Label, { className: "setting-label d-flex" }, "Select a Map Widget:"),
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_2__.MapWidgetSelector, { onSelect: this.onMapWidgetSelected, useMapWidgetIds: this.props.useMapWidgetIds })),
            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: "setting-section mb-3" },
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_3__.Label, { className: "setting-label d-flex" }, "Select a Data Source:"),
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("p", { className: "setting-note text-muted" }, "Choose a feature layer containing task data."),
                !this.props.useDataSources || this.props.useDataSources.length === 0 ? (jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_3__.Alert, { type: "info", className: "w-100 mb-2" }, "Please select a map widget first to auto-detect data sources.")) : null,
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui_advanced_data_source_selector__WEBPACK_IMPORTED_MODULE_1__.DataSourceSelector, { mustUseDataSource: true, types: this.supportedTypes, useDataSources: this.props.useDataSources, onChange: this.onDataSourceChange, widgetId: this.props.id, hideDataView: true })),
            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: "setting-section mb-3" },
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_3__.Label, { className: "setting-label d-flex" }, "Appearance Settings:"),
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: "color-setting-item d-flex align-items-center justify-content-between mb-3" },
                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_3__.Label, { className: "mb-0 mr-2" }, "Highlight Color:"),
                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: "d-flex align-items-center" },
                        jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui_basic_color_picker__WEBPACK_IMPORTED_MODULE_4__.ColorPicker, { height: 26, width: 30, color: highlightColor, presetColors: this.colorPresets, onChange: this.onHighlightColorChange, placement: "bottom" }),
                        jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: "color-preview ml-2", style: {
                                width: '24px',
                                height: '24px',
                                backgroundColor: highlightColor,
                                border: '1px solid #ddd',
                                borderRadius: '2px'
                            } }))),
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: "color-setting-item d-flex align-items-center justify-content-between" },
                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_3__.Label, { className: "mb-0 mr-2" }, "Background Color:"),
                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: "d-flex align-items-center" },
                        jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui_basic_color_picker__WEBPACK_IMPORTED_MODULE_4__.ColorPicker, { height: 26, width: 30, color: backgroundColor, presetColors: this.bgColorPresets, onChange: this.onBackgroundColorChange, placement: "bottom" }),
                        jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: "color-preview ml-2", style: {
                                width: '24px',
                                height: '24px',
                                backgroundColor: backgroundColor,
                                border: '1px solid #ddd',
                                borderRadius: '2px'
                            } })))),
            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: "setting-section border-top pt-3" },
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: "d-flex justify-content-between align-items-center mb-2", onClick: this.toggleAdvancedOptions, style: { cursor: 'pointer' } },
                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_3__.Label, { className: "setting-label mb-0" }, "Advanced Options"),
                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_3__.Switch, { checked: showAdvancedOptions, onChange: this.toggleAdvancedOptions })),
                showAdvancedOptions && (jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: "advanced-options-container pl-2 border-left" },
                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: "mb-3" },
                        jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: "d-flex align-items-center mb-2" },
                            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_3__.Checkbox, { checked: ((_d = (_c = this.props.config) === null || _c === void 0 ? void 0 : _c.settings) === null || _d === void 0 ? void 0 : _d.enableAutoZoom) !== false, onChange: (evt) => {
                                    var _a;
                                    const settings = ((_a = this.props.config) === null || _a === void 0 ? void 0 : _a.settings) || {};
                                    this.props.onSettingChange({
                                        id: this.props.id,
                                        config: this.props.config.set('settings', Object.assign(Object.assign({}, settings), { enableAutoZoom: evt.target.checked }))
                                    });
                                }, className: "mr-2" }),
                            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_3__.Label, { className: "mb-0" }, "Auto-zoom to selected items")),
                        jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: "d-flex align-items-center mb-3" },
                            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_3__.Checkbox, { checked: ((_f = (_e = this.props.config) === null || _e === void 0 ? void 0 : _e.settings) === null || _f === void 0 ? void 0 : _f.showMapIndicators) !== false, onChange: (evt) => {
                                    var _a;
                                    const settings = ((_a = this.props.config) === null || _a === void 0 ? void 0 : _a.settings) || {};
                                    this.props.onSettingChange({
                                        id: this.props.id,
                                        config: this.props.config.set('settings', Object.assign(Object.assign({}, settings), { showMapIndicators: evt.target.checked }))
                                    });
                                }, className: "mr-2" }),
                            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_3__.Label, { className: "mb-0" }, "Show map location indicators")),
                        jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: "d-flex align-items-center mb-3" },
                            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_3__.Checkbox, { checked: ((_h = (_g = this.props.config) === null || _g === void 0 ? void 0 : _g.settings) === null || _h === void 0 ? void 0 : _h.showExportButton) !== false, onChange: (evt) => {
                                    var _a;
                                    const settings = ((_a = this.props.config) === null || _a === void 0 ? void 0 : _a.settings) || {};
                                    this.props.onSettingChange({
                                        id: this.props.id,
                                        config: this.props.config.set('settings', Object.assign(Object.assign({}, settings), { showExportButton: evt.target.checked }))
                                    });
                                }, className: "mr-2" }),
                            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_3__.Label, { className: "mb-0" }, "Show export to Excel button")),
                        jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: "d-flex align-items-center" },
                            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_3__.Checkbox, { checked: ((_k = (_j = this.props.config) === null || _j === void 0 ? void 0 : _j.settings) === null || _k === void 0 ? void 0 : _k.autoExpandFirstEmployee) !== false, onChange: (evt) => {
                                    var _a;
                                    const settings = ((_a = this.props.config) === null || _a === void 0 ? void 0 : _a.settings) || {};
                                    this.props.onSettingChange({
                                        id: this.props.id,
                                        config: this.props.config.set('settings', Object.assign(Object.assign({}, settings), { autoExpandFirstEmployee: evt.target.checked }))
                                    });
                                }, className: "mr-2" }),
                            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_3__.Label, { className: "mb-0" }, "Auto-expand first employee"))),
                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: "mb-3" },
                        jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_3__.Label, null, "Default Page Size"),
                        jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("select", { className: "form-control", value: ((_m = (_l = this.props.config) === null || _l === void 0 ? void 0 : _l.settings) === null || _m === void 0 ? void 0 : _m.defaultPageSize) || 20, onChange: (evt) => {
                                var _a;
                                const settings = ((_a = this.props.config) === null || _a === void 0 ? void 0 : _a.settings) || {};
                                this.props.onSettingChange({
                                    id: this.props.id,
                                    config: this.props.config.set('settings', Object.assign(Object.assign({}, settings), { defaultPageSize: parseInt(evt.target.value) }))
                                });
                            } },
                            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("option", { value: 10 }, "10 items"),
                            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("option", { value: 20 }, "20 items"),
                            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("option", { value: 50 }, "50 items"),
                            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("option", { value: 100 }, "100 items"))),
                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: "mb-3" },
                        jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_3__.Label, null, "Default Date Range"),
                        jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("select", { className: "form-control", value: ((_p = (_o = this.props.config) === null || _o === void 0 ? void 0 : _o.settings) === null || _p === void 0 ? void 0 : _p.defaultDateRange) || '30', onChange: (evt) => {
                                var _a;
                                const settings = ((_a = this.props.config) === null || _a === void 0 ? void 0 : _a.settings) || {};
                                this.props.onSettingChange({
                                    id: this.props.id,
                                    config: this.props.config.set('settings', Object.assign(Object.assign({}, settings), { defaultDateRange: evt.target.value }))
                                });
                            } },
                            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("option", { value: "1" }, "Last 1 day"),
                            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("option", { value: "7" }, "Last 7 days"),
                            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("option", { value: "30" }, "Last 30 days"),
                            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("option", { value: "365" }, "Last 365 days"))))))));
    }
}


/***/ }),

/***/ "./your-extensions/widgets/GazCombinedV2/src/setting/components/GazIndicatorTotalSetting.tsx":
/*!***************************************************************************************************!*\
  !*** ./your-extensions/widgets/GazCombinedV2/src/setting/components/GazIndicatorTotalSetting.tsx ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ XodimCountSetting)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var jimu_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jimu-ui */ "jimu-ui");
/* harmony import */ var jimu_ui_basic_color_picker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jimu-ui/basic/color-picker */ "jimu-ui/basic/color-picker");
/* harmony import */ var _immutableHelper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../immutableHelper */ "./your-extensions/widgets/GazCombinedV2/src/setting/immutableHelper.ts");




class XodimCountSetting extends jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.PureComponent {
    constructor(props) {
        var _a;
        super(props);
        // Color presets for the primary color picker
        this.primaryColorPresets = [
            { color: '#4CAF50', label: 'Green', value: '#4CAF50' },
            { color: '#2196F3', label: 'Blue', value: '#2196F3' },
            { color: '#F44336', label: 'Red', value: '#F44336' },
            { color: '#FFC107', label: 'Amber', value: '#FFC107' },
            { color: '#9C27B0', label: 'Purple', value: '#9C27B0' },
            { color: '#FF9800', label: 'Orange', value: '#FF9800' },
            { color: '#795548', label: 'Brown', value: '#795548' },
            { color: '#607D8B', label: 'Blue Grey', value: '#607D8B' }
        ];
        // Color presets for the secondary color picker
        this.secondaryColorPresets = [
            { color: '#2196F3', label: 'Blue', value: '#2196F3' },
            { color: '#4CAF50', label: 'Green', value: '#4CAF50' },
            { color: '#FF9800', label: 'Orange', value: '#FF9800' },
            { color: '#9C27B0', label: 'Purple', value: '#9C27B0' },
            { color: '#F44336', label: 'Red', value: '#F44336' },
            { color: '#FFC107', label: 'Amber', value: '#FFC107' },
            { color: '#795548', label: 'Brown', value: '#795548' },
            { color: '#607D8B', label: 'Blue Grey', value: '#607D8B' }
        ];
        // Background color presets
        this.bgColorPresets = [
            { color: '#FFFFFF', label: 'White', value: '#FFFFFF' },
            { color: '#F5F5F5', label: 'Light Grey', value: '#F5F5F5' },
            { color: '#EEEEEE', label: 'Grey', value: '#EEEEEE' },
            { color: '#2B2B2B', label: 'Dark', value: '#2B2B2B' },
            { color: '#E3F2FD', label: 'Light Blue', value: '#E3F2FD' },
            { color: '#E8F5E9', label: 'Light Green', value: '#E8F5E9' },
            { color: '#FFF8E1', label: 'Light Amber', value: '#FFF8E1' },
            { color: 'rgba(0,0,0,0)', label: 'Transparent', value: 'rgba(0,0,0,0)' }
        ];
        // Toggle advanced options display
        this.toggleAdvancedOptions = () => {
            this.setState(prevState => ({
                showAdvancedOptions: !prevState.showAdvancedOptions
            }));
        };
        // Handle API URL change
        this.onApiUrlChange = (event) => {
            const apiUrl = event.target.value;
            this.setState({ apiUrl });
            this.updateConfig('apiUrl', apiUrl);
        };
        // Handle primary color change
        this.onPrimaryColorChange = (color) => {
            this.updateConfig('primaryColor', color);
        };
        // Handle secondary color change
        this.onSecondaryColorChange = (color) => {
            this.updateConfig('secondaryColor', color);
        };
        // Handle background color change
        this.onBackgroundColorChange = (color) => {
            this.updateConfig('backgroundColor', color);
        };
        // Handle refresh interval change
        this.onRefreshIntervalChange = (event) => {
            const refreshInterval = parseInt(event.target.value) || 0;
            this.updateConfig('refreshInterval', refreshInterval);
        };
        // Handle widget title change
        this.onWidgetTitleChange = (event) => {
            const title = event.target.value;
            this.updateConfig('widgetTitle', title);
        };
        // Handle subtitle change
        this.onSubtitleChange = (event) => {
            const subtitle = event.target.value;
            this.updateConfig('subtitle', subtitle);
        };
        // Handle checkbox changes for display options
        this.onDisplayOptionChange = (optionName, checked) => {
            this.updateConfig(optionName, checked);
        };
        // Helper method to update config
        this.updateConfig = (key, value) => {
            if (this.props.config) {
                const newConfig = this.props.config.set
                    ? this.props.config.set(key, value)
                    : (0,_immutableHelper__WEBPACK_IMPORTED_MODULE_3__.Imm)(Object.assign(Object.assign({}, this.props.config), { [key]: value }));
                this.props.onSettingChange({
                    id: this.props.id,
                    config: newConfig
                });
            }
        };
        // Handle animation settings change
        this.onAnimationSpeedChange = (event) => {
            const speed = event.target.value;
            this.updateConfig('animationSpeed', speed);
        };
        // Handle number format change
        this.onNumberFormatChange = (event) => {
            const format = event.target.value;
            this.updateConfig('numberFormat', format);
        };
        // Initialize state from config
        this.state = {
            showAdvancedOptions: false,
            apiUrl: ((_a = this.props.config) === null || _a === void 0 ? void 0 : _a.apiUrl) || 'https://api.geoal.uz/xodim-counts'
        };
    }
    render() {
        const { showAdvancedOptions, apiUrl } = this.state;
        const config = this.props.config || {};
        // Get values from config with defaults
        const primaryColor = config.primaryColor || '#4CAF50';
        const secondaryColor = config.secondaryColor || '#2196F3';
        const backgroundColor = config.backgroundColor || '#FFFFFF';
        const refreshInterval = config.refreshInterval || 0;
        const widgetTitle = config.widgetTitle || 'Xodimlar statistikasi';
        const subtitle = config.subtitle || '';
        const animationSpeed = config.animationSpeed || 'normal';
        const numberFormat = config.numberFormat || 'standard';
        // Display options with defaults
        const showProgressBar = config.showProgressBar !== false;
        const showDateInfo = config.showDateInfo !== false;
        const showPercentage = config.showPercentage !== false;
        const showRegionName = config.showRegionName !== false;
        const enableHoverEffects = config.enableHoverEffects !== false;
        const showTooltips = config.showTooltips !== false;
        const enableClickToRefresh = config.enableClickToRefresh !== false;
        const showLoadingAnimation = config.showLoadingAnimation !== false;
        return (jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: "widget-setting-container p-2" },
            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: "setting-section mb-3" },
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Alert, { type: "info", className: "w-100" },
                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", null,
                        jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("strong", null, "Xodim Count Widget"),
                        jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("p", { className: "mb-0 mt-1" }, "This widget displays worker statistics (total and today's active workers) based on the selected region from other widgets. It automatically listens to region selection events and updates accordingly.")))),
            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: "setting-section mb-3" },
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Label, { className: "setting-label d-flex" }, "Basic Configuration:"),
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: "mb-2" },
                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Label, { className: "mb-1" }, "Widget Title:"),
                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.TextInput, { value: widgetTitle, onChange: this.onWidgetTitleChange, placeholder: "Xodimlar statistikasi" }),
                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("small", { className: "text-muted d-block mt-1" }, "The main title displayed at the top of the widget.")),
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: "mb-2" },
                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Label, { className: "mb-1" }, "Subtitle (Optional):"),
                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.TextInput, { value: subtitle, onChange: this.onSubtitleChange, placeholder: "Additional information text" }),
                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("small", { className: "text-muted d-block mt-1" }, "Optional subtitle text displayed below the main title."))),
            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: "setting-section mb-3" },
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Label, { className: "setting-label d-flex" }, "API Configuration:"),
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("p", { className: "setting-note text-muted" }, "Configure the API endpoint for fetching worker statistics."),
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: "mb-2" },
                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Label, { className: "mb-1" }, "API URL:"),
                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.TextInput, { value: apiUrl, onChange: this.onApiUrlChange, placeholder: "https://api.geoal.uz/xodim-counts" }),
                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("small", { className: "text-muted d-block mt-1" }, "The API endpoint should accept 'viloyat' and 'tuman' query parameters."))),
            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: "setting-section mb-3" },
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Label, { className: "setting-label d-flex" }, "Appearance Settings:"),
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: "color-setting-item d-flex align-items-center justify-content-between mb-3" },
                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Label, { className: "mb-0 mr-2" }, "Primary Color (Total Workers):"),
                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: "d-flex align-items-center" },
                        jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui_basic_color_picker__WEBPACK_IMPORTED_MODULE_2__.ColorPicker, { height: 26, width: 30, color: primaryColor, presetColors: this.primaryColorPresets, onChange: this.onPrimaryColorChange, placement: "bottom" }),
                        jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: "color-preview ml-2", style: {
                                width: '24px',
                                height: '24px',
                                backgroundColor: primaryColor,
                                border: '1px solid #ddd',
                                borderRadius: '2px'
                            } }))),
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: "color-setting-item d-flex align-items-center justify-content-between mb-3" },
                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Label, { className: "mb-0 mr-2" }, "Secondary Color (Today's Workers):"),
                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: "d-flex align-items-center" },
                        jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui_basic_color_picker__WEBPACK_IMPORTED_MODULE_2__.ColorPicker, { height: 26, width: 30, color: secondaryColor, presetColors: this.secondaryColorPresets, onChange: this.onSecondaryColorChange, placement: "bottom" }),
                        jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: "color-preview ml-2", style: {
                                width: '24px',
                                height: '24px',
                                backgroundColor: secondaryColor,
                                border: '1px solid #ddd',
                                borderRadius: '2px'
                            } }))),
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: "color-setting-item d-flex align-items-center justify-content-between" },
                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Label, { className: "mb-0 mr-2" }, "Background Color:"),
                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: "d-flex align-items-center" },
                        jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui_basic_color_picker__WEBPACK_IMPORTED_MODULE_2__.ColorPicker, { height: 26, width: 30, color: backgroundColor, presetColors: this.bgColorPresets, onChange: this.onBackgroundColorChange, placement: "bottom" }),
                        jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: "color-preview ml-2", style: {
                                width: '24px',
                                height: '24px',
                                backgroundColor: backgroundColor,
                                border: '1px solid #ddd',
                                borderRadius: '2px'
                            } })))),
            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: "setting-section mb-3" },
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Label, { className: "setting-label d-flex mb-2" }, "Display Options:"),
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: "checkbox-group" },
                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: "d-flex align-items-center mb-2" },
                        jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Checkbox, { checked: showProgressBar, onChange: (evt) => this.onDisplayOptionChange('showProgressBar', evt.target.checked), className: "mr-2" }),
                        jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Label, { className: "mb-0" }, "Show activity progress bar")),
                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: "d-flex align-items-center mb-2" },
                        jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Checkbox, { checked: showPercentage, onChange: (evt) => this.onDisplayOptionChange('showPercentage', evt.target.checked), className: "mr-2" }),
                        jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Label, { className: "mb-0" }, "Show percentage in progress bar")),
                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: "d-flex align-items-center mb-2" },
                        jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Checkbox, { checked: showDateInfo, onChange: (evt) => this.onDisplayOptionChange('showDateInfo', evt.target.checked), className: "mr-2" }),
                        jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Label, { className: "mb-0" }, "Show date information")),
                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: "d-flex align-items-center mb-2" },
                        jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Checkbox, { checked: showRegionName, onChange: (evt) => this.onDisplayOptionChange('showRegionName', evt.target.checked), className: "mr-2" }),
                        jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Label, { className: "mb-0" }, "Show current region name")),
                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: "d-flex align-items-center mb-2" },
                        jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Checkbox, { checked: showTooltips, onChange: (evt) => this.onDisplayOptionChange('showTooltips', evt.target.checked), className: "mr-2" }),
                        jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Label, { className: "mb-0" }, "Show helpful tooltips")),
                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: "d-flex align-items-center" },
                        jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Checkbox, { checked: showLoadingAnimation, onChange: (evt) => this.onDisplayOptionChange('showLoadingAnimation', evt.target.checked), className: "mr-2" }),
                        jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Label, { className: "mb-0" }, "Show loading animations")))),
            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: "setting-section border-top pt-3" },
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: "d-flex justify-content-between align-items-center mb-2", onClick: this.toggleAdvancedOptions, style: { cursor: 'pointer' } },
                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Label, { className: "setting-label mb-0" }, "Advanced Options"),
                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Switch, { checked: showAdvancedOptions, onChange: this.toggleAdvancedOptions })),
                showAdvancedOptions && (jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: "advanced-options-container pl-2 border-left" },
                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: "mb-3" },
                        jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Label, { className: "mb-2" }, "Auto-refresh Settings:"),
                        jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: "d-flex align-items-center mb-2" },
                            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Label, { className: "mb-0 mr-2", style: { minWidth: '120px' } }, "Refresh Interval:"),
                            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("select", { className: "form-control", value: refreshInterval, onChange: this.onRefreshIntervalChange, style: { maxWidth: '150px' } },
                                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("option", { value: 0 }, "Manual only"),
                                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("option", { value: 10000 }, "10 seconds"),
                                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("option", { value: 30000 }, "30 seconds"),
                                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("option", { value: 60000 }, "1 minute"),
                                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("option", { value: 300000 }, "5 minutes"),
                                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("option", { value: 600000 }, "10 minutes"),
                                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("option", { value: 1800000 }, "30 minutes"),
                                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("option", { value: 3600000 }, "1 hour"))),
                        jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("small", { className: "text-muted" }, "Set automatic refresh interval for the widget data. Choose \"Manual only\" to disable auto-refresh.")),
                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: "mb-3" },
                        jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Label, { className: "mb-2" }, "Number Format:"),
                        jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: "d-flex align-items-center mb-2" },
                            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Label, { className: "mb-0 mr-2", style: { minWidth: '120px' } }, "Format Style:"),
                            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("select", { className: "form-control", value: numberFormat, onChange: this.onNumberFormatChange, style: { maxWidth: '150px' } },
                                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("option", { value: "standard" }, "Standard (1,234)"),
                                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("option", { value: "compact" }, "Compact (1.2K)"),
                                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("option", { value: "scientific" }, "Scientific (1.23E+3)"),
                                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("option", { value: "percentage" }, "Percentage (12.34%)"))),
                        jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("small", { className: "text-muted" }, "Choose how numbers are displayed in the widget.")),
                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: "mb-3" },
                        jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Label, { className: "mb-2" }, "Animation Settings:"),
                        jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: "d-flex align-items-center mb-2" },
                            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Label, { className: "mb-0 mr-2", style: { minWidth: '120px' } }, "Animation Speed:"),
                            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("select", { className: "form-control", value: animationSpeed, onChange: this.onAnimationSpeedChange, style: { maxWidth: '150px' } },
                                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("option", { value: "none" }, "No Animation"),
                                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("option", { value: "slow" }, "Slow"),
                                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("option", { value: "normal" }, "Normal"),
                                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("option", { value: "fast" }, "Fast"))),
                        jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: "d-flex align-items-center mb-2" },
                            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Checkbox, { checked: enableHoverEffects, onChange: (evt) => this.onDisplayOptionChange('enableHoverEffects', evt.target.checked), className: "mr-2" }),
                            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Label, { className: "mb-0" }, "Enable hover effects")),
                        jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("small", { className: "text-muted" }, "Control animation speed and hover effects for better user experience.")),
                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: "mb-3" },
                        jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Label, { className: "mb-2" }, "Interaction Settings:"),
                        jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: "d-flex align-items-center mb-2" },
                            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Checkbox, { checked: enableClickToRefresh, onChange: (evt) => this.onDisplayOptionChange('enableClickToRefresh', evt.target.checked), className: "mr-2" }),
                            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Label, { className: "mb-0" }, "Enable click-to-refresh")),
                        jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("small", { className: "text-muted" }, "Allow users to click on the widget to manually refresh data.")),
                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: "mb-3" },
                        jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Label, { className: "mb-2" }, "Performance Settings:"),
                        jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: "d-flex align-items-center mb-2" },
                            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Checkbox, { checked: config.enableCaching !== false, onChange: (evt) => this.onDisplayOptionChange('enableCaching', evt.target.checked), className: "mr-2" }),
                            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Label, { className: "mb-0" }, "Enable data caching")),
                        jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: "d-flex align-items-center mb-2" },
                            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Checkbox, { checked: config.enableDebugMode === true, onChange: (evt) => this.onDisplayOptionChange('enableDebugMode', evt.target.checked), className: "mr-2" }),
                            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Label, { className: "mb-0" }, "Enable debug mode")),
                        jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("small", { className: "text-muted" }, "Performance and debugging options. Debug mode will show console logs.")),
                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: "mb-3" },
                        jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Label, { className: "mb-2" }, "Error Handling:"),
                        jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: "d-flex align-items-center mb-2" },
                            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Label, { className: "mb-0 mr-2", style: { minWidth: '120px' } }, "Retry Attempts:"),
                            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("select", { className: "form-control", value: config.maxRetryAttempts || 3, onChange: (evt) => this.updateConfig('maxRetryAttempts', parseInt(evt.target.value)), style: { maxWidth: '100px' } },
                                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("option", { value: 1 }, "1"),
                                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("option", { value: 2 }, "2"),
                                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("option", { value: 3 }, "3"),
                                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("option", { value: 5 }, "5"),
                                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("option", { value: 10 }, "10"))),
                        jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: "d-flex align-items-center mb-2" },
                            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Label, { className: "mb-0 mr-2", style: { minWidth: '120px' } }, "Request Timeout:"),
                            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("select", { className: "form-control", value: config.requestTimeout || 10000, onChange: (evt) => this.updateConfig('requestTimeout', parseInt(evt.target.value)), style: { maxWidth: '120px' } },
                                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("option", { value: 5000 }, "5 seconds"),
                                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("option", { value: 10000 }, "10 seconds"),
                                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("option", { value: 15000 }, "15 seconds"),
                                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("option", { value: 30000 }, "30 seconds"))),
                        jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("small", { className: "text-muted" }, "Configure how the widget handles errors and timeouts."))))),
            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: "setting-section border-top pt-3 mt-3" },
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Label, { className: "setting-label d-flex mb-2" }, "Widget Information:"),
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Alert, { type: "info", className: "w-100" },
                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", null,
                        jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("p", { className: "mb-2" },
                            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("strong", null, "How it works:")),
                        jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("ul", { className: "mb-2 pl-3" },
                            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("li", null, "Listens to region selection events from other widgets"),
                            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("li", null, "Automatically fetches worker statistics when region changes"),
                            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("li", null, "Displays total workers and today's active workers"),
                            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("li", null, "Shows activity percentage with a progress bar"),
                            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("li", null, "Supports auto-refresh and manual refresh options")),
                        jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("p", { className: "mb-2" },
                            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("strong", null, "Compatible with:"),
                            " GazFiltersWidget and other widgets that emit 'regionFilterChanged' events"),
                        jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("p", { className: "mb-0" },
                            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("strong", null, "API Requirements:"),
                            " The API endpoint should return JSON with total_distinct_xodim, today_distinct_xodim, and date fields")))),
            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: "setting-section border-top pt-3 mt-3" },
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Label, { className: "setting-label d-flex mb-2" }, "CSS Style Overrides (Optional):"),
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("textarea", { className: "form-control", value: config.customCSS || '', onChange: (evt) => this.updateConfig('customCSS', evt.target.value), placeholder: "/* Add custom CSS here */", rows: 4, style: { width: '100%' } }),
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("small", { className: "text-muted d-block mt-1" }, "Advanced: Add custom CSS to override widget styles. Use with caution."))));
    }
}


/***/ }),

/***/ "./your-extensions/widgets/GazCombinedV2/src/setting/components/GazMiniFilterSetting.tsx":
/*!***********************************************************************************************!*\
  !*** ./your-extensions/widgets/GazCombinedV2/src/setting/components/GazMiniFilterSetting.tsx ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Setting)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var jimu_ui_advanced_data_source_selector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jimu-ui/advanced/data-source-selector */ "jimu-ui/advanced/data-source-selector");
/* harmony import */ var jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jimu-ui/advanced/setting-components */ "jimu-ui/advanced/setting-components");
/* harmony import */ var jimu_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jimu-ui */ "jimu-ui");
/* harmony import */ var jimu_ui_basic_color_picker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jimu-ui/basic/color-picker */ "jimu-ui/basic/color-picker");
/* harmony import */ var _immutableHelper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../immutableHelper */ "./your-extensions/widgets/GazCombinedV2/src/setting/immutableHelper.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};






class Setting extends jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.PureComponent {
    constructor(props) {
        super(props);
        this.supportedTypes = (0,_immutableHelper__WEBPACK_IMPORTED_MODULE_5__.Imm)([jimu_core__WEBPACK_IMPORTED_MODULE_0__.DataSourceTypes.FeatureLayer]);
        // Color presets
        this.colorPresets = [
            { color: '#FF9800', label: 'Orange', value: '#FF9800' },
            { color: '#F44336', label: 'Red', value: '#F44336' },
            { color: '#4CAF50', label: 'Green', value: '#4CAF50' },
            { color: '#2196F3', label: 'Blue', value: '#2196F3' },
            { color: '#9C27B0', label: 'Purple', value: '#9C27B0' },
            { color: '#FFC107', label: 'Amber', value: '#FFC107' },
            { color: '#795548', label: 'Brown', value: '#795548' },
            { color: '#607D8B', label: 'Blue Grey', value: '#607D8B' }
        ];
        // Background color presets
        this.bgColorPresets = [
            { color: '#FFFFFF', label: 'White', value: '#FFFFFF' },
            { color: '#F5F5F5', label: 'Light Grey', value: '#F5F5F5' },
            { color: '#EEEEEE', label: 'Grey', value: '#EEEEEE' },
            { color: '#2B2B2B', label: 'Dark', value: '#2B2B2B' },
            { color: '#1A1A1A', label: 'Very Dark', value: '#1A1A1A' },
            { color: '#E3F2FD', label: 'Light Blue', value: '#E3F2FD' },
            { color: '#FFF8E1', label: 'Light Amber', value: '#FFF8E1' },
            { color: 'rgba(0,0,0,0)', label: 'Transparent', value: 'rgba(0,0,0,0)' }
        ];
        // Auto-detect map widget if not already set
        this.autoDetectMapWidget = () => {
            if (!this.props.useMapWidgetIds || this.props.useMapWidgetIds.length === 0) {
                const state = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.getAppStore)().getState();
                const mapWidgets = state.appConfig.widgets;
                const mapWidgetId = Object.keys(mapWidgets).find((wid) => {
                    const widget = mapWidgets[wid];
                    return widget.manifest && widget.manifest.name === 'map';
                });
                if (mapWidgetId) {
                    this.props.onSettingChange({
                        id: this.props.id,
                        useMapWidgetIds: [mapWidgetId]
                    });
                }
            }
        };
        // Handle data source selection change
        this.onDataSourceChange = (useDataSources) => {
            this.props.onSettingChange({
                id: this.props.id,
                useDataSources: useDataSources
            });
        };
        // Handle map widget selection change
        this.onMapWidgetSelected = (selectedIds) => __awaiter(this, void 0, void 0, function* () {
            this.props.onSettingChange({
                id: this.props.id,
                useMapWidgetIds: selectedIds
            });
            yield this.autoDetectDataSourcesFromMap(selectedIds);
        });
        // Auto-detect data sources from selected map
        this.autoDetectDataSourcesFromMap = (selectedMapIds) => __awaiter(this, void 0, void 0, function* () {
            if (selectedMapIds.length === 0)
                return;
            const state = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.getAppStore)().getState();
            const mapId = selectedMapIds[0];
            const widget = state.appConfig.widgets[mapId];
            if (widget && widget.useDataSources) {
                const mapDataSources = widget.useDataSources;
                const featureLayerDs = mapDataSources.filter((ds) => ds.dataSourceId &&
                    state.appConfig.dataSources[ds.dataSourceId] &&
                    state.appConfig.dataSources[ds.dataSourceId].type === 'FEATURE_LAYER');
                if (featureLayerDs.length > 0) {
                    const featureLayerDataSource = featureLayerDs[0];
                    const fieldsArray = this.extractFields(featureLayerDataSource);
                    const plainUseDs = {
                        dataSourceId: featureLayerDataSource.dataSourceId,
                        mainDataSourceId: featureLayerDataSource.mainDataSourceId || featureLayerDataSource.dataSourceId,
                        dataViewId: featureLayerDataSource.dataViewId || 'default',
                        rootDataSourceId: featureLayerDataSource.rootDataSourceId || featureLayerDataSource.dataSourceId,
                        fields: fieldsArray
                    };
                    this.props.onSettingChange({
                        id: this.props.id,
                        useDataSources: [plainUseDs]
                    });
                }
            }
        });
        // Extract fields from a data source
        this.extractFields = (dataSource) => {
            let fieldsArray = [];
            if (dataSource.fields) {
                if (Array.isArray(dataSource.fields)) {
                    fieldsArray = [...dataSource.fields];
                }
                else if (typeof dataSource.fields === 'object' && dataSource.fields.length >= 0) {
                    fieldsArray = [];
                    for (let i = 0; i < dataSource.fields.length; i++) {
                        fieldsArray.push(dataSource.fields[i]);
                    }
                }
                else if (typeof dataSource.fields === 'object') {
                    fieldsArray = Object.keys(dataSource.fields);
                }
            }
            return fieldsArray;
        };
        // Toggle advanced options display
        this.toggleAdvancedOptions = () => {
            this.setState((prevState) => ({
                showAdvancedOptions: !prevState.showAdvancedOptions
            }));
        };
        // Handle chart color change
        this.onChartColorChange = (color) => {
            if (this.props.config) {
                const newConfig = this.props.config.set
                    ? this.props.config.set('chartColor', color)
                    : (0,_immutableHelper__WEBPACK_IMPORTED_MODULE_5__.Imm)(Object.assign(Object.assign({}, this.props.config), { chartColor: color }));
                this.props.onSettingChange({
                    id: this.props.id,
                    config: newConfig
                });
            }
        };
        // Handle background color change
        this.onBackgroundColorChange = (color) => {
            if (this.props.config) {
                const newConfig = this.props.config.set
                    ? this.props.config.set('backgroundColor', color)
                    : (0,_immutableHelper__WEBPACK_IMPORTED_MODULE_5__.Imm)(Object.assign(Object.assign({}, this.props.config), { backgroundColor: color }));
                this.props.onSettingChange({
                    id: this.props.id,
                    config: newConfig
                });
            }
        };
        this.state = {
            showAdvancedOptions: false
        };
    }
    componentDidMount() {
        const waitForAppConfig = () => {
            var _a;
            const state = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.getAppStore)().getState();
            const widgets = (_a = state === null || state === void 0 ? void 0 : state.appConfig) === null || _a === void 0 ? void 0 : _a.widgets;
            if (widgets && Object.keys(widgets).length > 0) {
                this.autoDetectMapWidget();
            }
            else {
                setTimeout(waitForAppConfig, 200);
            }
        };
        waitForAppConfig();
    }
    render() {
        var _a, _b, _c, _d, _e, _f;
        const { showAdvancedOptions } = this.state;
        const chartColor = ((_a = this.props.config) === null || _a === void 0 ? void 0 : _a.chartColor) || '#FF9800';
        const backgroundColor = ((_b = this.props.config) === null || _b === void 0 ? void 0 : _b.backgroundColor) || '#1A1A1A';
        return (jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: "widget-setting-container p-2" },
            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: "setting-section mb-3" },
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_3__.Label, { className: "setting-label d-flex" }, "Select a Map Widget:"),
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui_advanced_setting_components__WEBPACK_IMPORTED_MODULE_2__.MapWidgetSelector, { onSelect: this.onMapWidgetSelected, useMapWidgetIds: this.props.useMapWidgetIds })),
            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: "setting-section mb-3" },
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_3__.Label, { className: "setting-label d-flex" }, "Select a Data Source:"),
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("p", { className: "setting-note text-muted" }, "Choose a feature layer containing topshiriq_turi field."),
                !this.props.useDataSources || this.props.useDataSources.length === 0 ? (jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_3__.Alert, { type: "info", className: "w-100 mb-2" }, "Please select a map widget first to auto-detect data sources.")) : null,
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui_advanced_data_source_selector__WEBPACK_IMPORTED_MODULE_1__.DataSourceSelector, { mustUseDataSource: true, types: this.supportedTypes, isMultiple: true, useDataSources: this.props.useDataSources, onChange: this.onDataSourceChange, widgetId: this.props.id, hideDataView: true })),
            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: "setting-section mb-3" },
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_3__.Label, { className: "setting-label d-flex" }, "Appearance Settings:"),
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: "color-setting-item d-flex align-items-center justify-content-between mb-3" },
                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_3__.Label, { className: "mb-0 mr-2" }, "Accent Color:"),
                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: "d-flex align-items-center" },
                        jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui_basic_color_picker__WEBPACK_IMPORTED_MODULE_4__.ColorPicker, { height: 26, width: 30, color: chartColor, presetColors: this.colorPresets, onChange: this.onChartColorChange, placement: "bottom" }),
                        jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: "color-preview ml-2", style: {
                                width: '24px',
                                height: '24px',
                                backgroundColor: chartColor,
                                border: '1px solid #ddd',
                                borderRadius: '2px'
                            } }))),
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: "color-setting-item d-flex align-items-center justify-content-between" },
                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_3__.Label, { className: "mb-0 mr-2" }, "Background Color:"),
                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: "d-flex align-items-center" },
                        jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui_basic_color_picker__WEBPACK_IMPORTED_MODULE_4__.ColorPicker, { height: 26, width: 30, color: backgroundColor, presetColors: this.bgColorPresets, onChange: this.onBackgroundColorChange, placement: "bottom" }),
                        jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: "color-preview ml-2", style: {
                                width: '24px',
                                height: '24px',
                                backgroundColor: backgroundColor,
                                border: '1px solid #ddd',
                                borderRadius: '2px'
                            } })))),
            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: "setting-section border-top pt-3" },
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: "d-flex justify-content-between align-items-center mb-2", onClick: this.toggleAdvancedOptions, style: { cursor: 'pointer' } },
                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_3__.Label, { className: "setting-label mb-0" }, "Advanced Options"),
                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_3__.Switch, { checked: showAdvancedOptions, onChange: this.toggleAdvancedOptions })),
                showAdvancedOptions && (jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: "advanced-options-container pl-2 border-left" },
                    jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: "mb-3" },
                        jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: "d-flex align-items-center mb-2" },
                            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_3__.Checkbox, { checked: ((_d = (_c = this.props.config) === null || _c === void 0 ? void 0 : _c.settings) === null || _d === void 0 ? void 0 : _d.enableAutoZoom) !== false, onChange: (evt) => {
                                    var _a;
                                    const settings = ((_a = this.props.config) === null || _a === void 0 ? void 0 : _a.settings) || {};
                                    this.props.onSettingChange({
                                        id: this.props.id,
                                        config: this.props.config.set('settings', Object.assign(Object.assign({}, settings), { enableAutoZoom: evt.target.checked }))
                                    });
                                }, className: "mr-2" }),
                            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_3__.Label, { className: "mb-0" }, "Auto-zoom to selected type")),
                        jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: "d-flex align-items-center mb-3" },
                            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_3__.Checkbox, { checked: ((_f = (_e = this.props.config) === null || _e === void 0 ? void 0 : _e.settings) === null || _f === void 0 ? void 0 : _f.showPercentages) !== false, onChange: (evt) => {
                                    var _a;
                                    const settings = ((_a = this.props.config) === null || _a === void 0 ? void 0 : _a.settings) || {};
                                    this.props.onSettingChange({
                                        id: this.props.id,
                                        config: this.props.config.set('settings', Object.assign(Object.assign({}, settings), { showPercentages: evt.target.checked }))
                                    });
                                }, className: "mr-2" }),
                            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_3__.Label, { className: "mb-0" }, "Show percentages in list")),
                        jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: "d-flex align-items-center" },
                            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_3__.Checkbox, { checked: true, disabled: true, className: "mr-2" }),
                            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_3__.Label, { className: "mb-0", title: "The dropdown is always enabled in this version" }, "Dropdown UI enabled"))))))));
    }
}


/***/ }),

/***/ "./your-extensions/widgets/GazCombinedV2/src/setting/immutableHelper.ts":
/*!******************************************************************************!*\
  !*** ./your-extensions/widgets/GazCombinedV2/src/setting/immutableHelper.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EMPTY_CONFIG: () => (/* binding */ EMPTY_CONFIG),
/* harmony export */   Imm: () => (/* binding */ Imm)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");

/** jimu-core re-exports seamless-immutable as a namespace; cast for callable use. */
const Imm = jimu_core__WEBPACK_IMPORTED_MODULE_0__.Immutable;
const EMPTY_CONFIG = Imm({});


/***/ }),

/***/ "jimu-core":
/*!****************************!*\
  !*** external "jimu-core" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_jimu_core__;

/***/ }),

/***/ "jimu-ui":
/*!**************************!*\
  !*** external "jimu-ui" ***!
  \**************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_jimu_ui__;

/***/ }),

/***/ "jimu-ui/advanced/data-source-selector":
/*!********************************************************!*\
  !*** external "jimu-ui/advanced/data-source-selector" ***!
  \********************************************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_jimu_ui_advanced_data_source_selector__;

/***/ }),

/***/ "jimu-ui/advanced/setting-components":
/*!******************************************************!*\
  !*** external "jimu-ui/advanced/setting-components" ***!
  \******************************************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_jimu_ui_advanced_setting_components__;

/***/ }),

/***/ "jimu-ui/basic/color-picker":
/*!*********************************************!*\
  !*** external "jimu-ui/basic/color-picker" ***!
  \*********************************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_jimu_ui_basic_color_picker__;

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "";
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other entry modules.
(() => {
/*!******************************************!*\
  !*** ./jimu-core/lib/set-public-path.ts ***!
  \******************************************/
/**
 * Webpack will replace __webpack_public_path__ with __webpack_require__.p to set the public path dynamically.
 * The reason why we can't set the publicPath in webpack config is: we change the publicPath when download.
 * */
// eslint-disable-next-line
// @ts-ignore
__webpack_require__.p = window.jimuConfig.baseUrl;

})();

// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!***********************************************************************!*\
  !*** ./your-extensions/widgets/GazCombinedV2/src/setting/setting.tsx ***!
  \***********************************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   __set_webpack_public_path__: () => (/* binding */ __set_webpack_public_path__),
/* harmony export */   "default": () => (/* binding */ GazCombinedSetting)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var jimu_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jimu-ui */ "jimu-ui");
/* harmony import */ var jimu_ui_basic_color_picker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jimu-ui/basic/color-picker */ "jimu-ui/basic/color-picker");
/* harmony import */ var _immutableHelper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./immutableHelper */ "./your-extensions/widgets/GazCombinedV2/src/setting/immutableHelper.ts");
/* harmony import */ var _components_GazDateSetting__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/GazDateSetting */ "./your-extensions/widgets/GazCombinedV2/src/setting/components/GazDateSetting.tsx");
/* harmony import */ var _components_GazExcelSetting__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/GazExcelSetting */ "./your-extensions/widgets/GazCombinedV2/src/setting/components/GazExcelSetting.tsx");
/* harmony import */ var _components_GazFiltersSetting__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/GazFiltersSetting */ "./your-extensions/widgets/GazCombinedV2/src/setting/components/GazFiltersSetting.tsx");
/* harmony import */ var _components_GazHodimTableSetting__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/GazHodimTableSetting */ "./your-extensions/widgets/GazCombinedV2/src/setting/components/GazHodimTableSetting.tsx");
/* harmony import */ var _components_GazIndicatorTotalSetting__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/GazIndicatorTotalSetting */ "./your-extensions/widgets/GazCombinedV2/src/setting/components/GazIndicatorTotalSetting.tsx");
/* harmony import */ var _components_GazMiniFilterSetting__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/GazMiniFilterSetting */ "./your-extensions/widgets/GazCombinedV2/src/setting/components/GazMiniFilterSetting.tsx");
/* harmony import */ var _setting_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./setting.css */ "./your-extensions/widgets/GazCombinedV2/src/setting/setting.css");











// Each embedded panel keeps its original, unmodified settings UI. This wrapper
// gives every panel its own namespaced config slice (see runtime/widget.tsx)
// so writing a setting in one panel's section can never overwrite another
// panel's identically-named setting (e.g. "chartColor").
class GazCombinedSetting extends jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.PureComponent {
    namespacedProps(key) {
        const fullConfig = (this.props.config) || _immutableHelper__WEBPACK_IMPORTED_MODULE_3__.EMPTY_CONFIG;
        const slice = fullConfig[key] || _immutableHelper__WEBPACK_IMPORTED_MODULE_3__.EMPTY_CONFIG;
        return Object.assign(Object.assign({}, this.props), { config: slice, onSettingChange: (settingChange) => {
                const newSlice = settingChange.config;
                const newFullConfig = fullConfig.set
                    ? fullConfig.set(key, newSlice)
                    : (0,_immutableHelper__WEBPACK_IMPORTED_MODULE_3__.Imm)(Object.assign(Object.assign({}, fullConfig), { [key]: newSlice }));
                this.props.onSettingChange(Object.assign(Object.assign({}, settingChange), { id: this.props.id, config: newFullConfig }));
            } });
    }
    // GazControll15's original settings.tsx file was a duplicate of the Xodim
    // Count settings panel (wrong copy/paste upstream), so it isn't reusable
    // here. Its runtime keys are simple enough to expose directly instead.
    renderControlIndicatorsSettings() {
        var _a;
        const slice = ((_a = (this.props.config)) === null || _a === void 0 ? void 0 : _a.controlIndicators) || _immutableHelper__WEBPACK_IMPORTED_MODULE_3__.EMPTY_CONFIG;
        const update = (key, value) => {
            const newSlice = slice.set ? slice.set(key, value) : (0,_immutableHelper__WEBPACK_IMPORTED_MODULE_3__.Imm)(Object.assign(Object.assign({}, slice), { [key]: value }));
            const fullConfig = (this.props.config) || _immutableHelper__WEBPACK_IMPORTED_MODULE_3__.EMPTY_CONFIG;
            const newFullConfig = fullConfig.set
                ? fullConfig.set('controlIndicators', newSlice)
                : (0,_immutableHelper__WEBPACK_IMPORTED_MODULE_3__.Imm)(Object.assign(Object.assign({}, fullConfig), { controlIndicators: newSlice }));
            this.props.onSettingChange({ id: this.props.id, config: newFullConfig });
        };
        const backgroundColor = slice.backgroundColor || '#1e1e1e';
        const kmColor = slice.kmColor || '#4CAF50';
        const gtpColor = slice.gtpColor || '#2196F3';
        const nazoratColor = slice.nazoratColor || '#FF9800';
        const kamchilikColor = slice.kamchilikColor || '#F44336';
        const refreshInterval = slice.refreshInterval || 0;
        return (jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: "p-2" },
            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Alert, { type: "warning", className: "w-100 mb-2" }, "The original GazControll15 settings file upstream was a copy of the Xodim Count settings panel, so it isn't reusable here. This section exposes its real config keys directly instead."),
            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: "mb-2" },
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Label, { className: "mb-1" }, "API URL:"),
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.TextInput, { value: slice.apiUrl || 'https://gisapi.hududgaz.uz/control-indicators', onChange: (e) => { update('apiUrl', e.target.value); } })),
            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: "mb-2 d-flex align-items-center justify-content-between" },
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Label, { className: "mb-0 mr-2" }, "Background color:"),
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui_basic_color_picker__WEBPACK_IMPORTED_MODULE_2__.ColorPicker, { height: 26, width: 30, color: backgroundColor, onChange: (c) => { update('backgroundColor', c); }, placement: "bottom" })),
            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: "mb-2 d-flex align-items-center justify-content-between" },
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Label, { className: "mb-0 mr-2" }, "Jami KM color:"),
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui_basic_color_picker__WEBPACK_IMPORTED_MODULE_2__.ColorPicker, { height: 26, width: 30, color: kmColor, onChange: (c) => { update('kmColor', c); }, placement: "bottom" })),
            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: "mb-2 d-flex align-items-center justify-content-between" },
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Label, { className: "mb-0 mr-2" }, "GTP Jami color:"),
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui_basic_color_picker__WEBPACK_IMPORTED_MODULE_2__.ColorPicker, { height: 26, width: 30, color: gtpColor, onChange: (c) => { update('gtpColor', c); }, placement: "bottom" })),
            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: "mb-2 d-flex align-items-center justify-content-between" },
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Label, { className: "mb-0 mr-2" }, "Umumiy Nazorat color:"),
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui_basic_color_picker__WEBPACK_IMPORTED_MODULE_2__.ColorPicker, { height: 26, width: 30, color: nazoratColor, onChange: (c) => { update('nazoratColor', c); }, placement: "bottom" })),
            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: "mb-2 d-flex align-items-center justify-content-between" },
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Label, { className: "mb-0 mr-2" }, "Kamchiliklar color:"),
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui_basic_color_picker__WEBPACK_IMPORTED_MODULE_2__.ColorPicker, { height: 26, width: 30, color: kamchilikColor, onChange: (c) => { update('kamchilikColor', c); }, placement: "bottom" })),
            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: "mb-2" },
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.Label, { className: "mb-1" }, "Auto-refresh interval (ms, 0 = manual):"),
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_1__.TextInput, { type: "text", value: String(refreshInterval), onChange: (e) => { update('refreshInterval', parseInt(e.target.value, 10) || 0); } }))));
    }
    render() {
        return (jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: "gaz-combined-setting" },
            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("details", { open: true, className: "gaz-combined-setting-section" },
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("summary", null, "Sana oralig'i (GazDate)"),
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(_components_GazDateSetting__WEBPACK_IMPORTED_MODULE_4__["default"], Object.assign({}, this.namespacedProps('gazDate')))),
            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("details", { className: "gaz-combined-setting-section" },
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("summary", null, "Kategoriya filtri (GazMiniFilter)"),
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(_components_GazMiniFilterSetting__WEBPACK_IMPORTED_MODULE_9__["default"], Object.assign({}, this.namespacedProps('gazMiniFilter')))),
            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("details", { className: "gaz-combined-setting-section" },
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("summary", null, "Hudud filtri va chart (GazFilters)"),
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(_components_GazFiltersSetting__WEBPACK_IMPORTED_MODULE_6__["default"], Object.assign({}, this.namespacedProps('gazFilters')))),
            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("details", { className: "gaz-combined-setting-section" },
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("summary", null, "Boshqaruv ko'rsatkichlari (ControlIndicators)"),
                this.renderControlIndicatorsSettings()),
            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("details", { className: "gaz-combined-setting-section" },
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("summary", null, "Xodimlar jami (GazIndicatorTotal)"),
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(_components_GazIndicatorTotalSetting__WEBPACK_IMPORTED_MODULE_8__["default"], Object.assign({}, this.namespacedProps('gazIndicatorTotal')))),
            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("details", { className: "gaz-combined-setting-section" },
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("summary", null, "Xodimlar jadvali (GazHodimTable)"),
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(_components_GazHodimTableSetting__WEBPACK_IMPORTED_MODULE_7__["default"], Object.assign({}, this.namespacedProps('gazHodimTable')))),
            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("details", { className: "gaz-combined-setting-section" },
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("summary", null, "Excel eksport (GazExcel)"),
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(_components_GazExcelSetting__WEBPACK_IMPORTED_MODULE_5__["default"], Object.assign({}, this.namespacedProps('gazExcel'))))));
    }
}
function __set_webpack_public_path__(url) { __webpack_require__.p = url; }

})();

/******/ 	return __webpack_exports__;
/******/ })()

			);
		}
	};
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9HYXpDb21iaW5lZFYyL2Rpc3Qvc2V0dGluZy9zZXR0aW5nLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDc0g7QUFDakI7QUFDckcsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLENBQUMsT0FBTyx1SUFBdUksTUFBTSxVQUFVLFdBQVcsTUFBTSxLQUFLLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxXQUFXLFVBQVUsV0FBVyxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxXQUFXLFdBQVcsV0FBVyxNQUFNLEtBQUssV0FBVyxnREFBZ0Qsa0JBQWtCLDJCQUEyQixHQUFHLG1DQUFtQyx1REFBdUQsbUJBQW1CLEdBQUcsNkNBQTZDLG9CQUFvQixxQkFBcUIsaUJBQWlCLHFCQUFxQixHQUFHLHFFQUFxRSxrQkFBa0IsR0FBRyxxREFBcUQsc0JBQXNCLDBCQUEwQixzQkFBc0IscUNBQXFDLEdBQUcsMkRBQTJELDZCQUE2QixHQUFHLHFCQUFxQjtBQUM1aEM7QUFDQSxpRUFBZSx1QkFBdUIsRUFBQzs7Ozs7Ozs7Ozs7O0FDdEMxQjs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscURBQXFEO0FBQ3JEO0FBQ0E7QUFDQSxnREFBZ0Q7QUFDaEQ7QUFDQTtBQUNBLHFGQUFxRjtBQUNyRjtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JC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QVMsRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUU7WUFDdEQsRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRTtZQUN2RCxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFO1lBQ3ZELEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUU7WUFDdEQsRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxXQUFXLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRTtTQUM3RCxDQUFDO1FBRUYsK0NBQStDO1FBQy9DLDBCQUFxQixHQUFHO1lBQ3BCLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUU7WUFDckQsRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRTtZQUN0RCxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFO1lBQ3ZELEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUU7WUFDdkQsRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRTtZQUNwRCxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFO1lBQ3RELEVBQUUsS0FBSyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUU7WUFDdEQsRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFF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QUEyQixDQUFDLEdBQUcsSUFBSSxxQkFBdUIsR0FBRyxHQUFHLEVBQUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2V4Yi1jbGllbnQvLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy9HYXpDb21iaW5lZFYyL3NyYy9zZXR0aW5nL3NldHRpbmcuY3NzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4veW91ci1leHRlbnNpb25zL3dpZGdldHMvR2F6Q29tYmluZWRWMi9zcmMvc2V0dGluZy9zZXR0aW5nLmNzcz9lYTg1Iiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL3lvdXItZXh0ZW5zaW9ucy93aWRnZXRzL0dhekNvbWJpbmVkVjIvc3JjL3NldHRpbmcvY29tcG9uZW50cy9HYXpEYXRlU2V0dGluZy50c3giLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL3lvdXItZXh0ZW5zaW9ucy93aWRnZXRzL0dhekNvbWJpbmVkVjIvc3JjL3NldHRpbmcvY29tcG9uZW50cy9HYXpFeGNlbFNldHRpbmcudHN4Iiwid2VicGFjazovL2V4Yi1jbGllbnQvLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy9HYXpDb21iaW5lZFYyL3NyYy9zZXR0aW5nL2NvbXBvbmVudHMvR2F6RmlsdGVyc1NldHRpbmcudHN4Iiwid2VicGFjazovL2V4Yi1jbGllbnQvLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy9HYXpDb21iaW5lZFYyL3NyYy9zZXR0aW5nL2NvbXBvbmVudHMvR2F6SG9kaW1UYWJsZVNldHRpbmcudHN4Iiwid2VicGFjazovL2V4Yi1jbGllbnQvLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy9HYXpDb21iaW5lZFYyL3NyYy9zZXR0aW5nL2NvbXBvbmVudHMvR2F6SW5kaWNhdG9yVG90YWxTZXR0aW5nLnRzeCIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4veW91ci1leHRlbnNpb25zL3dpZGdldHMvR2F6Q29tYmluZWRWMi9zcmMvc2V0dGluZy9jb21wb25lbnRzL0dhek1pbmlGaWx0ZXJTZXR0aW5nLnRzeCIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4veW91ci1leHRlbnNpb25zL3dpZGdldHMvR2F6Q29tYmluZWRWMi9zcmMvc2V0dGluZy9pbW11dGFibGVIZWxwZXIudHMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJqaW11LWNvcmVcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImppbXUtdWlcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImppbXUtdWkvYWR2YW5jZWQvZGF0YS1zb3VyY2Utc2VsZWN0b3JcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImppbXUtdWkvYWR2YW5jZWQvc2V0dGluZy1jb21wb25lbnRzXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJqaW11LXVpL2Jhc2ljL2NvbG9yLXBpY2tlclwiIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL2ppbXUtY29yZS9saWIvc2V0LXB1YmxpYy1wYXRoLnRzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi95b3VyLWV4dGVuc2lvbnMvd2lkZ2V0cy9HYXpDb21iaW5lZFYyL3NyYy9zZXR0aW5nL3NldHRpbmcudHN4Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGBAY2hhcnNldCBcIlVURi04XCI7XG4uZ2F6LWNvbWJpbmVkLXNldHRpbmcge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4uZ2F6LWNvbWJpbmVkLXNldHRpbmctc2VjdGlvbiB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDEyOCwgMTI4LCAxMjgsIDAuMjUpO1xuICBwYWRkaW5nOiA0cHggMDtcbn1cblxuLmdhei1jb21iaW5lZC1zZXR0aW5nLXNlY3Rpb24gPiBzdW1tYXJ5IHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBmb250LXdlaWdodDogNjAwO1xuICBwYWRkaW5nOiA4cHg7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG59XG5cbi5nYXotY29tYmluZWQtc2V0dGluZy1zZWN0aW9uID4gc3VtbWFyeTo6LXdlYmtpdC1kZXRhaWxzLW1hcmtlciB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5nYXotY29tYmluZWQtc2V0dGluZy1zZWN0aW9uID4gc3VtbWFyeTo6YmVmb3JlIHtcbiAgY29udGVudDogXCLilrhcIjtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXJnaW4tcmlnaHQ6IDZweDtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMTVzIGVhc2U7XG59XG5cbi5nYXotY29tYmluZWQtc2V0dGluZy1zZWN0aW9uW29wZW5dID4gc3VtbWFyeTo6YmVmb3JlIHtcbiAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4veW91ci1leHRlbnNpb25zL3dpZGdldHMvR2F6Q29tYmluZWRWMi9zcmMvc2V0dGluZy9zZXR0aW5nLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQSxnQkFBZ0I7QUFBaEI7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7QUFFRjs7QUFDQTtFQUNFLGtEQUFBO0VBQ0EsY0FBQTtBQUVGOztBQUNBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FBRUY7O0FBQ0E7RUFDRSxhQUFBO0FBRUY7O0FBQ0E7RUFDRSxZQUFBO0VBQ0EscUJBQUE7RUFDQSxpQkFBQTtFQUNBLGdDQUFBO0FBRUY7O0FBQ0E7RUFDRSx3QkFBQTtBQUVGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5nYXotY29tYmluZWQtc2V0dGluZyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLmdhei1jb21iaW5lZC1zZXR0aW5nLXNlY3Rpb24ge1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMTI4LCAxMjgsIDEyOCwgMC4yNSk7XFxuICBwYWRkaW5nOiA0cHggMDtcXG59XFxuXFxuLmdhei1jb21iaW5lZC1zZXR0aW5nLXNlY3Rpb24gPiBzdW1tYXJ5IHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICBwYWRkaW5nOiA4cHg7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbn1cXG5cXG4uZ2F6LWNvbWJpbmVkLXNldHRpbmctc2VjdGlvbiA+IHN1bW1hcnk6Oi13ZWJraXQtZGV0YWlscy1tYXJrZXIge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLmdhei1jb21iaW5lZC1zZXR0aW5nLXNlY3Rpb24gPiBzdW1tYXJ5OjpiZWZvcmUge1xcbiAgY29udGVudDogJ1xcXFwyNUI4JztcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIG1hcmdpbi1yaWdodDogNnB4O1xcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMTVzIGVhc2U7XFxufVxcblxcbi5nYXotY29tYmluZWQtc2V0dGluZy1zZWN0aW9uW29wZW5dID4gc3VtbWFyeTo6YmVmb3JlIHtcXG4gIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzNdLnVzZVsxXSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcmVzb2x2ZS11cmwtbG9hZGVyL2luZGV4LmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzNdLnVzZVsyXSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbM10udXNlWzNdIS4vc2V0dGluZy5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcbm9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3J1bGVTZXRbMV0ucnVsZXNbM10udXNlWzFdIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9yZXNvbHZlLXVybC1sb2FkZXIvaW5kZXguanM/P3J1bGVTZXRbMV0ucnVsZXNbM10udXNlWzJdIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cnVsZVNldFsxXS5ydWxlc1szXS51c2VbM10hLi9zZXR0aW5nLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHsgXHJcbiAgICBSZWFjdCwgXHJcbiAgICBEYXRhU291cmNlVHlwZXMsIFxyXG4gICAgVXNlRGF0YVNvdXJjZSxcclxuICAgIElNVXNlRGF0YVNvdXJjZSxcclxuICAgIGdldEFwcFN0b3JlLFxyXG4gICAgRGF0YVNvdXJjZSxcclxuICAgIElNRmllbGRTY2hlbWEsXHJcbiAgICBJbW11dGFibGVPYmplY3QsXHJcbiAgICBKaW11RmllbGRUeXBlXHJcbn0gZnJvbSAnamltdS1jb3JlJztcclxuaW1wb3J0IHsgQWxsV2lkZ2V0U2V0dGluZ1Byb3BzIH0gZnJvbSAnamltdS1mb3ItYnVpbGRlcic7XHJcbmltcG9ydCB7IERhdGFTb3VyY2VTZWxlY3RvciwgRmllbGRTZWxlY3RvciB9IGZyb20gJ2ppbXUtdWkvYWR2YW5jZWQvZGF0YS1zb3VyY2Utc2VsZWN0b3InO1xyXG5pbXBvcnQgeyBNYXBXaWRnZXRTZWxlY3RvciB9IGZyb20gJ2ppbXUtdWkvYWR2YW5jZWQvc2V0dGluZy1jb21wb25lbnRzJztcclxuaW1wb3J0IHsgRGF0YVNvdXJjZU1hbmFnZXIgfSBmcm9tICdqaW11LWNvcmUnO1xyXG5pbXBvcnQgeyBMYWJlbCwgQ2hlY2tib3gsIEFsZXJ0LCBUZXh0SW5wdXQgfSBmcm9tICdqaW11LXVpJztcclxuaW1wb3J0IHsgQ29sb3JQaWNrZXIgfSBmcm9tICdqaW11LXVpL2Jhc2ljL2NvbG9yLXBpY2tlcic7XHJcbmltcG9ydCB7IEltbSB9IGZyb20gJy4uL2ltbXV0YWJsZUhlbHBlcic7XHJcblxyXG5pbnRlcmZhY2UgU2V0dGluZ1N0YXRlIHtcclxuICAgIGRzczogRGF0YVNvdXJjZVtdIHwgbnVsbDtcclxuICAgIGZpbHRlckZpZWxkczogSW1tdXRhYmxlT2JqZWN0PHsgW2RhdGFTb3VyY2VJZDogc3RyaW5nXTogc3RyaW5nW10gfT4gfCBudWxsO1xyXG4gICAgYXJlYUZpZWxkOiBzdHJpbmc7XHJcbiAgICBidXR0b25Db2xvcjogc3RyaW5nO1xyXG4gICAgY29udGFpbmVyQmFja2dyb3VuZENvbG9yOiBzdHJpbmc7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNldHRpbmcgZXh0ZW5kcyBSZWFjdC5QdXJlQ29tcG9uZW50PFxyXG4gICAgQWxsV2lkZ2V0U2V0dGluZ1Byb3BzPGFueT4sXHJcbiAgICBTZXR0aW5nU3RhdGVcclxuPiB7XHJcbiAgICBzdXBwb3J0ZWRUeXBlcyA9IEltbShbRGF0YVNvdXJjZVR5cGVzLkZlYXR1cmVMYXllcl0pO1xyXG4gICAgZHNNYW5hZ2VyID0gRGF0YVNvdXJjZU1hbmFnZXIuZ2V0SW5zdGFuY2UoKTtcclxuICAgIFxyXG4gICAgLy8gQ29sb3IgcHJlc2V0cyBmb3IgdGhlIGNvbG9yIHBpY2tlclxyXG4gICAgY29sb3JQcmVzZXRzID0gW1xyXG4gICAgICAgIHsgY29sb3I6ICcjNENBRjUwJywgbGFiZWw6ICdHcmVlbicsIHZhbHVlOiAnIzRDQUY1MCcgfSxcclxuICAgICAgICB7IGNvbG9yOiAnIzIxOTZGMycsIGxhYmVsOiAnQmx1ZScsIHZhbHVlOiAnIzIxOTZGMycgfSxcclxuICAgICAgICB7IGNvbG9yOiAnI0Y0NDMzNicsIGxhYmVsOiAnUmVkJywgdmFsdWU6ICcjRjQ0MzM2JyB9LFxyXG4gICAgICAgIHsgY29sb3I6ICcjRkZDMTA3JywgbGFiZWw6ICdBbWJlcicsIHZhbHVlOiAnI0ZGQzEwNycgfSxcclxuICAgICAgICB7IGNvbG9yOiAnIzlDMjdCMCcsIGxhYmVsOiAnUHVycGxlJywgdmFsdWU6ICcjOUMyN0IwJyB9LFxyXG4gICAgICAgIHsgY29sb3I6ICcjRkY5ODAwJywgbGFiZWw6ICdPcmFuZ2UnLCB2YWx1ZTogJyNGRjk4MDAnIH0sXHJcbiAgICAgICAgeyBjb2xvcjogJyM3OTU1NDgnLCBsYWJlbDogJ0Jyb3duJywgdmFsdWU6ICcjNzk1NTQ4JyB9LFxyXG4gICAgICAgIHsgY29sb3I6ICcjNjA3RDhCJywgbGFiZWw6ICdCbHVlIEdyZXknLCB2YWx1ZTogJyM2MDdEOEInIH1cclxuICAgIF07XHJcbiAgICBcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzOiBBbGxXaWRnZXRTZXR0aW5nUHJvcHM8YW55Pikge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgICAgICBcclxuICAgICAgICAvLyBJbml0aWFsaXplIHN0YXRlIGZyb20gY29uZmlnXHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgZHNzOiBudWxsLFxyXG4gICAgICAgICAgICBmaWx0ZXJGaWVsZHM6IHRoaXMucHJvcHMuY29uZmlnPy5maWx0ZXJGaWVsZHMgfHwgbnVsbCxcclxuICAgICAgICAgICAgYXJlYUZpZWxkOiB0aGlzLnByb3BzLmNvbmZpZz8uYXJlYUZpZWxkIHx8ICdtYXlkb24nLFxyXG4gICAgICAgICAgICBidXR0b25Db2xvcjogdGhpcy5wcm9wcy5jb25maWc/LmJ1dHRvbkNvbG9yIHx8ICcjNENBRjUwJyxcclxuICAgICAgICAgICAgY29udGFpbmVyQmFja2dyb3VuZENvbG9yOiB0aGlzLnByb3BzLmNvbmZpZz8uY29udGFpbmVyQmFja2dyb3VuZENvbG9yIHx8ICcjZjVmNWY1J1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgXHJcbiAgICAgICAgY29uc29sZS5sb2coJ1NldHRpbmdzIGluaXRpYWxpemVkIHdpdGggY29uZmlnOicsIHRoaXMucHJvcHMuY29uZmlnKTtcclxuICAgIH1cclxuICAgIFxyXG4gICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgICAgY29uc3Qgd2FpdEZvckFwcENvbmZpZyA9ICgpID0+IHtcclxuICAgICAgICBjb25zdCBzdGF0ZSA9IGdldEFwcFN0b3JlKCkuZ2V0U3RhdGUoKTtcclxuICAgICAgICBjb25zdCB3aWRnZXRzID0gc3RhdGU/LmFwcENvbmZpZz8ud2lkZ2V0cztcclxuICAgICAgICBpZiAod2lkZ2V0cyAmJiBPYmplY3Qua2V5cyh3aWRnZXRzKS5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICB0aGlzLmF1dG9EZXRlY3RNYXBXaWRnZXQoKTtcclxuICAgICAgICAgIHRoaXMuaW5pdGlhbGl6ZURhdGFTb3VyY2VzKCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHNldFRpbWVvdXQod2FpdEZvckFwcENvbmZpZywgMjAwKTsgLy8gV2FpdCBhbmQgcmV0cnlcclxuICAgICAgICB9XHJcbiAgICAgIH07XHJcblxyXG4gICAgICB3YWl0Rm9yQXBwQ29uZmlnKCk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHM6IEFsbFdpZGdldFNldHRpbmdQcm9wczxhbnk+KSB7XHJcbiAgICAgIGlmIChcclxuICAgICAgICB0aGlzLnByb3BzLnVzZURhdGFTb3VyY2VzICYmXHJcbiAgICAgICAgdGhpcy5wcm9wcy51c2VEYXRhU291cmNlcyAhPT0gcHJldlByb3BzLnVzZURhdGFTb3VyY2VzXHJcbiAgICAgICkge1xyXG4gICAgICAgIHRoaXMuaW5pdGlhbGl6ZURhdGFTb3VyY2VzKCk7XHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIC8vIFVwZGF0ZSBsb2NhbCBzdGF0ZSBpZiBjb25maWcgY2hhbmdlc1xyXG4gICAgICBpZiAocHJldlByb3BzLmNvbmZpZyAhPT0gdGhpcy5wcm9wcy5jb25maWcpIHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgIGZpbHRlckZpZWxkczogdGhpcy5wcm9wcy5jb25maWc/LmZpbHRlckZpZWxkcyB8fCB0aGlzLnN0YXRlLmZpbHRlckZpZWxkcyxcclxuICAgICAgICAgIGFyZWFGaWVsZDogdGhpcy5wcm9wcy5jb25maWc/LmFyZWFGaWVsZCB8fCB0aGlzLnN0YXRlLmFyZWFGaWVsZCxcclxuICAgICAgICAgIGJ1dHRvbkNvbG9yOiB0aGlzLnByb3BzLmNvbmZpZz8uYnV0dG9uQ29sb3IgfHwgdGhpcy5zdGF0ZS5idXR0b25Db2xvcixcclxuICAgICAgICAgIGNvbnRhaW5lckJhY2tncm91bmRDb2xvcjogdGhpcy5wcm9wcy5jb25maWc/LmNvbnRhaW5lckJhY2tncm91bmRDb2xvciB8fCB0aGlzLnN0YXRlLmNvbnRhaW5lckJhY2tncm91bmRDb2xvclxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xyXG4gICAgICAgIHRoaXMuY2xlYW51cERhdGFTb3VyY2VzKCk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC8vIEF1dG8tZGV0ZWN0IG1hcCB3aWRnZXQgaWYgbm90IGFscmVhZHkgc2V0XHJcbiAgICBhdXRvRGV0ZWN0TWFwV2lkZ2V0ID0gKCkgPT4ge1xyXG4gICAgICAgIGlmICghdGhpcy5wcm9wcy51c2VNYXBXaWRnZXRJZHMgfHwgdGhpcy5wcm9wcy51c2VNYXBXaWRnZXRJZHMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHN0YXRlID0gZ2V0QXBwU3RvcmUoKS5nZXRTdGF0ZSgpO1xyXG4gICAgICAgICAgICBjb25zdCBtYXBXaWRnZXRzID0gc3RhdGUuYXBwQ29uZmlnLndpZGdldHM7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBjb25zdCBtYXBXaWRnZXRJZCA9IE9iamVjdC5rZXlzKG1hcFdpZGdldHMpLmZpbmQod2lkID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHdpZGdldCA9IG1hcFdpZGdldHNbd2lkXTtcclxuICAgICAgICAgICAgICAgIHJldHVybiB3aWRnZXQubWFuaWZlc3QgJiYgd2lkZ2V0Lm1hbmlmZXN0Lm5hbWUgPT09ICdtYXAnO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICBcclxuICAgICAgICAgICAgaWYgKG1hcFdpZGdldElkKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnByb3BzLm9uU2V0dGluZ0NoYW5nZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgaWQ6IHRoaXMucHJvcHMuaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgdXNlTWFwV2lkZ2V0SWRzOiBbbWFwV2lkZ2V0SWRdXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgLy8gSW5pdGlhbGl6ZSBkYXRhIHNvdXJjZXMgZnJvbSBjb25maWdcclxuICAgIGluaXRpYWxpemVEYXRhU291cmNlcyA9ICgpID0+IHtcclxuICAgICAgICBpZiAodGhpcy5wcm9wcy51c2VEYXRhU291cmNlcyAmJiB0aGlzLnByb3BzLnVzZURhdGFTb3VyY2VzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgdGhpcy5jcmVhdGVEYXRhU291cmNlcygpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgLy8gQ2xlYW4gdXAgZGF0YSBzb3VyY2VzIHdoZW4gY29tcG9uZW50IHVubW91bnRzXHJcbiAgICBjbGVhbnVwRGF0YVNvdXJjZXMgPSAoKSA9PiB7XHJcbiAgICAgICAgaWYgKHRoaXMucHJvcHMudXNlRGF0YVNvdXJjZXMpIHtcclxuICAgICAgICAgICAgdGhpcy5wcm9wcy51c2VEYXRhU291cmNlcy5mb3JFYWNoKHVzZURzID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICh1c2VEcyAmJiB1c2VEcy5kYXRhU291cmNlSWQpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmRzTWFuYWdlci5kZXN0cm95RGF0YVNvdXJjZSh1c2VEcy5kYXRhU291cmNlSWQpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGNyZWF0ZURhdGFTb3VyY2VzID0gYXN5bmMgKGN1c3RvbVVzZURhdGFTb3VyY2VzPzogSU1Vc2VEYXRhU291cmNlW10pID0+IHtcclxuICAgICAgICBjb25zdCB1c2VEYXRhU291cmNlc1RvVXNlID0gY3VzdG9tVXNlRGF0YVNvdXJjZXMgfHwgdGhpcy5wcm9wcy51c2VEYXRhU291cmNlcztcclxuICAgICAgICBpZiAoIXVzZURhdGFTb3VyY2VzVG9Vc2UgfHwgdXNlRGF0YVNvdXJjZXNUb1VzZS5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGRzczogbnVsbCB9KTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgIFxyXG4gICAgICAgIGNvbnN0IGRhdGFTb3VyY2VzOiBEYXRhU291cmNlW10gPSBbXTtcclxuICAgICAgICBcclxuICAgICAgICAvLyBFbnN1cmUgZXhpc3RpbmdGaWx0ZXJGaWVsZHMgaXMgYW4gSW1tdXRhYmxlIG9iamVjdFxyXG4gICAgICAgIGxldCBleGlzdGluZ0ZpbHRlckZpZWxkcztcclxuICAgICAgICBcclxuICAgICAgICAvLyBDaGVjayBpZiBwcm9wcy5jb25maWcgZXhpc3RzIGFuZCBoYXMgZmlsdGVyRmllbGRzXHJcbiAgICAgICAgaWYgKHRoaXMucHJvcHMuY29uZmlnICYmIHRoaXMucHJvcHMuY29uZmlnLmZpbHRlckZpZWxkcykge1xyXG4gICAgICAgICAgICAvLyBDaGVjayBpZiBpdCdzIGFscmVhZHkgYW4gSW1tdXRhYmxlIG9iamVjdFxyXG4gICAgICAgICAgICBpZiAodHlwZW9mIHRoaXMucHJvcHMuY29uZmlnLmZpbHRlckZpZWxkcy5nZXQgPT09ICdmdW5jdGlvbicpIHtcclxuICAgICAgICAgICAgICAgIGV4aXN0aW5nRmlsdGVyRmllbGRzID0gdGhpcy5wcm9wcy5jb25maWcuZmlsdGVyRmllbGRzO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgLy8gQ29udmVydCB0byBJbW11dGFibGUgaWYgaXQncyBhIHJlZ3VsYXIgb2JqZWN0XHJcbiAgICAgICAgICAgICAgICBleGlzdGluZ0ZpbHRlckZpZWxkcyA9IEltbSh0aGlzLnByb3BzLmNvbmZpZy5maWx0ZXJGaWVsZHMpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgLy8gQ3JlYXRlIGEgbmV3IGVtcHR5IEltbXV0YWJsZSBvYmplY3RcclxuICAgICAgICAgICAgZXhpc3RpbmdGaWx0ZXJGaWVsZHMgPSBJbW0oe30gYXMgeyBbZGF0YVNvdXJjZUlkOiBzdHJpbmddOiBzdHJpbmdbXSB9KTtcclxuICAgICAgICB9XHJcbiAgICBcclxuICAgICAgICAvLyBQcm9jZXNzIGVhY2ggZGF0YSBzb3VyY2VcclxuICAgICAgICBmb3IgKGxldCB1c2VEcyBvZiB1c2VEYXRhU291cmNlc1RvVXNlKSB7XHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBkcyA9IGF3YWl0IHRoaXMuZHNNYW5hZ2VyLmNyZWF0ZURhdGFTb3VyY2VCeVVzZURhdGFTb3VyY2UodXNlRHMgYXMgSU1Vc2VEYXRhU291cmNlKTtcclxuICAgICAgICAgICAgICAgIGlmIChkcyAmJiBkcy5nZXRTY2hlbWEoKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGZpZWxkcyA9IGRzLmdldFNjaGVtYSgpLmZpZWxkcztcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBmaWVsZE5hbWVzID0gT2JqZWN0LmtleXMoZmllbGRzKTtcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAvLyBTYWZlbHkgY2hlY2sgaWYgdGhpcyBkYXRhIHNvdXJjZSBoYXMgZmlsdGVyIGZpZWxkc1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGRzSWQgPSBkcy5pZDtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBoYXNGaWx0ZXJGaWVsZHMgPSBleGlzdGluZ0ZpbHRlckZpZWxkcy5nZXQgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgID8gZXhpc3RpbmdGaWx0ZXJGaWVsZHMuZ2V0KGRzSWQpIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA6IGV4aXN0aW5nRmlsdGVyRmllbGRzW2RzSWRdO1xyXG4gICAgXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFoYXNGaWx0ZXJGaWVsZHMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZGVmYXVsdEZpbHRlckZpZWxkcyA9IHRoaXMuZ2V0RGVmYXVsdEZpbHRlckZpZWxkcyhmaWVsZE5hbWVzKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGRlZmF1bHRGaWx0ZXJGaWVsZHMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhpc3RpbmdGaWx0ZXJGaWVsZHMgPSBleGlzdGluZ0ZpbHRlckZpZWxkcy5zZXQoZHNJZCwgZGVmYXVsdEZpbHRlckZpZWxkcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZUNvbmZpZ0ZpZWxkcygnZmlsdGVyRmllbGRzJywgZXhpc3RpbmdGaWx0ZXJGaWVsZHMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGFTb3VyY2VzLnB1c2goZHMpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGNyZWF0aW5nIGRhdGEgc291cmNlOicsIGVycik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICBcclxuICAgICAgICBpZiAoZGF0YVNvdXJjZXMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgXHJcbiAgICAgICAgICAgICAgICBkc3M6IGRhdGFTb3VyY2VzLFxyXG4gICAgICAgICAgICAgICAgZmlsdGVyRmllbGRzOiBleGlzdGluZ0ZpbHRlckZpZWxkc1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgXHJcbiAgICAvLyBHZXQgZGVmYXVsdCBmaWx0ZXIgZmllbGRzIGJhc2VkIG9uIGF2YWlsYWJsZSBmaWVsZHNcclxuICAgIGdldERlZmF1bHRGaWx0ZXJGaWVsZHMgPSAoZmllbGROYW1lczogc3RyaW5nW10pOiBzdHJpbmdbXSA9PiB7XHJcbiAgICAgICAgLy8gTG9vayBmb3IgY29tbW9uIGZpbHRlciBmaWVsZHMgaW4gdGhlIGRhdGFcclxuICAgICAgICBjb25zdCBkZWZhdWx0RmllbGRzID0gZmllbGROYW1lcy5maWx0ZXIoZiA9PlxyXG4gICAgICAgICAgICBbJ3ZpbG95YXQnLCAndHVtYW4nXS5pbmNsdWRlcyhmLnRvTG93ZXJDYXNlKCkpXHJcbiAgICAgICAgKTtcclxuICAgICAgICBcclxuICAgICAgICBpZiAoZGVmYXVsdEZpZWxkcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBkZWZhdWx0RmllbGRzO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvLyBJZiBubyBjb21tb24gZmlsdGVyIGZpZWxkcyBmb3VuZCwgbG9vayBmb3Igc3RyaW5nL3RleHQgZmllbGRzIHRoYXQgbWlnaHQgYmUgY2F0ZWdvcmljYWxcclxuICAgICAgICBjb25zdCBzdHJpbmdGaWVsZHMgPSBmaWVsZE5hbWVzLmZpbHRlcihmaWVsZCA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiBmaWVsZC50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKCduYW1lJykgfHwgXHJcbiAgICAgICAgICAgICAgICAgICBmaWVsZC50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKCd0eXBlJykgfHxcclxuICAgICAgICAgICAgICAgICAgIGZpZWxkLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoJ2NhdGVnb3J5JykgfHxcclxuICAgICAgICAgICAgICAgICAgIGZpZWxkLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoJ3JlZ2lvbicpIHx8XHJcbiAgICAgICAgICAgICAgICAgICBmaWVsZC50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKCdkaXN0cmljdCcpIHx8XHJcbiAgICAgICAgICAgICAgICAgICBmaWVsZC50b0xvd2VyQ2FzZSgpLmluY2x1ZGVzKCdhcmVhJyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYgKHN0cmluZ0ZpZWxkcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBzdHJpbmdGaWVsZHMuc2xpY2UoMCwgMik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIFJldHVybiBmaXJzdCAyIGZpZWxkcyBhcyBhIGxhc3QgcmVzb3J0XHJcbiAgICAgICAgcmV0dXJuIGZpZWxkTmFtZXMuc2xpY2UoMCwgMik7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC8vIFVwZGF0ZSBjb25maWcgd2l0aCBuZXcgZmllbGQgc2V0dGluZ3NcclxuICAgIHVwZGF0ZUNvbmZpZ0ZpZWxkcyA9IChjb25maWdLZXk6IHN0cmluZywgZmllbGRzOiBJbW11dGFibGVPYmplY3Q8eyBbZGF0YVNvdXJjZUlkOiBzdHJpbmddOiBzdHJpbmdbXSB9PikgPT4ge1xyXG4gICAgICAgIGlmICh0aGlzLnByb3BzLmNvbmZpZykge1xyXG4gICAgICAgICAgICBjb25zdCBuZXdDb25maWcgPSB0aGlzLnByb3BzLmNvbmZpZy5zZXRcclxuICAgICAgICAgICAgICAgID8gdGhpcy5wcm9wcy5jb25maWcuc2V0KGNvbmZpZ0tleSwgZmllbGRzKVxyXG4gICAgICAgICAgICAgICAgOiBJbW0oe1xyXG4gICAgICAgICAgICAgICAgICAgIC4uLnRoaXMucHJvcHMuY29uZmlnLFxyXG4gICAgICAgICAgICAgICAgICAgIFtjb25maWdLZXldOiBmaWVsZHNcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHRoaXMucHJvcHMub25TZXR0aW5nQ2hhbmdlKHtcclxuICAgICAgICAgICAgICAgIGlkOiB0aGlzLnByb3BzLmlkLFxyXG4gICAgICAgICAgICAgICAgY29uZmlnOiBuZXdDb25maWdcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICAvLyBIYW5kbGUgZGF0YSBzb3VyY2Ugc2VsZWN0aW9uIGNoYW5nZVxyXG4gICAgb25EYXRhU291cmNlQ2hhbmdlID0gKHVzZURhdGFTb3VyY2VzOiBVc2VEYXRhU291cmNlW10pID0+IHtcclxuICAgICAgICB0aGlzLnByb3BzLm9uU2V0dGluZ0NoYW5nZSh7XHJcbiAgICAgICAgICAgIGlkOiB0aGlzLnByb3BzLmlkLFxyXG4gICAgICAgICAgICB1c2VEYXRhU291cmNlczogdXNlRGF0YVNvdXJjZXNcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgICBcclxuICAgIC8vIEhhbmRsZSBtYXAgd2lkZ2V0IHNlbGVjdGlvbiBjaGFuZ2VcclxuICAgIG9uTWFwV2lkZ2V0U2VsZWN0ZWQgPSBhc3luYyAoc2VsZWN0ZWRJZHM6IHN0cmluZ1tdKSA9PiB7XHJcbiAgICAgICAgdGhpcy5wcm9wcy5vblNldHRpbmdDaGFuZ2Uoe1xyXG4gICAgICAgICAgICBpZDogdGhpcy5wcm9wcy5pZCxcclxuICAgICAgICAgICAgdXNlTWFwV2lkZ2V0SWRzOiBzZWxlY3RlZElkc1xyXG4gICAgICAgIH0pO1xyXG4gICAgXHJcbiAgICAgICAgYXdhaXQgdGhpcy5hdXRvRGV0ZWN0RGF0YVNvdXJjZXNGcm9tTWFwKHNlbGVjdGVkSWRzKTtcclxuICAgIH07XHJcblxyXG4gICAgLy8gQXV0by1kZXRlY3QgZGF0YSBzb3VyY2VzIGZyb20gc2VsZWN0ZWQgbWFwXHJcbiAgICBhdXRvRGV0ZWN0RGF0YVNvdXJjZXNGcm9tTWFwID0gYXN5bmMgKHNlbGVjdGVkTWFwSWRzOiBzdHJpbmdbXSkgPT4ge1xyXG4gICAgICAgIGlmIChzZWxlY3RlZE1hcElkcy5sZW5ndGggPT09IDApIHJldHVybjtcclxuXHJcbiAgICAgICAgY29uc3Qgc3RhdGUgPSBnZXRBcHBTdG9yZSgpLmdldFN0YXRlKCk7XHJcbiAgICAgICAgY29uc3QgbWFwSWQgPSBzZWxlY3RlZE1hcElkc1swXTtcclxuICAgICAgICBjb25zdCB3aWRnZXQgPSBzdGF0ZS5hcHBDb25maWcud2lkZ2V0c1ttYXBJZF07XHJcbiAgICBcclxuICAgICAgICAvLyBMb29rIGZvciBmZWF0dXJlIGxheWVyIGRhdGEgc291cmNlcyBpbiB0aGUgbWFwXHJcbiAgICAgICAgaWYgKHdpZGdldCAmJiB3aWRnZXQudXNlRGF0YVNvdXJjZXMpIHtcclxuICAgICAgICAgICAgY29uc3QgbWFwRGF0YVNvdXJjZXMgPSB3aWRnZXQudXNlRGF0YVNvdXJjZXM7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAvLyBGaWx0ZXIgZm9yIGZlYXR1cmUgbGF5ZXIgZGF0YSBzb3VyY2VzXHJcbiAgICAgICAgICAgIGNvbnN0IGZlYXR1cmVMYXllckRzID0gbWFwRGF0YVNvdXJjZXMuZmlsdGVyKGRzID0+IFxyXG4gICAgICAgICAgICAgICAgZHMuZGF0YVNvdXJjZUlkICYmIFxyXG4gICAgICAgICAgICAgICAgc3RhdGUuYXBwQ29uZmlnLmRhdGFTb3VyY2VzW2RzLmRhdGFTb3VyY2VJZF0gJiZcclxuICAgICAgICAgICAgICAgIHN0YXRlLmFwcENvbmZpZy5kYXRhU291cmNlc1tkcy5kYXRhU291cmNlSWRdLnR5cGUgPT09ICdGRUFUVVJFX0xBWUVSJ1xyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgaWYgKGZlYXR1cmVMYXllckRzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgIC8vIFVzZSB0aGUgZmlyc3QgZmVhdHVyZSBsYXllciBkYXRhIHNvdXJjZVxyXG4gICAgICAgICAgICAgICAgY29uc3QgZmVhdHVyZUxheWVyRGF0YVNvdXJjZSA9IGZlYXR1cmVMYXllckRzWzBdO1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAvLyBFeHRyYWN0IGZpZWxkcyBmb3IgdGhpcyBkYXRhIHNvdXJjZVxyXG4gICAgICAgICAgICAgICAgY29uc3QgZmllbGRzQXJyYXkgPSB0aGlzLmV4dHJhY3RGaWVsZHMoZmVhdHVyZUxheWVyRGF0YVNvdXJjZSk7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIC8vIENyZWF0ZSBhIHBsYWluIG9iamVjdCBkYXRhIHNvdXJjZVxyXG4gICAgICAgICAgICAgICAgY29uc3QgcGxhaW5Vc2VEczogVXNlRGF0YVNvdXJjZSA9IHtcclxuICAgICAgICAgICAgICAgICAgICBkYXRhU291cmNlSWQ6IGZlYXR1cmVMYXllckRhdGFTb3VyY2UuZGF0YVNvdXJjZUlkLFxyXG4gICAgICAgICAgICAgICAgICAgIG1haW5EYXRhU291cmNlSWQ6IGZlYXR1cmVMYXllckRhdGFTb3VyY2UubWFpbkRhdGFTb3VyY2VJZCB8fCBmZWF0dXJlTGF5ZXJEYXRhU291cmNlLmRhdGFTb3VyY2VJZCxcclxuICAgICAgICAgICAgICAgICAgICBkYXRhVmlld0lkOiBmZWF0dXJlTGF5ZXJEYXRhU291cmNlLmRhdGFWaWV3SWQgfHwgJ2RlZmF1bHQnLFxyXG4gICAgICAgICAgICAgICAgICAgIHJvb3REYXRhU291cmNlSWQ6IGZlYXR1cmVMYXllckRhdGFTb3VyY2Uucm9vdERhdGFTb3VyY2VJZCB8fCBmZWF0dXJlTGF5ZXJEYXRhU291cmNlLmRhdGFTb3VyY2VJZCxcclxuICAgICAgICAgICAgICAgICAgICBmaWVsZHM6IGZpZWxkc0FycmF5XHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB0aGlzLnByb3BzLm9uU2V0dGluZ0NoYW5nZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgaWQ6IHRoaXMucHJvcHMuaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgdXNlRGF0YVNvdXJjZXM6IFtwbGFpblVzZURzXVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIC8vIENyZWF0ZSBhIG5ldyBJTVVzZURhdGFTb3VyY2UgdG8gcGFzcyB0byBjcmVhdGVEYXRhU291cmNlc1xyXG4gICAgICAgICAgICAgICAgY29uc3QgaW1Vc2VEczogSU1Vc2VEYXRhU291cmNlID0gSW1tKHtcclxuICAgICAgICAgICAgICAgICAgICBkYXRhU291cmNlSWQ6IHBsYWluVXNlRHMuZGF0YVNvdXJjZUlkLFxyXG4gICAgICAgICAgICAgICAgICAgIG1haW5EYXRhU291cmNlSWQ6IHBsYWluVXNlRHMubWFpbkRhdGFTb3VyY2VJZCxcclxuICAgICAgICAgICAgICAgICAgICBkYXRhVmlld0lkOiBwbGFpblVzZURzLmRhdGFWaWV3SWQsXHJcbiAgICAgICAgICAgICAgICAgICAgcm9vdERhdGFTb3VyY2VJZDogcGxhaW5Vc2VEcy5yb290RGF0YVNvdXJjZUlkXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgYXdhaXQgdGhpcy5jcmVhdGVEYXRhU291cmNlcyhbaW1Vc2VEc10pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICAvLyBFeHRyYWN0IGZpZWxkcyBmcm9tIGEgZGF0YSBzb3VyY2VcclxuICAgIGV4dHJhY3RGaWVsZHMgPSAoZGF0YVNvdXJjZTogYW55KTogc3RyaW5nW10gPT4ge1xyXG4gICAgICAgIGxldCBmaWVsZHNBcnJheTogc3RyaW5nW10gPSBbXTtcclxuICAgICAgICBcclxuICAgICAgICBpZiAoZGF0YVNvdXJjZS5maWVsZHMpIHtcclxuICAgICAgICAgICAgLy8gSGFuZGxlIGRpZmZlcmVudCBmaWVsZCBmb3JtYXRzXHJcbiAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KGRhdGFTb3VyY2UuZmllbGRzKSkge1xyXG4gICAgICAgICAgICAgICAgZmllbGRzQXJyYXkgPSBbLi4uZGF0YVNvdXJjZS5maWVsZHNdO1xyXG4gICAgICAgICAgICB9IFxyXG4gICAgICAgICAgICBlbHNlIGlmICh0eXBlb2YgZGF0YVNvdXJjZS5maWVsZHMgPT09ICdvYmplY3QnICYmIGRhdGFTb3VyY2UuZmllbGRzLmxlbmd0aCA+PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBDb252ZXJ0IGFycmF5LWxpa2Ugb2JqZWN0IHRvIGFycmF5XHJcbiAgICAgICAgICAgICAgICBmaWVsZHNBcnJheSA9IFtdO1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkYXRhU291cmNlLmZpZWxkcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIGZpZWxkc0FycmF5LnB1c2goZGF0YVNvdXJjZS5maWVsZHNbaV0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IFxyXG4gICAgICAgICAgICBlbHNlIGlmICh0eXBlb2YgZGF0YVNvdXJjZS5maWVsZHMgPT09ICdvYmplY3QnKSB7XHJcbiAgICAgICAgICAgICAgICBmaWVsZHNBcnJheSA9IE9iamVjdC5rZXlzKGRhdGFTb3VyY2UuZmllbGRzKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICByZXR1cm4gZmllbGRzQXJyYXk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC8vIEhhbmRsZSBmaWx0ZXIgZmllbGQgc2VsZWN0aW9uIGNoYW5nZVxyXG4gICAgb25GaWx0ZXJGaWVsZENoYW5nZSA9IChzZWxlY3RlZEZpZWxkczogSU1GaWVsZFNjaGVtYVtdLCBkczogRGF0YVNvdXJjZSkgPT4ge1xyXG4gICAgICAgIGlmICghZHMpIHJldHVybjtcclxuICAgICAgICBcclxuICAgICAgICBjb25zb2xlLmxvZygnRmlsdGVyIGZpZWxkIHNlbGVjdGlvbiBjaGFuZ2VkOicsIHNlbGVjdGVkRmllbGRzKTtcclxuICAgICAgICBcclxuICAgICAgICAvLyBHZXQgY3VycmVudCBmaWVsZHMgb3IgaW5pdGlhbGl6ZSBuZXcgb25lcyB3aXRoIHRoZSBjb3JyZWN0IHR5cGVcclxuICAgICAgICBsZXQgbmV3RmllbGRzID0gdGhpcy5zdGF0ZS5maWx0ZXJGaWVsZHMgfHwgSW1tKHt9IGFzIHsgW2RhdGFTb3VyY2VJZDogc3RyaW5nXTogc3RyaW5nW10gfSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gVXBkYXRlIGZpZWxkcyBmb3IgdGhlIGRhdGEgc291cmNlXHJcbiAgICAgICAgbmV3RmllbGRzID0gbmV3RmllbGRzLnNldChkcy5pZCwgc2VsZWN0ZWRGaWVsZHMubWFwKGYgPT4gZi5qaW11TmFtZSkpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIFVwZGF0ZSBzdGF0ZSBhbmQgY29uZmlnXHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGZpbHRlckZpZWxkczogbmV3RmllbGRzIH0pO1xyXG4gICAgICAgIHRoaXMudXBkYXRlQ29uZmlnRmllbGRzKCdmaWx0ZXJGaWVsZHMnLCBuZXdGaWVsZHMpO1xyXG4gICAgfTtcclxuICAgIFxyXG4gICAgLy8gSGFuZGxlIGFyZWEgZmllbGQgY2hhbmdlXHJcbiAgICBvbkFyZWFGaWVsZENoYW5nZSA9IChldmVudDogUmVhY3QuQ2hhbmdlRXZlbnQ8SFRNTFNlbGVjdEVsZW1lbnQ+KSA9PiB7XHJcbiAgICAgICAgY29uc3QgYXJlYUZpZWxkID0gZXZlbnQudGFyZ2V0LnZhbHVlO1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBhcmVhRmllbGQgfSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYgKHRoaXMucHJvcHMuY29uZmlnKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IG5ld0NvbmZpZyA9IHRoaXMucHJvcHMuY29uZmlnLnNldFxyXG4gICAgICAgICAgICAgICAgPyB0aGlzLnByb3BzLmNvbmZpZy5zZXQoJ2FyZWFGaWVsZCcsIGFyZWFGaWVsZClcclxuICAgICAgICAgICAgICAgIDogSW1tKHtcclxuICAgICAgICAgICAgICAgICAgICAuLi50aGlzLnByb3BzLmNvbmZpZyxcclxuICAgICAgICAgICAgICAgICAgICBhcmVhRmllbGRcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHRoaXMucHJvcHMub25TZXR0aW5nQ2hhbmdlKHtcclxuICAgICAgICAgICAgICAgIGlkOiB0aGlzLnByb3BzLmlkLFxyXG4gICAgICAgICAgICAgICAgY29uZmlnOiBuZXdDb25maWdcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIFxyXG4gICAgLy8gSGFuZGxlIGJ1dHRvbiBjb2xvciBjaGFuZ2VcclxuICAgIG9uQnV0dG9uQ29sb3JDaGFuZ2UgPSAoY29sb3I6IHN0cmluZykgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdCdXR0b24gY29sb3IgY2hhbmdlZCB0bzonLCBjb2xvcik7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGJ1dHRvbkNvbG9yOiBjb2xvciB9KTtcclxuICAgICAgICBcclxuICAgICAgICBpZiAodGhpcy5wcm9wcy5jb25maWcpIHtcclxuICAgICAgICAgICAgY29uc3QgbmV3Q29uZmlnID0gdGhpcy5wcm9wcy5jb25maWcuc2V0XHJcbiAgICAgICAgICAgICAgICA/IHRoaXMucHJvcHMuY29uZmlnLnNldCgnYnV0dG9uQ29sb3InLCBjb2xvcilcclxuICAgICAgICAgICAgICAgIDogSW1tKHtcclxuICAgICAgICAgICAgICAgICAgICAuLi50aGlzLnByb3BzLmNvbmZpZyxcclxuICAgICAgICAgICAgICAgICAgICBidXR0b25Db2xvcjogY29sb3JcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHRoaXMucHJvcHMub25TZXR0aW5nQ2hhbmdlKHtcclxuICAgICAgICAgICAgICAgIGlkOiB0aGlzLnByb3BzLmlkLFxyXG4gICAgICAgICAgICAgICAgY29uZmlnOiBuZXdDb25maWdcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnVXBkYXRlZCBjb25maWcgd2l0aCBuZXcgYnV0dG9uIGNvbG9yOicsIG5ld0NvbmZpZyk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIFxyXG4gICAgLy8gSGFuZGxlIGNvbnRhaW5lciBiYWNrZ3JvdW5kIGNvbG9yIGNoYW5nZVxyXG4gICAgb25Db250YWluZXJCYWNrZ3JvdW5kQ29sb3JDaGFuZ2UgPSAoY29sb3I6IHN0cmluZykgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdDb250YWluZXIgYmFja2dyb3VuZCBjb2xvciBjaGFuZ2VkIHRvOicsIGNvbG9yKTtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgY29udGFpbmVyQmFja2dyb3VuZENvbG9yOiBjb2xvciB9KTtcclxuICAgICAgICBcclxuICAgICAgICBpZiAodGhpcy5wcm9wcy5jb25maWcpIHtcclxuICAgICAgICAgICAgY29uc3QgbmV3Q29uZmlnID0gdGhpcy5wcm9wcy5jb25maWcuc2V0XHJcbiAgICAgICAgICAgICAgICA/IHRoaXMucHJvcHMuY29uZmlnLnNldCgnY29udGFpbmVyQmFja2dyb3VuZENvbG9yJywgY29sb3IpXHJcbiAgICAgICAgICAgICAgICA6IEltbSh7XHJcbiAgICAgICAgICAgICAgICAgICAgLi4udGhpcy5wcm9wcy5jb25maWcsXHJcbiAgICAgICAgICAgICAgICAgICAgY29udGFpbmVyQmFja2dyb3VuZENvbG9yOiBjb2xvclxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgdGhpcy5wcm9wcy5vblNldHRpbmdDaGFuZ2Uoe1xyXG4gICAgICAgICAgICAgICAgaWQ6IHRoaXMucHJvcHMuaWQsXHJcbiAgICAgICAgICAgICAgICBjb25maWc6IG5ld0NvbmZpZ1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdVcGRhdGVkIGNvbmZpZyB3aXRoIG5ldyBjb250YWluZXIgYmFja2dyb3VuZCBjb2xvcjonLCBuZXdDb25maWcpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBcclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBjb25zdCB7IGFyZWFGaWVsZCwgYnV0dG9uQ29sb3IsIGNvbnRhaW5lckJhY2tncm91bmRDb2xvciB9ID0gdGhpcy5zdGF0ZTtcclxuICAgICAgICBcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndpZGdldC1zZXR0aW5nLWNvbnRhaW5lciBwLTJcIj5cclxuICAgICAgICAgICAgICAgIHsvKiBNYXAgV2lkZ2V0IFNlbGVjdG9yICovfVxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZXR0aW5nLXNlY3Rpb24gbWItM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxMYWJlbCBjbGFzc05hbWU9XCJzZXR0aW5nLWxhYmVsIGQtZmxleFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBTZWxlY3QgYSBNYXAgV2lkZ2V0OlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPE1hcFdpZGdldFNlbGVjdG9yXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uU2VsZWN0PXt0aGlzLm9uTWFwV2lkZ2V0U2VsZWN0ZWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVzZU1hcFdpZGdldElkcz17dGhpcy5wcm9wcy51c2VNYXBXaWRnZXRJZHN9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB7LyogRGF0YSBTb3VyY2UgU2VsZWN0b3IgKi99XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNldHRpbmctc2VjdGlvbiBtYi0zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPExhYmVsIGNsYXNzTmFtZT1cInNldHRpbmctbGFiZWwgZC1mbGV4XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFNlbGVjdCBhIERhdGEgU291cmNlOlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgeyF0aGlzLnByb3BzLnVzZURhdGFTb3VyY2VzIHx8IHRoaXMucHJvcHMudXNlRGF0YVNvdXJjZXMubGVuZ3RoID09PSAwID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8QWxlcnQgdHlwZT1cImluZm9cIiBjbGFzc05hbWU9XCJ3LTEwMCBtYi0yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIFBsZWFzZSBzZWxlY3QgYSBtYXAgd2lkZ2V0IGZpcnN0IHRvIGF1dG8tZGV0ZWN0IGRhdGEgc291cmNlcy5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9BbGVydD5cclxuICAgICAgICAgICAgICAgICAgICApIDogbnVsbH1cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICA8RGF0YVNvdXJjZVNlbGVjdG9yXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG11c3RVc2VEYXRhU291cmNlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGVzPXt0aGlzLnN1cHBvcnRlZFR5cGVzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB1c2VEYXRhU291cmNlcz17dGhpcy5wcm9wcy51c2VEYXRhU291cmNlc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMub25EYXRhU291cmNlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWRnZXRJZD17dGhpcy5wcm9wcy5pZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgaGlkZURhdGFWaWV3PXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgey8qIENvbG9yIFNldHRpbmdzICovfVxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZXR0aW5nLXNlY3Rpb24gbWItM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxMYWJlbCBjbGFzc05hbWU9XCJzZXR0aW5nLWxhYmVsIGQtZmxleFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBBcHBlYXJhbmNlIFNldHRpbmdzOlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgey8qIEJ1dHRvbiBDb2xvciAqL31cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbG9yLXNldHRpbmctaXRlbSBkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyIGp1c3RpZnktY29udGVudC1iZXR3ZWVuIG1iLTNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExhYmVsIGNsYXNzTmFtZT1cIm1iLTAgbXItMlwiPkJ1dHRvbiBDb2xvcjo8L0xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDb2xvclBpY2tlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD17MjZ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9ezMwfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPXtidXR0b25Db2xvciB8fCAnIzRDQUY1MCd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJlc2V0Q29sb3JzPXt0aGlzLmNvbG9yUHJlc2V0c31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5vbkJ1dHRvbkNvbG9yQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlbWVudD1cImJvdHRvbVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xvci1wcmV2aWV3IG1sLTJcIiBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAnMjRweCcsIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogJzI0cHgnLCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGJ1dHRvbkNvbG9yIHx8ICcjNENBRjUwJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6ICcxcHggc29saWQgI2RkZCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAnMnB4J1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIHsvKiBDb250YWluZXIgQmFja2dyb3VuZCBDb2xvciAqL31cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbG9yLXNldHRpbmctaXRlbSBkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyIGp1c3RpZnktY29udGVudC1iZXR3ZWVuXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMYWJlbCBjbGFzc05hbWU9XCJtYi0wIG1yLTJcIj5Db250YWluZXIgQmFja2dyb3VuZDo8L0xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDb2xvclBpY2tlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD17MjZ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9ezMwfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPXtjb250YWluZXJCYWNrZ3JvdW5kQ29sb3IgfHwgJyNmNWY1ZjUnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByZXNldENvbG9ycz17dGhpcy5jb2xvclByZXNldHN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMub25Db250YWluZXJCYWNrZ3JvdW5kQ29sb3JDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2VtZW50PVwiYm90dG9tXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbG9yLXByZXZpZXcgbWwtMlwiIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6ICcyNHB4JywgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAnMjRweCcsIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogY29udGFpbmVyQmFja2dyb3VuZENvbG9yIHx8ICcjZjVmNWY1JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6ICcxcHggc29saWQgI2RkZCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAnMnB4J1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBcclxuICBSZWFjdFxyXG59IGZyb20gJ2ppbXUtY29yZSc7XHJcbmltcG9ydCB7IEFsbFdpZGdldFNldHRpbmdQcm9wcyB9IGZyb20gJ2ppbXUtZm9yLWJ1aWxkZXInO1xyXG5pbXBvcnQgeyBMYWJlbCwgQWxlcnQsIEJ1dHRvbiwgSWNvbiB9IGZyb20gJ2ppbXUtdWknO1xyXG5pbXBvcnQgeyBDb2xvclBpY2tlciB9IGZyb20gJ2ppbXUtdWkvYmFzaWMvY29sb3ItcGlja2VyJztcclxuaW1wb3J0IHsgU2V0dGluZ1NlY3Rpb24sIFNldHRpbmdSb3cgfSBmcm9tICdqaW11LXVpL2FkdmFuY2VkL3NldHRpbmctY29tcG9uZW50cyc7XHJcbmltcG9ydCB7IEltbSB9IGZyb20gJy4uL2ltbXV0YWJsZUhlbHBlcic7XHJcblxyXG5pbnRlcmZhY2UgU2V0dGluZ1N0YXRlIHtcclxuICB1cGxvYWRMb2FkaW5nOiBib29sZWFuO1xyXG4gIHVwbG9hZEVycm9yOiBzdHJpbmcgfCBudWxsO1xyXG4gIHVwbG9hZFN1Y2Nlc3M6IGJvb2xlYW47XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNldHRpbmcgZXh0ZW5kcyBSZWFjdC5QdXJlQ29tcG9uZW50PFxyXG4gIEFsbFdpZGdldFNldHRpbmdQcm9wczxhbnk+LFxyXG4gIFNldHRpbmdTdGF0ZVxyXG4+IHtcclxuICBmaWxlSW5wdXQgPSBSZWFjdC5jcmVhdGVSZWY8SFRNTElucHV0RWxlbWVudD4oKTtcclxuICBcclxuICAvLyBDb2xvciBwcmVzZXRzIGZvciB0aGUgYnV0dG9uIGNvbG9yIHBpY2tlclxyXG4gIHByaXZhdGUgY29sb3JQcmVzZXRzID0gW1xyXG4gICAgeyBjb2xvcjogJyM0Q0FGNTAnLCBsYWJlbDogJ0dyZWVuJywgdmFsdWU6ICcjNENBRjUwJyB9LFxyXG4gICAgeyBjb2xvcjogJyMyMTk2RjMnLCBsYWJlbDogJ0JsdWUnLCB2YWx1ZTogJyMyMTk2RjMnIH0sXHJcbiAgICB7IGNvbG9yOiAnI0Y0NDMzNicsIGxhYmVsOiAnUmVkJywgdmFsdWU6ICcjRjQ0MzM2JyB9LFxyXG4gICAgeyBjb2xvcjogJyNGRjk4MDAnLCBsYWJlbDogJ09yYW5nZScsIHZhbHVlOiAnI0ZGOTgwMCcgfSxcclxuICAgIHsgY29sb3I6ICcjOUMyN0IwJywgbGFiZWw6ICdQdXJwbGUnLCB2YWx1ZTogJyM5QzI3QjAnIH0sXHJcbiAgICB7IGNvbG9yOiAnIzc5NTU0OCcsIGxhYmVsOiAnQnJvd24nLCB2YWx1ZTogJyM3OTU1NDgnIH0sXHJcbiAgICB7IGNvbG9yOiAnIzYwN0Q4QicsIGxhYmVsOiAnQmx1ZSBHcmV5JywgdmFsdWU6ICcjNjA3RDhCJyB9LFxyXG4gICAgeyBjb2xvcjogJyMwMEJDRDQnLCBsYWJlbDogJ0N5YW4nLCB2YWx1ZTogJyMwMEJDRDQnIH1cclxuICBdO1xyXG4gIFxyXG4gIGNvbnN0cnVjdG9yKHByb3BzOiBBbGxXaWRnZXRTZXR0aW5nUHJvcHM8YW55Pikge1xyXG4gICAgc3VwZXIocHJvcHMpO1xyXG4gICAgXHJcbiAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICB1cGxvYWRMb2FkaW5nOiBmYWxzZSxcclxuICAgICAgdXBsb2FkRXJyb3I6IG51bGwsXHJcbiAgICAgIHVwbG9hZFN1Y2Nlc3M6IGZhbHNlXHJcbiAgICB9O1xyXG4gIH1cclxuICBcclxuICAvLyBIYW5kbGUgRXhjZWwgdGVtcGxhdGUgZmlsZSB1cGxvYWRcclxuICBoYW5kbGVFeGNlbFRlbXBsYXRlVXBsb2FkID0gKGU6IFJlYWN0LkNoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSA9PiB7XHJcbiAgICBjb25zdCBmaWxlID0gZS50YXJnZXQuZmlsZXM/LlswXTtcclxuICAgIGlmICghZmlsZSkgcmV0dXJuO1xyXG4gICAgXHJcbiAgICAvLyBWYWxpZGF0ZSBmaWxlIHR5cGVcclxuICAgIGlmICghZmlsZS5uYW1lLmVuZHNXaXRoKCcueGxzeCcpICYmICFmaWxlLm5hbWUuZW5kc1dpdGgoJy54bHMnKSkge1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICB1cGxvYWRFcnJvcjogJ1BsZWFzZSBzZWxlY3QgYSB2YWxpZCBFeGNlbCBmaWxlICgueGxzeCBvciAueGxzKScsXHJcbiAgICAgICAgdXBsb2FkU3VjY2VzczogZmFsc2VcclxuICAgICAgfSk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIFxyXG4gICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgIHVwbG9hZExvYWRpbmc6IHRydWUsXHJcbiAgICAgIHVwbG9hZEVycm9yOiBudWxsXHJcbiAgICB9KTtcclxuICAgIFxyXG4gICAgLy8gUmVhZCBmaWxlIGFzIGFycmF5IGJ1ZmZlclxyXG4gICAgY29uc3QgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcclxuICAgIHJlYWRlci5vbmxvYWQgPSAoZXZlbnQpID0+IHtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBhcnJheUJ1ZmZlciA9IGV2ZW50LnRhcmdldD8ucmVzdWx0O1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIENvbnZlcnQgdG8gYmFzZTY0IGZvciBzdG9yYWdlXHJcbiAgICAgICAgY29uc3QgYmFzZTY0ID0gYnRvYShcclxuICAgICAgICAgIG5ldyBVaW50OEFycmF5KGFycmF5QnVmZmVyIGFzIEFycmF5QnVmZmVyKVxyXG4gICAgICAgICAgICAucmVkdWNlKChkYXRhLCBieXRlKSA9PiBkYXRhICsgU3RyaW5nLmZyb21DaGFyQ29kZShieXRlKSwgJycpXHJcbiAgICAgICAgKTtcclxuICAgICAgICBcclxuICAgICAgICAvLyBVcGRhdGUgY29uZmlnXHJcbiAgICAgICAgY29uc3QgbmV3Q29uZmlnID0gdGhpcy5wcm9wcy5jb25maWc/LnNldFxyXG4gICAgICAgICAgPyB0aGlzLnByb3BzLmNvbmZpZy5zZXQoJ2V4Y2VsVGVtcGxhdGUnLCB7XHJcbiAgICAgICAgICAgICAgZGF0YTogYmFzZTY0LFxyXG4gICAgICAgICAgICAgIGZpbGVuYW1lOiBmaWxlLm5hbWUsXHJcbiAgICAgICAgICAgICAgdGltZXN0YW1wOiBEYXRlLm5vdygpXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICA6IEltbSh7XHJcbiAgICAgICAgICAgICAgLi4udGhpcy5wcm9wcy5jb25maWcsXHJcbiAgICAgICAgICAgICAgZXhjZWxUZW1wbGF0ZToge1xyXG4gICAgICAgICAgICAgICAgZGF0YTogYmFzZTY0LFxyXG4gICAgICAgICAgICAgICAgZmlsZW5hbWU6IGZpbGUubmFtZSxcclxuICAgICAgICAgICAgICAgIHRpbWVzdGFtcDogRGF0ZS5ub3coKVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5wcm9wcy5vblNldHRpbmdDaGFuZ2Uoe1xyXG4gICAgICAgICAgaWQ6IHRoaXMucHJvcHMuaWQsXHJcbiAgICAgICAgICBjb25maWc6IG5ld0NvbmZpZ1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgdXBsb2FkTG9hZGluZzogZmFsc2UsXHJcbiAgICAgICAgICB1cGxvYWRTdWNjZXNzOiB0cnVlXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gQ2xlYXIgc3VjY2VzcyBtZXNzYWdlIGFmdGVyIGEgZmV3IHNlY29uZHNcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyB1cGxvYWRTdWNjZXNzOiBmYWxzZSB9KTtcclxuICAgICAgICB9LCAzMDAwKTtcclxuXHJcbiAgICAgICAgLy8gQ2xlYXIgdGhlIGZpbGUgaW5wdXQgc28gdGhlIHNhbWUgZmlsZSBjYW4gYmUgdXBsb2FkZWQgYWdhaW4gaWYgbmVlZGVkXHJcbiAgICAgICAgaWYgKHRoaXMuZmlsZUlucHV0LmN1cnJlbnQpIHtcclxuICAgICAgICAgIHRoaXMuZmlsZUlucHV0LmN1cnJlbnQudmFsdWUgPSAnJztcclxuICAgICAgICB9XHJcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgcHJvY2Vzc2luZyBFeGNlbCBmaWxlOicsIGVycm9yKTtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgIHVwbG9hZExvYWRpbmc6IGZhbHNlLFxyXG4gICAgICAgICAgdXBsb2FkRXJyb3I6IGBGYWlsZWQgdG8gcHJvY2VzcyB0aGUgRXhjZWwgZmlsZTogJHtlcnJvciBpbnN0YW5jZW9mIEVycm9yID8gZXJyb3IubWVzc2FnZSA6ICdVbmtub3duIGVycm9yJ31gLFxyXG4gICAgICAgICAgdXBsb2FkU3VjY2VzczogZmFsc2VcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuICAgIFxyXG4gICAgcmVhZGVyLm9uZXJyb3IgPSAoKSA9PiB7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgIHVwbG9hZExvYWRpbmc6IGZhbHNlLFxyXG4gICAgICAgIHVwbG9hZEVycm9yOiAnRmFpbGVkIHRvIHJlYWQgdGhlIGZpbGUnLFxyXG4gICAgICAgIHVwbG9hZFN1Y2Nlc3M6IGZhbHNlXHJcbiAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIFxyXG4gICAgcmVhZGVyLnJlYWRBc0FycmF5QnVmZmVyKGZpbGUpO1xyXG4gIH1cclxuICBcclxuICAvLyBEZWxldGUgRXhjZWwgdGVtcGxhdGVcclxuICBkZWxldGVFeGNlbFRlbXBsYXRlID0gKCkgPT4ge1xyXG4gICAgaWYgKHRoaXMucHJvcHMuY29uZmlnKSB7XHJcbiAgICAgIGNvbnN0IG5ld0NvbmZpZyA9IHRoaXMucHJvcHMuY29uZmlnLnNldFxyXG4gICAgICAgID8gdGhpcy5wcm9wcy5jb25maWcuc2V0KCdleGNlbFRlbXBsYXRlJywgbnVsbClcclxuICAgICAgICA6IEltbSh7XHJcbiAgICAgICAgICAgIC4uLnRoaXMucHJvcHMuY29uZmlnLFxyXG4gICAgICAgICAgICBleGNlbFRlbXBsYXRlOiBudWxsXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICAgIFxyXG4gICAgICB0aGlzLnByb3BzLm9uU2V0dGluZ0NoYW5nZSh7XHJcbiAgICAgICAgaWQ6IHRoaXMucHJvcHMuaWQsXHJcbiAgICAgICAgY29uZmlnOiBuZXdDb25maWdcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIC8vIEhhbmRsZSBidXR0b24gY29sb3IgY2hhbmdlXHJcbiAgaGFuZGxlQnV0dG9uQ29sb3JDaGFuZ2UgPSAoY29sb3I6IHN0cmluZykgPT4ge1xyXG4gICAgaWYgKHRoaXMucHJvcHMuY29uZmlnKSB7XHJcbiAgICAgIGNvbnN0IG5ld0NvbmZpZyA9IHRoaXMucHJvcHMuY29uZmlnLnNldFxyXG4gICAgICAgID8gdGhpcy5wcm9wcy5jb25maWcuc2V0KCdidXR0b25Db2xvcicsIGNvbG9yKVxyXG4gICAgICAgIDogSW1tKHtcclxuICAgICAgICAgICAgLi4udGhpcy5wcm9wcy5jb25maWcsXHJcbiAgICAgICAgICAgIGJ1dHRvbkNvbG9yOiBjb2xvclxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgICBcclxuICAgICAgdGhpcy5wcm9wcy5vblNldHRpbmdDaGFuZ2Uoe1xyXG4gICAgICAgIGlkOiB0aGlzLnByb3BzLmlkLFxyXG4gICAgICAgIGNvbmZpZzogbmV3Q29uZmlnXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICByZW5kZXIoKSB7XHJcbiAgICBjb25zdCB7IHVwbG9hZExvYWRpbmcsIHVwbG9hZEVycm9yLCB1cGxvYWRTdWNjZXNzIH0gPSB0aGlzLnN0YXRlO1xyXG4gICAgXHJcbiAgICAvLyBHZXQgdGVtcGxhdGUgaW5mbyBmcm9tIGNvbmZpZ1xyXG4gICAgY29uc3QgZXhjZWxUZW1wbGF0ZSA9IHRoaXMucHJvcHMuY29uZmlnPy5leGNlbFRlbXBsYXRlO1xyXG4gICAgY29uc3QgYnV0dG9uQ29sb3IgPSB0aGlzLnByb3BzLmNvbmZpZz8uYnV0dG9uQ29sb3IgfHwgJyM0Q0FGNTAnO1xyXG4gICAgXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIndpZGdldC1zZXR0aW5nLWNvbnRhaW5lciBwLTJcIj5cclxuICAgICAgICB7LyogRXhjZWwgVGVtcGxhdGUgVXBsb2FkIFNlY3Rpb24gKi99XHJcbiAgICAgICAgPFNldHRpbmdTZWN0aW9uIHRpdGxlPVwiRXhjZWwgVGVtcGxhdGVcIj5cclxuICAgICAgICAgIDxTZXR0aW5nUm93PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctMTAwXCI+XHJcbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwic2V0dGluZy1ub3RlIHRleHQtbXV0ZWRcIj5cclxuICAgICAgICAgICAgICAgIFVwbG9hZCBhbiBFeGNlbCB0ZW1wbGF0ZSBmaWxlIHRvIGV4cG9ydC4gVGhlIHRlbXBsYXRlIHdpbGwgYmUgZXhwb3J0ZWQgYXMgaXMuXHJcbiAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgIHsvKiBUZW1wbGF0ZSBmaWxlIHVwbG9hZGVyICovfVxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IG10LTIgYWxpZ24taXRlbXMtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgXHJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJmaWxlXCJcclxuICAgICAgICAgICAgICAgICAgYWNjZXB0PVwiLnhsc3gsLnhsc1wiXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbCBmbGV4LWdyb3ctMVwiXHJcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUV4Y2VsVGVtcGxhdGVVcGxvYWR9XHJcbiAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXt1cGxvYWRMb2FkaW5nfVxyXG4gICAgICAgICAgICAgICAgICByZWY9e3RoaXMuZmlsZUlucHV0fVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICB7LyogU2hvdyBjdXJyZW50IHRlbXBsYXRlIGlmIGV4aXN0cyAqL31cclxuICAgICAgICAgICAgICB7ZXhjZWxUZW1wbGF0ZSAmJiAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTIgZC1mbGV4IGp1c3RpZnktY29udGVudC1iZXR3ZWVuIGFsaWduLWl0ZW1zLWNlbnRlciBwLTIgYm9yZGVyIHJvdW5kZWRcIj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPEljb24gaWNvbj1cImZpbGVUeXBlRXhjZWxcIiBzaXplPXsxNn0gY29sb3I9XCIjMjE3MzQ2XCIgY2xhc3NOYW1lPVwibXItMlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+e2V4Y2VsVGVtcGxhdGUuZmlsZW5hbWV9PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm1sLTIgdGV4dC1tdXRlZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgKHVwbG9hZGVkIG9uIHtuZXcgRGF0ZShleGNlbFRlbXBsYXRlLnRpbWVzdGFtcCkudG9Mb2NhbGVEYXRlU3RyaW5nKCl9KVxyXG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cInNtXCJcclxuICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJkYW5nZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgaWNvblxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5kZWxldGVFeGNlbFRlbXBsYXRlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibXItMlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICB0aXRsZT1cIkRlbGV0ZSB0ZW1wbGF0ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPEljb24gaWNvbj1cInRyYXNoXCIgc2l6ZT17MTJ9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICB7LyogVXBsb2FkIHN0YXR1cyBtZXNzYWdlcyAqL31cclxuICAgICAgICAgICAgICB7dXBsb2FkTG9hZGluZyAmJiAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTIgdGV4dC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcGlubmVyLWJvcmRlciBzcGlubmVyLWJvcmRlci1zbSB0ZXh0LXByaW1hcnlcIiByb2xlPVwic3RhdHVzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic3Itb25seVwiPkxvYWRpbmcuLi48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJtbC0yXCI+VXBsb2FkaW5nIHRlbXBsYXRlLi4uPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICB7dXBsb2FkRXJyb3IgJiYgKFxyXG4gICAgICAgICAgICAgICAgPEFsZXJ0IFxyXG4gICAgICAgICAgICAgICAgICB0eXBlPVwiZXJyb3JcIiBcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibXQtMlwiXHJcbiAgICAgICAgICAgICAgICAgIHdpdGhJY29uXHJcbiAgICAgICAgICAgICAgICAgIGNsb3NhYmxlXHJcbiAgICAgICAgICAgICAgICAgIG9uQ2xvc2U9eygpID0+IHRoaXMuc2V0U3RhdGUoeyB1cGxvYWRFcnJvcjogbnVsbCB9KX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAge3VwbG9hZEVycm9yfVxyXG4gICAgICAgICAgICAgICAgPC9BbGVydD5cclxuICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgIHt1cGxvYWRTdWNjZXNzICYmIChcclxuICAgICAgICAgICAgICAgIDxBbGVydCBcclxuICAgICAgICAgICAgICAgICAgdHlwZT1cInN1Y2Nlc3NcIiBcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibXQtMlwiXHJcbiAgICAgICAgICAgICAgICAgIHdpdGhJY29uXHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIFRlbXBsYXRlIHVwbG9hZGVkIHN1Y2Nlc3NmdWxseSFcclxuICAgICAgICAgICAgICAgIDwvQWxlcnQ+XHJcbiAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L1NldHRpbmdSb3c+XHJcbiAgICAgICAgPC9TZXR0aW5nU2VjdGlvbj5cclxuICAgICAgICBcclxuICAgICAgICB7LyogQnV0dG9uIENvbG9yIFNlY3Rpb24gKi99XHJcbiAgICAgICAgPFNldHRpbmdTZWN0aW9uIHRpdGxlPVwiQXBwZWFyYW5jZVwiPlxyXG4gICAgICAgICAgPFNldHRpbmdSb3cgbGFiZWw9XCJCdXR0b24gQ29sb3I6XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgIDxDb2xvclBpY2tlclxyXG4gICAgICAgICAgICAgICAgaGVpZ2h0PXsyNn1cclxuICAgICAgICAgICAgICAgIHdpZHRoPXszMH1cclxuICAgICAgICAgICAgICAgIGNvbG9yPXtidXR0b25Db2xvcn1cclxuICAgICAgICAgICAgICAgIHByZXNldENvbG9ycz17dGhpcy5jb2xvclByZXNldHN9XHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVCdXR0b25Db2xvckNoYW5nZX1cclxuICAgICAgICAgICAgICAgIHBsYWNlbWVudD1cImJvdHRvbVwiXHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1sLTJcIiBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6ICcyNHB4JywgXHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6ICcyNHB4JywgXHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGJ1dHRvbkNvbG9yLFxyXG4gICAgICAgICAgICAgICAgYm9yZGVyOiAnMXB4IHNvbGlkICNkZGQnLFxyXG4gICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAnMnB4J1xyXG4gICAgICAgICAgICAgIH19PjwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvU2V0dGluZ1Jvdz5cclxuICAgICAgICA8L1NldHRpbmdTZWN0aW9uPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG59IiwiaW1wb3J0IHsgXHJcbiAgICBSZWFjdCwgXHJcbiAgICBEYXRhU291cmNlVHlwZXMsIFxyXG4gICAgVXNlRGF0YVNvdXJjZSxcclxuICAgIElNVXNlRGF0YVNvdXJjZSxcclxuICAgIGdldEFwcFN0b3JlLFxyXG4gICAgRGF0YVNvdXJjZSxcclxuICAgIElNRmllbGRTY2hlbWEsXHJcbiAgICBJbW11dGFibGVPYmplY3QsXHJcbiAgICBKaW11RmllbGRUeXBlXHJcbn0gZnJvbSAnamltdS1jb3JlJztcclxuaW1wb3J0IHsgQWxsV2lkZ2V0U2V0dGluZ1Byb3BzIH0gZnJvbSAnamltdS1mb3ItYnVpbGRlcic7XHJcbmltcG9ydCB7IERhdGFTb3VyY2VTZWxlY3RvciwgRmllbGRTZWxlY3RvciB9IGZyb20gJ2ppbXUtdWkvYWR2YW5jZWQvZGF0YS1zb3VyY2Utc2VsZWN0b3InO1xyXG5pbXBvcnQgeyBNYXBXaWRnZXRTZWxlY3RvciB9IGZyb20gJ2ppbXUtdWkvYWR2YW5jZWQvc2V0dGluZy1jb21wb25lbnRzJztcclxuaW1wb3J0IHsgRGF0YVNvdXJjZU1hbmFnZXIgfSBmcm9tICdqaW11LWNvcmUnO1xyXG5pbXBvcnQgeyBMYWJlbCwgQ2hlY2tib3gsIEFsZXJ0LCBTd2l0Y2gsIFRleHRJbnB1dCwgVG9vbHRpcCB9IGZyb20gJ2ppbXUtdWknO1xyXG5pbXBvcnQgeyBDb2xvclBpY2tlciB9IGZyb20gJ2ppbXUtdWkvYmFzaWMvY29sb3ItcGlja2VyJztcclxuaW1wb3J0IHsgSW1tIH0gZnJvbSAnLi4vaW1tdXRhYmxlSGVscGVyJztcclxuXHJcbmludGVyZmFjZSBTZXR0aW5nU3RhdGUge1xyXG4gICAgZHNzOiBEYXRhU291cmNlW10gfCBudWxsO1xyXG4gICAgZmlsdGVyRmllbGRzOiBJbW11dGFibGVPYmplY3Q8eyBbZGF0YVNvdXJjZUlkOiBzdHJpbmddOiBzdHJpbmdbXSB9PiB8IG51bGw7XHJcbiAgICBhcmVhRmllbGQ6IHN0cmluZztcclxuICAgIHNob3dBZHZhbmNlZE9wdGlvbnM6IGJvb2xlYW47XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNldHRpbmcgZXh0ZW5kcyBSZWFjdC5QdXJlQ29tcG9uZW50PFxyXG4gICAgQWxsV2lkZ2V0U2V0dGluZ1Byb3BzPGFueT4sXHJcbiAgICBTZXR0aW5nU3RhdGVcclxuPiB7XHJcbiAgICBzdXBwb3J0ZWRUeXBlcyA9IEltbShbRGF0YVNvdXJjZVR5cGVzLkZlYXR1cmVMYXllcl0pO1xyXG4gICAgZHNNYW5hZ2VyID0gRGF0YVNvdXJjZU1hbmFnZXIuZ2V0SW5zdGFuY2UoKTtcclxuICAgIFxyXG4gICAgLy8gQ29sb3IgcHJlc2V0cyBmb3IgdGhlIGNvbG9yIHBpY2tlcnNcclxuICAgIGNvbG9yUHJlc2V0cyA9IFtcclxuICAgICAgICB7IGNvbG9yOiAnIzRDQUY1MCcsIGxhYmVsOiAnR3JlZW4nLCB2YWx1ZTogJyM0Q0FGNTAnIH0sXHJcbiAgICAgICAgeyBjb2xvcjogJyMyMTk2RjMnLCBsYWJlbDogJ0JsdWUnLCB2YWx1ZTogJyMyMTk2RjMnIH0sXHJcbiAgICAgICAgeyBjb2xvcjogJyNGNDQzMzYnLCBsYWJlbDogJ1JlZCcsIHZhbHVlOiAnI0Y0NDMzNicgfSxcclxuICAgICAgICB7IGNvbG9yOiAnI0ZGQzEwNycsIGxhYmVsOiAnQW1iZXInLCB2YWx1ZTogJyNGRkMxMDcnIH0sXHJcbiAgICAgICAgeyBjb2xvcjogJyM5QzI3QjAnLCBsYWJlbDogJ1B1cnBsZScsIHZhbHVlOiAnIzlDMjdCMCcgfSxcclxuICAgICAgICB7IGNvbG9yOiAnI0ZGOTgwMCcsIGxhYmVsOiAnT3JhbmdlJywgdmFsdWU6ICcjRkY5ODAwJyB9LFxyXG4gICAgICAgIHsgY29sb3I6ICcjNzk1NTQ4JywgbGFiZWw6ICdCcm93bicsIHZhbHVlOiAnIzc5NTU0OCcgfSxcclxuICAgICAgICB7IGNvbG9yOiAnIzYwN0Q4QicsIGxhYmVsOiAnQmx1ZSBHcmV5JywgdmFsdWU6ICcjNjA3RDhCJyB9XHJcbiAgICBdO1xyXG4gICAgXHJcbiAgICAvLyBCYWNrZ3JvdW5kIGNvbG9yIHByZXNldHNcclxuICAgIGJnQ29sb3JQcmVzZXRzID0gW1xyXG4gICAgICAgIHsgY29sb3I6ICcjRkZGRkZGJywgbGFiZWw6ICdXaGl0ZScsIHZhbHVlOiAnI0ZGRkZGRicgfSxcclxuICAgICAgICB7IGNvbG9yOiAnI0Y1RjVGNScsIGxhYmVsOiAnTGlnaHQgR3JleScsIHZhbHVlOiAnI0Y1RjVGNScgfSxcclxuICAgICAgICB7IGNvbG9yOiAnI0VFRUVFRScsIGxhYmVsOiAnR3JleScsIHZhbHVlOiAnI0VFRUVFRScgfSxcclxuICAgICAgICB7IGNvbG9yOiAnIzJCMkIyQicsIGxhYmVsOiAnRGFyaycsIHZhbHVlOiAnIzJCMkIyQicgfSxcclxuICAgICAgICB7IGNvbG9yOiAnI0UzRjJGRCcsIGxhYmVsOiAnTGlnaHQgQmx1ZScsIHZhbHVlOiAnI0UzRjJGRCcgfSxcclxuICAgICAgICB7IGNvbG9yOiAnI0U4RjVFOScsIGxhYmVsOiAnTGlnaHQgR3JlZW4nLCB2YWx1ZTogJyNFOEY1RTknIH0sXHJcbiAgICAgICAgeyBjb2xvcjogJyNGRkY4RTEnLCBsYWJlbDogJ0xpZ2h0IEFtYmVyJywgdmFsdWU6ICcjRkZGOEUxJyB9LFxyXG4gICAgICAgIHsgY29sb3I6ICdyZ2JhKDAsMCwwLDApJywgbGFiZWw6ICdUcmFuc3BhcmVudCcsIHZhbHVlOiAncmdiYSgwLDAsMCwwKScgfVxyXG4gICAgXTtcclxuICAgIFxyXG4gICAgY29uc3RydWN0b3IocHJvcHM6IEFsbFdpZGdldFNldHRpbmdQcm9wczxhbnk+KSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIEluaXRpYWxpemUgc3RhdGUgZnJvbSBjb25maWdcclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICBkc3M6IG51bGwsXHJcbiAgICAgICAgICAgIGZpbHRlckZpZWxkczogdGhpcy5wcm9wcy5jb25maWc/LmZpbHRlckZpZWxkcyB8fCBudWxsLFxyXG4gICAgICAgICAgICBhcmVhRmllbGQ6IHRoaXMucHJvcHMuY29uZmlnPy5hcmVhRmllbGQgfHwgJ21heWRvbicsXHJcbiAgICAgICAgICAgIHNob3dBZHZhbmNlZE9wdGlvbnM6IGZhbHNlXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuICAgIFxyXG4gICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgICAgY29uc3Qgd2FpdEZvckFwcENvbmZpZyA9ICgpID0+IHtcclxuICAgICAgICBjb25zdCBzdGF0ZSA9IGdldEFwcFN0b3JlKCkuZ2V0U3RhdGUoKTtcclxuICAgICAgICBjb25zdCB3aWRnZXRzID0gc3RhdGU/LmFwcENvbmZpZz8ud2lkZ2V0cztcclxuICAgICAgICBpZiAod2lkZ2V0cyAmJiBPYmplY3Qua2V5cyh3aWRnZXRzKS5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICB0aGlzLmF1dG9EZXRlY3RNYXBXaWRnZXQoKTtcclxuICAgICAgICAgIHRoaXMuaW5pdGlhbGl6ZURhdGFTb3VyY2VzKCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHNldFRpbWVvdXQod2FpdEZvckFwcENvbmZpZywgMjAwKTsgLy8gV2FpdCBhbmQgcmV0cnlcclxuICAgICAgICB9XHJcbiAgICAgIH07XHJcblxyXG4gICAgICB3YWl0Rm9yQXBwQ29uZmlnKCk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHM6IEFsbFdpZGdldFNldHRpbmdQcm9wczxhbnk+KSB7XHJcbiAgICAgIGlmIChcclxuICAgICAgICB0aGlzLnByb3BzLnVzZURhdGFTb3VyY2VzICYmXHJcbiAgICAgICAgdGhpcy5wcm9wcy51c2VEYXRhU291cmNlcyAhPT0gcHJldlByb3BzLnVzZURhdGFTb3VyY2VzXHJcbiAgICAgICkge1xyXG4gICAgICAgIHRoaXMuaW5pdGlhbGl6ZURhdGFTb3VyY2VzKCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XHJcbiAgICAgICAgdGhpcy5jbGVhbnVwRGF0YVNvdXJjZXMoKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLy8gQXV0by1kZXRlY3QgbWFwIHdpZGdldCBpZiBub3QgYWxyZWFkeSBzZXRcclxuICAgIGF1dG9EZXRlY3RNYXBXaWRnZXQgPSAoKSA9PiB7XHJcbiAgICAgICAgaWYgKCF0aGlzLnByb3BzLnVzZU1hcFdpZGdldElkcyB8fCB0aGlzLnByb3BzLnVzZU1hcFdpZGdldElkcy5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgY29uc3Qgc3RhdGUgPSBnZXRBcHBTdG9yZSgpLmdldFN0YXRlKCk7XHJcbiAgICAgICAgICAgIGNvbnN0IG1hcFdpZGdldHMgPSBzdGF0ZS5hcHBDb25maWcud2lkZ2V0cztcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGNvbnN0IG1hcFdpZGdldElkID0gT2JqZWN0LmtleXMobWFwV2lkZ2V0cykuZmluZCh3aWQgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgd2lkZ2V0ID0gbWFwV2lkZ2V0c1t3aWRdO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHdpZGdldC5tYW5pZmVzdCAmJiB3aWRnZXQubWFuaWZlc3QubmFtZSA9PT0gJ21hcCc7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIFxyXG4gICAgICAgICAgICBpZiAobWFwV2lkZ2V0SWQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucHJvcHMub25TZXR0aW5nQ2hhbmdlKHtcclxuICAgICAgICAgICAgICAgICAgICBpZDogdGhpcy5wcm9wcy5pZCxcclxuICAgICAgICAgICAgICAgICAgICB1c2VNYXBXaWRnZXRJZHM6IFttYXBXaWRnZXRJZF1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICAvLyBJbml0aWFsaXplIGRhdGEgc291cmNlcyBmcm9tIGNvbmZpZ1xyXG4gICAgaW5pdGlhbGl6ZURhdGFTb3VyY2VzID0gKCkgPT4ge1xyXG4gICAgICAgIGlmICh0aGlzLnByb3BzLnVzZURhdGFTb3VyY2VzICYmIHRoaXMucHJvcHMudXNlRGF0YVNvdXJjZXMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICB0aGlzLmNyZWF0ZURhdGFTb3VyY2VzKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICAvLyBDbGVhbiB1cCBkYXRhIHNvdXJjZXMgd2hlbiBjb21wb25lbnQgdW5tb3VudHNcclxuICAgIGNsZWFudXBEYXRhU291cmNlcyA9ICgpID0+IHtcclxuICAgICAgICBpZiAodGhpcy5wcm9wcy51c2VEYXRhU291cmNlcykge1xyXG4gICAgICAgICAgICB0aGlzLnByb3BzLnVzZURhdGFTb3VyY2VzLmZvckVhY2godXNlRHMgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHVzZURzICYmIHVzZURzLmRhdGFTb3VyY2VJZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZHNNYW5hZ2VyLmRlc3Ryb3lEYXRhU291cmNlKHVzZURzLmRhdGFTb3VyY2VJZCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgY3JlYXRlRGF0YVNvdXJjZXMgPSBhc3luYyAoY3VzdG9tVXNlRGF0YVNvdXJjZXM/OiBJTVVzZURhdGFTb3VyY2VbXSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHVzZURhdGFTb3VyY2VzVG9Vc2UgPSBjdXN0b21Vc2VEYXRhU291cmNlcyB8fCB0aGlzLnByb3BzLnVzZURhdGFTb3VyY2VzO1xyXG4gICAgICAgIGlmICghdXNlRGF0YVNvdXJjZXNUb1VzZSB8fCB1c2VEYXRhU291cmNlc1RvVXNlLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgZHNzOiBudWxsIH0pO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgXHJcbiAgICAgICAgY29uc3QgZGF0YVNvdXJjZXM6IERhdGFTb3VyY2VbXSA9IFtdO1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIEVuc3VyZSBleGlzdGluZ0ZpbHRlckZpZWxkcyBpcyBhbiBJbW11dGFibGUgb2JqZWN0XHJcbiAgICAgICAgbGV0IGV4aXN0aW5nRmlsdGVyRmllbGRzO1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIENoZWNrIGlmIHByb3BzLmNvbmZpZyBleGlzdHMgYW5kIGhhcyBmaWx0ZXJGaWVsZHNcclxuICAgICAgICBpZiAodGhpcy5wcm9wcy5jb25maWcgJiYgdGhpcy5wcm9wcy5jb25maWcuZmlsdGVyRmllbGRzKSB7XHJcbiAgICAgICAgICAgIC8vIENoZWNrIGlmIGl0J3MgYWxyZWFkeSBhbiBJbW11dGFibGUgb2JqZWN0XHJcbiAgICAgICAgICAgIGlmICh0eXBlb2YgdGhpcy5wcm9wcy5jb25maWcuZmlsdGVyRmllbGRzLmdldCA9PT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICAgICAgICAgICAgZXhpc3RpbmdGaWx0ZXJGaWVsZHMgPSB0aGlzLnByb3BzLmNvbmZpZy5maWx0ZXJGaWVsZHM7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAvLyBDb252ZXJ0IHRvIEltbXV0YWJsZSBpZiBpdCdzIGEgcmVndWxhciBvYmplY3RcclxuICAgICAgICAgICAgICAgIGV4aXN0aW5nRmlsdGVyRmllbGRzID0gSW1tKHRoaXMucHJvcHMuY29uZmlnLmZpbHRlckZpZWxkcyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAvLyBDcmVhdGUgYSBuZXcgZW1wdHkgSW1tdXRhYmxlIG9iamVjdFxyXG4gICAgICAgICAgICBleGlzdGluZ0ZpbHRlckZpZWxkcyA9IEltbSh7fSBhcyB7IFtkYXRhU291cmNlSWQ6IHN0cmluZ106IHN0cmluZ1tdIH0pO1xyXG4gICAgICAgIH1cclxuICAgIFxyXG4gICAgICAgIC8vIFByb2Nlc3MgZWFjaCBkYXRhIHNvdXJjZVxyXG4gICAgICAgIGZvciAobGV0IHVzZURzIG9mIHVzZURhdGFTb3VyY2VzVG9Vc2UpIHtcclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGRzID0gYXdhaXQgdGhpcy5kc01hbmFnZXIuY3JlYXRlRGF0YVNvdXJjZUJ5VXNlRGF0YVNvdXJjZSh1c2VEcyBhcyBJTVVzZURhdGFTb3VyY2UpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGRzICYmIGRzLmdldFNjaGVtYSgpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZmllbGRzID0gZHMuZ2V0U2NoZW1hKCkuZmllbGRzO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGZpZWxkTmFtZXMgPSBPYmplY3Qua2V5cyhmaWVsZHMpO1xyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIC8vIFNhZmVseSBjaGVjayBpZiB0aGlzIGRhdGEgc291cmNlIGhhcyBmaWx0ZXIgZmllbGRzXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZHNJZCA9IGRzLmlkO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGhhc0ZpbHRlckZpZWxkcyA9IGV4aXN0aW5nRmlsdGVyRmllbGRzLmdldCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPyBleGlzdGluZ0ZpbHRlckZpZWxkcy5nZXQoZHNJZCkgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDogZXhpc3RpbmdGaWx0ZXJGaWVsZHNbZHNJZF07XHJcbiAgICBcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIWhhc0ZpbHRlckZpZWxkcykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBkZWZhdWx0RmlsdGVyRmllbGRzID0gdGhpcy5nZXREZWZhdWx0RmlsdGVyRmllbGRzKGZpZWxkTmFtZXMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZGVmYXVsdEZpbHRlckZpZWxkcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBleGlzdGluZ0ZpbHRlckZpZWxkcyA9IGV4aXN0aW5nRmlsdGVyRmllbGRzLnNldChkc0lkLCBkZWZhdWx0RmlsdGVyRmllbGRzKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlQ29uZmlnRmllbGRzKCdmaWx0ZXJGaWVsZHMnLCBleGlzdGluZ0ZpbHRlckZpZWxkcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YVNvdXJjZXMucHVzaChkcyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgY3JlYXRpbmcgZGF0YSBzb3VyY2U6JywgZXJyKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIFxyXG4gICAgICAgIGlmIChkYXRhU291cmNlcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBcclxuICAgICAgICAgICAgICAgIGRzczogZGF0YVNvdXJjZXMsXHJcbiAgICAgICAgICAgICAgICBmaWx0ZXJGaWVsZHM6IGV4aXN0aW5nRmlsdGVyRmllbGRzXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBcclxuICAgIC8vIEdldCBkZWZhdWx0IGZpbHRlciBmaWVsZHMgYmFzZWQgb24gYXZhaWxhYmxlIGZpZWxkc1xyXG4gICAgZ2V0RGVmYXVsdEZpbHRlckZpZWxkcyA9IChmaWVsZE5hbWVzOiBzdHJpbmdbXSk6IHN0cmluZ1tdID0+IHtcclxuICAgICAgICAvLyBMb29rIGZvciBjb21tb24gZmlsdGVyIGZpZWxkcyBpbiB0aGUgZGF0YVxyXG4gICAgICAgIGNvbnN0IGRlZmF1bHRGaWVsZHMgPSBmaWVsZE5hbWVzLmZpbHRlcihmID0+XHJcbiAgICAgICAgICAgIFsndmlsb3lhdCcsICd0dW1hbiddLmluY2x1ZGVzKGYudG9Mb3dlckNhc2UoKSlcclxuICAgICAgICApO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGlmIChkZWZhdWx0RmllbGRzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgcmV0dXJuIGRlZmF1bHRGaWVsZHM7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIElmIG5vIGNvbW1vbiBmaWx0ZXIgZmllbGRzIGZvdW5kLCBsb29rIGZvciBzdHJpbmcvdGV4dCBmaWVsZHMgdGhhdCBtaWdodCBiZSBjYXRlZ29yaWNhbFxyXG4gICAgICAgIGNvbnN0IHN0cmluZ0ZpZWxkcyA9IGZpZWxkTmFtZXMuZmlsdGVyKGZpZWxkID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIGZpZWxkLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoJ25hbWUnKSB8fCBcclxuICAgICAgICAgICAgICAgICAgIGZpZWxkLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoJ3R5cGUnKSB8fFxyXG4gICAgICAgICAgICAgICAgICAgZmllbGQudG9Mb3dlckNhc2UoKS5pbmNsdWRlcygnY2F0ZWdvcnknKSB8fFxyXG4gICAgICAgICAgICAgICAgICAgZmllbGQudG9Mb3dlckNhc2UoKS5pbmNsdWRlcygncmVnaW9uJykgfHxcclxuICAgICAgICAgICAgICAgICAgIGZpZWxkLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoJ2Rpc3RyaWN0JykgfHxcclxuICAgICAgICAgICAgICAgICAgIGZpZWxkLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoJ2FyZWEnKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBcclxuICAgICAgICBpZiAoc3RyaW5nRmllbGRzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgcmV0dXJuIHN0cmluZ0ZpZWxkcy5zbGljZSgwLCAyKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gUmV0dXJuIGZpcnN0IDIgZmllbGRzIGFzIGEgbGFzdCByZXNvcnRcclxuICAgICAgICByZXR1cm4gZmllbGROYW1lcy5zbGljZSgwLCAyKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLy8gVXBkYXRlIGNvbmZpZyB3aXRoIG5ldyBmaWVsZCBzZXR0aW5nc1xyXG4gICAgdXBkYXRlQ29uZmlnRmllbGRzID0gKGNvbmZpZ0tleTogc3RyaW5nLCBmaWVsZHM6IEltbXV0YWJsZU9iamVjdDx7IFtkYXRhU291cmNlSWQ6IHN0cmluZ106IHN0cmluZ1tdIH0+KSA9PiB7XHJcbiAgICAgICAgaWYgKHRoaXMucHJvcHMuY29uZmlnKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IG5ld0NvbmZpZyA9IHRoaXMucHJvcHMuY29uZmlnLnNldFxyXG4gICAgICAgICAgICAgICAgPyB0aGlzLnByb3BzLmNvbmZpZy5zZXQoY29uZmlnS2V5LCBmaWVsZHMpXHJcbiAgICAgICAgICAgICAgICA6IEltbSh7XHJcbiAgICAgICAgICAgICAgICAgICAgLi4udGhpcy5wcm9wcy5jb25maWcsXHJcbiAgICAgICAgICAgICAgICAgICAgW2NvbmZpZ0tleV06IGZpZWxkc1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgdGhpcy5wcm9wcy5vblNldHRpbmdDaGFuZ2Uoe1xyXG4gICAgICAgICAgICAgICAgaWQ6IHRoaXMucHJvcHMuaWQsXHJcbiAgICAgICAgICAgICAgICBjb25maWc6IG5ld0NvbmZpZ1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC8vIEhhbmRsZSBkYXRhIHNvdXJjZSBzZWxlY3Rpb24gY2hhbmdlXHJcbiAgICBvbkRhdGFTb3VyY2VDaGFuZ2UgPSAodXNlRGF0YVNvdXJjZXM6IFVzZURhdGFTb3VyY2VbXSkgPT4ge1xyXG4gICAgICAgIHRoaXMucHJvcHMub25TZXR0aW5nQ2hhbmdlKHtcclxuICAgICAgICAgICAgaWQ6IHRoaXMucHJvcHMuaWQsXHJcbiAgICAgICAgICAgIHVzZURhdGFTb3VyY2VzOiB1c2VEYXRhU291cmNlc1xyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIFxyXG4gICAgLy8gSGFuZGxlIG1hcCB3aWRnZXQgc2VsZWN0aW9uIGNoYW5nZVxyXG4gICAgb25NYXBXaWRnZXRTZWxlY3RlZCA9IGFzeW5jIChzZWxlY3RlZElkczogc3RyaW5nW10pID0+IHtcclxuICAgICAgICB0aGlzLnByb3BzLm9uU2V0dGluZ0NoYW5nZSh7XHJcbiAgICAgICAgICAgIGlkOiB0aGlzLnByb3BzLmlkLFxyXG4gICAgICAgICAgICB1c2VNYXBXaWRnZXRJZHM6IHNlbGVjdGVkSWRzXHJcbiAgICAgICAgfSk7XHJcbiAgICBcclxuICAgICAgICBhd2FpdCB0aGlzLmF1dG9EZXRlY3REYXRhU291cmNlc0Zyb21NYXAoc2VsZWN0ZWRJZHMpO1xyXG4gICAgfTtcclxuXHJcbiAgICAvLyBBdXRvLWRldGVjdCBkYXRhIHNvdXJjZXMgZnJvbSBzZWxlY3RlZCBtYXBcclxuICAgIGF1dG9EZXRlY3REYXRhU291cmNlc0Zyb21NYXAgPSBhc3luYyAoc2VsZWN0ZWRNYXBJZHM6IHN0cmluZ1tdKSA9PiB7XHJcbiAgICAgICAgaWYgKHNlbGVjdGVkTWFwSWRzLmxlbmd0aCA9PT0gMCkgcmV0dXJuO1xyXG5cclxuICAgICAgICBjb25zdCBzdGF0ZSA9IGdldEFwcFN0b3JlKCkuZ2V0U3RhdGUoKTtcclxuICAgICAgICBjb25zdCBtYXBJZCA9IHNlbGVjdGVkTWFwSWRzWzBdO1xyXG4gICAgICAgIGNvbnN0IHdpZGdldCA9IHN0YXRlLmFwcENvbmZpZy53aWRnZXRzW21hcElkXTtcclxuICAgIFxyXG4gICAgICAgIC8vIExvb2sgZm9yIGZlYXR1cmUgbGF5ZXIgZGF0YSBzb3VyY2VzIGluIHRoZSBtYXBcclxuICAgICAgICBpZiAod2lkZ2V0ICYmIHdpZGdldC51c2VEYXRhU291cmNlcykge1xyXG4gICAgICAgICAgICBjb25zdCBtYXBEYXRhU291cmNlcyA9IHdpZGdldC51c2VEYXRhU291cmNlcztcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC8vIEZpbHRlciBmb3IgZmVhdHVyZSBsYXllciBkYXRhIHNvdXJjZXNcclxuICAgICAgICAgICAgY29uc3QgZmVhdHVyZUxheWVyRHMgPSBtYXBEYXRhU291cmNlcy5maWx0ZXIoZHMgPT4gXHJcbiAgICAgICAgICAgICAgICBkcy5kYXRhU291cmNlSWQgJiYgXHJcbiAgICAgICAgICAgICAgICBzdGF0ZS5hcHBDb25maWcuZGF0YVNvdXJjZXNbZHMuZGF0YVNvdXJjZUlkXSAmJlxyXG4gICAgICAgICAgICAgICAgc3RhdGUuYXBwQ29uZmlnLmRhdGFTb3VyY2VzW2RzLmRhdGFTb3VyY2VJZF0udHlwZSA9PT0gJ0ZFQVRVUkVfTEFZRVInXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBpZiAoZmVhdHVyZUxheWVyRHMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgLy8gVXNlIHRoZSBmaXJzdCBmZWF0dXJlIGxheWVyIGRhdGEgc291cmNlXHJcbiAgICAgICAgICAgICAgICBjb25zdCBmZWF0dXJlTGF5ZXJEYXRhU291cmNlID0gZmVhdHVyZUxheWVyRHNbMF07XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIC8vIEV4dHJhY3QgZmllbGRzIGZvciB0aGlzIGRhdGEgc291cmNlXHJcbiAgICAgICAgICAgICAgICBjb25zdCBmaWVsZHNBcnJheSA9IHRoaXMuZXh0cmFjdEZpZWxkcyhmZWF0dXJlTGF5ZXJEYXRhU291cmNlKTtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgLy8gQ3JlYXRlIGEgcGxhaW4gb2JqZWN0IGRhdGEgc291cmNlXHJcbiAgICAgICAgICAgICAgICBjb25zdCBwbGFpblVzZURzOiBVc2VEYXRhU291cmNlID0ge1xyXG4gICAgICAgICAgICAgICAgICAgIGRhdGFTb3VyY2VJZDogZmVhdHVyZUxheWVyRGF0YVNvdXJjZS5kYXRhU291cmNlSWQsXHJcbiAgICAgICAgICAgICAgICAgICAgbWFpbkRhdGFTb3VyY2VJZDogZmVhdHVyZUxheWVyRGF0YVNvdXJjZS5tYWluRGF0YVNvdXJjZUlkIHx8IGZlYXR1cmVMYXllckRhdGFTb3VyY2UuZGF0YVNvdXJjZUlkLFxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGFWaWV3SWQ6IGZlYXR1cmVMYXllckRhdGFTb3VyY2UuZGF0YVZpZXdJZCB8fCAnZGVmYXVsdCcsXHJcbiAgICAgICAgICAgICAgICAgICAgcm9vdERhdGFTb3VyY2VJZDogZmVhdHVyZUxheWVyRGF0YVNvdXJjZS5yb290RGF0YVNvdXJjZUlkIHx8IGZlYXR1cmVMYXllckRhdGFTb3VyY2UuZGF0YVNvdXJjZUlkLFxyXG4gICAgICAgICAgICAgICAgICAgIGZpZWxkczogZmllbGRzQXJyYXlcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIHRoaXMucHJvcHMub25TZXR0aW5nQ2hhbmdlKHtcclxuICAgICAgICAgICAgICAgICAgICBpZDogdGhpcy5wcm9wcy5pZCxcclxuICAgICAgICAgICAgICAgICAgICB1c2VEYXRhU291cmNlczogW3BsYWluVXNlRHNdXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgLy8gQ3JlYXRlIGEgbmV3IElNVXNlRGF0YVNvdXJjZSB0byBwYXNzIHRvIGNyZWF0ZURhdGFTb3VyY2VzXHJcbiAgICAgICAgICAgICAgICBjb25zdCBpbVVzZURzOiBJTVVzZURhdGFTb3VyY2UgPSBJbW0oe1xyXG4gICAgICAgICAgICAgICAgICAgIGRhdGFTb3VyY2VJZDogcGxhaW5Vc2VEcy5kYXRhU291cmNlSWQsXHJcbiAgICAgICAgICAgICAgICAgICAgbWFpbkRhdGFTb3VyY2VJZDogcGxhaW5Vc2VEcy5tYWluRGF0YVNvdXJjZUlkLFxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGFWaWV3SWQ6IHBsYWluVXNlRHMuZGF0YVZpZXdJZCxcclxuICAgICAgICAgICAgICAgICAgICByb290RGF0YVNvdXJjZUlkOiBwbGFpblVzZURzLnJvb3REYXRhU291cmNlSWRcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBhd2FpdCB0aGlzLmNyZWF0ZURhdGFTb3VyY2VzKFtpbVVzZURzXSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC8vIEV4dHJhY3QgZmllbGRzIGZyb20gYSBkYXRhIHNvdXJjZVxyXG4gICAgZXh0cmFjdEZpZWxkcyA9IChkYXRhU291cmNlOiBhbnkpOiBzdHJpbmdbXSA9PiB7XHJcbiAgICAgICAgbGV0IGZpZWxkc0FycmF5OiBzdHJpbmdbXSA9IFtdO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGlmIChkYXRhU291cmNlLmZpZWxkcykge1xyXG4gICAgICAgICAgICAvLyBIYW5kbGUgZGlmZmVyZW50IGZpZWxkIGZvcm1hdHNcclxuICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoZGF0YVNvdXJjZS5maWVsZHMpKSB7XHJcbiAgICAgICAgICAgICAgICBmaWVsZHNBcnJheSA9IFsuLi5kYXRhU291cmNlLmZpZWxkc107XHJcbiAgICAgICAgICAgIH0gXHJcbiAgICAgICAgICAgIGVsc2UgaWYgKHR5cGVvZiBkYXRhU291cmNlLmZpZWxkcyA9PT0gJ29iamVjdCcgJiYgZGF0YVNvdXJjZS5maWVsZHMubGVuZ3RoID49IDApIHtcclxuICAgICAgICAgICAgICAgIC8vIENvbnZlcnQgYXJyYXktbGlrZSBvYmplY3QgdG8gYXJyYXlcclxuICAgICAgICAgICAgICAgIGZpZWxkc0FycmF5ID0gW107XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRhdGFTb3VyY2UuZmllbGRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZmllbGRzQXJyYXkucHVzaChkYXRhU291cmNlLmZpZWxkc1tpXSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gXHJcbiAgICAgICAgICAgIGVsc2UgaWYgKHR5cGVvZiBkYXRhU291cmNlLmZpZWxkcyA9PT0gJ29iamVjdCcpIHtcclxuICAgICAgICAgICAgICAgIGZpZWxkc0FycmF5ID0gT2JqZWN0LmtleXMoZGF0YVNvdXJjZS5maWVsZHMpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHJldHVybiBmaWVsZHNBcnJheTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLy8gSGFuZGxlIGZpbHRlciBmaWVsZCBzZWxlY3Rpb24gY2hhbmdlXHJcbiAgICBvbkZpbHRlckZpZWxkQ2hhbmdlID0gKHNlbGVjdGVkRmllbGRzOiBJTUZpZWxkU2NoZW1hW10sIGRzOiBEYXRhU291cmNlKSA9PiB7XHJcbiAgICAgICAgaWYgKCFkcykgcmV0dXJuO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbnNvbGUubG9nKCdGaWx0ZXIgZmllbGQgc2VsZWN0aW9uIGNoYW5nZWQ6Jywgc2VsZWN0ZWRGaWVsZHMpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIEdldCBjdXJyZW50IGZpZWxkcyBvciBpbml0aWFsaXplIG5ldyBvbmVzIHdpdGggdGhlIGNvcnJlY3QgdHlwZVxyXG4gICAgICAgIGxldCBuZXdGaWVsZHMgPSB0aGlzLnN0YXRlLmZpbHRlckZpZWxkcyB8fCBJbW0oe30gYXMgeyBbZGF0YVNvdXJjZUlkOiBzdHJpbmddOiBzdHJpbmdbXSB9KTtcclxuICAgICAgICBcclxuICAgICAgICAvLyBVcGRhdGUgZmllbGRzIGZvciB0aGUgZGF0YSBzb3VyY2VcclxuICAgICAgICBuZXdGaWVsZHMgPSBuZXdGaWVsZHMuc2V0KGRzLmlkLCBzZWxlY3RlZEZpZWxkcy5tYXAoZiA9PiBmLmppbXVOYW1lKSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gVXBkYXRlIHN0YXRlIGFuZCBjb25maWdcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHsgZmlsdGVyRmllbGRzOiBuZXdGaWVsZHMgfSk7XHJcbiAgICAgICAgdGhpcy51cGRhdGVDb25maWdGaWVsZHMoJ2ZpbHRlckZpZWxkcycsIG5ld0ZpZWxkcyk7XHJcbiAgICB9O1xyXG4gICAgXHJcbiAgICAvLyBIYW5kbGUgYXJlYSBmaWVsZCBjaGFuZ2VcclxuICAgIG9uQXJlYUZpZWxkQ2hhbmdlID0gKGV2ZW50OiBSZWFjdC5DaGFuZ2VFdmVudDxIVE1MU2VsZWN0RWxlbWVudD4pID0+IHtcclxuICAgICAgICBjb25zdCBhcmVhRmllbGQgPSBldmVudC50YXJnZXQudmFsdWU7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGFyZWFGaWVsZCB9KTtcclxuICAgICAgICBcclxuICAgICAgICBpZiAodGhpcy5wcm9wcy5jb25maWcpIHtcclxuICAgICAgICAgICAgY29uc3QgbmV3Q29uZmlnID0gdGhpcy5wcm9wcy5jb25maWcuc2V0XHJcbiAgICAgICAgICAgICAgICA/IHRoaXMucHJvcHMuY29uZmlnLnNldCgnYXJlYUZpZWxkJywgYXJlYUZpZWxkKVxyXG4gICAgICAgICAgICAgICAgOiBJbW0oe1xyXG4gICAgICAgICAgICAgICAgICAgIC4uLnRoaXMucHJvcHMuY29uZmlnLFxyXG4gICAgICAgICAgICAgICAgICAgIGFyZWFGaWVsZFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgdGhpcy5wcm9wcy5vblNldHRpbmdDaGFuZ2Uoe1xyXG4gICAgICAgICAgICAgICAgaWQ6IHRoaXMucHJvcHMuaWQsXHJcbiAgICAgICAgICAgICAgICBjb25maWc6IG5ld0NvbmZpZ1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgXHJcbiAgICAvLyBUb2dnbGUgYWR2YW5jZWQgb3B0aW9ucyBkaXNwbGF5XHJcbiAgICB0b2dnbGVBZHZhbmNlZE9wdGlvbnMgPSAoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZShwcmV2U3RhdGUgPT4gKHtcclxuICAgICAgICAgICAgc2hvd0FkdmFuY2VkT3B0aW9uczogIXByZXZTdGF0ZS5zaG93QWR2YW5jZWRPcHRpb25zXHJcbiAgICAgICAgfSkpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAvLyBIYW5kbGUgY2hhcnQgY29sb3IgY2hhbmdlXHJcbiAgICBvbkNoYXJ0Q29sb3JDaGFuZ2UgPSAoY29sb3I6IHN0cmluZykgPT4ge1xyXG4gICAgICAgIGlmICh0aGlzLnByb3BzLmNvbmZpZykge1xyXG4gICAgICAgICAgICBjb25zdCBuZXdDb25maWcgPSB0aGlzLnByb3BzLmNvbmZpZy5zZXRcclxuICAgICAgICAgICAgICAgID8gdGhpcy5wcm9wcy5jb25maWcuc2V0KCdjaGFydENvbG9yJywgY29sb3IpXHJcbiAgICAgICAgICAgICAgICA6IEltbSh7XHJcbiAgICAgICAgICAgICAgICAgICAgLi4udGhpcy5wcm9wcy5jb25maWcsXHJcbiAgICAgICAgICAgICAgICAgICAgY2hhcnRDb2xvcjogY29sb3JcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHRoaXMucHJvcHMub25TZXR0aW5nQ2hhbmdlKHtcclxuICAgICAgICAgICAgICAgIGlkOiB0aGlzLnByb3BzLmlkLFxyXG4gICAgICAgICAgICAgICAgY29uZmlnOiBuZXdDb25maWdcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIFxyXG4gICAgLy8gSGFuZGxlIGJhY2tncm91bmQgY29sb3IgY2hhbmdlXHJcbiAgICBvbkJhY2tncm91bmRDb2xvckNoYW5nZSA9IChjb2xvcjogc3RyaW5nKSA9PiB7XHJcbiAgICAgICAgaWYgKHRoaXMucHJvcHMuY29uZmlnKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IG5ld0NvbmZpZyA9IHRoaXMucHJvcHMuY29uZmlnLnNldFxyXG4gICAgICAgICAgICAgICAgPyB0aGlzLnByb3BzLmNvbmZpZy5zZXQoJ2JhY2tncm91bmRDb2xvcicsIGNvbG9yKVxyXG4gICAgICAgICAgICAgICAgOiBJbW0oe1xyXG4gICAgICAgICAgICAgICAgICAgIC4uLnRoaXMucHJvcHMuY29uZmlnLFxyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogY29sb3JcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHRoaXMucHJvcHMub25TZXR0aW5nQ2hhbmdlKHtcclxuICAgICAgICAgICAgICAgIGlkOiB0aGlzLnByb3BzLmlkLFxyXG4gICAgICAgICAgICAgICAgY29uZmlnOiBuZXdDb25maWdcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIFxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGNvbnN0IHsgc2hvd0FkdmFuY2VkT3B0aW9ucywgYXJlYUZpZWxkLCBkc3MgfSA9IHRoaXMuc3RhdGU7XHJcbiAgICAgICAgY29uc3QgY2hhcnRDb2xvciA9IHRoaXMucHJvcHMuY29uZmlnPy5jaGFydENvbG9yIHx8ICcjNENBRjUwJztcclxuICAgICAgICBjb25zdCBiYWNrZ3JvdW5kQ29sb3IgPSB0aGlzLnByb3BzLmNvbmZpZz8uYmFja2dyb3VuZENvbG9yIHx8ICcjRkZGRkZGJztcclxuICAgICAgICBcclxuICAgICAgICAvLyBGaW5kIGF2YWlsYWJsZSBudW1lcmljIGZpZWxkcyBmb3IgdGhlIGFyZWEgZmllbGQgc2VsZWN0b3JcclxuICAgICAgICBsZXQgbnVtZXJpY0ZpZWxkczogc3RyaW5nW10gPSBbXTtcclxuICAgICAgICBpZiAoZHNzICYmIGRzcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGRzID0gZHNzWzBdO1xyXG4gICAgICAgICAgICBjb25zdCBzY2hlbWEgPSBkcy5nZXRTY2hlbWEoKTtcclxuICAgICAgICAgICAgaWYgKHNjaGVtYSAmJiBzY2hlbWEuZmllbGRzKSB7XHJcbiAgICAgICAgICAgICAgICBudW1lcmljRmllbGRzID0gT2JqZWN0LmtleXMoc2NoZW1hLmZpZWxkcylcclxuICAgICAgICAgICAgICAgICAgICAuZmlsdGVyKGZpZWxkTmFtZSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGZpZWxkID0gc2NoZW1hLmZpZWxkc1tmaWVsZE5hbWVdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBGaXhlZDogT25seSB1c2UgSmltdUZpZWxkVHlwZS5OdW1iZXIgYXMgaXQncyB0aGUgb25seSBudW1lcmljIHR5cGUgYXZhaWxhYmxlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBmaWVsZC50eXBlID09PSBKaW11RmllbGRUeXBlLk51bWJlcjtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndpZGdldC1zZXR0aW5nLWNvbnRhaW5lciBwLTJcIj5cclxuICAgICAgICAgICAgICAgIHsvKiBNYXAgV2lkZ2V0IFNlbGVjdG9yICovfVxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZXR0aW5nLXNlY3Rpb24gbWItM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxMYWJlbCBjbGFzc05hbWU9XCJzZXR0aW5nLWxhYmVsIGQtZmxleFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBTZWxlY3QgYSBNYXAgV2lkZ2V0OlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPE1hcFdpZGdldFNlbGVjdG9yXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uU2VsZWN0PXt0aGlzLm9uTWFwV2lkZ2V0U2VsZWN0ZWR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVzZU1hcFdpZGdldElkcz17dGhpcy5wcm9wcy51c2VNYXBXaWRnZXRJZHN9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB7LyogRGF0YSBTb3VyY2UgU2VsZWN0b3IgKi99XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNldHRpbmctc2VjdGlvbiBtYi0zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPExhYmVsIGNsYXNzTmFtZT1cInNldHRpbmctbGFiZWwgZC1mbGV4XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFNlbGVjdCBhIERhdGEgU291cmNlOlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwic2V0dGluZy1ub3RlIHRleHQtbXV0ZWRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgQ2hvb3NlIGEgZmVhdHVyZSBsYXllciBjb250YWluaW5nIHZpbG95YXQsIHR1bWFuLCBhbmQgYXJlYSBmaWVsZHMuXHJcbiAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIHshdGhpcy5wcm9wcy51c2VEYXRhU291cmNlcyB8fCB0aGlzLnByb3BzLnVzZURhdGFTb3VyY2VzLmxlbmd0aCA9PT0gMCA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPEFsZXJ0IHR5cGU9XCJpbmZvXCIgY2xhc3NOYW1lPVwidy0xMDAgbWItMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBQbGVhc2Ugc2VsZWN0IGEgbWFwIHdpZGdldCBmaXJzdCB0byBhdXRvLWRldGVjdCBkYXRhIHNvdXJjZXMuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQWxlcnQ+XHJcbiAgICAgICAgICAgICAgICAgICAgKSA6IG51bGx9XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgIDxEYXRhU291cmNlU2VsZWN0b3JcclxuICBtdXN0VXNlRGF0YVNvdXJjZVxyXG4gIC8vIExpbWl0IHRvIEZlYXR1cmUgTGF5ZXJzXHJcbiAgdHlwZXM9e3RoaXMuc3VwcG9ydGVkVHlwZXN9XHJcbiAgLy8g4pyFIE1VTFRJLVNFTEVDVFxyXG4gIGlzTXVsdGlwbGU9e3RydWV9XHJcbiAgdXNlRGF0YVNvdXJjZXM9e3RoaXMucHJvcHMudXNlRGF0YVNvdXJjZXN9XHJcbiAgb25DaGFuZ2U9e3RoaXMub25EYXRhU291cmNlQ2hhbmdlfVxyXG4gIHdpZGdldElkPXt0aGlzLnByb3BzLmlkfVxyXG4gIGhpZGVEYXRhVmlldz17dHJ1ZX1cclxuLz5cclxuXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgey8qIEZpbHRlciBGaWVsZHMgU2VsZWN0b3IgKi99XHJcbiAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy51c2VEYXRhU291cmNlcyAmJiB0aGlzLnByb3BzLnVzZURhdGFTb3VyY2VzLmxlbmd0aCA+IDAgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2V0dGluZy1zZWN0aW9uIG1iLTNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExhYmVsIGNsYXNzTmFtZT1cInNldHRpbmctbGFiZWwgZC1mbGV4XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBTZWxlY3QgUmVnaW9uIEZpZWxkczpcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwic2V0dGluZy1ub3RlIHRleHQtbXV0ZWRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRoZXNlIGZpZWxkcyB3aWxsIGJlIHVzZWQgZm9yIGZpbHRlcmluZyByZWdpb25zICh2aWxveWF0IGFuZCB0dW1hbikuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEZpZWxkU2VsZWN0b3JcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVzZURhdGFTb3VyY2VzPXt0aGlzLnByb3BzLnVzZURhdGFTb3VyY2VzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMub25GaWx0ZXJGaWVsZENoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkRmllbGRzPXt0aGlzLnN0YXRlLmZpbHRlckZpZWxkc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzTXVsdGlwbGU9e3RydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc1NlYXJjaElucHV0SGlkZGVuPXtmYWxzZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzRGF0YVNvdXJjZURyb3BEb3duSGlkZGVuPXtmYWxzZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZXR0aW5nLWhpbnQgZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlciBtdC0yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2hlY2tib3hcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17dHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGVja2VkPXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1yLTJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzbWFsbD5EZWZhdWx0IGZpZWxkcyBpbmNsdWRlOiB2aWxveWF0LCB0dW1hbjwvc21hbGw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgey8qIEFyZWEgRmllbGQgU2VsZWN0b3IgKi99XHJcbiAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy51c2VEYXRhU291cmNlcyAmJiB0aGlzLnByb3BzLnVzZURhdGFTb3VyY2VzLmxlbmd0aCA+IDAgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2V0dGluZy1zZWN0aW9uIG1iLTNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExhYmVsIGNsYXNzTmFtZT1cInNldHRpbmctbGFiZWwgZC1mbGV4XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBTZWxlY3QgQXJlYSBGaWVsZDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwic2V0dGluZy1ub3RlIHRleHQtbXV0ZWRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRoaXMgbnVtZXJpYyBmaWVsZCB3aWxsIGJlIHVzZWQgZm9yIHRoZSBjaGFydCB2YWx1ZXMuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNlbGVjdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXthcmVhRmllbGR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5vbkFyZWFGaWVsZENoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge251bWVyaWNGaWVsZHMubWFwKGZpZWxkID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIGtleT17ZmllbGR9IHZhbHVlPXtmaWVsZH0+e2ZpZWxkfTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bnVtZXJpY0ZpZWxkcy5sZW5ndGggPT09IDAgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJtYXlkb25cIj5tYXlkb24gKGRlZmF1bHQpPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIHsvKiBBcHBlYXJhbmNlIFNlY3Rpb24gKi99XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNldHRpbmctc2VjdGlvbiBtYi0zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPExhYmVsIGNsYXNzTmFtZT1cInNldHRpbmctbGFiZWwgZC1mbGV4XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEFwcGVhcmFuY2UgU2V0dGluZ3M6XHJcbiAgICAgICAgICAgICAgICAgICAgPC9MYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICB7LyogQ2hhcnQgQ29sb3IgKi99XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xvci1zZXR0aW5nLWl0ZW0gZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlbiBtYi0zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMYWJlbCBjbGFzc05hbWU9XCJtYi0wIG1yLTJcIj5DaGFydCBDb2xvcjo8L0xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDb2xvclBpY2tlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD17MjZ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9ezMwfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPXtjaGFydENvbG9yfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByZXNldENvbG9ycz17dGhpcy5jb2xvclByZXNldHN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMub25DaGFydENvbG9yQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlbWVudD1cImJvdHRvbVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xvci1wcmV2aWV3IG1sLTJcIiBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAnMjRweCcsIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogJzI0cHgnLCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGNoYXJ0Q29sb3IsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAnMXB4IHNvbGlkICNkZGQnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogJzJweCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19PjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICB7LyogQmFja2dyb3VuZCBDb2xvciAqL31cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbG9yLXNldHRpbmctaXRlbSBkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyIGp1c3RpZnktY29udGVudC1iZXR3ZWVuXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMYWJlbCBjbGFzc05hbWU9XCJtYi0wIG1yLTJcIj5CYWNrZ3JvdW5kIENvbG9yOjwvTGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvbG9yUGlja2VyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PXsyNn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD17MzB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I9e2JhY2tncm91bmRDb2xvcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmVzZXRDb2xvcnM9e3RoaXMuYmdDb2xvclByZXNldHN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMub25CYWNrZ3JvdW5kQ29sb3JDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2VtZW50PVwiYm90dG9tXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbG9yLXByZXZpZXcgbWwtMlwiIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6ICcyNHB4JywgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAnMjRweCcsIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogYmFja2dyb3VuZENvbG9yLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogJzFweCBzb2xpZCAjZGRkJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6ICcycHgnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fT48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgey8qIEFkdmFuY2VkIE9wdGlvbnMgVG9nZ2xlICovfVxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZXR0aW5nLXNlY3Rpb24gYm9yZGVyLXRvcCBwdC0zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXgganVzdGlmeS1jb250ZW50LWJldHdlZW4gYWxpZ24taXRlbXMtY2VudGVyIG1iLTJcIiBvbkNsaWNrPXt0aGlzLnRvZ2dsZUFkdmFuY2VkT3B0aW9uc30gc3R5bGU9e3sgY3Vyc29yOiAncG9pbnRlcicgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMYWJlbCBjbGFzc05hbWU9XCJzZXR0aW5nLWxhYmVsIG1iLTBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEFkdmFuY2VkIE9wdGlvbnNcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFN3aXRjaFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tlZD17c2hvd0FkdmFuY2VkT3B0aW9uc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLnRvZ2dsZUFkdmFuY2VkT3B0aW9uc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICB7LyogQWR2YW5jZWQgb3B0aW9ucyBjb250ZW50ICovfVxyXG4gICAgICAgICAgICAgICAgICAgIHtzaG93QWR2YW5jZWRPcHRpb25zICYmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhZHZhbmNlZC1vcHRpb25zLWNvbnRhaW5lciBwbC0yIGJvcmRlci1sZWZ0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXIgbWItMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2hlY2tib3hcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9e3RoaXMucHJvcHMuY29uZmlnPy5zZXR0aW5ncz8uZW5hYmxlQXV0b1pvb20gIT09IGZhbHNlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhldnQpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBzZXR0aW5ncyA9IHRoaXMucHJvcHMuY29uZmlnPy5zZXR0aW5ncyB8fCB7fTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLm9uU2V0dGluZ0NoYW5nZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiB0aGlzLnByb3BzLmlkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25maWc6IHRoaXMucHJvcHMuY29uZmlnLnNldCgnc2V0dGluZ3MnLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuLi5zZXR0aW5ncyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVuYWJsZUF1dG9ab29tOiBldnQudGFyZ2V0LmNoZWNrZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtci0yXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExhYmVsIGNsYXNzTmFtZT1cIm1iLTBcIj5BdXRvLXpvb20gdG8gc2VsZWN0ZWQgcmVnaW9uPC9MYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXIgbWItM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2hlY2tib3hcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9e3RoaXMucHJvcHMuY29uZmlnPy5zZXR0aW5ncz8uZW5hYmxlRHJpbGxkb3duICE9PSBmYWxzZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXZ0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgc2V0dGluZ3MgPSB0aGlzLnByb3BzLmNvbmZpZz8uc2V0dGluZ3MgfHwge307XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5vblNldHRpbmdDaGFuZ2Uoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZDogdGhpcy5wcm9wcy5pZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uZmlnOiB0aGlzLnByb3BzLmNvbmZpZy5zZXQoJ3NldHRpbmdzJywge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLi4uc2V0dGluZ3MsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbmFibGVEcmlsbGRvd246IGV2dC50YXJnZXQuY2hlY2tlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1yLTJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGFiZWwgY2xhc3NOYW1lPVwibWItMFwiPkVuYWJsZSB2aWxveWF0LXRvLXR1bWFuIGRyaWxsLWRvd248L0xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiBBZHZhbmNlZCBDaGFydCBPcHRpb25zICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWR2YW5jZWQtY2hhcnQtb3B0aW9ucyBtYi0zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMYWJlbCBjbGFzc05hbWU9XCJtYi0yXCI+Q2hhcnQgRGlzcGxheSBPcHRpb25zOjwvTGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXIgbWItMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENoZWNrYm94XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tlZD17dGhpcy5wcm9wcy5jb25maWc/LnNldHRpbmdzPy5zaG93UGVyY2VudGFnZXMgIT09IGZhbHNlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXZ0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHNldHRpbmdzID0gdGhpcy5wcm9wcy5jb25maWc/LnNldHRpbmdzIHx8IHt9O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLm9uU2V0dGluZ0NoYW5nZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZDogdGhpcy5wcm9wcy5pZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbmZpZzogdGhpcy5wcm9wcy5jb25maWcuc2V0KCdzZXR0aW5ncycsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuLi5zZXR0aW5ncyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaG93UGVyY2VudGFnZXM6IGV2dC50YXJnZXQuY2hlY2tlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtci0yXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGFiZWwgY2xhc3NOYW1lPVwibWItMFwiPlNob3cgcGVyY2VudGFnZXMgaW4gdG9vbHRpcDwvTGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2hlY2tib3hcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGVja2VkPXt0aGlzLnByb3BzLmNvbmZpZz8uc2V0dGluZ3M/LnNob3dWYWx1ZUxhYmVscyAhPT0gZmFsc2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhldnQpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgc2V0dGluZ3MgPSB0aGlzLnByb3BzLmNvbmZpZz8uc2V0dGluZ3MgfHwge307XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMub25TZXR0aW5nQ2hhbmdlKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiB0aGlzLnByb3BzLmlkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uZmlnOiB0aGlzLnByb3BzLmNvbmZpZy5zZXQoJ3NldHRpbmdzJywge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC4uLnNldHRpbmdzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNob3dWYWx1ZUxhYmVsczogZXZ0LnRhcmdldC5jaGVja2VkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1yLTJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMYWJlbCBjbGFzc05hbWU9XCJtYi0wXCI+U2hvdyB2YWx1ZSBsYWJlbHMgb24gYmFyczwvTGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufSIsImltcG9ydCB7IFxyXG4gICAgUmVhY3QsIFxyXG4gICAgRGF0YVNvdXJjZVR5cGVzLCBcclxuICAgIFVzZURhdGFTb3VyY2UsXHJcbiAgICBJTVVzZURhdGFTb3VyY2UsXHJcbiAgICBnZXRBcHBTdG9yZSxcclxuICAgIERhdGFTb3VyY2UsXHJcbiAgICBJTUZpZWxkU2NoZW1hLFxyXG4gICAgSW1tdXRhYmxlT2JqZWN0XHJcbn0gZnJvbSAnamltdS1jb3JlJztcclxuaW1wb3J0IHsgQWxsV2lkZ2V0U2V0dGluZ1Byb3BzIH0gZnJvbSAnamltdS1mb3ItYnVpbGRlcic7XHJcbmltcG9ydCB7IERhdGFTb3VyY2VTZWxlY3RvciB9IGZyb20gJ2ppbXUtdWkvYWR2YW5jZWQvZGF0YS1zb3VyY2Utc2VsZWN0b3InO1xyXG5pbXBvcnQgeyBNYXBXaWRnZXRTZWxlY3RvciB9IGZyb20gJ2ppbXUtdWkvYWR2YW5jZWQvc2V0dGluZy1jb21wb25lbnRzJztcclxuaW1wb3J0IHsgRGF0YVNvdXJjZU1hbmFnZXIgfSBmcm9tICdqaW11LWNvcmUnO1xyXG5pbXBvcnQgeyBMYWJlbCwgQ2hlY2tib3gsIEFsZXJ0LCBTd2l0Y2gsIFRleHRJbnB1dCB9IGZyb20gJ2ppbXUtdWknO1xyXG5pbXBvcnQgeyBDb2xvclBpY2tlciB9IGZyb20gJ2ppbXUtdWkvYmFzaWMvY29sb3ItcGlja2VyJztcclxuaW1wb3J0IHsgSW1tIH0gZnJvbSAnLi4vaW1tdXRhYmxlSGVscGVyJztcclxuXHJcbmludGVyZmFjZSBTZXR0aW5nU3RhdGUge1xyXG4gICAgZHNzOiBEYXRhU291cmNlW10gfCBudWxsO1xyXG4gICAgc2hvd0FkdmFuY2VkT3B0aW9uczogYm9vbGVhbjtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2V0dGluZyBleHRlbmRzIFJlYWN0LlB1cmVDb21wb25lbnQ8XHJcbiAgICBBbGxXaWRnZXRTZXR0aW5nUHJvcHM8YW55PixcclxuICAgIFNldHRpbmdTdGF0ZVxyXG4+IHtcclxuICAgIHN1cHBvcnRlZFR5cGVzID0gSW1tKFtEYXRhU291cmNlVHlwZXMuRmVhdHVyZUxheWVyXSk7XHJcbiAgICBkc01hbmFnZXIgPSBEYXRhU291cmNlTWFuYWdlci5nZXRJbnN0YW5jZSgpO1xyXG4gICAgXHJcbiAgICAvLyBDb2xvciBwcmVzZXRzIGZvciB0aGUgY29sb3IgcGlja2Vyc1xyXG4gICAgY29sb3JQcmVzZXRzID0gW1xyXG4gICAgICAgIHsgY29sb3I6ICcjMDA3QkZGJywgbGFiZWw6ICdCbHVlJywgdmFsdWU6ICcjMDA3QkZGJyB9LFxyXG4gICAgICAgIHsgY29sb3I6ICcjMjhBNzQ1JywgbGFiZWw6ICdHcmVlbicsIHZhbHVlOiAnIzI4QTc0NScgfSxcclxuICAgICAgICB7IGNvbG9yOiAnI0RDMzU0NScsIGxhYmVsOiAnUmVkJywgdmFsdWU6ICcjREMzNTQ1JyB9LFxyXG4gICAgICAgIHsgY29sb3I6ICcjRkZDMTA3JywgbGFiZWw6ICdBbWJlcicsIHZhbHVlOiAnI0ZGQzEwNycgfSxcclxuICAgICAgICB7IGNvbG9yOiAnIzZGNDJDMScsIGxhYmVsOiAnUHVycGxlJywgdmFsdWU6ICcjNkY0MkMxJyB9LFxyXG4gICAgICAgIHsgY29sb3I6ICcjRkQ3RTE0JywgbGFiZWw6ICdPcmFuZ2UnLCB2YWx1ZTogJyNGRDdFMTQnIH0sXHJcbiAgICAgICAgeyBjb2xvcjogJyMyMEM5OTcnLCBsYWJlbDogJ1RlYWwnLCB2YWx1ZTogJyMyMEM5OTcnIH0sXHJcbiAgICAgICAgeyBjb2xvcjogJyMxN0EyQjgnLCBsYWJlbDogJ0N5YW4nLCB2YWx1ZTogJyMxN0EyQjgnIH1cclxuICAgIF07XHJcbiAgICBcclxuICAgIC8vIEJhY2tncm91bmQgY29sb3IgcHJlc2V0c1xyXG4gICAgYmdDb2xvclByZXNldHMgPSBbXHJcbiAgICAgICAgeyBjb2xvcjogJyNGRkZGRkYnLCBsYWJlbDogJ1doaXRlJywgdmFsdWU6ICcjRkZGRkZGJyB9LFxyXG4gICAgICAgIHsgY29sb3I6ICcjRjVGNUY1JywgbGFiZWw6ICdMaWdodCBHcmV5JywgdmFsdWU6ICcjRjVGNUY1JyB9LFxyXG4gICAgICAgIHsgY29sb3I6ICcjRUVFRUVFJywgbGFiZWw6ICdHcmV5JywgdmFsdWU6ICcjRUVFRUVFJyB9LFxyXG4gICAgICAgIHsgY29sb3I6ICcjMkIyQjJCJywgbGFiZWw6ICdEYXJrJywgdmFsdWU6ICcjMkIyQjJCJyB9LFxyXG4gICAgICAgIHsgY29sb3I6ICcjRTNGMkZEJywgbGFiZWw6ICdMaWdodCBCbHVlJywgdmFsdWU6ICcjRTNGMkZEJyB9LFxyXG4gICAgICAgIHsgY29sb3I6ICcjRThGNUU5JywgbGFiZWw6ICdMaWdodCBHcmVlbicsIHZhbHVlOiAnI0U4RjVFOScgfSxcclxuICAgICAgICB7IGNvbG9yOiAnI0ZGRjhFMScsIGxhYmVsOiAnTGlnaHQgQW1iZXInLCB2YWx1ZTogJyNGRkY4RTEnIH0sXHJcbiAgICAgICAgeyBjb2xvcjogJ3JnYmEoMCwwLDAsMCknLCBsYWJlbDogJ1RyYW5zcGFyZW50JywgdmFsdWU6ICdyZ2JhKDAsMCwwLDApJyB9XHJcbiAgICBdO1xyXG4gICAgXHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wczogQWxsV2lkZ2V0U2V0dGluZ1Byb3BzPGFueT4pIHtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gSW5pdGlhbGl6ZSBzdGF0ZSBmcm9tIGNvbmZpZ1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIGRzczogbnVsbCxcclxuICAgICAgICAgICAgc2hvd0FkdmFuY2VkT3B0aW9uczogZmFsc2VcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgIGNvbXBvbmVudERpZE1vdW50KCkge1xyXG4gICAgICBjb25zdCB3YWl0Rm9yQXBwQ29uZmlnID0gKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHN0YXRlID0gZ2V0QXBwU3RvcmUoKS5nZXRTdGF0ZSgpO1xyXG4gICAgICAgIGNvbnN0IHdpZGdldHMgPSBzdGF0ZT8uYXBwQ29uZmlnPy53aWRnZXRzO1xyXG4gICAgICAgIGlmICh3aWRnZXRzICYmIE9iamVjdC5rZXlzKHdpZGdldHMpLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgIHRoaXMuYXV0b0RldGVjdE1hcFdpZGdldCgpO1xyXG4gICAgICAgICAgdGhpcy5pbml0aWFsaXplRGF0YVNvdXJjZXMoKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgc2V0VGltZW91dCh3YWl0Rm9yQXBwQ29uZmlnLCAyMDApOyAvLyBXYWl0IGFuZCByZXRyeVxyXG4gICAgICAgIH1cclxuICAgICAgfTtcclxuXHJcbiAgICAgIHdhaXRGb3JBcHBDb25maWcoKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgY29tcG9uZW50RGlkVXBkYXRlKHByZXZQcm9wczogQWxsV2lkZ2V0U2V0dGluZ1Byb3BzPGFueT4pIHtcclxuICAgICAgaWYgKFxyXG4gICAgICAgIHRoaXMucHJvcHMudXNlRGF0YVNvdXJjZXMgJiZcclxuICAgICAgICB0aGlzLnByb3BzLnVzZURhdGFTb3VyY2VzICE9PSBwcmV2UHJvcHMudXNlRGF0YVNvdXJjZXNcclxuICAgICAgKSB7XHJcbiAgICAgICAgdGhpcy5pbml0aWFsaXplRGF0YVNvdXJjZXMoKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBjb21wb25lbnRXaWxsVW5tb3VudCgpIHtcclxuICAgICAgICB0aGlzLmNsZWFudXBEYXRhU291cmNlcygpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAvLyBBdXRvLWRldGVjdCBtYXAgd2lkZ2V0IGlmIG5vdCBhbHJlYWR5IHNldFxyXG4gICAgYXV0b0RldGVjdE1hcFdpZGdldCA9ICgpID0+IHtcclxuICAgICAgICBpZiAoIXRoaXMucHJvcHMudXNlTWFwV2lkZ2V0SWRzIHx8IHRoaXMucHJvcHMudXNlTWFwV2lkZ2V0SWRzLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICBjb25zdCBzdGF0ZSA9IGdldEFwcFN0b3JlKCkuZ2V0U3RhdGUoKTtcclxuICAgICAgICAgICAgY29uc3QgbWFwV2lkZ2V0cyA9IHN0YXRlLmFwcENvbmZpZy53aWRnZXRzO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgY29uc3QgbWFwV2lkZ2V0SWQgPSBPYmplY3Qua2V5cyhtYXBXaWRnZXRzKS5maW5kKHdpZCA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB3aWRnZXQgPSBtYXBXaWRnZXRzW3dpZF07XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gd2lkZ2V0Lm1hbmlmZXN0ICYmIHdpZGdldC5tYW5pZmVzdC5uYW1lID09PSAnbWFwJztcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgIGlmIChtYXBXaWRnZXRJZCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5vblNldHRpbmdDaGFuZ2Uoe1xyXG4gICAgICAgICAgICAgICAgICAgIGlkOiB0aGlzLnByb3BzLmlkLFxyXG4gICAgICAgICAgICAgICAgICAgIHVzZU1hcFdpZGdldElkczogW21hcFdpZGdldElkXVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC8vIEluaXRpYWxpemUgZGF0YSBzb3VyY2VzIGZyb20gY29uZmlnXHJcbiAgICBpbml0aWFsaXplRGF0YVNvdXJjZXMgPSAoKSA9PiB7XHJcbiAgICAgICAgaWYgKHRoaXMucHJvcHMudXNlRGF0YVNvdXJjZXMgJiYgdGhpcy5wcm9wcy51c2VEYXRhU291cmNlcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY3JlYXRlRGF0YVNvdXJjZXMoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC8vIENsZWFuIHVwIGRhdGEgc291cmNlcyB3aGVuIGNvbXBvbmVudCB1bm1vdW50c1xyXG4gICAgY2xlYW51cERhdGFTb3VyY2VzID0gKCkgPT4ge1xyXG4gICAgICAgIGlmICh0aGlzLnByb3BzLnVzZURhdGFTb3VyY2VzKSB7XHJcbiAgICAgICAgICAgIHRoaXMucHJvcHMudXNlRGF0YVNvdXJjZXMuZm9yRWFjaCh1c2VEcyA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAodXNlRHMgJiYgdXNlRHMuZGF0YVNvdXJjZUlkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kc01hbmFnZXIuZGVzdHJveURhdGFTb3VyY2UodXNlRHMuZGF0YVNvdXJjZUlkKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBjcmVhdGVEYXRhU291cmNlcyA9IGFzeW5jIChjdXN0b21Vc2VEYXRhU291cmNlcz86IElNVXNlRGF0YVNvdXJjZVtdKSA9PiB7XHJcbiAgICAgICAgY29uc3QgdXNlRGF0YVNvdXJjZXNUb1VzZSA9IGN1c3RvbVVzZURhdGFTb3VyY2VzIHx8IHRoaXMucHJvcHMudXNlRGF0YVNvdXJjZXM7XHJcbiAgICAgICAgaWYgKCF1c2VEYXRhU291cmNlc1RvVXNlIHx8IHVzZURhdGFTb3VyY2VzVG9Vc2UubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBkc3M6IG51bGwgfSk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICBcclxuICAgICAgICBjb25zdCBkYXRhU291cmNlczogRGF0YVNvdXJjZVtdID0gW107XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gUHJvY2VzcyBlYWNoIGRhdGEgc291cmNlXHJcbiAgICAgICAgZm9yIChsZXQgdXNlRHMgb2YgdXNlRGF0YVNvdXJjZXNUb1VzZSkge1xyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZHMgPSBhd2FpdCB0aGlzLmRzTWFuYWdlci5jcmVhdGVEYXRhU291cmNlQnlVc2VEYXRhU291cmNlKHVzZURzIGFzIElNVXNlRGF0YVNvdXJjZSk7XHJcbiAgICAgICAgICAgICAgICBpZiAoZHMgJiYgZHMuZ2V0U2NoZW1hKCkpIHtcclxuICAgICAgICAgICAgICAgICAgICBkYXRhU291cmNlcy5wdXNoKGRzKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBjcmVhdGluZyBkYXRhIHNvdXJjZTonLCBlcnIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgXHJcbiAgICAgICAgaWYgKGRhdGFTb3VyY2VzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IFxyXG4gICAgICAgICAgICAgICAgZHNzOiBkYXRhU291cmNlc1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG4gICAgXHJcbiAgICAvLyBIYW5kbGUgZGF0YSBzb3VyY2Ugc2VsZWN0aW9uIGNoYW5nZVxyXG4gICAgb25EYXRhU291cmNlQ2hhbmdlID0gKHVzZURhdGFTb3VyY2VzOiBVc2VEYXRhU291cmNlW10pID0+IHtcclxuICAgICAgICB0aGlzLnByb3BzLm9uU2V0dGluZ0NoYW5nZSh7XHJcbiAgICAgICAgICAgIGlkOiB0aGlzLnByb3BzLmlkLFxyXG4gICAgICAgICAgICB1c2VEYXRhU291cmNlczogdXNlRGF0YVNvdXJjZXNcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgICBcclxuICAgIC8vIEhhbmRsZSBtYXAgd2lkZ2V0IHNlbGVjdGlvbiBjaGFuZ2VcclxuICAgIG9uTWFwV2lkZ2V0U2VsZWN0ZWQgPSBhc3luYyAoc2VsZWN0ZWRJZHM6IHN0cmluZ1tdKSA9PiB7XHJcbiAgICAgICAgdGhpcy5wcm9wcy5vblNldHRpbmdDaGFuZ2Uoe1xyXG4gICAgICAgICAgICBpZDogdGhpcy5wcm9wcy5pZCxcclxuICAgICAgICAgICAgdXNlTWFwV2lkZ2V0SWRzOiBzZWxlY3RlZElkc1xyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuXHJcbiAgICAvLyBUb2dnbGUgYWR2YW5jZWQgb3B0aW9ucyBkaXNwbGF5XHJcbiAgICB0b2dnbGVBZHZhbmNlZE9wdGlvbnMgPSAoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZShwcmV2U3RhdGUgPT4gKHtcclxuICAgICAgICAgICAgc2hvd0FkdmFuY2VkT3B0aW9uczogIXByZXZTdGF0ZS5zaG93QWR2YW5jZWRPcHRpb25zXHJcbiAgICAgICAgfSkpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAvLyBIYW5kbGUgaGlnaGxpZ2h0IGNvbG9yIGNoYW5nZSAoZm9yIG1hcCBtYXJrZXJzIGFuZCBzZWxlY3RlZCByb3dzKVxyXG4gICAgb25IaWdobGlnaHRDb2xvckNoYW5nZSA9IChjb2xvcjogc3RyaW5nKSA9PiB7XHJcbiAgICAgICAgaWYgKHRoaXMucHJvcHMuY29uZmlnKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IG5ld0NvbmZpZyA9IHRoaXMucHJvcHMuY29uZmlnLnNldFxyXG4gICAgICAgICAgICAgICAgPyB0aGlzLnByb3BzLmNvbmZpZy5zZXQoJ2hpZ2hsaWdodENvbG9yJywgY29sb3IpXHJcbiAgICAgICAgICAgICAgICA6IEltbSh7XHJcbiAgICAgICAgICAgICAgICAgICAgLi4udGhpcy5wcm9wcy5jb25maWcsXHJcbiAgICAgICAgICAgICAgICAgICAgaGlnaGxpZ2h0Q29sb3I6IGNvbG9yXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB0aGlzLnByb3BzLm9uU2V0dGluZ0NoYW5nZSh7XHJcbiAgICAgICAgICAgICAgICBpZDogdGhpcy5wcm9wcy5pZCxcclxuICAgICAgICAgICAgICAgIGNvbmZpZzogbmV3Q29uZmlnXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBcclxuICAgIC8vIEhhbmRsZSBiYWNrZ3JvdW5kIGNvbG9yIGNoYW5nZVxyXG4gICAgb25CYWNrZ3JvdW5kQ29sb3JDaGFuZ2UgPSAoY29sb3I6IHN0cmluZykgPT4ge1xyXG4gICAgICAgIGlmICh0aGlzLnByb3BzLmNvbmZpZykge1xyXG4gICAgICAgICAgICBjb25zdCBuZXdDb25maWcgPSB0aGlzLnByb3BzLmNvbmZpZy5zZXRcclxuICAgICAgICAgICAgICAgID8gdGhpcy5wcm9wcy5jb25maWcuc2V0KCdiYWNrZ3JvdW5kQ29sb3InLCBjb2xvcilcclxuICAgICAgICAgICAgICAgIDogSW1tKHtcclxuICAgICAgICAgICAgICAgICAgICAuLi50aGlzLnByb3BzLmNvbmZpZyxcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGNvbG9yXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB0aGlzLnByb3BzLm9uU2V0dGluZ0NoYW5nZSh7XHJcbiAgICAgICAgICAgICAgICBpZDogdGhpcy5wcm9wcy5pZCxcclxuICAgICAgICAgICAgICAgIGNvbmZpZzogbmV3Q29uZmlnXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBcclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBjb25zdCB7IHNob3dBZHZhbmNlZE9wdGlvbnMgfSA9IHRoaXMuc3RhdGU7XHJcbiAgICAgICAgY29uc3QgaGlnaGxpZ2h0Q29sb3IgPSB0aGlzLnByb3BzLmNvbmZpZz8uaGlnaGxpZ2h0Q29sb3IgfHwgJyMwMDdCRkYnO1xyXG4gICAgICAgIGNvbnN0IGJhY2tncm91bmRDb2xvciA9IHRoaXMucHJvcHMuY29uZmlnPy5iYWNrZ3JvdW5kQ29sb3IgfHwgJyNGRkZGRkYnO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2lkZ2V0LXNldHRpbmctY29udGFpbmVyIHAtMlwiPlxyXG4gICAgICAgICAgICAgICAgey8qIE1hcCBXaWRnZXQgU2VsZWN0b3IgKi99XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNldHRpbmctc2VjdGlvbiBtYi0zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPExhYmVsIGNsYXNzTmFtZT1cInNldHRpbmctbGFiZWwgZC1mbGV4XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFNlbGVjdCBhIE1hcCBXaWRnZXQ6XHJcbiAgICAgICAgICAgICAgICAgICAgPC9MYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8TWFwV2lkZ2V0U2VsZWN0b3JcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25TZWxlY3Q9e3RoaXMub25NYXBXaWRnZXRTZWxlY3RlZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdXNlTWFwV2lkZ2V0SWRzPXt0aGlzLnByb3BzLnVzZU1hcFdpZGdldElkc31cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIHsvKiBEYXRhIFNvdXJjZSBTZWxlY3RvciAqL31cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2V0dGluZy1zZWN0aW9uIG1iLTNcIj5cclxuICAgICAgICAgICAgICAgICAgICA8TGFiZWwgY2xhc3NOYW1lPVwic2V0dGluZy1sYWJlbCBkLWZsZXhcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgU2VsZWN0IGEgRGF0YSBTb3VyY2U6XHJcbiAgICAgICAgICAgICAgICAgICAgPC9MYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJzZXR0aW5nLW5vdGUgdGV4dC1tdXRlZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBDaG9vc2UgYSBmZWF0dXJlIGxheWVyIGNvbnRhaW5pbmcgdGFzayBkYXRhLlxyXG4gICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICB7IXRoaXMucHJvcHMudXNlRGF0YVNvdXJjZXMgfHwgdGhpcy5wcm9wcy51c2VEYXRhU291cmNlcy5sZW5ndGggPT09IDAgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxBbGVydCB0eXBlPVwiaW5mb1wiIGNsYXNzTmFtZT1cInctMTAwIG1iLTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgUGxlYXNlIHNlbGVjdCBhIG1hcCB3aWRnZXQgZmlyc3QgdG8gYXV0by1kZXRlY3QgZGF0YSBzb3VyY2VzLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0FsZXJ0PlxyXG4gICAgICAgICAgICAgICAgICAgICkgOiBudWxsfVxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIDxEYXRhU291cmNlU2VsZWN0b3JcclxuICAgICAgICAgICAgICAgICAgICAgICAgbXVzdFVzZURhdGFTb3VyY2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZXM9e3RoaXMuc3VwcG9ydGVkVHlwZXN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVzZURhdGFTb3VyY2VzPXt0aGlzLnByb3BzLnVzZURhdGFTb3VyY2VzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5vbkRhdGFTb3VyY2VDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZGdldElkPXt0aGlzLnByb3BzLmlkfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBoaWRlRGF0YVZpZXc9e3RydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB7LyogQXBwZWFyYW5jZSBTZWN0aW9uICovfVxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZXR0aW5nLXNlY3Rpb24gbWItM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxMYWJlbCBjbGFzc05hbWU9XCJzZXR0aW5nLWxhYmVsIGQtZmxleFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBBcHBlYXJhbmNlIFNldHRpbmdzOlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgey8qIEhpZ2hsaWdodCBDb2xvciAoZm9yIG1hcmtlcnMgYW5kIHNlbGVjdGVkIHJvd3MpICovfVxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sb3Itc2V0dGluZy1pdGVtIGQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXIganVzdGlmeS1jb250ZW50LWJldHdlZW4gbWItM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGFiZWwgY2xhc3NOYW1lPVwibWItMCBtci0yXCI+SGlnaGxpZ2h0IENvbG9yOjwvTGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvbG9yUGlja2VyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PXsyNn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD17MzB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I9e2hpZ2hsaWdodENvbG9yfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByZXNldENvbG9ycz17dGhpcy5jb2xvclByZXNldHN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMub25IaWdobGlnaHRDb2xvckNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZW1lbnQ9XCJib3R0b21cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sb3ItcHJldmlldyBtbC0yXCIgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogJzI0cHgnLCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6ICcyNHB4JywgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBoaWdobGlnaHRDb2xvcixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6ICcxcHggc29saWQgI2RkZCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAnMnB4J1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX0+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIHsvKiBCYWNrZ3JvdW5kIENvbG9yICovfVxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sb3Itc2V0dGluZy1pdGVtIGQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXIganVzdGlmeS1jb250ZW50LWJldHdlZW5cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExhYmVsIGNsYXNzTmFtZT1cIm1iLTAgbXItMlwiPkJhY2tncm91bmQgQ29sb3I6PC9MYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q29sb3JQaWNrZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9ezI2fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPXszMH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj17YmFja2dyb3VuZENvbG9yfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByZXNldENvbG9ycz17dGhpcy5iZ0NvbG9yUHJlc2V0c31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5vbkJhY2tncm91bmRDb2xvckNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZW1lbnQ9XCJib3R0b21cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sb3ItcHJldmlldyBtbC0yXCIgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogJzI0cHgnLCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6ICcyNHB4JywgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBiYWNrZ3JvdW5kQ29sb3IsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAnMXB4IHNvbGlkICNkZGQnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogJzJweCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19PjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB7LyogQWR2YW5jZWQgT3B0aW9ucyBUb2dnbGUgKi99XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNldHRpbmctc2VjdGlvbiBib3JkZXItdG9wIHB0LTNcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlbiBhbGlnbi1pdGVtcy1jZW50ZXIgbWItMlwiIG9uQ2xpY2s9e3RoaXMudG9nZ2xlQWR2YW5jZWRPcHRpb25zfSBzdHlsZT17eyBjdXJzb3I6ICdwb2ludGVyJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExhYmVsIGNsYXNzTmFtZT1cInNldHRpbmctbGFiZWwgbWItMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQWR2YW5jZWQgT3B0aW9uc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8U3dpdGNoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGVja2VkPXtzaG93QWR2YW5jZWRPcHRpb25zfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMudG9nZ2xlQWR2YW5jZWRPcHRpb25zfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIHsvKiBBZHZhbmNlZCBvcHRpb25zIGNvbnRlbnQgKi99XHJcbiAgICAgICAgICAgICAgICAgICAge3Nob3dBZHZhbmNlZE9wdGlvbnMgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFkdmFuY2VkLW9wdGlvbnMtY29udGFpbmVyIHBsLTIgYm9yZGVyLWxlZnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlciBtYi0yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDaGVja2JveFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tlZD17dGhpcy5wcm9wcy5jb25maWc/LnNldHRpbmdzPy5lbmFibGVBdXRvWm9vbSAhPT0gZmFsc2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGV2dCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHNldHRpbmdzID0gdGhpcy5wcm9wcy5jb25maWc/LnNldHRpbmdzIHx8IHt9O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMub25TZXR0aW5nQ2hhbmdlKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IHRoaXMucHJvcHMuaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbmZpZzogdGhpcy5wcm9wcy5jb25maWcuc2V0KCdzZXR0aW5ncycsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC4uLnNldHRpbmdzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZW5hYmxlQXV0b1pvb206IGV2dC50YXJnZXQuY2hlY2tlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1yLTJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGFiZWwgY2xhc3NOYW1lPVwibWItMFwiPkF1dG8tem9vbSB0byBzZWxlY3RlZCBpdGVtczwvTGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyIG1iLTNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENoZWNrYm94XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGVja2VkPXt0aGlzLnByb3BzLmNvbmZpZz8uc2V0dGluZ3M/LnNob3dNYXBJbmRpY2F0b3JzICE9PSBmYWxzZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXZ0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgc2V0dGluZ3MgPSB0aGlzLnByb3BzLmNvbmZpZz8uc2V0dGluZ3MgfHwge307XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5vblNldHRpbmdDaGFuZ2Uoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZDogdGhpcy5wcm9wcy5pZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uZmlnOiB0aGlzLnByb3BzLmNvbmZpZy5zZXQoJ3NldHRpbmdzJywge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLi4uc2V0dGluZ3MsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaG93TWFwSW5kaWNhdG9yczogZXZ0LnRhcmdldC5jaGVja2VkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibXItMlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMYWJlbCBjbGFzc05hbWU9XCJtYi0wXCI+U2hvdyBtYXAgbG9jYXRpb24gaW5kaWNhdG9yczwvTGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyIG1iLTNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENoZWNrYm94XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGVja2VkPXt0aGlzLnByb3BzLmNvbmZpZz8uc2V0dGluZ3M/LnNob3dFeHBvcnRCdXR0b24gIT09IGZhbHNlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhldnQpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBzZXR0aW5ncyA9IHRoaXMucHJvcHMuY29uZmlnPy5zZXR0aW5ncyB8fCB7fTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLm9uU2V0dGluZ0NoYW5nZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiB0aGlzLnByb3BzLmlkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25maWc6IHRoaXMucHJvcHMuY29uZmlnLnNldCgnc2V0dGluZ3MnLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuLi5zZXR0aW5ncyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNob3dFeHBvcnRCdXR0b246IGV2dC50YXJnZXQuY2hlY2tlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1yLTJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGFiZWwgY2xhc3NOYW1lPVwibWItMFwiPlNob3cgZXhwb3J0IHRvIEV4Y2VsIGJ1dHRvbjwvTGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDaGVja2JveFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tlZD17dGhpcy5wcm9wcy5jb25maWc/LnNldHRpbmdzPy5hdXRvRXhwYW5kRmlyc3RFbXBsb3llZSAhPT0gZmFsc2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGV2dCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHNldHRpbmdzID0gdGhpcy5wcm9wcy5jb25maWc/LnNldHRpbmdzIHx8IHt9O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMub25TZXR0aW5nQ2hhbmdlKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IHRoaXMucHJvcHMuaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbmZpZzogdGhpcy5wcm9wcy5jb25maWcuc2V0KCdzZXR0aW5ncycsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC4uLnNldHRpbmdzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXV0b0V4cGFuZEZpcnN0RW1wbG95ZWU6IGV2dC50YXJnZXQuY2hlY2tlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1yLTJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGFiZWwgY2xhc3NOYW1lPVwibWItMFwiPkF1dG8tZXhwYW5kIGZpcnN0IGVtcGxveWVlPC9MYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogUGFnZSBTaXplIFNlbGVjdG9yICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi0zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExhYmVsPkRlZmF1bHQgUGFnZSBTaXplPC9MYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c2VsZWN0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnByb3BzLmNvbmZpZz8uc2V0dGluZ3M/LmRlZmF1bHRQYWdlU2l6ZSB8fCAyMH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhldnQpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHNldHRpbmdzID0gdGhpcy5wcm9wcy5jb25maWc/LnNldHRpbmdzIHx8IHt9O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5vblNldHRpbmdDaGFuZ2Uoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiB0aGlzLnByb3BzLmlkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbmZpZzogdGhpcy5wcm9wcy5jb25maWcuc2V0KCdzZXR0aW5ncycsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLi4uc2V0dGluZ3MsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHRQYWdlU2l6ZTogcGFyc2VJbnQoZXZ0LnRhcmdldC52YWx1ZSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPXsxMH0+MTAgaXRlbXM8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT17MjB9PjIwIGl0ZW1zPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9ezUwfT41MCBpdGVtczwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPXsxMDB9PjEwMCBpdGVtczwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiBEZWZhdWx0IERhdGUgUmFuZ2UgKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGFiZWw+RGVmYXVsdCBEYXRlIFJhbmdlPC9MYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c2VsZWN0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnByb3BzLmNvbmZpZz8uc2V0dGluZ3M/LmRlZmF1bHREYXRlUmFuZ2UgfHwgJzMwJ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhldnQpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHNldHRpbmdzID0gdGhpcy5wcm9wcy5jb25maWc/LnNldHRpbmdzIHx8IHt9O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5vblNldHRpbmdDaGFuZ2Uoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiB0aGlzLnByb3BzLmlkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbmZpZzogdGhpcy5wcm9wcy5jb25maWcuc2V0KCdzZXR0aW5ncycsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLi4uc2V0dGluZ3MsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHREYXRlUmFuZ2U6IGV2dC50YXJnZXQudmFsdWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiMVwiPkxhc3QgMSBkYXk8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjdcIj5MYXN0IDcgZGF5czwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiMzBcIj5MYXN0IDMwIGRheXM8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIjM2NVwiPkxhc3QgMzY1IGRheXM8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NlbGVjdD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgeyBcclxuICAgIFJlYWN0XHJcbn0gZnJvbSAnamltdS1jb3JlJztcclxuaW1wb3J0IHsgQWxsV2lkZ2V0U2V0dGluZ1Byb3BzIH0gZnJvbSAnamltdS1mb3ItYnVpbGRlcic7XHJcbmltcG9ydCB7IExhYmVsLCBTd2l0Y2gsIFRleHRJbnB1dCwgQWxlcnQsIENoZWNrYm94IH0gZnJvbSAnamltdS11aSc7XHJcbmltcG9ydCB7IENvbG9yUGlja2VyIH0gZnJvbSAnamltdS11aS9iYXNpYy9jb2xvci1waWNrZXInO1xyXG5pbXBvcnQgeyBJbW0gfSBmcm9tICcuLi9pbW11dGFibGVIZWxwZXInO1xyXG5cclxuaW50ZXJmYWNlIFNldHRpbmdTdGF0ZSB7XHJcbiAgICBzaG93QWR2YW5jZWRPcHRpb25zOiBib29sZWFuO1xyXG4gICAgYXBpVXJsOiBzdHJpbmc7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFhvZGltQ291bnRTZXR0aW5nIGV4dGVuZHMgUmVhY3QuUHVyZUNvbXBvbmVudDxcclxuICAgIEFsbFdpZGdldFNldHRpbmdQcm9wczxhbnk+LFxyXG4gICAgU2V0dGluZ1N0YXRlXHJcbj4ge1xyXG4gICAgXHJcbiAgICAvLyBDb2xvciBwcmVzZXRzIGZvciB0aGUgcHJpbWFyeSBjb2xvciBwaWNrZXJcclxuICAgIHByaW1hcnlDb2xvclByZXNldHMgPSBbXHJcbiAgICAgICAgeyBjb2xvcjogJyM0Q0FGNTAnLCBsYWJlbDogJ0dyZWVuJywgdmFsdWU6ICcjNENBRjUwJyB9LFxyXG4gICAgICAgIHsgY29sb3I6ICcjMjE5NkYzJywgbGFiZWw6ICdCbHVlJywgdmFsdWU6ICcjMjE5NkYzJyB9LFxyXG4gICAgICAgIHsgY29sb3I6ICcjRjQ0MzM2JywgbGFiZWw6ICdSZWQnLCB2YWx1ZTogJyNGNDQzMzYnIH0sXHJcbiAgICAgICAgeyBjb2xvcjogJyNGRkMxMDcnLCBsYWJlbDogJ0FtYmVyJywgdmFsdWU6ICcjRkZDMTA3JyB9LFxyXG4gICAgICAgIHsgY29sb3I6ICcjOUMyN0IwJywgbGFiZWw6ICdQdXJwbGUnLCB2YWx1ZTogJyM5QzI3QjAnIH0sXHJcbiAgICAgICAgeyBjb2xvcjogJyNGRjk4MDAnLCBsYWJlbDogJ09yYW5nZScsIHZhbHVlOiAnI0ZGOTgwMCcgfSxcclxuICAgICAgICB7IGNvbG9yOiAnIzc5NTU0OCcsIGxhYmVsOiAnQnJvd24nLCB2YWx1ZTogJyM3OTU1NDgnIH0sXHJcbiAgICAgICAgeyBjb2xvcjogJyM2MDdEOEInLCBsYWJlbDogJ0JsdWUgR3JleScsIHZhbHVlOiAnIzYwN0Q4QicgfVxyXG4gICAgXTtcclxuICAgIFxyXG4gICAgLy8gQ29sb3IgcHJlc2V0cyBmb3IgdGhlIHNlY29uZGFyeSBjb2xvciBwaWNrZXJcclxuICAgIHNlY29uZGFyeUNvbG9yUHJlc2V0cyA9IFtcclxuICAgICAgICB7IGNvbG9yOiAnIzIxOTZGMycsIGxhYmVsOiAnQmx1ZScsIHZhbHVlOiAnIzIxOTZGMycgfSxcclxuICAgICAgICB7IGNvbG9yOiAnIzRDQUY1MCcsIGxhYmVsOiAnR3JlZW4nLCB2YWx1ZTogJyM0Q0FGNTAnIH0sXHJcbiAgICAgICAgeyBjb2xvcjogJyNGRjk4MDAnLCBsYWJlbDogJ09yYW5nZScsIHZhbHVlOiAnI0ZGOTgwMCcgfSxcclxuICAgICAgICB7IGNvbG9yOiAnIzlDMjdCMCcsIGxhYmVsOiAnUHVycGxlJywgdmFsdWU6ICcjOUMyN0IwJyB9LFxyXG4gICAgICAgIHsgY29sb3I6ICcjRjQ0MzM2JywgbGFiZWw6ICdSZWQnLCB2YWx1ZTogJyNGNDQzMzYnIH0sXHJcbiAgICAgICAgeyBjb2xvcjogJyNGRkMxMDcnLCBsYWJlbDogJ0FtYmVyJywgdmFsdWU6ICcjRkZDMTA3JyB9LFxyXG4gICAgICAgIHsgY29sb3I6ICcjNzk1NTQ4JywgbGFiZWw6ICdCcm93bicsIHZhbHVlOiAnIzc5NTU0OCcgfSxcclxuICAgICAgICB7IGNvbG9yOiAnIzYwN0Q4QicsIGxhYmVsOiAnQmx1ZSBHcmV5JywgdmFsdWU6ICcjNjA3RDhCJyB9XHJcbiAgICBdO1xyXG4gICAgXHJcbiAgICAvLyBCYWNrZ3JvdW5kIGNvbG9yIHByZXNldHNcclxuICAgIGJnQ29sb3JQcmVzZXRzID0gW1xyXG4gICAgICAgIHsgY29sb3I6ICcjRkZGRkZGJywgbGFiZWw6ICdXaGl0ZScsIHZhbHVlOiAnI0ZGRkZGRicgfSxcclxuICAgICAgICB7IGNvbG9yOiAnI0Y1RjVGNScsIGxhYmVsOiAnTGlnaHQgR3JleScsIHZhbHVlOiAnI0Y1RjVGNScgfSxcclxuICAgICAgICB7IGNvbG9yOiAnI0VFRUVFRScsIGxhYmVsOiAnR3JleScsIHZhbHVlOiAnI0VFRUVFRScgfSxcclxuICAgICAgICB7IGNvbG9yOiAnIzJCMkIyQicsIGxhYmVsOiAnRGFyaycsIHZhbHVlOiAnIzJCMkIyQicgfSxcclxuICAgICAgICB7IGNvbG9yOiAnI0UzRjJGRCcsIGxhYmVsOiAnTGlnaHQgQmx1ZScsIHZhbHVlOiAnI0UzRjJGRCcgfSxcclxuICAgICAgICB7IGNvbG9yOiAnI0U4RjVFOScsIGxhYmVsOiAnTGlnaHQgR3JlZW4nLCB2YWx1ZTogJyNFOEY1RTknIH0sXHJcbiAgICAgICAgeyBjb2xvcjogJyNGRkY4RTEnLCBsYWJlbDogJ0xpZ2h0IEFtYmVyJywgdmFsdWU6ICcjRkZGOEUxJyB9LFxyXG4gICAgICAgIHsgY29sb3I6ICdyZ2JhKDAsMCwwLDApJywgbGFiZWw6ICdUcmFuc3BhcmVudCcsIHZhbHVlOiAncmdiYSgwLDAsMCwwKScgfVxyXG4gICAgXTtcclxuICAgIFxyXG4gICAgY29uc3RydWN0b3IocHJvcHM6IEFsbFdpZGdldFNldHRpbmdQcm9wczxhbnk+KSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIEluaXRpYWxpemUgc3RhdGUgZnJvbSBjb25maWdcclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICBzaG93QWR2YW5jZWRPcHRpb25zOiBmYWxzZSxcclxuICAgICAgICAgICAgYXBpVXJsOiB0aGlzLnByb3BzLmNvbmZpZz8uYXBpVXJsIHx8ICdodHRwczovL2FwaS5nZW9hbC51ei94b2RpbS1jb3VudHMnXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLy8gVG9nZ2xlIGFkdmFuY2VkIG9wdGlvbnMgZGlzcGxheVxyXG4gICAgdG9nZ2xlQWR2YW5jZWRPcHRpb25zID0gKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUocHJldlN0YXRlID0+ICh7XHJcbiAgICAgICAgICAgIHNob3dBZHZhbmNlZE9wdGlvbnM6ICFwcmV2U3RhdGUuc2hvd0FkdmFuY2VkT3B0aW9uc1xyXG4gICAgICAgIH0pKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLy8gSGFuZGxlIEFQSSBVUkwgY2hhbmdlXHJcbiAgICBvbkFwaVVybENoYW5nZSA9IChldmVudDogUmVhY3QuQ2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pID0+IHtcclxuICAgICAgICBjb25zdCBhcGlVcmwgPSBldmVudC50YXJnZXQudmFsdWU7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGFwaVVybCB9KTtcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLnVwZGF0ZUNvbmZpZygnYXBpVXJsJywgYXBpVXJsKTtcclxuICAgIH07XHJcbiAgICBcclxuICAgIC8vIEhhbmRsZSBwcmltYXJ5IGNvbG9yIGNoYW5nZVxyXG4gICAgb25QcmltYXJ5Q29sb3JDaGFuZ2UgPSAoY29sb3I6IHN0cmluZykgPT4ge1xyXG4gICAgICAgIHRoaXMudXBkYXRlQ29uZmlnKCdwcmltYXJ5Q29sb3InLCBjb2xvcik7XHJcbiAgICB9O1xyXG4gICAgXHJcbiAgICAvLyBIYW5kbGUgc2Vjb25kYXJ5IGNvbG9yIGNoYW5nZVxyXG4gICAgb25TZWNvbmRhcnlDb2xvckNoYW5nZSA9IChjb2xvcjogc3RyaW5nKSA9PiB7XHJcbiAgICAgICAgdGhpcy51cGRhdGVDb25maWcoJ3NlY29uZGFyeUNvbG9yJywgY29sb3IpO1xyXG4gICAgfTtcclxuICAgIFxyXG4gICAgLy8gSGFuZGxlIGJhY2tncm91bmQgY29sb3IgY2hhbmdlXHJcbiAgICBvbkJhY2tncm91bmRDb2xvckNoYW5nZSA9IChjb2xvcjogc3RyaW5nKSA9PiB7XHJcbiAgICAgICAgdGhpcy51cGRhdGVDb25maWcoJ2JhY2tncm91bmRDb2xvcicsIGNvbG9yKTtcclxuICAgIH07XHJcbiAgICBcclxuICAgIC8vIEhhbmRsZSByZWZyZXNoIGludGVydmFsIGNoYW5nZVxyXG4gICAgb25SZWZyZXNoSW50ZXJ2YWxDaGFuZ2UgPSAoZXZlbnQ6IFJlYWN0LkNoYW5nZUV2ZW50PEhUTUxTZWxlY3RFbGVtZW50PikgPT4ge1xyXG4gICAgICAgIGNvbnN0IHJlZnJlc2hJbnRlcnZhbCA9IHBhcnNlSW50KGV2ZW50LnRhcmdldC52YWx1ZSkgfHwgMDtcclxuICAgICAgICB0aGlzLnVwZGF0ZUNvbmZpZygncmVmcmVzaEludGVydmFsJywgcmVmcmVzaEludGVydmFsKTtcclxuICAgIH07XHJcbiAgICBcclxuICAgIC8vIEhhbmRsZSB3aWRnZXQgdGl0bGUgY2hhbmdlXHJcbiAgICBvbldpZGdldFRpdGxlQ2hhbmdlID0gKGV2ZW50OiBSZWFjdC5DaGFuZ2VFdmVudDxIVE1MSW5wdXRFbGVtZW50PikgPT4ge1xyXG4gICAgICAgIGNvbnN0IHRpdGxlID0gZXZlbnQudGFyZ2V0LnZhbHVlO1xyXG4gICAgICAgIHRoaXMudXBkYXRlQ29uZmlnKCd3aWRnZXRUaXRsZScsIHRpdGxlKTtcclxuICAgIH07XHJcbiAgICBcclxuICAgIC8vIEhhbmRsZSBzdWJ0aXRsZSBjaGFuZ2VcclxuICAgIG9uU3VidGl0bGVDaGFuZ2UgPSAoZXZlbnQ6IFJlYWN0LkNoYW5nZUV2ZW50PEhUTUxJbnB1dEVsZW1lbnQ+KSA9PiB7XHJcbiAgICAgICAgY29uc3Qgc3VidGl0bGUgPSBldmVudC50YXJnZXQudmFsdWU7XHJcbiAgICAgICAgdGhpcy51cGRhdGVDb25maWcoJ3N1YnRpdGxlJywgc3VidGl0bGUpO1xyXG4gICAgfTtcclxuICAgIFxyXG4gICAgLy8gSGFuZGxlIGNoZWNrYm94IGNoYW5nZXMgZm9yIGRpc3BsYXkgb3B0aW9uc1xyXG4gICAgb25EaXNwbGF5T3B0aW9uQ2hhbmdlID0gKG9wdGlvbk5hbWU6IHN0cmluZywgY2hlY2tlZDogYm9vbGVhbikgPT4ge1xyXG4gICAgICAgIHRoaXMudXBkYXRlQ29uZmlnKG9wdGlvbk5hbWUsIGNoZWNrZWQpO1xyXG4gICAgfTtcclxuICAgIFxyXG4gICAgLy8gSGVscGVyIG1ldGhvZCB0byB1cGRhdGUgY29uZmlnXHJcbiAgICB1cGRhdGVDb25maWcgPSAoa2V5OiBzdHJpbmcsIHZhbHVlOiB1bmtub3duKSA9PiB7XHJcbiAgICAgICAgaWYgKHRoaXMucHJvcHMuY29uZmlnKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IG5ld0NvbmZpZyA9IHRoaXMucHJvcHMuY29uZmlnLnNldFxyXG4gICAgICAgICAgICAgICAgPyB0aGlzLnByb3BzLmNvbmZpZy5zZXQoa2V5LCB2YWx1ZSlcclxuICAgICAgICAgICAgICAgIDogSW1tKHtcclxuICAgICAgICAgICAgICAgICAgICAuLi50aGlzLnByb3BzLmNvbmZpZyxcclxuICAgICAgICAgICAgICAgICAgICBba2V5XTogdmFsdWVcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHRoaXMucHJvcHMub25TZXR0aW5nQ2hhbmdlKHtcclxuICAgICAgICAgICAgICAgIGlkOiB0aGlzLnByb3BzLmlkLFxyXG4gICAgICAgICAgICAgICAgY29uZmlnOiBuZXdDb25maWdcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIFxyXG4gICAgLy8gSGFuZGxlIGFuaW1hdGlvbiBzZXR0aW5ncyBjaGFuZ2VcclxuICAgIG9uQW5pbWF0aW9uU3BlZWRDaGFuZ2UgPSAoZXZlbnQ6IFJlYWN0LkNoYW5nZUV2ZW50PEhUTUxTZWxlY3RFbGVtZW50PikgPT4ge1xyXG4gICAgICAgIGNvbnN0IHNwZWVkID0gZXZlbnQudGFyZ2V0LnZhbHVlO1xyXG4gICAgICAgIHRoaXMudXBkYXRlQ29uZmlnKCdhbmltYXRpb25TcGVlZCcsIHNwZWVkKTtcclxuICAgIH07XHJcbiAgICBcclxuICAgIC8vIEhhbmRsZSBudW1iZXIgZm9ybWF0IGNoYW5nZVxyXG4gICAgb25OdW1iZXJGb3JtYXRDaGFuZ2UgPSAoZXZlbnQ6IFJlYWN0LkNoYW5nZUV2ZW50PEhUTUxTZWxlY3RFbGVtZW50PikgPT4ge1xyXG4gICAgICAgIGNvbnN0IGZvcm1hdCA9IGV2ZW50LnRhcmdldC52YWx1ZTtcclxuICAgICAgICB0aGlzLnVwZGF0ZUNvbmZpZygnbnVtYmVyRm9ybWF0JywgZm9ybWF0KTtcclxuICAgIH07XHJcbiAgICBcclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBjb25zdCB7IHNob3dBZHZhbmNlZE9wdGlvbnMsIGFwaVVybCB9ID0gdGhpcy5zdGF0ZTtcclxuICAgICAgICBjb25zdCBjb25maWcgPSB0aGlzLnByb3BzLmNvbmZpZyB8fCB7fTtcclxuICAgICAgICBcclxuICAgICAgICAvLyBHZXQgdmFsdWVzIGZyb20gY29uZmlnIHdpdGggZGVmYXVsdHNcclxuICAgICAgICBjb25zdCBwcmltYXJ5Q29sb3IgPSBjb25maWcucHJpbWFyeUNvbG9yIHx8ICcjNENBRjUwJztcclxuICAgICAgICBjb25zdCBzZWNvbmRhcnlDb2xvciA9IGNvbmZpZy5zZWNvbmRhcnlDb2xvciB8fCAnIzIxOTZGMyc7XHJcbiAgICAgICAgY29uc3QgYmFja2dyb3VuZENvbG9yID0gY29uZmlnLmJhY2tncm91bmRDb2xvciB8fCAnI0ZGRkZGRic7XHJcbiAgICAgICAgY29uc3QgcmVmcmVzaEludGVydmFsID0gY29uZmlnLnJlZnJlc2hJbnRlcnZhbCB8fCAwO1xyXG4gICAgICAgIGNvbnN0IHdpZGdldFRpdGxlID0gY29uZmlnLndpZGdldFRpdGxlIHx8ICdYb2RpbWxhciBzdGF0aXN0aWthc2knO1xyXG4gICAgICAgIGNvbnN0IHN1YnRpdGxlID0gY29uZmlnLnN1YnRpdGxlIHx8ICcnO1xyXG4gICAgICAgIGNvbnN0IGFuaW1hdGlvblNwZWVkID0gY29uZmlnLmFuaW1hdGlvblNwZWVkIHx8ICdub3JtYWwnO1xyXG4gICAgICAgIGNvbnN0IG51bWJlckZvcm1hdCA9IGNvbmZpZy5udW1iZXJGb3JtYXQgfHwgJ3N0YW5kYXJkJztcclxuICAgICAgICBcclxuICAgICAgICAvLyBEaXNwbGF5IG9wdGlvbnMgd2l0aCBkZWZhdWx0c1xyXG4gICAgICAgIGNvbnN0IHNob3dQcm9ncmVzc0JhciA9IGNvbmZpZy5zaG93UHJvZ3Jlc3NCYXIgIT09IGZhbHNlO1xyXG4gICAgICAgIGNvbnN0IHNob3dEYXRlSW5mbyA9IGNvbmZpZy5zaG93RGF0ZUluZm8gIT09IGZhbHNlO1xyXG4gICAgICAgIGNvbnN0IHNob3dQZXJjZW50YWdlID0gY29uZmlnLnNob3dQZXJjZW50YWdlICE9PSBmYWxzZTtcclxuICAgICAgICBjb25zdCBzaG93UmVnaW9uTmFtZSA9IGNvbmZpZy5zaG93UmVnaW9uTmFtZSAhPT0gZmFsc2U7XHJcbiAgICAgICAgY29uc3QgZW5hYmxlSG92ZXJFZmZlY3RzID0gY29uZmlnLmVuYWJsZUhvdmVyRWZmZWN0cyAhPT0gZmFsc2U7XHJcbiAgICAgICAgY29uc3Qgc2hvd1Rvb2x0aXBzID0gY29uZmlnLnNob3dUb29sdGlwcyAhPT0gZmFsc2U7XHJcbiAgICAgICAgY29uc3QgZW5hYmxlQ2xpY2tUb1JlZnJlc2ggPSBjb25maWcuZW5hYmxlQ2xpY2tUb1JlZnJlc2ggIT09IGZhbHNlO1xyXG4gICAgICAgIGNvbnN0IHNob3dMb2FkaW5nQW5pbWF0aW9uID0gY29uZmlnLnNob3dMb2FkaW5nQW5pbWF0aW9uICE9PSBmYWxzZTtcclxuICAgICAgICBcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndpZGdldC1zZXR0aW5nLWNvbnRhaW5lciBwLTJcIj5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgey8qIFdpZGdldCBEZXNjcmlwdGlvbiAqL31cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2V0dGluZy1zZWN0aW9uIG1iLTNcIj5cclxuICAgICAgICAgICAgICAgICAgICA8QWxlcnQgdHlwZT1cImluZm9cIiBjbGFzc05hbWU9XCJ3LTEwMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHN0cm9uZz5Yb2RpbSBDb3VudCBXaWRnZXQ8L3N0cm9uZz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm1iLTAgbXQtMVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRoaXMgd2lkZ2V0IGRpc3BsYXlzIHdvcmtlciBzdGF0aXN0aWNzICh0b3RhbCBhbmQgdG9kYXkncyBhY3RpdmUgd29ya2VycykgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFzZWQgb24gdGhlIHNlbGVjdGVkIHJlZ2lvbiBmcm9tIG90aGVyIHdpZGdldHMuIEl0IGF1dG9tYXRpY2FsbHkgbGlzdGVucyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0byByZWdpb24gc2VsZWN0aW9uIGV2ZW50cyBhbmQgdXBkYXRlcyBhY2NvcmRpbmdseS5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9BbGVydD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB7LyogQmFzaWMgQ29uZmlndXJhdGlvbiAqL31cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2V0dGluZy1zZWN0aW9uIG1iLTNcIj5cclxuICAgICAgICAgICAgICAgICAgICA8TGFiZWwgY2xhc3NOYW1lPVwic2V0dGluZy1sYWJlbCBkLWZsZXhcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgQmFzaWMgQ29uZmlndXJhdGlvbjpcclxuICAgICAgICAgICAgICAgICAgICA8L0xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIHsvKiBXaWRnZXQgVGl0bGUgKi99XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi0yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMYWJlbCBjbGFzc05hbWU9XCJtYi0xXCI+V2lkZ2V0IFRpdGxlOjwvTGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0SW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt3aWRnZXRUaXRsZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLm9uV2lkZ2V0VGl0bGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlhvZGltbGFyIHN0YXRpc3Rpa2FzaVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzbWFsbCBjbGFzc05hbWU9XCJ0ZXh0LW11dGVkIGQtYmxvY2sgbXQtMVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgVGhlIG1haW4gdGl0bGUgZGlzcGxheWVkIGF0IHRoZSB0b3Agb2YgdGhlIHdpZGdldC5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zbWFsbD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICB7LyogU3VidGl0bGUgKi99XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi0yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMYWJlbCBjbGFzc05hbWU9XCJtYi0xXCI+U3VidGl0bGUgKE9wdGlvbmFsKTo8L0xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VGV4dElucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17c3VidGl0bGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5vblN1YnRpdGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJBZGRpdGlvbmFsIGluZm9ybWF0aW9uIHRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c21hbGwgY2xhc3NOYW1lPVwidGV4dC1tdXRlZCBkLWJsb2NrIG10LTFcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIE9wdGlvbmFsIHN1YnRpdGxlIHRleHQgZGlzcGxheWVkIGJlbG93IHRoZSBtYWluIHRpdGxlLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NtYWxsPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIHsvKiBBUEkgQ29uZmlndXJhdGlvbiAqL31cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2V0dGluZy1zZWN0aW9uIG1iLTNcIj5cclxuICAgICAgICAgICAgICAgICAgICA8TGFiZWwgY2xhc3NOYW1lPVwic2V0dGluZy1sYWJlbCBkLWZsZXhcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgQVBJIENvbmZpZ3VyYXRpb246XHJcbiAgICAgICAgICAgICAgICAgICAgPC9MYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJzZXR0aW5nLW5vdGUgdGV4dC1tdXRlZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBDb25maWd1cmUgdGhlIEFQSSBlbmRwb2ludCBmb3IgZmV0Y2hpbmcgd29ya2VyIHN0YXRpc3RpY3MuXHJcbiAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGFiZWwgY2xhc3NOYW1lPVwibWItMVwiPkFQSSBVUkw6PC9MYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRJbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2FwaVVybH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLm9uQXBpVXJsQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJodHRwczovL2FwaS5nZW9hbC51ei94b2RpbS1jb3VudHNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c21hbGwgY2xhc3NOYW1lPVwidGV4dC1tdXRlZCBkLWJsb2NrIG10LTFcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRoZSBBUEkgZW5kcG9pbnQgc2hvdWxkIGFjY2VwdCAndmlsb3lhdCcgYW5kICd0dW1hbicgcXVlcnkgcGFyYW1ldGVycy5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zbWFsbD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB7LyogQXBwZWFyYW5jZSBTZWN0aW9uICovfVxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZXR0aW5nLXNlY3Rpb24gbWItM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxMYWJlbCBjbGFzc05hbWU9XCJzZXR0aW5nLWxhYmVsIGQtZmxleFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBBcHBlYXJhbmNlIFNldHRpbmdzOlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgey8qIFByaW1hcnkgQ29sb3IgKi99XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xvci1zZXR0aW5nLWl0ZW0gZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlbiBtYi0zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMYWJlbCBjbGFzc05hbWU9XCJtYi0wIG1yLTJcIj5QcmltYXJ5IENvbG9yIChUb3RhbCBXb3JrZXJzKTo8L0xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDb2xvclBpY2tlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD17MjZ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9ezMwfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPXtwcmltYXJ5Q29sb3J9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJlc2V0Q29sb3JzPXt0aGlzLnByaW1hcnlDb2xvclByZXNldHN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMub25QcmltYXJ5Q29sb3JDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2VtZW50PVwiYm90dG9tXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbG9yLXByZXZpZXcgbWwtMlwiIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6ICcyNHB4JywgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAnMjRweCcsIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogcHJpbWFyeUNvbG9yLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogJzFweCBzb2xpZCAjZGRkJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6ICcycHgnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fT48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgey8qIFNlY29uZGFyeSBDb2xvciAqL31cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbG9yLXNldHRpbmctaXRlbSBkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyIGp1c3RpZnktY29udGVudC1iZXR3ZWVuIG1iLTNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExhYmVsIGNsYXNzTmFtZT1cIm1iLTAgbXItMlwiPlNlY29uZGFyeSBDb2xvciAoVG9kYXkncyBXb3JrZXJzKTo8L0xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDb2xvclBpY2tlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD17MjZ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9ezMwfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPXtzZWNvbmRhcnlDb2xvcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmVzZXRDb2xvcnM9e3RoaXMuc2Vjb25kYXJ5Q29sb3JQcmVzZXRzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLm9uU2Vjb25kYXJ5Q29sb3JDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2VtZW50PVwiYm90dG9tXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbG9yLXByZXZpZXcgbWwtMlwiIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6ICcyNHB4JywgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAnMjRweCcsIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogc2Vjb25kYXJ5Q29sb3IsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAnMXB4IHNvbGlkICNkZGQnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogJzJweCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19PjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICB7LyogQmFja2dyb3VuZCBDb2xvciAqL31cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbG9yLXNldHRpbmctaXRlbSBkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyIGp1c3RpZnktY29udGVudC1iZXR3ZWVuXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMYWJlbCBjbGFzc05hbWU9XCJtYi0wIG1yLTJcIj5CYWNrZ3JvdW5kIENvbG9yOjwvTGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPENvbG9yUGlja2VyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PXsyNn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD17MzB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I9e2JhY2tncm91bmRDb2xvcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmVzZXRDb2xvcnM9e3RoaXMuYmdDb2xvclByZXNldHN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMub25CYWNrZ3JvdW5kQ29sb3JDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2VtZW50PVwiYm90dG9tXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbG9yLXByZXZpZXcgbWwtMlwiIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6ICcyNHB4JywgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAnMjRweCcsIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogYmFja2dyb3VuZENvbG9yLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogJzFweCBzb2xpZCAjZGRkJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6ICcycHgnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fT48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgey8qIERpc3BsYXkgT3B0aW9ucyAqL31cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2V0dGluZy1zZWN0aW9uIG1iLTNcIj5cclxuICAgICAgICAgICAgICAgICAgICA8TGFiZWwgY2xhc3NOYW1lPVwic2V0dGluZy1sYWJlbCBkLWZsZXggbWItMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBEaXNwbGF5IE9wdGlvbnM6XHJcbiAgICAgICAgICAgICAgICAgICAgPC9MYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNoZWNrYm94LWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlciBtYi0yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2hlY2tib3hcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGVja2VkPXtzaG93UHJvZ3Jlc3NCYXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhldnQpID0+IHRoaXMub25EaXNwbGF5T3B0aW9uQ2hhbmdlKCdzaG93UHJvZ3Jlc3NCYXInLCBldnQudGFyZ2V0LmNoZWNrZWQpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1yLTJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMYWJlbCBjbGFzc05hbWU9XCJtYi0wXCI+U2hvdyBhY3Rpdml0eSBwcm9ncmVzcyBiYXI8L0xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlciBtYi0yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2hlY2tib3hcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGVja2VkPXtzaG93UGVyY2VudGFnZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGV2dCkgPT4gdGhpcy5vbkRpc3BsYXlPcHRpb25DaGFuZ2UoJ3Nob3dQZXJjZW50YWdlJywgZXZ0LnRhcmdldC5jaGVja2VkKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtci0yXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGFiZWwgY2xhc3NOYW1lPVwibWItMFwiPlNob3cgcGVyY2VudGFnZSBpbiBwcm9ncmVzcyBiYXI8L0xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlciBtYi0yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2hlY2tib3hcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGVja2VkPXtzaG93RGF0ZUluZm99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhldnQpID0+IHRoaXMub25EaXNwbGF5T3B0aW9uQ2hhbmdlKCdzaG93RGF0ZUluZm8nLCBldnQudGFyZ2V0LmNoZWNrZWQpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1yLTJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMYWJlbCBjbGFzc05hbWU9XCJtYi0wXCI+U2hvdyBkYXRlIGluZm9ybWF0aW9uPC9MYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXIgbWItMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPENoZWNrYm94XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tlZD17c2hvd1JlZ2lvbk5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhldnQpID0+IHRoaXMub25EaXNwbGF5T3B0aW9uQ2hhbmdlKCdzaG93UmVnaW9uTmFtZScsIGV2dC50YXJnZXQuY2hlY2tlZCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibXItMlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExhYmVsIGNsYXNzTmFtZT1cIm1iLTBcIj5TaG93IGN1cnJlbnQgcmVnaW9uIG5hbWU8L0xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlciBtYi0yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2hlY2tib3hcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGVja2VkPXtzaG93VG9vbHRpcHN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhldnQpID0+IHRoaXMub25EaXNwbGF5T3B0aW9uQ2hhbmdlKCdzaG93VG9vbHRpcHMnLCBldnQudGFyZ2V0LmNoZWNrZWQpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1yLTJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMYWJlbCBjbGFzc05hbWU9XCJtYi0wXCI+U2hvdyBoZWxwZnVsIHRvb2x0aXBzPC9MYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDaGVja2JveFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9e3Nob3dMb2FkaW5nQW5pbWF0aW9ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXZ0KSA9PiB0aGlzLm9uRGlzcGxheU9wdGlvbkNoYW5nZSgnc2hvd0xvYWRpbmdBbmltYXRpb24nLCBldnQudGFyZ2V0LmNoZWNrZWQpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1yLTJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMYWJlbCBjbGFzc05hbWU9XCJtYi0wXCI+U2hvdyBsb2FkaW5nIGFuaW1hdGlvbnM8L0xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB7LyogQWR2YW5jZWQgT3B0aW9ucyBUb2dnbGUgKi99XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNldHRpbmctc2VjdGlvbiBib3JkZXItdG9wIHB0LTNcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlbiBhbGlnbi1pdGVtcy1jZW50ZXIgbWItMlwiIG9uQ2xpY2s9e3RoaXMudG9nZ2xlQWR2YW5jZWRPcHRpb25zfSBzdHlsZT17eyBjdXJzb3I6ICdwb2ludGVyJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExhYmVsIGNsYXNzTmFtZT1cInNldHRpbmctbGFiZWwgbWItMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQWR2YW5jZWQgT3B0aW9uc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8U3dpdGNoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGVja2VkPXtzaG93QWR2YW5jZWRPcHRpb25zfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMudG9nZ2xlQWR2YW5jZWRPcHRpb25zfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIHsvKiBBZHZhbmNlZCBvcHRpb25zIGNvbnRlbnQgKi99XHJcbiAgICAgICAgICAgICAgICAgICAge3Nob3dBZHZhbmNlZE9wdGlvbnMgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFkdmFuY2VkLW9wdGlvbnMtY29udGFpbmVyIHBsLTIgYm9yZGVyLWxlZnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIEF1dG8tcmVmcmVzaCBTZXR0aW5ncyAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMYWJlbCBjbGFzc05hbWU9XCJtYi0yXCI+QXV0by1yZWZyZXNoIFNldHRpbmdzOjwvTGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyIG1iLTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExhYmVsIGNsYXNzTmFtZT1cIm1iLTAgbXItMlwiIHN0eWxlPXt7IG1pbldpZHRoOiAnMTIwcHgnIH19PlJlZnJlc2ggSW50ZXJ2YWw6PC9MYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNlbGVjdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtyZWZyZXNoSW50ZXJ2YWx9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5vblJlZnJlc2hJbnRlcnZhbENoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IG1heFdpZHRoOiAnMTUwcHgnIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9ezB9Pk1hbnVhbCBvbmx5PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPXsxMDAwMH0+MTAgc2Vjb25kczwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT17MzAwMDB9PjMwIHNlY29uZHM8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9ezYwMDAwfT4xIG1pbnV0ZTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT17MzAwMDAwfT41IG1pbnV0ZXM8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9ezYwMDAwMH0+MTAgbWludXRlczwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT17MTgwMDAwMH0+MzAgbWludXRlczwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT17MzYwMDAwMH0+MSBob3VyPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzbWFsbCBjbGFzc05hbWU9XCJ0ZXh0LW11dGVkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFNldCBhdXRvbWF0aWMgcmVmcmVzaCBpbnRlcnZhbCBmb3IgdGhlIHdpZGdldCBkYXRhLiBDaG9vc2UgXCJNYW51YWwgb25seVwiIHRvIGRpc2FibGUgYXV0by1yZWZyZXNoLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc21hbGw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIE51bWJlciBGb3JtYXQgU2V0dGluZ3MgKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGFiZWwgY2xhc3NOYW1lPVwibWItMlwiPk51bWJlciBGb3JtYXQ6PC9MYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXIgbWItMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGFiZWwgY2xhc3NOYW1lPVwibWItMCBtci0yXCIgc3R5bGU9e3sgbWluV2lkdGg6ICcxMjBweCcgfX0+Rm9ybWF0IFN0eWxlOjwvTGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzZWxlY3RcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17bnVtYmVyRm9ybWF0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMub25OdW1iZXJGb3JtYXRDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBtYXhXaWR0aDogJzE1MHB4JyB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwic3RhbmRhcmRcIj5TdGFuZGFyZCAoMSwyMzQpPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiY29tcGFjdFwiPkNvbXBhY3QgKDEuMkspPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwic2NpZW50aWZpY1wiPlNjaWVudGlmaWMgKDEuMjNFKzMpPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwicGVyY2VudGFnZVwiPlBlcmNlbnRhZ2UgKDEyLjM0JSk8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNtYWxsIGNsYXNzTmFtZT1cInRleHQtbXV0ZWRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQ2hvb3NlIGhvdyBudW1iZXJzIGFyZSBkaXNwbGF5ZWQgaW4gdGhlIHdpZGdldC5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NtYWxsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiBBbmltYXRpb24gU2V0dGluZ3MgKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGFiZWwgY2xhc3NOYW1lPVwibWItMlwiPkFuaW1hdGlvbiBTZXR0aW5nczo8L0xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlciBtYi0yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMYWJlbCBjbGFzc05hbWU9XCJtYi0wIG1yLTJcIiBzdHlsZT17eyBtaW5XaWR0aDogJzEyMHB4JyB9fT5BbmltYXRpb24gU3BlZWQ6PC9MYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNlbGVjdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXthbmltYXRpb25TcGVlZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLm9uQW5pbWF0aW9uU3BlZWRDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBtYXhXaWR0aDogJzE1MHB4JyB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwibm9uZVwiPk5vIEFuaW1hdGlvbjwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cInNsb3dcIj5TbG93PC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwibm9ybWFsXCI+Tm9ybWFsPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiZmFzdFwiPkZhc3Q8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyIG1iLTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENoZWNrYm94XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGVja2VkPXtlbmFibGVIb3ZlckVmZmVjdHN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGV2dCkgPT4gdGhpcy5vbkRpc3BsYXlPcHRpb25DaGFuZ2UoJ2VuYWJsZUhvdmVyRWZmZWN0cycsIGV2dC50YXJnZXQuY2hlY2tlZCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtci0yXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExhYmVsIGNsYXNzTmFtZT1cIm1iLTBcIj5FbmFibGUgaG92ZXIgZWZmZWN0czwvTGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNtYWxsIGNsYXNzTmFtZT1cInRleHQtbXV0ZWRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQ29udHJvbCBhbmltYXRpb24gc3BlZWQgYW5kIGhvdmVyIGVmZmVjdHMgZm9yIGJldHRlciB1c2VyIGV4cGVyaWVuY2UuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zbWFsbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogSW50ZXJhY3Rpb24gU2V0dGluZ3MgKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGFiZWwgY2xhc3NOYW1lPVwibWItMlwiPkludGVyYWN0aW9uIFNldHRpbmdzOjwvTGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyIG1iLTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPENoZWNrYm94XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGVja2VkPXtlbmFibGVDbGlja1RvUmVmcmVzaH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXZ0KSA9PiB0aGlzLm9uRGlzcGxheU9wdGlvbkNoYW5nZSgnZW5hYmxlQ2xpY2tUb1JlZnJlc2gnLCBldnQudGFyZ2V0LmNoZWNrZWQpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibXItMlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMYWJlbCBjbGFzc05hbWU9XCJtYi0wXCI+RW5hYmxlIGNsaWNrLXRvLXJlZnJlc2g8L0xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzbWFsbCBjbGFzc05hbWU9XCJ0ZXh0LW11dGVkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEFsbG93IHVzZXJzIHRvIGNsaWNrIG9uIHRoZSB3aWRnZXQgdG8gbWFudWFsbHkgcmVmcmVzaCBkYXRhLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc21hbGw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIFBlcmZvcm1hbmNlIFNldHRpbmdzICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi0zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExhYmVsIGNsYXNzTmFtZT1cIm1iLTJcIj5QZXJmb3JtYW5jZSBTZXR0aW5nczo8L0xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlciBtYi0yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDaGVja2JveFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tlZD17Y29uZmlnLmVuYWJsZUNhY2hpbmcgIT09IGZhbHNlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhldnQpID0+IHRoaXMub25EaXNwbGF5T3B0aW9uQ2hhbmdlKCdlbmFibGVDYWNoaW5nJywgZXZ0LnRhcmdldC5jaGVja2VkKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1yLTJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGFiZWwgY2xhc3NOYW1lPVwibWItMFwiPkVuYWJsZSBkYXRhIGNhY2hpbmc8L0xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlciBtYi0yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDaGVja2JveFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tlZD17Y29uZmlnLmVuYWJsZURlYnVnTW9kZSA9PT0gdHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXZ0KSA9PiB0aGlzLm9uRGlzcGxheU9wdGlvbkNoYW5nZSgnZW5hYmxlRGVidWdNb2RlJywgZXZ0LnRhcmdldC5jaGVja2VkKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1yLTJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGFiZWwgY2xhc3NOYW1lPVwibWItMFwiPkVuYWJsZSBkZWJ1ZyBtb2RlPC9MYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c21hbGwgY2xhc3NOYW1lPVwidGV4dC1tdXRlZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBQZXJmb3JtYW5jZSBhbmQgZGVidWdnaW5nIG9wdGlvbnMuIERlYnVnIG1vZGUgd2lsbCBzaG93IGNvbnNvbGUgbG9ncy5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NtYWxsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiBFcnJvciBIYW5kbGluZyBTZXR0aW5ncyAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMYWJlbCBjbGFzc05hbWU9XCJtYi0yXCI+RXJyb3IgSGFuZGxpbmc6PC9MYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXIgbWItMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGFiZWwgY2xhc3NOYW1lPVwibWItMCBtci0yXCIgc3R5bGU9e3sgbWluV2lkdGg6ICcxMjBweCcgfX0+UmV0cnkgQXR0ZW1wdHM6PC9MYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNlbGVjdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtjb25maWcubWF4UmV0cnlBdHRlbXB0cyB8fCAzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhldnQpID0+IHRoaXMudXBkYXRlQ29uZmlnKCdtYXhSZXRyeUF0dGVtcHRzJywgcGFyc2VJbnQoZXZ0LnRhcmdldC52YWx1ZSkpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgbWF4V2lkdGg6ICcxMDBweCcgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT17MX0+MTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT17Mn0+Mjwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT17M30+Mzwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT17NX0+NTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT17MTB9PjEwPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlciBtYi0yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMYWJlbCBjbGFzc05hbWU9XCJtYi0wIG1yLTJcIiBzdHlsZT17eyBtaW5XaWR0aDogJzEyMHB4JyB9fT5SZXF1ZXN0IFRpbWVvdXQ6PC9MYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNlbGVjdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtjb25maWcucmVxdWVzdFRpbWVvdXQgfHwgMTAwMDB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGV2dCkgPT4gdGhpcy51cGRhdGVDb25maWcoJ3JlcXVlc3RUaW1lb3V0JywgcGFyc2VJbnQoZXZ0LnRhcmdldC52YWx1ZSkpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgbWF4V2lkdGg6ICcxMjBweCcgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT17NTAwMH0+NSBzZWNvbmRzPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPXsxMDAwMH0+MTAgc2Vjb25kczwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT17MTUwMDB9PjE1IHNlY29uZHM8L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9ezMwMDAwfT4zMCBzZWNvbmRzPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzbWFsbCBjbGFzc05hbWU9XCJ0ZXh0LW11dGVkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIENvbmZpZ3VyZSBob3cgdGhlIHdpZGdldCBoYW5kbGVzIGVycm9ycyBhbmQgdGltZW91dHMuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zbWFsbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIHsvKiBIZWxwIFNlY3Rpb24gKi99XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNldHRpbmctc2VjdGlvbiBib3JkZXItdG9wIHB0LTMgbXQtM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxMYWJlbCBjbGFzc05hbWU9XCJzZXR0aW5nLWxhYmVsIGQtZmxleCBtYi0yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFdpZGdldCBJbmZvcm1hdGlvbjpcclxuICAgICAgICAgICAgICAgICAgICA8L0xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxBbGVydCB0eXBlPVwiaW5mb1wiIGNsYXNzTmFtZT1cInctMTAwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtYi0yXCI+PHN0cm9uZz5Ib3cgaXQgd29ya3M6PC9zdHJvbmc+PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cIm1iLTIgcGwtM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5MaXN0ZW5zIHRvIHJlZ2lvbiBzZWxlY3Rpb24gZXZlbnRzIGZyb20gb3RoZXIgd2lkZ2V0czwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPkF1dG9tYXRpY2FsbHkgZmV0Y2hlcyB3b3JrZXIgc3RhdGlzdGljcyB3aGVuIHJlZ2lvbiBjaGFuZ2VzPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+RGlzcGxheXMgdG90YWwgd29ya2VycyBhbmQgdG9kYXkncyBhY3RpdmUgd29ya2VyczwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlNob3dzIGFjdGl2aXR5IHBlcmNlbnRhZ2Ugd2l0aCBhIHByb2dyZXNzIGJhcjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlN1cHBvcnRzIGF1dG8tcmVmcmVzaCBhbmQgbWFudWFsIHJlZnJlc2ggb3B0aW9uczwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibWItMlwiPjxzdHJvbmc+Q29tcGF0aWJsZSB3aXRoOjwvc3Ryb25nPiBHYXpGaWx0ZXJzV2lkZ2V0IGFuZCBvdGhlciB3aWRnZXRzIHRoYXQgZW1pdCAncmVnaW9uRmlsdGVyQ2hhbmdlZCcgZXZlbnRzPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibWItMFwiPjxzdHJvbmc+QVBJIFJlcXVpcmVtZW50czo8L3N0cm9uZz4gVGhlIEFQSSBlbmRwb2ludCBzaG91bGQgcmV0dXJuIEpTT04gd2l0aCB0b3RhbF9kaXN0aW5jdF94b2RpbSwgdG9kYXlfZGlzdGluY3RfeG9kaW0sIGFuZCBkYXRlIGZpZWxkczwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9BbGVydD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB7LyogU3R5bGUgT3ZlcnJpZGVzIFNlY3Rpb24gKi99XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNldHRpbmctc2VjdGlvbiBib3JkZXItdG9wIHB0LTMgbXQtM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxMYWJlbCBjbGFzc05hbWU9XCJzZXR0aW5nLWxhYmVsIGQtZmxleCBtYi0yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIENTUyBTdHlsZSBPdmVycmlkZXMgKE9wdGlvbmFsKTpcclxuICAgICAgICAgICAgICAgICAgICA8L0xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZXh0YXJlYVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17Y29uZmlnLmN1c3RvbUNTUyB8fCAnJ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhldnQpID0+IHRoaXMudXBkYXRlQ29uZmlnKCdjdXN0b21DU1MnLCBldnQudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCIvKiBBZGQgY3VzdG9tIENTUyBoZXJlICovXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgcm93cz17NH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6ICcxMDAlJyB9fVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNtYWxsIGNsYXNzTmFtZT1cInRleHQtbXV0ZWQgZC1ibG9jayBtdC0xXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEFkdmFuY2VkOiBBZGQgY3VzdG9tIENTUyB0byBvdmVycmlkZSB3aWRnZXQgc3R5bGVzLiBVc2Ugd2l0aCBjYXV0aW9uLlxyXG4gICAgICAgICAgICAgICAgICAgIDwvc21hbGw+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufSIsImltcG9ydCB7XHJcbiAgUmVhY3QsXHJcbiAgRGF0YVNvdXJjZVR5cGVzLFxyXG4gIFVzZURhdGFTb3VyY2UsXHJcbiAgSU1Vc2VEYXRhU291cmNlLFxyXG4gIGdldEFwcFN0b3JlXHJcbn0gZnJvbSAnamltdS1jb3JlJztcclxuaW1wb3J0IHsgQWxsV2lkZ2V0U2V0dGluZ1Byb3BzIH0gZnJvbSAnamltdS1mb3ItYnVpbGRlcic7XHJcbmltcG9ydCB7IERhdGFTb3VyY2VTZWxlY3RvciB9IGZyb20gJ2ppbXUtdWkvYWR2YW5jZWQvZGF0YS1zb3VyY2Utc2VsZWN0b3InO1xyXG5pbXBvcnQgeyBNYXBXaWRnZXRTZWxlY3RvciB9IGZyb20gJ2ppbXUtdWkvYWR2YW5jZWQvc2V0dGluZy1jb21wb25lbnRzJztcclxuaW1wb3J0IHsgTGFiZWwsIENoZWNrYm94LCBBbGVydCwgU3dpdGNoIH0gZnJvbSAnamltdS11aSc7XHJcbmltcG9ydCB7IENvbG9yUGlja2VyIH0gZnJvbSAnamltdS11aS9iYXNpYy9jb2xvci1waWNrZXInO1xyXG5pbXBvcnQgeyBJbW0gfSBmcm9tICcuLi9pbW11dGFibGVIZWxwZXInO1xyXG5cclxuaW50ZXJmYWNlIFNldHRpbmdTdGF0ZSB7XHJcbiAgc2hvd0FkdmFuY2VkT3B0aW9uczogYm9vbGVhbjtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2V0dGluZyBleHRlbmRzIFJlYWN0LlB1cmVDb21wb25lbnQ8XHJcbiAgQWxsV2lkZ2V0U2V0dGluZ1Byb3BzPGFueT4sXHJcbiAgU2V0dGluZ1N0YXRlXHJcbj4ge1xyXG4gIHN1cHBvcnRlZFR5cGVzID0gSW1tKFtEYXRhU291cmNlVHlwZXMuRmVhdHVyZUxheWVyXSk7XHJcblxyXG4gIC8vIENvbG9yIHByZXNldHNcclxuICBjb2xvclByZXNldHMgPSBbXHJcbiAgICB7IGNvbG9yOiAnI0ZGOTgwMCcsIGxhYmVsOiAnT3JhbmdlJywgdmFsdWU6ICcjRkY5ODAwJyB9LFxyXG4gICAgeyBjb2xvcjogJyNGNDQzMzYnLCBsYWJlbDogJ1JlZCcsIHZhbHVlOiAnI0Y0NDMzNicgfSxcclxuICAgIHsgY29sb3I6ICcjNENBRjUwJywgbGFiZWw6ICdHcmVlbicsIHZhbHVlOiAnIzRDQUY1MCcgfSxcclxuICAgIHsgY29sb3I6ICcjMjE5NkYzJywgbGFiZWw6ICdCbHVlJywgdmFsdWU6ICcjMjE5NkYzJyB9LFxyXG4gICAgeyBjb2xvcjogJyM5QzI3QjAnLCBsYWJlbDogJ1B1cnBsZScsIHZhbHVlOiAnIzlDMjdCMCcgfSxcclxuICAgIHsgY29sb3I6ICcjRkZDMTA3JywgbGFiZWw6ICdBbWJlcicsIHZhbHVlOiAnI0ZGQzEwNycgfSxcclxuICAgIHsgY29sb3I6ICcjNzk1NTQ4JywgbGFiZWw6ICdCcm93bicsIHZhbHVlOiAnIzc5NTU0OCcgfSxcclxuICAgIHsgY29sb3I6ICcjNjA3RDhCJywgbGFiZWw6ICdCbHVlIEdyZXknLCB2YWx1ZTogJyM2MDdEOEInIH1cclxuICBdO1xyXG5cclxuICAvLyBCYWNrZ3JvdW5kIGNvbG9yIHByZXNldHNcclxuICBiZ0NvbG9yUHJlc2V0cyA9IFtcclxuICAgIHsgY29sb3I6ICcjRkZGRkZGJywgbGFiZWw6ICdXaGl0ZScsIHZhbHVlOiAnI0ZGRkZGRicgfSxcclxuICAgIHsgY29sb3I6ICcjRjVGNUY1JywgbGFiZWw6ICdMaWdodCBHcmV5JywgdmFsdWU6ICcjRjVGNUY1JyB9LFxyXG4gICAgeyBjb2xvcjogJyNFRUVFRUUnLCBsYWJlbDogJ0dyZXknLCB2YWx1ZTogJyNFRUVFRUUnIH0sXHJcbiAgICB7IGNvbG9yOiAnIzJCMkIyQicsIGxhYmVsOiAnRGFyaycsIHZhbHVlOiAnIzJCMkIyQicgfSxcclxuICAgIHsgY29sb3I6ICcjMUExQTFBJywgbGFiZWw6ICdWZXJ5IERhcmsnLCB2YWx1ZTogJyMxQTFBMUEnIH0sXHJcbiAgICB7IGNvbG9yOiAnI0UzRjJGRCcsIGxhYmVsOiAnTGlnaHQgQmx1ZScsIHZhbHVlOiAnI0UzRjJGRCcgfSxcclxuICAgIHsgY29sb3I6ICcjRkZGOEUxJywgbGFiZWw6ICdMaWdodCBBbWJlcicsIHZhbHVlOiAnI0ZGRjhFMScgfSxcclxuICAgIHsgY29sb3I6ICdyZ2JhKDAsMCwwLDApJywgbGFiZWw6ICdUcmFuc3BhcmVudCcsIHZhbHVlOiAncmdiYSgwLDAsMCwwKScgfVxyXG4gIF07XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByb3BzOiBBbGxXaWRnZXRTZXR0aW5nUHJvcHM8YW55Pikge1xyXG4gICAgc3VwZXIocHJvcHMpO1xyXG5cclxuICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgIHNob3dBZHZhbmNlZE9wdGlvbnM6IGZhbHNlXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICBjb25zdCB3YWl0Rm9yQXBwQ29uZmlnID0gKCkgPT4ge1xyXG4gICAgICBjb25zdCBzdGF0ZSA9IGdldEFwcFN0b3JlKCkuZ2V0U3RhdGUoKTtcclxuICAgICAgY29uc3Qgd2lkZ2V0cyA9IHN0YXRlPy5hcHBDb25maWc/LndpZGdldHM7XHJcbiAgICAgIGlmICh3aWRnZXRzICYmIE9iamVjdC5rZXlzKHdpZGdldHMpLmxlbmd0aCA+IDApIHtcclxuICAgICAgICB0aGlzLmF1dG9EZXRlY3RNYXBXaWRnZXQoKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBzZXRUaW1lb3V0KHdhaXRGb3JBcHBDb25maWcsIDIwMCk7XHJcbiAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgd2FpdEZvckFwcENvbmZpZygpO1xyXG4gIH1cclxuXHJcbiAgLy8gQXV0by1kZXRlY3QgbWFwIHdpZGdldCBpZiBub3QgYWxyZWFkeSBzZXRcclxuICBhdXRvRGV0ZWN0TWFwV2lkZ2V0ID0gKCkgPT4ge1xyXG4gICAgaWYgKCF0aGlzLnByb3BzLnVzZU1hcFdpZGdldElkcyB8fCB0aGlzLnByb3BzLnVzZU1hcFdpZGdldElkcy5sZW5ndGggPT09IDApIHtcclxuICAgICAgY29uc3Qgc3RhdGUgPSBnZXRBcHBTdG9yZSgpLmdldFN0YXRlKCk7XHJcbiAgICAgIGNvbnN0IG1hcFdpZGdldHMgPSBzdGF0ZS5hcHBDb25maWcud2lkZ2V0cztcclxuXHJcbiAgICAgIGNvbnN0IG1hcFdpZGdldElkID0gT2JqZWN0LmtleXMobWFwV2lkZ2V0cykuZmluZCgod2lkKSA9PiB7XHJcbiAgICAgICAgY29uc3Qgd2lkZ2V0ID0gbWFwV2lkZ2V0c1t3aWRdO1xyXG4gICAgICAgIHJldHVybiB3aWRnZXQubWFuaWZlc3QgJiYgd2lkZ2V0Lm1hbmlmZXN0Lm5hbWUgPT09ICdtYXAnO1xyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIGlmIChtYXBXaWRnZXRJZCkge1xyXG4gICAgICAgIHRoaXMucHJvcHMub25TZXR0aW5nQ2hhbmdlKHtcclxuICAgICAgICAgIGlkOiB0aGlzLnByb3BzLmlkLFxyXG4gICAgICAgICAgdXNlTWFwV2lkZ2V0SWRzOiBbbWFwV2lkZ2V0SWRdXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9O1xyXG5cclxuICAvLyBIYW5kbGUgZGF0YSBzb3VyY2Ugc2VsZWN0aW9uIGNoYW5nZVxyXG4gIG9uRGF0YVNvdXJjZUNoYW5nZSA9ICh1c2VEYXRhU291cmNlczogVXNlRGF0YVNvdXJjZVtdKSA9PiB7XHJcbiAgICB0aGlzLnByb3BzLm9uU2V0dGluZ0NoYW5nZSh7XHJcbiAgICAgIGlkOiB0aGlzLnByb3BzLmlkLFxyXG4gICAgICB1c2VEYXRhU291cmNlczogdXNlRGF0YVNvdXJjZXNcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIC8vIEhhbmRsZSBtYXAgd2lkZ2V0IHNlbGVjdGlvbiBjaGFuZ2VcclxuICBvbk1hcFdpZGdldFNlbGVjdGVkID0gYXN5bmMgKHNlbGVjdGVkSWRzOiBzdHJpbmdbXSkgPT4ge1xyXG4gICAgdGhpcy5wcm9wcy5vblNldHRpbmdDaGFuZ2Uoe1xyXG4gICAgICBpZDogdGhpcy5wcm9wcy5pZCxcclxuICAgICAgdXNlTWFwV2lkZ2V0SWRzOiBzZWxlY3RlZElkc1xyXG4gICAgfSk7XHJcblxyXG4gICAgYXdhaXQgdGhpcy5hdXRvRGV0ZWN0RGF0YVNvdXJjZXNGcm9tTWFwKHNlbGVjdGVkSWRzKTtcclxuICB9O1xyXG5cclxuICAvLyBBdXRvLWRldGVjdCBkYXRhIHNvdXJjZXMgZnJvbSBzZWxlY3RlZCBtYXBcclxuICBhdXRvRGV0ZWN0RGF0YVNvdXJjZXNGcm9tTWFwID0gYXN5bmMgKHNlbGVjdGVkTWFwSWRzOiBzdHJpbmdbXSkgPT4ge1xyXG4gICAgaWYgKHNlbGVjdGVkTWFwSWRzLmxlbmd0aCA9PT0gMCkgcmV0dXJuO1xyXG5cclxuICAgIGNvbnN0IHN0YXRlID0gZ2V0QXBwU3RvcmUoKS5nZXRTdGF0ZSgpO1xyXG4gICAgY29uc3QgbWFwSWQgPSBzZWxlY3RlZE1hcElkc1swXTtcclxuICAgIGNvbnN0IHdpZGdldCA9IHN0YXRlLmFwcENvbmZpZy53aWRnZXRzW21hcElkXTtcclxuXHJcbiAgICBpZiAod2lkZ2V0ICYmIHdpZGdldC51c2VEYXRhU291cmNlcykge1xyXG4gICAgICBjb25zdCBtYXBEYXRhU291cmNlcyA9IHdpZGdldC51c2VEYXRhU291cmNlcztcclxuXHJcbiAgICAgIGNvbnN0IGZlYXR1cmVMYXllckRzID0gbWFwRGF0YVNvdXJjZXMuZmlsdGVyKFxyXG4gICAgICAgIChkcykgPT5cclxuICAgICAgICAgIGRzLmRhdGFTb3VyY2VJZCAmJlxyXG4gICAgICAgICAgc3RhdGUuYXBwQ29uZmlnLmRhdGFTb3VyY2VzW2RzLmRhdGFTb3VyY2VJZF0gJiZcclxuICAgICAgICAgIHN0YXRlLmFwcENvbmZpZy5kYXRhU291cmNlc1tkcy5kYXRhU291cmNlSWRdLnR5cGUgPT09ICdGRUFUVVJFX0xBWUVSJ1xyXG4gICAgICApO1xyXG5cclxuICAgICAgaWYgKGZlYXR1cmVMYXllckRzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICBjb25zdCBmZWF0dXJlTGF5ZXJEYXRhU291cmNlID0gZmVhdHVyZUxheWVyRHNbMF07XHJcblxyXG4gICAgICAgIGNvbnN0IGZpZWxkc0FycmF5ID0gdGhpcy5leHRyYWN0RmllbGRzKGZlYXR1cmVMYXllckRhdGFTb3VyY2UpO1xyXG5cclxuICAgICAgICBjb25zdCBwbGFpblVzZURzOiBVc2VEYXRhU291cmNlID0ge1xyXG4gICAgICAgICAgZGF0YVNvdXJjZUlkOiBmZWF0dXJlTGF5ZXJEYXRhU291cmNlLmRhdGFTb3VyY2VJZCxcclxuICAgICAgICAgIG1haW5EYXRhU291cmNlSWQ6IGZlYXR1cmVMYXllckRhdGFTb3VyY2UubWFpbkRhdGFTb3VyY2VJZCB8fCBmZWF0dXJlTGF5ZXJEYXRhU291cmNlLmRhdGFTb3VyY2VJZCxcclxuICAgICAgICAgIGRhdGFWaWV3SWQ6IGZlYXR1cmVMYXllckRhdGFTb3VyY2UuZGF0YVZpZXdJZCB8fCAnZGVmYXVsdCcsXHJcbiAgICAgICAgICByb290RGF0YVNvdXJjZUlkOiBmZWF0dXJlTGF5ZXJEYXRhU291cmNlLnJvb3REYXRhU291cmNlSWQgfHwgZmVhdHVyZUxheWVyRGF0YVNvdXJjZS5kYXRhU291cmNlSWQsXHJcbiAgICAgICAgICBmaWVsZHM6IGZpZWxkc0FycmF5XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgdGhpcy5wcm9wcy5vblNldHRpbmdDaGFuZ2Uoe1xyXG4gICAgICAgICAgaWQ6IHRoaXMucHJvcHMuaWQsXHJcbiAgICAgICAgICB1c2VEYXRhU291cmNlczogW3BsYWluVXNlRHNdXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9O1xyXG5cclxuICAvLyBFeHRyYWN0IGZpZWxkcyBmcm9tIGEgZGF0YSBzb3VyY2VcclxuICBleHRyYWN0RmllbGRzID0gKGRhdGFTb3VyY2U6IGFueSk6IHN0cmluZ1tdID0+IHtcclxuICAgIGxldCBmaWVsZHNBcnJheTogc3RyaW5nW10gPSBbXTtcclxuXHJcbiAgICBpZiAoZGF0YVNvdXJjZS5maWVsZHMpIHtcclxuICAgICAgaWYgKEFycmF5LmlzQXJyYXkoZGF0YVNvdXJjZS5maWVsZHMpKSB7XHJcbiAgICAgICAgZmllbGRzQXJyYXkgPSBbLi4uZGF0YVNvdXJjZS5maWVsZHNdO1xyXG4gICAgICB9IGVsc2UgaWYgKHR5cGVvZiBkYXRhU291cmNlLmZpZWxkcyA9PT0gJ29iamVjdCcgJiYgKGRhdGFTb3VyY2UuZmllbGRzIGFzIGFueSkubGVuZ3RoID49IDApIHtcclxuICAgICAgICBmaWVsZHNBcnJheSA9IFtdO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgKGRhdGFTb3VyY2UuZmllbGRzIGFzIGFueSkubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgIGZpZWxkc0FycmF5LnB1c2goKGRhdGFTb3VyY2UuZmllbGRzIGFzIGFueSlbaV0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIGlmICh0eXBlb2YgZGF0YVNvdXJjZS5maWVsZHMgPT09ICdvYmplY3QnKSB7XHJcbiAgICAgICAgZmllbGRzQXJyYXkgPSBPYmplY3Qua2V5cyhkYXRhU291cmNlLmZpZWxkcyk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gZmllbGRzQXJyYXk7XHJcbiAgfTtcclxuXHJcbiAgLy8gVG9nZ2xlIGFkdmFuY2VkIG9wdGlvbnMgZGlzcGxheVxyXG4gIHRvZ2dsZUFkdmFuY2VkT3B0aW9ucyA9ICgpID0+IHtcclxuICAgIHRoaXMuc2V0U3RhdGUoKHByZXZTdGF0ZSkgPT4gKHtcclxuICAgICAgc2hvd0FkdmFuY2VkT3B0aW9uczogIXByZXZTdGF0ZS5zaG93QWR2YW5jZWRPcHRpb25zXHJcbiAgICB9KSk7XHJcbiAgfTtcclxuXHJcbiAgLy8gSGFuZGxlIGNoYXJ0IGNvbG9yIGNoYW5nZVxyXG4gIG9uQ2hhcnRDb2xvckNoYW5nZSA9IChjb2xvcjogc3RyaW5nKSA9PiB7XHJcbiAgICBpZiAodGhpcy5wcm9wcy5jb25maWcpIHtcclxuICAgICAgY29uc3QgbmV3Q29uZmlnID0gdGhpcy5wcm9wcy5jb25maWcuc2V0XHJcbiAgICAgICAgPyB0aGlzLnByb3BzLmNvbmZpZy5zZXQoJ2NoYXJ0Q29sb3InLCBjb2xvcilcclxuICAgICAgICA6IEltbSh7XHJcbiAgICAgICAgICAgIC4uLnRoaXMucHJvcHMuY29uZmlnLFxyXG4gICAgICAgICAgICBjaGFydENvbG9yOiBjb2xvclxyXG4gICAgICAgICAgfSk7XHJcblxyXG4gICAgICB0aGlzLnByb3BzLm9uU2V0dGluZ0NoYW5nZSh7XHJcbiAgICAgICAgaWQ6IHRoaXMucHJvcHMuaWQsXHJcbiAgICAgICAgY29uZmlnOiBuZXdDb25maWdcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgLy8gSGFuZGxlIGJhY2tncm91bmQgY29sb3IgY2hhbmdlXHJcbiAgb25CYWNrZ3JvdW5kQ29sb3JDaGFuZ2UgPSAoY29sb3I6IHN0cmluZykgPT4ge1xyXG4gICAgaWYgKHRoaXMucHJvcHMuY29uZmlnKSB7XHJcbiAgICAgIGNvbnN0IG5ld0NvbmZpZyA9IHRoaXMucHJvcHMuY29uZmlnLnNldFxyXG4gICAgICAgID8gdGhpcy5wcm9wcy5jb25maWcuc2V0KCdiYWNrZ3JvdW5kQ29sb3InLCBjb2xvcilcclxuICAgICAgICA6IEltbSh7XHJcbiAgICAgICAgICAgIC4uLnRoaXMucHJvcHMuY29uZmlnLFxyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGNvbG9yXHJcbiAgICAgICAgICB9KTtcclxuXHJcbiAgICAgIHRoaXMucHJvcHMub25TZXR0aW5nQ2hhbmdlKHtcclxuICAgICAgICBpZDogdGhpcy5wcm9wcy5pZCxcclxuICAgICAgICBjb25maWc6IG5ld0NvbmZpZ1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICBjb25zdCB7IHNob3dBZHZhbmNlZE9wdGlvbnMgfSA9IHRoaXMuc3RhdGU7XHJcbiAgICBjb25zdCBjaGFydENvbG9yID0gdGhpcy5wcm9wcy5jb25maWc/LmNoYXJ0Q29sb3IgfHwgJyNGRjk4MDAnO1xyXG4gICAgY29uc3QgYmFja2dyb3VuZENvbG9yID0gdGhpcy5wcm9wcy5jb25maWc/LmJhY2tncm91bmRDb2xvciB8fCAnIzFBMUExQSc7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3aWRnZXQtc2V0dGluZy1jb250YWluZXIgcC0yXCI+XHJcbiAgICAgICAgey8qIE1hcCBXaWRnZXQgU2VsZWN0b3IgKi99XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZXR0aW5nLXNlY3Rpb24gbWItM1wiPlxyXG4gICAgICAgICAgPExhYmVsIGNsYXNzTmFtZT1cInNldHRpbmctbGFiZWwgZC1mbGV4XCI+U2VsZWN0IGEgTWFwIFdpZGdldDo8L0xhYmVsPlxyXG4gICAgICAgICAgPE1hcFdpZGdldFNlbGVjdG9yIG9uU2VsZWN0PXt0aGlzLm9uTWFwV2lkZ2V0U2VsZWN0ZWR9IHVzZU1hcFdpZGdldElkcz17dGhpcy5wcm9wcy51c2VNYXBXaWRnZXRJZHN9IC8+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIHsvKiBEYXRhIFNvdXJjZSBTZWxlY3RvciAqL31cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNldHRpbmctc2VjdGlvbiBtYi0zXCI+XHJcbiAgICAgICAgICA8TGFiZWwgY2xhc3NOYW1lPVwic2V0dGluZy1sYWJlbCBkLWZsZXhcIj5TZWxlY3QgYSBEYXRhIFNvdXJjZTo8L0xhYmVsPlxyXG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwic2V0dGluZy1ub3RlIHRleHQtbXV0ZWRcIj5DaG9vc2UgYSBmZWF0dXJlIGxheWVyIGNvbnRhaW5pbmcgdG9wc2hpcmlxX3R1cmkgZmllbGQuPC9wPlxyXG5cclxuICAgICAgICAgIHshdGhpcy5wcm9wcy51c2VEYXRhU291cmNlcyB8fCB0aGlzLnByb3BzLnVzZURhdGFTb3VyY2VzLmxlbmd0aCA9PT0gMCA/IChcclxuICAgICAgICAgICAgPEFsZXJ0IHR5cGU9XCJpbmZvXCIgY2xhc3NOYW1lPVwidy0xMDAgbWItMlwiPlxyXG4gICAgICAgICAgICAgIFBsZWFzZSBzZWxlY3QgYSBtYXAgd2lkZ2V0IGZpcnN0IHRvIGF1dG8tZGV0ZWN0IGRhdGEgc291cmNlcy5cclxuICAgICAgICAgICAgPC9BbGVydD5cclxuICAgICAgICAgICkgOiBudWxsfVxyXG5cclxuICAgICAgICAgIDxEYXRhU291cmNlU2VsZWN0b3JcclxuICAgICAgICAgICAgbXVzdFVzZURhdGFTb3VyY2VcclxuICAgICAgICAgICAgdHlwZXM9e3RoaXMuc3VwcG9ydGVkVHlwZXN9XHJcbiAgICAgICAgICAgIGlzTXVsdGlwbGU9e3RydWV9XHJcbiAgICAgICAgICAgIHVzZURhdGFTb3VyY2VzPXt0aGlzLnByb3BzLnVzZURhdGFTb3VyY2VzfVxyXG4gICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5vbkRhdGFTb3VyY2VDaGFuZ2V9XHJcbiAgICAgICAgICAgIHdpZGdldElkPXt0aGlzLnByb3BzLmlkfVxyXG4gICAgICAgICAgICBoaWRlRGF0YVZpZXc9e3RydWV9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICB7LyogQXBwZWFyYW5jZSBTZWN0aW9uICovfVxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2V0dGluZy1zZWN0aW9uIG1iLTNcIj5cclxuICAgICAgICAgIDxMYWJlbCBjbGFzc05hbWU9XCJzZXR0aW5nLWxhYmVsIGQtZmxleFwiPkFwcGVhcmFuY2UgU2V0dGluZ3M6PC9MYWJlbD5cclxuXHJcbiAgICAgICAgICB7LyogQ2hhcnQgKGFjY2VudCkgQ29sb3IgKi99XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbG9yLXNldHRpbmctaXRlbSBkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyIGp1c3RpZnktY29udGVudC1iZXR3ZWVuIG1iLTNcIj5cclxuICAgICAgICAgICAgPExhYmVsIGNsYXNzTmFtZT1cIm1iLTAgbXItMlwiPkFjY2VudCBDb2xvcjo8L0xhYmVsPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICA8Q29sb3JQaWNrZXJcclxuICAgICAgICAgICAgICAgIGhlaWdodD17MjZ9XHJcbiAgICAgICAgICAgICAgICB3aWR0aD17MzB9XHJcbiAgICAgICAgICAgICAgICBjb2xvcj17Y2hhcnRDb2xvcn1cclxuICAgICAgICAgICAgICAgIHByZXNldENvbG9ycz17dGhpcy5jb2xvclByZXNldHN9XHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5vbkNoYXJ0Q29sb3JDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICBwbGFjZW1lbnQ9XCJib3R0b21cIlxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY29sb3ItcHJldmlldyBtbC0yXCJcclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgIHdpZHRoOiAnMjRweCcsXHJcbiAgICAgICAgICAgICAgICAgIGhlaWdodDogJzI0cHgnLFxyXG4gICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGNoYXJ0Q29sb3IsXHJcbiAgICAgICAgICAgICAgICAgIGJvcmRlcjogJzFweCBzb2xpZCAjZGRkJyxcclxuICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAnMnB4J1xyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICA+PC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgey8qIEJhY2tncm91bmQgQ29sb3IgKi99XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbG9yLXNldHRpbmctaXRlbSBkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyIGp1c3RpZnktY29udGVudC1iZXR3ZWVuXCI+XHJcbiAgICAgICAgICAgIDxMYWJlbCBjbGFzc05hbWU9XCJtYi0wIG1yLTJcIj5CYWNrZ3JvdW5kIENvbG9yOjwvTGFiZWw+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgIDxDb2xvclBpY2tlclxyXG4gICAgICAgICAgICAgICAgaGVpZ2h0PXsyNn1cclxuICAgICAgICAgICAgICAgIHdpZHRoPXszMH1cclxuICAgICAgICAgICAgICAgIGNvbG9yPXtiYWNrZ3JvdW5kQ29sb3J9XHJcbiAgICAgICAgICAgICAgICBwcmVzZXRDb2xvcnM9e3RoaXMuYmdDb2xvclByZXNldHN9XHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5vbkJhY2tncm91bmRDb2xvckNoYW5nZX1cclxuICAgICAgICAgICAgICAgIHBsYWNlbWVudD1cImJvdHRvbVwiXHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjb2xvci1wcmV2aWV3IG1sLTJcIlxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgd2lkdGg6ICcyNHB4JyxcclxuICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAnMjRweCcsXHJcbiAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogYmFja2dyb3VuZENvbG9yLFxyXG4gICAgICAgICAgICAgICAgICBib3JkZXI6ICcxcHggc29saWQgI2RkZCcsXHJcbiAgICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogJzJweCdcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgPjwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICB7LyogQWR2YW5jZWQgT3B0aW9ucyAqL31cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNldHRpbmctc2VjdGlvbiBib3JkZXItdG9wIHB0LTNcIj5cclxuICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiZC1mbGV4IGp1c3RpZnktY29udGVudC1iZXR3ZWVuIGFsaWduLWl0ZW1zLWNlbnRlciBtYi0yXCJcclxuICAgICAgICAgICAgb25DbGljaz17dGhpcy50b2dnbGVBZHZhbmNlZE9wdGlvbnN9XHJcbiAgICAgICAgICAgIHN0eWxlPXt7IGN1cnNvcjogJ3BvaW50ZXInIH19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxMYWJlbCBjbGFzc05hbWU9XCJzZXR0aW5nLWxhYmVsIG1iLTBcIj5BZHZhbmNlZCBPcHRpb25zPC9MYWJlbD5cclxuICAgICAgICAgICAgPFN3aXRjaCBjaGVja2VkPXtzaG93QWR2YW5jZWRPcHRpb25zfSBvbkNoYW5nZT17dGhpcy50b2dnbGVBZHZhbmNlZE9wdGlvbnN9IC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICB7c2hvd0FkdmFuY2VkT3B0aW9ucyAmJiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWR2YW5jZWQtb3B0aW9ucy1jb250YWluZXIgcGwtMiBib3JkZXItbGVmdFwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItM1wiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyIG1iLTJcIj5cclxuICAgICAgICAgICAgICAgICAgPENoZWNrYm94XHJcbiAgICAgICAgICAgICAgICAgICAgY2hlY2tlZD17dGhpcy5wcm9wcy5jb25maWc/LnNldHRpbmdzPy5lbmFibGVBdXRvWm9vbSAhPT0gZmFsc2V9XHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhldnQpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHNldHRpbmdzID0gdGhpcy5wcm9wcy5jb25maWc/LnNldHRpbmdzIHx8IHt9O1xyXG4gICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5vblNldHRpbmdDaGFuZ2Uoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZDogdGhpcy5wcm9wcy5pZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uZmlnOiB0aGlzLnByb3BzLmNvbmZpZy5zZXQoJ3NldHRpbmdzJywge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC4uLnNldHRpbmdzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGVuYWJsZUF1dG9ab29tOiBldnQudGFyZ2V0LmNoZWNrZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibXItMlwiXHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIDxMYWJlbCBjbGFzc05hbWU9XCJtYi0wXCI+QXV0by16b29tIHRvIHNlbGVjdGVkIHR5cGU8L0xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyIG1iLTNcIj5cclxuICAgICAgICAgICAgICAgICAgPENoZWNrYm94XHJcbiAgICAgICAgICAgICAgICAgICAgY2hlY2tlZD17dGhpcy5wcm9wcy5jb25maWc/LnNldHRpbmdzPy5zaG93UGVyY2VudGFnZXMgIT09IGZhbHNlfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZXZ0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBjb25zdCBzZXR0aW5ncyA9IHRoaXMucHJvcHMuY29uZmlnPy5zZXR0aW5ncyB8fCB7fTtcclxuICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMub25TZXR0aW5nQ2hhbmdlKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IHRoaXMucHJvcHMuaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbmZpZzogdGhpcy5wcm9wcy5jb25maWcuc2V0KCdzZXR0aW5ncycsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAuLi5zZXR0aW5ncyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBzaG93UGVyY2VudGFnZXM6IGV2dC50YXJnZXQuY2hlY2tlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtci0yXCJcclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgPExhYmVsIGNsYXNzTmFtZT1cIm1iLTBcIj5TaG93IHBlcmNlbnRhZ2VzIGluIGxpc3Q8L0xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxDaGVja2JveFxyXG4gICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9e3RydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWRcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtci0yXCJcclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgPExhYmVsIGNsYXNzTmFtZT1cIm1iLTBcIiB0aXRsZT1cIlRoZSBkcm9wZG93biBpcyBhbHdheXMgZW5hYmxlZCBpbiB0aGlzIHZlcnNpb25cIj5cclxuICAgICAgICAgICAgICAgICAgICBEcm9wZG93biBVSSBlbmFibGVkXHJcbiAgICAgICAgICAgICAgICAgIDwvTGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IEltbXV0YWJsZSB9IGZyb20gJ2ppbXUtY29yZSdcblxuLyoqIGppbXUtY29yZSByZS1leHBvcnRzIHNlYW1sZXNzLWltbXV0YWJsZSBhcyBhIG5hbWVzcGFjZTsgY2FzdCBmb3IgY2FsbGFibGUgdXNlLiAqL1xuZXhwb3J0IGNvbnN0IEltbSA9IEltbXV0YWJsZSBhcyB1bmtub3duIGFzIDxUPih2YWx1ZTogVCkgPT4gYW55XG5cbmV4cG9ydCBjb25zdCBFTVBUWV9DT05GSUcgPSBJbW0oe30pXG4iLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfamltdV9jb3JlX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2ppbXVfdWlfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfamltdV91aV9hZHZhbmNlZF9kYXRhX3NvdXJjZV9zZWxlY3Rvcl9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9qaW11X3VpX2FkdmFuY2VkX3NldHRpbmdfY29tcG9uZW50c19fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9qaW11X3VpX2Jhc2ljX2NvbG9yX3BpY2tlcl9fOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiOyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiLyoqXHJcbiAqIFdlYnBhY2sgd2lsbCByZXBsYWNlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHdpdGggX193ZWJwYWNrX3JlcXVpcmVfXy5wIHRvIHNldCB0aGUgcHVibGljIHBhdGggZHluYW1pY2FsbHkuXHJcbiAqIFRoZSByZWFzb24gd2h5IHdlIGNhbid0IHNldCB0aGUgcHVibGljUGF0aCBpbiB3ZWJwYWNrIGNvbmZpZyBpczogd2UgY2hhbmdlIHRoZSBwdWJsaWNQYXRoIHdoZW4gZG93bmxvYWQuXHJcbiAqICovXHJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZVxyXG4vLyBAdHMtaWdub3JlXHJcbl9fd2VicGFja19wdWJsaWNfcGF0aF9fID0gd2luZG93LmppbXVDb25maWcuYmFzZVVybFxyXG4iLCJpbXBvcnQgeyBSZWFjdCB9IGZyb20gJ2ppbXUtY29yZSdcbmltcG9ydCB7IHR5cGUgQWxsV2lkZ2V0U2V0dGluZ1Byb3BzIH0gZnJvbSAnamltdS1mb3ItYnVpbGRlcidcbmltcG9ydCB7IEFsZXJ0LCBMYWJlbCwgVGV4dElucHV0IH0gZnJvbSAnamltdS11aSdcbmltcG9ydCB7IENvbG9yUGlja2VyIH0gZnJvbSAnamltdS11aS9iYXNpYy9jb2xvci1waWNrZXInXG5cbmltcG9ydCB7IEltbSwgRU1QVFlfQ09ORklHIH0gZnJvbSAnLi9pbW11dGFibGVIZWxwZXInXG5pbXBvcnQgR2F6RGF0ZVNldHRpbmcgZnJvbSAnLi9jb21wb25lbnRzL0dhekRhdGVTZXR0aW5nJ1xuaW1wb3J0IEdhekV4Y2VsU2V0dGluZyBmcm9tICcuL2NvbXBvbmVudHMvR2F6RXhjZWxTZXR0aW5nJ1xuaW1wb3J0IEdhekZpbHRlcnNTZXR0aW5nIGZyb20gJy4vY29tcG9uZW50cy9HYXpGaWx0ZXJzU2V0dGluZydcbmltcG9ydCBHYXpIb2RpbVRhYmxlU2V0dGluZyBmcm9tICcuL2NvbXBvbmVudHMvR2F6SG9kaW1UYWJsZVNldHRpbmcnXG5pbXBvcnQgR2F6SW5kaWNhdG9yVG90YWxTZXR0aW5nIGZyb20gJy4vY29tcG9uZW50cy9HYXpJbmRpY2F0b3JUb3RhbFNldHRpbmcnXG5pbXBvcnQgR2F6TWluaUZpbHRlclNldHRpbmcgZnJvbSAnLi9jb21wb25lbnRzL0dhek1pbmlGaWx0ZXJTZXR0aW5nJ1xuXG5pbXBvcnQgJy4vc2V0dGluZy5jc3MnXG5cbi8vIEVhY2ggZW1iZWRkZWQgcGFuZWwga2VlcHMgaXRzIG9yaWdpbmFsLCB1bm1vZGlmaWVkIHNldHRpbmdzIFVJLiBUaGlzIHdyYXBwZXJcbi8vIGdpdmVzIGV2ZXJ5IHBhbmVsIGl0cyBvd24gbmFtZXNwYWNlZCBjb25maWcgc2xpY2UgKHNlZSBydW50aW1lL3dpZGdldC50c3gpXG4vLyBzbyB3cml0aW5nIGEgc2V0dGluZyBpbiBvbmUgcGFuZWwncyBzZWN0aW9uIGNhbiBuZXZlciBvdmVyd3JpdGUgYW5vdGhlclxuLy8gcGFuZWwncyBpZGVudGljYWxseS1uYW1lZCBzZXR0aW5nIChlLmcuIFwiY2hhcnRDb2xvclwiKS5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhekNvbWJpbmVkU2V0dGluZyBleHRlbmRzIFJlYWN0LlB1cmVDb21wb25lbnQ8QWxsV2lkZ2V0U2V0dGluZ1Byb3BzPGFueT4+IHtcbiAgcHJpdmF0ZSBuYW1lc3BhY2VkUHJvcHMgKGtleTogc3RyaW5nKTogQWxsV2lkZ2V0U2V0dGluZ1Byb3BzPGFueT4ge1xuICAgIGNvbnN0IGZ1bGxDb25maWcgPSAodGhpcy5wcm9wcy5jb25maWcpIHx8IEVNUFRZX0NPTkZJR1xuICAgIGNvbnN0IHNsaWNlID0gZnVsbENvbmZpZ1trZXldIHx8IEVNUFRZX0NPTkZJR1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIC4uLnRoaXMucHJvcHMsXG4gICAgICBjb25maWc6IHNsaWNlLFxuICAgICAgb25TZXR0aW5nQ2hhbmdlOiAoc2V0dGluZ0NoYW5nZTogYW55KSA9PiB7XG4gICAgICAgIGNvbnN0IG5ld1NsaWNlID0gc2V0dGluZ0NoYW5nZS5jb25maWdcbiAgICAgICAgY29uc3QgbmV3RnVsbENvbmZpZyA9IGZ1bGxDb25maWcuc2V0XG4gICAgICAgICAgPyBmdWxsQ29uZmlnLnNldChrZXksIG5ld1NsaWNlKVxuICAgICAgICAgIDogSW1tKHsgLi4uZnVsbENvbmZpZywgW2tleV06IG5ld1NsaWNlIH0pXG5cbiAgICAgICAgdGhpcy5wcm9wcy5vblNldHRpbmdDaGFuZ2Uoe1xuICAgICAgICAgIC4uLnNldHRpbmdDaGFuZ2UsXG4gICAgICAgICAgaWQ6IHRoaXMucHJvcHMuaWQsXG4gICAgICAgICAgY29uZmlnOiBuZXdGdWxsQ29uZmlnXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLy8gR2F6Q29udHJvbGwxNSdzIG9yaWdpbmFsIHNldHRpbmdzLnRzeCBmaWxlIHdhcyBhIGR1cGxpY2F0ZSBvZiB0aGUgWG9kaW1cbiAgLy8gQ291bnQgc2V0dGluZ3MgcGFuZWwgKHdyb25nIGNvcHkvcGFzdGUgdXBzdHJlYW0pLCBzbyBpdCBpc24ndCByZXVzYWJsZVxuICAvLyBoZXJlLiBJdHMgcnVudGltZSBrZXlzIGFyZSBzaW1wbGUgZW5vdWdoIHRvIGV4cG9zZSBkaXJlY3RseSBpbnN0ZWFkLlxuICBwcml2YXRlIHJlbmRlckNvbnRyb2xJbmRpY2F0b3JzU2V0dGluZ3MgKCkge1xuICAgIGNvbnN0IHNsaWNlID0gKCh0aGlzLnByb3BzLmNvbmZpZyk/LmNvbnRyb2xJbmRpY2F0b3JzKSB8fCBFTVBUWV9DT05GSUdcbiAgICBjb25zdCB1cGRhdGUgPSAoa2V5OiBzdHJpbmcsIHZhbHVlOiBhbnkpID0+IHtcbiAgICAgIGNvbnN0IG5ld1NsaWNlID0gc2xpY2Uuc2V0ID8gc2xpY2Uuc2V0KGtleSwgdmFsdWUpIDogSW1tKHsgLi4uc2xpY2UsIFtrZXldOiB2YWx1ZSB9KVxuICAgICAgY29uc3QgZnVsbENvbmZpZyA9ICh0aGlzLnByb3BzLmNvbmZpZykgfHwgRU1QVFlfQ09ORklHXG4gICAgICBjb25zdCBuZXdGdWxsQ29uZmlnID0gZnVsbENvbmZpZy5zZXRcbiAgICAgICAgPyBmdWxsQ29uZmlnLnNldCgnY29udHJvbEluZGljYXRvcnMnLCBuZXdTbGljZSlcbiAgICAgICAgOiBJbW0oeyAuLi5mdWxsQ29uZmlnLCBjb250cm9sSW5kaWNhdG9yczogbmV3U2xpY2UgfSlcbiAgICAgIHRoaXMucHJvcHMub25TZXR0aW5nQ2hhbmdlKHsgaWQ6IHRoaXMucHJvcHMuaWQsIGNvbmZpZzogbmV3RnVsbENvbmZpZyB9KVxuICAgIH1cblxuICAgIGNvbnN0IGJhY2tncm91bmRDb2xvciA9IHNsaWNlLmJhY2tncm91bmRDb2xvciB8fCAnIzFlMWUxZSdcbiAgICBjb25zdCBrbUNvbG9yID0gc2xpY2Uua21Db2xvciB8fCAnIzRDQUY1MCdcbiAgICBjb25zdCBndHBDb2xvciA9IHNsaWNlLmd0cENvbG9yIHx8ICcjMjE5NkYzJ1xuICAgIGNvbnN0IG5hem9yYXRDb2xvciA9IHNsaWNlLm5hem9yYXRDb2xvciB8fCAnI0ZGOTgwMCdcbiAgICBjb25zdCBrYW1jaGlsaWtDb2xvciA9IHNsaWNlLmthbWNoaWxpa0NvbG9yIHx8ICcjRjQ0MzM2J1xuICAgIGNvbnN0IHJlZnJlc2hJbnRlcnZhbCA9IHNsaWNlLnJlZnJlc2hJbnRlcnZhbCB8fCAwXG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJwLTJcIj5cbiAgICAgICAgPEFsZXJ0IHR5cGU9XCJ3YXJuaW5nXCIgY2xhc3NOYW1lPVwidy0xMDAgbWItMlwiPlxuICAgICAgICAgIFRoZSBvcmlnaW5hbCBHYXpDb250cm9sbDE1IHNldHRpbmdzIGZpbGUgdXBzdHJlYW0gd2FzIGEgY29weSBvZiB0aGVcbiAgICAgICAgICBYb2RpbSBDb3VudCBzZXR0aW5ncyBwYW5lbCwgc28gaXQgaXNuJ3QgcmV1c2FibGUgaGVyZS4gVGhpcyBzZWN0aW9uXG4gICAgICAgICAgZXhwb3NlcyBpdHMgcmVhbCBjb25maWcga2V5cyBkaXJlY3RseSBpbnN0ZWFkLlxuICAgICAgICA8L0FsZXJ0PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTJcIj5cbiAgICAgICAgICA8TGFiZWwgY2xhc3NOYW1lPVwibWItMVwiPkFQSSBVUkw6PC9MYWJlbD5cbiAgICAgICAgICA8VGV4dElucHV0XG4gICAgICAgICAgICB2YWx1ZT17c2xpY2UuYXBpVXJsIHx8ICdodHRwczovL2dpc2FwaS5odWR1ZGdhei51ei9jb250cm9sLWluZGljYXRvcnMnfVxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7IHVwZGF0ZSgnYXBpVXJsJywgZS50YXJnZXQudmFsdWUpIH19XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItMiBkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyIGp1c3RpZnktY29udGVudC1iZXR3ZWVuXCI+XG4gICAgICAgICAgPExhYmVsIGNsYXNzTmFtZT1cIm1iLTAgbXItMlwiPkJhY2tncm91bmQgY29sb3I6PC9MYWJlbD5cbiAgICAgICAgICA8Q29sb3JQaWNrZXIgaGVpZ2h0PXsyNn0gd2lkdGg9ezMwfSBjb2xvcj17YmFja2dyb3VuZENvbG9yfSBvbkNoYW5nZT17KGMpID0+IHsgdXBkYXRlKCdiYWNrZ3JvdW5kQ29sb3InLCBjKSB9fSBwbGFjZW1lbnQ9XCJib3R0b21cIiAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi0yIGQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXIganVzdGlmeS1jb250ZW50LWJldHdlZW5cIj5cbiAgICAgICAgICA8TGFiZWwgY2xhc3NOYW1lPVwibWItMCBtci0yXCI+SmFtaSBLTSBjb2xvcjo8L0xhYmVsPlxuICAgICAgICAgIDxDb2xvclBpY2tlciBoZWlnaHQ9ezI2fSB3aWR0aD17MzB9IGNvbG9yPXtrbUNvbG9yfSBvbkNoYW5nZT17KGMpID0+IHsgdXBkYXRlKCdrbUNvbG9yJywgYykgfX0gcGxhY2VtZW50PVwiYm90dG9tXCIgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItMiBkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyIGp1c3RpZnktY29udGVudC1iZXR3ZWVuXCI+XG4gICAgICAgICAgPExhYmVsIGNsYXNzTmFtZT1cIm1iLTAgbXItMlwiPkdUUCBKYW1pIGNvbG9yOjwvTGFiZWw+XG4gICAgICAgICAgPENvbG9yUGlja2VyIGhlaWdodD17MjZ9IHdpZHRoPXszMH0gY29sb3I9e2d0cENvbG9yfSBvbkNoYW5nZT17KGMpID0+IHsgdXBkYXRlKCdndHBDb2xvcicsIGMpIH19IHBsYWNlbWVudD1cImJvdHRvbVwiIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTIgZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlblwiPlxuICAgICAgICAgIDxMYWJlbCBjbGFzc05hbWU9XCJtYi0wIG1yLTJcIj5VbXVtaXkgTmF6b3JhdCBjb2xvcjo8L0xhYmVsPlxuICAgICAgICAgIDxDb2xvclBpY2tlciBoZWlnaHQ9ezI2fSB3aWR0aD17MzB9IGNvbG9yPXtuYXpvcmF0Q29sb3J9IG9uQ2hhbmdlPXsoYykgPT4geyB1cGRhdGUoJ25hem9yYXRDb2xvcicsIGMpIH19IHBsYWNlbWVudD1cImJvdHRvbVwiIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1iLTIgZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlblwiPlxuICAgICAgICAgIDxMYWJlbCBjbGFzc05hbWU9XCJtYi0wIG1yLTJcIj5LYW1jaGlsaWtsYXIgY29sb3I6PC9MYWJlbD5cbiAgICAgICAgICA8Q29sb3JQaWNrZXIgaGVpZ2h0PXsyNn0gd2lkdGg9ezMwfSBjb2xvcj17a2FtY2hpbGlrQ29sb3J9IG9uQ2hhbmdlPXsoYykgPT4geyB1cGRhdGUoJ2thbWNoaWxpa0NvbG9yJywgYykgfX0gcGxhY2VtZW50PVwiYm90dG9tXCIgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItMlwiPlxuICAgICAgICAgIDxMYWJlbCBjbGFzc05hbWU9XCJtYi0xXCI+QXV0by1yZWZyZXNoIGludGVydmFsIChtcywgMCA9IG1hbnVhbCk6PC9MYWJlbD5cbiAgICAgICAgICA8VGV4dElucHV0XG4gICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICB2YWx1ZT17U3RyaW5nKHJlZnJlc2hJbnRlcnZhbCl9XG4gICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHsgdXBkYXRlKCdyZWZyZXNoSW50ZXJ2YWwnLCBwYXJzZUludChlLnRhcmdldC52YWx1ZSwgMTApIHx8IDApIH19XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cblxuICByZW5kZXIgKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImdhei1jb21iaW5lZC1zZXR0aW5nXCI+XG4gICAgICAgIDxkZXRhaWxzIG9wZW4gY2xhc3NOYW1lPVwiZ2F6LWNvbWJpbmVkLXNldHRpbmctc2VjdGlvblwiPlxuICAgICAgICAgIDxzdW1tYXJ5PlNhbmEgb3JhbGlnJ2kgKEdhekRhdGUpPC9zdW1tYXJ5PlxuICAgICAgICAgIDxHYXpEYXRlU2V0dGluZyB7Li4udGhpcy5uYW1lc3BhY2VkUHJvcHMoJ2dhekRhdGUnKX0gLz5cbiAgICAgICAgPC9kZXRhaWxzPlxuXG4gICAgICAgIDxkZXRhaWxzIGNsYXNzTmFtZT1cImdhei1jb21iaW5lZC1zZXR0aW5nLXNlY3Rpb25cIj5cbiAgICAgICAgICA8c3VtbWFyeT5LYXRlZ29yaXlhIGZpbHRyaSAoR2F6TWluaUZpbHRlcik8L3N1bW1hcnk+XG4gICAgICAgICAgPEdhek1pbmlGaWx0ZXJTZXR0aW5nIHsuLi50aGlzLm5hbWVzcGFjZWRQcm9wcygnZ2F6TWluaUZpbHRlcicpfSAvPlxuICAgICAgICA8L2RldGFpbHM+XG5cbiAgICAgICAgPGRldGFpbHMgY2xhc3NOYW1lPVwiZ2F6LWNvbWJpbmVkLXNldHRpbmctc2VjdGlvblwiPlxuICAgICAgICAgIDxzdW1tYXJ5Pkh1ZHVkIGZpbHRyaSB2YSBjaGFydCAoR2F6RmlsdGVycyk8L3N1bW1hcnk+XG4gICAgICAgICAgPEdhekZpbHRlcnNTZXR0aW5nIHsuLi50aGlzLm5hbWVzcGFjZWRQcm9wcygnZ2F6RmlsdGVycycpfSAvPlxuICAgICAgICA8L2RldGFpbHM+XG5cbiAgICAgICAgPGRldGFpbHMgY2xhc3NOYW1lPVwiZ2F6LWNvbWJpbmVkLXNldHRpbmctc2VjdGlvblwiPlxuICAgICAgICAgIDxzdW1tYXJ5PkJvc2hxYXJ1diBrbydyc2F0a2ljaGxhcmkgKENvbnRyb2xJbmRpY2F0b3JzKTwvc3VtbWFyeT5cbiAgICAgICAgICB7dGhpcy5yZW5kZXJDb250cm9sSW5kaWNhdG9yc1NldHRpbmdzKCl9XG4gICAgICAgIDwvZGV0YWlscz5cblxuICAgICAgICA8ZGV0YWlscyBjbGFzc05hbWU9XCJnYXotY29tYmluZWQtc2V0dGluZy1zZWN0aW9uXCI+XG4gICAgICAgICAgPHN1bW1hcnk+WG9kaW1sYXIgamFtaSAoR2F6SW5kaWNhdG9yVG90YWwpPC9zdW1tYXJ5PlxuICAgICAgICAgIDxHYXpJbmRpY2F0b3JUb3RhbFNldHRpbmcgey4uLnRoaXMubmFtZXNwYWNlZFByb3BzKCdnYXpJbmRpY2F0b3JUb3RhbCcpfSAvPlxuICAgICAgICA8L2RldGFpbHM+XG5cbiAgICAgICAgPGRldGFpbHMgY2xhc3NOYW1lPVwiZ2F6LWNvbWJpbmVkLXNldHRpbmctc2VjdGlvblwiPlxuICAgICAgICAgIDxzdW1tYXJ5PlhvZGltbGFyIGphZHZhbGkgKEdhekhvZGltVGFibGUpPC9zdW1tYXJ5PlxuICAgICAgICAgIDxHYXpIb2RpbVRhYmxlU2V0dGluZyB7Li4udGhpcy5uYW1lc3BhY2VkUHJvcHMoJ2dhekhvZGltVGFibGUnKX0gLz5cbiAgICAgICAgPC9kZXRhaWxzPlxuXG4gICAgICAgIDxkZXRhaWxzIGNsYXNzTmFtZT1cImdhei1jb21iaW5lZC1zZXR0aW5nLXNlY3Rpb25cIj5cbiAgICAgICAgICA8c3VtbWFyeT5FeGNlbCBla3Nwb3J0IChHYXpFeGNlbCk8L3N1bW1hcnk+XG4gICAgICAgICAgPEdhekV4Y2VsU2V0dGluZyB7Li4udGhpcy5uYW1lc3BhY2VkUHJvcHMoJ2dhekV4Y2VsJyl9IC8+XG4gICAgICAgIDwvZGV0YWlscz5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG4gZXhwb3J0IGZ1bmN0aW9uIF9fc2V0X3dlYnBhY2tfcHVibGljX3BhdGhfXyh1cmwpIHsgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gPSB1cmwgfSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==