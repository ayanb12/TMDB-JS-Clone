// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function(modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x) {
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function(id, exports) {
    modules[id] = [
      function(require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function() {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function() {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"8Ye98":[function(require,module,exports) {
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "69f74e7f31319ffd";
module.bundle.HMR_BUNDLE_ID = "92d425515cb7de60";
"use strict";
function _createForOfIteratorHelper(o, allowArrayLike) {
    var it;
    if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
        if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it) o = it;
            var i = 0;
            var F = function F1() {
            };
            return {
                s: F,
                n: function n() {
                    if (i >= o.length) return {
                        done: true
                    };
                    return {
                        done: false,
                        value: o[i++]
                    };
                },
                e: function e(_e) {
                    throw _e;
                },
                f: F
            };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var normalCompletion = true, didErr = false, err;
    return {
        s: function s() {
            it = o[Symbol.iterator]();
        },
        n: function n() {
            var step = it.next();
            normalCompletion = step.done;
            return step;
        },
        e: function e(_e2) {
            didErr = true;
            err = _e2;
        },
        f: function f() {
            try {
                if (!normalCompletion && it.return != null) it.return();
            } finally{
                if (didErr) throw err;
            }
        }
    };
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function accept(fn) {
            this._acceptCallbacks.push(fn || function() {
            });
        },
        dispose: function dispose(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? 'wss' : 'ws';
    var ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/'); // $FlowFixMe
    ws.onmessage = function(event) {
        checkedAssets = {
        };
        acceptedAssets = {
        };
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === 'update') {
            // Remove error overlay if there is one
            removeErrorOverlay();
            var assets = data.assets.filter(function(asset) {
                return asset.envHash === HMR_ENV_HASH;
            }); // Handle HMR Update
            var handled = assets.every(function(asset) {
                return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                assets.forEach(function(asset) {
                    hmrApply(module.bundle.root, asset);
                });
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else window.location.reload();
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            var _iterator = _createForOfIteratorHelper(data.diagnostics.ansi), _step;
            try {
                for(_iterator.s(); !(_step = _iterator.n()).done;){
                    var ansiDiagnostic = _step.value;
                    var stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                    console.error('🚨 [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
                } // Render the fancy html overlay
            } catch (err) {
                _iterator.e(err);
            } finally{
                _iterator.f();
            }
            removeErrorOverlay();
            var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
            document.body.appendChild(overlay);
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn('[parcel] 🚨 Connection to the HMR server was lost');
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log('[parcel] ✨ Error resolved');
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    var errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    var _iterator2 = _createForOfIteratorHelper(diagnostics), _step2;
    try {
        for(_iterator2.s(); !(_step2 = _iterator2.n()).done;){
            var diagnostic = _step2.value;
            var stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;
            errorHTML += "\n      <div>\n        <div style=\"font-size: 18px; font-weight: bold; margin-top: 20px;\">\n          \uD83D\uDEA8 ".concat(diagnostic.message, "\n        </div>\n        <pre>\n          ").concat(stack, "\n        </pre>\n        <div>\n          ").concat(diagnostic.hints.map(function(hint) {
                return '<div>' + hint + '</div>';
            }).join(''), "\n        </div>\n      </div>\n    ");
        }
    } catch (err) {
        _iterator2.e(err);
    } finally{
        _iterator2.f();
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', link.getAttribute('href').split('?')[0] + '?' + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(window.location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') {
        reloadCSS();
        return;
    }
    var deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
    if (deps) {
        var fn = new Function('require', 'module', 'exports', asset.output);
        modules[asset.id] = [
            fn,
            deps
        ];
    } else if (bundle.parent) hmrApply(bundle.parent, asset);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) return true;
    return getParents(module.bundle.root, id).some(function(v) {
        return hmrAcceptCheck(v[0], v[1], null);
    });
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {
    };
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"6cF5V":[function(require,module,exports) {
var _models = require("./models");
var _view = require("./view/view");
var _base = require("./view/base");
// Controller
console.log("hello");
async function loadPopularData() {
    _view.showSpinner();
    let { results  } = await _models.fetchPopularMovies();
    _view.clearSpinner();
    _view.renderCards(results);
}
loadPopularData();
async function loadlatestData() {
    _view.showSpinner();
    let { results  } = await _models.fetchLatestData();
    console.log(results);
    _view.clearSpinner();
    _view.renderLatest(results);
}
async function loadtrendingData() {
    _view.showSpinner();
    let { results  } = await _models.fetchTrendingData();
    console.log(results);
    _view.clearSpinner();
    _view.renderTrending(results);
}
loadtrendingData();
loadlatestData();
_base.elements.input.addEventListener("change", _view.takeInput);
let searchresult = "";
_base.elements.form.addEventListener("submit", async (e)=>{
    searchresult = _view.submitValue(e);
    _view.clearFields();
    let { results  } = await _models.fetchSearchResult(searchresult.trim());
    _view.renderCards(results);
});
_base.elements.categories.addEventListener("click", async (e)=>{
    console.log(e);
    let link = _models.swapPage(e);
    let { results  } = await _models.fetchPopularMovies(link.trim());
    console.log(results);
    _view.renderCards(results);
    console.log(link.trim());
});
_base.elements.trendingCategories.addEventListener("click", async (e)=>{
    let link = _models.swapTrending(e);
    let { results  } = await _models.fetchTrendingData(link.trim());
    _view.renderTrending(results);
});
_base.elements.latestCategories.addEventListener("click", async (e)=>{
    let link = _models.swapLatest(e);
    let { results  } = await _models.fetchLatestData(link.trim());
    console.log(results);
    _view.renderLatest(results);
});

},{"./models":"ihxjA","./view/view":"eOwXc","./view/base":"lrDl3"}],"ihxjA":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "fetchPopularMovies", ()=>fetchPopularMovies
);
parcelHelpers.export(exports, "fetchSearchResult", ()=>fetchSearchResult
);
parcelHelpers.export(exports, "fetchLatestData", ()=>fetchLatestData
);
parcelHelpers.export(exports, "fetchTrendingData", ()=>fetchTrendingData
);
parcelHelpers.export(exports, "swapPage", ()=>swapPage
);
parcelHelpers.export(exports, "swapTrending", ()=>swapTrending
);
parcelHelpers.export(exports, "swapLatest", ()=>swapLatest
);
var _config = require("./config/config");
var _base = require("./view/base");
// For storing and fetching any data
let link = `https://api.themoviedb.org/3/movie/popular?api_key=${_config.API_KEY}&language=en-US&page=1`;
async function fetchPopularMovies(url = link) {
    let result = await fetch(`${url}`);
    let data = await result.json();
    console.log(data);
    return data;
}
let linkLatest = `https://api.themoviedb.org/3/movie/now_playing?api_key=a8edf7b45e1c6692b59785f6dab10624&language=en-US&page=1`;
async function fetchLatestData(url = linkLatest) {
    let result = await fetch(`${url}`);
    let data = await result.json();
    return data;
}
async function fetchTrendingData(url = linktrending) {
    let result = await fetch(`${url}`);
    let data = await result.json();
    return data;
}
fetchLatestData();
async function fetchSearchResult(query) {
    let result = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${_config.API_KEY}&language=en-US&query=${query}&page=1&include_adult=false`);
    let data = await result.json();
    return data;
}
//  Async functions end
function swapPage(e) {
    let textContent = e.target.textContent.trim();
    for(let i = 0; i < _base.elements.categories.children.length; i++)if (_base.elements.categories.children[i].classList.contains("active")) _base.elements.categories.children[i].classList.remove("active");
    if (textContent === "On TV") {
        link = `https://api.themoviedb.org/3/tv/popular?api_key=${_config.API_KEY}&language=en-US&page=1\n    `;
        e.target.classList.add("active");
        console.log("HELLO1");
    } else if (textContent === "For Rent") {
        link = `  https://api.themoviedb.org/3/movie/popular?api_key=${_config.API_KEY}&language=en-US&page=1\n    `;
        e.target.classList.add("active");
    } else if (textContent === "In Theaters") {
        link = `  https://api.themoviedb.org/3/tv/on_the_air?api_key=${_config.API_KEY}&language=en-US&page=1\n    `;
        e.target.classList.add("active");
    } else if (textContent === "Streaming") {
        link = `https://api.themoviedb.org/3/movie/popular?api_key=${_config.API_KEY}&language=en-US&page=1`;
        e.target.classList.add("active");
    }
    return link;
}
//swap page ends
let linktrending = `https://api.themoviedb.org/3/trending/movie/day?api_key=${_config.API_KEY}`;
function swapTrending(e) {
    for(let i = 0; i < _base.elements.trendingCategories.children.length; i++)if (_base.elements.trendingCategories.children[i].classList.contains("active")) _base.elements.trendingCategories.children[i].classList.remove("active");
    let text = e.target.textContent.trim();
    if (text === "Today") {
        linktrending = `https://api.themoviedb.org/3/trending/movie/day?api_key=${_config.API_KEY}`;
        e.target.classList.add("active");
    } else if (text === "This Week") {
        linktrending = `https://api.themoviedb.org/3/trending/movie/week?api_key=${_config.API_KEY}`;
        e.target.classList.add("active");
    }
    return linktrending;
}
//swap trending ends
function swapLatest(e) {
    let textContent = e.target.textContent.trim();
    for(let i = 0; i < _base.elements.latestCategories.children.length; i++)if (_base.elements.latestCategories.children[i].classList.contains("active")) _base.elements.latestCategories.children[i].classList.remove("active");
    if (textContent === "On TV") {
        linkLatest = `https://api.themoviedb.org/3/tv/popular?api_key=${_config.API_KEY}&language=en-US&page=1\n    `;
        e.target.classList.add("active");
        console.log("HELLO1");
    } else if (textContent === "For Rent") {
        linkLatest = `  https://api.themoviedb.org/3/movie/popular?api_key=${_config.API_KEY}&language=en-US&page=1\n    `;
        e.target.classList.add("active");
    } else if (textContent === "In Theaters") {
        linkLatest = `  https://api.themoviedb.org/3/tv/on_the_air?api_key=${_config.API_KEY}&language=en-US&page=1\n    `;
        e.target.classList.add("active");
    } else if (textContent === "Streaming") {
        linkLatest = `https://api.themoviedb.org/3/movie/popular?api_key=${_config.API_KEY}&language=en-US&page=1`;
        e.target.classList.add("active");
    }
    return linkLatest;
}

},{"./config/config":"2qEF7","@parcel/transformer-js/src/esmodule-helpers.js":"JacNc","./view/base":"lrDl3"}],"2qEF7":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "API_KEY", ()=>API_KEY
);
const API_KEY = "9d6004ceb5e357b927f6b91f9ddb142a";

},{"@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"JacNc":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, '__esModule', {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule') return;
        // Skip duplicate re-exports when they have the same value.
        if (key in dest && dest[key] === source[key]) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"lrDl3":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "elements", ()=>elements
);
const elements = {
    cardContainer: document.querySelector(".popular-cards"),
    eachCard: document.querySelector(".popular-cards .movie-card"),
    spinner: document.querySelector(".popular-cards .spinner"),
    form: document.querySelector(".background form"),
    input: document.querySelector(".background form input"),
    categories: document.querySelector(".popular .categories"),
    latestCardContainer: document.querySelector(".latest-cards"),
    trendingCardContainer: document.querySelector(".trending-cards"),
    trendingCategories: document.querySelector(".trending .categories"),
    latestCategories: document.querySelector(".latest .categories")
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}],"eOwXc":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "renderCards", ()=>renderCards
);
parcelHelpers.export(exports, "showSpinner", ()=>showSpinner
);
parcelHelpers.export(exports, "clearSpinner", ()=>clearSpinner
);
parcelHelpers.export(exports, "takeInput", ()=>takeInput
);
parcelHelpers.export(exports, "submitValue", ()=>submitValue
);
parcelHelpers.export(exports, "clearFields", ()=>clearFields
);
parcelHelpers.export(exports, "renderLatest", ()=>renderLatest
);
parcelHelpers.export(exports, "renderTrending", ()=>renderTrending
);
var _base = require("./base");
function renderCards(arr) {
    let month = [
        "Jan",
        "Feb",
        "March",
        "Apr",
        "May",
        "June",
        "July",
        "Aug",
        "Sept",
        "Oct",
        "Nov",
        "Dec", 
    ];
    let str = "";
    arr.filter((item, idx)=>idx <= 6
    ).forEach((item)=>{
        str += `<div class="movie-card">\n        <div class="movie-image">\n        <img src="https://cors-anywhere.herokuapp.com/https://image.tmdb.org/t/p/w154/xmbU4JTUm8rsdtn7Y3Fcm30GpeT.jpg\n\n        " alt="">\n\n        </div>\n        <h4 class="movie-title">${item.title || item.name}</h4>\n        <h6>27 aug,2020</h6>\n        <div class="movie-rating">${parseInt(Number(item.vote_average / 10) * 100)}</div>\n      </div>`;
    });
    _base.elements.cardContainer.innerHTML = str;
}
function renderTrending(arr) {
    let month = [
        "Jan",
        "Feb",
        "March",
        "Apr",
        "May",
        "June",
        "July",
        "Aug",
        "Sept",
        "Oct",
        "Nov",
        "Dec", 
    ];
    let str = "";
    arr.filter((item, idx)=>idx <= 6
    ).forEach((item)=>{
        str += `<div class="movie-card">\n            <div class="movie-image"></div>\n            <h4 class="movie-title">${item.title || item.name}</h4>\n            <h6>${month[Number(item.release_date.substring(5, 7)) - 1]}, ${item.release_date.substring(0, 4)}</h6>\n            <div class="movie-rating">${parseInt(Number(item.vote_average / 10) * 100)}</div>\n            </div>`;
    });
    _base.elements.trendingCardContainer.innerHTML = str;
}
function renderLatest(arr, x) {
    let str = "";
    arr.filter((item, idx)=>idx >= 4 && idx <= 7
    ).forEach((item)=>{
        str += `<div class="movie-card">\n      <div class="movie-image"></div>\n      <h4 class="movie-title">${item.title || item.name}</h4>\n      <h6>${item.first_air_date || item.release_date || ""} </h6>\n    </div>`;
    });
    _base.elements.latestCardContainer.innerHTML = str;
}
function showSpinner() {
    _base.elements.spinner.classList.remove("hide");
}
function clearSpinner() {
    _base.elements.spinner.classList.add("hide");
}
let value = "";
function takeInput(e) {
    value = e.target.value;
}
function submitValue(e) {
    e.preventDefault();
    return value;
}
function clearFields() {
    value = "";
    _base.elements.input.value = "";
}

},{"./base":"lrDl3","@parcel/transformer-js/src/esmodule-helpers.js":"JacNc"}]},["8Ye98","6cF5V"], "6cF5V", "parcelRequire8e5a")

//# sourceMappingURL=index.5cb7de60.js.map
