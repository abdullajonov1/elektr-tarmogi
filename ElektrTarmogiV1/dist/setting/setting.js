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

/***/ "./your-extensions/widgets/ElektrTarmogi/src/config.ts":
/*!*************************************************************!*\
  !*** ./your-extensions/widgets/ElektrTarmogi/src/config.ts ***!
  \*************************************************************/
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

/***/ "./your-extensions/widgets/ElektrTarmogi/src/setting/translations/default.ts":
/*!***********************************************************************************!*\
  !*** ./your-extensions/widgets/ElektrTarmogi/src/setting/translations/default.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
    _widgetLabel: "Elektr tarmog'i",
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
/*!***********************************************************************!*\
  !*** ./your-extensions/widgets/ElektrTarmogi/src/setting/setting.tsx ***!
  \***********************************************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   __set_webpack_public_path__: () => (/* binding */ __set_webpack_public_path__),
/* harmony export */   "default": () => (/* binding */ Setting)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var jimu_ui_advanced_data_source_selector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jimu-ui/advanced/data-source-selector */ "jimu-ui/advanced/data-source-selector");
/* harmony import */ var jimu_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jimu-ui */ "jimu-ui");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../config */ "./your-extensions/widgets/ElektrTarmogi/src/config.ts");
/* harmony import */ var _translations_default__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./translations/default */ "./your-extensions/widgets/ElektrTarmogi/src/setting/translations/default.ts");





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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lkZ2V0cy9FbGVrdHJUYXJtb2dpL2Rpc3Qvc2V0dGluZy9zZXR0aW5nLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFZTyxNQUFNLGFBQWEsR0FBRyxvQkFBb0IsQ0FBQztBQUMzQyxNQUFNLGtCQUFrQixHQUFHLCtCQUErQixDQUFDO0FBQzNELE1BQU0sc0JBQXNCLEdBQUcsa0NBQWtDLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7QUNkekUsaUVBQWU7SUFDYixZQUFZLEVBQUUsaUJBQWlCO0lBQy9CLFlBQVksRUFBRSx5QkFBeUI7SUFDdkMsUUFBUSxFQUNOLHFNQUFxTTtJQUN2TSxTQUFTLEVBQ1AsNEVBQTRFO0lBQzlFLFVBQVUsRUFBRSxVQUFVO0lBQ3RCLFNBQVMsRUFBRSxzREFBc0Q7Q0FDbEUsRUFBQzs7Ozs7Ozs7Ozs7O0FDVEY7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7OztVQ0FBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOzs7Ozs7Ozs7O0FDQUE7OztLQUdLO0FBQ0wsMkJBQTJCO0FBQzNCLGFBQWE7QUFDYixxQkFBdUIsR0FBRyxNQUFNLENBQUMsVUFBVSxDQUFDLE9BQU87Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTitCO0FBRVA7QUFDaEM7QUFDYztBQUNKO0FBRXJELE1BQU0sR0FBRyxHQUFHLGdEQUEwQyxDQUFDO0FBRXhDLE1BQU0sT0FBUSxTQUFRLDRDQUFLLENBQUMsYUFFMUM7SUFGRDs7UUFHbUIsZUFBVSxHQUFHLEdBQUcsQ0FBQztZQUNoQyxzREFBZSxDQUFDLFlBQVk7WUFDNUIsc0RBQWUsQ0FBQyxpQkFBaUI7U0FDbEMsQ0FBQyxDQUFDO1FBcUNLLHVCQUFrQixHQUFHLENBQUMsY0FBK0IsRUFBUSxFQUFFO1lBQ3JFLElBQUksQ0FBQyxLQUFLLENBQUMsZUFBZSxDQUFDO2dCQUN6QixFQUFFLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFO2dCQUNqQixjQUFjO2FBQ2YsQ0FBQyxDQUFDO1FBQ0wsQ0FBQyxDQUFDO0lBc0VKLENBQUM7SUE5R1MsWUFBWTtRQUNsQixNQUFNLElBQUksR0FBRyxFQUFFLEtBQUssRUFBRSxrREFBYSxFQUFFLENBQUM7UUFDdEMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTTtZQUFFLE9BQU8sR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3pDLElBQUksT0FBUSxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQWMsQ0FBQyxLQUFLLEtBQUssVUFBVSxFQUFFLENBQUM7WUFDM0QsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQztRQUMzQixDQUFDO1FBQ0QsT0FBTyxHQUFHLGlDQUFNLElBQUksR0FBTSxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQWMsRUFBRyxDQUFDO0lBQ3pELENBQUM7SUFFTyxHQUFHLENBQUMsRUFBZ0M7O1FBQzFDLE9BQU8sQ0FDTCxXQUFJLENBQUMsS0FBSyxDQUFDLElBQUksMENBQUUsYUFBYSxDQUFDO1lBQzdCLEVBQUU7WUFDRixjQUFjLEVBQUUsNkRBQWUsQ0FBQyxFQUFFLENBQUM7U0FDcEMsQ0FBQyxLQUFJLDZEQUFlLENBQUMsRUFBRSxDQUFDLENBQzFCLENBQUM7SUFDSixDQUFDO0lBRU8sZUFBZTtRQUNyQixNQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsWUFBWSxFQUFTLENBQUM7UUFDdkMsSUFBSSxPQUFPLEdBQUcsQ0FBQyxHQUFHLEtBQUssVUFBVSxFQUFFLENBQUM7WUFDbEMsT0FBTyxFQUFFLEtBQUssRUFBRSxHQUFHLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUM7UUFDckMsQ0FBQztRQUNELE9BQU8sRUFBRSxLQUFLLEVBQUUsR0FBRyxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQzlCLENBQUM7SUFFTyxZQUFZLENBQUMsS0FBOEI7UUFDakQsTUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLFlBQVksRUFBUyxDQUFDO1FBQzNDLE1BQU0sSUFBSSxHQUNSLE9BQU8sT0FBTyxDQUFDLEtBQUssS0FBSyxVQUFVO1lBQ2pDLENBQUMsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQztZQUN0QixDQUFDLENBQUMsR0FBRyxpQ0FBTSxJQUFJLENBQUMsZUFBZSxFQUFFLEdBQUssS0FBSyxFQUFHLENBQUM7UUFDbkQsSUFBSSxDQUFDLEtBQUssQ0FBQyxlQUFlLENBQUMsRUFBRSxFQUFFLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7SUFDbEUsQ0FBQztJQVNELE1BQU07UUFDSixNQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7UUFFckMsT0FBTyxDQUNMLG9FQUFLLFNBQVMsRUFBQyxZQUFZLEVBQUMsS0FBSyxFQUFFLEVBQUUsT0FBTyxFQUFFLEVBQUUsRUFBRTtZQUNoRCxvRUFDRSxLQUFLLEVBQUU7b0JBQ0wsWUFBWSxFQUFFLEVBQUU7b0JBQ2hCLE9BQU8sRUFBRSxFQUFFO29CQUNYLFlBQVksRUFBRSxDQUFDO29CQUNmLE1BQU0sRUFBRSwrQkFBK0I7b0JBQ3ZDLFVBQVUsRUFBRSxzQkFBc0I7aUJBQ25DO2dCQUVELG9FQUFLLEtBQUssRUFBRSxFQUFFLFVBQVUsRUFBRSxHQUFHLEVBQUUsWUFBWSxFQUFFLENBQUMsRUFBRSxRQUFRLEVBQUUsRUFBRSxFQUFFLElBQzNELElBQUksQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLENBQ3JCO2dCQUNOLG9FQUNFLEtBQUssRUFBRTt3QkFDTCxRQUFRLEVBQUUsRUFBRTt3QkFDWixPQUFPLEVBQUUsSUFBSTt3QkFDYixZQUFZLEVBQUUsRUFBRTt3QkFDaEIsVUFBVSxFQUFFLElBQUk7cUJBQ2pCLElBRUEsSUFBSSxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FDakI7Z0JBQ04sMkRBQUMscUZBQWtCLElBQ2pCLGlCQUFpQixRQUNqQixVQUFVLFFBQ1YsS0FBSyxFQUFFLElBQUksQ0FBQyxVQUFVLEVBQ3RCLGNBQWMsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLGNBQWMsRUFDekMsUUFBUSxFQUFFLElBQUksQ0FBQyxrQkFBa0IsRUFDakMsUUFBUSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxFQUN2QixZQUFZLFNBQ1o7Z0JBQ0Ysb0VBQ0UsS0FBSyxFQUFFO3dCQUNMLFNBQVMsRUFBRSxFQUFFO3dCQUNiLFFBQVEsRUFBRSxFQUFFO3dCQUNaLE9BQU8sRUFBRSxJQUFJO3dCQUNiLFVBQVUsRUFBRSxJQUFJO3FCQUNqQixJQUVBLElBQUksQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLENBQ2xCLENBQ0Y7WUFFTixvRUFBSyxLQUFLLEVBQUUsRUFBRSxZQUFZLEVBQUUsRUFBRSxFQUFFO2dCQUM5QiwyREFBQywwQ0FBSyxJQUFDLEtBQUssRUFBRSxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsWUFBWSxFQUFFLENBQUMsRUFBRSxJQUNoRCxJQUFJLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxDQUNqQjtnQkFDUixvRUFBSyxLQUFLLEVBQUUsRUFBRSxZQUFZLEVBQUUsQ0FBQyxFQUFFLFFBQVEsRUFBRSxFQUFFLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBRSxJQUN6RCxJQUFJLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxDQUNsQjtnQkFDTiwyREFBQyw4Q0FBUyxJQUNSLFNBQVMsRUFBQyxPQUFPLEVBQ2pCLFlBQVksRUFBRSxNQUFNLENBQUMsS0FBSyxDQUFDLEtBQUssSUFBSSxrREFBYSxDQUFDLEVBQ2xELGFBQWEsRUFBRSxDQUFDLEtBQUssRUFBRSxFQUFFO3dCQUN2QixJQUFJLENBQUMsWUFBWSxDQUFDOzRCQUNoQixLQUFLLEVBQUUsTUFBTSxDQUFDLEtBQUssSUFBSSxrREFBYSxDQUFDLENBQUMsSUFBSSxFQUFFLElBQUksa0RBQWE7eUJBQzlELENBQUMsQ0FBQztvQkFDTCxDQUFDLEdBQ0QsQ0FDRSxDQUNGLENBQ1AsQ0FBQztJQUNKLENBQUM7Q0FDRjtBQUVPLFNBQVMsMkJBQTJCLENBQUMsR0FBRyxJQUFJLHFCQUF1QixHQUFHLEdBQUcsRUFBQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL3lvdXItZXh0ZW5zaW9ucy93aWRnZXRzL0VsZWt0clRhcm1vZ2kvc3JjL2NvbmZpZy50cyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4veW91ci1leHRlbnNpb25zL3dpZGdldHMvRWxla3RyVGFybW9naS9zcmMvc2V0dGluZy90cmFuc2xhdGlvbnMvZGVmYXVsdC50cyIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImppbXUtY29yZVwiIiwid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiamltdS11aVwiIiwid2VicGFjazovL2V4Yi1jbGllbnQvZXh0ZXJuYWwgc3lzdGVtIFwiamltdS11aS9hZHZhbmNlZC9kYXRhLXNvdXJjZS1zZWxlY3RvclwiIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2V4Yi1jbGllbnQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9qaW11LWNvcmUvbGliL3NldC1wdWJsaWMtcGF0aC50cyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4veW91ci1leHRlbnNpb25zL3dpZGdldHMvRWxla3RyVGFybW9naS9zcmMvc2V0dGluZy9zZXR0aW5nLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB0eXBlIEltbXV0YWJsZU9iamVjdCB9IGZyb20gXCJqaW11LWNvcmVcIjtcblxuZXhwb3J0IGludGVyZmFjZSBDb25maWcge1xuICAvKiogTGVmdCBwYW5lbCBoZWFkZXIgdGl0bGUuICovXG4gIHRpdGxlPzogc3RyaW5nO1xuICAvKiogT3B0aW9uYWwgb3ZlcnJpZGUgZm9yIFVOX0VsZWN0cmlrIHdlYiBtYXAgcG9ydGFsIGl0ZW0uICovXG4gIHdlYk1hcEl0ZW1JZD86IHN0cmluZztcbiAgcG9ydGFsVXJsPzogc3RyaW5nO1xufVxuXG5leHBvcnQgdHlwZSBJTUNvbmZpZyA9IEltbXV0YWJsZU9iamVjdDxDb25maWc+O1xuXG5leHBvcnQgY29uc3QgREVGQVVMVF9USVRMRSA9IFwiSEVUIE1pcnpvIFVsdWcnYmVrXCI7XG5leHBvcnQgY29uc3QgREVGQVVMVF9QT1JUQUxfVVJMID0gXCJodHRwczovL3NnbS51enNwYWNlLnV6L3BvcnRhbFwiO1xuZXhwb3J0IGNvbnN0IERFRkFVTFRfV0VCTUFQX0lURU1fSUQgPSBcIjEyZjRhZDkyYmM1MTQzNWI5NmE4MmI5Mjk5NTRkZTRkXCI7XG4iLCJleHBvcnQgZGVmYXVsdCB7XG4gIF93aWRnZXRMYWJlbDogXCJFbGVrdHIgdGFybW9nJ2lcIixcbiAgZGF0YVNldHRpbmdzOiBcIlNlbGVjdCBkYXRhIChxYXRsYW1sYXIpXCIsXG4gIGRhdGFIaW50OlxuICAgIFwiSXh0aXlvcml5OiBVTl9FbGVjdHJpayBXZWIgTWFwZGFuIDIgcWF0bGFtIOKAlCBcXFwiRWxla3RyIHRhcm1vZydpIHVza3VuYWxhcmlcXFwiIHZhIFxcXCJFbGVrdHIgdGFybW9nJ2lcXFwiLiBYYXJpdGEgd2lkZ2V0IGljaGlkYSBvJ3ppIG9jaGlsYWRpLiBUcmFjZSBjYXJkIGhhbSBzaHUgV2ViIE1hcGRhZ2kgVXRpbGl0eSBOZXR3b3JrZGFuIGlzaGxheWRpLlwiLFxuICBkYXRhUm9sZXM6XG4gICAgXCJOdXF0YSDigJQgcG9wdXAvamFkdmFsLiBMaW5peWEg4oCUIHBpZS91enVubGlrLiBBbG9oaWRhIE1hcCB3aWRnZXQgc2hhcnQgZW1hcy5cIixcbiAgdGl0bGVMYWJlbDogXCJTYXJsYXZoYVwiLFxuICB0aXRsZUhpbnQ6IFwiQ2hhcCBwYW5lbCBzYXJsYXZoYXNpIChtYXNhbGFuLCBIRVQgTWlyem8gVWx1ZydiZWspLlwiLFxufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9qaW11X2NvcmVfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfamltdV91aV9fOyIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9qaW11X3VpX2FkdmFuY2VkX2RhdGFfc291cmNlX3NlbGVjdG9yX187IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiOyIsIi8qKlxyXG4gKiBXZWJwYWNrIHdpbGwgcmVwbGFjZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB3aXRoIF9fd2VicGFja19yZXF1aXJlX18ucCB0byBzZXQgdGhlIHB1YmxpYyBwYXRoIGR5bmFtaWNhbGx5LlxyXG4gKiBUaGUgcmVhc29uIHdoeSB3ZSBjYW4ndCBzZXQgdGhlIHB1YmxpY1BhdGggaW4gd2VicGFjayBjb25maWcgaXM6IHdlIGNoYW5nZSB0aGUgcHVibGljUGF0aCB3aGVuIGRvd25sb2FkLlxyXG4gKiAqL1xyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmVcclxuLy8gQHRzLWlnbm9yZVxyXG5fX3dlYnBhY2tfcHVibGljX3BhdGhfXyA9IHdpbmRvdy5qaW11Q29uZmlnLmJhc2VVcmxcclxuIiwiaW1wb3J0IHsgRGF0YVNvdXJjZVR5cGVzLCBJbW11dGFibGUsIFJlYWN0LCB0eXBlIFVzZURhdGFTb3VyY2UgfSBmcm9tIFwiamltdS1jb3JlXCI7XG5pbXBvcnQgeyB0eXBlIEFsbFdpZGdldFNldHRpbmdQcm9wcyB9IGZyb20gXCJqaW11LWZvci1idWlsZGVyXCI7XG5pbXBvcnQgeyBEYXRhU291cmNlU2VsZWN0b3IgfSBmcm9tIFwiamltdS11aS9hZHZhbmNlZC9kYXRhLXNvdXJjZS1zZWxlY3RvclwiO1xuaW1wb3J0IHsgTGFiZWwsIFRleHRJbnB1dCB9IGZyb20gXCJqaW11LXVpXCI7XG5pbXBvcnQgeyBERUZBVUxUX1RJVExFLCB0eXBlIElNQ29uZmlnIH0gZnJvbSBcIi4uL2NvbmZpZ1wiO1xuaW1wb3J0IGRlZmF1bHRNZXNzYWdlcyBmcm9tIFwiLi90cmFuc2xhdGlvbnMvZGVmYXVsdFwiO1xuXG5jb25zdCBJbW0gPSBJbW11dGFibGUgYXMgdW5rbm93biBhcyA8VD4odmFsOiBUKSA9PiBhbnk7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNldHRpbmcgZXh0ZW5kcyBSZWFjdC5QdXJlQ29tcG9uZW50PFxuICBBbGxXaWRnZXRTZXR0aW5nUHJvcHM8SU1Db25maWc+XG4+IHtcbiAgcHJpdmF0ZSByZWFkb25seSBsYXllclR5cGVzID0gSW1tKFtcbiAgICBEYXRhU291cmNlVHlwZXMuRmVhdHVyZUxheWVyLFxuICAgIERhdGFTb3VyY2VUeXBlcy5TdWJ0eXBlR3JvdXBMYXllcixcbiAgXSk7XG5cbiAgcHJpdmF0ZSBlbnN1cmVDb25maWcoKSB7XG4gICAgY29uc3QgYmFzZSA9IHsgdGl0bGU6IERFRkFVTFRfVElUTEUgfTtcbiAgICBpZiAoIXRoaXMucHJvcHMuY29uZmlnKSByZXR1cm4gSW1tKGJhc2UpO1xuICAgIGlmICh0eXBlb2YgKHRoaXMucHJvcHMuY29uZmlnIGFzIGFueSkubWVyZ2UgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgcmV0dXJuIHRoaXMucHJvcHMuY29uZmlnO1xuICAgIH1cbiAgICByZXR1cm4gSW1tKHsgLi4uYmFzZSwgLi4uKHRoaXMucHJvcHMuY29uZmlnIGFzIGFueSkgfSk7XG4gIH1cblxuICBwcml2YXRlIG5scyhpZDoga2V5b2YgdHlwZW9mIGRlZmF1bHRNZXNzYWdlcyk6IHN0cmluZyB7XG4gICAgcmV0dXJuIChcbiAgICAgIHRoaXMucHJvcHMuaW50bD8uZm9ybWF0TWVzc2FnZSh7XG4gICAgICAgIGlkLFxuICAgICAgICBkZWZhdWx0TWVzc2FnZTogZGVmYXVsdE1lc3NhZ2VzW2lkXSxcbiAgICAgIH0pIHx8IGRlZmF1bHRNZXNzYWdlc1tpZF1cbiAgICApO1xuICB9XG5cbiAgcHJpdmF0ZSByZWFkUGxhaW5Db25maWcoKTogUmVjb3JkPHN0cmluZywgdW5rbm93bj4ge1xuICAgIGNvbnN0IGNmZyA9IHRoaXMuZW5zdXJlQ29uZmlnKCkgYXMgYW55O1xuICAgIGlmICh0eXBlb2YgY2ZnLmdldCA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICByZXR1cm4geyB0aXRsZTogY2ZnLmdldChcInRpdGxlXCIpIH07XG4gICAgfVxuICAgIHJldHVybiB7IHRpdGxlOiBjZmcudGl0bGUgfTtcbiAgfVxuXG4gIHByaXZhdGUgdXBkYXRlQ29uZmlnKHBhdGNoOiBSZWNvcmQ8c3RyaW5nLCB1bmtub3duPik6IHZvaWQge1xuICAgIGNvbnN0IGN1cnJlbnQgPSB0aGlzLmVuc3VyZUNvbmZpZygpIGFzIGFueTtcbiAgICBjb25zdCBuZXh0ID1cbiAgICAgIHR5cGVvZiBjdXJyZW50Lm1lcmdlID09PSBcImZ1bmN0aW9uXCJcbiAgICAgICAgPyBjdXJyZW50Lm1lcmdlKHBhdGNoKVxuICAgICAgICA6IEltbSh7IC4uLnRoaXMucmVhZFBsYWluQ29uZmlnKCksIC4uLnBhdGNoIH0pO1xuICAgIHRoaXMucHJvcHMub25TZXR0aW5nQ2hhbmdlKHsgaWQ6IHRoaXMucHJvcHMuaWQsIGNvbmZpZzogbmV4dCB9KTtcbiAgfVxuXG4gIHByaXZhdGUgb25EYXRhU291cmNlQ2hhbmdlID0gKHVzZURhdGFTb3VyY2VzOiBVc2VEYXRhU291cmNlW10pOiB2b2lkID0+IHtcbiAgICB0aGlzLnByb3BzLm9uU2V0dGluZ0NoYW5nZSh7XG4gICAgICBpZDogdGhpcy5wcm9wcy5pZCxcbiAgICAgIHVzZURhdGFTb3VyY2VzLFxuICAgIH0pO1xuICB9O1xuXG4gIHJlbmRlcigpOiBSZWFjdC5SZWFjdE5vZGUge1xuICAgIGNvbnN0IHBsYWluID0gdGhpcy5yZWFkUGxhaW5Db25maWcoKTtcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImV0LXNldHRpbmdcIiBzdHlsZT17eyBwYWRkaW5nOiAxNiB9fT5cbiAgICAgICAgPGRpdlxuICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICBtYXJnaW5Cb3R0b206IDE2LFxuICAgICAgICAgICAgcGFkZGluZzogMTQsXG4gICAgICAgICAgICBib3JkZXJSYWRpdXM6IDgsXG4gICAgICAgICAgICBib3JkZXI6IFwiMXB4IHNvbGlkIHJnYmEoMCwxNjgsMjMyLDAuNSlcIixcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IFwicmdiYSgwLDE2OCwyMzIsMC4wNylcIixcbiAgICAgICAgICB9fVxuICAgICAgICA+XG4gICAgICAgICAgPGRpdiBzdHlsZT17eyBmb250V2VpZ2h0OiA3MDAsIG1hcmdpbkJvdHRvbTogOCwgZm9udFNpemU6IDE1IH19PlxuICAgICAgICAgICAge3RoaXMubmxzKFwiZGF0YVNldHRpbmdzXCIpfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgIGZvbnRTaXplOiAxMixcbiAgICAgICAgICAgICAgb3BhY2l0eTogMC44OCxcbiAgICAgICAgICAgICAgbWFyZ2luQm90dG9tOiAxMixcbiAgICAgICAgICAgICAgbGluZUhlaWdodDogMS40NSxcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAge3RoaXMubmxzKFwiZGF0YUhpbnRcIil9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPERhdGFTb3VyY2VTZWxlY3RvclxuICAgICAgICAgICAgbXVzdFVzZURhdGFTb3VyY2VcbiAgICAgICAgICAgIGlzTXVsdGlwbGVcbiAgICAgICAgICAgIHR5cGVzPXt0aGlzLmxheWVyVHlwZXN9XG4gICAgICAgICAgICB1c2VEYXRhU291cmNlcz17dGhpcy5wcm9wcy51c2VEYXRhU291cmNlc31cbiAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLm9uRGF0YVNvdXJjZUNoYW5nZX1cbiAgICAgICAgICAgIHdpZGdldElkPXt0aGlzLnByb3BzLmlkfVxuICAgICAgICAgICAgaGlkZURhdGFWaWV3XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICBtYXJnaW5Ub3A6IDEyLFxuICAgICAgICAgICAgICBmb250U2l6ZTogMTIsXG4gICAgICAgICAgICAgIG9wYWNpdHk6IDAuNzUsXG4gICAgICAgICAgICAgIGxpbmVIZWlnaHQ6IDEuNDUsXG4gICAgICAgICAgICB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHt0aGlzLm5scyhcImRhdGFSb2xlc1wiKX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW5Cb3R0b206IDE0IH19PlxuICAgICAgICAgIDxMYWJlbCBzdHlsZT17eyBkaXNwbGF5OiBcImJsb2NrXCIsIG1hcmdpbkJvdHRvbTogNiB9fT5cbiAgICAgICAgICAgIHt0aGlzLm5scyhcInRpdGxlTGFiZWxcIil9XG4gICAgICAgICAgPC9MYWJlbD5cbiAgICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogNiwgZm9udFNpemU6IDEyLCBvcGFjaXR5OiAwLjc1IH19PlxuICAgICAgICAgICAge3RoaXMubmxzKFwidGl0bGVIaW50XCIpfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxUZXh0SW5wdXRcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInctMTAwXCJcbiAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT17U3RyaW5nKHBsYWluLnRpdGxlIHx8IERFRkFVTFRfVElUTEUpfVxuICAgICAgICAgICAgb25BY2NlcHRWYWx1ZT17KHZhbHVlKSA9PiB7XG4gICAgICAgICAgICAgIHRoaXMudXBkYXRlQ29uZmlnKHtcbiAgICAgICAgICAgICAgICB0aXRsZTogU3RyaW5nKHZhbHVlIHx8IERFRkFVTFRfVElUTEUpLnRyaW0oKSB8fCBERUZBVUxUX1RJVExFLFxuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbiBleHBvcnQgZnVuY3Rpb24gX19zZXRfd2VicGFja19wdWJsaWNfcGF0aF9fKHVybCkgeyBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyA9IHVybCB9Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9