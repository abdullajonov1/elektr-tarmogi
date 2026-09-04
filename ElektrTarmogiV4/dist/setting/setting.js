System.register(["jimu-core","jimu-ui/advanced/data-source-selector","jimu-ui"], function(__WEBPACK_DYNAMIC_EXPORT__, __system_context__) {
	var __WEBPACK_EXTERNAL_MODULE_jimu_core__ = {};
	var __WEBPACK_EXTERNAL_MODULE_jimu_ui_advanced_data_source_selector__ = {};
	var __WEBPACK_EXTERNAL_MODULE_jimu_ui__ = {};
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_core__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_ui_advanced_data_source_selector__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_ui__, "__esModule", { value: true });
	return {
		setters: [
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_jimu_core__[key] = module[key];
				});
			},
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_jimu_ui_advanced_data_source_selector__[key] = module[key];
				});
			},
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_jimu_ui__[key] = module[key];
				});
			}
		],
		execute: function() {
			__WEBPACK_DYNAMIC_EXPORT__(
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./your-extensions/widgets/ElektrTarmogiV4/src/config.ts":
/*!***************************************************************!*\
  !*** ./your-extensions/widgets/ElektrTarmogiV4/src/config.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DEFAULT_PORTAL_URL: () => (/* binding */ DEFAULT_PORTAL_URL),
/* harmony export */   DEFAULT_TITLE: () => (/* binding */ DEFAULT_TITLE),
/* harmony export */   DEFAULT_WEBMAP_ITEM_ID: () => (/* binding */ DEFAULT_WEBMAP_ITEM_ID)
/* harmony export */ });
const DEFAULT_TITLE = "HET Mirzo Ulug'bek";
const DEFAULT_PORTAL_URL = "https://sgm.uzspace.uz/portal";
const DEFAULT_WEBMAP_ITEM_ID = "12f4ad92bc51435b96a82b929954de4d";


/***/ }),

/***/ "./your-extensions/widgets/ElektrTarmogiV4/src/setting/translations/default.ts":
/*!*************************************************************************************!*\
  !*** ./your-extensions/widgets/ElektrTarmogiV4/src/setting/translations/default.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
    _widgetLabel: "Elektr tarmog'i V4",
    dataSettings: "Select data (qatlamlar)",
    dataHint: "Ixtiyoriy: UN_Electrik Web Mapdan 2 qatlam — \"Elektr tarmog'i uskunalari\" va \"Elektr tarmog'i\". Xarita widget ichida o'zi ochiladi. Trace card ham shu Web Mapdagi Utility Networkdan ishlaydi.",
    dataRoles: "Nuqta — popup/jadval. Liniya — pie/uzunlik. Alohida Map widget shart emas.",
    titleLabel: "Sarlavha",
    titleHint: "Chap panel sarlavhasi (masalan, HET Mirzo Ulug'bek).",
});


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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "";
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
/*!*************************************************************************!*\
  !*** ./your-extensions/widgets/ElektrTarmogiV4/src/setting/setting.tsx ***!
  \*************************************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   __set_webpack_public_path__: () => (/* binding */ __set_webpack_public_path__),
/* harmony export */   "default": () => (/* binding */ Setting)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var jimu_ui_advanced_data_source_selector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jimu-ui/advanced/data-source-selector */ "jimu-ui/advanced/data-source-selector");
/* harmony import */ var jimu_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jimu-ui */ "jimu-ui");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../config */ "./your-extensions/widgets/ElektrTarmogiV4/src/config.ts");
/* harmony import */ var _translations_default__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./translations/default */ "./your-extensions/widgets/ElektrTarmogiV4/src/setting/translations/default.ts");





const Imm = jimu_core__WEBPACK_IMPORTED_MODULE_0__.Immutable;
class Setting extends jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.PureComponent {
    constructor() {
        super(...arguments);
        this.layerTypes = Imm([
            jimu_core__WEBPACK_IMPORTED_MODULE_0__.DataSourceTypes.FeatureLayer,
            jimu_core__WEBPACK_IMPORTED_MODULE_0__.DataSourceTypes.SubtypeGroupLayer,
        ]);
        this.onDataSourceChange = (useDataSources) => {
            this.props.onSettingChange({
                id: this.props.id,
                useDataSources,
            });
        };
    }
    ensureConfig() {
        const base = { title: _config__WEBPACK_IMPORTED_MODULE_3__.DEFAULT_TITLE };
        if (!this.props.config)
            return Imm(base);
        if (typeof this.props.config.merge === "function") {
            return this.props.config;
        }
        return Imm(Object.assign(Object.assign({}, base), this.props.config));
    }
    nls(id) {
        var _a;
        return (((_a = this.props.intl) === null || _a === void 0 ? void 0 : _a.formatMessage({
            id,
            defaultMessage: _translations_default__WEBPACK_IMPORTED_MODULE_4__["default"][id],
        })) || _translations_default__WEBPACK_IMPORTED_MODULE_4__["default"][id]);
    }
    readPlainConfig() {
        const cfg = this.ensureConfig();
        if (typeof cfg.get === "function") {
            return { title: cfg.get("title") };
        }
        return { title: cfg.title };
    }
    updateConfig(patch) {
        const current = this.ensureConfig();
        const next = typeof current.merge === "function"
            ? current.merge(patch)
            : Imm(Object.assign(Object.assign({}, this.readPlainConfig()), patch));
        this.props.onSettingChange({ id: this.props.id, config: next });
    }
    render() {
        const plain = this.readPlainConfig();
        return (jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { className: "et-setting", style: { padding: 16 } },
            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { style: {
                    marginBottom: 16,
                    padding: 14,
                    borderRadius: 8,
                    border: "1px solid rgba(0,168,232,0.5)",
                    background: "rgba(0,168,232,0.07)",
                } },
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { style: { fontWeight: 700, marginBottom: 8, fontSize: 15 } }, this.nls("dataSettings")),
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { style: {
                        fontSize: 12,
                        opacity: 0.88,
                        marginBottom: 12,
                        lineHeight: 1.45,
                    } }, this.nls("dataHint")),
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui_advanced_data_source_selector__WEBPACK_IMPORTED_MODULE_1__.DataSourceSelector, { mustUseDataSource: true, isMultiple: true, types: this.layerTypes, useDataSources: this.props.useDataSources, onChange: this.onDataSourceChange, widgetId: this.props.id, hideDataView: true }),
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { style: {
                        marginTop: 12,
                        fontSize: 12,
                        opacity: 0.75,
                        lineHeight: 1.45,
                    } }, this.nls("dataRoles"))),
            jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { style: { marginBottom: 14 } },
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_2__.Label, { style: { display: "block", marginBottom: 6 } }, this.nls("titleLabel")),
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement("div", { style: { marginBottom: 6, fontSize: 12, opacity: 0.75 } }, this.nls("titleHint")),
                jimu_core__WEBPACK_IMPORTED_MODULE_0__.React.createElement(jimu_ui__WEBPACK_IMPORTED_MODULE_2__.TextInput, { className: "w-100", defaultValue: String(plain.title || _config__WEBPACK_IMPORTED_MODULE_3__.DEFAULT_TITLE), onAcceptValue: (value) => {
                        this.updateConfig({
                            title: String(value || _config__WEBPACK_IMPORTED_MODULE_3__.DEFAULT_TITLE).trim() || _config__WEBPACK_IMPORTED_MODULE_3__.DEFAULT_TITLE,
                        });
                    } }))));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9FbGVrdHJUYXJtb2dpVjQvZGlzdC9zZXR0aW5nL3NldHRpbmcuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVlPLE1BQU0sYUFBYSxHQUFHLG9CQUFvQixDQUFDO0FBQzNDLE1BQU0sa0JBQWtCLEdBQUcsK0JBQStCLENBQUM7QUFDM0QsTUFBTSxzQkFBc0IsR0FBRyxrQ0FBa0MsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7OztBQ2R6RSxpRUFBZTtJQUNiLFlBQVksRUFBRSxvQkFBb0I7SUFDbEMsWUFBWSxFQUFFLHlCQUF5QjtJQUN2QyxRQUFRLEVBQ04scU1BQXFNO0lBQ3ZNLFNBQVMsRUFDUCw0RUFBNEU7SUFDOUUsVUFBVSxFQUFFLFVBQVU7SUFDdEIsU0FBUyxFQUFFLHNEQUFzRDtDQUNsRSxFQUFDOzs7Ozs7Ozs7Ozs7QUNURjs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7O1VDQUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7Ozs7Ozs7Ozs7QUNBQTs7O0tBR0s7QUFDTCwyQkFBMkI7QUFDM0IsYUFBYTtBQUNiLHFCQUF1QixHQUFHLE1BQU0sQ0FBQyxVQUFVLENBQUMsT0FBTzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOK0I7QUFFUDtBQUNoQztBQUNjO0FBQ0o7QUFFckQsTUFBTSxHQUFHLEdBQUcsZ0RBQTBDLENBQUM7QUFFeEMsTUFBTSxPQUFRLFNBQVEsNENBQUssQ0FBQyxhQUUx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bEQsYUFBYSxFQUFFLENBQUMsS0FBSyxFQUFFLEVBQUU7d0JBQ3ZCLElBQUksQ0FBQyxZQUFZLENBQUM7NEJBQ2hCLEtBQUssRUFBRSxNQUFNLENBQUMsS0FBSyxJQUFJLGtEQUFhLENBQUMsQ0FBQyxJQUFJLEVBQUUsSUFBSSxrREFBYTt5QkFDOUQsQ0FBQyxDQUFDO29CQUNMLENBQUMsR0FDRCxDQUNFLENBQ0YsQ0FDUCxDQUFDO0lBQ0osQ0FBQztDQUNGO0FBRU8sU0FBUywyQkFBMkIsQ0FBQyxHQUFHLElBQUkscUJBQXVCLEdBQUcsR0FBRyxFQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9leGItY2xpZW50Ly4veW91ci1leHRlbnNpb25zL3dpZGdldHMvRWxla3RyVGFybW9naVY0L3NyYy9jb25maWcudHMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL3lvdXItZXh0ZW5zaW9ucy93aWRnZXRzL0VsZWt0clRhcm1vZ2lWNC9zcmMvc2V0dGluZy90cmFuc2xhdGlvbnMvZGVmYXVsdC50cyIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImppbXUtY29yZVwiIiwid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiamltdS11aVwiIiwid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiamltdS11aS9hZHZhbmNlZC9kYXRhLXNvdXJjZS1zZWxlY3RvclwiIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9qaW11LWNvcmUvbGliL3NldC1wdWJsaWMtcGF0aC50cyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4veW91ci1leHRlbnNpb25zL3dpZGdldHMvRWxla3RyVGFybW9naVY0L3NyYy9zZXR0aW5nL3NldHRpbmcudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHR5cGUgSW1tdXRhYmxlT2JqZWN0IH0gZnJvbSBcImppbXUtY29yZVwiO1xuXG5leHBvcnQgaW50ZXJmYWNlIENvbmZpZyB7XG4gIC8qKiBMZWZ0IHBhbmVsIGhlYWRlciB0aXRsZS4gKi9cbiAgdGl0bGU/OiBzdHJpbmc7XG4gIC8qKiBPcHRpb25hbCBvdmVycmlkZSBmb3IgVU5fRWxlY3RyaWsgd2ViIG1hcCBwb3J0YWwgaXRlbS4gKi9cbiAgd2ViTWFwSXRlbUlkPzogc3RyaW5nO1xuICBwb3J0YWxVcmw/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCB0eXBlIElNQ29uZmlnID0gSW1tdXRhYmxlT2JqZWN0PENvbmZpZz47XG5cbmV4cG9ydCBjb25zdCBERUZBVUxUX1RJVExFID0gXCJIRVQgTWlyem8gVWx1ZydiZWtcIjtcbmV4cG9ydCBjb25zdCBERUZBVUxUX1BPUlRBTF9VUkwgPSBcImh0dHBzOi8vc2dtLnV6c3BhY2UudXovcG9ydGFsXCI7XG5leHBvcnQgY29uc3QgREVGQVVMVF9XRUJNQVBfSVRFTV9JRCA9IFwiMTJmNGFkOTJiYzUxNDM1Yjk2YTgyYjkyOTk1NGRlNGRcIjtcbiIsImV4cG9ydCBkZWZhdWx0IHtcbiAgX3dpZGdldExhYmVsOiBcIkVsZWt0ciB0YXJtb2cnaSBWNFwiLFxuICBkYXRhU2V0dGluZ3M6IFwiU2VsZWN0IGRhdGEgKHFhdGxhbWxhcilcIixcbiAgZGF0YUhpbnQ6XG4gICAgXCJJeHRpeW9yaXk6IFVOX0VsZWN0cmlrIFdlYiBNYXBkYW4gMiBxYXRsYW0g4oCUIFxcXCJFbGVrdHIgdGFybW9nJ2kgdXNrdW5hbGFyaVxcXCIgdmEgXFxcIkVsZWt0ciB0YXJtb2cnaVxcXCIuIFhhcml0YSB3aWRnZXQgaWNoaWRhIG8nemkgb2NoaWxhZGkuIFRyYWNlIGNhcmQgaGFtIHNodSBXZWIgTWFwZGFnaSBVdGlsaXR5IE5ldHdvcmtkYW4gaXNobGF5ZGkuXCIsXG4gIGRhdGFSb2xlczpcbiAgICBcIk51cXRhIOKAlCBwb3B1cC9qYWR2YWwuIExpbml5YSDigJQgcGllL3V6dW5saWsuIEFsb2hpZGEgTWFwIHdpZGdldCBzaGFydCBlbWFzLlwiLFxuICB0aXRsZUxhYmVsOiBcIlNhcmxhdmhhXCIsXG4gIHRpdGxlSGludDogXCJDaGFwIHBhbmVsIHNhcmxhdmhhc2kgKG1hc2FsYW4sIEhFVCBNaXJ6byBVbHVnJ2JlaykuXCIsXG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2ppbXVfY29yZV9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9qaW11X3VpX187IiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX2ppbXVfdWlfYWR2YW5jZWRfZGF0YV9zb3VyY2Vfc2VsZWN0b3JfXzsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7IiwiLyoqXHJcbiAqIFdlYnBhY2sgd2lsbCByZXBsYWNlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHdpdGggX193ZWJwYWNrX3JlcXVpcmVfXy5wIHRvIHNldCB0aGUgcHVibGljIHBhdGggZHluYW1pY2FsbHkuXHJcbiAqIFRoZSByZWFzb24gd2h5IHdlIGNhbid0IHNldCB0aGUgcHVibGljUGF0aCBpbiB3ZWJwYWNrIGNvbmZpZyBpczogd2UgY2hhbmdlIHRoZSBwdWJsaWNQYXRoIHdoZW4gZG93bmxvYWQuXHJcbiAqICovXHJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZVxyXG4vLyBAdHMtaWdub3JlXHJcbl9fd2VicGFja19wdWJsaWNfcGF0aF9fID0gd2luZG93LmppbXVDb25maWcuYmFzZVVybFxyXG4iLCJpbXBvcnQgeyBEYXRhU291cmNlVHlwZXMsIEltbXV0YWJsZSwgUmVhY3QsIHR5cGUgVXNlRGF0YVNvdXJjZSB9IGZyb20gXCJqaW11LWNvcmVcIjtcbmltcG9ydCB7IHR5cGUgQWxsV2lkZ2V0U2V0dGluZ1Byb3BzIH0gZnJvbSBcImppbXUtZm9yLWJ1aWxkZXJcIjtcbmltcG9ydCB7IERhdGFTb3VyY2VTZWxlY3RvciB9IGZyb20gXCJqaW11LXVpL2FkdmFuY2VkL2RhdGEtc291cmNlLXNlbGVjdG9yXCI7XG5pbXBvcnQgeyBMYWJlbCwgVGV4dElucHV0IH0gZnJvbSBcImppbXUtdWlcIjtcbmltcG9ydCB7IERFRkFVTFRfVElUTEUsIHR5cGUgSU1Db25maWcgfSBmcm9tIFwiLi4vY29uZmlnXCI7XG5pbXBvcnQgZGVmYXVsdE1lc3NhZ2VzIGZyb20gXCIuL3RyYW5zbGF0aW9ucy9kZWZhdWx0XCI7XG5cbmNvbnN0IEltbSA9IEltbXV0YWJsZSBhcyB1bmtub3duIGFzIDxUPih2YWw6IFQpID0+IGFueTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2V0dGluZyBleHRlbmRzIFJlYWN0LlB1cmVDb21wb25lbnQ8XG4gIEFsbFdpZGdldFNldHRpbmdQcm9wczxJTUNvbmZpZz5cbj4ge1xuICBwcml2YXRlIHJlYWRvbmx5IGxheWVyVHlwZXMgPSBJbW0oW1xuICAgIERhdGFTb3VyY2VUeXBlcy5GZWF0dXJlTGF5ZXIsXG4gICAgRGF0YVNvdXJjZVR5cGVzLlN1YnR5cGVHcm91cExheWVyLFxuICBdKTtcblxuICBwcml2YXRlIGVuc3VyZUNvbmZpZygpIHtcbiAgICBjb25zdCBiYXNlID0geyB0aXRsZTogREVGQVVMVF9USVRMRSB9O1xuICAgIGlmICghdGhpcy5wcm9wcy5jb25maWcpIHJldHVybiBJbW0oYmFzZSk7XG4gICAgaWYgKHR5cGVvZiAodGhpcy5wcm9wcy5jb25maWcgYXMgYW55KS5tZXJnZSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICByZXR1cm4gdGhpcy5wcm9wcy5jb25maWc7XG4gICAgfVxuICAgIHJldHVybiBJbW0oeyAuLi5iYXNlLCAuLi4odGhpcy5wcm9wcy5jb25maWcgYXMgYW55KSB9KTtcbiAgfVxuXG4gIHByaXZhdGUgbmxzKGlkOiBrZXlvZiB0eXBlb2YgZGVmYXVsdE1lc3NhZ2VzKTogc3RyaW5nIHtcbiAgICByZXR1cm4gKFxuICAgICAgdGhpcy5wcm9wcy5pbnRsPy5mb3JtYXRNZXNzYWdlKHtcbiAgICAgICAgaWQsXG4gICAgICAgIGRlZmF1bHRNZXNzYWdlOiBkZWZhdWx0TWVzc2FnZXNbaWRdLFxuICAgICAgfSkgfHwgZGVmYXVsdE1lc3NhZ2VzW2lkXVxuICAgICk7XG4gIH1cblxuICBwcml2YXRlIHJlYWRQbGFpbkNvbmZpZygpOiBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPiB7XG4gICAgY29uc3QgY2ZnID0gdGhpcy5lbnN1cmVDb25maWcoKSBhcyBhbnk7XG4gICAgaWYgKHR5cGVvZiBjZmcuZ2V0ID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgIHJldHVybiB7IHRpdGxlOiBjZmcuZ2V0KFwidGl0bGVcIikgfTtcbiAgICB9XG4gICAgcmV0dXJuIHsgdGl0bGU6IGNmZy50aXRsZSB9O1xuICB9XG5cbiAgcHJpdmF0ZSB1cGRhdGVDb25maWcocGF0Y2g6IFJlY29yZDxzdHJpbmcsIHVua25vd24+KTogdm9pZCB7XG4gICAgY29uc3QgY3VycmVudCA9IHRoaXMuZW5zdXJlQ29uZmlnKCkgYXMgYW55O1xuICAgIGNvbnN0IG5leHQgPVxuICAgICAgdHlwZW9mIGN1cnJlbnQubWVyZ2UgPT09IFwiZnVuY3Rpb25cIlxuICAgICAgICA/IGN1cnJlbnQubWVyZ2UocGF0Y2gpXG4gICAgICAgIDogSW1tKHsgLi4udGhpcy5yZWFkUGxhaW5Db25maWcoKSwgLi4ucGF0Y2ggfSk7XG4gICAgdGhpcy5wcm9wcy5vblNldHRpbmdDaGFuZ2UoeyBpZDogdGhpcy5wcm9wcy5pZCwgY29uZmlnOiBuZXh0IH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBvbkRhdGFTb3VyY2VDaGFuZ2UgPSAodXNlRGF0YVNvdXJjZXM6IFVzZURhdGFTb3VyY2VbXSk6IHZvaWQgPT4ge1xuICAgIHRoaXMucHJvcHMub25TZXR0aW5nQ2hhbmdlKHtcbiAgICAgIGlkOiB0aGlzLnByb3BzLmlkLFxuICAgICAgdXNlRGF0YVNvdXJjZXMsXG4gICAgfSk7XG4gIH07XG5cbiAgcmVuZGVyKCk6IFJlYWN0LlJlYWN0Tm9kZSB7XG4gICAgY29uc3QgcGxhaW4gPSB0aGlzLnJlYWRQbGFpbkNvbmZpZygpO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZXQtc2V0dGluZ1wiIHN0eWxlPXt7IHBhZGRpbmc6IDE2IH19PlxuICAgICAgICA8ZGl2XG4gICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogMTYsXG4gICAgICAgICAgICBwYWRkaW5nOiAxNCxcbiAgICAgICAgICAgIGJvcmRlclJhZGl1czogOCxcbiAgICAgICAgICAgIGJvcmRlcjogXCIxcHggc29saWQgcmdiYSgwLDE2OCwyMzIsMC41KVwiLFxuICAgICAgICAgICAgYmFja2dyb3VuZDogXCJyZ2JhKDAsMTY4LDIzMiwwLjA3KVwiLFxuICAgICAgICAgIH19XG4gICAgICAgID5cbiAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGZvbnRXZWlnaHQ6IDcwMCwgbWFyZ2luQm90dG9tOiA4LCBmb250U2l6ZTogMTUgfX0+XG4gICAgICAgICAgICB7dGhpcy5ubHMoXCJkYXRhU2V0dGluZ3NcIil9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgZm9udFNpemU6IDEyLFxuICAgICAgICAgICAgICBvcGFjaXR5OiAwLjg4LFxuICAgICAgICAgICAgICBtYXJnaW5Cb3R0b206IDEyLFxuICAgICAgICAgICAgICBsaW5lSGVpZ2h0OiAxLjQ1LFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7dGhpcy5ubHMoXCJkYXRhSGludFwiKX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8RGF0YVNvdXJjZVNlbGVjdG9yXG4gICAgICAgICAgICBtdXN0VXNlRGF0YVNvdXJjZVxuICAgICAgICAgICAgaXNNdWx0aXBsZVxuICAgICAgICAgICAgdHlwZXM9e3RoaXMubGF5ZXJUeXBlc31cbiAgICAgICAgICAgIHVzZURhdGFTb3VyY2VzPXt0aGlzLnByb3BzLnVzZURhdGFTb3VyY2VzfVxuICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMub25EYXRhU291cmNlQ2hhbmdlfVxuICAgICAgICAgICAgd2lkZ2V0SWQ9e3RoaXMucHJvcHMuaWR9XG4gICAgICAgICAgICBoaWRlRGF0YVZpZXdcbiAgICAgICAgICAvPlxuICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgIG1hcmdpblRvcDogMTIsXG4gICAgICAgICAgICAgIGZvbnRTaXplOiAxMixcbiAgICAgICAgICAgICAgb3BhY2l0eTogMC43NSxcbiAgICAgICAgICAgICAgbGluZUhlaWdodDogMS40NSxcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAge3RoaXMubmxzKFwiZGF0YVJvbGVzXCIpfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogMTQgfX0+XG4gICAgICAgICAgPExhYmVsIHN0eWxlPXt7IGRpc3BsYXk6IFwiYmxvY2tcIiwgbWFyZ2luQm90dG9tOiA2IH19PlxuICAgICAgICAgICAge3RoaXMubmxzKFwidGl0bGVMYWJlbFwiKX1cbiAgICAgICAgICA8L0xhYmVsPlxuICAgICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luQm90dG9tOiA2LCBmb250U2l6ZTogMTIsIG9wYWNpdHk6IDAuNzUgfX0+XG4gICAgICAgICAgICB7dGhpcy5ubHMoXCJ0aXRsZUhpbnRcIil9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPFRleHRJbnB1dFxuICAgICAgICAgICAgY2xhc3NOYW1lPVwidy0xMDBcIlxuICAgICAgICAgICAgZGVmYXVsdFZhbHVlPXtTdHJpbmcocGxhaW4udGl0bGUgfHwgREVGQVVMVF9USVRMRSl9XG4gICAgICAgICAgICBvbkFjY2VwdFZhbHVlPXsodmFsdWUpID0+IHtcbiAgICAgICAgICAgICAgdGhpcy51cGRhdGVDb25maWcoe1xuICAgICAgICAgICAgICAgIHRpdGxlOiBTdHJpbmcodmFsdWUgfHwgREVGQVVMVF9USVRMRSkudHJpbSgpIHx8IERFRkFVTFRfVElUTEUsXG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuIGV4cG9ydCBmdW5jdGlvbiBfX3NldF93ZWJwYWNrX3B1YmxpY19wYXRoX18odXJsKSB7IF9fd2VicGFja19wdWJsaWNfcGF0aF9fID0gdXJsIH0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=