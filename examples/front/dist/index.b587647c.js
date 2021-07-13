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
        this,
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
})({"38fSZ":[function(require,module,exports) {
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d751713988987e9331980363e24189ce";
module.bundle.HMR_BUNDLE_ID = "2812484aa0f052c57f23e350b587647c"; // @flow
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
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {
            });
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets/*: {|[string]: boolean|} */ , acceptedAssets/*: {|[string]: boolean|} */ , assetsToAccept/*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? 'wss' : 'ws';
    var ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/');
    // $FlowFixMe
    ws.onmessage = function(event/*: {data: string, ...} */ ) {
        checkedAssets = {
        };
        acceptedAssets = {
        };
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === 'update') {
            // Remove error overlay if there is one
            removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH
            );
            // Handle HMR Update
            var handled = false;
            assets.forEach((asset)=>{
                var didAccept = asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
                if (didAccept) handled = true;
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
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error('🚨 [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
            }
            // Render the fancy html overlay
            removeErrorOverlay();
            var overlay = createErrorOverlay(data.diagnostics.html);
            // $FlowFixMe
            document.body.appendChild(overlay);
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function(e) {
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
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;
        errorHTML += `\n      <div>\n        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">\n          🚨 ${diagnostic.message}\n        </div>\n        <pre>\n          ${stack}\n        </pre>\n        <div>\n          ${diagnostic.hints.map((hint)=>'<div>' + hint + '</div>'
        ).join('')}\n        </div>\n      </div>\n    `;
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
    newLink.setAttribute('href', // $FlowFixMe
    link.getAttribute('href').split('?')[0] + '?' + Date.now());
    // $FlowFixMe
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
function hmrApply(bundle/*: ParcelRequire */ , asset/*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') {
        reloadCSS();
        return;
    }
    let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
    if (deps) {
        var fn = new Function('require', 'module', 'exports', asset.output);
        modules[asset.id] = [
            fn,
            deps
        ];
    } else if (bundle.parent) hmrApply(bundle.parent, asset);
}
function hmrAcceptCheck(bundle/*: ParcelRequire */ , id/*: string */ , depsByBundle/*: ?{ [string]: { [string]: string } }*/ ) {
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
function hmrAcceptRun(bundle/*: ParcelRequire */ , id/*: string */ ) {
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
        if (assetsToAlsoAccept && assetsToAccept.length) assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"5DXLx":[function(require,module,exports) {
var _grpcWorkerClient = require("@webworker-grpc-test/grpc-worker-client");
var _echoPb = require("./proto/echo.pb");
var _echoPbwsc = require("./proto/echo.pbwsc");
var _common = require("@metabreak/grpc-webworker-common");
var _operators = require("rxjs/operators");
const worker = new Worker(require("./grpc.worker"), {
    type: 'module'
});
const gateway = new _grpcWorkerClient.GrpcWorkerGateway(worker);
const clientSettings = {
    host: 'http://localhost:8080'
};
const client = new _grpcWorkerClient.GrpcWorkerClient(_echoPbwsc.GrpcWorkerEchoServiceClientDef.serviceId, clientSettings, gateway);
async function handleEchoBtnClick() {
    console.debug('create unary request');
    const resp = client.unary('/echo.EchoService/EchoOnce', new _echoPb.EchoRequest({
        message: 'echo test'
    }), new _common.GrpcMetadata(), _echoPb.EchoRequest, _echoPb.EchoResponse);
    resp.pipe(_operators.tap(console.log)).subscribe();
}
async function handleStreamBtnClick() {
    console.debug('create stream request');
    const resp = client.serverStream('/echo.EchoService/EchoStream', new _echoPb.EchoRequest({
        message: 'stream test'
    }), new _common.GrpcMetadata(), _echoPb.EchoRequest, _echoPb.EchoResponse);
    resp.pipe(_operators.tap(console.log)).subscribe();
}
(()=>{
    console.debug('example loaded');
    document.getElementById('echo-btn')?.addEventListener('click', handleEchoBtnClick);
    document.getElementById('stream-btn')?.addEventListener('click', handleStreamBtnClick);
})();

},{"./grpc.worker":"7J6DD","@webworker-grpc-test/grpc-worker-client":"3C9Pm","@metabreak/grpc-webworker-common":"4GbOz","rxjs/operators":"2CPuR","./proto/echo.pb":"5OWru","./proto/echo.pbwsc":"5uLLa"}],"7J6DD":[function(require,module,exports) {
module.exports = require('./get-worker-url')("grpc.worker.bab8e368.js");

},{"./get-worker-url":"5etIC"}],"5etIC":[function(require,module,exports) {
"use strict";
/* global self, Blob */ var bundleUrl = require('./bundle-url');
module.exports = function(relativePath) {
    var workerUrl = bundleUrl.getBundleURL() + relativePath;
    if (bundleUrl.getOrigin(workerUrl) === self.location.origin) // If the worker bundle's url is on the same origin as the document,
    // use the worker bundle's own url.
    return workerUrl;
    else // Otherwise, create a blob URL which loads the worker bundle with `importScripts`.
    return URL.createObjectURL(new Blob([
        'importScripts(' + JSON.stringify(workerUrl) + ');'
    ]));
};

},{"./bundle-url":"3cgp6"}],"3cgp6":[function(require,module,exports) {
"use strict";
/* globals document:readonly */ var bundleURL = null;
function getBundleURLCached() {
    if (!bundleURL) bundleURL = getBundleURL();
    return bundleURL;
}
function getBundleURL() {
    try {
        throw new Error();
    } catch (err) {
        var matches = ('' + err.stack).match(/(https?|file|ftp):\/\/[^)\n]+/g);
        if (matches) return getBaseURL(matches[0]);
    }
    return '/';
}
function getBaseURL(url) {
    return ('' + url).replace(/^((?:https?|file|ftp):\/\/.+)\/[^/]+$/, '$1') + '/';
} // TODO: Replace uses with `new URL(url).origin` when ie11 is no longer supported.
function getOrigin(url) {
    let matches = ('' + url).match(/(https?|file|ftp):\/\/[^/]+/);
    if (!matches) throw new Error('Origin not found');
    return matches[0];
}
exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
exports.getOrigin = getOrigin;

},{}],"3C9Pm":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _grpcWorkerClient = require("./grpc-worker-client");
parcelHelpers.exportAll(_grpcWorkerClient, exports);
var _grpcWorkerGateway = require("./grpc-worker-gateway");
parcelHelpers.exportAll(_grpcWorkerGateway, exports);

},{"./grpc-worker-client":"7lkse","./grpc-worker-gateway":"5WEVy","@parcel/transformer-js/src/esmodule-helpers.js":"1gLSz"}],"7lkse":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * GrpcClientFactory implementation based on grpc-web running in worker
 */ parcelHelpers.export(exports, "GrpcWorkerClientFactory", ()=>GrpcWorkerClientFactory
);
/**
 * GrpcClient implementation based on grpc-web running in worker
 */ parcelHelpers.export(exports, "GrpcWorkerClient", ()=>GrpcWorkerClient
);
var _common = require("@metabreak/grpc-webworker-common");
var _operators = require("rxjs/operators");
class GrpcWorkerClientFactory {
    constructor(defaultSettings, gateway){
        this.defaultSettings = defaultSettings;
        this.gateway = gateway;
    }
    createClient(serviceId, customSettings) {
        const settings = customSettings || this.defaultSettings;
        if (!settings) throw new Error(`Worker client factory: no settings provided for ${serviceId}`);
        return new GrpcWorkerClient(serviceId, {
            ...settings
        }, this.gateway);
    }
}
class GrpcWorkerClient {
    constructor(serviceId, settings, gateway1){
        this.serviceId = serviceId;
        this.settings = settings;
        this.gateway = gateway1;
        this.gateway.configureServiceClient(this.serviceId, this.settings);
    }
    getSettings() {
        return {
            ...this.settings
        };
    }
    unary(path, req, metadata, reqclss, resclss) {
        return this.gateway.callUnaryFromWorker(this.serviceId, path, req.toObject(), metadata?.toObject() ?? {
        }).pipe(_operators.tap((res)=>{
            if (res instanceof _common.GrpcDataEvent) res.data = new resclss(res.data);
        }));
    }
    serverStream(path, req, metadata, reqclss, resclss) {
        return this.gateway.callServerStreamFromWorker(this.serviceId, path, req.toObject(), metadata?.toObject() ?? {
        }).pipe(_operators.tap((res)=>{
            if (res instanceof _common.GrpcDataEvent) res.data = new resclss(res.data);
        }));
    }
}

},{"@metabreak/grpc-webworker-common":"4GbOz","rxjs/operators":"2CPuR","@parcel/transformer-js/src/esmodule-helpers.js":"1gLSz"}],"4GbOz":[function(require,module,exports) {
(function(global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) : typeof define === 'function' && define.amd ? define('@ngx-grpc/common', [
        'exports'
    ], factory) : (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global['ngx-grpc'] = global['ngx-grpc'] || {
    }, global['ngx-grpc'].common = {
    })));
})(this, function(exports) {
    'use strict';
    /**
     * Type of the RPC
     */ exports.GrpcCallType = void 0;
    (function(GrpcCallType) {
        GrpcCallType[GrpcCallType["unary"] = 0] = "unary";
        GrpcCallType[GrpcCallType["serverStream"] = 1] = "serverStream";
    })(exports.GrpcCallType || (exports.GrpcCallType = {
    }));
    /**
     * Data event. This event is emitted when the new message arrives from the server
     */ var GrpcDataEvent = function() {
        function GrpcDataEvent1(data) {
            this.data = data;
        }
        return GrpcDataEvent1;
    }();
    /**
     * Status event. This event is emitted when the new status and metadata arrives from the server
     */ var GrpcStatusEvent = function() {
        function GrpcStatusEvent1(statusCode, statusMessage, metadata) {
            this.statusCode = statusCode;
            this.statusMessage = statusMessage;
            this.metadata = metadata;
        }
        return GrpcStatusEvent1;
    }();
    /**
     * A message pool for using with `google.protobuf.Any`.
     * Pass the array of messages to be registered within the pool and give this pool to `toProtobufJSON` or to `unpack`.
     */ var GrpcMessagePool = function() {
        function GrpcMessagePool1(messages) {
            this.index = new Map();
            this.add(messages);
        }
        GrpcMessagePool1.prototype.add = function(messages) {
            var _this = this;
            messages.forEach(function(m) {
                return _this.index.set(m.id, m);
            });
        };
        GrpcMessagePool1.prototype.get = function(id) {
            return this.index.get(id);
        };
        return GrpcMessagePool1;
    }();
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */ /* global Reflect, Promise */ var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || ({
            __proto__: []
        }) instanceof Array && function(d1, b1) {
            d1.__proto__ = b1;
        } || function(d1, b1) {
            for(var p in b1)if (Object.prototype.hasOwnProperty.call(b1, p)) d1[p] = b1[p];
        };
        return extendStatics(d, b);
    };
    function __extends(d, b) {
        if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }
    var __assign = function() {
        __assign = Object.assign || function __assign1(t) {
            for(var s, i = 1, n = arguments.length; i < n; i++){
                s = arguments[i];
                for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };
    function __rest(s, e) {
        var t = {
        };
        for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function") for(var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++)if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
        return t;
    }
    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }
    function __param(paramIndex, decorator) {
        return function(target, key) {
            decorator(target, key, paramIndex);
        };
    }
    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }
    function __awaiter(thisArg, _arguments, P, generator) {
        function adopt(value) {
            return value instanceof P ? value : new P(function(resolve) {
                resolve(value);
            });
        }
        return new (P || (P = Promise))(function(resolve, reject) {
            function fulfilled(value) {
                try {
                    step(generator.next(value));
                } catch (e) {
                    reject(e);
                }
            }
            function rejected(value) {
                try {
                    step(generator["throw"](value));
                } catch (e) {
                    reject(e);
                }
            }
            function step(result) {
                result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
            }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }
    function __generator(thisArg, body) {
        var _ = {
            label: 0,
            sent: function() {
                if (t[0] & 1) throw t[1];
                return t[1];
            },
            trys: [],
            ops: []
        }, f, y, t, g;
        function verb(n) {
            return function(v) {
                return step([
                    n,
                    v
                ]);
            };
        }
        function step(op) {
            if (f) throw new TypeError("Generator is already executing.");
            while(_)try {
                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                if (y = 0, t) op = [
                    op[0] & 2,
                    t.value
                ];
                switch(op[0]){
                    case 0:
                    case 1:
                        t = op;
                        break;
                    case 4:
                        _.label++;
                        return {
                            value: op[1],
                            done: false
                        };
                    case 5:
                        _.label++;
                        y = op[1];
                        op = [
                            0
                        ];
                        continue;
                    case 7:
                        op = _.ops.pop();
                        _.trys.pop();
                        continue;
                    default:
                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                            _ = 0;
                            continue;
                        }
                        if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                            _.label = op[1];
                            break;
                        }
                        if (op[0] === 6 && _.label < t[1]) {
                            _.label = t[1];
                            t = op;
                            break;
                        }
                        if (t && _.label < t[2]) {
                            _.label = t[2];
                            _.ops.push(op);
                            break;
                        }
                        if (t[2]) _.ops.pop();
                        _.trys.pop();
                        continue;
                }
                op = body.call(thisArg, _);
            } catch (e) {
                op = [
                    6,
                    e
                ];
                y = 0;
            } finally{
                f = t = 0;
            }
            if (op[0] & 5) throw op[1];
            return {
                value: op[0] ? op[1] : void 0,
                done: true
            };
        }
        return g = {
            next: verb(0),
            "throw": verb(1),
            "return": verb(2)
        }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
            return this;
        }), g;
    }
    var __createBinding = Object.create ? function(o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        Object.defineProperty(o, k2, {
            enumerable: true,
            get: function() {
                return m[k];
            }
        });
    } : function(o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        o[k2] = m[k];
    };
    function __exportStar(m, o) {
        for(var p in m)if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p)) __createBinding(o, m, p);
    }
    function __values(o) {
        var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
        if (m) return m.call(o);
        if (o && typeof o.length === "number") return {
            next: function() {
                if (o && i >= o.length) o = void 0;
                return {
                    value: o && o[i++],
                    done: !o
                };
            }
        };
        throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }
    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m) return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while((n === void 0 || (n--) > 0) && !(r = i.next()).done)ar.push(r.value);
        } catch (error) {
            e = {
                error: error
            };
        } finally{
            try {
                if (r && !r.done && (m = i["return"])) m.call(i);
            } finally{
                if (e) throw e.error;
            }
        }
        return ar;
    }
    /** @deprecated */ function __spread() {
        for(var ar = [], i = 0; i < arguments.length; i++)ar = ar.concat(__read(arguments[i]));
        return ar;
    }
    /** @deprecated */ function __spreadArrays() {
        for(var s = 0, i = 0, il = arguments.length; i < il; i++)s += arguments[i].length;
        for(var r = Array(s), k = 0, i = 0; i < il; i++)for(var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)r[k] = a[j];
        return r;
    }
    function __spreadArray(to, from) {
        for(var i = 0, il = from.length, j = to.length; i < il; i++, j++)to[j] = from[i];
        return to;
    }
    function __await(v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    }
    function __asyncGenerator(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        function verb(n) {
            if (g[n]) i[n] = function(v) {
                return new Promise(function(a, b) {
                    q.push([
                        n,
                        v,
                        a,
                        b
                    ]) > 1 || resume(n, v);
                });
            };
        }
        function resume(n, v) {
            try {
                step(g[n](v));
            } catch (e) {
                settle(q[0][3], e);
            }
        }
        function step(r) {
            r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
        }
        function fulfill(value) {
            resume("next", value);
        }
        function reject(value) {
            resume("throw", value);
        }
        function settle(f, v) {
            if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
        }
        return i = {
        }, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
            return this;
        }, i;
    }
    function __asyncDelegator(o) {
        var i, p;
        function verb(n, f) {
            i[n] = o[n] ? function(v) {
                return (p = !p) ? {
                    value: __await(o[n](v)),
                    done: n === "return"
                } : f ? f(v) : v;
            } : f;
        }
        return i = {
        }, verb("next"), verb("throw", function(e) {
            throw e;
        }), verb("return"), i[Symbol.iterator] = function() {
            return this;
        }, i;
    }
    function __asyncValues(o) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        function verb(n) {
            i[n] = o[n] && function(v) {
                return new Promise(function(resolve, reject) {
                    v = o[n](v), settle(resolve, reject, v.done, v.value);
                });
            };
        }
        function settle(resolve, reject, d, v) {
            Promise.resolve(v).then(function(v1) {
                resolve({
                    value: v1,
                    done: d
                });
            }, reject);
        }
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {
        }, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
            return this;
        }, i);
    }
    function __makeTemplateObject(cooked, raw) {
        if (Object.defineProperty) Object.defineProperty(cooked, "raw", {
            value: raw
        });
        else cooked.raw = raw;
        return cooked;
    }
    var __setModuleDefault = Object.create ? function(o, v) {
        Object.defineProperty(o, "default", {
            enumerable: true,
            value: v
        });
    } : function(o, v) {
        o["default"] = v;
    };
    function __importStar(mod) {
        if (mod && mod.__esModule) return mod;
        var result = {
        };
        if (mod != null) for(var k in mod)if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
        __setModuleDefault(result, mod);
        return result;
    }
    function __importDefault(mod) {
        return mod && mod.__esModule ? mod : {
            default: mod
        };
    }
    function __classPrivateFieldGet(receiver, state, kind, f) {
        if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
        if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
        return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
    }
    function __classPrivateFieldSet(receiver, state, value, kind, f) {
        if (kind === "m") throw new TypeError("Private method is not writable");
        if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
        if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
        return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
    }
    var GrpcMetadata = function() {
        function GrpcMetadata1(initial) {
            initial = initial || {
            };
            this.map = Object.keys(initial).reduce(function(m, k) {
                return m.set(k, initial[k]);
            }, new Map());
        }
        GrpcMetadata1.prototype.set = function(name, value) {
            this.map.set(name, value);
        };
        GrpcMetadata1.prototype.get = function(name) {
            return this.map.get(name);
        };
        GrpcMetadata1.prototype.has = function(name) {
            return this.map.has(name);
        };
        GrpcMetadata1.prototype.clone = function() {
            return new GrpcMetadata1(this.toObject());
        };
        GrpcMetadata1.prototype.toObject = function() {
            var _this = this;
            return __spread(this.map.keys()).reduce(function(o, k) {
                var _a;
                return Object.assign(Object.assign({
                }, o), (_a = {
                }, _a[k] = _this.map.get(k), _a));
            }, {
            });
        };
        return GrpcMetadata1;
    }();
    /**
     * Converts Uint8Array to string as prescribed by protobuf bytes toJSON definition
     * Inspired by https://stackoverflow.com/a/9458996/1990451
     */ function uint8ArrayToBase64(array) {
        var res = '';
        for(var i = 0; i < array.byteLength; i++)res += String.fromCharCode(array[i]);
        return window.btoa(res);
    }
    /*
      DOM-free chunk

      IMPORTANT: all dependencies must be DOM-references-free because it might breaks Worker environment; in other words
        - do not import to @angular/* and other DOM-related packages in any level of import
        - do not use Window / Document etc
    */ /**
     * Generated bundle index. Do not edit.
     */ exports.GrpcDataEvent = GrpcDataEvent;
    exports.GrpcMessagePool = GrpcMessagePool;
    exports.GrpcMetadata = GrpcMetadata;
    exports.GrpcStatusEvent = GrpcStatusEvent;
    exports.uint8ArrayToBase64 = uint8ArrayToBase64;
    Object.defineProperty(exports, '__esModule', {
        value: true
    });
});

},{}],"2CPuR":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.mergeAll = exports.merge = exports.max = exports.materialize = exports.mapTo = exports.map = exports.last = exports.isEmpty = exports.ignoreElements = exports.groupBy = exports.first = exports.findIndex = exports.find = exports.finalize = exports.filter = exports.expand = exports.exhaustMap = exports.exhaustAll = exports.exhaust = exports.every = exports.endWith = exports.elementAt = exports.distinctUntilKeyChanged = exports.distinctUntilChanged = exports.distinct = exports.dematerialize = exports.delayWhen = exports.delay = exports.defaultIfEmpty = exports.debounceTime = exports.debounce = exports.count = exports.connect = exports.concatWith = exports.concatMapTo = exports.concatMap = exports.concatAll = exports.concat = exports.combineLatestWith = exports.combineLatest = exports.combineLatestAll = exports.combineAll = exports.catchError = exports.bufferWhen = exports.bufferToggle = exports.bufferTime = exports.bufferCount = exports.buffer = exports.auditTime = exports.audit = void 0;
exports.timeInterval = exports.throwIfEmpty = exports.throttleTime = exports.throttle = exports.tap = exports.takeWhile = exports.takeUntil = exports.takeLast = exports.take = exports.switchScan = exports.switchMapTo = exports.switchMap = exports.switchAll = exports.subscribeOn = exports.startWith = exports.skipWhile = exports.skipUntil = exports.skipLast = exports.skip = exports.single = exports.shareReplay = exports.share = exports.sequenceEqual = exports.scan = exports.sampleTime = exports.sample = exports.refCount = exports.retryWhen = exports.retry = exports.repeatWhen = exports.repeat = exports.reduce = exports.raceWith = exports.race = exports.publishReplay = exports.publishLast = exports.publishBehavior = exports.publish = exports.pluck = exports.partition = exports.pairwise = exports.onErrorResumeNext = exports.observeOn = exports.multicast = exports.min = exports.mergeWith = exports.mergeScan = exports.mergeMapTo = exports.mergeMap = exports.flatMap = void 0;
exports.zipWith = exports.zipAll = exports.zip = exports.withLatestFrom = exports.windowWhen = exports.windowToggle = exports.windowTime = exports.windowCount = exports.window = exports.toArray = exports.timestamp = exports.timeoutWith = exports.timeout = void 0;
var audit_1 = require("../internal/operators/audit");
Object.defineProperty(exports, "audit", {
    enumerable: true,
    get: function() {
        return audit_1.audit;
    }
});
var auditTime_1 = require("../internal/operators/auditTime");
Object.defineProperty(exports, "auditTime", {
    enumerable: true,
    get: function() {
        return auditTime_1.auditTime;
    }
});
var buffer_1 = require("../internal/operators/buffer");
Object.defineProperty(exports, "buffer", {
    enumerable: true,
    get: function() {
        return buffer_1.buffer;
    }
});
var bufferCount_1 = require("../internal/operators/bufferCount");
Object.defineProperty(exports, "bufferCount", {
    enumerable: true,
    get: function() {
        return bufferCount_1.bufferCount;
    }
});
var bufferTime_1 = require("../internal/operators/bufferTime");
Object.defineProperty(exports, "bufferTime", {
    enumerable: true,
    get: function() {
        return bufferTime_1.bufferTime;
    }
});
var bufferToggle_1 = require("../internal/operators/bufferToggle");
Object.defineProperty(exports, "bufferToggle", {
    enumerable: true,
    get: function() {
        return bufferToggle_1.bufferToggle;
    }
});
var bufferWhen_1 = require("../internal/operators/bufferWhen");
Object.defineProperty(exports, "bufferWhen", {
    enumerable: true,
    get: function() {
        return bufferWhen_1.bufferWhen;
    }
});
var catchError_1 = require("../internal/operators/catchError");
Object.defineProperty(exports, "catchError", {
    enumerable: true,
    get: function() {
        return catchError_1.catchError;
    }
});
var combineAll_1 = require("../internal/operators/combineAll");
Object.defineProperty(exports, "combineAll", {
    enumerable: true,
    get: function() {
        return combineAll_1.combineAll;
    }
});
var combineLatestAll_1 = require("../internal/operators/combineLatestAll");
Object.defineProperty(exports, "combineLatestAll", {
    enumerable: true,
    get: function() {
        return combineLatestAll_1.combineLatestAll;
    }
});
var combineLatest_1 = require("../internal/operators/combineLatest");
Object.defineProperty(exports, "combineLatest", {
    enumerable: true,
    get: function() {
        return combineLatest_1.combineLatest;
    }
});
var combineLatestWith_1 = require("../internal/operators/combineLatestWith");
Object.defineProperty(exports, "combineLatestWith", {
    enumerable: true,
    get: function() {
        return combineLatestWith_1.combineLatestWith;
    }
});
var concat_1 = require("../internal/operators/concat");
Object.defineProperty(exports, "concat", {
    enumerable: true,
    get: function() {
        return concat_1.concat;
    }
});
var concatAll_1 = require("../internal/operators/concatAll");
Object.defineProperty(exports, "concatAll", {
    enumerable: true,
    get: function() {
        return concatAll_1.concatAll;
    }
});
var concatMap_1 = require("../internal/operators/concatMap");
Object.defineProperty(exports, "concatMap", {
    enumerable: true,
    get: function() {
        return concatMap_1.concatMap;
    }
});
var concatMapTo_1 = require("../internal/operators/concatMapTo");
Object.defineProperty(exports, "concatMapTo", {
    enumerable: true,
    get: function() {
        return concatMapTo_1.concatMapTo;
    }
});
var concatWith_1 = require("../internal/operators/concatWith");
Object.defineProperty(exports, "concatWith", {
    enumerable: true,
    get: function() {
        return concatWith_1.concatWith;
    }
});
var connect_1 = require("../internal/operators/connect");
Object.defineProperty(exports, "connect", {
    enumerable: true,
    get: function() {
        return connect_1.connect;
    }
});
var count_1 = require("../internal/operators/count");
Object.defineProperty(exports, "count", {
    enumerable: true,
    get: function() {
        return count_1.count;
    }
});
var debounce_1 = require("../internal/operators/debounce");
Object.defineProperty(exports, "debounce", {
    enumerable: true,
    get: function() {
        return debounce_1.debounce;
    }
});
var debounceTime_1 = require("../internal/operators/debounceTime");
Object.defineProperty(exports, "debounceTime", {
    enumerable: true,
    get: function() {
        return debounceTime_1.debounceTime;
    }
});
var defaultIfEmpty_1 = require("../internal/operators/defaultIfEmpty");
Object.defineProperty(exports, "defaultIfEmpty", {
    enumerable: true,
    get: function() {
        return defaultIfEmpty_1.defaultIfEmpty;
    }
});
var delay_1 = require("../internal/operators/delay");
Object.defineProperty(exports, "delay", {
    enumerable: true,
    get: function() {
        return delay_1.delay;
    }
});
var delayWhen_1 = require("../internal/operators/delayWhen");
Object.defineProperty(exports, "delayWhen", {
    enumerable: true,
    get: function() {
        return delayWhen_1.delayWhen;
    }
});
var dematerialize_1 = require("../internal/operators/dematerialize");
Object.defineProperty(exports, "dematerialize", {
    enumerable: true,
    get: function() {
        return dematerialize_1.dematerialize;
    }
});
var distinct_1 = require("../internal/operators/distinct");
Object.defineProperty(exports, "distinct", {
    enumerable: true,
    get: function() {
        return distinct_1.distinct;
    }
});
var distinctUntilChanged_1 = require("../internal/operators/distinctUntilChanged");
Object.defineProperty(exports, "distinctUntilChanged", {
    enumerable: true,
    get: function() {
        return distinctUntilChanged_1.distinctUntilChanged;
    }
});
var distinctUntilKeyChanged_1 = require("../internal/operators/distinctUntilKeyChanged");
Object.defineProperty(exports, "distinctUntilKeyChanged", {
    enumerable: true,
    get: function() {
        return distinctUntilKeyChanged_1.distinctUntilKeyChanged;
    }
});
var elementAt_1 = require("../internal/operators/elementAt");
Object.defineProperty(exports, "elementAt", {
    enumerable: true,
    get: function() {
        return elementAt_1.elementAt;
    }
});
var endWith_1 = require("../internal/operators/endWith");
Object.defineProperty(exports, "endWith", {
    enumerable: true,
    get: function() {
        return endWith_1.endWith;
    }
});
var every_1 = require("../internal/operators/every");
Object.defineProperty(exports, "every", {
    enumerable: true,
    get: function() {
        return every_1.every;
    }
});
var exhaust_1 = require("../internal/operators/exhaust");
Object.defineProperty(exports, "exhaust", {
    enumerable: true,
    get: function() {
        return exhaust_1.exhaust;
    }
});
var exhaustAll_1 = require("../internal/operators/exhaustAll");
Object.defineProperty(exports, "exhaustAll", {
    enumerable: true,
    get: function() {
        return exhaustAll_1.exhaustAll;
    }
});
var exhaustMap_1 = require("../internal/operators/exhaustMap");
Object.defineProperty(exports, "exhaustMap", {
    enumerable: true,
    get: function() {
        return exhaustMap_1.exhaustMap;
    }
});
var expand_1 = require("../internal/operators/expand");
Object.defineProperty(exports, "expand", {
    enumerable: true,
    get: function() {
        return expand_1.expand;
    }
});
var filter_1 = require("../internal/operators/filter");
Object.defineProperty(exports, "filter", {
    enumerable: true,
    get: function() {
        return filter_1.filter;
    }
});
var finalize_1 = require("../internal/operators/finalize");
Object.defineProperty(exports, "finalize", {
    enumerable: true,
    get: function() {
        return finalize_1.finalize;
    }
});
var find_1 = require("../internal/operators/find");
Object.defineProperty(exports, "find", {
    enumerable: true,
    get: function() {
        return find_1.find;
    }
});
var findIndex_1 = require("../internal/operators/findIndex");
Object.defineProperty(exports, "findIndex", {
    enumerable: true,
    get: function() {
        return findIndex_1.findIndex;
    }
});
var first_1 = require("../internal/operators/first");
Object.defineProperty(exports, "first", {
    enumerable: true,
    get: function() {
        return first_1.first;
    }
});
var groupBy_1 = require("../internal/operators/groupBy");
Object.defineProperty(exports, "groupBy", {
    enumerable: true,
    get: function() {
        return groupBy_1.groupBy;
    }
});
var ignoreElements_1 = require("../internal/operators/ignoreElements");
Object.defineProperty(exports, "ignoreElements", {
    enumerable: true,
    get: function() {
        return ignoreElements_1.ignoreElements;
    }
});
var isEmpty_1 = require("../internal/operators/isEmpty");
Object.defineProperty(exports, "isEmpty", {
    enumerable: true,
    get: function() {
        return isEmpty_1.isEmpty;
    }
});
var last_1 = require("../internal/operators/last");
Object.defineProperty(exports, "last", {
    enumerable: true,
    get: function() {
        return last_1.last;
    }
});
var map_1 = require("../internal/operators/map");
Object.defineProperty(exports, "map", {
    enumerable: true,
    get: function() {
        return map_1.map;
    }
});
var mapTo_1 = require("../internal/operators/mapTo");
Object.defineProperty(exports, "mapTo", {
    enumerable: true,
    get: function() {
        return mapTo_1.mapTo;
    }
});
var materialize_1 = require("../internal/operators/materialize");
Object.defineProperty(exports, "materialize", {
    enumerable: true,
    get: function() {
        return materialize_1.materialize;
    }
});
var max_1 = require("../internal/operators/max");
Object.defineProperty(exports, "max", {
    enumerable: true,
    get: function() {
        return max_1.max;
    }
});
var merge_1 = require("../internal/operators/merge");
Object.defineProperty(exports, "merge", {
    enumerable: true,
    get: function() {
        return merge_1.merge;
    }
});
var mergeAll_1 = require("../internal/operators/mergeAll");
Object.defineProperty(exports, "mergeAll", {
    enumerable: true,
    get: function() {
        return mergeAll_1.mergeAll;
    }
});
var flatMap_1 = require("../internal/operators/flatMap");
Object.defineProperty(exports, "flatMap", {
    enumerable: true,
    get: function() {
        return flatMap_1.flatMap;
    }
});
var mergeMap_1 = require("../internal/operators/mergeMap");
Object.defineProperty(exports, "mergeMap", {
    enumerable: true,
    get: function() {
        return mergeMap_1.mergeMap;
    }
});
var mergeMapTo_1 = require("../internal/operators/mergeMapTo");
Object.defineProperty(exports, "mergeMapTo", {
    enumerable: true,
    get: function() {
        return mergeMapTo_1.mergeMapTo;
    }
});
var mergeScan_1 = require("../internal/operators/mergeScan");
Object.defineProperty(exports, "mergeScan", {
    enumerable: true,
    get: function() {
        return mergeScan_1.mergeScan;
    }
});
var mergeWith_1 = require("../internal/operators/mergeWith");
Object.defineProperty(exports, "mergeWith", {
    enumerable: true,
    get: function() {
        return mergeWith_1.mergeWith;
    }
});
var min_1 = require("../internal/operators/min");
Object.defineProperty(exports, "min", {
    enumerable: true,
    get: function() {
        return min_1.min;
    }
});
var multicast_1 = require("../internal/operators/multicast");
Object.defineProperty(exports, "multicast", {
    enumerable: true,
    get: function() {
        return multicast_1.multicast;
    }
});
var observeOn_1 = require("../internal/operators/observeOn");
Object.defineProperty(exports, "observeOn", {
    enumerable: true,
    get: function() {
        return observeOn_1.observeOn;
    }
});
var onErrorResumeNext_1 = require("../internal/operators/onErrorResumeNext");
Object.defineProperty(exports, "onErrorResumeNext", {
    enumerable: true,
    get: function() {
        return onErrorResumeNext_1.onErrorResumeNext;
    }
});
var pairwise_1 = require("../internal/operators/pairwise");
Object.defineProperty(exports, "pairwise", {
    enumerable: true,
    get: function() {
        return pairwise_1.pairwise;
    }
});
var partition_1 = require("../internal/operators/partition");
Object.defineProperty(exports, "partition", {
    enumerable: true,
    get: function() {
        return partition_1.partition;
    }
});
var pluck_1 = require("../internal/operators/pluck");
Object.defineProperty(exports, "pluck", {
    enumerable: true,
    get: function() {
        return pluck_1.pluck;
    }
});
var publish_1 = require("../internal/operators/publish");
Object.defineProperty(exports, "publish", {
    enumerable: true,
    get: function() {
        return publish_1.publish;
    }
});
var publishBehavior_1 = require("../internal/operators/publishBehavior");
Object.defineProperty(exports, "publishBehavior", {
    enumerable: true,
    get: function() {
        return publishBehavior_1.publishBehavior;
    }
});
var publishLast_1 = require("../internal/operators/publishLast");
Object.defineProperty(exports, "publishLast", {
    enumerable: true,
    get: function() {
        return publishLast_1.publishLast;
    }
});
var publishReplay_1 = require("../internal/operators/publishReplay");
Object.defineProperty(exports, "publishReplay", {
    enumerable: true,
    get: function() {
        return publishReplay_1.publishReplay;
    }
});
var race_1 = require("../internal/operators/race");
Object.defineProperty(exports, "race", {
    enumerable: true,
    get: function() {
        return race_1.race;
    }
});
var raceWith_1 = require("../internal/operators/raceWith");
Object.defineProperty(exports, "raceWith", {
    enumerable: true,
    get: function() {
        return raceWith_1.raceWith;
    }
});
var reduce_1 = require("../internal/operators/reduce");
Object.defineProperty(exports, "reduce", {
    enumerable: true,
    get: function() {
        return reduce_1.reduce;
    }
});
var repeat_1 = require("../internal/operators/repeat");
Object.defineProperty(exports, "repeat", {
    enumerable: true,
    get: function() {
        return repeat_1.repeat;
    }
});
var repeatWhen_1 = require("../internal/operators/repeatWhen");
Object.defineProperty(exports, "repeatWhen", {
    enumerable: true,
    get: function() {
        return repeatWhen_1.repeatWhen;
    }
});
var retry_1 = require("../internal/operators/retry");
Object.defineProperty(exports, "retry", {
    enumerable: true,
    get: function() {
        return retry_1.retry;
    }
});
var retryWhen_1 = require("../internal/operators/retryWhen");
Object.defineProperty(exports, "retryWhen", {
    enumerable: true,
    get: function() {
        return retryWhen_1.retryWhen;
    }
});
var refCount_1 = require("../internal/operators/refCount");
Object.defineProperty(exports, "refCount", {
    enumerable: true,
    get: function() {
        return refCount_1.refCount;
    }
});
var sample_1 = require("../internal/operators/sample");
Object.defineProperty(exports, "sample", {
    enumerable: true,
    get: function() {
        return sample_1.sample;
    }
});
var sampleTime_1 = require("../internal/operators/sampleTime");
Object.defineProperty(exports, "sampleTime", {
    enumerable: true,
    get: function() {
        return sampleTime_1.sampleTime;
    }
});
var scan_1 = require("../internal/operators/scan");
Object.defineProperty(exports, "scan", {
    enumerable: true,
    get: function() {
        return scan_1.scan;
    }
});
var sequenceEqual_1 = require("../internal/operators/sequenceEqual");
Object.defineProperty(exports, "sequenceEqual", {
    enumerable: true,
    get: function() {
        return sequenceEqual_1.sequenceEqual;
    }
});
var share_1 = require("../internal/operators/share");
Object.defineProperty(exports, "share", {
    enumerable: true,
    get: function() {
        return share_1.share;
    }
});
var shareReplay_1 = require("../internal/operators/shareReplay");
Object.defineProperty(exports, "shareReplay", {
    enumerable: true,
    get: function() {
        return shareReplay_1.shareReplay;
    }
});
var single_1 = require("../internal/operators/single");
Object.defineProperty(exports, "single", {
    enumerable: true,
    get: function() {
        return single_1.single;
    }
});
var skip_1 = require("../internal/operators/skip");
Object.defineProperty(exports, "skip", {
    enumerable: true,
    get: function() {
        return skip_1.skip;
    }
});
var skipLast_1 = require("../internal/operators/skipLast");
Object.defineProperty(exports, "skipLast", {
    enumerable: true,
    get: function() {
        return skipLast_1.skipLast;
    }
});
var skipUntil_1 = require("../internal/operators/skipUntil");
Object.defineProperty(exports, "skipUntil", {
    enumerable: true,
    get: function() {
        return skipUntil_1.skipUntil;
    }
});
var skipWhile_1 = require("../internal/operators/skipWhile");
Object.defineProperty(exports, "skipWhile", {
    enumerable: true,
    get: function() {
        return skipWhile_1.skipWhile;
    }
});
var startWith_1 = require("../internal/operators/startWith");
Object.defineProperty(exports, "startWith", {
    enumerable: true,
    get: function() {
        return startWith_1.startWith;
    }
});
var subscribeOn_1 = require("../internal/operators/subscribeOn");
Object.defineProperty(exports, "subscribeOn", {
    enumerable: true,
    get: function() {
        return subscribeOn_1.subscribeOn;
    }
});
var switchAll_1 = require("../internal/operators/switchAll");
Object.defineProperty(exports, "switchAll", {
    enumerable: true,
    get: function() {
        return switchAll_1.switchAll;
    }
});
var switchMap_1 = require("../internal/operators/switchMap");
Object.defineProperty(exports, "switchMap", {
    enumerable: true,
    get: function() {
        return switchMap_1.switchMap;
    }
});
var switchMapTo_1 = require("../internal/operators/switchMapTo");
Object.defineProperty(exports, "switchMapTo", {
    enumerable: true,
    get: function() {
        return switchMapTo_1.switchMapTo;
    }
});
var switchScan_1 = require("../internal/operators/switchScan");
Object.defineProperty(exports, "switchScan", {
    enumerable: true,
    get: function() {
        return switchScan_1.switchScan;
    }
});
var take_1 = require("../internal/operators/take");
Object.defineProperty(exports, "take", {
    enumerable: true,
    get: function() {
        return take_1.take;
    }
});
var takeLast_1 = require("../internal/operators/takeLast");
Object.defineProperty(exports, "takeLast", {
    enumerable: true,
    get: function() {
        return takeLast_1.takeLast;
    }
});
var takeUntil_1 = require("../internal/operators/takeUntil");
Object.defineProperty(exports, "takeUntil", {
    enumerable: true,
    get: function() {
        return takeUntil_1.takeUntil;
    }
});
var takeWhile_1 = require("../internal/operators/takeWhile");
Object.defineProperty(exports, "takeWhile", {
    enumerable: true,
    get: function() {
        return takeWhile_1.takeWhile;
    }
});
var tap_1 = require("../internal/operators/tap");
Object.defineProperty(exports, "tap", {
    enumerable: true,
    get: function() {
        return tap_1.tap;
    }
});
var throttle_1 = require("../internal/operators/throttle");
Object.defineProperty(exports, "throttle", {
    enumerable: true,
    get: function() {
        return throttle_1.throttle;
    }
});
var throttleTime_1 = require("../internal/operators/throttleTime");
Object.defineProperty(exports, "throttleTime", {
    enumerable: true,
    get: function() {
        return throttleTime_1.throttleTime;
    }
});
var throwIfEmpty_1 = require("../internal/operators/throwIfEmpty");
Object.defineProperty(exports, "throwIfEmpty", {
    enumerable: true,
    get: function() {
        return throwIfEmpty_1.throwIfEmpty;
    }
});
var timeInterval_1 = require("../internal/operators/timeInterval");
Object.defineProperty(exports, "timeInterval", {
    enumerable: true,
    get: function() {
        return timeInterval_1.timeInterval;
    }
});
var timeout_1 = require("../internal/operators/timeout");
Object.defineProperty(exports, "timeout", {
    enumerable: true,
    get: function() {
        return timeout_1.timeout;
    }
});
var timeoutWith_1 = require("../internal/operators/timeoutWith");
Object.defineProperty(exports, "timeoutWith", {
    enumerable: true,
    get: function() {
        return timeoutWith_1.timeoutWith;
    }
});
var timestamp_1 = require("../internal/operators/timestamp");
Object.defineProperty(exports, "timestamp", {
    enumerable: true,
    get: function() {
        return timestamp_1.timestamp;
    }
});
var toArray_1 = require("../internal/operators/toArray");
Object.defineProperty(exports, "toArray", {
    enumerable: true,
    get: function() {
        return toArray_1.toArray;
    }
});
var window_1 = require("../internal/operators/window");
Object.defineProperty(exports, "window", {
    enumerable: true,
    get: function() {
        return window_1.window;
    }
});
var windowCount_1 = require("../internal/operators/windowCount");
Object.defineProperty(exports, "windowCount", {
    enumerable: true,
    get: function() {
        return windowCount_1.windowCount;
    }
});
var windowTime_1 = require("../internal/operators/windowTime");
Object.defineProperty(exports, "windowTime", {
    enumerable: true,
    get: function() {
        return windowTime_1.windowTime;
    }
});
var windowToggle_1 = require("../internal/operators/windowToggle");
Object.defineProperty(exports, "windowToggle", {
    enumerable: true,
    get: function() {
        return windowToggle_1.windowToggle;
    }
});
var windowWhen_1 = require("../internal/operators/windowWhen");
Object.defineProperty(exports, "windowWhen", {
    enumerable: true,
    get: function() {
        return windowWhen_1.windowWhen;
    }
});
var withLatestFrom_1 = require("../internal/operators/withLatestFrom");
Object.defineProperty(exports, "withLatestFrom", {
    enumerable: true,
    get: function() {
        return withLatestFrom_1.withLatestFrom;
    }
});
var zip_1 = require("../internal/operators/zip");
Object.defineProperty(exports, "zip", {
    enumerable: true,
    get: function() {
        return zip_1.zip;
    }
});
var zipAll_1 = require("../internal/operators/zipAll");
Object.defineProperty(exports, "zipAll", {
    enumerable: true,
    get: function() {
        return zipAll_1.zipAll;
    }
});
var zipWith_1 = require("../internal/operators/zipWith");
Object.defineProperty(exports, "zipWith", {
    enumerable: true,
    get: function() {
        return zipWith_1.zipWith;
    }
});

},{"../internal/operators/audit":"3FtNp","../internal/operators/auditTime":"3nIh0","../internal/operators/buffer":"2Z5dz","../internal/operators/bufferCount":"3EBwy","../internal/operators/bufferTime":"66bHL","../internal/operators/bufferToggle":"74q72","../internal/operators/bufferWhen":"BmHA5","../internal/operators/catchError":"14jXG","../internal/operators/combineAll":"1vtPV","../internal/operators/combineLatestAll":"6Ot5A","../internal/operators/combineLatest":"qotQV","../internal/operators/combineLatestWith":"3pxwy","../internal/operators/concat":"4Hnsg","../internal/operators/concatAll":"6DfMI","../internal/operators/concatMap":"6vbAT","../internal/operators/concatMapTo":"3lmOr","../internal/operators/concatWith":"GwjNa","../internal/operators/connect":"4POwy","../internal/operators/count":"3qei5","../internal/operators/debounce":"36kEP","../internal/operators/debounceTime":"30iwu","../internal/operators/defaultIfEmpty":"4iYxz","../internal/operators/delay":"6NPax","../internal/operators/delayWhen":"74ITF","../internal/operators/dematerialize":"2KvBH","../internal/operators/distinct":"1zhd2","../internal/operators/distinctUntilChanged":"2EvaY","../internal/operators/distinctUntilKeyChanged":"4zGPm","../internal/operators/elementAt":"hENoL","../internal/operators/endWith":"6ewet","../internal/operators/every":"1hv7R","../internal/operators/exhaust":"4H26O","../internal/operators/exhaustAll":"5MS5d","../internal/operators/exhaustMap":"48ZUp","../internal/operators/expand":"5uR5x","../internal/operators/filter":"4yIda","../internal/operators/finalize":"1WLMd","../internal/operators/find":"2I3tR","../internal/operators/findIndex":"1wMD5","../internal/operators/first":"UnEtF","../internal/operators/groupBy":"2Mlgz","../internal/operators/ignoreElements":"6BPSv","../internal/operators/isEmpty":"1rKWX","../internal/operators/last":"1RAcN","../internal/operators/map":"4S1RX","../internal/operators/mapTo":"4619t","../internal/operators/materialize":"2WYIn","../internal/operators/max":"34E3f","../internal/operators/merge":"4qXaN","../internal/operators/mergeAll":"2ePdS","../internal/operators/flatMap":"7Jdow","../internal/operators/mergeMap":"7AC9i","../internal/operators/mergeMapTo":"P1xBA","../internal/operators/mergeScan":"5YH9B","../internal/operators/mergeWith":"64dBH","../internal/operators/min":"30JQ3","../internal/operators/multicast":"3hDJh","../internal/operators/observeOn":"6dgt1","../internal/operators/onErrorResumeNext":"6ogDY","../internal/operators/pairwise":"6ffxf","../internal/operators/partition":"3KzTd","../internal/operators/pluck":"4Vo0P","../internal/operators/publish":"1AzrM","../internal/operators/publishBehavior":"4FZTx","../internal/operators/publishLast":"2qWU3","../internal/operators/publishReplay":"4LRTw","../internal/operators/race":"52wAs","../internal/operators/raceWith":"794NF","../internal/operators/reduce":"3M1qn","../internal/operators/repeat":"5rOA7","../internal/operators/repeatWhen":"6IZAR","../internal/operators/retry":"1vrUd","../internal/operators/retryWhen":"4ywmB","../internal/operators/refCount":"1vRx5","../internal/operators/sample":"1sFQy","../internal/operators/sampleTime":"B2Zru","../internal/operators/scan":"3L21j","../internal/operators/sequenceEqual":"4CSSF","../internal/operators/share":"2bB9K","../internal/operators/shareReplay":"28ozr","../internal/operators/single":"1xl9I","../internal/operators/skip":"2x8BF","../internal/operators/skipLast":"6ESoX","../internal/operators/skipUntil":"1X6Qu","../internal/operators/skipWhile":"4gBc2","../internal/operators/startWith":"5faWq","../internal/operators/subscribeOn":"37Jrh","../internal/operators/switchAll":"7um3U","../internal/operators/switchMap":"51rK5","../internal/operators/switchMapTo":"7iNcz","../internal/operators/switchScan":"8WBQY","../internal/operators/take":"4xhSB","../internal/operators/takeLast":"4ejt2","../internal/operators/takeUntil":"4Le8d","../internal/operators/takeWhile":"TZD7F","../internal/operators/tap":"5EODY","../internal/operators/throttle":"1E2RC","../internal/operators/throttleTime":"24ACm","../internal/operators/throwIfEmpty":"7CGyT","../internal/operators/timeInterval":"21iZP","../internal/operators/timeout":"491x5","../internal/operators/timeoutWith":"1guxj","../internal/operators/timestamp":"4yM1i","../internal/operators/toArray":"4EOxm","../internal/operators/window":"XviEy","../internal/operators/windowCount":"1roaE","../internal/operators/windowTime":"4wd2q","../internal/operators/windowToggle":"2WTiq","../internal/operators/windowWhen":"5wRUf","../internal/operators/withLatestFrom":"3nKQi","../internal/operators/zip":"64d7v","../internal/operators/zipAll":"77lmW","../internal/operators/zipWith":"3Zbzo"}],"3FtNp":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.audit = void 0;
var lift_1 = require("../util/lift");
var from_1 = require("../observable/from");
var OperatorSubscriber_1 = require("./OperatorSubscriber");
function audit(durationSelector) {
    return lift_1.operate(function(source, subscriber) {
        var hasValue = false;
        var lastValue = null;
        var durationSubscriber = null;
        var isComplete = false;
        var endDuration = function() {
            durationSubscriber === null || durationSubscriber === void 0 || durationSubscriber.unsubscribe();
            durationSubscriber = null;
            if (hasValue) {
                hasValue = false;
                var value = lastValue;
                lastValue = null;
                subscriber.next(value);
            }
            isComplete && subscriber.complete();
        };
        var cleanupDuration = function() {
            durationSubscriber = null;
            isComplete && subscriber.complete();
        };
        source.subscribe(new OperatorSubscriber_1.OperatorSubscriber(subscriber, function(value) {
            hasValue = true;
            lastValue = value;
            if (!durationSubscriber) from_1.innerFrom(durationSelector(value)).subscribe(durationSubscriber = new OperatorSubscriber_1.OperatorSubscriber(subscriber, endDuration, cleanupDuration));
        }, function() {
            isComplete = true;
            (!hasValue || !durationSubscriber || durationSubscriber.closed) && subscriber.complete();
        }));
    });
}
exports.audit = audit;

},{"../util/lift":"6c48g","../observable/from":"1hp4r","./OperatorSubscriber":"4ZP4f"}],"6c48g":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.operate = exports.hasLift = void 0;
var isFunction_1 = require("./isFunction");
function hasLift(source) {
    return isFunction_1.isFunction(source === null || source === void 0 ? void 0 : source.lift);
}
exports.hasLift = hasLift;
function operate(init) {
    return function(source) {
        if (hasLift(source)) return source.lift(function(liftedSource) {
            try {
                return init(liftedSource, this);
            } catch (err) {
                this.error(err);
            }
        });
        throw new TypeError('Unable to lift unknown Observable type');
    };
}
exports.operate = operate;

},{"./isFunction":"5QZmD"}],"5QZmD":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.isFunction = void 0;
function isFunction(value) {
    return typeof value === 'function';
}
exports.isFunction = isFunction;

},{}],"1hp4r":[function(require,module,exports) {
"use strict";
var __awaiter = this && this.__awaiter || function(thisArg, _arguments, P, generator) {
    function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
        });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = this && this.__generator || function(thisArg, body) {
    var _ = {
        label: 0,
        sent: function() {
            if (t[0] & 1) throw t[1];
            return t[1];
        },
        trys: [],
        ops: []
    }, f, y, t, g;
    function verb(n) {
        return function(v) {
            return step([
                n,
                v
            ]);
        };
    }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while(_)try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [
                op[0] & 2,
                t.value
            ];
            switch(op[0]){
                case 0:
                case 1:
                    t = op;
                    break;
                case 4:
                    _.label++;
                    return {
                        value: op[1],
                        done: false
                    };
                case 5:
                    _.label++;
                    y = op[1];
                    op = [
                        0
                    ];
                    continue;
                case 7:
                    op = _.ops.pop();
                    _.trys.pop();
                    continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                        _ = 0;
                        continue;
                    }
                    if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                        _.label = op[1];
                        break;
                    }
                    if (op[0] === 6 && _.label < t[1]) {
                        _.label = t[1];
                        t = op;
                        break;
                    }
                    if (t && _.label < t[2]) {
                        _.label = t[2];
                        _.ops.push(op);
                        break;
                    }
                    if (t[2]) _.ops.pop();
                    _.trys.pop();
                    continue;
            }
            op = body.call(thisArg, _);
        } catch (e) {
            op = [
                6,
                e
            ];
            y = 0;
        } finally{
            f = t = 0;
        }
        if (op[0] & 5) throw op[1];
        return {
            value: op[0] ? op[1] : void 0,
            done: true
        };
    }
    return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
    }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
        return this;
    }), g;
};
var __asyncValues = this && this.__asyncValues || function(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    function verb(n) {
        i[n] = o[n] && function(v) {
            return new Promise(function(resolve, reject) {
                v = o[n](v), settle(resolve, reject, v.done, v.value);
            });
        };
    }
    function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function(v1) {
            resolve({
                value: v1,
                done: d
            });
        }, reject);
    }
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {
    }, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
        return this;
    }, i);
};
var __values = this && this.__values || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function() {
            if (o && i >= o.length) o = void 0;
            return {
                value: o && o[i++],
                done: !o
            };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.fromArrayLike = exports.innerFrom = exports.from = void 0;
var isArrayLike_1 = require("../util/isArrayLike");
var isPromise_1 = require("../util/isPromise");
var observable_1 = require("../symbol/observable");
var Observable_1 = require("../Observable");
var scheduled_1 = require("../scheduled/scheduled");
var isFunction_1 = require("../util/isFunction");
var reportUnhandledError_1 = require("../util/reportUnhandledError");
var isInteropObservable_1 = require("../util/isInteropObservable");
var isAsyncIterable_1 = require("../util/isAsyncIterable");
var throwUnobservableError_1 = require("../util/throwUnobservableError");
var isIterable_1 = require("../util/isIterable");
var isReadableStreamLike_1 = require("../util/isReadableStreamLike");
function from(input, scheduler) {
    return scheduler ? scheduled_1.scheduled(input, scheduler) : innerFrom(input);
}
exports.from = from;
function innerFrom(input) {
    if (input instanceof Observable_1.Observable) return input;
    if (input != null) {
        if (isInteropObservable_1.isInteropObservable(input)) return fromInteropObservable(input);
        if (isArrayLike_1.isArrayLike(input)) return fromArrayLike(input);
        if (isPromise_1.isPromise(input)) return fromPromise(input);
        if (isAsyncIterable_1.isAsyncIterable(input)) return fromAsyncIterable(input);
        if (isIterable_1.isIterable(input)) return fromIterable(input);
        if (isReadableStreamLike_1.isReadableStreamLike(input)) return fromReadableStreamLike(input);
    }
    throw throwUnobservableError_1.createInvalidObservableTypeError(input);
}
exports.innerFrom = innerFrom;
function fromInteropObservable(obj) {
    return new Observable_1.Observable(function(subscriber) {
        var obs = obj[observable_1.observable]();
        if (isFunction_1.isFunction(obs.subscribe)) return obs.subscribe(subscriber);
        throw new TypeError('Provided object does not correctly implement Symbol.observable');
    });
}
function fromArrayLike(array) {
    return new Observable_1.Observable(function(subscriber) {
        for(var i = 0; i < array.length && !subscriber.closed; i++)subscriber.next(array[i]);
        subscriber.complete();
    });
}
exports.fromArrayLike = fromArrayLike;
function fromPromise(promise) {
    return new Observable_1.Observable(function(subscriber) {
        promise.then(function(value) {
            if (!subscriber.closed) {
                subscriber.next(value);
                subscriber.complete();
            }
        }, function(err) {
            return subscriber.error(err);
        }).then(null, reportUnhandledError_1.reportUnhandledError);
    });
}
function fromIterable(iterable) {
    return new Observable_1.Observable(function(subscriber) {
        var e_1, _a;
        try {
            for(var iterable_1 = __values(iterable), iterable_1_1 = iterable_1.next(); !iterable_1_1.done; iterable_1_1 = iterable_1.next()){
                var value = iterable_1_1.value;
                subscriber.next(value);
                if (subscriber.closed) return;
            }
        } catch (e_1_1) {
            e_1 = {
                error: e_1_1
            };
        } finally{
            try {
                if (iterable_1_1 && !iterable_1_1.done && (_a = iterable_1.return)) _a.call(iterable_1);
            } finally{
                if (e_1) throw e_1.error;
            }
        }
        subscriber.complete();
    });
}
function fromAsyncIterable(asyncIterable) {
    return new Observable_1.Observable(function(subscriber) {
        process(asyncIterable, subscriber).catch(function(err) {
            return subscriber.error(err);
        });
    });
}
function fromReadableStreamLike(readableStream) {
    return fromAsyncIterable(isReadableStreamLike_1.readableStreamLikeToAsyncGenerator(readableStream));
}
function process(asyncIterable, subscriber) {
    var asyncIterable_1, asyncIterable_1_1;
    var e_2, _a;
    return __awaiter(this, void 0, void 0, function() {
        var value, e_2_1;
        return __generator(this, function(_b) {
            switch(_b.label){
                case 0:
                    _b.trys.push([
                        0,
                        5,
                        6,
                        11
                    ]);
                    asyncIterable_1 = __asyncValues(asyncIterable);
                    _b.label = 1;
                case 1:
                    return [
                        4,
                        asyncIterable_1.next()
                    ];
                case 2:
                    if (!(asyncIterable_1_1 = _b.sent(), !asyncIterable_1_1.done)) return [
                        3,
                        4
                    ];
                    value = asyncIterable_1_1.value;
                    subscriber.next(value);
                    if (subscriber.closed) return [
                        2
                    ];
                    _b.label = 3;
                case 3:
                    return [
                        3,
                        1
                    ];
                case 4:
                    return [
                        3,
                        11
                    ];
                case 5:
                    e_2_1 = _b.sent();
                    e_2 = {
                        error: e_2_1
                    };
                    return [
                        3,
                        11
                    ];
                case 6:
                    _b.trys.push([
                        6,
                        ,
                        9,
                        10
                    ]);
                    if (!(asyncIterable_1_1 && !asyncIterable_1_1.done && (_a = asyncIterable_1.return))) return [
                        3,
                        8
                    ];
                    return [
                        4,
                        _a.call(asyncIterable_1)
                    ];
                case 7:
                    _b.sent();
                    _b.label = 8;
                case 8:
                    return [
                        3,
                        10
                    ];
                case 9:
                    if (e_2) throw e_2.error;
                    return [
                        7
                    ];
                case 10:
                    return [
                        7
                    ];
                case 11:
                    subscriber.complete();
                    return [
                        2
                    ];
            }
        });
    });
}

},{"../util/isArrayLike":"5SxrT","../util/isPromise":"4uZSo","../symbol/observable":"3WqKP","../Observable":"r7DVo","../scheduled/scheduled":"7MBjF","../util/isFunction":"5QZmD","../util/reportUnhandledError":"2l2LX","../util/isInteropObservable":"7hEGA","../util/isAsyncIterable":"5CqT9","../util/throwUnobservableError":"3HGeU","../util/isIterable":"vodV1","../util/isReadableStreamLike":"MPNoI"}],"5SxrT":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.isArrayLike = void 0;
exports.isArrayLike = function(x) {
    return x && typeof x.length === 'number' && typeof x !== 'function';
};

},{}],"4uZSo":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.isPromise = void 0;
var isFunction_1 = require("./isFunction");
function isPromise(value) {
    return isFunction_1.isFunction(value === null || value === void 0 ? void 0 : value.then);
}
exports.isPromise = isPromise;

},{"./isFunction":"5QZmD"}],"3WqKP":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.observable = void 0;
exports.observable = (function() {
    return typeof Symbol === 'function' && Symbol.observable || '@@observable';
})();

},{}],"r7DVo":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Observable = void 0;
var Subscriber_1 = require("./Subscriber");
var Subscription_1 = require("./Subscription");
var observable_1 = require("./symbol/observable");
var pipe_1 = require("./util/pipe");
var config_1 = require("./config");
var isFunction_1 = require("./util/isFunction");
var Observable = function() {
    function Observable1(subscribe) {
        if (subscribe) this._subscribe = subscribe;
    }
    Observable1.prototype.lift = function(operator) {
        var observable = new Observable1();
        observable.source = this;
        observable.operator = operator;
        return observable;
    };
    Observable1.prototype.subscribe = function(observerOrNext, error, complete) {
        var subscriber = isSubscriber(observerOrNext) ? observerOrNext : new Subscriber_1.SafeSubscriber(observerOrNext, error, complete);
        if (config_1.config.useDeprecatedSynchronousErrorHandling) this._deprecatedSyncErrorSubscribe(subscriber);
        else {
            var _a = this, operator = _a.operator, source = _a.source;
            subscriber.add(operator ? operator.call(subscriber, source) : source ? this._subscribe(subscriber) : this._trySubscribe(subscriber));
        }
        return subscriber;
    };
    Observable1.prototype._deprecatedSyncErrorSubscribe = function(subscriber) {
        var localSubscriber = subscriber;
        localSubscriber._syncErrorHack_isSubscribing = true;
        var operator = this.operator;
        if (operator) subscriber.add(operator.call(subscriber, this.source));
        else try {
            subscriber.add(this._subscribe(subscriber));
        } catch (err) {
            localSubscriber.__syncError = err;
        }
        var dest = localSubscriber;
        while(dest){
            if ('__syncError' in dest) try {
                throw dest.__syncError;
            } finally{
                subscriber.unsubscribe();
            }
            dest = dest.destination;
        }
        localSubscriber._syncErrorHack_isSubscribing = false;
    };
    Observable1.prototype._trySubscribe = function(sink) {
        try {
            return this._subscribe(sink);
        } catch (err) {
            sink.error(err);
        }
    };
    Observable1.prototype.forEach = function(next, promiseCtor) {
        var _this = this;
        promiseCtor = getPromiseCtor(promiseCtor);
        return new promiseCtor(function(resolve, reject) {
            var subscription;
            subscription = _this.subscribe(function(value) {
                try {
                    next(value);
                } catch (err) {
                    reject(err);
                    subscription === null || subscription === void 0 || subscription.unsubscribe();
                }
            }, reject, resolve);
        });
    };
    Observable1.prototype._subscribe = function(subscriber) {
        var _a;
        return (_a = this.source) === null || _a === void 0 ? void 0 : _a.subscribe(subscriber);
    };
    Observable1.prototype[observable_1.observable] = function() {
        return this;
    };
    Observable1.prototype.pipe = function() {
        var operations = [];
        for(var _i = 0; _i < arguments.length; _i++)operations[_i] = arguments[_i];
        return operations.length ? pipe_1.pipeFromArray(operations)(this) : this;
    };
    Observable1.prototype.toPromise = function(promiseCtor) {
        var _this = this;
        promiseCtor = getPromiseCtor(promiseCtor);
        return new promiseCtor(function(resolve, reject) {
            var value;
            _this.subscribe(function(x) {
                return value = x;
            }, function(err) {
                return reject(err);
            }, function() {
                return resolve(value);
            });
        });
    };
    Observable1.create = function(subscribe) {
        return new Observable1(subscribe);
    };
    return Observable1;
}();
exports.Observable = Observable;
function getPromiseCtor(promiseCtor) {
    var _a;
    return (_a = promiseCtor !== null && promiseCtor !== void 0 ? promiseCtor : config_1.config.Promise) !== null && _a !== void 0 ? _a : Promise;
}
function isObserver(value) {
    return value && isFunction_1.isFunction(value.next) && isFunction_1.isFunction(value.error) && isFunction_1.isFunction(value.complete);
}
function isSubscriber(value) {
    return value && value instanceof Subscriber_1.Subscriber || isObserver(value) && Subscription_1.isSubscription(value);
}

},{"./Subscriber":"5hEmD","./Subscription":"6ydxy","./symbol/observable":"3WqKP","./util/pipe":"2fTpJ","./config":"4eXcx","./util/isFunction":"5QZmD"}],"5hEmD":[function(require,module,exports) {
"use strict";
var __extends = this && this.__extends || function() {
    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || ({
            __proto__: []
        }) instanceof Array && function(d1, b1) {
            d1.__proto__ = b1;
        } || function(d1, b1) {
            for(var p in b1)if (Object.prototype.hasOwnProperty.call(b1, p)) d1[p] = b1[p];
        };
        return extendStatics(d, b);
    };
    return function(d, b) {
        if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
var __read = this && this.__read || function(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while((n === void 0 || (n--) > 0) && !(r = i.next()).done)ar.push(r.value);
    } catch (error) {
        e = {
            error: error
        };
    } finally{
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        } finally{
            if (e) throw e.error;
        }
    }
    return ar;
};
var __spreadArray = this && this.__spreadArray || function(to, from) {
    for(var i = 0, il = from.length, j = to.length; i < il; i++, j++)to[j] = from[i];
    return to;
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.EMPTY_OBSERVER = exports.SafeSubscriber = exports.Subscriber = void 0;
var isFunction_1 = require("./util/isFunction");
var Subscription_1 = require("./Subscription");
var config_1 = require("./config");
var reportUnhandledError_1 = require("./util/reportUnhandledError");
var noop_1 = require("./util/noop");
var NotificationFactories_1 = require("./NotificationFactories");
var timeoutProvider_1 = require("./scheduler/timeoutProvider");
var Subscriber1 = function(_super) {
    __extends(Subscriber2, _super);
    function Subscriber2(destination) {
        var _this = _super.call(this) || this;
        _this.isStopped = false;
        if (destination) {
            _this.destination = destination;
            if (Subscription_1.isSubscription(destination)) destination.add(_this);
        } else _this.destination = exports.EMPTY_OBSERVER;
        return _this;
    }
    Subscriber2.create = function(next, error, complete) {
        return new SafeSubscriber1(next, error, complete);
    };
    Subscriber2.prototype.next = function(value) {
        if (this.isStopped) handleStoppedNotification(NotificationFactories_1.nextNotification(value), this);
        else this._next(value);
    };
    Subscriber2.prototype.error = function(err) {
        if (this.isStopped) handleStoppedNotification(NotificationFactories_1.errorNotification(err), this);
        else {
            this.isStopped = true;
            this._error(err);
        }
    };
    Subscriber2.prototype.complete = function() {
        if (this.isStopped) handleStoppedNotification(NotificationFactories_1.COMPLETE_NOTIFICATION, this);
        else {
            this.isStopped = true;
            this._complete();
        }
    };
    Subscriber2.prototype.unsubscribe = function() {
        if (!this.closed) {
            this.isStopped = true;
            _super.prototype.unsubscribe.call(this);
            this.destination = null;
        }
    };
    Subscriber2.prototype._next = function(value) {
        this.destination.next(value);
    };
    Subscriber2.prototype._error = function(err) {
        try {
            this.destination.error(err);
        } finally{
            this.unsubscribe();
        }
    };
    Subscriber2.prototype._complete = function() {
        try {
            this.destination.complete();
        } finally{
            this.unsubscribe();
        }
    };
    return Subscriber2;
}(Subscription_1.Subscription);
exports.Subscriber = Subscriber1;
var SafeSubscriber1 = function(_super) {
    __extends(SafeSubscriber2, _super);
    function SafeSubscriber2(observerOrNext, error, complete) {
        var _this = _super.call(this) || this;
        var next;
        if (isFunction_1.isFunction(observerOrNext)) next = observerOrNext;
        else if (observerOrNext) {
            next = observerOrNext.next, error = observerOrNext.error, complete = observerOrNext.complete;
            var context_1;
            if (_this && config_1.config.useDeprecatedNextContext) {
                context_1 = Object.create(observerOrNext);
                context_1.unsubscribe = function() {
                    return _this.unsubscribe();
                };
            } else context_1 = observerOrNext;
            next = next === null || next === void 0 ? void 0 : next.bind(context_1);
            error = error === null || error === void 0 ? void 0 : error.bind(context_1);
            complete = complete === null || complete === void 0 ? void 0 : complete.bind(context_1);
        }
        _this.destination = {
            next: next ? wrapForErrorHandling(next, _this) : noop_1.noop,
            error: wrapForErrorHandling(error !== null && error !== void 0 ? error : defaultErrorHandler, _this),
            complete: complete ? wrapForErrorHandling(complete, _this) : noop_1.noop
        };
        return _this;
    }
    return SafeSubscriber2;
}(Subscriber1);
exports.SafeSubscriber = SafeSubscriber1;
function wrapForErrorHandling(handler, instance) {
    return function() {
        var args = [];
        for(var _i = 0; _i < arguments.length; _i++)args[_i] = arguments[_i];
        try {
            handler.apply(void 0, __spreadArray([], __read(args)));
        } catch (err) {
            if (config_1.config.useDeprecatedSynchronousErrorHandling) {
                if (instance._syncErrorHack_isSubscribing) instance.__syncError = err;
                else throw err;
            } else reportUnhandledError_1.reportUnhandledError(err);
        }
    };
}
function defaultErrorHandler(err) {
    throw err;
}
function handleStoppedNotification(notification, subscriber) {
    var onStoppedNotification = config_1.config.onStoppedNotification;
    onStoppedNotification && timeoutProvider_1.timeoutProvider.setTimeout(function() {
        return onStoppedNotification(notification, subscriber);
    });
}
exports.EMPTY_OBSERVER = {
    closed: true,
    next: noop_1.noop,
    error: defaultErrorHandler,
    complete: noop_1.noop
};

},{"./util/isFunction":"5QZmD","./Subscription":"6ydxy","./config":"4eXcx","./util/reportUnhandledError":"2l2LX","./util/noop":"4pemK","./NotificationFactories":"6FjWZ","./scheduler/timeoutProvider":"Z8M9d"}],"6ydxy":[function(require,module,exports) {
"use strict";
var __values = this && this.__values || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function() {
            if (o && i >= o.length) o = void 0;
            return {
                value: o && o[i++],
                done: !o
            };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
var __read = this && this.__read || function(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while((n === void 0 || (n--) > 0) && !(r = i.next()).done)ar.push(r.value);
    } catch (error) {
        e = {
            error: error
        };
    } finally{
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        } finally{
            if (e) throw e.error;
        }
    }
    return ar;
};
var __spreadArray = this && this.__spreadArray || function(to, from) {
    for(var i = 0, il = from.length, j = to.length; i < il; i++, j++)to[j] = from[i];
    return to;
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.isSubscription = exports.EMPTY_SUBSCRIPTION = exports.Subscription = void 0;
var isFunction_1 = require("./util/isFunction");
var UnsubscriptionError_1 = require("./util/UnsubscriptionError");
var arrRemove_1 = require("./util/arrRemove");
var Subscription = function() {
    function Subscription1(initialTeardown) {
        this.initialTeardown = initialTeardown;
        this.closed = false;
        this._parentage = null;
        this._teardowns = null;
    }
    Subscription1.prototype.unsubscribe = function() {
        var e_1, _a, e_2, _b;
        var errors;
        if (!this.closed) {
            this.closed = true;
            var _parentage = this._parentage;
            if (_parentage) {
                this._parentage = null;
                if (Array.isArray(_parentage)) try {
                    for(var _parentage_1 = __values(_parentage), _parentage_1_1 = _parentage_1.next(); !_parentage_1_1.done; _parentage_1_1 = _parentage_1.next()){
                        var parent_1 = _parentage_1_1.value;
                        parent_1.remove(this);
                    }
                } catch (e_1_1) {
                    e_1 = {
                        error: e_1_1
                    };
                } finally{
                    try {
                        if (_parentage_1_1 && !_parentage_1_1.done && (_a = _parentage_1.return)) _a.call(_parentage_1);
                    } finally{
                        if (e_1) throw e_1.error;
                    }
                }
                else _parentage.remove(this);
            }
            var initialTeardown = this.initialTeardown;
            if (isFunction_1.isFunction(initialTeardown)) try {
                initialTeardown();
            } catch (e) {
                errors = e instanceof UnsubscriptionError_1.UnsubscriptionError ? e.errors : [
                    e
                ];
            }
            var _teardowns = this._teardowns;
            if (_teardowns) {
                this._teardowns = null;
                try {
                    for(var _teardowns_1 = __values(_teardowns), _teardowns_1_1 = _teardowns_1.next(); !_teardowns_1_1.done; _teardowns_1_1 = _teardowns_1.next()){
                        var teardown_1 = _teardowns_1_1.value;
                        try {
                            execTeardown(teardown_1);
                        } catch (err) {
                            errors = errors !== null && errors !== void 0 ? errors : [];
                            if (err instanceof UnsubscriptionError_1.UnsubscriptionError) errors = __spreadArray(__spreadArray([], __read(errors)), __read(err.errors));
                            else errors.push(err);
                        }
                    }
                } catch (e_2_1) {
                    e_2 = {
                        error: e_2_1
                    };
                } finally{
                    try {
                        if (_teardowns_1_1 && !_teardowns_1_1.done && (_b = _teardowns_1.return)) _b.call(_teardowns_1);
                    } finally{
                        if (e_2) throw e_2.error;
                    }
                }
            }
            if (errors) throw new UnsubscriptionError_1.UnsubscriptionError(errors);
        }
    };
    Subscription1.prototype.add = function(teardown) {
        var _a;
        if (teardown && teardown !== this) {
            if (this.closed) execTeardown(teardown);
            else {
                if (teardown instanceof Subscription1) {
                    if (teardown.closed || teardown._hasParent(this)) return;
                    teardown._addParent(this);
                }
                (this._teardowns = (_a = this._teardowns) !== null && _a !== void 0 ? _a : []).push(teardown);
            }
        }
    };
    Subscription1.prototype._hasParent = function(parent) {
        var _parentage = this._parentage;
        return _parentage === parent || Array.isArray(_parentage) && _parentage.includes(parent);
    };
    Subscription1.prototype._addParent = function(parent) {
        var _parentage = this._parentage;
        this._parentage = Array.isArray(_parentage) ? (_parentage.push(parent), _parentage) : _parentage ? [
            _parentage,
            parent
        ] : parent;
    };
    Subscription1.prototype._removeParent = function(parent) {
        var _parentage = this._parentage;
        if (_parentage === parent) this._parentage = null;
        else if (Array.isArray(_parentage)) arrRemove_1.arrRemove(_parentage, parent);
    };
    Subscription1.prototype.remove = function(teardown) {
        var _teardowns = this._teardowns;
        _teardowns && arrRemove_1.arrRemove(_teardowns, teardown);
        if (teardown instanceof Subscription1) teardown._removeParent(this);
    };
    Subscription1.EMPTY = (function() {
        var empty = new Subscription1();
        empty.closed = true;
        return empty;
    })();
    return Subscription1;
}();
exports.Subscription = Subscription;
exports.EMPTY_SUBSCRIPTION = Subscription.EMPTY;
function isSubscription(value) {
    return value instanceof Subscription || value && 'closed' in value && isFunction_1.isFunction(value.remove) && isFunction_1.isFunction(value.add) && isFunction_1.isFunction(value.unsubscribe);
}
exports.isSubscription = isSubscription;
function execTeardown(teardown) {
    if (isFunction_1.isFunction(teardown)) teardown();
    else teardown.unsubscribe();
}

},{"./util/isFunction":"5QZmD","./util/UnsubscriptionError":"4MS6T","./util/arrRemove":"4Zgyx"}],"4MS6T":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.UnsubscriptionError = void 0;
var createErrorClass_1 = require("./createErrorClass");
exports.UnsubscriptionError = createErrorClass_1.createErrorClass(function(_super) {
    return function UnsubscriptionErrorImpl(errors) {
        _super(this);
        this.message = errors ? errors.length + " errors occurred during unsubscription:\n" + errors.map(function(err, i) {
            return i + 1 + ") " + err.toString();
        }).join('\n  ') : '';
        this.name = 'UnsubscriptionError';
        this.errors = errors;
    };
});

},{"./createErrorClass":"6FSlj"}],"6FSlj":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.createErrorClass = void 0;
function createErrorClass(createImpl) {
    var _super = function(instance) {
        Error.call(instance);
        instance.stack = new Error().stack;
    };
    var ctorFunc = createImpl(_super);
    ctorFunc.prototype = Object.create(Error.prototype);
    ctorFunc.prototype.constructor = ctorFunc;
    return ctorFunc;
}
exports.createErrorClass = createErrorClass;

},{}],"4Zgyx":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.arrRemove = void 0;
function arrRemove(arr, item) {
    if (arr) {
        var index = arr.indexOf(item);
        0 <= index && arr.splice(index, 1);
    }
}
exports.arrRemove = arrRemove;

},{}],"4eXcx":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.config = void 0;
exports.config = {
    onUnhandledError: null,
    onStoppedNotification: null,
    Promise: undefined,
    useDeprecatedSynchronousErrorHandling: false,
    useDeprecatedNextContext: false
};

},{}],"2l2LX":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.reportUnhandledError = void 0;
var config_1 = require("../config");
var timeoutProvider_1 = require("../scheduler/timeoutProvider");
function reportUnhandledError(err) {
    timeoutProvider_1.timeoutProvider.setTimeout(function() {
        var onUnhandledError = config_1.config.onUnhandledError;
        if (onUnhandledError) onUnhandledError(err);
        else throw err;
    });
}
exports.reportUnhandledError = reportUnhandledError;

},{"../config":"4eXcx","../scheduler/timeoutProvider":"Z8M9d"}],"Z8M9d":[function(require,module,exports) {
"use strict";
var __read = this && this.__read || function(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while((n === void 0 || (n--) > 0) && !(r = i.next()).done)ar.push(r.value);
    } catch (error) {
        e = {
            error: error
        };
    } finally{
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        } finally{
            if (e) throw e.error;
        }
    }
    return ar;
};
var __spreadArray = this && this.__spreadArray || function(to, from) {
    for(var i = 0, il = from.length, j = to.length; i < il; i++, j++)to[j] = from[i];
    return to;
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.timeoutProvider = void 0;
exports.timeoutProvider = {
    setTimeout: function() {
        var args = [];
        for(var _i = 0; _i < arguments.length; _i++)args[_i] = arguments[_i];
        var delegate = exports.timeoutProvider.delegate;
        return ((delegate === null || delegate === void 0 ? void 0 : delegate.setTimeout) || setTimeout).apply(void 0, __spreadArray([], __read(args)));
    },
    clearTimeout: function(handle) {
        var delegate = exports.timeoutProvider.delegate;
        return ((delegate === null || delegate === void 0 ? void 0 : delegate.clearTimeout) || clearTimeout)(handle);
    },
    delegate: undefined
};

},{}],"4pemK":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.noop = void 0;
function noop() {
}
exports.noop = noop;

},{}],"6FjWZ":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.createNotification = exports.nextNotification = exports.errorNotification = exports.COMPLETE_NOTIFICATION = void 0;
exports.COMPLETE_NOTIFICATION = (function() {
    return createNotification('C', undefined, undefined);
})();
function errorNotification(error) {
    return createNotification('E', undefined, error);
}
exports.errorNotification = errorNotification;
function nextNotification(value) {
    return createNotification('N', value, undefined);
}
exports.nextNotification = nextNotification;
function createNotification(kind, value, error) {
    return {
        kind: kind,
        value: value,
        error: error
    };
}
exports.createNotification = createNotification;

},{}],"2fTpJ":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.pipeFromArray = exports.pipe = void 0;
var identity_1 = require("./identity");
function pipe() {
    var fns = [];
    for(var _i = 0; _i < arguments.length; _i++)fns[_i] = arguments[_i];
    return pipeFromArray(fns);
}
exports.pipe = pipe;
function pipeFromArray(fns) {
    if (fns.length === 0) return identity_1.identity;
    if (fns.length === 1) return fns[0];
    return function piped(input) {
        return fns.reduce(function(prev, fn) {
            return fn(prev);
        }, input);
    };
}
exports.pipeFromArray = pipeFromArray;

},{"./identity":"2JjYu"}],"2JjYu":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.identity = void 0;
function identity(x) {
    return x;
}
exports.identity = identity;

},{}],"7MBjF":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.scheduled = void 0;
var scheduleObservable_1 = require("./scheduleObservable");
var schedulePromise_1 = require("./schedulePromise");
var scheduleArray_1 = require("./scheduleArray");
var scheduleIterable_1 = require("./scheduleIterable");
var scheduleAsyncIterable_1 = require("./scheduleAsyncIterable");
var isInteropObservable_1 = require("../util/isInteropObservable");
var isPromise_1 = require("../util/isPromise");
var isArrayLike_1 = require("../util/isArrayLike");
var isIterable_1 = require("../util/isIterable");
var isAsyncIterable_1 = require("../util/isAsyncIterable");
var throwUnobservableError_1 = require("../util/throwUnobservableError");
var isReadableStreamLike_1 = require("../util/isReadableStreamLike");
var scheduleReadableStreamLike_1 = require("./scheduleReadableStreamLike");
function scheduled(input, scheduler) {
    if (input != null) {
        if (isInteropObservable_1.isInteropObservable(input)) return scheduleObservable_1.scheduleObservable(input, scheduler);
        if (isArrayLike_1.isArrayLike(input)) return scheduleArray_1.scheduleArray(input, scheduler);
        if (isPromise_1.isPromise(input)) return schedulePromise_1.schedulePromise(input, scheduler);
        if (isAsyncIterable_1.isAsyncIterable(input)) return scheduleAsyncIterable_1.scheduleAsyncIterable(input, scheduler);
        if (isIterable_1.isIterable(input)) return scheduleIterable_1.scheduleIterable(input, scheduler);
        if (isReadableStreamLike_1.isReadableStreamLike(input)) return scheduleReadableStreamLike_1.scheduleReadableStreamLike(input, scheduler);
    }
    throw throwUnobservableError_1.createInvalidObservableTypeError(input);
}
exports.scheduled = scheduled;

},{"./scheduleObservable":"7AlDD","./schedulePromise":"oJRED","./scheduleArray":"7Mqjj","./scheduleIterable":"dC7gU","./scheduleAsyncIterable":"7qapr","../util/isInteropObservable":"7hEGA","../util/isPromise":"4uZSo","../util/isArrayLike":"5SxrT","../util/isIterable":"vodV1","../util/isAsyncIterable":"5CqT9","../util/throwUnobservableError":"3HGeU","../util/isReadableStreamLike":"MPNoI","./scheduleReadableStreamLike":"6sfjw"}],"7AlDD":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.scheduleObservable = void 0;
var Observable_1 = require("../Observable");
var Subscription_1 = require("../Subscription");
var observable_1 = require("../symbol/observable");
function scheduleObservable(input, scheduler) {
    return new Observable_1.Observable(function(subscriber) {
        var sub = new Subscription_1.Subscription();
        sub.add(scheduler.schedule(function() {
            var observable = input[observable_1.observable]();
            sub.add(observable.subscribe({
                next: function(value) {
                    sub.add(scheduler.schedule(function() {
                        return subscriber.next(value);
                    }));
                },
                error: function(err) {
                    sub.add(scheduler.schedule(function() {
                        return subscriber.error(err);
                    }));
                },
                complete: function() {
                    sub.add(scheduler.schedule(function() {
                        return subscriber.complete();
                    }));
                }
            }));
        }));
        return sub;
    });
}
exports.scheduleObservable = scheduleObservable;

},{"../Observable":"r7DVo","../Subscription":"6ydxy","../symbol/observable":"3WqKP"}],"oJRED":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.schedulePromise = void 0;
var Observable_1 = require("../Observable");
function schedulePromise(input, scheduler) {
    return new Observable_1.Observable(function(subscriber) {
        return scheduler.schedule(function() {
            return input.then(function(value) {
                subscriber.add(scheduler.schedule(function() {
                    subscriber.next(value);
                    subscriber.add(scheduler.schedule(function() {
                        return subscriber.complete();
                    }));
                }));
            }, function(err) {
                subscriber.add(scheduler.schedule(function() {
                    return subscriber.error(err);
                }));
            });
        });
    });
}
exports.schedulePromise = schedulePromise;

},{"../Observable":"r7DVo"}],"7Mqjj":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.scheduleArray = void 0;
var Observable_1 = require("../Observable");
function scheduleArray(input, scheduler) {
    return new Observable_1.Observable(function(subscriber) {
        var i = 0;
        return scheduler.schedule(function() {
            if (i === input.length) subscriber.complete();
            else {
                subscriber.next(input[i++]);
                if (!subscriber.closed) this.schedule();
            }
        });
    });
}
exports.scheduleArray = scheduleArray;

},{"../Observable":"r7DVo"}],"dC7gU":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.scheduleIterable = void 0;
var Observable_1 = require("../Observable");
var iterator_1 = require("../symbol/iterator");
var isFunction_1 = require("../util/isFunction");
var caughtSchedule_1 = require("../util/caughtSchedule");
function scheduleIterable(input, scheduler) {
    return new Observable_1.Observable(function(subscriber) {
        var iterator;
        subscriber.add(scheduler.schedule(function() {
            iterator = input[iterator_1.iterator]();
            caughtSchedule_1.caughtSchedule(subscriber, scheduler, function() {
                var _a = iterator.next(), value = _a.value, done = _a.done;
                if (done) subscriber.complete();
                else {
                    subscriber.next(value);
                    this.schedule();
                }
            });
        }));
        return function() {
            return isFunction_1.isFunction(iterator === null || iterator === void 0 ? void 0 : iterator.return) && iterator.return();
        };
    });
}
exports.scheduleIterable = scheduleIterable;

},{"../Observable":"r7DVo","../symbol/iterator":"2h1Sb","../util/isFunction":"5QZmD","../util/caughtSchedule":"3OKEH"}],"2h1Sb":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.iterator = exports.getSymbolIterator = void 0;
function getSymbolIterator() {
    if (typeof Symbol !== 'function' || !Symbol.iterator) return '@@iterator';
    return Symbol.iterator;
}
exports.getSymbolIterator = getSymbolIterator;
exports.iterator = getSymbolIterator();

},{}],"3OKEH":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.caughtSchedule = void 0;
function caughtSchedule(subscriber, scheduler, execute, delay) {
    if (delay === void 0) delay = 0;
    var subscription = scheduler.schedule(function() {
        try {
            execute.call(this);
        } catch (err) {
            subscriber.error(err);
        }
    }, delay);
    subscriber.add(subscription);
    return subscription;
}
exports.caughtSchedule = caughtSchedule;

},{}],"7qapr":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.scheduleAsyncIterable = void 0;
var Observable_1 = require("../Observable");
var Subscription_1 = require("../Subscription");
function scheduleAsyncIterable(input, scheduler) {
    if (!input) throw new Error('Iterable cannot be null');
    return new Observable_1.Observable(function(subscriber) {
        var sub = new Subscription_1.Subscription();
        sub.add(scheduler.schedule(function() {
            var iterator = input[Symbol.asyncIterator]();
            sub.add(scheduler.schedule(function() {
                var _this = this;
                iterator.next().then(function(result) {
                    if (result.done) subscriber.complete();
                    else {
                        subscriber.next(result.value);
                        _this.schedule();
                    }
                });
            }));
        }));
        return sub;
    });
}
exports.scheduleAsyncIterable = scheduleAsyncIterable;

},{"../Observable":"r7DVo","../Subscription":"6ydxy"}],"7hEGA":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.isInteropObservable = void 0;
var observable_1 = require("../symbol/observable");
var isFunction_1 = require("./isFunction");
function isInteropObservable(input) {
    return isFunction_1.isFunction(input[observable_1.observable]);
}
exports.isInteropObservable = isInteropObservable;

},{"../symbol/observable":"3WqKP","./isFunction":"5QZmD"}],"vodV1":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.isIterable = void 0;
var iterator_1 = require("../symbol/iterator");
var isFunction_1 = require("./isFunction");
function isIterable(input) {
    return isFunction_1.isFunction(input === null || input === void 0 ? void 0 : input[iterator_1.iterator]);
}
exports.isIterable = isIterable;

},{"../symbol/iterator":"2h1Sb","./isFunction":"5QZmD"}],"5CqT9":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.isAsyncIterable = void 0;
var isFunction_1 = require("./isFunction");
function isAsyncIterable(obj) {
    return Symbol.asyncIterator && isFunction_1.isFunction(obj === null || obj === void 0 ? void 0 : obj[Symbol.asyncIterator]);
}
exports.isAsyncIterable = isAsyncIterable;

},{"./isFunction":"5QZmD"}],"3HGeU":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.createInvalidObservableTypeError = void 0;
function createInvalidObservableTypeError(input) {
    return new TypeError("You provided " + (input !== null && typeof input === 'object' ? 'an invalid object' : "'" + input + "'") + " where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.");
}
exports.createInvalidObservableTypeError = createInvalidObservableTypeError;

},{}],"MPNoI":[function(require,module,exports) {
"use strict";
var __generator = this && this.__generator || function(thisArg, body) {
    var _ = {
        label: 0,
        sent: function() {
            if (t[0] & 1) throw t[1];
            return t[1];
        },
        trys: [],
        ops: []
    }, f, y, t, g;
    function verb(n) {
        return function(v) {
            return step([
                n,
                v
            ]);
        };
    }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while(_)try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [
                op[0] & 2,
                t.value
            ];
            switch(op[0]){
                case 0:
                case 1:
                    t = op;
                    break;
                case 4:
                    _.label++;
                    return {
                        value: op[1],
                        done: false
                    };
                case 5:
                    _.label++;
                    y = op[1];
                    op = [
                        0
                    ];
                    continue;
                case 7:
                    op = _.ops.pop();
                    _.trys.pop();
                    continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                        _ = 0;
                        continue;
                    }
                    if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                        _.label = op[1];
                        break;
                    }
                    if (op[0] === 6 && _.label < t[1]) {
                        _.label = t[1];
                        t = op;
                        break;
                    }
                    if (t && _.label < t[2]) {
                        _.label = t[2];
                        _.ops.push(op);
                        break;
                    }
                    if (t[2]) _.ops.pop();
                    _.trys.pop();
                    continue;
            }
            op = body.call(thisArg, _);
        } catch (e) {
            op = [
                6,
                e
            ];
            y = 0;
        } finally{
            f = t = 0;
        }
        if (op[0] & 5) throw op[1];
        return {
            value: op[0] ? op[1] : void 0,
            done: true
        };
    }
    return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
    }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
        return this;
    }), g;
};
var __await = this && this.__await || function(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
};
var __asyncGenerator = this && this.__asyncGenerator || function(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    function verb(n) {
        if (g[n]) i[n] = function(v) {
            return new Promise(function(a, b) {
                q.push([
                    n,
                    v,
                    a,
                    b
                ]) > 1 || resume(n, v);
            });
        };
    }
    function resume(n, v) {
        try {
            step(g[n](v));
        } catch (e) {
            settle(q[0][3], e);
        }
    }
    function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
    }
    function fulfill(value) {
        resume("next", value);
    }
    function reject(value) {
        resume("throw", value);
    }
    function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
    }
    return i = {
    }, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
        return this;
    }, i;
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.isReadableStreamLike = exports.readableStreamLikeToAsyncGenerator = void 0;
var isFunction_1 = require("./isFunction");
function readableStreamLikeToAsyncGenerator(readableStream) {
    return __asyncGenerator(this, arguments, function readableStreamLikeToAsyncGenerator_1() {
        var reader, _a, value, done;
        return __generator(this, function(_b) {
            switch(_b.label){
                case 0:
                    reader = readableStream.getReader();
                    _b.label = 1;
                case 1:
                    _b.trys.push([
                        1,
                        ,
                        9,
                        10
                    ]);
                    _b.label = 2;
                case 2:
                    return [
                        4,
                        __await(reader.read())
                    ];
                case 3:
                    _a = _b.sent(), value = _a.value, done = _a.done;
                    if (!done) return [
                        3,
                        5
                    ];
                    return [
                        4,
                        __await(void 0)
                    ];
                case 4:
                    return [
                        2,
                        _b.sent()
                    ];
                case 5:
                    return [
                        4,
                        __await(value)
                    ];
                case 6:
                    return [
                        4,
                        _b.sent()
                    ];
                case 7:
                    _b.sent();
                    return [
                        3,
                        2
                    ];
                case 8:
                    return [
                        3,
                        10
                    ];
                case 9:
                    reader.releaseLock();
                    return [
                        7
                    ];
                case 10:
                    return [
                        2
                    ];
            }
        });
    });
}
exports.readableStreamLikeToAsyncGenerator = readableStreamLikeToAsyncGenerator;
function isReadableStreamLike(obj) {
    return isFunction_1.isFunction(obj === null || obj === void 0 ? void 0 : obj.getReader);
}
exports.isReadableStreamLike = isReadableStreamLike;

},{"./isFunction":"5QZmD"}],"6sfjw":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.scheduleReadableStreamLike = void 0;
var scheduleAsyncIterable_1 = require("./scheduleAsyncIterable");
var isReadableStreamLike_1 = require("../util/isReadableStreamLike");
function scheduleReadableStreamLike(input, scheduler) {
    return scheduleAsyncIterable_1.scheduleAsyncIterable(isReadableStreamLike_1.readableStreamLikeToAsyncGenerator(input), scheduler);
}
exports.scheduleReadableStreamLike = scheduleReadableStreamLike;

},{"./scheduleAsyncIterable":"7qapr","../util/isReadableStreamLike":"MPNoI"}],"4ZP4f":[function(require,module,exports) {
"use strict";
var __extends = this && this.__extends || function() {
    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || ({
            __proto__: []
        }) instanceof Array && function(d1, b1) {
            d1.__proto__ = b1;
        } || function(d1, b1) {
            for(var p in b1)if (Object.prototype.hasOwnProperty.call(b1, p)) d1[p] = b1[p];
        };
        return extendStatics(d, b);
    };
    return function(d, b) {
        if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.OperatorSubscriber = void 0;
var Subscriber_1 = require("../Subscriber");
var OperatorSubscriber1 = function(_super) {
    __extends(OperatorSubscriber2, _super);
    function OperatorSubscriber2(destination, onNext, onComplete, onError, onFinalize) {
        var _this = _super.call(this, destination) || this;
        _this.onFinalize = onFinalize;
        _this._next = onNext ? function(value) {
            try {
                onNext(value);
            } catch (err) {
                destination.error(err);
            }
        } : _super.prototype._next;
        _this._error = onError ? function(err) {
            try {
                onError(err);
            } catch (err1) {
                destination.error(err1);
            } finally{
                this.unsubscribe();
            }
        } : _super.prototype._error;
        _this._complete = onComplete ? function() {
            try {
                onComplete();
            } catch (err) {
                destination.error(err);
            } finally{
                this.unsubscribe();
            }
        } : _super.prototype._complete;
        return _this;
    }
    OperatorSubscriber2.prototype.unsubscribe = function() {
        var _a;
        var closed = this.closed;
        _super.prototype.unsubscribe.call(this);
        !closed && ((_a = this.onFinalize) === null || _a === void 0 || _a.call(this));
    };
    return OperatorSubscriber2;
}(Subscriber_1.Subscriber);
exports.OperatorSubscriber = OperatorSubscriber1;

},{"../Subscriber":"5hEmD"}],"3nIh0":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.auditTime = void 0;
var async_1 = require("../scheduler/async");
var audit_1 = require("./audit");
var timer_1 = require("../observable/timer");
function auditTime(duration, scheduler) {
    if (scheduler === void 0) scheduler = async_1.async;
    return audit_1.audit(function() {
        return timer_1.timer(duration, scheduler);
    });
}
exports.auditTime = auditTime;

},{"../scheduler/async":"2KqRM","./audit":"3FtNp","../observable/timer":"6ECLG"}],"2KqRM":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.async = exports.asyncScheduler = void 0;
var AsyncAction_1 = require("./AsyncAction");
var AsyncScheduler_1 = require("./AsyncScheduler");
exports.asyncScheduler = new AsyncScheduler_1.AsyncScheduler(AsyncAction_1.AsyncAction);
exports.async = exports.asyncScheduler;

},{"./AsyncAction":"2P49B","./AsyncScheduler":"3RAfm"}],"2P49B":[function(require,module,exports) {
"use strict";
var __extends = this && this.__extends || function() {
    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || ({
            __proto__: []
        }) instanceof Array && function(d1, b1) {
            d1.__proto__ = b1;
        } || function(d1, b1) {
            for(var p in b1)if (Object.prototype.hasOwnProperty.call(b1, p)) d1[p] = b1[p];
        };
        return extendStatics(d, b);
    };
    return function(d, b) {
        if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.AsyncAction = void 0;
var Action_1 = require("./Action");
var intervalProvider_1 = require("./intervalProvider");
var arrRemove_1 = require("../util/arrRemove");
var AsyncAction1 = function(_super) {
    __extends(AsyncAction2, _super);
    function AsyncAction2(scheduler, work) {
        var _this = _super.call(this, scheduler, work) || this;
        _this.scheduler = scheduler;
        _this.work = work;
        _this.pending = false;
        return _this;
    }
    AsyncAction2.prototype.schedule = function(state, delay) {
        if (delay === void 0) delay = 0;
        if (this.closed) return this;
        this.state = state;
        var id = this.id;
        var scheduler = this.scheduler;
        if (id != null) this.id = this.recycleAsyncId(scheduler, id, delay);
        this.pending = true;
        this.delay = delay;
        this.id = this.id || this.requestAsyncId(scheduler, this.id, delay);
        return this;
    };
    AsyncAction2.prototype.requestAsyncId = function(scheduler, _id, delay) {
        if (delay === void 0) delay = 0;
        return intervalProvider_1.intervalProvider.setInterval(scheduler.flush.bind(scheduler, this), delay);
    };
    AsyncAction2.prototype.recycleAsyncId = function(_scheduler, id, delay) {
        if (delay === void 0) delay = 0;
        if (delay != null && this.delay === delay && this.pending === false) return id;
        intervalProvider_1.intervalProvider.clearInterval(id);
        return undefined;
    };
    AsyncAction2.prototype.execute = function(state, delay) {
        if (this.closed) return new Error('executing a cancelled action');
        this.pending = false;
        var error = this._execute(state, delay);
        if (error) return error;
        else if (this.pending === false && this.id != null) this.id = this.recycleAsyncId(this.scheduler, this.id, null);
    };
    AsyncAction2.prototype._execute = function(state, _delay) {
        var errored = false;
        var errorValue;
        try {
            this.work(state);
        } catch (e) {
            errored = true;
            errorValue = !!e && e || new Error(e);
        }
        if (errored) {
            this.unsubscribe();
            return errorValue;
        }
    };
    AsyncAction2.prototype.unsubscribe = function() {
        if (!this.closed) {
            var _a = this, id = _a.id, scheduler = _a.scheduler;
            var actions = scheduler.actions;
            this.work = this.state = this.scheduler = null;
            this.pending = false;
            arrRemove_1.arrRemove(actions, this);
            if (id != null) this.id = this.recycleAsyncId(scheduler, id, null);
            this.delay = null;
            _super.prototype.unsubscribe.call(this);
        }
    };
    return AsyncAction2;
}(Action_1.Action);
exports.AsyncAction = AsyncAction1;

},{"./Action":"5xxqL","./intervalProvider":"7av3l","../util/arrRemove":"4Zgyx"}],"5xxqL":[function(require,module,exports) {
"use strict";
var __extends = this && this.__extends || function() {
    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || ({
            __proto__: []
        }) instanceof Array && function(d1, b1) {
            d1.__proto__ = b1;
        } || function(d1, b1) {
            for(var p in b1)if (Object.prototype.hasOwnProperty.call(b1, p)) d1[p] = b1[p];
        };
        return extendStatics(d, b);
    };
    return function(d, b) {
        if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Action = void 0;
var Subscription_1 = require("../Subscription");
var Action1 = function(_super) {
    __extends(Action2, _super);
    function Action2(scheduler, work) {
        return _super.call(this) || this;
    }
    Action2.prototype.schedule = function(state, delay) {
        if (delay === void 0) delay = 0;
        return this;
    };
    return Action2;
}(Subscription_1.Subscription);
exports.Action = Action1;

},{"../Subscription":"6ydxy"}],"7av3l":[function(require,module,exports) {
"use strict";
var __read = this && this.__read || function(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while((n === void 0 || (n--) > 0) && !(r = i.next()).done)ar.push(r.value);
    } catch (error) {
        e = {
            error: error
        };
    } finally{
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        } finally{
            if (e) throw e.error;
        }
    }
    return ar;
};
var __spreadArray = this && this.__spreadArray || function(to, from) {
    for(var i = 0, il = from.length, j = to.length; i < il; i++, j++)to[j] = from[i];
    return to;
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.intervalProvider = void 0;
exports.intervalProvider = {
    setInterval: function() {
        var args = [];
        for(var _i = 0; _i < arguments.length; _i++)args[_i] = arguments[_i];
        var delegate = exports.intervalProvider.delegate;
        return ((delegate === null || delegate === void 0 ? void 0 : delegate.setInterval) || setInterval).apply(void 0, __spreadArray([], __read(args)));
    },
    clearInterval: function(handle) {
        var delegate = exports.intervalProvider.delegate;
        return ((delegate === null || delegate === void 0 ? void 0 : delegate.clearInterval) || clearInterval)(handle);
    },
    delegate: undefined
};

},{}],"3RAfm":[function(require,module,exports) {
"use strict";
var __extends = this && this.__extends || function() {
    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || ({
            __proto__: []
        }) instanceof Array && function(d1, b1) {
            d1.__proto__ = b1;
        } || function(d1, b1) {
            for(var p in b1)if (Object.prototype.hasOwnProperty.call(b1, p)) d1[p] = b1[p];
        };
        return extendStatics(d, b);
    };
    return function(d, b) {
        if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.AsyncScheduler = void 0;
var Scheduler_1 = require("../Scheduler");
var AsyncScheduler1 = function(_super) {
    __extends(AsyncScheduler2, _super);
    function AsyncScheduler2(SchedulerAction, now) {
        if (now === void 0) now = Scheduler_1.Scheduler.now;
        var _this = _super.call(this, SchedulerAction, now) || this;
        _this.actions = [];
        _this._active = false;
        _this._scheduled = undefined;
        return _this;
    }
    AsyncScheduler2.prototype.flush = function(action) {
        var actions = this.actions;
        if (this._active) {
            actions.push(action);
            return;
        }
        var error;
        this._active = true;
        do {
            if (error = action.execute(action.state, action.delay)) break;
        }while (action = actions.shift())
        this._active = false;
        if (error) {
            while(action = actions.shift())action.unsubscribe();
            throw error;
        }
    };
    return AsyncScheduler2;
}(Scheduler_1.Scheduler);
exports.AsyncScheduler = AsyncScheduler1;

},{"../Scheduler":"4ssY2"}],"4ssY2":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Scheduler = void 0;
var dateTimestampProvider_1 = require("./scheduler/dateTimestampProvider");
var Scheduler = function() {
    function Scheduler1(schedulerActionCtor, now) {
        if (now === void 0) now = Scheduler1.now;
        this.schedulerActionCtor = schedulerActionCtor;
        this.now = now;
    }
    Scheduler1.prototype.schedule = function(work, delay, state) {
        if (delay === void 0) delay = 0;
        return new this.schedulerActionCtor(this, work).schedule(state, delay);
    };
    Scheduler1.now = dateTimestampProvider_1.dateTimestampProvider.now;
    return Scheduler1;
}();
exports.Scheduler = Scheduler;

},{"./scheduler/dateTimestampProvider":"4SBfI"}],"4SBfI":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.dateTimestampProvider = void 0;
exports.dateTimestampProvider = {
    now: function() {
        return (exports.dateTimestampProvider.delegate || Date).now();
    },
    delegate: undefined
};

},{}],"6ECLG":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.timer = void 0;
var Observable_1 = require("../Observable");
var async_1 = require("../scheduler/async");
var isScheduler_1 = require("../util/isScheduler");
var isDate_1 = require("../util/isDate");
function timer(dueTime, intervalOrScheduler, scheduler) {
    if (dueTime === void 0) dueTime = 0;
    if (scheduler === void 0) scheduler = async_1.async;
    var intervalDuration = -1;
    if (intervalOrScheduler != null) {
        if (isScheduler_1.isScheduler(intervalOrScheduler)) scheduler = intervalOrScheduler;
        else intervalDuration = intervalOrScheduler;
    }
    return new Observable_1.Observable(function(subscriber) {
        var due = isDate_1.isValidDate(dueTime) ? +dueTime - scheduler.now() : dueTime;
        if (due < 0) due = 0;
        var n = 0;
        return scheduler.schedule(function() {
            if (!subscriber.closed) {
                subscriber.next(n++);
                if (0 <= intervalDuration) this.schedule(undefined, intervalDuration);
                else subscriber.complete();
            }
        }, due);
    });
}
exports.timer = timer;

},{"../Observable":"r7DVo","../scheduler/async":"2KqRM","../util/isScheduler":"26QWs","../util/isDate":"70jdW"}],"26QWs":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.isScheduler = void 0;
var isFunction_1 = require("./isFunction");
function isScheduler(value) {
    return value && isFunction_1.isFunction(value.schedule);
}
exports.isScheduler = isScheduler;

},{"./isFunction":"5QZmD"}],"70jdW":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.isValidDate = void 0;
function isValidDate(value) {
    return value instanceof Date && !isNaN(value);
}
exports.isValidDate = isValidDate;

},{}],"2Z5dz":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.buffer = void 0;
var lift_1 = require("../util/lift");
var noop_1 = require("../util/noop");
var OperatorSubscriber_1 = require("./OperatorSubscriber");
function buffer(closingNotifier) {
    return lift_1.operate(function(source, subscriber) {
        var currentBuffer = [];
        source.subscribe(new OperatorSubscriber_1.OperatorSubscriber(subscriber, function(value) {
            return currentBuffer.push(value);
        }, function() {
            subscriber.next(currentBuffer);
            subscriber.complete();
        }));
        closingNotifier.subscribe(new OperatorSubscriber_1.OperatorSubscriber(subscriber, function() {
            var b = currentBuffer;
            currentBuffer = [];
            subscriber.next(b);
        }, noop_1.noop));
        return function() {
            currentBuffer = null;
        };
    });
}
exports.buffer = buffer;

},{"../util/lift":"6c48g","../util/noop":"4pemK","./OperatorSubscriber":"4ZP4f"}],"3EBwy":[function(require,module,exports) {
"use strict";
var __values = this && this.__values || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function() {
            if (o && i >= o.length) o = void 0;
            return {
                value: o && o[i++],
                done: !o
            };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.bufferCount = void 0;
var lift_1 = require("../util/lift");
var OperatorSubscriber_1 = require("./OperatorSubscriber");
var arrRemove_1 = require("../util/arrRemove");
function bufferCount(bufferSize, startBufferEvery) {
    if (startBufferEvery === void 0) startBufferEvery = null;
    startBufferEvery = startBufferEvery !== null && startBufferEvery !== void 0 ? startBufferEvery : bufferSize;
    return lift_1.operate(function(source, subscriber) {
        var buffers = [];
        var count = 0;
        source.subscribe(new OperatorSubscriber_1.OperatorSubscriber(subscriber, function(value) {
            var e_1, _a, e_2, _b;
            var toEmit = null;
            if ((count++) % startBufferEvery === 0) buffers.push([]);
            try {
                for(var buffers_1 = __values(buffers), buffers_1_1 = buffers_1.next(); !buffers_1_1.done; buffers_1_1 = buffers_1.next()){
                    var buffer = buffers_1_1.value;
                    buffer.push(value);
                    if (bufferSize <= buffer.length) {
                        toEmit = toEmit !== null && toEmit !== void 0 ? toEmit : [];
                        toEmit.push(buffer);
                    }
                }
            } catch (e_1_1) {
                e_1 = {
                    error: e_1_1
                };
            } finally{
                try {
                    if (buffers_1_1 && !buffers_1_1.done && (_a = buffers_1.return)) _a.call(buffers_1);
                } finally{
                    if (e_1) throw e_1.error;
                }
            }
            if (toEmit) try {
                for(var toEmit_1 = __values(toEmit), toEmit_1_1 = toEmit_1.next(); !toEmit_1_1.done; toEmit_1_1 = toEmit_1.next()){
                    var buffer = toEmit_1_1.value;
                    arrRemove_1.arrRemove(buffers, buffer);
                    subscriber.next(buffer);
                }
            } catch (e_2_1) {
                e_2 = {
                    error: e_2_1
                };
            } finally{
                try {
                    if (toEmit_1_1 && !toEmit_1_1.done && (_b = toEmit_1.return)) _b.call(toEmit_1);
                } finally{
                    if (e_2) throw e_2.error;
                }
            }
        }, function() {
            var e_3, _a;
            try {
                for(var buffers_2 = __values(buffers), buffers_2_1 = buffers_2.next(); !buffers_2_1.done; buffers_2_1 = buffers_2.next()){
                    var buffer = buffers_2_1.value;
                    subscriber.next(buffer);
                }
            } catch (e_3_1) {
                e_3 = {
                    error: e_3_1
                };
            } finally{
                try {
                    if (buffers_2_1 && !buffers_2_1.done && (_a = buffers_2.return)) _a.call(buffers_2);
                } finally{
                    if (e_3) throw e_3.error;
                }
            }
            subscriber.complete();
        }, undefined, function() {
            buffers = null;
        }));
    });
}
exports.bufferCount = bufferCount;

},{"../util/lift":"6c48g","./OperatorSubscriber":"4ZP4f","../util/arrRemove":"4Zgyx"}],"66bHL":[function(require,module,exports) {
"use strict";
var __values = this && this.__values || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function() {
            if (o && i >= o.length) o = void 0;
            return {
                value: o && o[i++],
                done: !o
            };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.bufferTime = void 0;
var Subscription_1 = require("../Subscription");
var lift_1 = require("../util/lift");
var OperatorSubscriber_1 = require("./OperatorSubscriber");
var arrRemove_1 = require("../util/arrRemove");
var async_1 = require("../scheduler/async");
var args_1 = require("../util/args");
function bufferTime(bufferTimeSpan) {
    var _a, _b;
    var otherArgs = [];
    for(var _i = 1; _i < arguments.length; _i++)otherArgs[_i - 1] = arguments[_i];
    var scheduler = (_a = args_1.popScheduler(otherArgs)) !== null && _a !== void 0 ? _a : async_1.asyncScheduler;
    var bufferCreationInterval = (_b = otherArgs[0]) !== null && _b !== void 0 ? _b : null;
    var maxBufferSize = otherArgs[1] || Infinity;
    return lift_1.operate(function(source, subscriber) {
        var bufferRecords = [];
        var restartOnEmit = false;
        var emit = function(record) {
            var buffer = record.buffer, subs = record.subs;
            subs.unsubscribe();
            arrRemove_1.arrRemove(bufferRecords, record);
            subscriber.next(buffer);
            restartOnEmit && startBuffer();
        };
        var startBuffer = function() {
            if (bufferRecords) {
                var subs = new Subscription_1.Subscription();
                subscriber.add(subs);
                var buffer = [];
                var record_1 = {
                    buffer: buffer,
                    subs: subs
                };
                bufferRecords.push(record_1);
                subs.add(scheduler.schedule(function() {
                    return emit(record_1);
                }, bufferTimeSpan));
            }
        };
        bufferCreationInterval !== null && bufferCreationInterval >= 0 ? subscriber.add(scheduler.schedule(function() {
            startBuffer();
            !this.closed && subscriber.add(this.schedule(null, bufferCreationInterval));
        }, bufferCreationInterval)) : restartOnEmit = true;
        startBuffer();
        var bufferTimeSubscriber = new OperatorSubscriber_1.OperatorSubscriber(subscriber, function(value) {
            var e_1, _a1;
            var recordsCopy = bufferRecords.slice();
            try {
                for(var recordsCopy_1 = __values(recordsCopy), recordsCopy_1_1 = recordsCopy_1.next(); !recordsCopy_1_1.done; recordsCopy_1_1 = recordsCopy_1.next()){
                    var record = recordsCopy_1_1.value;
                    var buffer = record.buffer;
                    buffer.push(value);
                    maxBufferSize <= buffer.length && emit(record);
                }
            } catch (e_1_1) {
                e_1 = {
                    error: e_1_1
                };
            } finally{
                try {
                    if (recordsCopy_1_1 && !recordsCopy_1_1.done && (_a1 = recordsCopy_1.return)) _a1.call(recordsCopy_1);
                } finally{
                    if (e_1) throw e_1.error;
                }
            }
        }, function() {
            while(bufferRecords === null || bufferRecords === void 0 ? void 0 : bufferRecords.length)subscriber.next(bufferRecords.shift().buffer);
            bufferTimeSubscriber === null || bufferTimeSubscriber === void 0 || bufferTimeSubscriber.unsubscribe();
            subscriber.complete();
            subscriber.unsubscribe();
        }, undefined, function() {
            return bufferRecords = null;
        });
        source.subscribe(bufferTimeSubscriber);
    });
}
exports.bufferTime = bufferTime;

},{"../Subscription":"6ydxy","../util/lift":"6c48g","./OperatorSubscriber":"4ZP4f","../util/arrRemove":"4Zgyx","../scheduler/async":"2KqRM","../util/args":"18qpb"}],"18qpb":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.popNumber = exports.popScheduler = exports.popResultSelector = void 0;
var isFunction_1 = require("./isFunction");
var isScheduler_1 = require("./isScheduler");
function last(arr) {
    return arr[arr.length - 1];
}
function popResultSelector(args) {
    return isFunction_1.isFunction(last(args)) ? args.pop() : undefined;
}
exports.popResultSelector = popResultSelector;
function popScheduler(args) {
    return isScheduler_1.isScheduler(last(args)) ? args.pop() : undefined;
}
exports.popScheduler = popScheduler;
function popNumber(args, defaultValue) {
    return typeof last(args) === 'number' ? args.pop() : defaultValue;
}
exports.popNumber = popNumber;

},{"./isFunction":"5QZmD","./isScheduler":"26QWs"}],"74q72":[function(require,module,exports) {
"use strict";
var __values = this && this.__values || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function() {
            if (o && i >= o.length) o = void 0;
            return {
                value: o && o[i++],
                done: !o
            };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.bufferToggle = void 0;
var Subscription_1 = require("../Subscription");
var lift_1 = require("../util/lift");
var from_1 = require("../observable/from");
var OperatorSubscriber_1 = require("./OperatorSubscriber");
var noop_1 = require("../util/noop");
var arrRemove_1 = require("../util/arrRemove");
function bufferToggle(openings, closingSelector) {
    return lift_1.operate(function(source, subscriber) {
        var buffers = [];
        from_1.innerFrom(openings).subscribe(new OperatorSubscriber_1.OperatorSubscriber(subscriber, function(openValue) {
            var buffer = [];
            buffers.push(buffer);
            var closingSubscription = new Subscription_1.Subscription();
            var emitBuffer = function() {
                arrRemove_1.arrRemove(buffers, buffer);
                subscriber.next(buffer);
                closingSubscription.unsubscribe();
            };
            closingSubscription.add(from_1.innerFrom(closingSelector(openValue)).subscribe(new OperatorSubscriber_1.OperatorSubscriber(subscriber, emitBuffer, noop_1.noop)));
        }, noop_1.noop));
        source.subscribe(new OperatorSubscriber_1.OperatorSubscriber(subscriber, function(value) {
            var e_1, _a;
            try {
                for(var buffers_1 = __values(buffers), buffers_1_1 = buffers_1.next(); !buffers_1_1.done; buffers_1_1 = buffers_1.next()){
                    var buffer = buffers_1_1.value;
                    buffer.push(value);
                }
            } catch (e_1_1) {
                e_1 = {
                    error: e_1_1
                };
            } finally{
                try {
                    if (buffers_1_1 && !buffers_1_1.done && (_a = buffers_1.return)) _a.call(buffers_1);
                } finally{
                    if (e_1) throw e_1.error;
                }
            }
        }, function() {
            while(buffers.length > 0)subscriber.next(buffers.shift());
            subscriber.complete();
        }));
    });
}
exports.bufferToggle = bufferToggle;

},{"../Subscription":"6ydxy","../util/lift":"6c48g","../observable/from":"1hp4r","./OperatorSubscriber":"4ZP4f","../util/noop":"4pemK","../util/arrRemove":"4Zgyx"}],"BmHA5":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.bufferWhen = void 0;
var lift_1 = require("../util/lift");
var noop_1 = require("../util/noop");
var OperatorSubscriber_1 = require("./OperatorSubscriber");
var from_1 = require("../observable/from");
function bufferWhen(closingSelector) {
    return lift_1.operate(function(source, subscriber) {
        var buffer = null;
        var closingSubscriber = null;
        var openBuffer = function() {
            closingSubscriber === null || closingSubscriber === void 0 || closingSubscriber.unsubscribe();
            var b = buffer;
            buffer = [];
            b && subscriber.next(b);
            from_1.innerFrom(closingSelector()).subscribe(closingSubscriber = new OperatorSubscriber_1.OperatorSubscriber(subscriber, openBuffer, noop_1.noop));
        };
        openBuffer();
        source.subscribe(new OperatorSubscriber_1.OperatorSubscriber(subscriber, function(value) {
            return buffer === null || buffer === void 0 ? void 0 : buffer.push(value);
        }, function() {
            buffer && subscriber.next(buffer);
            subscriber.complete();
        }, undefined, function() {
            return buffer = closingSubscriber = null;
        }));
    });
}
exports.bufferWhen = bufferWhen;

},{"../util/lift":"6c48g","../util/noop":"4pemK","./OperatorSubscriber":"4ZP4f","../observable/from":"1hp4r"}],"14jXG":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.catchError = void 0;
var from_1 = require("../observable/from");
var OperatorSubscriber_1 = require("./OperatorSubscriber");
var lift_1 = require("../util/lift");
function catchError(selector) {
    return lift_1.operate(function(source, subscriber) {
        var innerSub = null;
        var syncUnsub = false;
        var handledResult;
        innerSub = source.subscribe(new OperatorSubscriber_1.OperatorSubscriber(subscriber, undefined, undefined, function(err) {
            handledResult = from_1.innerFrom(selector(err, catchError(selector)(source)));
            if (innerSub) {
                innerSub.unsubscribe();
                innerSub = null;
                handledResult.subscribe(subscriber);
            } else syncUnsub = true;
        }));
        if (syncUnsub) {
            innerSub.unsubscribe();
            innerSub = null;
            handledResult.subscribe(subscriber);
        }
    });
}
exports.catchError = catchError;

},{"../observable/from":"1hp4r","./OperatorSubscriber":"4ZP4f","../util/lift":"6c48g"}],"1vtPV":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.combineAll = void 0;
var combineLatestAll_1 = require("./combineLatestAll");
exports.combineAll = combineLatestAll_1.combineLatestAll;

},{"./combineLatestAll":"6Ot5A"}],"6Ot5A":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.combineLatestAll = void 0;
var combineLatest_1 = require("../observable/combineLatest");
var joinAllInternals_1 = require("./joinAllInternals");
function combineLatestAll(project) {
    return joinAllInternals_1.joinAllInternals(combineLatest_1.combineLatest, project);
}
exports.combineLatestAll = combineLatestAll;

},{"../observable/combineLatest":"4OEuh","./joinAllInternals":"40xnt"}],"4OEuh":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.combineLatestInit = exports.combineLatest = void 0;
var Observable_1 = require("../Observable");
var argsArgArrayOrObject_1 = require("../util/argsArgArrayOrObject");
var from_1 = require("./from");
var identity_1 = require("../util/identity");
var mapOneOrManyArgs_1 = require("../util/mapOneOrManyArgs");
var args_1 = require("../util/args");
var createObject_1 = require("../util/createObject");
var OperatorSubscriber_1 = require("../operators/OperatorSubscriber");
function combineLatest() {
    var args = [];
    for(var _i = 0; _i < arguments.length; _i++)args[_i] = arguments[_i];
    var scheduler = args_1.popScheduler(args);
    var resultSelector = args_1.popResultSelector(args);
    var _a = argsArgArrayOrObject_1.argsArgArrayOrObject(args), observables = _a.args, keys = _a.keys;
    if (observables.length === 0) return from_1.from([], scheduler);
    var result = new Observable_1.Observable(combineLatestInit(observables, scheduler, keys ? function(values) {
        return createObject_1.createObject(keys, values);
    } : identity_1.identity));
    return resultSelector ? result.pipe(mapOneOrManyArgs_1.mapOneOrManyArgs(resultSelector)) : result;
}
exports.combineLatest = combineLatest;
function combineLatestInit(observables, scheduler, valueTransform) {
    if (valueTransform === void 0) valueTransform = identity_1.identity;
    return function(subscriber) {
        maybeSchedule(scheduler, function() {
            var length = observables.length;
            var values = new Array(length);
            var active = length;
            var remainingFirstValues = length;
            var _loop_1 = function(i) {
                maybeSchedule(scheduler, function() {
                    var source = from_1.from(observables[i], scheduler);
                    var hasFirstValue = false;
                    source.subscribe(new OperatorSubscriber_1.OperatorSubscriber(subscriber, function(value) {
                        values[i] = value;
                        if (!hasFirstValue) {
                            hasFirstValue = true;
                            remainingFirstValues--;
                        }
                        if (!remainingFirstValues) subscriber.next(valueTransform(values.slice()));
                    }, function() {
                        if (!--active) subscriber.complete();
                    }));
                }, subscriber);
            };
            for(var i = 0; i < length; i++)_loop_1(i);
        }, subscriber);
    };
}
exports.combineLatestInit = combineLatestInit;
function maybeSchedule(scheduler, execute, subscription) {
    if (scheduler) subscription.add(scheduler.schedule(execute));
    else execute();
}

},{"../Observable":"r7DVo","../util/argsArgArrayOrObject":"2b077","./from":"1hp4r","../util/identity":"2JjYu","../util/mapOneOrManyArgs":"2JBos","../util/args":"18qpb","../util/createObject":"iueIH","../operators/OperatorSubscriber":"4ZP4f"}],"2b077":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.argsArgArrayOrObject = void 0;
var isArray = Array.isArray;
var getPrototypeOf = Object.getPrototypeOf, objectProto = Object.prototype, getKeys = Object.keys;
function argsArgArrayOrObject(args) {
    if (args.length === 1) {
        var first_1 = args[0];
        if (isArray(first_1)) return {
            args: first_1,
            keys: null
        };
        if (isPOJO(first_1)) {
            var keys = getKeys(first_1);
            return {
                args: keys.map(function(key) {
                    return first_1[key];
                }),
                keys: keys
            };
        }
    }
    return {
        args: args,
        keys: null
    };
}
exports.argsArgArrayOrObject = argsArgArrayOrObject;
function isPOJO(obj) {
    return obj && typeof obj === 'object' && getPrototypeOf(obj) === objectProto;
}

},{}],"2JBos":[function(require,module,exports) {
"use strict";
var __read = this && this.__read || function(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while((n === void 0 || (n--) > 0) && !(r = i.next()).done)ar.push(r.value);
    } catch (error) {
        e = {
            error: error
        };
    } finally{
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        } finally{
            if (e) throw e.error;
        }
    }
    return ar;
};
var __spreadArray = this && this.__spreadArray || function(to, from) {
    for(var i = 0, il = from.length, j = to.length; i < il; i++, j++)to[j] = from[i];
    return to;
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.mapOneOrManyArgs = void 0;
var map_1 = require("../operators/map");
var isArray = Array.isArray;
function callOrApply(fn, args) {
    return isArray(args) ? fn.apply(void 0, __spreadArray([], __read(args))) : fn(args);
}
function mapOneOrManyArgs(fn) {
    return map_1.map(function(args) {
        return callOrApply(fn, args);
    });
}
exports.mapOneOrManyArgs = mapOneOrManyArgs;

},{"../operators/map":"4S1RX"}],"4S1RX":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.map = void 0;
var lift_1 = require("../util/lift");
var OperatorSubscriber_1 = require("./OperatorSubscriber");
function map(project, thisArg) {
    return lift_1.operate(function(source, subscriber) {
        var index = 0;
        source.subscribe(new OperatorSubscriber_1.OperatorSubscriber(subscriber, function(value) {
            subscriber.next(project.call(thisArg, value, index++));
        }));
    });
}
exports.map = map;

},{"../util/lift":"6c48g","./OperatorSubscriber":"4ZP4f"}],"iueIH":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.createObject = void 0;
function createObject(keys, values) {
    return keys.reduce(function(result, key, i) {
        return result[key] = values[i], result;
    }, {
    });
}
exports.createObject = createObject;

},{}],"40xnt":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.joinAllInternals = void 0;
var identity_1 = require("../util/identity");
var mapOneOrManyArgs_1 = require("../util/mapOneOrManyArgs");
var pipe_1 = require("../util/pipe");
var mergeMap_1 = require("./mergeMap");
var toArray_1 = require("./toArray");
function joinAllInternals(joinFn, project) {
    return pipe_1.pipe(toArray_1.toArray(), mergeMap_1.mergeMap(function(sources) {
        return joinFn(sources);
    }), project ? mapOneOrManyArgs_1.mapOneOrManyArgs(project) : identity_1.identity);
}
exports.joinAllInternals = joinAllInternals;

},{"../util/identity":"2JjYu","../util/mapOneOrManyArgs":"2JBos","../util/pipe":"2fTpJ","./mergeMap":"7AC9i","./toArray":"4EOxm"}],"7AC9i":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.mergeMap = void 0;
var map_1 = require("./map");
var from_1 = require("../observable/from");
var lift_1 = require("../util/lift");
var mergeInternals_1 = require("./mergeInternals");
var isFunction_1 = require("../util/isFunction");
function mergeMap(project, resultSelector, concurrent) {
    if (concurrent === void 0) concurrent = Infinity;
    if (isFunction_1.isFunction(resultSelector)) return mergeMap(function(a, i) {
        return map_1.map(function(b, ii) {
            return resultSelector(a, b, i, ii);
        })(from_1.innerFrom(project(a, i)));
    }, concurrent);
    else if (typeof resultSelector === 'number') concurrent = resultSelector;
    return lift_1.operate(function(source, subscriber) {
        return mergeInternals_1.mergeInternals(source, subscriber, project, concurrent);
    });
}
exports.mergeMap = mergeMap;

},{"./map":"4S1RX","../observable/from":"1hp4r","../util/lift":"6c48g","./mergeInternals":"4A3Vk","../util/isFunction":"5QZmD"}],"4A3Vk":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.mergeInternals = void 0;
var from_1 = require("../observable/from");
var OperatorSubscriber_1 = require("./OperatorSubscriber");
function mergeInternals(source, subscriber, project, concurrent, onBeforeNext, expand, innerSubScheduler, additionalTeardown) {
    var buffer = [];
    var active = 0;
    var index = 0;
    var isComplete = false;
    var checkComplete = function() {
        if (isComplete && !buffer.length && !active) subscriber.complete();
    };
    var outerNext = function(value) {
        return active < concurrent ? doInnerSub(value) : buffer.push(value);
    };
    var doInnerSub = function(value) {
        expand && subscriber.next(value);
        active++;
        var innerComplete = false;
        from_1.innerFrom(project(value, index++)).subscribe(new OperatorSubscriber_1.OperatorSubscriber(subscriber, function(innerValue) {
            onBeforeNext === null || onBeforeNext === void 0 || onBeforeNext(innerValue);
            if (expand) outerNext(innerValue);
            else subscriber.next(innerValue);
        }, function() {
            innerComplete = true;
        }, undefined, function() {
            if (innerComplete) try {
                active--;
                var _loop_1 = function() {
                    var bufferedValue = buffer.shift();
                    innerSubScheduler ? subscriber.add(innerSubScheduler.schedule(function() {
                        return doInnerSub(bufferedValue);
                    })) : doInnerSub(bufferedValue);
                };
                while(buffer.length && active < concurrent)_loop_1();
                checkComplete();
            } catch (err) {
                subscriber.error(err);
            }
        }));
    };
    source.subscribe(new OperatorSubscriber_1.OperatorSubscriber(subscriber, outerNext, function() {
        isComplete = true;
        checkComplete();
    }));
    return function() {
        additionalTeardown === null || additionalTeardown === void 0 || additionalTeardown();
    };
}
exports.mergeInternals = mergeInternals;

},{"../observable/from":"1hp4r","./OperatorSubscriber":"4ZP4f"}],"4EOxm":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.toArray = void 0;
var reduce_1 = require("./reduce");
var lift_1 = require("../util/lift");
var arrReducer = function(arr, value) {
    return arr.push(value), arr;
};
function toArray() {
    return lift_1.operate(function(source, subscriber) {
        reduce_1.reduce(arrReducer, [])(source).subscribe(subscriber);
    });
}
exports.toArray = toArray;

},{"./reduce":"3M1qn","../util/lift":"6c48g"}],"3M1qn":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.reduce = void 0;
var scanInternals_1 = require("./scanInternals");
var lift_1 = require("../util/lift");
function reduce(accumulator, seed) {
    return lift_1.operate(scanInternals_1.scanInternals(accumulator, seed, arguments.length >= 2, false, true));
}
exports.reduce = reduce;

},{"./scanInternals":"4wR68","../util/lift":"6c48g"}],"4wR68":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.scanInternals = void 0;
var OperatorSubscriber_1 = require("./OperatorSubscriber");
function scanInternals(accumulator, seed, hasSeed, emitOnNext, emitBeforeComplete) {
    return function(source, subscriber) {
        var hasState = hasSeed;
        var state = seed;
        var index = 0;
        source.subscribe(new OperatorSubscriber_1.OperatorSubscriber(subscriber, function(value) {
            var i = index++;
            state = hasState ? accumulator(state, value, i) : (hasState = true, value);
            emitOnNext && subscriber.next(state);
        }, emitBeforeComplete && function() {
            hasState && subscriber.next(state);
            subscriber.complete();
        }));
    };
}
exports.scanInternals = scanInternals;

},{"./OperatorSubscriber":"4ZP4f"}],"qotQV":[function(require,module,exports) {
"use strict";
var __read = this && this.__read || function(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while((n === void 0 || (n--) > 0) && !(r = i.next()).done)ar.push(r.value);
    } catch (error) {
        e = {
            error: error
        };
    } finally{
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        } finally{
            if (e) throw e.error;
        }
    }
    return ar;
};
var __spreadArray = this && this.__spreadArray || function(to, from) {
    for(var i = 0, il = from.length, j = to.length; i < il; i++, j++)to[j] = from[i];
    return to;
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.combineLatest = void 0;
var combineLatest_1 = require("../observable/combineLatest");
var lift_1 = require("../util/lift");
var argsOrArgArray_1 = require("../util/argsOrArgArray");
var mapOneOrManyArgs_1 = require("../util/mapOneOrManyArgs");
var pipe_1 = require("../util/pipe");
var args_1 = require("../util/args");
function combineLatest() {
    var args = [];
    for(var _i = 0; _i < arguments.length; _i++)args[_i] = arguments[_i];
    var resultSelector = args_1.popResultSelector(args);
    return resultSelector ? pipe_1.pipe(combineLatest.apply(void 0, __spreadArray([], __read(args))), mapOneOrManyArgs_1.mapOneOrManyArgs(resultSelector)) : lift_1.operate(function(source, subscriber) {
        combineLatest_1.combineLatestInit(__spreadArray([
            source
        ], __read(argsOrArgArray_1.argsOrArgArray(args))))(subscriber);
    });
}
exports.combineLatest = combineLatest;

},{"../observable/combineLatest":"4OEuh","../util/lift":"6c48g","../util/argsOrArgArray":"35t9S","../util/mapOneOrManyArgs":"2JBos","../util/pipe":"2fTpJ","../util/args":"18qpb"}],"35t9S":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.argsOrArgArray = void 0;
var isArray = Array.isArray;
function argsOrArgArray(args) {
    return args.length === 1 && isArray(args[0]) ? args[0] : args;
}
exports.argsOrArgArray = argsOrArgArray;

},{}],"3pxwy":[function(require,module,exports) {
"use strict";
var __read = this && this.__read || function(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while((n === void 0 || (n--) > 0) && !(r = i.next()).done)ar.push(r.value);
    } catch (error) {
        e = {
            error: error
        };
    } finally{
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        } finally{
            if (e) throw e.error;
        }
    }
    return ar;
};
var __spreadArray = this && this.__spreadArray || function(to, from) {
    for(var i = 0, il = from.length, j = to.length; i < il; i++, j++)to[j] = from[i];
    return to;
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.combineLatestWith = void 0;
var combineLatest_1 = require("./combineLatest");
function combineLatestWith() {
    var otherSources = [];
    for(var _i = 0; _i < arguments.length; _i++)otherSources[_i] = arguments[_i];
    return combineLatest_1.combineLatest.apply(void 0, __spreadArray([], __read(otherSources)));
}
exports.combineLatestWith = combineLatestWith;

},{"./combineLatest":"qotQV"}],"4Hnsg":[function(require,module,exports) {
"use strict";
var __read = this && this.__read || function(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while((n === void 0 || (n--) > 0) && !(r = i.next()).done)ar.push(r.value);
    } catch (error) {
        e = {
            error: error
        };
    } finally{
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        } finally{
            if (e) throw e.error;
        }
    }
    return ar;
};
var __spreadArray = this && this.__spreadArray || function(to, from) {
    for(var i = 0, il = from.length, j = to.length; i < il; i++, j++)to[j] = from[i];
    return to;
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.concat = void 0;
var lift_1 = require("../util/lift");
var concatAll_1 = require("./concatAll");
var fromArray_1 = require("../observable/fromArray");
var args_1 = require("../util/args");
function concat() {
    var args = [];
    for(var _i = 0; _i < arguments.length; _i++)args[_i] = arguments[_i];
    var scheduler = args_1.popScheduler(args);
    return lift_1.operate(function(source, subscriber) {
        concatAll_1.concatAll()(fromArray_1.internalFromArray(__spreadArray([
            source
        ], __read(args)), scheduler)).subscribe(subscriber);
    });
}
exports.concat = concat;

},{"../util/lift":"6c48g","./concatAll":"6DfMI","../observable/fromArray":"WapNe","../util/args":"18qpb"}],"6DfMI":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.concatAll = void 0;
var mergeAll_1 = require("./mergeAll");
function concatAll() {
    return mergeAll_1.mergeAll(1);
}
exports.concatAll = concatAll;

},{"./mergeAll":"2ePdS"}],"2ePdS":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.mergeAll = void 0;
var mergeMap_1 = require("./mergeMap");
var identity_1 = require("../util/identity");
function mergeAll(concurrent) {
    if (concurrent === void 0) concurrent = Infinity;
    return mergeMap_1.mergeMap(identity_1.identity, concurrent);
}
exports.mergeAll = mergeAll;

},{"./mergeMap":"7AC9i","../util/identity":"2JjYu"}],"WapNe":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.internalFromArray = void 0;
var scheduleArray_1 = require("../scheduled/scheduleArray");
var from_1 = require("./from");
function internalFromArray(input, scheduler) {
    return scheduler ? scheduleArray_1.scheduleArray(input, scheduler) : from_1.fromArrayLike(input);
}
exports.internalFromArray = internalFromArray;

},{"../scheduled/scheduleArray":"7Mqjj","./from":"1hp4r"}],"6vbAT":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.concatMap = void 0;
var mergeMap_1 = require("./mergeMap");
var isFunction_1 = require("../util/isFunction");
function concatMap(project, resultSelector) {
    return isFunction_1.isFunction(resultSelector) ? mergeMap_1.mergeMap(project, resultSelector, 1) : mergeMap_1.mergeMap(project, 1);
}
exports.concatMap = concatMap;

},{"./mergeMap":"7AC9i","../util/isFunction":"5QZmD"}],"3lmOr":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.concatMapTo = void 0;
var concatMap_1 = require("./concatMap");
var isFunction_1 = require("../util/isFunction");
function concatMapTo(innerObservable, resultSelector) {
    return isFunction_1.isFunction(resultSelector) ? concatMap_1.concatMap(function() {
        return innerObservable;
    }, resultSelector) : concatMap_1.concatMap(function() {
        return innerObservable;
    });
}
exports.concatMapTo = concatMapTo;

},{"./concatMap":"6vbAT","../util/isFunction":"5QZmD"}],"GwjNa":[function(require,module,exports) {
"use strict";
var __read = this && this.__read || function(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while((n === void 0 || (n--) > 0) && !(r = i.next()).done)ar.push(r.value);
    } catch (error) {
        e = {
            error: error
        };
    } finally{
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        } finally{
            if (e) throw e.error;
        }
    }
    return ar;
};
var __spreadArray = this && this.__spreadArray || function(to, from) {
    for(var i = 0, il = from.length, j = to.length; i < il; i++, j++)to[j] = from[i];
    return to;
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.concatWith = void 0;
var concat_1 = require("./concat");
function concatWith() {
    var otherSources = [];
    for(var _i = 0; _i < arguments.length; _i++)otherSources[_i] = arguments[_i];
    return concat_1.concat.apply(void 0, __spreadArray([], __read(otherSources)));
}
exports.concatWith = concatWith;

},{"./concat":"4Hnsg"}],"4POwy":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.connect = void 0;
var Subject_1 = require("../Subject");
var from_1 = require("../observable/from");
var lift_1 = require("../util/lift");
var fromSubscribable_1 = require("../observable/fromSubscribable");
var DEFAULT_CONFIG = {
    connector: function() {
        return new Subject_1.Subject();
    }
};
function connect(selector, config) {
    if (config === void 0) config = DEFAULT_CONFIG;
    var connector = config.connector;
    return lift_1.operate(function(source, subscriber) {
        var subject = connector();
        from_1.from(selector(fromSubscribable_1.fromSubscribable(subject))).subscribe(subscriber);
        subscriber.add(source.subscribe(subject));
    });
}
exports.connect = connect;

},{"../Subject":"4Jzfy","../observable/from":"1hp4r","../util/lift":"6c48g","../observable/fromSubscribable":"64YwF"}],"4Jzfy":[function(require,module,exports) {
"use strict";
var __extends = this && this.__extends || function() {
    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || ({
            __proto__: []
        }) instanceof Array && function(d1, b1) {
            d1.__proto__ = b1;
        } || function(d1, b1) {
            for(var p in b1)if (Object.prototype.hasOwnProperty.call(b1, p)) d1[p] = b1[p];
        };
        return extendStatics(d, b);
    };
    return function(d, b) {
        if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
var __values = this && this.__values || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function() {
            if (o && i >= o.length) o = void 0;
            return {
                value: o && o[i++],
                done: !o
            };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.AnonymousSubject = exports.Subject = void 0;
var Observable_1 = require("./Observable");
var Subscription_1 = require("./Subscription");
var ObjectUnsubscribedError_1 = require("./util/ObjectUnsubscribedError");
var arrRemove_1 = require("./util/arrRemove");
var Subject1 = function(_super) {
    __extends(Subject2, _super);
    function Subject2() {
        var _this = _super.call(this) || this;
        _this.closed = false;
        _this.observers = [];
        _this.isStopped = false;
        _this.hasError = false;
        _this.thrownError = null;
        return _this;
    }
    Subject2.prototype.lift = function(operator) {
        var subject = new AnonymousSubject1(this, this);
        subject.operator = operator;
        return subject;
    };
    Subject2.prototype._throwIfClosed = function() {
        if (this.closed) throw new ObjectUnsubscribedError_1.ObjectUnsubscribedError();
    };
    Subject2.prototype.next = function(value) {
        var e_1, _a;
        this._throwIfClosed();
        if (!this.isStopped) {
            var copy = this.observers.slice();
            try {
                for(var copy_1 = __values(copy), copy_1_1 = copy_1.next(); !copy_1_1.done; copy_1_1 = copy_1.next()){
                    var observer = copy_1_1.value;
                    observer.next(value);
                }
            } catch (e_1_1) {
                e_1 = {
                    error: e_1_1
                };
            } finally{
                try {
                    if (copy_1_1 && !copy_1_1.done && (_a = copy_1.return)) _a.call(copy_1);
                } finally{
                    if (e_1) throw e_1.error;
                }
            }
        }
    };
    Subject2.prototype.error = function(err) {
        this._throwIfClosed();
        if (!this.isStopped) {
            this.hasError = this.isStopped = true;
            this.thrownError = err;
            var observers = this.observers;
            while(observers.length)observers.shift().error(err);
        }
    };
    Subject2.prototype.complete = function() {
        this._throwIfClosed();
        if (!this.isStopped) {
            this.isStopped = true;
            var observers = this.observers;
            while(observers.length)observers.shift().complete();
        }
    };
    Subject2.prototype.unsubscribe = function() {
        this.isStopped = this.closed = true;
        this.observers = null;
    };
    Object.defineProperty(Subject2.prototype, "observed", {
        get: function() {
            var _a;
            return ((_a = this.observers) === null || _a === void 0 ? void 0 : _a.length) > 0;
        },
        enumerable: false,
        configurable: true
    });
    Subject2.prototype._trySubscribe = function(subscriber) {
        this._throwIfClosed();
        return _super.prototype._trySubscribe.call(this, subscriber);
    };
    Subject2.prototype._subscribe = function(subscriber) {
        this._throwIfClosed();
        this._checkFinalizedStatuses(subscriber);
        return this._innerSubscribe(subscriber);
    };
    Subject2.prototype._innerSubscribe = function(subscriber) {
        var _a = this, hasError = _a.hasError, isStopped = _a.isStopped, observers = _a.observers;
        return hasError || isStopped ? Subscription_1.EMPTY_SUBSCRIPTION : (observers.push(subscriber), new Subscription_1.Subscription(function() {
            return arrRemove_1.arrRemove(observers, subscriber);
        }));
    };
    Subject2.prototype._checkFinalizedStatuses = function(subscriber) {
        var _a = this, hasError = _a.hasError, thrownError = _a.thrownError, isStopped = _a.isStopped;
        if (hasError) subscriber.error(thrownError);
        else if (isStopped) subscriber.complete();
    };
    Subject2.prototype.asObservable = function() {
        var observable = new Observable_1.Observable();
        observable.source = this;
        return observable;
    };
    Subject2.create = function(destination, source) {
        return new AnonymousSubject1(destination, source);
    };
    return Subject2;
}(Observable_1.Observable);
exports.Subject = Subject1;
var AnonymousSubject1 = function(_super) {
    __extends(AnonymousSubject2, _super);
    function AnonymousSubject2(destination, source) {
        var _this = _super.call(this) || this;
        _this.destination = destination;
        _this.source = source;
        return _this;
    }
    AnonymousSubject2.prototype.next = function(value) {
        var _a, _b;
        (_b = (_a = this.destination) === null || _a === void 0 ? void 0 : _a.next) === null || _b === void 0 || _b.call(_a, value);
    };
    AnonymousSubject2.prototype.error = function(err) {
        var _a, _b;
        (_b = (_a = this.destination) === null || _a === void 0 ? void 0 : _a.error) === null || _b === void 0 || _b.call(_a, err);
    };
    AnonymousSubject2.prototype.complete = function() {
        var _a, _b;
        (_b = (_a = this.destination) === null || _a === void 0 ? void 0 : _a.complete) === null || _b === void 0 || _b.call(_a);
    };
    AnonymousSubject2.prototype._subscribe = function(subscriber) {
        var _a, _b;
        return (_b = (_a = this.source) === null || _a === void 0 ? void 0 : _a.subscribe(subscriber)) !== null && _b !== void 0 ? _b : Subscription_1.EMPTY_SUBSCRIPTION;
    };
    return AnonymousSubject2;
}(Subject1);
exports.AnonymousSubject = AnonymousSubject1;

},{"./Observable":"r7DVo","./Subscription":"6ydxy","./util/ObjectUnsubscribedError":"1wEX0","./util/arrRemove":"4Zgyx"}],"1wEX0":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ObjectUnsubscribedError = void 0;
var createErrorClass_1 = require("./createErrorClass");
exports.ObjectUnsubscribedError = createErrorClass_1.createErrorClass(function(_super) {
    return function ObjectUnsubscribedErrorImpl() {
        _super(this);
        this.name = 'ObjectUnsubscribedError';
        this.message = 'object unsubscribed';
    };
});

},{"./createErrorClass":"6FSlj"}],"64YwF":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.fromSubscribable = void 0;
var Observable_1 = require("../Observable");
function fromSubscribable(subscribable) {
    return new Observable_1.Observable(function(subscriber) {
        return subscribable.subscribe(subscriber);
    });
}
exports.fromSubscribable = fromSubscribable;

},{"../Observable":"r7DVo"}],"3qei5":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.count = void 0;
var reduce_1 = require("./reduce");
function count(predicate) {
    return reduce_1.reduce(function(total, value, i) {
        return !predicate || predicate(value, i) ? total + 1 : total;
    }, 0);
}
exports.count = count;

},{"./reduce":"3M1qn"}],"36kEP":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.debounce = void 0;
var lift_1 = require("../util/lift");
var noop_1 = require("../util/noop");
var OperatorSubscriber_1 = require("./OperatorSubscriber");
var from_1 = require("../observable/from");
function debounce(durationSelector) {
    return lift_1.operate(function(source, subscriber) {
        var hasValue = false;
        var lastValue = null;
        var durationSubscriber = null;
        var emit = function() {
            durationSubscriber === null || durationSubscriber === void 0 || durationSubscriber.unsubscribe();
            durationSubscriber = null;
            if (hasValue) {
                hasValue = false;
                var value = lastValue;
                lastValue = null;
                subscriber.next(value);
            }
        };
        source.subscribe(new OperatorSubscriber_1.OperatorSubscriber(subscriber, function(value) {
            durationSubscriber === null || durationSubscriber === void 0 || durationSubscriber.unsubscribe();
            hasValue = true;
            lastValue = value;
            durationSubscriber = new OperatorSubscriber_1.OperatorSubscriber(subscriber, emit, noop_1.noop);
            from_1.innerFrom(durationSelector(value)).subscribe(durationSubscriber);
        }, function() {
            emit();
            subscriber.complete();
        }, undefined, function() {
            lastValue = durationSubscriber = null;
        }));
    });
}
exports.debounce = debounce;

},{"../util/lift":"6c48g","../util/noop":"4pemK","./OperatorSubscriber":"4ZP4f","../observable/from":"1hp4r"}],"30iwu":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.debounceTime = void 0;
var async_1 = require("../scheduler/async");
var lift_1 = require("../util/lift");
var OperatorSubscriber_1 = require("./OperatorSubscriber");
function debounceTime(dueTime, scheduler) {
    if (scheduler === void 0) scheduler = async_1.asyncScheduler;
    return lift_1.operate(function(source, subscriber) {
        var activeTask = null;
        var lastValue = null;
        var lastTime = null;
        var emit = function() {
            if (activeTask) {
                activeTask.unsubscribe();
                activeTask = null;
                var value = lastValue;
                lastValue = null;
                subscriber.next(value);
            }
        };
        function emitWhenIdle() {
            var targetTime = lastTime + dueTime;
            var now = scheduler.now();
            if (now < targetTime) {
                activeTask = this.schedule(undefined, targetTime - now);
                return;
            }
            emit();
        }
        source.subscribe(new OperatorSubscriber_1.OperatorSubscriber(subscriber, function(value) {
            lastValue = value;
            lastTime = scheduler.now();
            if (!activeTask) activeTask = scheduler.schedule(emitWhenIdle, dueTime);
        }, function() {
            emit();
            subscriber.complete();
        }, undefined, function() {
            lastValue = activeTask = null;
        }));
    });
}
exports.debounceTime = debounceTime;

},{"../scheduler/async":"2KqRM","../util/lift":"6c48g","./OperatorSubscriber":"4ZP4f"}],"4iYxz":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.defaultIfEmpty = void 0;
var lift_1 = require("../util/lift");
var OperatorSubscriber_1 = require("./OperatorSubscriber");
function defaultIfEmpty(defaultValue) {
    return lift_1.operate(function(source, subscriber) {
        var hasValue = false;
        source.subscribe(new OperatorSubscriber_1.OperatorSubscriber(subscriber, function(value) {
            hasValue = true;
            subscriber.next(value);
        }, function() {
            if (!hasValue) subscriber.next(defaultValue);
            subscriber.complete();
        }));
    });
}
exports.defaultIfEmpty = defaultIfEmpty;

},{"../util/lift":"6c48g","./OperatorSubscriber":"4ZP4f"}],"6NPax":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.delay = void 0;
var async_1 = require("../scheduler/async");
var delayWhen_1 = require("./delayWhen");
var timer_1 = require("../observable/timer");
function delay(due, scheduler) {
    if (scheduler === void 0) scheduler = async_1.asyncScheduler;
    var duration = timer_1.timer(due, scheduler);
    return delayWhen_1.delayWhen(function() {
        return duration;
    });
}
exports.delay = delay;

},{"../scheduler/async":"2KqRM","./delayWhen":"74ITF","../observable/timer":"6ECLG"}],"74ITF":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.delayWhen = void 0;
var concat_1 = require("../observable/concat");
var take_1 = require("./take");
var ignoreElements_1 = require("./ignoreElements");
var mapTo_1 = require("./mapTo");
var mergeMap_1 = require("./mergeMap");
function delayWhen(delayDurationSelector, subscriptionDelay) {
    if (subscriptionDelay) return function(source) {
        return concat_1.concat(subscriptionDelay.pipe(take_1.take(1), ignoreElements_1.ignoreElements()), source.pipe(delayWhen(delayDurationSelector)));
    };
    return mergeMap_1.mergeMap(function(value, index) {
        return delayDurationSelector(value, index).pipe(take_1.take(1), mapTo_1.mapTo(value));
    });
}
exports.delayWhen = delayWhen;

},{"../observable/concat":"3cyRs","./take":"4xhSB","./ignoreElements":"6BPSv","./mapTo":"4619t","./mergeMap":"7AC9i"}],"3cyRs":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.concat = void 0;
var concatAll_1 = require("../operators/concatAll");
var fromArray_1 = require("./fromArray");
var args_1 = require("../util/args");
function concat() {
    var args = [];
    for(var _i = 0; _i < arguments.length; _i++)args[_i] = arguments[_i];
    return concatAll_1.concatAll()(fromArray_1.internalFromArray(args, args_1.popScheduler(args)));
}
exports.concat = concat;

},{"../operators/concatAll":"6DfMI","./fromArray":"WapNe","../util/args":"18qpb"}],"4xhSB":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.take = void 0;
var empty_1 = require("../observable/empty");
var lift_1 = require("../util/lift");
var OperatorSubscriber_1 = require("./OperatorSubscriber");
function take(count) {
    return count <= 0 ? function() {
        return empty_1.EMPTY;
    } : lift_1.operate(function(source, subscriber) {
        var seen = 0;
        source.subscribe(new OperatorSubscriber_1.OperatorSubscriber(subscriber, function(value) {
            if ((++seen) <= count) {
                subscriber.next(value);
                if (count <= seen) subscriber.complete();
            }
        }));
    });
}
exports.take = take;

},{"../observable/empty":"cBi4y","../util/lift":"6c48g","./OperatorSubscriber":"4ZP4f"}],"cBi4y":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.empty = exports.EMPTY = void 0;
var Observable_1 = require("../Observable");
exports.EMPTY = new Observable_1.Observable(function(subscriber) {
    return subscriber.complete();
});
function empty(scheduler) {
    return scheduler ? emptyScheduled(scheduler) : exports.EMPTY;
}
exports.empty = empty;
function emptyScheduled(scheduler) {
    return new Observable_1.Observable(function(subscriber) {
        return scheduler.schedule(function() {
            return subscriber.complete();
        });
    });
}

},{"../Observable":"r7DVo"}],"6BPSv":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ignoreElements = void 0;
var lift_1 = require("../util/lift");
var OperatorSubscriber_1 = require("./OperatorSubscriber");
var noop_1 = require("../util/noop");
function ignoreElements() {
    return lift_1.operate(function(source, subscriber) {
        source.subscribe(new OperatorSubscriber_1.OperatorSubscriber(subscriber, noop_1.noop));
    });
}
exports.ignoreElements = ignoreElements;

},{"../util/lift":"6c48g","./OperatorSubscriber":"4ZP4f","../util/noop":"4pemK"}],"4619t":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.mapTo = void 0;
var map_1 = require("./map");
function mapTo(value) {
    return map_1.map(function() {
        return value;
    });
}
exports.mapTo = mapTo;

},{"./map":"4S1RX"}],"2KvBH":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.dematerialize = void 0;
var Notification_1 = require("../Notification");
var lift_1 = require("../util/lift");
var OperatorSubscriber_1 = require("./OperatorSubscriber");
function dematerialize() {
    return lift_1.operate(function(source, subscriber) {
        source.subscribe(new OperatorSubscriber_1.OperatorSubscriber(subscriber, function(notification) {
            return Notification_1.observeNotification(notification, subscriber);
        }));
    });
}
exports.dematerialize = dematerialize;

},{"../Notification":"23QXr","../util/lift":"6c48g","./OperatorSubscriber":"4ZP4f"}],"23QXr":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.observeNotification = exports.Notification = exports.NotificationKind = void 0;
var empty_1 = require("./observable/empty");
var of_1 = require("./observable/of");
var throwError_1 = require("./observable/throwError");
var isFunction_1 = require("./util/isFunction");
var NotificationKind;
(function(NotificationKind1) {
    NotificationKind1["NEXT"] = "N";
    NotificationKind1["ERROR"] = "E";
    NotificationKind1["COMPLETE"] = "C";
})(NotificationKind = exports.NotificationKind || (exports.NotificationKind = {
}));
var Notification1 = function() {
    function Notification2(kind, value, error) {
        this.kind = kind;
        this.value = value;
        this.error = error;
        this.hasValue = kind === 'N';
    }
    Notification2.prototype.observe = function(observer) {
        return observeNotification(this, observer);
    };
    Notification2.prototype.do = function(nextHandler, errorHandler, completeHandler) {
        var _a = this, kind = _a.kind, value = _a.value, error = _a.error;
        return kind === 'N' ? nextHandler === null || nextHandler === void 0 ? void 0 : nextHandler(value) : kind === 'E' ? errorHandler === null || errorHandler === void 0 ? void 0 : errorHandler(error) : completeHandler === null || completeHandler === void 0 ? void 0 : completeHandler();
    };
    Notification2.prototype.accept = function(nextOrObserver, error, complete) {
        var _a;
        return isFunction_1.isFunction((_a = nextOrObserver) === null || _a === void 0 ? void 0 : _a.next) ? this.observe(nextOrObserver) : this.do(nextOrObserver, error, complete);
    };
    Notification2.prototype.toObservable = function() {
        var _a = this, kind = _a.kind, value = _a.value, error = _a.error;
        var result = kind === 'N' ? of_1.of(value) : kind === 'E' ? throwError_1.throwError(function() {
            return error;
        }) : kind === 'C' ? empty_1.EMPTY : 0;
        if (!result) throw new TypeError("Unexpected notification kind " + kind);
        return result;
    };
    Notification2.createNext = function(value) {
        return new Notification2('N', value);
    };
    Notification2.createError = function(err) {
        return new Notification2('E', undefined, err);
    };
    Notification2.createComplete = function() {
        return Notification2.completeNotification;
    };
    Notification2.completeNotification = new Notification2('C');
    return Notification2;
}();
exports.Notification = Notification1;
function observeNotification(notification, observer) {
    var _a, _b, _c;
    var _d = notification, kind = _d.kind, value = _d.value, error = _d.error;
    if (typeof kind !== 'string') throw new TypeError('Invalid notification, missing "kind"');
    kind === 'N' ? (_a = observer.next) === null || _a === void 0 || _a.call(observer, value) : kind === 'E' ? (_b = observer.error) === null || _b === void 0 || _b.call(observer, error) : (_c = observer.complete) === null || _c === void 0 || _c.call(observer);
}
exports.observeNotification = observeNotification;

},{"./observable/empty":"cBi4y","./observable/of":"2aA3z","./observable/throwError":"1ZEdu","./util/isFunction":"5QZmD"}],"2aA3z":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.of = void 0;
var fromArray_1 = require("./fromArray");
var scheduleArray_1 = require("../scheduled/scheduleArray");
var args_1 = require("../util/args");
function of() {
    var args = [];
    for(var _i = 0; _i < arguments.length; _i++)args[_i] = arguments[_i];
    var scheduler = args_1.popScheduler(args);
    return scheduler ? scheduleArray_1.scheduleArray(args, scheduler) : fromArray_1.internalFromArray(args);
}
exports.of = of;

},{"./fromArray":"WapNe","../scheduled/scheduleArray":"7Mqjj","../util/args":"18qpb"}],"1ZEdu":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.throwError = void 0;
var Observable_1 = require("../Observable");
var isFunction_1 = require("../util/isFunction");
function throwError(errorOrErrorFactory, scheduler) {
    var errorFactory = isFunction_1.isFunction(errorOrErrorFactory) ? errorOrErrorFactory : function() {
        return errorOrErrorFactory;
    };
    var init = function(subscriber) {
        return subscriber.error(errorFactory());
    };
    return new Observable_1.Observable(scheduler ? function(subscriber) {
        return scheduler.schedule(init, 0, subscriber);
    } : init);
}
exports.throwError = throwError;

},{"../Observable":"r7DVo","../util/isFunction":"5QZmD"}],"1zhd2":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.distinct = void 0;
var lift_1 = require("../util/lift");
var OperatorSubscriber_1 = require("./OperatorSubscriber");
var noop_1 = require("../util/noop");
function distinct(keySelector, flushes) {
    return lift_1.operate(function(source, subscriber) {
        var distinctKeys = new Set();
        source.subscribe(new OperatorSubscriber_1.OperatorSubscriber(subscriber, function(value) {
            var key = keySelector ? keySelector(value) : value;
            if (!distinctKeys.has(key)) {
                distinctKeys.add(key);
                subscriber.next(value);
            }
        }));
        flushes === null || flushes === void 0 || flushes.subscribe(new OperatorSubscriber_1.OperatorSubscriber(subscriber, function() {
            return distinctKeys.clear();
        }, noop_1.noop));
    });
}
exports.distinct = distinct;

},{"../util/lift":"6c48g","./OperatorSubscriber":"4ZP4f","../util/noop":"4pemK"}],"2EvaY":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.distinctUntilChanged = void 0;
var identity_1 = require("../util/identity");
var lift_1 = require("../util/lift");
var OperatorSubscriber_1 = require("./OperatorSubscriber");
function distinctUntilChanged(comparator, keySelector) {
    if (keySelector === void 0) keySelector = identity_1.identity;
    comparator = comparator !== null && comparator !== void 0 ? comparator : defaultCompare;
    return lift_1.operate(function(source, subscriber) {
        var previousKey;
        var first = true;
        source.subscribe(new OperatorSubscriber_1.OperatorSubscriber(subscriber, function(value) {
            var currentKey = keySelector(value);
            if (first || !comparator(previousKey, currentKey)) {
                first = false;
                previousKey = currentKey;
                subscriber.next(value);
            }
        }));
    });
}
exports.distinctUntilChanged = distinctUntilChanged;
function defaultCompare(a, b) {
    return a === b;
}

},{"../util/identity":"2JjYu","../util/lift":"6c48g","./OperatorSubscriber":"4ZP4f"}],"4zGPm":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.distinctUntilKeyChanged = void 0;
var distinctUntilChanged_1 = require("./distinctUntilChanged");
function distinctUntilKeyChanged(key, compare) {
    return distinctUntilChanged_1.distinctUntilChanged(function(x, y) {
        return compare ? compare(x[key], y[key]) : x[key] === y[key];
    });
}
exports.distinctUntilKeyChanged = distinctUntilKeyChanged;

},{"./distinctUntilChanged":"2EvaY"}],"hENoL":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.elementAt = void 0;
var ArgumentOutOfRangeError_1 = require("../util/ArgumentOutOfRangeError");
var filter_1 = require("./filter");
var throwIfEmpty_1 = require("./throwIfEmpty");
var defaultIfEmpty_1 = require("./defaultIfEmpty");
var take_1 = require("./take");
function elementAt(index, defaultValue) {
    if (index < 0) throw new ArgumentOutOfRangeError_1.ArgumentOutOfRangeError();
    var hasDefaultValue = arguments.length >= 2;
    return function(source) {
        return source.pipe(filter_1.filter(function(v, i) {
            return i === index;
        }), take_1.take(1), hasDefaultValue ? defaultIfEmpty_1.defaultIfEmpty(defaultValue) : throwIfEmpty_1.throwIfEmpty(function() {
            return new ArgumentOutOfRangeError_1.ArgumentOutOfRangeError();
        }));
    };
}
exports.elementAt = elementAt;

},{"../util/ArgumentOutOfRangeError":"5yzAW","./filter":"4yIda","./throwIfEmpty":"7CGyT","./defaultIfEmpty":"4iYxz","./take":"4xhSB"}],"5yzAW":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ArgumentOutOfRangeError = void 0;
var createErrorClass_1 = require("./createErrorClass");
exports.ArgumentOutOfRangeError = createErrorClass_1.createErrorClass(function(_super) {
    return function ArgumentOutOfRangeErrorImpl() {
        _super(this);
        this.name = 'ArgumentOutOfRangeError';
        this.message = 'argument out of range';
    };
});

},{"./createErrorClass":"6FSlj"}],"4yIda":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.filter = void 0;
var lift_1 = require("../util/lift");
var OperatorSubscriber_1 = require("./OperatorSubscriber");
function filter(predicate, thisArg) {
    return lift_1.operate(function(source, subscriber) {
        var index = 0;
        source.subscribe(new OperatorSubscriber_1.OperatorSubscriber(subscriber, function(value) {
            return predicate.call(thisArg, value, index++) && subscriber.next(value);
        }));
    });
}
exports.filter = filter;

},{"../util/lift":"6c48g","./OperatorSubscriber":"4ZP4f"}],"7CGyT":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.throwIfEmpty = void 0;
var EmptyError_1 = require("../util/EmptyError");
var lift_1 = require("../util/lift");
var OperatorSubscriber_1 = require("./OperatorSubscriber");
function throwIfEmpty(errorFactory) {
    if (errorFactory === void 0) errorFactory = defaultErrorFactory;
    return lift_1.operate(function(source, subscriber) {
        var hasValue = false;
        source.subscribe(new OperatorSubscriber_1.OperatorSubscriber(subscriber, function(value) {
            hasValue = true;
            subscriber.next(value);
        }, function() {
            return hasValue ? subscriber.complete() : subscriber.error(errorFactory());
        }));
    });
}
exports.throwIfEmpty = throwIfEmpty;
function defaultErrorFactory() {
    return new EmptyError_1.EmptyError();
}

},{"../util/EmptyError":"2zMaW","../util/lift":"6c48g","./OperatorSubscriber":"4ZP4f"}],"2zMaW":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.EmptyError = void 0;
var createErrorClass_1 = require("./createErrorClass");
exports.EmptyError = createErrorClass_1.createErrorClass(function(_super) {
    return function EmptyErrorImpl() {
        _super(this);
        this.name = 'EmptyError';
        this.message = 'no elements in sequence';
    };
});

},{"./createErrorClass":"6FSlj"}],"6ewet":[function(require,module,exports) {
"use strict";
var __read = this && this.__read || function(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while((n === void 0 || (n--) > 0) && !(r = i.next()).done)ar.push(r.value);
    } catch (error) {
        e = {
            error: error
        };
    } finally{
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        } finally{
            if (e) throw e.error;
        }
    }
    return ar;
};
var __spreadArray = this && this.__spreadArray || function(to, from) {
    for(var i = 0, il = from.length, j = to.length; i < il; i++, j++)to[j] = from[i];
    return to;
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.endWith = void 0;
var concat_1 = require("../observable/concat");
var of_1 = require("../observable/of");
function endWith() {
    var values = [];
    for(var _i = 0; _i < arguments.length; _i++)values[_i] = arguments[_i];
    return function(source) {
        return concat_1.concat(source, of_1.of.apply(void 0, __spreadArray([], __read(values))));
    };
}
exports.endWith = endWith;

},{"../observable/concat":"3cyRs","../observable/of":"2aA3z"}],"1hv7R":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.every = void 0;
var lift_1 = require("../util/lift");
var OperatorSubscriber_1 = require("./OperatorSubscriber");
function every(predicate, thisArg) {
    return lift_1.operate(function(source, subscriber) {
        var index = 0;
        source.subscribe(new OperatorSubscriber_1.OperatorSubscriber(subscriber, function(value) {
            if (!predicate.call(thisArg, value, index++, source)) {
                subscriber.next(false);
                subscriber.complete();
            }
        }, function() {
            subscriber.next(true);
            subscriber.complete();
        }));
    });
}
exports.every = every;

},{"../util/lift":"6c48g","./OperatorSubscriber":"4ZP4f"}],"4H26O":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.exhaust = void 0;
var exhaustAll_1 = require("./exhaustAll");
exports.exhaust = exhaustAll_1.exhaustAll;

},{"./exhaustAll":"5MS5d"}],"5MS5d":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.exhaustAll = void 0;
var lift_1 = require("../util/lift");
var from_1 = require("../observable/from");
var OperatorSubscriber_1 = require("./OperatorSubscriber");
function exhaustAll() {
    return lift_1.operate(function(source, subscriber) {
        var isComplete = false;
        var innerSub = null;
        source.subscribe(new OperatorSubscriber_1.OperatorSubscriber(subscriber, function(inner) {
            if (!innerSub) innerSub = from_1.innerFrom(inner).subscribe(new OperatorSubscriber_1.OperatorSubscriber(subscriber, undefined, function() {
                innerSub = null;
                isComplete && subscriber.complete();
            }));
        }, function() {
            isComplete = true;
            !innerSub && subscriber.complete();
        }));
    });
}
exports.exhaustAll = exhaustAll;

},{"../util/lift":"6c48g","../observable/from":"1hp4r","./OperatorSubscriber":"4ZP4f"}],"48ZUp":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.exhaustMap = void 0;
var map_1 = require("./map");
var from_1 = require("../observable/from");
var lift_1 = require("../util/lift");
var OperatorSubscriber_1 = require("./OperatorSubscriber");
function exhaustMap(project, resultSelector) {
    if (resultSelector) return function(source) {
        return source.pipe(exhaustMap(function(a, i) {
            return from_1.innerFrom(project(a, i)).pipe(map_1.map(function(b, ii) {
                return resultSelector(a, b, i, ii);
            }));
        }));
    };
    return lift_1.operate(function(source, subscriber) {
        var index = 0;
        var innerSub = null;
        var isComplete = false;
        source.subscribe(new OperatorSubscriber_1.OperatorSubscriber(subscriber, function(outerValue) {
            if (!innerSub) {
                innerSub = new OperatorSubscriber_1.OperatorSubscriber(subscriber, undefined, function() {
                    innerSub = null;
                    isComplete && subscriber.complete();
                });
                from_1.innerFrom(project(outerValue, index++)).subscribe(innerSub);
            }
        }, function() {
            isComplete = true;
            !innerSub && subscriber.complete();
        }));
    });
}
exports.exhaustMap = exhaustMap;

},{"./map":"4S1RX","../observable/from":"1hp4r","../util/lift":"6c48g","./OperatorSubscriber":"4ZP4f"}],"5uR5x":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.expand = void 0;
var lift_1 = require("../util/lift");
var mergeInternals_1 = require("./mergeInternals");
function expand(project, concurrent, scheduler) {
    if (concurrent === void 0) concurrent = Infinity;
    concurrent = (concurrent || 0) < 1 ? Infinity : concurrent;
    return lift_1.operate(function(source, subscriber) {
        return mergeInternals_1.mergeInternals(source, subscriber, project, concurrent, undefined, true, scheduler);
    });
}
exports.expand = expand;

},{"../util/lift":"6c48g","./mergeInternals":"4A3Vk"}],"1WLMd":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.finalize = void 0;
var lift_1 = require("../util/lift");
function finalize(callback) {
    return lift_1.operate(function(source, subscriber) {
        try {
            source.subscribe(subscriber);
        } finally{
            subscriber.add(callback);
        }
    });
}
exports.finalize = finalize;

},{"../util/lift":"6c48g"}],"2I3tR":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.createFind = exports.find = void 0;
var lift_1 = require("../util/lift");
var OperatorSubscriber_1 = require("./OperatorSubscriber");
function find(predicate, thisArg) {
    return lift_1.operate(createFind(predicate, thisArg, 'value'));
}
exports.find = find;
function createFind(predicate, thisArg, emit) {
    var findIndex = emit === 'index';
    return function(source, subscriber) {
        var index = 0;
        source.subscribe(new OperatorSubscriber_1.OperatorSubscriber(subscriber, function(value) {
            var i = index++;
            if (predicate.call(thisArg, value, i, source)) {
                subscriber.next(findIndex ? i : value);
                subscriber.complete();
            }
        }, function() {
            subscriber.next(findIndex ? -1 : undefined);
            subscriber.complete();
        }));
    };
}
exports.createFind = createFind;

},{"../util/lift":"6c48g","./OperatorSubscriber":"4ZP4f"}],"1wMD5":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.findIndex = void 0;
var lift_1 = require("../util/lift");
var find_1 = require("./find");
function findIndex(predicate, thisArg) {
    return lift_1.operate(find_1.createFind(predicate, thisArg, 'index'));
}
exports.findIndex = findIndex;

},{"../util/lift":"6c48g","./find":"2I3tR"}],"UnEtF":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.first = void 0;
var EmptyError_1 = require("../util/EmptyError");
var filter_1 = require("./filter");
var take_1 = require("./take");
var defaultIfEmpty_1 = require("./defaultIfEmpty");
var throwIfEmpty_1 = require("./throwIfEmpty");
var identity_1 = require("../util/identity");
function first(predicate, defaultValue) {
    var hasDefaultValue = arguments.length >= 2;
    return function(source) {
        return source.pipe(predicate ? filter_1.filter(function(v, i) {
            return predicate(v, i, source);
        }) : identity_1.identity, take_1.take(1), hasDefaultValue ? defaultIfEmpty_1.defaultIfEmpty(defaultValue) : throwIfEmpty_1.throwIfEmpty(function() {
            return new EmptyError_1.EmptyError();
        }));
    };
}
exports.first = first;

},{"../util/EmptyError":"2zMaW","./filter":"4yIda","./take":"4xhSB","./defaultIfEmpty":"4iYxz","./throwIfEmpty":"7CGyT","../util/identity":"2JjYu"}],"2Mlgz":[function(require,module,exports) {
"use strict";
var __extends = this && this.__extends || function() {
    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || ({
            __proto__: []
        }) instanceof Array && function(d1, b1) {
            d1.__proto__ = b1;
        } || function(d1, b1) {
            for(var p in b1)if (Object.prototype.hasOwnProperty.call(b1, p)) d1[p] = b1[p];
        };
        return extendStatics(d, b);
    };
    return function(d, b) {
        if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.groupBy = void 0;
var Observable_1 = require("../Observable");
var from_1 = require("../observable/from");
var Subject_1 = require("../Subject");
var lift_1 = require("../util/lift");
var OperatorSubscriber_1 = require("./OperatorSubscriber");
function groupBy(keySelector, elementOrOptions, duration, connector) {
    return lift_1.operate(function(source, subscriber) {
        var element;
        if (!elementOrOptions || typeof elementOrOptions === 'function') element = elementOrOptions;
        else duration = elementOrOptions.duration, element = elementOrOptions.element, connector = elementOrOptions.connector;
        var groups = new Map();
        var notify = function(cb) {
            groups.forEach(cb);
            cb(subscriber);
        };
        var handleError = function(err) {
            return notify(function(consumer) {
                return consumer.error(err);
            });
        };
        var groupBySourceSubscriber = new GroupBySubscriber1(subscriber, function(value) {
            try {
                var key_1 = keySelector(value);
                var group_1 = groups.get(key_1);
                if (!group_1) {
                    groups.set(key_1, group_1 = connector ? connector() : new Subject_1.Subject());
                    var grouped = createGroupedObservable(key_1, group_1);
                    subscriber.next(grouped);
                    if (duration) {
                        var durationSubscriber_1 = new OperatorSubscriber_1.OperatorSubscriber(group_1, function() {
                            group_1.complete();
                            durationSubscriber_1 === null || durationSubscriber_1 === void 0 || durationSubscriber_1.unsubscribe();
                        }, undefined, undefined, function() {
                            return groups.delete(key_1);
                        });
                        groupBySourceSubscriber.add(from_1.innerFrom(duration(grouped)).subscribe(durationSubscriber_1));
                    }
                }
                group_1.next(element ? element(value) : value);
            } catch (err) {
                handleError(err);
            }
        }, function() {
            return notify(function(consumer) {
                return consumer.complete();
            });
        }, handleError, function() {
            return groups.clear();
        });
        source.subscribe(groupBySourceSubscriber);
        function createGroupedObservable(key, groupSubject) {
            var result = new Observable_1.Observable(function(groupSubscriber) {
                groupBySourceSubscriber.activeGroups++;
                var innerSub = groupSubject.subscribe(groupSubscriber);
                return function() {
                    innerSub.unsubscribe();
                    (--groupBySourceSubscriber.activeGroups) === 0 && groupBySourceSubscriber.teardownAttempted && groupBySourceSubscriber.unsubscribe();
                };
            });
            result.key = key;
            return result;
        }
    });
}
exports.groupBy = groupBy;
var GroupBySubscriber1 = function(_super) {
    __extends(GroupBySubscriber2, _super);
    function GroupBySubscriber2() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.activeGroups = 0;
        _this.teardownAttempted = false;
        return _this;
    }
    GroupBySubscriber2.prototype.unsubscribe = function() {
        this.teardownAttempted = true;
        this.activeGroups === 0 && _super.prototype.unsubscribe.call(this);
    };
    return GroupBySubscriber2;
}(OperatorSubscriber_1.OperatorSubscriber);

},{"../Observable":"r7DVo","../observable/from":"1hp4r","../Subject":"4Jzfy","../util/lift":"6c48g","./OperatorSubscriber":"4ZP4f"}],"1rKWX":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.isEmpty = void 0;
var lift_1 = require("../util/lift");
var OperatorSubscriber_1 = require("./OperatorSubscriber");
function isEmpty() {
    return lift_1.operate(function(source, subscriber) {
        source.subscribe(new OperatorSubscriber_1.OperatorSubscriber(subscriber, function() {
            subscriber.next(false);
            subscriber.complete();
        }, function() {
            subscriber.next(true);
            subscriber.complete();
        }));
    });
}
exports.isEmpty = isEmpty;

},{"../util/lift":"6c48g","./OperatorSubscriber":"4ZP4f"}],"1RAcN":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.last = void 0;
var EmptyError_1 = require("../util/EmptyError");
var filter_1 = require("./filter");
var takeLast_1 = require("./takeLast");
var throwIfEmpty_1 = require("./throwIfEmpty");
var defaultIfEmpty_1 = require("./defaultIfEmpty");
var identity_1 = require("../util/identity");
function last(predicate, defaultValue) {
    var hasDefaultValue = arguments.length >= 2;
    return function(source) {
        return source.pipe(predicate ? filter_1.filter(function(v, i) {
            return predicate(v, i, source);
        }) : identity_1.identity, takeLast_1.takeLast(1), hasDefaultValue ? defaultIfEmpty_1.defaultIfEmpty(defaultValue) : throwIfEmpty_1.throwIfEmpty(function() {
            return new EmptyError_1.EmptyError();
        }));
    };
}
exports.last = last;

},{"../util/EmptyError":"2zMaW","./filter":"4yIda","./takeLast":"4ejt2","./throwIfEmpty":"7CGyT","./defaultIfEmpty":"4iYxz","../util/identity":"2JjYu"}],"4ejt2":[function(require,module,exports) {
"use strict";
var __values = this && this.__values || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function() {
            if (o && i >= o.length) o = void 0;
            return {
                value: o && o[i++],
                done: !o
            };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.takeLast = void 0;
var empty_1 = require("../observable/empty");
var lift_1 = require("../util/lift");
var OperatorSubscriber_1 = require("./OperatorSubscriber");
function takeLast(count) {
    return count <= 0 ? function() {
        return empty_1.EMPTY;
    } : lift_1.operate(function(source, subscriber) {
        var buffer = [];
        source.subscribe(new OperatorSubscriber_1.OperatorSubscriber(subscriber, function(value) {
            buffer.push(value);
            count < buffer.length && buffer.shift();
        }, function() {
            var e_1, _a;
            try {
                for(var buffer_1 = __values(buffer), buffer_1_1 = buffer_1.next(); !buffer_1_1.done; buffer_1_1 = buffer_1.next()){
                    var value = buffer_1_1.value;
                    subscriber.next(value);
                }
            } catch (e_1_1) {
                e_1 = {
                    error: e_1_1
                };
            } finally{
                try {
                    if (buffer_1_1 && !buffer_1_1.done && (_a = buffer_1.return)) _a.call(buffer_1);
                } finally{
                    if (e_1) throw e_1.error;
                }
            }
            subscriber.complete();
        }, undefined, function() {
            buffer = null;
        }));
    });
}
exports.takeLast = takeLast;

},{"../observable/empty":"cBi4y","../util/lift":"6c48g","./OperatorSubscriber":"4ZP4f"}],"2WYIn":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.materialize = void 0;
var Notification_1 = require("../Notification");
var lift_1 = require("../util/lift");
var OperatorSubscriber_1 = require("./OperatorSubscriber");
function materialize() {
    return lift_1.operate(function(source, subscriber) {
        source.subscribe(new OperatorSubscriber_1.OperatorSubscriber(subscriber, function(value) {
            subscriber.next(Notification_1.Notification.createNext(value));
        }, function() {
            subscriber.next(Notification_1.Notification.createComplete());
            subscriber.complete();
        }, function(err) {
            subscriber.next(Notification_1.Notification.createError(err));
            subscriber.complete();
        }));
    });
}
exports.materialize = materialize;

},{"../Notification":"23QXr","../util/lift":"6c48g","./OperatorSubscriber":"4ZP4f"}],"34E3f":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.max = void 0;
var reduce_1 = require("./reduce");
var isFunction_1 = require("../util/isFunction");
function max(comparer) {
    return reduce_1.reduce(isFunction_1.isFunction(comparer) ? function(x, y) {
        return comparer(x, y) > 0 ? x : y;
    } : function(x, y) {
        return x > y ? x : y;
    });
}
exports.max = max;

},{"./reduce":"3M1qn","../util/isFunction":"5QZmD"}],"4qXaN":[function(require,module,exports) {
"use strict";
var __read = this && this.__read || function(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while((n === void 0 || (n--) > 0) && !(r = i.next()).done)ar.push(r.value);
    } catch (error) {
        e = {
            error: error
        };
    } finally{
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        } finally{
            if (e) throw e.error;
        }
    }
    return ar;
};
var __spreadArray = this && this.__spreadArray || function(to, from) {
    for(var i = 0, il = from.length, j = to.length; i < il; i++, j++)to[j] = from[i];
    return to;
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.merge = void 0;
var lift_1 = require("../util/lift");
var argsOrArgArray_1 = require("../util/argsOrArgArray");
var fromArray_1 = require("../observable/fromArray");
var mergeAll_1 = require("./mergeAll");
var args_1 = require("../util/args");
function merge() {
    var args = [];
    for(var _i = 0; _i < arguments.length; _i++)args[_i] = arguments[_i];
    var scheduler = args_1.popScheduler(args);
    var concurrent = args_1.popNumber(args, Infinity);
    args = argsOrArgArray_1.argsOrArgArray(args);
    return lift_1.operate(function(source, subscriber) {
        mergeAll_1.mergeAll(concurrent)(fromArray_1.internalFromArray(__spreadArray([
            source
        ], __read(args)), scheduler)).subscribe(subscriber);
    });
}
exports.merge = merge;

},{"../util/lift":"6c48g","../util/argsOrArgArray":"35t9S","../observable/fromArray":"WapNe","./mergeAll":"2ePdS","../util/args":"18qpb"}],"7Jdow":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.flatMap = void 0;
var mergeMap_1 = require("./mergeMap");
exports.flatMap = mergeMap_1.mergeMap;

},{"./mergeMap":"7AC9i"}],"P1xBA":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.mergeMapTo = void 0;
var mergeMap_1 = require("./mergeMap");
var isFunction_1 = require("../util/isFunction");
function mergeMapTo(innerObservable, resultSelector, concurrent) {
    if (concurrent === void 0) concurrent = Infinity;
    if (isFunction_1.isFunction(resultSelector)) return mergeMap_1.mergeMap(function() {
        return innerObservable;
    }, resultSelector, concurrent);
    if (typeof resultSelector === 'number') concurrent = resultSelector;
    return mergeMap_1.mergeMap(function() {
        return innerObservable;
    }, concurrent);
}
exports.mergeMapTo = mergeMapTo;

},{"./mergeMap":"7AC9i","../util/isFunction":"5QZmD"}],"5YH9B":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.mergeScan = void 0;
var lift_1 = require("../util/lift");
var mergeInternals_1 = require("./mergeInternals");
function mergeScan(accumulator, seed, concurrent) {
    if (concurrent === void 0) concurrent = Infinity;
    return lift_1.operate(function(source, subscriber) {
        var state = seed;
        return mergeInternals_1.mergeInternals(source, subscriber, function(value, index) {
            return accumulator(state, value, index);
        }, concurrent, function(value) {
            state = value;
        }, false, undefined, function() {
            return state = null;
        });
    });
}
exports.mergeScan = mergeScan;

},{"../util/lift":"6c48g","./mergeInternals":"4A3Vk"}],"64dBH":[function(require,module,exports) {
"use strict";
var __read = this && this.__read || function(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while((n === void 0 || (n--) > 0) && !(r = i.next()).done)ar.push(r.value);
    } catch (error) {
        e = {
            error: error
        };
    } finally{
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        } finally{
            if (e) throw e.error;
        }
    }
    return ar;
};
var __spreadArray = this && this.__spreadArray || function(to, from) {
    for(var i = 0, il = from.length, j = to.length; i < il; i++, j++)to[j] = from[i];
    return to;
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.mergeWith = void 0;
var merge_1 = require("./merge");
function mergeWith() {
    var otherSources = [];
    for(var _i = 0; _i < arguments.length; _i++)otherSources[_i] = arguments[_i];
    return merge_1.merge.apply(void 0, __spreadArray([], __read(otherSources)));
}
exports.mergeWith = mergeWith;

},{"./merge":"4qXaN"}],"30JQ3":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.min = void 0;
var reduce_1 = require("./reduce");
var isFunction_1 = require("../util/isFunction");
function min(comparer) {
    return reduce_1.reduce(isFunction_1.isFunction(comparer) ? function(x, y) {
        return comparer(x, y) < 0 ? x : y;
    } : function(x, y) {
        return x < y ? x : y;
    });
}
exports.min = min;

},{"./reduce":"3M1qn","../util/isFunction":"5QZmD"}],"3hDJh":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.multicast = void 0;
var ConnectableObservable_1 = require("../observable/ConnectableObservable");
var isFunction_1 = require("../util/isFunction");
var connect_1 = require("./connect");
function multicast(subjectOrSubjectFactory, selector) {
    var subjectFactory = isFunction_1.isFunction(subjectOrSubjectFactory) ? subjectOrSubjectFactory : function() {
        return subjectOrSubjectFactory;
    };
    if (isFunction_1.isFunction(selector)) return connect_1.connect(selector, {
        connector: subjectFactory
    });
    return function(source) {
        return new ConnectableObservable_1.ConnectableObservable(source, subjectFactory);
    };
}
exports.multicast = multicast;

},{"../observable/ConnectableObservable":"1jZA0","../util/isFunction":"5QZmD","./connect":"4POwy"}],"1jZA0":[function(require,module,exports) {
"use strict";
var __extends = this && this.__extends || function() {
    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || ({
            __proto__: []
        }) instanceof Array && function(d1, b1) {
            d1.__proto__ = b1;
        } || function(d1, b1) {
            for(var p in b1)if (Object.prototype.hasOwnProperty.call(b1, p)) d1[p] = b1[p];
        };
        return extendStatics(d, b);
    };
    return function(d, b) {
        if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ConnectableObservable = void 0;
var Observable_1 = require("../Observable");
var Subscription_1 = require("../Subscription");
var refCount_1 = require("../operators/refCount");
var OperatorSubscriber_1 = require("../operators/OperatorSubscriber");
var lift_1 = require("../util/lift");
var ConnectableObservable1 = function(_super) {
    __extends(ConnectableObservable2, _super);
    function ConnectableObservable2(source, subjectFactory) {
        var _this = _super.call(this) || this;
        _this.source = source;
        _this.subjectFactory = subjectFactory;
        _this._subject = null;
        _this._refCount = 0;
        _this._connection = null;
        if (lift_1.hasLift(source)) _this.lift = source.lift;
        return _this;
    }
    ConnectableObservable2.prototype._subscribe = function(subscriber) {
        return this.getSubject().subscribe(subscriber);
    };
    ConnectableObservable2.prototype.getSubject = function() {
        var subject = this._subject;
        if (!subject || subject.isStopped) this._subject = this.subjectFactory();
        return this._subject;
    };
    ConnectableObservable2.prototype._teardown = function() {
        this._refCount = 0;
        var _connection = this._connection;
        this._subject = this._connection = null;
        _connection === null || _connection === void 0 || _connection.unsubscribe();
    };
    ConnectableObservable2.prototype.connect = function() {
        var _this = this;
        var connection = this._connection;
        if (!connection) {
            connection = this._connection = new Subscription_1.Subscription();
            var subject_1 = this.getSubject();
            connection.add(this.source.subscribe(new OperatorSubscriber_1.OperatorSubscriber(subject_1, undefined, function() {
                _this._teardown();
                subject_1.complete();
            }, function(err) {
                _this._teardown();
                subject_1.error(err);
            }, function() {
                return _this._teardown();
            })));
            if (connection.closed) {
                this._connection = null;
                connection = Subscription_1.Subscription.EMPTY;
            }
        }
        return connection;
    };
    ConnectableObservable2.prototype.refCount = function() {
        return refCount_1.refCount()(this);
    };
    return ConnectableObservable2;
}(Observable_1.Observable);
exports.ConnectableObservable = ConnectableObservable1;

},{"../Observable":"r7DVo","../Subscription":"6ydxy","../operators/refCount":"1vRx5","../operators/OperatorSubscriber":"4ZP4f","../util/lift":"6c48g"}],"1vRx5":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.refCount = void 0;
var lift_1 = require("../util/lift");
var OperatorSubscriber_1 = require("./OperatorSubscriber");
function refCount() {
    return lift_1.operate(function(source, subscriber) {
        var connection = null;
        source._refCount++;
        var refCounter = new OperatorSubscriber_1.OperatorSubscriber(subscriber, undefined, undefined, undefined, function() {
            if (!source || source._refCount <= 0 || 0 < --source._refCount) {
                connection = null;
                return;
            }
            var sharedConnection = source._connection;
            var conn = connection;
            connection = null;
            if (sharedConnection && (!conn || sharedConnection === conn)) sharedConnection.unsubscribe();
            subscriber.unsubscribe();
        });
        source.subscribe(refCounter);
        if (!refCounter.closed) connection = source.connect();
    });
}
exports.refCount = refCount;

},{"../util/lift":"6c48g","./OperatorSubscriber":"4ZP4f"}],"6dgt1":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.observeOn = void 0;
var lift_1 = require("../util/lift");
var OperatorSubscriber_1 = require("./OperatorSubscriber");
function observeOn(scheduler, delay) {
    if (delay === void 0) delay = 0;
    return lift_1.operate(function(source, subscriber) {
        source.subscribe(new OperatorSubscriber_1.OperatorSubscriber(subscriber, function(value) {
            return subscriber.add(scheduler.schedule(function() {
                return subscriber.next(value);
            }, delay));
        }, function() {
            return subscriber.add(scheduler.schedule(function() {
                return subscriber.complete();
            }, delay));
        }, function(err) {
            return subscriber.add(scheduler.schedule(function() {
                return subscriber.error(err);
            }, delay));
        }));
    });
}
exports.observeOn = observeOn;

},{"../util/lift":"6c48g","./OperatorSubscriber":"4ZP4f"}],"6ogDY":[function(require,module,exports) {
"use strict";
var __read = this && this.__read || function(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while((n === void 0 || (n--) > 0) && !(r = i.next()).done)ar.push(r.value);
    } catch (error) {
        e = {
            error: error
        };
    } finally{
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        } finally{
            if (e) throw e.error;
        }
    }
    return ar;
};
var __spreadArray = this && this.__spreadArray || function(to, from) {
    for(var i = 0, il = from.length, j = to.length; i < il; i++, j++)to[j] = from[i];
    return to;
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.onErrorResumeNext = void 0;
var lift_1 = require("../util/lift");
var from_1 = require("../observable/from");
var argsOrArgArray_1 = require("../util/argsOrArgArray");
var OperatorSubscriber_1 = require("./OperatorSubscriber");
var noop_1 = require("../util/noop");
function onErrorResumeNext() {
    var sources = [];
    for(var _i = 0; _i < arguments.length; _i++)sources[_i] = arguments[_i];
    var nextSources = argsOrArgArray_1.argsOrArgArray(sources);
    return lift_1.operate(function(source, subscriber) {
        var remaining = __spreadArray([
            source
        ], __read(nextSources));
        var subscribeNext = function() {
            if (!subscriber.closed) {
                if (remaining.length > 0) {
                    var nextSource = void 0;
                    try {
                        nextSource = from_1.innerFrom(remaining.shift());
                    } catch (err) {
                        subscribeNext();
                        return;
                    }
                    var innerSub = new OperatorSubscriber_1.OperatorSubscriber(subscriber, undefined, noop_1.noop, noop_1.noop);
                    subscriber.add(nextSource.subscribe(innerSub));
                    innerSub.add(subscribeNext);
                } else subscriber.complete();
            }
        };
        subscribeNext();
    });
}
exports.onErrorResumeNext = onErrorResumeNext;

},{"../util/lift":"6c48g","../observable/from":"1hp4r","../util/argsOrArgArray":"35t9S","./OperatorSubscriber":"4ZP4f","../util/noop":"4pemK"}],"6ffxf":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.pairwise = void 0;
var lift_1 = require("../util/lift");
var OperatorSubscriber_1 = require("./OperatorSubscriber");
function pairwise() {
    return lift_1.operate(function(source, subscriber) {
        var prev;
        var hasPrev = false;
        source.subscribe(new OperatorSubscriber_1.OperatorSubscriber(subscriber, function(value) {
            var p = prev;
            prev = value;
            hasPrev && subscriber.next([
                p,
                value
            ]);
            hasPrev = true;
        }));
    });
}
exports.pairwise = pairwise;

},{"../util/lift":"6c48g","./OperatorSubscriber":"4ZP4f"}],"3KzTd":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.partition = void 0;
var not_1 = require("../util/not");
var filter_1 = require("./filter");
function partition(predicate, thisArg) {
    return function(source) {
        return [
            filter_1.filter(predicate, thisArg)(source),
            filter_1.filter(not_1.not(predicate, thisArg))(source)
        ];
    };
}
exports.partition = partition;

},{"../util/not":"3tfCu","./filter":"4yIda"}],"3tfCu":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.not = void 0;
function not(pred, thisArg) {
    return function(value, index) {
        return !pred.call(thisArg, value, index);
    };
}
exports.not = not;

},{}],"4Vo0P":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.pluck = void 0;
var map_1 = require("./map");
function pluck() {
    var properties = [];
    for(var _i = 0; _i < arguments.length; _i++)properties[_i] = arguments[_i];
    var length = properties.length;
    if (length === 0) throw new Error('list of properties cannot be empty.');
    return map_1.map(function(x) {
        var currentProp = x;
        for(var i = 0; i < length; i++){
            var p = currentProp === null || currentProp === void 0 ? void 0 : currentProp[properties[i]];
            if (typeof p !== 'undefined') currentProp = p;
            else return undefined;
        }
        return currentProp;
    });
}
exports.pluck = pluck;

},{"./map":"4S1RX"}],"1AzrM":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.publish = void 0;
var Subject_1 = require("../Subject");
var multicast_1 = require("./multicast");
var connect_1 = require("./connect");
function publish(selector) {
    return selector ? function(source) {
        return connect_1.connect(selector)(source);
    } : function(source) {
        return multicast_1.multicast(new Subject_1.Subject())(source);
    };
}
exports.publish = publish;

},{"../Subject":"4Jzfy","./multicast":"3hDJh","./connect":"4POwy"}],"4FZTx":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.publishBehavior = void 0;
var BehaviorSubject_1 = require("../BehaviorSubject");
var ConnectableObservable_1 = require("../observable/ConnectableObservable");
function publishBehavior(initialValue) {
    return function(source) {
        var subject = new BehaviorSubject_1.BehaviorSubject(initialValue);
        return new ConnectableObservable_1.ConnectableObservable(source, function() {
            return subject;
        });
    };
}
exports.publishBehavior = publishBehavior;

},{"../BehaviorSubject":"RuZpa","../observable/ConnectableObservable":"1jZA0"}],"RuZpa":[function(require,module,exports) {
"use strict";
var __extends = this && this.__extends || function() {
    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || ({
            __proto__: []
        }) instanceof Array && function(d1, b1) {
            d1.__proto__ = b1;
        } || function(d1, b1) {
            for(var p in b1)if (Object.prototype.hasOwnProperty.call(b1, p)) d1[p] = b1[p];
        };
        return extendStatics(d, b);
    };
    return function(d, b) {
        if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.BehaviorSubject = void 0;
var Subject_1 = require("./Subject");
var BehaviorSubject1 = function(_super) {
    __extends(BehaviorSubject2, _super);
    function BehaviorSubject2(_value) {
        var _this = _super.call(this) || this;
        _this._value = _value;
        return _this;
    }
    Object.defineProperty(BehaviorSubject2.prototype, "value", {
        get: function() {
            return this.getValue();
        },
        enumerable: false,
        configurable: true
    });
    BehaviorSubject2.prototype._subscribe = function(subscriber) {
        var subscription = _super.prototype._subscribe.call(this, subscriber);
        !subscription.closed && subscriber.next(this._value);
        return subscription;
    };
    BehaviorSubject2.prototype.getValue = function() {
        var _a = this, hasError = _a.hasError, thrownError = _a.thrownError, _value = _a._value;
        if (hasError) throw thrownError;
        this._throwIfClosed();
        return _value;
    };
    BehaviorSubject2.prototype.next = function(value) {
        _super.prototype.next.call(this, this._value = value);
    };
    return BehaviorSubject2;
}(Subject_1.Subject);
exports.BehaviorSubject = BehaviorSubject1;

},{"./Subject":"4Jzfy"}],"2qWU3":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.publishLast = void 0;
var AsyncSubject_1 = require("../AsyncSubject");
var ConnectableObservable_1 = require("../observable/ConnectableObservable");
function publishLast() {
    return function(source) {
        var subject = new AsyncSubject_1.AsyncSubject();
        return new ConnectableObservable_1.ConnectableObservable(source, function() {
            return subject;
        });
    };
}
exports.publishLast = publishLast;

},{"../AsyncSubject":"3ddHc","../observable/ConnectableObservable":"1jZA0"}],"3ddHc":[function(require,module,exports) {
"use strict";
var __extends = this && this.__extends || function() {
    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || ({
            __proto__: []
        }) instanceof Array && function(d1, b1) {
            d1.__proto__ = b1;
        } || function(d1, b1) {
            for(var p in b1)if (Object.prototype.hasOwnProperty.call(b1, p)) d1[p] = b1[p];
        };
        return extendStatics(d, b);
    };
    return function(d, b) {
        if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.AsyncSubject = void 0;
var Subject_1 = require("./Subject");
var AsyncSubject1 = function(_super) {
    __extends(AsyncSubject2, _super);
    function AsyncSubject2() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._value = null;
        _this._hasValue = false;
        _this._isComplete = false;
        return _this;
    }
    AsyncSubject2.prototype._checkFinalizedStatuses = function(subscriber) {
        var _a = this, hasError = _a.hasError, _hasValue = _a._hasValue, _value = _a._value, thrownError = _a.thrownError, isStopped = _a.isStopped;
        if (hasError) subscriber.error(thrownError);
        else if (isStopped) {
            _hasValue && subscriber.next(_value);
            subscriber.complete();
        }
    };
    AsyncSubject2.prototype.next = function(value) {
        if (!this.isStopped) {
            this._value = value;
            this._hasValue = true;
        }
    };
    AsyncSubject2.prototype.complete = function() {
        var _a = this, _hasValue = _a._hasValue, _value = _a._value, _isComplete = _a._isComplete;
        if (!_isComplete) {
            this._isComplete = true;
            _hasValue && _super.prototype.next.call(this, _value);
            _super.prototype.complete.call(this);
        }
    };
    return AsyncSubject2;
}(Subject_1.Subject);
exports.AsyncSubject = AsyncSubject1;

},{"./Subject":"4Jzfy"}],"4LRTw":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.publishReplay = void 0;
var ReplaySubject_1 = require("../ReplaySubject");
var multicast_1 = require("./multicast");
var isFunction_1 = require("../util/isFunction");
function publishReplay(bufferSize, windowTime, selectorOrScheduler, timestampProvider) {
    if (selectorOrScheduler && !isFunction_1.isFunction(selectorOrScheduler)) timestampProvider = selectorOrScheduler;
    var selector = isFunction_1.isFunction(selectorOrScheduler) ? selectorOrScheduler : undefined;
    return function(source) {
        return multicast_1.multicast(new ReplaySubject_1.ReplaySubject(bufferSize, windowTime, timestampProvider), selector)(source);
    };
}
exports.publishReplay = publishReplay;

},{"../ReplaySubject":"2n1J1","./multicast":"3hDJh","../util/isFunction":"5QZmD"}],"2n1J1":[function(require,module,exports) {
"use strict";
var __extends = this && this.__extends || function() {
    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || ({
            __proto__: []
        }) instanceof Array && function(d1, b1) {
            d1.__proto__ = b1;
        } || function(d1, b1) {
            for(var p in b1)if (Object.prototype.hasOwnProperty.call(b1, p)) d1[p] = b1[p];
        };
        return extendStatics(d, b);
    };
    return function(d, b) {
        if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ReplaySubject = void 0;
var Subject_1 = require("./Subject");
var dateTimestampProvider_1 = require("./scheduler/dateTimestampProvider");
var ReplaySubject1 = function(_super) {
    __extends(ReplaySubject2, _super);
    function ReplaySubject2(_bufferSize, _windowTime, _timestampProvider) {
        if (_bufferSize === void 0) _bufferSize = Infinity;
        if (_windowTime === void 0) _windowTime = Infinity;
        if (_timestampProvider === void 0) _timestampProvider = dateTimestampProvider_1.dateTimestampProvider;
        var _this = _super.call(this) || this;
        _this._bufferSize = _bufferSize;
        _this._windowTime = _windowTime;
        _this._timestampProvider = _timestampProvider;
        _this._buffer = [];
        _this._infiniteTimeWindow = true;
        _this._infiniteTimeWindow = _windowTime === Infinity;
        _this._bufferSize = Math.max(1, _bufferSize);
        _this._windowTime = Math.max(1, _windowTime);
        return _this;
    }
    ReplaySubject2.prototype.next = function(value) {
        var _a = this, isStopped = _a.isStopped, _buffer = _a._buffer, _infiniteTimeWindow = _a._infiniteTimeWindow, _timestampProvider = _a._timestampProvider, _windowTime = _a._windowTime;
        if (!isStopped) {
            _buffer.push(value);
            !_infiniteTimeWindow && _buffer.push(_timestampProvider.now() + _windowTime);
        }
        this._trimBuffer();
        _super.prototype.next.call(this, value);
    };
    ReplaySubject2.prototype._subscribe = function(subscriber) {
        this._throwIfClosed();
        this._trimBuffer();
        var subscription = this._innerSubscribe(subscriber);
        var _a = this, _infiniteTimeWindow = _a._infiniteTimeWindow, _buffer = _a._buffer;
        var copy = _buffer.slice();
        for(var i = 0; i < copy.length && !subscriber.closed; i += _infiniteTimeWindow ? 1 : 2)subscriber.next(copy[i]);
        this._checkFinalizedStatuses(subscriber);
        return subscription;
    };
    ReplaySubject2.prototype._trimBuffer = function() {
        var _a = this, _bufferSize = _a._bufferSize, _timestampProvider = _a._timestampProvider, _buffer = _a._buffer, _infiniteTimeWindow = _a._infiniteTimeWindow;
        var adjustedBufferSize = (_infiniteTimeWindow ? 1 : 2) * _bufferSize;
        _bufferSize < Infinity && adjustedBufferSize < _buffer.length && _buffer.splice(0, _buffer.length - adjustedBufferSize);
        if (!_infiniteTimeWindow) {
            var now = _timestampProvider.now();
            var last = 0;
            for(var i = 1; i < _buffer.length && _buffer[i] <= now; i += 2)last = i;
            last && _buffer.splice(0, last + 1);
        }
    };
    return ReplaySubject2;
}(Subject_1.Subject);
exports.ReplaySubject = ReplaySubject1;

},{"./Subject":"4Jzfy","./scheduler/dateTimestampProvider":"4SBfI"}],"52wAs":[function(require,module,exports) {
"use strict";
var __read = this && this.__read || function(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while((n === void 0 || (n--) > 0) && !(r = i.next()).done)ar.push(r.value);
    } catch (error) {
        e = {
            error: error
        };
    } finally{
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        } finally{
            if (e) throw e.error;
        }
    }
    return ar;
};
var __spreadArray = this && this.__spreadArray || function(to, from) {
    for(var i = 0, il = from.length, j = to.length; i < il; i++, j++)to[j] = from[i];
    return to;
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.race = void 0;
var argsOrArgArray_1 = require("../util/argsOrArgArray");
var raceWith_1 = require("./raceWith");
function race() {
    var args = [];
    for(var _i = 0; _i < arguments.length; _i++)args[_i] = arguments[_i];
    return raceWith_1.raceWith.apply(void 0, __spreadArray([], __read(argsOrArgArray_1.argsOrArgArray(args))));
}
exports.race = race;

},{"../util/argsOrArgArray":"35t9S","./raceWith":"794NF"}],"794NF":[function(require,module,exports) {
"use strict";
var __read = this && this.__read || function(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while((n === void 0 || (n--) > 0) && !(r = i.next()).done)ar.push(r.value);
    } catch (error) {
        e = {
            error: error
        };
    } finally{
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        } finally{
            if (e) throw e.error;
        }
    }
    return ar;
};
var __spreadArray = this && this.__spreadArray || function(to, from) {
    for(var i = 0, il = from.length, j = to.length; i < il; i++, j++)to[j] = from[i];
    return to;
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.raceWith = void 0;
var race_1 = require("../observable/race");
var lift_1 = require("../util/lift");
var identity_1 = require("../util/identity");
function raceWith() {
    var otherSources = [];
    for(var _i = 0; _i < arguments.length; _i++)otherSources[_i] = arguments[_i];
    return !otherSources.length ? identity_1.identity : lift_1.operate(function(source, subscriber) {
        race_1.raceInit(__spreadArray([
            source
        ], __read(otherSources)))(subscriber);
    });
}
exports.raceWith = raceWith;

},{"../observable/race":"7JtX4","../util/lift":"6c48g","../util/identity":"2JjYu"}],"7JtX4":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.raceInit = exports.race = void 0;
var Observable_1 = require("../Observable");
var from_1 = require("./from");
var argsOrArgArray_1 = require("../util/argsOrArgArray");
var OperatorSubscriber_1 = require("../operators/OperatorSubscriber");
function race() {
    var sources = [];
    for(var _i = 0; _i < arguments.length; _i++)sources[_i] = arguments[_i];
    sources = argsOrArgArray_1.argsOrArgArray(sources);
    return sources.length === 1 ? from_1.innerFrom(sources[0]) : new Observable_1.Observable(raceInit(sources));
}
exports.race = race;
function raceInit(sources) {
    return function(subscriber) {
        var subscriptions = [];
        var _loop_1 = function(i) {
            subscriptions.push(from_1.innerFrom(sources[i]).subscribe(new OperatorSubscriber_1.OperatorSubscriber(subscriber, function(value) {
                if (subscriptions) {
                    for(var s = 0; s < subscriptions.length; s++)s !== i && subscriptions[s].unsubscribe();
                    subscriptions = null;
                }
                subscriber.next(value);
            })));
        };
        for(var i = 0; subscriptions && !subscriber.closed && i < sources.length; i++)_loop_1(i);
    };
}
exports.raceInit = raceInit;

},{"../Observable":"r7DVo","./from":"1hp4r","../util/argsOrArgArray":"35t9S","../operators/OperatorSubscriber":"4ZP4f"}],"5rOA7":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.repeat = void 0;
var empty_1 = require("../observable/empty");
var lift_1 = require("../util/lift");
var OperatorSubscriber_1 = require("./OperatorSubscriber");
function repeat(count) {
    if (count === void 0) count = Infinity;
    return count <= 0 ? function() {
        return empty_1.EMPTY;
    } : lift_1.operate(function(source, subscriber) {
        var soFar = 0;
        var innerSub;
        var subscribeForRepeat = function() {
            var syncUnsub = false;
            innerSub = source.subscribe(new OperatorSubscriber_1.OperatorSubscriber(subscriber, undefined, function() {
                if ((++soFar) < count) {
                    if (innerSub) {
                        innerSub.unsubscribe();
                        innerSub = null;
                        subscribeForRepeat();
                    } else syncUnsub = true;
                } else subscriber.complete();
            }));
            if (syncUnsub) {
                innerSub.unsubscribe();
                innerSub = null;
                subscribeForRepeat();
            }
        };
        subscribeForRepeat();
    });
}
exports.repeat = repeat;

},{"../observable/empty":"cBi4y","../util/lift":"6c48g","./OperatorSubscriber":"4ZP4f"}],"6IZAR":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.repeatWhen = void 0;
var Subject_1 = require("../Subject");
var lift_1 = require("../util/lift");
var OperatorSubscriber_1 = require("./OperatorSubscriber");
function repeatWhen(notifier) {
    return lift_1.operate(function(source, subscriber) {
        var innerSub;
        var syncResub = false;
        var completions$;
        var isNotifierComplete = false;
        var isMainComplete = false;
        var checkComplete = function() {
            return isMainComplete && isNotifierComplete && (subscriber.complete(), true);
        };
        var getCompletionSubject = function() {
            if (!completions$) {
                completions$ = new Subject_1.Subject();
                notifier(completions$).subscribe(new OperatorSubscriber_1.OperatorSubscriber(subscriber, function() {
                    if (innerSub) subscribeForRepeatWhen();
                    else syncResub = true;
                }, function() {
                    isNotifierComplete = true;
                    checkComplete();
                }));
            }
            return completions$;
        };
        var subscribeForRepeatWhen = function() {
            isMainComplete = false;
            innerSub = source.subscribe(new OperatorSubscriber_1.OperatorSubscriber(subscriber, undefined, function() {
                isMainComplete = true;
                !checkComplete() && getCompletionSubject().next();
            }));
            if (syncResub) {
                innerSub.unsubscribe();
                innerSub = null;
                syncResub = false;
                subscribeForRepeatWhen();
            }
        };
        subscribeForRepeatWhen();
    });
}
exports.repeatWhen = repeatWhen;

},{"../Subject":"4Jzfy","../util/lift":"6c48g","./OperatorSubscriber":"4ZP4f"}],"1vrUd":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.retry = void 0;
var lift_1 = require("../util/lift");
var OperatorSubscriber_1 = require("./OperatorSubscriber");
var identity_1 = require("../util/identity");
function retry(configOrCount) {
    if (configOrCount === void 0) configOrCount = Infinity;
    var config;
    if (configOrCount && typeof configOrCount === 'object') config = configOrCount;
    else config = {
        count: configOrCount
    };
    var count = config.count, _a = config.resetOnSuccess, resetOnSuccess = _a === void 0 ? false : _a;
    return count <= 0 ? identity_1.identity : lift_1.operate(function(source, subscriber) {
        var soFar = 0;
        var innerSub;
        var subscribeForRetry = function() {
            var syncUnsub = false;
            innerSub = source.subscribe(new OperatorSubscriber_1.OperatorSubscriber(subscriber, function(value) {
                if (resetOnSuccess) soFar = 0;
                subscriber.next(value);
            }, undefined, function(err) {
                if ((soFar++) < count) {
                    if (innerSub) {
                        innerSub.unsubscribe();
                        innerSub = null;
                        subscribeForRetry();
                    } else syncUnsub = true;
                } else subscriber.error(err);
            }));
            if (syncUnsub) {
                innerSub.unsubscribe();
                innerSub = null;
                subscribeForRetry();
            }
        };
        subscribeForRetry();
    });
}
exports.retry = retry;

},{"../util/lift":"6c48g","./OperatorSubscriber":"4ZP4f","../util/identity":"2JjYu"}],"4ywmB":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.retryWhen = void 0;
var Subject_1 = require("../Subject");
var lift_1 = require("../util/lift");
var OperatorSubscriber_1 = require("./OperatorSubscriber");
function retryWhen(notifier) {
    return lift_1.operate(function(source, subscriber) {
        var innerSub;
        var syncResub = false;
        var errors$;
        var subscribeForRetryWhen = function() {
            innerSub = source.subscribe(new OperatorSubscriber_1.OperatorSubscriber(subscriber, undefined, undefined, function(err) {
                if (!errors$) {
                    errors$ = new Subject_1.Subject();
                    notifier(errors$).subscribe(new OperatorSubscriber_1.OperatorSubscriber(subscriber, function() {
                        return innerSub ? subscribeForRetryWhen() : syncResub = true;
                    }));
                }
                if (errors$) errors$.next(err);
            }));
            if (syncResub) {
                innerSub.unsubscribe();
                innerSub = null;
                syncResub = false;
                subscribeForRetryWhen();
            }
        };
        subscribeForRetryWhen();
    });
}
exports.retryWhen = retryWhen;

},{"../Subject":"4Jzfy","../util/lift":"6c48g","./OperatorSubscriber":"4ZP4f"}],"1sFQy":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.sample = void 0;
var lift_1 = require("../util/lift");
var noop_1 = require("../util/noop");
var OperatorSubscriber_1 = require("./OperatorSubscriber");
function sample(notifier) {
    return lift_1.operate(function(source, subscriber) {
        var hasValue = false;
        var lastValue = null;
        source.subscribe(new OperatorSubscriber_1.OperatorSubscriber(subscriber, function(value) {
            hasValue = true;
            lastValue = value;
        }));
        var emit = function() {
            if (hasValue) {
                hasValue = false;
                var value = lastValue;
                lastValue = null;
                subscriber.next(value);
            }
        };
        notifier.subscribe(new OperatorSubscriber_1.OperatorSubscriber(subscriber, emit, noop_1.noop));
    });
}
exports.sample = sample;

},{"../util/lift":"6c48g","../util/noop":"4pemK","./OperatorSubscriber":"4ZP4f"}],"B2Zru":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.sampleTime = void 0;
var async_1 = require("../scheduler/async");
var sample_1 = require("./sample");
var interval_1 = require("../observable/interval");
function sampleTime(period, scheduler) {
    if (scheduler === void 0) scheduler = async_1.asyncScheduler;
    return sample_1.sample(interval_1.interval(period, scheduler));
}
exports.sampleTime = sampleTime;

},{"../scheduler/async":"2KqRM","./sample":"1sFQy","../observable/interval":"3q4Tq"}],"3q4Tq":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.interval = void 0;
var async_1 = require("../scheduler/async");
var timer_1 = require("./timer");
function interval(period, scheduler) {
    if (period === void 0) period = 0;
    if (scheduler === void 0) scheduler = async_1.asyncScheduler;
    if (period < 0) period = 0;
    return timer_1.timer(period, period, scheduler);
}
exports.interval = interval;

},{"../scheduler/async":"2KqRM","./timer":"6ECLG"}],"3L21j":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.scan = void 0;
var lift_1 = require("../util/lift");
var scanInternals_1 = require("./scanInternals");
function scan(accumulator, seed) {
    return lift_1.operate(scanInternals_1.scanInternals(accumulator, seed, arguments.length >= 2, true));
}
exports.scan = scan;

},{"../util/lift":"6c48g","./scanInternals":"4wR68"}],"4CSSF":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.sequenceEqual = void 0;
var lift_1 = require("../util/lift");
var OperatorSubscriber_1 = require("./OperatorSubscriber");
function sequenceEqual(compareTo, comparator) {
    if (comparator === void 0) comparator = function(a, b) {
        return a === b;
    };
    return lift_1.operate(function(source, subscriber) {
        var aState = createState();
        var bState = createState();
        var emit = function(isEqual) {
            subscriber.next(isEqual);
            subscriber.complete();
        };
        var createSubscriber = function(selfState, otherState) {
            var sequenceEqualSubscriber = new OperatorSubscriber_1.OperatorSubscriber(subscriber, function(a) {
                var buffer = otherState.buffer, complete = otherState.complete;
                if (buffer.length === 0) complete ? emit(false) : selfState.buffer.push(a);
                else !comparator(a, buffer.shift()) && emit(false);
            }, function() {
                selfState.complete = true;
                var complete = otherState.complete, buffer = otherState.buffer;
                complete && emit(buffer.length === 0);
                sequenceEqualSubscriber === null || sequenceEqualSubscriber === void 0 || sequenceEqualSubscriber.unsubscribe();
            });
            return sequenceEqualSubscriber;
        };
        source.subscribe(createSubscriber(aState, bState));
        compareTo.subscribe(createSubscriber(bState, aState));
    });
}
exports.sequenceEqual = sequenceEqual;
function createState() {
    return {
        buffer: [],
        complete: false
    };
}

},{"../util/lift":"6c48g","./OperatorSubscriber":"4ZP4f"}],"2bB9K":[function(require,module,exports) {
"use strict";
var __read = this && this.__read || function(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while((n === void 0 || (n--) > 0) && !(r = i.next()).done)ar.push(r.value);
    } catch (error) {
        e = {
            error: error
        };
    } finally{
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        } finally{
            if (e) throw e.error;
        }
    }
    return ar;
};
var __spreadArray = this && this.__spreadArray || function(to, from) {
    for(var i = 0, il = from.length, j = to.length; i < il; i++, j++)to[j] = from[i];
    return to;
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.share = void 0;
var from_1 = require("../observable/from");
var take_1 = require("../operators/take");
var Subject_1 = require("../Subject");
var Subscriber_1 = require("../Subscriber");
var lift_1 = require("../util/lift");
function share(options) {
    if (options === void 0) options = {
    };
    var _a = options.connector, connector = _a === void 0 ? function() {
        return new Subject_1.Subject();
    } : _a, _b = options.resetOnError, resetOnError = _b === void 0 ? true : _b, _c = options.resetOnComplete, resetOnComplete = _c === void 0 ? true : _c, _d = options.resetOnRefCountZero, resetOnRefCountZero = _d === void 0 ? true : _d;
    return function(wrapperSource) {
        var connection = null;
        var resetConnection = null;
        var subject = null;
        var refCount = 0;
        var hasCompleted = false;
        var hasErrored = false;
        var cancelReset = function() {
            resetConnection === null || resetConnection === void 0 || resetConnection.unsubscribe();
            resetConnection = null;
        };
        var reset = function() {
            cancelReset();
            connection = subject = null;
            hasCompleted = hasErrored = false;
        };
        var resetAndUnsubscribe = function() {
            var conn = connection;
            reset();
            conn === null || conn === void 0 || conn.unsubscribe();
        };
        return lift_1.operate(function(source, subscriber) {
            refCount++;
            if (!hasErrored && !hasCompleted) cancelReset();
            var dest = subject = subject !== null && subject !== void 0 ? subject : connector();
            subscriber.add(function() {
                refCount--;
                if (refCount === 0 && !hasErrored && !hasCompleted) resetConnection = handleReset(resetAndUnsubscribe, resetOnRefCountZero);
            });
            dest.subscribe(subscriber);
            if (!connection) {
                connection = new Subscriber_1.SafeSubscriber({
                    next: function(value) {
                        return dest.next(value);
                    },
                    error: function(err) {
                        hasErrored = true;
                        cancelReset();
                        resetConnection = handleReset(reset, resetOnError, err);
                        dest.error(err);
                    },
                    complete: function() {
                        hasCompleted = true;
                        cancelReset();
                        resetConnection = handleReset(reset, resetOnComplete);
                        dest.complete();
                    }
                });
                from_1.from(source).subscribe(connection);
            }
        })(wrapperSource);
    };
}
exports.share = share;
function handleReset(reset, on) {
    var args = [];
    for(var _i = 2; _i < arguments.length; _i++)args[_i - 2] = arguments[_i];
    if (on === true) {
        reset();
        return null;
    }
    if (on === false) return null;
    return on.apply(void 0, __spreadArray([], __read(args))).pipe(take_1.take(1)).subscribe(function() {
        return reset();
    });
}

},{"../observable/from":"1hp4r","../operators/take":"4xhSB","../Subject":"4Jzfy","../Subscriber":"5hEmD","../util/lift":"6c48g"}],"28ozr":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.shareReplay = void 0;
var ReplaySubject_1 = require("../ReplaySubject");
var share_1 = require("./share");
function shareReplay(configOrBufferSize, windowTime, scheduler) {
    var _a, _b;
    var bufferSize;
    var refCount = false;
    if (configOrBufferSize && typeof configOrBufferSize === 'object') {
        bufferSize = (_a = configOrBufferSize.bufferSize) !== null && _a !== void 0 ? _a : Infinity;
        windowTime = (_b = configOrBufferSize.windowTime) !== null && _b !== void 0 ? _b : Infinity;
        refCount = !!configOrBufferSize.refCount;
        scheduler = configOrBufferSize.scheduler;
    } else bufferSize = configOrBufferSize !== null && configOrBufferSize !== void 0 ? configOrBufferSize : Infinity;
    return share_1.share({
        connector: function() {
            return new ReplaySubject_1.ReplaySubject(bufferSize, windowTime, scheduler);
        },
        resetOnError: true,
        resetOnComplete: false,
        resetOnRefCountZero: refCount
    });
}
exports.shareReplay = shareReplay;

},{"../ReplaySubject":"2n1J1","./share":"2bB9K"}],"1xl9I":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.single = void 0;
var EmptyError_1 = require("../util/EmptyError");
var SequenceError_1 = require("../util/SequenceError");
var NotFoundError_1 = require("../util/NotFoundError");
var lift_1 = require("../util/lift");
var OperatorSubscriber_1 = require("./OperatorSubscriber");
function single(predicate) {
    return lift_1.operate(function(source, subscriber) {
        var hasValue = false;
        var singleValue;
        var seenValue = false;
        var index = 0;
        source.subscribe(new OperatorSubscriber_1.OperatorSubscriber(subscriber, function(value) {
            seenValue = true;
            if (!predicate || predicate(value, index++, source)) {
                hasValue && subscriber.error(new SequenceError_1.SequenceError('Too many matching values'));
                hasValue = true;
                singleValue = value;
            }
        }, function() {
            if (hasValue) {
                subscriber.next(singleValue);
                subscriber.complete();
            } else subscriber.error(seenValue ? new NotFoundError_1.NotFoundError('No matching values') : new EmptyError_1.EmptyError());
        }));
    });
}
exports.single = single;

},{"../util/EmptyError":"2zMaW","../util/SequenceError":"1Gnlk","../util/NotFoundError":"3Ds1G","../util/lift":"6c48g","./OperatorSubscriber":"4ZP4f"}],"1Gnlk":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.SequenceError = void 0;
var createErrorClass_1 = require("./createErrorClass");
exports.SequenceError = createErrorClass_1.createErrorClass(function(_super) {
    return function SequenceErrorImpl(message) {
        _super(this);
        this.name = 'SequenceError';
        this.message = message;
    };
});

},{"./createErrorClass":"6FSlj"}],"3Ds1G":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.NotFoundError = void 0;
var createErrorClass_1 = require("./createErrorClass");
exports.NotFoundError = createErrorClass_1.createErrorClass(function(_super) {
    return function NotFoundErrorImpl(message) {
        _super(this);
        this.name = 'NotFoundError';
        this.message = message;
    };
});

},{"./createErrorClass":"6FSlj"}],"2x8BF":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.skip = void 0;
var filter_1 = require("./filter");
function skip(count) {
    return filter_1.filter(function(_, index) {
        return count <= index;
    });
}
exports.skip = skip;

},{"./filter":"4yIda"}],"6ESoX":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.skipLast = void 0;
var identity_1 = require("../util/identity");
var lift_1 = require("../util/lift");
var OperatorSubscriber_1 = require("./OperatorSubscriber");
function skipLast(skipCount) {
    return skipCount <= 0 ? identity_1.identity : lift_1.operate(function(source, subscriber) {
        var ring = new Array(skipCount);
        var seen = 0;
        source.subscribe(new OperatorSubscriber_1.OperatorSubscriber(subscriber, function(value) {
            var valueIndex = seen++;
            if (valueIndex < skipCount) ring[valueIndex] = value;
            else {
                var index = valueIndex % skipCount;
                var oldValue = ring[index];
                ring[index] = value;
                subscriber.next(oldValue);
            }
        }));
        return function() {
            ring = null;
        };
    });
}
exports.skipLast = skipLast;

},{"../util/identity":"2JjYu","../util/lift":"6c48g","./OperatorSubscriber":"4ZP4f"}],"1X6Qu":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.skipUntil = void 0;
var lift_1 = require("../util/lift");
var OperatorSubscriber_1 = require("./OperatorSubscriber");
var from_1 = require("../observable/from");
var noop_1 = require("../util/noop");
function skipUntil(notifier) {
    return lift_1.operate(function(source, subscriber) {
        var taking = false;
        var skipSubscriber = new OperatorSubscriber_1.OperatorSubscriber(subscriber, function() {
            skipSubscriber === null || skipSubscriber === void 0 || skipSubscriber.unsubscribe();
            taking = true;
        }, noop_1.noop);
        from_1.innerFrom(notifier).subscribe(skipSubscriber);
        source.subscribe(new OperatorSubscriber_1.OperatorSubscriber(subscriber, function(value) {
            return taking && subscriber.next(value);
        }));
    });
}
exports.skipUntil = skipUntil;

},{"../util/lift":"6c48g","./OperatorSubscriber":"4ZP4f","../observable/from":"1hp4r","../util/noop":"4pemK"}],"4gBc2":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.skipWhile = void 0;
var lift_1 = require("../util/lift");
var OperatorSubscriber_1 = require("./OperatorSubscriber");
function skipWhile(predicate) {
    return lift_1.operate(function(source, subscriber) {
        var taking = false;
        var index = 0;
        source.subscribe(new OperatorSubscriber_1.OperatorSubscriber(subscriber, function(value) {
            return (taking || (taking = !predicate(value, index++))) && subscriber.next(value);
        }));
    });
}
exports.skipWhile = skipWhile;

},{"../util/lift":"6c48g","./OperatorSubscriber":"4ZP4f"}],"5faWq":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.startWith = void 0;
var concat_1 = require("../observable/concat");
var args_1 = require("../util/args");
var lift_1 = require("../util/lift");
function startWith() {
    var values = [];
    for(var _i = 0; _i < arguments.length; _i++)values[_i] = arguments[_i];
    var scheduler = args_1.popScheduler(values);
    return lift_1.operate(function(source, subscriber) {
        (scheduler ? concat_1.concat(values, source, scheduler) : concat_1.concat(values, source)).subscribe(subscriber);
    });
}
exports.startWith = startWith;

},{"../observable/concat":"3cyRs","../util/args":"18qpb","../util/lift":"6c48g"}],"37Jrh":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.subscribeOn = void 0;
var lift_1 = require("../util/lift");
function subscribeOn(scheduler, delay) {
    if (delay === void 0) delay = 0;
    return lift_1.operate(function(source, subscriber) {
        subscriber.add(scheduler.schedule(function() {
            return source.subscribe(subscriber);
        }, delay));
    });
}
exports.subscribeOn = subscribeOn;

},{"../util/lift":"6c48g"}],"7um3U":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.switchAll = void 0;
var switchMap_1 = require("./switchMap");
var identity_1 = require("../util/identity");
function switchAll() {
    return switchMap_1.switchMap(identity_1.identity);
}
exports.switchAll = switchAll;

},{"./switchMap":"51rK5","../util/identity":"2JjYu"}],"51rK5":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.switchMap = void 0;
var from_1 = require("../observable/from");
var lift_1 = require("../util/lift");
var OperatorSubscriber_1 = require("./OperatorSubscriber");
function switchMap(project, resultSelector) {
    return lift_1.operate(function(source, subscriber) {
        var innerSubscriber = null;
        var index = 0;
        var isComplete = false;
        var checkComplete = function() {
            return isComplete && !innerSubscriber && subscriber.complete();
        };
        source.subscribe(new OperatorSubscriber_1.OperatorSubscriber(subscriber, function(value) {
            innerSubscriber === null || innerSubscriber === void 0 || innerSubscriber.unsubscribe();
            var innerIndex = 0;
            var outerIndex = index++;
            from_1.innerFrom(project(value, outerIndex)).subscribe(innerSubscriber = new OperatorSubscriber_1.OperatorSubscriber(subscriber, function(innerValue) {
                return subscriber.next(resultSelector ? resultSelector(value, innerValue, outerIndex, innerIndex++) : innerValue);
            }, function() {
                innerSubscriber = null;
                checkComplete();
            }));
        }, function() {
            isComplete = true;
            checkComplete();
        }));
    });
}
exports.switchMap = switchMap;

},{"../observable/from":"1hp4r","../util/lift":"6c48g","./OperatorSubscriber":"4ZP4f"}],"7iNcz":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.switchMapTo = void 0;
var switchMap_1 = require("./switchMap");
var isFunction_1 = require("../util/isFunction");
function switchMapTo(innerObservable, resultSelector) {
    return isFunction_1.isFunction(resultSelector) ? switchMap_1.switchMap(function() {
        return innerObservable;
    }, resultSelector) : switchMap_1.switchMap(function() {
        return innerObservable;
    });
}
exports.switchMapTo = switchMapTo;

},{"./switchMap":"51rK5","../util/isFunction":"5QZmD"}],"8WBQY":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.switchScan = void 0;
var switchMap_1 = require("./switchMap");
var lift_1 = require("../util/lift");
function switchScan(accumulator, seed) {
    return lift_1.operate(function(source, subscriber) {
        var state = seed;
        switchMap_1.switchMap(function(value, index) {
            return accumulator(state, value, index);
        }, function(_, innerValue) {
            return state = innerValue, innerValue;
        })(source).subscribe(subscriber);
        return function() {
            state = null;
        };
    });
}
exports.switchScan = switchScan;

},{"./switchMap":"51rK5","../util/lift":"6c48g"}],"4Le8d":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.takeUntil = void 0;
var lift_1 = require("../util/lift");
var OperatorSubscriber_1 = require("./OperatorSubscriber");
var from_1 = require("../observable/from");
var noop_1 = require("../util/noop");
function takeUntil(notifier) {
    return lift_1.operate(function(source, subscriber) {
        from_1.innerFrom(notifier).subscribe(new OperatorSubscriber_1.OperatorSubscriber(subscriber, function() {
            return subscriber.complete();
        }, noop_1.noop));
        !subscriber.closed && source.subscribe(subscriber);
    });
}
exports.takeUntil = takeUntil;

},{"../util/lift":"6c48g","./OperatorSubscriber":"4ZP4f","../observable/from":"1hp4r","../util/noop":"4pemK"}],"TZD7F":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.takeWhile = void 0;
var lift_1 = require("../util/lift");
var OperatorSubscriber_1 = require("./OperatorSubscriber");
function takeWhile(predicate, inclusive) {
    if (inclusive === void 0) inclusive = false;
    return lift_1.operate(function(source, subscriber) {
        var index = 0;
        source.subscribe(new OperatorSubscriber_1.OperatorSubscriber(subscriber, function(value) {
            var result = predicate(value, index++);
            (result || inclusive) && subscriber.next(value);
            !result && subscriber.complete();
        }));
    });
}
exports.takeWhile = takeWhile;

},{"../util/lift":"6c48g","./OperatorSubscriber":"4ZP4f"}],"5EODY":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.tap = void 0;
var isFunction_1 = require("../util/isFunction");
var lift_1 = require("../util/lift");
var OperatorSubscriber_1 = require("./OperatorSubscriber");
var identity_1 = require("../util/identity");
function tap(observerOrNext, error, complete) {
    var tapObserver = isFunction_1.isFunction(observerOrNext) || error || complete ? {
        next: observerOrNext,
        error: error,
        complete: complete
    } : observerOrNext;
    return tapObserver ? lift_1.operate(function(source, subscriber) {
        source.subscribe(new OperatorSubscriber_1.OperatorSubscriber(subscriber, function(value) {
            var _a;
            (_a = tapObserver.next) === null || _a === void 0 || _a.call(tapObserver, value);
            subscriber.next(value);
        }, function() {
            var _a;
            (_a = tapObserver.complete) === null || _a === void 0 || _a.call(tapObserver);
            subscriber.complete();
        }, function(err) {
            var _a;
            (_a = tapObserver.error) === null || _a === void 0 || _a.call(tapObserver, err);
            subscriber.error(err);
        }));
    }) : identity_1.identity;
}
exports.tap = tap;

},{"../util/isFunction":"5QZmD","../util/lift":"6c48g","./OperatorSubscriber":"4ZP4f","../util/identity":"2JjYu"}],"1E2RC":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.throttle = exports.defaultThrottleConfig = void 0;
var lift_1 = require("../util/lift");
var OperatorSubscriber_1 = require("./OperatorSubscriber");
var from_1 = require("../observable/from");
exports.defaultThrottleConfig = {
    leading: true,
    trailing: false
};
function throttle(durationSelector, _a) {
    var _b = _a === void 0 ? exports.defaultThrottleConfig : _a, leading = _b.leading, trailing = _b.trailing;
    return lift_1.operate(function(source, subscriber) {
        var hasValue = false;
        var sendValue = null;
        var throttled = null;
        var isComplete = false;
        var endThrottling = function() {
            throttled === null || throttled === void 0 || throttled.unsubscribe();
            throttled = null;
            if (trailing) {
                send();
                isComplete && subscriber.complete();
            }
        };
        var cleanupThrottling = function() {
            throttled = null;
            isComplete && subscriber.complete();
        };
        var startThrottle = function(value) {
            return throttled = from_1.innerFrom(durationSelector(value)).subscribe(new OperatorSubscriber_1.OperatorSubscriber(subscriber, endThrottling, cleanupThrottling));
        };
        var send = function() {
            if (hasValue) {
                hasValue = false;
                var value = sendValue;
                sendValue = null;
                subscriber.next(value);
                !isComplete && startThrottle(value);
            }
        };
        source.subscribe(new OperatorSubscriber_1.OperatorSubscriber(subscriber, function(value) {
            hasValue = true;
            sendValue = value;
            !(throttled && !throttled.closed) && (leading ? send() : startThrottle(value));
        }, function() {
            isComplete = true;
            !(trailing && hasValue && throttled && !throttled.closed) && subscriber.complete();
        }));
    });
}
exports.throttle = throttle;

},{"../util/lift":"6c48g","./OperatorSubscriber":"4ZP4f","../observable/from":"1hp4r"}],"24ACm":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.throttleTime = void 0;
var async_1 = require("../scheduler/async");
var throttle_1 = require("./throttle");
var timer_1 = require("../observable/timer");
function throttleTime(duration, scheduler, config) {
    if (scheduler === void 0) scheduler = async_1.asyncScheduler;
    if (config === void 0) config = throttle_1.defaultThrottleConfig;
    var duration$ = timer_1.timer(duration, scheduler);
    return throttle_1.throttle(function() {
        return duration$;
    }, config);
}
exports.throttleTime = throttleTime;

},{"../scheduler/async":"2KqRM","./throttle":"1E2RC","../observable/timer":"6ECLG"}],"21iZP":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.TimeInterval = exports.timeInterval = void 0;
var async_1 = require("../scheduler/async");
var scan_1 = require("./scan");
var defer_1 = require("../observable/defer");
var map_1 = require("./map");
function timeInterval(scheduler) {
    if (scheduler === void 0) scheduler = async_1.async;
    return function(source) {
        return defer_1.defer(function() {
            return source.pipe(scan_1.scan(function(_a, value) {
                var current = _a.current;
                return {
                    value: value,
                    current: scheduler.now(),
                    last: current
                };
            }, {
                current: scheduler.now(),
                value: undefined,
                last: undefined
            }), map_1.map(function(_a) {
                var current = _a.current, last = _a.last, value = _a.value;
                return new TimeInterval(value, current - last);
            }));
        });
    };
}
exports.timeInterval = timeInterval;
var TimeInterval = function() {
    function TimeInterval1(value, interval) {
        this.value = value;
        this.interval = interval;
    }
    return TimeInterval1;
}();
exports.TimeInterval = TimeInterval;

},{"../scheduler/async":"2KqRM","./scan":"3L21j","../observable/defer":"HqjO2","./map":"4S1RX"}],"HqjO2":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.defer = void 0;
var Observable_1 = require("../Observable");
var from_1 = require("./from");
function defer(observableFactory) {
    return new Observable_1.Observable(function(subscriber) {
        from_1.innerFrom(observableFactory()).subscribe(subscriber);
    });
}
exports.defer = defer;

},{"../Observable":"r7DVo","./from":"1hp4r"}],"491x5":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.timeout = exports.TimeoutError = void 0;
var async_1 = require("../scheduler/async");
var isDate_1 = require("../util/isDate");
var lift_1 = require("../util/lift");
var from_1 = require("../observable/from");
var createErrorClass_1 = require("../util/createErrorClass");
var caughtSchedule_1 = require("../util/caughtSchedule");
var OperatorSubscriber_1 = require("./OperatorSubscriber");
exports.TimeoutError = createErrorClass_1.createErrorClass(function(_super) {
    return function TimeoutErrorImpl(info) {
        if (info === void 0) info = null;
        _super(this);
        this.message = 'Timeout has occurred';
        this.name = 'TimeoutError';
        this.info = info;
    };
});
function timeout(config, schedulerArg) {
    var _a = isDate_1.isValidDate(config) ? {
        first: config
    } : typeof config === 'number' ? {
        each: config
    } : config, first = _a.first, each = _a.each, _b = _a.with, _with = _b === void 0 ? timeoutErrorFactory : _b, _c = _a.scheduler, scheduler = _c === void 0 ? schedulerArg !== null && schedulerArg !== void 0 ? schedulerArg : async_1.asyncScheduler : _c, _d = _a.meta, meta = _d === void 0 ? null : _d;
    if (first == null && each == null) throw new TypeError('No timeout provided.');
    return lift_1.operate(function(source, subscriber) {
        var originalSourceSubscription;
        var timerSubscription;
        var lastValue = null;
        var seen = 0;
        var startTimer = function(delay) {
            timerSubscription = caughtSchedule_1.caughtSchedule(subscriber, scheduler, function() {
                originalSourceSubscription.unsubscribe();
                from_1.innerFrom(_with({
                    meta: meta,
                    lastValue: lastValue,
                    seen: seen
                })).subscribe(subscriber);
            }, delay);
        };
        originalSourceSubscription = source.subscribe(new OperatorSubscriber_1.OperatorSubscriber(subscriber, function(value) {
            timerSubscription === null || timerSubscription === void 0 || timerSubscription.unsubscribe();
            seen++;
            subscriber.next(lastValue = value);
            each > 0 && startTimer(each);
        }, undefined, undefined, function() {
            if (!(timerSubscription === null || timerSubscription === void 0 ? void 0 : timerSubscription.closed)) timerSubscription === null || timerSubscription === void 0 || timerSubscription.unsubscribe();
            lastValue = null;
        }));
        startTimer(first != null ? typeof first === 'number' ? first : +first - scheduler.now() : each);
    });
}
exports.timeout = timeout;
function timeoutErrorFactory(info) {
    throw new exports.TimeoutError(info);
}

},{"../scheduler/async":"2KqRM","../util/isDate":"70jdW","../util/lift":"6c48g","../observable/from":"1hp4r","../util/createErrorClass":"6FSlj","../util/caughtSchedule":"3OKEH","./OperatorSubscriber":"4ZP4f"}],"1guxj":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.timeoutWith = void 0;
var async_1 = require("../scheduler/async");
var isDate_1 = require("../util/isDate");
var timeout_1 = require("./timeout");
function timeoutWith(due, withObservable, scheduler) {
    var first;
    var each;
    var _with;
    scheduler = scheduler !== null && scheduler !== void 0 ? scheduler : async_1.async;
    if (isDate_1.isValidDate(due)) first = due;
    else if (typeof due === 'number') each = due;
    if (withObservable) _with = function() {
        return withObservable;
    };
    else throw new TypeError('No observable provided to switch to');
    if (first == null && each == null) throw new TypeError('No timeout provided.');
    return timeout_1.timeout({
        first: first,
        each: each,
        scheduler: scheduler,
        with: _with
    });
}
exports.timeoutWith = timeoutWith;

},{"../scheduler/async":"2KqRM","../util/isDate":"70jdW","./timeout":"491x5"}],"4yM1i":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.timestamp = void 0;
var dateTimestampProvider_1 = require("../scheduler/dateTimestampProvider");
var map_1 = require("./map");
function timestamp(timestampProvider) {
    if (timestampProvider === void 0) timestampProvider = dateTimestampProvider_1.dateTimestampProvider;
    return map_1.map(function(value) {
        return {
            value: value,
            timestamp: timestampProvider.now()
        };
    });
}
exports.timestamp = timestamp;

},{"../scheduler/dateTimestampProvider":"4SBfI","./map":"4S1RX"}],"XviEy":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.window = void 0;
var Subject_1 = require("../Subject");
var lift_1 = require("../util/lift");
var OperatorSubscriber_1 = require("./OperatorSubscriber");
var noop_1 = require("../util/noop");
function window(windowBoundaries) {
    return lift_1.operate(function(source, subscriber) {
        var windowSubject = new Subject_1.Subject();
        subscriber.next(windowSubject.asObservable());
        var errorHandler = function(err) {
            windowSubject.error(err);
            subscriber.error(err);
        };
        source.subscribe(new OperatorSubscriber_1.OperatorSubscriber(subscriber, function(value) {
            return windowSubject === null || windowSubject === void 0 ? void 0 : windowSubject.next(value);
        }, function() {
            windowSubject.complete();
            subscriber.complete();
        }, errorHandler));
        windowBoundaries.subscribe(new OperatorSubscriber_1.OperatorSubscriber(subscriber, function() {
            windowSubject.complete();
            subscriber.next(windowSubject = new Subject_1.Subject());
        }, noop_1.noop, errorHandler));
        return function() {
            windowSubject === null || windowSubject === void 0 || windowSubject.unsubscribe();
            windowSubject = null;
        };
    });
}
exports.window = window;

},{"../Subject":"4Jzfy","../util/lift":"6c48g","./OperatorSubscriber":"4ZP4f","../util/noop":"4pemK"}],"1roaE":[function(require,module,exports) {
"use strict";
var __values = this && this.__values || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function() {
            if (o && i >= o.length) o = void 0;
            return {
                value: o && o[i++],
                done: !o
            };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.windowCount = void 0;
var Subject_1 = require("../Subject");
var lift_1 = require("../util/lift");
var OperatorSubscriber_1 = require("./OperatorSubscriber");
function windowCount(windowSize, startWindowEvery) {
    if (startWindowEvery === void 0) startWindowEvery = 0;
    var startEvery = startWindowEvery > 0 ? startWindowEvery : windowSize;
    return lift_1.operate(function(source, subscriber) {
        var windows = [
            new Subject_1.Subject()
        ];
        var starts = [];
        var count = 0;
        subscriber.next(windows[0].asObservable());
        source.subscribe(new OperatorSubscriber_1.OperatorSubscriber(subscriber, function(value) {
            var e_1, _a;
            try {
                for(var windows_1 = __values(windows), windows_1_1 = windows_1.next(); !windows_1_1.done; windows_1_1 = windows_1.next()){
                    var window_1 = windows_1_1.value;
                    window_1.next(value);
                }
            } catch (e_1_1) {
                e_1 = {
                    error: e_1_1
                };
            } finally{
                try {
                    if (windows_1_1 && !windows_1_1.done && (_a = windows_1.return)) _a.call(windows_1);
                } finally{
                    if (e_1) throw e_1.error;
                }
            }
            var c = count - windowSize + 1;
            if (c >= 0 && c % startEvery === 0) windows.shift().complete();
            if ((++count) % startEvery === 0) {
                var window_2 = new Subject_1.Subject();
                windows.push(window_2);
                subscriber.next(window_2.asObservable());
            }
        }, function() {
            while(windows.length > 0)windows.shift().complete();
            subscriber.complete();
        }, function(err) {
            while(windows.length > 0)windows.shift().error(err);
            subscriber.error(err);
        }, function() {
            starts = null;
            windows = null;
        }));
    });
}
exports.windowCount = windowCount;

},{"../Subject":"4Jzfy","../util/lift":"6c48g","./OperatorSubscriber":"4ZP4f"}],"4wd2q":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.windowTime = void 0;
var Subject_1 = require("../Subject");
var async_1 = require("../scheduler/async");
var Subscription_1 = require("../Subscription");
var lift_1 = require("../util/lift");
var OperatorSubscriber_1 = require("./OperatorSubscriber");
var arrRemove_1 = require("../util/arrRemove");
var args_1 = require("../util/args");
function windowTime(windowTimeSpan) {
    var _a, _b;
    var otherArgs = [];
    for(var _i = 1; _i < arguments.length; _i++)otherArgs[_i - 1] = arguments[_i];
    var scheduler = (_a = args_1.popScheduler(otherArgs)) !== null && _a !== void 0 ? _a : async_1.asyncScheduler;
    var windowCreationInterval = (_b = otherArgs[0]) !== null && _b !== void 0 ? _b : null;
    var maxWindowSize = otherArgs[1] || Infinity;
    return lift_1.operate(function(source, subscriber) {
        var windowRecords = [];
        var restartOnClose = false;
        var closeWindow = function(record) {
            var window = record.window, subs = record.subs;
            window.complete();
            subs.unsubscribe();
            arrRemove_1.arrRemove(windowRecords, record);
            restartOnClose && startWindow();
        };
        var startWindow = function() {
            if (windowRecords) {
                var subs = new Subscription_1.Subscription();
                subscriber.add(subs);
                var window_1 = new Subject_1.Subject();
                var record_1 = {
                    window: window_1,
                    subs: subs,
                    seen: 0
                };
                windowRecords.push(record_1);
                subscriber.next(window_1.asObservable());
                subs.add(scheduler.schedule(function() {
                    return closeWindow(record_1);
                }, windowTimeSpan));
            }
        };
        windowCreationInterval !== null && windowCreationInterval >= 0 ? subscriber.add(scheduler.schedule(function() {
            startWindow();
            !this.closed && subscriber.add(this.schedule(null, windowCreationInterval));
        }, windowCreationInterval)) : restartOnClose = true;
        startWindow();
        var loop = function(cb) {
            return windowRecords.slice().forEach(cb);
        };
        var terminate = function(cb) {
            loop(function(_a1) {
                var window = _a1.window;
                return cb(window);
            });
            cb(subscriber);
            subscriber.unsubscribe();
        };
        source.subscribe(new OperatorSubscriber_1.OperatorSubscriber(subscriber, function(value) {
            loop(function(record) {
                record.window.next(value);
                maxWindowSize <= ++record.seen && closeWindow(record);
            });
        }, function() {
            return terminate(function(consumer) {
                return consumer.complete();
            });
        }, function(err) {
            return terminate(function(consumer) {
                return consumer.error(err);
            });
        }));
        return function() {
            windowRecords = null;
        };
    });
}
exports.windowTime = windowTime;

},{"../Subject":"4Jzfy","../scheduler/async":"2KqRM","../Subscription":"6ydxy","../util/lift":"6c48g","./OperatorSubscriber":"4ZP4f","../util/arrRemove":"4Zgyx","../util/args":"18qpb"}],"2WTiq":[function(require,module,exports) {
"use strict";
var __values = this && this.__values || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function() {
            if (o && i >= o.length) o = void 0;
            return {
                value: o && o[i++],
                done: !o
            };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.windowToggle = void 0;
var Subject_1 = require("../Subject");
var Subscription_1 = require("../Subscription");
var lift_1 = require("../util/lift");
var from_1 = require("../observable/from");
var OperatorSubscriber_1 = require("./OperatorSubscriber");
var noop_1 = require("../util/noop");
var arrRemove_1 = require("../util/arrRemove");
function windowToggle(openings, closingSelector) {
    return lift_1.operate(function(source, subscriber) {
        var windows = [];
        var handleError = function(err) {
            while(0 < windows.length)windows.shift().error(err);
            subscriber.error(err);
        };
        from_1.innerFrom(openings).subscribe(new OperatorSubscriber_1.OperatorSubscriber(subscriber, function(openValue) {
            var window = new Subject_1.Subject();
            windows.push(window);
            var closingSubscription = new Subscription_1.Subscription();
            var closeWindow = function() {
                arrRemove_1.arrRemove(windows, window);
                window.complete();
                closingSubscription.unsubscribe();
            };
            var closingNotifier;
            try {
                closingNotifier = from_1.innerFrom(closingSelector(openValue));
            } catch (err) {
                handleError(err);
                return;
            }
            subscriber.next(window.asObservable());
            closingSubscription.add(closingNotifier.subscribe(new OperatorSubscriber_1.OperatorSubscriber(subscriber, closeWindow, noop_1.noop, handleError)));
        }, noop_1.noop));
        source.subscribe(new OperatorSubscriber_1.OperatorSubscriber(subscriber, function(value) {
            var e_1, _a;
            var windowsCopy = windows.slice();
            try {
                for(var windowsCopy_1 = __values(windowsCopy), windowsCopy_1_1 = windowsCopy_1.next(); !windowsCopy_1_1.done; windowsCopy_1_1 = windowsCopy_1.next()){
                    var window_1 = windowsCopy_1_1.value;
                    window_1.next(value);
                }
            } catch (e_1_1) {
                e_1 = {
                    error: e_1_1
                };
            } finally{
                try {
                    if (windowsCopy_1_1 && !windowsCopy_1_1.done && (_a = windowsCopy_1.return)) _a.call(windowsCopy_1);
                } finally{
                    if (e_1) throw e_1.error;
                }
            }
        }, function() {
            while(0 < windows.length)windows.shift().complete();
            subscriber.complete();
        }, handleError, function() {
            while(0 < windows.length)windows.shift().unsubscribe();
        }));
    });
}
exports.windowToggle = windowToggle;

},{"../Subject":"4Jzfy","../Subscription":"6ydxy","../util/lift":"6c48g","../observable/from":"1hp4r","./OperatorSubscriber":"4ZP4f","../util/noop":"4pemK","../util/arrRemove":"4Zgyx"}],"5wRUf":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.windowWhen = void 0;
var Subject_1 = require("../Subject");
var lift_1 = require("../util/lift");
var OperatorSubscriber_1 = require("./OperatorSubscriber");
var from_1 = require("../observable/from");
function windowWhen(closingSelector) {
    return lift_1.operate(function(source, subscriber) {
        var window;
        var closingSubscriber;
        var handleError = function(err) {
            window.error(err);
            subscriber.error(err);
        };
        var openWindow = function() {
            closingSubscriber === null || closingSubscriber === void 0 || closingSubscriber.unsubscribe();
            window === null || window === void 0 || window.complete();
            window = new Subject_1.Subject();
            subscriber.next(window.asObservable());
            var closingNotifier;
            try {
                closingNotifier = from_1.innerFrom(closingSelector());
            } catch (err) {
                handleError(err);
                return;
            }
            closingNotifier.subscribe(closingSubscriber = new OperatorSubscriber_1.OperatorSubscriber(subscriber, openWindow, openWindow, handleError));
        };
        openWindow();
        source.subscribe(new OperatorSubscriber_1.OperatorSubscriber(subscriber, function(value) {
            return window.next(value);
        }, function() {
            window.complete();
            subscriber.complete();
        }, handleError, function() {
            closingSubscriber === null || closingSubscriber === void 0 || closingSubscriber.unsubscribe();
            window = null;
        }));
    });
}
exports.windowWhen = windowWhen;

},{"../Subject":"4Jzfy","../util/lift":"6c48g","./OperatorSubscriber":"4ZP4f","../observable/from":"1hp4r"}],"3nKQi":[function(require,module,exports) {
"use strict";
var __read = this && this.__read || function(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while((n === void 0 || (n--) > 0) && !(r = i.next()).done)ar.push(r.value);
    } catch (error) {
        e = {
            error: error
        };
    } finally{
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        } finally{
            if (e) throw e.error;
        }
    }
    return ar;
};
var __spreadArray = this && this.__spreadArray || function(to, from) {
    for(var i = 0, il = from.length, j = to.length; i < il; i++, j++)to[j] = from[i];
    return to;
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.withLatestFrom = void 0;
var lift_1 = require("../util/lift");
var OperatorSubscriber_1 = require("./OperatorSubscriber");
var from_1 = require("../observable/from");
var identity_1 = require("../util/identity");
var noop_1 = require("../util/noop");
var args_1 = require("../util/args");
function withLatestFrom() {
    var inputs = [];
    for(var _i = 0; _i < arguments.length; _i++)inputs[_i] = arguments[_i];
    var project = args_1.popResultSelector(inputs);
    return lift_1.operate(function(source, subscriber) {
        var len = inputs.length;
        var otherValues = new Array(len);
        var hasValue = inputs.map(function() {
            return false;
        });
        var ready = false;
        var _loop_1 = function(i) {
            from_1.innerFrom(inputs[i]).subscribe(new OperatorSubscriber_1.OperatorSubscriber(subscriber, function(value) {
                otherValues[i] = value;
                if (!ready && !hasValue[i]) {
                    hasValue[i] = true;
                    (ready = hasValue.every(identity_1.identity)) && (hasValue = null);
                }
            }, noop_1.noop));
        };
        for(var i = 0; i < len; i++)_loop_1(i);
        source.subscribe(new OperatorSubscriber_1.OperatorSubscriber(subscriber, function(value) {
            if (ready) {
                var values = __spreadArray([
                    value
                ], __read(otherValues));
                subscriber.next(project ? project.apply(void 0, __spreadArray([], __read(values))) : values);
            }
        }));
    });
}
exports.withLatestFrom = withLatestFrom;

},{"../util/lift":"6c48g","./OperatorSubscriber":"4ZP4f","../observable/from":"1hp4r","../util/identity":"2JjYu","../util/noop":"4pemK","../util/args":"18qpb"}],"64d7v":[function(require,module,exports) {
"use strict";
var __read = this && this.__read || function(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while((n === void 0 || (n--) > 0) && !(r = i.next()).done)ar.push(r.value);
    } catch (error) {
        e = {
            error: error
        };
    } finally{
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        } finally{
            if (e) throw e.error;
        }
    }
    return ar;
};
var __spreadArray = this && this.__spreadArray || function(to, from) {
    for(var i = 0, il = from.length, j = to.length; i < il; i++, j++)to[j] = from[i];
    return to;
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.zip = void 0;
var zip_1 = require("../observable/zip");
var lift_1 = require("../util/lift");
function zip() {
    var sources = [];
    for(var _i = 0; _i < arguments.length; _i++)sources[_i] = arguments[_i];
    return lift_1.operate(function(source, subscriber) {
        zip_1.zip.apply(void 0, __spreadArray([
            source
        ], __read(sources))).subscribe(subscriber);
    });
}
exports.zip = zip;

},{"../observable/zip":"2MDfx","../util/lift":"6c48g"}],"2MDfx":[function(require,module,exports) {
"use strict";
var __read = this && this.__read || function(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while((n === void 0 || (n--) > 0) && !(r = i.next()).done)ar.push(r.value);
    } catch (error) {
        e = {
            error: error
        };
    } finally{
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        } finally{
            if (e) throw e.error;
        }
    }
    return ar;
};
var __spreadArray = this && this.__spreadArray || function(to, from) {
    for(var i = 0, il = from.length, j = to.length; i < il; i++, j++)to[j] = from[i];
    return to;
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.zip = void 0;
var Observable_1 = require("../Observable");
var from_1 = require("./from");
var argsOrArgArray_1 = require("../util/argsOrArgArray");
var empty_1 = require("./empty");
var OperatorSubscriber_1 = require("../operators/OperatorSubscriber");
var args_1 = require("../util/args");
function zip() {
    var args = [];
    for(var _i = 0; _i < arguments.length; _i++)args[_i] = arguments[_i];
    var resultSelector = args_1.popResultSelector(args);
    var sources = argsOrArgArray_1.argsOrArgArray(args);
    return sources.length ? new Observable_1.Observable(function(subscriber) {
        var buffers = sources.map(function() {
            return [];
        });
        var completed = sources.map(function() {
            return false;
        });
        subscriber.add(function() {
            buffers = completed = null;
        });
        var _loop_1 = function(sourceIndex) {
            from_1.innerFrom(sources[sourceIndex]).subscribe(new OperatorSubscriber_1.OperatorSubscriber(subscriber, function(value) {
                buffers[sourceIndex].push(value);
                if (buffers.every(function(buffer) {
                    return buffer.length;
                })) {
                    var result = buffers.map(function(buffer) {
                        return buffer.shift();
                    });
                    subscriber.next(resultSelector ? resultSelector.apply(void 0, __spreadArray([], __read(result))) : result);
                    if (buffers.some(function(buffer, i) {
                        return !buffer.length && completed[i];
                    })) subscriber.complete();
                }
            }, function() {
                completed[sourceIndex] = true;
                !buffers[sourceIndex].length && subscriber.complete();
            }));
        };
        for(var sourceIndex = 0; !subscriber.closed && sourceIndex < sources.length; sourceIndex++)_loop_1(sourceIndex);
        return function() {
            buffers = completed = null;
        };
    }) : empty_1.EMPTY;
}
exports.zip = zip;

},{"../Observable":"r7DVo","./from":"1hp4r","../util/argsOrArgArray":"35t9S","./empty":"cBi4y","../operators/OperatorSubscriber":"4ZP4f","../util/args":"18qpb"}],"77lmW":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.zipAll = void 0;
var zip_1 = require("../observable/zip");
var joinAllInternals_1 = require("./joinAllInternals");
function zipAll(project) {
    return joinAllInternals_1.joinAllInternals(zip_1.zip, project);
}
exports.zipAll = zipAll;

},{"../observable/zip":"2MDfx","./joinAllInternals":"40xnt"}],"3Zbzo":[function(require,module,exports) {
"use strict";
var __read = this && this.__read || function(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while((n === void 0 || (n--) > 0) && !(r = i.next()).done)ar.push(r.value);
    } catch (error) {
        e = {
            error: error
        };
    } finally{
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        } finally{
            if (e) throw e.error;
        }
    }
    return ar;
};
var __spreadArray = this && this.__spreadArray || function(to, from) {
    for(var i = 0, il = from.length, j = to.length; i < il; i++, j++)to[j] = from[i];
    return to;
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.zipWith = void 0;
var zip_1 = require("./zip");
function zipWith() {
    var otherInputs = [];
    for(var _i = 0; _i < arguments.length; _i++)otherInputs[_i] = arguments[_i];
    return zip_1.zip.apply(void 0, __spreadArray([], __read(otherInputs)));
}
exports.zipWith = zipWith;

},{"./zip":"64d7v"}],"1gLSz":[function(require,module,exports) {
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

},{}],"5WEVy":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "GrpcWorkerGateway", ()=>GrpcWorkerGateway
);
var _common = require("@metabreak/grpc-webworker-common");
var _worker = require("@metabreak/worker");
var _rxjs = require("rxjs");
class GrpcWorkerGateway {
    constructor(worker){
        this.worker = worker;
        this.lastId = 0;
        this.connections = new Map();
        worker.onmessage = (event)=>{
            const data = event.data;
            const connection = this.connections.get(data.id);
            if (connection && data.type === _worker.GrpcWorkerApi.GrpcWorkerMessageType.rpcResponse) switch(data.responseType){
                case _worker.GrpcWorkerApi.GrpcWorkerMessageRPCResponseType.error:
                    connection.next(new _common.GrpcStatusEvent(data.error.code, data.error.message, data.error.metadata));
                    connection.complete();
                    this.connections.delete(data.id);
                    break;
                case _worker.GrpcWorkerApi.GrpcWorkerMessageRPCResponseType.status:
                    connection.next(new _common.GrpcStatusEvent(data.status.code, data.status.details, new _common.GrpcMetadata(data.status.metadata)));
                    break;
                case _worker.GrpcWorkerApi.GrpcWorkerMessageRPCResponseType.data:
                    connection.next(new _common.GrpcDataEvent(data.response));
                    break;
                case _worker.GrpcWorkerApi.GrpcWorkerMessageRPCResponseType.end:
                    connection.complete();
                    this.connections.delete(data.id);
                    break;
            }
        };
    }
    configureServiceClient(serviceId, settings) {
        this.worker.postMessage({
            type: _worker.GrpcWorkerApi.GrpcWorkerMessageType.serviceClientConfig,
            serviceId,
            settings
        });
    }
    callUnaryFromWorker(serviceId, path, request, metadata) {
        return new _rxjs.Observable((observer)=>{
            const id = this.createRequestId();
            this.connections.set(id, observer);
            this.worker.postMessage({
                type: _worker.GrpcWorkerApi.GrpcWorkerMessageType.rpcRequest,
                id,
                serviceId,
                path,
                request,
                metadata
            });
            return ()=>this.closeConnection(id)
            ;
        });
    }
    callServerStreamFromWorker(serviceId, path, request, metadata) {
        return new _rxjs.Observable((observer)=>{
            const id = this.createRequestId();
            this.connections.set(id, observer);
            this.worker.postMessage({
                type: _worker.GrpcWorkerApi.GrpcWorkerMessageType.rpcRequest,
                id,
                serviceId,
                path,
                request,
                metadata
            });
            return ()=>this.closeConnection(id)
            ;
        });
    }
    closeConnection(id) {
        this.worker.postMessage({
            type: _worker.GrpcWorkerApi.GrpcWorkerMessageType.rpcCancel,
            id
        });
        this.connections.delete(id);
    }
    createRequestId() {
        return this.lastId++;
    }
}

},{"@metabreak/grpc-webworker-common":"4GbOz","@metabreak/worker":"761kP","rxjs":"4azJS","@parcel/transformer-js/src/esmodule-helpers.js":"1gLSz"}],"761kP":[function(require,module,exports) {
(function(global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@ngx-grpc/common'), require('grpc-web')) : typeof define === 'function' && define.amd ? define('@ngx-grpc/worker', [
        'exports',
        '@ngx-grpc/common',
        'grpc-web'
    ], factory) : (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global['ngx-grpc'] = global['ngx-grpc'] || {
    }, global['ngx-grpc'].worker = {
    }), global.common, global.grpcWeb));
})(this, function(exports, common, grpcWeb) {
    'use strict';
    /* tslint:disable no-namespace */ exports.GrpcWorkerApi = void 0;
    (function(GrpcWorkerApi) {
        var GrpcWorkerMessageType;
        (function(GrpcWorkerMessageType1) {
            GrpcWorkerMessageType1[GrpcWorkerMessageType1["serviceClientConfig"] = 0] = "serviceClientConfig";
            GrpcWorkerMessageType1[GrpcWorkerMessageType1["rpcRequest"] = 1] = "rpcRequest";
            GrpcWorkerMessageType1[GrpcWorkerMessageType1["rpcCancel"] = 2] = "rpcCancel";
            GrpcWorkerMessageType1[GrpcWorkerMessageType1["rpcResponse"] = 3] = "rpcResponse";
        })(GrpcWorkerMessageType = GrpcWorkerApi.GrpcWorkerMessageType || (GrpcWorkerApi.GrpcWorkerMessageType = {
        }));
        var GrpcWorkerMessageRPCResponseType;
        (function(GrpcWorkerMessageRPCResponseType1) {
            GrpcWorkerMessageRPCResponseType1[GrpcWorkerMessageRPCResponseType1["error"] = 0] = "error";
            GrpcWorkerMessageRPCResponseType1[GrpcWorkerMessageRPCResponseType1["status"] = 1] = "status";
            GrpcWorkerMessageRPCResponseType1[GrpcWorkerMessageRPCResponseType1["data"] = 2] = "data";
            GrpcWorkerMessageRPCResponseType1[GrpcWorkerMessageRPCResponseType1["end"] = 3] = "end";
        })(GrpcWorkerMessageRPCResponseType = GrpcWorkerApi.GrpcWorkerMessageRPCResponseType || (GrpcWorkerApi.GrpcWorkerMessageRPCResponseType = {
        }));
    })(exports.GrpcWorkerApi || (exports.GrpcWorkerApi = {
    }));
    /**
     * A worker-side service of worker client implementation based on grpc-web
     *
     * Example:
     *
     * ```
     * /// <reference lib="webworker" />
     *
     * import { GrpcWorker } from '@ngx-grpc/worker';
     * import { GrpcWorkerEchoServiceClientDef } from '../proto/echo.pbwsc';
     *
     * const worker = new GrpcWorker();
     *
     * worker.register(
     *   // register here all the service clients definitions
     *   GrpcWorkerEchoServiceClientDef,
     * );
     *
     * worker.start();
     * ```
     */ var GrpcWorker = function() {
        function GrpcWorker1() {
            this.definitions = new Map();
            this.clients = new Map();
            this.requestCancelHandlers = new Map();
        }
        /**
         * Register one or more service clients.
         * Add here only the services you use, otherwise the worker size can explode.
         * @param defs generated service client definitions to register
         */ GrpcWorker1.prototype.register = function() {
            var _this = this;
            var defs = [];
            for(var _i = 0; _i < arguments.length; _i++)defs[_i] = arguments[_i];
            defs.forEach(function(def) {
                return _this.definitions.set(def.serviceId, def);
            });
        };
        /**
         * Start the service
         */ GrpcWorker1.prototype.start = function() {
            var _this = this;
            addEventListener('message', function(_a) {
                var data = _a.data;
                switch(data.type){
                    case exports.GrpcWorkerApi.GrpcWorkerMessageType.serviceClientConfig:
                        _this.configureServiceClient(data);
                        break;
                    case exports.GrpcWorkerApi.GrpcWorkerMessageType.rpcRequest:
                        _this.handleRpc(data);
                        break;
                    case exports.GrpcWorkerApi.GrpcWorkerMessageType.rpcCancel:
                        _this.cancelRpc(data);
                        break;
                    default:
                        throw new Error("Unknown incoming message type " + data.type);
                }
            });
        };
        GrpcWorker1.prototype.configureServiceClient = function(message) {
            var def = this.definitions.get(message.serviceId);
            if (!def) throw new Error("Service client " + message.serviceId + " is not registered in Worker");
            this.clients.set(message.serviceId, {
                settings: message.settings,
                client: new grpcWeb.GrpcWebClientBase(message.settings)
            });
        };
        GrpcWorker1.prototype.handleRpc = function(message) {
            var _this = this;
            var def = this.definitions.get(message.serviceId);
            if (!def) throw new Error("Service client " + message.serviceId + " is not registered in Worker");
            var service = this.clients.get(message.serviceId);
            if (!service) throw new Error("Service client " + message.serviceId + " is not configured in Worker");
            var respond = function(msg) {
                return postMessage(Object.assign({
                    type: exports.GrpcWorkerApi.GrpcWorkerMessageType.rpcResponse,
                    id: message.id
                }, msg));
            };
            var _a = def.methods[message.path], type = _a.type, reqclss = _a.reqclss, resclss = _a.resclss;
            var request = new reqclss(message.request);
            var url = service.settings.host + message.path;
            var metadata = message.metadata || {
            };
            var descriptor = new grpcWeb.MethodDescriptor(message.path, type === common.GrpcCallType.unary ? 'unary' : 'server_streaming', reqclss, resclss, function(req) {
                return req.serializeBinary();
            }, resclss.deserializeBinary);
            if (type === common.GrpcCallType.unary) {
                var stream_1 = service.client.rpcCall(url, request, metadata, descriptor, function(error, response) {
                    if (error) {
                        _this.requestCancelHandlers.delete(message.id);
                        respond({
                            responseType: exports.GrpcWorkerApi.GrpcWorkerMessageRPCResponseType.error,
                            error: error
                        });
                    } else respond({
                        responseType: exports.GrpcWorkerApi.GrpcWorkerMessageRPCResponseType.data,
                        response: response.toObject()
                    });
                });
                // take only status 0 because unary error already includes non-zero statuses
                stream_1.on('status', function(status) {
                    return status.code === 0 ? respond({
                        responseType: exports.GrpcWorkerApi.GrpcWorkerMessageRPCResponseType.status,
                        status: status
                    }) : null;
                });
                stream_1.on('end', function() {
                    _this.requestCancelHandlers.delete(message.id);
                    respond({
                        responseType: exports.GrpcWorkerApi.GrpcWorkerMessageRPCResponseType.end
                    });
                });
                this.requestCancelHandlers.set(message.id, function() {
                    return stream_1.cancel();
                });
            } else {
                var stream_2 = service.client.serverStreaming(url, request, metadata, descriptor);
                stream_2.on('error', function(error) {
                    _this.requestCancelHandlers.delete(message.id);
                    respond({
                        responseType: exports.GrpcWorkerApi.GrpcWorkerMessageRPCResponseType.error,
                        error: error
                    });
                });
                stream_2.on('status', function(status) {
                    return respond({
                        responseType: exports.GrpcWorkerApi.GrpcWorkerMessageRPCResponseType.status,
                        status: status
                    });
                });
                stream_2.on('data', function(response) {
                    return respond({
                        responseType: exports.GrpcWorkerApi.GrpcWorkerMessageRPCResponseType.data,
                        response: response.toObject()
                    });
                });
                stream_2.on('end', function() {
                    _this.requestCancelHandlers.delete(message.id);
                    respond({
                        responseType: exports.GrpcWorkerApi.GrpcWorkerMessageRPCResponseType.end
                    });
                });
                this.requestCancelHandlers.set(message.id, function() {
                    return stream_2.cancel();
                });
            }
        };
        GrpcWorker1.prototype.cancelRpc = function(message) {
            var cancel = this.requestCancelHandlers.get(message.id);
            if (cancel) {
                cancel();
                this.requestCancelHandlers.delete(message.id);
            }
        };
        return GrpcWorker1;
    }();
    /**
     * Generated bundle index. Do not edit.
     */ exports.GrpcWorker = GrpcWorker;
    Object.defineProperty(exports, '__esModule', {
        value: true
    });
});

},{"@metabreak/grpc-webworker-common":"4GbOz","grpc-web":"1xjye"}],"1xjye":[function(require,module,exports) {
var global = arguments[3];
/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/ function aa(a) {
    var b = 0;
    return function() {
        return b < a.length ? {
            done: false,
            value: a[b++]
        } : {
            done: true
        };
    };
}
var ba = "function" == typeof Object.defineProperties ? Object.defineProperty : function(a, b, c) {
    a != Array.prototype && a != Object.prototype && (a[b] = c.value);
};
function ca(a) {
    a = [
        "object" == typeof window && window,
        "object" == typeof self && self,
        "object" == typeof global && global,
        a
    ];
    for(var b = 0; b < a.length; ++b){
        var c = a[b];
        if (c && c.Math == Math) return c;
    }
    throw Error("Cannot find global object");
}
var da = ca(this);
function ea(a, b) {
    if (b) {
        var c = da;
        a = a.split(".");
        for(var d = 0; d < a.length - 1; d++){
            var f = a[d];
            f in c || (c[f] = {
            });
            c = c[f];
        }
        a = a[a.length - 1];
        d = c[a];
        b = b(d);
        b != d && null != b && ba(c, a, {
            configurable: true,
            writable: true,
            value: b
        });
    }
}
ea("Object.is", function(a) {
    return a ? a : function(b, c) {
        return b === c ? 0 !== b || 1 / b === 1 / c : b !== b && c !== c;
    };
});
ea("Array.prototype.includes", function(a) {
    return a ? a : function(b, c) {
        var d = this;
        d instanceof String && (d = String(d));
        var f = d.length;
        c = c || 0;
        for(0 > c && (c = Math.max(c + f, 0)); c < f; c++){
            var g = d[c];
            if (g === b || Object.is(g, b)) return true;
        }
        return false;
    };
});
function fa(a) {
    var b = "undefined" != typeof Symbol && Symbol.iterator && a[Symbol.iterator];
    return b ? b.call(a) : {
        next: aa(a)
    };
}
ea("Promise", function(a) {
    function b(e) {
        this.b = 0;
        this.c = void 0;
        this.a = [];
        var h = this.f();
        try {
            e(h.resolve, h.reject);
        } catch (k) {
            h.reject(k);
        }
    }
    function c() {
        this.a = null;
    }
    function d(e) {
        return e instanceof b ? e : new b(function(h) {
            h(e);
        });
    }
    if (a) return a;
    c.prototype.b = function(e) {
        if (null == this.a) {
            this.a = [];
            var h = this;
            this.c(function() {
                h.g();
            });
        }
        this.a.push(e);
    };
    var f = da.setTimeout;
    c.prototype.c = function(e) {
        f(e, 0);
    };
    c.prototype.g = function() {
        for(; this.a && this.a.length;){
            var e = this.a;
            this.a = [];
            for(var h = 0; h < e.length; ++h){
                var k = e[h];
                e[h] = null;
                try {
                    k();
                } catch (l) {
                    this.f(l);
                }
            }
        }
        this.a = null;
    };
    c.prototype.f = function(e) {
        this.c(function() {
            throw e;
        });
    };
    b.prototype.f = function() {
        function e(l) {
            return function(m) {
                k || (k = true, l.call(h, m));
            };
        }
        var h = this, k = false;
        return {
            resolve: e(this.m),
            reject: e(this.g)
        };
    };
    b.prototype.m = function(e) {
        if (e === this) this.g(new TypeError("A Promise cannot resolve to itself"));
        else if (e instanceof b) this.o(e);
        else {
            a: switch(typeof e){
                case "object":
                    var h = null != e;
                    break a;
                case "function":
                    h = true;
                    break a;
                default:
                    h = false;
            }
            h ? this.l(e) : this.h(e);
        }
    };
    b.prototype.l = function(e) {
        var h = void 0;
        try {
            h = e.then;
        } catch (k) {
            this.g(k);
            return;
        }
        "function" == typeof h ? this.u(h, e) : this.h(e);
    };
    b.prototype.g = function(e) {
        this.i(2, e);
    };
    b.prototype.h = function(e) {
        this.i(1, e);
    };
    b.prototype.i = function(e, h) {
        if (0 != this.b) throw Error("Cannot settle(" + e + ", " + h + "): Promise already settled in state" + this.b);
        this.b = e;
        this.c = h;
        this.j();
    };
    b.prototype.j = function() {
        if (null != this.a) {
            for(var e = 0; e < this.a.length; ++e)g.b(this.a[e]);
            this.a = null;
        }
    };
    var g = new c;
    b.prototype.o = function(e) {
        var h = this.f();
        e.w(h.resolve, h.reject);
    };
    b.prototype.u = function(e, h) {
        var k = this.f();
        try {
            e.call(h, k.resolve, k.reject);
        } catch (l) {
            k.reject(l);
        }
    };
    b.prototype.then = function(e, h) {
        function k(n, v) {
            return "function" == typeof n ? function(x) {
                try {
                    l(n(x));
                } catch (F) {
                    m(F);
                }
            } : v;
        }
        var l, m, p = new b(function(n, v) {
            l = n;
            m = v;
        });
        this.w(k(e, l), k(h, m));
        return p;
    };
    b.prototype.catch = function(e) {
        return this.then(void 0, e);
    };
    b.prototype.w = function(e, h) {
        function k() {
            switch(l.b){
                case 1:
                    e(l.c);
                    break;
                case 2:
                    h(l.c);
                    break;
                default:
                    throw Error("Unexpected state: " + l.b);
            }
        }
        var l = this;
        null == this.a ? g.b(k) : this.a.push(k);
    };
    b.resolve = d;
    b.reject = function(e) {
        return new b(function(h, k) {
            k(e);
        });
    };
    b.race = function(e) {
        return new b(function(h, k) {
            for(var l = fa(e), m = l.next(); !m.done; m = l.next())d(m.value).w(h, k);
        });
    };
    b.all = function(e) {
        var h = fa(e), k = h.next();
        return k.done ? d([]) : new b(function(l, m) {
            function p(x) {
                return function(F) {
                    n[x] = F;
                    v--;
                    0 == v && l(n);
                };
            }
            var n = [], v = 0;
            do n.push(void 0), v++, d(k.value).w(p(n.length - 1), m), k = h.next();
            while (!k.done)
        });
    };
    return b;
});
var ha = ha || {
}, q = this || self;
function r(a, b) {
    a = a.split(".");
    b = b || q;
    for(var c = 0; c < a.length; c++)if (b = b[a[c]], null == b) return null;
    return b;
}
function t() {
}
function ia(a) {
    var b = typeof a;
    if ("object" == b) {
        if (a) {
            if (a instanceof Array) return "array";
            if (a instanceof Object) return b;
            var c = Object.prototype.toString.call(a);
            if ("[object Window]" == c) return "object";
            if ("[object Array]" == c || "number" == typeof a.length && "undefined" != typeof a.splice && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("splice")) return "array";
            if ("[object Function]" == c || "undefined" != typeof a.call && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("call")) return "function";
        } else return "null";
    } else if ("function" == b && "undefined" == typeof a.call) return "object";
    return b;
}
function u(a) {
    var b = typeof a;
    return "object" == b && null != a || "function" == b;
}
var ja = "closure_uid_" + (1000000000 * Math.random() >>> 0), ka = 0;
function la(a, b, c) {
    return a.call.apply(a.bind, arguments);
}
function ma(a, b, c) {
    if (!a) throw Error();
    if (2 < arguments.length) {
        var d = Array.prototype.slice.call(arguments, 2);
        return function() {
            var f = Array.prototype.slice.call(arguments);
            Array.prototype.unshift.apply(f, d);
            return a.apply(b, f);
        };
    }
    return function() {
        return a.apply(b, arguments);
    };
}
function w(a, b, c) {
    Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? w = la : w = ma;
    return w.apply(null, arguments);
}
var na = Date.now || function() {
    return +new Date;
};
function y(a, b) {
    function c() {
    }
    c.prototype = b.prototype;
    a.S = b.prototype;
    a.prototype = new c;
    a.prototype.constructor = a;
}
function oa() {
    this.a = {
    };
}
oa.prototype.get = function(a) {
    return this.a[a];
};
oa.prototype.f = function() {
    return Object.keys(this.a);
};
function z(a, b, c, d) {
    this.f = a;
    this.c = b;
    this.b = c;
    this.a = d;
}
z.prototype.getRequestMessage = function() {
    return this.f;
};
z.prototype.getMethodDescriptor = function() {
    return this.c;
};
z.prototype.getMetadata = function() {
    return this.b;
};
z.prototype.getCallOptions = function() {
    return this.a;
};
function A(a, b, c, d) {
    c = (void 0) === c ? {
    } : c;
    this.c = a;
    this.a = c;
    this.b = b;
    this.f = (void 0) === d ? null : d;
}
A.prototype.getResponseMessage = function() {
    return this.c;
};
A.prototype.getMetadata = function() {
    return this.a;
};
A.prototype.getMethodDescriptor = function() {
    return this.b;
};
A.prototype.getStatus = function() {
    return this.f;
};
function pa(a, b, c, d, f, g) {
    this.name = a;
    this.a = f;
    this.b = g;
}
function qa(a, b, c) {
    c = (void 0) === c ? {
    } : c;
    var d = (void 0) === d ? new oa : d;
    return new z(b, a, c, d);
}
function ra(a, b, c, d) {
    return d instanceof pa ? d : new pa(a, c, d.b || b.constructor, d.f, d.a, d.c);
}
function B(a) {
    this.a = a;
}
B.prototype.on = function(a, b) {
    return "data" == a || "error" == a ? this : this.a.on(a, b);
};
B.prototype.removeListener = function(a, b) {
    return this.a.removeListener(a, b);
};
B.prototype.cancel = function() {
    this.a.cancel();
};
function sa(a) {
    switch(a){
        case 0:
            return "No Error";
        case 1:
            return "Access denied to content document";
        case 2:
            return "File not found";
        case 3:
            return "Firefox silently errored";
        case 4:
            return "Application custom error";
        case 5:
            return "An exception occurred";
        case 6:
            return "Http response at 400 or 500 level";
        case 7:
            return "Request was aborted";
        case 8:
            return "Request timed out";
        case 9:
            return "The resource is not available offline";
        default:
            return "Unrecognized error code";
    }
}
function C(a) {
    if (Error.captureStackTrace) Error.captureStackTrace(this, C);
    else {
        var b = Error().stack;
        b && (this.stack = b);
    }
    a && (this.message = String(a));
}
y(C, Error);
C.prototype.name = "CustomError";
function ta(a, b) {
    a = a.split("%s");
    for(var c = "", d = a.length - 1, f = 0; f < d; f++)c += a[f] + (f < b.length ? b[f] : "%s");
    C.call(this, c + a[d]);
}
y(ta, C);
ta.prototype.name = "AssertionError";
function ua(a, b) {
    throw new ta("Failure" + (a ? ": " + a : ""), Array.prototype.slice.call(arguments, 1));
}
function va() {
    this.j = null;
    this.i = [];
    this.l = 0;
    this.b = wa;
    this.f = this.a = this.h = 0;
    this.c = null;
    this.g = 0;
}
function xa(a, b) {
    function c(l) {
        l == ya ? e.h = l : l == D ? e.h = l : za(e, h, k, "invalid frame byte");
        e.b = Aa;
        e.a = 0;
        e.f = 0;
    }
    function d(l) {
        e.f++;
        e.a = (e.a << 8) + l;
        4 == e.f && (e.b = Ba, e.g = 0, "undefined" !== typeof Uint8Array ? e.c = new Uint8Array(e.a) : e.c = Array(e.a), 0 == e.a && g());
    }
    function f(l) {
        e.c[e.g++] = l;
        e.g == e.a && g();
    }
    function g() {
        var l = {
        };
        l[e.h] = e.c;
        e.i.push(l);
        e.b = wa;
    }
    var e = a, h, k = 0;
    for(b instanceof Uint8Array || b instanceof Array ? h = b : h = new Uint8Array(b); k < h.length;){
        switch(e.b){
            case Ca:
                za(e, h, k, "stream already broken");
                break;
            case wa:
                c(h[k]);
                break;
            case Aa:
                d(h[k]);
                break;
            case Ba:
                f(h[k]);
                break;
            default:
                throw Error("unexpected parser state: " + e.b);
        }
        e.l++;
        k++;
    }
    a = e.i;
    e.i = [];
    return 0 < a.length ? a : null;
}
var wa = 0, Aa = 1, Ba = 2, Ca = 3, ya = 0, D = 128;
function za(a, b, c, d) {
    a.b = Ca;
    a.j = "The stream is broken @" + a.l + "/" + c + ". Error: " + d + ". With input:\n" + b;
    throw Error(a.j);
}
function Da(a) {
    switch(a){
        case 200:
            return 0;
        case 400:
            return 3;
        case 401:
            return 16;
        case 403:
            return 7;
        case 404:
            return 5;
        case 409:
            return 10;
        case 412:
            return 9;
        case 429:
            return 8;
        case 499:
            return 1;
        case 500:
            return 2;
        case 501:
            return 12;
        case 503:
            return 14;
        case 504:
            return 4;
        default:
            return 2;
    }
}
var Ea = Array.prototype.indexOf ? function(a, b) {
    return Array.prototype.indexOf.call(a, b, void 0);
} : function(a, b) {
    if ("string" === typeof a) return "string" !== typeof b || 1 != b.length ? -1 : a.indexOf(b, 0);
    for(var c = 0; c < a.length; c++)if (c in a && a[c] === b) return c;
    return -1;
};
function Fa(a) {
    a: {
        var b = Ga;
        for(var c = a.length, d = "string" === typeof a ? a.split("") : a, f = 0; f < c; f++)if (f in d && b.call(void 0, d[f], f, a)) {
            b = f;
            break a;
        }
        b = -1;
    }
    return 0 > b ? null : "string" === typeof a ? a.charAt(b) : a[b];
}
var Ha = String.prototype.trim ? function(a) {
    return a.trim();
} : function(a) {
    return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1];
};
function E(a, b) {
    return -1 != a.indexOf(b);
}
function Ia(a, b) {
    return a < b ? -1 : a > b ? 1 : 0;
}
var G;
a: {
    var Ja = q.navigator;
    if (Ja) {
        var Ka = Ja.userAgent;
        if (Ka) {
            G = Ka;
            break a;
        }
    }
    G = "";
}
function La(a, b) {
    for(var c in a)b.call(void 0, a[c], c, a);
}
function Ma(a, b) {
    var c = {
    }, d;
    for(d in a)c[d] = b.call(void 0, a[d], d, a);
    return c;
}
var Na = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");
function Oa(a, b) {
    for(var c, d, f = 1; f < arguments.length; f++){
        d = arguments[f];
        for(c in d)a[c] = d[c];
        for(var g = 0; g < Na.length; g++)c = Na[g], Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c]);
    }
}
function Pa(a) {
    var b = 1;
    a = a.split(":");
    for(var c = []; 0 < b && a.length;)c.push(a.shift()), b--;
    a.length && c.push(a.join(":"));
    return c;
}
function Qa(a) {
    Qa[" "](a);
    return a;
}
Qa[" "] = t;
function Ra(a, b) {
    var c = Sa;
    return Object.prototype.hasOwnProperty.call(c, a) ? c[a] : c[a] = b(a);
}
var Ta = E(G, "Opera"), H = E(G, "Trident") || E(G, "MSIE"), Ua = E(G, "Edge"), Va = E(G, "Gecko") && !(E(G.toLowerCase(), "webkit") && !E(G, "Edge")) && !(E(G, "Trident") || E(G, "MSIE")) && !E(G, "Edge"), Wa = E(G.toLowerCase(), "webkit") && !E(G, "Edge");
function Xa() {
    var a = q.document;
    return a ? a.documentMode : void 0;
}
var I;
a: {
    var Ya = "", Za = function() {
        var a = G;
        if (Va) return /rv:([^\);]+)(\)|;)/.exec(a);
        if (Ua) return /Edge\/([\d\.]+)/.exec(a);
        if (H) return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);
        if (Wa) return /WebKit\/(\S+)/.exec(a);
        if (Ta) return /(?:Version)[ \/]?(\S+)/.exec(a);
    }();
    Za && (Ya = Za ? Za[1] : "");
    if (H) {
        var $a = Xa();
        if (null != $a && $a > parseFloat(Ya)) {
            I = String($a);
            break a;
        }
    }
    I = Ya;
}
var Sa = {
};
function ab(a) {
    return Ra(a, function() {
        for(var b = 0, c = Ha(String(I)).split("."), d = Ha(String(a)).split("."), f = Math.max(c.length, d.length), g = 0; 0 == b && g < f; g++){
            var e = c[g] || "", h = d[g] || "";
            do {
                e = /(\d*)(\D*)(.*)/.exec(e) || [
                    "",
                    "",
                    "",
                    ""
                ];
                h = /(\d*)(\D*)(.*)/.exec(h) || [
                    "",
                    "",
                    "",
                    ""
                ];
                if (0 == e[0].length && 0 == h[0].length) break;
                b = Ia(0 == e[1].length ? 0 : parseInt(e[1], 10), 0 == h[1].length ? 0 : parseInt(h[1], 10)) || Ia(0 == e[2].length, 0 == h[2].length) || Ia(e[2], h[2]);
                e = e[3];
                h = h[3];
            }while (0 == b)
        }
        return 0 <= b;
    });
}
var bb;
if (q.document && H) {
    var cb = Xa();
    bb = cb ? cb : parseInt(I, 10) || void 0;
} else bb = void 0;
var db = bb;
function eb() {
    0 != fb && (Object.prototype.hasOwnProperty.call(this, ja) && this[ja] || (this[ja] = ++ka));
    this.F = this.F;
}
var fb = 0;
eb.prototype.F = false;
var gb = Object.freeze || function(a) {
    return a;
};
var hb;
(hb = !H) || (hb = 9 <= Number(db));
var ib = hb, jb = H && !ab("9"), kb = function() {
    if (!q.addEventListener || !Object.defineProperty) return false;
    var a = false, b = Object.defineProperty({
    }, "passive", {
        get: function() {
            a = true;
        }
    });
    try {
        q.addEventListener("test", t, b), q.removeEventListener("test", t, b);
    } catch (c) {
    }
    return a;
}();
function J(a, b) {
    this.type = a;
    this.a = this.target = b;
    this.defaultPrevented = false;
}
J.prototype.b = function() {
    this.defaultPrevented = true;
};
function K(a, b) {
    J.call(this, a ? a.type : "");
    this.relatedTarget = this.a = this.target = null;
    this.button = this.screenY = this.screenX = this.clientY = this.clientX = 0;
    this.key = "";
    this.metaKey = this.shiftKey = this.altKey = this.ctrlKey = false;
    this.pointerId = 0;
    this.pointerType = "";
    this.c = null;
    if (a) {
        var c = this.type = a.type, d = a.changedTouches && a.changedTouches.length ? a.changedTouches[0] : null;
        this.target = a.target || a.srcElement;
        this.a = b;
        if (b = a.relatedTarget) {
            if (Va) {
                a: {
                    try {
                        Qa(b.nodeName);
                        var f = true;
                        break a;
                    } catch (g) {
                    }
                    f = false;
                }
                f || (b = null);
            }
        } else "mouseover" == c ? b = a.fromElement : "mouseout" == c && (b = a.toElement);
        this.relatedTarget = b;
        d ? (this.clientX = (void 0) !== d.clientX ? d.clientX : d.pageX, this.clientY = (void 0) !== d.clientY ? d.clientY : d.pageY, this.screenX = d.screenX || 0, this.screenY = d.screenY || 0) : (this.clientX = (void 0) !== a.clientX ? a.clientX : a.pageX, this.clientY = (void 0) !== a.clientY ? a.clientY : a.pageY, this.screenX = a.screenX || 0, this.screenY = a.screenY || 0);
        this.button = a.button;
        this.key = a.key || "";
        this.ctrlKey = a.ctrlKey;
        this.altKey = a.altKey;
        this.shiftKey = a.shiftKey;
        this.metaKey = a.metaKey;
        this.pointerId = a.pointerId || 0;
        this.pointerType = "string" === typeof a.pointerType ? a.pointerType : lb[a.pointerType] || "";
        this.c = a;
        a.defaultPrevented && this.b();
    }
}
y(K, J);
var lb = gb({
    2: "touch",
    3: "pen",
    4: "mouse"
});
K.prototype.b = function() {
    K.S.b.call(this);
    var a = this.c;
    if (a.preventDefault) a.preventDefault();
    else if (a.returnValue = false, jb) try {
        if (a.ctrlKey || 112 <= a.keyCode && 123 >= a.keyCode) a.keyCode = -1;
    } catch (b) {
    }
};
var L = "closure_listenable_" + (1000000 * Math.random() | 0), mb = 0;
function nb(a, b, c, d, f) {
    this.listener = a;
    this.proxy = null;
    this.src = b;
    this.type = c;
    this.capture = !!d;
    this.A = f;
    this.key = ++mb;
    this.s = this.v = false;
}
function ob(a) {
    a.s = true;
    a.listener = null;
    a.proxy = null;
    a.src = null;
    a.A = null;
}
function M(a) {
    this.src = a;
    this.a = {
    };
    this.b = 0;
}
M.prototype.add = function(a, b, c, d, f) {
    var g = a.toString();
    a = this.a[g];
    a || (a = this.a[g] = [], this.b++);
    var e = pb(a, b, d, f);
    -1 < e ? (b = a[e], c || (b.v = false)) : (b = new nb(b, this.src, g, !!d, f), b.v = c, a.push(b));
    return b;
};
function qb(a, b) {
    var c = b.type;
    if (c in a.a) {
        var d = a.a[c], f = Ea(d, b), g;
        (g = 0 <= f) && Array.prototype.splice.call(d, f, 1);
        g && (ob(b), 0 == a.a[c].length && (delete a.a[c], a.b--));
    }
}
function pb(a, b, c, d) {
    for(var f = 0; f < a.length; ++f){
        var g = a[f];
        if (!g.s && g.listener == b && g.capture == !!c && g.A == d) return f;
    }
    return -1;
}
var rb = "closure_lm_" + (1000000 * Math.random() | 0), sb = {
}, tb = 0;
function ub(a, b, c, d, f) {
    if (d && d.once) vb(a, b, c, d, f);
    else if (Array.isArray(b)) for(var g = 0; g < b.length; g++)ub(a, b[g], c, d, f);
    else c = wb(c), a && a[L] ? a.f.add(String(b), c, false, u(d) ? !!d.capture : !!d, f) : xb(a, b, c, false, d, f);
}
function xb(a, b, c, d, f, g) {
    if (!b) throw Error("Invalid event type");
    var e = u(f) ? !!f.capture : !!f, h = yb(a);
    h || (a[rb] = h = new M(a));
    c = h.add(b, c, d, e, g);
    if (!c.proxy) {
        d = zb();
        c.proxy = d;
        d.src = a;
        d.listener = c;
        if (a.addEventListener) kb || (f = e), (void 0) === f && (f = false), a.addEventListener(b.toString(), d, f);
        else if (a.attachEvent) a.attachEvent(Ab(b.toString()), d);
        else if (a.addListener && a.removeListener) a.addListener(d);
        else throw Error("addEventListener and attachEvent are unavailable.");
        tb++;
    }
}
function zb() {
    var a = Bb, b = ib ? function(c) {
        return a.call(b.src, b.listener, c);
    } : function(c) {
        c = a.call(b.src, b.listener, c);
        if (!c) return c;
    };
    return b;
}
function vb(a, b, c, d, f) {
    if (Array.isArray(b)) for(var g = 0; g < b.length; g++)vb(a, b[g], c, d, f);
    else c = wb(c), a && a[L] ? a.f.add(String(b), c, true, u(d) ? !!d.capture : !!d, f) : xb(a, b, c, true, d, f);
}
function Cb(a, b, c, d, f) {
    if (Array.isArray(b)) for(var g = 0; g < b.length; g++)Cb(a, b[g], c, d, f);
    else (d = u(d) ? !!d.capture : !!d, c = wb(c), a && a[L]) ? (a = a.f, b = String(b).toString(), b in a.a && (g = a.a[b], c = pb(g, c, d, f), -1 < c && (ob(g[c]), Array.prototype.splice.call(g, c, 1), 0 == g.length && (delete a.a[b], a.b--)))) : a && (a = yb(a)) && (b = a.a[b.toString()], a = -1, b && (a = pb(b, c, d, f)), (c = -1 < a ? b[a] : null) && Db(c));
}
function Db(a) {
    if ("number" !== typeof a && a && !a.s) {
        var b = a.src;
        if (b && b[L]) qb(b.f, a);
        else {
            var c = a.type, d = a.proxy;
            b.removeEventListener ? b.removeEventListener(c, d, a.capture) : b.detachEvent ? b.detachEvent(Ab(c), d) : b.addListener && b.removeListener && b.removeListener(d);
            tb--;
            (c = yb(b)) ? (qb(c, a), 0 == c.b && (c.src = null, b[rb] = null)) : ob(a);
        }
    }
}
function Ab(a) {
    return a in sb ? sb[a] : sb[a] = "on" + a;
}
function Fb(a, b, c, d) {
    var f = true;
    if (a = yb(a)) {
        if (b = a.a[b.toString()]) for(b = b.concat(), a = 0; a < b.length; a++){
            var g = b[a];
            g && g.capture == c && !g.s && (g = Gb(g, d), f = f && false !== g);
        }
    }
    return f;
}
function Gb(a, b) {
    var c = a.listener, d = a.A || a.src;
    a.v && Db(a);
    return c.call(d, b);
}
function Bb(a, b) {
    if (a.s) return true;
    if (!ib) {
        var c = b || r("window.event");
        b = new K(c, this);
        var d = true;
        if (!(0 > c.keyCode || (void 0) != c.returnValue)) {
            a: {
                var f = false;
                if (0 == c.keyCode) try {
                    c.keyCode = -1;
                    break a;
                } catch (e) {
                    f = true;
                }
                if (f || (void 0) == c.returnValue) c.returnValue = true;
            }
            c = [];
            for(f = b.a; f; f = f.parentNode)c.push(f);
            a = a.type;
            for(f = c.length - 1; 0 <= f; f--){
                b.a = c[f];
                var g = Fb(c[f], a, true, b);
                d = d && g;
            }
            for(f = 0; f < c.length; f++)b.a = c[f], g = Fb(c[f], a, false, b), d = d && g;
        }
        return d;
    }
    return Gb(a, new K(b, this));
}
function yb(a) {
    a = a[rb];
    return a instanceof M ? a : null;
}
var Hb = "__closure_events_fn_" + (1000000000 * Math.random() >>> 0);
function wb(a) {
    if ("function" == ia(a)) return a;
    a[Hb] || (a[Hb] = function(b) {
        return a.handleEvent(b);
    });
    return a[Hb];
}
function N() {
    eb.call(this);
    this.f = new M(this);
    this.N = this;
}
y(N, eb);
N.prototype[L] = true;
N.prototype.addEventListener = function(a, b, c, d) {
    ub(this, a, b, c, d);
};
N.prototype.removeEventListener = function(a, b, c, d) {
    Cb(this, a, b, c, d);
};
function O(a, b) {
    a = a.N;
    var c = b.type || b;
    if ("string" === typeof b) b = new J(b, a);
    else if (b instanceof J) b.target = b.target || a;
    else {
        var d = b;
        b = new J(c, a);
        Oa(b, d);
    }
    a = b.a = a;
    Ib(a, c, true, b);
    Ib(a, c, false, b);
}
function Ib(a, b, c, d) {
    if (b = a.f.a[String(b)]) {
        b = b.concat();
        for(var f = true, g = 0; g < b.length; ++g){
            var e = b[g];
            if (e && !e.s && e.capture == c) {
                var h = e.listener, k = e.A || e.src;
                e.v && qb(a.f, e);
                f = false !== h.call(k, d) && f;
            }
        }
    }
}
function Jb(a, b, c) {
    if ("function" == ia(a)) c && (a = w(a, c));
    else if (a && "function" == typeof a.handleEvent) a = w(a.handleEvent, a);
    else throw Error("Invalid listener argument");
    return 2147483647 < Number(b) ? -1 : q.setTimeout(a, b || 0);
}
function Kb(a, b, c) {
    this.reset(a, b, c, void 0, void 0);
}
Kb.prototype.a = null;
var Lb = 0;
Kb.prototype.reset = function(a, b, c, d, f) {
    "number" == typeof f || Lb++;
    d || na();
    delete this.a;
};
function Mb(a) {
    this.f = a;
    this.b = this.c = this.a = null;
}
function Nb(a, b) {
    this.name = a;
    this.value = b;
}
Nb.prototype.toString = function() {
    return this.name;
};
var Ob = new Nb("SEVERE", 1000), Pb = new Nb("CONFIG", 700), Qb = new Nb("FINE", 500);
function Rb(a) {
    if (a.c) return a.c;
    if (a.a) return Rb(a.a);
    ua("Root logger has no level set.");
    return null;
}
Mb.prototype.log = function(a, b, c) {
    if (a.value >= Rb(this).value) for("function" == ia(b) && (b = b()), a = new Kb(a, String(b), this.f), c && (a.a = c), c = this; c;)c = c.a;
};
var Sb = {
}, Tb = null;
function Ub(a) {
    Tb || (Tb = new Mb(""), Sb[""] = Tb, Tb.c = Pb);
    var b;
    if (!(b = Sb[a])) {
        b = new Mb(a);
        var c = a.lastIndexOf("."), d = a.substr(c + 1);
        c = Ub(a.substr(0, c));
        c.b || (c.b = {
        });
        c.b[d] = b;
        b.a = c;
        Sb[a] = b;
    }
    return b;
}
function P(a, b) {
    a && a.log(Qb, b, void 0);
}
function Vb() {
}
Vb.prototype.a = null;
function Wb(a) {
    var b;
    (b = a.a) || (b = {
    }, Xb(a) && (b[0] = true, b[1] = true), b = a.a = b);
    return b;
}
var Yb;
function Zb() {
}
y(Zb, Vb);
function $b(a) {
    return (a = Xb(a)) ? new ActiveXObject(a) : new XMLHttpRequest;
}
function Xb(a) {
    if (!a.b && "undefined" == typeof XMLHttpRequest && "undefined" != typeof ActiveXObject) {
        for(var b = [
            "MSXML2.XMLHTTP.6.0",
            "MSXML2.XMLHTTP.3.0",
            "MSXML2.XMLHTTP",
            "Microsoft.XMLHTTP"
        ], c = 0; c < b.length; c++){
            var d = b[c];
            try {
                return new ActiveXObject(d), a.b = d;
            } catch (f) {
            }
        }
        throw Error("Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed");
    }
    return a.b;
}
Yb = new Zb;
function Q(a, b) {
    this.b = {
    };
    this.a = [];
    this.c = 0;
    var c = arguments.length;
    if (1 < c) {
        if (c % 2) throw Error("Uneven number of arguments");
        for(var d = 0; d < c; d += 2)this.set(arguments[d], arguments[d + 1]);
    } else a && ac(this, a);
}
Q.prototype.f = function() {
    bc(this);
    return this.a.concat();
};
function bc(a) {
    if (a.c != a.a.length) {
        for(var b = 0, c = 0; b < a.a.length;){
            var d = a.a[b];
            R(a.b, d) && (a.a[c++] = d);
            b++;
        }
        a.a.length = c;
    }
    if (a.c != a.a.length) {
        var f = {
        };
        for(c = b = 0; b < a.a.length;)d = a.a[b], R(f, d) || (a.a[c++] = d, f[d] = 1), b++;
        a.a.length = c;
    }
}
Q.prototype.get = function(a, b) {
    return R(this.b, a) ? this.b[a] : b;
};
Q.prototype.set = function(a, b) {
    R(this.b, a) || (this.c++, this.a.push(a));
    this.b[a] = b;
};
function ac(a, b) {
    if (b instanceof Q) for(var c = b.f(), d = 0; d < c.length; d++)a.set(c[d], b.get(c[d]));
    else for(c in b)a.set(c, b[c]);
}
Q.prototype.forEach = function(a, b) {
    for(var c = this.f(), d = 0; d < c.length; d++){
        var f = c[d], g = this.get(f);
        a.call(b, g, f, this);
    }
};
function R(a, b) {
    return Object.prototype.hasOwnProperty.call(a, b);
}
var cc = /^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;
function S(a) {
    N.call(this);
    this.headers = new Q;
    this.D = a || null;
    this.c = false;
    this.C = this.a = null;
    this.J = this.o = "";
    this.g = 0;
    this.i = "";
    this.h = this.I = this.m = this.G = false;
    this.l = 0;
    this.u = null;
    this.j = dc;
    this.B = this.H = false;
}
y(S, N);
var dc = "", ec = S.prototype, fc = Ub("goog.net.XhrIo");
ec.b = fc;
var gc = /^https?$/i, hc = [
    "POST",
    "PUT"
];
function ic(a, b, c) {
    if (a.a) throw Error("[goog.net.XhrIo] Object is active with another request=" + a.o + "; newUri=" + b);
    a.o = b;
    a.i = "";
    a.g = 0;
    a.J = "POST";
    a.G = false;
    a.c = true;
    a.a = a.D ? $b(a.D) : $b(Yb);
    a.C = a.D ? Wb(a.D) : Wb(Yb);
    a.a.onreadystatechange = w(a.K, a);
    try {
        P(a.b, T(a, "Opening Xhr")), a.I = true, a.a.open("POST", String(b), true), a.I = false;
    } catch (g) {
        P(a.b, T(a, "Error opening Xhr: " + g.message));
        jc(a, g);
        return;
    }
    b = c || "";
    c = new Q(a.headers);
    var d = Fa(c.f()), f = q.FormData && b instanceof q.FormData;
    !(0 <= Ea(hc, "POST")) || d || f || c.set("Content-Type", "application/x-www-form-urlencoded;charset=utf-8");
    c.forEach(function(g, e) {
        this.a.setRequestHeader(e, g);
    }, a);
    a.j && (a.a.responseType = a.j);
    "withCredentials" in a.a && a.a.withCredentials !== a.H && (a.a.withCredentials = a.H);
    try {
        kc(a), 0 < a.l && (a.B = lc(a.a), P(a.b, T(a, "Will abort after " + a.l + "ms if incomplete, xhr2 " + a.B)), a.B ? (a.a.timeout = a.l, a.a.ontimeout = w(a.L, a)) : a.u = Jb(a.L, a.l, a)), P(a.b, T(a, "Sending request")), a.m = true, a.a.send(b), a.m = false;
    } catch (g) {
        P(a.b, T(a, "Send error: " + g.message)), jc(a, g);
    }
}
function lc(a) {
    return H && ab(9) && "number" === typeof a.timeout && (void 0) !== a.ontimeout;
}
function Ga(a) {
    return "content-type" == a.toLowerCase();
}
S.prototype.L = function() {
    "undefined" != typeof ha && this.a && (this.i = "Timed out after " + this.l + "ms, aborting", this.g = 8, P(this.b, T(this, this.i)), O(this, "timeout"), this.abort(8));
};
function jc(a, b) {
    a.c = false;
    a.a && (a.h = true, a.a.abort(), a.h = false);
    a.i = b;
    a.g = 5;
    mc(a);
    nc(a);
}
function mc(a) {
    a.G || (a.G = true, O(a, "complete"), O(a, "error"));
}
S.prototype.abort = function(a) {
    this.a && this.c && (P(this.b, T(this, "Aborting")), this.c = false, this.h = true, this.a.abort(), this.h = false, this.g = a || 7, O(this, "complete"), O(this, "abort"), nc(this));
};
S.prototype.K = function() {
    this.F || (this.I || this.m || this.h ? oc(this) : this.O());
};
S.prototype.O = function() {
    oc(this);
};
function oc(a) {
    if (a.c && "undefined" != typeof ha) {
        if (a.C[1] && 4 == U(a) && 2 == a.getStatus()) P(a.b, T(a, "Local request error detected and ignored"));
        else if (a.m && 4 == U(a)) Jb(a.K, 0, a);
        else if (O(a, "readystatechange"), 4 == U(a)) {
            P(a.b, T(a, "Request complete"));
            a.c = false;
            try {
                var b = a.getStatus();
                a: switch(b){
                    case 200:
                    case 201:
                    case 202:
                    case 204:
                    case 206:
                    case 304:
                    case 1223:
                        var c = true;
                        break a;
                    default:
                        c = false;
                }
                var d;
                if (!(d = c)) {
                    var f;
                    if (f = 0 === b) {
                        var g = String(a.o).match(cc)[1] || null;
                        if (!g && q.self && q.self.location) {
                            var e = q.self.location.protocol;
                            g = e.substr(0, e.length - 1);
                        }
                        f = !gc.test(g ? g.toLowerCase() : "");
                    }
                    d = f;
                }
                if (d) O(a, "complete"), O(a, "success");
                else {
                    a.g = 6;
                    try {
                        var h = 2 < U(a) ? a.a.statusText : "";
                    } catch (k) {
                        P(a.b, "Can not get status: " + k.message), h = "";
                    }
                    a.i = h + " [" + a.getStatus() + "]";
                    mc(a);
                }
            } finally{
                nc(a);
            }
        }
    }
}
function nc(a) {
    if (a.a) {
        kc(a);
        var b = a.a, c = a.C[0] ? t : null;
        a.a = null;
        a.C = null;
        O(a, "ready");
        try {
            b.onreadystatechange = c;
        } catch (d) {
            (a = a.b) && a.log(Ob, "Problem encountered resetting onreadystatechange: " + d.message, void 0);
        }
    }
}
function kc(a) {
    a.a && a.B && (a.a.ontimeout = null);
    a.u && (q.clearTimeout(a.u), a.u = null);
}
function U(a) {
    return a.a ? a.a.readyState : 0;
}
S.prototype.getStatus = function() {
    try {
        return 2 < U(this) ? this.a.status : -1;
    } catch (a) {
        return -1;
    }
};
function pc(a) {
    try {
        if (!a.a) return null;
        if ("response" in a.a) return a.a.response;
        switch(a.j){
            case dc:
            case "text":
                return a.a.responseText;
            case "arraybuffer":
                if ("mozResponseArrayBuffer" in a.a) return a.a.mozResponseArrayBuffer;
        }
        var b = a.b;
        b && b.log(Ob, "Response type " + a.j + " is not supported on this browser", void 0);
        return null;
    } catch (c) {
        return P(a.b, "Can not get response: " + c.message), null;
    }
}
function qc(a, b) {
    if (a.a && 4 == U(a)) return a = a.a.getResponseHeader(b), null === a ? void 0 : a;
}
function rc(a) {
    var b = {
    };
    a = (a.a && 4 == U(a) ? a.a.getAllResponseHeaders() || "" : "").split("\r\n");
    for(var c = 0; c < a.length; c++)if (!/^[\s\xa0]*$/.test(a[c])) {
        var d = Pa(a[c]), f = d[0];
        d = d[1];
        if ("string" === typeof d) {
            d = d.trim();
            var g = b[f] || [];
            b[f] = g;
            g.push(d);
        }
    }
    return Ma(b, function(e) {
        return e.join(", ");
    });
}
function T(a, b) {
    return b + " [" + a.J + " " + a.o + " " + a.getStatus() + "]";
}
var sc = {
}, V = null;
function tc(a) {
    var b = a.length, c = 3 * b / 4;
    c % 3 ? c = Math.floor(c) : E("=.", a[b - 1]) && (c = E("=.", a[b - 2]) ? c - 2 : c - 1);
    var d = new Uint8Array(c), f = 0;
    uc(a, function(g) {
        d[f++] = g;
    });
    return d.subarray(0, f);
}
function uc(a, b) {
    function c(k) {
        for(; d < a.length;){
            var l = a.charAt(d++), m = V[l];
            if (null != m) return m;
            if (!/^[\s\xa0]*$/.test(l)) throw Error("Unknown base64 encoding at char: " + l);
        }
        return k;
    }
    vc();
    for(var d = 0;;){
        var f = c(-1), g = c(0), e = c(64), h = c(64);
        if (64 === h && -1 === f) break;
        b(f << 2 | g >> 4);
        64 != e && (b(g << 4 & 240 | e >> 2), 64 != h && b(e << 6 & 192 | h));
    }
}
function vc() {
    if (!V) {
        V = {
        };
        for(var a = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""), b = [
            "+/=",
            "+/",
            "-_=",
            "-_.",
            "-_"
        ], c = 0; 5 > c; c++){
            var d = a.concat(b[c].split(""));
            sc[c] = d;
            for(var f = 0; f < d.length; f++){
                var g = d[f];
                (void 0) === V[g] && (V[g] = f);
            }
        }
    }
}
var wc = [
    "content-type",
    "grpc-status",
    "grpc-message"
];
function W(a) {
    this.a = a.T;
    this.l = null;
    this.b = [];
    this.h = [];
    this.g = [];
    this.f = [];
    this.c = [];
    this.j = false;
    this.i = 0;
    this.m = new va;
    var b = this;
    ub(this.a, "readystatechange", function() {
        var c = b.a;
        if (c = c.a ? c.a.getResponseHeader("Content-Type") : null) {
            c = c.toLowerCase();
            if (0 == c.lastIndexOf("application/grpc-web-text", 0)) {
                c = b.a;
                try {
                    var d = c.a ? c.a.responseText : "";
                } catch (l) {
                    P(c.b, "Can not get responseText: " + l.message), d = "";
                }
                c = d || "";
                d = c.length - c.length % 4;
                c = c.substr(b.i, d - b.i);
                if (0 == c.length) return;
                b.i = d;
                c = tc(c);
            } else if (0 == c.lastIndexOf("application/grpc", 0)) c = new Uint8Array(pc(b.a));
            else {
                X(b, {
                    code: 2,
                    message: "Unknown Content-type received.",
                    metadata: {
                    }
                });
                return;
            }
            d = null;
            try {
                d = xa(b.m, c);
            } catch (l) {
                X(b, {
                    code: 2,
                    message: "Error in parsing response body",
                    metadata: {
                    }
                });
            }
            if (d) for(c = 0; c < d.length; c++){
                if (ya in d[c]) {
                    var f = d[c][ya];
                    if (f) try {
                        var g = b.l(f);
                        if (g) {
                            f = b;
                            for(var e = g, h = 0; h < f.b.length; h++)f.b[h](e);
                        }
                    } catch (l) {
                        X(b, {
                            code: 2,
                            message: "Error in response deserializer function.",
                            metadata: {
                            }
                        });
                    }
                }
                if (D in d[c] && 0 < d[c][D].length) {
                    f = "";
                    for(e = 0; e < d[c][D].length; e++)f += String.fromCharCode(d[c][D][e]);
                    f = f.trim().split("\r\n");
                    e = {
                    };
                    for(h = 0; h < f.length; h++){
                        var k = f[h].indexOf(":");
                        e[f[h].substring(0, k).trim()] = f[h].substring(k + 1).trim();
                    }
                    f = e;
                    e = 0;
                    h = "";
                    "grpc-status" in f && (e = f["grpc-status"], delete f["grpc-status"]);
                    "grpc-message" in f && (h = f["grpc-message"], delete f["grpc-message"]);
                    X(b, {
                        code: Number(e),
                        message: h,
                        metadata: f
                    });
                }
            }
        }
    });
    ub(this.a, "complete", function() {
        var c = b.a.g, d = "", f = {
        }, g = rc(b.a);
        Object.keys(g).forEach(function(h) {
            wc.includes(h) || (f[h] = g[h]);
        });
        xc(b, f);
        if (0 != c) {
            switch(c){
                case 7:
                    var e = 10;
                    break;
                case 8:
                    e = 4;
                    break;
                case 6:
                    e = Da(b.a.getStatus());
                    break;
                default:
                    e = 14;
            }
            10 == e && b.j || X(b, {
                code: e,
                message: sa(c),
                metadata: {
                }
            });
        } else c = false, "grpc-status" in g && (e = qc(b.a, "grpc-status"), "grpc-message" in g && (d = qc(b.a, "grpc-message")), 0 != Number(e) && (X(b, {
            code: Number(e),
            message: d,
            metadata: g
        }), c = true)), c || yc(b);
    });
}
W.prototype.on = function(a, b) {
    "data" == a ? this.b.push(b) : "status" == a ? this.h.push(b) : "metadata" == a ? this.g.push(b) : "end" == a ? this.c.push(b) : "error" == a && this.f.push(b);
    return this;
};
function Y(a, b) {
    b = a.indexOf(b);
    -1 < b && a.splice(b, 1);
}
W.prototype.removeListener = function(a, b) {
    "data" == a ? Y(this.b, b) : "status" == a ? Y(this.h, b) : "metadata" == a ? Y(this.g, b) : "end" == a ? Y(this.c, b) : "error" == a && Y(this.f, b);
    return this;
};
W.prototype.cancel = function() {
    this.j = true;
    this.a.abort();
};
function X(a, b) {
    if (0 != b.code) for(var c = {
        code: b.code,
        message: decodeURIComponent(b.message || ""),
        metadata: b.metadata
    }, d = 0; d < a.f.length; d++)a.f[d](c);
    b = {
        code: b.code,
        details: decodeURIComponent(b.message || ""),
        metadata: b.metadata
    };
    for(c = 0; c < a.h.length; c++)a.h[c](b);
}
function xc(a, b) {
    for(var c = 0; c < a.g.length; c++)a.g[c](b);
}
function yc(a) {
    for(var b = 0; b < a.c.length; b++)a.c[b]();
}
W.prototype.cancel = W.prototype.cancel;
W.prototype.removeListener = W.prototype.removeListener;
W.prototype.on = W.prototype.on;
function zc(a) {
    var b = "";
    La(a, function(c, d) {
        b += d;
        b += ":";
        b += c;
        b += "\r\n";
    });
    return b;
}
function Z(a) {
    this.a = r("format", a) || "text";
    this.f = r("suppressCorsPreflight", a) || false;
    this.c = r("withCredentials", a) || false;
    this.b = r("streamInterceptors", a) || [];
    this.g = r("unaryInterceptors", a) || [];
}
Z.prototype.P = function(a, b, c, d, f) {
    var g = this;
    d = ra(a, b, "unary", d);
    var e = a.substr(0, a.length - d.name.length);
    a = Ac(function(h) {
        return Bc(g, h, e);
    }, this.b).call(this, qa(d, b, c));
    Cc(a, f, false);
    return new B(a);
};
Z.prototype.M = function(a, b, c, d) {
    var f = this;
    d = ra(a, b, "unary", d);
    var g = a.substr(0, a.length - d.name.length);
    return Ac(function(e) {
        return new Promise(function(h, k) {
            var l = Bc(f, e, g), m, p, n;
            Cc(l, function(v, x, F, Eb) {
                v ? k(v) : x ? n = x : F ? p = F : Eb ? m = Eb : (v = e.getMethodDescriptor(), x = m, x = (void 0) === x ? {
                } : x, h(new A(n, v, x, (void 0) === p ? null : p)));
            }, true);
        });
    }, this.g).call(this, qa(d, b, c)).then(function(e) {
        return e.getResponseMessage();
    });
};
Z.prototype.unaryCall = function(a, b, c, d) {
    return this.M(a, b, c, d);
};
Z.prototype.R = function(a, b, c, d) {
    var f = this;
    d = ra(a, b, "server_streaming", d);
    var g = a.substr(0, a.length - d.name.length);
    return Ac(function(e) {
        return Bc(f, e, g);
    }, this.b).call(this, qa(d, b, c));
};
function Bc(a, b, c) {
    var d = b.getMethodDescriptor(), f = c + d.name;
    c = new S;
    c.H = a.c;
    var g = new W({
        T: c
    });
    g.l = d.b;
    ac(c.headers, b.getMetadata());
    "text" == a.a ? (c.headers.set("Content-Type", "application/grpc-web-text"), c.headers.set("Accept", "application/grpc-web-text")) : c.headers.set("Content-Type", "application/grpc-web+proto");
    c.headers.set("X-User-Agent", "grpc-web-javascript/0.1");
    c.headers.set("X-Grpc-Web", "1");
    if (R(c.headers.b, "deadline")) {
        var e = c.headers.get("deadline");
        e = Math.round(e - (new Date).getTime());
        var h = c.headers;
        R(h.b, "deadline") && (delete h.b.deadline, h.c--, h.a.length > 2 * h.c && bc(h));
        Infinity === e && (e = 0);
        0 < e && c.headers.set("grpc-timeout", e + "m");
    }
    if (a.f) {
        h = c.headers;
        bc(h);
        e = {
        };
        for(var k = 0; k < h.a.length; k++){
            var l = h.a[k];
            e[l] = h.b[l];
        }
        h = c.headers;
        h.b = {
        };
        h.a.length = 0;
        h.c = 0;
        b: {
            for(m in e){
                var m = false;
                break b;
            }
            m = true;
        }
        if (!m) {
            if (e = zc(e), "string" === typeof f) {
                if (m = encodeURIComponent("$httpHeaders"), e = null != e ? "=" + encodeURIComponent(String(e)) : "", m += e) e = f.indexOf("#"), 0 > e && (e = f.length), h = f.indexOf("?"), 0 > h || h > e ? (h = e, k = "") : k = f.substring(h + 1, e), f = [
                    f.substr(0, h),
                    k,
                    f.substr(e)
                ], e = f[1], f[1] = m ? e ? e + "&" + m : m : e, f = f[0] + (f[1] ? "?" + f[1] : "") + f[2];
            } else f.a("$httpHeaders", e);
        }
    }
    b = d.a(b.getRequestMessage());
    d = b.length;
    m = [
        0,
        0,
        0,
        0
    ];
    e = new Uint8Array(5 + d);
    for(h = 3; 0 <= h; h--)m[h] = d % 256, d >>>= 8;
    e.set(new Uint8Array(m), 1);
    e.set(b, 5);
    b = e;
    if ("text" == a.a) {
        a = b;
        var p;
        (void 0) === p && (p = 0);
        vc();
        p = sc[p];
        b = [];
        for(d = 0; d < a.length; d += 3){
            l = a[d];
            var n = (m = d + 1 < a.length) ? a[d + 1] : 0;
            k = (e = d + 2 < a.length) ? a[d + 2] : 0;
            h = l >> 2;
            l = (l & 3) << 4 | n >> 4;
            n = (n & 15) << 2 | k >> 6;
            k &= 63;
            e || (k = 64, m || (n = 64));
            b.push(p[h], p[l], p[n] || "", p[k] || "");
        }
        b = b.join("");
    } else "binary" == a.a && (c.j = "arraybuffer");
    ic(c, f, b);
    return g;
}
function Cc(a, b, c) {
    var d = null, f = false;
    a.on("data", function(g) {
        d = g;
    });
    a.on("error", function(g) {
        0 == g.code || f || (f = true, b(g, null));
    });
    a.on("status", function(g) {
        0 == g.code || f ? c && b(null, null, g) : (f = true, b({
            code: g.code,
            message: g.details,
            metadata: g.metadata
        }, null));
    });
    if (c) a.on("metadata", function(g) {
        b(null, null, null, g);
    });
    a.on("end", function() {
        f || (null == d ? b({
            code: 2,
            message: "Incomplete response"
        }) : b(null, d));
        c && b(null, null);
    });
}
function Ac(a, b) {
    var c = a;
    b.forEach(function(d) {
        var f = c;
        c = function(g) {
            return d.intercept(g, f);
        };
    });
    return c;
}
Z.prototype.serverStreaming = Z.prototype.R;
Z.prototype.unaryCall = Z.prototype.unaryCall;
Z.prototype.thenableCall = Z.prototype.M;
Z.prototype.rpcCall = Z.prototype.P;
module.exports.AbstractClientBase = {
    MethodInfo: function(a, b, c, d, f) {
        this.name = d;
        this.b = f;
        this.f = a;
        this.a = b;
        this.c = c;
    }
};
module.exports.GrpcWebClientBase = Z;
module.exports.StatusCode = {
    OK: 0,
    CANCELLED: 1,
    UNKNOWN: 2,
    INVALID_ARGUMENT: 3,
    DEADLINE_EXCEEDED: 4,
    NOT_FOUND: 5,
    ALREADY_EXISTS: 6,
    PERMISSION_DENIED: 7,
    UNAUTHENTICATED: 16,
    RESOURCE_EXHAUSTED: 8,
    FAILED_PRECONDITION: 9,
    ABORTED: 10,
    OUT_OF_RANGE: 11,
    UNIMPLEMENTED: 12,
    INTERNAL: 13,
    UNAVAILABLE: 14,
    DATA_LOSS: 15
};
module.exports.MethodDescriptor = pa;
module.exports.MethodType = {
    UNARY: "unary",
    SERVER_STREAMING: "server_streaming"
};

},{}],"4azJS":[function(require,module,exports) {
"use strict";
var __createBinding = this && this.__createBinding || (Object.create ? function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, {
        enumerable: true,
        get: function() {
            return m[k];
        }
    });
} : function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});
var __exportStar = this && this.__exportStar || function(m, exports) {
    for(var p in m)if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.interval = exports.iif = exports.generate = exports.fromEventPattern = exports.fromEvent = exports.from = exports.forkJoin = exports.empty = exports.defer = exports.connectable = exports.concat = exports.combineLatest = exports.bindNodeCallback = exports.bindCallback = exports.UnsubscriptionError = exports.TimeoutError = exports.SequenceError = exports.ObjectUnsubscribedError = exports.NotFoundError = exports.EmptyError = exports.ArgumentOutOfRangeError = exports.firstValueFrom = exports.lastValueFrom = exports.isObservable = exports.identity = exports.noop = exports.pipe = exports.NotificationKind = exports.Notification = exports.Subscriber = exports.Subscription = exports.Scheduler = exports.VirtualAction = exports.VirtualTimeScheduler = exports.animationFrameScheduler = exports.animationFrame = exports.queueScheduler = exports.queue = exports.asyncScheduler = exports.async = exports.asapScheduler = exports.asap = exports.AsyncSubject = exports.ReplaySubject = exports.BehaviorSubject = exports.Subject = exports.animationFrames = exports.observable = exports.ConnectableObservable = exports.Observable = void 0;
exports.config = exports.NEVER = exports.EMPTY = exports.scheduled = exports.zip = exports.using = exports.timer = exports.throwError = exports.range = exports.race = exports.partition = exports.pairs = exports.onErrorResumeNext = exports.of = exports.never = exports.merge = void 0;
var Observable_1 = require("./internal/Observable");
Object.defineProperty(exports, "Observable", {
    enumerable: true,
    get: function() {
        return Observable_1.Observable;
    }
});
var ConnectableObservable_1 = require("./internal/observable/ConnectableObservable");
Object.defineProperty(exports, "ConnectableObservable", {
    enumerable: true,
    get: function() {
        return ConnectableObservable_1.ConnectableObservable;
    }
});
var observable_1 = require("./internal/symbol/observable");
Object.defineProperty(exports, "observable", {
    enumerable: true,
    get: function() {
        return observable_1.observable;
    }
});
var animationFrames_1 = require("./internal/observable/dom/animationFrames");
Object.defineProperty(exports, "animationFrames", {
    enumerable: true,
    get: function() {
        return animationFrames_1.animationFrames;
    }
});
var Subject_1 = require("./internal/Subject");
Object.defineProperty(exports, "Subject", {
    enumerable: true,
    get: function() {
        return Subject_1.Subject;
    }
});
var BehaviorSubject_1 = require("./internal/BehaviorSubject");
Object.defineProperty(exports, "BehaviorSubject", {
    enumerable: true,
    get: function() {
        return BehaviorSubject_1.BehaviorSubject;
    }
});
var ReplaySubject_1 = require("./internal/ReplaySubject");
Object.defineProperty(exports, "ReplaySubject", {
    enumerable: true,
    get: function() {
        return ReplaySubject_1.ReplaySubject;
    }
});
var AsyncSubject_1 = require("./internal/AsyncSubject");
Object.defineProperty(exports, "AsyncSubject", {
    enumerable: true,
    get: function() {
        return AsyncSubject_1.AsyncSubject;
    }
});
var asap_1 = require("./internal/scheduler/asap");
Object.defineProperty(exports, "asap", {
    enumerable: true,
    get: function() {
        return asap_1.asap;
    }
});
Object.defineProperty(exports, "asapScheduler", {
    enumerable: true,
    get: function() {
        return asap_1.asapScheduler;
    }
});
var async_1 = require("./internal/scheduler/async");
Object.defineProperty(exports, "async", {
    enumerable: true,
    get: function() {
        return async_1.async;
    }
});
Object.defineProperty(exports, "asyncScheduler", {
    enumerable: true,
    get: function() {
        return async_1.asyncScheduler;
    }
});
var queue_1 = require("./internal/scheduler/queue");
Object.defineProperty(exports, "queue", {
    enumerable: true,
    get: function() {
        return queue_1.queue;
    }
});
Object.defineProperty(exports, "queueScheduler", {
    enumerable: true,
    get: function() {
        return queue_1.queueScheduler;
    }
});
var animationFrame_1 = require("./internal/scheduler/animationFrame");
Object.defineProperty(exports, "animationFrame", {
    enumerable: true,
    get: function() {
        return animationFrame_1.animationFrame;
    }
});
Object.defineProperty(exports, "animationFrameScheduler", {
    enumerable: true,
    get: function() {
        return animationFrame_1.animationFrameScheduler;
    }
});
var VirtualTimeScheduler_1 = require("./internal/scheduler/VirtualTimeScheduler");
Object.defineProperty(exports, "VirtualTimeScheduler", {
    enumerable: true,
    get: function() {
        return VirtualTimeScheduler_1.VirtualTimeScheduler;
    }
});
Object.defineProperty(exports, "VirtualAction", {
    enumerable: true,
    get: function() {
        return VirtualTimeScheduler_1.VirtualAction;
    }
});
var Scheduler_1 = require("./internal/Scheduler");
Object.defineProperty(exports, "Scheduler", {
    enumerable: true,
    get: function() {
        return Scheduler_1.Scheduler;
    }
});
var Subscription_1 = require("./internal/Subscription");
Object.defineProperty(exports, "Subscription", {
    enumerable: true,
    get: function() {
        return Subscription_1.Subscription;
    }
});
var Subscriber_1 = require("./internal/Subscriber");
Object.defineProperty(exports, "Subscriber", {
    enumerable: true,
    get: function() {
        return Subscriber_1.Subscriber;
    }
});
var Notification_1 = require("./internal/Notification");
Object.defineProperty(exports, "Notification", {
    enumerable: true,
    get: function() {
        return Notification_1.Notification;
    }
});
Object.defineProperty(exports, "NotificationKind", {
    enumerable: true,
    get: function() {
        return Notification_1.NotificationKind;
    }
});
var pipe_1 = require("./internal/util/pipe");
Object.defineProperty(exports, "pipe", {
    enumerable: true,
    get: function() {
        return pipe_1.pipe;
    }
});
var noop_1 = require("./internal/util/noop");
Object.defineProperty(exports, "noop", {
    enumerable: true,
    get: function() {
        return noop_1.noop;
    }
});
var identity_1 = require("./internal/util/identity");
Object.defineProperty(exports, "identity", {
    enumerable: true,
    get: function() {
        return identity_1.identity;
    }
});
var isObservable_1 = require("./internal/util/isObservable");
Object.defineProperty(exports, "isObservable", {
    enumerable: true,
    get: function() {
        return isObservable_1.isObservable;
    }
});
var lastValueFrom_1 = require("./internal/lastValueFrom");
Object.defineProperty(exports, "lastValueFrom", {
    enumerable: true,
    get: function() {
        return lastValueFrom_1.lastValueFrom;
    }
});
var firstValueFrom_1 = require("./internal/firstValueFrom");
Object.defineProperty(exports, "firstValueFrom", {
    enumerable: true,
    get: function() {
        return firstValueFrom_1.firstValueFrom;
    }
});
var ArgumentOutOfRangeError_1 = require("./internal/util/ArgumentOutOfRangeError");
Object.defineProperty(exports, "ArgumentOutOfRangeError", {
    enumerable: true,
    get: function() {
        return ArgumentOutOfRangeError_1.ArgumentOutOfRangeError;
    }
});
var EmptyError_1 = require("./internal/util/EmptyError");
Object.defineProperty(exports, "EmptyError", {
    enumerable: true,
    get: function() {
        return EmptyError_1.EmptyError;
    }
});
var NotFoundError_1 = require("./internal/util/NotFoundError");
Object.defineProperty(exports, "NotFoundError", {
    enumerable: true,
    get: function() {
        return NotFoundError_1.NotFoundError;
    }
});
var ObjectUnsubscribedError_1 = require("./internal/util/ObjectUnsubscribedError");
Object.defineProperty(exports, "ObjectUnsubscribedError", {
    enumerable: true,
    get: function() {
        return ObjectUnsubscribedError_1.ObjectUnsubscribedError;
    }
});
var SequenceError_1 = require("./internal/util/SequenceError");
Object.defineProperty(exports, "SequenceError", {
    enumerable: true,
    get: function() {
        return SequenceError_1.SequenceError;
    }
});
var timeout_1 = require("./internal/operators/timeout");
Object.defineProperty(exports, "TimeoutError", {
    enumerable: true,
    get: function() {
        return timeout_1.TimeoutError;
    }
});
var UnsubscriptionError_1 = require("./internal/util/UnsubscriptionError");
Object.defineProperty(exports, "UnsubscriptionError", {
    enumerable: true,
    get: function() {
        return UnsubscriptionError_1.UnsubscriptionError;
    }
});
var bindCallback_1 = require("./internal/observable/bindCallback");
Object.defineProperty(exports, "bindCallback", {
    enumerable: true,
    get: function() {
        return bindCallback_1.bindCallback;
    }
});
var bindNodeCallback_1 = require("./internal/observable/bindNodeCallback");
Object.defineProperty(exports, "bindNodeCallback", {
    enumerable: true,
    get: function() {
        return bindNodeCallback_1.bindNodeCallback;
    }
});
var combineLatest_1 = require("./internal/observable/combineLatest");
Object.defineProperty(exports, "combineLatest", {
    enumerable: true,
    get: function() {
        return combineLatest_1.combineLatest;
    }
});
var concat_1 = require("./internal/observable/concat");
Object.defineProperty(exports, "concat", {
    enumerable: true,
    get: function() {
        return concat_1.concat;
    }
});
var connectable_1 = require("./internal/observable/connectable");
Object.defineProperty(exports, "connectable", {
    enumerable: true,
    get: function() {
        return connectable_1.connectable;
    }
});
var defer_1 = require("./internal/observable/defer");
Object.defineProperty(exports, "defer", {
    enumerable: true,
    get: function() {
        return defer_1.defer;
    }
});
var empty_1 = require("./internal/observable/empty");
Object.defineProperty(exports, "empty", {
    enumerable: true,
    get: function() {
        return empty_1.empty;
    }
});
var forkJoin_1 = require("./internal/observable/forkJoin");
Object.defineProperty(exports, "forkJoin", {
    enumerable: true,
    get: function() {
        return forkJoin_1.forkJoin;
    }
});
var from_1 = require("./internal/observable/from");
Object.defineProperty(exports, "from", {
    enumerable: true,
    get: function() {
        return from_1.from;
    }
});
var fromEvent_1 = require("./internal/observable/fromEvent");
Object.defineProperty(exports, "fromEvent", {
    enumerable: true,
    get: function() {
        return fromEvent_1.fromEvent;
    }
});
var fromEventPattern_1 = require("./internal/observable/fromEventPattern");
Object.defineProperty(exports, "fromEventPattern", {
    enumerable: true,
    get: function() {
        return fromEventPattern_1.fromEventPattern;
    }
});
var generate_1 = require("./internal/observable/generate");
Object.defineProperty(exports, "generate", {
    enumerable: true,
    get: function() {
        return generate_1.generate;
    }
});
var iif_1 = require("./internal/observable/iif");
Object.defineProperty(exports, "iif", {
    enumerable: true,
    get: function() {
        return iif_1.iif;
    }
});
var interval_1 = require("./internal/observable/interval");
Object.defineProperty(exports, "interval", {
    enumerable: true,
    get: function() {
        return interval_1.interval;
    }
});
var merge_1 = require("./internal/observable/merge");
Object.defineProperty(exports, "merge", {
    enumerable: true,
    get: function() {
        return merge_1.merge;
    }
});
var never_1 = require("./internal/observable/never");
Object.defineProperty(exports, "never", {
    enumerable: true,
    get: function() {
        return never_1.never;
    }
});
var of_1 = require("./internal/observable/of");
Object.defineProperty(exports, "of", {
    enumerable: true,
    get: function() {
        return of_1.of;
    }
});
var onErrorResumeNext_1 = require("./internal/observable/onErrorResumeNext");
Object.defineProperty(exports, "onErrorResumeNext", {
    enumerable: true,
    get: function() {
        return onErrorResumeNext_1.onErrorResumeNext;
    }
});
var pairs_1 = require("./internal/observable/pairs");
Object.defineProperty(exports, "pairs", {
    enumerable: true,
    get: function() {
        return pairs_1.pairs;
    }
});
var partition_1 = require("./internal/observable/partition");
Object.defineProperty(exports, "partition", {
    enumerable: true,
    get: function() {
        return partition_1.partition;
    }
});
var race_1 = require("./internal/observable/race");
Object.defineProperty(exports, "race", {
    enumerable: true,
    get: function() {
        return race_1.race;
    }
});
var range_1 = require("./internal/observable/range");
Object.defineProperty(exports, "range", {
    enumerable: true,
    get: function() {
        return range_1.range;
    }
});
var throwError_1 = require("./internal/observable/throwError");
Object.defineProperty(exports, "throwError", {
    enumerable: true,
    get: function() {
        return throwError_1.throwError;
    }
});
var timer_1 = require("./internal/observable/timer");
Object.defineProperty(exports, "timer", {
    enumerable: true,
    get: function() {
        return timer_1.timer;
    }
});
var using_1 = require("./internal/observable/using");
Object.defineProperty(exports, "using", {
    enumerable: true,
    get: function() {
        return using_1.using;
    }
});
var zip_1 = require("./internal/observable/zip");
Object.defineProperty(exports, "zip", {
    enumerable: true,
    get: function() {
        return zip_1.zip;
    }
});
var scheduled_1 = require("./internal/scheduled/scheduled");
Object.defineProperty(exports, "scheduled", {
    enumerable: true,
    get: function() {
        return scheduled_1.scheduled;
    }
});
var empty_2 = require("./internal/observable/empty");
Object.defineProperty(exports, "EMPTY", {
    enumerable: true,
    get: function() {
        return empty_2.EMPTY;
    }
});
var never_2 = require("./internal/observable/never");
Object.defineProperty(exports, "NEVER", {
    enumerable: true,
    get: function() {
        return never_2.NEVER;
    }
});
__exportStar(require("./internal/types"), exports);
var config_1 = require("./internal/config");
Object.defineProperty(exports, "config", {
    enumerable: true,
    get: function() {
        return config_1.config;
    }
});

},{"./internal/Observable":"r7DVo","./internal/observable/ConnectableObservable":"1jZA0","./internal/symbol/observable":"3WqKP","./internal/observable/dom/animationFrames":"8VudD","./internal/Subject":"4Jzfy","./internal/BehaviorSubject":"RuZpa","./internal/ReplaySubject":"2n1J1","./internal/AsyncSubject":"3ddHc","./internal/scheduler/asap":"58o8S","./internal/scheduler/async":"2KqRM","./internal/scheduler/queue":"13IDn","./internal/scheduler/animationFrame":"53myj","./internal/scheduler/VirtualTimeScheduler":"53YHR","./internal/Scheduler":"4ssY2","./internal/Subscription":"6ydxy","./internal/Subscriber":"5hEmD","./internal/Notification":"23QXr","./internal/util/pipe":"2fTpJ","./internal/util/noop":"4pemK","./internal/util/identity":"2JjYu","./internal/util/isObservable":"3mj3U","./internal/lastValueFrom":"7ADkw","./internal/firstValueFrom":"4M9oq","./internal/util/ArgumentOutOfRangeError":"5yzAW","./internal/util/EmptyError":"2zMaW","./internal/util/NotFoundError":"3Ds1G","./internal/util/ObjectUnsubscribedError":"1wEX0","./internal/util/SequenceError":"1Gnlk","./internal/operators/timeout":"491x5","./internal/util/UnsubscriptionError":"4MS6T","./internal/observable/bindCallback":"6OSJK","./internal/observable/bindNodeCallback":"3f7cg","./internal/observable/combineLatest":"4OEuh","./internal/observable/concat":"3cyRs","./internal/observable/connectable":"1LGOX","./internal/observable/defer":"HqjO2","./internal/observable/empty":"cBi4y","./internal/observable/forkJoin":"DnLIP","./internal/observable/from":"1hp4r","./internal/observable/fromEvent":"4SHS4","./internal/observable/fromEventPattern":"10F2H","./internal/observable/generate":"t9ntx","./internal/observable/iif":"16GRN","./internal/observable/interval":"3q4Tq","./internal/observable/merge":"2rojX","./internal/observable/never":"6KE5A","./internal/observable/of":"2aA3z","./internal/observable/onErrorResumeNext":"3cSB4","./internal/observable/pairs":"6eThk","./internal/observable/partition":"5zTfp","./internal/observable/race":"7JtX4","./internal/observable/range":"7ruDn","./internal/observable/throwError":"1ZEdu","./internal/observable/timer":"6ECLG","./internal/observable/using":"6fl4o","./internal/observable/zip":"2MDfx","./internal/scheduled/scheduled":"7MBjF","./internal/types":"2BrmL","./internal/config":"4eXcx"}],"8VudD":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.animationFrames = void 0;
var Observable_1 = require("../../Observable");
var Subscription_1 = require("../../Subscription");
var performanceTimestampProvider_1 = require("../../scheduler/performanceTimestampProvider");
var animationFrameProvider_1 = require("../../scheduler/animationFrameProvider");
function animationFrames(timestampProvider) {
    return timestampProvider ? animationFramesFactory(timestampProvider) : DEFAULT_ANIMATION_FRAMES;
}
exports.animationFrames = animationFrames;
function animationFramesFactory(timestampProvider) {
    var schedule = animationFrameProvider_1.animationFrameProvider.schedule;
    return new Observable_1.Observable(function(subscriber) {
        var subscription = new Subscription_1.Subscription();
        var provider = timestampProvider || performanceTimestampProvider_1.performanceTimestampProvider;
        var start = provider.now();
        var run = function(timestamp) {
            var now = provider.now();
            subscriber.next({
                timestamp: timestampProvider ? now : timestamp,
                elapsed: now - start
            });
            if (!subscriber.closed) subscription.add(schedule(run));
        };
        subscription.add(schedule(run));
        return subscription;
    });
}
var DEFAULT_ANIMATION_FRAMES = animationFramesFactory();

},{"../../Observable":"r7DVo","../../Subscription":"6ydxy","../../scheduler/performanceTimestampProvider":"6K65n","../../scheduler/animationFrameProvider":"5O3hi"}],"6K65n":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.performanceTimestampProvider = void 0;
exports.performanceTimestampProvider = {
    now: function() {
        return (exports.performanceTimestampProvider.delegate || performance).now();
    },
    delegate: undefined
};

},{}],"5O3hi":[function(require,module,exports) {
"use strict";
var __read = this && this.__read || function(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while((n === void 0 || (n--) > 0) && !(r = i.next()).done)ar.push(r.value);
    } catch (error) {
        e = {
            error: error
        };
    } finally{
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        } finally{
            if (e) throw e.error;
        }
    }
    return ar;
};
var __spreadArray = this && this.__spreadArray || function(to, from) {
    for(var i = 0, il = from.length, j = to.length; i < il; i++, j++)to[j] = from[i];
    return to;
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.animationFrameProvider = void 0;
var Subscription_1 = require("../Subscription");
exports.animationFrameProvider = {
    schedule: function(callback) {
        var request = requestAnimationFrame;
        var cancel = cancelAnimationFrame;
        var delegate = exports.animationFrameProvider.delegate;
        if (delegate) {
            request = delegate.requestAnimationFrame;
            cancel = delegate.cancelAnimationFrame;
        }
        var handle = request(function(timestamp) {
            cancel = undefined;
            callback(timestamp);
        });
        return new Subscription_1.Subscription(function() {
            return cancel === null || cancel === void 0 ? void 0 : cancel(handle);
        });
    },
    requestAnimationFrame: function() {
        var args = [];
        for(var _i = 0; _i < arguments.length; _i++)args[_i] = arguments[_i];
        var delegate = exports.animationFrameProvider.delegate;
        return ((delegate === null || delegate === void 0 ? void 0 : delegate.requestAnimationFrame) || requestAnimationFrame).apply(void 0, __spreadArray([], __read(args)));
    },
    cancelAnimationFrame: function() {
        var args = [];
        for(var _i = 0; _i < arguments.length; _i++)args[_i] = arguments[_i];
        var delegate = exports.animationFrameProvider.delegate;
        return ((delegate === null || delegate === void 0 ? void 0 : delegate.cancelAnimationFrame) || cancelAnimationFrame).apply(void 0, __spreadArray([], __read(args)));
    },
    delegate: undefined
};

},{"../Subscription":"6ydxy"}],"58o8S":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.asap = exports.asapScheduler = void 0;
var AsapAction_1 = require("./AsapAction");
var AsapScheduler_1 = require("./AsapScheduler");
exports.asapScheduler = new AsapScheduler_1.AsapScheduler(AsapAction_1.AsapAction);
exports.asap = exports.asapScheduler;

},{"./AsapAction":"58KDm","./AsapScheduler":"2kFpw"}],"58KDm":[function(require,module,exports) {
"use strict";
var __extends = this && this.__extends || function() {
    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || ({
            __proto__: []
        }) instanceof Array && function(d1, b1) {
            d1.__proto__ = b1;
        } || function(d1, b1) {
            for(var p in b1)if (Object.prototype.hasOwnProperty.call(b1, p)) d1[p] = b1[p];
        };
        return extendStatics(d, b);
    };
    return function(d, b) {
        if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.AsapAction = void 0;
var AsyncAction_1 = require("./AsyncAction");
var immediateProvider_1 = require("./immediateProvider");
var AsapAction1 = function(_super) {
    __extends(AsapAction2, _super);
    function AsapAction2(scheduler, work) {
        var _this = _super.call(this, scheduler, work) || this;
        _this.scheduler = scheduler;
        _this.work = work;
        return _this;
    }
    AsapAction2.prototype.requestAsyncId = function(scheduler, id, delay) {
        if (delay === void 0) delay = 0;
        if (delay !== null && delay > 0) return _super.prototype.requestAsyncId.call(this, scheduler, id, delay);
        scheduler.actions.push(this);
        return scheduler._scheduled || (scheduler._scheduled = immediateProvider_1.immediateProvider.setImmediate(scheduler.flush.bind(scheduler, undefined)));
    };
    AsapAction2.prototype.recycleAsyncId = function(scheduler, id, delay) {
        if (delay === void 0) delay = 0;
        if (delay != null && delay > 0 || delay == null && this.delay > 0) return _super.prototype.recycleAsyncId.call(this, scheduler, id, delay);
        if (scheduler.actions.length === 0) {
            immediateProvider_1.immediateProvider.clearImmediate(id);
            scheduler._scheduled = undefined;
        }
        return undefined;
    };
    return AsapAction2;
}(AsyncAction_1.AsyncAction);
exports.AsapAction = AsapAction1;

},{"./AsyncAction":"2P49B","./immediateProvider":"2HhOF"}],"2HhOF":[function(require,module,exports) {
"use strict";
var __read = this && this.__read || function(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while((n === void 0 || (n--) > 0) && !(r = i.next()).done)ar.push(r.value);
    } catch (error) {
        e = {
            error: error
        };
    } finally{
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        } finally{
            if (e) throw e.error;
        }
    }
    return ar;
};
var __spreadArray = this && this.__spreadArray || function(to, from) {
    for(var i = 0, il = from.length, j = to.length; i < il; i++, j++)to[j] = from[i];
    return to;
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.immediateProvider = void 0;
var Immediate_1 = require("../util/Immediate");
var setImmediate = Immediate_1.Immediate.setImmediate, clearImmediate = Immediate_1.Immediate.clearImmediate;
exports.immediateProvider = {
    setImmediate: function() {
        var args = [];
        for(var _i = 0; _i < arguments.length; _i++)args[_i] = arguments[_i];
        var delegate = exports.immediateProvider.delegate;
        return ((delegate === null || delegate === void 0 ? void 0 : delegate.setImmediate) || setImmediate).apply(void 0, __spreadArray([], __read(args)));
    },
    clearImmediate: function(handle) {
        var delegate = exports.immediateProvider.delegate;
        return ((delegate === null || delegate === void 0 ? void 0 : delegate.clearImmediate) || clearImmediate)(handle);
    },
    delegate: undefined
};

},{"../util/Immediate":"1JNUf"}],"1JNUf":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.TestTools = exports.Immediate = void 0;
var nextHandle = 1;
var resolved;
var activeHandles = {
};
function findAndClearHandle(handle) {
    if (handle in activeHandles) {
        delete activeHandles[handle];
        return true;
    }
    return false;
}
exports.Immediate = {
    setImmediate: function(cb) {
        var handle = nextHandle++;
        activeHandles[handle] = true;
        if (!resolved) resolved = Promise.resolve();
        resolved.then(function() {
            return findAndClearHandle(handle) && cb();
        });
        return handle;
    },
    clearImmediate: function(handle) {
        findAndClearHandle(handle);
    }
};
exports.TestTools = {
    pending: function() {
        return Object.keys(activeHandles).length;
    }
};

},{}],"2kFpw":[function(require,module,exports) {
"use strict";
var __extends = this && this.__extends || function() {
    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || ({
            __proto__: []
        }) instanceof Array && function(d1, b1) {
            d1.__proto__ = b1;
        } || function(d1, b1) {
            for(var p in b1)if (Object.prototype.hasOwnProperty.call(b1, p)) d1[p] = b1[p];
        };
        return extendStatics(d, b);
    };
    return function(d, b) {
        if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.AsapScheduler = void 0;
var AsyncScheduler_1 = require("./AsyncScheduler");
var AsapScheduler1 = function(_super) {
    __extends(AsapScheduler2, _super);
    function AsapScheduler2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AsapScheduler2.prototype.flush = function(action) {
        this._active = true;
        this._scheduled = undefined;
        var actions = this.actions;
        var error;
        var index = -1;
        action = action || actions.shift();
        var count = actions.length;
        do {
            if (error = action.execute(action.state, action.delay)) break;
        }while ((++index) < count && (action = actions.shift()))
        this._active = false;
        if (error) {
            while((++index) < count && (action = actions.shift()))action.unsubscribe();
            throw error;
        }
    };
    return AsapScheduler2;
}(AsyncScheduler_1.AsyncScheduler);
exports.AsapScheduler = AsapScheduler1;

},{"./AsyncScheduler":"3RAfm"}],"13IDn":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.queue = exports.queueScheduler = void 0;
var QueueAction_1 = require("./QueueAction");
var QueueScheduler_1 = require("./QueueScheduler");
exports.queueScheduler = new QueueScheduler_1.QueueScheduler(QueueAction_1.QueueAction);
exports.queue = exports.queueScheduler;

},{"./QueueAction":"12A4V","./QueueScheduler":"1QRUa"}],"12A4V":[function(require,module,exports) {
"use strict";
var __extends = this && this.__extends || function() {
    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || ({
            __proto__: []
        }) instanceof Array && function(d1, b1) {
            d1.__proto__ = b1;
        } || function(d1, b1) {
            for(var p in b1)if (Object.prototype.hasOwnProperty.call(b1, p)) d1[p] = b1[p];
        };
        return extendStatics(d, b);
    };
    return function(d, b) {
        if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.QueueAction = void 0;
var AsyncAction_1 = require("./AsyncAction");
var QueueAction1 = function(_super) {
    __extends(QueueAction2, _super);
    function QueueAction2(scheduler, work) {
        var _this = _super.call(this, scheduler, work) || this;
        _this.scheduler = scheduler;
        _this.work = work;
        return _this;
    }
    QueueAction2.prototype.schedule = function(state, delay) {
        if (delay === void 0) delay = 0;
        if (delay > 0) return _super.prototype.schedule.call(this, state, delay);
        this.delay = delay;
        this.state = state;
        this.scheduler.flush(this);
        return this;
    };
    QueueAction2.prototype.execute = function(state, delay) {
        return delay > 0 || this.closed ? _super.prototype.execute.call(this, state, delay) : this._execute(state, delay);
    };
    QueueAction2.prototype.requestAsyncId = function(scheduler, id, delay) {
        if (delay === void 0) delay = 0;
        if (delay != null && delay > 0 || delay == null && this.delay > 0) return _super.prototype.requestAsyncId.call(this, scheduler, id, delay);
        return scheduler.flush(this);
    };
    return QueueAction2;
}(AsyncAction_1.AsyncAction);
exports.QueueAction = QueueAction1;

},{"./AsyncAction":"2P49B"}],"1QRUa":[function(require,module,exports) {
"use strict";
var __extends = this && this.__extends || function() {
    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || ({
            __proto__: []
        }) instanceof Array && function(d1, b1) {
            d1.__proto__ = b1;
        } || function(d1, b1) {
            for(var p in b1)if (Object.prototype.hasOwnProperty.call(b1, p)) d1[p] = b1[p];
        };
        return extendStatics(d, b);
    };
    return function(d, b) {
        if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.QueueScheduler = void 0;
var AsyncScheduler_1 = require("./AsyncScheduler");
var QueueScheduler1 = function(_super) {
    __extends(QueueScheduler2, _super);
    function QueueScheduler2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return QueueScheduler2;
}(AsyncScheduler_1.AsyncScheduler);
exports.QueueScheduler = QueueScheduler1;

},{"./AsyncScheduler":"3RAfm"}],"53myj":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.animationFrame = exports.animationFrameScheduler = void 0;
var AnimationFrameAction_1 = require("./AnimationFrameAction");
var AnimationFrameScheduler_1 = require("./AnimationFrameScheduler");
exports.animationFrameScheduler = new AnimationFrameScheduler_1.AnimationFrameScheduler(AnimationFrameAction_1.AnimationFrameAction);
exports.animationFrame = exports.animationFrameScheduler;

},{"./AnimationFrameAction":"19uA4","./AnimationFrameScheduler":"3E2Ge"}],"19uA4":[function(require,module,exports) {
"use strict";
var __extends = this && this.__extends || function() {
    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || ({
            __proto__: []
        }) instanceof Array && function(d1, b1) {
            d1.__proto__ = b1;
        } || function(d1, b1) {
            for(var p in b1)if (Object.prototype.hasOwnProperty.call(b1, p)) d1[p] = b1[p];
        };
        return extendStatics(d, b);
    };
    return function(d, b) {
        if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.AnimationFrameAction = void 0;
var AsyncAction_1 = require("./AsyncAction");
var animationFrameProvider_1 = require("./animationFrameProvider");
var AnimationFrameAction1 = function(_super) {
    __extends(AnimationFrameAction2, _super);
    function AnimationFrameAction2(scheduler, work) {
        var _this = _super.call(this, scheduler, work) || this;
        _this.scheduler = scheduler;
        _this.work = work;
        return _this;
    }
    AnimationFrameAction2.prototype.requestAsyncId = function(scheduler, id, delay) {
        if (delay === void 0) delay = 0;
        if (delay !== null && delay > 0) return _super.prototype.requestAsyncId.call(this, scheduler, id, delay);
        scheduler.actions.push(this);
        return scheduler._scheduled || (scheduler._scheduled = animationFrameProvider_1.animationFrameProvider.requestAnimationFrame(function() {
            return scheduler.flush(undefined);
        }));
    };
    AnimationFrameAction2.prototype.recycleAsyncId = function(scheduler, id, delay) {
        if (delay === void 0) delay = 0;
        if (delay != null && delay > 0 || delay == null && this.delay > 0) return _super.prototype.recycleAsyncId.call(this, scheduler, id, delay);
        if (scheduler.actions.length === 0) {
            animationFrameProvider_1.animationFrameProvider.cancelAnimationFrame(id);
            scheduler._scheduled = undefined;
        }
        return undefined;
    };
    return AnimationFrameAction2;
}(AsyncAction_1.AsyncAction);
exports.AnimationFrameAction = AnimationFrameAction1;

},{"./AsyncAction":"2P49B","./animationFrameProvider":"5O3hi"}],"3E2Ge":[function(require,module,exports) {
"use strict";
var __extends = this && this.__extends || function() {
    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || ({
            __proto__: []
        }) instanceof Array && function(d1, b1) {
            d1.__proto__ = b1;
        } || function(d1, b1) {
            for(var p in b1)if (Object.prototype.hasOwnProperty.call(b1, p)) d1[p] = b1[p];
        };
        return extendStatics(d, b);
    };
    return function(d, b) {
        if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.AnimationFrameScheduler = void 0;
var AsyncScheduler_1 = require("./AsyncScheduler");
var AnimationFrameScheduler1 = function(_super) {
    __extends(AnimationFrameScheduler2, _super);
    function AnimationFrameScheduler2() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AnimationFrameScheduler2.prototype.flush = function(action) {
        this._active = true;
        this._scheduled = undefined;
        var actions = this.actions;
        var error;
        var index = -1;
        action = action || actions.shift();
        var count = actions.length;
        do {
            if (error = action.execute(action.state, action.delay)) break;
        }while ((++index) < count && (action = actions.shift()))
        this._active = false;
        if (error) {
            while((++index) < count && (action = actions.shift()))action.unsubscribe();
            throw error;
        }
    };
    return AnimationFrameScheduler2;
}(AsyncScheduler_1.AsyncScheduler);
exports.AnimationFrameScheduler = AnimationFrameScheduler1;

},{"./AsyncScheduler":"3RAfm"}],"53YHR":[function(require,module,exports) {
"use strict";
var __extends = this && this.__extends || function() {
    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || ({
            __proto__: []
        }) instanceof Array && function(d1, b1) {
            d1.__proto__ = b1;
        } || function(d1, b1) {
            for(var p in b1)if (Object.prototype.hasOwnProperty.call(b1, p)) d1[p] = b1[p];
        };
        return extendStatics(d, b);
    };
    return function(d, b) {
        if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.VirtualAction = exports.VirtualTimeScheduler = void 0;
var AsyncAction_1 = require("./AsyncAction");
var Subscription_1 = require("../Subscription");
var AsyncScheduler_1 = require("./AsyncScheduler");
var VirtualTimeScheduler1 = function(_super) {
    __extends(VirtualTimeScheduler2, _super);
    function VirtualTimeScheduler2(schedulerActionCtor, maxFrames) {
        if (schedulerActionCtor === void 0) schedulerActionCtor = VirtualAction1;
        if (maxFrames === void 0) maxFrames = Infinity;
        var _this = _super.call(this, schedulerActionCtor, function() {
            return _this.frame;
        }) || this;
        _this.maxFrames = maxFrames;
        _this.frame = 0;
        _this.index = -1;
        return _this;
    }
    VirtualTimeScheduler2.prototype.flush = function() {
        var _a = this, actions = _a.actions, maxFrames = _a.maxFrames;
        var error;
        var action;
        while((action = actions[0]) && action.delay <= maxFrames){
            actions.shift();
            this.frame = action.delay;
            if (error = action.execute(action.state, action.delay)) break;
        }
        if (error) {
            while(action = actions.shift())action.unsubscribe();
            throw error;
        }
    };
    VirtualTimeScheduler2.frameTimeFactor = 10;
    return VirtualTimeScheduler2;
}(AsyncScheduler_1.AsyncScheduler);
exports.VirtualTimeScheduler = VirtualTimeScheduler1;
var VirtualAction1 = function(_super) {
    __extends(VirtualAction2, _super);
    function VirtualAction2(scheduler, work, index) {
        if (index === void 0) index = scheduler.index += 1;
        var _this = _super.call(this, scheduler, work) || this;
        _this.scheduler = scheduler;
        _this.work = work;
        _this.index = index;
        _this.active = true;
        _this.index = scheduler.index = index;
        return _this;
    }
    VirtualAction2.prototype.schedule = function(state, delay) {
        if (delay === void 0) delay = 0;
        if (Number.isFinite(delay)) {
            if (!this.id) return _super.prototype.schedule.call(this, state, delay);
            this.active = false;
            var action = new VirtualAction2(this.scheduler, this.work);
            this.add(action);
            return action.schedule(state, delay);
        } else return Subscription_1.Subscription.EMPTY;
    };
    VirtualAction2.prototype.requestAsyncId = function(scheduler, id, delay) {
        if (delay === void 0) delay = 0;
        this.delay = scheduler.frame + delay;
        var actions = scheduler.actions;
        actions.push(this);
        actions.sort(VirtualAction2.sortActions);
        return true;
    };
    VirtualAction2.prototype.recycleAsyncId = function(scheduler, id, delay) {
        if (delay === void 0) delay = 0;
        return undefined;
    };
    VirtualAction2.prototype._execute = function(state, delay) {
        if (this.active === true) return _super.prototype._execute.call(this, state, delay);
    };
    VirtualAction2.sortActions = function(a, b) {
        if (a.delay === b.delay) {
            if (a.index === b.index) return 0;
            else if (a.index > b.index) return 1;
            else return -1;
        } else if (a.delay > b.delay) return 1;
        else return -1;
    };
    return VirtualAction2;
}(AsyncAction_1.AsyncAction);
exports.VirtualAction = VirtualAction1;

},{"./AsyncAction":"2P49B","../Subscription":"6ydxy","./AsyncScheduler":"3RAfm"}],"3mj3U":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.isObservable = void 0;
var Observable_1 = require("../Observable");
var isFunction_1 = require("./isFunction");
function isObservable(obj) {
    return !!obj && (obj instanceof Observable_1.Observable || isFunction_1.isFunction(obj.lift) && isFunction_1.isFunction(obj.subscribe));
}
exports.isObservable = isObservable;

},{"../Observable":"r7DVo","./isFunction":"5QZmD"}],"7ADkw":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.lastValueFrom = void 0;
var EmptyError_1 = require("./util/EmptyError");
function lastValueFrom(source, config) {
    var hasConfig = typeof config === 'object';
    return new Promise(function(resolve, reject) {
        var _hasValue = false;
        var _value;
        source.subscribe({
            next: function(value) {
                _value = value;
                _hasValue = true;
            },
            error: reject,
            complete: function() {
                if (_hasValue) resolve(_value);
                else if (hasConfig) resolve(config.defaultValue);
                else reject(new EmptyError_1.EmptyError());
            }
        });
    });
}
exports.lastValueFrom = lastValueFrom;

},{"./util/EmptyError":"2zMaW"}],"4M9oq":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.firstValueFrom = void 0;
var EmptyError_1 = require("./util/EmptyError");
var Subscriber_1 = require("./Subscriber");
function firstValueFrom(source, config) {
    var hasConfig = typeof config === 'object';
    return new Promise(function(resolve, reject) {
        var subscriber = new Subscriber_1.SafeSubscriber({
            next: function(value) {
                resolve(value);
                subscriber.unsubscribe();
            },
            error: reject,
            complete: function() {
                if (hasConfig) resolve(config.defaultValue);
                else reject(new EmptyError_1.EmptyError());
            }
        });
        source.subscribe(subscriber);
    });
}
exports.firstValueFrom = firstValueFrom;

},{"./util/EmptyError":"2zMaW","./Subscriber":"5hEmD"}],"6OSJK":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.bindCallback = void 0;
var bindCallbackInternals_1 = require("./bindCallbackInternals");
function bindCallback(callbackFunc, resultSelector, scheduler) {
    return bindCallbackInternals_1.bindCallbackInternals(false, callbackFunc, resultSelector, scheduler);
}
exports.bindCallback = bindCallback;

},{"./bindCallbackInternals":"6bMwP"}],"6bMwP":[function(require,module,exports) {
"use strict";
var __read = this && this.__read || function(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while((n === void 0 || (n--) > 0) && !(r = i.next()).done)ar.push(r.value);
    } catch (error) {
        e = {
            error: error
        };
    } finally{
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        } finally{
            if (e) throw e.error;
        }
    }
    return ar;
};
var __spreadArray = this && this.__spreadArray || function(to, from) {
    for(var i = 0, il = from.length, j = to.length; i < il; i++, j++)to[j] = from[i];
    return to;
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.bindCallbackInternals = void 0;
var isScheduler_1 = require("../util/isScheduler");
var Observable_1 = require("../Observable");
var subscribeOn_1 = require("../operators/subscribeOn");
var mapOneOrManyArgs_1 = require("../util/mapOneOrManyArgs");
var observeOn_1 = require("../operators/observeOn");
var AsyncSubject_1 = require("../AsyncSubject");
function bindCallbackInternals(isNodeStyle, callbackFunc, resultSelector, scheduler) {
    if (resultSelector) {
        if (isScheduler_1.isScheduler(resultSelector)) scheduler = resultSelector;
        else return function() {
            var args = [];
            for(var _i = 0; _i < arguments.length; _i++)args[_i] = arguments[_i];
            return bindCallbackInternals(isNodeStyle, callbackFunc, scheduler).apply(this, args).pipe(mapOneOrManyArgs_1.mapOneOrManyArgs(resultSelector));
        };
    }
    if (scheduler) return function() {
        var args = [];
        for(var _i = 0; _i < arguments.length; _i++)args[_i] = arguments[_i];
        return bindCallbackInternals(isNodeStyle, callbackFunc).apply(this, args).pipe(subscribeOn_1.subscribeOn(scheduler), observeOn_1.observeOn(scheduler));
    };
    return function() {
        var _this = this;
        var args = [];
        for(var _i = 0; _i < arguments.length; _i++)args[_i] = arguments[_i];
        var subject = new AsyncSubject_1.AsyncSubject();
        var uninitialized = true;
        return new Observable_1.Observable(function(subscriber) {
            var subs = subject.subscribe(subscriber);
            if (uninitialized) {
                uninitialized = false;
                var isAsync_1 = false;
                var isComplete_1 = false;
                callbackFunc.apply(_this, __spreadArray(__spreadArray([], __read(args)), [
                    function() {
                        var results = [];
                        for(var _i1 = 0; _i1 < arguments.length; _i1++)results[_i1] = arguments[_i1];
                        if (isNodeStyle) {
                            var err = results.shift();
                            if (err != null) {
                                subject.error(err);
                                return;
                            }
                        }
                        subject.next(1 < results.length ? results : results[0]);
                        isComplete_1 = true;
                        if (isAsync_1) subject.complete();
                    },
                ]));
                if (isComplete_1) subject.complete();
                isAsync_1 = true;
            }
            return subs;
        });
    };
}
exports.bindCallbackInternals = bindCallbackInternals;

},{"../util/isScheduler":"26QWs","../Observable":"r7DVo","../operators/subscribeOn":"37Jrh","../util/mapOneOrManyArgs":"2JBos","../operators/observeOn":"6dgt1","../AsyncSubject":"3ddHc"}],"3f7cg":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.bindNodeCallback = void 0;
var bindCallbackInternals_1 = require("./bindCallbackInternals");
function bindNodeCallback(callbackFunc, resultSelector, scheduler) {
    return bindCallbackInternals_1.bindCallbackInternals(true, callbackFunc, resultSelector, scheduler);
}
exports.bindNodeCallback = bindNodeCallback;

},{"./bindCallbackInternals":"6bMwP"}],"1LGOX":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.connectable = void 0;
var Subject_1 = require("../Subject");
var Observable_1 = require("../Observable");
var defer_1 = require("./defer");
var DEFAULT_CONFIG = {
    connector: function() {
        return new Subject_1.Subject();
    },
    resetOnDisconnect: true
};
function connectable(source, config) {
    if (config === void 0) config = DEFAULT_CONFIG;
    var connection = null;
    var connector = config.connector, _a = config.resetOnDisconnect, resetOnDisconnect = _a === void 0 ? true : _a;
    var subject = connector();
    var result = new Observable_1.Observable(function(subscriber) {
        return subject.subscribe(subscriber);
    });
    result.connect = function() {
        if (!connection || connection.closed) {
            connection = defer_1.defer(function() {
                return source;
            }).subscribe(subject);
            if (resetOnDisconnect) connection.add(function() {
                return subject = connector();
            });
        }
        return connection;
    };
    return result;
}
exports.connectable = connectable;

},{"../Subject":"4Jzfy","../Observable":"r7DVo","./defer":"HqjO2"}],"DnLIP":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.forkJoin = void 0;
var Observable_1 = require("../Observable");
var argsArgArrayOrObject_1 = require("../util/argsArgArrayOrObject");
var from_1 = require("./from");
var args_1 = require("../util/args");
var OperatorSubscriber_1 = require("../operators/OperatorSubscriber");
var mapOneOrManyArgs_1 = require("../util/mapOneOrManyArgs");
var createObject_1 = require("../util/createObject");
function forkJoin() {
    var args = [];
    for(var _i = 0; _i < arguments.length; _i++)args[_i] = arguments[_i];
    var resultSelector = args_1.popResultSelector(args);
    var _a = argsArgArrayOrObject_1.argsArgArrayOrObject(args), sources = _a.args, keys = _a.keys;
    var result = new Observable_1.Observable(function(subscriber) {
        var length = sources.length;
        if (!length) {
            subscriber.complete();
            return;
        }
        var values = new Array(length);
        var remainingCompletions = length;
        var remainingEmissions = length;
        var _loop_1 = function(sourceIndex) {
            var hasValue = false;
            from_1.innerFrom(sources[sourceIndex]).subscribe(new OperatorSubscriber_1.OperatorSubscriber(subscriber, function(value) {
                if (!hasValue) {
                    hasValue = true;
                    remainingEmissions--;
                }
                values[sourceIndex] = value;
            }, function() {
                if (!--remainingCompletions || !hasValue) {
                    if (!remainingEmissions) subscriber.next(keys ? createObject_1.createObject(keys, values) : values);
                    subscriber.complete();
                }
            }));
        };
        for(var sourceIndex = 0; sourceIndex < length; sourceIndex++)_loop_1(sourceIndex);
    });
    return resultSelector ? result.pipe(mapOneOrManyArgs_1.mapOneOrManyArgs(resultSelector)) : result;
}
exports.forkJoin = forkJoin;

},{"../Observable":"r7DVo","../util/argsArgArrayOrObject":"2b077","./from":"1hp4r","../util/args":"18qpb","../operators/OperatorSubscriber":"4ZP4f","../util/mapOneOrManyArgs":"2JBos","../util/createObject":"iueIH"}],"4SHS4":[function(require,module,exports) {
"use strict";
var __read = this && this.__read || function(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while((n === void 0 || (n--) > 0) && !(r = i.next()).done)ar.push(r.value);
    } catch (error) {
        e = {
            error: error
        };
    } finally{
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        } finally{
            if (e) throw e.error;
        }
    }
    return ar;
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.fromEvent = void 0;
var Observable_1 = require("../Observable");
var mergeMap_1 = require("../operators/mergeMap");
var isArrayLike_1 = require("../util/isArrayLike");
var isFunction_1 = require("../util/isFunction");
var mapOneOrManyArgs_1 = require("../util/mapOneOrManyArgs");
var fromArray_1 = require("./fromArray");
var nodeEventEmitterMethods = [
    'addListener',
    'removeListener'
];
var eventTargetMethods = [
    'addEventListener',
    'removeEventListener'
];
var jqueryMethods = [
    'on',
    'off'
];
function fromEvent(target, eventName, options, resultSelector) {
    if (isFunction_1.isFunction(options)) {
        resultSelector = options;
        options = undefined;
    }
    if (resultSelector) return fromEvent(target, eventName, options).pipe(mapOneOrManyArgs_1.mapOneOrManyArgs(resultSelector));
    var _a = __read(isEventTarget(target) ? eventTargetMethods.map(function(methodName) {
        return function(handler) {
            return target[methodName](eventName, handler, options);
        };
    }) : isNodeStyleEventEmitter(target) ? nodeEventEmitterMethods.map(toCommonHandlerRegistry(target, eventName)) : isJQueryStyleEventEmitter(target) ? jqueryMethods.map(toCommonHandlerRegistry(target, eventName)) : [], 2), add = _a[0], remove = _a[1];
    if (!add) {
        if (isArrayLike_1.isArrayLike(target)) return mergeMap_1.mergeMap(function(subTarget) {
            return fromEvent(subTarget, eventName, options);
        })(fromArray_1.internalFromArray(target));
    }
    if (!add) throw new TypeError('Invalid event target');
    return new Observable_1.Observable(function(subscriber) {
        var handler = function() {
            var args = [];
            for(var _i = 0; _i < arguments.length; _i++)args[_i] = arguments[_i];
            return subscriber.next(1 < args.length ? args : args[0]);
        };
        add(handler);
        return function() {
            return remove(handler);
        };
    });
}
exports.fromEvent = fromEvent;
function toCommonHandlerRegistry(target, eventName) {
    return function(methodName) {
        return function(handler) {
            return target[methodName](eventName, handler);
        };
    };
}
function isNodeStyleEventEmitter(target) {
    return isFunction_1.isFunction(target.addListener) && isFunction_1.isFunction(target.removeListener);
}
function isJQueryStyleEventEmitter(target) {
    return isFunction_1.isFunction(target.on) && isFunction_1.isFunction(target.off);
}
function isEventTarget(target) {
    return isFunction_1.isFunction(target.addEventListener) && isFunction_1.isFunction(target.removeEventListener);
}

},{"../Observable":"r7DVo","../operators/mergeMap":"7AC9i","../util/isArrayLike":"5SxrT","../util/isFunction":"5QZmD","../util/mapOneOrManyArgs":"2JBos","./fromArray":"WapNe"}],"10F2H":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.fromEventPattern = void 0;
var Observable_1 = require("../Observable");
var isFunction_1 = require("../util/isFunction");
var mapOneOrManyArgs_1 = require("../util/mapOneOrManyArgs");
function fromEventPattern(addHandler, removeHandler, resultSelector) {
    if (resultSelector) return fromEventPattern(addHandler, removeHandler).pipe(mapOneOrManyArgs_1.mapOneOrManyArgs(resultSelector));
    return new Observable_1.Observable(function(subscriber) {
        var handler = function() {
            var e = [];
            for(var _i = 0; _i < arguments.length; _i++)e[_i] = arguments[_i];
            return subscriber.next(e.length === 1 ? e[0] : e);
        };
        var retValue = addHandler(handler);
        return isFunction_1.isFunction(removeHandler) ? function() {
            return removeHandler(handler, retValue);
        } : undefined;
    });
}
exports.fromEventPattern = fromEventPattern;

},{"../Observable":"r7DVo","../util/isFunction":"5QZmD","../util/mapOneOrManyArgs":"2JBos"}],"t9ntx":[function(require,module,exports) {
"use strict";
var __generator = this && this.__generator || function(thisArg, body) {
    var _ = {
        label: 0,
        sent: function() {
            if (t[0] & 1) throw t[1];
            return t[1];
        },
        trys: [],
        ops: []
    }, f, y, t, g;
    function verb(n) {
        return function(v) {
            return step([
                n,
                v
            ]);
        };
    }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while(_)try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [
                op[0] & 2,
                t.value
            ];
            switch(op[0]){
                case 0:
                case 1:
                    t = op;
                    break;
                case 4:
                    _.label++;
                    return {
                        value: op[1],
                        done: false
                    };
                case 5:
                    _.label++;
                    y = op[1];
                    op = [
                        0
                    ];
                    continue;
                case 7:
                    op = _.ops.pop();
                    _.trys.pop();
                    continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                        _ = 0;
                        continue;
                    }
                    if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                        _.label = op[1];
                        break;
                    }
                    if (op[0] === 6 && _.label < t[1]) {
                        _.label = t[1];
                        t = op;
                        break;
                    }
                    if (t && _.label < t[2]) {
                        _.label = t[2];
                        _.ops.push(op);
                        break;
                    }
                    if (t[2]) _.ops.pop();
                    _.trys.pop();
                    continue;
            }
            op = body.call(thisArg, _);
        } catch (e) {
            op = [
                6,
                e
            ];
            y = 0;
        } finally{
            f = t = 0;
        }
        if (op[0] & 5) throw op[1];
        return {
            value: op[0] ? op[1] : void 0,
            done: true
        };
    }
    return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
    }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
        return this;
    }), g;
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.generate = void 0;
var identity_1 = require("../util/identity");
var isScheduler_1 = require("../util/isScheduler");
var defer_1 = require("./defer");
var scheduleIterable_1 = require("../scheduled/scheduleIterable");
function generate(initialStateOrOptions, condition, iterate, resultSelectorOrScheduler, scheduler) {
    var _a, _b;
    var resultSelector;
    var initialState;
    if (arguments.length === 1) _a = initialStateOrOptions, initialState = _a.initialState, condition = _a.condition, iterate = _a.iterate, _b = _a.resultSelector, resultSelector = _b === void 0 ? identity_1.identity : _b, scheduler = _a.scheduler;
    else {
        initialState = initialStateOrOptions;
        if (!resultSelectorOrScheduler || isScheduler_1.isScheduler(resultSelectorOrScheduler)) {
            resultSelector = identity_1.identity;
            scheduler = resultSelectorOrScheduler;
        } else resultSelector = resultSelectorOrScheduler;
    }
    function gen() {
        var state;
        return __generator(this, function(_a1) {
            switch(_a1.label){
                case 0:
                    state = initialState;
                    _a1.label = 1;
                case 1:
                    if (!(!condition || condition(state))) return [
                        3,
                        4
                    ];
                    return [
                        4,
                        resultSelector(state)
                    ];
                case 2:
                    _a1.sent();
                    _a1.label = 3;
                case 3:
                    state = iterate(state);
                    return [
                        3,
                        1
                    ];
                case 4:
                    return [
                        2
                    ];
            }
        });
    }
    return defer_1.defer(scheduler ? function() {
        return scheduleIterable_1.scheduleIterable(gen(), scheduler);
    } : gen);
}
exports.generate = generate;

},{"../util/identity":"2JjYu","../util/isScheduler":"26QWs","./defer":"HqjO2","../scheduled/scheduleIterable":"dC7gU"}],"16GRN":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.iif = void 0;
var defer_1 = require("./defer");
function iif(condition, trueResult, falseResult) {
    return defer_1.defer(function() {
        return condition() ? trueResult : falseResult;
    });
}
exports.iif = iif;

},{"./defer":"HqjO2"}],"2rojX":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.merge = void 0;
var mergeAll_1 = require("../operators/mergeAll");
var fromArray_1 = require("./fromArray");
var from_1 = require("./from");
var empty_1 = require("./empty");
var args_1 = require("../util/args");
function merge() {
    var args = [];
    for(var _i = 0; _i < arguments.length; _i++)args[_i] = arguments[_i];
    var scheduler = args_1.popScheduler(args);
    var concurrent = args_1.popNumber(args, Infinity);
    var sources = args;
    return !sources.length ? empty_1.EMPTY : sources.length === 1 ? from_1.innerFrom(sources[0]) : mergeAll_1.mergeAll(concurrent)(fromArray_1.internalFromArray(sources, scheduler));
}
exports.merge = merge;

},{"../operators/mergeAll":"2ePdS","./fromArray":"WapNe","./from":"1hp4r","./empty":"cBi4y","../util/args":"18qpb"}],"6KE5A":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.never = exports.NEVER = void 0;
var Observable_1 = require("../Observable");
var noop_1 = require("../util/noop");
exports.NEVER = new Observable_1.Observable(noop_1.noop);
function never() {
    return exports.NEVER;
}
exports.never = never;

},{"../Observable":"r7DVo","../util/noop":"4pemK"}],"3cSB4":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.onErrorResumeNext = void 0;
var empty_1 = require("./empty");
var onErrorResumeNext_1 = require("../operators/onErrorResumeNext");
var argsOrArgArray_1 = require("../util/argsOrArgArray");
function onErrorResumeNext() {
    var sources = [];
    for(var _i = 0; _i < arguments.length; _i++)sources[_i] = arguments[_i];
    return onErrorResumeNext_1.onErrorResumeNext(argsOrArgArray_1.argsOrArgArray(sources))(empty_1.EMPTY);
}
exports.onErrorResumeNext = onErrorResumeNext;

},{"./empty":"cBi4y","../operators/onErrorResumeNext":"6ogDY","../util/argsOrArgArray":"35t9S"}],"6eThk":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.pairs = void 0;
var from_1 = require("./from");
function pairs(obj, scheduler) {
    return from_1.from(Object.entries(obj), scheduler);
}
exports.pairs = pairs;

},{"./from":"1hp4r"}],"5zTfp":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.partition = void 0;
var not_1 = require("../util/not");
var filter_1 = require("../operators/filter");
var from_1 = require("./from");
function partition(source, predicate, thisArg) {
    return [
        filter_1.filter(predicate, thisArg)(from_1.innerFrom(source)),
        filter_1.filter(not_1.not(predicate, thisArg))(from_1.innerFrom(source))
    ];
}
exports.partition = partition;

},{"../util/not":"3tfCu","../operators/filter":"4yIda","./from":"1hp4r"}],"7ruDn":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.range = void 0;
var Observable_1 = require("../Observable");
var empty_1 = require("./empty");
function range(start, count, scheduler) {
    if (count == null) {
        count = start;
        start = 0;
    }
    if (count <= 0) return empty_1.EMPTY;
    var end = count + start;
    return new Observable_1.Observable(scheduler ? function(subscriber) {
        var n = start;
        return scheduler.schedule(function() {
            if (n < end) {
                subscriber.next(n++);
                this.schedule();
            } else subscriber.complete();
        });
    } : function(subscriber) {
        var n = start;
        while(n < end && !subscriber.closed)subscriber.next(n++);
        subscriber.complete();
    });
}
exports.range = range;

},{"../Observable":"r7DVo","./empty":"cBi4y"}],"6fl4o":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.using = void 0;
var Observable_1 = require("../Observable");
var from_1 = require("./from");
var empty_1 = require("./empty");
function using(resourceFactory, observableFactory) {
    return new Observable_1.Observable(function(subscriber) {
        var resource = resourceFactory();
        var result = observableFactory(resource);
        var source = result ? from_1.innerFrom(result) : empty_1.EMPTY;
        source.subscribe(subscriber);
        return function() {
            if (resource) resource.unsubscribe();
        };
    });
}
exports.using = using;

},{"../Observable":"r7DVo","./from":"1hp4r","./empty":"cBi4y"}],"2BrmL":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});

},{}],"5OWru":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Message implementation for echo.EchoRequest
 */ parcelHelpers.export(exports, "EchoRequest", ()=>EchoRequest
);
/**
 * Message implementation for echo.EchoResponse
 */ parcelHelpers.export(exports, "EchoResponse", ()=>EchoResponse
);
var _googleProtobuf = require("google-protobuf");
var _wellKnownTypes = require("@metabreak/well-known-types");
class EchoRequest {
    /**
   * Deserialize binary data to message
   * @param instance message instance
   */ static deserializeBinary(bytes) {
        const instance = new EchoRequest();
        EchoRequest.deserializeBinaryFromReader(instance, new _googleProtobuf.BinaryReader(bytes));
        return instance;
    }
    /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */ static refineValues(_instance) {
        _instance.message = _instance.message || '';
        _instance.shouldThrow = _instance.shouldThrow || false;
        _instance.timestamp = _instance.timestamp || undefined;
    }
    /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */ static deserializeBinaryFromReader(_instance, _reader) {
        while(_reader.nextField()){
            if (_reader.isEndGroup()) break;
            switch(_reader.getFieldNumber()){
                case 1:
                    _instance.message = _reader.readString();
                    break;
                case 2:
                    _instance.shouldThrow = _reader.readBool();
                    break;
                case 3:
                    _instance.timestamp = new _wellKnownTypes.Timestamp();
                    _reader.readMessage(_instance.timestamp, _wellKnownTypes.Timestamp.deserializeBinaryFromReader);
                    break;
                default:
                    _reader.skipField();
            }
        }
        EchoRequest.refineValues(_instance);
    }
    /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */ static serializeBinaryToWriter(_instance, _writer) {
        if (_instance.message) _writer.writeString(1, _instance.message);
        if (_instance.shouldThrow) _writer.writeBool(2, _instance.shouldThrow);
        if (_instance.timestamp) _writer.writeMessage(3, _instance.timestamp, _wellKnownTypes.Timestamp.serializeBinaryToWriter);
    }
    /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of EchoRequest to deeply clone from
   */ constructor(_value){
        _value = _value || {
        };
        this.message = _value.message;
        this.shouldThrow = _value.shouldThrow;
        this.timestamp = _value.timestamp ? new _wellKnownTypes.Timestamp(_value.timestamp) : undefined;
        EchoRequest.refineValues(this);
    }
    get message() {
        return this._message;
    }
    set message(value) {
        this._message = value;
    }
    get shouldThrow() {
        return this._shouldThrow;
    }
    set shouldThrow(value) {
        this._shouldThrow = value;
    }
    get timestamp() {
        return this._timestamp;
    }
    set timestamp(value) {
        this._timestamp = value;
    }
    /**
   * Serialize message to binary data
   * @param instance message instance
   */ serializeBinary() {
        const writer = new _googleProtobuf.BinaryWriter();
        EchoRequest.serializeBinaryToWriter(this, writer);
        return writer.getResultBuffer();
    }
    /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */ toObject() {
        return {
            message: this.message,
            shouldThrow: this.shouldThrow,
            timestamp: this.timestamp ? this.timestamp.toObject() : undefined
        };
    }
    /**
   * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
   */ toJSON() {
        return this.toObject();
    }
    /**
   * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
   * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
   * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
   */ toProtobufJSON(// @ts-ignore
    options) {
        return {
            message: this.message,
            shouldThrow: this.shouldThrow,
            timestamp: this.timestamp ? this.timestamp.toProtobufJSON(options) : null
        };
    }
}
EchoRequest.id = 'echo.EchoRequest';
class EchoResponse {
    /**
   * Deserialize binary data to message
   * @param instance message instance
   */ static deserializeBinary(bytes) {
        const instance = new EchoResponse();
        EchoResponse.deserializeBinaryFromReader(instance, new _googleProtobuf.BinaryReader(bytes));
        return instance;
    }
    /**
   * Check all the properties and set default protobuf values if necessary
   * @param _instance message instance
   */ static refineValues(_instance) {
        _instance.message = _instance.message || '';
        _instance.timestamp = _instance.timestamp || undefined;
    }
    /**
   * Deserializes / reads binary message into message instance using provided binary reader
   * @param _instance message instance
   * @param _reader binary reader instance
   */ static deserializeBinaryFromReader(_instance, _reader) {
        while(_reader.nextField()){
            if (_reader.isEndGroup()) break;
            switch(_reader.getFieldNumber()){
                case 1:
                    _instance.message = _reader.readString();
                    break;
                case 2:
                    _instance.timestamp = new _wellKnownTypes.Timestamp();
                    _reader.readMessage(_instance.timestamp, _wellKnownTypes.Timestamp.deserializeBinaryFromReader);
                    break;
                default:
                    _reader.skipField();
            }
        }
        EchoResponse.refineValues(_instance);
    }
    /**
   * Serializes a message to binary format using provided binary reader
   * @param _instance message instance
   * @param _writer binary writer instance
   */ static serializeBinaryToWriter(_instance, _writer) {
        if (_instance.message) _writer.writeString(1, _instance.message);
        if (_instance.timestamp) _writer.writeMessage(2, _instance.timestamp, _wellKnownTypes.Timestamp.serializeBinaryToWriter);
    }
    /**
   * Message constructor. Initializes the properties and applies default Protobuf values if necessary
   * @param _value initial values object or instance of EchoResponse to deeply clone from
   */ constructor(_value1){
        _value1 = _value1 || {
        };
        this.message = _value1.message;
        this.timestamp = _value1.timestamp ? new _wellKnownTypes.Timestamp(_value1.timestamp) : undefined;
        EchoResponse.refineValues(this);
    }
    get message() {
        return this._message;
    }
    set message(value) {
        this._message = value;
    }
    get timestamp() {
        return this._timestamp;
    }
    set timestamp(value) {
        this._timestamp = value;
    }
    /**
   * Serialize message to binary data
   * @param instance message instance
   */ serializeBinary() {
        const writer = new _googleProtobuf.BinaryWriter();
        EchoResponse.serializeBinaryToWriter(this, writer);
        return writer.getResultBuffer();
    }
    /**
   * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
   */ toObject() {
        return {
            message: this.message,
            timestamp: this.timestamp ? this.timestamp.toObject() : undefined
        };
    }
    /**
   * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
   */ toJSON() {
        return this.toObject();
    }
    /**
   * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
   * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
   * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
   */ toProtobufJSON(// @ts-ignore
    options) {
        return {
            message: this.message,
            timestamp: this.timestamp ? this.timestamp.toProtobufJSON(options) : null
        };
    }
}
EchoResponse.id = 'echo.EchoResponse';

},{"google-protobuf":"A6PdZ","@metabreak/well-known-types":"1toPr","@parcel/transformer-js/src/esmodule-helpers.js":"1gLSz"}],"A6PdZ":[function(require,module,exports) {
var Buffer = require("buffer").Buffer;
var global = arguments[3];
var $jscomp = $jscomp || {
};
$jscomp.scope = {
};
$jscomp.findInternal = function(a, b, c) {
    a instanceof String && (a = String(a));
    for(var d = a.length, e = 0; e < d; e++){
        var f = a[e];
        if (b.call(c, f, e, a)) return {
            i: e,
            v: f
        };
    }
    return {
        i: -1,
        v: void 0
    };
};
$jscomp.ASSUME_ES5 = false;
$jscomp.ASSUME_NO_NATIVE_MAP = false;
$jscomp.ASSUME_NO_NATIVE_SET = false;
$jscomp.SIMPLE_FROUND_POLYFILL = false;
$jscomp.defineProperty = $jscomp.ASSUME_ES5 || "function" == typeof Object.defineProperties ? Object.defineProperty : function(a, b, c) {
    a != Array.prototype && a != Object.prototype && (a[b] = c.value);
};
$jscomp.getGlobal = function(a) {
    return "undefined" != typeof window && window === a ? a : "undefined" != typeof global && null != global ? global : a;
};
$jscomp.global = $jscomp.getGlobal(this);
$jscomp.polyfill = function(a, b, c, d) {
    if (b) {
        c = $jscomp.global;
        a = a.split(".");
        for(d = 0; d < a.length - 1; d++){
            var e = a[d];
            e in c || (c[e] = {
            });
            c = c[e];
        }
        a = a[a.length - 1];
        d = c[a];
        b = b(d);
        b != d && null != b && $jscomp.defineProperty(c, a, {
            configurable: true,
            writable: true,
            value: b
        });
    }
};
$jscomp.polyfill("Array.prototype.findIndex", function(a) {
    return a ? a : function(a1, c) {
        return $jscomp.findInternal(this, a1, c).i;
    };
}, "es6", "es3");
$jscomp.checkStringArgs = function(a, b, c) {
    if (null == a) throw new TypeError("The 'this' value for String.prototype." + c + " must not be null or undefined");
    if (b instanceof RegExp) throw new TypeError("First argument to String.prototype." + c + " must not be a regular expression");
    return a + "";
};
$jscomp.polyfill("String.prototype.endsWith", function(a) {
    return a ? a : function(a1, c) {
        var b = $jscomp.checkStringArgs(this, a1, "endsWith");
        a1 += "";
        (void 0) === c && (c = b.length);
        c = Math.max(0, Math.min(c | 0, b.length));
        for(var e = a1.length; 0 < e && 0 < c;)if (b[--c] != a1[--e]) return false;
        return 0 >= e;
    };
}, "es6", "es3");
$jscomp.polyfill("Array.prototype.find", function(a) {
    return a ? a : function(a1, c) {
        return $jscomp.findInternal(this, a1, c).v;
    };
}, "es6", "es3");
$jscomp.polyfill("String.prototype.startsWith", function(a) {
    return a ? a : function(a1, c) {
        var b = $jscomp.checkStringArgs(this, a1, "startsWith");
        a1 += "";
        var e = b.length, f = a1.length;
        c = Math.max(0, Math.min(c | 0, b.length));
        for(var g = 0; g < f && c < e;)if (b[c++] != a1[g++]) return false;
        return g >= f;
    };
}, "es6", "es3");
$jscomp.polyfill("String.prototype.repeat", function(a) {
    return a ? a : function(a1) {
        var b = $jscomp.checkStringArgs(this, null, "repeat");
        if (0 > a1 || 1342177279 < a1) throw new RangeError("Invalid count value");
        a1 |= 0;
        for(var d = ""; a1;){
            a1 & 1 && (d += b), a1 >>>= 1;
            b += b;
        }
        return d;
    };
}, "es6", "es3");
var COMPILED = true, goog = goog || {
};
goog.global = this || self;
goog.isDef = function(a) {
    return (void 0) !== a;
};
goog.isString = function(a) {
    return "string" == typeof a;
};
goog.isBoolean = function(a) {
    return "boolean" == typeof a;
};
goog.isNumber = function(a) {
    return "number" == typeof a;
};
goog.exportPath_ = function(a, b, c) {
    a = a.split(".");
    c = c || goog.global;
    a[0] in c || "undefined" == typeof c.execScript || c.execScript("var " + a[0]);
    for(var d; a.length && (d = a.shift());)!a.length && goog.isDef(b) ? c[d] = b : c = c[d] && c[d] !== Object.prototype[d] ? c[d] : c[d] = {
    };
};
goog.define = function(a, b) {
    if (!COMPILED) {
        var c = goog.global.CLOSURE_UNCOMPILED_DEFINES, d = goog.global.CLOSURE_DEFINES;
        c && (void 0) === c.nodeType && Object.prototype.hasOwnProperty.call(c, a) ? b = c[a] : d && (void 0) === d.nodeType && Object.prototype.hasOwnProperty.call(d, a) && (b = d[a]);
    }
    return b;
};
goog.FEATURESET_YEAR = 2012;
goog.DEBUG = true;
goog.LOCALE = "en";
goog.TRUSTED_SITE = true;
goog.STRICT_MODE_COMPATIBLE = false;
goog.DISALLOW_TEST_ONLY_CODE = COMPILED && !goog.DEBUG;
goog.ENABLE_CHROME_APP_SAFE_SCRIPT_LOADING = false;
goog.provide = function(a) {
    if (goog.isInModuleLoader_()) throw Error("goog.provide cannot be used within a module.");
    if (!COMPILED && goog.isProvided_(a)) throw Error('Namespace "' + a + '" already declared.');
    goog.constructNamespace_(a);
};
goog.constructNamespace_ = function(a, b) {
    if (!COMPILED) {
        delete goog.implicitNamespaces_[a];
        for(var c = a; (c = c.substring(0, c.lastIndexOf("."))) && !goog.getObjectByName(c);)goog.implicitNamespaces_[c] = true;
    }
    goog.exportPath_(a, b);
};
goog.getScriptNonce = function(a) {
    if (a && a != goog.global) return goog.getScriptNonce_(a.document);
    null === goog.cspNonce_ && (goog.cspNonce_ = goog.getScriptNonce_(goog.global.document));
    return goog.cspNonce_;
};
goog.NONCE_PATTERN_ = /^[\w+/_-]+[=]{0,2}$/;
goog.cspNonce_ = null;
goog.getScriptNonce_ = function(a) {
    return (a = a.querySelector && a.querySelector("script[nonce]")) && (a = a.nonce || a.getAttribute("nonce")) && goog.NONCE_PATTERN_.test(a) ? a : "";
};
goog.VALID_MODULE_RE_ = /^[a-zA-Z_$][a-zA-Z0-9._$]*$/;
goog.module = function(a) {
    if (!goog.isString(a) || !a || -1 == a.search(goog.VALID_MODULE_RE_)) throw Error("Invalid module identifier");
    if (!goog.isInGoogModuleLoader_()) throw Error("Module " + a + " has been loaded incorrectly. Note, modules cannot be loaded as normal scripts. They require some kind of pre-processing step. You're likely trying to load a module via a script tag or as a part of a concatenated bundle without rewriting the module. For more info see: https://github.com/google/closure-library/wiki/goog.module:-an-ES6-module-like-alternative-to-goog.provide.");
    if (goog.moduleLoaderState_.moduleName) throw Error("goog.module may only be called once per module.");
    goog.moduleLoaderState_.moduleName = a;
    if (!COMPILED) {
        if (goog.isProvided_(a)) throw Error('Namespace "' + a + '" already declared.');
        delete goog.implicitNamespaces_[a];
    }
};
goog.module.get = function(a) {
    return goog.module.getInternal_(a);
};
goog.module.getInternal_ = function(a) {
    if (!COMPILED) {
        if (a in goog.loadedModules_) return goog.loadedModules_[a].exports;
        if (!goog.implicitNamespaces_[a]) return a = goog.getObjectByName(a), null != a ? a : null;
    }
    return null;
};
goog.ModuleType = {
    ES6: "es6",
    GOOG: "goog"
};
goog.moduleLoaderState_ = null;
goog.isInModuleLoader_ = function() {
    return goog.isInGoogModuleLoader_() || goog.isInEs6ModuleLoader_();
};
goog.isInGoogModuleLoader_ = function() {
    return !!goog.moduleLoaderState_ && goog.moduleLoaderState_.type == goog.ModuleType.GOOG;
};
goog.isInEs6ModuleLoader_ = function() {
    if (goog.moduleLoaderState_ && goog.moduleLoaderState_.type == goog.ModuleType.ES6) return true;
    var a = goog.global.$jscomp;
    return a ? "function" != typeof a.getCurrentModulePath ? false : !!a.getCurrentModulePath() : false;
};
goog.module.declareLegacyNamespace = function() {
    if (!COMPILED && !goog.isInGoogModuleLoader_()) throw Error("goog.module.declareLegacyNamespace must be called from within a goog.module");
    if (!COMPILED && !goog.moduleLoaderState_.moduleName) throw Error("goog.module must be called prior to goog.module.declareLegacyNamespace.");
    goog.moduleLoaderState_.declareLegacyNamespace = true;
};
goog.declareModuleId = function(a) {
    if (!COMPILED) {
        if (!goog.isInEs6ModuleLoader_()) throw Error("goog.declareModuleId may only be called from within an ES6 module");
        if (goog.moduleLoaderState_ && goog.moduleLoaderState_.moduleName) throw Error("goog.declareModuleId may only be called once per module.");
        if (a in goog.loadedModules_) throw Error('Module with namespace "' + a + '" already exists.');
    }
    if (goog.moduleLoaderState_) goog.moduleLoaderState_.moduleName = a;
    else {
        var b = goog.global.$jscomp;
        if (!b || "function" != typeof b.getCurrentModulePath) throw Error('Module with namespace "' + a + '" has been loaded incorrectly.');
        b = b.undefined(b.getCurrentModulePath());
        goog.loadedModules_[a] = {
            exports: b,
            type: goog.ModuleType.ES6,
            moduleId: a
        };
    }
};
goog.setTestOnly = function(a) {
    if (goog.DISALLOW_TEST_ONLY_CODE) throw a = a || "", Error("Importing test-only code into non-debug environment" + (a ? ": " + a : "."));
};
goog.forwardDeclare = function(a) {
};
COMPILED || (goog.isProvided_ = function(a) {
    return a in goog.loadedModules_ || !goog.implicitNamespaces_[a] && goog.isDefAndNotNull(goog.getObjectByName(a));
}, goog.implicitNamespaces_ = {
    "goog.module": true
});
goog.getObjectByName = function(a, b) {
    a = a.split(".");
    b = b || goog.global;
    for(var c = 0; c < a.length; c++)if (b = b[a[c]], !goog.isDefAndNotNull(b)) return null;
    return b;
};
goog.globalize = function(a, b) {
    b = b || goog.global;
    for(var c in a)b[c] = a[c];
};
goog.addDependency = function(a, b, c, d) {
    !COMPILED && goog.DEPENDENCIES_ENABLED && goog.debugLoader_.addDependency(a, b, c, d);
};
goog.ENABLE_DEBUG_LOADER = true;
goog.logToConsole_ = function(a) {
    goog.global.console && goog.global.console.error(a);
};
goog.undefined = function(a) {
    if (!COMPILED) {
        goog.ENABLE_DEBUG_LOADER && goog.debugLoader_.requested(a);
        if (goog.isProvided_(a)) {
            if (goog.isInModuleLoader_()) return goog.module.getInternal_(a);
        } else if (goog.ENABLE_DEBUG_LOADER) {
            var b = goog.moduleLoaderState_;
            goog.moduleLoaderState_ = null;
            try {
                goog.debugLoader_.load_(a);
            } finally{
                goog.moduleLoaderState_ = b;
            }
        }
        return null;
    }
};
goog.requireType = function(a) {
    return {
    };
};
goog.basePath = "";
goog.nullFunction = function() {
};
goog.abstractMethod = function() {
    throw Error("unimplemented abstract method");
};
goog.addSingletonGetter = function(a) {
    a.instance_ = void 0;
    a.getInstance = function() {
        if (a.instance_) return a.instance_;
        goog.DEBUG && (goog.instantiatedSingletons_[goog.instantiatedSingletons_.length] = a);
        return a.instance_ = new a;
    };
};
goog.instantiatedSingletons_ = [];
goog.LOAD_MODULE_USING_EVAL = true;
goog.SEAL_MODULE_EXPORTS = goog.DEBUG;
goog.loadedModules_ = {
};
goog.DEPENDENCIES_ENABLED = !COMPILED && goog.ENABLE_DEBUG_LOADER;
goog.TRANSPILE = "detect";
goog.ASSUME_ES_MODULES_TRANSPILED = false;
goog.TRANSPILE_TO_LANGUAGE = "";
goog.TRANSPILER = "transpile.js";
goog.hasBadLetScoping = null;
goog.useSafari10Workaround = function() {
    if (null == goog.hasBadLetScoping) {
        try {
            var a = !eval('"use strict";let x = 1; function f() { return typeof x; };f() == "number";');
        } catch (b) {
            a = false;
        }
        goog.hasBadLetScoping = a;
    }
    return goog.hasBadLetScoping;
};
goog.workaroundSafari10EvalBug = function(a) {
    return "(function(){" + a + "\n;})();\n";
};
goog.loadModule = function(a) {
    var b = goog.moduleLoaderState_;
    try {
        goog.moduleLoaderState_ = {
            moduleName: "",
            declareLegacyNamespace: false,
            type: goog.ModuleType.GOOG
        };
        if (goog.isFunction(a)) var c = a.call(void 0, {
        });
        else if (goog.isString(a)) goog.useSafari10Workaround() && (a = goog.workaroundSafari10EvalBug(a)), c = goog.loadModuleFromSource_.call(void 0, a);
        else throw Error("Invalid module definition");
        var d = goog.moduleLoaderState_.moduleName;
        if (goog.isString(d) && d) goog.moduleLoaderState_.declareLegacyNamespace ? goog.constructNamespace_(d, c) : goog.SEAL_MODULE_EXPORTS && Object.seal && "object" == typeof c && null != c && Object.seal(c), goog.loadedModules_[d] = {
            exports: c,
            type: goog.ModuleType.GOOG,
            moduleId: goog.moduleLoaderState_.moduleName
        };
        else throw Error('Invalid module name "' + d + '"');
    } finally{
        goog.moduleLoaderState_ = b;
    }
};
goog.loadModuleFromSource_ = function(a) {
    eval(a);
    return {
    };
};
goog.normalizePath_ = function(a) {
    a = a.split("/");
    for(var b = 0; b < a.length;)"." == a[b] ? a.splice(b, 1) : b && ".." == a[b] && a[b - 1] && ".." != a[b - 1] ? a.splice(--b, 2) : b++;
    return a.join("/");
};
goog.loadFileSync_ = function(a) {
    if (goog.global.CLOSURE_LOAD_FILE_SYNC) return goog.global.CLOSURE_LOAD_FILE_SYNC(a);
    try {
        var b = new goog.global.XMLHttpRequest;
        b.open("get", a, false);
        b.send();
        return 0 == b.status || 200 == b.status ? b.responseText : null;
    } catch (c) {
        return null;
    }
};
goog.transpile_ = function(a, b, c) {
    var d = goog.global.$jscomp;
    d || (goog.global.$jscomp = d = {
    });
    var e = d.transpile;
    if (!e) {
        var f = goog.basePath + goog.TRANSPILER, g = goog.loadFileSync_(f);
        if (g) {
            (function() {
                eval(g + "\n//# sourceURL=" + f);
            }).call(goog.global);
            if (goog.global.$gwtExport && goog.global.$gwtExport.$jscomp && !goog.global.$gwtExport.$jscomp.transpile) throw Error('The transpiler did not properly export the "transpile" method. $gwtExport: ' + JSON.stringify(goog.global.$gwtExport));
            goog.global.$jscomp.transpile = goog.global.$gwtExport.$jscomp.transpile;
            d = goog.global.$jscomp;
            e = d.transpile;
        }
    }
    e || (e = d.transpile = function(a1, b1) {
        goog.logToConsole_(b1 + " requires transpilation but no transpiler was found.");
        return a1;
    });
    return e(a, b, c);
};
goog.typeOf = function(a) {
    var b = typeof a;
    if ("object" == b) {
        if (a) {
            if (a instanceof Array) return "array";
            if (a instanceof Object) return b;
            var c = Object.prototype.toString.call(a);
            if ("[object Window]" == c) return "object";
            if ("[object Array]" == c || "number" == typeof a.length && "undefined" != typeof a.splice && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("splice")) return "array";
            if ("[object Function]" == c || "undefined" != typeof a.call && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("call")) return "function";
        } else return "null";
    } else if ("function" == b && "undefined" == typeof a.call) return "object";
    return b;
};
goog.isNull = function(a) {
    return null === a;
};
goog.isDefAndNotNull = function(a) {
    return null != a;
};
goog.isArray = function(a) {
    return "array" == goog.typeOf(a);
};
goog.isArrayLike = function(a) {
    var b = goog.typeOf(a);
    return "array" == b || "object" == b && "number" == typeof a.length;
};
goog.isDateLike = function(a) {
    return goog.isObject(a) && "function" == typeof a.getFullYear;
};
goog.isFunction = function(a) {
    return "function" == goog.typeOf(a);
};
goog.isObject = function(a) {
    var b = typeof a;
    return "object" == b && null != a || "function" == b;
};
goog.getUid = function(a) {
    return a[goog.UID_PROPERTY_] || (a[goog.UID_PROPERTY_] = ++goog.uidCounter_);
};
goog.hasUid = function(a) {
    return !!a[goog.UID_PROPERTY_];
};
goog.removeUid = function(a) {
    null !== a && "removeAttribute" in a && a.removeAttribute(goog.UID_PROPERTY_);
    try {
        delete a[goog.UID_PROPERTY_];
    } catch (b) {
    }
};
goog.UID_PROPERTY_ = "closure_uid_" + (1000000000 * Math.random() >>> 0);
goog.uidCounter_ = 0;
goog.getHashCode = goog.getUid;
goog.removeHashCode = goog.removeUid;
goog.cloneObject = function(a) {
    var b = goog.typeOf(a);
    if ("object" == b || "array" == b) {
        if ("function" === typeof a.clone) return a.clone();
        b = "array" == b ? [] : {
        };
        for(var c in a)b[c] = goog.cloneObject(a[c]);
        return b;
    }
    return a;
};
goog.bindNative_ = function(a, b, c) {
    return a.call.apply(a.bind, arguments);
};
goog.bindJs_ = function(a, b, c) {
    if (!a) throw Error();
    if (2 < arguments.length) {
        var d = Array.prototype.slice.call(arguments, 2);
        return function() {
            var c1 = Array.prototype.slice.call(arguments);
            Array.prototype.unshift.apply(c1, d);
            return a.apply(b, c1);
        };
    }
    return function() {
        return a.apply(b, arguments);
    };
};
goog.bind = function(a, b, c) {
    Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? goog.bind = goog.bindNative_ : goog.bind = goog.bindJs_;
    return goog.bind.apply(null, arguments);
};
goog.partial = function(a, b) {
    var c = Array.prototype.slice.call(arguments, 1);
    return function() {
        var b1 = c.slice();
        b1.push.apply(b1, arguments);
        return a.apply(this, b1);
    };
};
goog.mixin = function(a, b) {
    for(var c in b)a[c] = b[c];
};
goog.now = goog.TRUSTED_SITE && Date.now || function() {
    return +new Date;
};
goog.globalEval = function(a) {
    if (goog.global.execScript) goog.global.execScript(a, "JavaScript");
    else if (goog.global.eval) {
        if (null == goog.evalWorksForGlobals_) {
            try {
                goog.global.eval("var _evalTest_ = 1;");
            } catch (d) {
            }
            if ("undefined" != typeof goog.global._evalTest_) {
                try {
                    delete goog.global._evalTest_;
                } catch (d) {
                }
                goog.evalWorksForGlobals_ = true;
            } else goog.evalWorksForGlobals_ = false;
        }
        if (goog.evalWorksForGlobals_) goog.global.eval(a);
        else {
            var b = goog.global.document, c = b.createElement("SCRIPT");
            c.type = "text/javascript";
            c.defer = false;
            c.appendChild(b.createTextNode(a));
            b.head.appendChild(c);
            b.head.removeChild(c);
        }
    } else throw Error("goog.globalEval not available");
};
goog.evalWorksForGlobals_ = null;
goog.getCssName = function(a, b) {
    if ("." == String(a).charAt(0)) throw Error('className passed in goog.getCssName must not start with ".". You passed: ' + a);
    var c = function(a1) {
        return goog.cssNameMapping_[a1] || a1;
    }, d = function(a1) {
        a1 = a1.split("-");
        for(var b1 = [], d1 = 0; d1 < a1.length; d1++)b1.push(c(a1[d1]));
        return b1.join("-");
    };
    d = goog.cssNameMapping_ ? "BY_WHOLE" == goog.cssNameMappingStyle_ ? c : d : function(a1) {
        return a1;
    };
    a = b ? a + "-" + d(b) : d(a);
    return goog.global.CLOSURE_CSS_NAME_MAP_FN ? goog.global.CLOSURE_CSS_NAME_MAP_FN(a) : a;
};
goog.setCssNameMapping = function(a, b) {
    goog.cssNameMapping_ = a;
    goog.cssNameMappingStyle_ = b;
};
!COMPILED && goog.global.CLOSURE_CSS_NAME_MAPPING && (goog.cssNameMapping_ = goog.global.CLOSURE_CSS_NAME_MAPPING);
goog.getMsg = function(a, b, c) {
    c && c.html && (a = a.replace(/</g, "&lt;"));
    b && (a = a.replace(/\{\$([^}]+)}/g, function(a1, c1) {
        return null != b && c1 in b ? b[c1] : a1;
    }));
    return a;
};
goog.getMsgWithFallback = function(a, b) {
    return a;
};
goog.exportSymbol = function(a, b, c) {
    goog.exportPath_(a, b, c);
};
goog.exportProperty = function(a, b, c) {
    a[b] = c;
};
goog.inherits = function(a, b) {
    function c() {
    }
    c.prototype = b.prototype;
    a.superClass_ = b.prototype;
    a.prototype = new c;
    a.prototype.constructor = a;
    a.base = function(a1, c1, f) {
        for(var d = Array(arguments.length - 2), e = 2; e < arguments.length; e++)d[e - 2] = arguments[e];
        return b.prototype[c1].apply(a1, d);
    };
};
goog.base = function(a, b, c) {
    var d = arguments.callee.caller;
    if (goog.STRICT_MODE_COMPATIBLE || goog.DEBUG && !d) throw Error("arguments.caller not defined.  goog.base() cannot be used with strict mode code. See http://www.ecma-international.org/ecma-262/5.1/#sec-C");
    if ("undefined" !== typeof d.superClass_) {
        for(var e = Array(arguments.length - 1), f = 1; f < arguments.length; f++)e[f - 1] = arguments[f];
        return d.superClass_.constructor.apply(a, e);
    }
    if ("string" != typeof b && "symbol" != typeof b) throw Error("method names provided to goog.base must be a string or a symbol");
    e = Array(arguments.length - 2);
    for(f = 2; f < arguments.length; f++)e[f - 2] = arguments[f];
    f = false;
    for(var g = a.constructor.prototype; g; g = Object.getPrototypeOf(g))if (g[b] === d) f = true;
    else if (f) return g[b].apply(a, e);
    if (a[b] === d) return a.constructor.prototype[b].apply(a, e);
    throw Error("goog.base called from a method of one name to a method of a different name");
};
goog.scope = function(a) {
    if (goog.isInModuleLoader_()) throw Error("goog.scope is not supported within a module.");
    a.call(goog.global);
};
COMPILED || (goog.global.COMPILED = COMPILED);
goog.defineClass = function(a, b) {
    var c = b.constructor, d = b.statics;
    c && c != Object.prototype.constructor || (c = function() {
        throw Error("cannot instantiate an interface (no constructor defined).");
    });
    c = goog.defineClass.createSealingConstructor_(c, a);
    a && goog.inherits(c, a);
    delete b.constructor;
    delete b.statics;
    goog.defineClass.applyProperties_(c.prototype, b);
    null != d && (d instanceof Function ? d(c) : goog.defineClass.applyProperties_(c, d));
    return c;
};
goog.defineClass.SEAL_CLASS_INSTANCES = goog.DEBUG;
goog.defineClass.createSealingConstructor_ = function(a, b) {
    if (!goog.defineClass.SEAL_CLASS_INSTANCES) return a;
    var c = !goog.defineClass.isUnsealable_(b), d = function() {
        var b1 = a.apply(this, arguments) || this;
        b1[goog.UID_PROPERTY_] = b1[goog.UID_PROPERTY_];
        this.constructor === d && c && Object.seal instanceof Function && Object.seal(b1);
        return b1;
    };
    return d;
};
goog.defineClass.isUnsealable_ = function(a) {
    return a && a.prototype && a.prototype[goog.UNSEALABLE_CONSTRUCTOR_PROPERTY_];
};
goog.defineClass.OBJECT_PROTOTYPE_FIELDS_ = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");
goog.defineClass.applyProperties_ = function(a, b) {
    for(var c in b)Object.prototype.hasOwnProperty.call(b, c) && (a[c] = b[c]);
    for(var d = 0; d < goog.defineClass.OBJECT_PROTOTYPE_FIELDS_.length; d++)c = goog.defineClass.OBJECT_PROTOTYPE_FIELDS_[d], Object.prototype.hasOwnProperty.call(b, c) && (a[c] = b[c]);
};
goog.tagUnsealableClass = function(a) {
    !COMPILED && goog.defineClass.SEAL_CLASS_INSTANCES && (a.prototype[goog.UNSEALABLE_CONSTRUCTOR_PROPERTY_] = true);
};
goog.UNSEALABLE_CONSTRUCTOR_PROPERTY_ = "goog_defineClass_legacy_unsealable";
!COMPILED && goog.DEPENDENCIES_ENABLED && (goog.inHtmlDocument_ = function() {
    var a = goog.global.document;
    return null != a && "write" in a;
}, goog.isDocumentLoading_ = function() {
    var a = goog.global.document;
    return a.attachEvent ? "complete" != a.readyState : "loading" == a.readyState;
}, goog.findBasePath_ = function() {
    if (goog.isDef(goog.global.CLOSURE_BASE_PATH) && goog.isString(goog.global.CLOSURE_BASE_PATH)) goog.basePath = goog.global.CLOSURE_BASE_PATH;
    else if (goog.inHtmlDocument_()) {
        var a = goog.global.document, b = a.currentScript;
        a = b ? [
            b
        ] : a.getElementsByTagName("SCRIPT");
        for(b = a.length - 1; 0 <= b; --b){
            var c = a[b].src, d = c.lastIndexOf("?");
            d = -1 == d ? c.length : d;
            if ("base.js" == c.substr(d - 7, 7)) {
                goog.basePath = c.substr(0, d - 7);
                break;
            }
        }
    }
}, goog.findBasePath_(), goog.Transpiler = function() {
    this.requiresTranspilation_ = null;
    this.transpilationTarget_ = goog.TRANSPILE_TO_LANGUAGE;
}, goog.Transpiler.prototype.createRequiresTranspilation_ = function() {
    function a(a1, b) {
        e ? d[a1] = true : b() ? (c = a1, d[a1] = false) : e = d[a1] = true;
    }
    function b(a1) {
        try {
            return !!eval(a1);
        } catch (h) {
            return false;
        }
    }
    var c = "es3", d = {
        es3: false
    }, e = false, f = goog.global.navigator && goog.global.navigator.userAgent ? goog.global.navigator.userAgent : "";
    a("es5", function() {
        return b("[1,].length==1");
    });
    a("es6", function() {
        return f.match(/Edge\/(\d+)(\.\d)*/i) ? false : b('(()=>{"use strict";class X{constructor(){if(new.target!=String)throw 1;this.x=42}}let q=Reflect.construct(X,[],String);if(q.x!=42||!(q instanceof String))throw 1;for(const a of[2,3]){if(a==2)continue;function f(z={a}){let a=0;return z.a}{function f(){return 0;}}return f()==3}})()');
    });
    a("es7", function() {
        return b("2 ** 2 == 4");
    });
    a("es8", function() {
        return b("async () => 1, true");
    });
    a("es9", function() {
        return b("({...rest} = {}), true");
    });
    a("es_next", function() {
        return false;
    });
    return {
        target: c,
        map: d
    };
}, goog.Transpiler.prototype.needsTranspile = function(a, b) {
    if ("always" == goog.TRANSPILE) return true;
    if ("never" == goog.TRANSPILE) return false;
    if (!this.requiresTranspilation_) {
        var c = this.createRequiresTranspilation_();
        this.requiresTranspilation_ = c.map;
        this.transpilationTarget_ = this.transpilationTarget_ || c.target;
    }
    if (a in this.requiresTranspilation_) return this.requiresTranspilation_[a] ? true : !goog.inHtmlDocument_() || "es6" != b || "noModule" in goog.global.document.createElement("script") ? false : true;
    throw Error("Unknown language mode: " + a);
}, goog.Transpiler.prototype.transpile = function(a, b) {
    return goog.transpile_(a, b, this.transpilationTarget_);
}, goog.transpiler_ = new goog.Transpiler, goog.protectScriptTag_ = function(a) {
    return a.replace(/<\/(SCRIPT)/ig, "\\x3c/$1");
}, goog.DebugLoader_ = function() {
    this.dependencies_ = {
    };
    this.idToPath_ = {
    };
    this.written_ = {
    };
    this.loadingDeps_ = [];
    this.depsToLoad_ = [];
    this.paused_ = false;
    this.factory_ = new goog.DependencyFactory(goog.transpiler_);
    this.deferredCallbacks_ = {
    };
    this.deferredQueue_ = [];
}, goog.DebugLoader_.prototype.bootstrap = function(a, b) {
    function c() {
        d && (goog.global.setTimeout(d, 0), d = null);
    }
    var d = b;
    if (a.length) {
        b = [];
        for(var e = 0; e < a.length; e++){
            var f = this.getPathFromDeps_(a[e]);
            if (!f) throw Error("Unregonized namespace: " + a[e]);
            b.push(this.dependencies_[f]);
        }
        f = goog.undefined;
        var g = 0;
        for(e = 0; e < a.length; e++)f(a[e]), b[e].onLoad(function() {
            (++g) == a.length && c();
        });
    } else c();
}, goog.DebugLoader_.prototype.loadClosureDeps = function() {
    this.depsToLoad_.push(this.factory_.createDependency(goog.normalizePath_(goog.basePath + "deps.js"), "deps.js", [], [], {
    }, false));
    this.loadDeps_();
}, goog.DebugLoader_.prototype.requested = function(a, b) {
    (a = this.getPathFromDeps_(a)) && (b || this.areDepsLoaded_(this.dependencies_[a].requires)) && (b = this.deferredCallbacks_[a]) && (delete this.deferredCallbacks_[a], b());
}, goog.DebugLoader_.prototype.setDependencyFactory = function(a) {
    this.factory_ = a;
}, goog.DebugLoader_.prototype.load_ = function(a) {
    if (this.getPathFromDeps_(a)) {
        var b = this, c = [], d = function(a1) {
            var e = b.getPathFromDeps_(a1);
            if (!e) throw Error("Bad dependency path or symbol: " + a1);
            if (!b.written_[e]) {
                b.written_[e] = true;
                a1 = b.dependencies_[e];
                for(e = 0; e < a1.requires.length; e++)goog.isProvided_(a1.requires[e]) || d(a1.requires[e]);
                c.push(a1);
            }
        };
        d(a);
        a = !!this.depsToLoad_.length;
        this.depsToLoad_ = this.depsToLoad_.concat(c);
        this.paused_ || a || this.loadDeps_();
    } else throw a = "goog.require could not find: " + a, goog.logToConsole_(a), Error(a);
}, goog.DebugLoader_.prototype.loadDeps_ = function() {
    for(var a = this, b = this.paused_; this.depsToLoad_.length && !b;)(function() {
        var c = false, d = a.depsToLoad_.shift(), e = false;
        a.loading_(d);
        var f = {
            pause: function() {
                if (c) throw Error("Cannot call pause after the call to load.");
                b = true;
            },
            resume: function() {
                c ? a.resume_() : b = false;
            },
            loaded: function() {
                if (e) throw Error("Double call to loaded.");
                e = true;
                a.loaded_(d);
            },
            pending: function() {
                for(var b1 = [], c1 = 0; c1 < a.loadingDeps_.length; c1++)b1.push(a.loadingDeps_[c1]);
                return b1;
            },
            setModuleState: function(a1) {
                goog.moduleLoaderState_ = {
                    type: a1,
                    moduleName: "",
                    declareLegacyNamespace: false
                };
            },
            registerEs6ModuleExports: function(a1, b1, c1) {
                c1 && (goog.loadedModules_[c1] = {
                    exports: b1,
                    type: goog.ModuleType.ES6,
                    moduleId: c1 || ""
                });
            },
            registerGoogModuleExports: function(a1, b1) {
                goog.loadedModules_[a1] = {
                    exports: b1,
                    type: goog.ModuleType.GOOG,
                    moduleId: a1
                };
            },
            clearModuleState: function() {
                goog.moduleLoaderState_ = null;
            },
            defer: function(b1) {
                if (c) throw Error("Cannot register with defer after the call to load.");
                a.defer_(d, b1);
            },
            areDepsLoaded: function() {
                return a.areDepsLoaded_(d.requires);
            }
        };
        try {
            d.load(f);
        } finally{
            c = true;
        }
    })();
    b && this.pause_();
}, goog.DebugLoader_.prototype.pause_ = function() {
    this.paused_ = true;
}, goog.DebugLoader_.prototype.resume_ = function() {
    this.paused_ && (this.paused_ = false, this.loadDeps_());
}, goog.DebugLoader_.prototype.loading_ = function(a) {
    this.loadingDeps_.push(a);
}, goog.DebugLoader_.prototype.loaded_ = function(a) {
    for(var b = 0; b < this.loadingDeps_.length; b++)if (this.loadingDeps_[b] == a) {
        this.loadingDeps_.splice(b, 1);
        break;
    }
    for(b = 0; b < this.deferredQueue_.length; b++)if (this.deferredQueue_[b] == a.path) {
        this.deferredQueue_.splice(b, 1);
        break;
    }
    if (this.loadingDeps_.length == this.deferredQueue_.length && !this.depsToLoad_.length) for(; this.deferredQueue_.length;)this.requested(this.deferredQueue_.shift(), true);
    a.loaded();
}, goog.DebugLoader_.prototype.areDepsLoaded_ = function(a) {
    for(var b = 0; b < a.length; b++){
        var c = this.getPathFromDeps_(a[b]);
        if (!c || !(c in this.deferredCallbacks_ || goog.isProvided_(a[b]))) return false;
    }
    return true;
}, goog.DebugLoader_.prototype.getPathFromDeps_ = function(a) {
    return a in this.idToPath_ ? this.idToPath_[a] : a in this.dependencies_ ? a : null;
}, goog.DebugLoader_.prototype.defer_ = function(a, b) {
    this.deferredCallbacks_[a.path] = b;
    this.deferredQueue_.push(a.path);
}, goog.LoadController = function() {
}, goog.LoadController.prototype.pause = function() {
}, goog.LoadController.prototype.resume = function() {
}, goog.LoadController.prototype.loaded = function() {
}, goog.LoadController.prototype.pending = function() {
}, goog.LoadController.prototype.registerEs6ModuleExports = function(a, b, c) {
}, goog.LoadController.prototype.setModuleState = function(a) {
}, goog.LoadController.prototype.clearModuleState = function() {
}, goog.LoadController.prototype.defer = function(a) {
}, goog.LoadController.prototype.areDepsLoaded = function() {
}, goog.Dependency = function(a, b, c, d, e) {
    this.path = a;
    this.relativePath = b;
    this.provides = c;
    this.requires = d;
    this.loadFlags = e;
    this.loaded_ = false;
    this.loadCallbacks_ = [];
}, goog.Dependency.prototype.getPathName = function() {
    var a = this.path, b = a.indexOf("://");
    0 <= b && (a = a.substring(b + 3), b = a.indexOf("/"), 0 <= b && (a = a.substring(b + 1)));
    return a;
}, goog.Dependency.prototype.onLoad = function(a) {
    this.loaded_ ? a() : this.loadCallbacks_.push(a);
}, goog.Dependency.prototype.loaded = function() {
    this.loaded_ = true;
    var a = this.loadCallbacks_;
    this.loadCallbacks_ = [];
    for(var b = 0; b < a.length; b++)a[b]();
}, goog.Dependency.defer_ = false, goog.Dependency.callbackMap_ = {
}, goog.Dependency.registerCallback_ = function(a) {
    var b = Math.random().toString(32);
    goog.Dependency.callbackMap_[b] = a;
    return b;
}, goog.Dependency.unregisterCallback_ = function(a) {
    delete goog.Dependency.callbackMap_[a];
}, goog.Dependency.callback_ = function(a, b) {
    if (a in goog.Dependency.callbackMap_) {
        for(var c = goog.Dependency.callbackMap_[a], d = [], e = 1; e < arguments.length; e++)d.push(arguments[e]);
        c.apply(void 0, d);
    } else throw Error("Callback key " + a + " does not exist (was base.js loaded more than once?).");
}, goog.Dependency.prototype.load = function(a) {
    if (goog.global.CLOSURE_IMPORT_SCRIPT) goog.global.CLOSURE_IMPORT_SCRIPT(this.path) ? a.loaded() : a.pause();
    else if (goog.inHtmlDocument_()) {
        var b = goog.global.document;
        if ("complete" == b.readyState && !goog.ENABLE_CHROME_APP_SAFE_SCRIPT_LOADING) {
            if (/\bdeps.js$/.test(this.path)) {
                a.loaded();
                return;
            }
            throw Error('Cannot write "' + this.path + '" after document load');
        }
        if (!goog.ENABLE_CHROME_APP_SAFE_SCRIPT_LOADING && goog.isDocumentLoading_()) {
            var c = goog.Dependency.registerCallback_(function(b1) {
                goog.DebugLoader_.IS_OLD_IE_ && "complete" != b1.readyState || (goog.Dependency.unregisterCallback_(c), a.loaded());
            }), d = !goog.DebugLoader_.IS_OLD_IE_ && goog.getScriptNonce() ? ' nonce="' + goog.getScriptNonce() + '"' : "";
            d = '<script src="' + this.path + '" ' + (goog.DebugLoader_.IS_OLD_IE_ ? "onreadystatechange" : "onload") + "=\"goog.Dependency.callback_('" + c + '\', this)" type="text/javascript" ' + (goog.Dependency.defer_ ? "defer" : "") + d + ">\x3c/script>";
            b.write(goog.TRUSTED_TYPES_POLICY_ ? goog.TRUSTED_TYPES_POLICY_.createHTML(d) : d);
        } else {
            var e = b.createElement("script");
            e.defer = goog.Dependency.defer_;
            e.async = false;
            e.type = "text/javascript";
            (d = goog.getScriptNonce()) && e.setAttribute("nonce", d);
            goog.DebugLoader_.IS_OLD_IE_ ? (a.pause(), e.onreadystatechange = function() {
                if ("loaded" == e.readyState || "complete" == e.readyState) a.loaded(), a.resume();
            }) : e.onload = function() {
                e.onload = null;
                a.loaded();
            };
            e.src = goog.TRUSTED_TYPES_POLICY_ ? goog.TRUSTED_TYPES_POLICY_.createScriptURL(this.path) : this.path;
            b.head.appendChild(e);
        }
    } else goog.logToConsole_("Cannot use default debug loader outside of HTML documents."), "deps.js" == this.relativePath ? (goog.logToConsole_("Consider setting CLOSURE_IMPORT_SCRIPT before loading base.js, or setting CLOSURE_NO_DEPS to true."), a.loaded()) : a.pause();
}, goog.Es6ModuleDependency = function(a, b, c, d, e) {
    goog.Dependency.call(this, a, b, c, d, e);
}, goog.inherits(goog.Es6ModuleDependency, goog.Dependency), goog.Es6ModuleDependency.prototype.load = function(a) {
    function b(a1, b1) {
        a1 = b1 ? '<script type="module" crossorigin>' + b1 + "\x3c/script>" : '<script type="module" crossorigin src="' + a1 + '">\x3c/script>';
        d.write(goog.TRUSTED_TYPES_POLICY_ ? goog.TRUSTED_TYPES_POLICY_.createHTML(a1) : a1);
    }
    function c(a1, b1) {
        var c1 = d.createElement("script");
        c1.defer = true;
        c1.async = false;
        c1.type = "module";
        c1.setAttribute("crossorigin", true);
        var e = goog.getScriptNonce();
        e && c1.setAttribute("nonce", e);
        b1 ? c1.textContent = goog.TRUSTED_TYPES_POLICY_ ? goog.TRUSTED_TYPES_POLICY_.createScript(b1) : b1 : c1.src = goog.TRUSTED_TYPES_POLICY_ ? goog.TRUSTED_TYPES_POLICY_.createScriptURL(a1) : a1;
        d.head.appendChild(c1);
    }
    if (goog.global.CLOSURE_IMPORT_SCRIPT) goog.global.CLOSURE_IMPORT_SCRIPT(this.path) ? a.loaded() : a.pause();
    else if (goog.inHtmlDocument_()) {
        var d = goog.global.document, e = this;
        if (goog.isDocumentLoading_()) {
            var f = b;
            goog.Dependency.defer_ = true;
        } else f = c;
        var g = goog.Dependency.registerCallback_(function() {
            goog.Dependency.unregisterCallback_(g);
            a.setModuleState(goog.ModuleType.ES6);
        });
        f(void 0, 'goog.Dependency.callback_("' + g + '")');
        f(this.path, void 0);
        var h = goog.Dependency.registerCallback_(function(b1) {
            goog.Dependency.unregisterCallback_(h);
            a.registerEs6ModuleExports(e.path, b1, goog.moduleLoaderState_.moduleName);
        });
        f(void 0, 'import * as m from "' + this.path + '"; goog.Dependency.callback_("' + h + '", m)');
        var k = goog.Dependency.registerCallback_(function() {
            goog.Dependency.unregisterCallback_(k);
            a.clearModuleState();
            a.loaded();
        });
        f(void 0, 'goog.Dependency.callback_("' + k + '")');
    } else goog.logToConsole_("Cannot use default debug loader outside of HTML documents."), a.pause();
}, goog.TransformedDependency = function(a, b, c, d, e) {
    goog.Dependency.call(this, a, b, c, d, e);
    this.contents_ = null;
    this.lazyFetch_ = !goog.inHtmlDocument_() || !("noModule" in goog.global.document.createElement("script"));
}, goog.inherits(goog.TransformedDependency, goog.Dependency), goog.TransformedDependency.prototype.load = function(a) {
    function b() {
        e.contents_ = goog.loadFileSync_(e.path);
        e.contents_ && (e.contents_ = e.transform(e.contents_), e.contents_ && (e.contents_ += "\n//# sourceURL=" + e.path));
    }
    function c() {
        e.lazyFetch_ && b();
        if (e.contents_) {
            f && a.setModuleState(goog.ModuleType.ES6);
            try {
                var c1 = e.contents_;
                e.contents_ = null;
                goog.globalEval(c1);
                if (f) var d = goog.moduleLoaderState_.moduleName;
            } finally{
                f && a.clearModuleState();
            }
            f && goog.global.$jscomp.undefined.ensure([
                e.getPathName()
            ], function() {
                a.registerEs6ModuleExports(e.path, goog.global.$jscomp.undefined(e.getPathName()), d);
            });
            a.loaded();
        }
    }
    function d() {
        var a1 = goog.global.document, b1 = goog.Dependency.registerCallback_(function() {
            goog.Dependency.unregisterCallback_(b1);
            c();
        }), d1 = '<script type="text/javascript">' + goog.protectScriptTag_('goog.Dependency.callback_("' + b1 + '");') + "\x3c/script>";
        a1.write(goog.TRUSTED_TYPES_POLICY_ ? goog.TRUSTED_TYPES_POLICY_.createHTML(d1) : d1);
    }
    var e = this;
    if (goog.global.CLOSURE_IMPORT_SCRIPT) b(), this.contents_ && goog.global.CLOSURE_IMPORT_SCRIPT("", this.contents_) ? (this.contents_ = null, a.loaded()) : a.pause();
    else {
        var f = this.loadFlags.module == goog.ModuleType.ES6;
        this.lazyFetch_ || b();
        var g = 1 < a.pending().length, h = g && goog.DebugLoader_.IS_OLD_IE_;
        g = goog.Dependency.defer_ && (g || goog.isDocumentLoading_());
        if (h || g) a.defer(function() {
            c();
        });
        else {
            var k = goog.global.document;
            h = goog.inHtmlDocument_() && "ActiveXObject" in goog.global;
            if (f && goog.inHtmlDocument_() && goog.isDocumentLoading_() && !h) {
                goog.Dependency.defer_ = true;
                a.pause();
                var l = k.onreadystatechange;
                k.onreadystatechange = function() {
                    "interactive" == k.readyState && (k.onreadystatechange = l, c(), a.resume());
                    goog.isFunction(l) && l.apply(void 0, arguments);
                };
            } else !goog.DebugLoader_.IS_OLD_IE_ && goog.inHtmlDocument_() && goog.isDocumentLoading_() ? d() : c();
        }
    }
}, goog.TransformedDependency.prototype.transform = function(a) {
}, goog.TranspiledDependency = function(a, b, c2, d, e, f) {
    goog.TransformedDependency.call(this, a, b, c2, d, e);
    this.transpiler = f;
}, goog.inherits(goog.TranspiledDependency, goog.TransformedDependency), goog.TranspiledDependency.prototype.transform = function(a) {
    return this.transpiler.transpile(a, this.getPathName());
}, goog.PreTranspiledEs6ModuleDependency = function(a, b, c2, d, e) {
    goog.TransformedDependency.call(this, a, b, c2, d, e);
}, goog.inherits(goog.PreTranspiledEs6ModuleDependency, goog.TransformedDependency), goog.PreTranspiledEs6ModuleDependency.prototype.transform = function(a) {
    return a;
}, goog.GoogModuleDependency = function(a, b, c2, d, e, f, g) {
    goog.TransformedDependency.call(this, a, b, c2, d, e);
    this.needsTranspile_ = f;
    this.transpiler_ = g;
}, goog.inherits(goog.GoogModuleDependency, goog.TransformedDependency), goog.GoogModuleDependency.prototype.transform = function(a) {
    this.needsTranspile_ && (a = this.transpiler_.transpile(a, this.getPathName()));
    return goog.LOAD_MODULE_USING_EVAL && goog.isDef(goog.global.JSON) ? "goog.loadModule(" + goog.global.JSON.stringify(a + "\n//# sourceURL=" + this.path + "\n") + ");" : 'goog.loadModule(function(exports) {"use strict";' + a + "\n;return exports});\n//# sourceURL=" + this.path + "\n";
}, goog.DebugLoader_.IS_OLD_IE_ = !(goog.global.atob || !goog.global.document || !goog.global.document.all), goog.DebugLoader_.prototype.addDependency = function(a, b, c2, d) {
    b = b || [];
    a = a.replace(/\\/g, "/");
    var e = goog.normalizePath_(goog.basePath + a);
    d && "boolean" !== typeof d || (d = d ? {
        module: goog.ModuleType.GOOG
    } : {
    });
    c2 = this.factory_.createDependency(e, a, b, c2, d, goog.transpiler_.needsTranspile(d.lang || "es3", d.module));
    this.dependencies_[e] = c2;
    for(c2 = 0; c2 < b.length; c2++)this.idToPath_[b[c2]] = e;
    this.idToPath_[a] = e;
}, goog.DependencyFactory = function(a) {
    this.transpiler = a;
}, goog.DependencyFactory.prototype.createDependency = function(a, b, c2, d, e, f) {
    return e.module == goog.ModuleType.GOOG ? new goog.GoogModuleDependency(a, b, c2, d, e, f, this.transpiler) : f ? new goog.TranspiledDependency(a, b, c2, d, e, this.transpiler) : e.module == goog.ModuleType.ES6 ? "never" == goog.TRANSPILE && goog.ASSUME_ES_MODULES_TRANSPILED ? new goog.PreTranspiledEs6ModuleDependency(a, b, c2, d, e) : new goog.Es6ModuleDependency(a, b, c2, d, e) : new goog.Dependency(a, b, c2, d, e);
}, goog.debugLoader_ = new goog.DebugLoader_, goog.loadClosureDeps = function() {
    goog.debugLoader_.loadClosureDeps();
}, goog.setDependencyFactory = function(a) {
    goog.debugLoader_.setDependencyFactory(a);
}, goog.global.CLOSURE_NO_DEPS || goog.debugLoader_.loadClosureDeps(), goog.bootstrap = function(a, b) {
    goog.debugLoader_.bootstrap(a, b);
});
goog.TRUSTED_TYPES_POLICY_NAME = "";
goog.identity_ = function(a) {
    return a;
};
goog.createTrustedTypesPolicy = function(a) {
    var b = null;
    if ("undefined" === typeof TrustedTypes || !TrustedTypes.createPolicy) return b;
    try {
        b = TrustedTypes.createPolicy(a, {
            createHTML: goog.identity_,
            createScript: goog.identity_,
            createScriptURL: goog.identity_,
            createURL: goog.identity_
        });
    } catch (c2) {
        goog.logToConsole_(c2.message);
    }
    return b;
};
goog.TRUSTED_TYPES_POLICY_ = goog.TRUSTED_TYPES_POLICY_NAME ? goog.createTrustedTypesPolicy(goog.TRUSTED_TYPES_POLICY_NAME + "#base") : null;
goog.object = {
};
goog.object.is = function(a, b) {
    return a === b ? 0 !== a || 1 / a === 1 / b : a !== a && b !== b;
};
goog.object.forEach = function(a, b, c2) {
    for(var d in a)b.call(c2, a[d], d, a);
};
goog.object.filter = function(a, b, c2) {
    var d = {
    }, e;
    for(e in a)b.call(c2, a[e], e, a) && (d[e] = a[e]);
    return d;
};
goog.object.map = function(a, b, c2) {
    var d = {
    }, e;
    for(e in a)d[e] = b.call(c2, a[e], e, a);
    return d;
};
goog.object.some = function(a, b, c2) {
    for(var d in a)if (b.call(c2, a[d], d, a)) return true;
    return false;
};
goog.object.every = function(a, b, c2) {
    for(var d in a)if (!b.call(c2, a[d], d, a)) return false;
    return true;
};
goog.object.getCount = function(a) {
    var b = 0, c2;
    for(c2 in a)b++;
    return b;
};
goog.object.getAnyKey = function(a) {
    for(var b in a)return b;
};
goog.object.getAnyValue = function(a) {
    for(var b in a)return a[b];
};
goog.object.contains = function(a, b) {
    return goog.object.containsValue(a, b);
};
goog.object.getValues = function(a) {
    var b = [], c2 = 0, d;
    for(d in a)b[c2++] = a[d];
    return b;
};
goog.object.getKeys = function(a) {
    var b = [], c2 = 0, d;
    for(d in a)b[c2++] = d;
    return b;
};
goog.object.getValueByKeys = function(a, b) {
    var c2 = goog.isArrayLike(b), d = c2 ? b : arguments;
    for(c2 = c2 ? 0 : 1; c2 < d.length; c2++){
        if (null == a) return;
        a = a[d[c2]];
    }
    return a;
};
goog.object.containsKey = function(a, b) {
    return null !== a && b in a;
};
goog.object.containsValue = function(a, b) {
    for(var c2 in a)if (a[c2] == b) return true;
    return false;
};
goog.object.findKey = function(a, b, c2) {
    for(var d in a)if (b.call(c2, a[d], d, a)) return d;
};
goog.object.findValue = function(a, b, c2) {
    return (b = goog.object.findKey(a, b, c2)) && a[b];
};
goog.object.isEmpty = function(a) {
    for(var b in a)return false;
    return true;
};
goog.object.clear = function(a) {
    for(var b in a)delete a[b];
};
goog.object.remove = function(a, b) {
    var c2;
    (c2 = b in a) && delete a[b];
    return c2;
};
goog.object.add = function(a, b, c2) {
    if (null !== a && b in a) throw Error('The object already contains the key "' + b + '"');
    goog.object.set(a, b, c2);
};
goog.object.get = function(a, b, c2) {
    return null !== a && b in a ? a[b] : c2;
};
goog.object.set = function(a, b, c2) {
    a[b] = c2;
};
goog.object.setIfUndefined = function(a, b, c2) {
    return b in a ? a[b] : a[b] = c2;
};
goog.object.setWithReturnValueIfNotSet = function(a, b, c2) {
    if (b in a) return a[b];
    c2 = c2();
    return a[b] = c2;
};
goog.object.equals = function(a, b) {
    for(var c2 in a)if (!(c2 in b) || a[c2] !== b[c2]) return false;
    for(var d in b)if (!(d in a)) return false;
    return true;
};
goog.object.clone = function(a) {
    var b = {
    }, c2;
    for(c2 in a)b[c2] = a[c2];
    return b;
};
goog.object.unsafeClone = function(a) {
    var b = goog.typeOf(a);
    if ("object" == b || "array" == b) {
        if (goog.isFunction(a.clone)) return a.clone();
        b = "array" == b ? [] : {
        };
        for(var c2 in a)b[c2] = goog.object.unsafeClone(a[c2]);
        return b;
    }
    return a;
};
goog.object.transpose = function(a) {
    var b = {
    }, c3;
    for(c3 in a)b[a[c3]] = c3;
    return b;
};
goog.object.PROTOTYPE_FIELDS_ = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");
goog.object.extend = function(a, b) {
    for(var c3, d, e = 1; e < arguments.length; e++){
        d = arguments[e];
        for(c3 in d)a[c3] = d[c3];
        for(var f = 0; f < goog.object.PROTOTYPE_FIELDS_.length; f++)c3 = goog.object.PROTOTYPE_FIELDS_[f], Object.prototype.hasOwnProperty.call(d, c3) && (a[c3] = d[c3]);
    }
};
goog.object.create = function(a) {
    var b = arguments.length;
    if (1 == b && goog.isArray(arguments[0])) return goog.object.create.apply(null, arguments[0]);
    if (b % 2) throw Error("Uneven number of arguments");
    for(var c3 = {
    }, d = 0; d < b; d += 2)c3[arguments[d]] = arguments[d + 1];
    return c3;
};
goog.object.createSet = function(a) {
    var b = arguments.length;
    if (1 == b && goog.isArray(arguments[0])) return goog.object.createSet.apply(null, arguments[0]);
    for(var c3 = {
    }, d = 0; d < b; d++)c3[arguments[d]] = true;
    return c3;
};
goog.object.createImmutableView = function(a) {
    var b = a;
    Object.isFrozen && !Object.isFrozen(a) && (b = Object.create(a), Object.freeze(b));
    return b;
};
goog.object.isImmutableView = function(a) {
    return !!Object.isFrozen && Object.isFrozen(a);
};
goog.object.getAllPropertyNames = function(a, b, c3) {
    if (!a) return [];
    if (!Object.getOwnPropertyNames || !Object.getPrototypeOf) return goog.object.getKeys(a);
    for(var d = {
    }; a && (a !== Object.prototype || b) && (a !== Function.prototype || c3);){
        for(var e = Object.getOwnPropertyNames(a), f = 0; f < e.length; f++)d[e[f]] = true;
        a = Object.getPrototypeOf(a);
    }
    return goog.object.getKeys(d);
};
goog.object.getSuperClass = function(a) {
    return (a = Object.getPrototypeOf(a.prototype)) && a.constructor;
};
goog.debug = {
};
goog.debug.Error = function(a) {
    if (Error.captureStackTrace) Error.captureStackTrace(this, goog.debug.Error);
    else {
        var b = Error().stack;
        b && (this.stack = b);
    }
    a && (this.message = String(a));
    this.reportErrorToServer = true;
};
goog.inherits(goog.debug.Error, Error);
goog.debug.Error.prototype.name = "CustomError";
goog.dom = {
};
goog.dom.NodeType = {
    ELEMENT: 1,
    ATTRIBUTE: 2,
    TEXT: 3,
    CDATA_SECTION: 4,
    ENTITY_REFERENCE: 5,
    ENTITY: 6,
    PROCESSING_INSTRUCTION: 7,
    COMMENT: 8,
    DOCUMENT: 9,
    DOCUMENT_TYPE: 10,
    DOCUMENT_FRAGMENT: 11,
    NOTATION: 12
};
goog.asserts = {
};
goog.asserts.ENABLE_ASSERTS = goog.DEBUG;
goog.asserts.AssertionError = function(a, b) {
    goog.debug.Error.call(this, goog.asserts.subs_(a, b));
    this.messagePattern = a;
};
goog.inherits(goog.asserts.AssertionError, goog.debug.Error);
goog.asserts.AssertionError.prototype.name = "AssertionError";
goog.asserts.DEFAULT_ERROR_HANDLER = function(a) {
    throw a;
};
goog.asserts.errorHandler_ = goog.asserts.DEFAULT_ERROR_HANDLER;
goog.asserts.subs_ = function(a, b) {
    a = a.split("%s");
    for(var c3 = "", d = a.length - 1, e = 0; e < d; e++)c3 += a[e] + (e < b.length ? b[e] : "%s");
    return c3 + a[d];
};
goog.asserts.doAssertFailure_ = function(a, b, c3, d) {
    var e = "Assertion failed";
    if (c3) {
        e += ": " + c3;
        var f = d;
    } else a && (e += ": " + a, f = b);
    a = new goog.asserts.AssertionError("" + e, f || []);
    goog.asserts.errorHandler_(a);
};
goog.asserts.setErrorHandler = function(a) {
    goog.asserts.ENABLE_ASSERTS && (goog.asserts.errorHandler_ = a);
};
goog.asserts.assert = function(a, b, c3) {
    goog.asserts.ENABLE_ASSERTS && !a && goog.asserts.doAssertFailure_("", null, b, Array.prototype.slice.call(arguments, 2));
    return a;
};
goog.asserts.assertExists = function(a, b, c3) {
    goog.asserts.ENABLE_ASSERTS && null == a && goog.asserts.doAssertFailure_("Expected to exist: %s.", [
        a
    ], b, Array.prototype.slice.call(arguments, 2));
    return a;
};
goog.asserts.fail = function(a, b) {
    goog.asserts.ENABLE_ASSERTS && goog.asserts.errorHandler_(new goog.asserts.AssertionError("Failure" + (a ? ": " + a : ""), Array.prototype.slice.call(arguments, 1)));
};
goog.asserts.assertNumber = function(a, b, c3) {
    goog.asserts.ENABLE_ASSERTS && !goog.isNumber(a) && goog.asserts.doAssertFailure_("Expected number but got %s: %s.", [
        goog.typeOf(a),
        a
    ], b, Array.prototype.slice.call(arguments, 2));
    return a;
};
goog.asserts.assertString = function(a, b, c3) {
    goog.asserts.ENABLE_ASSERTS && !goog.isString(a) && goog.asserts.doAssertFailure_("Expected string but got %s: %s.", [
        goog.typeOf(a),
        a
    ], b, Array.prototype.slice.call(arguments, 2));
    return a;
};
goog.asserts.assertFunction = function(a, b, c3) {
    goog.asserts.ENABLE_ASSERTS && !goog.isFunction(a) && goog.asserts.doAssertFailure_("Expected function but got %s: %s.", [
        goog.typeOf(a),
        a
    ], b, Array.prototype.slice.call(arguments, 2));
    return a;
};
goog.asserts.assertObject = function(a, b, c3) {
    goog.asserts.ENABLE_ASSERTS && !goog.isObject(a) && goog.asserts.doAssertFailure_("Expected object but got %s: %s.", [
        goog.typeOf(a),
        a
    ], b, Array.prototype.slice.call(arguments, 2));
    return a;
};
goog.asserts.assertArray = function(a, b, c3) {
    goog.asserts.ENABLE_ASSERTS && !goog.isArray(a) && goog.asserts.doAssertFailure_("Expected array but got %s: %s.", [
        goog.typeOf(a),
        a
    ], b, Array.prototype.slice.call(arguments, 2));
    return a;
};
goog.asserts.assertBoolean = function(a, b, c3) {
    goog.asserts.ENABLE_ASSERTS && !goog.isBoolean(a) && goog.asserts.doAssertFailure_("Expected boolean but got %s: %s.", [
        goog.typeOf(a),
        a
    ], b, Array.prototype.slice.call(arguments, 2));
    return a;
};
goog.asserts.assertElement = function(a, b, c3) {
    !goog.asserts.ENABLE_ASSERTS || goog.isObject(a) && a.nodeType == goog.dom.NodeType.ELEMENT || goog.asserts.doAssertFailure_("Expected Element but got %s: %s.", [
        goog.typeOf(a),
        a
    ], b, Array.prototype.slice.call(arguments, 2));
    return a;
};
goog.asserts.assertInstanceof = function(a, b, c3, d) {
    !goog.asserts.ENABLE_ASSERTS || a instanceof b || goog.asserts.doAssertFailure_("Expected instanceof %s but got %s.", [
        goog.asserts.getType_(b),
        goog.asserts.getType_(a)
    ], c3, Array.prototype.slice.call(arguments, 3));
    return a;
};
goog.asserts.assertFinite = function(a, b, c3) {
    !goog.asserts.ENABLE_ASSERTS || "number" == typeof a && isFinite(a) || goog.asserts.doAssertFailure_("Expected %s to be a finite number but it is not.", [
        a
    ], b, Array.prototype.slice.call(arguments, 2));
    return a;
};
goog.asserts.assertObjectPrototypeIsIntact = function() {
    for(var a in Object.prototype)goog.asserts.fail(a + " should not be enumerable in Object.prototype.");
};
goog.asserts.getType_ = function(a) {
    return a instanceof Function ? a.displayName || a.name || "unknown type name" : a instanceof Object ? a.constructor.displayName || a.constructor.name || Object.prototype.toString.call(a) : null === a ? "null" : typeof a;
};
var jspb = {
    BinaryConstants: {
    },
    ConstBinaryMessage: function() {
    },
    BinaryMessage: function() {
    }
};
jspb.BinaryConstants.FieldType = {
    INVALID: -1,
    DOUBLE: 1,
    FLOAT: 2,
    INT64: 3,
    UINT64: 4,
    INT32: 5,
    FIXED64: 6,
    FIXED32: 7,
    BOOL: 8,
    STRING: 9,
    GROUP: 10,
    MESSAGE: 11,
    BYTES: 12,
    UINT32: 13,
    ENUM: 14,
    SFIXED32: 15,
    SFIXED64: 16,
    SINT32: 17,
    SINT64: 18,
    FHASH64: 30,
    VHASH64: 31
};
jspb.BinaryConstants.WireType = {
    INVALID: -1,
    VARINT: 0,
    FIXED64: 1,
    DELIMITED: 2,
    START_GROUP: 3,
    END_GROUP: 4,
    FIXED32: 5
};
jspb.BinaryConstants.FieldTypeToWireType = function(a) {
    var b = jspb.BinaryConstants.FieldType, c3 = jspb.BinaryConstants.WireType;
    switch(a){
        case b.INT32:
        case b.INT64:
        case b.UINT32:
        case b.UINT64:
        case b.SINT32:
        case b.SINT64:
        case b.BOOL:
        case b.ENUM:
        case b.VHASH64:
            return c3.VARINT;
        case b.DOUBLE:
        case b.FIXED64:
        case b.SFIXED64:
        case b.FHASH64:
            return c3.FIXED64;
        case b.STRING:
        case b.MESSAGE:
        case b.BYTES:
            return c3.DELIMITED;
        case b.FLOAT:
        case b.FIXED32:
        case b.SFIXED32:
            return c3.FIXED32;
        default:
            return c3.INVALID;
    }
};
jspb.BinaryConstants.INVALID_FIELD_NUMBER = -1;
jspb.BinaryConstants.FLOAT32_EPS = 0.000000000000000000000000000000000000000000001401298464324817;
jspb.BinaryConstants.FLOAT32_MIN = 0.000000000000000000000000000000000000011754943508222875;
jspb.BinaryConstants.FLOAT32_MAX = 340282346638528900000000000000000000000;
jspb.BinaryConstants.FLOAT64_EPS = 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000005;
jspb.BinaryConstants.FLOAT64_MIN = 0.000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000022250738585072014;
jspb.BinaryConstants.FLOAT64_MAX = 179769313486231570000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000;
jspb.BinaryConstants.TWO_TO_20 = 1048576;
jspb.BinaryConstants.TWO_TO_23 = 8388608;
jspb.BinaryConstants.TWO_TO_31 = 2147483648;
jspb.BinaryConstants.TWO_TO_32 = 4294967296;
jspb.BinaryConstants.TWO_TO_52 = 4503599627370496;
jspb.BinaryConstants.TWO_TO_63 = 9223372036854776000;
jspb.BinaryConstants.TWO_TO_64 = 18446744073709552000;
jspb.BinaryConstants.ZERO_HASH = "\x00\x00\x00\x00\x00\x00\x00\x00";
goog.array = {
};
goog.NATIVE_ARRAY_PROTOTYPES = goog.TRUSTED_SITE;
goog.array.ASSUME_NATIVE_FUNCTIONS = 2012 < goog.FEATURESET_YEAR;
goog.array.peek = function(a) {
    return a[a.length - 1];
};
goog.array.last = goog.array.peek;
goog.array.indexOf = goog.NATIVE_ARRAY_PROTOTYPES && (goog.array.ASSUME_NATIVE_FUNCTIONS || Array.prototype.indexOf) ? function(a, b, c3) {
    goog.asserts.assert(null != a.length);
    return Array.prototype.indexOf.call(a, b, c3);
} : function(a, b, c3) {
    c3 = null == c3 ? 0 : 0 > c3 ? Math.max(0, a.length + c3) : c3;
    if (goog.isString(a)) return goog.isString(b) && 1 == b.length ? a.indexOf(b, c3) : -1;
    for(; c3 < a.length; c3++)if (c3 in a && a[c3] === b) return c3;
    return -1;
};
goog.array.lastIndexOf = goog.NATIVE_ARRAY_PROTOTYPES && (goog.array.ASSUME_NATIVE_FUNCTIONS || Array.prototype.lastIndexOf) ? function(a, b, c3) {
    goog.asserts.assert(null != a.length);
    return Array.prototype.lastIndexOf.call(a, b, null == c3 ? a.length - 1 : c3);
} : function(a, b, c3) {
    c3 = null == c3 ? a.length - 1 : c3;
    0 > c3 && (c3 = Math.max(0, a.length + c3));
    if (goog.isString(a)) return goog.isString(b) && 1 == b.length ? a.lastIndexOf(b, c3) : -1;
    for(; 0 <= c3; c3--)if (c3 in a && a[c3] === b) return c3;
    return -1;
};
goog.array.forEach = goog.NATIVE_ARRAY_PROTOTYPES && (goog.array.ASSUME_NATIVE_FUNCTIONS || Array.prototype.forEach) ? function(a, b, c3) {
    goog.asserts.assert(null != a.length);
    Array.prototype.forEach.call(a, b, c3);
} : function(a, b, c3) {
    for(var d = a.length, e = goog.isString(a) ? a.split("") : a, f = 0; f < d; f++)f in e && b.call(c3, e[f], f, a);
};
goog.array.forEachRight = function(a, b, c3) {
    var d = a.length, e = goog.isString(a) ? a.split("") : a;
    for(--d; 0 <= d; --d)d in e && b.call(c3, e[d], d, a);
};
goog.array.filter = goog.NATIVE_ARRAY_PROTOTYPES && (goog.array.ASSUME_NATIVE_FUNCTIONS || Array.prototype.filter) ? function(a, b, c3) {
    goog.asserts.assert(null != a.length);
    return Array.prototype.filter.call(a, b, c3);
} : function(a, b, c3) {
    for(var d = a.length, e = [], f = 0, g = goog.isString(a) ? a.split("") : a, h = 0; h < d; h++)if (h in g) {
        var k = g[h];
        b.call(c3, k, h, a) && (e[f++] = k);
    }
    return e;
};
goog.array.map = goog.NATIVE_ARRAY_PROTOTYPES && (goog.array.ASSUME_NATIVE_FUNCTIONS || Array.prototype.map) ? function(a, b, c3) {
    goog.asserts.assert(null != a.length);
    return Array.prototype.map.call(a, b, c3);
} : function(a, b, c3) {
    for(var d = a.length, e = Array(d), f = goog.isString(a) ? a.split("") : a, g = 0; g < d; g++)g in f && (e[g] = b.call(c3, f[g], g, a));
    return e;
};
goog.array.reduce = goog.NATIVE_ARRAY_PROTOTYPES && (goog.array.ASSUME_NATIVE_FUNCTIONS || Array.prototype.reduce) ? function(a, b, c3, d) {
    goog.asserts.assert(null != a.length);
    d && (b = goog.bind(b, d));
    return Array.prototype.reduce.call(a, b, c3);
} : function(a, b, c3, d) {
    var e = c3;
    goog.array.forEach(a, function(c4, g) {
        e = b.call(d, e, c4, g, a);
    });
    return e;
};
goog.array.reduceRight = goog.NATIVE_ARRAY_PROTOTYPES && (goog.array.ASSUME_NATIVE_FUNCTIONS || Array.prototype.reduceRight) ? function(a, b, c3, d) {
    goog.asserts.assert(null != a.length);
    goog.asserts.assert(null != b);
    d && (b = goog.bind(b, d));
    return Array.prototype.reduceRight.call(a, b, c3);
} : function(a, b, c3, d) {
    var e = c3;
    goog.array.forEachRight(a, function(c4, g) {
        e = b.call(d, e, c4, g, a);
    });
    return e;
};
goog.array.some = goog.NATIVE_ARRAY_PROTOTYPES && (goog.array.ASSUME_NATIVE_FUNCTIONS || Array.prototype.some) ? function(a, b, c3) {
    goog.asserts.assert(null != a.length);
    return Array.prototype.some.call(a, b, c3);
} : function(a, b, c3) {
    for(var d = a.length, e = goog.isString(a) ? a.split("") : a, f = 0; f < d; f++)if (f in e && b.call(c3, e[f], f, a)) return true;
    return false;
};
goog.array.every = goog.NATIVE_ARRAY_PROTOTYPES && (goog.array.ASSUME_NATIVE_FUNCTIONS || Array.prototype.every) ? function(a, b, c3) {
    goog.asserts.assert(null != a.length);
    return Array.prototype.every.call(a, b, c3);
} : function(a, b, c3) {
    for(var d = a.length, e = goog.isString(a) ? a.split("") : a, f = 0; f < d; f++)if (f in e && !b.call(c3, e[f], f, a)) return false;
    return true;
};
goog.array.count = function(a, b, c3) {
    var d = 0;
    goog.array.forEach(a, function(a1, f, g) {
        b.call(c3, a1, f, g) && ++d;
    }, c3);
    return d;
};
goog.array.find = function(a, b, c3) {
    b = goog.array.findIndex(a, b, c3);
    return 0 > b ? null : goog.isString(a) ? a.charAt(b) : a[b];
};
goog.array.findIndex = function(a, b, c3) {
    for(var d = a.length, e = goog.isString(a) ? a.split("") : a, f = 0; f < d; f++)if (f in e && b.call(c3, e[f], f, a)) return f;
    return -1;
};
goog.array.findRight = function(a, b, c3) {
    b = goog.array.findIndexRight(a, b, c3);
    return 0 > b ? null : goog.isString(a) ? a.charAt(b) : a[b];
};
goog.array.findIndexRight = function(a, b, c3) {
    var d = a.length, e = goog.isString(a) ? a.split("") : a;
    for(--d; 0 <= d; d--)if (d in e && b.call(c3, e[d], d, a)) return d;
    return -1;
};
goog.array.contains = function(a, b) {
    return 0 <= goog.array.indexOf(a, b);
};
goog.array.isEmpty = function(a) {
    return 0 == a.length;
};
goog.array.clear = function(a) {
    if (!goog.isArray(a)) for(var b = a.length - 1; 0 <= b; b--)delete a[b];
    a.length = 0;
};
goog.array.insert = function(a, b) {
    goog.array.contains(a, b) || a.push(b);
};
goog.array.insertAt = function(a, b, c3) {
    goog.array.splice(a, c3, 0, b);
};
goog.array.insertArrayAt = function(a, b, c3) {
    goog.partial(goog.array.splice, a, c3, 0).apply(null, b);
};
goog.array.insertBefore = function(a, b, c3) {
    var d;
    2 == arguments.length || 0 > (d = goog.array.indexOf(a, c3)) ? a.push(b) : goog.array.insertAt(a, b, d);
};
goog.array.remove = function(a, b) {
    b = goog.array.indexOf(a, b);
    var c3;
    (c3 = 0 <= b) && goog.array.removeAt(a, b);
    return c3;
};
goog.array.removeLast = function(a, b) {
    b = goog.array.lastIndexOf(a, b);
    return 0 <= b ? (goog.array.removeAt(a, b), true) : false;
};
goog.array.removeAt = function(a, b) {
    goog.asserts.assert(null != a.length);
    return 1 == Array.prototype.splice.call(a, b, 1).length;
};
goog.array.removeIf = function(a, b, c3) {
    b = goog.array.findIndex(a, b, c3);
    return 0 <= b ? (goog.array.removeAt(a, b), true) : false;
};
goog.array.removeAllIf = function(a, b, c3) {
    var d = 0;
    goog.array.forEachRight(a, function(e, f) {
        b.call(c3, e, f, a) && goog.array.removeAt(a, f) && d++;
    });
    return d;
};
goog.array.concat = function(a) {
    return Array.prototype.concat.apply([], arguments);
};
goog.array.join = function(a) {
    return Array.prototype.concat.apply([], arguments);
};
goog.array.toArray = function(a) {
    var b = a.length;
    if (0 < b) {
        for(var c3 = Array(b), d = 0; d < b; d++)c3[d] = a[d];
        return c3;
    }
    return [];
};
goog.array.clone = goog.array.toArray;
goog.array.extend = function(a, b) {
    for(var c4 = 1; c4 < arguments.length; c4++){
        var d = arguments[c4];
        if (goog.isArrayLike(d)) {
            var e = a.length || 0, f = d.length || 0;
            a.length = e + f;
            for(var g = 0; g < f; g++)a[e + g] = d[g];
        } else a.push(d);
    }
};
goog.array.splice = function(a, b, c4, d) {
    goog.asserts.assert(null != a.length);
    return Array.prototype.splice.apply(a, goog.array.slice(arguments, 1));
};
goog.array.slice = function(a, b, c4) {
    goog.asserts.assert(null != a.length);
    return 2 >= arguments.length ? Array.prototype.slice.call(a, b) : Array.prototype.slice.call(a, b, c4);
};
goog.array.removeDuplicates = function(a, b, c4) {
    b = b || a;
    var d = function(a1) {
        return goog.isObject(a1) ? "o" + goog.getUid(a1) : (typeof a1).charAt(0) + a1;
    };
    c4 = c4 || d;
    d = {
    };
    for(var e = 0, f = 0; f < a.length;){
        var g = a[f++], h = c4(g);
        Object.prototype.hasOwnProperty.call(d, h) || (d[h] = true, b[e++] = g);
    }
    b.length = e;
};
goog.array.binarySearch = function(a, b, c4) {
    return goog.array.binarySearch_(a, c4 || goog.array.defaultCompare, false, b);
};
goog.array.binarySelect = function(a, b, c4) {
    return goog.array.binarySearch_(a, b, true, void 0, c4);
};
goog.array.binarySearch_ = function(a, b, c4, d, e) {
    for(var f = 0, g = a.length, h; f < g;){
        var k = f + g >> 1;
        var l = c4 ? b.call(e, a[k], k, a) : b(d, a[k]);
        0 < l ? f = k + 1 : (g = k, h = !l);
    }
    return h ? f : ~f;
};
goog.array.sort = function(a, b) {
    a.sort(b || goog.array.defaultCompare);
};
goog.array.stableSort = function(a, b) {
    for(var c4 = Array(a.length), d = 0; d < a.length; d++)c4[d] = {
        index: d,
        value: a[d]
    };
    var e = b || goog.array.defaultCompare;
    goog.array.sort(c4, function(a1, b1) {
        return e(a1.value, b1.value) || a1.index - b1.index;
    });
    for(d = 0; d < a.length; d++)a[d] = c4[d].value;
};
goog.array.sortByKey = function(a, b, c4) {
    var d = c4 || goog.array.defaultCompare;
    goog.array.sort(a, function(a1, c5) {
        return d(b(a1), b(c5));
    });
};
goog.array.sortObjectsByKey = function(a, b, c4) {
    goog.array.sortByKey(a, function(a1) {
        return a1[b];
    }, c4);
};
goog.array.isSorted = function(a, b, c4) {
    b = b || goog.array.defaultCompare;
    for(var d = 1; d < a.length; d++){
        var e = b(a[d - 1], a[d]);
        if (0 < e || 0 == e && c4) return false;
    }
    return true;
};
goog.array.equals = function(a, b, c4) {
    if (!goog.isArrayLike(a) || !goog.isArrayLike(b) || a.length != b.length) return false;
    var d = a.length;
    c4 = c4 || goog.array.defaultCompareEquality;
    for(var e = 0; e < d; e++)if (!c4(a[e], b[e])) return false;
    return true;
};
goog.array.compare3 = function(a, b, c4) {
    c4 = c4 || goog.array.defaultCompare;
    for(var d = Math.min(a.length, b.length), e = 0; e < d; e++){
        var f = c4(a[e], b[e]);
        if (0 != f) return f;
    }
    return goog.array.defaultCompare(a.length, b.length);
};
goog.array.defaultCompare = function(a, b) {
    return a > b ? 1 : a < b ? -1 : 0;
};
goog.array.inverseDefaultCompare = function(a, b) {
    return -goog.array.defaultCompare(a, b);
};
goog.array.defaultCompareEquality = function(a, b) {
    return a === b;
};
goog.array.binaryInsert = function(a, b, c4) {
    c4 = goog.array.binarySearch(a, b, c4);
    return 0 > c4 ? (goog.array.insertAt(a, b, -(c4 + 1)), true) : false;
};
goog.array.binaryRemove = function(a, b, c4) {
    b = goog.array.binarySearch(a, b, c4);
    return 0 <= b ? goog.array.removeAt(a, b) : false;
};
goog.array.bucket = function(a, b, c4) {
    for(var d = {
    }, e = 0; e < a.length; e++){
        var f = a[e], g = b.call(c4, f, e, a);
        goog.isDef(g) && (d[g] || (d[g] = [])).push(f);
    }
    return d;
};
goog.array.toObject = function(a, b, c4) {
    var d = {
    };
    goog.array.forEach(a, function(e, f) {
        d[b.call(c4, e, f, a)] = e;
    });
    return d;
};
goog.array.range = function(a, b, c4) {
    var d = [], e = 0, f = a;
    c4 = c4 || 1;
    (void 0) !== b && (e = a, f = b);
    if (0 > c4 * (f - e)) return [];
    if (0 < c4) for(a = e; a < f; a += c4)d.push(a);
    else for(a = e; a > f; a += c4)d.push(a);
    return d;
};
goog.array.repeat = function(a, b) {
    for(var c4 = [], d = 0; d < b; d++)c4[d] = a;
    return c4;
};
goog.array.flatten = function(a) {
    for(var b = [], c4 = 0; c4 < arguments.length; c4++){
        var d = arguments[c4];
        if (goog.isArray(d)) for(var e = 0; e < d.length; e += 8192){
            var f = goog.array.slice(d, e, e + 8192);
            f = goog.array.flatten.apply(null, f);
            for(var g = 0; g < f.length; g++)b.push(f[g]);
        }
        else b.push(d);
    }
    return b;
};
goog.array.rotate = function(a, b) {
    goog.asserts.assert(null != a.length);
    a.length && (b %= a.length, 0 < b ? Array.prototype.unshift.apply(a, a.splice(-b, b)) : 0 > b && Array.prototype.push.apply(a, a.splice(0, -b)));
    return a;
};
goog.array.moveItem = function(a, b, c4) {
    goog.asserts.assert(0 <= b && b < a.length);
    goog.asserts.assert(0 <= c4 && c4 < a.length);
    b = Array.prototype.splice.call(a, b, 1);
    Array.prototype.splice.call(a, c4, 0, b[0]);
};
goog.array.zip = function(a) {
    if (!arguments.length) return [];
    for(var b = [], c4 = arguments[0].length, d = 1; d < arguments.length; d++)arguments[d].length < c4 && (c4 = arguments[d].length);
    for(d = 0; d < c4; d++){
        for(var e = [], f = 0; f < arguments.length; f++)e.push(arguments[f][d]);
        b.push(e);
    }
    return b;
};
goog.array.shuffle = function(a, b) {
    b = b || Math.random;
    for(var c4 = a.length - 1; 0 < c4; c4--){
        var d = Math.floor(b() * (c4 + 1)), e = a[c4];
        a[c4] = a[d];
        a[d] = e;
    }
};
goog.array.copyByIndex = function(a, b) {
    var c4 = [];
    goog.array.forEach(b, function(b1) {
        c4.push(a[b1]);
    });
    return c4;
};
goog.array.concatMap = function(a, b, c4) {
    return goog.array.concat.apply([], goog.array.map(a, b, c4));
};
goog.crypt = {
};
goog.crypt.stringToByteArray = function(a) {
    for(var b = [], c4 = 0, d = 0; d < a.length; d++){
        var e = a.charCodeAt(d);
        255 < e && (b[c4++] = e & 255, e >>= 8);
        b[c4++] = e;
    }
    return b;
};
goog.crypt.byteArrayToString = function(a) {
    if (8192 >= a.length) return String.fromCharCode.apply(null, a);
    for(var b = "", c4 = 0; c4 < a.length; c4 += 8192){
        var d = goog.array.slice(a, c4, c4 + 8192);
        b += String.fromCharCode.apply(null, d);
    }
    return b;
};
goog.crypt.byteArrayToHex = function(a, b) {
    return goog.array.map(a, function(a1) {
        a1 = a1.toString(16);
        return 1 < a1.length ? a1 : "0" + a1;
    }).join(b || "");
};
goog.crypt.hexToByteArray = function(a) {
    goog.asserts.assert(0 == a.length % 2, "Key string length must be multiple of 2");
    for(var b = [], c4 = 0; c4 < a.length; c4 += 2)b.push(parseInt(a.substring(c4, c4 + 2), 16));
    return b;
};
goog.crypt.stringToUtf8ByteArray = function(a) {
    for(var b = [], c4 = 0, d = 0; d < a.length; d++){
        var e = a.charCodeAt(d);
        128 > e ? b[c4++] = e : (2048 > e ? b[c4++] = e >> 6 | 192 : (55296 == (e & 64512) && d + 1 < a.length && 56320 == (a.charCodeAt(d + 1) & 64512) ? (e = 65536 + ((e & 1023) << 10) + (a.charCodeAt(++d) & 1023), b[c4++] = e >> 18 | 240, b[c4++] = e >> 12 & 63 | 128) : b[c4++] = e >> 12 | 224, b[c4++] = e >> 6 & 63 | 128), b[c4++] = e & 63 | 128);
    }
    return b;
};
goog.crypt.utf8ByteArrayToString = function(a) {
    for(var b = [], c4 = 0, d = 0; c4 < a.length;){
        var e = a[c4++];
        if (128 > e) b[d++] = String.fromCharCode(e);
        else if (191 < e && 224 > e) {
            var f = a[c4++];
            b[d++] = String.fromCharCode((e & 31) << 6 | f & 63);
        } else if (239 < e && 365 > e) {
            f = a[c4++];
            var g = a[c4++], h = a[c4++];
            e = ((e & 7) << 18 | (f & 63) << 12 | (g & 63) << 6 | h & 63) - 65536;
            b[d++] = String.fromCharCode(55296 + (e >> 10));
            b[d++] = String.fromCharCode(56320 + (e & 1023));
        } else f = a[c4++], g = a[c4++], b[d++] = String.fromCharCode((e & 15) << 12 | (f & 63) << 6 | g & 63);
    }
    return b.join("");
};
goog.crypt.xorByteArray = function(a, b) {
    goog.asserts.assert(a.length == b.length, "XOR array lengths must match");
    for(var c4 = [], d = 0; d < a.length; d++)c4.push(a[d] ^ b[d]);
    return c4;
};
goog.dom.asserts = {
};
goog.dom.asserts.assertIsLocation = function(a) {
    if (goog.asserts.ENABLE_ASSERTS) {
        var b = goog.dom.asserts.getWindow_(a);
        b && (!a || !(a instanceof b.Location) && a instanceof b.Element) && goog.asserts.fail("Argument is not a Location (or a non-Element mock); got: %s", goog.dom.asserts.debugStringForType_(a));
    }
    return a;
};
goog.dom.asserts.assertIsElementType_ = function(a, b) {
    if (goog.asserts.ENABLE_ASSERTS) {
        var c4 = goog.dom.asserts.getWindow_(a);
        c4 && "undefined" != typeof c4[b] && (a && (a instanceof c4[b] || !(a instanceof c4.Location || a instanceof c4.Element)) || goog.asserts.fail("Argument is not a %s (or a non-Element, non-Location mock); got: %s", b, goog.dom.asserts.debugStringForType_(a)));
    }
    return a;
};
goog.dom.asserts.assertIsHTMLAnchorElement = function(a) {
    return goog.dom.asserts.assertIsElementType_(a, "HTMLAnchorElement");
};
goog.dom.asserts.assertIsHTMLButtonElement = function(a) {
    return goog.dom.asserts.assertIsElementType_(a, "HTMLButtonElement");
};
goog.dom.asserts.assertIsHTMLLinkElement = function(a) {
    return goog.dom.asserts.assertIsElementType_(a, "HTMLLinkElement");
};
goog.dom.asserts.assertIsHTMLImageElement = function(a) {
    return goog.dom.asserts.assertIsElementType_(a, "HTMLImageElement");
};
goog.dom.asserts.assertIsHTMLAudioElement = function(a) {
    return goog.dom.asserts.assertIsElementType_(a, "HTMLAudioElement");
};
goog.dom.asserts.assertIsHTMLVideoElement = function(a) {
    return goog.dom.asserts.assertIsElementType_(a, "HTMLVideoElement");
};
goog.dom.asserts.assertIsHTMLInputElement = function(a) {
    return goog.dom.asserts.assertIsElementType_(a, "HTMLInputElement");
};
goog.dom.asserts.assertIsHTMLTextAreaElement = function(a) {
    return goog.dom.asserts.assertIsElementType_(a, "HTMLTextAreaElement");
};
goog.dom.asserts.assertIsHTMLCanvasElement = function(a) {
    return goog.dom.asserts.assertIsElementType_(a, "HTMLCanvasElement");
};
goog.dom.asserts.assertIsHTMLEmbedElement = function(a) {
    return goog.dom.asserts.assertIsElementType_(a, "HTMLEmbedElement");
};
goog.dom.asserts.assertIsHTMLFormElement = function(a) {
    return goog.dom.asserts.assertIsElementType_(a, "HTMLFormElement");
};
goog.dom.asserts.assertIsHTMLFrameElement = function(a) {
    return goog.dom.asserts.assertIsElementType_(a, "HTMLFrameElement");
};
goog.dom.asserts.assertIsHTMLIFrameElement = function(a) {
    return goog.dom.asserts.assertIsElementType_(a, "HTMLIFrameElement");
};
goog.dom.asserts.assertIsHTMLObjectElement = function(a) {
    return goog.dom.asserts.assertIsElementType_(a, "HTMLObjectElement");
};
goog.dom.asserts.assertIsHTMLScriptElement = function(a) {
    return goog.dom.asserts.assertIsElementType_(a, "HTMLScriptElement");
};
goog.dom.asserts.debugStringForType_ = function(a) {
    if (goog.isObject(a)) try {
        return a.constructor.displayName || a.constructor.name || Object.prototype.toString.call(a);
    } catch (b) {
        return "<object could not be stringified>";
    }
    else return (void 0) === a ? "undefined" : null === a ? "null" : typeof a;
};
goog.dom.asserts.getWindow_ = function(a) {
    try {
        var b = a && a.ownerDocument, c5 = b && (b.defaultView || b.parentWindow);
        c5 = c5 || goog.global;
        if (c5.Element && c5.Location) return c5;
    } catch (d) {
    }
    return null;
};
goog.functions = {
};
goog.functions.constant = function(a) {
    return function() {
        return a;
    };
};
goog.functions.FALSE = function() {
    return false;
};
goog.functions.TRUE = function() {
    return true;
};
goog.functions.NULL = function() {
    return null;
};
goog.functions.identity = function(a, b) {
    return a;
};
goog.functions.error = function(a) {
    return function() {
        throw Error(a);
    };
};
goog.functions.fail = function(a) {
    return function() {
        throw a;
    };
};
goog.functions.lock = function(a, b) {
    b = b || 0;
    return function() {
        return a.apply(this, Array.prototype.slice.call(arguments, 0, b));
    };
};
goog.functions.nth = function(a) {
    return function() {
        return arguments[a];
    };
};
goog.functions.partialRight = function(a, b) {
    var c5 = Array.prototype.slice.call(arguments, 1);
    return function() {
        var b1 = Array.prototype.slice.call(arguments);
        b1.push.apply(b1, c5);
        return a.apply(this, b1);
    };
};
goog.functions.withReturnValue = function(a, b) {
    return goog.functions.sequence(a, goog.functions.constant(b));
};
goog.functions.equalTo = function(a, b) {
    return function(c5) {
        return b ? a == c5 : a === c5;
    };
};
goog.functions.compose = function(a, b) {
    var c5 = arguments, d = c5.length;
    return function() {
        var a1;
        d && (a1 = c5[d - 1].apply(this, arguments));
        for(var b1 = d - 2; 0 <= b1; b1--)a1 = c5[b1].call(this, a1);
        return a1;
    };
};
goog.functions.sequence = function(a) {
    var b = arguments, c5 = b.length;
    return function() {
        for(var a1, e = 0; e < c5; e++)a1 = b[e].apply(this, arguments);
        return a1;
    };
};
goog.functions.and = function(a) {
    var b = arguments, c5 = b.length;
    return function() {
        for(var a1 = 0; a1 < c5; a1++)if (!b[a1].apply(this, arguments)) return false;
        return true;
    };
};
goog.functions.or = function(a) {
    var b = arguments, c5 = b.length;
    return function() {
        for(var a1 = 0; a1 < c5; a1++)if (b[a1].apply(this, arguments)) return true;
        return false;
    };
};
goog.functions.not = function(a) {
    return function() {
        return !a.apply(this, arguments);
    };
};
goog.functions.create = function(a, b) {
    var c5 = function() {
    };
    c5.prototype = a.prototype;
    c5 = new c5;
    a.apply(c5, Array.prototype.slice.call(arguments, 1));
    return c5;
};
goog.functions.CACHE_RETURN_VALUE = true;
goog.functions.cacheReturnValue = function(a) {
    var b = false, c5;
    return function() {
        if (!goog.functions.CACHE_RETURN_VALUE) return a();
        b || (c5 = a(), b = true);
        return c5;
    };
};
goog.functions.once = function(a) {
    var b = a;
    return function() {
        if (b) {
            var a1 = b;
            b = null;
            a1();
        }
    };
};
goog.functions.debounce = function(a2, b, c5) {
    var d = 0;
    return function(e) {
        goog.global.clearTimeout(d);
        var f = arguments;
        d = goog.global.setTimeout(function() {
            a2.apply(c5, f);
        }, b);
    };
};
goog.functions.throttle = function(a2, b, c5) {
    var d = 0, e = false, f = [], g = function() {
        d = 0;
        e && (e = false, h());
    }, h = function() {
        d = goog.global.setTimeout(g, b);
        a2.apply(c5, f);
    };
    return function(a3) {
        f = arguments;
        d ? e = true : h();
    };
};
goog.functions.rateLimit = function(a2, b, c5) {
    var d = 0, e = function() {
        d = 0;
    };
    return function(f) {
        d || (d = goog.global.setTimeout(e, b), a2.apply(c5, arguments));
    };
};
goog.dom.HtmlElement = function() {
};
goog.dom.TagName = function(a2) {
    this.tagName_ = a2;
};
goog.dom.TagName.prototype.toString = function() {
    return this.tagName_;
};
goog.dom.TagName.A = new goog.dom.TagName("A");
goog.dom.TagName.ABBR = new goog.dom.TagName("ABBR");
goog.dom.TagName.ACRONYM = new goog.dom.TagName("ACRONYM");
goog.dom.TagName.ADDRESS = new goog.dom.TagName("ADDRESS");
goog.dom.TagName.APPLET = new goog.dom.TagName("APPLET");
goog.dom.TagName.AREA = new goog.dom.TagName("AREA");
goog.dom.TagName.ARTICLE = new goog.dom.TagName("ARTICLE");
goog.dom.TagName.ASIDE = new goog.dom.TagName("ASIDE");
goog.dom.TagName.AUDIO = new goog.dom.TagName("AUDIO");
goog.dom.TagName.B = new goog.dom.TagName("B");
goog.dom.TagName.BASE = new goog.dom.TagName("BASE");
goog.dom.TagName.BASEFONT = new goog.dom.TagName("BASEFONT");
goog.dom.TagName.BDI = new goog.dom.TagName("BDI");
goog.dom.TagName.BDO = new goog.dom.TagName("BDO");
goog.dom.TagName.BIG = new goog.dom.TagName("BIG");
goog.dom.TagName.BLOCKQUOTE = new goog.dom.TagName("BLOCKQUOTE");
goog.dom.TagName.BODY = new goog.dom.TagName("BODY");
goog.dom.TagName.BR = new goog.dom.TagName("BR");
goog.dom.TagName.BUTTON = new goog.dom.TagName("BUTTON");
goog.dom.TagName.CANVAS = new goog.dom.TagName("CANVAS");
goog.dom.TagName.CAPTION = new goog.dom.TagName("CAPTION");
goog.dom.TagName.CENTER = new goog.dom.TagName("CENTER");
goog.dom.TagName.CITE = new goog.dom.TagName("CITE");
goog.dom.TagName.CODE = new goog.dom.TagName("CODE");
goog.dom.TagName.COL = new goog.dom.TagName("COL");
goog.dom.TagName.COLGROUP = new goog.dom.TagName("COLGROUP");
goog.dom.TagName.COMMAND = new goog.dom.TagName("COMMAND");
goog.dom.TagName.DATA = new goog.dom.TagName("DATA");
goog.dom.TagName.DATALIST = new goog.dom.TagName("DATALIST");
goog.dom.TagName.DD = new goog.dom.TagName("DD");
goog.dom.TagName.DEL = new goog.dom.TagName("DEL");
goog.dom.TagName.DETAILS = new goog.dom.TagName("DETAILS");
goog.dom.TagName.DFN = new goog.dom.TagName("DFN");
goog.dom.TagName.DIALOG = new goog.dom.TagName("DIALOG");
goog.dom.TagName.DIR = new goog.dom.TagName("DIR");
goog.dom.TagName.DIV = new goog.dom.TagName("DIV");
goog.dom.TagName.DL = new goog.dom.TagName("DL");
goog.dom.TagName.DT = new goog.dom.TagName("DT");
goog.dom.TagName.EM = new goog.dom.TagName("EM");
goog.dom.TagName.EMBED = new goog.dom.TagName("EMBED");
goog.dom.TagName.FIELDSET = new goog.dom.TagName("FIELDSET");
goog.dom.TagName.FIGCAPTION = new goog.dom.TagName("FIGCAPTION");
goog.dom.TagName.FIGURE = new goog.dom.TagName("FIGURE");
goog.dom.TagName.FONT = new goog.dom.TagName("FONT");
goog.dom.TagName.FOOTER = new goog.dom.TagName("FOOTER");
goog.dom.TagName.FORM = new goog.dom.TagName("FORM");
goog.dom.TagName.FRAME = new goog.dom.TagName("FRAME");
goog.dom.TagName.FRAMESET = new goog.dom.TagName("FRAMESET");
goog.dom.TagName.H1 = new goog.dom.TagName("H1");
goog.dom.TagName.H2 = new goog.dom.TagName("H2");
goog.dom.TagName.H3 = new goog.dom.TagName("H3");
goog.dom.TagName.H4 = new goog.dom.TagName("H4");
goog.dom.TagName.H5 = new goog.dom.TagName("H5");
goog.dom.TagName.H6 = new goog.dom.TagName("H6");
goog.dom.TagName.HEAD = new goog.dom.TagName("HEAD");
goog.dom.TagName.HEADER = new goog.dom.TagName("HEADER");
goog.dom.TagName.HGROUP = new goog.dom.TagName("HGROUP");
goog.dom.TagName.HR = new goog.dom.TagName("HR");
goog.dom.TagName.HTML = new goog.dom.TagName("HTML");
goog.dom.TagName.I = new goog.dom.TagName("I");
goog.dom.TagName.IFRAME = new goog.dom.TagName("IFRAME");
goog.dom.TagName.IMG = new goog.dom.TagName("IMG");
goog.dom.TagName.INPUT = new goog.dom.TagName("INPUT");
goog.dom.TagName.INS = new goog.dom.TagName("INS");
goog.dom.TagName.ISINDEX = new goog.dom.TagName("ISINDEX");
goog.dom.TagName.KBD = new goog.dom.TagName("KBD");
goog.dom.TagName.KEYGEN = new goog.dom.TagName("KEYGEN");
goog.dom.TagName.LABEL = new goog.dom.TagName("LABEL");
goog.dom.TagName.LEGEND = new goog.dom.TagName("LEGEND");
goog.dom.TagName.LI = new goog.dom.TagName("LI");
goog.dom.TagName.LINK = new goog.dom.TagName("LINK");
goog.dom.TagName.MAIN = new goog.dom.TagName("MAIN");
goog.dom.TagName.MAP = new goog.dom.TagName("MAP");
goog.dom.TagName.MARK = new goog.dom.TagName("MARK");
goog.dom.TagName.MATH = new goog.dom.TagName("MATH");
goog.dom.TagName.MENU = new goog.dom.TagName("MENU");
goog.dom.TagName.MENUITEM = new goog.dom.TagName("MENUITEM");
goog.dom.TagName.META = new goog.dom.TagName("META");
goog.dom.TagName.METER = new goog.dom.TagName("METER");
goog.dom.TagName.NAV = new goog.dom.TagName("NAV");
goog.dom.TagName.NOFRAMES = new goog.dom.TagName("NOFRAMES");
goog.dom.TagName.NOSCRIPT = new goog.dom.TagName("NOSCRIPT");
goog.dom.TagName.OBJECT = new goog.dom.TagName("OBJECT");
goog.dom.TagName.OL = new goog.dom.TagName("OL");
goog.dom.TagName.OPTGROUP = new goog.dom.TagName("OPTGROUP");
goog.dom.TagName.OPTION = new goog.dom.TagName("OPTION");
goog.dom.TagName.OUTPUT = new goog.dom.TagName("OUTPUT");
goog.dom.TagName.P = new goog.dom.TagName("P");
goog.dom.TagName.PARAM = new goog.dom.TagName("PARAM");
goog.dom.TagName.PICTURE = new goog.dom.TagName("PICTURE");
goog.dom.TagName.PRE = new goog.dom.TagName("PRE");
goog.dom.TagName.PROGRESS = new goog.dom.TagName("PROGRESS");
goog.dom.TagName.Q = new goog.dom.TagName("Q");
goog.dom.TagName.RP = new goog.dom.TagName("RP");
goog.dom.TagName.RT = new goog.dom.TagName("RT");
goog.dom.TagName.RTC = new goog.dom.TagName("RTC");
goog.dom.TagName.RUBY = new goog.dom.TagName("RUBY");
goog.dom.TagName.S = new goog.dom.TagName("S");
goog.dom.TagName.SAMP = new goog.dom.TagName("SAMP");
goog.dom.TagName.SCRIPT = new goog.dom.TagName("SCRIPT");
goog.dom.TagName.SECTION = new goog.dom.TagName("SECTION");
goog.dom.TagName.SELECT = new goog.dom.TagName("SELECT");
goog.dom.TagName.SMALL = new goog.dom.TagName("SMALL");
goog.dom.TagName.SOURCE = new goog.dom.TagName("SOURCE");
goog.dom.TagName.SPAN = new goog.dom.TagName("SPAN");
goog.dom.TagName.STRIKE = new goog.dom.TagName("STRIKE");
goog.dom.TagName.STRONG = new goog.dom.TagName("STRONG");
goog.dom.TagName.STYLE = new goog.dom.TagName("STYLE");
goog.dom.TagName.SUB = new goog.dom.TagName("SUB");
goog.dom.TagName.SUMMARY = new goog.dom.TagName("SUMMARY");
goog.dom.TagName.SUP = new goog.dom.TagName("SUP");
goog.dom.TagName.SVG = new goog.dom.TagName("SVG");
goog.dom.TagName.TABLE = new goog.dom.TagName("TABLE");
goog.dom.TagName.TBODY = new goog.dom.TagName("TBODY");
goog.dom.TagName.TD = new goog.dom.TagName("TD");
goog.dom.TagName.TEMPLATE = new goog.dom.TagName("TEMPLATE");
goog.dom.TagName.TEXTAREA = new goog.dom.TagName("TEXTAREA");
goog.dom.TagName.TFOOT = new goog.dom.TagName("TFOOT");
goog.dom.TagName.TH = new goog.dom.TagName("TH");
goog.dom.TagName.THEAD = new goog.dom.TagName("THEAD");
goog.dom.TagName.TIME = new goog.dom.TagName("TIME");
goog.dom.TagName.TITLE = new goog.dom.TagName("TITLE");
goog.dom.TagName.TR = new goog.dom.TagName("TR");
goog.dom.TagName.TRACK = new goog.dom.TagName("TRACK");
goog.dom.TagName.TT = new goog.dom.TagName("TT");
goog.dom.TagName.U = new goog.dom.TagName("U");
goog.dom.TagName.UL = new goog.dom.TagName("UL");
goog.dom.TagName.VAR = new goog.dom.TagName("VAR");
goog.dom.TagName.VIDEO = new goog.dom.TagName("VIDEO");
goog.dom.TagName.WBR = new goog.dom.TagName("WBR");
goog.dom.tags = {
};
goog.dom.tags.VOID_TAGS_ = {
    area: true,
    base: true,
    br: true,
    col: true,
    command: true,
    embed: true,
    hr: true,
    img: true,
    input: true,
    keygen: true,
    link: true,
    meta: true,
    param: true,
    source: true,
    track: true,
    wbr: true
};
goog.dom.tags.isVoidTag = function(a2) {
    return true === goog.dom.tags.VOID_TAGS_[a2];
};
goog.html = {
};
goog.html.trustedtypes = {
};
goog.html.trustedtypes.PRIVATE_DO_NOT_ACCESS_OR_ELSE_POLICY = goog.TRUSTED_TYPES_POLICY_NAME ? goog.createTrustedTypesPolicy(goog.TRUSTED_TYPES_POLICY_NAME + "#html") : null;
goog.string = {
};
goog.string.TypedString = function() {
};
goog.string.Const = function(a2, b) {
    this.stringConstValueWithSecurityContract__googStringSecurityPrivate_ = a2 === goog.string.Const.GOOG_STRING_CONSTRUCTOR_TOKEN_PRIVATE_ && b || "";
    this.STRING_CONST_TYPE_MARKER__GOOG_STRING_SECURITY_PRIVATE_ = goog.string.Const.TYPE_MARKER_;
};
goog.string.Const.prototype.implementsGoogStringTypedString = true;
goog.string.Const.prototype.getTypedStringValue = function() {
    return this.stringConstValueWithSecurityContract__googStringSecurityPrivate_;
};
goog.string.Const.prototype.toString = function() {
    return "Const{" + this.stringConstValueWithSecurityContract__googStringSecurityPrivate_ + "}";
};
goog.string.Const.unwrap = function(a2) {
    if (a2 instanceof goog.string.Const && a2.constructor === goog.string.Const && a2.STRING_CONST_TYPE_MARKER__GOOG_STRING_SECURITY_PRIVATE_ === goog.string.Const.TYPE_MARKER_) return a2.stringConstValueWithSecurityContract__googStringSecurityPrivate_;
    goog.asserts.fail("expected object of type Const, got '" + a2 + "'");
    return "type_error:Const";
};
goog.string.Const.from = function(a2) {
    return new goog.string.Const(goog.string.Const.GOOG_STRING_CONSTRUCTOR_TOKEN_PRIVATE_, a2);
};
goog.string.Const.TYPE_MARKER_ = {
};
goog.string.Const.GOOG_STRING_CONSTRUCTOR_TOKEN_PRIVATE_ = {
};
goog.string.Const.EMPTY = goog.string.Const.from("");
goog.html.SafeScript = function() {
    this.privateDoNotAccessOrElseSafeScriptWrappedValue_ = "";
    this.SAFE_SCRIPT_TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ = goog.html.SafeScript.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_;
};
goog.html.SafeScript.prototype.implementsGoogStringTypedString = true;
goog.html.SafeScript.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ = {
};
goog.html.SafeScript.fromConstant = function(a2) {
    a2 = goog.string.Const.unwrap(a2);
    return 0 === a2.length ? goog.html.SafeScript.EMPTY : goog.html.SafeScript.createSafeScriptSecurityPrivateDoNotAccessOrElse(a2);
};
goog.html.SafeScript.fromConstantAndArgs = function(a2, b) {
    for(var c5 = [], d = 1; d < arguments.length; d++)c5.push(goog.html.SafeScript.stringify_(arguments[d]));
    return goog.html.SafeScript.createSafeScriptSecurityPrivateDoNotAccessOrElse("(" + goog.string.Const.unwrap(a2) + ")(" + c5.join(", ") + ");");
};
goog.html.SafeScript.fromJson = function(a2) {
    return goog.html.SafeScript.createSafeScriptSecurityPrivateDoNotAccessOrElse(goog.html.SafeScript.stringify_(a2));
};
goog.html.SafeScript.prototype.getTypedStringValue = function() {
    return this.privateDoNotAccessOrElseSafeScriptWrappedValue_.toString();
};
goog.DEBUG && (goog.html.SafeScript.prototype.toString = function() {
    return "SafeScript{" + this.privateDoNotAccessOrElseSafeScriptWrappedValue_ + "}";
});
goog.html.SafeScript.unwrap = function(a2) {
    return goog.html.SafeScript.unwrapTrustedScript(a2).toString();
};
goog.html.SafeScript.unwrapTrustedScript = function(a2) {
    if (a2 instanceof goog.html.SafeScript && a2.constructor === goog.html.SafeScript && a2.SAFE_SCRIPT_TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ === goog.html.SafeScript.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_) return a2.privateDoNotAccessOrElseSafeScriptWrappedValue_;
    goog.asserts.fail("expected object of type SafeScript, got '" + a2 + "' of type " + goog.typeOf(a2));
    return "type_error:SafeScript";
};
goog.html.SafeScript.stringify_ = function(a2) {
    return JSON.stringify(a2).replace(/</g, "\\x3c");
};
goog.html.SafeScript.createSafeScriptSecurityPrivateDoNotAccessOrElse = function(a2) {
    return (new goog.html.SafeScript).initSecurityPrivateDoNotAccessOrElse_(a2);
};
goog.html.SafeScript.prototype.initSecurityPrivateDoNotAccessOrElse_ = function(a2) {
    this.privateDoNotAccessOrElseSafeScriptWrappedValue_ = goog.html.trustedtypes.PRIVATE_DO_NOT_ACCESS_OR_ELSE_POLICY ? goog.html.trustedtypes.PRIVATE_DO_NOT_ACCESS_OR_ELSE_POLICY.createScript(a2) : a2;
    return this;
};
goog.html.SafeScript.EMPTY = goog.html.SafeScript.createSafeScriptSecurityPrivateDoNotAccessOrElse("");
goog.fs = {
};
goog.fs.url = {
};
goog.fs.url.createObjectUrl = function(a2) {
    return goog.fs.url.getUrlObject_().createObjectURL(a2);
};
goog.fs.url.revokeObjectUrl = function(a2) {
    goog.fs.url.getUrlObject_().revokeObjectURL(a2);
};
goog.fs.url.getUrlObject_ = function() {
    var a2 = goog.fs.url.findUrlObject_();
    if (null != a2) return a2;
    throw Error("This browser doesn't seem to support blob URLs");
};
goog.fs.url.findUrlObject_ = function() {
    return goog.isDef(goog.global.URL) && goog.isDef(goog.global.URL.createObjectURL) ? goog.global.URL : goog.isDef(goog.global.webkitURL) && goog.isDef(goog.global.webkitURL.createObjectURL) ? goog.global.webkitURL : goog.isDef(goog.global.createObjectURL) ? goog.global : null;
};
goog.fs.url.browserSupportsObjectUrls = function() {
    return null != goog.fs.url.findUrlObject_();
};
goog.i18n = {
};
goog.i18n.bidi = {
};
goog.i18n.bidi.FORCE_RTL = false;
goog.i18n.bidi.IS_RTL = goog.i18n.bidi.FORCE_RTL || ("ar" == goog.LOCALE.substring(0, 2).toLowerCase() || "fa" == goog.LOCALE.substring(0, 2).toLowerCase() || "he" == goog.LOCALE.substring(0, 2).toLowerCase() || "iw" == goog.LOCALE.substring(0, 2).toLowerCase() || "ps" == goog.LOCALE.substring(0, 2).toLowerCase() || "sd" == goog.LOCALE.substring(0, 2).toLowerCase() || "ug" == goog.LOCALE.substring(0, 2).toLowerCase() || "ur" == goog.LOCALE.substring(0, 2).toLowerCase() || "yi" == goog.LOCALE.substring(0, 2).toLowerCase()) && (2 == goog.LOCALE.length || "-" == goog.LOCALE.substring(2, 3) || "_" == goog.LOCALE.substring(2, 3)) || 3 <= goog.LOCALE.length && "ckb" == goog.LOCALE.substring(0, 3).toLowerCase() && (3 == goog.LOCALE.length || "-" == goog.LOCALE.substring(3, 4) || "_" == goog.LOCALE.substring(3, 4)) || 7 <= goog.LOCALE.length && ("-" == goog.LOCALE.substring(2, 3) || "_" == goog.LOCALE.substring(2, 3)) && ("adlm" == goog.LOCALE.substring(3, 7).toLowerCase() || "arab" == goog.LOCALE.substring(3, 7).toLowerCase() || "hebr" == goog.LOCALE.substring(3, 7).toLowerCase() || "nkoo" == goog.LOCALE.substring(3, 7).toLowerCase() || "rohg" == goog.LOCALE.substring(3, 7).toLowerCase() || "thaa" == goog.LOCALE.substring(3, 7).toLowerCase()) || 8 <= goog.LOCALE.length && ("-" == goog.LOCALE.substring(3, 4) || "_" == goog.LOCALE.substring(3, 4)) && ("adlm" == goog.LOCALE.substring(4, 8).toLowerCase() || "arab" == goog.LOCALE.substring(4, 8).toLowerCase() || "hebr" == goog.LOCALE.substring(4, 8).toLowerCase() || "nkoo" == goog.LOCALE.substring(4, 8).toLowerCase() || "rohg" == goog.LOCALE.substring(4, 8).toLowerCase() || "thaa" == goog.LOCALE.substring(4, 8).toLowerCase());
goog.i18n.bidi.Format = {
    LRE: "\u202a",
    RLE: "\u202b",
    PDF: "\u202c",
    LRM: "\u200e",
    RLM: "\u200f"
};
goog.i18n.bidi.Dir = {
    LTR: 1,
    RTL: -1,
    NEUTRAL: 0
};
goog.i18n.bidi.RIGHT = "right";
goog.i18n.bidi.LEFT = "left";
goog.i18n.bidi.I18N_RIGHT = goog.i18n.bidi.IS_RTL ? goog.i18n.bidi.LEFT : goog.i18n.bidi.RIGHT;
goog.i18n.bidi.I18N_LEFT = goog.i18n.bidi.IS_RTL ? goog.i18n.bidi.RIGHT : goog.i18n.bidi.LEFT;
goog.i18n.bidi.toDir = function(a2, b) {
    return "number" == typeof a2 ? 0 < a2 ? goog.i18n.bidi.Dir.LTR : 0 > a2 ? goog.i18n.bidi.Dir.RTL : b ? null : goog.i18n.bidi.Dir.NEUTRAL : null == a2 ? null : a2 ? goog.i18n.bidi.Dir.RTL : goog.i18n.bidi.Dir.LTR;
};
goog.i18n.bidi.ltrChars_ = "A-Za-z\u00c0-\u00d6\u00d8-\u00f6\u00f8-\u02b8\u0300-\u0590\u0900-\u1fff\u200e\u2c00-\ud801\ud804-\ud839\ud83c-\udbff\uf900-\ufb1c\ufe00-\ufe6f\ufefd-\uffff";
goog.i18n.bidi.rtlChars_ = "\u0591-\u06ef\u06fa-\u08ff\u200f\ud802-\ud803\ud83a-\ud83b\ufb1d-\ufdff\ufe70-\ufefc";
goog.i18n.bidi.htmlSkipReg_ = /<[^>]*>|&[^;]+;/g;
goog.i18n.bidi.stripHtmlIfNeeded_ = function(a2, b) {
    return b ? a2.replace(goog.i18n.bidi.htmlSkipReg_, "") : a2;
};
goog.i18n.bidi.rtlCharReg_ = new RegExp("[" + goog.i18n.bidi.rtlChars_ + "]");
goog.i18n.bidi.ltrCharReg_ = new RegExp("[" + goog.i18n.bidi.ltrChars_ + "]");
goog.i18n.bidi.hasAnyRtl = function(a2, b) {
    return goog.i18n.bidi.rtlCharReg_.test(goog.i18n.bidi.stripHtmlIfNeeded_(a2, b));
};
goog.i18n.bidi.hasRtlChar = goog.i18n.bidi.hasAnyRtl;
goog.i18n.bidi.hasAnyLtr = function(a2, b) {
    return goog.i18n.bidi.ltrCharReg_.test(goog.i18n.bidi.stripHtmlIfNeeded_(a2, b));
};
goog.i18n.bidi.ltrRe_ = new RegExp("^[" + goog.i18n.bidi.ltrChars_ + "]");
goog.i18n.bidi.rtlRe_ = new RegExp("^[" + goog.i18n.bidi.rtlChars_ + "]");
goog.i18n.bidi.isRtlChar = function(a2) {
    return goog.i18n.bidi.rtlRe_.test(a2);
};
goog.i18n.bidi.isLtrChar = function(a2) {
    return goog.i18n.bidi.ltrRe_.test(a2);
};
goog.i18n.bidi.isNeutralChar = function(a2) {
    return !goog.i18n.bidi.isLtrChar(a2) && !goog.i18n.bidi.isRtlChar(a2);
};
goog.i18n.bidi.ltrDirCheckRe_ = new RegExp("^[^" + goog.i18n.bidi.rtlChars_ + "]*[" + goog.i18n.bidi.ltrChars_ + "]");
goog.i18n.bidi.rtlDirCheckRe_ = new RegExp("^[^" + goog.i18n.bidi.ltrChars_ + "]*[" + goog.i18n.bidi.rtlChars_ + "]");
goog.i18n.bidi.startsWithRtl = function(a2, b) {
    return goog.i18n.bidi.rtlDirCheckRe_.test(goog.i18n.bidi.stripHtmlIfNeeded_(a2, b));
};
goog.i18n.bidi.isRtlText = goog.i18n.bidi.startsWithRtl;
goog.i18n.bidi.startsWithLtr = function(a2, b) {
    return goog.i18n.bidi.ltrDirCheckRe_.test(goog.i18n.bidi.stripHtmlIfNeeded_(a2, b));
};
goog.i18n.bidi.isLtrText = goog.i18n.bidi.startsWithLtr;
goog.i18n.bidi.isRequiredLtrRe_ = /^http:\/\/.*/;
goog.i18n.bidi.isNeutralText = function(a2, b) {
    a2 = goog.i18n.bidi.stripHtmlIfNeeded_(a2, b);
    return goog.i18n.bidi.isRequiredLtrRe_.test(a2) || !goog.i18n.bidi.hasAnyLtr(a2) && !goog.i18n.bidi.hasAnyRtl(a2);
};
goog.i18n.bidi.ltrExitDirCheckRe_ = new RegExp("[" + goog.i18n.bidi.ltrChars_ + "][^" + goog.i18n.bidi.rtlChars_ + "]*$");
goog.i18n.bidi.rtlExitDirCheckRe_ = new RegExp("[" + goog.i18n.bidi.rtlChars_ + "][^" + goog.i18n.bidi.ltrChars_ + "]*$");
goog.i18n.bidi.endsWithLtr = function(a2, b) {
    return goog.i18n.bidi.ltrExitDirCheckRe_.test(goog.i18n.bidi.stripHtmlIfNeeded_(a2, b));
};
goog.i18n.bidi.isLtrExitText = goog.i18n.bidi.endsWithLtr;
goog.i18n.bidi.endsWithRtl = function(a2, b) {
    return goog.i18n.bidi.rtlExitDirCheckRe_.test(goog.i18n.bidi.stripHtmlIfNeeded_(a2, b));
};
goog.i18n.bidi.isRtlExitText = goog.i18n.bidi.endsWithRtl;
goog.i18n.bidi.rtlLocalesRe_ = /^(ar|ckb|dv|he|iw|fa|nqo|ps|sd|ug|ur|yi|.*[-_](Adlm|Arab|Hebr|Nkoo|Rohg|Thaa))(?!.*[-_](Latn|Cyrl)($|-|_))($|-|_)/i;
goog.i18n.bidi.isRtlLanguage = function(a2) {
    return goog.i18n.bidi.rtlLocalesRe_.test(a2);
};
goog.i18n.bidi.bracketGuardTextRe_ = /(\(.*?\)+)|(\[.*?\]+)|(\{.*?\}+)|(<.*?>+)/g;
goog.i18n.bidi.guardBracketInText = function(a2, b) {
    b = ((void 0) === b ? goog.i18n.bidi.hasAnyRtl(a2) : b) ? goog.i18n.bidi.Format.RLM : goog.i18n.bidi.Format.LRM;
    return a2.replace(goog.i18n.bidi.bracketGuardTextRe_, b + "$&" + b);
};
goog.i18n.bidi.enforceRtlInHtml = function(a2) {
    return "<" == a2.charAt(0) ? a2.replace(/<\w+/, "$& dir=rtl") : "\n<span dir=rtl>" + a2 + "</span>";
};
goog.i18n.bidi.enforceRtlInText = function(a2) {
    return goog.i18n.bidi.Format.RLE + a2 + goog.i18n.bidi.Format.PDF;
};
goog.i18n.bidi.enforceLtrInHtml = function(a2) {
    return "<" == a2.charAt(0) ? a2.replace(/<\w+/, "$& dir=ltr") : "\n<span dir=ltr>" + a2 + "</span>";
};
goog.i18n.bidi.enforceLtrInText = function(a2) {
    return goog.i18n.bidi.Format.LRE + a2 + goog.i18n.bidi.Format.PDF;
};
goog.i18n.bidi.dimensionsRe_ = /:\s*([.\d][.\w]*)\s+([.\d][.\w]*)\s+([.\d][.\w]*)\s+([.\d][.\w]*)/g;
goog.i18n.bidi.leftRe_ = /left/gi;
goog.i18n.bidi.rightRe_ = /right/gi;
goog.i18n.bidi.tempRe_ = /%%%%/g;
goog.i18n.bidi.mirrorCSS = function(a2) {
    return a2.replace(goog.i18n.bidi.dimensionsRe_, ":$1 $4 $3 $2").replace(goog.i18n.bidi.leftRe_, "%%%%").replace(goog.i18n.bidi.rightRe_, goog.i18n.bidi.LEFT).replace(goog.i18n.bidi.tempRe_, goog.i18n.bidi.RIGHT);
};
goog.i18n.bidi.doubleQuoteSubstituteRe_ = /([\u0591-\u05f2])"/g;
goog.i18n.bidi.singleQuoteSubstituteRe_ = /([\u0591-\u05f2])'/g;
goog.i18n.bidi.normalizeHebrewQuote = function(a2) {
    return a2.replace(goog.i18n.bidi.doubleQuoteSubstituteRe_, "$1\u05f4").replace(goog.i18n.bidi.singleQuoteSubstituteRe_, "$1\u05f3");
};
goog.i18n.bidi.wordSeparatorRe_ = /\s+/;
goog.i18n.bidi.hasNumeralsRe_ = /[\d\u06f0-\u06f9]/;
goog.i18n.bidi.rtlDetectionThreshold_ = 0.4;
goog.i18n.bidi.estimateDirection = function(a2, b) {
    var c5 = 0, d = 0, e = false;
    a2 = goog.i18n.bidi.stripHtmlIfNeeded_(a2, b).split(goog.i18n.bidi.wordSeparatorRe_);
    for(b = 0; b < a2.length; b++){
        var f = a2[b];
        goog.i18n.bidi.startsWithRtl(f) ? (c5++, d++) : goog.i18n.bidi.isRequiredLtrRe_.test(f) ? e = true : goog.i18n.bidi.hasAnyLtr(f) ? d++ : goog.i18n.bidi.hasNumeralsRe_.test(f) && (e = true);
    }
    return 0 == d ? e ? goog.i18n.bidi.Dir.LTR : goog.i18n.bidi.Dir.NEUTRAL : c5 / d > goog.i18n.bidi.rtlDetectionThreshold_ ? goog.i18n.bidi.Dir.RTL : goog.i18n.bidi.Dir.LTR;
};
goog.i18n.bidi.detectRtlDirectionality = function(a2, b) {
    return goog.i18n.bidi.estimateDirection(a2, b) == goog.i18n.bidi.Dir.RTL;
};
goog.i18n.bidi.setElementDirAndAlign = function(a2, b) {
    a2 && (b = goog.i18n.bidi.toDir(b)) && (a2.style.textAlign = b == goog.i18n.bidi.Dir.RTL ? goog.i18n.bidi.RIGHT : goog.i18n.bidi.LEFT, a2.dir = b == goog.i18n.bidi.Dir.RTL ? "rtl" : "ltr");
};
goog.i18n.bidi.setElementDirByTextDirectionality = function(a2, b) {
    switch(goog.i18n.bidi.estimateDirection(b)){
        case goog.i18n.bidi.Dir.LTR:
            a2.dir = "ltr";
            break;
        case goog.i18n.bidi.Dir.RTL:
            a2.dir = "rtl";
            break;
        default:
            a2.removeAttribute("dir");
    }
};
goog.i18n.bidi.DirectionalString = function() {
};
goog.html.TrustedResourceUrl = function() {
    this.privateDoNotAccessOrElseTrustedResourceUrlWrappedValue_ = "";
    this.trustedURL_ = null;
    this.TRUSTED_RESOURCE_URL_TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ = goog.html.TrustedResourceUrl.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_;
};
goog.html.TrustedResourceUrl.prototype.implementsGoogStringTypedString = true;
goog.html.TrustedResourceUrl.prototype.getTypedStringValue = function() {
    return this.privateDoNotAccessOrElseTrustedResourceUrlWrappedValue_.toString();
};
goog.html.TrustedResourceUrl.prototype.implementsGoogI18nBidiDirectionalString = true;
goog.html.TrustedResourceUrl.prototype.getDirection = function() {
    return goog.i18n.bidi.Dir.LTR;
};
goog.html.TrustedResourceUrl.prototype.cloneWithParams = function(a2, b) {
    var c5 = goog.html.TrustedResourceUrl.unwrap(this);
    c5 = goog.html.TrustedResourceUrl.URL_PARAM_PARSER_.exec(c5);
    var d = c5[3] || "";
    return goog.html.TrustedResourceUrl.createTrustedResourceUrlSecurityPrivateDoNotAccessOrElse(c5[1] + goog.html.TrustedResourceUrl.stringifyParams_("?", c5[2] || "", a2) + goog.html.TrustedResourceUrl.stringifyParams_("#", d, b));
};
goog.DEBUG && (goog.html.TrustedResourceUrl.prototype.toString = function() {
    return "TrustedResourceUrl{" + this.privateDoNotAccessOrElseTrustedResourceUrlWrappedValue_ + "}";
});
goog.html.TrustedResourceUrl.unwrap = function(a2) {
    return goog.html.TrustedResourceUrl.unwrapTrustedScriptURL(a2).toString();
};
goog.html.TrustedResourceUrl.unwrapTrustedScriptURL = function(a2) {
    if (a2 instanceof goog.html.TrustedResourceUrl && a2.constructor === goog.html.TrustedResourceUrl && a2.TRUSTED_RESOURCE_URL_TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ === goog.html.TrustedResourceUrl.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_) return a2.privateDoNotAccessOrElseTrustedResourceUrlWrappedValue_;
    goog.asserts.fail("expected object of type TrustedResourceUrl, got '" + a2 + "' of type " + goog.typeOf(a2));
    return "type_error:TrustedResourceUrl";
};
goog.html.TrustedResourceUrl.unwrapTrustedURL = function(a2) {
    return a2.trustedURL_ ? a2.trustedURL_ : goog.html.TrustedResourceUrl.unwrap(a2);
};
goog.html.TrustedResourceUrl.format = function(a2, b) {
    var c5 = goog.string.Const.unwrap(a2);
    if (!goog.html.TrustedResourceUrl.BASE_URL_.test(c5)) throw Error("Invalid TrustedResourceUrl format: " + c5);
    a2 = c5.replace(goog.html.TrustedResourceUrl.FORMAT_MARKER_, function(a3, e) {
        if (!Object.prototype.hasOwnProperty.call(b, e)) throw Error('Found marker, "' + e + '", in format string, "' + c5 + '", but no valid label mapping found in args: ' + JSON.stringify(b));
        a3 = b[e];
        return a3 instanceof goog.string.Const ? goog.string.Const.unwrap(a3) : encodeURIComponent(String(a3));
    });
    return goog.html.TrustedResourceUrl.createTrustedResourceUrlSecurityPrivateDoNotAccessOrElse(a2);
};
goog.html.TrustedResourceUrl.FORMAT_MARKER_ = /%{(\w+)}/g;
goog.html.TrustedResourceUrl.BASE_URL_ = /^((https:)?\/\/[0-9a-z.:[\]-]+\/|\/[^/\\]|[^:/\\%]+\/|[^:/\\%]*[?#]|about:blank#)/i;
goog.html.TrustedResourceUrl.URL_PARAM_PARSER_ = /^([^?#]*)(\?[^#]*)?(#[\s\S]*)?/;
goog.html.TrustedResourceUrl.formatWithParams = function(a2, b, c5, d) {
    return goog.html.TrustedResourceUrl.format(a2, b).cloneWithParams(c5, d);
};
goog.html.TrustedResourceUrl.fromConstant = function(a2) {
    return goog.html.TrustedResourceUrl.createTrustedResourceUrlSecurityPrivateDoNotAccessOrElse(goog.string.Const.unwrap(a2));
};
goog.html.TrustedResourceUrl.fromConstants = function(a2) {
    for(var b = "", c5 = 0; c5 < a2.length; c5++)b += goog.string.Const.unwrap(a2[c5]);
    return goog.html.TrustedResourceUrl.createTrustedResourceUrlSecurityPrivateDoNotAccessOrElse(b);
};
goog.html.TrustedResourceUrl.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ = {
};
goog.html.TrustedResourceUrl.createTrustedResourceUrlSecurityPrivateDoNotAccessOrElse = function(a2) {
    var b = new goog.html.TrustedResourceUrl;
    b.privateDoNotAccessOrElseTrustedResourceUrlWrappedValue_ = goog.html.trustedtypes.PRIVATE_DO_NOT_ACCESS_OR_ELSE_POLICY ? goog.html.trustedtypes.PRIVATE_DO_NOT_ACCESS_OR_ELSE_POLICY.createScriptURL(a2) : a2;
    goog.html.trustedtypes.PRIVATE_DO_NOT_ACCESS_OR_ELSE_POLICY && (b.trustedURL_ = goog.html.trustedtypes.PRIVATE_DO_NOT_ACCESS_OR_ELSE_POLICY.createURL(a2));
    return b;
};
goog.html.TrustedResourceUrl.stringifyParams_ = function(a2, b, c5) {
    if (null == c5) return b;
    if (goog.isString(c5)) return c5 ? a2 + encodeURIComponent(c5) : "";
    for(var d in c5){
        var e = c5[d];
        e = goog.isArray(e) ? e : [
            e
        ];
        for(var f = 0; f < e.length; f++){
            var g = e[f];
            null != g && (b || (b = a2), b += (b.length > a2.length ? "&" : "") + encodeURIComponent(d) + "=" + encodeURIComponent(String(g)));
        }
    }
    return b;
};
goog.string.internal = {
};
goog.string.internal.startsWith = function(a2, b) {
    return 0 == a2.lastIndexOf(b, 0);
};
goog.string.internal.endsWith = function(a2, b) {
    var c5 = a2.length - b.length;
    return 0 <= c5 && a2.indexOf(b, c5) == c5;
};
goog.string.internal.caseInsensitiveStartsWith = function(a2, b) {
    return 0 == goog.string.internal.caseInsensitiveCompare(b, a2.substr(0, b.length));
};
goog.string.internal.caseInsensitiveEndsWith = function(a2, b) {
    return 0 == goog.string.internal.caseInsensitiveCompare(b, a2.substr(a2.length - b.length, b.length));
};
goog.string.internal.caseInsensitiveEquals = function(a2, b) {
    return a2.toLowerCase() == b.toLowerCase();
};
goog.string.internal.isEmptyOrWhitespace = function(a2) {
    return /^[\s\xa0]*$/.test(a2);
};
goog.string.internal.trim = goog.TRUSTED_SITE && String.prototype.trim ? function(a2) {
    return a2.trim();
} : function(a2) {
    return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a2)[1];
};
goog.string.internal.caseInsensitiveCompare = function(a2, b) {
    a2 = String(a2).toLowerCase();
    b = String(b).toLowerCase();
    return a2 < b ? -1 : a2 == b ? 0 : 1;
};
goog.string.internal.newLineToBr = function(a2, b) {
    return a2.replace(/(\r\n|\r|\n)/g, b ? "<br />" : "<br>");
};
goog.string.internal.htmlEscape = function(a2, b) {
    if (b) a2 = a2.replace(goog.string.internal.AMP_RE_, "&amp;").replace(goog.string.internal.LT_RE_, "&lt;").replace(goog.string.internal.GT_RE_, "&gt;").replace(goog.string.internal.QUOT_RE_, "&quot;").replace(goog.string.internal.SINGLE_QUOTE_RE_, "&#39;").replace(goog.string.internal.NULL_RE_, "&#0;");
    else {
        if (!goog.string.internal.ALL_RE_.test(a2)) return a2;
        -1 != a2.indexOf("&") && (a2 = a2.replace(goog.string.internal.AMP_RE_, "&amp;"));
        -1 != a2.indexOf("<") && (a2 = a2.replace(goog.string.internal.LT_RE_, "&lt;"));
        -1 != a2.indexOf(">") && (a2 = a2.replace(goog.string.internal.GT_RE_, "&gt;"));
        -1 != a2.indexOf('"') && (a2 = a2.replace(goog.string.internal.QUOT_RE_, "&quot;"));
        -1 != a2.indexOf("'") && (a2 = a2.replace(goog.string.internal.SINGLE_QUOTE_RE_, "&#39;"));
        -1 != a2.indexOf("\x00") && (a2 = a2.replace(goog.string.internal.NULL_RE_, "&#0;"));
    }
    return a2;
};
goog.string.internal.AMP_RE_ = /&/g;
goog.string.internal.LT_RE_ = /</g;
goog.string.internal.GT_RE_ = />/g;
goog.string.internal.QUOT_RE_ = /"/g;
goog.string.internal.SINGLE_QUOTE_RE_ = /'/g;
goog.string.internal.NULL_RE_ = /\x00/g;
goog.string.internal.ALL_RE_ = /[\x00&<>"']/;
goog.string.internal.whitespaceEscape = function(a2, b) {
    return goog.string.internal.newLineToBr(a2.replace(/  /g, " &#160;"), b);
};
goog.string.internal.contains = function(a2, b) {
    return -1 != a2.indexOf(b);
};
goog.string.internal.caseInsensitiveContains = function(a2, b) {
    return goog.string.internal.contains(a2.toLowerCase(), b.toLowerCase());
};
goog.string.internal.compareVersions = function(a2, b) {
    var c5 = 0;
    a2 = goog.string.internal.trim(String(a2)).split(".");
    b = goog.string.internal.trim(String(b)).split(".");
    for(var d = Math.max(a2.length, b.length), e = 0; 0 == c5 && e < d; e++){
        var f = a2[e] || "", g = b[e] || "";
        do {
            f = /(\d*)(\D*)(.*)/.exec(f) || [
                "",
                "",
                "",
                ""
            ];
            g = /(\d*)(\D*)(.*)/.exec(g) || [
                "",
                "",
                "",
                ""
            ];
            if (0 == f[0].length && 0 == g[0].length) break;
            c5 = 0 == f[1].length ? 0 : parseInt(f[1], 10);
            var h = 0 == g[1].length ? 0 : parseInt(g[1], 10);
            c5 = goog.string.internal.compareElements_(c5, h) || goog.string.internal.compareElements_(0 == f[2].length, 0 == g[2].length) || goog.string.internal.compareElements_(f[2], g[2]);
            f = f[3];
            g = g[3];
        }while (0 == c5)
    }
    return c5;
};
goog.string.internal.compareElements_ = function(a2, b) {
    return a2 < b ? -1 : a2 > b ? 1 : 0;
};
goog.html.SafeUrl = function() {
    this.privateDoNotAccessOrElseSafeUrlWrappedValue_ = "";
    this.SAFE_URL_TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ = goog.html.SafeUrl.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_;
};
goog.html.SafeUrl.INNOCUOUS_STRING = "about:invalid#zClosurez";
goog.html.SafeUrl.prototype.implementsGoogStringTypedString = true;
goog.html.SafeUrl.prototype.getTypedStringValue = function() {
    return this.privateDoNotAccessOrElseSafeUrlWrappedValue_.toString();
};
goog.html.SafeUrl.prototype.implementsGoogI18nBidiDirectionalString = true;
goog.html.SafeUrl.prototype.getDirection = function() {
    return goog.i18n.bidi.Dir.LTR;
};
goog.DEBUG && (goog.html.SafeUrl.prototype.toString = function() {
    return "SafeUrl{" + this.privateDoNotAccessOrElseSafeUrlWrappedValue_ + "}";
});
goog.html.SafeUrl.unwrap = function(a2) {
    return goog.html.SafeUrl.unwrapTrustedURL(a2).toString();
};
goog.html.SafeUrl.unwrapTrustedURL = function(a2) {
    if (a2 instanceof goog.html.SafeUrl && a2.constructor === goog.html.SafeUrl && a2.SAFE_URL_TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ === goog.html.SafeUrl.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_) return a2.privateDoNotAccessOrElseSafeUrlWrappedValue_;
    goog.asserts.fail("expected object of type SafeUrl, got '" + a2 + "' of type " + goog.typeOf(a2));
    return "type_error:SafeUrl";
};
goog.html.SafeUrl.fromConstant = function(a2) {
    return goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(goog.string.Const.unwrap(a2));
};
goog.html.SAFE_MIME_TYPE_PATTERN_ = /^(?:audio\/(?:3gpp2|3gpp|aac|L16|midi|mp3|mp4|mpeg|oga|ogg|opus|x-m4a|x-wav|wav|webm)|image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp|x-icon)|text\/csv|video\/(?:mpeg|mp4|ogg|webm|quicktime))(?:;\w+=(?:\w+|"[\w;=]+"))*$/i;
goog.html.SafeUrl.isSafeMimeType = function(a2) {
    return goog.html.SAFE_MIME_TYPE_PATTERN_.test(a2);
};
goog.html.SafeUrl.fromBlob = function(a2) {
    a2 = goog.html.SAFE_MIME_TYPE_PATTERN_.test(a2.type) ? goog.fs.url.createObjectUrl(a2) : goog.html.SafeUrl.INNOCUOUS_STRING;
    return goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(a2);
};
goog.html.DATA_URL_PATTERN_ = /^data:([^,]*);base64,[a-z0-9+\/]+=*$/i;
goog.html.SafeUrl.fromDataUrl = function(a2) {
    a2 = a2.replace(/(%0A|%0D)/g, "");
    var b = a2.match(goog.html.DATA_URL_PATTERN_);
    b = b && goog.html.SAFE_MIME_TYPE_PATTERN_.test(b[1]);
    return goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(b ? a2 : goog.html.SafeUrl.INNOCUOUS_STRING);
};
goog.html.SafeUrl.fromTelUrl = function(a2) {
    goog.string.internal.caseInsensitiveStartsWith(a2, "tel:") || (a2 = goog.html.SafeUrl.INNOCUOUS_STRING);
    return goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(a2);
};
goog.html.SIP_URL_PATTERN_ = /^sip[s]?:[+a-z0-9_.!$%&'*\/=^`{|}~-]+@([a-z0-9-]+\.)+[a-z0-9]{2,63}$/i;
goog.html.SafeUrl.fromSipUrl = function(a2) {
    goog.html.SIP_URL_PATTERN_.test(decodeURIComponent(a2)) || (a2 = goog.html.SafeUrl.INNOCUOUS_STRING);
    return goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(a2);
};
goog.html.SafeUrl.fromFacebookMessengerUrl = function(a2) {
    goog.string.internal.caseInsensitiveStartsWith(a2, "fb-messenger://share") || (a2 = goog.html.SafeUrl.INNOCUOUS_STRING);
    return goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(a2);
};
goog.html.SafeUrl.fromWhatsAppUrl = function(a2) {
    goog.string.internal.caseInsensitiveStartsWith(a2, "whatsapp://send") || (a2 = goog.html.SafeUrl.INNOCUOUS_STRING);
    return goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(a2);
};
goog.html.SafeUrl.fromSmsUrl = function(a2) {
    goog.string.internal.caseInsensitiveStartsWith(a2, "sms:") && goog.html.SafeUrl.isSmsUrlBodyValid_(a2) || (a2 = goog.html.SafeUrl.INNOCUOUS_STRING);
    return goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(a2);
};
goog.html.SafeUrl.isSmsUrlBodyValid_ = function(a2) {
    var b = a2.indexOf("#");
    0 < b && (a2 = a2.substring(0, b));
    b = a2.match(/[?&]body=/gi);
    if (!b) return true;
    if (1 < b.length) return false;
    a2 = a2.match(/[?&]body=([^&]*)/)[1];
    if (!a2) return true;
    try {
        decodeURIComponent(a2);
    } catch (c5) {
        return false;
    }
    return /^(?:[a-z0-9\-_.~]|%[0-9a-f]{2})+$/i.test(a2);
};
goog.html.SafeUrl.fromSshUrl = function(a2) {
    goog.string.internal.caseInsensitiveStartsWith(a2, "ssh://") || (a2 = goog.html.SafeUrl.INNOCUOUS_STRING);
    return goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(a2);
};
goog.html.SafeUrl.sanitizeChromeExtensionUrl = function(a2, b) {
    return goog.html.SafeUrl.sanitizeExtensionUrl_(/^chrome-extension:\/\/([^\/]+)\//, a2, b);
};
goog.html.SafeUrl.sanitizeFirefoxExtensionUrl = function(a2, b) {
    return goog.html.SafeUrl.sanitizeExtensionUrl_(/^moz-extension:\/\/([^\/]+)\//, a2, b);
};
goog.html.SafeUrl.sanitizeEdgeExtensionUrl = function(a2, b) {
    return goog.html.SafeUrl.sanitizeExtensionUrl_(/^ms-browser-extension:\/\/([^\/]+)\//, a2, b);
};
goog.html.SafeUrl.sanitizeExtensionUrl_ = function(a2, b, c5) {
    (a2 = a2.exec(b)) ? (a2 = a2[1], -1 == (c5 instanceof goog.string.Const ? [
        goog.string.Const.unwrap(c5)
    ] : c5.map(function(a3) {
        return goog.string.Const.unwrap(a3);
    })).indexOf(a2) && (b = goog.html.SafeUrl.INNOCUOUS_STRING)) : b = goog.html.SafeUrl.INNOCUOUS_STRING;
    return goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(b);
};
goog.html.SafeUrl.fromTrustedResourceUrl = function(a2) {
    return goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(goog.html.TrustedResourceUrl.unwrap(a2));
};
goog.html.SAFE_URL_PATTERN_ = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;
goog.html.SafeUrl.SAFE_URL_PATTERN = goog.html.SAFE_URL_PATTERN_;
goog.html.SafeUrl.sanitize = function(a2) {
    if (a2 instanceof goog.html.SafeUrl) return a2;
    a2 = "object" == typeof a2 && a2.implementsGoogStringTypedString ? a2.getTypedStringValue() : String(a2);
    goog.html.SAFE_URL_PATTERN_.test(a2) || (a2 = goog.html.SafeUrl.INNOCUOUS_STRING);
    return goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(a2);
};
goog.html.SafeUrl.sanitizeAssertUnchanged = function(a2, b) {
    if (a2 instanceof goog.html.SafeUrl) return a2;
    a2 = "object" == typeof a2 && a2.implementsGoogStringTypedString ? a2.getTypedStringValue() : String(a2);
    if (b && /^data:/i.test(a2) && (b = goog.html.SafeUrl.fromDataUrl(a2), b.getTypedStringValue() == a2)) return b;
    goog.asserts.assert(goog.html.SAFE_URL_PATTERN_.test(a2), "%s does not match the safe URL pattern", a2) || (a2 = goog.html.SafeUrl.INNOCUOUS_STRING);
    return goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(a2);
};
goog.html.SafeUrl.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ = {
};
goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse = function(a2) {
    var b = new goog.html.SafeUrl;
    b.privateDoNotAccessOrElseSafeUrlWrappedValue_ = goog.html.trustedtypes.PRIVATE_DO_NOT_ACCESS_OR_ELSE_POLICY ? goog.html.trustedtypes.PRIVATE_DO_NOT_ACCESS_OR_ELSE_POLICY.createURL(a2) : a2;
    return b;
};
goog.html.SafeUrl.ABOUT_BLANK = goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse("about:blank");
goog.html.SafeStyle = function() {
    this.privateDoNotAccessOrElseSafeStyleWrappedValue_ = "";
    this.SAFE_STYLE_TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ = goog.html.SafeStyle.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_;
};
goog.html.SafeStyle.prototype.implementsGoogStringTypedString = true;
goog.html.SafeStyle.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ = {
};
goog.html.SafeStyle.fromConstant = function(a2) {
    a2 = goog.string.Const.unwrap(a2);
    if (0 === a2.length) return goog.html.SafeStyle.EMPTY;
    goog.asserts.assert(goog.string.internal.endsWith(a2, ";"), "Last character of style string is not ';': " + a2);
    goog.asserts.assert(goog.string.internal.contains(a2, ":"), "Style string must contain at least one ':', to specify a \"name: value\" pair: " + a2);
    return goog.html.SafeStyle.createSafeStyleSecurityPrivateDoNotAccessOrElse(a2);
};
goog.html.SafeStyle.prototype.getTypedStringValue = function() {
    return this.privateDoNotAccessOrElseSafeStyleWrappedValue_;
};
goog.DEBUG && (goog.html.SafeStyle.prototype.toString = function() {
    return "SafeStyle{" + this.privateDoNotAccessOrElseSafeStyleWrappedValue_ + "}";
});
goog.html.SafeStyle.unwrap = function(a2) {
    if (a2 instanceof goog.html.SafeStyle && a2.constructor === goog.html.SafeStyle && a2.SAFE_STYLE_TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ === goog.html.SafeStyle.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_) return a2.privateDoNotAccessOrElseSafeStyleWrappedValue_;
    goog.asserts.fail("expected object of type SafeStyle, got '" + a2 + "' of type " + goog.typeOf(a2));
    return "type_error:SafeStyle";
};
goog.html.SafeStyle.createSafeStyleSecurityPrivateDoNotAccessOrElse = function(a2) {
    return (new goog.html.SafeStyle).initSecurityPrivateDoNotAccessOrElse_(a2);
};
goog.html.SafeStyle.prototype.initSecurityPrivateDoNotAccessOrElse_ = function(a2) {
    this.privateDoNotAccessOrElseSafeStyleWrappedValue_ = a2;
    return this;
};
goog.html.SafeStyle.EMPTY = goog.html.SafeStyle.createSafeStyleSecurityPrivateDoNotAccessOrElse("");
goog.html.SafeStyle.INNOCUOUS_STRING = "zClosurez";
goog.html.SafeStyle.create = function(a2) {
    var b = "", c5;
    for(c5 in a2){
        if (!/^[-_a-zA-Z0-9]+$/.test(c5)) throw Error("Name allows only [-_a-zA-Z0-9], got: " + c5);
        var d = a2[c5];
        null != d && (d = goog.isArray(d) ? goog.array.map(d, goog.html.SafeStyle.sanitizePropertyValue_).join(" ") : goog.html.SafeStyle.sanitizePropertyValue_(d), b += c5 + ":" + d + ";");
    }
    return b ? goog.html.SafeStyle.createSafeStyleSecurityPrivateDoNotAccessOrElse(b) : goog.html.SafeStyle.EMPTY;
};
goog.html.SafeStyle.sanitizePropertyValue_ = function(a2) {
    if (a2 instanceof goog.html.SafeUrl) return 'url("' + goog.html.SafeUrl.unwrap(a2).replace(/</g, "%3c").replace(/[\\"]/g, "\\$&") + '")';
    a2 = a2 instanceof goog.string.Const ? goog.string.Const.unwrap(a2) : goog.html.SafeStyle.sanitizePropertyValueString_(String(a2));
    if (/[{;}]/.test(a2)) throw new goog.asserts.AssertionError("Value does not allow [{;}], got: %s.", [
        a2
    ]);
    return a2;
};
goog.html.SafeStyle.sanitizePropertyValueString_ = function(a2) {
    var b = a2.replace(goog.html.SafeStyle.FUNCTIONS_RE_, "$1").replace(goog.html.SafeStyle.FUNCTIONS_RE_, "$1").replace(goog.html.SafeStyle.URL_RE_, "url");
    if (goog.html.SafeStyle.VALUE_RE_.test(b)) {
        if (goog.html.SafeStyle.COMMENT_RE_.test(a2)) return goog.asserts.fail("String value disallows comments, got: " + a2), goog.html.SafeStyle.INNOCUOUS_STRING;
        if (!goog.html.SafeStyle.hasBalancedQuotes_(a2)) return goog.asserts.fail("String value requires balanced quotes, got: " + a2), goog.html.SafeStyle.INNOCUOUS_STRING;
        if (!goog.html.SafeStyle.hasBalancedSquareBrackets_(a2)) return goog.asserts.fail("String value requires balanced square brackets and one identifier per pair of brackets, got: " + a2), goog.html.SafeStyle.INNOCUOUS_STRING;
    } else return goog.asserts.fail("String value allows only " + goog.html.SafeStyle.VALUE_ALLOWED_CHARS_ + " and simple functions, got: " + a2), goog.html.SafeStyle.INNOCUOUS_STRING;
    return goog.html.SafeStyle.sanitizeUrl_(a2);
};
goog.html.SafeStyle.hasBalancedQuotes_ = function(a2) {
    for(var b = true, c5 = true, d = 0; d < a2.length; d++){
        var e = a2.charAt(d);
        "'" == e && c5 ? b = !b : '"' == e && b && (c5 = !c5);
    }
    return b && c5;
};
goog.html.SafeStyle.hasBalancedSquareBrackets_ = function(a2) {
    for(var b = true, c5 = /^[-_a-zA-Z0-9]$/, d = 0; d < a2.length; d++){
        var e = a2.charAt(d);
        if ("]" == e) {
            if (b) return false;
            b = true;
        } else if ("[" == e) {
            if (!b) return false;
            b = false;
        } else if (!b && !c5.test(e)) return false;
    }
    return b;
};
goog.html.SafeStyle.VALUE_ALLOWED_CHARS_ = "[-,.\"'%_!# a-zA-Z0-9\\[\\]]";
goog.html.SafeStyle.VALUE_RE_ = new RegExp("^" + goog.html.SafeStyle.VALUE_ALLOWED_CHARS_ + "+$");
goog.html.SafeStyle.URL_RE_ = /\b(url\([ \t\n]*)('[ -&(-\[\]-~]*'|"[ !#-\[\]-~]*"|[!#-&*-\[\]-~]*)([ \t\n]*\))/g;
goog.html.SafeStyle.FUNCTIONS_RE_ = /\b(hsl|hsla|rgb|rgba|matrix|calc|minmax|fit-content|repeat|(rotate|scale|translate)(X|Y|Z|3d)?)\([-+*/0-9a-z.%\[\], ]+\)/g;
goog.html.SafeStyle.COMMENT_RE_ = /\/\*/;
goog.html.SafeStyle.sanitizeUrl_ = function(a2) {
    return a2.replace(goog.html.SafeStyle.URL_RE_, function(a3, c5, d, e) {
        var b = "";
        d = d.replace(/^(['"])(.*)\1$/, function(a4, c6, d1) {
            b = c6;
            return d1;
        });
        a3 = goog.html.SafeUrl.sanitize(d).getTypedStringValue();
        return c5 + b + a3 + b + e;
    });
};
goog.html.SafeStyle.concat = function(a2) {
    var b = "", c5 = function(a3) {
        goog.isArray(a3) ? goog.array.forEach(a3, c5) : b += goog.html.SafeStyle.unwrap(a3);
    };
    goog.array.forEach(arguments, c5);
    return b ? goog.html.SafeStyle.createSafeStyleSecurityPrivateDoNotAccessOrElse(b) : goog.html.SafeStyle.EMPTY;
};
goog.html.SafeStyleSheet = function() {
    this.privateDoNotAccessOrElseSafeStyleSheetWrappedValue_ = "";
    this.SAFE_STYLE_SHEET_TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ = goog.html.SafeStyleSheet.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_;
};
goog.html.SafeStyleSheet.prototype.implementsGoogStringTypedString = true;
goog.html.SafeStyleSheet.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ = {
};
goog.html.SafeStyleSheet.createRule = function(a2, b) {
    if (goog.string.internal.contains(a2, "<")) throw Error("Selector does not allow '<', got: " + a2);
    var c5 = a2.replace(/('|")((?!\1)[^\r\n\f\\]|\\[\s\S])*\1/g, "");
    if (!/^[-_a-zA-Z0-9#.:* ,>+~[\]()=^$|]+$/.test(c5)) throw Error("Selector allows only [-_a-zA-Z0-9#.:* ,>+~[\\]()=^$|] and strings, got: " + a2);
    if (!goog.html.SafeStyleSheet.hasBalancedBrackets_(c5)) throw Error("() and [] in selector must be balanced, got: " + a2);
    b instanceof goog.html.SafeStyle || (b = goog.html.SafeStyle.create(b));
    a2 = a2 + "{" + goog.html.SafeStyle.unwrap(b).replace(/</g, "\\3C ") + "}";
    return goog.html.SafeStyleSheet.createSafeStyleSheetSecurityPrivateDoNotAccessOrElse(a2);
};
goog.html.SafeStyleSheet.hasBalancedBrackets_ = function(a2) {
    for(var b = {
        "(": ")",
        "[": "]"
    }, c5 = [], d = 0; d < a2.length; d++){
        var e = a2[d];
        if (b[e]) c5.push(b[e]);
        else if (goog.object.contains(b, e) && c5.pop() != e) return false;
    }
    return 0 == c5.length;
};
goog.html.SafeStyleSheet.concat = function(a2) {
    var b = "", c5 = function(a3) {
        goog.isArray(a3) ? goog.array.forEach(a3, c5) : b += goog.html.SafeStyleSheet.unwrap(a3);
    };
    goog.array.forEach(arguments, c5);
    return goog.html.SafeStyleSheet.createSafeStyleSheetSecurityPrivateDoNotAccessOrElse(b);
};
goog.html.SafeStyleSheet.fromConstant = function(a2) {
    a2 = goog.string.Const.unwrap(a2);
    if (0 === a2.length) return goog.html.SafeStyleSheet.EMPTY;
    goog.asserts.assert(!goog.string.internal.contains(a2, "<"), "Forbidden '<' character in style sheet string: " + a2);
    return goog.html.SafeStyleSheet.createSafeStyleSheetSecurityPrivateDoNotAccessOrElse(a2);
};
goog.html.SafeStyleSheet.prototype.getTypedStringValue = function() {
    return this.privateDoNotAccessOrElseSafeStyleSheetWrappedValue_;
};
goog.DEBUG && (goog.html.SafeStyleSheet.prototype.toString = function() {
    return "SafeStyleSheet{" + this.privateDoNotAccessOrElseSafeStyleSheetWrappedValue_ + "}";
});
goog.html.SafeStyleSheet.unwrap = function(a2) {
    if (a2 instanceof goog.html.SafeStyleSheet && a2.constructor === goog.html.SafeStyleSheet && a2.SAFE_STYLE_SHEET_TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ === goog.html.SafeStyleSheet.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_) return a2.privateDoNotAccessOrElseSafeStyleSheetWrappedValue_;
    goog.asserts.fail("expected object of type SafeStyleSheet, got '" + a2 + "' of type " + goog.typeOf(a2));
    return "type_error:SafeStyleSheet";
};
goog.html.SafeStyleSheet.createSafeStyleSheetSecurityPrivateDoNotAccessOrElse = function(a2) {
    return (new goog.html.SafeStyleSheet).initSecurityPrivateDoNotAccessOrElse_(a2);
};
goog.html.SafeStyleSheet.prototype.initSecurityPrivateDoNotAccessOrElse_ = function(a2) {
    this.privateDoNotAccessOrElseSafeStyleSheetWrappedValue_ = a2;
    return this;
};
goog.html.SafeStyleSheet.EMPTY = goog.html.SafeStyleSheet.createSafeStyleSheetSecurityPrivateDoNotAccessOrElse("");
goog.labs = {
};
goog.labs.userAgent = {
};
goog.labs.userAgent.util = {
};
goog.labs.userAgent.util.getNativeUserAgentString_ = function() {
    var a2 = goog.labs.userAgent.util.getNavigator_();
    return a2 && (a2 = a2.userAgent) ? a2 : "";
};
goog.labs.userAgent.util.getNavigator_ = function() {
    return goog.global.navigator;
};
goog.labs.userAgent.util.userAgent_ = goog.labs.userAgent.util.getNativeUserAgentString_();
goog.labs.userAgent.util.setUserAgent = function(a2) {
    goog.labs.userAgent.util.userAgent_ = a2 || goog.labs.userAgent.util.getNativeUserAgentString_();
};
goog.labs.userAgent.util.getUserAgent = function() {
    return goog.labs.userAgent.util.userAgent_;
};
goog.labs.userAgent.util.matchUserAgent = function(a2) {
    var b = goog.labs.userAgent.util.getUserAgent();
    return goog.string.internal.contains(b, a2);
};
goog.labs.userAgent.util.matchUserAgentIgnoreCase = function(a2) {
    var b = goog.labs.userAgent.util.getUserAgent();
    return goog.string.internal.caseInsensitiveContains(b, a2);
};
goog.labs.userAgent.util.extractVersionTuples = function(a2) {
    for(var b = /(\w[\w ]+)\/([^\s]+)\s*(?:\((.*?)\))?/g, c5 = [], d; d = b.exec(a2);)c5.push([
        d[1],
        d[2],
        d[3] || void 0
    ]);
    return c5;
};
goog.labs.userAgent.browser = {
};
goog.labs.userAgent.browser.matchOpera_ = function() {
    return goog.labs.userAgent.util.matchUserAgent("Opera");
};
goog.labs.userAgent.browser.matchIE_ = function() {
    return goog.labs.userAgent.util.matchUserAgent("Trident") || goog.labs.userAgent.util.matchUserAgent("MSIE");
};
goog.labs.userAgent.browser.matchEdgeHtml_ = function() {
    return goog.labs.userAgent.util.matchUserAgent("Edge");
};
goog.labs.userAgent.browser.matchEdgeChromium_ = function() {
    return goog.labs.userAgent.util.matchUserAgent("Edg/");
};
goog.labs.userAgent.browser.matchOperaChromium_ = function() {
    return goog.labs.userAgent.util.matchUserAgent("OPR");
};
goog.labs.userAgent.browser.matchFirefox_ = function() {
    return goog.labs.userAgent.util.matchUserAgent("Firefox") || goog.labs.userAgent.util.matchUserAgent("FxiOS");
};
goog.labs.userAgent.browser.matchSafari_ = function() {
    return goog.labs.userAgent.util.matchUserAgent("Safari") && !(goog.labs.userAgent.browser.matchChrome_() || goog.labs.userAgent.browser.matchCoast_() || goog.labs.userAgent.browser.matchOpera_() || goog.labs.userAgent.browser.matchEdgeHtml_() || goog.labs.userAgent.browser.matchEdgeChromium_() || goog.labs.userAgent.browser.matchOperaChromium_() || goog.labs.userAgent.browser.matchFirefox_() || goog.labs.userAgent.browser.isSilk() || goog.labs.userAgent.util.matchUserAgent("Android"));
};
goog.labs.userAgent.browser.matchCoast_ = function() {
    return goog.labs.userAgent.util.matchUserAgent("Coast");
};
goog.labs.userAgent.browser.matchIosWebview_ = function() {
    return (goog.labs.userAgent.util.matchUserAgent("iPad") || goog.labs.userAgent.util.matchUserAgent("iPhone")) && !goog.labs.userAgent.browser.matchSafari_() && !goog.labs.userAgent.browser.matchChrome_() && !goog.labs.userAgent.browser.matchCoast_() && !goog.labs.userAgent.browser.matchFirefox_() && goog.labs.userAgent.util.matchUserAgent("AppleWebKit");
};
goog.labs.userAgent.browser.matchChrome_ = function() {
    return (goog.labs.userAgent.util.matchUserAgent("Chrome") || goog.labs.userAgent.util.matchUserAgent("CriOS")) && !goog.labs.userAgent.browser.matchEdgeHtml_();
};
goog.labs.userAgent.browser.matchAndroidBrowser_ = function() {
    return goog.labs.userAgent.util.matchUserAgent("Android") && !(goog.labs.userAgent.browser.isChrome() || goog.labs.userAgent.browser.isFirefox() || goog.labs.userAgent.browser.isOpera() || goog.labs.userAgent.browser.isSilk());
};
goog.labs.userAgent.browser.isOpera = goog.labs.userAgent.browser.matchOpera_;
goog.labs.userAgent.browser.isIE = goog.labs.userAgent.browser.matchIE_;
goog.labs.userAgent.browser.isEdge = goog.labs.userAgent.browser.matchEdgeHtml_;
goog.labs.userAgent.browser.isEdgeChromium = goog.labs.userAgent.browser.matchEdgeChromium_;
goog.labs.userAgent.browser.isOperaChromium = goog.labs.userAgent.browser.matchOperaChromium_;
goog.labs.userAgent.browser.isFirefox = goog.labs.userAgent.browser.matchFirefox_;
goog.labs.userAgent.browser.isSafari = goog.labs.userAgent.browser.matchSafari_;
goog.labs.userAgent.browser.isCoast = goog.labs.userAgent.browser.matchCoast_;
goog.labs.userAgent.browser.isIosWebview = goog.labs.userAgent.browser.matchIosWebview_;
goog.labs.userAgent.browser.isChrome = goog.labs.userAgent.browser.matchChrome_;
goog.labs.userAgent.browser.isAndroidBrowser = goog.labs.userAgent.browser.matchAndroidBrowser_;
goog.labs.userAgent.browser.isSilk = function() {
    return goog.labs.userAgent.util.matchUserAgent("Silk");
};
goog.labs.userAgent.browser.getVersion = function() {
    function a2(a3) {
        a3 = goog.array.find(a3, d);
        return c5[a3] || "";
    }
    var b = goog.labs.userAgent.util.getUserAgent();
    if (goog.labs.userAgent.browser.isIE()) return goog.labs.userAgent.browser.getIEVersion_(b);
    b = goog.labs.userAgent.util.extractVersionTuples(b);
    var c5 = {
    };
    goog.array.forEach(b, function(a3) {
        c5[a3[0]] = a3[1];
    });
    var d = goog.partial(goog.object.containsKey, c5);
    return goog.labs.userAgent.browser.isOpera() ? a2([
        "Version",
        "Opera"
    ]) : goog.labs.userAgent.browser.isEdge() ? a2([
        "Edge"
    ]) : goog.labs.userAgent.browser.isEdgeChromium() ? a2([
        "Edg"
    ]) : goog.labs.userAgent.browser.isChrome() ? a2([
        "Chrome",
        "CriOS"
    ]) : (b = b[2]) && b[1] || "";
};
goog.labs.userAgent.browser.isVersionOrHigher = function(a2) {
    return 0 <= goog.string.internal.compareVersions(goog.labs.userAgent.browser.getVersion(), a2);
};
goog.labs.userAgent.browser.getIEVersion_ = function(a2) {
    var b = /rv: *([\d\.]*)/.exec(a2);
    if (b && b[1]) return b[1];
    b = "";
    var c5 = /MSIE +([\d\.]+)/.exec(a2);
    if (c5 && c5[1]) {
        if (a2 = /Trident\/(\d.\d)/.exec(a2), "7.0" == c5[1]) {
            if (a2 && a2[1]) switch(a2[1]){
                case "4.0":
                    b = "8.0";
                    break;
                case "5.0":
                    b = "9.0";
                    break;
                case "6.0":
                    b = "10.0";
                    break;
                case "7.0":
                    b = "11.0";
            }
            else b = "7.0";
        } else b = c5[1];
    }
    return b;
};
goog.html.SafeHtml = function() {
    this.privateDoNotAccessOrElseSafeHtmlWrappedValue_ = "";
    this.SAFE_HTML_TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ = goog.html.SafeHtml.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_;
    this.dir_ = null;
};
goog.html.SafeHtml.prototype.implementsGoogI18nBidiDirectionalString = true;
goog.html.SafeHtml.prototype.getDirection = function() {
    return this.dir_;
};
goog.html.SafeHtml.prototype.implementsGoogStringTypedString = true;
goog.html.SafeHtml.prototype.getTypedStringValue = function() {
    return this.privateDoNotAccessOrElseSafeHtmlWrappedValue_.toString();
};
goog.DEBUG && (goog.html.SafeHtml.prototype.toString = function() {
    return "SafeHtml{" + this.privateDoNotAccessOrElseSafeHtmlWrappedValue_ + "}";
});
goog.html.SafeHtml.unwrap = function(a2) {
    return goog.html.SafeHtml.unwrapTrustedHTML(a2).toString();
};
goog.html.SafeHtml.unwrapTrustedHTML = function(a2) {
    if (a2 instanceof goog.html.SafeHtml && a2.constructor === goog.html.SafeHtml && a2.SAFE_HTML_TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ === goog.html.SafeHtml.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_) return a2.privateDoNotAccessOrElseSafeHtmlWrappedValue_;
    goog.asserts.fail("expected object of type SafeHtml, got '" + a2 + "' of type " + goog.typeOf(a2));
    return "type_error:SafeHtml";
};
goog.html.SafeHtml.htmlEscape = function(a2) {
    if (a2 instanceof goog.html.SafeHtml) return a2;
    var b = "object" == typeof a2, c5 = null;
    b && a2.implementsGoogI18nBidiDirectionalString && (c5 = a2.getDirection());
    a2 = b && a2.implementsGoogStringTypedString ? a2.getTypedStringValue() : String(a2);
    return goog.html.SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse(goog.string.internal.htmlEscape(a2), c5);
};
goog.html.SafeHtml.htmlEscapePreservingNewlines = function(a2) {
    if (a2 instanceof goog.html.SafeHtml) return a2;
    a2 = goog.html.SafeHtml.htmlEscape(a2);
    return goog.html.SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse(goog.string.internal.newLineToBr(goog.html.SafeHtml.unwrap(a2)), a2.getDirection());
};
goog.html.SafeHtml.htmlEscapePreservingNewlinesAndSpaces = function(a2) {
    if (a2 instanceof goog.html.SafeHtml) return a2;
    a2 = goog.html.SafeHtml.htmlEscape(a2);
    return goog.html.SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse(goog.string.internal.whitespaceEscape(goog.html.SafeHtml.unwrap(a2)), a2.getDirection());
};
goog.html.SafeHtml.from = goog.html.SafeHtml.htmlEscape;
goog.html.SafeHtml.VALID_NAMES_IN_TAG_ = /^[a-zA-Z0-9-]+$/;
goog.html.SafeHtml.URL_ATTRIBUTES_ = {
    action: true,
    cite: true,
    data: true,
    formaction: true,
    href: true,
    manifest: true,
    poster: true,
    src: true
};
goog.html.SafeHtml.NOT_ALLOWED_TAG_NAMES_ = {
    APPLET: true,
    BASE: true,
    EMBED: true,
    IFRAME: true,
    LINK: true,
    MATH: true,
    META: true,
    OBJECT: true,
    SCRIPT: true,
    STYLE: true,
    SVG: true,
    TEMPLATE: true
};
goog.html.SafeHtml.create = function(a2, b, c5) {
    goog.html.SafeHtml.verifyTagName(String(a2));
    return goog.html.SafeHtml.createSafeHtmlTagSecurityPrivateDoNotAccessOrElse(String(a2), b, c5);
};
goog.html.SafeHtml.verifyTagName = function(a2) {
    if (!goog.html.SafeHtml.VALID_NAMES_IN_TAG_.test(a2)) throw Error("Invalid tag name <" + a2 + ">.");
    if (a2.toUpperCase() in goog.html.SafeHtml.NOT_ALLOWED_TAG_NAMES_) throw Error("Tag name <" + a2 + "> is not allowed for SafeHtml.");
};
goog.html.SafeHtml.createIframe = function(a2, b, c5, d) {
    a2 && goog.html.TrustedResourceUrl.unwrap(a2);
    var e = {
    };
    e.src = a2 || null;
    e.srcdoc = b && goog.html.SafeHtml.unwrap(b);
    a2 = goog.html.SafeHtml.combineAttributes(e, {
        sandbox: ""
    }, c5);
    return goog.html.SafeHtml.createSafeHtmlTagSecurityPrivateDoNotAccessOrElse("iframe", a2, d);
};
goog.html.SafeHtml.createSandboxIframe = function(a2, b, c5, d) {
    if (!goog.html.SafeHtml.canUseSandboxIframe()) throw Error("The browser does not support sandboxed iframes.");
    var e = {
    };
    e.src = a2 ? goog.html.SafeUrl.unwrap(goog.html.SafeUrl.sanitize(a2)) : null;
    e.srcdoc = b || null;
    e.sandbox = "";
    a2 = goog.html.SafeHtml.combineAttributes(e, {
    }, c5);
    return goog.html.SafeHtml.createSafeHtmlTagSecurityPrivateDoNotAccessOrElse("iframe", a2, d);
};
goog.html.SafeHtml.canUseSandboxIframe = function() {
    return goog.global.HTMLIFrameElement && "sandbox" in goog.global.HTMLIFrameElement.prototype;
};
goog.html.SafeHtml.createScriptSrc = function(a2, b) {
    goog.html.TrustedResourceUrl.unwrap(a2);
    a2 = goog.html.SafeHtml.combineAttributes({
        src: a2
    }, {
    }, b);
    return goog.html.SafeHtml.createSafeHtmlTagSecurityPrivateDoNotAccessOrElse("script", a2);
};
goog.html.SafeHtml.createScript = function(a2, b) {
    for(var c5 in b){
        var d = c5.toLowerCase();
        if ("language" == d || "src" == d || "text" == d || "type" == d) throw Error('Cannot set "' + d + '" attribute');
    }
    c5 = "";
    a2 = goog.array.concat(a2);
    for(d = 0; d < a2.length; d++)c5 += goog.html.SafeScript.unwrap(a2[d]);
    a2 = goog.html.SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse(c5, goog.i18n.bidi.Dir.NEUTRAL);
    return goog.html.SafeHtml.createSafeHtmlTagSecurityPrivateDoNotAccessOrElse("script", b, a2);
};
goog.html.SafeHtml.createStyle = function(a2, b) {
    b = goog.html.SafeHtml.combineAttributes({
        type: "text/css"
    }, {
    }, b);
    var c5 = "";
    a2 = goog.array.concat(a2);
    for(var d = 0; d < a2.length; d++)c5 += goog.html.SafeStyleSheet.unwrap(a2[d]);
    a2 = goog.html.SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse(c5, goog.i18n.bidi.Dir.NEUTRAL);
    return goog.html.SafeHtml.createSafeHtmlTagSecurityPrivateDoNotAccessOrElse("style", b, a2);
};
goog.html.SafeHtml.createMetaRefresh = function(a2, b) {
    a2 = goog.html.SafeUrl.unwrap(goog.html.SafeUrl.sanitize(a2));
    (goog.labs.userAgent.browser.isIE() || goog.labs.userAgent.browser.isEdge()) && goog.string.internal.contains(a2, ";") && (a2 = "'" + a2.replace(/'/g, "%27") + "'");
    return goog.html.SafeHtml.createSafeHtmlTagSecurityPrivateDoNotAccessOrElse("meta", {
        "http-equiv": "refresh",
        content: (b || 0) + "; url=" + a2
    });
};
goog.html.SafeHtml.getAttrNameAndValue_ = function(a2, b, c5) {
    if (c5 instanceof goog.string.Const) c5 = goog.string.Const.unwrap(c5);
    else if ("style" == b.toLowerCase()) c5 = goog.html.SafeHtml.getStyleValue_(c5);
    else {
        if (/^on/i.test(b)) throw Error('Attribute "' + b + '" requires goog.string.Const value, "' + c5 + '" given.');
        if (b.toLowerCase() in goog.html.SafeHtml.URL_ATTRIBUTES_) {
            if (c5 instanceof goog.html.TrustedResourceUrl) c5 = goog.html.TrustedResourceUrl.unwrap(c5);
            else if (c5 instanceof goog.html.SafeUrl) c5 = goog.html.SafeUrl.unwrap(c5);
            else if (goog.isString(c5)) c5 = goog.html.SafeUrl.sanitize(c5).getTypedStringValue();
            else throw Error('Attribute "' + b + '" on tag "' + a2 + '" requires goog.html.SafeUrl, goog.string.Const, or string, value "' + c5 + '" given.');
        }
    }
    c5.implementsGoogStringTypedString && (c5 = c5.getTypedStringValue());
    goog.asserts.assert(goog.isString(c5) || goog.isNumber(c5), "String or number value expected, got " + typeof c5 + " with value: " + c5);
    return b + '="' + goog.string.internal.htmlEscape(String(c5)) + '"';
};
goog.html.SafeHtml.getStyleValue_ = function(a2) {
    if (!goog.isObject(a2)) throw Error('The "style" attribute requires goog.html.SafeStyle or map of style properties, ' + typeof a2 + " given: " + a2);
    a2 instanceof goog.html.SafeStyle || (a2 = goog.html.SafeStyle.create(a2));
    return goog.html.SafeStyle.unwrap(a2);
};
goog.html.SafeHtml.createWithDir = function(a2, b, c5, d) {
    b = goog.html.SafeHtml.create(b, c5, d);
    b.dir_ = a2;
    return b;
};
goog.html.SafeHtml.join = function(a2, b) {
    a2 = goog.html.SafeHtml.htmlEscape(a2);
    var c5 = a2.getDirection(), d = [], e = function(a3) {
        goog.isArray(a3) ? goog.array.forEach(a3, e) : (a3 = goog.html.SafeHtml.htmlEscape(a3), d.push(goog.html.SafeHtml.unwrap(a3)), a3 = a3.getDirection(), c5 == goog.i18n.bidi.Dir.NEUTRAL ? c5 = a3 : a3 != goog.i18n.bidi.Dir.NEUTRAL && c5 != a3 && (c5 = null));
    };
    goog.array.forEach(b, e);
    return goog.html.SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse(d.join(goog.html.SafeHtml.unwrap(a2)), c5);
};
goog.html.SafeHtml.concat = function(a2) {
    return goog.html.SafeHtml.join(goog.html.SafeHtml.EMPTY, Array.prototype.slice.call(arguments));
};
goog.html.SafeHtml.concatWithDir = function(a2, b) {
    var c5 = goog.html.SafeHtml.concat(goog.array.slice(arguments, 1));
    c5.dir_ = a2;
    return c5;
};
goog.html.SafeHtml.TYPE_MARKER_GOOG_HTML_SECURITY_PRIVATE_ = {
};
goog.html.SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse = function(a2, b) {
    return (new goog.html.SafeHtml).initSecurityPrivateDoNotAccessOrElse_(a2, b);
};
goog.html.SafeHtml.prototype.initSecurityPrivateDoNotAccessOrElse_ = function(a2, b) {
    this.privateDoNotAccessOrElseSafeHtmlWrappedValue_ = goog.html.trustedtypes.PRIVATE_DO_NOT_ACCESS_OR_ELSE_POLICY ? goog.html.trustedtypes.PRIVATE_DO_NOT_ACCESS_OR_ELSE_POLICY.createHTML(a2) : a2;
    this.dir_ = b;
    return this;
};
goog.html.SafeHtml.createSafeHtmlTagSecurityPrivateDoNotAccessOrElse = function(a2, b, c5) {
    var d = null;
    var e = "<" + a2 + goog.html.SafeHtml.stringifyAttributes(a2, b);
    goog.isDefAndNotNull(c5) ? goog.isArray(c5) || (c5 = [
        c5
    ]) : c5 = [];
    goog.dom.tags.isVoidTag(a2.toLowerCase()) ? (goog.asserts.assert(!c5.length, "Void tag <" + a2 + "> does not allow content."), e += ">") : (d = goog.html.SafeHtml.concat(c5), e += ">" + goog.html.SafeHtml.unwrap(d) + "</" + a2 + ">", d = d.getDirection());
    (a2 = b && b.dir) && (d = /^(ltr|rtl|auto)$/i.test(a2) ? goog.i18n.bidi.Dir.NEUTRAL : null);
    return goog.html.SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse(e, d);
};
goog.html.SafeHtml.stringifyAttributes = function(a2, b) {
    var c5 = "";
    if (b) for(var d in b){
        if (!goog.html.SafeHtml.VALID_NAMES_IN_TAG_.test(d)) throw Error('Invalid attribute name "' + d + '".');
        var e = b[d];
        goog.isDefAndNotNull(e) && (c5 += " " + goog.html.SafeHtml.getAttrNameAndValue_(a2, d, e));
    }
    return c5;
};
goog.html.SafeHtml.combineAttributes = function(a2, b, c5) {
    var d = {
    }, e;
    for(e in a2)goog.asserts.assert(e.toLowerCase() == e, "Must be lower case"), d[e] = a2[e];
    for(e in b)goog.asserts.assert(e.toLowerCase() == e, "Must be lower case"), d[e] = b[e];
    for(e in c5){
        var f = e.toLowerCase();
        if (f in a2) throw Error('Cannot override "' + f + '" attribute, got "' + e + '" with value "' + c5[e] + '"');
        f in b && delete d[f];
        d[e] = c5[e];
    }
    return d;
};
goog.html.SafeHtml.DOCTYPE_HTML = goog.html.SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse("<!DOCTYPE html>", goog.i18n.bidi.Dir.NEUTRAL);
goog.html.SafeHtml.EMPTY = goog.html.SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse("", goog.i18n.bidi.Dir.NEUTRAL);
goog.html.SafeHtml.BR = goog.html.SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse("<br>", goog.i18n.bidi.Dir.NEUTRAL);
goog.html.uncheckedconversions = {
};
goog.html.uncheckedconversions.safeHtmlFromStringKnownToSatisfyTypeContract = function(a2, b, c5) {
    goog.asserts.assertString(goog.string.Const.unwrap(a2), "must provide justification");
    goog.asserts.assert(!goog.string.internal.isEmptyOrWhitespace(goog.string.Const.unwrap(a2)), "must provide non-empty justification");
    return goog.html.SafeHtml.createSafeHtmlSecurityPrivateDoNotAccessOrElse(b, c5 || null);
};
goog.html.uncheckedconversions.safeScriptFromStringKnownToSatisfyTypeContract = function(a2, b) {
    goog.asserts.assertString(goog.string.Const.unwrap(a2), "must provide justification");
    goog.asserts.assert(!goog.string.internal.isEmptyOrWhitespace(goog.string.Const.unwrap(a2)), "must provide non-empty justification");
    return goog.html.SafeScript.createSafeScriptSecurityPrivateDoNotAccessOrElse(b);
};
goog.html.uncheckedconversions.safeStyleFromStringKnownToSatisfyTypeContract = function(a2, b) {
    goog.asserts.assertString(goog.string.Const.unwrap(a2), "must provide justification");
    goog.asserts.assert(!goog.string.internal.isEmptyOrWhitespace(goog.string.Const.unwrap(a2)), "must provide non-empty justification");
    return goog.html.SafeStyle.createSafeStyleSecurityPrivateDoNotAccessOrElse(b);
};
goog.html.uncheckedconversions.safeStyleSheetFromStringKnownToSatisfyTypeContract = function(a2, b) {
    goog.asserts.assertString(goog.string.Const.unwrap(a2), "must provide justification");
    goog.asserts.assert(!goog.string.internal.isEmptyOrWhitespace(goog.string.Const.unwrap(a2)), "must provide non-empty justification");
    return goog.html.SafeStyleSheet.createSafeStyleSheetSecurityPrivateDoNotAccessOrElse(b);
};
goog.html.uncheckedconversions.safeUrlFromStringKnownToSatisfyTypeContract = function(a2, b) {
    goog.asserts.assertString(goog.string.Const.unwrap(a2), "must provide justification");
    goog.asserts.assert(!goog.string.internal.isEmptyOrWhitespace(goog.string.Const.unwrap(a2)), "must provide non-empty justification");
    return goog.html.SafeUrl.createSafeUrlSecurityPrivateDoNotAccessOrElse(b);
};
goog.html.uncheckedconversions.trustedResourceUrlFromStringKnownToSatisfyTypeContract = function(a2, b) {
    goog.asserts.assertString(goog.string.Const.unwrap(a2), "must provide justification");
    goog.asserts.assert(!goog.string.internal.isEmptyOrWhitespace(goog.string.Const.unwrap(a2)), "must provide non-empty justification");
    return goog.html.TrustedResourceUrl.createTrustedResourceUrlSecurityPrivateDoNotAccessOrElse(b);
};
goog.dom.safe = {
};
goog.dom.safe.InsertAdjacentHtmlPosition = {
    AFTERBEGIN: "afterbegin",
    AFTEREND: "afterend",
    BEFOREBEGIN: "beforebegin",
    BEFOREEND: "beforeend"
};
goog.dom.safe.insertAdjacentHtml = function(a2, b, c5) {
    a2.insertAdjacentHTML(b, goog.html.SafeHtml.unwrapTrustedHTML(c5));
};
goog.dom.safe.SET_INNER_HTML_DISALLOWED_TAGS_ = {
    MATH: true,
    SCRIPT: true,
    STYLE: true,
    SVG: true,
    TEMPLATE: true
};
goog.dom.safe.isInnerHtmlCleanupRecursive_ = goog.functions.cacheReturnValue(function() {
    if (goog.DEBUG && "undefined" === typeof document) return false;
    var a2 = document.createElement("div"), b = document.createElement("div");
    b.appendChild(document.createElement("div"));
    a2.appendChild(b);
    if (goog.DEBUG && !a2.firstChild) return false;
    b = a2.firstChild.firstChild;
    a2.innerHTML = goog.html.SafeHtml.unwrapTrustedHTML(goog.html.SafeHtml.EMPTY);
    return !b.parentElement;
});
goog.dom.safe.unsafeSetInnerHtmlDoNotUseOrElse = function(a2, b) {
    if (goog.dom.safe.isInnerHtmlCleanupRecursive_()) for(; a2.lastChild;)a2.removeChild(a2.lastChild);
    a2.innerHTML = goog.html.SafeHtml.unwrapTrustedHTML(b);
};
goog.dom.safe.setInnerHtml = function(a2, b) {
    if (goog.asserts.ENABLE_ASSERTS) {
        var c5 = a2.tagName.toUpperCase();
        if (goog.dom.safe.SET_INNER_HTML_DISALLOWED_TAGS_[c5]) throw Error("goog.dom.safe.setInnerHtml cannot be used to set content of " + a2.tagName + ".");
    }
    goog.dom.safe.unsafeSetInnerHtmlDoNotUseOrElse(a2, b);
};
goog.dom.safe.setOuterHtml = function(a2, b) {
    a2.outerHTML = goog.html.SafeHtml.unwrapTrustedHTML(b);
};
goog.dom.safe.setFormElementAction = function(a2, b) {
    b = b instanceof goog.html.SafeUrl ? b : goog.html.SafeUrl.sanitizeAssertUnchanged(b);
    goog.dom.asserts.assertIsHTMLFormElement(a2).action = goog.html.SafeUrl.unwrapTrustedURL(b);
};
goog.dom.safe.setButtonFormAction = function(a2, b) {
    b = b instanceof goog.html.SafeUrl ? b : goog.html.SafeUrl.sanitizeAssertUnchanged(b);
    goog.dom.asserts.assertIsHTMLButtonElement(a2).formAction = goog.html.SafeUrl.unwrapTrustedURL(b);
};
goog.dom.safe.setInputFormAction = function(a2, b) {
    b = b instanceof goog.html.SafeUrl ? b : goog.html.SafeUrl.sanitizeAssertUnchanged(b);
    goog.dom.asserts.assertIsHTMLInputElement(a2).formAction = goog.html.SafeUrl.unwrapTrustedURL(b);
};
goog.dom.safe.setStyle = function(a2, b) {
    a2.style.cssText = goog.html.SafeStyle.unwrap(b);
};
goog.dom.safe.documentWrite = function(a2, b) {
    a2.write(goog.html.SafeHtml.unwrapTrustedHTML(b));
};
goog.dom.safe.setAnchorHref = function(a2, b) {
    goog.dom.asserts.assertIsHTMLAnchorElement(a2);
    b = b instanceof goog.html.SafeUrl ? b : goog.html.SafeUrl.sanitizeAssertUnchanged(b);
    a2.href = goog.html.SafeUrl.unwrapTrustedURL(b);
};
goog.dom.safe.setImageSrc = function(a2, b) {
    goog.dom.asserts.assertIsHTMLImageElement(a2);
    if (!(b instanceof goog.html.SafeUrl)) {
        var c6 = /^data:image\//i.test(b);
        b = goog.html.SafeUrl.sanitizeAssertUnchanged(b, c6);
    }
    a2.src = goog.html.SafeUrl.unwrapTrustedURL(b);
};
goog.dom.safe.setAudioSrc = function(a2, b) {
    goog.dom.asserts.assertIsHTMLAudioElement(a2);
    if (!(b instanceof goog.html.SafeUrl)) {
        var c7 = /^data:audio\//i.test(b);
        b = goog.html.SafeUrl.sanitizeAssertUnchanged(b, c7);
    }
    a2.src = goog.html.SafeUrl.unwrapTrustedURL(b);
};
goog.dom.safe.setVideoSrc = function(a2, b) {
    goog.dom.asserts.assertIsHTMLVideoElement(a2);
    if (!(b instanceof goog.html.SafeUrl)) {
        var c8 = /^data:video\//i.test(b);
        b = goog.html.SafeUrl.sanitizeAssertUnchanged(b, c8);
    }
    a2.src = goog.html.SafeUrl.unwrapTrustedURL(b);
};
goog.dom.safe.setEmbedSrc = function(a2, b) {
    goog.dom.asserts.assertIsHTMLEmbedElement(a2);
    a2.src = goog.html.TrustedResourceUrl.unwrapTrustedScriptURL(b);
};
goog.dom.safe.setFrameSrc = function(a2, b) {
    goog.dom.asserts.assertIsHTMLFrameElement(a2);
    a2.src = goog.html.TrustedResourceUrl.unwrapTrustedURL(b);
};
goog.dom.safe.setIframeSrc = function(a2, b) {
    goog.dom.asserts.assertIsHTMLIFrameElement(a2);
    a2.src = goog.html.TrustedResourceUrl.unwrapTrustedURL(b);
};
goog.dom.safe.setIframeSrcdoc = function(a2, b) {
    goog.dom.asserts.assertIsHTMLIFrameElement(a2);
    a2.srcdoc = goog.html.SafeHtml.unwrapTrustedHTML(b);
};
goog.dom.safe.setLinkHrefAndRel = function(a2, b, c9) {
    goog.dom.asserts.assertIsHTMLLinkElement(a2);
    a2.rel = c9;
    goog.string.internal.caseInsensitiveContains(c9, "stylesheet") ? (goog.asserts.assert(b instanceof goog.html.TrustedResourceUrl, 'URL must be TrustedResourceUrl because "rel" contains "stylesheet"'), a2.href = goog.html.TrustedResourceUrl.unwrapTrustedURL(b)) : a2.href = b instanceof goog.html.TrustedResourceUrl ? goog.html.TrustedResourceUrl.unwrapTrustedURL(b) : b instanceof goog.html.SafeUrl ? goog.html.SafeUrl.unwrapTrustedURL(b) : goog.html.SafeUrl.unwrapTrustedURL(goog.html.SafeUrl.sanitizeAssertUnchanged(b));
};
goog.dom.safe.setObjectData = function(a2, b) {
    goog.dom.asserts.assertIsHTMLObjectElement(a2);
    a2.data = goog.html.TrustedResourceUrl.unwrapTrustedScriptURL(b);
};
goog.dom.safe.setScriptSrc = function(a2, b) {
    goog.dom.asserts.assertIsHTMLScriptElement(a2);
    a2.src = goog.html.TrustedResourceUrl.unwrapTrustedScriptURL(b);
    (b = goog.getScriptNonce()) && a2.setAttribute("nonce", b);
};
goog.dom.safe.setScriptContent = function(a2, b) {
    goog.dom.asserts.assertIsHTMLScriptElement(a2);
    a2.text = goog.html.SafeScript.unwrapTrustedScript(b);
    (b = goog.getScriptNonce()) && a2.setAttribute("nonce", b);
};
goog.dom.safe.setLocationHref = function(a2, b) {
    goog.dom.asserts.assertIsLocation(a2);
    b = b instanceof goog.html.SafeUrl ? b : goog.html.SafeUrl.sanitizeAssertUnchanged(b);
    a2.href = goog.html.SafeUrl.unwrapTrustedURL(b);
};
goog.dom.safe.assignLocation = function(a2, b) {
    goog.dom.asserts.assertIsLocation(a2);
    b = b instanceof goog.html.SafeUrl ? b : goog.html.SafeUrl.sanitizeAssertUnchanged(b);
    a2.assign(goog.html.SafeUrl.unwrapTrustedURL(b));
};
goog.dom.safe.replaceLocation = function(a2, b) {
    goog.dom.asserts.assertIsLocation(a2);
    b = b instanceof goog.html.SafeUrl ? b : goog.html.SafeUrl.sanitizeAssertUnchanged(b);
    a2.replace(goog.html.SafeUrl.unwrapTrustedURL(b));
};
goog.dom.safe.openInWindow = function(a2, b, c9, d, e) {
    a2 = a2 instanceof goog.html.SafeUrl ? a2 : goog.html.SafeUrl.sanitizeAssertUnchanged(a2);
    return (b || goog.global).open(goog.html.SafeUrl.unwrapTrustedURL(a2), c9 ? goog.string.Const.unwrap(c9) : "", d, e);
};
goog.dom.safe.parseFromStringHtml = function(a2, b) {
    return goog.dom.safe.parseFromString(a2, b, "text/html");
};
goog.dom.safe.parseFromString = function(a2, b, c9) {
    return a2.parseFromString(goog.html.SafeHtml.unwrapTrustedHTML(b), c9);
};
goog.dom.safe.createImageFromBlob = function(a2) {
    if (!/^image\/.*/g.test(a2.type)) throw Error("goog.dom.safe.createImageFromBlob only accepts MIME type image/.*.");
    var b = goog.global.URL.createObjectURL(a2);
    a2 = new goog.global.Image;
    a2.onload = function() {
        goog.global.URL.revokeObjectURL(b);
    };
    goog.dom.safe.setImageSrc(a2, goog.html.uncheckedconversions.safeUrlFromStringKnownToSatisfyTypeContract(goog.string.Const.from("Image blob URL."), b));
    return a2;
};
goog.string.DETECT_DOUBLE_ESCAPING = false;
goog.string.FORCE_NON_DOM_HTML_UNESCAPING = false;
goog.string.Unicode = {
    NBSP: "\u00a0"
};
goog.string.startsWith = goog.string.internal.startsWith;
goog.string.endsWith = goog.string.internal.endsWith;
goog.string.caseInsensitiveStartsWith = goog.string.internal.caseInsensitiveStartsWith;
goog.string.caseInsensitiveEndsWith = goog.string.internal.caseInsensitiveEndsWith;
goog.string.caseInsensitiveEquals = goog.string.internal.caseInsensitiveEquals;
goog.string.subs = function(a2, b) {
    for(var c9 = a2.split("%s"), d = "", e = Array.prototype.slice.call(arguments, 1); e.length && 1 < c9.length;)d += c9.shift() + e.shift();
    return d + c9.join("%s");
};
goog.string.collapseWhitespace = function(a2) {
    return a2.replace(/[\s\xa0]+/g, " ").replace(/^\s+|\s+$/g, "");
};
goog.string.isEmptyOrWhitespace = goog.string.internal.isEmptyOrWhitespace;
goog.string.isEmptyString = function(a2) {
    return 0 == a2.length;
};
goog.string.isEmpty = goog.string.isEmptyOrWhitespace;
goog.string.isEmptyOrWhitespaceSafe = function(a2) {
    return goog.string.isEmptyOrWhitespace(goog.string.makeSafe(a2));
};
goog.string.isEmptySafe = goog.string.isEmptyOrWhitespaceSafe;
goog.string.isBreakingWhitespace = function(a2) {
    return !/[^\t\n\r ]/.test(a2);
};
goog.string.isAlpha = function(a2) {
    return !/[^a-zA-Z]/.test(a2);
};
goog.string.isNumeric = function(a2) {
    return !/[^0-9]/.test(a2);
};
goog.string.isAlphaNumeric = function(a2) {
    return !/[^a-zA-Z0-9]/.test(a2);
};
goog.string.isSpace = function(a2) {
    return " " == a2;
};
goog.string.isUnicodeChar = function(a2) {
    return 1 == a2.length && " " <= a2 && "~" >= a2 || "\u0080" <= a2 && "\ufffd" >= a2;
};
goog.string.stripNewlines = function(a2) {
    return a2.replace(/(\r\n|\r|\n)+/g, " ");
};
goog.string.canonicalizeNewlines = function(a2) {
    return a2.replace(/(\r\n|\r|\n)/g, "\n");
};
goog.string.normalizeWhitespace = function(a2) {
    return a2.replace(/\xa0|\s/g, " ");
};
goog.string.normalizeSpaces = function(a2) {
    return a2.replace(/\xa0|[ \t]+/g, " ");
};
goog.string.collapseBreakingSpaces = function(a2) {
    return a2.replace(/[\t\r\n ]+/g, " ").replace(/^[\t\r\n ]+|[\t\r\n ]+$/g, "");
};
goog.string.trim = goog.string.internal.trim;
goog.string.trimLeft = function(a2) {
    return a2.replace(/^[\s\xa0]+/, "");
};
goog.string.trimRight = function(a2) {
    return a2.replace(/[\s\xa0]+$/, "");
};
goog.string.caseInsensitiveCompare = goog.string.internal.caseInsensitiveCompare;
goog.string.numberAwareCompare_ = function(a2, b, c9) {
    if (a2 == b) return 0;
    if (!a2) return -1;
    if (!b) return 1;
    for(var d = a2.toLowerCase().match(c9), e = b.toLowerCase().match(c9), f = Math.min(d.length, e.length), g = 0; g < f; g++){
        c9 = d[g];
        var h = e[g];
        if (c9 != h) return a2 = parseInt(c9, 10), !isNaN(a2) && (b = parseInt(h, 10), !isNaN(b) && a2 - b) ? a2 - b : c9 < h ? -1 : 1;
    }
    return d.length != e.length ? d.length - e.length : a2 < b ? -1 : 1;
};
goog.string.intAwareCompare = function(a2, b) {
    return goog.string.numberAwareCompare_(a2, b, /\d+|\D+/g);
};
goog.string.floatAwareCompare = function(a2, b) {
    return goog.string.numberAwareCompare_(a2, b, /\d+|\.\d+|\D+/g);
};
goog.string.numerateCompare = goog.string.floatAwareCompare;
goog.string.urlEncode = function(a2) {
    return encodeURIComponent(String(a2));
};
goog.string.urlDecode = function(a2) {
    return decodeURIComponent(a2.replace(/\+/g, " "));
};
goog.string.newLineToBr = goog.string.internal.newLineToBr;
goog.string.htmlEscape = function(a2, b) {
    a2 = goog.string.internal.htmlEscape(a2, b);
    goog.string.DETECT_DOUBLE_ESCAPING && (a2 = a2.replace(goog.string.E_RE_, "&#101;"));
    return a2;
};
goog.string.E_RE_ = /e/g;
goog.string.unescapeEntities = function(a2) {
    return goog.string.contains(a2, "&") ? !goog.string.FORCE_NON_DOM_HTML_UNESCAPING && "document" in goog.global ? goog.string.unescapeEntitiesUsingDom_(a2) : goog.string.unescapePureXmlEntities_(a2) : a2;
};
goog.string.unescapeEntitiesWithDocument = function(a2, b) {
    return goog.string.contains(a2, "&") ? goog.string.unescapeEntitiesUsingDom_(a2, b) : a2;
};
goog.string.unescapeEntitiesUsingDom_ = function(a2, b) {
    var c9 = {
        "&amp;": "&",
        "&lt;": "<",
        "&gt;": ">",
        "&quot;": '"'
    };
    var d = b ? b.createElement("div") : goog.global.document.createElement("div");
    return a2.replace(goog.string.HTML_ENTITY_PATTERN_, function(a3, b1) {
        var e = c9[a3];
        if (e) return e;
        "#" == b1.charAt(0) && (b1 = Number("0" + b1.substr(1)), isNaN(b1) || (e = String.fromCharCode(b1)));
        e || (goog.dom.safe.setInnerHtml(d, goog.html.uncheckedconversions.safeHtmlFromStringKnownToSatisfyTypeContract(goog.string.Const.from("Single HTML entity."), a3 + " ")), e = d.firstChild.nodeValue.slice(0, -1));
        return c9[a3] = e;
    });
};
goog.string.unescapePureXmlEntities_ = function(a2) {
    return a2.replace(/&([^;]+);/g, function(a3, c9) {
        switch(c9){
            case "amp":
                return "&";
            case "lt":
                return "<";
            case "gt":
                return ">";
            case "quot":
                return '"';
            default:
                return "#" != c9.charAt(0) || (c9 = Number("0" + c9.substr(1)), isNaN(c9)) ? a3 : String.fromCharCode(c9);
        }
    });
};
goog.string.HTML_ENTITY_PATTERN_ = /&([^;\s<&]+);?/g;
goog.string.whitespaceEscape = function(a2, b) {
    return goog.string.newLineToBr(a2.replace(/  /g, " &#160;"), b);
};
goog.string.preserveSpaces = function(a2) {
    return a2.replace(/(^|[\n ]) /g, "$1" + goog.string.Unicode.NBSP);
};
goog.string.stripQuotes = function(a2, b) {
    for(var c9 = b.length, d = 0; d < c9; d++){
        var e = 1 == c9 ? b : b.charAt(d);
        if (a2.charAt(0) == e && a2.charAt(a2.length - 1) == e) return a2.substring(1, a2.length - 1);
    }
    return a2;
};
goog.string.truncate = function(a2, b, c9) {
    c9 && (a2 = goog.string.unescapeEntities(a2));
    a2.length > b && (a2 = a2.substring(0, b - 3) + "...");
    c9 && (a2 = goog.string.htmlEscape(a2));
    return a2;
};
goog.string.truncateMiddle = function(a2, b, c9, d) {
    c9 && (a2 = goog.string.unescapeEntities(a2));
    if (d && a2.length > b) {
        d > b && (d = b);
        var e = a2.length - d;
        a2 = a2.substring(0, b - d) + "..." + a2.substring(e);
    } else a2.length > b && (d = Math.floor(b / 2), e = a2.length - d, a2 = a2.substring(0, d + b % 2) + "..." + a2.substring(e));
    c9 && (a2 = goog.string.htmlEscape(a2));
    return a2;
};
goog.string.specialEscapeChars_ = {
    "\x00": "\\0",
    "\b": "\\b",
    "\f": "\\f",
    "\n": "\\n",
    "\r": "\\r",
    "\t": "\\t",
    "\x0B": "\\x0B",
    '"': '\\"',
    "\\": "\\\\",
    "<": "\\u003C"
};
goog.string.jsEscapeCache_ = {
    "'": "\\'"
};
goog.string.quote = function(a2) {
    a2 = String(a2);
    for(var b = [
        '"'
    ], c9 = 0; c9 < a2.length; c9++){
        var d = a2.charAt(c9), e = d.charCodeAt(0);
        b[c9 + 1] = goog.string.specialEscapeChars_[d] || (31 < e && 127 > e ? d : goog.string.escapeChar(d));
    }
    b.push('"');
    return b.join("");
};
goog.string.escapeString = function(a2) {
    for(var b = [], c9 = 0; c9 < a2.length; c9++)b[c9] = goog.string.escapeChar(a2.charAt(c9));
    return b.join("");
};
goog.string.escapeChar = function(a2) {
    if (a2 in goog.string.jsEscapeCache_) return goog.string.jsEscapeCache_[a2];
    if (a2 in goog.string.specialEscapeChars_) return goog.string.jsEscapeCache_[a2] = goog.string.specialEscapeChars_[a2];
    var b = a2.charCodeAt(0);
    if (31 < b && 127 > b) var c9 = a2;
    else {
        if (256 > b) {
            if (c9 = "\\x", 16 > b || 256 < b) c9 += "0";
        } else c9 = "\\u", 4096 > b && (c9 += "0");
        c9 += b.toString(16).toUpperCase();
    }
    return goog.string.jsEscapeCache_[a2] = c9;
};
goog.string.contains = goog.string.internal.contains;
goog.string.caseInsensitiveContains = goog.string.internal.caseInsensitiveContains;
goog.string.countOf = function(a2, b) {
    return a2 && b ? a2.split(b).length - 1 : 0;
};
goog.string.removeAt = function(a2, b, c9) {
    var d = a2;
    0 <= b && b < a2.length && 0 < c9 && (d = a2.substr(0, b) + a2.substr(b + c9, a2.length - b - c9));
    return d;
};
goog.string.remove = function(a2, b) {
    return a2.replace(b, "");
};
goog.string.removeAll = function(a2, b) {
    b = new RegExp(goog.string.regExpEscape(b), "g");
    return a2.replace(b, "");
};
goog.string.replaceAll = function(a2, b, c9) {
    b = new RegExp(goog.string.regExpEscape(b), "g");
    return a2.replace(b, c9.replace(/\$/g, "$$$$"));
};
goog.string.regExpEscape = function(a2) {
    return String(a2).replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08");
};
goog.string.repeat = String.prototype.repeat ? function(a2, b) {
    return a2.repeat(b);
} : function(a2, b) {
    return Array(b + 1).join(a2);
};
goog.string.padNumber = function(a2, b, c9) {
    a2 = goog.isDef(c9) ? a2.toFixed(c9) : String(a2);
    c9 = a2.indexOf(".");
    -1 == c9 && (c9 = a2.length);
    return goog.string.repeat("0", Math.max(0, b - c9)) + a2;
};
goog.string.makeSafe = function(a2) {
    return null == a2 ? "" : String(a2);
};
goog.string.buildString = function(a2) {
    return Array.prototype.join.call(arguments, "");
};
goog.string.getRandomString = function() {
    return Math.floor(2147483648 * Math.random()).toString(36) + Math.abs(Math.floor(2147483648 * Math.random()) ^ goog.now()).toString(36);
};
goog.string.compareVersions = goog.string.internal.compareVersions;
goog.string.hashCode = function(a2) {
    for(var b = 0, c9 = 0; c9 < a2.length; ++c9)b = 31 * b + a2.charCodeAt(c9) >>> 0;
    return b;
};
goog.string.uniqueStringCounter_ = 2147483648 * Math.random() | 0;
goog.string.createUniqueString = function() {
    return "goog_" + goog.string.uniqueStringCounter_++;
};
goog.string.toNumber = function(a2) {
    var b = Number(a2);
    return 0 == b && goog.string.isEmptyOrWhitespace(a2) ? NaN : b;
};
goog.string.isLowerCamelCase = function(a2) {
    return /^[a-z]+([A-Z][a-z]*)*$/.test(a2);
};
goog.string.isUpperCamelCase = function(a2) {
    return /^([A-Z][a-z]*)+$/.test(a2);
};
goog.string.toCamelCase = function(a2) {
    return String(a2).replace(/\-([a-z])/g, function(a3, c9) {
        return c9.toUpperCase();
    });
};
goog.string.toSelectorCase = function(a2) {
    return String(a2).replace(/([A-Z])/g, "-$1").toLowerCase();
};
goog.string.toTitleCase = function(a2, b) {
    b = goog.isString(b) ? goog.string.regExpEscape(b) : "\\s";
    return a2.replace(new RegExp("(^" + (b ? "|[" + b + "]+" : "") + ")([a-z])", "g"), function(a3, b1, e) {
        return b1 + e.toUpperCase();
    });
};
goog.string.capitalize = function(a2) {
    return String(a2.charAt(0)).toUpperCase() + String(a2.substr(1)).toLowerCase();
};
goog.string.parseInt = function(a2) {
    isFinite(a2) && (a2 = String(a2));
    return goog.isString(a2) ? /^\s*-?0x/i.test(a2) ? parseInt(a2, 16) : parseInt(a2, 10) : NaN;
};
goog.string.splitLimit = function(a2, b, c9) {
    a2 = a2.split(b);
    for(var d = []; 0 < c9 && a2.length;)d.push(a2.shift()), c9--;
    a2.length && d.push(a2.join(b));
    return d;
};
goog.string.lastComponent = function(a2, b) {
    if (b) "string" == typeof b && (b = [
        b
    ]);
    else return a2;
    for(var c9 = -1, d = 0; d < b.length; d++)if ("" != b[d]) {
        var e = a2.lastIndexOf(b[d]);
        e > c9 && (c9 = e);
    }
    return -1 == c9 ? a2 : a2.slice(c9 + 1);
};
goog.string.editDistance = function(a2, b) {
    var c9 = [], d = [];
    if (a2 == b) return 0;
    if (!a2.length || !b.length) return Math.max(a2.length, b.length);
    for(var e = 0; e < b.length + 1; e++)c9[e] = e;
    for(e = 0; e < a2.length; e++){
        d[0] = e + 1;
        for(var f = 0; f < b.length; f++)d[f + 1] = Math.min(d[f] + 1, c9[f + 1] + 1, c9[f] + Number(a2[e] != b[f]));
        for(f = 0; f < c9.length; f++)c9[f] = d[f];
    }
    return d[b.length];
};
goog.labs.userAgent.engine = {
};
goog.labs.userAgent.engine.isPresto = function() {
    return goog.labs.userAgent.util.matchUserAgent("Presto");
};
goog.labs.userAgent.engine.isTrident = function() {
    return goog.labs.userAgent.util.matchUserAgent("Trident") || goog.labs.userAgent.util.matchUserAgent("MSIE");
};
goog.labs.userAgent.engine.isEdge = function() {
    return goog.labs.userAgent.util.matchUserAgent("Edge");
};
goog.labs.userAgent.engine.isWebKit = function() {
    return goog.labs.userAgent.util.matchUserAgentIgnoreCase("WebKit") && !goog.labs.userAgent.engine.isEdge();
};
goog.labs.userAgent.engine.isGecko = function() {
    return goog.labs.userAgent.util.matchUserAgent("Gecko") && !goog.labs.userAgent.engine.isWebKit() && !goog.labs.userAgent.engine.isTrident() && !goog.labs.userAgent.engine.isEdge();
};
goog.labs.userAgent.engine.getVersion = function() {
    var a2 = goog.labs.userAgent.util.getUserAgent();
    if (a2) {
        a2 = goog.labs.userAgent.util.extractVersionTuples(a2);
        var b = goog.labs.userAgent.engine.getEngineTuple_(a2);
        if (b) return "Gecko" == b[0] ? goog.labs.userAgent.engine.getVersionForKey_(a2, "Firefox") : b[1];
        a2 = a2[0];
        var c9;
        if (a2 && (c9 = a2[2]) && (c9 = /Trident\/([^\s;]+)/.exec(c9))) return c9[1];
    }
    return "";
};
goog.labs.userAgent.engine.getEngineTuple_ = function(a2) {
    if (!goog.labs.userAgent.engine.isEdge()) return a2[1];
    for(var b = 0; b < a2.length; b++){
        var c10 = a2[b];
        if ("Edge" == c10[0]) return c10;
    }
};
goog.labs.userAgent.engine.isVersionOrHigher = function(a2) {
    return 0 <= goog.string.compareVersions(goog.labs.userAgent.engine.getVersion(), a2);
};
goog.labs.userAgent.engine.getVersionForKey_ = function(a2, b) {
    return (a2 = goog.array.find(a2, function(a3) {
        return b == a3[0];
    })) && a2[1] || "";
};
goog.labs.userAgent.platform = {
};
goog.labs.userAgent.platform.isAndroid = function() {
    return goog.labs.userAgent.util.matchUserAgent("Android");
};
goog.labs.userAgent.platform.isIpod = function() {
    return goog.labs.userAgent.util.matchUserAgent("iPod");
};
goog.labs.userAgent.platform.isIphone = function() {
    return goog.labs.userAgent.util.matchUserAgent("iPhone") && !goog.labs.userAgent.util.matchUserAgent("iPod") && !goog.labs.userAgent.util.matchUserAgent("iPad");
};
goog.labs.userAgent.platform.isIpad = function() {
    return goog.labs.userAgent.util.matchUserAgent("iPad");
};
goog.labs.userAgent.platform.isIos = function() {
    return goog.labs.userAgent.platform.isIphone() || goog.labs.userAgent.platform.isIpad() || goog.labs.userAgent.platform.isIpod();
};
goog.labs.userAgent.platform.isMacintosh = function() {
    return goog.labs.userAgent.util.matchUserAgent("Macintosh");
};
goog.labs.userAgent.platform.isLinux = function() {
    return goog.labs.userAgent.util.matchUserAgent("Linux");
};
goog.labs.userAgent.platform.isWindows = function() {
    return goog.labs.userAgent.util.matchUserAgent("Windows");
};
goog.labs.userAgent.platform.isChromeOS = function() {
    return goog.labs.userAgent.util.matchUserAgent("CrOS");
};
goog.labs.userAgent.platform.isChromecast = function() {
    return goog.labs.userAgent.util.matchUserAgent("CrKey");
};
goog.labs.userAgent.platform.isKaiOS = function() {
    return goog.labs.userAgent.util.matchUserAgentIgnoreCase("KaiOS");
};
goog.labs.userAgent.platform.isGo2Phone = function() {
    return goog.labs.userAgent.util.matchUserAgentIgnoreCase("GAFP");
};
goog.labs.userAgent.platform.getVersion = function() {
    var a2 = goog.labs.userAgent.util.getUserAgent(), b = "";
    goog.labs.userAgent.platform.isWindows() ? (b = /Windows (?:NT|Phone) ([0-9.]+)/, b = (a2 = b.exec(a2)) ? a2[1] : "0.0") : goog.labs.userAgent.platform.isIos() ? (b = /(?:iPhone|iPod|iPad|CPU)\s+OS\s+(\S+)/, b = (a2 = b.exec(a2)) && a2[1].replace(/_/g, ".")) : goog.labs.userAgent.platform.isMacintosh() ? (b = /Mac OS X ([0-9_.]+)/, b = (a2 = b.exec(a2)) ? a2[1].replace(/_/g, ".") : "10") : goog.labs.userAgent.platform.isKaiOS() ? (b = /(?:KaiOS)\/(\S+)/i, b = (a2 = b.exec(a2)) && a2[1]) : goog.labs.userAgent.platform.isAndroid() ? (b = /Android\s+([^\);]+)(\)|;)/, b = (a2 = b.exec(a2)) && a2[1]) : goog.labs.userAgent.platform.isChromeOS() && (b = /(?:CrOS\s+(?:i686|x86_64)\s+([0-9.]+))/, b = (a2 = b.exec(a2)) && a2[1]);
    return b || "";
};
goog.labs.userAgent.platform.isVersionOrHigher = function(a2) {
    return 0 <= goog.string.compareVersions(goog.labs.userAgent.platform.getVersion(), a2);
};
goog.reflect = {
};
goog.reflect.object = function(a2, b) {
    return b;
};
goog.reflect.objectProperty = function(a2, b) {
    return a2;
};
goog.reflect.sinkValue = function(a2) {
    goog.reflect.sinkValue[" "](a2);
    return a2;
};
goog.reflect.sinkValue[" "] = goog.nullFunction;
goog.reflect.canAccessProperty = function(a2, b) {
    try {
        return goog.reflect.sinkValue(a2[b]), true;
    } catch (c11) {
    }
    return false;
};
goog.reflect.cache = function(a2, b, c11, d) {
    d = d ? d(b) : b;
    return Object.prototype.hasOwnProperty.call(a2, d) ? a2[d] : a2[d] = c11(b);
};
goog.userAgent = {
};
goog.userAgent.ASSUME_IE = false;
goog.userAgent.ASSUME_EDGE = false;
goog.userAgent.ASSUME_GECKO = false;
goog.userAgent.ASSUME_WEBKIT = false;
goog.userAgent.ASSUME_MOBILE_WEBKIT = false;
goog.userAgent.ASSUME_OPERA = false;
goog.userAgent.ASSUME_ANY_VERSION = false;
goog.userAgent.BROWSER_KNOWN_ = goog.userAgent.ASSUME_IE || goog.userAgent.ASSUME_EDGE || goog.userAgent.ASSUME_GECKO || goog.userAgent.ASSUME_MOBILE_WEBKIT || goog.userAgent.ASSUME_WEBKIT || goog.userAgent.ASSUME_OPERA;
goog.userAgent.getUserAgentString = function() {
    return goog.labs.userAgent.util.getUserAgent();
};
goog.userAgent.getNavigatorTyped = function() {
    return goog.global.navigator || null;
};
goog.userAgent.getNavigator = function() {
    return goog.userAgent.getNavigatorTyped();
};
goog.userAgent.OPERA = goog.userAgent.BROWSER_KNOWN_ ? goog.userAgent.ASSUME_OPERA : goog.labs.userAgent.browser.isOpera();
goog.userAgent.IE = goog.userAgent.BROWSER_KNOWN_ ? goog.userAgent.ASSUME_IE : goog.labs.userAgent.browser.isIE();
goog.userAgent.EDGE = goog.userAgent.BROWSER_KNOWN_ ? goog.userAgent.ASSUME_EDGE : goog.labs.userAgent.engine.isEdge();
goog.userAgent.EDGE_OR_IE = goog.userAgent.EDGE || goog.userAgent.IE;
goog.userAgent.GECKO = goog.userAgent.BROWSER_KNOWN_ ? goog.userAgent.ASSUME_GECKO : goog.labs.userAgent.engine.isGecko();
goog.userAgent.WEBKIT = goog.userAgent.BROWSER_KNOWN_ ? goog.userAgent.ASSUME_WEBKIT || goog.userAgent.ASSUME_MOBILE_WEBKIT : goog.labs.userAgent.engine.isWebKit();
goog.userAgent.isMobile_ = function() {
    return goog.userAgent.WEBKIT && goog.labs.userAgent.util.matchUserAgent("Mobile");
};
goog.userAgent.MOBILE = goog.userAgent.ASSUME_MOBILE_WEBKIT || goog.userAgent.isMobile_();
goog.userAgent.SAFARI = goog.userAgent.WEBKIT;
goog.userAgent.determinePlatform_ = function() {
    var a2 = goog.userAgent.getNavigatorTyped();
    return a2 && a2.platform || "";
};
goog.userAgent.PLATFORM = goog.userAgent.determinePlatform_();
goog.userAgent.ASSUME_MAC = false;
goog.userAgent.ASSUME_WINDOWS = false;
goog.userAgent.ASSUME_LINUX = false;
goog.userAgent.ASSUME_X11 = false;
goog.userAgent.ASSUME_ANDROID = false;
goog.userAgent.ASSUME_IPHONE = false;
goog.userAgent.ASSUME_IPAD = false;
goog.userAgent.ASSUME_IPOD = false;
goog.userAgent.ASSUME_KAIOS = false;
goog.userAgent.ASSUME_GO2PHONE = false;
goog.userAgent.PLATFORM_KNOWN_ = goog.userAgent.ASSUME_MAC || goog.userAgent.ASSUME_WINDOWS || goog.userAgent.ASSUME_LINUX || goog.userAgent.ASSUME_X11 || goog.userAgent.ASSUME_ANDROID || goog.userAgent.ASSUME_IPHONE || goog.userAgent.ASSUME_IPAD || goog.userAgent.ASSUME_IPOD;
goog.userAgent.MAC = goog.userAgent.PLATFORM_KNOWN_ ? goog.userAgent.ASSUME_MAC : goog.labs.userAgent.platform.isMacintosh();
goog.userAgent.WINDOWS = goog.userAgent.PLATFORM_KNOWN_ ? goog.userAgent.ASSUME_WINDOWS : goog.labs.userAgent.platform.isWindows();
goog.userAgent.isLegacyLinux_ = function() {
    return goog.labs.userAgent.platform.isLinux() || goog.labs.userAgent.platform.isChromeOS();
};
goog.userAgent.LINUX = goog.userAgent.PLATFORM_KNOWN_ ? goog.userAgent.ASSUME_LINUX : goog.userAgent.isLegacyLinux_();
goog.userAgent.isX11_ = function() {
    var a2 = goog.userAgent.getNavigatorTyped();
    return !!a2 && goog.string.contains(a2.appVersion || "", "X11");
};
goog.userAgent.X11 = goog.userAgent.PLATFORM_KNOWN_ ? goog.userAgent.ASSUME_X11 : goog.userAgent.isX11_();
goog.userAgent.ANDROID = goog.userAgent.PLATFORM_KNOWN_ ? goog.userAgent.ASSUME_ANDROID : goog.labs.userAgent.platform.isAndroid();
goog.userAgent.IPHONE = goog.userAgent.PLATFORM_KNOWN_ ? goog.userAgent.ASSUME_IPHONE : goog.labs.userAgent.platform.isIphone();
goog.userAgent.IPAD = goog.userAgent.PLATFORM_KNOWN_ ? goog.userAgent.ASSUME_IPAD : goog.labs.userAgent.platform.isIpad();
goog.userAgent.IPOD = goog.userAgent.PLATFORM_KNOWN_ ? goog.userAgent.ASSUME_IPOD : goog.labs.userAgent.platform.isIpod();
goog.userAgent.IOS = goog.userAgent.PLATFORM_KNOWN_ ? goog.userAgent.ASSUME_IPHONE || goog.userAgent.ASSUME_IPAD || goog.userAgent.ASSUME_IPOD : goog.labs.userAgent.platform.isIos();
goog.userAgent.KAIOS = goog.userAgent.PLATFORM_KNOWN_ ? goog.userAgent.ASSUME_KAIOS : goog.labs.userAgent.platform.isKaiOS();
goog.userAgent.GO2PHONE = goog.userAgent.PLATFORM_KNOWN_ ? goog.userAgent.ASSUME_GO2PHONE : goog.labs.userAgent.platform.isGo2Phone();
goog.userAgent.determineVersion_ = function() {
    var a2 = "", b = goog.userAgent.getVersionRegexResult_();
    b && (a2 = b ? b[1] : "");
    return goog.userAgent.IE && (b = goog.userAgent.getDocumentMode_(), null != b && b > parseFloat(a2)) ? String(b) : a2;
};
goog.userAgent.getVersionRegexResult_ = function() {
    var a2 = goog.userAgent.getUserAgentString();
    if (goog.userAgent.GECKO) return /rv:([^\);]+)(\)|;)/.exec(a2);
    if (goog.userAgent.EDGE) return /Edge\/([\d\.]+)/.exec(a2);
    if (goog.userAgent.IE) return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a2);
    if (goog.userAgent.WEBKIT) return /WebKit\/(\S+)/.exec(a2);
    if (goog.userAgent.OPERA) return /(?:Version)[ \/]?(\S+)/.exec(a2);
};
goog.userAgent.getDocumentMode_ = function() {
    var a2 = goog.global.document;
    return a2 ? a2.documentMode : void 0;
};
goog.userAgent.VERSION = goog.userAgent.determineVersion_();
goog.userAgent.compare = function(a2, b) {
    return goog.string.compareVersions(a2, b);
};
goog.userAgent.isVersionOrHigherCache_ = {
};
goog.userAgent.isVersionOrHigher = function(a2) {
    return goog.userAgent.ASSUME_ANY_VERSION || goog.reflect.cache(goog.userAgent.isVersionOrHigherCache_, a2, function() {
        return 0 <= goog.string.compareVersions(goog.userAgent.VERSION, a2);
    });
};
goog.userAgent.isVersion = goog.userAgent.isVersionOrHigher;
goog.userAgent.isDocumentModeOrHigher = function(a2) {
    return Number(goog.userAgent.DOCUMENT_MODE) >= a2;
};
goog.userAgent.isDocumentMode = goog.userAgent.isDocumentModeOrHigher;
goog.userAgent.DOCUMENT_MODE = (function() {
    if (goog.global.document && goog.userAgent.IE) return goog.userAgent.getDocumentMode_();
})();
goog.userAgent.product = {
};
goog.userAgent.product.ASSUME_FIREFOX = false;
goog.userAgent.product.ASSUME_IPHONE = false;
goog.userAgent.product.ASSUME_IPAD = false;
goog.userAgent.product.ASSUME_ANDROID = false;
goog.userAgent.product.ASSUME_CHROME = false;
goog.userAgent.product.ASSUME_SAFARI = false;
goog.userAgent.product.PRODUCT_KNOWN_ = goog.userAgent.ASSUME_IE || goog.userAgent.ASSUME_EDGE || goog.userAgent.ASSUME_OPERA || goog.userAgent.product.ASSUME_FIREFOX || goog.userAgent.product.ASSUME_IPHONE || goog.userAgent.product.ASSUME_IPAD || goog.userAgent.product.ASSUME_ANDROID || goog.userAgent.product.ASSUME_CHROME || goog.userAgent.product.ASSUME_SAFARI;
goog.userAgent.product.OPERA = goog.userAgent.OPERA;
goog.userAgent.product.IE = goog.userAgent.IE;
goog.userAgent.product.EDGE = goog.userAgent.EDGE;
goog.userAgent.product.FIREFOX = goog.userAgent.product.PRODUCT_KNOWN_ ? goog.userAgent.product.ASSUME_FIREFOX : goog.labs.userAgent.browser.isFirefox();
goog.userAgent.product.isIphoneOrIpod_ = function() {
    return goog.labs.userAgent.platform.isIphone() || goog.labs.userAgent.platform.isIpod();
};
goog.userAgent.product.IPHONE = goog.userAgent.product.PRODUCT_KNOWN_ ? goog.userAgent.product.ASSUME_IPHONE : goog.userAgent.product.isIphoneOrIpod_();
goog.userAgent.product.IPAD = goog.userAgent.product.PRODUCT_KNOWN_ ? goog.userAgent.product.ASSUME_IPAD : goog.labs.userAgent.platform.isIpad();
goog.userAgent.product.ANDROID = goog.userAgent.product.PRODUCT_KNOWN_ ? goog.userAgent.product.ASSUME_ANDROID : goog.labs.userAgent.browser.isAndroidBrowser();
goog.userAgent.product.CHROME = goog.userAgent.product.PRODUCT_KNOWN_ ? goog.userAgent.product.ASSUME_CHROME : goog.labs.userAgent.browser.isChrome();
goog.userAgent.product.isSafariDesktop_ = function() {
    return goog.labs.userAgent.browser.isSafari() && !goog.labs.userAgent.platform.isIos();
};
goog.userAgent.product.SAFARI = goog.userAgent.product.PRODUCT_KNOWN_ ? goog.userAgent.product.ASSUME_SAFARI : goog.userAgent.product.isSafariDesktop_();
goog.crypt.base64 = {
};
goog.crypt.base64.DEFAULT_ALPHABET_COMMON_ = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
goog.crypt.base64.ENCODED_VALS = goog.crypt.base64.DEFAULT_ALPHABET_COMMON_ + "+/=";
goog.crypt.base64.ENCODED_VALS_WEBSAFE = goog.crypt.base64.DEFAULT_ALPHABET_COMMON_ + "-_.";
goog.crypt.base64.Alphabet = {
    DEFAULT: 0,
    NO_PADDING: 1,
    WEBSAFE: 2,
    WEBSAFE_DOT_PADDING: 3,
    WEBSAFE_NO_PADDING: 4
};
goog.crypt.base64.paddingChars_ = "=.";
goog.crypt.base64.isPadding_ = function(a2) {
    return goog.string.contains(goog.crypt.base64.paddingChars_, a2);
};
goog.crypt.base64.byteToCharMaps_ = {
};
goog.crypt.base64.charToByteMap_ = null;
goog.crypt.base64.ASSUME_NATIVE_SUPPORT_ = goog.userAgent.GECKO || goog.userAgent.WEBKIT && !goog.userAgent.product.SAFARI || goog.userAgent.OPERA;
goog.crypt.base64.HAS_NATIVE_ENCODE_ = goog.crypt.base64.ASSUME_NATIVE_SUPPORT_ || "function" == typeof goog.global.btoa;
goog.crypt.base64.HAS_NATIVE_DECODE_ = goog.crypt.base64.ASSUME_NATIVE_SUPPORT_ || !goog.userAgent.product.SAFARI && !goog.userAgent.IE && "function" == typeof goog.global.atob;
goog.crypt.base64.encodeByteArray = function(a2, b) {
    goog.asserts.assert(goog.isArrayLike(a2), "encodeByteArray takes an array as a parameter");
    (void 0) === b && (b = goog.crypt.base64.Alphabet.DEFAULT);
    goog.crypt.base64.init_();
    b = goog.crypt.base64.byteToCharMaps_[b];
    for(var c11 = [], d = 0; d < a2.length; d += 3){
        var e = a2[d], f = d + 1 < a2.length, g = f ? a2[d + 1] : 0, h = d + 2 < a2.length, k = h ? a2[d + 2] : 0, l = e >> 2;
        e = (e & 3) << 4 | g >> 4;
        g = (g & 15) << 2 | k >> 6;
        k &= 63;
        h || (k = 64, f || (g = 64));
        c11.push(b[l], b[e], b[g] || "", b[k] || "");
    }
    return c11.join("");
};
goog.crypt.base64.encodeString = function(a2, b) {
    return goog.crypt.base64.HAS_NATIVE_ENCODE_ && !b ? goog.global.btoa(a2) : goog.crypt.base64.encodeByteArray(goog.crypt.stringToByteArray(a2), b);
};
goog.crypt.base64.decodeString = function(a2, b) {
    if (goog.crypt.base64.HAS_NATIVE_DECODE_ && !b) return goog.global.atob(a2);
    var c11 = "";
    goog.crypt.base64.decodeStringInternal_(a2, function(a3) {
        c11 += String.fromCharCode(a3);
    });
    return c11;
};
goog.crypt.base64.decodeStringToByteArray = function(a2, b) {
    var c11 = [];
    goog.crypt.base64.decodeStringInternal_(a2, function(a3) {
        c11.push(a3);
    });
    return c11;
};
goog.crypt.base64.decodeStringToUint8Array = function(a2) {
    goog.asserts.assert(!goog.userAgent.IE || goog.userAgent.isVersionOrHigher("10"), "Browser does not support typed arrays");
    var b = a2.length, c11 = 3 * b / 4;
    c11 % 3 ? c11 = Math.floor(c11) : goog.crypt.base64.isPadding_(a2[b - 1]) && (c11 = goog.crypt.base64.isPadding_(a2[b - 2]) ? c11 - 2 : c11 - 1);
    var d = new Uint8Array(c11), e = 0;
    goog.crypt.base64.decodeStringInternal_(a2, function(a3) {
        d[e++] = a3;
    });
    return d.subarray(0, e);
};
goog.crypt.base64.decodeStringInternal_ = function(a2, b) {
    function c11(b1) {
        for(; d < a2.length;){
            var c12 = a2.charAt(d++), e = goog.crypt.base64.charToByteMap_[c12];
            if (null != e) return e;
            if (!goog.string.isEmptyOrWhitespace(c12)) throw Error("Unknown base64 encoding at char: " + c12);
        }
        return b1;
    }
    goog.crypt.base64.init_();
    for(var d = 0;;){
        var e = c11(-1), f = c11(0), g = c11(64), h = c11(64);
        if (64 === h && -1 === e) break;
        b(e << 2 | f >> 4);
        64 != g && (b(f << 4 & 240 | g >> 2), 64 != h && b(g << 6 & 192 | h));
    }
};
goog.crypt.base64.init_ = function() {
    if (!goog.crypt.base64.charToByteMap_) {
        goog.crypt.base64.charToByteMap_ = {
        };
        for(var a2 = goog.crypt.base64.DEFAULT_ALPHABET_COMMON_.split(""), b = [
            "+/=",
            "+/",
            "-_=",
            "-_.",
            "-_"
        ], c11 = 0; 5 > c11; c11++){
            var d = a2.concat(b[c11].split(""));
            goog.crypt.base64.byteToCharMaps_[c11] = d;
            for(var e = 0; e < d.length; e++){
                var f = d[e], g = goog.crypt.base64.charToByteMap_[f];
                (void 0) === g ? goog.crypt.base64.charToByteMap_[f] = e : goog.asserts.assert(g === e);
            }
        }
    }
};
jspb.utils = {
};
jspb.utils.split64Low = 0;
jspb.utils.split64High = 0;
jspb.utils.splitUint64 = function(a3) {
    var b = a3 >>> 0;
    a3 = Math.floor((a3 - b) / jspb.BinaryConstants.TWO_TO_32) >>> 0;
    jspb.utils.split64Low = b;
    jspb.utils.split64High = a3;
};
jspb.utils.splitInt64 = function(a3) {
    var b = 0 > a3;
    a3 = Math.abs(a3);
    var c13 = a3 >>> 0;
    a3 = Math.floor((a3 - c13) / jspb.BinaryConstants.TWO_TO_32);
    a3 >>>= 0;
    b && (a3 = ~a3 >>> 0, c13 = (~c13 >>> 0) + 1, 4294967295 < c13 && (c13 = 0, a3++, 4294967295 < a3 && (a3 = 0)));
    jspb.utils.split64Low = c13;
    jspb.utils.split64High = a3;
};
jspb.utils.splitZigzag64 = function(a3) {
    var b = 0 > a3;
    a3 = 2 * Math.abs(a3);
    jspb.utils.splitUint64(a3);
    a3 = jspb.utils.split64Low;
    var c13 = jspb.utils.split64High;
    b && (0 == a3 ? 0 == c13 ? c13 = a3 = 4294967295 : (c13--, a3 = 4294967295) : a3--);
    jspb.utils.split64Low = a3;
    jspb.utils.split64High = c13;
};
jspb.utils.splitFloat32 = function(a3) {
    var b = 0 > a3 ? 1 : 0;
    a3 = b ? -a3 : a3;
    if (0 === a3) 0 < 1 / a3 ? (jspb.utils.split64High = 0, jspb.utils.split64Low = 0) : (jspb.utils.split64High = 0, jspb.utils.split64Low = 2147483648);
    else if (isNaN(a3)) jspb.utils.split64High = 0, jspb.utils.split64Low = 2147483647;
    else if (a3 > jspb.BinaryConstants.FLOAT32_MAX) jspb.utils.split64High = 0, jspb.utils.split64Low = (b << 31 | 2139095040) >>> 0;
    else if (a3 < jspb.BinaryConstants.FLOAT32_MIN) a3 = Math.round(a3 / Math.pow(2, -149)), jspb.utils.split64High = 0, jspb.utils.split64Low = (b << 31 | a3) >>> 0;
    else {
        var c13 = Math.floor(Math.log(a3) / Math.LN2);
        a3 *= Math.pow(2, -c13);
        a3 = Math.round(a3 * jspb.BinaryConstants.TWO_TO_23) & 8388607;
        jspb.utils.split64High = 0;
        jspb.utils.split64Low = (b << 31 | c13 + 127 << 23 | a3) >>> 0;
    }
};
jspb.utils.splitFloat64 = function(a3) {
    var b = 0 > a3 ? 1 : 0;
    a3 = b ? -a3 : a3;
    if (0 === a3) jspb.utils.split64High = 0 < 1 / a3 ? 0 : 2147483648, jspb.utils.split64Low = 0;
    else if (isNaN(a3)) jspb.utils.split64High = 2147483647, jspb.utils.split64Low = 4294967295;
    else if (a3 > jspb.BinaryConstants.FLOAT64_MAX) jspb.utils.split64High = (b << 31 | 2146435072) >>> 0, jspb.utils.split64Low = 0;
    else if (a3 < jspb.BinaryConstants.FLOAT64_MIN) {
        var c14 = a3 / Math.pow(2, -1074);
        a3 = c14 / jspb.BinaryConstants.TWO_TO_32;
        jspb.utils.split64High = (b << 31 | a3) >>> 0;
        jspb.utils.split64Low = c14 >>> 0;
    } else {
        c14 = a3;
        var d = 0;
        if (2 <= c14) for(; 2 <= c14 && 1023 > d;)d++, c14 /= 2;
        else for(; 1 > c14 && -1022 < d;)c14 *= 2, d--;
        c14 = a3 * Math.pow(2, -d);
        a3 = c14 * jspb.BinaryConstants.TWO_TO_20 & 1048575;
        c14 = c14 * jspb.BinaryConstants.TWO_TO_52 >>> 0;
        jspb.utils.split64High = (b << 31 | d + 1023 << 20 | a3) >>> 0;
        jspb.utils.split64Low = c14;
    }
};
jspb.utils.splitHash64 = function(a3) {
    var b = a3.charCodeAt(0), c15 = a3.charCodeAt(1), d = a3.charCodeAt(2), e = a3.charCodeAt(3), f = a3.charCodeAt(4), g = a3.charCodeAt(5), h = a3.charCodeAt(6);
    a3 = a3.charCodeAt(7);
    jspb.utils.split64Low = b + (c15 << 8) + (d << 16) + (e << 24) >>> 0;
    jspb.utils.split64High = f + (g << 8) + (h << 16) + (a3 << 24) >>> 0;
};
jspb.utils.joinUint64 = function(a3, b) {
    return b * jspb.BinaryConstants.TWO_TO_32 + (a3 >>> 0);
};
jspb.utils.joinInt64 = function(a3, b) {
    var c15 = b & 2147483648;
    c15 && (a3 = ~a3 + 1 >>> 0, b = ~b >>> 0, 0 == a3 && (b = b + 1 >>> 0));
    a3 = jspb.utils.joinUint64(a3, b);
    return c15 ? -a3 : a3;
};
jspb.utils.toZigzag64 = function(a3, b, c15) {
    var d = b >> 31;
    return c15(a3 << 1 ^ d, (b << 1 | a3 >>> 31) ^ d);
};
jspb.utils.joinZigzag64 = function(a3, b) {
    return jspb.utils.fromZigzag64(a3, b, jspb.utils.joinInt64);
};
jspb.utils.fromZigzag64 = function(a3, b, c15) {
    var d = -(a3 & 1);
    return c15((a3 >>> 1 | b << 31) ^ d, b >>> 1 ^ d);
};
jspb.utils.joinFloat32 = function(a3, b) {
    b = 2 * (a3 >> 31) + 1;
    var c15 = a3 >>> 23 & 255;
    a3 &= 8388607;
    return 255 == c15 ? a3 ? NaN : Infinity * b : 0 == c15 ? b * Math.pow(2, -149) * a3 : b * Math.pow(2, c15 - 150) * (a3 + Math.pow(2, 23));
};
jspb.utils.joinFloat64 = function(a3, b) {
    var c15 = 2 * (b >> 31) + 1, d = b >>> 20 & 2047;
    a3 = jspb.BinaryConstants.TWO_TO_32 * (b & 1048575) + a3;
    return 2047 == d ? a3 ? NaN : Infinity * c15 : 0 == d ? c15 * Math.pow(2, -1074) * a3 : c15 * Math.pow(2, d - 1075) * (a3 + jspb.BinaryConstants.TWO_TO_52);
};
jspb.utils.joinHash64 = function(a3, b) {
    return String.fromCharCode(a3 >>> 0 & 255, a3 >>> 8 & 255, a3 >>> 16 & 255, a3 >>> 24 & 255, b >>> 0 & 255, b >>> 8 & 255, b >>> 16 & 255, b >>> 24 & 255);
};
jspb.utils.DIGITS = "0123456789abcdef".split("");
jspb.utils.ZERO_CHAR_CODE_ = 48;
jspb.utils.A_CHAR_CODE_ = 97;
jspb.utils.joinUnsignedDecimalString = function(a3, b) {
    function c15(a4, b1) {
        a4 = a4 ? String(a4) : "";
        return b1 ? "0000000".slice(a4.length) + a4 : a4;
    }
    if (2097151 >= b) return "" + jspb.utils.joinUint64(a3, b);
    var d = (a3 >>> 24 | b << 8) >>> 0 & 16777215;
    b = b >> 16 & 65535;
    a3 = (a3 & 16777215) + 6777216 * d + 6710656 * b;
    d += 8147497 * b;
    b *= 2;
    10000000 <= a3 && (d += Math.floor(a3 / 10000000), a3 %= 10000000);
    10000000 <= d && (b += Math.floor(d / 10000000), d %= 10000000);
    return c15(b, 0) + c15(d, b) + c15(a3, 1);
};
jspb.utils.joinSignedDecimalString = function(a3, b) {
    var c15 = b & 2147483648;
    c15 && (a3 = ~a3 + 1 >>> 0, b = ~b + (0 == a3 ? 1 : 0) >>> 0);
    a3 = jspb.utils.joinUnsignedDecimalString(a3, b);
    return c15 ? "-" + a3 : a3;
};
jspb.utils.hash64ToDecimalString = function(a3, b) {
    jspb.utils.splitHash64(a3);
    a3 = jspb.utils.split64Low;
    var c15 = jspb.utils.split64High;
    return b ? jspb.utils.joinSignedDecimalString(a3, c15) : jspb.utils.joinUnsignedDecimalString(a3, c15);
};
jspb.utils.hash64ArrayToDecimalStrings = function(a3, b) {
    for(var c15 = Array(a3.length), d = 0; d < a3.length; d++)c15[d] = jspb.utils.hash64ToDecimalString(a3[d], b);
    return c15;
};
jspb.utils.decimalStringToHash64 = function(a3) {
    function b(a4, b1) {
        for(var c15 = 0; 8 > c15 && (1 !== a4 || 0 < b1); c15++)b1 = a4 * e[c15] + b1, e[c15] = b1 & 255, b1 >>>= 8;
    }
    function c15() {
        for(var a4 = 0; 8 > a4; a4++)e[a4] = ~e[a4] & 255;
    }
    goog.asserts.assert(0 < a3.length);
    var d = false;
    "-" === a3[0] && (d = true, a3 = a3.slice(1));
    for(var e = [
        0,
        0,
        0,
        0,
        0,
        0,
        0,
        0
    ], f = 0; f < a3.length; f++)b(10, a3.charCodeAt(f) - jspb.utils.ZERO_CHAR_CODE_);
    d && (c15(), b(1, 1));
    return goog.crypt.byteArrayToString(e);
};
jspb.utils.splitDecimalString = function(a3) {
    jspb.utils.splitHash64(jspb.utils.decimalStringToHash64(a3));
};
jspb.utils.toHexDigit_ = function(a3) {
    return String.fromCharCode(10 > a3 ? jspb.utils.ZERO_CHAR_CODE_ + a3 : jspb.utils.A_CHAR_CODE_ - 10 + a3);
};
jspb.utils.fromHexCharCode_ = function(a3) {
    return a3 >= jspb.utils.A_CHAR_CODE_ ? a3 - jspb.utils.A_CHAR_CODE_ + 10 : a3 - jspb.utils.ZERO_CHAR_CODE_;
};
jspb.utils.hash64ToHexString = function(a3) {
    var b = Array(18);
    b[0] = "0";
    b[1] = "x";
    for(var c15 = 0; 8 > c15; c15++){
        var d = a3.charCodeAt(7 - c15);
        b[2 * c15 + 2] = jspb.utils.toHexDigit_(d >> 4);
        b[2 * c15 + 3] = jspb.utils.toHexDigit_(d & 15);
    }
    return b.join("");
};
jspb.utils.hexStringToHash64 = function(a3) {
    a3 = a3.toLowerCase();
    goog.asserts.assert(18 == a3.length);
    goog.asserts.assert("0" == a3[0]);
    goog.asserts.assert("x" == a3[1]);
    for(var b = "", c15 = 0; 8 > c15; c15++){
        var d = jspb.utils.fromHexCharCode_(a3.charCodeAt(2 * c15 + 2)), e = jspb.utils.fromHexCharCode_(a3.charCodeAt(2 * c15 + 3));
        b = String.fromCharCode(16 * d + e) + b;
    }
    return b;
};
jspb.utils.hash64ToNumber = function(a3, b) {
    jspb.utils.splitHash64(a3);
    a3 = jspb.utils.split64Low;
    var c15 = jspb.utils.split64High;
    return b ? jspb.utils.joinInt64(a3, c15) : jspb.utils.joinUint64(a3, c15);
};
jspb.utils.numberToHash64 = function(a3) {
    jspb.utils.splitInt64(a3);
    return jspb.utils.joinHash64(jspb.utils.split64Low, jspb.utils.split64High);
};
jspb.utils.countVarints = function(a3, b, c15) {
    for(var d = 0, e = b; e < c15; e++)d += a3[e] >> 7;
    return c15 - b - d;
};
jspb.utils.countVarintFields = function(a3, b, c15, d) {
    var e = 0;
    d = 8 * d + jspb.BinaryConstants.WireType.VARINT;
    if (128 > d) for(; b < c15 && a3[b++] == d;)for(e++;;){
        var f = a3[b++];
        if (0 == (f & 128)) break;
    }
    else for(; b < c15;){
        for(f = d; 128 < f;){
            if (a3[b] != (f & 127 | 128)) return e;
            b++;
            f >>= 7;
        }
        if (a3[b++] != f) break;
        for(e++; f = a3[b++], 0 != (f & 128););
    }
    return e;
};
jspb.utils.countFixedFields_ = function(a3, b, c15, d, e) {
    var f = 0;
    if (128 > d) for(; b < c15 && a3[b++] == d;)f++, b += e;
    else for(; b < c15;){
        for(var g = d; 128 < g;){
            if (a3[b++] != (g & 127 | 128)) return f;
            g >>= 7;
        }
        if (a3[b++] != g) break;
        f++;
        b += e;
    }
    return f;
};
jspb.utils.countFixed32Fields = function(a3, b, c15, d) {
    return jspb.utils.countFixedFields_(a3, b, c15, 8 * d + jspb.BinaryConstants.WireType.FIXED32, 4);
};
jspb.utils.countFixed64Fields = function(a3, b, c15, d) {
    return jspb.utils.countFixedFields_(a3, b, c15, 8 * d + jspb.BinaryConstants.WireType.FIXED64, 8);
};
jspb.utils.countDelimitedFields = function(a3, b, c15, d) {
    var e = 0;
    for(d = 8 * d + jspb.BinaryConstants.WireType.DELIMITED; b < c15;){
        for(var f = d; 128 < f;){
            if (a3[b++] != (f & 127 | 128)) return e;
            f >>= 7;
        }
        if (a3[b++] != f) break;
        e++;
        for(var g = 0, h = 1; f = a3[b++], g += (f & 127) * h, h *= 128, 0 != (f & 128););
        b += g;
    }
    return e;
};
jspb.utils.debugBytesToTextFormat = function(a3) {
    var b = '"';
    if (a3) {
        a3 = jspb.utils.byteSourceToUint8Array(a3);
        for(var c15 = 0; c15 < a3.length; c15++)b += "\\x", 16 > a3[c15] && (b += "0"), b += a3[c15].toString(16);
    }
    return b + '"';
};
jspb.utils.debugScalarToTextFormat = function(a3) {
    return "string" === typeof a3 ? goog.string.quote(a3) : a3.toString();
};
jspb.utils.stringToByteArray = function(a3) {
    for(var b = new Uint8Array(a3.length), c16 = 0; c16 < a3.length; c16++){
        var d = a3.charCodeAt(c16);
        if (255 < d) throw Error("Conversion error: string contains codepoint outside of byte range");
        b[c16] = d;
    }
    return b;
};
jspb.utils.byteSourceToUint8Array = function(a3) {
    if (a3.constructor === Uint8Array) return a3;
    if (a3.constructor === ArrayBuffer || "undefined" != typeof Buffer && a3.constructor === Buffer || a3.constructor === Array) return new Uint8Array(a3);
    if (a3.constructor === String) return goog.crypt.base64.decodeStringToUint8Array(a3);
    goog.asserts.fail("Type not convertible to Uint8Array.");
    return new Uint8Array(0);
};
jspb.BinaryDecoder = function(a3, b, c16) {
    this.bytes_ = null;
    this.cursor_ = this.end_ = this.start_ = 0;
    this.error_ = false;
    a3 && this.setBlock(a3, b, c16);
};
jspb.BinaryDecoder.instanceCache_ = [];
jspb.BinaryDecoder.alloc = function(a3, b, c16) {
    if (jspb.BinaryDecoder.instanceCache_.length) {
        var d = jspb.BinaryDecoder.instanceCache_.pop();
        a3 && d.setBlock(a3, b, c16);
        return d;
    }
    return new jspb.BinaryDecoder(a3, b, c16);
};
jspb.BinaryDecoder.prototype.free = function() {
    this.clear();
    100 > jspb.BinaryDecoder.instanceCache_.length && jspb.BinaryDecoder.instanceCache_.push(this);
};
jspb.BinaryDecoder.prototype.clone = function() {
    return jspb.BinaryDecoder.alloc(this.bytes_, this.start_, this.end_ - this.start_);
};
jspb.BinaryDecoder.prototype.clear = function() {
    this.bytes_ = null;
    this.cursor_ = this.end_ = this.start_ = 0;
    this.error_ = false;
};
jspb.BinaryDecoder.prototype.getBuffer = function() {
    return this.bytes_;
};
jspb.BinaryDecoder.prototype.setBlock = function(a3, b, c16) {
    this.bytes_ = jspb.utils.byteSourceToUint8Array(a3);
    this.start_ = (void 0) !== b ? b : 0;
    this.end_ = (void 0) !== c16 ? this.start_ + c16 : this.bytes_.length;
    this.cursor_ = this.start_;
};
jspb.BinaryDecoder.prototype.getEnd = function() {
    return this.end_;
};
jspb.BinaryDecoder.prototype.setEnd = function(a3) {
    this.end_ = a3;
};
jspb.BinaryDecoder.prototype.reset = function() {
    this.cursor_ = this.start_;
};
jspb.BinaryDecoder.prototype.getCursor = function() {
    return this.cursor_;
};
jspb.BinaryDecoder.prototype.setCursor = function(a3) {
    this.cursor_ = a3;
};
jspb.BinaryDecoder.prototype.advance = function(a3) {
    this.cursor_ += a3;
    goog.asserts.assert(this.cursor_ <= this.end_);
};
jspb.BinaryDecoder.prototype.atEnd = function() {
    return this.cursor_ == this.end_;
};
jspb.BinaryDecoder.prototype.pastEnd = function() {
    return this.cursor_ > this.end_;
};
jspb.BinaryDecoder.prototype.getError = function() {
    return this.error_ || 0 > this.cursor_ || this.cursor_ > this.end_;
};
jspb.BinaryDecoder.prototype.readSplitVarint64 = function(a3) {
    for(var b = 128, c16 = 0, d = 0, e = 0; 4 > e && 128 <= b; e++)b = this.bytes_[this.cursor_++], c16 |= (b & 127) << 7 * e;
    128 <= b && (b = this.bytes_[this.cursor_++], c16 |= (b & 127) << 28, d |= (b & 127) >> 4);
    if (128 <= b) for(e = 0; 5 > e && 128 <= b; e++)b = this.bytes_[this.cursor_++], d |= (b & 127) << 7 * e + 3;
    if (128 > b) return a3(c16 >>> 0, d >>> 0);
    goog.asserts.fail("Failed to read varint, encoding is invalid.");
    this.error_ = true;
};
jspb.BinaryDecoder.prototype.readSplitZigzagVarint64 = function(a3) {
    return this.readSplitVarint64(function(b, c16) {
        return jspb.utils.fromZigzag64(b, c16, a3);
    });
};
jspb.BinaryDecoder.prototype.readSplitFixed64 = function(a3) {
    var b = this.bytes_, c16 = this.cursor_;
    this.cursor_ += 8;
    for(var d = 0, e = 0, f = c16 + 7; f >= c16; f--)d = d << 8 | b[f], e = e << 8 | b[f + 4];
    return a3(d, e);
};
jspb.BinaryDecoder.prototype.skipVarint = function() {
    for(; this.bytes_[this.cursor_] & 128;)this.cursor_++;
    this.cursor_++;
};
jspb.BinaryDecoder.prototype.unskipVarint = function(a3) {
    for(; 128 < a3;)this.cursor_--, a3 >>>= 7;
    this.cursor_--;
};
jspb.BinaryDecoder.prototype.readUnsignedVarint32 = function() {
    var a3 = this.bytes_;
    var b = a3[this.cursor_ + 0];
    var c16 = b & 127;
    if (128 > b) return this.cursor_ += 1, goog.asserts.assert(this.cursor_ <= this.end_), c16;
    b = a3[this.cursor_ + 1];
    c16 |= (b & 127) << 7;
    if (128 > b) return this.cursor_ += 2, goog.asserts.assert(this.cursor_ <= this.end_), c16;
    b = a3[this.cursor_ + 2];
    c16 |= (b & 127) << 14;
    if (128 > b) return this.cursor_ += 3, goog.asserts.assert(this.cursor_ <= this.end_), c16;
    b = a3[this.cursor_ + 3];
    c16 |= (b & 127) << 21;
    if (128 > b) return this.cursor_ += 4, goog.asserts.assert(this.cursor_ <= this.end_), c16;
    b = a3[this.cursor_ + 4];
    c16 |= (b & 15) << 28;
    if (128 > b) return this.cursor_ += 5, goog.asserts.assert(this.cursor_ <= this.end_), c16 >>> 0;
    this.cursor_ += 5;
    128 <= a3[this.cursor_++] && 128 <= a3[this.cursor_++] && 128 <= a3[this.cursor_++] && 128 <= a3[this.cursor_++] && 128 <= a3[this.cursor_++] && goog.asserts.assert(false);
    goog.asserts.assert(this.cursor_ <= this.end_);
    return c16;
};
jspb.BinaryDecoder.prototype.readSignedVarint32 = jspb.BinaryDecoder.prototype.readUnsignedVarint32;
jspb.BinaryDecoder.prototype.readUnsignedVarint32String = function() {
    return this.readUnsignedVarint32().toString();
};
jspb.BinaryDecoder.prototype.readSignedVarint32String = function() {
    return this.readSignedVarint32().toString();
};
jspb.BinaryDecoder.prototype.readZigzagVarint32 = function() {
    var a3 = this.readUnsignedVarint32();
    return a3 >>> 1 ^ -(a3 & 1);
};
jspb.BinaryDecoder.prototype.readUnsignedVarint64 = function() {
    return this.readSplitVarint64(jspb.utils.joinUint64);
};
jspb.BinaryDecoder.prototype.readUnsignedVarint64String = function() {
    return this.readSplitVarint64(jspb.utils.joinUnsignedDecimalString);
};
jspb.BinaryDecoder.prototype.readSignedVarint64 = function() {
    return this.readSplitVarint64(jspb.utils.joinInt64);
};
jspb.BinaryDecoder.prototype.readSignedVarint64String = function() {
    return this.readSplitVarint64(jspb.utils.joinSignedDecimalString);
};
jspb.BinaryDecoder.prototype.readZigzagVarint64 = function() {
    return this.readSplitVarint64(jspb.utils.joinZigzag64);
};
jspb.BinaryDecoder.prototype.readZigzagVarintHash64 = function() {
    return this.readSplitZigzagVarint64(jspb.utils.joinHash64);
};
jspb.BinaryDecoder.prototype.readZigzagVarint64String = function() {
    return this.readSplitZigzagVarint64(jspb.utils.joinSignedDecimalString);
};
jspb.BinaryDecoder.prototype.readUint8 = function() {
    var a3 = this.bytes_[this.cursor_ + 0];
    this.cursor_ += 1;
    goog.asserts.assert(this.cursor_ <= this.end_);
    return a3;
};
jspb.BinaryDecoder.prototype.readUint16 = function() {
    var a3 = this.bytes_[this.cursor_ + 0], b = this.bytes_[this.cursor_ + 1];
    this.cursor_ += 2;
    goog.asserts.assert(this.cursor_ <= this.end_);
    return a3 << 0 | b << 8;
};
jspb.BinaryDecoder.prototype.readUint32 = function() {
    var a3 = this.bytes_[this.cursor_ + 0], b = this.bytes_[this.cursor_ + 1], c16 = this.bytes_[this.cursor_ + 2], d = this.bytes_[this.cursor_ + 3];
    this.cursor_ += 4;
    goog.asserts.assert(this.cursor_ <= this.end_);
    return (a3 << 0 | b << 8 | c16 << 16 | d << 24) >>> 0;
};
jspb.BinaryDecoder.prototype.readUint64 = function() {
    var a3 = this.readUint32(), b = this.readUint32();
    return jspb.utils.joinUint64(a3, b);
};
jspb.BinaryDecoder.prototype.readUint64String = function() {
    var a3 = this.readUint32(), b = this.readUint32();
    return jspb.utils.joinUnsignedDecimalString(a3, b);
};
jspb.BinaryDecoder.prototype.readInt8 = function() {
    var a3 = this.bytes_[this.cursor_ + 0];
    this.cursor_ += 1;
    goog.asserts.assert(this.cursor_ <= this.end_);
    return a3 << 24 >> 24;
};
jspb.BinaryDecoder.prototype.readInt16 = function() {
    var a3 = this.bytes_[this.cursor_ + 0], b = this.bytes_[this.cursor_ + 1];
    this.cursor_ += 2;
    goog.asserts.assert(this.cursor_ <= this.end_);
    return (a3 << 0 | b << 8) << 16 >> 16;
};
jspb.BinaryDecoder.prototype.readInt32 = function() {
    var a3 = this.bytes_[this.cursor_ + 0], b = this.bytes_[this.cursor_ + 1], c16 = this.bytes_[this.cursor_ + 2], d = this.bytes_[this.cursor_ + 3];
    this.cursor_ += 4;
    goog.asserts.assert(this.cursor_ <= this.end_);
    return a3 << 0 | b << 8 | c16 << 16 | d << 24;
};
jspb.BinaryDecoder.prototype.readInt64 = function() {
    var a3 = this.readUint32(), b = this.readUint32();
    return jspb.utils.joinInt64(a3, b);
};
jspb.BinaryDecoder.prototype.readInt64String = function() {
    var a3 = this.readUint32(), b = this.readUint32();
    return jspb.utils.joinSignedDecimalString(a3, b);
};
jspb.BinaryDecoder.prototype.readFloat = function() {
    var a3 = this.readUint32();
    return jspb.utils.joinFloat32(a3, 0);
};
jspb.BinaryDecoder.prototype.readDouble = function() {
    var a3 = this.readUint32(), b = this.readUint32();
    return jspb.utils.joinFloat64(a3, b);
};
jspb.BinaryDecoder.prototype.readBool = function() {
    return !!this.bytes_[this.cursor_++];
};
jspb.BinaryDecoder.prototype.readEnum = function() {
    return this.readSignedVarint32();
};
jspb.BinaryDecoder.prototype.readString = function(a3) {
    var b = this.bytes_, c16 = this.cursor_;
    a3 = c16 + a3;
    for(var d = [], e = ""; c16 < a3;){
        var f = b[c16++];
        if (128 > f) d.push(f);
        else if (192 > f) continue;
        else if (224 > f) {
            var g = b[c16++];
            d.push((f & 31) << 6 | g & 63);
        } else if (240 > f) {
            g = b[c16++];
            var h = b[c16++];
            d.push((f & 15) << 12 | (g & 63) << 6 | h & 63);
        } else if (248 > f) {
            g = b[c16++];
            h = b[c16++];
            var k = b[c16++];
            f = (f & 7) << 18 | (g & 63) << 12 | (h & 63) << 6 | k & 63;
            f -= 65536;
            d.push((f >> 10 & 1023) + 55296, (f & 1023) + 56320);
        }
        8192 <= d.length && (e += String.fromCharCode.apply(null, d), d.length = 0);
    }
    e += goog.crypt.byteArrayToString(d);
    this.cursor_ = c16;
    return e;
};
jspb.BinaryDecoder.prototype.readStringWithLength = function() {
    var a3 = this.readUnsignedVarint32();
    return this.readString(a3);
};
jspb.BinaryDecoder.prototype.readBytes = function(a3) {
    if (0 > a3 || this.cursor_ + a3 > this.bytes_.length) return this.error_ = true, goog.asserts.fail("Invalid byte length!"), new Uint8Array(0);
    var b = this.bytes_.subarray(this.cursor_, this.cursor_ + a3);
    this.cursor_ += a3;
    goog.asserts.assert(this.cursor_ <= this.end_);
    return b;
};
jspb.BinaryDecoder.prototype.readVarintHash64 = function() {
    return this.readSplitVarint64(jspb.utils.joinHash64);
};
jspb.BinaryDecoder.prototype.readFixedHash64 = function() {
    var a3 = this.bytes_, b = this.cursor_, c16 = a3[b + 0], d = a3[b + 1], e = a3[b + 2], f = a3[b + 3], g = a3[b + 4], h = a3[b + 5], k = a3[b + 6];
    a3 = a3[b + 7];
    this.cursor_ += 8;
    return String.fromCharCode(c16, d, e, f, g, h, k, a3);
};
jspb.BinaryReader = function(a3, b, c16) {
    this.decoder_ = jspb.BinaryDecoder.alloc(a3, b, c16);
    this.fieldCursor_ = this.decoder_.getCursor();
    this.nextField_ = jspb.BinaryConstants.INVALID_FIELD_NUMBER;
    this.nextWireType_ = jspb.BinaryConstants.WireType.INVALID;
    this.error_ = false;
    this.readCallbacks_ = null;
};
jspb.BinaryReader.instanceCache_ = [];
jspb.BinaryReader.alloc = function(a3, b, c16) {
    if (jspb.BinaryReader.instanceCache_.length) {
        var d = jspb.BinaryReader.instanceCache_.pop();
        a3 && d.decoder_.setBlock(a3, b, c16);
        return d;
    }
    return new jspb.BinaryReader(a3, b, c16);
};
jspb.BinaryReader.prototype.alloc = jspb.BinaryReader.alloc;
jspb.BinaryReader.prototype.free = function() {
    this.decoder_.clear();
    this.nextField_ = jspb.BinaryConstants.INVALID_FIELD_NUMBER;
    this.nextWireType_ = jspb.BinaryConstants.WireType.INVALID;
    this.error_ = false;
    this.readCallbacks_ = null;
    100 > jspb.BinaryReader.instanceCache_.length && jspb.BinaryReader.instanceCache_.push(this);
};
jspb.BinaryReader.prototype.getFieldCursor = function() {
    return this.fieldCursor_;
};
jspb.BinaryReader.prototype.getCursor = function() {
    return this.decoder_.getCursor();
};
jspb.BinaryReader.prototype.getBuffer = function() {
    return this.decoder_.getBuffer();
};
jspb.BinaryReader.prototype.getFieldNumber = function() {
    return this.nextField_;
};
jspb.BinaryReader.prototype.getWireType = function() {
    return this.nextWireType_;
};
jspb.BinaryReader.prototype.isDelimited = function() {
    return this.nextWireType_ == jspb.BinaryConstants.WireType.DELIMITED;
};
jspb.BinaryReader.prototype.isEndGroup = function() {
    return this.nextWireType_ == jspb.BinaryConstants.WireType.END_GROUP;
};
jspb.BinaryReader.prototype.getError = function() {
    return this.error_ || this.decoder_.getError();
};
jspb.BinaryReader.prototype.setBlock = function(a3, b, c16) {
    this.decoder_.setBlock(a3, b, c16);
    this.nextField_ = jspb.BinaryConstants.INVALID_FIELD_NUMBER;
    this.nextWireType_ = jspb.BinaryConstants.WireType.INVALID;
};
jspb.BinaryReader.prototype.reset = function() {
    this.decoder_.reset();
    this.nextField_ = jspb.BinaryConstants.INVALID_FIELD_NUMBER;
    this.nextWireType_ = jspb.BinaryConstants.WireType.INVALID;
};
jspb.BinaryReader.prototype.advance = function(a3) {
    this.decoder_.advance(a3);
};
jspb.BinaryReader.prototype.nextField = function() {
    if (this.decoder_.atEnd()) return false;
    if (this.getError()) return goog.asserts.fail("Decoder hit an error"), false;
    this.fieldCursor_ = this.decoder_.getCursor();
    var a3 = this.decoder_.readUnsignedVarint32(), b = a3 >>> 3;
    a3 &= 7;
    if (a3 != jspb.BinaryConstants.WireType.VARINT && a3 != jspb.BinaryConstants.WireType.FIXED32 && a3 != jspb.BinaryConstants.WireType.FIXED64 && a3 != jspb.BinaryConstants.WireType.DELIMITED && a3 != jspb.BinaryConstants.WireType.START_GROUP && a3 != jspb.BinaryConstants.WireType.END_GROUP) return goog.asserts.fail("Invalid wire type: %s (at position %s)", a3, this.fieldCursor_), this.error_ = true, false;
    this.nextField_ = b;
    this.nextWireType_ = a3;
    return true;
};
jspb.BinaryReader.prototype.unskipHeader = function() {
    this.decoder_.unskipVarint(this.nextField_ << 3 | this.nextWireType_);
};
jspb.BinaryReader.prototype.skipMatchingFields = function() {
    var a3 = this.nextField_;
    for(this.unskipHeader(); this.nextField() && this.getFieldNumber() == a3;)this.skipField();
    this.decoder_.atEnd() || this.unskipHeader();
};
jspb.BinaryReader.prototype.skipVarintField = function() {
    this.nextWireType_ != jspb.BinaryConstants.WireType.VARINT ? (goog.asserts.fail("Invalid wire type for skipVarintField"), this.skipField()) : this.decoder_.skipVarint();
};
jspb.BinaryReader.prototype.skipDelimitedField = function() {
    if (this.nextWireType_ != jspb.BinaryConstants.WireType.DELIMITED) goog.asserts.fail("Invalid wire type for skipDelimitedField"), this.skipField();
    else {
        var a3 = this.decoder_.readUnsignedVarint32();
        this.decoder_.advance(a3);
    }
};
jspb.BinaryReader.prototype.skipFixed32Field = function() {
    this.nextWireType_ != jspb.BinaryConstants.WireType.FIXED32 ? (goog.asserts.fail("Invalid wire type for skipFixed32Field"), this.skipField()) : this.decoder_.advance(4);
};
jspb.BinaryReader.prototype.skipFixed64Field = function() {
    this.nextWireType_ != jspb.BinaryConstants.WireType.FIXED64 ? (goog.asserts.fail("Invalid wire type for skipFixed64Field"), this.skipField()) : this.decoder_.advance(8);
};
jspb.BinaryReader.prototype.skipGroup = function() {
    var a4 = this.nextField_;
    do {
        if (!this.nextField()) {
            goog.asserts.fail("Unmatched start-group tag: stream EOF");
            this.error_ = true;
            break;
        }
        if (this.nextWireType_ == jspb.BinaryConstants.WireType.END_GROUP) {
            this.nextField_ != a4 && (goog.asserts.fail("Unmatched end-group tag"), this.error_ = true);
            break;
        }
        this.skipField();
    }while (1)
};
jspb.BinaryReader.prototype.skipField = function() {
    switch(this.nextWireType_){
        case jspb.BinaryConstants.WireType.VARINT:
            this.skipVarintField();
            break;
        case jspb.BinaryConstants.WireType.FIXED64:
            this.skipFixed64Field();
            break;
        case jspb.BinaryConstants.WireType.DELIMITED:
            this.skipDelimitedField();
            break;
        case jspb.BinaryConstants.WireType.FIXED32:
            this.skipFixed32Field();
            break;
        case jspb.BinaryConstants.WireType.START_GROUP:
            this.skipGroup();
            break;
        default:
            goog.asserts.fail("Invalid wire encoding for field.");
    }
};
jspb.BinaryReader.prototype.registerReadCallback = function(a4, b) {
    null === this.readCallbacks_ && (this.readCallbacks_ = {
    });
    goog.asserts.assert(!this.readCallbacks_[a4]);
    this.readCallbacks_[a4] = b;
};
jspb.BinaryReader.prototype.runReadCallback = function(a4) {
    goog.asserts.assert(null !== this.readCallbacks_);
    a4 = this.readCallbacks_[a4];
    goog.asserts.assert(a4);
    return a4(this);
};
jspb.BinaryReader.prototype.readAny = function(a4) {
    this.nextWireType_ = jspb.BinaryConstants.FieldTypeToWireType(a4);
    var b = jspb.BinaryConstants.FieldType;
    switch(a4){
        case b.DOUBLE:
            return this.readDouble();
        case b.FLOAT:
            return this.readFloat();
        case b.INT64:
            return this.readInt64();
        case b.UINT64:
            return this.readUint64();
        case b.INT32:
            return this.readInt32();
        case b.FIXED64:
            return this.readFixed64();
        case b.FIXED32:
            return this.readFixed32();
        case b.BOOL:
            return this.readBool();
        case b.STRING:
            return this.readString();
        case b.GROUP:
            goog.asserts.fail("Group field type not supported in readAny()");
        case b.MESSAGE:
            goog.asserts.fail("Message field type not supported in readAny()");
        case b.BYTES:
            return this.readBytes();
        case b.UINT32:
            return this.readUint32();
        case b.ENUM:
            return this.readEnum();
        case b.SFIXED32:
            return this.readSfixed32();
        case b.SFIXED64:
            return this.readSfixed64();
        case b.SINT32:
            return this.readSint32();
        case b.SINT64:
            return this.readSint64();
        case b.FHASH64:
            return this.readFixedHash64();
        case b.VHASH64:
            return this.readVarintHash64();
        default:
            goog.asserts.fail("Invalid field type in readAny()");
    }
    return 0;
};
jspb.BinaryReader.prototype.readMessage = function(a4, b) {
    goog.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.DELIMITED);
    var c16 = this.decoder_.getEnd(), d = this.decoder_.readUnsignedVarint32();
    d = this.decoder_.getCursor() + d;
    this.decoder_.setEnd(d);
    b(a4, this);
    this.decoder_.setCursor(d);
    this.decoder_.setEnd(c16);
};
jspb.BinaryReader.prototype.readGroup = function(a4, b, c16) {
    goog.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.START_GROUP);
    goog.asserts.assert(this.nextField_ == a4);
    c16(b, this);
    this.error_ || this.nextWireType_ == jspb.BinaryConstants.WireType.END_GROUP || (goog.asserts.fail("Group submessage did not end with an END_GROUP tag"), this.error_ = true);
};
jspb.BinaryReader.prototype.getFieldDecoder = function() {
    goog.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.DELIMITED);
    var a4 = this.decoder_.readUnsignedVarint32(), b = this.decoder_.getCursor(), c16 = b + a4;
    a4 = jspb.BinaryDecoder.alloc(this.decoder_.getBuffer(), b, a4);
    this.decoder_.setCursor(c16);
    return a4;
};
jspb.BinaryReader.prototype.readInt32 = function() {
    goog.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.VARINT);
    return this.decoder_.readSignedVarint32();
};
jspb.BinaryReader.prototype.readInt32String = function() {
    goog.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.VARINT);
    return this.decoder_.readSignedVarint32String();
};
jspb.BinaryReader.prototype.readInt64 = function() {
    goog.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.VARINT);
    return this.decoder_.readSignedVarint64();
};
jspb.BinaryReader.prototype.readInt64String = function() {
    goog.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.VARINT);
    return this.decoder_.readSignedVarint64String();
};
jspb.BinaryReader.prototype.readUint32 = function() {
    goog.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.VARINT);
    return this.decoder_.readUnsignedVarint32();
};
jspb.BinaryReader.prototype.readUint32String = function() {
    goog.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.VARINT);
    return this.decoder_.readUnsignedVarint32String();
};
jspb.BinaryReader.prototype.readUint64 = function() {
    goog.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.VARINT);
    return this.decoder_.readUnsignedVarint64();
};
jspb.BinaryReader.prototype.readUint64String = function() {
    goog.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.VARINT);
    return this.decoder_.readUnsignedVarint64String();
};
jspb.BinaryReader.prototype.readSint32 = function() {
    goog.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.VARINT);
    return this.decoder_.readZigzagVarint32();
};
jspb.BinaryReader.prototype.readSint64 = function() {
    goog.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.VARINT);
    return this.decoder_.readZigzagVarint64();
};
jspb.BinaryReader.prototype.readSint64String = function() {
    goog.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.VARINT);
    return this.decoder_.readZigzagVarint64String();
};
jspb.BinaryReader.prototype.readFixed32 = function() {
    goog.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.FIXED32);
    return this.decoder_.readUint32();
};
jspb.BinaryReader.prototype.readFixed64 = function() {
    goog.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.FIXED64);
    return this.decoder_.readUint64();
};
jspb.BinaryReader.prototype.readFixed64String = function() {
    goog.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.FIXED64);
    return this.decoder_.readUint64String();
};
jspb.BinaryReader.prototype.readSfixed32 = function() {
    goog.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.FIXED32);
    return this.decoder_.readInt32();
};
jspb.BinaryReader.prototype.readSfixed32String = function() {
    goog.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.FIXED32);
    return this.decoder_.readInt32().toString();
};
jspb.BinaryReader.prototype.readSfixed64 = function() {
    goog.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.FIXED64);
    return this.decoder_.readInt64();
};
jspb.BinaryReader.prototype.readSfixed64String = function() {
    goog.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.FIXED64);
    return this.decoder_.readInt64String();
};
jspb.BinaryReader.prototype.readFloat = function() {
    goog.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.FIXED32);
    return this.decoder_.readFloat();
};
jspb.BinaryReader.prototype.readDouble = function() {
    goog.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.FIXED64);
    return this.decoder_.readDouble();
};
jspb.BinaryReader.prototype.readBool = function() {
    goog.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.VARINT);
    return !!this.decoder_.readUnsignedVarint32();
};
jspb.BinaryReader.prototype.readEnum = function() {
    goog.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.VARINT);
    return this.decoder_.readSignedVarint64();
};
jspb.BinaryReader.prototype.readString = function() {
    goog.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.DELIMITED);
    var a4 = this.decoder_.readUnsignedVarint32();
    return this.decoder_.readString(a4);
};
jspb.BinaryReader.prototype.readBytes = function() {
    goog.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.DELIMITED);
    var a4 = this.decoder_.readUnsignedVarint32();
    return this.decoder_.readBytes(a4);
};
jspb.BinaryReader.prototype.readVarintHash64 = function() {
    goog.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.VARINT);
    return this.decoder_.readVarintHash64();
};
jspb.BinaryReader.prototype.readSintHash64 = function() {
    goog.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.VARINT);
    return this.decoder_.readZigzagVarintHash64();
};
jspb.BinaryReader.prototype.readSplitVarint64 = function(a4) {
    goog.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.VARINT);
    return this.decoder_.readSplitVarint64(a4);
};
jspb.BinaryReader.prototype.readSplitZigzagVarint64 = function(a4) {
    goog.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.VARINT);
    return this.decoder_.readSplitVarint64(function(b, c16) {
        return jspb.utils.fromZigzag64(b, c16, a4);
    });
};
jspb.BinaryReader.prototype.readFixedHash64 = function() {
    goog.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.FIXED64);
    return this.decoder_.readFixedHash64();
};
jspb.BinaryReader.prototype.readSplitFixed64 = function(a4) {
    goog.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.FIXED64);
    return this.decoder_.readSplitFixed64(a4);
};
jspb.BinaryReader.prototype.readPackedField_ = function(a4) {
    goog.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.DELIMITED);
    var b = this.decoder_.readUnsignedVarint32();
    b = this.decoder_.getCursor() + b;
    for(var c16 = []; this.decoder_.getCursor() < b;)c16.push(a4.call(this.decoder_));
    return c16;
};
jspb.BinaryReader.prototype.readPackedInt32 = function() {
    return this.readPackedField_(this.decoder_.readSignedVarint32);
};
jspb.BinaryReader.prototype.readPackedInt32String = function() {
    return this.readPackedField_(this.decoder_.readSignedVarint32String);
};
jspb.BinaryReader.prototype.readPackedInt64 = function() {
    return this.readPackedField_(this.decoder_.readSignedVarint64);
};
jspb.BinaryReader.prototype.readPackedInt64String = function() {
    return this.readPackedField_(this.decoder_.readSignedVarint64String);
};
jspb.BinaryReader.prototype.readPackedUint32 = function() {
    return this.readPackedField_(this.decoder_.readUnsignedVarint32);
};
jspb.BinaryReader.prototype.readPackedUint32String = function() {
    return this.readPackedField_(this.decoder_.readUnsignedVarint32String);
};
jspb.BinaryReader.prototype.readPackedUint64 = function() {
    return this.readPackedField_(this.decoder_.readUnsignedVarint64);
};
jspb.BinaryReader.prototype.readPackedUint64String = function() {
    return this.readPackedField_(this.decoder_.readUnsignedVarint64String);
};
jspb.BinaryReader.prototype.readPackedSint32 = function() {
    return this.readPackedField_(this.decoder_.readZigzagVarint32);
};
jspb.BinaryReader.prototype.readPackedSint64 = function() {
    return this.readPackedField_(this.decoder_.readZigzagVarint64);
};
jspb.BinaryReader.prototype.readPackedSint64String = function() {
    return this.readPackedField_(this.decoder_.readZigzagVarint64String);
};
jspb.BinaryReader.prototype.readPackedFixed32 = function() {
    return this.readPackedField_(this.decoder_.readUint32);
};
jspb.BinaryReader.prototype.readPackedFixed64 = function() {
    return this.readPackedField_(this.decoder_.readUint64);
};
jspb.BinaryReader.prototype.readPackedFixed64String = function() {
    return this.readPackedField_(this.decoder_.readUint64String);
};
jspb.BinaryReader.prototype.readPackedSfixed32 = function() {
    return this.readPackedField_(this.decoder_.readInt32);
};
jspb.BinaryReader.prototype.readPackedSfixed64 = function() {
    return this.readPackedField_(this.decoder_.readInt64);
};
jspb.BinaryReader.prototype.readPackedSfixed64String = function() {
    return this.readPackedField_(this.decoder_.readInt64String);
};
jspb.BinaryReader.prototype.readPackedFloat = function() {
    return this.readPackedField_(this.decoder_.readFloat);
};
jspb.BinaryReader.prototype.readPackedDouble = function() {
    return this.readPackedField_(this.decoder_.readDouble);
};
jspb.BinaryReader.prototype.readPackedBool = function() {
    return this.readPackedField_(this.decoder_.readBool);
};
jspb.BinaryReader.prototype.readPackedEnum = function() {
    return this.readPackedField_(this.decoder_.readEnum);
};
jspb.BinaryReader.prototype.readPackedVarintHash64 = function() {
    return this.readPackedField_(this.decoder_.readVarintHash64);
};
jspb.BinaryReader.prototype.readPackedFixedHash64 = function() {
    return this.readPackedField_(this.decoder_.readFixedHash64);
};
jspb.BinaryEncoder = function() {
    this.buffer_ = [];
};
jspb.BinaryEncoder.prototype.length = function() {
    return this.buffer_.length;
};
jspb.BinaryEncoder.prototype.end = function() {
    var a4 = this.buffer_;
    this.buffer_ = [];
    return a4;
};
jspb.BinaryEncoder.prototype.writeSplitVarint64 = function(a4, b) {
    goog.asserts.assert(a4 == Math.floor(a4));
    goog.asserts.assert(b == Math.floor(b));
    goog.asserts.assert(0 <= a4 && a4 < jspb.BinaryConstants.TWO_TO_32);
    for(goog.asserts.assert(0 <= b && b < jspb.BinaryConstants.TWO_TO_32); 0 < b || 127 < a4;)this.buffer_.push(a4 & 127 | 128), a4 = (a4 >>> 7 | b << 25) >>> 0, b >>>= 7;
    this.buffer_.push(a4);
};
jspb.BinaryEncoder.prototype.writeSplitFixed64 = function(a4, b) {
    goog.asserts.assert(a4 == Math.floor(a4));
    goog.asserts.assert(b == Math.floor(b));
    goog.asserts.assert(0 <= a4 && a4 < jspb.BinaryConstants.TWO_TO_32);
    goog.asserts.assert(0 <= b && b < jspb.BinaryConstants.TWO_TO_32);
    this.writeUint32(a4);
    this.writeUint32(b);
};
jspb.BinaryEncoder.prototype.writeUnsignedVarint32 = function(a4) {
    goog.asserts.assert(a4 == Math.floor(a4));
    for(goog.asserts.assert(0 <= a4 && a4 < jspb.BinaryConstants.TWO_TO_32); 127 < a4;)this.buffer_.push(a4 & 127 | 128), a4 >>>= 7;
    this.buffer_.push(a4);
};
jspb.BinaryEncoder.prototype.writeSignedVarint32 = function(a4) {
    goog.asserts.assert(a4 == Math.floor(a4));
    goog.asserts.assert(a4 >= -jspb.BinaryConstants.TWO_TO_31 && a4 < jspb.BinaryConstants.TWO_TO_31);
    if (0 <= a4) this.writeUnsignedVarint32(a4);
    else {
        for(var b = 0; 9 > b; b++)this.buffer_.push(a4 & 127 | 128), a4 >>= 7;
        this.buffer_.push(1);
    }
};
jspb.BinaryEncoder.prototype.writeUnsignedVarint64 = function(a4) {
    goog.asserts.assert(a4 == Math.floor(a4));
    goog.asserts.assert(0 <= a4 && a4 < jspb.BinaryConstants.TWO_TO_64);
    jspb.utils.splitInt64(a4);
    this.writeSplitVarint64(jspb.utils.split64Low, jspb.utils.split64High);
};
jspb.BinaryEncoder.prototype.writeSignedVarint64 = function(a4) {
    goog.asserts.assert(a4 == Math.floor(a4));
    goog.asserts.assert(a4 >= -jspb.BinaryConstants.TWO_TO_63 && a4 < jspb.BinaryConstants.TWO_TO_63);
    jspb.utils.splitInt64(a4);
    this.writeSplitVarint64(jspb.utils.split64Low, jspb.utils.split64High);
};
jspb.BinaryEncoder.prototype.writeZigzagVarint32 = function(a4) {
    goog.asserts.assert(a4 == Math.floor(a4));
    goog.asserts.assert(a4 >= -jspb.BinaryConstants.TWO_TO_31 && a4 < jspb.BinaryConstants.TWO_TO_31);
    this.writeUnsignedVarint32((a4 << 1 ^ a4 >> 31) >>> 0);
};
jspb.BinaryEncoder.prototype.writeZigzagVarint64 = function(a4) {
    goog.asserts.assert(a4 == Math.floor(a4));
    goog.asserts.assert(a4 >= -jspb.BinaryConstants.TWO_TO_63 && a4 < jspb.BinaryConstants.TWO_TO_63);
    jspb.utils.splitZigzag64(a4);
    this.writeSplitVarint64(jspb.utils.split64Low, jspb.utils.split64High);
};
jspb.BinaryEncoder.prototype.writeZigzagVarint64String = function(a4) {
    this.writeZigzagVarintHash64(jspb.utils.decimalStringToHash64(a4));
};
jspb.BinaryEncoder.prototype.writeZigzagVarintHash64 = function(a4) {
    var b = this;
    jspb.utils.splitHash64(a4);
    jspb.utils.toZigzag64(jspb.utils.split64Low, jspb.utils.split64High, function(a5, d) {
        b.writeSplitVarint64(a5 >>> 0, d >>> 0);
    });
};
jspb.BinaryEncoder.prototype.writeUint8 = function(a4) {
    goog.asserts.assert(a4 == Math.floor(a4));
    goog.asserts.assert(0 <= a4 && 256 > a4);
    this.buffer_.push(a4 >>> 0 & 255);
};
jspb.BinaryEncoder.prototype.writeUint16 = function(a4) {
    goog.asserts.assert(a4 == Math.floor(a4));
    goog.asserts.assert(0 <= a4 && 65536 > a4);
    this.buffer_.push(a4 >>> 0 & 255);
    this.buffer_.push(a4 >>> 8 & 255);
};
jspb.BinaryEncoder.prototype.writeUint32 = function(a4) {
    goog.asserts.assert(a4 == Math.floor(a4));
    goog.asserts.assert(0 <= a4 && a4 < jspb.BinaryConstants.TWO_TO_32);
    this.buffer_.push(a4 >>> 0 & 255);
    this.buffer_.push(a4 >>> 8 & 255);
    this.buffer_.push(a4 >>> 16 & 255);
    this.buffer_.push(a4 >>> 24 & 255);
};
jspb.BinaryEncoder.prototype.writeUint64 = function(a4) {
    goog.asserts.assert(a4 == Math.floor(a4));
    goog.asserts.assert(0 <= a4 && a4 < jspb.BinaryConstants.TWO_TO_64);
    jspb.utils.splitUint64(a4);
    this.writeUint32(jspb.utils.split64Low);
    this.writeUint32(jspb.utils.split64High);
};
jspb.BinaryEncoder.prototype.writeInt8 = function(a4) {
    goog.asserts.assert(a4 == Math.floor(a4));
    goog.asserts.assert(-128 <= a4 && 128 > a4);
    this.buffer_.push(a4 >>> 0 & 255);
};
jspb.BinaryEncoder.prototype.writeInt16 = function(a4) {
    goog.asserts.assert(a4 == Math.floor(a4));
    goog.asserts.assert(-32768 <= a4 && 32768 > a4);
    this.buffer_.push(a4 >>> 0 & 255);
    this.buffer_.push(a4 >>> 8 & 255);
};
jspb.BinaryEncoder.prototype.writeInt32 = function(a4) {
    goog.asserts.assert(a4 == Math.floor(a4));
    goog.asserts.assert(a4 >= -jspb.BinaryConstants.TWO_TO_31 && a4 < jspb.BinaryConstants.TWO_TO_31);
    this.buffer_.push(a4 >>> 0 & 255);
    this.buffer_.push(a4 >>> 8 & 255);
    this.buffer_.push(a4 >>> 16 & 255);
    this.buffer_.push(a4 >>> 24 & 255);
};
jspb.BinaryEncoder.prototype.writeInt64 = function(a4) {
    goog.asserts.assert(a4 == Math.floor(a4));
    goog.asserts.assert(a4 >= -jspb.BinaryConstants.TWO_TO_63 && a4 < jspb.BinaryConstants.TWO_TO_63);
    jspb.utils.splitInt64(a4);
    this.writeSplitFixed64(jspb.utils.split64Low, jspb.utils.split64High);
};
jspb.BinaryEncoder.prototype.writeInt64String = function(a4) {
    goog.asserts.assert(a4 == Math.floor(a4));
    goog.asserts.assert(+a4 >= -jspb.BinaryConstants.TWO_TO_63 && +a4 < jspb.BinaryConstants.TWO_TO_63);
    jspb.utils.splitHash64(jspb.utils.decimalStringToHash64(a4));
    this.writeSplitFixed64(jspb.utils.split64Low, jspb.utils.split64High);
};
jspb.BinaryEncoder.prototype.writeFloat = function(a4) {
    goog.asserts.assert(Infinity === a4 || -Infinity === a4 || isNaN(a4) || a4 >= -jspb.BinaryConstants.FLOAT32_MAX && a4 <= jspb.BinaryConstants.FLOAT32_MAX);
    jspb.utils.splitFloat32(a4);
    this.writeUint32(jspb.utils.split64Low);
};
jspb.BinaryEncoder.prototype.writeDouble = function(a4) {
    goog.asserts.assert(Infinity === a4 || -Infinity === a4 || isNaN(a4) || a4 >= -jspb.BinaryConstants.FLOAT64_MAX && a4 <= jspb.BinaryConstants.FLOAT64_MAX);
    jspb.utils.splitFloat64(a4);
    this.writeUint32(jspb.utils.split64Low);
    this.writeUint32(jspb.utils.split64High);
};
jspb.BinaryEncoder.prototype.writeBool = function(a4) {
    goog.asserts.assert("boolean" === typeof a4 || "number" === typeof a4);
    this.buffer_.push(a4 ? 1 : 0);
};
jspb.BinaryEncoder.prototype.writeEnum = function(a4) {
    goog.asserts.assert(a4 == Math.floor(a4));
    goog.asserts.assert(a4 >= -jspb.BinaryConstants.TWO_TO_31 && a4 < jspb.BinaryConstants.TWO_TO_31);
    this.writeSignedVarint32(a4);
};
jspb.BinaryEncoder.prototype.writeBytes = function(a4) {
    this.buffer_.push.apply(this.buffer_, a4);
};
jspb.BinaryEncoder.prototype.writeVarintHash64 = function(a4) {
    jspb.utils.splitHash64(a4);
    this.writeSplitVarint64(jspb.utils.split64Low, jspb.utils.split64High);
};
jspb.BinaryEncoder.prototype.writeFixedHash64 = function(a4) {
    jspb.utils.splitHash64(a4);
    this.writeUint32(jspb.utils.split64Low);
    this.writeUint32(jspb.utils.split64High);
};
jspb.BinaryEncoder.prototype.writeString = function(a4) {
    for(var b = this.buffer_.length, c16 = 0; c16 < a4.length; c16++){
        var d = a4.charCodeAt(c16);
        if (128 > d) this.buffer_.push(d);
        else if (2048 > d) this.buffer_.push(d >> 6 | 192), this.buffer_.push(d & 63 | 128);
        else if (65536 > d) {
            if (55296 <= d && 56319 >= d && c16 + 1 < a4.length) {
                var e = a4.charCodeAt(c16 + 1);
                56320 <= e && 57343 >= e && (d = 1024 * (d - 55296) + e - 56320 + 65536, this.buffer_.push(d >> 18 | 240), this.buffer_.push(d >> 12 & 63 | 128), this.buffer_.push(d >> 6 & 63 | 128), this.buffer_.push(d & 63 | 128), c16++);
            } else this.buffer_.push(d >> 12 | 224), this.buffer_.push(d >> 6 & 63 | 128), this.buffer_.push(d & 63 | 128);
        }
    }
    return this.buffer_.length - b;
};
jspb.arith = {
};
jspb.arith.UInt64 = function(a4, b) {
    this.lo = a4;
    this.hi = b;
};
jspb.arith.UInt64.prototype.cmp = function(a4) {
    return this.hi < a4.hi || this.hi == a4.hi && this.lo < a4.lo ? -1 : this.hi == a4.hi && this.lo == a4.lo ? 0 : 1;
};
jspb.arith.UInt64.prototype.rightShift = function() {
    return new jspb.arith.UInt64((this.lo >>> 1 | (this.hi & 1) << 31) >>> 0, this.hi >>> 1 >>> 0);
};
jspb.arith.UInt64.prototype.leftShift = function() {
    return new jspb.arith.UInt64(this.lo << 1 >>> 0, (this.hi << 1 | this.lo >>> 31) >>> 0);
};
jspb.arith.UInt64.prototype.msb = function() {
    return !!(this.hi & 2147483648);
};
jspb.arith.UInt64.prototype.lsb = function() {
    return !!(this.lo & 1);
};
jspb.arith.UInt64.prototype.zero = function() {
    return 0 == this.lo && 0 == this.hi;
};
jspb.arith.UInt64.prototype.add = function(a4) {
    return new jspb.arith.UInt64((this.lo + a4.lo & 4294967295) >>> 0 >>> 0, ((this.hi + a4.hi & 4294967295) >>> 0) + (4294967296 <= this.lo + a4.lo ? 1 : 0) >>> 0);
};
jspb.arith.UInt64.prototype.sub = function(a4) {
    return new jspb.arith.UInt64((this.lo - a4.lo & 4294967295) >>> 0 >>> 0, ((this.hi - a4.hi & 4294967295) >>> 0) - (0 > this.lo - a4.lo ? 1 : 0) >>> 0);
};
jspb.arith.UInt64.mul32x32 = function(a4, b) {
    var c16 = a4 & 65535;
    a4 >>>= 16;
    var d = b & 65535, e = b >>> 16;
    b = c16 * d + 65536 * (c16 * e & 65535) + 65536 * (a4 * d & 65535);
    for(c16 = a4 * e + (c16 * e >>> 16) + (a4 * d >>> 16); 4294967296 <= b;)b -= 4294967296, c16 += 1;
    return new jspb.arith.UInt64(b >>> 0, c16 >>> 0);
};
jspb.arith.UInt64.prototype.mul = function(a4) {
    var b = jspb.arith.UInt64.mul32x32(this.lo, a4);
    a4 = jspb.arith.UInt64.mul32x32(this.hi, a4);
    a4.hi = a4.lo;
    a4.lo = 0;
    return b.add(a4);
};
jspb.arith.UInt64.prototype.div = function(a4) {
    if (0 == a4) return [];
    var b = new jspb.arith.UInt64(0, 0), c16 = new jspb.arith.UInt64(this.lo, this.hi);
    a4 = new jspb.arith.UInt64(a4, 0);
    for(var d = new jspb.arith.UInt64(1, 0); !a4.msb();)a4 = a4.leftShift(), d = d.leftShift();
    for(; !d.zero();)0 >= a4.cmp(c16) && (b = b.add(d), c16 = c16.sub(a4)), a4 = a4.rightShift(), d = d.rightShift();
    return [
        b,
        c16
    ];
};
jspb.arith.UInt64.prototype.toString = function() {
    for(var a4 = "", b = this; !b.zero();){
        b = b.div(10);
        var c16 = b[0];
        a4 = b[1].lo + a4;
        b = c16;
    }
    "" == a4 && (a4 = "0");
    return a4;
};
jspb.arith.UInt64.fromString = function(a4) {
    for(var b = new jspb.arith.UInt64(0, 0), c17 = new jspb.arith.UInt64(0, 0), d = 0; d < a4.length; d++){
        if ("0" > a4[d] || "9" < a4[d]) return null;
        var e = parseInt(a4[d], 10);
        c17.lo = e;
        b = b.mul(10).add(c17);
    }
    return b;
};
jspb.arith.UInt64.prototype.clone = function() {
    return new jspb.arith.UInt64(this.lo, this.hi);
};
jspb.arith.Int64 = function(a4, b) {
    this.lo = a4;
    this.hi = b;
};
jspb.arith.Int64.prototype.add = function(a4) {
    return new jspb.arith.Int64((this.lo + a4.lo & 4294967295) >>> 0 >>> 0, ((this.hi + a4.hi & 4294967295) >>> 0) + (4294967296 <= this.lo + a4.lo ? 1 : 0) >>> 0);
};
jspb.arith.Int64.prototype.sub = function(a4) {
    return new jspb.arith.Int64((this.lo - a4.lo & 4294967295) >>> 0 >>> 0, ((this.hi - a4.hi & 4294967295) >>> 0) - (0 > this.lo - a4.lo ? 1 : 0) >>> 0);
};
jspb.arith.Int64.prototype.clone = function() {
    return new jspb.arith.Int64(this.lo, this.hi);
};
jspb.arith.Int64.prototype.toString = function() {
    var a4 = 0 != (this.hi & 2147483648), b = new jspb.arith.UInt64(this.lo, this.hi);
    a4 && (b = new jspb.arith.UInt64(0, 0).sub(b));
    return (a4 ? "-" : "") + b.toString();
};
jspb.arith.Int64.fromString = function(a4) {
    var b = 0 < a4.length && "-" == a4[0];
    b && (a4 = a4.substring(1));
    a4 = jspb.arith.UInt64.fromString(a4);
    if (null === a4) return null;
    b && (a4 = new jspb.arith.UInt64(0, 0).sub(a4));
    return new jspb.arith.Int64(a4.lo, a4.hi);
};
jspb.BinaryWriter = function() {
    this.blocks_ = [];
    this.totalLength_ = 0;
    this.encoder_ = new jspb.BinaryEncoder;
    this.bookmarks_ = [];
};
jspb.BinaryWriter.prototype.appendUint8Array_ = function(a4) {
    var b = this.encoder_.end();
    this.blocks_.push(b);
    this.blocks_.push(a4);
    this.totalLength_ += b.length + a4.length;
};
jspb.BinaryWriter.prototype.beginDelimited_ = function(a4) {
    this.writeFieldHeader_(a4, jspb.BinaryConstants.WireType.DELIMITED);
    a4 = this.encoder_.end();
    this.blocks_.push(a4);
    this.totalLength_ += a4.length;
    a4.push(this.totalLength_);
    return a4;
};
jspb.BinaryWriter.prototype.endDelimited_ = function(a4) {
    var b = a4.pop();
    b = this.totalLength_ + this.encoder_.length() - b;
    for(goog.asserts.assert(0 <= b); 127 < b;)a4.push(b & 127 | 128), b >>>= 7, this.totalLength_++;
    a4.push(b);
    this.totalLength_++;
};
jspb.BinaryWriter.prototype.writeSerializedMessage = function(a4, b, c17) {
    this.appendUint8Array_(a4.subarray(b, c17));
};
jspb.BinaryWriter.prototype.maybeWriteSerializedMessage = function(a4, b, c17) {
    null != a4 && null != b && null != c17 && this.writeSerializedMessage(a4, b, c17);
};
jspb.BinaryWriter.prototype.reset = function() {
    this.blocks_ = [];
    this.encoder_.end();
    this.totalLength_ = 0;
    this.bookmarks_ = [];
};
jspb.BinaryWriter.prototype.getResultBuffer = function() {
    goog.asserts.assert(0 == this.bookmarks_.length);
    for(var a4 = new Uint8Array(this.totalLength_ + this.encoder_.length()), b = this.blocks_, c17 = b.length, d = 0, e = 0; e < c17; e++){
        var f = b[e];
        a4.set(f, d);
        d += f.length;
    }
    b = this.encoder_.end();
    a4.set(b, d);
    d += b.length;
    goog.asserts.assert(d == a4.length);
    this.blocks_ = [
        a4
    ];
    return a4;
};
jspb.BinaryWriter.prototype.getResultBase64String = function(a4) {
    return goog.crypt.base64.encodeByteArray(this.getResultBuffer(), a4);
};
jspb.BinaryWriter.prototype.beginSubMessage = function(a4) {
    this.bookmarks_.push(this.beginDelimited_(a4));
};
jspb.BinaryWriter.prototype.endSubMessage = function() {
    goog.asserts.assert(0 <= this.bookmarks_.length);
    this.endDelimited_(this.bookmarks_.pop());
};
jspb.BinaryWriter.prototype.writeFieldHeader_ = function(a4, b) {
    goog.asserts.assert(1 <= a4 && a4 == Math.floor(a4));
    this.encoder_.writeUnsignedVarint32(8 * a4 + b);
};
jspb.BinaryWriter.prototype.writeAny = function(a4, b, c17) {
    var d = jspb.BinaryConstants.FieldType;
    switch(a4){
        case d.DOUBLE:
            this.writeDouble(b, c17);
            break;
        case d.FLOAT:
            this.writeFloat(b, c17);
            break;
        case d.INT64:
            this.writeInt64(b, c17);
            break;
        case d.UINT64:
            this.writeUint64(b, c17);
            break;
        case d.INT32:
            this.writeInt32(b, c17);
            break;
        case d.FIXED64:
            this.writeFixed64(b, c17);
            break;
        case d.FIXED32:
            this.writeFixed32(b, c17);
            break;
        case d.BOOL:
            this.writeBool(b, c17);
            break;
        case d.STRING:
            this.writeString(b, c17);
            break;
        case d.GROUP:
            goog.asserts.fail("Group field type not supported in writeAny()");
            break;
        case d.MESSAGE:
            goog.asserts.fail("Message field type not supported in writeAny()");
            break;
        case d.BYTES:
            this.writeBytes(b, c17);
            break;
        case d.UINT32:
            this.writeUint32(b, c17);
            break;
        case d.ENUM:
            this.writeEnum(b, c17);
            break;
        case d.SFIXED32:
            this.writeSfixed32(b, c17);
            break;
        case d.SFIXED64:
            this.writeSfixed64(b, c17);
            break;
        case d.SINT32:
            this.writeSint32(b, c17);
            break;
        case d.SINT64:
            this.writeSint64(b, c17);
            break;
        case d.FHASH64:
            this.writeFixedHash64(b, c17);
            break;
        case d.VHASH64:
            this.writeVarintHash64(b, c17);
            break;
        default:
            goog.asserts.fail("Invalid field type in writeAny()");
    }
};
jspb.BinaryWriter.prototype.writeUnsignedVarint32_ = function(a4, b) {
    null != b && (this.writeFieldHeader_(a4, jspb.BinaryConstants.WireType.VARINT), this.encoder_.writeUnsignedVarint32(b));
};
jspb.BinaryWriter.prototype.writeSignedVarint32_ = function(a4, b) {
    null != b && (this.writeFieldHeader_(a4, jspb.BinaryConstants.WireType.VARINT), this.encoder_.writeSignedVarint32(b));
};
jspb.BinaryWriter.prototype.writeUnsignedVarint64_ = function(a4, b) {
    null != b && (this.writeFieldHeader_(a4, jspb.BinaryConstants.WireType.VARINT), this.encoder_.writeUnsignedVarint64(b));
};
jspb.BinaryWriter.prototype.writeSignedVarint64_ = function(a4, b) {
    null != b && (this.writeFieldHeader_(a4, jspb.BinaryConstants.WireType.VARINT), this.encoder_.writeSignedVarint64(b));
};
jspb.BinaryWriter.prototype.writeZigzagVarint32_ = function(a4, b) {
    null != b && (this.writeFieldHeader_(a4, jspb.BinaryConstants.WireType.VARINT), this.encoder_.writeZigzagVarint32(b));
};
jspb.BinaryWriter.prototype.writeZigzagVarint64_ = function(a4, b) {
    null != b && (this.writeFieldHeader_(a4, jspb.BinaryConstants.WireType.VARINT), this.encoder_.writeZigzagVarint64(b));
};
jspb.BinaryWriter.prototype.writeZigzagVarint64String_ = function(a4, b) {
    null != b && (this.writeFieldHeader_(a4, jspb.BinaryConstants.WireType.VARINT), this.encoder_.writeZigzagVarint64String(b));
};
jspb.BinaryWriter.prototype.writeZigzagVarintHash64_ = function(a4, b) {
    null != b && (this.writeFieldHeader_(a4, jspb.BinaryConstants.WireType.VARINT), this.encoder_.writeZigzagVarintHash64(b));
};
jspb.BinaryWriter.prototype.writeInt32 = function(a4, b) {
    null != b && (goog.asserts.assert(b >= -jspb.BinaryConstants.TWO_TO_31 && b < jspb.BinaryConstants.TWO_TO_31), this.writeSignedVarint32_(a4, b));
};
jspb.BinaryWriter.prototype.writeInt32String = function(a4, b) {
    null != b && (b = parseInt(b, 10), goog.asserts.assert(b >= -jspb.BinaryConstants.TWO_TO_31 && b < jspb.BinaryConstants.TWO_TO_31), this.writeSignedVarint32_(a4, b));
};
jspb.BinaryWriter.prototype.writeInt64 = function(a4, b) {
    null != b && (goog.asserts.assert(b >= -jspb.BinaryConstants.TWO_TO_63 && b < jspb.BinaryConstants.TWO_TO_63), this.writeSignedVarint64_(a4, b));
};
jspb.BinaryWriter.prototype.writeInt64String = function(a4, b) {
    null != b && (b = jspb.arith.Int64.fromString(b), this.writeFieldHeader_(a4, jspb.BinaryConstants.WireType.VARINT), this.encoder_.writeSplitVarint64(b.lo, b.hi));
};
jspb.BinaryWriter.prototype.writeUint32 = function(a4, b) {
    null != b && (goog.asserts.assert(0 <= b && b < jspb.BinaryConstants.TWO_TO_32), this.writeUnsignedVarint32_(a4, b));
};
jspb.BinaryWriter.prototype.writeUint32String = function(a4, b) {
    null != b && (b = parseInt(b, 10), goog.asserts.assert(0 <= b && b < jspb.BinaryConstants.TWO_TO_32), this.writeUnsignedVarint32_(a4, b));
};
jspb.BinaryWriter.prototype.writeUint64 = function(a4, b) {
    null != b && (goog.asserts.assert(0 <= b && b < jspb.BinaryConstants.TWO_TO_64), this.writeUnsignedVarint64_(a4, b));
};
jspb.BinaryWriter.prototype.writeUint64String = function(a4, b) {
    null != b && (b = jspb.arith.UInt64.fromString(b), this.writeFieldHeader_(a4, jspb.BinaryConstants.WireType.VARINT), this.encoder_.writeSplitVarint64(b.lo, b.hi));
};
jspb.BinaryWriter.prototype.writeSint32 = function(a4, b) {
    null != b && (goog.asserts.assert(b >= -jspb.BinaryConstants.TWO_TO_31 && b < jspb.BinaryConstants.TWO_TO_31), this.writeZigzagVarint32_(a4, b));
};
jspb.BinaryWriter.prototype.writeSint64 = function(a4, b) {
    null != b && (goog.asserts.assert(b >= -jspb.BinaryConstants.TWO_TO_63 && b < jspb.BinaryConstants.TWO_TO_63), this.writeZigzagVarint64_(a4, b));
};
jspb.BinaryWriter.prototype.writeSintHash64 = function(a4, b) {
    null != b && this.writeZigzagVarintHash64_(a4, b);
};
jspb.BinaryWriter.prototype.writeSint64String = function(a4, b) {
    null != b && this.writeZigzagVarint64String_(a4, b);
};
jspb.BinaryWriter.prototype.writeFixed32 = function(a4, b) {
    null != b && (goog.asserts.assert(0 <= b && b < jspb.BinaryConstants.TWO_TO_32), this.writeFieldHeader_(a4, jspb.BinaryConstants.WireType.FIXED32), this.encoder_.writeUint32(b));
};
jspb.BinaryWriter.prototype.writeFixed64 = function(a4, b) {
    null != b && (goog.asserts.assert(0 <= b && b < jspb.BinaryConstants.TWO_TO_64), this.writeFieldHeader_(a4, jspb.BinaryConstants.WireType.FIXED64), this.encoder_.writeUint64(b));
};
jspb.BinaryWriter.prototype.writeFixed64String = function(a4, b) {
    null != b && (b = jspb.arith.UInt64.fromString(b), this.writeFieldHeader_(a4, jspb.BinaryConstants.WireType.FIXED64), this.encoder_.writeSplitFixed64(b.lo, b.hi));
};
jspb.BinaryWriter.prototype.writeSfixed32 = function(a4, b) {
    null != b && (goog.asserts.assert(b >= -jspb.BinaryConstants.TWO_TO_31 && b < jspb.BinaryConstants.TWO_TO_31), this.writeFieldHeader_(a4, jspb.BinaryConstants.WireType.FIXED32), this.encoder_.writeInt32(b));
};
jspb.BinaryWriter.prototype.writeSfixed64 = function(a4, b) {
    null != b && (goog.asserts.assert(b >= -jspb.BinaryConstants.TWO_TO_63 && b < jspb.BinaryConstants.TWO_TO_63), this.writeFieldHeader_(a4, jspb.BinaryConstants.WireType.FIXED64), this.encoder_.writeInt64(b));
};
jspb.BinaryWriter.prototype.writeSfixed64String = function(a4, b) {
    null != b && (b = jspb.arith.Int64.fromString(b), this.writeFieldHeader_(a4, jspb.BinaryConstants.WireType.FIXED64), this.encoder_.writeSplitFixed64(b.lo, b.hi));
};
jspb.BinaryWriter.prototype.writeFloat = function(a4, b) {
    null != b && (this.writeFieldHeader_(a4, jspb.BinaryConstants.WireType.FIXED32), this.encoder_.writeFloat(b));
};
jspb.BinaryWriter.prototype.writeDouble = function(a4, b) {
    null != b && (this.writeFieldHeader_(a4, jspb.BinaryConstants.WireType.FIXED64), this.encoder_.writeDouble(b));
};
jspb.BinaryWriter.prototype.writeBool = function(a4, b) {
    null != b && (goog.asserts.assert("boolean" === typeof b || "number" === typeof b), this.writeFieldHeader_(a4, jspb.BinaryConstants.WireType.VARINT), this.encoder_.writeBool(b));
};
jspb.BinaryWriter.prototype.writeEnum = function(a4, b) {
    null != b && (goog.asserts.assert(b >= -jspb.BinaryConstants.TWO_TO_31 && b < jspb.BinaryConstants.TWO_TO_31), this.writeFieldHeader_(a4, jspb.BinaryConstants.WireType.VARINT), this.encoder_.writeSignedVarint32(b));
};
jspb.BinaryWriter.prototype.writeString = function(a4, b) {
    null != b && (a4 = this.beginDelimited_(a4), this.encoder_.writeString(b), this.endDelimited_(a4));
};
jspb.BinaryWriter.prototype.writeBytes = function(a4, b) {
    null != b && (b = jspb.utils.byteSourceToUint8Array(b), this.writeFieldHeader_(a4, jspb.BinaryConstants.WireType.DELIMITED), this.encoder_.writeUnsignedVarint32(b.length), this.appendUint8Array_(b));
};
jspb.BinaryWriter.prototype.writeMessage = function(a4, b, c17) {
    null != b && (a4 = this.beginDelimited_(a4), c17(b, this), this.endDelimited_(a4));
};
jspb.BinaryWriter.prototype.writeMessageSet = function(a4, b, c17) {
    null != b && (this.writeFieldHeader_(1, jspb.BinaryConstants.WireType.START_GROUP), this.writeFieldHeader_(2, jspb.BinaryConstants.WireType.VARINT), this.encoder_.writeSignedVarint32(a4), a4 = this.beginDelimited_(3), c17(b, this), this.endDelimited_(a4), this.writeFieldHeader_(1, jspb.BinaryConstants.WireType.END_GROUP));
};
jspb.BinaryWriter.prototype.writeGroup = function(a4, b, c17) {
    null != b && (this.writeFieldHeader_(a4, jspb.BinaryConstants.WireType.START_GROUP), c17(b, this), this.writeFieldHeader_(a4, jspb.BinaryConstants.WireType.END_GROUP));
};
jspb.BinaryWriter.prototype.writeFixedHash64 = function(a4, b) {
    null != b && (goog.asserts.assert(8 == b.length), this.writeFieldHeader_(a4, jspb.BinaryConstants.WireType.FIXED64), this.encoder_.writeFixedHash64(b));
};
jspb.BinaryWriter.prototype.writeVarintHash64 = function(a4, b) {
    null != b && (goog.asserts.assert(8 == b.length), this.writeFieldHeader_(a4, jspb.BinaryConstants.WireType.VARINT), this.encoder_.writeVarintHash64(b));
};
jspb.BinaryWriter.prototype.writeSplitFixed64 = function(a4, b, c17) {
    this.writeFieldHeader_(a4, jspb.BinaryConstants.WireType.FIXED64);
    this.encoder_.writeSplitFixed64(b, c17);
};
jspb.BinaryWriter.prototype.writeSplitVarint64 = function(a4, b, c17) {
    this.writeFieldHeader_(a4, jspb.BinaryConstants.WireType.VARINT);
    this.encoder_.writeSplitVarint64(b, c17);
};
jspb.BinaryWriter.prototype.writeSplitZigzagVarint64 = function(a4, b, c17) {
    this.writeFieldHeader_(a4, jspb.BinaryConstants.WireType.VARINT);
    var d = this.encoder_;
    jspb.utils.toZigzag64(b, c17, function(a5, b1) {
        d.writeSplitVarint64(a5 >>> 0, b1 >>> 0);
    });
};
jspb.BinaryWriter.prototype.writeRepeatedInt32 = function(a4, b) {
    if (null != b) for(var c17 = 0; c17 < b.length; c17++)this.writeSignedVarint32_(a4, b[c17]);
};
jspb.BinaryWriter.prototype.writeRepeatedInt32String = function(a4, b) {
    if (null != b) for(var c17 = 0; c17 < b.length; c17++)this.writeInt32String(a4, b[c17]);
};
jspb.BinaryWriter.prototype.writeRepeatedInt64 = function(a4, b) {
    if (null != b) for(var c17 = 0; c17 < b.length; c17++)this.writeSignedVarint64_(a4, b[c17]);
};
jspb.BinaryWriter.prototype.writeRepeatedSplitFixed64 = function(a4, b, c17, d) {
    if (null != b) for(var e = 0; e < b.length; e++)this.writeSplitFixed64(a4, c17(b[e]), d(b[e]));
};
jspb.BinaryWriter.prototype.writeRepeatedSplitVarint64 = function(a4, b, c17, d) {
    if (null != b) for(var e = 0; e < b.length; e++)this.writeSplitVarint64(a4, c17(b[e]), d(b[e]));
};
jspb.BinaryWriter.prototype.writeRepeatedSplitZigzagVarint64 = function(a4, b, c17, d) {
    if (null != b) for(var e = 0; e < b.length; e++)this.writeSplitZigzagVarint64(a4, c17(b[e]), d(b[e]));
};
jspb.BinaryWriter.prototype.writeRepeatedInt64String = function(a4, b) {
    if (null != b) for(var c17 = 0; c17 < b.length; c17++)this.writeInt64String(a4, b[c17]);
};
jspb.BinaryWriter.prototype.writeRepeatedUint32 = function(a4, b) {
    if (null != b) for(var c17 = 0; c17 < b.length; c17++)this.writeUnsignedVarint32_(a4, b[c17]);
};
jspb.BinaryWriter.prototype.writeRepeatedUint32String = function(a4, b) {
    if (null != b) for(var c17 = 0; c17 < b.length; c17++)this.writeUint32String(a4, b[c17]);
};
jspb.BinaryWriter.prototype.writeRepeatedUint64 = function(a4, b) {
    if (null != b) for(var c17 = 0; c17 < b.length; c17++)this.writeUnsignedVarint64_(a4, b[c17]);
};
jspb.BinaryWriter.prototype.writeRepeatedUint64String = function(a4, b) {
    if (null != b) for(var c17 = 0; c17 < b.length; c17++)this.writeUint64String(a4, b[c17]);
};
jspb.BinaryWriter.prototype.writeRepeatedSint32 = function(a4, b) {
    if (null != b) for(var c17 = 0; c17 < b.length; c17++)this.writeZigzagVarint32_(a4, b[c17]);
};
jspb.BinaryWriter.prototype.writeRepeatedSint64 = function(a4, b) {
    if (null != b) for(var c17 = 0; c17 < b.length; c17++)this.writeZigzagVarint64_(a4, b[c17]);
};
jspb.BinaryWriter.prototype.writeRepeatedSint64String = function(a4, b) {
    if (null != b) for(var c17 = 0; c17 < b.length; c17++)this.writeZigzagVarint64String_(a4, b[c17]);
};
jspb.BinaryWriter.prototype.writeRepeatedSintHash64 = function(a4, b) {
    if (null != b) for(var c17 = 0; c17 < b.length; c17++)this.writeZigzagVarintHash64_(a4, b[c17]);
};
jspb.BinaryWriter.prototype.writeRepeatedFixed32 = function(a4, b) {
    if (null != b) for(var c17 = 0; c17 < b.length; c17++)this.writeFixed32(a4, b[c17]);
};
jspb.BinaryWriter.prototype.writeRepeatedFixed64 = function(a4, b) {
    if (null != b) for(var c17 = 0; c17 < b.length; c17++)this.writeFixed64(a4, b[c17]);
};
jspb.BinaryWriter.prototype.writeRepeatedFixed64String = function(a4, b) {
    if (null != b) for(var c17 = 0; c17 < b.length; c17++)this.writeFixed64String(a4, b[c17]);
};
jspb.BinaryWriter.prototype.writeRepeatedSfixed32 = function(a4, b) {
    if (null != b) for(var c17 = 0; c17 < b.length; c17++)this.writeSfixed32(a4, b[c17]);
};
jspb.BinaryWriter.prototype.writeRepeatedSfixed64 = function(a4, b) {
    if (null != b) for(var c17 = 0; c17 < b.length; c17++)this.writeSfixed64(a4, b[c17]);
};
jspb.BinaryWriter.prototype.writeRepeatedSfixed64String = function(a4, b) {
    if (null != b) for(var c17 = 0; c17 < b.length; c17++)this.writeSfixed64String(a4, b[c17]);
};
jspb.BinaryWriter.prototype.writeRepeatedFloat = function(a4, b) {
    if (null != b) for(var c17 = 0; c17 < b.length; c17++)this.writeFloat(a4, b[c17]);
};
jspb.BinaryWriter.prototype.writeRepeatedDouble = function(a4, b) {
    if (null != b) for(var c17 = 0; c17 < b.length; c17++)this.writeDouble(a4, b[c17]);
};
jspb.BinaryWriter.prototype.writeRepeatedBool = function(a4, b) {
    if (null != b) for(var c17 = 0; c17 < b.length; c17++)this.writeBool(a4, b[c17]);
};
jspb.BinaryWriter.prototype.writeRepeatedEnum = function(a4, b) {
    if (null != b) for(var c17 = 0; c17 < b.length; c17++)this.writeEnum(a4, b[c17]);
};
jspb.BinaryWriter.prototype.writeRepeatedString = function(a4, b) {
    if (null != b) for(var c17 = 0; c17 < b.length; c17++)this.writeString(a4, b[c17]);
};
jspb.BinaryWriter.prototype.writeRepeatedBytes = function(a4, b) {
    if (null != b) for(var c17 = 0; c17 < b.length; c17++)this.writeBytes(a4, b[c17]);
};
jspb.BinaryWriter.prototype.writeRepeatedMessage = function(a4, b, c17) {
    if (null != b) for(var d = 0; d < b.length; d++){
        var e = this.beginDelimited_(a4);
        c17(b[d], this);
        this.endDelimited_(e);
    }
};
jspb.BinaryWriter.prototype.writeRepeatedGroup = function(a4, b, c17) {
    if (null != b) for(var d = 0; d < b.length; d++)this.writeFieldHeader_(a4, jspb.BinaryConstants.WireType.START_GROUP), c17(b[d], this), this.writeFieldHeader_(a4, jspb.BinaryConstants.WireType.END_GROUP);
};
jspb.BinaryWriter.prototype.writeRepeatedFixedHash64 = function(a4, b) {
    if (null != b) for(var c17 = 0; c17 < b.length; c17++)this.writeFixedHash64(a4, b[c17]);
};
jspb.BinaryWriter.prototype.writeRepeatedVarintHash64 = function(a4, b) {
    if (null != b) for(var c17 = 0; c17 < b.length; c17++)this.writeVarintHash64(a4, b[c17]);
};
jspb.BinaryWriter.prototype.writePackedInt32 = function(a4, b) {
    if (null != b && b.length) {
        a4 = this.beginDelimited_(a4);
        for(var c17 = 0; c17 < b.length; c17++)this.encoder_.writeSignedVarint32(b[c17]);
        this.endDelimited_(a4);
    }
};
jspb.BinaryWriter.prototype.writePackedInt32String = function(a4, b) {
    if (null != b && b.length) {
        a4 = this.beginDelimited_(a4);
        for(var c18 = 0; c18 < b.length; c18++)this.encoder_.writeSignedVarint32(parseInt(b[c18], 10));
        this.endDelimited_(a4);
    }
};
jspb.BinaryWriter.prototype.writePackedInt64 = function(a4, b) {
    if (null != b && b.length) {
        a4 = this.beginDelimited_(a4);
        for(var c19 = 0; c19 < b.length; c19++)this.encoder_.writeSignedVarint64(b[c19]);
        this.endDelimited_(a4);
    }
};
jspb.BinaryWriter.prototype.writePackedSplitFixed64 = function(a4, b, c20, d) {
    if (null != b) {
        a4 = this.beginDelimited_(a4);
        for(var e = 0; e < b.length; e++)this.encoder_.writeSplitFixed64(c20(b[e]), d(b[e]));
        this.endDelimited_(a4);
    }
};
jspb.BinaryWriter.prototype.writePackedSplitVarint64 = function(a4, b, c20, d) {
    if (null != b) {
        a4 = this.beginDelimited_(a4);
        for(var e = 0; e < b.length; e++)this.encoder_.writeSplitVarint64(c20(b[e]), d(b[e]));
        this.endDelimited_(a4);
    }
};
jspb.BinaryWriter.prototype.writePackedSplitZigzagVarint64 = function(a4, b, c20, d) {
    if (null != b) {
        a4 = this.beginDelimited_(a4);
        for(var e = this.encoder_, f = 0; f < b.length; f++)jspb.utils.toZigzag64(c20(b[f]), d(b[f]), function(a5, b1) {
            e.writeSplitVarint64(a5 >>> 0, b1 >>> 0);
        });
        this.endDelimited_(a4);
    }
};
jspb.BinaryWriter.prototype.writePackedInt64String = function(a4, b) {
    if (null != b && b.length) {
        a4 = this.beginDelimited_(a4);
        for(var c20 = 0; c20 < b.length; c20++){
            var d = jspb.arith.Int64.fromString(b[c20]);
            this.encoder_.writeSplitVarint64(d.lo, d.hi);
        }
        this.endDelimited_(a4);
    }
};
jspb.BinaryWriter.prototype.writePackedUint32 = function(a4, b) {
    if (null != b && b.length) {
        a4 = this.beginDelimited_(a4);
        for(var c21 = 0; c21 < b.length; c21++)this.encoder_.writeUnsignedVarint32(b[c21]);
        this.endDelimited_(a4);
    }
};
jspb.BinaryWriter.prototype.writePackedUint32String = function(a4, b) {
    if (null != b && b.length) {
        a4 = this.beginDelimited_(a4);
        for(var c22 = 0; c22 < b.length; c22++)this.encoder_.writeUnsignedVarint32(parseInt(b[c22], 10));
        this.endDelimited_(a4);
    }
};
jspb.BinaryWriter.prototype.writePackedUint64 = function(a4, b) {
    if (null != b && b.length) {
        a4 = this.beginDelimited_(a4);
        for(var c23 = 0; c23 < b.length; c23++)this.encoder_.writeUnsignedVarint64(b[c23]);
        this.endDelimited_(a4);
    }
};
jspb.BinaryWriter.prototype.writePackedUint64String = function(a4, b) {
    if (null != b && b.length) {
        a4 = this.beginDelimited_(a4);
        for(var c24 = 0; c24 < b.length; c24++){
            var d = jspb.arith.UInt64.fromString(b[c24]);
            this.encoder_.writeSplitVarint64(d.lo, d.hi);
        }
        this.endDelimited_(a4);
    }
};
jspb.BinaryWriter.prototype.writePackedSint32 = function(a4, b) {
    if (null != b && b.length) {
        a4 = this.beginDelimited_(a4);
        for(var c25 = 0; c25 < b.length; c25++)this.encoder_.writeZigzagVarint32(b[c25]);
        this.endDelimited_(a4);
    }
};
jspb.BinaryWriter.prototype.writePackedSint64 = function(a4, b) {
    if (null != b && b.length) {
        a4 = this.beginDelimited_(a4);
        for(var c26 = 0; c26 < b.length; c26++)this.encoder_.writeZigzagVarint64(b[c26]);
        this.endDelimited_(a4);
    }
};
jspb.BinaryWriter.prototype.writePackedSint64String = function(a4, b) {
    if (null != b && b.length) {
        a4 = this.beginDelimited_(a4);
        for(var c27 = 0; c27 < b.length; c27++)this.encoder_.writeZigzagVarintHash64(jspb.utils.decimalStringToHash64(b[c27]));
        this.endDelimited_(a4);
    }
};
jspb.BinaryWriter.prototype.writePackedSintHash64 = function(a4, b) {
    if (null != b && b.length) {
        a4 = this.beginDelimited_(a4);
        for(var c28 = 0; c28 < b.length; c28++)this.encoder_.writeZigzagVarintHash64(b[c28]);
        this.endDelimited_(a4);
    }
};
jspb.BinaryWriter.prototype.writePackedFixed32 = function(a4, b) {
    if (null != b && b.length) for(this.writeFieldHeader_(a4, jspb.BinaryConstants.WireType.DELIMITED), this.encoder_.writeUnsignedVarint32(4 * b.length), a4 = 0; a4 < b.length; a4++)this.encoder_.writeUint32(b[a4]);
};
jspb.BinaryWriter.prototype.writePackedFixed64 = function(a4, b) {
    if (null != b && b.length) for(this.writeFieldHeader_(a4, jspb.BinaryConstants.WireType.DELIMITED), this.encoder_.writeUnsignedVarint32(8 * b.length), a4 = 0; a4 < b.length; a4++)this.encoder_.writeUint64(b[a4]);
};
jspb.BinaryWriter.prototype.writePackedFixed64String = function(a4, b) {
    if (null != b && b.length) for(this.writeFieldHeader_(a4, jspb.BinaryConstants.WireType.DELIMITED), this.encoder_.writeUnsignedVarint32(8 * b.length), a4 = 0; a4 < b.length; a4++){
        var c29 = jspb.arith.UInt64.fromString(b[a4]);
        this.encoder_.writeSplitFixed64(c29.lo, c29.hi);
    }
};
jspb.BinaryWriter.prototype.writePackedSfixed32 = function(a4, b) {
    if (null != b && b.length) for(this.writeFieldHeader_(a4, jspb.BinaryConstants.WireType.DELIMITED), this.encoder_.writeUnsignedVarint32(4 * b.length), a4 = 0; a4 < b.length; a4++)this.encoder_.writeInt32(b[a4]);
};
jspb.BinaryWriter.prototype.writePackedSfixed64 = function(a4, b) {
    if (null != b && b.length) for(this.writeFieldHeader_(a4, jspb.BinaryConstants.WireType.DELIMITED), this.encoder_.writeUnsignedVarint32(8 * b.length), a4 = 0; a4 < b.length; a4++)this.encoder_.writeInt64(b[a4]);
};
jspb.BinaryWriter.prototype.writePackedSfixed64String = function(a4, b) {
    if (null != b && b.length) for(this.writeFieldHeader_(a4, jspb.BinaryConstants.WireType.DELIMITED), this.encoder_.writeUnsignedVarint32(8 * b.length), a4 = 0; a4 < b.length; a4++)this.encoder_.writeInt64String(b[a4]);
};
jspb.BinaryWriter.prototype.writePackedFloat = function(a4, b) {
    if (null != b && b.length) for(this.writeFieldHeader_(a4, jspb.BinaryConstants.WireType.DELIMITED), this.encoder_.writeUnsignedVarint32(4 * b.length), a4 = 0; a4 < b.length; a4++)this.encoder_.writeFloat(b[a4]);
};
jspb.BinaryWriter.prototype.writePackedDouble = function(a4, b) {
    if (null != b && b.length) for(this.writeFieldHeader_(a4, jspb.BinaryConstants.WireType.DELIMITED), this.encoder_.writeUnsignedVarint32(8 * b.length), a4 = 0; a4 < b.length; a4++)this.encoder_.writeDouble(b[a4]);
};
jspb.BinaryWriter.prototype.writePackedBool = function(a4, b) {
    if (null != b && b.length) for(this.writeFieldHeader_(a4, jspb.BinaryConstants.WireType.DELIMITED), this.encoder_.writeUnsignedVarint32(b.length), a4 = 0; a4 < b.length; a4++)this.encoder_.writeBool(b[a4]);
};
jspb.BinaryWriter.prototype.writePackedEnum = function(a4, b) {
    if (null != b && b.length) {
        a4 = this.beginDelimited_(a4);
        for(var c30 = 0; c30 < b.length; c30++)this.encoder_.writeEnum(b[c30]);
        this.endDelimited_(a4);
    }
};
jspb.BinaryWriter.prototype.writePackedFixedHash64 = function(a4, b) {
    if (null != b && b.length) for(this.writeFieldHeader_(a4, jspb.BinaryConstants.WireType.DELIMITED), this.encoder_.writeUnsignedVarint32(8 * b.length), a4 = 0; a4 < b.length; a4++)this.encoder_.writeFixedHash64(b[a4]);
};
jspb.BinaryWriter.prototype.writePackedVarintHash64 = function(a4, b) {
    if (null != b && b.length) {
        a4 = this.beginDelimited_(a4);
        for(var c31 = 0; c31 < b.length; c31++)this.encoder_.writeVarintHash64(b[c31]);
        this.endDelimited_(a4);
    }
};
jspb.Map = function(a4, b) {
    this.arr_ = a4;
    this.valueCtor_ = b;
    this.map_ = {
    };
    this.arrClean = true;
    0 < this.arr_.length && this.loadFromArray_();
};
jspb.Map.prototype.loadFromArray_ = function() {
    for(var a4 = 0; a4 < this.arr_.length; a4++){
        var b = this.arr_[a4], c32 = b[0];
        this.map_[c32.toString()] = new jspb.Map.Entry_(c32, b[1]);
    }
    this.arrClean = true;
};
jspb.Map.prototype.toArray = function() {
    if (this.arrClean) {
        if (this.valueCtor_) {
            var a4 = this.map_, b;
            for(b in a4)if (Object.prototype.hasOwnProperty.call(a4, b)) {
                var c33 = a4[b].valueWrapper;
                c33 && c33.toArray();
            }
        }
    } else {
        this.arr_.length = 0;
        a4 = this.stringKeys_();
        a4.sort();
        for(b = 0; b < a4.length; b++){
            var d = this.map_[a4[b]];
            (c33 = d.valueWrapper) && c33.toArray();
            this.arr_.push([
                d.key,
                d.value
            ]);
        }
        this.arrClean = true;
    }
    return this.arr_;
};
jspb.Map.prototype.toObject = function(a5, b) {
    for(var c34 = this.toArray(), d = [], e = 0; e < c34.length; e++){
        var f = this.map_[c34[e][0].toString()];
        this.wrapEntry_(f);
        var g = f.valueWrapper;
        g ? (goog.asserts.assert(b), d.push([
            f.key,
            b(a5, g)
        ])) : d.push([
            f.key,
            f.value
        ]);
    }
    return d;
};
jspb.Map.fromObject = function(a5, b, c34) {
    b = new jspb.Map([], b);
    for(var d = 0; d < a5.length; d++){
        var e = a5[d][0], f = c34(a5[d][1]);
        b.set(e, f);
    }
    return b;
};
jspb.Map.ArrayIteratorIterable_ = function(a5) {
    this.idx_ = 0;
    this.arr_ = a5;
};
jspb.Map.ArrayIteratorIterable_.prototype.next = function() {
    return this.idx_ < this.arr_.length ? {
        done: false,
        value: this.arr_[this.idx_++]
    } : {
        done: true,
        value: void 0
    };
};
"undefined" != typeof Symbol && (jspb.Map.ArrayIteratorIterable_.prototype[Symbol.iterator] = function() {
    return this;
});
jspb.Map.prototype.getLength = function() {
    return this.stringKeys_().length;
};
jspb.Map.prototype.clear = function() {
    this.map_ = {
    };
    this.arrClean = false;
};
jspb.Map.prototype.del = function(a5) {
    a5 = a5.toString();
    var b = this.map_.hasOwnProperty(a5);
    delete this.map_[a5];
    this.arrClean = false;
    return b;
};
jspb.Map.prototype.getEntryList = function() {
    var a5 = [], b = this.stringKeys_();
    b.sort();
    for(var c34 = 0; c34 < b.length; c34++){
        var d = this.map_[b[c34]];
        a5.push([
            d.key,
            d.value
        ]);
    }
    return a5;
};
jspb.Map.prototype.entries = function() {
    var a5 = [], b = this.stringKeys_();
    b.sort();
    for(var c34 = 0; c34 < b.length; c34++){
        var d = this.map_[b[c34]];
        a5.push([
            d.key,
            this.wrapEntry_(d)
        ]);
    }
    return new jspb.Map.ArrayIteratorIterable_(a5);
};
jspb.Map.prototype.keys = function() {
    var a5 = [], b = this.stringKeys_();
    b.sort();
    for(var c34 = 0; c34 < b.length; c34++)a5.push(this.map_[b[c34]].key);
    return new jspb.Map.ArrayIteratorIterable_(a5);
};
jspb.Map.prototype.values = function() {
    var a5 = [], b = this.stringKeys_();
    b.sort();
    for(var c34 = 0; c34 < b.length; c34++)a5.push(this.wrapEntry_(this.map_[b[c34]]));
    return new jspb.Map.ArrayIteratorIterable_(a5);
};
jspb.Map.prototype.forEach = function(a5, b) {
    var c34 = this.stringKeys_();
    c34.sort();
    for(var d = 0; d < c34.length; d++){
        var e = this.map_[c34[d]];
        a5.call(b, this.wrapEntry_(e), e.key, this);
    }
};
jspb.Map.prototype.set = function(a5, b) {
    var c34 = new jspb.Map.Entry_(a5);
    this.valueCtor_ ? (c34.valueWrapper = b, c34.value = b.toArray()) : c34.value = b;
    this.map_[a5.toString()] = c34;
    this.arrClean = false;
    return this;
};
jspb.Map.prototype.wrapEntry_ = function(a5) {
    return this.valueCtor_ ? (a5.valueWrapper || (a5.valueWrapper = new this.valueCtor_(a5.value)), a5.valueWrapper) : a5.value;
};
jspb.Map.prototype.get = function(a5) {
    if (a5 = this.map_[a5.toString()]) return this.wrapEntry_(a5);
};
jspb.Map.prototype.has = function(a5) {
    return a5.toString() in this.map_;
};
jspb.Map.prototype.serializeBinary = function(a5, b, c34, d, e) {
    var f = this.stringKeys_();
    f.sort();
    for(var g = 0; g < f.length; g++){
        var h = this.map_[f[g]];
        b.beginSubMessage(a5);
        c34.call(b, 1, h.key);
        this.valueCtor_ ? d.call(b, 2, this.wrapEntry_(h), e) : d.call(b, 2, h.value);
        b.endSubMessage();
    }
};
jspb.Map.deserializeBinary = function(a5, b, c34, d, e, f, g) {
    for(; b.nextField() && !b.isEndGroup();){
        var h = b.getFieldNumber();
        1 == h ? f = c34.call(b) : 2 == h && (a5.valueCtor_ ? (goog.asserts.assert(e), g || (g = new a5.valueCtor_), d.call(b, g, e)) : g = d.call(b));
    }
    goog.asserts.assert((void 0) != f);
    goog.asserts.assert((void 0) != g);
    a5.set(f, g);
};
jspb.Map.prototype.stringKeys_ = function() {
    var a5 = this.map_, b = [], c34;
    for(c34 in a5)Object.prototype.hasOwnProperty.call(a5, c34) && b.push(c34);
    return b;
};
jspb.Map.Entry_ = function(a5, b) {
    this.key = a5;
    this.value = b;
    this.valueWrapper = void 0;
};
jspb.ExtensionFieldInfo = function(a5, b, c34, d, e) {
    this.fieldIndex = a5;
    this.fieldName = b;
    this.ctor = c34;
    this.toObjectFn = d;
    this.isRepeated = e;
};
jspb.ExtensionFieldBinaryInfo = function(a5, b, c34, d, e, f) {
    this.fieldInfo = a5;
    this.binaryReaderFn = b;
    this.binaryWriterFn = c34;
    this.binaryMessageSerializeFn = d;
    this.binaryMessageDeserializeFn = e;
    this.isPacked = f;
};
jspb.ExtensionFieldInfo.prototype.isMessageType = function() {
    return !!this.ctor;
};
jspb.Message = function() {
};
jspb.Message.GENERATE_TO_OBJECT = true;
jspb.Message.GENERATE_FROM_OBJECT = !goog.DISALLOW_TEST_ONLY_CODE;
jspb.Message.GENERATE_TO_STRING = true;
jspb.Message.ASSUME_LOCAL_ARRAYS = false;
jspb.Message.SERIALIZE_EMPTY_TRAILING_FIELDS = true;
jspb.Message.SUPPORTS_UINT8ARRAY_ = "function" == typeof Uint8Array;
jspb.Message.prototype.getJsPbMessageId = function() {
    return this.messageId_;
};
jspb.Message.getIndex_ = function(a5, b) {
    return b + a5.arrayIndexOffset_;
};
jspb.Message.hiddenES6Property_ = function() {
};
jspb.Message.getFieldNumber_ = function(a5, b) {
    return b - a5.arrayIndexOffset_;
};
jspb.Message.initialize = function(a5, b, c34, d, e, f) {
    a5.wrappers_ = null;
    b || (b = c34 ? [
        c34
    ] : []);
    a5.messageId_ = c34 ? String(c34) : void 0;
    a5.arrayIndexOffset_ = 0 === c34 ? -1 : 0;
    a5.array = b;
    jspb.Message.initPivotAndExtensionObject_(a5, d);
    a5.convertedPrimitiveFields_ = {
    };
    jspb.Message.SERIALIZE_EMPTY_TRAILING_FIELDS || (a5.repeatedFields = e);
    if (e) for(b = 0; b < e.length; b++)c34 = e[b], c34 < a5.pivot_ ? (c34 = jspb.Message.getIndex_(a5, c34), a5.array[c34] = a5.array[c34] || jspb.Message.EMPTY_LIST_SENTINEL_) : (jspb.Message.maybeInitEmptyExtensionObject_(a5), a5.extensionObject_[c34] = a5.extensionObject_[c34] || jspb.Message.EMPTY_LIST_SENTINEL_);
    if (f && f.length) for(b = 0; b < f.length; b++)jspb.Message.computeOneofCase(a5, f[b]);
};
jspb.Message.EMPTY_LIST_SENTINEL_ = goog.DEBUG && Object.freeze ? Object.freeze([]) : [];
jspb.Message.isArray_ = function(a5) {
    return jspb.Message.ASSUME_LOCAL_ARRAYS ? a5 instanceof Array : Array.isArray(a5);
};
jspb.Message.isExtensionObject_ = function(a5) {
    return null !== a5 && "object" == typeof a5 && !jspb.Message.isArray_(a5) && !(jspb.Message.SUPPORTS_UINT8ARRAY_ && a5 instanceof Uint8Array);
};
jspb.Message.initPivotAndExtensionObject_ = function(a5, b) {
    var c34 = a5.array.length, d = -1;
    if (c34 && (d = c34 - 1, c34 = a5.array[d], jspb.Message.isExtensionObject_(c34))) {
        a5.pivot_ = jspb.Message.getFieldNumber_(a5, d);
        a5.extensionObject_ = c34;
        return;
    }
    -1 < b ? (a5.pivot_ = Math.max(b, jspb.Message.getFieldNumber_(a5, d + 1)), a5.extensionObject_ = null) : a5.pivot_ = Number.MAX_VALUE;
};
jspb.Message.maybeInitEmptyExtensionObject_ = function(a5) {
    var b = jspb.Message.getIndex_(a5, a5.pivot_);
    a5.array[b] || (a5.extensionObject_ = a5.array[b] = {
    });
};
jspb.Message.toObjectList = function(a5, b, c34) {
    for(var d = [], e = 0; e < a5.length; e++)d[e] = b.call(a5[e], c34, a5[e]);
    return d;
};
jspb.Message.toObjectExtension = function(a5, b, c34, d, e) {
    for(var f in c34){
        var g = c34[f], h = d.call(a5, g);
        if (null != h) {
            for(var k in g.fieldName)if (g.fieldName.hasOwnProperty(k)) break;
            b[k] = g.toObjectFn ? g.isRepeated ? jspb.Message.toObjectList(h, g.toObjectFn, e) : g.toObjectFn(e, h) : h;
        }
    }
};
jspb.Message.serializeBinaryExtensions = function(a5, b, c34, d) {
    for(var e in c34){
        var f = c34[e], g = f.fieldInfo;
        if (!f.binaryWriterFn) throw Error("Message extension present that was generated without binary serialization support");
        var h = d.call(a5, g);
        if (null != h) {
            if (g.isMessageType()) {
                if (f.binaryMessageSerializeFn) f.binaryWriterFn.call(b, g.fieldIndex, h, f.binaryMessageSerializeFn);
                else throw Error("Message extension present holding submessage without binary support enabled, and message is being serialized to binary format");
            } else f.binaryWriterFn.call(b, g.fieldIndex, h);
        }
    }
};
jspb.Message.readBinaryExtension = function(a5, b, c34, d, e) {
    var f = c34[b.getFieldNumber()];
    if (f) {
        c34 = f.fieldInfo;
        if (!f.binaryReaderFn) throw Error("Deserializing extension whose generated code does not support binary format");
        if (c34.isMessageType()) {
            var g = new c34.ctor;
            f.binaryReaderFn.call(b, g, f.binaryMessageDeserializeFn);
        } else g = f.binaryReaderFn.call(b);
        c34.isRepeated && !f.isPacked ? (b = d.call(a5, c34)) ? b.push(g) : e.call(a5, c34, [
            g
        ]) : e.call(a5, c34, g);
    } else b.skipField();
};
jspb.Message.getField = function(a5, b) {
    if (b < a5.pivot_) {
        b = jspb.Message.getIndex_(a5, b);
        var c34 = a5.array[b];
        return c34 === jspb.Message.EMPTY_LIST_SENTINEL_ ? a5.array[b] = [] : c34;
    }
    if (a5.extensionObject_) return c34 = a5.extensionObject_[b], c34 === jspb.Message.EMPTY_LIST_SENTINEL_ ? a5.extensionObject_[b] = [] : c34;
};
jspb.Message.getRepeatedField = function(a5, b) {
    return jspb.Message.getField(a5, b);
};
jspb.Message.getOptionalFloatingPointField = function(a5, b) {
    a5 = jspb.Message.getField(a5, b);
    return null == a5 ? a5 : +a5;
};
jspb.Message.getBooleanField = function(a5, b) {
    a5 = jspb.Message.getField(a5, b);
    return null == a5 ? a5 : !!a5;
};
jspb.Message.getRepeatedFloatingPointField = function(a5, b) {
    var c35 = jspb.Message.getRepeatedField(a5, b);
    a5.convertedPrimitiveFields_ || (a5.convertedPrimitiveFields_ = {
    });
    if (!a5.convertedPrimitiveFields_[b]) {
        for(var d = 0; d < c35.length; d++)c35[d] = +c35[d];
        a5.convertedPrimitiveFields_[b] = true;
    }
    return c35;
};
jspb.Message.getRepeatedBooleanField = function(a5, b) {
    var c35 = jspb.Message.getRepeatedField(a5, b);
    a5.convertedPrimitiveFields_ || (a5.convertedPrimitiveFields_ = {
    });
    if (!a5.convertedPrimitiveFields_[b]) {
        for(var d = 0; d < c35.length; d++)c35[d] = !!c35[d];
        a5.convertedPrimitiveFields_[b] = true;
    }
    return c35;
};
jspb.Message.bytesAsB64 = function(a5) {
    if (null == a5 || "string" === typeof a5) return a5;
    if (jspb.Message.SUPPORTS_UINT8ARRAY_ && a5 instanceof Uint8Array) return goog.crypt.base64.encodeByteArray(a5);
    goog.asserts.fail("Cannot coerce to b64 string: " + goog.typeOf(a5));
    return null;
};
jspb.Message.bytesAsU8 = function(a5) {
    if (null == a5 || a5 instanceof Uint8Array) return a5;
    if ("string" === typeof a5) return goog.crypt.base64.decodeStringToUint8Array(a5);
    goog.asserts.fail("Cannot coerce to Uint8Array: " + goog.typeOf(a5));
    return null;
};
jspb.Message.bytesListAsB64 = function(a5) {
    jspb.Message.assertConsistentTypes_(a5);
    return a5.length && "string" !== typeof a5[0] ? goog.array.map(a5, jspb.Message.bytesAsB64) : a5;
};
jspb.Message.bytesListAsU8 = function(a5) {
    jspb.Message.assertConsistentTypes_(a5);
    return !a5.length || a5[0] instanceof Uint8Array ? a5 : goog.array.map(a5, jspb.Message.bytesAsU8);
};
jspb.Message.assertConsistentTypes_ = function(a5) {
    if (goog.DEBUG && a5 && 1 < a5.length) {
        var b = goog.typeOf(a5[0]);
        goog.array.forEach(a5, function(a6) {
            goog.typeOf(a6) != b && goog.asserts.fail("Inconsistent type in JSPB repeated field array. Got " + goog.typeOf(a6) + " expected " + b);
        });
    }
};
jspb.Message.getFieldWithDefault = function(a5, b, c35) {
    a5 = jspb.Message.getField(a5, b);
    return null == a5 ? c35 : a5;
};
jspb.Message.getBooleanFieldWithDefault = function(a5, b, c35) {
    a5 = jspb.Message.getBooleanField(a5, b);
    return null == a5 ? c35 : a5;
};
jspb.Message.getFloatingPointFieldWithDefault = function(a5, b, c35) {
    a5 = jspb.Message.getOptionalFloatingPointField(a5, b);
    return null == a5 ? c35 : a5;
};
jspb.Message.getFieldProto3 = jspb.Message.getFieldWithDefault;
jspb.Message.getMapField = function(a5, b, c35, d) {
    a5.wrappers_ || (a5.wrappers_ = {
    });
    if (b in a5.wrappers_) return a5.wrappers_[b];
    var e = jspb.Message.getField(a5, b);
    if (!e) {
        if (c35) return;
        e = [];
        jspb.Message.setField(a5, b, e);
    }
    return a5.wrappers_[b] = new jspb.Map(e, d);
};
jspb.Message.setField = function(a5, b, c35) {
    goog.asserts.assertInstanceof(a5, jspb.Message);
    b < a5.pivot_ ? a5.array[jspb.Message.getIndex_(a5, b)] = c35 : (jspb.Message.maybeInitEmptyExtensionObject_(a5), a5.extensionObject_[b] = c35);
    return a5;
};
jspb.Message.setProto3IntField = function(a5, b, c35) {
    return jspb.Message.setFieldIgnoringDefault_(a5, b, c35, 0);
};
jspb.Message.setProto3FloatField = function(a5, b, c35) {
    return jspb.Message.setFieldIgnoringDefault_(a5, b, c35, 0);
};
jspb.Message.setProto3BooleanField = function(a5, b, c35) {
    return jspb.Message.setFieldIgnoringDefault_(a5, b, c35, false);
};
jspb.Message.setProto3StringField = function(a5, b, c35) {
    return jspb.Message.setFieldIgnoringDefault_(a5, b, c35, "");
};
jspb.Message.setProto3BytesField = function(a5, b, c35) {
    return jspb.Message.setFieldIgnoringDefault_(a5, b, c35, "");
};
jspb.Message.setProto3EnumField = function(a5, b, c35) {
    return jspb.Message.setFieldIgnoringDefault_(a5, b, c35, 0);
};
jspb.Message.setProto3StringIntField = function(a5, b, c35) {
    return jspb.Message.setFieldIgnoringDefault_(a5, b, c35, "0");
};
jspb.Message.setFieldIgnoringDefault_ = function(a5, b, c35, d) {
    goog.asserts.assertInstanceof(a5, jspb.Message);
    c35 !== d ? jspb.Message.setField(a5, b, c35) : b < a5.pivot_ ? a5.array[jspb.Message.getIndex_(a5, b)] = null : (jspb.Message.maybeInitEmptyExtensionObject_(a5), delete a5.extensionObject_[b]);
    return a5;
};
jspb.Message.addToRepeatedField = function(a5, b, c35, d) {
    goog.asserts.assertInstanceof(a5, jspb.Message);
    b = jspb.Message.getRepeatedField(a5, b);
    (void 0) != d ? b.splice(d, 0, c35) : b.push(c35);
    return a5;
};
jspb.Message.setOneofField = function(a5, b, c35, d) {
    goog.asserts.assertInstanceof(a5, jspb.Message);
    (c35 = jspb.Message.computeOneofCase(a5, c35)) && c35 !== b && (void 0) !== d && (a5.wrappers_ && c35 in a5.wrappers_ && (a5.wrappers_[c35] = void 0), jspb.Message.setField(a5, c35, void 0));
    return jspb.Message.setField(a5, b, d);
};
jspb.Message.computeOneofCase = function(a5, b) {
    for(var c35, d, e = 0; e < b.length; e++){
        var f = b[e], g = jspb.Message.getField(a5, f);
        null != g && (c35 = f, d = g, jspb.Message.setField(a5, f, void 0));
    }
    return c35 ? (jspb.Message.setField(a5, c35, d), c35) : 0;
};
jspb.Message.getWrapperField = function(a5, b, c35, d) {
    a5.wrappers_ || (a5.wrappers_ = {
    });
    if (!a5.wrappers_[c35]) {
        var e = jspb.Message.getField(a5, c35);
        if (d || e) a5.wrappers_[c35] = new b(e);
    }
    return a5.wrappers_[c35];
};
jspb.Message.getRepeatedWrapperField = function(a5, b, c35) {
    jspb.Message.wrapRepeatedField_(a5, b, c35);
    b = a5.wrappers_[c35];
    b == jspb.Message.EMPTY_LIST_SENTINEL_ && (b = a5.wrappers_[c35] = []);
    return b;
};
jspb.Message.wrapRepeatedField_ = function(a5, b, c35) {
    a5.wrappers_ || (a5.wrappers_ = {
    });
    if (!a5.wrappers_[c35]) {
        for(var d = jspb.Message.getRepeatedField(a5, c35), e = [], f = 0; f < d.length; f++)e[f] = new b(d[f]);
        a5.wrappers_[c35] = e;
    }
};
jspb.Message.setWrapperField = function(a5, b, c35) {
    goog.asserts.assertInstanceof(a5, jspb.Message);
    a5.wrappers_ || (a5.wrappers_ = {
    });
    var d = c35 ? c35.toArray() : c35;
    a5.wrappers_[b] = c35;
    return jspb.Message.setField(a5, b, d);
};
jspb.Message.setOneofWrapperField = function(a5, b, c35, d) {
    goog.asserts.assertInstanceof(a5, jspb.Message);
    a5.wrappers_ || (a5.wrappers_ = {
    });
    var e = d ? d.toArray() : d;
    a5.wrappers_[b] = d;
    return jspb.Message.setOneofField(a5, b, c35, e);
};
jspb.Message.setRepeatedWrapperField = function(a5, b, c35) {
    goog.asserts.assertInstanceof(a5, jspb.Message);
    a5.wrappers_ || (a5.wrappers_ = {
    });
    c35 = c35 || [];
    for(var d = [], e = 0; e < c35.length; e++)d[e] = c35[e].toArray();
    a5.wrappers_[b] = c35;
    return jspb.Message.setField(a5, b, d);
};
jspb.Message.addToRepeatedWrapperField = function(a5, b, c35, d, e) {
    jspb.Message.wrapRepeatedField_(a5, d, b);
    var f = a5.wrappers_[b];
    f || (f = a5.wrappers_[b] = []);
    c35 = c35 ? c35 : new d;
    a5 = jspb.Message.getRepeatedField(a5, b);
    (void 0) != e ? (f.splice(e, 0, c35), a5.splice(e, 0, c35.toArray())) : (f.push(c35), a5.push(c35.toArray()));
    return c35;
};
jspb.Message.toMap = function(a5, b, c35, d) {
    for(var e = {
    }, f = 0; f < a5.length; f++)e[b.call(a5[f])] = c35 ? c35.call(a5[f], d, a5[f]) : a5[f];
    return e;
};
jspb.Message.prototype.syncMapFields_ = function() {
    if (this.wrappers_) for(var a5 in this.wrappers_){
        var b = this.wrappers_[a5];
        if (Array.isArray(b)) for(var c35 = 0; c35 < b.length; c35++)b[c35] && b[c35].toArray();
        else b && b.toArray();
    }
};
jspb.Message.prototype.toArray = function() {
    this.syncMapFields_();
    return this.array;
};
jspb.Message.GENERATE_TO_STRING && (jspb.Message.prototype.toString = function() {
    this.syncMapFields_();
    return this.array.toString();
});
jspb.Message.prototype.getExtension = function(a5) {
    if (this.extensionObject_) {
        this.wrappers_ || (this.wrappers_ = {
        });
        var b = a5.fieldIndex;
        if (a5.isRepeated) {
            if (a5.isMessageType()) return this.wrappers_[b] || (this.wrappers_[b] = goog.array.map(this.extensionObject_[b] || [], function(b1) {
                return new a5.ctor(b1);
            })), this.wrappers_[b];
        } else if (a5.isMessageType()) return !this.wrappers_[b] && this.extensionObject_[b] && (this.wrappers_[b] = new a5.ctor(this.extensionObject_[b])), this.wrappers_[b];
        return this.extensionObject_[b];
    }
};
jspb.Message.prototype.setExtension = function(a5, b) {
    this.wrappers_ || (this.wrappers_ = {
    });
    jspb.Message.maybeInitEmptyExtensionObject_(this);
    var c36 = a5.fieldIndex;
    a5.isRepeated ? (b = b || [], a5.isMessageType() ? (this.wrappers_[c36] = b, this.extensionObject_[c36] = goog.array.map(b, function(a6) {
        return a6.toArray();
    })) : this.extensionObject_[c36] = b) : a5.isMessageType() ? (this.wrappers_[c36] = b, this.extensionObject_[c36] = b ? b.toArray() : b) : this.extensionObject_[c36] = b;
    return this;
};
jspb.Message.difference = function(a5, b) {
    if (!(a5 instanceof b.constructor)) throw Error("Messages have different types.");
    var c36 = a5.toArray();
    b = b.toArray();
    var d = [], e = 0, f = c36.length > b.length ? c36.length : b.length;
    a5.getJsPbMessageId() && (d[0] = a5.getJsPbMessageId(), e = 1);
    for(; e < f; e++)jspb.Message.compareFields(c36[e], b[e]) || (d[e] = b[e]);
    return new a5.constructor(d);
};
jspb.Message.equals = function(a5, b) {
    return a5 == b || !(!a5 || !b) && a5 instanceof b.constructor && jspb.Message.compareFields(a5.toArray(), b.toArray());
};
jspb.Message.compareExtensions = function(a5, b) {
    a5 = a5 || {
    };
    b = b || {
    };
    var c36 = {
    }, d;
    for(d in a5)c36[d] = 0;
    for(d in b)c36[d] = 0;
    for(d in c36)if (!jspb.Message.compareFields(a5[d], b[d])) return false;
    return true;
};
jspb.Message.compareFields = function(a5, b) {
    if (a5 == b) return true;
    if (!goog.isObject(a5) || !goog.isObject(b)) return "number" === typeof a5 && isNaN(a5) || "number" === typeof b && isNaN(b) ? String(a5) == String(b) : false;
    if (a5.constructor != b.constructor) return false;
    if (jspb.Message.SUPPORTS_UINT8ARRAY_ && a5.constructor === Uint8Array) {
        if (a5.length != b.length) return false;
        for(var c36 = 0; c36 < a5.length; c36++)if (a5[c36] != b[c36]) return false;
        return true;
    }
    if (a5.constructor === Array) {
        var d = void 0, e = void 0, f = Math.max(a5.length, b.length);
        for(c36 = 0; c36 < f; c36++){
            var g = a5[c36], h = b[c36];
            g && g.constructor == Object && (goog.asserts.assert((void 0) === d), goog.asserts.assert(c36 === a5.length - 1), d = g, g = void 0);
            h && h.constructor == Object && (goog.asserts.assert((void 0) === e), goog.asserts.assert(c36 === b.length - 1), e = h, h = void 0);
            if (!jspb.Message.compareFields(g, h)) return false;
        }
        return d || e ? (d = d || {
        }, e = e || {
        }, jspb.Message.compareExtensions(d, e)) : true;
    }
    if (a5.constructor === Object) return jspb.Message.compareExtensions(a5, b);
    throw Error("Invalid type in JSPB array");
};
jspb.Message.prototype.cloneMessage = function() {
    return jspb.Message.cloneMessage(this);
};
jspb.Message.prototype.clone = function() {
    return jspb.Message.cloneMessage(this);
};
jspb.Message.clone = function(a5) {
    return jspb.Message.cloneMessage(a5);
};
jspb.Message.cloneMessage = function(a5) {
    return new a5.constructor(jspb.Message.clone_(a5.toArray()));
};
jspb.Message.copyInto = function(a5, b) {
    goog.asserts.assertInstanceof(a5, jspb.Message);
    goog.asserts.assertInstanceof(b, jspb.Message);
    goog.asserts.assert(a5.constructor == b.constructor, "Copy source and target message should have the same type.");
    a5 = jspb.Message.clone(a5);
    for(var c37 = b.toArray(), d = a5.toArray(), e = c37.length = 0; e < d.length; e++)c37[e] = d[e];
    b.wrappers_ = a5.wrappers_;
    b.extensionObject_ = a5.extensionObject_;
};
jspb.Message.clone_ = function(a5) {
    if (Array.isArray(a5)) {
        for(var b = Array(a5.length), c37 = 0; c37 < a5.length; c37++){
            var d = a5[c37];
            null != d && (b[c37] = "object" == typeof d ? jspb.Message.clone_(goog.asserts.assert(d)) : d);
        }
        return b;
    }
    if (jspb.Message.SUPPORTS_UINT8ARRAY_ && a5 instanceof Uint8Array) return new Uint8Array(a5);
    b = {
    };
    for(c37 in a5)d = a5[c37], null != d && (b[c37] = "object" == typeof d ? jspb.Message.clone_(goog.asserts.assert(d)) : d);
    return b;
};
jspb.Message.registerMessageType = function(a5, b) {
    b.messageId = a5;
};
jspb.Message.messageSetExtensions = {
};
jspb.Message.messageSetExtensionsBinary = {
};
jspb.Export = {
};
exports.Map = jspb.Map;
exports.Message = jspb.Message;
exports.BinaryReader = jspb.BinaryReader;
exports.BinaryWriter = jspb.BinaryWriter;
exports.ExtensionFieldInfo = jspb.ExtensionFieldInfo;
exports.ExtensionFieldBinaryInfo = jspb.ExtensionFieldBinaryInfo;
exports.exportSymbol = goog.exportSymbol;
exports.inherits = goog.inherits;
exports.object = {
    extend: goog.object.extend
};
exports.typeOf = goog.typeOf;

},{"buffer":"28LEo"}],"28LEo":[function(require,module,exports) {
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */ /* eslint-disable no-proto */ 'use strict';
var base64 = require('base64-js');
var ieee754 = require('ieee754');
var customInspectSymbol = typeof Symbol === 'function' && typeof Symbol['for'] === 'function' ? Symbol['for']('nodejs.util.inspect.custom') : null;
exports.Buffer = Buffer;
exports.SlowBuffer = SlowBuffer;
exports.INSPECT_MAX_BYTES = 50;
var K_MAX_LENGTH = 2147483647;
exports.kMaxLength = K_MAX_LENGTH;
/**
 * If `Buffer.TYPED_ARRAY_SUPPORT`:
 *   === true    Use Uint8Array implementation (fastest)
 *   === false   Print warning and recommend using `buffer` v4.x which has an Object
 *               implementation (most compatible, even IE6)
 *
 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
 * Opera 11.6+, iOS 4.2+.
 *
 * We report that the browser does not support typed arrays if the are not subclassable
 * using __proto__. Firefox 4-29 lacks support for adding new properties to `Uint8Array`
 * (See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438). IE 10 lacks support
 * for __proto__ and has a buggy typed array implementation.
 */ Buffer.TYPED_ARRAY_SUPPORT = typedArraySupport();
if (!Buffer.TYPED_ARRAY_SUPPORT && typeof console !== 'undefined' && typeof console.error === 'function') console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");
function typedArraySupport() {
    // Can typed array instances can be augmented?
    try {
        var arr = new Uint8Array(1);
        var proto = {
            foo: function() {
                return 42;
            }
        };
        Object.setPrototypeOf(proto, Uint8Array.prototype);
        Object.setPrototypeOf(arr, proto);
        return arr.foo() === 42;
    } catch (e) {
        return false;
    }
}
Object.defineProperty(Buffer.prototype, 'parent', {
    enumerable: true,
    get: function() {
        if (!Buffer.isBuffer(this)) return undefined;
        return this.buffer;
    }
});
Object.defineProperty(Buffer.prototype, 'offset', {
    enumerable: true,
    get: function() {
        if (!Buffer.isBuffer(this)) return undefined;
        return this.byteOffset;
    }
});
function createBuffer(length) {
    if (length > K_MAX_LENGTH) throw new RangeError('The value "' + length + '" is invalid for option "size"');
    // Return an augmented `Uint8Array` instance
    var buf = new Uint8Array(length);
    Object.setPrototypeOf(buf, Buffer.prototype);
    return buf;
}
/**
 * The Buffer constructor returns instances of `Uint8Array` that have their
 * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
 * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
 * and the `Uint8Array` methods. Square bracket notation works as expected -- it
 * returns a single octet.
 *
 * The `Uint8Array` prototype remains unmodified.
 */ function Buffer(arg, encodingOrOffset, length) {
    // Common case.
    if (typeof arg === 'number') {
        if (typeof encodingOrOffset === 'string') throw new TypeError('The "string" argument must be of type string. Received type number');
        return allocUnsafe(arg);
    }
    return from(arg, encodingOrOffset, length);
}
Buffer.poolSize = 8192; // not used by this implementation
function from(value, encodingOrOffset, length) {
    if (typeof value === 'string') return fromString(value, encodingOrOffset);
    if (ArrayBuffer.isView(value)) return fromArrayView(value);
    if (value == null) throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof value);
    if (isInstance(value, ArrayBuffer) || value && isInstance(value.buffer, ArrayBuffer)) return fromArrayBuffer(value, encodingOrOffset, length);
    if (typeof SharedArrayBuffer !== 'undefined' && (isInstance(value, SharedArrayBuffer) || value && isInstance(value.buffer, SharedArrayBuffer))) return fromArrayBuffer(value, encodingOrOffset, length);
    if (typeof value === 'number') throw new TypeError('The "value" argument must not be of type number. Received type number');
    var valueOf = value.valueOf && value.valueOf();
    if (valueOf != null && valueOf !== value) return Buffer.from(valueOf, encodingOrOffset, length);
    var b = fromObject(value);
    if (b) return b;
    if (typeof Symbol !== 'undefined' && Symbol.toPrimitive != null && typeof value[Symbol.toPrimitive] === 'function') return Buffer.from(value[Symbol.toPrimitive]('string'), encodingOrOffset, length);
    throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof value);
}
/**
 * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
 * if value is a number.
 * Buffer.from(str[, encoding])
 * Buffer.from(array)
 * Buffer.from(buffer)
 * Buffer.from(arrayBuffer[, byteOffset[, length]])
 **/ Buffer.from = function(value, encodingOrOffset, length) {
    return from(value, encodingOrOffset, length);
};
// Note: Change prototype *after* Buffer.from is defined to workaround Chrome bug:
// https://github.com/feross/buffer/pull/148
Object.setPrototypeOf(Buffer.prototype, Uint8Array.prototype);
Object.setPrototypeOf(Buffer, Uint8Array);
function assertSize(size) {
    if (typeof size !== 'number') throw new TypeError('"size" argument must be of type number');
    else if (size < 0) throw new RangeError('The value "' + size + '" is invalid for option "size"');
}
function alloc(size, fill, encoding) {
    assertSize(size);
    if (size <= 0) return createBuffer(size);
    if (fill !== undefined) // Only pay attention to encoding if it's a string. This
    // prevents accidentally sending in a number that would
    // be interpreted as a start offset.
    return typeof encoding === 'string' ? createBuffer(size).fill(fill, encoding) : createBuffer(size).fill(fill);
    return createBuffer(size);
}
/**
 * Creates a new filled Buffer instance.
 * alloc(size[, fill[, encoding]])
 **/ Buffer.alloc = function(size, fill, encoding) {
    return alloc(size, fill, encoding);
};
function allocUnsafe(size) {
    assertSize(size);
    return createBuffer(size < 0 ? 0 : checked(size) | 0);
}
/**
 * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
 * */ Buffer.allocUnsafe = function(size) {
    return allocUnsafe(size);
};
/**
 * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
 */ Buffer.allocUnsafeSlow = function(size) {
    return allocUnsafe(size);
};
function fromString(string, encoding) {
    if (typeof encoding !== 'string' || encoding === '') encoding = 'utf8';
    if (!Buffer.isEncoding(encoding)) throw new TypeError('Unknown encoding: ' + encoding);
    var length = byteLength(string, encoding) | 0;
    var buf = createBuffer(length);
    var actual = buf.write(string, encoding);
    if (actual !== length) // Writing a hex string, for example, that contains invalid characters will
    // cause everything after the first invalid character to be ignored. (e.g.
    // 'abxxcd' will be treated as 'ab')
    buf = buf.slice(0, actual);
    return buf;
}
function fromArrayLike(array) {
    var length = array.length < 0 ? 0 : checked(array.length) | 0;
    var buf = createBuffer(length);
    for(var i = 0; i < length; i += 1)buf[i] = array[i] & 255;
    return buf;
}
function fromArrayView(arrayView) {
    if (isInstance(arrayView, Uint8Array)) {
        var copy = new Uint8Array(arrayView);
        return fromArrayBuffer(copy.buffer, copy.byteOffset, copy.byteLength);
    }
    return fromArrayLike(arrayView);
}
function fromArrayBuffer(array, byteOffset, length) {
    if (byteOffset < 0 || array.byteLength < byteOffset) throw new RangeError('"offset" is outside of buffer bounds');
    if (array.byteLength < byteOffset + (length || 0)) throw new RangeError('"length" is outside of buffer bounds');
    var buf;
    if (byteOffset === undefined && length === undefined) buf = new Uint8Array(array);
    else if (length === undefined) buf = new Uint8Array(array, byteOffset);
    else buf = new Uint8Array(array, byteOffset, length);
    // Return an augmented `Uint8Array` instance
    Object.setPrototypeOf(buf, Buffer.prototype);
    return buf;
}
function fromObject(obj) {
    if (Buffer.isBuffer(obj)) {
        var len = checked(obj.length) | 0;
        var buf = createBuffer(len);
        if (buf.length === 0) return buf;
        obj.copy(buf, 0, 0, len);
        return buf;
    }
    if (obj.length !== undefined) {
        if (typeof obj.length !== 'number' || numberIsNaN(obj.length)) return createBuffer(0);
        return fromArrayLike(obj);
    }
    if (obj.type === 'Buffer' && Array.isArray(obj.data)) return fromArrayLike(obj.data);
}
function checked(length) {
    // Note: cannot use `length < K_MAX_LENGTH` here because that fails when
    // length is NaN (which is otherwise coerced to zero.)
    if (length >= K_MAX_LENGTH) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + K_MAX_LENGTH.toString(16) + ' bytes');
    return length | 0;
}
function SlowBuffer(length) {
    if (+length != length) length = 0;
    return Buffer.alloc(+length);
}
Buffer.isBuffer = function isBuffer(b) {
    return b != null && b._isBuffer === true && b !== Buffer.prototype; // so Buffer.isBuffer(Buffer.prototype) will be false
};
Buffer.compare = function compare(a, b) {
    if (isInstance(a, Uint8Array)) a = Buffer.from(a, a.offset, a.byteLength);
    if (isInstance(b, Uint8Array)) b = Buffer.from(b, b.offset, b.byteLength);
    if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');
    if (a === b) return 0;
    var x = a.length;
    var y = b.length;
    for(var i = 0, len = Math.min(x, y); i < len; ++i)if (a[i] !== b[i]) {
        x = a[i];
        y = b[i];
        break;
    }
    if (x < y) return -1;
    if (y < x) return 1;
    return 0;
};
Buffer.isEncoding = function isEncoding(encoding) {
    switch(String(encoding).toLowerCase()){
        case 'hex':
        case 'utf8':
        case 'utf-8':
        case 'ascii':
        case 'latin1':
        case 'binary':
        case 'base64':
        case 'ucs2':
        case 'ucs-2':
        case 'utf16le':
        case 'utf-16le':
            return true;
        default:
            return false;
    }
};
Buffer.concat = function concat(list, length) {
    if (!Array.isArray(list)) throw new TypeError('"list" argument must be an Array of Buffers');
    if (list.length === 0) return Buffer.alloc(0);
    var i;
    if (length === undefined) {
        length = 0;
        for(i = 0; i < list.length; ++i)length += list[i].length;
    }
    var buffer = Buffer.allocUnsafe(length);
    var pos = 0;
    for(i = 0; i < list.length; ++i){
        var buf = list[i];
        if (isInstance(buf, Uint8Array)) {
            if (pos + buf.length > buffer.length) Buffer.from(buf).copy(buffer, pos);
            else Uint8Array.prototype.set.call(buffer, buf, pos);
        } else if (!Buffer.isBuffer(buf)) throw new TypeError('"list" argument must be an Array of Buffers');
        else buf.copy(buffer, pos);
        pos += buf.length;
    }
    return buffer;
};
function byteLength(string, encoding) {
    if (Buffer.isBuffer(string)) return string.length;
    if (ArrayBuffer.isView(string) || isInstance(string, ArrayBuffer)) return string.byteLength;
    if (typeof string !== 'string') throw new TypeError("The \"string\" argument must be one of type string, Buffer, or ArrayBuffer. Received type " + typeof string);
    var len = string.length;
    var mustMatch = arguments.length > 2 && arguments[2] === true;
    if (!mustMatch && len === 0) return 0;
    // Use a for loop to avoid recursion
    var loweredCase = false;
    for(;;)switch(encoding){
        case 'ascii':
        case 'latin1':
        case 'binary':
            return len;
        case 'utf8':
        case 'utf-8':
            return utf8ToBytes(string).length;
        case 'ucs2':
        case 'ucs-2':
        case 'utf16le':
        case 'utf-16le':
            return len * 2;
        case 'hex':
            return len >>> 1;
        case 'base64':
            return base64ToBytes(string).length;
        default:
            if (loweredCase) return mustMatch ? -1 : utf8ToBytes(string).length; // assume utf8
            encoding = ('' + encoding).toLowerCase();
            loweredCase = true;
    }
}
Buffer.byteLength = byteLength;
function slowToString(encoding, start, end) {
    var loweredCase = false;
    // No need to verify that "this.length <= MAX_UINT32" since it's a read-only
    // property of a typed array.
    // This behaves neither like String nor Uint8Array in that we set start/end
    // to their upper/lower bounds if the value passed is out of range.
    // undefined is handled specially as per ECMA-262 6th Edition,
    // Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.
    if (start === undefined || start < 0) start = 0;
    // Return early if start > this.length. Done here to prevent potential uint32
    // coercion fail below.
    if (start > this.length) return '';
    if (end === undefined || end > this.length) end = this.length;
    if (end <= 0) return '';
    // Force coercion to uint32. This will also coerce falsey/NaN values to 0.
    end >>>= 0;
    start >>>= 0;
    if (end <= start) return '';
    if (!encoding) encoding = 'utf8';
    while(true)switch(encoding){
        case 'hex':
            return hexSlice(this, start, end);
        case 'utf8':
        case 'utf-8':
            return utf8Slice(this, start, end);
        case 'ascii':
            return asciiSlice(this, start, end);
        case 'latin1':
        case 'binary':
            return latin1Slice(this, start, end);
        case 'base64':
            return base64Slice(this, start, end);
        case 'ucs2':
        case 'ucs-2':
        case 'utf16le':
        case 'utf-16le':
            return utf16leSlice(this, start, end);
        default:
            if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding);
            encoding = (encoding + '').toLowerCase();
            loweredCase = true;
    }
}
// This property is used by `Buffer.isBuffer` (and the `is-buffer` npm package)
// to detect a Buffer instance. It's not possible to use `instanceof Buffer`
// reliably in a browserify context because there could be multiple different
// copies of the 'buffer' package in use. This method works even for Buffer
// instances that were created from another copy of the `buffer` package.
// See: https://github.com/feross/buffer/issues/154
Buffer.prototype._isBuffer = true;
function swap(b, n, m) {
    var i = b[n];
    b[n] = b[m];
    b[m] = i;
}
Buffer.prototype.swap16 = function swap16() {
    var len = this.length;
    if (len % 2 !== 0) throw new RangeError('Buffer size must be a multiple of 16-bits');
    for(var i = 0; i < len; i += 2)swap(this, i, i + 1);
    return this;
};
Buffer.prototype.swap32 = function swap32() {
    var len = this.length;
    if (len % 4 !== 0) throw new RangeError('Buffer size must be a multiple of 32-bits');
    for(var i = 0; i < len; i += 4){
        swap(this, i, i + 3);
        swap(this, i + 1, i + 2);
    }
    return this;
};
Buffer.prototype.swap64 = function swap64() {
    var len = this.length;
    if (len % 8 !== 0) throw new RangeError('Buffer size must be a multiple of 64-bits');
    for(var i = 0; i < len; i += 8){
        swap(this, i, i + 7);
        swap(this, i + 1, i + 6);
        swap(this, i + 2, i + 5);
        swap(this, i + 3, i + 4);
    }
    return this;
};
Buffer.prototype.toString = function toString() {
    var length = this.length;
    if (length === 0) return '';
    if (arguments.length === 0) return utf8Slice(this, 0, length);
    return slowToString.apply(this, arguments);
};
Buffer.prototype.toLocaleString = Buffer.prototype.toString;
Buffer.prototype.equals = function equals(b) {
    if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer');
    if (this === b) return true;
    return Buffer.compare(this, b) === 0;
};
Buffer.prototype.inspect = function inspect() {
    var str = '';
    var max = exports.INSPECT_MAX_BYTES;
    str = this.toString('hex', 0, max).replace(/(.{2})/g, '$1 ').trim();
    if (this.length > max) str += ' ... ';
    return '<Buffer ' + str + '>';
};
if (customInspectSymbol) Buffer.prototype[customInspectSymbol] = Buffer.prototype.inspect;
Buffer.prototype.compare = function compare1(target, start, end, thisStart, thisEnd) {
    if (isInstance(target, Uint8Array)) target = Buffer.from(target, target.offset, target.byteLength);
    if (!Buffer.isBuffer(target)) throw new TypeError("The \"target\" argument must be one of type Buffer or Uint8Array. Received type " + typeof target);
    if (start === undefined) start = 0;
    if (end === undefined) end = target ? target.length : 0;
    if (thisStart === undefined) thisStart = 0;
    if (thisEnd === undefined) thisEnd = this.length;
    if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) throw new RangeError('out of range index');
    if (thisStart >= thisEnd && start >= end) return 0;
    if (thisStart >= thisEnd) return -1;
    if (start >= end) return 1;
    start >>>= 0;
    end >>>= 0;
    thisStart >>>= 0;
    thisEnd >>>= 0;
    if (this === target) return 0;
    var x = thisEnd - thisStart;
    var y = end - start;
    var len = Math.min(x, y);
    var thisCopy = this.slice(thisStart, thisEnd);
    var targetCopy = target.slice(start, end);
    for(var i = 0; i < len; ++i)if (thisCopy[i] !== targetCopy[i]) {
        x = thisCopy[i];
        y = targetCopy[i];
        break;
    }
    if (x < y) return -1;
    if (y < x) return 1;
    return 0;
};
// Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
// OR the last index of `val` in `buffer` at offset <= `byteOffset`.
//
// Arguments:
// - buffer - a Buffer to search
// - val - a string, Buffer, or number
// - byteOffset - an index into `buffer`; will be clamped to an int32
// - encoding - an optional encoding, relevant is val is a string
// - dir - true for indexOf, false for lastIndexOf
function bidirectionalIndexOf(buffer, val, byteOffset, encoding, dir) {
    // Empty buffer means no match
    if (buffer.length === 0) return -1;
    // Normalize byteOffset
    if (typeof byteOffset === 'string') {
        encoding = byteOffset;
        byteOffset = 0;
    } else if (byteOffset > 2147483647) byteOffset = 2147483647;
    else if (byteOffset < -2147483648) byteOffset = -2147483648;
    byteOffset = +byteOffset; // Coerce to Number.
    if (numberIsNaN(byteOffset)) // byteOffset: it it's undefined, null, NaN, "foo", etc, search whole buffer
    byteOffset = dir ? 0 : buffer.length - 1;
    // Normalize byteOffset: negative offsets start from the end of the buffer
    if (byteOffset < 0) byteOffset = buffer.length + byteOffset;
    if (byteOffset >= buffer.length) {
        if (dir) return -1;
        else byteOffset = buffer.length - 1;
    } else if (byteOffset < 0) {
        if (dir) byteOffset = 0;
        else return -1;
    }
    // Normalize val
    if (typeof val === 'string') val = Buffer.from(val, encoding);
    // Finally, search either indexOf (if dir is true) or lastIndexOf
    if (Buffer.isBuffer(val)) {
        // Special case: looking for empty string/buffer always fails
        if (val.length === 0) return -1;
        return arrayIndexOf(buffer, val, byteOffset, encoding, dir);
    } else if (typeof val === 'number') {
        val = val & 255; // Search for a byte value [0-255]
        if (typeof Uint8Array.prototype.indexOf === 'function') {
            if (dir) return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset);
            else return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset);
        }
        return arrayIndexOf(buffer, [
            val
        ], byteOffset, encoding, dir);
    }
    throw new TypeError('val must be string, number or Buffer');
}
function arrayIndexOf(arr, val, byteOffset, encoding, dir) {
    var indexSize = 1;
    var arrLength = arr.length;
    var valLength = val.length;
    if (encoding !== undefined) {
        encoding = String(encoding).toLowerCase();
        if (encoding === 'ucs2' || encoding === 'ucs-2' || encoding === 'utf16le' || encoding === 'utf-16le') {
            if (arr.length < 2 || val.length < 2) return -1;
            indexSize = 2;
            arrLength /= 2;
            valLength /= 2;
            byteOffset /= 2;
        }
    }
    function read(buf, i) {
        if (indexSize === 1) return buf[i];
        else return buf.readUInt16BE(i * indexSize);
    }
    var i;
    if (dir) {
        var foundIndex = -1;
        for(i = byteOffset; i < arrLength; i++)if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
            if (foundIndex === -1) foundIndex = i;
            if (i - foundIndex + 1 === valLength) return foundIndex * indexSize;
        } else {
            if (foundIndex !== -1) i -= i - foundIndex;
            foundIndex = -1;
        }
    } else {
        if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength;
        for(i = byteOffset; i >= 0; i--){
            var found = true;
            for(var j = 0; j < valLength; j++)if (read(arr, i + j) !== read(val, j)) {
                found = false;
                break;
            }
            if (found) return i;
        }
    }
    return -1;
}
Buffer.prototype.includes = function includes(val, byteOffset, encoding) {
    return this.indexOf(val, byteOffset, encoding) !== -1;
};
Buffer.prototype.indexOf = function indexOf(val, byteOffset, encoding) {
    return bidirectionalIndexOf(this, val, byteOffset, encoding, true);
};
Buffer.prototype.lastIndexOf = function lastIndexOf(val, byteOffset, encoding) {
    return bidirectionalIndexOf(this, val, byteOffset, encoding, false);
};
function hexWrite(buf, string, offset, length) {
    offset = Number(offset) || 0;
    var remaining = buf.length - offset;
    if (!length) length = remaining;
    else {
        length = Number(length);
        if (length > remaining) length = remaining;
    }
    var strLen = string.length;
    if (length > strLen / 2) length = strLen / 2;
    for(var i = 0; i < length; ++i){
        var parsed = parseInt(string.substr(i * 2, 2), 16);
        if (numberIsNaN(parsed)) return i;
        buf[offset + i] = parsed;
    }
    return i;
}
function utf8Write(buf, string, offset, length) {
    return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length);
}
function asciiWrite(buf, string, offset, length) {
    return blitBuffer(asciiToBytes(string), buf, offset, length);
}
function base64Write(buf, string, offset, length) {
    return blitBuffer(base64ToBytes(string), buf, offset, length);
}
function ucs2Write(buf, string, offset, length) {
    return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length);
}
Buffer.prototype.write = function write(string, offset, length, encoding) {
    // Buffer#write(string)
    if (offset === undefined) {
        encoding = 'utf8';
        length = this.length;
        offset = 0;
    // Buffer#write(string, encoding)
    } else if (length === undefined && typeof offset === 'string') {
        encoding = offset;
        length = this.length;
        offset = 0;
    // Buffer#write(string, offset[, length][, encoding])
    } else if (isFinite(offset)) {
        offset = offset >>> 0;
        if (isFinite(length)) {
            length = length >>> 0;
            if (encoding === undefined) encoding = 'utf8';
        } else {
            encoding = length;
            length = undefined;
        }
    } else throw new Error('Buffer.write(string, encoding, offset[, length]) is no longer supported');
    var remaining = this.length - offset;
    if (length === undefined || length > remaining) length = remaining;
    if (string.length > 0 && (length < 0 || offset < 0) || offset > this.length) throw new RangeError('Attempt to write outside buffer bounds');
    if (!encoding) encoding = 'utf8';
    var loweredCase = false;
    for(;;)switch(encoding){
        case 'hex':
            return hexWrite(this, string, offset, length);
        case 'utf8':
        case 'utf-8':
            return utf8Write(this, string, offset, length);
        case 'ascii':
        case 'latin1':
        case 'binary':
            return asciiWrite(this, string, offset, length);
        case 'base64':
            // Warning: maxLength not taken into account in base64Write
            return base64Write(this, string, offset, length);
        case 'ucs2':
        case 'ucs-2':
        case 'utf16le':
        case 'utf-16le':
            return ucs2Write(this, string, offset, length);
        default:
            if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding);
            encoding = ('' + encoding).toLowerCase();
            loweredCase = true;
    }
};
Buffer.prototype.toJSON = function toJSON() {
    return {
        type: 'Buffer',
        data: Array.prototype.slice.call(this._arr || this, 0)
    };
};
function base64Slice(buf, start, end) {
    if (start === 0 && end === buf.length) return base64.fromByteArray(buf);
    else return base64.fromByteArray(buf.slice(start, end));
}
function utf8Slice(buf, start, end) {
    end = Math.min(buf.length, end);
    var res = [];
    var i = start;
    while(i < end){
        var firstByte = buf[i];
        var codePoint = null;
        var bytesPerSequence = firstByte > 239 ? 4 : firstByte > 223 ? 3 : firstByte > 191 ? 2 : 1;
        if (i + bytesPerSequence <= end) {
            var secondByte, thirdByte, fourthByte, tempCodePoint;
            switch(bytesPerSequence){
                case 1:
                    if (firstByte < 128) codePoint = firstByte;
                    break;
                case 2:
                    secondByte = buf[i + 1];
                    if ((secondByte & 192) === 128) {
                        tempCodePoint = (firstByte & 31) << 6 | secondByte & 63;
                        if (tempCodePoint > 127) codePoint = tempCodePoint;
                    }
                    break;
                case 3:
                    secondByte = buf[i + 1];
                    thirdByte = buf[i + 2];
                    if ((secondByte & 192) === 128 && (thirdByte & 192) === 128) {
                        tempCodePoint = (firstByte & 15) << 12 | (secondByte & 63) << 6 | thirdByte & 63;
                        if (tempCodePoint > 2047 && (tempCodePoint < 55296 || tempCodePoint > 57343)) codePoint = tempCodePoint;
                    }
                    break;
                case 4:
                    secondByte = buf[i + 1];
                    thirdByte = buf[i + 2];
                    fourthByte = buf[i + 3];
                    if ((secondByte & 192) === 128 && (thirdByte & 192) === 128 && (fourthByte & 192) === 128) {
                        tempCodePoint = (firstByte & 15) << 18 | (secondByte & 63) << 12 | (thirdByte & 63) << 6 | fourthByte & 63;
                        if (tempCodePoint > 65535 && tempCodePoint < 1114112) codePoint = tempCodePoint;
                    }
            }
        }
        if (codePoint === null) {
            // we did not generate a valid codePoint so insert a
            // replacement char (U+FFFD) and advance only 1 byte
            codePoint = 65533;
            bytesPerSequence = 1;
        } else if (codePoint > 65535) {
            // encode to utf16 (surrogate pair dance)
            codePoint -= 65536;
            res.push(codePoint >>> 10 & 1023 | 55296);
            codePoint = 56320 | codePoint & 1023;
        }
        res.push(codePoint);
        i += bytesPerSequence;
    }
    return decodeCodePointsArray(res);
}
// Based on http://stackoverflow.com/a/22747272/680742, the browser with
// the lowest limit is Chrome, with 0x10000 args.
// We go 1 magnitude less, for safety
var MAX_ARGUMENTS_LENGTH = 4096;
function decodeCodePointsArray(codePoints) {
    var len = codePoints.length;
    if (len <= MAX_ARGUMENTS_LENGTH) return String.fromCharCode.apply(String, codePoints); // avoid extra slice()
    // Decode in chunks to avoid "call stack size exceeded".
    var res = '';
    var i = 0;
    while(i < len)res += String.fromCharCode.apply(String, codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH));
    return res;
}
function asciiSlice(buf, start, end) {
    var ret = '';
    end = Math.min(buf.length, end);
    for(var i = start; i < end; ++i)ret += String.fromCharCode(buf[i] & 127);
    return ret;
}
function latin1Slice(buf, start, end) {
    var ret = '';
    end = Math.min(buf.length, end);
    for(var i = start; i < end; ++i)ret += String.fromCharCode(buf[i]);
    return ret;
}
function hexSlice(buf, start, end) {
    var len = buf.length;
    if (!start || start < 0) start = 0;
    if (!end || end < 0 || end > len) end = len;
    var out = '';
    for(var i = start; i < end; ++i)out += hexSliceLookupTable[buf[i]];
    return out;
}
function utf16leSlice(buf, start, end) {
    var bytes = buf.slice(start, end);
    var res = '';
    // If bytes.length is odd, the last 8 bits must be ignored (same as node.js)
    for(var i = 0; i < bytes.length - 1; i += 2)res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256);
    return res;
}
Buffer.prototype.slice = function slice(start, end) {
    var len = this.length;
    start = ~~start;
    end = end === undefined ? len : ~~end;
    if (start < 0) {
        start += len;
        if (start < 0) start = 0;
    } else if (start > len) start = len;
    if (end < 0) {
        end += len;
        if (end < 0) end = 0;
    } else if (end > len) end = len;
    if (end < start) end = start;
    var newBuf = this.subarray(start, end);
    // Return an augmented `Uint8Array` instance
    Object.setPrototypeOf(newBuf, Buffer.prototype);
    return newBuf;
};
/*
 * Need to make sure that buffer isn't trying to write out of bounds.
 */ function checkOffset(offset, ext, length) {
    if (offset % 1 !== 0 || offset < 0) throw new RangeError('offset is not uint');
    if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length');
}
Buffer.prototype.readUintLE = Buffer.prototype.readUIntLE = function readUIntLE(offset, byteLength1, noAssert) {
    offset = offset >>> 0;
    byteLength1 = byteLength1 >>> 0;
    if (!noAssert) checkOffset(offset, byteLength1, this.length);
    var val = this[offset];
    var mul = 1;
    var i = 0;
    while((++i) < byteLength1 && (mul *= 256))val += this[offset + i] * mul;
    return val;
};
Buffer.prototype.readUintBE = Buffer.prototype.readUIntBE = function readUIntBE(offset, byteLength1, noAssert) {
    offset = offset >>> 0;
    byteLength1 = byteLength1 >>> 0;
    if (!noAssert) checkOffset(offset, byteLength1, this.length);
    var val = this[offset + --byteLength1];
    var mul = 1;
    while(byteLength1 > 0 && (mul *= 256))val += this[offset + --byteLength1] * mul;
    return val;
};
Buffer.prototype.readUint8 = Buffer.prototype.readUInt8 = function readUInt8(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 1, this.length);
    return this[offset];
};
Buffer.prototype.readUint16LE = Buffer.prototype.readUInt16LE = function readUInt16LE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 2, this.length);
    return this[offset] | this[offset + 1] << 8;
};
Buffer.prototype.readUint16BE = Buffer.prototype.readUInt16BE = function readUInt16BE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 2, this.length);
    return this[offset] << 8 | this[offset + 1];
};
Buffer.prototype.readUint32LE = Buffer.prototype.readUInt32LE = function readUInt32LE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 4, this.length);
    return (this[offset] | this[offset + 1] << 8 | this[offset + 2] << 16) + this[offset + 3] * 16777216;
};
Buffer.prototype.readUint32BE = Buffer.prototype.readUInt32BE = function readUInt32BE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 4, this.length);
    return this[offset] * 16777216 + (this[offset + 1] << 16 | this[offset + 2] << 8 | this[offset + 3]);
};
Buffer.prototype.readIntLE = function readIntLE(offset, byteLength1, noAssert) {
    offset = offset >>> 0;
    byteLength1 = byteLength1 >>> 0;
    if (!noAssert) checkOffset(offset, byteLength1, this.length);
    var val = this[offset];
    var mul = 1;
    var i = 0;
    while((++i) < byteLength1 && (mul *= 256))val += this[offset + i] * mul;
    mul *= 128;
    if (val >= mul) val -= Math.pow(2, 8 * byteLength1);
    return val;
};
Buffer.prototype.readIntBE = function readIntBE(offset, byteLength1, noAssert) {
    offset = offset >>> 0;
    byteLength1 = byteLength1 >>> 0;
    if (!noAssert) checkOffset(offset, byteLength1, this.length);
    var i = byteLength1;
    var mul = 1;
    var val = this[offset + --i];
    while(i > 0 && (mul *= 256))val += this[offset + --i] * mul;
    mul *= 128;
    if (val >= mul) val -= Math.pow(2, 8 * byteLength1);
    return val;
};
Buffer.prototype.readInt8 = function readInt8(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 1, this.length);
    if (!(this[offset] & 128)) return this[offset];
    return (255 - this[offset] + 1) * -1;
};
Buffer.prototype.readInt16LE = function readInt16LE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 2, this.length);
    var val = this[offset] | this[offset + 1] << 8;
    return val & 32768 ? val | 4294901760 : val;
};
Buffer.prototype.readInt16BE = function readInt16BE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 2, this.length);
    var val = this[offset + 1] | this[offset] << 8;
    return val & 32768 ? val | 4294901760 : val;
};
Buffer.prototype.readInt32LE = function readInt32LE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 4, this.length);
    return this[offset] | this[offset + 1] << 8 | this[offset + 2] << 16 | this[offset + 3] << 24;
};
Buffer.prototype.readInt32BE = function readInt32BE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 4, this.length);
    return this[offset] << 24 | this[offset + 1] << 16 | this[offset + 2] << 8 | this[offset + 3];
};
Buffer.prototype.readFloatLE = function readFloatLE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 4, this.length);
    return ieee754.read(this, offset, true, 23, 4);
};
Buffer.prototype.readFloatBE = function readFloatBE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 4, this.length);
    return ieee754.read(this, offset, false, 23, 4);
};
Buffer.prototype.readDoubleLE = function readDoubleLE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 8, this.length);
    return ieee754.read(this, offset, true, 52, 8);
};
Buffer.prototype.readDoubleBE = function readDoubleBE(offset, noAssert) {
    offset = offset >>> 0;
    if (!noAssert) checkOffset(offset, 8, this.length);
    return ieee754.read(this, offset, false, 52, 8);
};
function checkInt(buf, value, offset, ext, max, min) {
    if (!Buffer.isBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance');
    if (value > max || value < min) throw new RangeError('"value" argument is out of bounds');
    if (offset + ext > buf.length) throw new RangeError('Index out of range');
}
Buffer.prototype.writeUintLE = Buffer.prototype.writeUIntLE = function writeUIntLE(value, offset, byteLength1, noAssert) {
    value = +value;
    offset = offset >>> 0;
    byteLength1 = byteLength1 >>> 0;
    if (!noAssert) {
        var maxBytes = Math.pow(2, 8 * byteLength1) - 1;
        checkInt(this, value, offset, byteLength1, maxBytes, 0);
    }
    var mul = 1;
    var i = 0;
    this[offset] = value & 255;
    while((++i) < byteLength1 && (mul *= 256))this[offset + i] = value / mul & 255;
    return offset + byteLength1;
};
Buffer.prototype.writeUintBE = Buffer.prototype.writeUIntBE = function writeUIntBE(value, offset, byteLength1, noAssert) {
    value = +value;
    offset = offset >>> 0;
    byteLength1 = byteLength1 >>> 0;
    if (!noAssert) {
        var maxBytes = Math.pow(2, 8 * byteLength1) - 1;
        checkInt(this, value, offset, byteLength1, maxBytes, 0);
    }
    var i = byteLength1 - 1;
    var mul = 1;
    this[offset + i] = value & 255;
    while((--i) >= 0 && (mul *= 256))this[offset + i] = value / mul & 255;
    return offset + byteLength1;
};
Buffer.prototype.writeUint8 = Buffer.prototype.writeUInt8 = function writeUInt8(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 1, 255, 0);
    this[offset] = value & 255;
    return offset + 1;
};
Buffer.prototype.writeUint16LE = Buffer.prototype.writeUInt16LE = function writeUInt16LE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 2, 65535, 0);
    this[offset] = value & 255;
    this[offset + 1] = value >>> 8;
    return offset + 2;
};
Buffer.prototype.writeUint16BE = Buffer.prototype.writeUInt16BE = function writeUInt16BE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 2, 65535, 0);
    this[offset] = value >>> 8;
    this[offset + 1] = value & 255;
    return offset + 2;
};
Buffer.prototype.writeUint32LE = Buffer.prototype.writeUInt32LE = function writeUInt32LE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 4, 4294967295, 0);
    this[offset + 3] = value >>> 24;
    this[offset + 2] = value >>> 16;
    this[offset + 1] = value >>> 8;
    this[offset] = value & 255;
    return offset + 4;
};
Buffer.prototype.writeUint32BE = Buffer.prototype.writeUInt32BE = function writeUInt32BE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 4, 4294967295, 0);
    this[offset] = value >>> 24;
    this[offset + 1] = value >>> 16;
    this[offset + 2] = value >>> 8;
    this[offset + 3] = value & 255;
    return offset + 4;
};
Buffer.prototype.writeIntLE = function writeIntLE(value, offset, byteLength1, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) {
        var limit = Math.pow(2, 8 * byteLength1 - 1);
        checkInt(this, value, offset, byteLength1, limit - 1, -limit);
    }
    var i = 0;
    var mul = 1;
    var sub = 0;
    this[offset] = value & 255;
    while((++i) < byteLength1 && (mul *= 256)){
        if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) sub = 1;
        this[offset + i] = (value / mul >> 0) - sub & 255;
    }
    return offset + byteLength1;
};
Buffer.prototype.writeIntBE = function writeIntBE(value, offset, byteLength1, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) {
        var limit = Math.pow(2, 8 * byteLength1 - 1);
        checkInt(this, value, offset, byteLength1, limit - 1, -limit);
    }
    var i = byteLength1 - 1;
    var mul = 1;
    var sub = 0;
    this[offset + i] = value & 255;
    while((--i) >= 0 && (mul *= 256)){
        if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) sub = 1;
        this[offset + i] = (value / mul >> 0) - sub & 255;
    }
    return offset + byteLength1;
};
Buffer.prototype.writeInt8 = function writeInt8(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 1, 127, -128);
    if (value < 0) value = 255 + value + 1;
    this[offset] = value & 255;
    return offset + 1;
};
Buffer.prototype.writeInt16LE = function writeInt16LE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 2, 32767, -32768);
    this[offset] = value & 255;
    this[offset + 1] = value >>> 8;
    return offset + 2;
};
Buffer.prototype.writeInt16BE = function writeInt16BE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 2, 32767, -32768);
    this[offset] = value >>> 8;
    this[offset + 1] = value & 255;
    return offset + 2;
};
Buffer.prototype.writeInt32LE = function writeInt32LE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 4, 2147483647, -2147483648);
    this[offset] = value & 255;
    this[offset + 1] = value >>> 8;
    this[offset + 2] = value >>> 16;
    this[offset + 3] = value >>> 24;
    return offset + 4;
};
Buffer.prototype.writeInt32BE = function writeInt32BE(value, offset, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkInt(this, value, offset, 4, 2147483647, -2147483648);
    if (value < 0) value = 4294967295 + value + 1;
    this[offset] = value >>> 24;
    this[offset + 1] = value >>> 16;
    this[offset + 2] = value >>> 8;
    this[offset + 3] = value & 255;
    return offset + 4;
};
function checkIEEE754(buf, value, offset, ext, max, min) {
    if (offset + ext > buf.length) throw new RangeError('Index out of range');
    if (offset < 0) throw new RangeError('Index out of range');
}
function writeFloat(buf, value, offset, littleEndian, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkIEEE754(buf, value, offset, 4, 340282346638528900000000000000000000000, -340282346638528900000000000000000000000);
    ieee754.write(buf, value, offset, littleEndian, 23, 4);
    return offset + 4;
}
Buffer.prototype.writeFloatLE = function writeFloatLE(value, offset, noAssert) {
    return writeFloat(this, value, offset, true, noAssert);
};
Buffer.prototype.writeFloatBE = function writeFloatBE(value, offset, noAssert) {
    return writeFloat(this, value, offset, false, noAssert);
};
function writeDouble(buf, value, offset, littleEndian, noAssert) {
    value = +value;
    offset = offset >>> 0;
    if (!noAssert) checkIEEE754(buf, value, offset, 8, 179769313486231570000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, -179769313486231570000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000);
    ieee754.write(buf, value, offset, littleEndian, 52, 8);
    return offset + 8;
}
Buffer.prototype.writeDoubleLE = function writeDoubleLE(value, offset, noAssert) {
    return writeDouble(this, value, offset, true, noAssert);
};
Buffer.prototype.writeDoubleBE = function writeDoubleBE(value, offset, noAssert) {
    return writeDouble(this, value, offset, false, noAssert);
};
// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
Buffer.prototype.copy = function copy(target, targetStart, start, end) {
    if (!Buffer.isBuffer(target)) throw new TypeError('argument should be a Buffer');
    if (!start) start = 0;
    if (!end && end !== 0) end = this.length;
    if (targetStart >= target.length) targetStart = target.length;
    if (!targetStart) targetStart = 0;
    if (end > 0 && end < start) end = start;
    // Copy 0 bytes; we're done
    if (end === start) return 0;
    if (target.length === 0 || this.length === 0) return 0;
    // Fatal error conditions
    if (targetStart < 0) throw new RangeError('targetStart out of bounds');
    if (start < 0 || start >= this.length) throw new RangeError('Index out of range');
    if (end < 0) throw new RangeError('sourceEnd out of bounds');
    // Are we oob?
    if (end > this.length) end = this.length;
    if (target.length - targetStart < end - start) end = target.length - targetStart + start;
    var len = end - start;
    if (this === target && typeof Uint8Array.prototype.copyWithin === 'function') // Use built-in when available, missing from IE11
    this.copyWithin(targetStart, start, end);
    else Uint8Array.prototype.set.call(target, this.subarray(start, end), targetStart);
    return len;
};
// Usage:
//    buffer.fill(number[, offset[, end]])
//    buffer.fill(buffer[, offset[, end]])
//    buffer.fill(string[, offset[, end]][, encoding])
Buffer.prototype.fill = function fill(val, start, end, encoding) {
    // Handle string cases:
    if (typeof val === 'string') {
        if (typeof start === 'string') {
            encoding = start;
            start = 0;
            end = this.length;
        } else if (typeof end === 'string') {
            encoding = end;
            end = this.length;
        }
        if (encoding !== undefined && typeof encoding !== 'string') throw new TypeError('encoding must be a string');
        if (typeof encoding === 'string' && !Buffer.isEncoding(encoding)) throw new TypeError('Unknown encoding: ' + encoding);
        if (val.length === 1) {
            var code = val.charCodeAt(0);
            if (encoding === 'utf8' && code < 128 || encoding === 'latin1') // Fast path: If `val` fits into a single byte, use that numeric value.
            val = code;
        }
    } else if (typeof val === 'number') val = val & 255;
    else if (typeof val === 'boolean') val = Number(val);
    // Invalid ranges are not set to a default, so can range check early.
    if (start < 0 || this.length < start || this.length < end) throw new RangeError('Out of range index');
    if (end <= start) return this;
    start = start >>> 0;
    end = end === undefined ? this.length : end >>> 0;
    if (!val) val = 0;
    var i;
    if (typeof val === 'number') for(i = start; i < end; ++i)this[i] = val;
    else {
        var bytes = Buffer.isBuffer(val) ? val : Buffer.from(val, encoding);
        var len = bytes.length;
        if (len === 0) throw new TypeError('The value "' + val + '" is invalid for argument "value"');
        for(i = 0; i < end - start; ++i)this[i + start] = bytes[i % len];
    }
    return this;
};
// HELPER FUNCTIONS
// ================
var INVALID_BASE64_RE = /[^+/0-9A-Za-z-_]/g;
function base64clean(str) {
    // Node takes equal signs as end of the Base64 encoding
    str = str.split('=')[0];
    // Node strips out invalid characters like \n and \t from the string, base64-js does not
    str = str.trim().replace(INVALID_BASE64_RE, '');
    // Node converts strings with length < 2 to ''
    if (str.length < 2) return '';
    // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
    while(str.length % 4 !== 0)str = str + '=';
    return str;
}
function utf8ToBytes(string, units) {
    units = units || Infinity;
    var codePoint;
    var length = string.length;
    var leadSurrogate = null;
    var bytes = [];
    for(var i = 0; i < length; ++i){
        codePoint = string.charCodeAt(i);
        // is surrogate component
        if (codePoint > 55295 && codePoint < 57344) {
            // last char was a lead
            if (!leadSurrogate) {
                // no lead yet
                if (codePoint > 56319) {
                    // unexpected trail
                    if ((units -= 3) > -1) bytes.push(239, 191, 189);
                    continue;
                } else if (i + 1 === length) {
                    // unpaired lead
                    if ((units -= 3) > -1) bytes.push(239, 191, 189);
                    continue;
                }
                // valid lead
                leadSurrogate = codePoint;
                continue;
            }
            // 2 leads in a row
            if (codePoint < 56320) {
                if ((units -= 3) > -1) bytes.push(239, 191, 189);
                leadSurrogate = codePoint;
                continue;
            }
            // valid surrogate pair
            codePoint = (leadSurrogate - 55296 << 10 | codePoint - 56320) + 65536;
        } else if (leadSurrogate) // valid bmp char, but last char was a lead
        {
            if ((units -= 3) > -1) bytes.push(239, 191, 189);
        }
        leadSurrogate = null;
        // encode utf8
        if (codePoint < 128) {
            if ((units -= 1) < 0) break;
            bytes.push(codePoint);
        } else if (codePoint < 2048) {
            if ((units -= 2) < 0) break;
            bytes.push(codePoint >> 6 | 192, codePoint & 63 | 128);
        } else if (codePoint < 65536) {
            if ((units -= 3) < 0) break;
            bytes.push(codePoint >> 12 | 224, codePoint >> 6 & 63 | 128, codePoint & 63 | 128);
        } else if (codePoint < 1114112) {
            if ((units -= 4) < 0) break;
            bytes.push(codePoint >> 18 | 240, codePoint >> 12 & 63 | 128, codePoint >> 6 & 63 | 128, codePoint & 63 | 128);
        } else throw new Error('Invalid code point');
    }
    return bytes;
}
function asciiToBytes(str) {
    var byteArray = [];
    for(var i = 0; i < str.length; ++i)// Node's code seems to be doing this and not & 0x7F..
    byteArray.push(str.charCodeAt(i) & 255);
    return byteArray;
}
function utf16leToBytes(str, units) {
    var c, hi, lo;
    var byteArray = [];
    for(var i = 0; i < str.length; ++i){
        if ((units -= 2) < 0) break;
        c = str.charCodeAt(i);
        hi = c >> 8;
        lo = c % 256;
        byteArray.push(lo);
        byteArray.push(hi);
    }
    return byteArray;
}
function base64ToBytes(str) {
    return base64.toByteArray(base64clean(str));
}
function blitBuffer(src, dst, offset, length) {
    for(var i = 0; i < length; ++i){
        if (i + offset >= dst.length || i >= src.length) break;
        dst[i + offset] = src[i];
    }
    return i;
}
// ArrayBuffer or Uint8Array objects from other contexts (i.e. iframes) do not pass
// the `instanceof` check but they should be treated as of that type.
// See: https://github.com/feross/buffer/issues/166
function isInstance(obj, type) {
    return obj instanceof type || obj != null && obj.constructor != null && obj.constructor.name != null && obj.constructor.name === type.name;
}
function numberIsNaN(obj) {
    // For IE11 support
    return obj !== obj; // eslint-disable-line no-self-compare
}
// Create lookup table for `toString('hex')`
// See: https://github.com/feross/buffer/issues/219
var hexSliceLookupTable = function() {
    var alphabet = '0123456789abcdef';
    var table = new Array(256);
    for(var i = 0; i < 16; ++i){
        var i16 = i * 16;
        for(var j = 0; j < 16; ++j)table[i16 + j] = alphabet[i] + alphabet[j];
    }
    return table;
}();

},{"base64-js":"pn7Hy","ieee754":"nwidK"}],"pn7Hy":[function(require,module,exports) {
'use strict';
exports.byteLength = byteLength;
exports.toByteArray = toByteArray;
exports.fromByteArray = fromByteArray;
var lookup = [];
var revLookup = [];
var Arr = typeof Uint8Array !== 'undefined' ? Uint8Array : Array;
var code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
for(var i = 0, len = code.length; i < len; ++i){
    lookup[i] = code[i];
    revLookup[code.charCodeAt(i)] = i;
}
// Support decoding URL-safe base64 strings, as Node.js does.
// See: https://en.wikipedia.org/wiki/Base64#URL_applications
revLookup['-'.charCodeAt(0)] = 62;
revLookup['_'.charCodeAt(0)] = 63;
function getLens(b64) {
    var len1 = b64.length;
    if (len1 % 4 > 0) throw new Error('Invalid string. Length must be a multiple of 4');
    // Trim off extra bytes after placeholder bytes are found
    // See: https://github.com/beatgammit/base64-js/issues/42
    var validLen = b64.indexOf('=');
    if (validLen === -1) validLen = len1;
    var placeHoldersLen = validLen === len1 ? 0 : 4 - validLen % 4;
    return [
        validLen,
        placeHoldersLen
    ];
}
// base64 is 4/3 + up to two characters of the original data
function byteLength(b64) {
    var lens = getLens(b64);
    var validLen = lens[0];
    var placeHoldersLen = lens[1];
    return (validLen + placeHoldersLen) * 3 / 4 - placeHoldersLen;
}
function _byteLength(b64, validLen, placeHoldersLen) {
    return (validLen + placeHoldersLen) * 3 / 4 - placeHoldersLen;
}
function toByteArray(b64) {
    var tmp;
    var lens = getLens(b64);
    var validLen = lens[0];
    var placeHoldersLen = lens[1];
    var arr = new Arr(_byteLength(b64, validLen, placeHoldersLen));
    var curByte = 0;
    // if there are placeholders, only get up to the last complete 4 chars
    var len1 = placeHoldersLen > 0 ? validLen - 4 : validLen;
    var i1;
    for(i1 = 0; i1 < len1; i1 += 4){
        tmp = revLookup[b64.charCodeAt(i1)] << 18 | revLookup[b64.charCodeAt(i1 + 1)] << 12 | revLookup[b64.charCodeAt(i1 + 2)] << 6 | revLookup[b64.charCodeAt(i1 + 3)];
        arr[curByte++] = tmp >> 16 & 255;
        arr[curByte++] = tmp >> 8 & 255;
        arr[curByte++] = tmp & 255;
    }
    if (placeHoldersLen === 2) {
        tmp = revLookup[b64.charCodeAt(i1)] << 2 | revLookup[b64.charCodeAt(i1 + 1)] >> 4;
        arr[curByte++] = tmp & 255;
    }
    if (placeHoldersLen === 1) {
        tmp = revLookup[b64.charCodeAt(i1)] << 10 | revLookup[b64.charCodeAt(i1 + 1)] << 4 | revLookup[b64.charCodeAt(i1 + 2)] >> 2;
        arr[curByte++] = tmp >> 8 & 255;
        arr[curByte++] = tmp & 255;
    }
    return arr;
}
function tripletToBase64(num) {
    return lookup[num >> 18 & 63] + lookup[num >> 12 & 63] + lookup[num >> 6 & 63] + lookup[num & 63];
}
function encodeChunk(uint8, start, end) {
    var tmp;
    var output = [];
    for(var i1 = start; i1 < end; i1 += 3){
        tmp = (uint8[i1] << 16 & 16711680) + (uint8[i1 + 1] << 8 & 65280) + (uint8[i1 + 2] & 255);
        output.push(tripletToBase64(tmp));
    }
    return output.join('');
}
function fromByteArray(uint8) {
    var tmp;
    var len1 = uint8.length;
    var extraBytes = len1 % 3// if we have 1 byte left, pad 2 bytes
    ;
    var parts = [];
    var maxChunkLength = 16383// must be multiple of 3
    ;
    // go through the array every three bytes, we'll deal with trailing stuff later
    for(var i1 = 0, len2 = len1 - extraBytes; i1 < len2; i1 += maxChunkLength)parts.push(encodeChunk(uint8, i1, i1 + maxChunkLength > len2 ? len2 : i1 + maxChunkLength));
    // pad the end with zeros, but make sure to not forget the extra bytes
    if (extraBytes === 1) {
        tmp = uint8[len1 - 1];
        parts.push(lookup[tmp >> 2] + lookup[tmp << 4 & 63] + '==');
    } else if (extraBytes === 2) {
        tmp = (uint8[len1 - 2] << 8) + uint8[len1 - 1];
        parts.push(lookup[tmp >> 10] + lookup[tmp >> 4 & 63] + lookup[tmp << 2 & 63] + '=');
    }
    return parts.join('');
}

},{}],"nwidK":[function(require,module,exports) {
/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */ exports.read = function(buffer, offset, isLE, mLen, nBytes) {
    var e, m;
    var eLen = nBytes * 8 - mLen - 1;
    var eMax = (1 << eLen) - 1;
    var eBias = eMax >> 1;
    var nBits = -7;
    var i = isLE ? nBytes - 1 : 0;
    var d = isLE ? -1 : 1;
    var s = buffer[offset + i];
    i += d;
    e = s & (1 << -nBits) - 1;
    s >>= -nBits;
    nBits += eLen;
    for(; nBits > 0; e = e * 256 + buffer[offset + i], i += d, nBits -= 8);
    m = e & (1 << -nBits) - 1;
    e >>= -nBits;
    nBits += mLen;
    for(; nBits > 0; m = m * 256 + buffer[offset + i], i += d, nBits -= 8);
    if (e === 0) e = 1 - eBias;
    else if (e === eMax) return m ? NaN : (s ? -1 : 1) * Infinity;
    else {
        m = m + Math.pow(2, mLen);
        e = e - eBias;
    }
    return (s ? -1 : 1) * m * Math.pow(2, e - mLen);
};
exports.write = function(buffer, value, offset, isLE, mLen, nBytes) {
    var e, m, c;
    var eLen = nBytes * 8 - mLen - 1;
    var eMax = (1 << eLen) - 1;
    var eBias = eMax >> 1;
    var rt = mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0;
    var i = isLE ? 0 : nBytes - 1;
    var d = isLE ? 1 : -1;
    var s = value < 0 || value === 0 && 1 / value < 0 ? 1 : 0;
    value = Math.abs(value);
    if (isNaN(value) || value === Infinity) {
        m = isNaN(value) ? 1 : 0;
        e = eMax;
    } else {
        e = Math.floor(Math.log(value) / Math.LN2);
        if (value * (c = Math.pow(2, -e)) < 1) {
            e--;
            c *= 2;
        }
        if (e + eBias >= 1) value += rt / c;
        else value += rt * Math.pow(2, 1 - eBias);
        if (value * c >= 2) {
            e++;
            c /= 2;
        }
        if (e + eBias >= eMax) {
            m = 0;
            e = eMax;
        } else if (e + eBias >= 1) {
            m = (value * c - 1) * Math.pow(2, mLen);
            e = e + eBias;
        } else {
            m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen);
            e = 0;
        }
    }
    for(; mLen >= 8; buffer[offset + i] = m & 255, i += d, m /= 256, mLen -= 8);
    e = e << mLen | m;
    eLen += mLen;
    for(; eLen > 0; buffer[offset + i] = e & 255, i += d, e /= 256, eLen -= 8);
    buffer[offset + i - d] |= s * 128;
};

},{}],"1toPr":[function(require,module,exports) {
(function(global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('google-protobuf'), require('@ngx-grpc/common')) : typeof define === 'function' && define.amd ? define('@ngx-grpc/well-known-types', [
        'exports',
        'google-protobuf',
        '@ngx-grpc/common'
    ], factory) : (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory((global['ngx-grpc'] = global['ngx-grpc'] || {
    }, global['ngx-grpc']['well-known-types'] = {
    }), global.googleProtobuf, global.common));
})(this, function(exports, googleProtobuf, common) {
    'use strict';
    /**
     * Well known type, more at https://developers.google.com/protocol-buffers/docs/reference/google.protobuf
     */ var Any = function() {
        /**
         * Message constructor. Initializes the properties and applies default Protobuf values if necessary
         * @param _value initial values object or instance of Any to deeply clone from
         */ function Any1(_value) {
            _value = _value || {
            };
            this.typeUrl = _value.typeUrl;
            this.value = _value.value;
            Any1.refineValues(this);
        }
        /**
         * Deserialize binary data to message
         * @param instance message instance
         */ Any1.deserializeBinary = function(bytes) {
            var instance = new Any1();
            Any1.deserializeBinaryFromReader(instance, new googleProtobuf.BinaryReader(bytes));
            return instance;
        };
        /**
         * Create a new Any instance with a packed message
         */ Any1.pack = function(msg) {
            var any = new Any1();
            any.pack(msg);
            return any;
        };
        /**
         * Check all the properties and set default protobuf values if necessary
         * @param _instance message instance
         */ Any1.refineValues = function(_instance) {
            _instance.typeUrl = _instance.typeUrl || '';
            _instance.value = _instance.value || new Uint8Array();
        };
        /**
         * Deserializes / reads binary message into message instance using provided binary reader
         * @param _instance message instance
         * @param _reader binary reader instance
         */ Any1.deserializeBinaryFromReader = function(_instance, _reader) {
            while(_reader.nextField()){
                if (_reader.isEndGroup()) break;
                switch(_reader.getFieldNumber()){
                    case 1:
                        _instance.typeUrl = _reader.readString();
                        break;
                    case 2:
                        _instance.value = _reader.readBytes();
                        break;
                    default:
                        _reader.skipField();
                }
            }
            Any1.refineValues(_instance);
        };
        /**
         * Serializes a message to binary format using provided binary reader
         * @param _instance message instance
         * @param _writer binary writer instance
         */ Any1.serializeBinaryToWriter = function(_instance, _writer) {
            if (_instance.typeUrl) _writer.writeString(1, _instance.typeUrl);
            if (_instance.value && _instance.value.length) _writer.writeBytes(2, _instance.value);
        };
        Object.defineProperty(Any1.prototype, "typeUrl", {
            get: function() {
                return this._typeUrl;
            },
            set: function(value) {
                this._typeUrl = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Any1.prototype, "value", {
            get: function() {
                return this._value;
            },
            set: function(value) {
                this._value = value;
            },
            enumerable: false,
            configurable: true
        });
        /**
         * Serialize message to binary data
         * @param instance message instance
         */ Any1.prototype.serializeBinary = function() {
            var writer = new googleProtobuf.BinaryWriter();
            Any1.serializeBinaryToWriter(this, writer);
            return writer.getResultBuffer();
        };
        /**
         * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
         */ Any1.prototype.toObject = function() {
            return {
                typeUrl: this.typeUrl,
                value: this.value ? this.value.subarray(0) : new Uint8Array()
            };
        };
        /**
         * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
         */ Any1.prototype.toJSON = function() {
            return this.toObject();
        };
        /**
         * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
         * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
         * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
         */ Any1.prototype.toProtobufJSON = function(// @ts-ignore
        options) {
            if (!(options === null || options === void 0 ? void 0 : options.messagePool)) throw new Error("Message pool is required to cast Any to JSON");
            var msg = this.unpack(options.messagePool);
            if (!msg) return {
                '@type': this.typeUrl
            };
            var json = msg.toProtobufJSON(options);
            if (typeof json !== 'object') return {
                '@type': this.typeUrl,
                value: json
            };
            return Object.assign(Object.assign({
            }, json), {
                '@type': this.typeUrl
            });
        };
        /**
         * Get the packed message id based on typeUrl.
         * If no typeUrl is provided null is returned.
         */ Any1.prototype.getPackedMessageId = function() {
            if (!this.typeUrl) return null;
            if (!this.typeUrl.startsWith(Any1.prefix)) throw new Error("Type URL does not start with " + Any1.prefix);
            return this.typeUrl.substr(Any1.prefix.length);
        };
        /**
         * Get the type of the packed message.
         * Requires predefined GrpcMessagePool with expected message types within.
         * If no type is found within the pool the error is thrown, unless throwWhenNotInThePool is set to false; in this case null will be returned.
         */ Any1.prototype.getPackedMessageType = function(messagePool, throwWhenNotInThePool) {
            if (throwWhenNotInThePool === void 0) throwWhenNotInThePool = true;
            var id = this.getPackedMessageId();
            if (!id) return null;
            var msgClass = messagePool.get(id);
            if (!msgClass) {
                if (throwWhenNotInThePool) throw new Error("Message with identifier '" + this.typeUrl + "' is not present in message pool");
                else return null;
            }
            return msgClass;
        };
        /**
         * Unpack the current value into a message.
         * Requires predefined GrpcMessagePool with expected message types within.
         * If no type is found within the pool the error is thrown.
         */ Any1.prototype.unpack = function(messagePool) {
            var messageClass = this.getPackedMessageType(messagePool);
            if (!messageClass) throw new Error("Message type cannot be resolved");
            if (!this.value) throw new Error("Cannot unpack value that is unset");
            return messageClass.deserializeBinary(this.value);
        };
        /**
         * Pack the given message into current Any instance
         */ Any1.prototype.pack = function(msg) {
            var id = msg.constructor.id;
            if (!id) throw new Error("Message is invalid or does not have an id");
            this.typeUrl = "" + Any1.prefix + id;
            this.value = msg.serializeBinary();
        };
        return Any1;
    }();
    Any.id = 'google.protobuf.Any';
    Any.prefix = 'type.googleapis.com/';
    /**
     * Well known type, more at https://developers.google.com/protocol-buffers/docs/reference/google.protobuf
     */ var SourceContext = function() {
        /**
         * Message constructor. Initializes the properties and applies default Protobuf values if necessary
         * @param _value initial values object or instance of SourceContext to deeply clone from
         */ function SourceContext1(_value) {
            _value = _value || {
            };
            this.fileName = _value.fileName;
            SourceContext1.refineValues(this);
        }
        /**
         * Deserialize binary data to message
         * @param instance message instance
         */ SourceContext1.deserializeBinary = function(bytes) {
            var instance = new SourceContext1();
            SourceContext1.deserializeBinaryFromReader(instance, new googleProtobuf.BinaryReader(bytes));
            return instance;
        };
        /**
         * Check all the properties and set default protobuf values if necessary
         * @param _instance message instance
         */ SourceContext1.refineValues = function(_instance) {
            _instance.fileName = _instance.fileName || '';
        };
        /**
         * Deserializes / reads binary message into message instance using provided binary reader
         * @param _instance message instance
         * @param _reader binary reader instance
         */ SourceContext1.deserializeBinaryFromReader = function(_instance, _reader) {
            while(_reader.nextField()){
                if (_reader.isEndGroup()) break;
                switch(_reader.getFieldNumber()){
                    case 1:
                        _instance.fileName = _reader.readString();
                        break;
                    default:
                        _reader.skipField();
                }
            }
            SourceContext1.refineValues(_instance);
        };
        /**
         * Serializes a message to binary format using provided binary reader
         * @param _instance message instance
         * @param _writer binary writer instance
         */ SourceContext1.serializeBinaryToWriter = function(_instance, _writer) {
            if (_instance.fileName) _writer.writeString(1, _instance.fileName);
        };
        Object.defineProperty(SourceContext1.prototype, "fileName", {
            get: function() {
                return this._fileName;
            },
            set: function(value) {
                this._fileName = value;
            },
            enumerable: false,
            configurable: true
        });
        /**
         * Serialize message to binary data
         * @param instance message instance
         */ SourceContext1.prototype.serializeBinary = function() {
            var writer = new googleProtobuf.BinaryWriter();
            SourceContext1.serializeBinaryToWriter(this, writer);
            return writer.getResultBuffer();
        };
        /**
         * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
         */ SourceContext1.prototype.toObject = function() {
            return {
                fileName: this.fileName
            };
        };
        /**
         * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
         */ SourceContext1.prototype.toJSON = function() {
            return this.toObject();
        };
        /**
         * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
         * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
         * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
         */ SourceContext1.prototype.toProtobufJSON = function(// @ts-ignore
        options) {
            return {
                fileName: this.fileName
            };
        };
        return SourceContext1;
    }();
    SourceContext.id = 'google.protobuf.SourceContext';
    exports.Syntax = void 0;
    (function(Syntax) {
        Syntax[Syntax["SYNTAX_PROTO2"] = 0] = "SYNTAX_PROTO2";
        Syntax[Syntax["SYNTAX_PROTO3"] = 1] = "SYNTAX_PROTO3";
    })(exports.Syntax || (exports.Syntax = {
    }));
    /**
     * Well known type, more at https://developers.google.com/protocol-buffers/docs/reference/google.protobuf
     */ var Type = function() {
        /**
         * Message constructor. Initializes the properties and applies default Protobuf values if necessary
         * @param _value initial values object or instance of Type to deeply clone from
         */ function Type1(_value) {
            _value = _value || {
            };
            this.name = _value.name;
            this.fields = (_value.fields || []).map(function(m) {
                return new exports.Field(m);
            });
            this.oneofs = (_value.oneofs || []).slice();
            this.options = (_value.options || []).map(function(m) {
                return new Option1(m);
            });
            this.sourceContext = _value.sourceContext ? new SourceContext(_value.sourceContext) : undefined;
            this.syntax = _value.syntax;
            Type1.refineValues(this);
        }
        /**
         * Deserialize binary data to message
         * @param instance message instance
         */ Type1.deserializeBinary = function(bytes) {
            var instance = new Type1();
            Type1.deserializeBinaryFromReader(instance, new googleProtobuf.BinaryReader(bytes));
            return instance;
        };
        /**
         * Check all the properties and set default protobuf values if necessary
         * @param _instance message instance
         */ Type1.refineValues = function(_instance) {
            _instance.name = _instance.name || '';
            _instance.fields = _instance.fields || [];
            _instance.oneofs = _instance.oneofs || [];
            _instance.options = _instance.options || [];
            _instance.sourceContext = _instance.sourceContext || undefined;
            _instance.syntax = _instance.syntax || 0;
        };
        /**
         * Deserializes / reads binary message into message instance using provided binary reader
         * @param _instance message instance
         * @param _reader binary reader instance
         */ Type1.deserializeBinaryFromReader = function(_instance, _reader) {
            while(_reader.nextField()){
                if (_reader.isEndGroup()) break;
                switch(_reader.getFieldNumber()){
                    case 1:
                        _instance.name = _reader.readString();
                        break;
                    case 2:
                        var messageInitializer2 = new exports.Field();
                        _reader.readMessage(messageInitializer2, exports.Field.deserializeBinaryFromReader);
                        (_instance.fields = _instance.fields || []).push(messageInitializer2);
                        break;
                    case 3:
                        (_instance.oneofs = _instance.oneofs || []).push(_reader.readString());
                        break;
                    case 4:
                        var messageInitializer4 = new Option1();
                        _reader.readMessage(messageInitializer4, Option1.deserializeBinaryFromReader);
                        (_instance.options = _instance.options || []).push(messageInitializer4);
                        break;
                    case 5:
                        _instance.sourceContext = new SourceContext();
                        _reader.readMessage(_instance.sourceContext, SourceContext.deserializeBinaryFromReader);
                        break;
                    case 6:
                        _instance.syntax = _reader.readEnum();
                        break;
                    default:
                        _reader.skipField();
                }
            }
            Type1.refineValues(_instance);
        };
        /**
         * Serializes a message to binary format using provided binary reader
         * @param _instance message instance
         * @param _writer binary writer instance
         */ Type1.serializeBinaryToWriter = function(_instance, _writer) {
            if (_instance.name) _writer.writeString(1, _instance.name);
            if (_instance.fields && _instance.fields.length) _writer.writeRepeatedMessage(2, _instance.fields, exports.Field.serializeBinaryToWriter);
            if (_instance.oneofs && _instance.oneofs.length) _writer.writeRepeatedString(3, _instance.oneofs);
            if (_instance.options && _instance.options.length) _writer.writeRepeatedMessage(4, _instance.options, Option1.serializeBinaryToWriter);
            if (_instance.sourceContext) _writer.writeMessage(5, _instance.sourceContext, SourceContext.serializeBinaryToWriter);
            if (_instance.syntax) _writer.writeEnum(6, _instance.syntax);
        };
        Object.defineProperty(Type1.prototype, "name", {
            get: function() {
                return this._name;
            },
            set: function(value) {
                this._name = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Type1.prototype, "fields", {
            get: function() {
                return this._fields;
            },
            set: function(value) {
                this._fields = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Type1.prototype, "oneofs", {
            get: function() {
                return this._oneofs;
            },
            set: function(value) {
                this._oneofs = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Type1.prototype, "options", {
            get: function() {
                return this._options;
            },
            set: function(value) {
                this._options = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Type1.prototype, "sourceContext", {
            get: function() {
                return this._sourceContext;
            },
            set: function(value) {
                this._sourceContext = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Type1.prototype, "syntax", {
            get: function() {
                return this._syntax;
            },
            set: function(value) {
                this._syntax = value;
            },
            enumerable: false,
            configurable: true
        });
        /**
         * Serialize message to binary data
         * @param instance message instance
         */ Type1.prototype.serializeBinary = function() {
            var writer = new googleProtobuf.BinaryWriter();
            Type1.serializeBinaryToWriter(this, writer);
            return writer.getResultBuffer();
        };
        /**
         * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
         */ Type1.prototype.toObject = function() {
            return {
                name: this.name,
                fields: (this.fields || []).map(function(m) {
                    return m.toObject();
                }),
                oneofs: (this.oneofs || []).slice(),
                options: (this.options || []).map(function(m) {
                    return m.toObject();
                }),
                sourceContext: this.sourceContext ? this.sourceContext.toObject() : undefined,
                syntax: this.syntax
            };
        };
        /**
         * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
         */ Type1.prototype.toJSON = function() {
            return this.toObject();
        };
        /**
         * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
         * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
         * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
         */ Type1.prototype.toProtobufJSON = function(// @ts-ignore
        options) {
            var _a;
            return {
                name: this.name,
                fields: (this.fields || []).map(function(m) {
                    return m.toProtobufJSON(options);
                }),
                oneofs: (this.oneofs || []).slice(),
                options: (this.options || []).map(function(m) {
                    return m.toProtobufJSON(options);
                }),
                sourceContext: this.sourceContext ? this.sourceContext.toProtobufJSON(options) : null,
                syntax: exports.Syntax[(_a = this.syntax) !== null && _a !== void 0 ? _a : 0]
            };
        };
        return Type1;
    }();
    Type.id = 'google.protobuf.Type';
    /**
     * Well known type, more at https://developers.google.com/protocol-buffers/docs/reference/google.protobuf
     */ exports.Field = (function() {
        /**
         * Message constructor. Initializes the properties and applies default Protobuf values if necessary
         * @param _value initial values object or instance of Field to deeply clone from
         */ function Field(_value) {
            _value = _value || {
            };
            this.kind = _value.kind;
            this.cardinality = _value.cardinality;
            this.number = _value.number;
            this.name = _value.name;
            this.typeUrl = _value.typeUrl;
            this.oneofIndex = _value.oneofIndex;
            this.packed = _value.packed;
            this.options = (_value.options || []).map(function(m) {
                return new Option1(m);
            });
            this.jsonName = _value.jsonName;
            this.defaultValue = _value.defaultValue;
            Field.refineValues(this);
        }
        /**
         * Deserialize binary data to message
         * @param instance message instance
         */ Field.deserializeBinary = function(bytes) {
            var instance = new Field();
            Field.deserializeBinaryFromReader(instance, new googleProtobuf.BinaryReader(bytes));
            return instance;
        };
        /**
         * Check all the properties and set default protobuf values if necessary
         * @param _instance message instance
         */ Field.refineValues = function(_instance) {
            _instance.kind = _instance.kind || 0;
            _instance.cardinality = _instance.cardinality || 0;
            _instance.number = _instance.number || 0;
            _instance.name = _instance.name || '';
            _instance.typeUrl = _instance.typeUrl || '';
            _instance.oneofIndex = _instance.oneofIndex || 0;
            _instance.packed = _instance.packed || false;
            _instance.options = _instance.options || [];
            _instance.jsonName = _instance.jsonName || '';
            _instance.defaultValue = _instance.defaultValue || '';
        };
        /**
         * Deserializes / reads binary message into message instance using provided binary reader
         * @param _instance message instance
         * @param _reader binary reader instance
         */ Field.deserializeBinaryFromReader = function(_instance, _reader) {
            while(_reader.nextField()){
                if (_reader.isEndGroup()) break;
                switch(_reader.getFieldNumber()){
                    case 1:
                        _instance.kind = _reader.readEnum();
                        break;
                    case 2:
                        _instance.cardinality = _reader.readEnum();
                        break;
                    case 3:
                        _instance.number = _reader.readInt32();
                        break;
                    case 4:
                        _instance.name = _reader.readString();
                        break;
                    case 6:
                        _instance.typeUrl = _reader.readString();
                        break;
                    case 7:
                        _instance.oneofIndex = _reader.readInt32();
                        break;
                    case 8:
                        _instance.packed = _reader.readBool();
                        break;
                    case 9:
                        var messageInitializer9 = new Option1();
                        _reader.readMessage(messageInitializer9, Option1.deserializeBinaryFromReader);
                        (_instance.options = _instance.options || []).push(messageInitializer9);
                        break;
                    case 10:
                        _instance.jsonName = _reader.readString();
                        break;
                    case 11:
                        _instance.defaultValue = _reader.readString();
                        break;
                    default:
                        _reader.skipField();
                }
            }
            Field.refineValues(_instance);
        };
        /**
         * Serializes a message to binary format using provided binary reader
         * @param _instance message instance
         * @param _writer binary writer instance
         */ Field.serializeBinaryToWriter = function(_instance, _writer) {
            if (_instance.kind) _writer.writeEnum(1, _instance.kind);
            if (_instance.cardinality) _writer.writeEnum(2, _instance.cardinality);
            if (_instance.number) _writer.writeInt32(3, _instance.number);
            if (_instance.name) _writer.writeString(4, _instance.name);
            if (_instance.typeUrl) _writer.writeString(6, _instance.typeUrl);
            if (_instance.oneofIndex) _writer.writeInt32(7, _instance.oneofIndex);
            if (_instance.packed) _writer.writeBool(8, _instance.packed);
            if (_instance.options && _instance.options.length) _writer.writeRepeatedMessage(9, _instance.options, Option1.serializeBinaryToWriter);
            if (_instance.jsonName) _writer.writeString(10, _instance.jsonName);
            if (_instance.defaultValue) _writer.writeString(11, _instance.defaultValue);
        };
        Object.defineProperty(Field.prototype, "kind", {
            get: function() {
                return this._kind;
            },
            set: function(value) {
                this._kind = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Field.prototype, "cardinality", {
            get: function() {
                return this._cardinality;
            },
            set: function(value) {
                this._cardinality = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Field.prototype, "number", {
            get: function() {
                return this._number;
            },
            set: function(value) {
                this._number = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Field.prototype, "name", {
            get: function() {
                return this._name;
            },
            set: function(value) {
                this._name = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Field.prototype, "typeUrl", {
            get: function() {
                return this._typeUrl;
            },
            set: function(value) {
                this._typeUrl = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Field.prototype, "oneofIndex", {
            get: function() {
                return this._oneofIndex;
            },
            set: function(value) {
                this._oneofIndex = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Field.prototype, "packed", {
            get: function() {
                return this._packed;
            },
            set: function(value) {
                this._packed = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Field.prototype, "options", {
            get: function() {
                return this._options;
            },
            set: function(value) {
                this._options = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Field.prototype, "jsonName", {
            get: function() {
                return this._jsonName;
            },
            set: function(value) {
                this._jsonName = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Field.prototype, "defaultValue", {
            get: function() {
                return this._defaultValue;
            },
            set: function(value) {
                this._defaultValue = value;
            },
            enumerable: false,
            configurable: true
        });
        /**
         * Serialize message to binary data
         * @param instance message instance
         */ Field.prototype.serializeBinary = function() {
            var writer = new googleProtobuf.BinaryWriter();
            Field.serializeBinaryToWriter(this, writer);
            return writer.getResultBuffer();
        };
        /**
         * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
         */ Field.prototype.toObject = function() {
            return {
                kind: this.kind,
                cardinality: this.cardinality,
                number: this.number,
                name: this.name,
                typeUrl: this.typeUrl,
                oneofIndex: this.oneofIndex,
                packed: this.packed,
                options: (this.options || []).map(function(m) {
                    return m.toObject();
                }),
                jsonName: this.jsonName,
                defaultValue: this.defaultValue
            };
        };
        /**
         * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
         */ Field.prototype.toJSON = function() {
            return this.toObject();
        };
        /**
         * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
         * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
         * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
         */ Field.prototype.toProtobufJSON = function(// @ts-ignore
        options) {
            var _a, _b;
            return {
                kind: Field.Kind[(_a = this.kind) !== null && _a !== void 0 ? _a : 0],
                cardinality: Field.Cardinality[(_b = this.cardinality) !== null && _b !== void 0 ? _b : 0],
                number: this.number,
                name: this.name,
                typeUrl: this.typeUrl,
                oneofIndex: this.oneofIndex,
                packed: this.packed,
                options: (this.options || []).map(function(m) {
                    return m.toProtobufJSON(options);
                }),
                jsonName: this.jsonName,
                defaultValue: this.defaultValue
            };
        };
        return Field;
    })();
    exports.Field.id = 'google.protobuf.Field';
    (function(Field) {
        var Kind;
        (function(Kind1) {
            Kind1[Kind1["TYPE_UNKNOWN"] = 0] = "TYPE_UNKNOWN";
            Kind1[Kind1["TYPE_DOUBLE"] = 1] = "TYPE_DOUBLE";
            Kind1[Kind1["TYPE_FLOAT"] = 2] = "TYPE_FLOAT";
            Kind1[Kind1["TYPE_INT64"] = 3] = "TYPE_INT64";
            Kind1[Kind1["TYPE_UINT64"] = 4] = "TYPE_UINT64";
            Kind1[Kind1["TYPE_INT32"] = 5] = "TYPE_INT32";
            Kind1[Kind1["TYPE_FIXED64"] = 6] = "TYPE_FIXED64";
            Kind1[Kind1["TYPE_FIXED32"] = 7] = "TYPE_FIXED32";
            Kind1[Kind1["TYPE_BOOL"] = 8] = "TYPE_BOOL";
            Kind1[Kind1["TYPE_STRING"] = 9] = "TYPE_STRING";
            Kind1[Kind1["TYPE_GROUP"] = 10] = "TYPE_GROUP";
            Kind1[Kind1["TYPE_MESSAGE"] = 11] = "TYPE_MESSAGE";
            Kind1[Kind1["TYPE_BYTES"] = 12] = "TYPE_BYTES";
            Kind1[Kind1["TYPE_UINT32"] = 13] = "TYPE_UINT32";
            Kind1[Kind1["TYPE_ENUM"] = 14] = "TYPE_ENUM";
            Kind1[Kind1["TYPE_SFIXED32"] = 15] = "TYPE_SFIXED32";
            Kind1[Kind1["TYPE_SFIXED64"] = 16] = "TYPE_SFIXED64";
            Kind1[Kind1["TYPE_SINT32"] = 17] = "TYPE_SINT32";
            Kind1[Kind1["TYPE_SINT64"] = 18] = "TYPE_SINT64";
        })(Kind = Field.Kind || (Field.Kind = {
        }));
        var Cardinality;
        (function(Cardinality1) {
            Cardinality1[Cardinality1["CARDINALITY_UNKNOWN"] = 0] = "CARDINALITY_UNKNOWN";
            Cardinality1[Cardinality1["CARDINALITY_OPTIONAL"] = 1] = "CARDINALITY_OPTIONAL";
            Cardinality1[Cardinality1["CARDINALITY_REQUIRED"] = 2] = "CARDINALITY_REQUIRED";
            Cardinality1[Cardinality1["CARDINALITY_REPEATED"] = 3] = "CARDINALITY_REPEATED";
        })(Cardinality = Field.Cardinality || (Field.Cardinality = {
        }));
    })(exports.Field || (exports.Field = {
    }));
    /**
     * Well known type, more at https://developers.google.com/protocol-buffers/docs/reference/google.protobuf
     */ var Enum = function() {
        /**
         * Message constructor. Initializes the properties and applies default Protobuf values if necessary
         * @param _value initial values object or instance of Enum to deeply clone from
         */ function Enum1(_value) {
            _value = _value || {
            };
            this.name = _value.name;
            this.enumvalue = (_value.enumvalue || []).map(function(m) {
                return new EnumValue(m);
            });
            this.options = (_value.options || []).map(function(m) {
                return new Option1(m);
            });
            this.sourceContext = _value.sourceContext ? new SourceContext(_value.sourceContext) : undefined;
            this.syntax = _value.syntax;
            Enum1.refineValues(this);
        }
        /**
         * Deserialize binary data to message
         * @param instance message instance
         */ Enum1.deserializeBinary = function(bytes) {
            var instance = new Enum1();
            Enum1.deserializeBinaryFromReader(instance, new googleProtobuf.BinaryReader(bytes));
            return instance;
        };
        /**
         * Check all the properties and set default protobuf values if necessary
         * @param _instance message instance
         */ Enum1.refineValues = function(_instance) {
            _instance.name = _instance.name || '';
            _instance.enumvalue = _instance.enumvalue || [];
            _instance.options = _instance.options || [];
            _instance.sourceContext = _instance.sourceContext || undefined;
            _instance.syntax = _instance.syntax || 0;
        };
        /**
         * Deserializes / reads binary message into message instance using provided binary reader
         * @param _instance message instance
         * @param _reader binary reader instance
         */ Enum1.deserializeBinaryFromReader = function(_instance, _reader) {
            while(_reader.nextField()){
                if (_reader.isEndGroup()) break;
                switch(_reader.getFieldNumber()){
                    case 1:
                        _instance.name = _reader.readString();
                        break;
                    case 2:
                        var messageInitializer2 = new EnumValue();
                        _reader.readMessage(messageInitializer2, EnumValue.deserializeBinaryFromReader);
                        (_instance.enumvalue = _instance.enumvalue || []).push(messageInitializer2);
                        break;
                    case 3:
                        var messageInitializer3 = new Option1();
                        _reader.readMessage(messageInitializer3, Option1.deserializeBinaryFromReader);
                        (_instance.options = _instance.options || []).push(messageInitializer3);
                        break;
                    case 4:
                        _instance.sourceContext = new SourceContext();
                        _reader.readMessage(_instance.sourceContext, SourceContext.deserializeBinaryFromReader);
                        break;
                    case 5:
                        _instance.syntax = _reader.readEnum();
                        break;
                    default:
                        _reader.skipField();
                }
            }
            Enum1.refineValues(_instance);
        };
        /**
         * Serializes a message to binary format using provided binary reader
         * @param _instance message instance
         * @param _writer binary writer instance
         */ Enum1.serializeBinaryToWriter = function(_instance, _writer) {
            if (_instance.name) _writer.writeString(1, _instance.name);
            if (_instance.enumvalue && _instance.enumvalue.length) _writer.writeRepeatedMessage(2, _instance.enumvalue, EnumValue.serializeBinaryToWriter);
            if (_instance.options && _instance.options.length) _writer.writeRepeatedMessage(3, _instance.options, Option1.serializeBinaryToWriter);
            if (_instance.sourceContext) _writer.writeMessage(4, _instance.sourceContext, SourceContext.serializeBinaryToWriter);
            if (_instance.syntax) _writer.writeEnum(5, _instance.syntax);
        };
        Object.defineProperty(Enum1.prototype, "name", {
            get: function() {
                return this._name;
            },
            set: function(value) {
                this._name = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Enum1.prototype, "enumvalue", {
            get: function() {
                return this._enumvalue;
            },
            set: function(value) {
                this._enumvalue = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Enum1.prototype, "options", {
            get: function() {
                return this._options;
            },
            set: function(value) {
                this._options = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Enum1.prototype, "sourceContext", {
            get: function() {
                return this._sourceContext;
            },
            set: function(value) {
                this._sourceContext = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Enum1.prototype, "syntax", {
            get: function() {
                return this._syntax;
            },
            set: function(value) {
                this._syntax = value;
            },
            enumerable: false,
            configurable: true
        });
        /**
         * Serialize message to binary data
         * @param instance message instance
         */ Enum1.prototype.serializeBinary = function() {
            var writer = new googleProtobuf.BinaryWriter();
            Enum1.serializeBinaryToWriter(this, writer);
            return writer.getResultBuffer();
        };
        /**
         * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
         */ Enum1.prototype.toObject = function() {
            return {
                name: this.name,
                enumvalue: (this.enumvalue || []).map(function(m) {
                    return m.toObject();
                }),
                options: (this.options || []).map(function(m) {
                    return m.toObject();
                }),
                sourceContext: this.sourceContext ? this.sourceContext.toObject() : undefined,
                syntax: this.syntax
            };
        };
        /**
         * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
         */ Enum1.prototype.toJSON = function() {
            return this.toObject();
        };
        /**
         * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
         * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
         * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
         */ Enum1.prototype.toProtobufJSON = function(// @ts-ignore
        options) {
            var _a;
            return {
                name: this.name,
                enumvalue: (this.enumvalue || []).map(function(m) {
                    return m.toProtobufJSON(options);
                }),
                options: (this.options || []).map(function(m) {
                    return m.toProtobufJSON(options);
                }),
                sourceContext: this.sourceContext ? this.sourceContext.toProtobufJSON(options) : null,
                syntax: exports.Syntax[(_a = this.syntax) !== null && _a !== void 0 ? _a : 0]
            };
        };
        return Enum1;
    }();
    Enum.id = 'google.protobuf.Enum';
    /**
     * Well known type, more at https://developers.google.com/protocol-buffers/docs/reference/google.protobuf
     */ var EnumValue = function() {
        /**
         * Message constructor. Initializes the properties and applies default Protobuf values if necessary
         * @param _value initial values object or instance of EnumValue to deeply clone from
         */ function EnumValue1(_value) {
            _value = _value || {
            };
            this.name = _value.name;
            this.number = _value.number;
            this.options = (_value.options || []).map(function(m) {
                return new Option1(m);
            });
            EnumValue1.refineValues(this);
        }
        /**
         * Deserialize binary data to message
         * @param instance message instance
         */ EnumValue1.deserializeBinary = function(bytes) {
            var instance = new EnumValue1();
            EnumValue1.deserializeBinaryFromReader(instance, new googleProtobuf.BinaryReader(bytes));
            return instance;
        };
        /**
         * Check all the properties and set default protobuf values if necessary
         * @param _instance message instance
         */ EnumValue1.refineValues = function(_instance) {
            _instance.name = _instance.name || '';
            _instance.number = _instance.number || 0;
            _instance.options = _instance.options || [];
        };
        /**
         * Deserializes / reads binary message into message instance using provided binary reader
         * @param _instance message instance
         * @param _reader binary reader instance
         */ EnumValue1.deserializeBinaryFromReader = function(_instance, _reader) {
            while(_reader.nextField()){
                if (_reader.isEndGroup()) break;
                switch(_reader.getFieldNumber()){
                    case 1:
                        _instance.name = _reader.readString();
                        break;
                    case 2:
                        _instance.number = _reader.readInt32();
                        break;
                    case 3:
                        var messageInitializer3 = new Option1();
                        _reader.readMessage(messageInitializer3, Option1.deserializeBinaryFromReader);
                        (_instance.options = _instance.options || []).push(messageInitializer3);
                        break;
                    default:
                        _reader.skipField();
                }
            }
            EnumValue1.refineValues(_instance);
        };
        /**
         * Serializes a message to binary format using provided binary reader
         * @param _instance message instance
         * @param _writer binary writer instance
         */ EnumValue1.serializeBinaryToWriter = function(_instance, _writer) {
            if (_instance.name) _writer.writeString(1, _instance.name);
            if (_instance.number) _writer.writeInt32(2, _instance.number);
            if (_instance.options && _instance.options.length) _writer.writeRepeatedMessage(3, _instance.options, Option1.serializeBinaryToWriter);
        };
        Object.defineProperty(EnumValue1.prototype, "name", {
            get: function() {
                return this._name;
            },
            set: function(value) {
                this._name = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(EnumValue1.prototype, "number", {
            get: function() {
                return this._number;
            },
            set: function(value) {
                this._number = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(EnumValue1.prototype, "options", {
            get: function() {
                return this._options;
            },
            set: function(value) {
                this._options = value;
            },
            enumerable: false,
            configurable: true
        });
        /**
         * Serialize message to binary data
         * @param instance message instance
         */ EnumValue1.prototype.serializeBinary = function() {
            var writer = new googleProtobuf.BinaryWriter();
            EnumValue1.serializeBinaryToWriter(this, writer);
            return writer.getResultBuffer();
        };
        /**
         * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
         */ EnumValue1.prototype.toObject = function() {
            return {
                name: this.name,
                number: this.number,
                options: (this.options || []).map(function(m) {
                    return m.toObject();
                })
            };
        };
        /**
         * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
         */ EnumValue1.prototype.toJSON = function() {
            return this.toObject();
        };
        /**
         * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
         * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
         * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
         */ EnumValue1.prototype.toProtobufJSON = function(// @ts-ignore
        options) {
            return {
                name: this.name,
                number: this.number,
                options: (this.options || []).map(function(m) {
                    return m.toProtobufJSON(options);
                })
            };
        };
        return EnumValue1;
    }();
    EnumValue.id = 'google.protobuf.EnumValue';
    /**
     * Well known type, more at https://developers.google.com/protocol-buffers/docs/reference/google.protobuf
     */ var Option1 = function() {
        /**
         * Message constructor. Initializes the properties and applies default Protobuf values if necessary
         * @param _value initial values object or instance of Option to deeply clone from
         */ function Option2(_value) {
            _value = _value || {
            };
            this.name = _value.name;
            this.value = _value.value ? new Any(_value.value) : undefined;
            Option2.refineValues(this);
        }
        /**
         * Deserialize binary data to message
         * @param instance message instance
         */ Option2.deserializeBinary = function(bytes) {
            var instance = new Option2();
            Option2.deserializeBinaryFromReader(instance, new googleProtobuf.BinaryReader(bytes));
            return instance;
        };
        /**
         * Check all the properties and set default protobuf values if necessary
         * @param _instance message instance
         */ Option2.refineValues = function(_instance) {
            _instance.name = _instance.name || '';
            _instance.value = _instance.value || undefined;
        };
        /**
         * Deserializes / reads binary message into message instance using provided binary reader
         * @param _instance message instance
         * @param _reader binary reader instance
         */ Option2.deserializeBinaryFromReader = function(_instance, _reader) {
            while(_reader.nextField()){
                if (_reader.isEndGroup()) break;
                switch(_reader.getFieldNumber()){
                    case 1:
                        _instance.name = _reader.readString();
                        break;
                    case 2:
                        _instance.value = new Any();
                        _reader.readMessage(_instance.value, Any.deserializeBinaryFromReader);
                        break;
                    default:
                        _reader.skipField();
                }
            }
            Option2.refineValues(_instance);
        };
        /**
         * Serializes a message to binary format using provided binary reader
         * @param _instance message instance
         * @param _writer binary writer instance
         */ Option2.serializeBinaryToWriter = function(_instance, _writer) {
            if (_instance.name) _writer.writeString(1, _instance.name);
            if (_instance.value) _writer.writeMessage(2, _instance.value, Any.serializeBinaryToWriter);
        };
        Object.defineProperty(Option2.prototype, "name", {
            get: function() {
                return this._name;
            },
            set: function(value) {
                this._name = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Option2.prototype, "value", {
            get: function() {
                return this._value;
            },
            set: function(value) {
                this._value = value;
            },
            enumerable: false,
            configurable: true
        });
        /**
         * Serialize message to binary data
         * @param instance message instance
         */ Option2.prototype.serializeBinary = function() {
            var writer = new googleProtobuf.BinaryWriter();
            Option2.serializeBinaryToWriter(this, writer);
            return writer.getResultBuffer();
        };
        /**
         * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
         */ Option2.prototype.toObject = function() {
            return {
                name: this.name,
                value: this.value ? this.value.toObject() : undefined
            };
        };
        /**
         * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
         */ Option2.prototype.toJSON = function() {
            return this.toObject();
        };
        /**
         * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
         * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
         * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
         */ Option2.prototype.toProtobufJSON = function(// @ts-ignore
        options) {
            return {
                name: this.name,
                value: this.value ? this.value.toProtobufJSON(options) : null
            };
        };
        return Option2;
    }();
    Option1.id = 'google.protobuf.Option';
    /**
     * Well known type, more at https://developers.google.com/protocol-buffers/docs/reference/google.protobuf
     */ var Api = function() {
        /**
         * Message constructor. Initializes the properties and applies default Protobuf values if necessary
         * @param _value initial values object or instance of Api to deeply clone from
         */ function Api1(_value) {
            _value = _value || {
            };
            this.name = _value.name;
            this.methods = (_value.methods || []).map(function(m) {
                return new Method(m);
            });
            this.options = (_value.options || []).map(function(m) {
                return new Option1(m);
            });
            this.version = _value.version;
            this.sourceContext = _value.sourceContext ? new SourceContext(_value.sourceContext) : undefined;
            this.mixins = (_value.mixins || []).map(function(m) {
                return new Mixin(m);
            });
            this.syntax = _value.syntax;
            Api1.refineValues(this);
        }
        /**
         * Deserialize binary data to message
         * @param instance message instance
         */ Api1.deserializeBinary = function(bytes) {
            var instance = new Api1();
            Api1.deserializeBinaryFromReader(instance, new googleProtobuf.BinaryReader(bytes));
            return instance;
        };
        /**
         * Check all the properties and set default protobuf values if necessary
         * @param _instance message instance
         */ Api1.refineValues = function(_instance) {
            _instance.name = _instance.name || '';
            _instance.methods = _instance.methods || [];
            _instance.options = _instance.options || [];
            _instance.version = _instance.version || '';
            _instance.sourceContext = _instance.sourceContext || undefined;
            _instance.mixins = _instance.mixins || [];
            _instance.syntax = _instance.syntax || 0;
        };
        /**
         * Deserializes / reads binary message into message instance using provided binary reader
         * @param _instance message instance
         * @param _reader binary reader instance
         */ Api1.deserializeBinaryFromReader = function(_instance, _reader) {
            while(_reader.nextField()){
                if (_reader.isEndGroup()) break;
                switch(_reader.getFieldNumber()){
                    case 1:
                        _instance.name = _reader.readString();
                        break;
                    case 2:
                        var messageInitializer2 = new Method();
                        _reader.readMessage(messageInitializer2, Method.deserializeBinaryFromReader);
                        (_instance.methods = _instance.methods || []).push(messageInitializer2);
                        break;
                    case 3:
                        var messageInitializer3 = new Option1();
                        _reader.readMessage(messageInitializer3, Option1.deserializeBinaryFromReader);
                        (_instance.options = _instance.options || []).push(messageInitializer3);
                        break;
                    case 4:
                        _instance.version = _reader.readString();
                        break;
                    case 5:
                        _instance.sourceContext = new SourceContext();
                        _reader.readMessage(_instance.sourceContext, SourceContext.deserializeBinaryFromReader);
                        break;
                    case 6:
                        var messageInitializer6 = new Mixin();
                        _reader.readMessage(messageInitializer6, Mixin.deserializeBinaryFromReader);
                        (_instance.mixins = _instance.mixins || []).push(messageInitializer6);
                        break;
                    case 7:
                        _instance.syntax = _reader.readEnum();
                        break;
                    default:
                        _reader.skipField();
                }
            }
            Api1.refineValues(_instance);
        };
        /**
         * Serializes a message to binary format using provided binary reader
         * @param _instance message instance
         * @param _writer binary writer instance
         */ Api1.serializeBinaryToWriter = function(_instance, _writer) {
            if (_instance.name) _writer.writeString(1, _instance.name);
            if (_instance.methods && _instance.methods.length) _writer.writeRepeatedMessage(2, _instance.methods, Method.serializeBinaryToWriter);
            if (_instance.options && _instance.options.length) _writer.writeRepeatedMessage(3, _instance.options, Option1.serializeBinaryToWriter);
            if (_instance.version) _writer.writeString(4, _instance.version);
            if (_instance.sourceContext) _writer.writeMessage(5, _instance.sourceContext, SourceContext.serializeBinaryToWriter);
            if (_instance.mixins && _instance.mixins.length) _writer.writeRepeatedMessage(6, _instance.mixins, Mixin.serializeBinaryToWriter);
            if (_instance.syntax) _writer.writeEnum(7, _instance.syntax);
        };
        Object.defineProperty(Api1.prototype, "name", {
            get: function() {
                return this._name;
            },
            set: function(value) {
                this._name = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Api1.prototype, "methods", {
            get: function() {
                return this._methods;
            },
            set: function(value) {
                this._methods = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Api1.prototype, "options", {
            get: function() {
                return this._options;
            },
            set: function(value) {
                this._options = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Api1.prototype, "version", {
            get: function() {
                return this._version;
            },
            set: function(value) {
                this._version = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Api1.prototype, "sourceContext", {
            get: function() {
                return this._sourceContext;
            },
            set: function(value) {
                this._sourceContext = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Api1.prototype, "mixins", {
            get: function() {
                return this._mixins;
            },
            set: function(value) {
                this._mixins = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Api1.prototype, "syntax", {
            get: function() {
                return this._syntax;
            },
            set: function(value) {
                this._syntax = value;
            },
            enumerable: false,
            configurable: true
        });
        /**
         * Serialize message to binary data
         * @param instance message instance
         */ Api1.prototype.serializeBinary = function() {
            var writer = new googleProtobuf.BinaryWriter();
            Api1.serializeBinaryToWriter(this, writer);
            return writer.getResultBuffer();
        };
        /**
         * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
         */ Api1.prototype.toObject = function() {
            return {
                name: this.name,
                methods: (this.methods || []).map(function(m) {
                    return m.toObject();
                }),
                options: (this.options || []).map(function(m) {
                    return m.toObject();
                }),
                version: this.version,
                sourceContext: this.sourceContext ? this.sourceContext.toObject() : undefined,
                mixins: (this.mixins || []).map(function(m) {
                    return m.toObject();
                }),
                syntax: this.syntax
            };
        };
        /**
         * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
         */ Api1.prototype.toJSON = function() {
            return this.toObject();
        };
        /**
         * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
         * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
         * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
         */ Api1.prototype.toProtobufJSON = function(// @ts-ignore
        options) {
            var _a;
            return {
                name: this.name,
                methods: (this.methods || []).map(function(m) {
                    return m.toProtobufJSON(options);
                }),
                options: (this.options || []).map(function(m) {
                    return m.toProtobufJSON(options);
                }),
                version: this.version,
                sourceContext: this.sourceContext ? this.sourceContext.toProtobufJSON(options) : null,
                mixins: (this.mixins || []).map(function(m) {
                    return m.toProtobufJSON(options);
                }),
                syntax: exports.Syntax[(_a = this.syntax) !== null && _a !== void 0 ? _a : 0]
            };
        };
        return Api1;
    }();
    Api.id = 'google.protobuf.Api';
    /**
     * Well known type, more at https://developers.google.com/protocol-buffers/docs/reference/google.protobuf
     */ var Method = function() {
        /**
         * Message constructor. Initializes the properties and applies default Protobuf values if necessary
         * @param _value initial values object or instance of Method to deeply clone from
         */ function Method1(_value) {
            _value = _value || {
            };
            this.name = _value.name;
            this.requestTypeUrl = _value.requestTypeUrl;
            this.requestStreaming = _value.requestStreaming;
            this.responseTypeUrl = _value.responseTypeUrl;
            this.responseStreaming = _value.responseStreaming;
            this.options = (_value.options || []).map(function(m) {
                return new Option1(m);
            });
            this.syntax = _value.syntax;
            Method1.refineValues(this);
        }
        /**
         * Deserialize binary data to message
         * @param instance message instance
         */ Method1.deserializeBinary = function(bytes) {
            var instance = new Method1();
            Method1.deserializeBinaryFromReader(instance, new googleProtobuf.BinaryReader(bytes));
            return instance;
        };
        /**
         * Check all the properties and set default protobuf values if necessary
         * @param _instance message instance
         */ Method1.refineValues = function(_instance) {
            _instance.name = _instance.name || '';
            _instance.requestTypeUrl = _instance.requestTypeUrl || '';
            _instance.requestStreaming = _instance.requestStreaming || false;
            _instance.responseTypeUrl = _instance.responseTypeUrl || '';
            _instance.responseStreaming = _instance.responseStreaming || false;
            _instance.options = _instance.options || [];
            _instance.syntax = _instance.syntax || 0;
        };
        /**
         * Deserializes / reads binary message into message instance using provided binary reader
         * @param _instance message instance
         * @param _reader binary reader instance
         */ Method1.deserializeBinaryFromReader = function(_instance, _reader) {
            while(_reader.nextField()){
                if (_reader.isEndGroup()) break;
                switch(_reader.getFieldNumber()){
                    case 1:
                        _instance.name = _reader.readString();
                        break;
                    case 2:
                        _instance.requestTypeUrl = _reader.readString();
                        break;
                    case 3:
                        _instance.requestStreaming = _reader.readBool();
                        break;
                    case 4:
                        _instance.responseTypeUrl = _reader.readString();
                        break;
                    case 5:
                        _instance.responseStreaming = _reader.readBool();
                        break;
                    case 6:
                        var messageInitializer6 = new Option1();
                        _reader.readMessage(messageInitializer6, Option1.deserializeBinaryFromReader);
                        (_instance.options = _instance.options || []).push(messageInitializer6);
                        break;
                    case 7:
                        _instance.syntax = _reader.readEnum();
                        break;
                    default:
                        _reader.skipField();
                }
            }
            Method1.refineValues(_instance);
        };
        /**
         * Serializes a message to binary format using provided binary reader
         * @param _instance message instance
         * @param _writer binary writer instance
         */ Method1.serializeBinaryToWriter = function(_instance, _writer) {
            if (_instance.name) _writer.writeString(1, _instance.name);
            if (_instance.requestTypeUrl) _writer.writeString(2, _instance.requestTypeUrl);
            if (_instance.requestStreaming) _writer.writeBool(3, _instance.requestStreaming);
            if (_instance.responseTypeUrl) _writer.writeString(4, _instance.responseTypeUrl);
            if (_instance.responseStreaming) _writer.writeBool(5, _instance.responseStreaming);
            if (_instance.options && _instance.options.length) _writer.writeRepeatedMessage(6, _instance.options, Option1.serializeBinaryToWriter);
            if (_instance.syntax) _writer.writeEnum(7, _instance.syntax);
        };
        Object.defineProperty(Method1.prototype, "name", {
            get: function() {
                return this._name;
            },
            set: function(value) {
                this._name = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Method1.prototype, "requestTypeUrl", {
            get: function() {
                return this._requestTypeUrl;
            },
            set: function(value) {
                this._requestTypeUrl = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Method1.prototype, "requestStreaming", {
            get: function() {
                return this._requestStreaming;
            },
            set: function(value) {
                this._requestStreaming = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Method1.prototype, "responseTypeUrl", {
            get: function() {
                return this._responseTypeUrl;
            },
            set: function(value) {
                this._responseTypeUrl = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Method1.prototype, "responseStreaming", {
            get: function() {
                return this._responseStreaming;
            },
            set: function(value) {
                this._responseStreaming = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Method1.prototype, "options", {
            get: function() {
                return this._options;
            },
            set: function(value) {
                this._options = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Method1.prototype, "syntax", {
            get: function() {
                return this._syntax;
            },
            set: function(value) {
                this._syntax = value;
            },
            enumerable: false,
            configurable: true
        });
        /**
         * Serialize message to binary data
         * @param instance message instance
         */ Method1.prototype.serializeBinary = function() {
            var writer = new googleProtobuf.BinaryWriter();
            Method1.serializeBinaryToWriter(this, writer);
            return writer.getResultBuffer();
        };
        /**
         * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
         */ Method1.prototype.toObject = function() {
            return {
                name: this.name,
                requestTypeUrl: this.requestTypeUrl,
                requestStreaming: this.requestStreaming,
                responseTypeUrl: this.responseTypeUrl,
                responseStreaming: this.responseStreaming,
                options: (this.options || []).map(function(m) {
                    return m.toObject();
                }),
                syntax: this.syntax
            };
        };
        /**
         * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
         */ Method1.prototype.toJSON = function() {
            return this.toObject();
        };
        /**
         * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
         * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
         * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
         */ Method1.prototype.toProtobufJSON = function(// @ts-ignore
        options) {
            var _a;
            return {
                name: this.name,
                requestTypeUrl: this.requestTypeUrl,
                requestStreaming: this.requestStreaming,
                responseTypeUrl: this.responseTypeUrl,
                responseStreaming: this.responseStreaming,
                options: (this.options || []).map(function(m) {
                    return m.toProtobufJSON(options);
                }),
                syntax: exports.Syntax[(_a = this.syntax) !== null && _a !== void 0 ? _a : 0]
            };
        };
        return Method1;
    }();
    Method.id = 'google.protobuf.Method';
    /**
     * Well known type, more at https://developers.google.com/protocol-buffers/docs/reference/google.protobuf
     */ var Mixin = function() {
        /**
         * Message constructor. Initializes the properties and applies default Protobuf values if necessary
         * @param _value initial values object or instance of Mixin to deeply clone from
         */ function Mixin1(_value) {
            _value = _value || {
            };
            this.name = _value.name;
            this.root = _value.root;
            Mixin1.refineValues(this);
        }
        /**
         * Deserialize binary data to message
         * @param instance message instance
         */ Mixin1.deserializeBinary = function(bytes) {
            var instance = new Mixin1();
            Mixin1.deserializeBinaryFromReader(instance, new googleProtobuf.BinaryReader(bytes));
            return instance;
        };
        /**
         * Check all the properties and set default protobuf values if necessary
         * @param _instance message instance
         */ Mixin1.refineValues = function(_instance) {
            _instance.name = _instance.name || '';
            _instance.root = _instance.root || '';
        };
        /**
         * Deserializes / reads binary message into message instance using provided binary reader
         * @param _instance message instance
         * @param _reader binary reader instance
         */ Mixin1.deserializeBinaryFromReader = function(_instance, _reader) {
            while(_reader.nextField()){
                if (_reader.isEndGroup()) break;
                switch(_reader.getFieldNumber()){
                    case 1:
                        _instance.name = _reader.readString();
                        break;
                    case 2:
                        _instance.root = _reader.readString();
                        break;
                    default:
                        _reader.skipField();
                }
            }
            Mixin1.refineValues(_instance);
        };
        /**
         * Serializes a message to binary format using provided binary reader
         * @param _instance message instance
         * @param _writer binary writer instance
         */ Mixin1.serializeBinaryToWriter = function(_instance, _writer) {
            if (_instance.name) _writer.writeString(1, _instance.name);
            if (_instance.root) _writer.writeString(2, _instance.root);
        };
        Object.defineProperty(Mixin1.prototype, "name", {
            get: function() {
                return this._name;
            },
            set: function(value) {
                this._name = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Mixin1.prototype, "root", {
            get: function() {
                return this._root;
            },
            set: function(value) {
                this._root = value;
            },
            enumerable: false,
            configurable: true
        });
        /**
         * Serialize message to binary data
         * @param instance message instance
         */ Mixin1.prototype.serializeBinary = function() {
            var writer = new googleProtobuf.BinaryWriter();
            Mixin1.serializeBinaryToWriter(this, writer);
            return writer.getResultBuffer();
        };
        /**
         * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
         */ Mixin1.prototype.toObject = function() {
            return {
                name: this.name,
                root: this.root
            };
        };
        /**
         * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
         */ Mixin1.prototype.toJSON = function() {
            return this.toObject();
        };
        /**
         * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
         * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
         * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
         */ Mixin1.prototype.toProtobufJSON = function(// @ts-ignore
        options) {
            return {
                name: this.name,
                root: this.root
            };
        };
        return Mixin1;
    }();
    Mixin.id = 'google.protobuf.Mixin';
    /**
     * Well known type, more at https://developers.google.com/protocol-buffers/docs/reference/google.protobuf
     */ var Duration = function() {
        /**
         * Message constructor. Initializes the properties and applies default Protobuf values if necessary
         * @param _value initial values object or instance of Duration to deeply clone from
         */ function Duration1(_value) {
            _value = _value || {
            };
            this.seconds = _value.seconds;
            this.nanos = _value.nanos;
            Duration1.refineValues(this);
        }
        /**
         * Deserialize binary data to message
         * @param instance message instance
         */ Duration1.deserializeBinary = function(bytes) {
            var instance = new Duration1();
            Duration1.deserializeBinaryFromReader(instance, new googleProtobuf.BinaryReader(bytes));
            return instance;
        };
        /**
         * Check all the properties and set default protobuf values if necessary
         * @param _instance message instance
         */ Duration1.refineValues = function(_instance) {
            _instance.seconds = _instance.seconds || '0';
            _instance.nanos = _instance.nanos || 0;
        };
        /**
         * Deserializes / reads binary message into message instance using provided binary reader
         * @param _instance message instance
         * @param _reader binary reader instance
         */ Duration1.deserializeBinaryFromReader = function(_instance, _reader) {
            while(_reader.nextField()){
                if (_reader.isEndGroup()) break;
                switch(_reader.getFieldNumber()){
                    case 1:
                        _instance.seconds = _reader.readInt64String();
                        break;
                    case 2:
                        _instance.nanos = _reader.readInt32();
                        break;
                    default:
                        _reader.skipField();
                }
            }
            Duration1.refineValues(_instance);
        };
        /**
         * Serializes a message to binary format using provided binary reader
         * @param _instance message instance
         * @param _writer binary writer instance
         */ Duration1.serializeBinaryToWriter = function(_instance, _writer) {
            if (_instance.seconds) _writer.writeInt64String(1, _instance.seconds);
            if (_instance.nanos) _writer.writeInt32(2, _instance.nanos);
        };
        Object.defineProperty(Duration1.prototype, "seconds", {
            get: function() {
                return this._seconds;
            },
            set: function(value) {
                this._seconds = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Duration1.prototype, "nanos", {
            get: function() {
                return this._nanos;
            },
            set: function(value) {
                this._nanos = value;
            },
            enumerable: false,
            configurable: true
        });
        /**
         * Serialize message to binary data
         * @param instance message instance
         */ Duration1.prototype.serializeBinary = function() {
            var writer = new googleProtobuf.BinaryWriter();
            Duration1.serializeBinaryToWriter(this, writer);
            return writer.getResultBuffer();
        };
        /**
         * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
         */ Duration1.prototype.toObject = function() {
            return {
                seconds: this.seconds,
                nanos: this.nanos
            };
        };
        /**
         * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
         */ Duration1.prototype.toJSON = function() {
            return this.toObject();
        };
        /**
         * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
         * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
         * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
         */ Duration1.prototype.toProtobufJSON = function(// @ts-ignore
        options) {
            return parseInt(this.seconds || '0') + (this.nanos || 0) / 1000000000 + 's';
        };
        return Duration1;
    }();
    Duration.id = 'google.protobuf.Duration';
    /**
     * Well known type, more at https://developers.google.com/protocol-buffers/docs/reference/google.protobuf
     */ var Empty = function() {
        /**
         * Message constructor. Initializes the properties and applies default Protobuf values if necessary
         * @param _value initial values object or instance of Empty to deeply clone from
         */ function Empty1(_value) {
            _value = _value || {
            };
            Empty1.refineValues(this);
        }
        /**
         * Deserialize binary data to message
         * @param instance message instance
         */ Empty1.deserializeBinary = function(bytes) {
            var instance = new Empty1();
            Empty1.deserializeBinaryFromReader(instance, new googleProtobuf.BinaryReader(bytes));
            return instance;
        };
        /**
         * Check all the properties and set default protobuf values if necessary
         * @param _instance message instance
         */ Empty1.refineValues = function(_instance) {
        };
        /**
         * Deserializes / reads binary message into message instance using provided binary reader
         * @param _instance message instance
         * @param _reader binary reader instance
         */ Empty1.deserializeBinaryFromReader = function(_instance, _reader) {
            while(_reader.nextField()){
                if (_reader.isEndGroup()) break;
                _reader.getFieldNumber();
                _reader.skipField();
            }
            Empty1.refineValues(_instance);
        };
        /**
         * Serializes a message to binary format using provided binary reader
         * @param _instance message instance
         * @param _writer binary writer instance
         */ Empty1.serializeBinaryToWriter = function(_instance, _writer) {
        };
        /**
         * Serialize message to binary data
         * @param instance message instance
         */ Empty1.prototype.serializeBinary = function() {
            var writer = new googleProtobuf.BinaryWriter();
            Empty1.serializeBinaryToWriter(this, writer);
            return writer.getResultBuffer();
        };
        /**
         * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
         */ Empty1.prototype.toObject = function() {
            return {
            };
        };
        /**
         * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
         */ Empty1.prototype.toJSON = function() {
            return this.toObject();
        };
        /**
         * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
         * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
         * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
         */ Empty1.prototype.toProtobufJSON = function(// @ts-ignore
        options) {
            return {
            };
        };
        return Empty1;
    }();
    Empty.id = 'google.protobuf.Empty';
    /**
     * Well known type, more at https://developers.google.com/protocol-buffers/docs/reference/google.protobuf
     */ var FieldMask = function() {
        /**
         * Message constructor. Initializes the properties and applies default Protobuf values if necessary
         * @param _value initial values object or instance of FieldMask to deeply clone from
         */ function FieldMask1(_value) {
            _value = _value || {
            };
            this.paths = (_value.paths || []).slice();
            FieldMask1.refineValues(this);
        }
        /**
         * Deserialize binary data to message
         * @param instance message instance
         */ FieldMask1.deserializeBinary = function(bytes) {
            var instance = new FieldMask1();
            FieldMask1.deserializeBinaryFromReader(instance, new googleProtobuf.BinaryReader(bytes));
            return instance;
        };
        /**
         * Check all the properties and set default protobuf values if necessary
         * @param _instance message instance
         */ FieldMask1.refineValues = function(_instance) {
            _instance.paths = _instance.paths || [];
        };
        /**
         * Deserializes / reads binary message into message instance using provided binary reader
         * @param _instance message instance
         * @param _reader binary reader instance
         */ FieldMask1.deserializeBinaryFromReader = function(_instance, _reader) {
            while(_reader.nextField()){
                if (_reader.isEndGroup()) break;
                switch(_reader.getFieldNumber()){
                    case 1:
                        (_instance.paths = _instance.paths || []).push(_reader.readString());
                        break;
                    default:
                        _reader.skipField();
                }
            }
            FieldMask1.refineValues(_instance);
        };
        /**
         * Serializes a message to binary format using provided binary reader
         * @param _instance message instance
         * @param _writer binary writer instance
         */ FieldMask1.serializeBinaryToWriter = function(_instance, _writer) {
            if (_instance.paths && _instance.paths.length) _writer.writeRepeatedString(1, _instance.paths);
        };
        Object.defineProperty(FieldMask1.prototype, "paths", {
            get: function() {
                return this._paths;
            },
            set: function(value) {
                this._paths = value;
            },
            enumerable: false,
            configurable: true
        });
        /**
         * Serialize message to binary data
         * @param instance message instance
         */ FieldMask1.prototype.serializeBinary = function() {
            var writer = new googleProtobuf.BinaryWriter();
            FieldMask1.serializeBinaryToWriter(this, writer);
            return writer.getResultBuffer();
        };
        /**
         * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
         */ FieldMask1.prototype.toObject = function() {
            return {
                paths: (this.paths || []).slice()
            };
        };
        /**
         * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
         */ FieldMask1.prototype.toJSON = function() {
            return this.toObject();
        };
        /**
         * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
         * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
         * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
         */ FieldMask1.prototype.toProtobufJSON = function(// @ts-ignore
        options) {
            return this.paths.join(',');
        };
        return FieldMask1;
    }();
    FieldMask.id = 'google.protobuf.FieldMask';
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */ /* global Reflect, Promise */ var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || ({
            __proto__: []
        }) instanceof Array && function(d1, b1) {
            d1.__proto__ = b1;
        } || function(d1, b1) {
            for(var p in b1)if (Object.prototype.hasOwnProperty.call(b1, p)) d1[p] = b1[p];
        };
        return extendStatics(d, b);
    };
    function __extends(d, b) {
        if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }
    var __assign = function() {
        __assign = Object.assign || function __assign1(t) {
            for(var s, i = 1, n = arguments.length; i < n; i++){
                s = arguments[i];
                for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };
    function __rest(s, e) {
        var t = {
        };
        for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function") for(var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++)if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
        return t;
    }
    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }
    function __param(paramIndex, decorator) {
        return function(target, key) {
            decorator(target, key, paramIndex);
        };
    }
    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }
    function __awaiter(thisArg, _arguments, P, generator) {
        function adopt(value) {
            return value instanceof P ? value : new P(function(resolve) {
                resolve(value);
            });
        }
        return new (P || (P = Promise))(function(resolve, reject) {
            function fulfilled(value) {
                try {
                    step(generator.next(value));
                } catch (e) {
                    reject(e);
                }
            }
            function rejected(value) {
                try {
                    step(generator["throw"](value));
                } catch (e) {
                    reject(e);
                }
            }
            function step(result) {
                result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
            }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }
    function __generator(thisArg, body) {
        var _ = {
            label: 0,
            sent: function() {
                if (t[0] & 1) throw t[1];
                return t[1];
            },
            trys: [],
            ops: []
        }, f, y, t, g;
        function verb(n) {
            return function(v) {
                return step([
                    n,
                    v
                ]);
            };
        }
        function step(op) {
            if (f) throw new TypeError("Generator is already executing.");
            while(_)try {
                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                if (y = 0, t) op = [
                    op[0] & 2,
                    t.value
                ];
                switch(op[0]){
                    case 0:
                    case 1:
                        t = op;
                        break;
                    case 4:
                        _.label++;
                        return {
                            value: op[1],
                            done: false
                        };
                    case 5:
                        _.label++;
                        y = op[1];
                        op = [
                            0
                        ];
                        continue;
                    case 7:
                        op = _.ops.pop();
                        _.trys.pop();
                        continue;
                    default:
                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                            _ = 0;
                            continue;
                        }
                        if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                            _.label = op[1];
                            break;
                        }
                        if (op[0] === 6 && _.label < t[1]) {
                            _.label = t[1];
                            t = op;
                            break;
                        }
                        if (t && _.label < t[2]) {
                            _.label = t[2];
                            _.ops.push(op);
                            break;
                        }
                        if (t[2]) _.ops.pop();
                        _.trys.pop();
                        continue;
                }
                op = body.call(thisArg, _);
            } catch (e) {
                op = [
                    6,
                    e
                ];
                y = 0;
            } finally{
                f = t = 0;
            }
            if (op[0] & 5) throw op[1];
            return {
                value: op[0] ? op[1] : void 0,
                done: true
            };
        }
        return g = {
            next: verb(0),
            "throw": verb(1),
            "return": verb(2)
        }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
            return this;
        }), g;
    }
    var __createBinding = Object.create ? function(o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        Object.defineProperty(o, k2, {
            enumerable: true,
            get: function() {
                return m[k];
            }
        });
    } : function(o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        o[k2] = m[k];
    };
    function __exportStar(m, o) {
        for(var p in m)if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p)) __createBinding(o, m, p);
    }
    function __values(o) {
        var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
        if (m) return m.call(o);
        if (o && typeof o.length === "number") return {
            next: function() {
                if (o && i >= o.length) o = void 0;
                return {
                    value: o && o[i++],
                    done: !o
                };
            }
        };
        throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }
    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m) return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while((n === void 0 || (n--) > 0) && !(r = i.next()).done)ar.push(r.value);
        } catch (error) {
            e = {
                error: error
            };
        } finally{
            try {
                if (r && !r.done && (m = i["return"])) m.call(i);
            } finally{
                if (e) throw e.error;
            }
        }
        return ar;
    }
    /** @deprecated */ function __spread() {
        for(var ar = [], i = 0; i < arguments.length; i++)ar = ar.concat(__read(arguments[i]));
        return ar;
    }
    /** @deprecated */ function __spreadArrays() {
        for(var s = 0, i = 0, il = arguments.length; i < il; i++)s += arguments[i].length;
        for(var r = Array(s), k = 0, i = 0; i < il; i++)for(var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)r[k] = a[j];
        return r;
    }
    function __spreadArray(to, from) {
        for(var i = 0, il = from.length, j = to.length; i < il; i++, j++)to[j] = from[i];
        return to;
    }
    function __await(v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    }
    function __asyncGenerator(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        function verb(n) {
            if (g[n]) i[n] = function(v) {
                return new Promise(function(a, b) {
                    q.push([
                        n,
                        v,
                        a,
                        b
                    ]) > 1 || resume(n, v);
                });
            };
        }
        function resume(n, v) {
            try {
                step(g[n](v));
            } catch (e) {
                settle(q[0][3], e);
            }
        }
        function step(r) {
            r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
        }
        function fulfill(value) {
            resume("next", value);
        }
        function reject(value) {
            resume("throw", value);
        }
        function settle(f, v) {
            if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
        }
        return i = {
        }, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
            return this;
        }, i;
    }
    function __asyncDelegator(o) {
        var i, p;
        function verb(n, f) {
            i[n] = o[n] ? function(v) {
                return (p = !p) ? {
                    value: __await(o[n](v)),
                    done: n === "return"
                } : f ? f(v) : v;
            } : f;
        }
        return i = {
        }, verb("next"), verb("throw", function(e) {
            throw e;
        }), verb("return"), i[Symbol.iterator] = function() {
            return this;
        }, i;
    }
    function __asyncValues(o) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        function verb(n) {
            i[n] = o[n] && function(v) {
                return new Promise(function(resolve, reject) {
                    v = o[n](v), settle(resolve, reject, v.done, v.value);
                });
            };
        }
        function settle(resolve, reject, d, v) {
            Promise.resolve(v).then(function(v1) {
                resolve({
                    value: v1,
                    done: d
                });
            }, reject);
        }
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {
        }, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
            return this;
        }, i);
    }
    function __makeTemplateObject(cooked, raw) {
        if (Object.defineProperty) Object.defineProperty(cooked, "raw", {
            value: raw
        });
        else cooked.raw = raw;
        return cooked;
    }
    var __setModuleDefault = Object.create ? function(o, v) {
        Object.defineProperty(o, "default", {
            enumerable: true,
            value: v
        });
    } : function(o, v) {
        o["default"] = v;
    };
    function __importStar(mod) {
        if (mod && mod.__esModule) return mod;
        var result = {
        };
        if (mod != null) for(var k in mod)if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
        __setModuleDefault(result, mod);
        return result;
    }
    function __importDefault(mod) {
        return mod && mod.__esModule ? mod : {
            default: mod
        };
    }
    function __classPrivateFieldGet(receiver, state, kind, f) {
        if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
        if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
        return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
    }
    function __classPrivateFieldSet(receiver, state, value, kind, f) {
        if (kind === "m") throw new TypeError("Private method is not writable");
        if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
        if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
        return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
    }
    exports.NullValue = void 0;
    (function(NullValue) {
        NullValue[NullValue["NULL_VALUE"] = 0] = "NULL_VALUE";
    })(exports.NullValue || (exports.NullValue = {
    }));
    /**
     * Well known type, more at https://developers.google.com/protocol-buffers/docs/reference/google.protobuf
     */ exports.Struct = (function() {
        /**
         * Message constructor. Initializes the properties and applies default Protobuf values if necessary
         * @param _value initial values object or instance of Struct to deeply clone from
         */ function Struct(_value) {
            _value = _value || {
            };
            this.fields = _value.fields ? Object.keys(_value.fields).reduce(function(r, k) {
                var _a;
                return Object.assign(Object.assign({
                }, r), (_a = {
                }, _a[k] = _value.fields[k] ? new exports.Value(_value.fields[k]) : undefined, _a));
            }, {
            }) : {
            }, Struct.refineValues(this);
        }
        /**
         * Deserialize binary data to message
         * @param instance message instance
         */ Struct.deserializeBinary = function(bytes) {
            var instance = new Struct();
            Struct.deserializeBinaryFromReader(instance, new googleProtobuf.BinaryReader(bytes));
            return instance;
        };
        /**
         * Check all the properties and set default protobuf values if necessary
         * @param _instance message instance
         */ Struct.refineValues = function(_instance) {
            _instance.fields = _instance.fields || {
            };
        };
        /**
         * Deserializes / reads binary message into message instance using provided binary reader
         * @param _instance message instance
         * @param _reader binary reader instance
         */ Struct.deserializeBinaryFromReader = function(_instance, _reader) {
            while(_reader.nextField()){
                if (_reader.isEndGroup()) break;
                switch(_reader.getFieldNumber()){
                    case 1:
                        var msg_1 = {
                        };
                        _reader.readMessage(msg_1, Struct.FieldsEntry.deserializeBinaryFromReader);
                        _instance.fields = _instance.fields || {
                        };
                        _instance.fields[msg_1.key] = msg_1.value;
                        break;
                    default:
                        _reader.skipField();
                }
            }
            Struct.refineValues(_instance);
        };
        /**
         * Serializes a message to binary format using provided binary reader
         * @param _instance message instance
         * @param _writer binary writer instance
         */ Struct.serializeBinaryToWriter = function(_instance, _writer) {
            if (!!_instance.fields) {
                var keys_1 = Object.keys(_instance.fields);
                if (keys_1.length) {
                    var repeated_1 = keys_1.map(function(key) {
                        return {
                            key: key,
                            value: _instance.fields[key]
                        };
                    }).reduce(function(r, v) {
                        return __spread(r, [
                            v
                        ]);
                    }, []);
                    _writer.writeRepeatedMessage(1, repeated_1, Struct.FieldsEntry.serializeBinaryToWriter);
                }
            }
        };
        Object.defineProperty(Struct.prototype, "fields", {
            get: function() {
                return this._fields;
            },
            set: function(value) {
                this._fields = value;
            },
            enumerable: false,
            configurable: true
        });
        /**
         * Serialize message to binary data
         * @param instance message instance
         */ Struct.prototype.serializeBinary = function() {
            var writer = new googleProtobuf.BinaryWriter();
            Struct.serializeBinaryToWriter(this, writer);
            return writer.getResultBuffer();
        };
        /**
         * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
         */ Struct.prototype.toObject = function() {
            var _this = this;
            return {
                fields: this.fields ? Object.keys(this.fields).reduce(function(r, k) {
                    var _a;
                    return Object.assign(Object.assign({
                    }, r), (_a = {
                    }, _a[k] = _this.fields[k] ? _this.fields[k].toObject() : undefined, _a));
                }, {
                }) : {
                }
            };
        };
        /**
         * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
         */ Struct.prototype.toJSON = function() {
            return this.toObject();
        };
        /**
         * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
         * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
         * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
         */ Struct.prototype.toProtobufJSON = function(// @ts-ignore
        options) {
            var _this = this;
            return this.fields ? Object.keys(this.fields).reduce(function(r, k) {
                var _a;
                return Object.assign(Object.assign({
                }, r), (_a = {
                }, _a[k] = _this.fields[k] ? _this.fields[k].toProtobufJSON(options) : {
                }, _a));
            }, {
            }) : {
            };
        };
        return Struct;
    })();
    exports.Struct.id = 'google.protobuf.Struct';
    (function(Struct) {
        /**
         * Message implementation for google.protobuf.FieldsEntry
         */ var FieldsEntry = function() {
            /**
             * Message constructor. Initializes the properties and applies default Protobuf values if necessary
             * @param _value initial values object or instance of FieldsEntry to deeply clone from
             */ function FieldsEntry1(_value) {
                _value = _value || {
                };
                this.key = _value.key;
                this.value = _value.value ? new exports.Value(_value.value) : undefined;
                FieldsEntry1.refineValues(this);
            }
            /**
             * Deserialize binary data to message
             * @param instance message instance
             */ FieldsEntry1.deserializeBinary = function(bytes) {
                var instance = new FieldsEntry1();
                FieldsEntry1.deserializeBinaryFromReader(instance, new googleProtobuf.BinaryReader(bytes));
                return instance;
            };
            /**
             * Check all the properties and set default protobuf values if necessary
             * @param _instance message instance
             */ FieldsEntry1.refineValues = function(_instance) {
                _instance.key = _instance.key || '';
                _instance.value = _instance.value || undefined;
            };
            /**
             * Deserializes / reads binary message into message instance using provided binary reader
             * @param _instance message instance
             * @param _reader binary reader instance
             */ FieldsEntry1.deserializeBinaryFromReader = function(_instance, _reader) {
                while(_reader.nextField()){
                    if (_reader.isEndGroup()) break;
                    switch(_reader.getFieldNumber()){
                        case 1:
                            _instance.key = _reader.readString();
                            break;
                        case 2:
                            _instance.value = new exports.Value();
                            _reader.readMessage(_instance.value, exports.Value.deserializeBinaryFromReader);
                            break;
                        default:
                            _reader.skipField();
                    }
                }
                FieldsEntry1.refineValues(_instance);
            };
            /**
             * Serializes a message to binary format using provided binary reader
             * @param _instance message instance
             * @param _writer binary writer instance
             */ FieldsEntry1.serializeBinaryToWriter = function(_instance, _writer) {
                if (_instance.key) _writer.writeString(1, _instance.key);
                if (_instance.value) _writer.writeMessage(2, _instance.value, exports.Value.serializeBinaryToWriter);
            };
            Object.defineProperty(FieldsEntry1.prototype, "key", {
                get: function() {
                    return this._key;
                },
                set: function(value) {
                    this._key = value;
                },
                enumerable: false,
                configurable: true
            });
            Object.defineProperty(FieldsEntry1.prototype, "value", {
                get: function() {
                    return this._value;
                },
                set: function(value) {
                    this._value = value;
                },
                enumerable: false,
                configurable: true
            });
            /**
             * Serialize message to binary data
             * @param instance message instance
             */ FieldsEntry1.prototype.serializeBinary = function() {
                var writer = new googleProtobuf.BinaryWriter();
                FieldsEntry1.serializeBinaryToWriter(this, writer);
                return writer.getResultBuffer();
            };
            /**
             * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
             */ FieldsEntry1.prototype.toObject = function() {
                return {
                    key: this.key,
                    value: this.value ? this.value.toObject() : undefined
                };
            };
            /**
             * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
             */ FieldsEntry1.prototype.toJSON = function() {
                return this.toObject();
            };
            /**
             * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
             * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
             * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
             */ FieldsEntry1.prototype.toProtobufJSON = function(// @ts-ignore
            options) {
                return {
                    key: this.key,
                    value: this.value ? this.value.toProtobufJSON(options) : null
                };
            };
            return FieldsEntry1;
        }();
        FieldsEntry.id = 'google.protobuf.FieldsEntry';
        Struct.FieldsEntry = FieldsEntry;
    })(exports.Struct || (exports.Struct = {
    }));
    /**
     * Well known type, more at https://developers.google.com/protocol-buffers/docs/reference/google.protobuf
     */ exports.Value = (function() {
        /**
         * Message constructor. Initializes the properties and applies default Protobuf values if necessary
         * @param _value initial values object or instance of Value to deeply clone from
         */ function Value(_value) {
            this._kind = Value.KindCase.none;
            _value = _value || {
            };
            this.nullValue = _value.nullValue;
            this.numberValue = _value.numberValue;
            this.stringValue = _value.stringValue;
            this.boolValue = _value.boolValue;
            this.structValue = _value.structValue ? new exports.Struct(_value.structValue) : undefined;
            this.listValue = _value.listValue ? new ListValue(_value.listValue) : undefined;
            Value.refineValues(this);
        }
        /**
         * Deserialize binary data to message
         * @param instance message instance
         */ Value.deserializeBinary = function(bytes) {
            var instance = new Value();
            Value.deserializeBinaryFromReader(instance, new googleProtobuf.BinaryReader(bytes));
            return instance;
        };
        /**
         * Check all the properties and set default protobuf values if necessary
         * @param _instance message instance
         */ Value.refineValues = function(_instance) {
        };
        /**
         * Deserializes / reads binary message into message instance using provided binary reader
         * @param _instance message instance
         * @param _reader binary reader instance
         */ Value.deserializeBinaryFromReader = function(_instance, _reader) {
            while(_reader.nextField()){
                if (_reader.isEndGroup()) break;
                switch(_reader.getFieldNumber()){
                    case 1:
                        _instance.nullValue = _reader.readEnum();
                        break;
                    case 2:
                        _instance.numberValue = _reader.readDouble();
                        break;
                    case 3:
                        _instance.stringValue = _reader.readString();
                        break;
                    case 4:
                        _instance.boolValue = _reader.readBool();
                        break;
                    case 5:
                        _instance.structValue = new exports.Struct();
                        _reader.readMessage(_instance.structValue, exports.Struct.deserializeBinaryFromReader);
                        break;
                    case 6:
                        _instance.listValue = new ListValue();
                        _reader.readMessage(_instance.listValue, ListValue.deserializeBinaryFromReader);
                        break;
                    default:
                        _reader.skipField();
                }
            }
            Value.refineValues(_instance);
        };
        /**
         * Serializes a message to binary format using provided binary reader
         * @param _instance message instance
         * @param _writer binary writer instance
         */ Value.serializeBinaryToWriter = function(_instance, _writer) {
            if (_instance.nullValue || _instance.nullValue === 0) _writer.writeEnum(1, _instance.nullValue);
            if (_instance.numberValue || _instance.numberValue === 0) _writer.writeDouble(2, _instance.numberValue);
            if (_instance.stringValue || _instance.stringValue === '') _writer.writeString(3, _instance.stringValue);
            if (_instance.boolValue || _instance.boolValue === false) _writer.writeBool(4, _instance.boolValue);
            if (_instance.structValue) _writer.writeMessage(5, _instance.structValue, exports.Struct.serializeBinaryToWriter);
            if (_instance.listValue) _writer.writeMessage(6, _instance.listValue, ListValue.serializeBinaryToWriter);
        };
        Object.defineProperty(Value.prototype, "nullValue", {
            get: function() {
                return this._nullValue;
            },
            set: function(value) {
                if (value !== undefined && value !== null) {
                    this._numberValue = this._stringValue = this._boolValue = this._structValue = this._listValue = undefined;
                    this._kind = Value.KindCase.nullValue;
                }
                this._nullValue = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Value.prototype, "numberValue", {
            get: function() {
                return this._numberValue;
            },
            set: function(value) {
                if (value !== undefined && value !== null) {
                    this._nullValue = this._stringValue = this._boolValue = this._structValue = this._listValue = undefined;
                    this._kind = Value.KindCase.numberValue;
                }
                this._numberValue = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Value.prototype, "stringValue", {
            get: function() {
                return this._stringValue;
            },
            set: function(value) {
                if (value !== undefined && value !== null) {
                    this._nullValue = this._numberValue = this._boolValue = this._structValue = this._listValue = undefined;
                    this._kind = Value.KindCase.stringValue;
                }
                this._stringValue = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Value.prototype, "boolValue", {
            get: function() {
                return this._boolValue;
            },
            set: function(value) {
                if (value !== undefined && value !== null) {
                    this._nullValue = this._numberValue = this._stringValue = this._structValue = this._listValue = undefined;
                    this._kind = Value.KindCase.boolValue;
                }
                this._boolValue = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Value.prototype, "structValue", {
            get: function() {
                return this._structValue;
            },
            set: function(value) {
                if (value !== undefined && value !== null) {
                    this._nullValue = this._numberValue = this._stringValue = this._boolValue = this._listValue = undefined;
                    this._kind = Value.KindCase.structValue;
                }
                this._structValue = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Value.prototype, "listValue", {
            get: function() {
                return this._listValue;
            },
            set: function(value) {
                if (value !== undefined && value !== null) {
                    this._nullValue = this._numberValue = this._stringValue = this._boolValue = this._structValue = undefined;
                    this._kind = Value.KindCase.listValue;
                }
                this._listValue = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Value.prototype, "kind", {
            get: function() {
                return this._kind;
            },
            enumerable: false,
            configurable: true
        });
        /**
         * Serialize message to binary data
         * @param instance message instance
         */ Value.prototype.serializeBinary = function() {
            var writer = new googleProtobuf.BinaryWriter();
            Value.serializeBinaryToWriter(this, writer);
            return writer.getResultBuffer();
        };
        /**
         * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
         */ Value.prototype.toObject = function() {
            return {
                nullValue: this.nullValue,
                numberValue: this.numberValue,
                stringValue: this.stringValue,
                boolValue: this.boolValue,
                structValue: this.structValue ? this.structValue.toObject() : undefined,
                listValue: this.listValue ? this.listValue.toObject() : undefined
            };
        };
        /**
         * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
         */ Value.prototype.toJSON = function() {
            return this.toObject();
        };
        /**
         * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
         * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
         * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
         */ Value.prototype.toProtobufJSON = function(// @ts-ignore
        options) {
            switch(this.kind){
                case Value.KindCase.nullValue:
                    return null;
                case Value.KindCase.numberValue:
                    return this.numberValue;
                case Value.KindCase.stringValue:
                    return this.stringValue;
                case Value.KindCase.boolValue:
                    return this.boolValue;
                case Value.KindCase.structValue:
                    return this.structValue ? this.structValue.toProtobufJSON(options) : null;
                case Value.KindCase.listValue:
                    return this.listValue ? this.listValue.toProtobufJSON(options) : null;
                default:
                    return null; // yes, according to standard should throw error, but no, it's not going to happen here
            }
        };
        return Value;
    })();
    exports.Value.id = 'google.protobuf.Value';
    (function(Value) {
        var KindCase;
        (function(KindCase1) {
            KindCase1[KindCase1["none"] = 0] = "none";
            KindCase1[KindCase1["nullValue"] = 1] = "nullValue";
            KindCase1[KindCase1["numberValue"] = 2] = "numberValue";
            KindCase1[KindCase1["stringValue"] = 3] = "stringValue";
            KindCase1[KindCase1["boolValue"] = 4] = "boolValue";
            KindCase1[KindCase1["structValue"] = 5] = "structValue";
            KindCase1[KindCase1["listValue"] = 6] = "listValue";
        })(KindCase = Value.KindCase || (Value.KindCase = {
        }));
    })(exports.Value || (exports.Value = {
    }));
    /**
     * Well known type, more at https://developers.google.com/protocol-buffers/docs/reference/google.protobuf
     */ var ListValue = function() {
        /**
         * Message constructor. Initializes the properties and applies default Protobuf values if necessary
         * @param _value initial values object or instance of ListValue to deeply clone from
         */ function ListValue1(_value) {
            _value = _value || {
            };
            this.values = (_value.values || []).map(function(m) {
                return new exports.Value(m);
            });
            ListValue1.refineValues(this);
        }
        /**
         * Deserialize binary data to message
         * @param instance message instance
         */ ListValue1.deserializeBinary = function(bytes) {
            var instance = new ListValue1();
            ListValue1.deserializeBinaryFromReader(instance, new googleProtobuf.BinaryReader(bytes));
            return instance;
        };
        /**
         * Check all the properties and set default protobuf values if necessary
         * @param _instance message instance
         */ ListValue1.refineValues = function(_instance) {
            _instance.values = _instance.values || [];
        };
        /**
         * Deserializes / reads binary message into message instance using provided binary reader
         * @param _instance message instance
         * @param _reader binary reader instance
         */ ListValue1.deserializeBinaryFromReader = function(_instance, _reader) {
            while(_reader.nextField()){
                if (_reader.isEndGroup()) break;
                switch(_reader.getFieldNumber()){
                    case 1:
                        var messageInitializer1 = new exports.Value();
                        _reader.readMessage(messageInitializer1, exports.Value.deserializeBinaryFromReader);
                        (_instance.values = _instance.values || []).push(messageInitializer1);
                        break;
                    default:
                        _reader.skipField();
                }
            }
            ListValue1.refineValues(_instance);
        };
        /**
         * Serializes a message to binary format using provided binary reader
         * @param _instance message instance
         * @param _writer binary writer instance
         */ ListValue1.serializeBinaryToWriter = function(_instance, _writer) {
            if (_instance.values && _instance.values.length) _writer.writeRepeatedMessage(1, _instance.values, exports.Value.serializeBinaryToWriter);
        };
        Object.defineProperty(ListValue1.prototype, "values", {
            get: function() {
                return this._values;
            },
            set: function(value) {
                this._values = value;
            },
            enumerable: false,
            configurable: true
        });
        /**
         * Serialize message to binary data
         * @param instance message instance
         */ ListValue1.prototype.serializeBinary = function() {
            var writer = new googleProtobuf.BinaryWriter();
            ListValue1.serializeBinaryToWriter(this, writer);
            return writer.getResultBuffer();
        };
        /**
         * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
         */ ListValue1.prototype.toObject = function() {
            return {
                values: (this.values || []).map(function(m) {
                    return m.toObject();
                })
            };
        };
        /**
         * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
         */ ListValue1.prototype.toJSON = function() {
            return this.toObject();
        };
        /**
         * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
         * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
         * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
         */ ListValue1.prototype.toProtobufJSON = function(// @ts-ignore
        options) {
            return (this.values || []).map(function(v) {
                return v ? v.toProtobufJSON(options) : null;
            });
        };
        return ListValue1;
    }();
    ListValue.id = 'google.protobuf.ListValue';
    /**
     * Well known type, more at https://developers.google.com/protocol-buffers/docs/reference/google.protobuf
     */ var Timestamp = function() {
        /**
         * Message constructor. Initializes the properties and applies default Protobuf values if necessary
         * @param _value initial values object or instance of Timestamp to deeply clone from
         */ function Timestamp1(_value) {
            _value = _value || {
            };
            this.seconds = _value.seconds;
            this.nanos = _value.nanos;
            Timestamp1.refineValues(this);
        }
        /**
         * Deserialize binary data to message
         * @param instance message instance
         */ Timestamp1.deserializeBinary = function(bytes) {
            var instance = new Timestamp1();
            Timestamp1.deserializeBinaryFromReader(instance, new googleProtobuf.BinaryReader(bytes));
            return instance;
        };
        Timestamp1.fromDate = function(date) {
            var timestamp = new Timestamp1();
            timestamp.fromDate(date);
            return timestamp;
        };
        Timestamp1.fromISOString = function(isoDate) {
            var timestamp = new Timestamp1();
            timestamp.fromISOString(isoDate);
            return timestamp;
        };
        /**
         * Check all the properties and set default protobuf values if necessary
         * @param _instance message instance
         */ Timestamp1.refineValues = function(_instance) {
            _instance.seconds = _instance.seconds || '0';
            _instance.nanos = _instance.nanos || 0;
        };
        /**
         * Deserializes / reads binary message into message instance using provided binary reader
         * @param _instance message instance
         * @param _reader binary reader instance
         */ Timestamp1.deserializeBinaryFromReader = function(_instance, _reader) {
            while(_reader.nextField()){
                if (_reader.isEndGroup()) break;
                switch(_reader.getFieldNumber()){
                    case 1:
                        _instance.seconds = _reader.readInt64String();
                        break;
                    case 2:
                        _instance.nanos = _reader.readInt32();
                        break;
                    default:
                        _reader.skipField();
                }
            }
            Timestamp1.refineValues(_instance);
        };
        /**
         * Serializes a message to binary format using provided binary reader
         * @param _instance message instance
         * @param _writer binary writer instance
         */ Timestamp1.serializeBinaryToWriter = function(_instance, _writer) {
            if (_instance.seconds) _writer.writeInt64String(1, _instance.seconds);
            if (_instance.nanos) _writer.writeInt32(2, _instance.nanos);
        };
        Object.defineProperty(Timestamp1.prototype, "seconds", {
            get: function() {
                return this._seconds;
            },
            set: function(value) {
                this._seconds = value;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Timestamp1.prototype, "nanos", {
            get: function() {
                return this._nanos;
            },
            set: function(value) {
                this._nanos = value;
            },
            enumerable: false,
            configurable: true
        });
        /**
         * Serialize message to binary data
         * @param instance message instance
         */ Timestamp1.prototype.serializeBinary = function() {
            var writer = new googleProtobuf.BinaryWriter();
            Timestamp1.serializeBinaryToWriter(this, writer);
            return writer.getResultBuffer();
        };
        /**
         * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
         */ Timestamp1.prototype.toObject = function() {
            return {
                seconds: this.seconds,
                nanos: this.nanos
            };
        };
        /**
         * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
         */ Timestamp1.prototype.toJSON = function() {
            return this.toObject();
        };
        /**
         * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
         * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
         * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
         */ Timestamp1.prototype.toProtobufJSON = function(// @ts-ignore
        options) {
            return this.toISOString();
        };
        Timestamp1.prototype.fromDate = function(date) {
            this.seconds = '' + Math.floor(date.getTime() / 1000);
            this.nanos = date.getMilliseconds() * 1000000;
        };
        Timestamp1.prototype.toDate = function() {
            return new Date(parseInt(this.seconds || '0') * 1000 + (this.nanos || 0) / 1000000);
        };
        Timestamp1.prototype.fromISOString = function(isoDate) {
            this.fromDate(new Date(isoDate));
        };
        Timestamp1.prototype.toISOString = function() {
            return this.toDate().toISOString();
        };
        return Timestamp1;
    }();
    Timestamp.id = 'google.protobuf.Timestamp';
    /* tslint:disable */ /**
     * Well known type, more at https://developers.google.com/protocol-buffers/docs/reference/google.protobuf
     */ var DoubleValue = function() {
        /**
         * Message constructor. Initializes the properties and applies default Protobuf values if necessary
         * @param _value initial values object or instance of DoubleValue to deeply clone from
         */ function DoubleValue1(_value) {
            _value = _value || {
            };
            this.value = _value.value;
            DoubleValue1.refineValues(this);
        }
        /**
         * Deserialize binary data to message
         * @param instance message instance
         */ DoubleValue1.deserializeBinary = function(bytes) {
            var instance = new DoubleValue1();
            DoubleValue1.deserializeBinaryFromReader(instance, new googleProtobuf.BinaryReader(bytes));
            return instance;
        };
        /**
         * Check all the properties and set default protobuf values if necessary
         * @param _instance message instance
         */ DoubleValue1.refineValues = function(_instance) {
            _instance.value = _instance.value || 0;
        };
        /**
         * Deserializes / reads binary message into message instance using provided binary reader
         * @param _instance message instance
         * @param _reader binary reader instance
         */ DoubleValue1.deserializeBinaryFromReader = function(_instance, _reader) {
            while(_reader.nextField()){
                if (_reader.isEndGroup()) break;
                switch(_reader.getFieldNumber()){
                    case 1:
                        _instance.value = _reader.readDouble();
                        break;
                    default:
                        _reader.skipField();
                }
            }
            DoubleValue1.refineValues(_instance);
        };
        /**
         * Serializes a message to binary format using provided binary reader
         * @param _instance message instance
         * @param _writer binary writer instance
         */ DoubleValue1.serializeBinaryToWriter = function(_instance, _writer) {
            if (_instance.value) _writer.writeDouble(1, _instance.value);
        };
        Object.defineProperty(DoubleValue1.prototype, "value", {
            get: function() {
                return this._value;
            },
            set: function(value) {
                this._value = value;
            },
            enumerable: false,
            configurable: true
        });
        /**
         * Serialize message to binary data
         * @param instance message instance
         */ DoubleValue1.prototype.serializeBinary = function() {
            var writer = new googleProtobuf.BinaryWriter();
            DoubleValue1.serializeBinaryToWriter(this, writer);
            return writer.getResultBuffer();
        };
        /**
         * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
         */ DoubleValue1.prototype.toObject = function() {
            return {
                value: this.value
            };
        };
        /**
         * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
         */ DoubleValue1.prototype.toJSON = function() {
            return this.toObject();
        };
        /**
         * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
         * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
         * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
         */ DoubleValue1.prototype.toProtobufJSON = function(// @ts-ignore
        options) {
            return this.value;
        };
        return DoubleValue1;
    }();
    DoubleValue.id = 'google.protobuf.DoubleValue';
    /**
     * Well known type, more at https://developers.google.com/protocol-buffers/docs/reference/google.protobuf
     */ var FloatValue = function() {
        /**
         * Message constructor. Initializes the properties and applies default Protobuf values if necessary
         * @param _value initial values object or instance of FloatValue to deeply clone from
         */ function FloatValue1(_value) {
            _value = _value || {
            };
            this.value = _value.value;
            FloatValue1.refineValues(this);
        }
        /**
         * Deserialize binary data to message
         * @param instance message instance
         */ FloatValue1.deserializeBinary = function(bytes) {
            var instance = new FloatValue1();
            FloatValue1.deserializeBinaryFromReader(instance, new googleProtobuf.BinaryReader(bytes));
            return instance;
        };
        /**
         * Check all the properties and set default protobuf values if necessary
         * @param _instance message instance
         */ FloatValue1.refineValues = function(_instance) {
            _instance.value = _instance.value || 0;
        };
        /**
         * Deserializes / reads binary message into message instance using provided binary reader
         * @param _instance message instance
         * @param _reader binary reader instance
         */ FloatValue1.deserializeBinaryFromReader = function(_instance, _reader) {
            while(_reader.nextField()){
                if (_reader.isEndGroup()) break;
                switch(_reader.getFieldNumber()){
                    case 1:
                        _instance.value = _reader.readFloat();
                        break;
                    default:
                        _reader.skipField();
                }
            }
            FloatValue1.refineValues(_instance);
        };
        /**
         * Serializes a message to binary format using provided binary reader
         * @param _instance message instance
         * @param _writer binary writer instance
         */ FloatValue1.serializeBinaryToWriter = function(_instance, _writer) {
            if (_instance.value) _writer.writeFloat(1, _instance.value);
        };
        Object.defineProperty(FloatValue1.prototype, "value", {
            get: function() {
                return this._value;
            },
            set: function(value) {
                this._value = value;
            },
            enumerable: false,
            configurable: true
        });
        /**
         * Serialize message to binary data
         * @param instance message instance
         */ FloatValue1.prototype.serializeBinary = function() {
            var writer = new googleProtobuf.BinaryWriter();
            FloatValue1.serializeBinaryToWriter(this, writer);
            return writer.getResultBuffer();
        };
        /**
         * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
         */ FloatValue1.prototype.toObject = function() {
            return {
                value: this.value
            };
        };
        /**
         * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
         */ FloatValue1.prototype.toJSON = function() {
            return this.toObject();
        };
        /**
         * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
         * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
         * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
         */ FloatValue1.prototype.toProtobufJSON = function(// @ts-ignore
        options) {
            return this.value;
        };
        return FloatValue1;
    }();
    FloatValue.id = 'google.protobuf.FloatValue';
    /**
     * Well known type, more at https://developers.google.com/protocol-buffers/docs/reference/google.protobuf
     */ var Int64Value = function() {
        /**
         * Message constructor. Initializes the properties and applies default Protobuf values if necessary
         * @param _value initial values object or instance of Int64Value to deeply clone from
         */ function Int64Value1(_value) {
            _value = _value || {
            };
            this.value = _value.value;
            Int64Value1.refineValues(this);
        }
        /**
         * Deserialize binary data to message
         * @param instance message instance
         */ Int64Value1.deserializeBinary = function(bytes) {
            var instance = new Int64Value1();
            Int64Value1.deserializeBinaryFromReader(instance, new googleProtobuf.BinaryReader(bytes));
            return instance;
        };
        /**
         * Check all the properties and set default protobuf values if necessary
         * @param _instance message instance
         */ Int64Value1.refineValues = function(_instance) {
            _instance.value = _instance.value || '0';
        };
        /**
         * Deserializes / reads binary message into message instance using provided binary reader
         * @param _instance message instance
         * @param _reader binary reader instance
         */ Int64Value1.deserializeBinaryFromReader = function(_instance, _reader) {
            while(_reader.nextField()){
                if (_reader.isEndGroup()) break;
                switch(_reader.getFieldNumber()){
                    case 1:
                        _instance.value = _reader.readInt64String();
                        break;
                    default:
                        _reader.skipField();
                }
            }
            Int64Value1.refineValues(_instance);
        };
        /**
         * Serializes a message to binary format using provided binary reader
         * @param _instance message instance
         * @param _writer binary writer instance
         */ Int64Value1.serializeBinaryToWriter = function(_instance, _writer) {
            if (_instance.value) _writer.writeInt64String(1, _instance.value);
        };
        Object.defineProperty(Int64Value1.prototype, "value", {
            get: function() {
                return this._value;
            },
            set: function(value) {
                this._value = value;
            },
            enumerable: false,
            configurable: true
        });
        /**
         * Serialize message to binary data
         * @param instance message instance
         */ Int64Value1.prototype.serializeBinary = function() {
            var writer = new googleProtobuf.BinaryWriter();
            Int64Value1.serializeBinaryToWriter(this, writer);
            return writer.getResultBuffer();
        };
        /**
         * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
         */ Int64Value1.prototype.toObject = function() {
            return {
                value: this.value
            };
        };
        /**
         * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
         */ Int64Value1.prototype.toJSON = function() {
            return this.toObject();
        };
        /**
         * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
         * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
         * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
         */ Int64Value1.prototype.toProtobufJSON = function(// @ts-ignore
        options) {
            return this.value;
        };
        return Int64Value1;
    }();
    Int64Value.id = 'google.protobuf.Int64Value';
    /**
     * Well known type, more at https://developers.google.com/protocol-buffers/docs/reference/google.protobuf
     */ var UInt64Value = function() {
        /**
         * Message constructor. Initializes the properties and applies default Protobuf values if necessary
         * @param _value initial values object or instance of UInt64Value to deeply clone from
         */ function UInt64Value1(_value) {
            _value = _value || {
            };
            this.value = _value.value;
            UInt64Value1.refineValues(this);
        }
        /**
         * Deserialize binary data to message
         * @param instance message instance
         */ UInt64Value1.deserializeBinary = function(bytes) {
            var instance = new UInt64Value1();
            UInt64Value1.deserializeBinaryFromReader(instance, new googleProtobuf.BinaryReader(bytes));
            return instance;
        };
        /**
         * Check all the properties and set default protobuf values if necessary
         * @param _instance message instance
         */ UInt64Value1.refineValues = function(_instance) {
            _instance.value = _instance.value || '0';
        };
        /**
         * Deserializes / reads binary message into message instance using provided binary reader
         * @param _instance message instance
         * @param _reader binary reader instance
         */ UInt64Value1.deserializeBinaryFromReader = function(_instance, _reader) {
            while(_reader.nextField()){
                if (_reader.isEndGroup()) break;
                switch(_reader.getFieldNumber()){
                    case 1:
                        _instance.value = _reader.readUint64String();
                        break;
                    default:
                        _reader.skipField();
                }
            }
            UInt64Value1.refineValues(_instance);
        };
        /**
         * Serializes a message to binary format using provided binary reader
         * @param _instance message instance
         * @param _writer binary writer instance
         */ UInt64Value1.serializeBinaryToWriter = function(_instance, _writer) {
            if (_instance.value) _writer.writeUint64String(1, _instance.value);
        };
        Object.defineProperty(UInt64Value1.prototype, "value", {
            get: function() {
                return this._value;
            },
            set: function(value) {
                this._value = value;
            },
            enumerable: false,
            configurable: true
        });
        /**
         * Serialize message to binary data
         * @param instance message instance
         */ UInt64Value1.prototype.serializeBinary = function() {
            var writer = new googleProtobuf.BinaryWriter();
            UInt64Value1.serializeBinaryToWriter(this, writer);
            return writer.getResultBuffer();
        };
        /**
         * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
         */ UInt64Value1.prototype.toObject = function() {
            return {
                value: this.value
            };
        };
        /**
         * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
         */ UInt64Value1.prototype.toJSON = function() {
            return this.toObject();
        };
        /**
         * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
         * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
         * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
         */ UInt64Value1.prototype.toProtobufJSON = function(// @ts-ignore
        options) {
            return this.value;
        };
        return UInt64Value1;
    }();
    UInt64Value.id = 'google.protobuf.UInt64Value';
    /**
     * Well known type, more at https://developers.google.com/protocol-buffers/docs/reference/google.protobuf
     */ var Int32Value = function() {
        /**
         * Message constructor. Initializes the properties and applies default Protobuf values if necessary
         * @param _value initial values object or instance of Int32Value to deeply clone from
         */ function Int32Value1(_value) {
            _value = _value || {
            };
            this.value = _value.value;
            Int32Value1.refineValues(this);
        }
        /**
         * Deserialize binary data to message
         * @param instance message instance
         */ Int32Value1.deserializeBinary = function(bytes) {
            var instance = new Int32Value1();
            Int32Value1.deserializeBinaryFromReader(instance, new googleProtobuf.BinaryReader(bytes));
            return instance;
        };
        /**
         * Check all the properties and set default protobuf values if necessary
         * @param _instance message instance
         */ Int32Value1.refineValues = function(_instance) {
            _instance.value = _instance.value || 0;
        };
        /**
         * Deserializes / reads binary message into message instance using provided binary reader
         * @param _instance message instance
         * @param _reader binary reader instance
         */ Int32Value1.deserializeBinaryFromReader = function(_instance, _reader) {
            while(_reader.nextField()){
                if (_reader.isEndGroup()) break;
                switch(_reader.getFieldNumber()){
                    case 1:
                        _instance.value = _reader.readInt32();
                        break;
                    default:
                        _reader.skipField();
                }
            }
            Int32Value1.refineValues(_instance);
        };
        /**
         * Serializes a message to binary format using provided binary reader
         * @param _instance message instance
         * @param _writer binary writer instance
         */ Int32Value1.serializeBinaryToWriter = function(_instance, _writer) {
            if (_instance.value) _writer.writeInt32(1, _instance.value);
        };
        Object.defineProperty(Int32Value1.prototype, "value", {
            get: function() {
                return this._value;
            },
            set: function(value) {
                this._value = value;
            },
            enumerable: false,
            configurable: true
        });
        /**
         * Serialize message to binary data
         * @param instance message instance
         */ Int32Value1.prototype.serializeBinary = function() {
            var writer = new googleProtobuf.BinaryWriter();
            Int32Value1.serializeBinaryToWriter(this, writer);
            return writer.getResultBuffer();
        };
        /**
         * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
         */ Int32Value1.prototype.toObject = function() {
            return {
                value: this.value
            };
        };
        /**
         * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
         */ Int32Value1.prototype.toJSON = function() {
            return this.toObject();
        };
        /**
         * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
         * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
         * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
         */ Int32Value1.prototype.toProtobufJSON = function(// @ts-ignore
        options) {
            return this.value;
        };
        return Int32Value1;
    }();
    Int32Value.id = 'google.protobuf.Int32Value';
    /**
     * Well known type, more at https://developers.google.com/protocol-buffers/docs/reference/google.protobuf
     */ var UInt32Value = function() {
        /**
         * Message constructor. Initializes the properties and applies default Protobuf values if necessary
         * @param _value initial values object or instance of UInt32Value to deeply clone from
         */ function UInt32Value1(_value) {
            _value = _value || {
            };
            this.value = _value.value;
            UInt32Value1.refineValues(this);
        }
        /**
         * Deserialize binary data to message
         * @param instance message instance
         */ UInt32Value1.deserializeBinary = function(bytes) {
            var instance = new UInt32Value1();
            UInt32Value1.deserializeBinaryFromReader(instance, new googleProtobuf.BinaryReader(bytes));
            return instance;
        };
        /**
         * Check all the properties and set default protobuf values if necessary
         * @param _instance message instance
         */ UInt32Value1.refineValues = function(_instance) {
            _instance.value = _instance.value || 0;
        };
        /**
         * Deserializes / reads binary message into message instance using provided binary reader
         * @param _instance message instance
         * @param _reader binary reader instance
         */ UInt32Value1.deserializeBinaryFromReader = function(_instance, _reader) {
            while(_reader.nextField()){
                if (_reader.isEndGroup()) break;
                switch(_reader.getFieldNumber()){
                    case 1:
                        _instance.value = _reader.readUint32();
                        break;
                    default:
                        _reader.skipField();
                }
            }
            UInt32Value1.refineValues(_instance);
        };
        /**
         * Serializes a message to binary format using provided binary reader
         * @param _instance message instance
         * @param _writer binary writer instance
         */ UInt32Value1.serializeBinaryToWriter = function(_instance, _writer) {
            if (_instance.value) _writer.writeUint32(1, _instance.value);
        };
        Object.defineProperty(UInt32Value1.prototype, "value", {
            get: function() {
                return this._value;
            },
            set: function(value) {
                this._value = value;
            },
            enumerable: false,
            configurable: true
        });
        /**
         * Serialize message to binary data
         * @param instance message instance
         */ UInt32Value1.prototype.serializeBinary = function() {
            var writer = new googleProtobuf.BinaryWriter();
            UInt32Value1.serializeBinaryToWriter(this, writer);
            return writer.getResultBuffer();
        };
        /**
         * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
         */ UInt32Value1.prototype.toObject = function() {
            return {
                value: this.value
            };
        };
        /**
         * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
         */ UInt32Value1.prototype.toJSON = function() {
            return this.toObject();
        };
        /**
         * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
         * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
         * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
         */ UInt32Value1.prototype.toProtobufJSON = function(// @ts-ignore
        options) {
            return this.value;
        };
        return UInt32Value1;
    }();
    UInt32Value.id = 'google.protobuf.UInt32Value';
    /**
     * Well known type, more at https://developers.google.com/protocol-buffers/docs/reference/google.protobuf
     */ var BoolValue = function() {
        /**
         * Message constructor. Initializes the properties and applies default Protobuf values if necessary
         * @param _value initial values object or instance of BoolValue to deeply clone from
         */ function BoolValue1(_value) {
            _value = _value || {
            };
            this.value = _value.value;
            BoolValue1.refineValues(this);
        }
        /**
         * Deserialize binary data to message
         * @param instance message instance
         */ BoolValue1.deserializeBinary = function(bytes) {
            var instance = new BoolValue1();
            BoolValue1.deserializeBinaryFromReader(instance, new googleProtobuf.BinaryReader(bytes));
            return instance;
        };
        /**
         * Check all the properties and set default protobuf values if necessary
         * @param _instance message instance
         */ BoolValue1.refineValues = function(_instance) {
            _instance.value = _instance.value || false;
        };
        /**
         * Deserializes / reads binary message into message instance using provided binary reader
         * @param _instance message instance
         * @param _reader binary reader instance
         */ BoolValue1.deserializeBinaryFromReader = function(_instance, _reader) {
            while(_reader.nextField()){
                if (_reader.isEndGroup()) break;
                switch(_reader.getFieldNumber()){
                    case 1:
                        _instance.value = _reader.readBool();
                        break;
                    default:
                        _reader.skipField();
                }
            }
            BoolValue1.refineValues(_instance);
        };
        /**
         * Serializes a message to binary format using provided binary reader
         * @param _instance message instance
         * @param _writer binary writer instance
         */ BoolValue1.serializeBinaryToWriter = function(_instance, _writer) {
            if (_instance.value) _writer.writeBool(1, _instance.value);
        };
        Object.defineProperty(BoolValue1.prototype, "value", {
            get: function() {
                return this._value;
            },
            set: function(value) {
                this._value = value;
            },
            enumerable: false,
            configurable: true
        });
        /**
         * Serialize message to binary data
         * @param instance message instance
         */ BoolValue1.prototype.serializeBinary = function() {
            var writer = new googleProtobuf.BinaryWriter();
            BoolValue1.serializeBinaryToWriter(this, writer);
            return writer.getResultBuffer();
        };
        /**
         * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
         */ BoolValue1.prototype.toObject = function() {
            return {
                value: this.value
            };
        };
        /**
         * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
         */ BoolValue1.prototype.toJSON = function() {
            return this.toObject();
        };
        /**
         * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
         * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
         * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
         */ BoolValue1.prototype.toProtobufJSON = function(// @ts-ignore
        options) {
            return this.value;
        };
        return BoolValue1;
    }();
    BoolValue.id = 'google.protobuf.BoolValue';
    /**
     * Well known type, more at https://developers.google.com/protocol-buffers/docs/reference/google.protobuf
     */ var StringValue = function() {
        /**
         * Message constructor. Initializes the properties and applies default Protobuf values if necessary
         * @param _value initial values object or instance of StringValue to deeply clone from
         */ function StringValue1(_value) {
            _value = _value || {
            };
            this.value = _value.value;
            StringValue1.refineValues(this);
        }
        /**
         * Deserialize binary data to message
         * @param instance message instance
         */ StringValue1.deserializeBinary = function(bytes) {
            var instance = new StringValue1();
            StringValue1.deserializeBinaryFromReader(instance, new googleProtobuf.BinaryReader(bytes));
            return instance;
        };
        /**
         * Check all the properties and set default protobuf values if necessary
         * @param _instance message instance
         */ StringValue1.refineValues = function(_instance) {
            _instance.value = _instance.value || '';
        };
        /**
         * Deserializes / reads binary message into message instance using provided binary reader
         * @param _instance message instance
         * @param _reader binary reader instance
         */ StringValue1.deserializeBinaryFromReader = function(_instance, _reader) {
            while(_reader.nextField()){
                if (_reader.isEndGroup()) break;
                switch(_reader.getFieldNumber()){
                    case 1:
                        _instance.value = _reader.readString();
                        break;
                    default:
                        _reader.skipField();
                }
            }
            StringValue1.refineValues(_instance);
        };
        /**
         * Serializes a message to binary format using provided binary reader
         * @param _instance message instance
         * @param _writer binary writer instance
         */ StringValue1.serializeBinaryToWriter = function(_instance, _writer) {
            if (_instance.value) _writer.writeString(1, _instance.value);
        };
        Object.defineProperty(StringValue1.prototype, "value", {
            get: function() {
                return this._value;
            },
            set: function(value) {
                this._value = value;
            },
            enumerable: false,
            configurable: true
        });
        /**
         * Serialize message to binary data
         * @param instance message instance
         */ StringValue1.prototype.serializeBinary = function() {
            var writer = new googleProtobuf.BinaryWriter();
            StringValue1.serializeBinaryToWriter(this, writer);
            return writer.getResultBuffer();
        };
        /**
         * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
         */ StringValue1.prototype.toObject = function() {
            return {
                value: this.value
            };
        };
        /**
         * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
         */ StringValue1.prototype.toJSON = function() {
            return this.toObject();
        };
        /**
         * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
         * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
         * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
         */ StringValue1.prototype.toProtobufJSON = function(// @ts-ignore
        options) {
            return this.value;
        };
        return StringValue1;
    }();
    StringValue.id = 'google.protobuf.StringValue';
    /**
     * Well known type, more at https://developers.google.com/protocol-buffers/docs/reference/google.protobuf
     */ var BytesValue = function() {
        /**
         * Message constructor. Initializes the properties and applies default Protobuf values if necessary
         * @param _value initial values object or instance of BytesValue to deeply clone from
         */ function BytesValue1(_value) {
            _value = _value || {
            };
            this.value = _value.value;
            BytesValue1.refineValues(this);
        }
        /**
         * Deserialize binary data to message
         * @param instance message instance
         */ BytesValue1.deserializeBinary = function(bytes) {
            var instance = new BytesValue1();
            BytesValue1.deserializeBinaryFromReader(instance, new googleProtobuf.BinaryReader(bytes));
            return instance;
        };
        /**
         * Check all the properties and set default protobuf values if necessary
         * @param _instance message instance
         */ BytesValue1.refineValues = function(_instance) {
            _instance.value = _instance.value || new Uint8Array();
        };
        /**
         * Deserializes / reads binary message into message instance using provided binary reader
         * @param _instance message instance
         * @param _reader binary reader instance
         */ BytesValue1.deserializeBinaryFromReader = function(_instance, _reader) {
            while(_reader.nextField()){
                if (_reader.isEndGroup()) break;
                switch(_reader.getFieldNumber()){
                    case 1:
                        _instance.value = _reader.readBytes();
                        break;
                    default:
                        _reader.skipField();
                }
            }
            BytesValue1.refineValues(_instance);
        };
        /**
         * Serializes a message to binary format using provided binary reader
         * @param _instance message instance
         * @param _writer binary writer instance
         */ BytesValue1.serializeBinaryToWriter = function(_instance, _writer) {
            if (_instance.value && _instance.value.length) _writer.writeBytes(1, _instance.value);
        };
        Object.defineProperty(BytesValue1.prototype, "value", {
            get: function() {
                return this._value;
            },
            set: function(value) {
                this._value = value;
            },
            enumerable: false,
            configurable: true
        });
        /**
         * Serialize message to binary data
         * @param instance message instance
         */ BytesValue1.prototype.serializeBinary = function() {
            var writer = new googleProtobuf.BinaryWriter();
            BytesValue1.serializeBinaryToWriter(this, writer);
            return writer.getResultBuffer();
        };
        /**
         * Cast message to standard JavaScript object (all non-primitive values are deeply cloned)
         */ BytesValue1.prototype.toObject = function() {
            return {
                value: this.value ? this.value.subarray(0) : new Uint8Array()
            };
        };
        /**
         * Convenience method to support JSON.stringify(message), replicates the structure of toObject()
         */ BytesValue1.prototype.toJSON = function() {
            return this.toObject();
        };
        /**
         * Cast message to JSON using protobuf JSON notation: https://developers.google.com/protocol-buffers/docs/proto3#json
         * Attention: output differs from toObject() e.g. enums are represented as names and not as numbers, Timestamp is an ISO Date string format etc.
         * If the message itself or some of descendant messages is google.protobuf.Any, you MUST provide a message pool as options. If not, the messagePool is not required
         */ BytesValue1.prototype.toProtobufJSON = function(// @ts-ignore
        options) {
            return this.value ? common.uint8ArrayToBase64(this.value) : '';
        };
        return BytesValue1;
    }();
    BytesValue.id = 'google.protobuf.BytesValue';
    /*
     * Public API Surface of well-known-types
     */ /**
     * Generated bundle index. Do not edit.
     */ exports.Any = Any;
    exports.Api = Api;
    exports.BoolValue = BoolValue;
    exports.BytesValue = BytesValue;
    exports.DoubleValue = DoubleValue;
    exports.Duration = Duration;
    exports.Empty = Empty;
    exports.Enum = Enum;
    exports.EnumValue = EnumValue;
    exports.FieldMask = FieldMask;
    exports.FloatValue = FloatValue;
    exports.Int32Value = Int32Value;
    exports.Int64Value = Int64Value;
    exports.ListValue = ListValue;
    exports.Method = Method;
    exports.Mixin = Mixin;
    exports.Option = Option1;
    exports.SourceContext = SourceContext;
    exports.StringValue = StringValue;
    exports.Timestamp = Timestamp;
    exports.Type = Type;
    exports.UInt32Value = UInt32Value;
    exports.UInt64Value = UInt64Value;
    Object.defineProperty(exports, '__esModule', {
        value: true
    });
});

},{"google-protobuf":"A6PdZ","@metabreak/grpc-webworker-common":"4GbOz"}],"5uLLa":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "GrpcWorkerEchoServiceClientDef", ()=>GrpcWorkerEchoServiceClientDef
);
/* tslint:disable */ /* eslint-disable */ //
// THIS IS A GENERATED FILE
// DO NOT MODIFY IT! YOUR CHANGES WILL BE LOST
var _common = require("@metabreak/grpc-webworker-common");
var _echoPb = require("./echo.pb");
const GrpcWorkerEchoServiceClientDef = {
    serviceId: 'echo.EchoService',
    methods: {
        '/echo.EchoService/EchoOnce': {
            type: _common.GrpcCallType.unary,
            reqclss: _echoPb.EchoRequest,
            resclss: _echoPb.EchoResponse
        },
        '/echo.EchoService/EchoStream': {
            type: _common.GrpcCallType.serverStream,
            reqclss: _echoPb.EchoRequest,
            resclss: _echoPb.EchoResponse
        }
    }
};

},{"@metabreak/grpc-webworker-common":"4GbOz","./echo.pb":"5OWru","@parcel/transformer-js/src/esmodule-helpers.js":"1gLSz"}]},["38fSZ","5DXLx"], "5DXLx", "parcelRequire1553")

//# sourceMappingURL=index.b587647c.js.map
