(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };
  var __reExport = (target, module, copyDefault, desc) => {
    if (module && typeof module === "object" || typeof module === "function") {
      for (let key of __getOwnPropNames(module))
        if (!__hasOwnProp.call(target, key) && (copyDefault || key !== "default"))
          __defProp(target, key, { get: () => module[key], enumerable: !(desc = __getOwnPropDesc(module, key)) || desc.enumerable });
    }
    return target;
  };
  var __toESM = (module, isNodeMode) => {
    return __reExport(__markAsModule(__defProp(module != null ? __create(__getProtoOf(module)) : {}, "default", !isNodeMode && module && module.__esModule ? { get: () => module.default, enumerable: true } : { value: module, enumerable: true })), module);
  };

  // node_modules/tslib/tslib.js
  var require_tslib = __commonJS({
    "node_modules/tslib/tslib.js"(exports, module) {
      var __extends2;
      var __assign2;
      var __rest2;
      var __decorate2;
      var __param2;
      var __metadata2;
      var __awaiter2;
      var __generator2;
      var __exportStar2;
      var __values2;
      var __read2;
      var __spread2;
      var __spreadArrays2;
      var __spreadArray2;
      var __await2;
      var __asyncGenerator2;
      var __asyncDelegator2;
      var __asyncValues2;
      var __makeTemplateObject2;
      var __importStar2;
      var __importDefault2;
      var __classPrivateFieldGet2;
      var __classPrivateFieldSet2;
      var __createBinding2;
      (function(factory) {
        var root = typeof global === "object" ? global : typeof self === "object" ? self : typeof this === "object" ? this : {};
        if (typeof define === "function" && define.amd) {
          define("tslib", ["exports"], function(exports2) {
            factory(createExporter(root, createExporter(exports2)));
          });
        } else if (typeof module === "object" && typeof module.exports === "object") {
          factory(createExporter(root, createExporter(module.exports)));
        } else {
          factory(createExporter(root));
        }
        function createExporter(exports2, previous) {
          if (exports2 !== root) {
            if (typeof Object.create === "function") {
              Object.defineProperty(exports2, "__esModule", { value: true });
            } else {
              exports2.__esModule = true;
            }
          }
          return function(id, v) {
            return exports2[id] = previous ? previous(id, v) : v;
          };
        }
      })(function(exporter) {
        var extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d, b) {
          d.__proto__ = b;
        } || function(d, b) {
          for (var p in b)
            if (Object.prototype.hasOwnProperty.call(b, p))
              d[p] = b[p];
        };
        __extends2 = function(d, b) {
          if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
          extendStatics(d, b);
          function __() {
            this.constructor = d;
          }
          d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
        __assign2 = Object.assign || function(t) {
          for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s)
              if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
          }
          return t;
        };
        __rest2 = function(s, e) {
          var t = {};
          for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
              t[p] = s[p];
          if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
              if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
            }
          return t;
        };
        __decorate2 = function(decorators, target, key, desc) {
          var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
          if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
            r = Reflect.decorate(decorators, target, key, desc);
          else
            for (var i = decorators.length - 1; i >= 0; i--)
              if (d = decorators[i])
                r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
          return c > 3 && r && Object.defineProperty(target, key, r), r;
        };
        __param2 = function(paramIndex, decorator) {
          return function(target, key) {
            decorator(target, key, paramIndex);
          };
        };
        __metadata2 = function(metadataKey, metadataValue) {
          if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
            return Reflect.metadata(metadataKey, metadataValue);
        };
        __awaiter2 = function(thisArg, _arguments, P, generator) {
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
        __generator2 = function(thisArg, body) {
          var _ = { label: 0, sent: function() {
            if (t[0] & 1)
              throw t[1];
            return t[1];
          }, trys: [], ops: [] }, f, y, t, g;
          return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
            return this;
          }), g;
          function verb(n) {
            return function(v) {
              return step([n, v]);
            };
          }
          function step(op) {
            if (f)
              throw new TypeError("Generator is already executing.");
            while (_)
              try {
                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                  return t;
                if (y = 0, t)
                  op = [op[0] & 2, t.value];
                switch (op[0]) {
                  case 0:
                  case 1:
                    t = op;
                    break;
                  case 4:
                    _.label++;
                    return { value: op[1], done: false };
                  case 5:
                    _.label++;
                    y = op[1];
                    op = [0];
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
                    if (t[2])
                      _.ops.pop();
                    _.trys.pop();
                    continue;
                }
                op = body.call(thisArg, _);
              } catch (e) {
                op = [6, e];
                y = 0;
              } finally {
                f = t = 0;
              }
            if (op[0] & 5)
              throw op[1];
            return { value: op[0] ? op[1] : void 0, done: true };
          }
        };
        __exportStar2 = function(m, o) {
          for (var p in m)
            if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p))
              __createBinding2(o, m, p);
        };
        __createBinding2 = Object.create ? function(o, m, k, k2) {
          if (k2 === void 0)
            k2 = k;
          Object.defineProperty(o, k2, { enumerable: true, get: function() {
            return m[k];
          } });
        } : function(o, m, k, k2) {
          if (k2 === void 0)
            k2 = k;
          o[k2] = m[k];
        };
        __values2 = function(o) {
          var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
          if (m)
            return m.call(o);
          if (o && typeof o.length === "number")
            return {
              next: function() {
                if (o && i >= o.length)
                  o = void 0;
                return { value: o && o[i++], done: !o };
              }
            };
          throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
        };
        __read2 = function(o, n) {
          var m = typeof Symbol === "function" && o[Symbol.iterator];
          if (!m)
            return o;
          var i = m.call(o), r, ar = [], e;
          try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
              ar.push(r.value);
          } catch (error) {
            e = { error };
          } finally {
            try {
              if (r && !r.done && (m = i["return"]))
                m.call(i);
            } finally {
              if (e)
                throw e.error;
            }
          }
          return ar;
        };
        __spread2 = function() {
          for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read2(arguments[i]));
          return ar;
        };
        __spreadArrays2 = function() {
          for (var s = 0, i = 0, il = arguments.length; i < il; i++)
            s += arguments[i].length;
          for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
              r[k] = a[j];
          return r;
        };
        __spreadArray2 = function(to, from, pack) {
          if (pack || arguments.length === 2)
            for (var i = 0, l = from.length, ar; i < l; i++) {
              if (ar || !(i in from)) {
                if (!ar)
                  ar = Array.prototype.slice.call(from, 0, i);
                ar[i] = from[i];
              }
            }
          return to.concat(ar || Array.prototype.slice.call(from));
        };
        __await2 = function(v) {
          return this instanceof __await2 ? (this.v = v, this) : new __await2(v);
        };
        __asyncGenerator2 = function(thisArg, _arguments, generator) {
          if (!Symbol.asyncIterator)
            throw new TypeError("Symbol.asyncIterator is not defined.");
          var g = generator.apply(thisArg, _arguments || []), i, q = [];
          return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
            return this;
          }, i;
          function verb(n) {
            if (g[n])
              i[n] = function(v) {
                return new Promise(function(a, b) {
                  q.push([n, v, a, b]) > 1 || resume(n, v);
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
            r.value instanceof __await2 ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
          }
          function fulfill(value) {
            resume("next", value);
          }
          function reject(value) {
            resume("throw", value);
          }
          function settle(f, v) {
            if (f(v), q.shift(), q.length)
              resume(q[0][0], q[0][1]);
          }
        };
        __asyncDelegator2 = function(o) {
          var i, p;
          return i = {}, verb("next"), verb("throw", function(e) {
            throw e;
          }), verb("return"), i[Symbol.iterator] = function() {
            return this;
          }, i;
          function verb(n, f) {
            i[n] = o[n] ? function(v) {
              return (p = !p) ? { value: __await2(o[n](v)), done: n === "return" } : f ? f(v) : v;
            } : f;
          }
        };
        __asyncValues2 = function(o) {
          if (!Symbol.asyncIterator)
            throw new TypeError("Symbol.asyncIterator is not defined.");
          var m = o[Symbol.asyncIterator], i;
          return m ? m.call(o) : (o = typeof __values2 === "function" ? __values2(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
            return this;
          }, i);
          function verb(n) {
            i[n] = o[n] && function(v) {
              return new Promise(function(resolve, reject) {
                v = o[n](v), settle(resolve, reject, v.done, v.value);
              });
            };
          }
          function settle(resolve, reject, d, v) {
            Promise.resolve(v).then(function(v2) {
              resolve({ value: v2, done: d });
            }, reject);
          }
        };
        __makeTemplateObject2 = function(cooked, raw) {
          if (Object.defineProperty) {
            Object.defineProperty(cooked, "raw", { value: raw });
          } else {
            cooked.raw = raw;
          }
          return cooked;
        };
        var __setModuleDefault = Object.create ? function(o, v) {
          Object.defineProperty(o, "default", { enumerable: true, value: v });
        } : function(o, v) {
          o["default"] = v;
        };
        __importStar2 = function(mod) {
          if (mod && mod.__esModule)
            return mod;
          var result = {};
          if (mod != null) {
            for (var k in mod)
              if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
                __createBinding2(result, mod, k);
          }
          __setModuleDefault(result, mod);
          return result;
        };
        __importDefault2 = function(mod) {
          return mod && mod.__esModule ? mod : { "default": mod };
        };
        __classPrivateFieldGet2 = function(receiver, state, kind, f) {
          if (kind === "a" && !f)
            throw new TypeError("Private accessor was defined without a getter");
          if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
            throw new TypeError("Cannot read private member from an object whose class did not declare it");
          return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
        };
        __classPrivateFieldSet2 = function(receiver, state, value, kind, f) {
          if (kind === "m")
            throw new TypeError("Private method is not writable");
          if (kind === "a" && !f)
            throw new TypeError("Private accessor was defined without a setter");
          if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
            throw new TypeError("Cannot write private member to an object whose class did not declare it");
          return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
        };
        exporter("__extends", __extends2);
        exporter("__assign", __assign2);
        exporter("__rest", __rest2);
        exporter("__decorate", __decorate2);
        exporter("__param", __param2);
        exporter("__metadata", __metadata2);
        exporter("__awaiter", __awaiter2);
        exporter("__generator", __generator2);
        exporter("__exportStar", __exportStar2);
        exporter("__createBinding", __createBinding2);
        exporter("__values", __values2);
        exporter("__read", __read2);
        exporter("__spread", __spread2);
        exporter("__spreadArrays", __spreadArrays2);
        exporter("__spreadArray", __spreadArray2);
        exporter("__await", __await2);
        exporter("__asyncGenerator", __asyncGenerator2);
        exporter("__asyncDelegator", __asyncDelegator2);
        exporter("__asyncValues", __asyncValues2);
        exporter("__makeTemplateObject", __makeTemplateObject2);
        exporter("__importStar", __importStar2);
        exporter("__importDefault", __importDefault2);
        exporter("__classPrivateFieldGet", __classPrivateFieldGet2);
        exporter("__classPrivateFieldSet", __classPrivateFieldSet2);
      });
    }
  });

  // node_modules/svelte/internal/index.mjs
  function noop() {
  }
  function assign(tar, src) {
    for (const k in src)
      tar[k] = src[k];
    return tar;
  }
  function run(fn) {
    return fn();
  }
  function blank_object() {
    return /* @__PURE__ */ Object.create(null);
  }
  function run_all(fns) {
    fns.forEach(run);
  }
  function is_function(thing) {
    return typeof thing === "function";
  }
  function safe_not_equal(a, b) {
    return a != a ? b == b : a !== b || (a && typeof a === "object" || typeof a === "function");
  }
  function is_empty(obj) {
    return Object.keys(obj).length === 0;
  }
  function subscribe(store, ...callbacks) {
    if (store == null) {
      return noop;
    }
    const unsub = store.subscribe(...callbacks);
    return unsub.unsubscribe ? () => unsub.unsubscribe() : unsub;
  }
  function component_subscribe(component, store, callback) {
    component.$$.on_destroy.push(subscribe(store, callback));
  }
  function create_slot(definition, ctx, $$scope, fn) {
    if (definition) {
      const slot_ctx = get_slot_context(definition, ctx, $$scope, fn);
      return definition[0](slot_ctx);
    }
  }
  function get_slot_context(definition, ctx, $$scope, fn) {
    return definition[1] && fn ? assign($$scope.ctx.slice(), definition[1](fn(ctx))) : $$scope.ctx;
  }
  function get_slot_changes(definition, $$scope, dirty, fn) {
    if (definition[2] && fn) {
      const lets = definition[2](fn(dirty));
      if ($$scope.dirty === void 0) {
        return lets;
      }
      if (typeof lets === "object") {
        const merged = [];
        const len = Math.max($$scope.dirty.length, lets.length);
        for (let i = 0; i < len; i += 1) {
          merged[i] = $$scope.dirty[i] | lets[i];
        }
        return merged;
      }
      return $$scope.dirty | lets;
    }
    return $$scope.dirty;
  }
  function update_slot_base(slot, slot_definition, ctx, $$scope, slot_changes, get_slot_context_fn) {
    if (slot_changes) {
      const slot_context = get_slot_context(slot_definition, ctx, $$scope, get_slot_context_fn);
      slot.p(slot_context, slot_changes);
    }
  }
  function get_all_dirty_from_scope($$scope) {
    if ($$scope.ctx.length > 32) {
      const dirty = [];
      const length = $$scope.ctx.length / 32;
      for (let i = 0; i < length; i++) {
        dirty[i] = -1;
      }
      return dirty;
    }
    return -1;
  }
  function exclude_internal_props(props) {
    const result = {};
    for (const k in props)
      if (k[0] !== "$")
        result[k] = props[k];
    return result;
  }
  function compute_rest_props(props, keys) {
    const rest = {};
    keys = new Set(keys);
    for (const k in props)
      if (!keys.has(k) && k[0] !== "$")
        rest[k] = props[k];
    return rest;
  }
  function compute_slots(slots) {
    const result = {};
    for (const key in slots) {
      result[key] = true;
    }
    return result;
  }
  function set_store_value(store, ret, value) {
    store.set(value);
    return ret;
  }
  function action_destroyer(action_result) {
    return action_result && is_function(action_result.destroy) ? action_result.destroy : noop;
  }
  var is_hydrating = false;
  function start_hydrating() {
    is_hydrating = true;
  }
  function end_hydrating() {
    is_hydrating = false;
  }
  function append(target, node) {
    target.appendChild(node);
  }
  function insert(target, node, anchor) {
    target.insertBefore(node, anchor || null);
  }
  function detach(node) {
    node.parentNode.removeChild(node);
  }
  function destroy_each(iterations, detaching) {
    for (let i = 0; i < iterations.length; i += 1) {
      if (iterations[i])
        iterations[i].d(detaching);
    }
  }
  function element(name) {
    return document.createElement(name);
  }
  function svg_element(name) {
    return document.createElementNS("http://www.w3.org/2000/svg", name);
  }
  function text(data) {
    return document.createTextNode(data);
  }
  function space() {
    return text(" ");
  }
  function empty() {
    return text("");
  }
  function listen(node, event, handler, options) {
    node.addEventListener(event, handler, options);
    return () => node.removeEventListener(event, handler, options);
  }
  function prevent_default(fn) {
    return function(event) {
      event.preventDefault();
      return fn.call(this, event);
    };
  }
  function stop_propagation(fn) {
    return function(event) {
      event.stopPropagation();
      return fn.call(this, event);
    };
  }
  function attr(node, attribute, value) {
    if (value == null)
      node.removeAttribute(attribute);
    else if (node.getAttribute(attribute) !== value)
      node.setAttribute(attribute, value);
  }
  function set_attributes(node, attributes) {
    const descriptors = Object.getOwnPropertyDescriptors(node.__proto__);
    for (const key in attributes) {
      if (attributes[key] == null) {
        node.removeAttribute(key);
      } else if (key === "style") {
        node.style.cssText = attributes[key];
      } else if (key === "__value") {
        node.value = node[key] = attributes[key];
      } else if (descriptors[key] && descriptors[key].set) {
        node[key] = attributes[key];
      } else {
        attr(node, key, attributes[key]);
      }
    }
  }
  function children(element2) {
    return Array.from(element2.childNodes);
  }
  function set_data(text2, data) {
    data = "" + data;
    if (text2.wholeText !== data)
      text2.data = data;
  }
  var current_component;
  function set_current_component(component) {
    current_component = component;
  }
  function get_current_component() {
    if (!current_component)
      throw new Error("Function called outside component initialization");
    return current_component;
  }
  function onMount(fn) {
    get_current_component().$$.on_mount.push(fn);
  }
  function onDestroy(fn) {
    get_current_component().$$.on_destroy.push(fn);
  }
  function setContext(key, context) {
    get_current_component().$$.context.set(key, context);
  }
  function getContext(key) {
    return get_current_component().$$.context.get(key);
  }
  function bubble(component, event) {
    const callbacks = component.$$.callbacks[event.type];
    if (callbacks) {
      callbacks.slice().forEach((fn) => fn.call(this, event));
    }
  }
  var dirty_components = [];
  var binding_callbacks = [];
  var render_callbacks = [];
  var flush_callbacks = [];
  var resolved_promise = Promise.resolve();
  var update_scheduled = false;
  function schedule_update() {
    if (!update_scheduled) {
      update_scheduled = true;
      resolved_promise.then(flush);
    }
  }
  function add_render_callback(fn) {
    render_callbacks.push(fn);
  }
  function add_flush_callback(fn) {
    flush_callbacks.push(fn);
  }
  var seen_callbacks = /* @__PURE__ */ new Set();
  var flushidx = 0;
  function flush() {
    const saved_component = current_component;
    do {
      while (flushidx < dirty_components.length) {
        const component = dirty_components[flushidx];
        flushidx++;
        set_current_component(component);
        update(component.$$);
      }
      set_current_component(null);
      dirty_components.length = 0;
      flushidx = 0;
      while (binding_callbacks.length)
        binding_callbacks.pop()();
      for (let i = 0; i < render_callbacks.length; i += 1) {
        const callback = render_callbacks[i];
        if (!seen_callbacks.has(callback)) {
          seen_callbacks.add(callback);
          callback();
        }
      }
      render_callbacks.length = 0;
    } while (dirty_components.length);
    while (flush_callbacks.length) {
      flush_callbacks.pop()();
    }
    update_scheduled = false;
    seen_callbacks.clear();
    set_current_component(saved_component);
  }
  function update($$) {
    if ($$.fragment !== null) {
      $$.update();
      run_all($$.before_update);
      const dirty = $$.dirty;
      $$.dirty = [-1];
      $$.fragment && $$.fragment.p($$.ctx, dirty);
      $$.after_update.forEach(add_render_callback);
    }
  }
  var outroing = /* @__PURE__ */ new Set();
  var outros;
  function group_outros() {
    outros = {
      r: 0,
      c: [],
      p: outros
    };
  }
  function check_outros() {
    if (!outros.r) {
      run_all(outros.c);
    }
    outros = outros.p;
  }
  function transition_in(block, local) {
    if (block && block.i) {
      outroing.delete(block);
      block.i(local);
    }
  }
  function transition_out(block, local, detach2, callback) {
    if (block && block.o) {
      if (outroing.has(block))
        return;
      outroing.add(block);
      outros.c.push(() => {
        outroing.delete(block);
        if (callback) {
          if (detach2)
            block.d(1);
          callback();
        }
      });
      block.o(local);
    }
  }
  var globals = typeof window !== "undefined" ? window : typeof globalThis !== "undefined" ? globalThis : global;
  function get_spread_update(levels, updates) {
    const update2 = {};
    const to_null_out = {};
    const accounted_for = { $$scope: 1 };
    let i = levels.length;
    while (i--) {
      const o = levels[i];
      const n = updates[i];
      if (n) {
        for (const key in o) {
          if (!(key in n))
            to_null_out[key] = 1;
        }
        for (const key in n) {
          if (!accounted_for[key]) {
            update2[key] = n[key];
            accounted_for[key] = 1;
          }
        }
        levels[i] = n;
      } else {
        for (const key in o) {
          accounted_for[key] = 1;
        }
      }
    }
    for (const key in to_null_out) {
      if (!(key in update2))
        update2[key] = void 0;
    }
    return update2;
  }
  function get_spread_object(spread_props) {
    return typeof spread_props === "object" && spread_props !== null ? spread_props : {};
  }
  function bind(component, name, callback) {
    const index = component.$$.props[name];
    if (index !== void 0) {
      component.$$.bound[index] = callback;
      callback(component.$$.ctx[index]);
    }
  }
  function create_component(block) {
    block && block.c();
  }
  function mount_component(component, target, anchor, customElement) {
    const { fragment, on_mount, on_destroy, after_update } = component.$$;
    fragment && fragment.m(target, anchor);
    if (!customElement) {
      add_render_callback(() => {
        const new_on_destroy = on_mount.map(run).filter(is_function);
        if (on_destroy) {
          on_destroy.push(...new_on_destroy);
        } else {
          run_all(new_on_destroy);
        }
        component.$$.on_mount = [];
      });
    }
    after_update.forEach(add_render_callback);
  }
  function destroy_component(component, detaching) {
    const $$ = component.$$;
    if ($$.fragment !== null) {
      run_all($$.on_destroy);
      $$.fragment && $$.fragment.d(detaching);
      $$.on_destroy = $$.fragment = null;
      $$.ctx = [];
    }
  }
  function make_dirty(component, i) {
    if (component.$$.dirty[0] === -1) {
      dirty_components.push(component);
      schedule_update();
      component.$$.dirty.fill(0);
    }
    component.$$.dirty[i / 31 | 0] |= 1 << i % 31;
  }
  function init(component, options, instance13, create_fragment22, not_equal, props, append_styles, dirty = [-1]) {
    const parent_component = current_component;
    set_current_component(component);
    const $$ = component.$$ = {
      fragment: null,
      ctx: null,
      props,
      update: noop,
      not_equal,
      bound: blank_object(),
      on_mount: [],
      on_destroy: [],
      on_disconnect: [],
      before_update: [],
      after_update: [],
      context: new Map(options.context || (parent_component ? parent_component.$$.context : [])),
      callbacks: blank_object(),
      dirty,
      skip_bound: false,
      root: options.target || parent_component.$$.root
    };
    append_styles && append_styles($$.root);
    let ready = false;
    $$.ctx = instance13 ? instance13(component, options.props || {}, (i, ret, ...rest) => {
      const value = rest.length ? rest[0] : ret;
      if ($$.ctx && not_equal($$.ctx[i], $$.ctx[i] = value)) {
        if (!$$.skip_bound && $$.bound[i])
          $$.bound[i](value);
        if (ready)
          make_dirty(component, i);
      }
      return ret;
    }) : [];
    $$.update();
    ready = true;
    run_all($$.before_update);
    $$.fragment = create_fragment22 ? create_fragment22($$.ctx) : false;
    if (options.target) {
      if (options.hydrate) {
        start_hydrating();
        const nodes = children(options.target);
        $$.fragment && $$.fragment.l(nodes);
        nodes.forEach(detach);
      } else {
        $$.fragment && $$.fragment.c();
      }
      if (options.intro)
        transition_in(component.$$.fragment);
      mount_component(component, options.target, options.anchor, options.customElement);
      end_hydrating();
      flush();
    }
    set_current_component(parent_component);
  }
  var SvelteElement;
  if (typeof HTMLElement === "function") {
    SvelteElement = class extends HTMLElement {
      constructor() {
        super();
        this.attachShadow({ mode: "open" });
      }
      connectedCallback() {
        const { on_mount } = this.$$;
        this.$$.on_disconnect = on_mount.map(run).filter(is_function);
        for (const key in this.$$.slotted) {
          this.appendChild(this.$$.slotted[key]);
        }
      }
      attributeChangedCallback(attr2, _oldValue, newValue) {
        this[attr2] = newValue;
      }
      disconnectedCallback() {
        run_all(this.$$.on_disconnect);
      }
      $destroy() {
        destroy_component(this, 1);
        this.$destroy = noop;
      }
      $on(type, callback) {
        const callbacks = this.$$.callbacks[type] || (this.$$.callbacks[type] = []);
        callbacks.push(callback);
        return () => {
          const index = callbacks.indexOf(callback);
          if (index !== -1)
            callbacks.splice(index, 1);
        };
      }
      $set($$props) {
        if (this.$$set && !is_empty($$props)) {
          this.$$.skip_bound = true;
          this.$$set($$props);
          this.$$.skip_bound = false;
        }
      }
    };
  }
  var SvelteComponent = class {
    $destroy() {
      destroy_component(this, 1);
      this.$destroy = noop;
    }
    $on(type, callback) {
      const callbacks = this.$$.callbacks[type] || (this.$$.callbacks[type] = []);
      callbacks.push(callback);
      return () => {
        const index = callbacks.indexOf(callback);
        if (index !== -1)
          callbacks.splice(index, 1);
      };
    }
    $set($$props) {
      if (this.$$set && !is_empty($$props)) {
        this.$$.skip_bound = true;
        this.$$set($$props);
        this.$$.skip_bound = false;
      }
    }
  };

  // node_modules/tslib/modules/index.js
  var import_tslib = __toESM(require_tslib(), 1);
  var {
    __extends,
    __assign,
    __rest,
    __decorate,
    __param,
    __metadata,
    __awaiter,
    __generator,
    __exportStar,
    __createBinding,
    __values,
    __read,
    __spread,
    __spreadArrays,
    __spreadArray,
    __await,
    __asyncGenerator,
    __asyncDelegator,
    __asyncValues,
    __makeTemplateObject,
    __importStar,
    __importDefault,
    __classPrivateFieldGet,
    __classPrivateFieldSet
  } = import_tslib.default;

  // node_modules/@material/base/foundation.js
  var MDCFoundation = function() {
    function MDCFoundation2(adapter) {
      if (adapter === void 0) {
        adapter = {};
      }
      this.adapter = adapter;
    }
    Object.defineProperty(MDCFoundation2, "cssClasses", {
      get: function() {
        return {};
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(MDCFoundation2, "strings", {
      get: function() {
        return {};
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(MDCFoundation2, "numbers", {
      get: function() {
        return {};
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(MDCFoundation2, "defaultAdapter", {
      get: function() {
        return {};
      },
      enumerable: false,
      configurable: true
    });
    MDCFoundation2.prototype.init = function() {
    };
    MDCFoundation2.prototype.destroy = function() {
    };
    return MDCFoundation2;
  }();

  // node_modules/@material/dom/ponyfill.js
  var ponyfill_exports = {};
  __export(ponyfill_exports, {
    closest: () => closest,
    estimateScrollWidth: () => estimateScrollWidth,
    matches: () => matches
  });
  function closest(element2, selector) {
    if (element2.closest) {
      return element2.closest(selector);
    }
    var el = element2;
    while (el) {
      if (matches(el, selector)) {
        return el;
      }
      el = el.parentElement;
    }
    return null;
  }
  function matches(element2, selector) {
    var nativeMatches = element2.matches || element2.webkitMatchesSelector || element2.msMatchesSelector;
    return nativeMatches.call(element2, selector);
  }
  function estimateScrollWidth(element2) {
    var htmlEl = element2;
    if (htmlEl.offsetParent !== null) {
      return htmlEl.scrollWidth;
    }
    var clone = htmlEl.cloneNode(true);
    clone.style.setProperty("position", "absolute");
    clone.style.setProperty("transform", "translate(-9999px, -9999px)");
    document.documentElement.appendChild(clone);
    var scrollWidth = clone.scrollWidth;
    document.documentElement.removeChild(clone);
    return scrollWidth;
  }

  // node_modules/@material/floating-label/constants.js
  var cssClasses = {
    LABEL_FLOAT_ABOVE: "mdc-floating-label--float-above",
    LABEL_REQUIRED: "mdc-floating-label--required",
    LABEL_SHAKE: "mdc-floating-label--shake",
    ROOT: "mdc-floating-label"
  };

  // node_modules/@material/floating-label/foundation.js
  var MDCFloatingLabelFoundation = function(_super) {
    __extends(MDCFloatingLabelFoundation2, _super);
    function MDCFloatingLabelFoundation2(adapter) {
      var _this = _super.call(this, __assign(__assign({}, MDCFloatingLabelFoundation2.defaultAdapter), adapter)) || this;
      _this.shakeAnimationEndHandler = function() {
        _this.handleShakeAnimationEnd();
      };
      return _this;
    }
    Object.defineProperty(MDCFloatingLabelFoundation2, "cssClasses", {
      get: function() {
        return cssClasses;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(MDCFloatingLabelFoundation2, "defaultAdapter", {
      get: function() {
        return {
          addClass: function() {
            return void 0;
          },
          removeClass: function() {
            return void 0;
          },
          getWidth: function() {
            return 0;
          },
          registerInteractionHandler: function() {
            return void 0;
          },
          deregisterInteractionHandler: function() {
            return void 0;
          }
        };
      },
      enumerable: false,
      configurable: true
    });
    MDCFloatingLabelFoundation2.prototype.init = function() {
      this.adapter.registerInteractionHandler("animationend", this.shakeAnimationEndHandler);
    };
    MDCFloatingLabelFoundation2.prototype.destroy = function() {
      this.adapter.deregisterInteractionHandler("animationend", this.shakeAnimationEndHandler);
    };
    MDCFloatingLabelFoundation2.prototype.getWidth = function() {
      return this.adapter.getWidth();
    };
    MDCFloatingLabelFoundation2.prototype.shake = function(shouldShake) {
      var LABEL_SHAKE = MDCFloatingLabelFoundation2.cssClasses.LABEL_SHAKE;
      if (shouldShake) {
        this.adapter.addClass(LABEL_SHAKE);
      } else {
        this.adapter.removeClass(LABEL_SHAKE);
      }
    };
    MDCFloatingLabelFoundation2.prototype.float = function(shouldFloat) {
      var _a2 = MDCFloatingLabelFoundation2.cssClasses, LABEL_FLOAT_ABOVE = _a2.LABEL_FLOAT_ABOVE, LABEL_SHAKE = _a2.LABEL_SHAKE;
      if (shouldFloat) {
        this.adapter.addClass(LABEL_FLOAT_ABOVE);
      } else {
        this.adapter.removeClass(LABEL_FLOAT_ABOVE);
        this.adapter.removeClass(LABEL_SHAKE);
      }
    };
    MDCFloatingLabelFoundation2.prototype.setRequired = function(isRequired) {
      var LABEL_REQUIRED = MDCFloatingLabelFoundation2.cssClasses.LABEL_REQUIRED;
      if (isRequired) {
        this.adapter.addClass(LABEL_REQUIRED);
      } else {
        this.adapter.removeClass(LABEL_REQUIRED);
      }
    };
    MDCFloatingLabelFoundation2.prototype.handleShakeAnimationEnd = function() {
      var LABEL_SHAKE = MDCFloatingLabelFoundation2.cssClasses.LABEL_SHAKE;
      this.adapter.removeClass(LABEL_SHAKE);
    };
    return MDCFloatingLabelFoundation2;
  }(MDCFoundation);

  // node_modules/@material/line-ripple/constants.js
  var cssClasses2 = {
    LINE_RIPPLE_ACTIVE: "mdc-line-ripple--active",
    LINE_RIPPLE_DEACTIVATING: "mdc-line-ripple--deactivating"
  };

  // node_modules/@material/line-ripple/foundation.js
  var MDCLineRippleFoundation = function(_super) {
    __extends(MDCLineRippleFoundation2, _super);
    function MDCLineRippleFoundation2(adapter) {
      var _this = _super.call(this, __assign(__assign({}, MDCLineRippleFoundation2.defaultAdapter), adapter)) || this;
      _this.transitionEndHandler = function(evt) {
        _this.handleTransitionEnd(evt);
      };
      return _this;
    }
    Object.defineProperty(MDCLineRippleFoundation2, "cssClasses", {
      get: function() {
        return cssClasses2;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(MDCLineRippleFoundation2, "defaultAdapter", {
      get: function() {
        return {
          addClass: function() {
            return void 0;
          },
          removeClass: function() {
            return void 0;
          },
          hasClass: function() {
            return false;
          },
          setStyle: function() {
            return void 0;
          },
          registerEventHandler: function() {
            return void 0;
          },
          deregisterEventHandler: function() {
            return void 0;
          }
        };
      },
      enumerable: false,
      configurable: true
    });
    MDCLineRippleFoundation2.prototype.init = function() {
      this.adapter.registerEventHandler("transitionend", this.transitionEndHandler);
    };
    MDCLineRippleFoundation2.prototype.destroy = function() {
      this.adapter.deregisterEventHandler("transitionend", this.transitionEndHandler);
    };
    MDCLineRippleFoundation2.prototype.activate = function() {
      this.adapter.removeClass(cssClasses2.LINE_RIPPLE_DEACTIVATING);
      this.adapter.addClass(cssClasses2.LINE_RIPPLE_ACTIVE);
    };
    MDCLineRippleFoundation2.prototype.setRippleCenter = function(xCoordinate) {
      this.adapter.setStyle("transform-origin", xCoordinate + "px center");
    };
    MDCLineRippleFoundation2.prototype.deactivate = function() {
      this.adapter.addClass(cssClasses2.LINE_RIPPLE_DEACTIVATING);
    };
    MDCLineRippleFoundation2.prototype.handleTransitionEnd = function(evt) {
      var isDeactivating = this.adapter.hasClass(cssClasses2.LINE_RIPPLE_DEACTIVATING);
      if (evt.propertyName === "opacity") {
        if (isDeactivating) {
          this.adapter.removeClass(cssClasses2.LINE_RIPPLE_ACTIVE);
          this.adapter.removeClass(cssClasses2.LINE_RIPPLE_DEACTIVATING);
        }
      }
    };
    return MDCLineRippleFoundation2;
  }(MDCFoundation);

  // node_modules/@material/menu-surface/constants.js
  var cssClasses3 = {
    ANCHOR: "mdc-menu-surface--anchor",
    ANIMATING_CLOSED: "mdc-menu-surface--animating-closed",
    ANIMATING_OPEN: "mdc-menu-surface--animating-open",
    FIXED: "mdc-menu-surface--fixed",
    IS_OPEN_BELOW: "mdc-menu-surface--is-open-below",
    OPEN: "mdc-menu-surface--open",
    ROOT: "mdc-menu-surface"
  };
  var strings = {
    CLOSED_EVENT: "MDCMenuSurface:closed",
    CLOSING_EVENT: "MDCMenuSurface:closing",
    OPENED_EVENT: "MDCMenuSurface:opened",
    FOCUSABLE_ELEMENTS: [
      "button:not(:disabled)",
      '[href]:not([aria-disabled="true"])',
      "input:not(:disabled)",
      "select:not(:disabled)",
      "textarea:not(:disabled)",
      '[tabindex]:not([tabindex="-1"]):not([aria-disabled="true"])'
    ].join(", ")
  };
  var numbers = {
    TRANSITION_OPEN_DURATION: 120,
    TRANSITION_CLOSE_DURATION: 75,
    MARGIN_TO_EDGE: 32,
    ANCHOR_TO_MENU_SURFACE_WIDTH_RATIO: 0.67,
    TOUCH_EVENT_WAIT_MS: 30
  };
  var CornerBit;
  (function(CornerBit2) {
    CornerBit2[CornerBit2["BOTTOM"] = 1] = "BOTTOM";
    CornerBit2[CornerBit2["CENTER"] = 2] = "CENTER";
    CornerBit2[CornerBit2["RIGHT"] = 4] = "RIGHT";
    CornerBit2[CornerBit2["FLIP_RTL"] = 8] = "FLIP_RTL";
  })(CornerBit || (CornerBit = {}));
  var Corner;
  (function(Corner2) {
    Corner2[Corner2["TOP_LEFT"] = 0] = "TOP_LEFT";
    Corner2[Corner2["TOP_RIGHT"] = 4] = "TOP_RIGHT";
    Corner2[Corner2["BOTTOM_LEFT"] = 1] = "BOTTOM_LEFT";
    Corner2[Corner2["BOTTOM_RIGHT"] = 5] = "BOTTOM_RIGHT";
    Corner2[Corner2["TOP_START"] = 8] = "TOP_START";
    Corner2[Corner2["TOP_END"] = 12] = "TOP_END";
    Corner2[Corner2["BOTTOM_START"] = 9] = "BOTTOM_START";
    Corner2[Corner2["BOTTOM_END"] = 13] = "BOTTOM_END";
  })(Corner || (Corner = {}));

  // node_modules/@material/list/constants.js
  var _a;
  var _b;
  var cssClasses4 = {
    LIST_ITEM_ACTIVATED_CLASS: "mdc-list-item--activated",
    LIST_ITEM_CLASS: "mdc-list-item",
    LIST_ITEM_DISABLED_CLASS: "mdc-list-item--disabled",
    LIST_ITEM_SELECTED_CLASS: "mdc-list-item--selected",
    LIST_ITEM_TEXT_CLASS: "mdc-list-item__text",
    LIST_ITEM_PRIMARY_TEXT_CLASS: "mdc-list-item__primary-text",
    ROOT: "mdc-list"
  };
  var evolutionClassNameMap = (_a = {}, _a["" + cssClasses4.LIST_ITEM_ACTIVATED_CLASS] = "mdc-list-item--activated", _a["" + cssClasses4.LIST_ITEM_CLASS] = "mdc-list-item", _a["" + cssClasses4.LIST_ITEM_DISABLED_CLASS] = "mdc-list-item--disabled", _a["" + cssClasses4.LIST_ITEM_SELECTED_CLASS] = "mdc-list-item--selected", _a["" + cssClasses4.LIST_ITEM_PRIMARY_TEXT_CLASS] = "mdc-list-item__primary-text", _a["" + cssClasses4.ROOT] = "mdc-list", _a);
  var deprecatedClassNameMap = (_b = {}, _b["" + cssClasses4.LIST_ITEM_ACTIVATED_CLASS] = "mdc-deprecated-list-item--activated", _b["" + cssClasses4.LIST_ITEM_CLASS] = "mdc-deprecated-list-item", _b["" + cssClasses4.LIST_ITEM_DISABLED_CLASS] = "mdc-deprecated-list-item--disabled", _b["" + cssClasses4.LIST_ITEM_SELECTED_CLASS] = "mdc-deprecated-list-item--selected", _b["" + cssClasses4.LIST_ITEM_TEXT_CLASS] = "mdc-deprecated-list-item__text", _b["" + cssClasses4.LIST_ITEM_PRIMARY_TEXT_CLASS] = "mdc-deprecated-list-item__primary-text", _b["" + cssClasses4.ROOT] = "mdc-deprecated-list", _b);
  var strings2 = {
    ACTION_EVENT: "MDCList:action",
    ARIA_CHECKED: "aria-checked",
    ARIA_CHECKED_CHECKBOX_SELECTOR: '[role="checkbox"][aria-checked="true"]',
    ARIA_CHECKED_RADIO_SELECTOR: '[role="radio"][aria-checked="true"]',
    ARIA_CURRENT: "aria-current",
    ARIA_DISABLED: "aria-disabled",
    ARIA_ORIENTATION: "aria-orientation",
    ARIA_ORIENTATION_HORIZONTAL: "horizontal",
    ARIA_ROLE_CHECKBOX_SELECTOR: '[role="checkbox"]',
    ARIA_SELECTED: "aria-selected",
    ARIA_INTERACTIVE_ROLES_SELECTOR: '[role="listbox"], [role="menu"]',
    ARIA_MULTI_SELECTABLE_SELECTOR: '[aria-multiselectable="true"]',
    CHECKBOX_RADIO_SELECTOR: 'input[type="checkbox"], input[type="radio"]',
    CHECKBOX_SELECTOR: 'input[type="checkbox"]',
    CHILD_ELEMENTS_TO_TOGGLE_TABINDEX: "\n    ." + cssClasses4.LIST_ITEM_CLASS + " button:not(:disabled),\n    ." + cssClasses4.LIST_ITEM_CLASS + " a,\n    ." + deprecatedClassNameMap[cssClasses4.LIST_ITEM_CLASS] + " button:not(:disabled),\n    ." + deprecatedClassNameMap[cssClasses4.LIST_ITEM_CLASS] + " a\n  ",
    DEPRECATED_SELECTOR: ".mdc-deprecated-list",
    FOCUSABLE_CHILD_ELEMENTS: "\n    ." + cssClasses4.LIST_ITEM_CLASS + " button:not(:disabled),\n    ." + cssClasses4.LIST_ITEM_CLASS + " a,\n    ." + cssClasses4.LIST_ITEM_CLASS + ' input[type="radio"]:not(:disabled),\n    .' + cssClasses4.LIST_ITEM_CLASS + ' input[type="checkbox"]:not(:disabled),\n    .' + deprecatedClassNameMap[cssClasses4.LIST_ITEM_CLASS] + " button:not(:disabled),\n    ." + deprecatedClassNameMap[cssClasses4.LIST_ITEM_CLASS] + " a,\n    ." + deprecatedClassNameMap[cssClasses4.LIST_ITEM_CLASS] + ' input[type="radio"]:not(:disabled),\n    .' + deprecatedClassNameMap[cssClasses4.LIST_ITEM_CLASS] + ' input[type="checkbox"]:not(:disabled)\n  ',
    RADIO_SELECTOR: 'input[type="radio"]',
    SELECTED_ITEM_SELECTOR: '[aria-selected="true"], [aria-current="true"]'
  };
  var numbers2 = {
    UNSET_INDEX: -1,
    TYPEAHEAD_BUFFER_CLEAR_TIMEOUT_MS: 300
  };

  // node_modules/@material/dom/keyboard.js
  var KEY = {
    UNKNOWN: "Unknown",
    BACKSPACE: "Backspace",
    ENTER: "Enter",
    SPACEBAR: "Spacebar",
    PAGE_UP: "PageUp",
    PAGE_DOWN: "PageDown",
    END: "End",
    HOME: "Home",
    ARROW_LEFT: "ArrowLeft",
    ARROW_UP: "ArrowUp",
    ARROW_RIGHT: "ArrowRight",
    ARROW_DOWN: "ArrowDown",
    DELETE: "Delete",
    ESCAPE: "Escape",
    TAB: "Tab"
  };
  var normalizedKeys = /* @__PURE__ */ new Set();
  normalizedKeys.add(KEY.BACKSPACE);
  normalizedKeys.add(KEY.ENTER);
  normalizedKeys.add(KEY.SPACEBAR);
  normalizedKeys.add(KEY.PAGE_UP);
  normalizedKeys.add(KEY.PAGE_DOWN);
  normalizedKeys.add(KEY.END);
  normalizedKeys.add(KEY.HOME);
  normalizedKeys.add(KEY.ARROW_LEFT);
  normalizedKeys.add(KEY.ARROW_UP);
  normalizedKeys.add(KEY.ARROW_RIGHT);
  normalizedKeys.add(KEY.ARROW_DOWN);
  normalizedKeys.add(KEY.DELETE);
  normalizedKeys.add(KEY.ESCAPE);
  normalizedKeys.add(KEY.TAB);
  var KEY_CODE = {
    BACKSPACE: 8,
    ENTER: 13,
    SPACEBAR: 32,
    PAGE_UP: 33,
    PAGE_DOWN: 34,
    END: 35,
    HOME: 36,
    ARROW_LEFT: 37,
    ARROW_UP: 38,
    ARROW_RIGHT: 39,
    ARROW_DOWN: 40,
    DELETE: 46,
    ESCAPE: 27,
    TAB: 9
  };
  var mappedKeyCodes = /* @__PURE__ */ new Map();
  mappedKeyCodes.set(KEY_CODE.BACKSPACE, KEY.BACKSPACE);
  mappedKeyCodes.set(KEY_CODE.ENTER, KEY.ENTER);
  mappedKeyCodes.set(KEY_CODE.SPACEBAR, KEY.SPACEBAR);
  mappedKeyCodes.set(KEY_CODE.PAGE_UP, KEY.PAGE_UP);
  mappedKeyCodes.set(KEY_CODE.PAGE_DOWN, KEY.PAGE_DOWN);
  mappedKeyCodes.set(KEY_CODE.END, KEY.END);
  mappedKeyCodes.set(KEY_CODE.HOME, KEY.HOME);
  mappedKeyCodes.set(KEY_CODE.ARROW_LEFT, KEY.ARROW_LEFT);
  mappedKeyCodes.set(KEY_CODE.ARROW_UP, KEY.ARROW_UP);
  mappedKeyCodes.set(KEY_CODE.ARROW_RIGHT, KEY.ARROW_RIGHT);
  mappedKeyCodes.set(KEY_CODE.ARROW_DOWN, KEY.ARROW_DOWN);
  mappedKeyCodes.set(KEY_CODE.DELETE, KEY.DELETE);
  mappedKeyCodes.set(KEY_CODE.ESCAPE, KEY.ESCAPE);
  mappedKeyCodes.set(KEY_CODE.TAB, KEY.TAB);
  var navigationKeys = /* @__PURE__ */ new Set();
  navigationKeys.add(KEY.PAGE_UP);
  navigationKeys.add(KEY.PAGE_DOWN);
  navigationKeys.add(KEY.END);
  navigationKeys.add(KEY.HOME);
  navigationKeys.add(KEY.ARROW_LEFT);
  navigationKeys.add(KEY.ARROW_UP);
  navigationKeys.add(KEY.ARROW_RIGHT);
  navigationKeys.add(KEY.ARROW_DOWN);
  function normalizeKey(evt) {
    var key = evt.key;
    if (normalizedKeys.has(key)) {
      return key;
    }
    var mappedKey = mappedKeyCodes.get(evt.keyCode);
    if (mappedKey) {
      return mappedKey;
    }
    return KEY.UNKNOWN;
  }

  // node_modules/@material/list/events.js
  var ELEMENTS_KEY_ALLOWED_IN = ["input", "button", "textarea", "select"];
  var preventDefaultEvent = function(evt) {
    var target = evt.target;
    if (!target) {
      return;
    }
    var tagName = ("" + target.tagName).toLowerCase();
    if (ELEMENTS_KEY_ALLOWED_IN.indexOf(tagName) === -1) {
      evt.preventDefault();
    }
  };

  // node_modules/@material/list/typeahead.js
  function initState() {
    var state = {
      bufferClearTimeout: 0,
      currentFirstChar: "",
      sortedIndexCursor: 0,
      typeaheadBuffer: ""
    };
    return state;
  }
  function initSortedIndex(listItemCount, getPrimaryTextByItemIndex) {
    var sortedIndexByFirstChar = /* @__PURE__ */ new Map();
    for (var i = 0; i < listItemCount; i++) {
      var primaryText = getPrimaryTextByItemIndex(i).trim();
      if (!primaryText) {
        continue;
      }
      var firstChar = primaryText[0].toLowerCase();
      if (!sortedIndexByFirstChar.has(firstChar)) {
        sortedIndexByFirstChar.set(firstChar, []);
      }
      sortedIndexByFirstChar.get(firstChar).push({ text: primaryText.toLowerCase(), index: i });
    }
    sortedIndexByFirstChar.forEach(function(values) {
      values.sort(function(first, second) {
        return first.index - second.index;
      });
    });
    return sortedIndexByFirstChar;
  }
  function matchItem(opts, state) {
    var nextChar = opts.nextChar, focusItemAtIndex = opts.focusItemAtIndex, sortedIndexByFirstChar = opts.sortedIndexByFirstChar, focusedItemIndex = opts.focusedItemIndex, skipFocus = opts.skipFocus, isItemAtIndexDisabled = opts.isItemAtIndexDisabled;
    clearTimeout(state.bufferClearTimeout);
    state.bufferClearTimeout = setTimeout(function() {
      clearBuffer(state);
    }, numbers2.TYPEAHEAD_BUFFER_CLEAR_TIMEOUT_MS);
    state.typeaheadBuffer = state.typeaheadBuffer + nextChar;
    var index;
    if (state.typeaheadBuffer.length === 1) {
      index = matchFirstChar(sortedIndexByFirstChar, focusedItemIndex, isItemAtIndexDisabled, state);
    } else {
      index = matchAllChars(sortedIndexByFirstChar, isItemAtIndexDisabled, state);
    }
    if (index !== -1 && !skipFocus) {
      focusItemAtIndex(index);
    }
    return index;
  }
  function matchFirstChar(sortedIndexByFirstChar, focusedItemIndex, isItemAtIndexDisabled, state) {
    var firstChar = state.typeaheadBuffer[0];
    var itemsMatchingFirstChar = sortedIndexByFirstChar.get(firstChar);
    if (!itemsMatchingFirstChar) {
      return -1;
    }
    if (firstChar === state.currentFirstChar && itemsMatchingFirstChar[state.sortedIndexCursor].index === focusedItemIndex) {
      state.sortedIndexCursor = (state.sortedIndexCursor + 1) % itemsMatchingFirstChar.length;
      var newIndex = itemsMatchingFirstChar[state.sortedIndexCursor].index;
      if (!isItemAtIndexDisabled(newIndex)) {
        return newIndex;
      }
    }
    state.currentFirstChar = firstChar;
    var newCursorPosition = -1;
    var cursorPosition;
    for (cursorPosition = 0; cursorPosition < itemsMatchingFirstChar.length; cursorPosition++) {
      if (!isItemAtIndexDisabled(itemsMatchingFirstChar[cursorPosition].index)) {
        newCursorPosition = cursorPosition;
        break;
      }
    }
    for (; cursorPosition < itemsMatchingFirstChar.length; cursorPosition++) {
      if (itemsMatchingFirstChar[cursorPosition].index > focusedItemIndex && !isItemAtIndexDisabled(itemsMatchingFirstChar[cursorPosition].index)) {
        newCursorPosition = cursorPosition;
        break;
      }
    }
    if (newCursorPosition !== -1) {
      state.sortedIndexCursor = newCursorPosition;
      return itemsMatchingFirstChar[state.sortedIndexCursor].index;
    }
    return -1;
  }
  function matchAllChars(sortedIndexByFirstChar, isItemAtIndexDisabled, state) {
    var firstChar = state.typeaheadBuffer[0];
    var itemsMatchingFirstChar = sortedIndexByFirstChar.get(firstChar);
    if (!itemsMatchingFirstChar) {
      return -1;
    }
    var startingItem = itemsMatchingFirstChar[state.sortedIndexCursor];
    if (startingItem.text.lastIndexOf(state.typeaheadBuffer, 0) === 0 && !isItemAtIndexDisabled(startingItem.index)) {
      return startingItem.index;
    }
    var cursorPosition = (state.sortedIndexCursor + 1) % itemsMatchingFirstChar.length;
    var nextCursorPosition = -1;
    while (cursorPosition !== state.sortedIndexCursor) {
      var currentItem = itemsMatchingFirstChar[cursorPosition];
      var matches3 = currentItem.text.lastIndexOf(state.typeaheadBuffer, 0) === 0;
      var isEnabled = !isItemAtIndexDisabled(currentItem.index);
      if (matches3 && isEnabled) {
        nextCursorPosition = cursorPosition;
        break;
      }
      cursorPosition = (cursorPosition + 1) % itemsMatchingFirstChar.length;
    }
    if (nextCursorPosition !== -1) {
      state.sortedIndexCursor = nextCursorPosition;
      return itemsMatchingFirstChar[state.sortedIndexCursor].index;
    }
    return -1;
  }
  function isTypingInProgress(state) {
    return state.typeaheadBuffer.length > 0;
  }
  function clearBuffer(state) {
    state.typeaheadBuffer = "";
  }
  function handleKeydown(opts, state) {
    var event = opts.event, isTargetListItem = opts.isTargetListItem, focusedItemIndex = opts.focusedItemIndex, focusItemAtIndex = opts.focusItemAtIndex, sortedIndexByFirstChar = opts.sortedIndexByFirstChar, isItemAtIndexDisabled = opts.isItemAtIndexDisabled;
    var isArrowLeft = normalizeKey(event) === "ArrowLeft";
    var isArrowUp = normalizeKey(event) === "ArrowUp";
    var isArrowRight = normalizeKey(event) === "ArrowRight";
    var isArrowDown = normalizeKey(event) === "ArrowDown";
    var isHome = normalizeKey(event) === "Home";
    var isEnd = normalizeKey(event) === "End";
    var isEnter = normalizeKey(event) === "Enter";
    var isSpace = normalizeKey(event) === "Spacebar";
    if (event.ctrlKey || event.metaKey || isArrowLeft || isArrowUp || isArrowRight || isArrowDown || isHome || isEnd || isEnter) {
      return -1;
    }
    var isCharacterKey = !isSpace && event.key.length === 1;
    if (isCharacterKey) {
      preventDefaultEvent(event);
      var matchItemOpts = {
        focusItemAtIndex,
        focusedItemIndex,
        nextChar: event.key.toLowerCase(),
        sortedIndexByFirstChar,
        skipFocus: false,
        isItemAtIndexDisabled
      };
      return matchItem(matchItemOpts, state);
    }
    if (!isSpace) {
      return -1;
    }
    if (isTargetListItem) {
      preventDefaultEvent(event);
    }
    var typeaheadOnListItem = isTargetListItem && isTypingInProgress(state);
    if (typeaheadOnListItem) {
      var matchItemOpts = {
        focusItemAtIndex,
        focusedItemIndex,
        nextChar: " ",
        sortedIndexByFirstChar,
        skipFocus: false,
        isItemAtIndexDisabled
      };
      return matchItem(matchItemOpts, state);
    }
    return -1;
  }

  // node_modules/@material/list/foundation.js
  function isNumberArray(selectedIndex) {
    return selectedIndex instanceof Array;
  }
  var MDCListFoundation = function(_super) {
    __extends(MDCListFoundation2, _super);
    function MDCListFoundation2(adapter) {
      var _this = _super.call(this, __assign(__assign({}, MDCListFoundation2.defaultAdapter), adapter)) || this;
      _this.wrapFocus = false;
      _this.isVertical = true;
      _this.isSingleSelectionList = false;
      _this.selectedIndex = numbers2.UNSET_INDEX;
      _this.focusedItemIndex = numbers2.UNSET_INDEX;
      _this.useActivatedClass = false;
      _this.useSelectedAttr = false;
      _this.ariaCurrentAttrValue = null;
      _this.isCheckboxList = false;
      _this.isRadioList = false;
      _this.hasTypeahead = false;
      _this.typeaheadState = initState();
      _this.sortedIndexByFirstChar = /* @__PURE__ */ new Map();
      return _this;
    }
    Object.defineProperty(MDCListFoundation2, "strings", {
      get: function() {
        return strings2;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(MDCListFoundation2, "cssClasses", {
      get: function() {
        return cssClasses4;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(MDCListFoundation2, "numbers", {
      get: function() {
        return numbers2;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(MDCListFoundation2, "defaultAdapter", {
      get: function() {
        return {
          addClassForElementIndex: function() {
            return void 0;
          },
          focusItemAtIndex: function() {
            return void 0;
          },
          getAttributeForElementIndex: function() {
            return null;
          },
          getFocusedElementIndex: function() {
            return 0;
          },
          getListItemCount: function() {
            return 0;
          },
          hasCheckboxAtIndex: function() {
            return false;
          },
          hasRadioAtIndex: function() {
            return false;
          },
          isCheckboxCheckedAtIndex: function() {
            return false;
          },
          isFocusInsideList: function() {
            return false;
          },
          isRootFocused: function() {
            return false;
          },
          listItemAtIndexHasClass: function() {
            return false;
          },
          notifyAction: function() {
            return void 0;
          },
          removeClassForElementIndex: function() {
            return void 0;
          },
          setAttributeForElementIndex: function() {
            return void 0;
          },
          setCheckedCheckboxOrRadioAtIndex: function() {
            return void 0;
          },
          setTabIndexForListItemChildren: function() {
            return void 0;
          },
          getPrimaryTextAtIndex: function() {
            return "";
          }
        };
      },
      enumerable: false,
      configurable: true
    });
    MDCListFoundation2.prototype.layout = function() {
      if (this.adapter.getListItemCount() === 0) {
        return;
      }
      if (this.adapter.hasCheckboxAtIndex(0)) {
        this.isCheckboxList = true;
      } else if (this.adapter.hasRadioAtIndex(0)) {
        this.isRadioList = true;
      } else {
        this.maybeInitializeSingleSelection();
      }
      if (this.hasTypeahead) {
        this.sortedIndexByFirstChar = this.typeaheadInitSortedIndex();
      }
    };
    MDCListFoundation2.prototype.getFocusedItemIndex = function() {
      return this.focusedItemIndex;
    };
    MDCListFoundation2.prototype.setWrapFocus = function(value) {
      this.wrapFocus = value;
    };
    MDCListFoundation2.prototype.setVerticalOrientation = function(value) {
      this.isVertical = value;
    };
    MDCListFoundation2.prototype.setSingleSelection = function(value) {
      this.isSingleSelectionList = value;
      if (value) {
        this.maybeInitializeSingleSelection();
        this.selectedIndex = this.getSelectedIndexFromDOM();
      }
    };
    MDCListFoundation2.prototype.maybeInitializeSingleSelection = function() {
      var selectedItemIndex = this.getSelectedIndexFromDOM();
      if (selectedItemIndex === numbers2.UNSET_INDEX)
        return;
      var hasActivatedClass = this.adapter.listItemAtIndexHasClass(selectedItemIndex, cssClasses4.LIST_ITEM_ACTIVATED_CLASS);
      if (hasActivatedClass) {
        this.setUseActivatedClass(true);
      }
      this.isSingleSelectionList = true;
      this.selectedIndex = selectedItemIndex;
    };
    MDCListFoundation2.prototype.getSelectedIndexFromDOM = function() {
      var selectedIndex = numbers2.UNSET_INDEX;
      var listItemsCount = this.adapter.getListItemCount();
      for (var i = 0; i < listItemsCount; i++) {
        var hasSelectedClass = this.adapter.listItemAtIndexHasClass(i, cssClasses4.LIST_ITEM_SELECTED_CLASS);
        var hasActivatedClass = this.adapter.listItemAtIndexHasClass(i, cssClasses4.LIST_ITEM_ACTIVATED_CLASS);
        if (!(hasSelectedClass || hasActivatedClass)) {
          continue;
        }
        selectedIndex = i;
        break;
      }
      return selectedIndex;
    };
    MDCListFoundation2.prototype.setHasTypeahead = function(hasTypeahead) {
      this.hasTypeahead = hasTypeahead;
      if (hasTypeahead) {
        this.sortedIndexByFirstChar = this.typeaheadInitSortedIndex();
      }
    };
    MDCListFoundation2.prototype.isTypeaheadInProgress = function() {
      return this.hasTypeahead && isTypingInProgress(this.typeaheadState);
    };
    MDCListFoundation2.prototype.setUseActivatedClass = function(useActivated) {
      this.useActivatedClass = useActivated;
    };
    MDCListFoundation2.prototype.setUseSelectedAttribute = function(useSelected) {
      this.useSelectedAttr = useSelected;
    };
    MDCListFoundation2.prototype.getSelectedIndex = function() {
      return this.selectedIndex;
    };
    MDCListFoundation2.prototype.setSelectedIndex = function(index, _a2) {
      var _b2 = _a2 === void 0 ? {} : _a2, forceUpdate = _b2.forceUpdate;
      if (!this.isIndexValid(index)) {
        return;
      }
      if (this.isCheckboxList) {
        this.setCheckboxAtIndex(index);
      } else if (this.isRadioList) {
        this.setRadioAtIndex(index);
      } else {
        this.setSingleSelectionAtIndex(index, { forceUpdate });
      }
    };
    MDCListFoundation2.prototype.handleFocusIn = function(listItemIndex) {
      if (listItemIndex >= 0) {
        this.focusedItemIndex = listItemIndex;
        this.adapter.setAttributeForElementIndex(listItemIndex, "tabindex", "0");
        this.adapter.setTabIndexForListItemChildren(listItemIndex, "0");
      }
    };
    MDCListFoundation2.prototype.handleFocusOut = function(listItemIndex) {
      var _this = this;
      if (listItemIndex >= 0) {
        this.adapter.setAttributeForElementIndex(listItemIndex, "tabindex", "-1");
        this.adapter.setTabIndexForListItemChildren(listItemIndex, "-1");
      }
      setTimeout(function() {
        if (!_this.adapter.isFocusInsideList()) {
          _this.setTabindexToFirstSelectedOrFocusedItem();
        }
      }, 0);
    };
    MDCListFoundation2.prototype.handleKeydown = function(event, isRootListItem, listItemIndex) {
      var _this = this;
      var isArrowLeft = normalizeKey(event) === "ArrowLeft";
      var isArrowUp = normalizeKey(event) === "ArrowUp";
      var isArrowRight = normalizeKey(event) === "ArrowRight";
      var isArrowDown = normalizeKey(event) === "ArrowDown";
      var isHome = normalizeKey(event) === "Home";
      var isEnd = normalizeKey(event) === "End";
      var isEnter = normalizeKey(event) === "Enter";
      var isSpace = normalizeKey(event) === "Spacebar";
      var isLetterA = event.key === "A" || event.key === "a";
      if (this.adapter.isRootFocused()) {
        if (isArrowUp || isEnd) {
          event.preventDefault();
          this.focusLastElement();
        } else if (isArrowDown || isHome) {
          event.preventDefault();
          this.focusFirstElement();
        }
        if (this.hasTypeahead) {
          var handleKeydownOpts = {
            event,
            focusItemAtIndex: function(index) {
              _this.focusItemAtIndex(index);
            },
            focusedItemIndex: -1,
            isTargetListItem: isRootListItem,
            sortedIndexByFirstChar: this.sortedIndexByFirstChar,
            isItemAtIndexDisabled: function(index) {
              return _this.adapter.listItemAtIndexHasClass(index, cssClasses4.LIST_ITEM_DISABLED_CLASS);
            }
          };
          handleKeydown(handleKeydownOpts, this.typeaheadState);
        }
        return;
      }
      var currentIndex = this.adapter.getFocusedElementIndex();
      if (currentIndex === -1) {
        currentIndex = listItemIndex;
        if (currentIndex < 0) {
          return;
        }
      }
      if (this.isVertical && isArrowDown || !this.isVertical && isArrowRight) {
        preventDefaultEvent(event);
        this.focusNextElement(currentIndex);
      } else if (this.isVertical && isArrowUp || !this.isVertical && isArrowLeft) {
        preventDefaultEvent(event);
        this.focusPrevElement(currentIndex);
      } else if (isHome) {
        preventDefaultEvent(event);
        this.focusFirstElement();
      } else if (isEnd) {
        preventDefaultEvent(event);
        this.focusLastElement();
      } else if (isLetterA && event.ctrlKey && this.isCheckboxList) {
        event.preventDefault();
        this.toggleAll(this.selectedIndex === numbers2.UNSET_INDEX ? [] : this.selectedIndex);
      } else if (isEnter || isSpace) {
        if (isRootListItem) {
          var target = event.target;
          if (target && target.tagName === "A" && isEnter) {
            return;
          }
          preventDefaultEvent(event);
          if (this.adapter.listItemAtIndexHasClass(currentIndex, cssClasses4.LIST_ITEM_DISABLED_CLASS)) {
            return;
          }
          if (!this.isTypeaheadInProgress()) {
            if (this.isSelectableList()) {
              this.setSelectedIndexOnAction(currentIndex);
            }
            this.adapter.notifyAction(currentIndex);
          }
        }
      }
      if (this.hasTypeahead) {
        var handleKeydownOpts = {
          event,
          focusItemAtIndex: function(index) {
            _this.focusItemAtIndex(index);
          },
          focusedItemIndex: this.focusedItemIndex,
          isTargetListItem: isRootListItem,
          sortedIndexByFirstChar: this.sortedIndexByFirstChar,
          isItemAtIndexDisabled: function(index) {
            return _this.adapter.listItemAtIndexHasClass(index, cssClasses4.LIST_ITEM_DISABLED_CLASS);
          }
        };
        handleKeydown(handleKeydownOpts, this.typeaheadState);
      }
    };
    MDCListFoundation2.prototype.handleClick = function(index, toggleCheckbox) {
      if (index === numbers2.UNSET_INDEX) {
        return;
      }
      if (this.adapter.listItemAtIndexHasClass(index, cssClasses4.LIST_ITEM_DISABLED_CLASS)) {
        return;
      }
      if (this.isSelectableList()) {
        this.setSelectedIndexOnAction(index, toggleCheckbox);
      }
      this.adapter.notifyAction(index);
    };
    MDCListFoundation2.prototype.focusNextElement = function(index) {
      var count = this.adapter.getListItemCount();
      var nextIndex = index + 1;
      if (nextIndex >= count) {
        if (this.wrapFocus) {
          nextIndex = 0;
        } else {
          return index;
        }
      }
      this.focusItemAtIndex(nextIndex);
      return nextIndex;
    };
    MDCListFoundation2.prototype.focusPrevElement = function(index) {
      var prevIndex = index - 1;
      if (prevIndex < 0) {
        if (this.wrapFocus) {
          prevIndex = this.adapter.getListItemCount() - 1;
        } else {
          return index;
        }
      }
      this.focusItemAtIndex(prevIndex);
      return prevIndex;
    };
    MDCListFoundation2.prototype.focusFirstElement = function() {
      this.focusItemAtIndex(0);
      return 0;
    };
    MDCListFoundation2.prototype.focusLastElement = function() {
      var lastIndex = this.adapter.getListItemCount() - 1;
      this.focusItemAtIndex(lastIndex);
      return lastIndex;
    };
    MDCListFoundation2.prototype.focusInitialElement = function() {
      var initialIndex = this.getFirstSelectedOrFocusedItemIndex();
      this.focusItemAtIndex(initialIndex);
      return initialIndex;
    };
    MDCListFoundation2.prototype.setEnabled = function(itemIndex, isEnabled) {
      if (!this.isIndexValid(itemIndex)) {
        return;
      }
      if (isEnabled) {
        this.adapter.removeClassForElementIndex(itemIndex, cssClasses4.LIST_ITEM_DISABLED_CLASS);
        this.adapter.setAttributeForElementIndex(itemIndex, strings2.ARIA_DISABLED, "false");
      } else {
        this.adapter.addClassForElementIndex(itemIndex, cssClasses4.LIST_ITEM_DISABLED_CLASS);
        this.adapter.setAttributeForElementIndex(itemIndex, strings2.ARIA_DISABLED, "true");
      }
    };
    MDCListFoundation2.prototype.setSingleSelectionAtIndex = function(index, _a2) {
      var _b2 = _a2 === void 0 ? {} : _a2, forceUpdate = _b2.forceUpdate;
      if (this.selectedIndex === index && !forceUpdate) {
        return;
      }
      var selectedClassName = cssClasses4.LIST_ITEM_SELECTED_CLASS;
      if (this.useActivatedClass) {
        selectedClassName = cssClasses4.LIST_ITEM_ACTIVATED_CLASS;
      }
      if (this.selectedIndex !== numbers2.UNSET_INDEX) {
        this.adapter.removeClassForElementIndex(this.selectedIndex, selectedClassName);
      }
      this.setAriaForSingleSelectionAtIndex(index);
      this.setTabindexAtIndex(index);
      if (index !== numbers2.UNSET_INDEX) {
        this.adapter.addClassForElementIndex(index, selectedClassName);
      }
      this.selectedIndex = index;
    };
    MDCListFoundation2.prototype.setAriaForSingleSelectionAtIndex = function(index) {
      if (this.selectedIndex === numbers2.UNSET_INDEX) {
        this.ariaCurrentAttrValue = this.adapter.getAttributeForElementIndex(index, strings2.ARIA_CURRENT);
      }
      var isAriaCurrent = this.ariaCurrentAttrValue !== null;
      var ariaAttribute = isAriaCurrent ? strings2.ARIA_CURRENT : strings2.ARIA_SELECTED;
      if (this.selectedIndex !== numbers2.UNSET_INDEX) {
        this.adapter.setAttributeForElementIndex(this.selectedIndex, ariaAttribute, "false");
      }
      if (index !== numbers2.UNSET_INDEX) {
        var ariaAttributeValue = isAriaCurrent ? this.ariaCurrentAttrValue : "true";
        this.adapter.setAttributeForElementIndex(index, ariaAttribute, ariaAttributeValue);
      }
    };
    MDCListFoundation2.prototype.getSelectionAttribute = function() {
      return this.useSelectedAttr ? strings2.ARIA_SELECTED : strings2.ARIA_CHECKED;
    };
    MDCListFoundation2.prototype.setRadioAtIndex = function(index) {
      var selectionAttribute = this.getSelectionAttribute();
      this.adapter.setCheckedCheckboxOrRadioAtIndex(index, true);
      if (this.selectedIndex !== numbers2.UNSET_INDEX) {
        this.adapter.setAttributeForElementIndex(this.selectedIndex, selectionAttribute, "false");
      }
      this.adapter.setAttributeForElementIndex(index, selectionAttribute, "true");
      this.selectedIndex = index;
    };
    MDCListFoundation2.prototype.setCheckboxAtIndex = function(index) {
      var selectionAttribute = this.getSelectionAttribute();
      for (var i = 0; i < this.adapter.getListItemCount(); i++) {
        var isChecked = false;
        if (index.indexOf(i) >= 0) {
          isChecked = true;
        }
        this.adapter.setCheckedCheckboxOrRadioAtIndex(i, isChecked);
        this.adapter.setAttributeForElementIndex(i, selectionAttribute, isChecked ? "true" : "false");
      }
      this.selectedIndex = index;
    };
    MDCListFoundation2.prototype.setTabindexAtIndex = function(index) {
      if (this.focusedItemIndex === numbers2.UNSET_INDEX && index !== 0) {
        this.adapter.setAttributeForElementIndex(0, "tabindex", "-1");
      } else if (this.focusedItemIndex >= 0 && this.focusedItemIndex !== index) {
        this.adapter.setAttributeForElementIndex(this.focusedItemIndex, "tabindex", "-1");
      }
      if (!(this.selectedIndex instanceof Array) && this.selectedIndex !== index) {
        this.adapter.setAttributeForElementIndex(this.selectedIndex, "tabindex", "-1");
      }
      if (index !== numbers2.UNSET_INDEX) {
        this.adapter.setAttributeForElementIndex(index, "tabindex", "0");
      }
    };
    MDCListFoundation2.prototype.isSelectableList = function() {
      return this.isSingleSelectionList || this.isCheckboxList || this.isRadioList;
    };
    MDCListFoundation2.prototype.setTabindexToFirstSelectedOrFocusedItem = function() {
      var targetIndex = this.getFirstSelectedOrFocusedItemIndex();
      this.setTabindexAtIndex(targetIndex);
    };
    MDCListFoundation2.prototype.getFirstSelectedOrFocusedItemIndex = function() {
      if (!this.isSelectableList()) {
        return Math.max(this.focusedItemIndex, 0);
      }
      if (typeof this.selectedIndex === "number" && this.selectedIndex !== numbers2.UNSET_INDEX) {
        return this.selectedIndex;
      }
      if (isNumberArray(this.selectedIndex) && this.selectedIndex.length > 0) {
        return this.selectedIndex.reduce(function(minIndex, currentIndex) {
          return Math.min(minIndex, currentIndex);
        });
      }
      return 0;
    };
    MDCListFoundation2.prototype.isIndexValid = function(index) {
      var _this = this;
      if (index instanceof Array) {
        if (!this.isCheckboxList) {
          throw new Error("MDCListFoundation: Array of index is only supported for checkbox based list");
        }
        if (index.length === 0) {
          return true;
        } else {
          return index.some(function(i) {
            return _this.isIndexInRange(i);
          });
        }
      } else if (typeof index === "number") {
        if (this.isCheckboxList) {
          throw new Error("MDCListFoundation: Expected array of index for checkbox based list but got number: " + index);
        }
        return this.isIndexInRange(index) || this.isSingleSelectionList && index === numbers2.UNSET_INDEX;
      } else {
        return false;
      }
    };
    MDCListFoundation2.prototype.isIndexInRange = function(index) {
      var listSize = this.adapter.getListItemCount();
      return index >= 0 && index < listSize;
    };
    MDCListFoundation2.prototype.setSelectedIndexOnAction = function(index, toggleCheckbox) {
      if (toggleCheckbox === void 0) {
        toggleCheckbox = true;
      }
      if (this.isCheckboxList) {
        this.toggleCheckboxAtIndex(index, toggleCheckbox);
      } else {
        this.setSelectedIndex(index);
      }
    };
    MDCListFoundation2.prototype.toggleCheckboxAtIndex = function(index, toggleCheckbox) {
      var selectionAttribute = this.getSelectionAttribute();
      var isChecked = this.adapter.isCheckboxCheckedAtIndex(index);
      if (toggleCheckbox) {
        isChecked = !isChecked;
        this.adapter.setCheckedCheckboxOrRadioAtIndex(index, isChecked);
      }
      this.adapter.setAttributeForElementIndex(index, selectionAttribute, isChecked ? "true" : "false");
      var selectedIndexes = this.selectedIndex === numbers2.UNSET_INDEX ? [] : this.selectedIndex.slice();
      if (isChecked) {
        selectedIndexes.push(index);
      } else {
        selectedIndexes = selectedIndexes.filter(function(i) {
          return i !== index;
        });
      }
      this.selectedIndex = selectedIndexes;
    };
    MDCListFoundation2.prototype.focusItemAtIndex = function(index) {
      this.adapter.focusItemAtIndex(index);
      this.focusedItemIndex = index;
    };
    MDCListFoundation2.prototype.toggleAll = function(currentlySelectedIndexes) {
      var count = this.adapter.getListItemCount();
      if (currentlySelectedIndexes.length === count) {
        this.setCheckboxAtIndex([]);
      } else {
        var allIndexes = [];
        for (var i = 0; i < count; i++) {
          if (!this.adapter.listItemAtIndexHasClass(i, cssClasses4.LIST_ITEM_DISABLED_CLASS) || currentlySelectedIndexes.indexOf(i) > -1) {
            allIndexes.push(i);
          }
        }
        this.setCheckboxAtIndex(allIndexes);
      }
    };
    MDCListFoundation2.prototype.typeaheadMatchItem = function(nextChar, startingIndex, skipFocus) {
      var _this = this;
      if (skipFocus === void 0) {
        skipFocus = false;
      }
      var opts = {
        focusItemAtIndex: function(index) {
          _this.focusItemAtIndex(index);
        },
        focusedItemIndex: startingIndex ? startingIndex : this.focusedItemIndex,
        nextChar,
        sortedIndexByFirstChar: this.sortedIndexByFirstChar,
        skipFocus,
        isItemAtIndexDisabled: function(index) {
          return _this.adapter.listItemAtIndexHasClass(index, cssClasses4.LIST_ITEM_DISABLED_CLASS);
        }
      };
      return matchItem(opts, this.typeaheadState);
    };
    MDCListFoundation2.prototype.typeaheadInitSortedIndex = function() {
      return initSortedIndex(this.adapter.getListItemCount(), this.adapter.getPrimaryTextAtIndex);
    };
    MDCListFoundation2.prototype.clearTypeaheadBuffer = function() {
      clearBuffer(this.typeaheadState);
    };
    return MDCListFoundation2;
  }(MDCFoundation);

  // node_modules/@material/menu-surface/foundation.js
  var MDCMenuSurfaceFoundation = function(_super) {
    __extends(MDCMenuSurfaceFoundation2, _super);
    function MDCMenuSurfaceFoundation2(adapter) {
      var _this = _super.call(this, __assign(__assign({}, MDCMenuSurfaceFoundation2.defaultAdapter), adapter)) || this;
      _this.isSurfaceOpen = false;
      _this.isQuickOpen = false;
      _this.isHoistedElement = false;
      _this.isFixedPosition = false;
      _this.isHorizontallyCenteredOnViewport = false;
      _this.maxHeight = 0;
      _this.openAnimationEndTimerId = 0;
      _this.closeAnimationEndTimerId = 0;
      _this.animationRequestId = 0;
      _this.anchorCorner = Corner.TOP_START;
      _this.originCorner = Corner.TOP_START;
      _this.anchorMargin = { top: 0, right: 0, bottom: 0, left: 0 };
      _this.position = { x: 0, y: 0 };
      return _this;
    }
    Object.defineProperty(MDCMenuSurfaceFoundation2, "cssClasses", {
      get: function() {
        return cssClasses3;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(MDCMenuSurfaceFoundation2, "strings", {
      get: function() {
        return strings;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(MDCMenuSurfaceFoundation2, "numbers", {
      get: function() {
        return numbers;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(MDCMenuSurfaceFoundation2, "Corner", {
      get: function() {
        return Corner;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(MDCMenuSurfaceFoundation2, "defaultAdapter", {
      get: function() {
        return {
          addClass: function() {
            return void 0;
          },
          removeClass: function() {
            return void 0;
          },
          hasClass: function() {
            return false;
          },
          hasAnchor: function() {
            return false;
          },
          isElementInContainer: function() {
            return false;
          },
          isFocused: function() {
            return false;
          },
          isRtl: function() {
            return false;
          },
          getInnerDimensions: function() {
            return { height: 0, width: 0 };
          },
          getAnchorDimensions: function() {
            return null;
          },
          getWindowDimensions: function() {
            return { height: 0, width: 0 };
          },
          getBodyDimensions: function() {
            return { height: 0, width: 0 };
          },
          getWindowScroll: function() {
            return { x: 0, y: 0 };
          },
          setPosition: function() {
            return void 0;
          },
          setMaxHeight: function() {
            return void 0;
          },
          setTransformOrigin: function() {
            return void 0;
          },
          saveFocus: function() {
            return void 0;
          },
          restoreFocus: function() {
            return void 0;
          },
          notifyClose: function() {
            return void 0;
          },
          notifyOpen: function() {
            return void 0;
          },
          notifyClosing: function() {
            return void 0;
          }
        };
      },
      enumerable: false,
      configurable: true
    });
    MDCMenuSurfaceFoundation2.prototype.init = function() {
      var _a2 = MDCMenuSurfaceFoundation2.cssClasses, ROOT = _a2.ROOT, OPEN = _a2.OPEN;
      if (!this.adapter.hasClass(ROOT)) {
        throw new Error(ROOT + " class required in root element.");
      }
      if (this.adapter.hasClass(OPEN)) {
        this.isSurfaceOpen = true;
      }
    };
    MDCMenuSurfaceFoundation2.prototype.destroy = function() {
      clearTimeout(this.openAnimationEndTimerId);
      clearTimeout(this.closeAnimationEndTimerId);
      cancelAnimationFrame(this.animationRequestId);
    };
    MDCMenuSurfaceFoundation2.prototype.setAnchorCorner = function(corner) {
      this.anchorCorner = corner;
    };
    MDCMenuSurfaceFoundation2.prototype.flipCornerHorizontally = function() {
      this.originCorner = this.originCorner ^ CornerBit.RIGHT;
    };
    MDCMenuSurfaceFoundation2.prototype.setAnchorMargin = function(margin) {
      this.anchorMargin.top = margin.top || 0;
      this.anchorMargin.right = margin.right || 0;
      this.anchorMargin.bottom = margin.bottom || 0;
      this.anchorMargin.left = margin.left || 0;
    };
    MDCMenuSurfaceFoundation2.prototype.setIsHoisted = function(isHoisted) {
      this.isHoistedElement = isHoisted;
    };
    MDCMenuSurfaceFoundation2.prototype.setFixedPosition = function(isFixedPosition) {
      this.isFixedPosition = isFixedPosition;
    };
    MDCMenuSurfaceFoundation2.prototype.isFixed = function() {
      return this.isFixedPosition;
    };
    MDCMenuSurfaceFoundation2.prototype.setAbsolutePosition = function(x, y) {
      this.position.x = this.isFinite(x) ? x : 0;
      this.position.y = this.isFinite(y) ? y : 0;
    };
    MDCMenuSurfaceFoundation2.prototype.setIsHorizontallyCenteredOnViewport = function(isCentered) {
      this.isHorizontallyCenteredOnViewport = isCentered;
    };
    MDCMenuSurfaceFoundation2.prototype.setQuickOpen = function(quickOpen) {
      this.isQuickOpen = quickOpen;
    };
    MDCMenuSurfaceFoundation2.prototype.setMaxHeight = function(maxHeight) {
      this.maxHeight = maxHeight;
    };
    MDCMenuSurfaceFoundation2.prototype.isOpen = function() {
      return this.isSurfaceOpen;
    };
    MDCMenuSurfaceFoundation2.prototype.open = function() {
      var _this = this;
      if (this.isSurfaceOpen) {
        return;
      }
      this.adapter.saveFocus();
      if (this.isQuickOpen) {
        this.isSurfaceOpen = true;
        this.adapter.addClass(MDCMenuSurfaceFoundation2.cssClasses.OPEN);
        this.dimensions = this.adapter.getInnerDimensions();
        this.autoposition();
        this.adapter.notifyOpen();
      } else {
        this.adapter.addClass(MDCMenuSurfaceFoundation2.cssClasses.ANIMATING_OPEN);
        this.animationRequestId = requestAnimationFrame(function() {
          _this.dimensions = _this.adapter.getInnerDimensions();
          _this.autoposition();
          _this.adapter.addClass(MDCMenuSurfaceFoundation2.cssClasses.OPEN);
          _this.openAnimationEndTimerId = setTimeout(function() {
            _this.openAnimationEndTimerId = 0;
            _this.adapter.removeClass(MDCMenuSurfaceFoundation2.cssClasses.ANIMATING_OPEN);
            _this.adapter.notifyOpen();
          }, numbers.TRANSITION_OPEN_DURATION);
        });
        this.isSurfaceOpen = true;
      }
    };
    MDCMenuSurfaceFoundation2.prototype.close = function(skipRestoreFocus) {
      var _this = this;
      if (skipRestoreFocus === void 0) {
        skipRestoreFocus = false;
      }
      if (!this.isSurfaceOpen) {
        return;
      }
      this.adapter.notifyClosing();
      if (this.isQuickOpen) {
        this.isSurfaceOpen = false;
        if (!skipRestoreFocus) {
          this.maybeRestoreFocus();
        }
        this.adapter.removeClass(MDCMenuSurfaceFoundation2.cssClasses.OPEN);
        this.adapter.removeClass(MDCMenuSurfaceFoundation2.cssClasses.IS_OPEN_BELOW);
        this.adapter.notifyClose();
        return;
      }
      this.adapter.addClass(MDCMenuSurfaceFoundation2.cssClasses.ANIMATING_CLOSED);
      requestAnimationFrame(function() {
        _this.adapter.removeClass(MDCMenuSurfaceFoundation2.cssClasses.OPEN);
        _this.adapter.removeClass(MDCMenuSurfaceFoundation2.cssClasses.IS_OPEN_BELOW);
        _this.closeAnimationEndTimerId = setTimeout(function() {
          _this.closeAnimationEndTimerId = 0;
          _this.adapter.removeClass(MDCMenuSurfaceFoundation2.cssClasses.ANIMATING_CLOSED);
          _this.adapter.notifyClose();
        }, numbers.TRANSITION_CLOSE_DURATION);
      });
      this.isSurfaceOpen = false;
      if (!skipRestoreFocus) {
        this.maybeRestoreFocus();
      }
    };
    MDCMenuSurfaceFoundation2.prototype.handleBodyClick = function(evt) {
      var el = evt.target;
      if (this.adapter.isElementInContainer(el)) {
        return;
      }
      this.close();
    };
    MDCMenuSurfaceFoundation2.prototype.handleKeydown = function(evt) {
      var keyCode = evt.keyCode, key = evt.key;
      var isEscape = key === "Escape" || keyCode === 27;
      if (isEscape) {
        this.close();
      }
    };
    MDCMenuSurfaceFoundation2.prototype.autoposition = function() {
      var _a2;
      this.measurements = this.getAutoLayoutmeasurements();
      var corner = this.getoriginCorner();
      var maxMenuSurfaceHeight = this.getMenuSurfaceMaxHeight(corner);
      var verticalAlignment = this.hasBit(corner, CornerBit.BOTTOM) ? "bottom" : "top";
      var horizontalAlignment = this.hasBit(corner, CornerBit.RIGHT) ? "right" : "left";
      var horizontalOffset = this.getHorizontalOriginOffset(corner);
      var verticalOffset = this.getVerticalOriginOffset(corner);
      var _b2 = this.measurements, anchorSize = _b2.anchorSize, surfaceSize = _b2.surfaceSize;
      var position = (_a2 = {}, _a2[horizontalAlignment] = horizontalOffset, _a2[verticalAlignment] = verticalOffset, _a2);
      if (anchorSize.width / surfaceSize.width > numbers.ANCHOR_TO_MENU_SURFACE_WIDTH_RATIO) {
        horizontalAlignment = "center";
      }
      if (this.isHoistedElement || this.isFixedPosition) {
        this.adjustPositionForHoistedElement(position);
      }
      this.adapter.setTransformOrigin(horizontalAlignment + " " + verticalAlignment);
      this.adapter.setPosition(position);
      this.adapter.setMaxHeight(maxMenuSurfaceHeight ? maxMenuSurfaceHeight + "px" : "");
      if (!this.hasBit(corner, CornerBit.BOTTOM)) {
        this.adapter.addClass(MDCMenuSurfaceFoundation2.cssClasses.IS_OPEN_BELOW);
      }
    };
    MDCMenuSurfaceFoundation2.prototype.getAutoLayoutmeasurements = function() {
      var anchorRect = this.adapter.getAnchorDimensions();
      var bodySize = this.adapter.getBodyDimensions();
      var viewportSize = this.adapter.getWindowDimensions();
      var windowScroll = this.adapter.getWindowScroll();
      if (!anchorRect) {
        anchorRect = {
          top: this.position.y,
          right: this.position.x,
          bottom: this.position.y,
          left: this.position.x,
          width: 0,
          height: 0
        };
      }
      return {
        anchorSize: anchorRect,
        bodySize,
        surfaceSize: this.dimensions,
        viewportDistance: {
          top: anchorRect.top,
          right: viewportSize.width - anchorRect.right,
          bottom: viewportSize.height - anchorRect.bottom,
          left: anchorRect.left
        },
        viewportSize,
        windowScroll
      };
    };
    MDCMenuSurfaceFoundation2.prototype.getoriginCorner = function() {
      var corner = this.originCorner;
      var _a2 = this.measurements, viewportDistance = _a2.viewportDistance, anchorSize = _a2.anchorSize, surfaceSize = _a2.surfaceSize;
      var MARGIN_TO_EDGE = MDCMenuSurfaceFoundation2.numbers.MARGIN_TO_EDGE;
      var isAnchoredToBottom = this.hasBit(this.anchorCorner, CornerBit.BOTTOM);
      var availableTop;
      var availableBottom;
      if (isAnchoredToBottom) {
        availableTop = viewportDistance.top - MARGIN_TO_EDGE + this.anchorMargin.bottom;
        availableBottom = viewportDistance.bottom - MARGIN_TO_EDGE - this.anchorMargin.bottom;
      } else {
        availableTop = viewportDistance.top - MARGIN_TO_EDGE + this.anchorMargin.top;
        availableBottom = viewportDistance.bottom - MARGIN_TO_EDGE + anchorSize.height - this.anchorMargin.top;
      }
      var isAvailableBottom = availableBottom - surfaceSize.height > 0;
      if (!isAvailableBottom && availableTop > availableBottom) {
        corner = this.setBit(corner, CornerBit.BOTTOM);
      }
      var isRtl = this.adapter.isRtl();
      var isFlipRtl = this.hasBit(this.anchorCorner, CornerBit.FLIP_RTL);
      var hasRightBit = this.hasBit(this.anchorCorner, CornerBit.RIGHT) || this.hasBit(corner, CornerBit.RIGHT);
      var isAnchoredToRight = false;
      if (isRtl && isFlipRtl) {
        isAnchoredToRight = !hasRightBit;
      } else {
        isAnchoredToRight = hasRightBit;
      }
      var availableLeft;
      var availableRight;
      if (isAnchoredToRight) {
        availableLeft = viewportDistance.left + anchorSize.width + this.anchorMargin.right;
        availableRight = viewportDistance.right - this.anchorMargin.right;
      } else {
        availableLeft = viewportDistance.left + this.anchorMargin.left;
        availableRight = viewportDistance.right + anchorSize.width - this.anchorMargin.left;
      }
      var isAvailableLeft = availableLeft - surfaceSize.width > 0;
      var isAvailableRight = availableRight - surfaceSize.width > 0;
      var isOriginCornerAlignedToEnd = this.hasBit(corner, CornerBit.FLIP_RTL) && this.hasBit(corner, CornerBit.RIGHT);
      if (isAvailableRight && isOriginCornerAlignedToEnd && isRtl || !isAvailableLeft && isOriginCornerAlignedToEnd) {
        corner = this.unsetBit(corner, CornerBit.RIGHT);
      } else if (isAvailableLeft && isAnchoredToRight && isRtl || isAvailableLeft && !isAnchoredToRight && hasRightBit || !isAvailableRight && availableLeft >= availableRight) {
        corner = this.setBit(corner, CornerBit.RIGHT);
      }
      return corner;
    };
    MDCMenuSurfaceFoundation2.prototype.getMenuSurfaceMaxHeight = function(corner) {
      if (this.maxHeight > 0) {
        return this.maxHeight;
      }
      var viewportDistance = this.measurements.viewportDistance;
      var maxHeight = 0;
      var isBottomAligned = this.hasBit(corner, CornerBit.BOTTOM);
      var isBottomAnchored = this.hasBit(this.anchorCorner, CornerBit.BOTTOM);
      var MARGIN_TO_EDGE = MDCMenuSurfaceFoundation2.numbers.MARGIN_TO_EDGE;
      if (isBottomAligned) {
        maxHeight = viewportDistance.top + this.anchorMargin.top - MARGIN_TO_EDGE;
        if (!isBottomAnchored) {
          maxHeight += this.measurements.anchorSize.height;
        }
      } else {
        maxHeight = viewportDistance.bottom - this.anchorMargin.bottom + this.measurements.anchorSize.height - MARGIN_TO_EDGE;
        if (isBottomAnchored) {
          maxHeight -= this.measurements.anchorSize.height;
        }
      }
      return maxHeight;
    };
    MDCMenuSurfaceFoundation2.prototype.getHorizontalOriginOffset = function(corner) {
      var anchorSize = this.measurements.anchorSize;
      var isRightAligned = this.hasBit(corner, CornerBit.RIGHT);
      var avoidHorizontalOverlap = this.hasBit(this.anchorCorner, CornerBit.RIGHT);
      if (isRightAligned) {
        var rightOffset = avoidHorizontalOverlap ? anchorSize.width - this.anchorMargin.left : this.anchorMargin.right;
        if (this.isHoistedElement || this.isFixedPosition) {
          return rightOffset - (this.measurements.viewportSize.width - this.measurements.bodySize.width);
        }
        return rightOffset;
      }
      return avoidHorizontalOverlap ? anchorSize.width - this.anchorMargin.right : this.anchorMargin.left;
    };
    MDCMenuSurfaceFoundation2.prototype.getVerticalOriginOffset = function(corner) {
      var anchorSize = this.measurements.anchorSize;
      var isBottomAligned = this.hasBit(corner, CornerBit.BOTTOM);
      var avoidVerticalOverlap = this.hasBit(this.anchorCorner, CornerBit.BOTTOM);
      var y = 0;
      if (isBottomAligned) {
        y = avoidVerticalOverlap ? anchorSize.height - this.anchorMargin.top : -this.anchorMargin.bottom;
      } else {
        y = avoidVerticalOverlap ? anchorSize.height + this.anchorMargin.bottom : this.anchorMargin.top;
      }
      return y;
    };
    MDCMenuSurfaceFoundation2.prototype.adjustPositionForHoistedElement = function(position) {
      var e_1, _a2;
      var _b2 = this.measurements, windowScroll = _b2.windowScroll, viewportDistance = _b2.viewportDistance, surfaceSize = _b2.surfaceSize, viewportSize = _b2.viewportSize;
      var props = Object.keys(position);
      try {
        for (var props_1 = __values(props), props_1_1 = props_1.next(); !props_1_1.done; props_1_1 = props_1.next()) {
          var prop = props_1_1.value;
          var value = position[prop] || 0;
          if (this.isHorizontallyCenteredOnViewport && (prop === "left" || prop === "right")) {
            position[prop] = (viewportSize.width - surfaceSize.width) / 2;
            continue;
          }
          value += viewportDistance[prop];
          if (!this.isFixedPosition) {
            if (prop === "top") {
              value += windowScroll.y;
            } else if (prop === "bottom") {
              value -= windowScroll.y;
            } else if (prop === "left") {
              value += windowScroll.x;
            } else {
              value -= windowScroll.x;
            }
          }
          position[prop] = value;
        }
      } catch (e_1_1) {
        e_1 = { error: e_1_1 };
      } finally {
        try {
          if (props_1_1 && !props_1_1.done && (_a2 = props_1.return))
            _a2.call(props_1);
        } finally {
          if (e_1)
            throw e_1.error;
        }
      }
    };
    MDCMenuSurfaceFoundation2.prototype.maybeRestoreFocus = function() {
      var _this = this;
      var isRootFocused = this.adapter.isFocused();
      var childHasFocus = document.activeElement && this.adapter.isElementInContainer(document.activeElement);
      if (isRootFocused || childHasFocus) {
        setTimeout(function() {
          _this.adapter.restoreFocus();
        }, numbers.TOUCH_EVENT_WAIT_MS);
      }
    };
    MDCMenuSurfaceFoundation2.prototype.hasBit = function(corner, bit) {
      return Boolean(corner & bit);
    };
    MDCMenuSurfaceFoundation2.prototype.setBit = function(corner, bit) {
      return corner | bit;
    };
    MDCMenuSurfaceFoundation2.prototype.unsetBit = function(corner, bit) {
      return corner ^ bit;
    };
    MDCMenuSurfaceFoundation2.prototype.isFinite = function(num) {
      return typeof num === "number" && isFinite(num);
    };
    return MDCMenuSurfaceFoundation2;
  }(MDCFoundation);

  // node_modules/@material/menu/constants.js
  var cssClasses5 = {
    MENU_SELECTED_LIST_ITEM: "mdc-menu-item--selected",
    MENU_SELECTION_GROUP: "mdc-menu__selection-group",
    ROOT: "mdc-menu"
  };
  var strings3 = {
    ARIA_CHECKED_ATTR: "aria-checked",
    ARIA_DISABLED_ATTR: "aria-disabled",
    CHECKBOX_SELECTOR: 'input[type="checkbox"]',
    LIST_SELECTOR: ".mdc-list,.mdc-deprecated-list",
    SELECTED_EVENT: "MDCMenu:selected",
    SKIP_RESTORE_FOCUS: "data-menu-item-skip-restore-focus"
  };
  var numbers3 = {
    FOCUS_ROOT_INDEX: -1
  };
  var DefaultFocusState;
  (function(DefaultFocusState2) {
    DefaultFocusState2[DefaultFocusState2["NONE"] = 0] = "NONE";
    DefaultFocusState2[DefaultFocusState2["LIST_ROOT"] = 1] = "LIST_ROOT";
    DefaultFocusState2[DefaultFocusState2["FIRST_ITEM"] = 2] = "FIRST_ITEM";
    DefaultFocusState2[DefaultFocusState2["LAST_ITEM"] = 3] = "LAST_ITEM";
  })(DefaultFocusState || (DefaultFocusState = {}));

  // node_modules/@material/menu/foundation.js
  var MDCMenuFoundation = function(_super) {
    __extends(MDCMenuFoundation2, _super);
    function MDCMenuFoundation2(adapter) {
      var _this = _super.call(this, __assign(__assign({}, MDCMenuFoundation2.defaultAdapter), adapter)) || this;
      _this.closeAnimationEndTimerId = 0;
      _this.defaultFocusState = DefaultFocusState.LIST_ROOT;
      _this.selectedIndex = -1;
      return _this;
    }
    Object.defineProperty(MDCMenuFoundation2, "cssClasses", {
      get: function() {
        return cssClasses5;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(MDCMenuFoundation2, "strings", {
      get: function() {
        return strings3;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(MDCMenuFoundation2, "numbers", {
      get: function() {
        return numbers3;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(MDCMenuFoundation2, "defaultAdapter", {
      get: function() {
        return {
          addClassToElementAtIndex: function() {
            return void 0;
          },
          removeClassFromElementAtIndex: function() {
            return void 0;
          },
          addAttributeToElementAtIndex: function() {
            return void 0;
          },
          removeAttributeFromElementAtIndex: function() {
            return void 0;
          },
          getAttributeFromElementAtIndex: function() {
            return null;
          },
          elementContainsClass: function() {
            return false;
          },
          closeSurface: function() {
            return void 0;
          },
          getElementIndex: function() {
            return -1;
          },
          notifySelected: function() {
            return void 0;
          },
          getMenuItemCount: function() {
            return 0;
          },
          focusItemAtIndex: function() {
            return void 0;
          },
          focusListRoot: function() {
            return void 0;
          },
          getSelectedSiblingOfItemAtIndex: function() {
            return -1;
          },
          isSelectableItemAtIndex: function() {
            return false;
          }
        };
      },
      enumerable: false,
      configurable: true
    });
    MDCMenuFoundation2.prototype.destroy = function() {
      if (this.closeAnimationEndTimerId) {
        clearTimeout(this.closeAnimationEndTimerId);
      }
      this.adapter.closeSurface();
    };
    MDCMenuFoundation2.prototype.handleKeydown = function(evt) {
      var key = evt.key, keyCode = evt.keyCode;
      var isTab = key === "Tab" || keyCode === 9;
      if (isTab) {
        this.adapter.closeSurface(true);
      }
    };
    MDCMenuFoundation2.prototype.handleItemAction = function(listItem) {
      var _this = this;
      var index = this.adapter.getElementIndex(listItem);
      if (index < 0) {
        return;
      }
      this.adapter.notifySelected({ index });
      var skipRestoreFocus = this.adapter.getAttributeFromElementAtIndex(index, strings3.SKIP_RESTORE_FOCUS) === "true";
      this.adapter.closeSurface(skipRestoreFocus);
      this.closeAnimationEndTimerId = setTimeout(function() {
        var recomputedIndex = _this.adapter.getElementIndex(listItem);
        if (recomputedIndex >= 0 && _this.adapter.isSelectableItemAtIndex(recomputedIndex)) {
          _this.setSelectedIndex(recomputedIndex);
        }
      }, MDCMenuSurfaceFoundation.numbers.TRANSITION_CLOSE_DURATION);
    };
    MDCMenuFoundation2.prototype.handleMenuSurfaceOpened = function() {
      switch (this.defaultFocusState) {
        case DefaultFocusState.FIRST_ITEM:
          this.adapter.focusItemAtIndex(0);
          break;
        case DefaultFocusState.LAST_ITEM:
          this.adapter.focusItemAtIndex(this.adapter.getMenuItemCount() - 1);
          break;
        case DefaultFocusState.NONE:
          break;
        default:
          this.adapter.focusListRoot();
          break;
      }
    };
    MDCMenuFoundation2.prototype.setDefaultFocusState = function(focusState) {
      this.defaultFocusState = focusState;
    };
    MDCMenuFoundation2.prototype.getSelectedIndex = function() {
      return this.selectedIndex;
    };
    MDCMenuFoundation2.prototype.setSelectedIndex = function(index) {
      this.validatedIndex(index);
      if (!this.adapter.isSelectableItemAtIndex(index)) {
        throw new Error("MDCMenuFoundation: No selection group at specified index.");
      }
      var prevSelectedIndex = this.adapter.getSelectedSiblingOfItemAtIndex(index);
      if (prevSelectedIndex >= 0) {
        this.adapter.removeAttributeFromElementAtIndex(prevSelectedIndex, strings3.ARIA_CHECKED_ATTR);
        this.adapter.removeClassFromElementAtIndex(prevSelectedIndex, cssClasses5.MENU_SELECTED_LIST_ITEM);
      }
      this.adapter.addClassToElementAtIndex(index, cssClasses5.MENU_SELECTED_LIST_ITEM);
      this.adapter.addAttributeToElementAtIndex(index, strings3.ARIA_CHECKED_ATTR, "true");
      this.selectedIndex = index;
    };
    MDCMenuFoundation2.prototype.setEnabled = function(index, isEnabled) {
      this.validatedIndex(index);
      if (isEnabled) {
        this.adapter.removeClassFromElementAtIndex(index, cssClasses4.LIST_ITEM_DISABLED_CLASS);
        this.adapter.addAttributeToElementAtIndex(index, strings3.ARIA_DISABLED_ATTR, "false");
      } else {
        this.adapter.addClassToElementAtIndex(index, cssClasses4.LIST_ITEM_DISABLED_CLASS);
        this.adapter.addAttributeToElementAtIndex(index, strings3.ARIA_DISABLED_ATTR, "true");
      }
    };
    MDCMenuFoundation2.prototype.validatedIndex = function(index) {
      var menuSize = this.adapter.getMenuItemCount();
      var isIndexInRange = index >= 0 && index < menuSize;
      if (!isIndexInRange) {
        throw new Error("MDCMenuFoundation: No list item at specified index.");
      }
    };
    return MDCMenuFoundation2;
  }(MDCFoundation);

  // node_modules/@material/notched-outline/constants.js
  var strings4 = {
    NOTCH_ELEMENT_SELECTOR: ".mdc-notched-outline__notch"
  };
  var numbers4 = {
    NOTCH_ELEMENT_PADDING: 8
  };
  var cssClasses6 = {
    NO_LABEL: "mdc-notched-outline--no-label",
    OUTLINE_NOTCHED: "mdc-notched-outline--notched",
    OUTLINE_UPGRADED: "mdc-notched-outline--upgraded"
  };

  // node_modules/@material/notched-outline/foundation.js
  var MDCNotchedOutlineFoundation = function(_super) {
    __extends(MDCNotchedOutlineFoundation2, _super);
    function MDCNotchedOutlineFoundation2(adapter) {
      return _super.call(this, __assign(__assign({}, MDCNotchedOutlineFoundation2.defaultAdapter), adapter)) || this;
    }
    Object.defineProperty(MDCNotchedOutlineFoundation2, "strings", {
      get: function() {
        return strings4;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(MDCNotchedOutlineFoundation2, "cssClasses", {
      get: function() {
        return cssClasses6;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(MDCNotchedOutlineFoundation2, "numbers", {
      get: function() {
        return numbers4;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(MDCNotchedOutlineFoundation2, "defaultAdapter", {
      get: function() {
        return {
          addClass: function() {
            return void 0;
          },
          removeClass: function() {
            return void 0;
          },
          setNotchWidthProperty: function() {
            return void 0;
          },
          removeNotchWidthProperty: function() {
            return void 0;
          }
        };
      },
      enumerable: false,
      configurable: true
    });
    MDCNotchedOutlineFoundation2.prototype.notch = function(notchWidth) {
      var OUTLINE_NOTCHED = MDCNotchedOutlineFoundation2.cssClasses.OUTLINE_NOTCHED;
      if (notchWidth > 0) {
        notchWidth += numbers4.NOTCH_ELEMENT_PADDING;
      }
      this.adapter.setNotchWidthProperty(notchWidth);
      this.adapter.addClass(OUTLINE_NOTCHED);
    };
    MDCNotchedOutlineFoundation2.prototype.closeNotch = function() {
      var OUTLINE_NOTCHED = MDCNotchedOutlineFoundation2.cssClasses.OUTLINE_NOTCHED;
      this.adapter.removeClass(OUTLINE_NOTCHED);
      this.adapter.removeNotchWidthProperty();
    };
    return MDCNotchedOutlineFoundation2;
  }(MDCFoundation);

  // node_modules/@material/dom/events.js
  var events_exports = {};
  __export(events_exports, {
    applyPassive: () => applyPassive
  });
  function applyPassive(globalObj) {
    if (globalObj === void 0) {
      globalObj = window;
    }
    return supportsPassiveOption(globalObj) ? { passive: true } : false;
  }
  function supportsPassiveOption(globalObj) {
    if (globalObj === void 0) {
      globalObj = window;
    }
    var passiveSupported = false;
    try {
      var options = {
        get passive() {
          passiveSupported = true;
          return false;
        }
      };
      var handler = function() {
      };
      globalObj.document.addEventListener("test", handler, options);
      globalObj.document.removeEventListener("test", handler, options);
    } catch (err) {
      passiveSupported = false;
    }
    return passiveSupported;
  }

  // node_modules/@material/ripple/constants.js
  var cssClasses7 = {
    BG_FOCUSED: "mdc-ripple-upgraded--background-focused",
    FG_ACTIVATION: "mdc-ripple-upgraded--foreground-activation",
    FG_DEACTIVATION: "mdc-ripple-upgraded--foreground-deactivation",
    ROOT: "mdc-ripple-upgraded",
    UNBOUNDED: "mdc-ripple-upgraded--unbounded"
  };
  var strings5 = {
    VAR_FG_SCALE: "--mdc-ripple-fg-scale",
    VAR_FG_SIZE: "--mdc-ripple-fg-size",
    VAR_FG_TRANSLATE_END: "--mdc-ripple-fg-translate-end",
    VAR_FG_TRANSLATE_START: "--mdc-ripple-fg-translate-start",
    VAR_LEFT: "--mdc-ripple-left",
    VAR_TOP: "--mdc-ripple-top"
  };
  var numbers5 = {
    DEACTIVATION_TIMEOUT_MS: 225,
    FG_DEACTIVATION_MS: 150,
    INITIAL_ORIGIN_SCALE: 0.6,
    PADDING: 10,
    TAP_DELAY_MS: 300
  };

  // node_modules/@material/ripple/util.js
  var util_exports = {};
  __export(util_exports, {
    getNormalizedEventCoords: () => getNormalizedEventCoords,
    supportsCssVariables: () => supportsCssVariables
  });
  var supportsCssVariables_;
  function supportsCssVariables(windowObj, forceRefresh) {
    if (forceRefresh === void 0) {
      forceRefresh = false;
    }
    var CSS = windowObj.CSS;
    var supportsCssVars = supportsCssVariables_;
    if (typeof supportsCssVariables_ === "boolean" && !forceRefresh) {
      return supportsCssVariables_;
    }
    var supportsFunctionPresent = CSS && typeof CSS.supports === "function";
    if (!supportsFunctionPresent) {
      return false;
    }
    var explicitlySupportsCssVars = CSS.supports("--css-vars", "yes");
    var weAreFeatureDetectingSafari10plus = CSS.supports("(--css-vars: yes)") && CSS.supports("color", "#00000000");
    supportsCssVars = explicitlySupportsCssVars || weAreFeatureDetectingSafari10plus;
    if (!forceRefresh) {
      supportsCssVariables_ = supportsCssVars;
    }
    return supportsCssVars;
  }
  function getNormalizedEventCoords(evt, pageOffset, clientRect) {
    if (!evt) {
      return { x: 0, y: 0 };
    }
    var x = pageOffset.x, y = pageOffset.y;
    var documentX = x + clientRect.left;
    var documentY = y + clientRect.top;
    var normalizedX;
    var normalizedY;
    if (evt.type === "touchstart") {
      var touchEvent = evt;
      normalizedX = touchEvent.changedTouches[0].pageX - documentX;
      normalizedY = touchEvent.changedTouches[0].pageY - documentY;
    } else {
      var mouseEvent = evt;
      normalizedX = mouseEvent.pageX - documentX;
      normalizedY = mouseEvent.pageY - documentY;
    }
    return { x: normalizedX, y: normalizedY };
  }

  // node_modules/@material/ripple/foundation.js
  var ACTIVATION_EVENT_TYPES = [
    "touchstart",
    "pointerdown",
    "mousedown",
    "keydown"
  ];
  var POINTER_DEACTIVATION_EVENT_TYPES = [
    "touchend",
    "pointerup",
    "mouseup",
    "contextmenu"
  ];
  var activatedTargets = [];
  var MDCRippleFoundation = function(_super) {
    __extends(MDCRippleFoundation2, _super);
    function MDCRippleFoundation2(adapter) {
      var _this = _super.call(this, __assign(__assign({}, MDCRippleFoundation2.defaultAdapter), adapter)) || this;
      _this.activationAnimationHasEnded = false;
      _this.activationTimer = 0;
      _this.fgDeactivationRemovalTimer = 0;
      _this.fgScale = "0";
      _this.frame = { width: 0, height: 0 };
      _this.initialSize = 0;
      _this.layoutFrame = 0;
      _this.maxRadius = 0;
      _this.unboundedCoords = { left: 0, top: 0 };
      _this.activationState = _this.defaultActivationState();
      _this.activationTimerCallback = function() {
        _this.activationAnimationHasEnded = true;
        _this.runDeactivationUXLogicIfReady();
      };
      _this.activateHandler = function(e) {
        _this.activateImpl(e);
      };
      _this.deactivateHandler = function() {
        _this.deactivateImpl();
      };
      _this.focusHandler = function() {
        _this.handleFocus();
      };
      _this.blurHandler = function() {
        _this.handleBlur();
      };
      _this.resizeHandler = function() {
        _this.layout();
      };
      return _this;
    }
    Object.defineProperty(MDCRippleFoundation2, "cssClasses", {
      get: function() {
        return cssClasses7;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(MDCRippleFoundation2, "strings", {
      get: function() {
        return strings5;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(MDCRippleFoundation2, "numbers", {
      get: function() {
        return numbers5;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(MDCRippleFoundation2, "defaultAdapter", {
      get: function() {
        return {
          addClass: function() {
            return void 0;
          },
          browserSupportsCssVars: function() {
            return true;
          },
          computeBoundingRect: function() {
            return { top: 0, right: 0, bottom: 0, left: 0, width: 0, height: 0 };
          },
          containsEventTarget: function() {
            return true;
          },
          deregisterDocumentInteractionHandler: function() {
            return void 0;
          },
          deregisterInteractionHandler: function() {
            return void 0;
          },
          deregisterResizeHandler: function() {
            return void 0;
          },
          getWindowPageOffset: function() {
            return { x: 0, y: 0 };
          },
          isSurfaceActive: function() {
            return true;
          },
          isSurfaceDisabled: function() {
            return true;
          },
          isUnbounded: function() {
            return true;
          },
          registerDocumentInteractionHandler: function() {
            return void 0;
          },
          registerInteractionHandler: function() {
            return void 0;
          },
          registerResizeHandler: function() {
            return void 0;
          },
          removeClass: function() {
            return void 0;
          },
          updateCssVariable: function() {
            return void 0;
          }
        };
      },
      enumerable: false,
      configurable: true
    });
    MDCRippleFoundation2.prototype.init = function() {
      var _this = this;
      var supportsPressRipple = this.supportsPressRipple();
      this.registerRootHandlers(supportsPressRipple);
      if (supportsPressRipple) {
        var _a2 = MDCRippleFoundation2.cssClasses, ROOT_1 = _a2.ROOT, UNBOUNDED_1 = _a2.UNBOUNDED;
        requestAnimationFrame(function() {
          _this.adapter.addClass(ROOT_1);
          if (_this.adapter.isUnbounded()) {
            _this.adapter.addClass(UNBOUNDED_1);
            _this.layoutInternal();
          }
        });
      }
    };
    MDCRippleFoundation2.prototype.destroy = function() {
      var _this = this;
      if (this.supportsPressRipple()) {
        if (this.activationTimer) {
          clearTimeout(this.activationTimer);
          this.activationTimer = 0;
          this.adapter.removeClass(MDCRippleFoundation2.cssClasses.FG_ACTIVATION);
        }
        if (this.fgDeactivationRemovalTimer) {
          clearTimeout(this.fgDeactivationRemovalTimer);
          this.fgDeactivationRemovalTimer = 0;
          this.adapter.removeClass(MDCRippleFoundation2.cssClasses.FG_DEACTIVATION);
        }
        var _a2 = MDCRippleFoundation2.cssClasses, ROOT_2 = _a2.ROOT, UNBOUNDED_2 = _a2.UNBOUNDED;
        requestAnimationFrame(function() {
          _this.adapter.removeClass(ROOT_2);
          _this.adapter.removeClass(UNBOUNDED_2);
          _this.removeCssVars();
        });
      }
      this.deregisterRootHandlers();
      this.deregisterDeactivationHandlers();
    };
    MDCRippleFoundation2.prototype.activate = function(evt) {
      this.activateImpl(evt);
    };
    MDCRippleFoundation2.prototype.deactivate = function() {
      this.deactivateImpl();
    };
    MDCRippleFoundation2.prototype.layout = function() {
      var _this = this;
      if (this.layoutFrame) {
        cancelAnimationFrame(this.layoutFrame);
      }
      this.layoutFrame = requestAnimationFrame(function() {
        _this.layoutInternal();
        _this.layoutFrame = 0;
      });
    };
    MDCRippleFoundation2.prototype.setUnbounded = function(unbounded) {
      var UNBOUNDED = MDCRippleFoundation2.cssClasses.UNBOUNDED;
      if (unbounded) {
        this.adapter.addClass(UNBOUNDED);
      } else {
        this.adapter.removeClass(UNBOUNDED);
      }
    };
    MDCRippleFoundation2.prototype.handleFocus = function() {
      var _this = this;
      requestAnimationFrame(function() {
        return _this.adapter.addClass(MDCRippleFoundation2.cssClasses.BG_FOCUSED);
      });
    };
    MDCRippleFoundation2.prototype.handleBlur = function() {
      var _this = this;
      requestAnimationFrame(function() {
        return _this.adapter.removeClass(MDCRippleFoundation2.cssClasses.BG_FOCUSED);
      });
    };
    MDCRippleFoundation2.prototype.supportsPressRipple = function() {
      return this.adapter.browserSupportsCssVars();
    };
    MDCRippleFoundation2.prototype.defaultActivationState = function() {
      return {
        activationEvent: void 0,
        hasDeactivationUXRun: false,
        isActivated: false,
        isProgrammatic: false,
        wasActivatedByPointer: false,
        wasElementMadeActive: false
      };
    };
    MDCRippleFoundation2.prototype.registerRootHandlers = function(supportsPressRipple) {
      var e_1, _a2;
      if (supportsPressRipple) {
        try {
          for (var ACTIVATION_EVENT_TYPES_1 = __values(ACTIVATION_EVENT_TYPES), ACTIVATION_EVENT_TYPES_1_1 = ACTIVATION_EVENT_TYPES_1.next(); !ACTIVATION_EVENT_TYPES_1_1.done; ACTIVATION_EVENT_TYPES_1_1 = ACTIVATION_EVENT_TYPES_1.next()) {
            var evtType = ACTIVATION_EVENT_TYPES_1_1.value;
            this.adapter.registerInteractionHandler(evtType, this.activateHandler);
          }
        } catch (e_1_1) {
          e_1 = { error: e_1_1 };
        } finally {
          try {
            if (ACTIVATION_EVENT_TYPES_1_1 && !ACTIVATION_EVENT_TYPES_1_1.done && (_a2 = ACTIVATION_EVENT_TYPES_1.return))
              _a2.call(ACTIVATION_EVENT_TYPES_1);
          } finally {
            if (e_1)
              throw e_1.error;
          }
        }
        if (this.adapter.isUnbounded()) {
          this.adapter.registerResizeHandler(this.resizeHandler);
        }
      }
      this.adapter.registerInteractionHandler("focus", this.focusHandler);
      this.adapter.registerInteractionHandler("blur", this.blurHandler);
    };
    MDCRippleFoundation2.prototype.registerDeactivationHandlers = function(evt) {
      var e_2, _a2;
      if (evt.type === "keydown") {
        this.adapter.registerInteractionHandler("keyup", this.deactivateHandler);
      } else {
        try {
          for (var POINTER_DEACTIVATION_EVENT_TYPES_1 = __values(POINTER_DEACTIVATION_EVENT_TYPES), POINTER_DEACTIVATION_EVENT_TYPES_1_1 = POINTER_DEACTIVATION_EVENT_TYPES_1.next(); !POINTER_DEACTIVATION_EVENT_TYPES_1_1.done; POINTER_DEACTIVATION_EVENT_TYPES_1_1 = POINTER_DEACTIVATION_EVENT_TYPES_1.next()) {
            var evtType = POINTER_DEACTIVATION_EVENT_TYPES_1_1.value;
            this.adapter.registerDocumentInteractionHandler(evtType, this.deactivateHandler);
          }
        } catch (e_2_1) {
          e_2 = { error: e_2_1 };
        } finally {
          try {
            if (POINTER_DEACTIVATION_EVENT_TYPES_1_1 && !POINTER_DEACTIVATION_EVENT_TYPES_1_1.done && (_a2 = POINTER_DEACTIVATION_EVENT_TYPES_1.return))
              _a2.call(POINTER_DEACTIVATION_EVENT_TYPES_1);
          } finally {
            if (e_2)
              throw e_2.error;
          }
        }
      }
    };
    MDCRippleFoundation2.prototype.deregisterRootHandlers = function() {
      var e_3, _a2;
      try {
        for (var ACTIVATION_EVENT_TYPES_2 = __values(ACTIVATION_EVENT_TYPES), ACTIVATION_EVENT_TYPES_2_1 = ACTIVATION_EVENT_TYPES_2.next(); !ACTIVATION_EVENT_TYPES_2_1.done; ACTIVATION_EVENT_TYPES_2_1 = ACTIVATION_EVENT_TYPES_2.next()) {
          var evtType = ACTIVATION_EVENT_TYPES_2_1.value;
          this.adapter.deregisterInteractionHandler(evtType, this.activateHandler);
        }
      } catch (e_3_1) {
        e_3 = { error: e_3_1 };
      } finally {
        try {
          if (ACTIVATION_EVENT_TYPES_2_1 && !ACTIVATION_EVENT_TYPES_2_1.done && (_a2 = ACTIVATION_EVENT_TYPES_2.return))
            _a2.call(ACTIVATION_EVENT_TYPES_2);
        } finally {
          if (e_3)
            throw e_3.error;
        }
      }
      this.adapter.deregisterInteractionHandler("focus", this.focusHandler);
      this.adapter.deregisterInteractionHandler("blur", this.blurHandler);
      if (this.adapter.isUnbounded()) {
        this.adapter.deregisterResizeHandler(this.resizeHandler);
      }
    };
    MDCRippleFoundation2.prototype.deregisterDeactivationHandlers = function() {
      var e_4, _a2;
      this.adapter.deregisterInteractionHandler("keyup", this.deactivateHandler);
      try {
        for (var POINTER_DEACTIVATION_EVENT_TYPES_2 = __values(POINTER_DEACTIVATION_EVENT_TYPES), POINTER_DEACTIVATION_EVENT_TYPES_2_1 = POINTER_DEACTIVATION_EVENT_TYPES_2.next(); !POINTER_DEACTIVATION_EVENT_TYPES_2_1.done; POINTER_DEACTIVATION_EVENT_TYPES_2_1 = POINTER_DEACTIVATION_EVENT_TYPES_2.next()) {
          var evtType = POINTER_DEACTIVATION_EVENT_TYPES_2_1.value;
          this.adapter.deregisterDocumentInteractionHandler(evtType, this.deactivateHandler);
        }
      } catch (e_4_1) {
        e_4 = { error: e_4_1 };
      } finally {
        try {
          if (POINTER_DEACTIVATION_EVENT_TYPES_2_1 && !POINTER_DEACTIVATION_EVENT_TYPES_2_1.done && (_a2 = POINTER_DEACTIVATION_EVENT_TYPES_2.return))
            _a2.call(POINTER_DEACTIVATION_EVENT_TYPES_2);
        } finally {
          if (e_4)
            throw e_4.error;
        }
      }
    };
    MDCRippleFoundation2.prototype.removeCssVars = function() {
      var _this = this;
      var rippleStrings = MDCRippleFoundation2.strings;
      var keys = Object.keys(rippleStrings);
      keys.forEach(function(key) {
        if (key.indexOf("VAR_") === 0) {
          _this.adapter.updateCssVariable(rippleStrings[key], null);
        }
      });
    };
    MDCRippleFoundation2.prototype.activateImpl = function(evt) {
      var _this = this;
      if (this.adapter.isSurfaceDisabled()) {
        return;
      }
      var activationState = this.activationState;
      if (activationState.isActivated) {
        return;
      }
      var previousActivationEvent = this.previousActivationEvent;
      var isSameInteraction = previousActivationEvent && evt !== void 0 && previousActivationEvent.type !== evt.type;
      if (isSameInteraction) {
        return;
      }
      activationState.isActivated = true;
      activationState.isProgrammatic = evt === void 0;
      activationState.activationEvent = evt;
      activationState.wasActivatedByPointer = activationState.isProgrammatic ? false : evt !== void 0 && (evt.type === "mousedown" || evt.type === "touchstart" || evt.type === "pointerdown");
      var hasActivatedChild = evt !== void 0 && activatedTargets.length > 0 && activatedTargets.some(function(target) {
        return _this.adapter.containsEventTarget(target);
      });
      if (hasActivatedChild) {
        this.resetActivationState();
        return;
      }
      if (evt !== void 0) {
        activatedTargets.push(evt.target);
        this.registerDeactivationHandlers(evt);
      }
      activationState.wasElementMadeActive = this.checkElementMadeActive(evt);
      if (activationState.wasElementMadeActive) {
        this.animateActivation();
      }
      requestAnimationFrame(function() {
        activatedTargets = [];
        if (!activationState.wasElementMadeActive && evt !== void 0 && (evt.key === " " || evt.keyCode === 32)) {
          activationState.wasElementMadeActive = _this.checkElementMadeActive(evt);
          if (activationState.wasElementMadeActive) {
            _this.animateActivation();
          }
        }
        if (!activationState.wasElementMadeActive) {
          _this.activationState = _this.defaultActivationState();
        }
      });
    };
    MDCRippleFoundation2.prototype.checkElementMadeActive = function(evt) {
      return evt !== void 0 && evt.type === "keydown" ? this.adapter.isSurfaceActive() : true;
    };
    MDCRippleFoundation2.prototype.animateActivation = function() {
      var _this = this;
      var _a2 = MDCRippleFoundation2.strings, VAR_FG_TRANSLATE_START = _a2.VAR_FG_TRANSLATE_START, VAR_FG_TRANSLATE_END = _a2.VAR_FG_TRANSLATE_END;
      var _b2 = MDCRippleFoundation2.cssClasses, FG_DEACTIVATION = _b2.FG_DEACTIVATION, FG_ACTIVATION = _b2.FG_ACTIVATION;
      var DEACTIVATION_TIMEOUT_MS = MDCRippleFoundation2.numbers.DEACTIVATION_TIMEOUT_MS;
      this.layoutInternal();
      var translateStart = "";
      var translateEnd = "";
      if (!this.adapter.isUnbounded()) {
        var _c = this.getFgTranslationCoordinates(), startPoint = _c.startPoint, endPoint = _c.endPoint;
        translateStart = startPoint.x + "px, " + startPoint.y + "px";
        translateEnd = endPoint.x + "px, " + endPoint.y + "px";
      }
      this.adapter.updateCssVariable(VAR_FG_TRANSLATE_START, translateStart);
      this.adapter.updateCssVariable(VAR_FG_TRANSLATE_END, translateEnd);
      clearTimeout(this.activationTimer);
      clearTimeout(this.fgDeactivationRemovalTimer);
      this.rmBoundedActivationClasses();
      this.adapter.removeClass(FG_DEACTIVATION);
      this.adapter.computeBoundingRect();
      this.adapter.addClass(FG_ACTIVATION);
      this.activationTimer = setTimeout(function() {
        _this.activationTimerCallback();
      }, DEACTIVATION_TIMEOUT_MS);
    };
    MDCRippleFoundation2.prototype.getFgTranslationCoordinates = function() {
      var _a2 = this.activationState, activationEvent = _a2.activationEvent, wasActivatedByPointer = _a2.wasActivatedByPointer;
      var startPoint;
      if (wasActivatedByPointer) {
        startPoint = getNormalizedEventCoords(activationEvent, this.adapter.getWindowPageOffset(), this.adapter.computeBoundingRect());
      } else {
        startPoint = {
          x: this.frame.width / 2,
          y: this.frame.height / 2
        };
      }
      startPoint = {
        x: startPoint.x - this.initialSize / 2,
        y: startPoint.y - this.initialSize / 2
      };
      var endPoint = {
        x: this.frame.width / 2 - this.initialSize / 2,
        y: this.frame.height / 2 - this.initialSize / 2
      };
      return { startPoint, endPoint };
    };
    MDCRippleFoundation2.prototype.runDeactivationUXLogicIfReady = function() {
      var _this = this;
      var FG_DEACTIVATION = MDCRippleFoundation2.cssClasses.FG_DEACTIVATION;
      var _a2 = this.activationState, hasDeactivationUXRun = _a2.hasDeactivationUXRun, isActivated = _a2.isActivated;
      var activationHasEnded = hasDeactivationUXRun || !isActivated;
      if (activationHasEnded && this.activationAnimationHasEnded) {
        this.rmBoundedActivationClasses();
        this.adapter.addClass(FG_DEACTIVATION);
        this.fgDeactivationRemovalTimer = setTimeout(function() {
          _this.adapter.removeClass(FG_DEACTIVATION);
        }, numbers5.FG_DEACTIVATION_MS);
      }
    };
    MDCRippleFoundation2.prototype.rmBoundedActivationClasses = function() {
      var FG_ACTIVATION = MDCRippleFoundation2.cssClasses.FG_ACTIVATION;
      this.adapter.removeClass(FG_ACTIVATION);
      this.activationAnimationHasEnded = false;
      this.adapter.computeBoundingRect();
    };
    MDCRippleFoundation2.prototype.resetActivationState = function() {
      var _this = this;
      this.previousActivationEvent = this.activationState.activationEvent;
      this.activationState = this.defaultActivationState();
      setTimeout(function() {
        return _this.previousActivationEvent = void 0;
      }, MDCRippleFoundation2.numbers.TAP_DELAY_MS);
    };
    MDCRippleFoundation2.prototype.deactivateImpl = function() {
      var _this = this;
      var activationState = this.activationState;
      if (!activationState.isActivated) {
        return;
      }
      var state = __assign({}, activationState);
      if (activationState.isProgrammatic) {
        requestAnimationFrame(function() {
          _this.animateDeactivation(state);
        });
        this.resetActivationState();
      } else {
        this.deregisterDeactivationHandlers();
        requestAnimationFrame(function() {
          _this.activationState.hasDeactivationUXRun = true;
          _this.animateDeactivation(state);
          _this.resetActivationState();
        });
      }
    };
    MDCRippleFoundation2.prototype.animateDeactivation = function(_a2) {
      var wasActivatedByPointer = _a2.wasActivatedByPointer, wasElementMadeActive = _a2.wasElementMadeActive;
      if (wasActivatedByPointer || wasElementMadeActive) {
        this.runDeactivationUXLogicIfReady();
      }
    };
    MDCRippleFoundation2.prototype.layoutInternal = function() {
      var _this = this;
      this.frame = this.adapter.computeBoundingRect();
      var maxDim = Math.max(this.frame.height, this.frame.width);
      var getBoundedRadius = function() {
        var hypotenuse = Math.sqrt(Math.pow(_this.frame.width, 2) + Math.pow(_this.frame.height, 2));
        return hypotenuse + MDCRippleFoundation2.numbers.PADDING;
      };
      this.maxRadius = this.adapter.isUnbounded() ? maxDim : getBoundedRadius();
      var initialSize = Math.floor(maxDim * MDCRippleFoundation2.numbers.INITIAL_ORIGIN_SCALE);
      if (this.adapter.isUnbounded() && initialSize % 2 !== 0) {
        this.initialSize = initialSize - 1;
      } else {
        this.initialSize = initialSize;
      }
      this.fgScale = "" + this.maxRadius / this.initialSize;
      this.updateLayoutCssVars();
    };
    MDCRippleFoundation2.prototype.updateLayoutCssVars = function() {
      var _a2 = MDCRippleFoundation2.strings, VAR_FG_SIZE = _a2.VAR_FG_SIZE, VAR_LEFT = _a2.VAR_LEFT, VAR_TOP = _a2.VAR_TOP, VAR_FG_SCALE = _a2.VAR_FG_SCALE;
      this.adapter.updateCssVariable(VAR_FG_SIZE, this.initialSize + "px");
      this.adapter.updateCssVariable(VAR_FG_SCALE, this.fgScale);
      if (this.adapter.isUnbounded()) {
        this.unboundedCoords = {
          left: Math.round(this.frame.width / 2 - this.initialSize / 2),
          top: Math.round(this.frame.height / 2 - this.initialSize / 2)
        };
        this.adapter.updateCssVariable(VAR_LEFT, this.unboundedCoords.left + "px");
        this.adapter.updateCssVariable(VAR_TOP, this.unboundedCoords.top + "px");
      }
    };
    return MDCRippleFoundation2;
  }(MDCFoundation);

  // node_modules/@material/select/constants.js
  var cssClasses8 = {
    ACTIVATED: "mdc-select--activated",
    DISABLED: "mdc-select--disabled",
    FOCUSED: "mdc-select--focused",
    INVALID: "mdc-select--invalid",
    MENU_INVALID: "mdc-select__menu--invalid",
    OUTLINED: "mdc-select--outlined",
    REQUIRED: "mdc-select--required",
    ROOT: "mdc-select",
    WITH_LEADING_ICON: "mdc-select--with-leading-icon"
  };
  var strings6 = {
    ARIA_CONTROLS: "aria-controls",
    ARIA_DESCRIBEDBY: "aria-describedby",
    ARIA_SELECTED_ATTR: "aria-selected",
    CHANGE_EVENT: "MDCSelect:change",
    HIDDEN_INPUT_SELECTOR: 'input[type="hidden"]',
    LABEL_SELECTOR: ".mdc-floating-label",
    LEADING_ICON_SELECTOR: ".mdc-select__icon",
    LINE_RIPPLE_SELECTOR: ".mdc-line-ripple",
    MENU_SELECTOR: ".mdc-select__menu",
    OUTLINE_SELECTOR: ".mdc-notched-outline",
    SELECTED_TEXT_SELECTOR: ".mdc-select__selected-text",
    SELECT_ANCHOR_SELECTOR: ".mdc-select__anchor",
    VALUE_ATTR: "data-value"
  };
  var numbers6 = {
    LABEL_SCALE: 0.75,
    UNSET_INDEX: -1,
    CLICK_DEBOUNCE_TIMEOUT_MS: 330
  };

  // node_modules/@material/select/foundation.js
  var MDCSelectFoundation = function(_super) {
    __extends(MDCSelectFoundation2, _super);
    function MDCSelectFoundation2(adapter, foundationMap) {
      if (foundationMap === void 0) {
        foundationMap = {};
      }
      var _this = _super.call(this, __assign(__assign({}, MDCSelectFoundation2.defaultAdapter), adapter)) || this;
      _this.disabled = false;
      _this.isMenuOpen = false;
      _this.useDefaultValidation = true;
      _this.customValidity = true;
      _this.lastSelectedIndex = numbers6.UNSET_INDEX;
      _this.clickDebounceTimeout = 0;
      _this.recentlyClicked = false;
      _this.leadingIcon = foundationMap.leadingIcon;
      _this.helperText = foundationMap.helperText;
      return _this;
    }
    Object.defineProperty(MDCSelectFoundation2, "cssClasses", {
      get: function() {
        return cssClasses8;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(MDCSelectFoundation2, "numbers", {
      get: function() {
        return numbers6;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(MDCSelectFoundation2, "strings", {
      get: function() {
        return strings6;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(MDCSelectFoundation2, "defaultAdapter", {
      get: function() {
        return {
          addClass: function() {
            return void 0;
          },
          removeClass: function() {
            return void 0;
          },
          hasClass: function() {
            return false;
          },
          activateBottomLine: function() {
            return void 0;
          },
          deactivateBottomLine: function() {
            return void 0;
          },
          getSelectedIndex: function() {
            return -1;
          },
          setSelectedIndex: function() {
            return void 0;
          },
          hasLabel: function() {
            return false;
          },
          floatLabel: function() {
            return void 0;
          },
          getLabelWidth: function() {
            return 0;
          },
          setLabelRequired: function() {
            return void 0;
          },
          hasOutline: function() {
            return false;
          },
          notchOutline: function() {
            return void 0;
          },
          closeOutline: function() {
            return void 0;
          },
          setRippleCenter: function() {
            return void 0;
          },
          notifyChange: function() {
            return void 0;
          },
          setSelectedText: function() {
            return void 0;
          },
          isSelectAnchorFocused: function() {
            return false;
          },
          getSelectAnchorAttr: function() {
            return "";
          },
          setSelectAnchorAttr: function() {
            return void 0;
          },
          removeSelectAnchorAttr: function() {
            return void 0;
          },
          addMenuClass: function() {
            return void 0;
          },
          removeMenuClass: function() {
            return void 0;
          },
          openMenu: function() {
            return void 0;
          },
          closeMenu: function() {
            return void 0;
          },
          getAnchorElement: function() {
            return null;
          },
          setMenuAnchorElement: function() {
            return void 0;
          },
          setMenuAnchorCorner: function() {
            return void 0;
          },
          setMenuWrapFocus: function() {
            return void 0;
          },
          focusMenuItemAtIndex: function() {
            return void 0;
          },
          getMenuItemCount: function() {
            return 0;
          },
          getMenuItemValues: function() {
            return [];
          },
          getMenuItemTextAtIndex: function() {
            return "";
          },
          isTypeaheadInProgress: function() {
            return false;
          },
          typeaheadMatchItem: function() {
            return -1;
          }
        };
      },
      enumerable: false,
      configurable: true
    });
    MDCSelectFoundation2.prototype.getSelectedIndex = function() {
      return this.adapter.getSelectedIndex();
    };
    MDCSelectFoundation2.prototype.setSelectedIndex = function(index, closeMenu, skipNotify) {
      if (closeMenu === void 0) {
        closeMenu = false;
      }
      if (skipNotify === void 0) {
        skipNotify = false;
      }
      if (index >= this.adapter.getMenuItemCount()) {
        return;
      }
      if (index === numbers6.UNSET_INDEX) {
        this.adapter.setSelectedText("");
      } else {
        this.adapter.setSelectedText(this.adapter.getMenuItemTextAtIndex(index).trim());
      }
      this.adapter.setSelectedIndex(index);
      if (closeMenu) {
        this.adapter.closeMenu();
      }
      if (!skipNotify && this.lastSelectedIndex !== index) {
        this.handleChange();
      }
      this.lastSelectedIndex = index;
    };
    MDCSelectFoundation2.prototype.setValue = function(value, skipNotify) {
      if (skipNotify === void 0) {
        skipNotify = false;
      }
      var index = this.adapter.getMenuItemValues().indexOf(value);
      this.setSelectedIndex(index, false, skipNotify);
    };
    MDCSelectFoundation2.prototype.getValue = function() {
      var index = this.adapter.getSelectedIndex();
      var menuItemValues = this.adapter.getMenuItemValues();
      return index !== numbers6.UNSET_INDEX ? menuItemValues[index] : "";
    };
    MDCSelectFoundation2.prototype.getDisabled = function() {
      return this.disabled;
    };
    MDCSelectFoundation2.prototype.setDisabled = function(isDisabled) {
      this.disabled = isDisabled;
      if (this.disabled) {
        this.adapter.addClass(cssClasses8.DISABLED);
        this.adapter.closeMenu();
      } else {
        this.adapter.removeClass(cssClasses8.DISABLED);
      }
      if (this.leadingIcon) {
        this.leadingIcon.setDisabled(this.disabled);
      }
      if (this.disabled) {
        this.adapter.removeSelectAnchorAttr("tabindex");
      } else {
        this.adapter.setSelectAnchorAttr("tabindex", "0");
      }
      this.adapter.setSelectAnchorAttr("aria-disabled", this.disabled.toString());
    };
    MDCSelectFoundation2.prototype.openMenu = function() {
      this.adapter.addClass(cssClasses8.ACTIVATED);
      this.adapter.openMenu();
      this.isMenuOpen = true;
      this.adapter.setSelectAnchorAttr("aria-expanded", "true");
    };
    MDCSelectFoundation2.prototype.setHelperTextContent = function(content) {
      if (this.helperText) {
        this.helperText.setContent(content);
      }
    };
    MDCSelectFoundation2.prototype.layout = function() {
      if (this.adapter.hasLabel()) {
        var optionHasValue = this.getValue().length > 0;
        var isFocused = this.adapter.hasClass(cssClasses8.FOCUSED);
        var shouldFloatAndNotch = optionHasValue || isFocused;
        var isRequired = this.adapter.hasClass(cssClasses8.REQUIRED);
        this.notchOutline(shouldFloatAndNotch);
        this.adapter.floatLabel(shouldFloatAndNotch);
        this.adapter.setLabelRequired(isRequired);
      }
    };
    MDCSelectFoundation2.prototype.layoutOptions = function() {
      var menuItemValues = this.adapter.getMenuItemValues();
      var selectedIndex = menuItemValues.indexOf(this.getValue());
      this.setSelectedIndex(selectedIndex, false, true);
    };
    MDCSelectFoundation2.prototype.handleMenuOpened = function() {
      if (this.adapter.getMenuItemValues().length === 0) {
        return;
      }
      var selectedIndex = this.getSelectedIndex();
      var focusItemIndex = selectedIndex >= 0 ? selectedIndex : 0;
      this.adapter.focusMenuItemAtIndex(focusItemIndex);
    };
    MDCSelectFoundation2.prototype.handleMenuClosing = function() {
      this.adapter.setSelectAnchorAttr("aria-expanded", "false");
    };
    MDCSelectFoundation2.prototype.handleMenuClosed = function() {
      this.adapter.removeClass(cssClasses8.ACTIVATED);
      this.isMenuOpen = false;
      if (!this.adapter.isSelectAnchorFocused()) {
        this.blur();
      }
    };
    MDCSelectFoundation2.prototype.handleChange = function() {
      this.layout();
      this.adapter.notifyChange(this.getValue());
      var isRequired = this.adapter.hasClass(cssClasses8.REQUIRED);
      if (isRequired && this.useDefaultValidation) {
        this.setValid(this.isValid());
      }
    };
    MDCSelectFoundation2.prototype.handleMenuItemAction = function(index) {
      this.setSelectedIndex(index, true);
    };
    MDCSelectFoundation2.prototype.handleFocus = function() {
      this.adapter.addClass(cssClasses8.FOCUSED);
      this.layout();
      this.adapter.activateBottomLine();
    };
    MDCSelectFoundation2.prototype.handleBlur = function() {
      if (this.isMenuOpen) {
        return;
      }
      this.blur();
    };
    MDCSelectFoundation2.prototype.handleClick = function(normalizedX) {
      if (this.disabled || this.recentlyClicked) {
        return;
      }
      this.setClickDebounceTimeout();
      if (this.isMenuOpen) {
        this.adapter.closeMenu();
        return;
      }
      this.adapter.setRippleCenter(normalizedX);
      this.openMenu();
    };
    MDCSelectFoundation2.prototype.handleKeydown = function(event) {
      if (this.isMenuOpen || !this.adapter.hasClass(cssClasses8.FOCUSED)) {
        return;
      }
      var isEnter = normalizeKey(event) === KEY.ENTER;
      var isSpace = normalizeKey(event) === KEY.SPACEBAR;
      var arrowUp = normalizeKey(event) === KEY.ARROW_UP;
      var arrowDown = normalizeKey(event) === KEY.ARROW_DOWN;
      var isModifier = event.ctrlKey || event.metaKey;
      if (!isModifier && (!isSpace && event.key && event.key.length === 1 || isSpace && this.adapter.isTypeaheadInProgress())) {
        var key = isSpace ? " " : event.key;
        var typeaheadNextIndex = this.adapter.typeaheadMatchItem(key, this.getSelectedIndex());
        if (typeaheadNextIndex >= 0) {
          this.setSelectedIndex(typeaheadNextIndex);
        }
        event.preventDefault();
        return;
      }
      if (!isEnter && !isSpace && !arrowUp && !arrowDown) {
        return;
      }
      if (arrowUp && this.getSelectedIndex() > 0) {
        this.setSelectedIndex(this.getSelectedIndex() - 1);
      } else if (arrowDown && this.getSelectedIndex() < this.adapter.getMenuItemCount() - 1) {
        this.setSelectedIndex(this.getSelectedIndex() + 1);
      }
      this.openMenu();
      event.preventDefault();
    };
    MDCSelectFoundation2.prototype.notchOutline = function(openNotch) {
      if (!this.adapter.hasOutline()) {
        return;
      }
      var isFocused = this.adapter.hasClass(cssClasses8.FOCUSED);
      if (openNotch) {
        var labelScale = numbers6.LABEL_SCALE;
        var labelWidth = this.adapter.getLabelWidth() * labelScale;
        this.adapter.notchOutline(labelWidth);
      } else if (!isFocused) {
        this.adapter.closeOutline();
      }
    };
    MDCSelectFoundation2.prototype.setLeadingIconAriaLabel = function(label) {
      if (this.leadingIcon) {
        this.leadingIcon.setAriaLabel(label);
      }
    };
    MDCSelectFoundation2.prototype.setLeadingIconContent = function(content) {
      if (this.leadingIcon) {
        this.leadingIcon.setContent(content);
      }
    };
    MDCSelectFoundation2.prototype.getUseDefaultValidation = function() {
      return this.useDefaultValidation;
    };
    MDCSelectFoundation2.prototype.setUseDefaultValidation = function(useDefaultValidation) {
      this.useDefaultValidation = useDefaultValidation;
    };
    MDCSelectFoundation2.prototype.setValid = function(isValid) {
      if (!this.useDefaultValidation) {
        this.customValidity = isValid;
      }
      this.adapter.setSelectAnchorAttr("aria-invalid", (!isValid).toString());
      if (isValid) {
        this.adapter.removeClass(cssClasses8.INVALID);
        this.adapter.removeMenuClass(cssClasses8.MENU_INVALID);
      } else {
        this.adapter.addClass(cssClasses8.INVALID);
        this.adapter.addMenuClass(cssClasses8.MENU_INVALID);
      }
      this.syncHelperTextValidity(isValid);
    };
    MDCSelectFoundation2.prototype.isValid = function() {
      if (this.useDefaultValidation && this.adapter.hasClass(cssClasses8.REQUIRED) && !this.adapter.hasClass(cssClasses8.DISABLED)) {
        return this.getSelectedIndex() !== numbers6.UNSET_INDEX && (this.getSelectedIndex() !== 0 || Boolean(this.getValue()));
      }
      return this.customValidity;
    };
    MDCSelectFoundation2.prototype.setRequired = function(isRequired) {
      if (isRequired) {
        this.adapter.addClass(cssClasses8.REQUIRED);
      } else {
        this.adapter.removeClass(cssClasses8.REQUIRED);
      }
      this.adapter.setSelectAnchorAttr("aria-required", isRequired.toString());
      this.adapter.setLabelRequired(isRequired);
    };
    MDCSelectFoundation2.prototype.getRequired = function() {
      return this.adapter.getSelectAnchorAttr("aria-required") === "true";
    };
    MDCSelectFoundation2.prototype.init = function() {
      var anchorEl = this.adapter.getAnchorElement();
      if (anchorEl) {
        this.adapter.setMenuAnchorElement(anchorEl);
        this.adapter.setMenuAnchorCorner(Corner.BOTTOM_START);
      }
      this.adapter.setMenuWrapFocus(false);
      this.setDisabled(this.adapter.hasClass(cssClasses8.DISABLED));
      this.syncHelperTextValidity(!this.adapter.hasClass(cssClasses8.INVALID));
      this.layout();
      this.layoutOptions();
    };
    MDCSelectFoundation2.prototype.blur = function() {
      this.adapter.removeClass(cssClasses8.FOCUSED);
      this.layout();
      this.adapter.deactivateBottomLine();
      var isRequired = this.adapter.hasClass(cssClasses8.REQUIRED);
      if (isRequired && this.useDefaultValidation) {
        this.setValid(this.isValid());
      }
    };
    MDCSelectFoundation2.prototype.syncHelperTextValidity = function(isValid) {
      if (!this.helperText) {
        return;
      }
      this.helperText.setValidity(isValid);
      var helperTextVisible = this.helperText.isVisible();
      var helperTextId = this.helperText.getId();
      if (helperTextVisible && helperTextId) {
        this.adapter.setSelectAnchorAttr(strings6.ARIA_DESCRIBEDBY, helperTextId);
      } else {
        this.adapter.removeSelectAnchorAttr(strings6.ARIA_DESCRIBEDBY);
      }
    };
    MDCSelectFoundation2.prototype.setClickDebounceTimeout = function() {
      var _this = this;
      clearTimeout(this.clickDebounceTimeout);
      this.clickDebounceTimeout = setTimeout(function() {
        _this.recentlyClicked = false;
      }, numbers6.CLICK_DEBOUNCE_TIMEOUT_MS);
      this.recentlyClicked = true;
    };
    return MDCSelectFoundation2;
  }(MDCFoundation);

  // node_modules/@material/select/helper-text/constants.js
  var strings7 = {
    ARIA_HIDDEN: "aria-hidden",
    ROLE: "role"
  };
  var cssClasses9 = {
    HELPER_TEXT_VALIDATION_MSG: "mdc-select-helper-text--validation-msg",
    HELPER_TEXT_VALIDATION_MSG_PERSISTENT: "mdc-select-helper-text--validation-msg-persistent"
  };

  // node_modules/@material/select/helper-text/foundation.js
  var MDCSelectHelperTextFoundation = function(_super) {
    __extends(MDCSelectHelperTextFoundation2, _super);
    function MDCSelectHelperTextFoundation2(adapter) {
      return _super.call(this, __assign(__assign({}, MDCSelectHelperTextFoundation2.defaultAdapter), adapter)) || this;
    }
    Object.defineProperty(MDCSelectHelperTextFoundation2, "cssClasses", {
      get: function() {
        return cssClasses9;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(MDCSelectHelperTextFoundation2, "strings", {
      get: function() {
        return strings7;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(MDCSelectHelperTextFoundation2, "defaultAdapter", {
      get: function() {
        return {
          addClass: function() {
            return void 0;
          },
          removeClass: function() {
            return void 0;
          },
          hasClass: function() {
            return false;
          },
          setAttr: function() {
            return void 0;
          },
          getAttr: function() {
            return null;
          },
          removeAttr: function() {
            return void 0;
          },
          setContent: function() {
            return void 0;
          }
        };
      },
      enumerable: false,
      configurable: true
    });
    MDCSelectHelperTextFoundation2.prototype.getId = function() {
      return this.adapter.getAttr("id");
    };
    MDCSelectHelperTextFoundation2.prototype.isVisible = function() {
      return this.adapter.getAttr(strings7.ARIA_HIDDEN) !== "true";
    };
    MDCSelectHelperTextFoundation2.prototype.setContent = function(content) {
      this.adapter.setContent(content);
    };
    MDCSelectHelperTextFoundation2.prototype.setValidation = function(isValidation) {
      if (isValidation) {
        this.adapter.addClass(cssClasses9.HELPER_TEXT_VALIDATION_MSG);
      } else {
        this.adapter.removeClass(cssClasses9.HELPER_TEXT_VALIDATION_MSG);
      }
    };
    MDCSelectHelperTextFoundation2.prototype.setValidationMsgPersistent = function(isPersistent) {
      if (isPersistent) {
        this.adapter.addClass(cssClasses9.HELPER_TEXT_VALIDATION_MSG_PERSISTENT);
      } else {
        this.adapter.removeClass(cssClasses9.HELPER_TEXT_VALIDATION_MSG_PERSISTENT);
      }
    };
    MDCSelectHelperTextFoundation2.prototype.setValidity = function(selectIsValid) {
      var isValidationMsg = this.adapter.hasClass(cssClasses9.HELPER_TEXT_VALIDATION_MSG);
      if (!isValidationMsg) {
        return;
      }
      var isPersistentValidationMsg = this.adapter.hasClass(cssClasses9.HELPER_TEXT_VALIDATION_MSG_PERSISTENT);
      var msgShouldDisplay = !selectIsValid || isPersistentValidationMsg;
      if (msgShouldDisplay) {
        this.showToScreenReader();
        if (!selectIsValid) {
          this.adapter.setAttr(strings7.ROLE, "alert");
        } else {
          this.adapter.removeAttr(strings7.ROLE);
        }
        return;
      }
      this.adapter.removeAttr(strings7.ROLE);
      this.hide();
    };
    MDCSelectHelperTextFoundation2.prototype.showToScreenReader = function() {
      this.adapter.removeAttr(strings7.ARIA_HIDDEN);
    };
    MDCSelectHelperTextFoundation2.prototype.hide = function() {
      this.adapter.setAttr(strings7.ARIA_HIDDEN, "true");
    };
    return MDCSelectHelperTextFoundation2;
  }(MDCFoundation);

  // node_modules/@material/select/icon/constants.js
  var strings8 = {
    ICON_EVENT: "MDCSelect:icon",
    ICON_ROLE: "button"
  };

  // node_modules/@material/select/icon/foundation.js
  var INTERACTION_EVENTS = ["click", "keydown"];
  var MDCSelectIconFoundation = function(_super) {
    __extends(MDCSelectIconFoundation2, _super);
    function MDCSelectIconFoundation2(adapter) {
      var _this = _super.call(this, __assign(__assign({}, MDCSelectIconFoundation2.defaultAdapter), adapter)) || this;
      _this.savedTabIndex = null;
      _this.interactionHandler = function(evt) {
        _this.handleInteraction(evt);
      };
      return _this;
    }
    Object.defineProperty(MDCSelectIconFoundation2, "strings", {
      get: function() {
        return strings8;
      },
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(MDCSelectIconFoundation2, "defaultAdapter", {
      get: function() {
        return {
          getAttr: function() {
            return null;
          },
          setAttr: function() {
            return void 0;
          },
          removeAttr: function() {
            return void 0;
          },
          setContent: function() {
            return void 0;
          },
          registerInteractionHandler: function() {
            return void 0;
          },
          deregisterInteractionHandler: function() {
            return void 0;
          },
          notifyIconAction: function() {
            return void 0;
          }
        };
      },
      enumerable: false,
      configurable: true
    });
    MDCSelectIconFoundation2.prototype.init = function() {
      var e_1, _a2;
      this.savedTabIndex = this.adapter.getAttr("tabindex");
      try {
        for (var INTERACTION_EVENTS_1 = __values(INTERACTION_EVENTS), INTERACTION_EVENTS_1_1 = INTERACTION_EVENTS_1.next(); !INTERACTION_EVENTS_1_1.done; INTERACTION_EVENTS_1_1 = INTERACTION_EVENTS_1.next()) {
          var evtType = INTERACTION_EVENTS_1_1.value;
          this.adapter.registerInteractionHandler(evtType, this.interactionHandler);
        }
      } catch (e_1_1) {
        e_1 = { error: e_1_1 };
      } finally {
        try {
          if (INTERACTION_EVENTS_1_1 && !INTERACTION_EVENTS_1_1.done && (_a2 = INTERACTION_EVENTS_1.return))
            _a2.call(INTERACTION_EVENTS_1);
        } finally {
          if (e_1)
            throw e_1.error;
        }
      }
    };
    MDCSelectIconFoundation2.prototype.destroy = function() {
      var e_2, _a2;
      try {
        for (var INTERACTION_EVENTS_2 = __values(INTERACTION_EVENTS), INTERACTION_EVENTS_2_1 = INTERACTION_EVENTS_2.next(); !INTERACTION_EVENTS_2_1.done; INTERACTION_EVENTS_2_1 = INTERACTION_EVENTS_2.next()) {
          var evtType = INTERACTION_EVENTS_2_1.value;
          this.adapter.deregisterInteractionHandler(evtType, this.interactionHandler);
        }
      } catch (e_2_1) {
        e_2 = { error: e_2_1 };
      } finally {
        try {
          if (INTERACTION_EVENTS_2_1 && !INTERACTION_EVENTS_2_1.done && (_a2 = INTERACTION_EVENTS_2.return))
            _a2.call(INTERACTION_EVENTS_2);
        } finally {
          if (e_2)
            throw e_2.error;
        }
      }
    };
    MDCSelectIconFoundation2.prototype.setDisabled = function(disabled) {
      if (!this.savedTabIndex) {
        return;
      }
      if (disabled) {
        this.adapter.setAttr("tabindex", "-1");
        this.adapter.removeAttr("role");
      } else {
        this.adapter.setAttr("tabindex", this.savedTabIndex);
        this.adapter.setAttr("role", strings8.ICON_ROLE);
      }
    };
    MDCSelectIconFoundation2.prototype.setAriaLabel = function(label) {
      this.adapter.setAttr("aria-label", label);
    };
    MDCSelectIconFoundation2.prototype.setContent = function(content) {
      this.adapter.setContent(content);
    };
    MDCSelectIconFoundation2.prototype.handleInteraction = function(evt) {
      var isEnterKey = evt.key === "Enter" || evt.keyCode === 13;
      if (evt.type === "click" || isEnterKey) {
        this.adapter.notifyIconAction();
      }
    };
    return MDCSelectIconFoundation2;
  }(MDCFoundation);

  // node_modules/svelte/store/index.mjs
  var subscriber_queue = [];
  function writable(value, start = noop) {
    let stop;
    const subscribers = /* @__PURE__ */ new Set();
    function set(new_value) {
      if (safe_not_equal(value, new_value)) {
        value = new_value;
        if (stop) {
          const run_queue = !subscriber_queue.length;
          for (const subscriber of subscribers) {
            subscriber[1]();
            subscriber_queue.push(subscriber, value);
          }
          if (run_queue) {
            for (let i = 0; i < subscriber_queue.length; i += 2) {
              subscriber_queue[i][0](subscriber_queue[i + 1]);
            }
            subscriber_queue.length = 0;
          }
        }
      }
    }
    function update2(fn) {
      set(fn(value));
    }
    function subscribe2(run2, invalidate = noop) {
      const subscriber = [run2, invalidate];
      subscribers.add(subscriber);
      if (subscribers.size === 1) {
        stop = start(set) || noop;
      }
      run2(value);
      return () => {
        subscribers.delete(subscriber);
        if (subscribers.size === 0) {
          stop();
          stop = null;
        }
      };
    }
    return { set, update: update2, subscribe: subscribe2 };
  }

  // node_modules/@smui/common/dist/internal/classMap.js
  function classMap(classObj) {
    return Object.entries(classObj).filter(([name, value]) => name !== "" && value).map(([name]) => name).join(" ");
  }

  // node_modules/@smui/common/dist/internal/dispatch.js
  function dispatch(element2, eventType, detail, eventInit = { bubbles: true }, duplicateEventForMDC = false) {
    if (typeof Event !== "undefined" && element2) {
      const event = new CustomEvent(eventType, Object.assign(Object.assign({}, eventInit), { detail }));
      element2 === null || element2 === void 0 ? void 0 : element2.dispatchEvent(event);
      if (duplicateEventForMDC && eventType.startsWith("SMUI")) {
        const duplicateEvent = new CustomEvent(eventType.replace(/^SMUI/g, () => "MDC"), Object.assign(Object.assign({}, eventInit), { detail }));
        element2 === null || element2 === void 0 ? void 0 : element2.dispatchEvent(duplicateEvent);
        if (duplicateEvent.defaultPrevented) {
          event.preventDefault();
        }
      }
      return event;
    }
  }

  // node_modules/@smui/common/dist/internal/exclude.js
  function exclude(obj, keys) {
    let names = Object.getOwnPropertyNames(obj);
    const newObj = {};
    for (let i = 0; i < names.length; i++) {
      const name = names[i];
      const cashIndex = name.indexOf("$");
      if (cashIndex !== -1 && keys.indexOf(name.substring(0, cashIndex + 1)) !== -1) {
        continue;
      }
      if (keys.indexOf(name) !== -1) {
        continue;
      }
      newObj[name] = obj[name];
    }
    return newObj;
  }

  // node_modules/@smui/common/dist/internal/forwardEventsBuilder.js
  var oldModifierRegex = /^[a-z]+(?::(?:preventDefault|stopPropagation|passive|nonpassive|capture|once|self))+$/;
  var newModifierRegex = /^[^$]+(?:\$(?:preventDefault|stopPropagation|passive|nonpassive|capture|once|self))+$/;
  function forwardEventsBuilder(component) {
    let $on;
    let events = [];
    component.$on = (fullEventType, callback) => {
      let eventType = fullEventType;
      let destructor = () => {
      };
      if ($on) {
        destructor = $on(eventType, callback);
      } else {
        events.push([eventType, callback]);
      }
      const oldModifierMatch = eventType.match(oldModifierRegex);
      if (oldModifierMatch && console) {
        console.warn('Event modifiers in SMUI now use "$" instead of ":", so that all events can be bound with modifiers. Please update your event binding: ', eventType);
      }
      return () => {
        destructor();
      };
    };
    function forward(e) {
      bubble(component, e);
    }
    return (node) => {
      const destructors = [];
      const forwardDestructors = {};
      $on = (fullEventType, callback) => {
        let eventType = fullEventType;
        let handler = callback;
        let options = false;
        const oldModifierMatch = eventType.match(oldModifierRegex);
        const newModifierMatch = eventType.match(newModifierRegex);
        const modifierMatch = oldModifierMatch || newModifierMatch;
        if (eventType.match(/^SMUI:\w+:/)) {
          const newEventTypeParts = eventType.split(":");
          let newEventType = "";
          for (let i = 0; i < newEventTypeParts.length; i++) {
            newEventType += i === newEventTypeParts.length - 1 ? ":" + newEventTypeParts[i] : newEventTypeParts[i].split("-").map((value) => value.slice(0, 1).toUpperCase() + value.slice(1)).join("");
          }
          console.warn(`The event ${eventType.split("$")[0]} has been renamed to ${newEventType.split("$")[0]}.`);
          eventType = newEventType;
        }
        if (modifierMatch) {
          const parts = eventType.split(oldModifierMatch ? ":" : "$");
          eventType = parts[0];
          const eventOptions = Object.fromEntries(parts.slice(1).map((mod) => [mod, true]));
          if (eventOptions.passive) {
            options = options || {};
            options.passive = true;
          }
          if (eventOptions.nonpassive) {
            options = options || {};
            options.passive = false;
          }
          if (eventOptions.capture) {
            options = options || {};
            options.capture = true;
          }
          if (eventOptions.once) {
            options = options || {};
            options.once = true;
          }
          if (eventOptions.preventDefault) {
            handler = prevent_default(handler);
          }
          if (eventOptions.stopPropagation) {
            handler = stop_propagation(handler);
          }
        }
        const off = listen(node, eventType, handler, options);
        const destructor = () => {
          off();
          const idx = destructors.indexOf(destructor);
          if (idx > -1) {
            destructors.splice(idx, 1);
          }
        };
        destructors.push(destructor);
        if (!(eventType in forwardDestructors)) {
          forwardDestructors[eventType] = listen(node, eventType, forward);
        }
        return destructor;
      };
      for (let i = 0; i < events.length; i++) {
        $on(events[i][0], events[i][1]);
      }
      return {
        destroy: () => {
          for (let i = 0; i < destructors.length; i++) {
            destructors[i]();
          }
          for (let entry of Object.entries(forwardDestructors)) {
            entry[1]();
          }
        }
      };
    };
  }

  // node_modules/@smui/common/dist/internal/prefixFilter.js
  function prefixFilter(obj, prefix) {
    let names = Object.getOwnPropertyNames(obj);
    const newObj = {};
    for (let i = 0; i < names.length; i++) {
      const name = names[i];
      if (name.substring(0, prefix.length) === prefix) {
        newObj[name.substring(prefix.length)] = obj[name];
      }
    }
    return newObj;
  }

  // node_modules/@smui/common/dist/internal/useActions.js
  function useActions(node, actions) {
    let actionReturns = [];
    if (actions) {
      for (let i = 0; i < actions.length; i++) {
        const actionEntry = actions[i];
        const action = Array.isArray(actionEntry) ? actionEntry[0] : actionEntry;
        if (Array.isArray(actionEntry) && actionEntry.length > 1) {
          actionReturns.push(action(node, actionEntry[1]));
        } else {
          actionReturns.push(action(node));
        }
      }
    }
    return {
      update(actions2) {
        if ((actions2 && actions2.length || 0) != actionReturns.length) {
          throw new Error("You must not change the length of an actions array.");
        }
        if (actions2) {
          for (let i = 0; i < actions2.length; i++) {
            const returnEntry = actionReturns[i];
            if (returnEntry && returnEntry.update) {
              const actionEntry = actions2[i];
              if (Array.isArray(actionEntry) && actionEntry.length > 1) {
                returnEntry.update(actionEntry[1]);
              } else {
                returnEntry.update();
              }
            }
          }
        }
      },
      destroy() {
        for (let i = 0; i < actionReturns.length; i++) {
          const returnEntry = actionReturns[i];
          if (returnEntry && returnEntry.destroy) {
            returnEntry.destroy();
          }
        }
      }
    };
  }

  // node_modules/@smui/ripple/dist/Ripple.js
  var { applyPassive: applyPassive2 } = events_exports;
  var { matches: matches2 } = ponyfill_exports;
  function Ripple(node, { ripple = true, surface = false, unbounded = false, disabled = false, color, active, rippleElement, eventTarget, activeTarget, addClass = (className) => node.classList.add(className), removeClass = (className) => node.classList.remove(className), addStyle = (name, value) => node.style.setProperty(name, value), initPromise = Promise.resolve() } = {}) {
    let instance13;
    let addLayoutListener = getContext("SMUI:addLayoutListener");
    let removeLayoutListener;
    let oldActive = active;
    let oldEventTarget = eventTarget;
    let oldActiveTarget = activeTarget;
    function handleProps() {
      if (surface) {
        addClass("mdc-ripple-surface");
        if (color === "primary") {
          addClass("smui-ripple-surface--primary");
          removeClass("smui-ripple-surface--secondary");
        } else if (color === "secondary") {
          removeClass("smui-ripple-surface--primary");
          addClass("smui-ripple-surface--secondary");
        } else {
          removeClass("smui-ripple-surface--primary");
          removeClass("smui-ripple-surface--secondary");
        }
      } else {
        removeClass("mdc-ripple-surface");
        removeClass("smui-ripple-surface--primary");
        removeClass("smui-ripple-surface--secondary");
      }
      if (instance13 && oldActive !== active) {
        oldActive = active;
        if (active) {
          instance13.activate();
        } else if (active === false) {
          instance13.deactivate();
        }
      }
      if (ripple && !instance13) {
        instance13 = new MDCRippleFoundation({
          addClass,
          browserSupportsCssVars: () => util_exports.supportsCssVariables(window),
          computeBoundingRect: () => (rippleElement || node).getBoundingClientRect(),
          containsEventTarget: (target) => node.contains(target),
          deregisterDocumentInteractionHandler: (evtType, handler) => document.documentElement.removeEventListener(evtType, handler, applyPassive2()),
          deregisterInteractionHandler: (evtType, handler) => (eventTarget || node).removeEventListener(evtType, handler, applyPassive2()),
          deregisterResizeHandler: (handler) => window.removeEventListener("resize", handler),
          getWindowPageOffset: () => ({
            x: window.pageXOffset,
            y: window.pageYOffset
          }),
          isSurfaceActive: () => active == null ? matches2(activeTarget || node, ":active") : active,
          isSurfaceDisabled: () => !!disabled,
          isUnbounded: () => !!unbounded,
          registerDocumentInteractionHandler: (evtType, handler) => document.documentElement.addEventListener(evtType, handler, applyPassive2()),
          registerInteractionHandler: (evtType, handler) => (eventTarget || node).addEventListener(evtType, handler, applyPassive2()),
          registerResizeHandler: (handler) => window.addEventListener("resize", handler),
          removeClass,
          updateCssVariable: addStyle
        });
        initPromise.then(() => {
          if (instance13) {
            instance13.init();
            instance13.setUnbounded(unbounded);
          }
        });
      } else if (instance13 && !ripple) {
        initPromise.then(() => {
          if (instance13) {
            instance13.destroy();
            instance13 = void 0;
          }
        });
      }
      if (instance13 && (oldEventTarget !== eventTarget || oldActiveTarget !== activeTarget)) {
        oldEventTarget = eventTarget;
        oldActiveTarget = activeTarget;
        instance13.destroy();
        requestAnimationFrame(() => {
          if (instance13) {
            instance13.init();
            instance13.setUnbounded(unbounded);
          }
        });
      }
      if (!ripple && unbounded) {
        addClass("mdc-ripple-upgraded--unbounded");
      }
    }
    handleProps();
    if (addLayoutListener) {
      removeLayoutListener = addLayoutListener(layout);
    }
    function layout() {
      if (instance13) {
        instance13.layout();
      }
    }
    return {
      update(props) {
        ({
          ripple,
          surface,
          unbounded,
          disabled,
          color,
          active,
          rippleElement,
          eventTarget,
          activeTarget,
          addClass,
          removeClass,
          addStyle,
          initPromise
        } = Object.assign({ ripple: true, surface: false, unbounded: false, disabled: false, color: void 0, active: void 0, rippleElement: void 0, eventTarget: void 0, activeTarget: void 0, addClass: (className) => node.classList.add(className), removeClass: (className) => node.classList.remove(className), addStyle: (name, value) => node.style.setProperty(name, value), initPromise: Promise.resolve() }, props));
        handleProps();
      },
      destroy() {
        if (instance13) {
          instance13.destroy();
          instance13 = void 0;
          removeClass("mdc-ripple-surface");
          removeClass("smui-ripple-surface--primary");
          removeClass("smui-ripple-surface--secondary");
        }
        if (removeLayoutListener) {
          removeLayoutListener();
        }
      }
    };
  }

  // node_modules/@smui/ripple/dist/index.js
  var dist_default = Ripple;

  // node_modules/@smui/menu-surface/dist/MenuSurface.svelte
  var { document: document_1 } = globals;
  function create_fragment(ctx) {
    let t;
    let div;
    let div_class_value;
    let div_style_value;
    let useActions_action;
    let forwardEvents_action;
    let current;
    let mounted;
    let dispose;
    const default_slot_template = ctx[31].default;
    const default_slot = create_slot(default_slot_template, ctx, ctx[30], null);
    let div_levels = [
      {
        class: div_class_value = classMap({
          [ctx[2]]: true,
          "mdc-menu-surface": true,
          "mdc-menu-surface--fixed": ctx[5],
          "mdc-menu-surface--open": ctx[4],
          "smui-menu-surface--static": ctx[4],
          "mdc-menu-surface--fullwidth": ctx[7],
          ...ctx[10]
        })
      },
      {
        style: div_style_value = Object.entries(ctx[11]).map(func).concat([ctx[3]]).join(" ")
      },
      ctx[13]
    ];
    let div_data = {};
    for (let i = 0; i < div_levels.length; i += 1) {
      div_data = assign(div_data, div_levels[i]);
    }
    return {
      c() {
        t = space();
        div = element("div");
        if (default_slot)
          default_slot.c();
        set_attributes(div, div_data);
      },
      m(target, anchor) {
        insert(target, t, anchor);
        insert(target, div, anchor);
        if (default_slot) {
          default_slot.m(div, null);
        }
        ctx[33](div);
        current = true;
        if (!mounted) {
          dispose = [
            listen(document_1.body, "click", ctx[32], true),
            action_destroyer(useActions_action = useActions.call(null, div, ctx[1])),
            action_destroyer(forwardEvents_action = ctx[12].call(null, div)),
            listen(div, "keydown", ctx[34])
          ];
          mounted = true;
        }
      },
      p(ctx2, dirty) {
        if (default_slot) {
          if (default_slot.p && (!current || dirty[0] & 1073741824)) {
            update_slot_base(default_slot, default_slot_template, ctx2, ctx2[30], !current ? get_all_dirty_from_scope(ctx2[30]) : get_slot_changes(default_slot_template, ctx2[30], dirty, null), null);
          }
        }
        set_attributes(div, div_data = get_spread_update(div_levels, [
          (!current || dirty[0] & 1204 && div_class_value !== (div_class_value = classMap({
            [ctx2[2]]: true,
            "mdc-menu-surface": true,
            "mdc-menu-surface--fixed": ctx2[5],
            "mdc-menu-surface--open": ctx2[4],
            "smui-menu-surface--static": ctx2[4],
            "mdc-menu-surface--fullwidth": ctx2[7],
            ...ctx2[10]
          }))) && { class: div_class_value },
          (!current || dirty[0] & 2056 && div_style_value !== (div_style_value = Object.entries(ctx2[11]).map(func).concat([ctx2[3]]).join(" "))) && { style: div_style_value },
          dirty[0] & 8192 && ctx2[13]
        ]));
        if (useActions_action && is_function(useActions_action.update) && dirty[0] & 2)
          useActions_action.update.call(null, ctx2[1]);
      },
      i(local) {
        if (current)
          return;
        transition_in(default_slot, local);
        current = true;
      },
      o(local) {
        transition_out(default_slot, local);
        current = false;
      },
      d(detaching) {
        if (detaching)
          detach(t);
        if (detaching)
          detach(div);
        if (default_slot)
          default_slot.d(detaching);
        ctx[33](null);
        mounted = false;
        run_all(dispose);
      }
    };
  }
  var func = ([name, value]) => `${name}: ${value};`;
  function instance_1($$self, $$props, $$invalidate) {
    const omit_props_names = [
      "use",
      "class",
      "style",
      "static",
      "anchor",
      "fixed",
      "open",
      "managed",
      "fullWidth",
      "quickOpen",
      "anchorElement",
      "anchorCorner",
      "anchorMargin",
      "maxHeight",
      "horizontallyCenteredOnViewport",
      "isOpen",
      "setOpen",
      "setAbsolutePosition",
      "setIsHoisted",
      "isFixed",
      "getElement"
    ];
    let $$restProps = compute_rest_props($$props, omit_props_names);
    let { $$slots: slots = {}, $$scope } = $$props;
    var _a2, _b2, _c;
    const forwardEvents = forwardEventsBuilder(get_current_component());
    let { use = [] } = $$props;
    let { class: className = "" } = $$props;
    let { style = "" } = $$props;
    let { static: isStatic = false } = $$props;
    let { anchor = true } = $$props;
    let { fixed = false } = $$props;
    let { open = isStatic } = $$props;
    let { managed = false } = $$props;
    let { fullWidth = false } = $$props;
    let { quickOpen = false } = $$props;
    let { anchorElement = void 0 } = $$props;
    let { anchorCorner = void 0 } = $$props;
    let { anchorMargin = { top: 0, right: 0, bottom: 0, left: 0 } } = $$props;
    let { maxHeight = 0 } = $$props;
    let { horizontallyCenteredOnViewport = false } = $$props;
    let element2;
    let instance13;
    let internalClasses = {};
    let internalStyles = {};
    let previousFocus = void 0;
    setContext("SMUI:list:role", "menu");
    setContext("SMUI:list:item:role", "menuitem");
    const iCorner = Corner;
    onMount(() => {
      $$invalidate(9, instance13 = new MDCMenuSurfaceFoundation({
        addClass,
        removeClass,
        hasClass,
        hasAnchor: () => !!anchorElement,
        notifyClose: () => {
          if (!managed) {
            $$invalidate(0, open = isStatic);
          }
          if (!open) {
            dispatch(element2, "SMUIMenuSurface:closed", void 0, void 0, true);
          }
        },
        notifyClosing: () => {
          if (!managed) {
            $$invalidate(0, open = isStatic);
          }
          if (!open) {
            dispatch(element2, "SMUIMenuSurface:closing", void 0, void 0, true);
          }
        },
        notifyOpen: () => {
          if (!managed) {
            $$invalidate(0, open = true);
          }
          if (open) {
            dispatch(element2, "SMUIMenuSurface:opened", void 0, void 0, true);
          }
        },
        isElementInContainer: (el) => element2.contains(el),
        isRtl: () => getComputedStyle(element2).getPropertyValue("direction") === "rtl",
        setTransformOrigin: (origin) => {
          $$invalidate(11, internalStyles["transform-origin"] = origin, internalStyles);
        },
        isFocused: () => document.activeElement === element2,
        saveFocus: () => {
          var _a3;
          previousFocus = (_a3 = document.activeElement) !== null && _a3 !== void 0 ? _a3 : void 0;
        },
        restoreFocus: () => {
          if (element2.contains(document.activeElement) && previousFocus && "focus" in previousFocus) {
            previousFocus.focus();
          }
        },
        getInnerDimensions: () => {
          return {
            width: element2.offsetWidth,
            height: element2.offsetHeight
          };
        },
        getAnchorDimensions: () => anchorElement ? anchorElement.getBoundingClientRect() : null,
        getWindowDimensions: () => {
          return {
            width: window.innerWidth,
            height: window.innerHeight
          };
        },
        getBodyDimensions: () => {
          return {
            width: document.body.clientWidth,
            height: document.body.clientHeight
          };
        },
        getWindowScroll: () => {
          return {
            x: window.pageXOffset,
            y: window.pageYOffset
          };
        },
        setPosition: (position) => {
          $$invalidate(11, internalStyles.left = "left" in position ? `${position.left}px` : "", internalStyles);
          $$invalidate(11, internalStyles.right = "right" in position ? `${position.right}px` : "", internalStyles);
          $$invalidate(11, internalStyles.top = "top" in position ? `${position.top}px` : "", internalStyles);
          $$invalidate(11, internalStyles.bottom = "bottom" in position ? `${position.bottom}px` : "", internalStyles);
        },
        setMaxHeight: (height) => {
          $$invalidate(11, internalStyles.maxHeight = height, internalStyles);
        }
      }));
      const accessor = {
        get open() {
          return open;
        },
        set open(value) {
          $$invalidate(0, open = value);
        },
        closeProgrammatic
      };
      dispatch(element2, "SMUIMenuSurface:mount", accessor);
      instance13.init();
      return () => {
        var _a3;
        const isHoisted = instance13.isHoistedElement;
        instance13.destroy();
        if (isHoisted) {
          (_a3 = element2.parentNode) === null || _a3 === void 0 ? void 0 : _a3.removeChild(element2);
        }
      };
    });
    onDestroy(() => {
      var _a3;
      if (anchor) {
        element2 && ((_a3 = element2.parentElement) === null || _a3 === void 0 ? void 0 : _a3.classList.remove("mdc-menu-surface--anchor"));
      }
    });
    function hasClass(className2) {
      return className2 in internalClasses ? internalClasses[className2] : getElement().classList.contains(className2);
    }
    function addClass(className2) {
      if (!internalClasses[className2]) {
        $$invalidate(10, internalClasses[className2] = true, internalClasses);
      }
    }
    function removeClass(className2) {
      if (!(className2 in internalClasses) || internalClasses[className2]) {
        $$invalidate(10, internalClasses[className2] = false, internalClasses);
      }
    }
    function closeProgrammatic(skipRestoreFocus) {
      instance13.close(skipRestoreFocus);
      $$invalidate(0, open = false);
    }
    function isOpen() {
      return open;
    }
    function setOpen(value) {
      $$invalidate(0, open = value);
    }
    function setAbsolutePosition(x, y) {
      return instance13.setAbsolutePosition(x, y);
    }
    function setIsHoisted(isHoisted) {
      return instance13.setIsHoisted(isHoisted);
    }
    function isFixed() {
      return instance13.isFixed();
    }
    function getElement() {
      return element2;
    }
    const click_handler = (event) => instance13 && open && !managed && instance13.handleBodyClick(event);
    function div_binding($$value) {
      binding_callbacks[$$value ? "unshift" : "push"](() => {
        element2 = $$value;
        $$invalidate(8, element2);
      });
    }
    const keydown_handler = (event) => instance13 && instance13.handleKeydown(event);
    $$self.$$set = ($$new_props) => {
      $$props = assign(assign({}, $$props), exclude_internal_props($$new_props));
      $$invalidate(13, $$restProps = compute_rest_props($$props, omit_props_names));
      if ("use" in $$new_props)
        $$invalidate(1, use = $$new_props.use);
      if ("class" in $$new_props)
        $$invalidate(2, className = $$new_props.class);
      if ("style" in $$new_props)
        $$invalidate(3, style = $$new_props.style);
      if ("static" in $$new_props)
        $$invalidate(4, isStatic = $$new_props.static);
      if ("anchor" in $$new_props)
        $$invalidate(15, anchor = $$new_props.anchor);
      if ("fixed" in $$new_props)
        $$invalidate(5, fixed = $$new_props.fixed);
      if ("open" in $$new_props)
        $$invalidate(0, open = $$new_props.open);
      if ("managed" in $$new_props)
        $$invalidate(6, managed = $$new_props.managed);
      if ("fullWidth" in $$new_props)
        $$invalidate(7, fullWidth = $$new_props.fullWidth);
      if ("quickOpen" in $$new_props)
        $$invalidate(16, quickOpen = $$new_props.quickOpen);
      if ("anchorElement" in $$new_props)
        $$invalidate(14, anchorElement = $$new_props.anchorElement);
      if ("anchorCorner" in $$new_props)
        $$invalidate(17, anchorCorner = $$new_props.anchorCorner);
      if ("anchorMargin" in $$new_props)
        $$invalidate(18, anchorMargin = $$new_props.anchorMargin);
      if ("maxHeight" in $$new_props)
        $$invalidate(19, maxHeight = $$new_props.maxHeight);
      if ("horizontallyCenteredOnViewport" in $$new_props)
        $$invalidate(20, horizontallyCenteredOnViewport = $$new_props.horizontallyCenteredOnViewport);
      if ("$$scope" in $$new_props)
        $$invalidate(30, $$scope = $$new_props.$$scope);
    };
    $$self.$$.update = () => {
      if ($$self.$$.dirty[0] & 939557120) {
        $:
          if (element2 && anchor && !($$invalidate(27, _a2 = element2.parentElement) === null || _a2 === void 0 ? void 0 : _a2.classList.contains("mdc-menu-surface--anchor"))) {
            $$invalidate(28, _b2 = element2.parentElement) === null || _b2 === void 0 ? void 0 : _b2.classList.add("mdc-menu-surface--anchor");
            $$invalidate(14, anchorElement = $$invalidate(29, _c = element2.parentElement) !== null && _c !== void 0 ? _c : void 0);
          }
      }
      if ($$self.$$.dirty[0] & 513) {
        $:
          if (instance13 && instance13.isOpen() !== open) {
            if (open) {
              instance13.open();
            } else {
              instance13.close();
            }
          }
      }
      if ($$self.$$.dirty[0] & 66048) {
        $:
          if (instance13) {
            instance13.setQuickOpen(quickOpen);
          }
      }
      if ($$self.$$.dirty[0] & 544) {
        $:
          if (instance13) {
            instance13.setFixedPosition(fixed);
          }
      }
      if ($$self.$$.dirty[0] & 524800) {
        $:
          if (instance13 && maxHeight > 0) {
            instance13.setMaxHeight(maxHeight);
          }
      }
      if ($$self.$$.dirty[0] & 1049088) {
        $:
          if (instance13) {
            instance13.setIsHorizontallyCenteredOnViewport(horizontallyCenteredOnViewport);
          }
      }
      if ($$self.$$.dirty[0] & 131584) {
        $:
          if (instance13 && anchorCorner != null) {
            if (typeof anchorCorner === "string") {
              instance13.setAnchorCorner(iCorner[anchorCorner]);
            } else {
              instance13.setAnchorCorner(anchorCorner);
            }
          }
      }
      if ($$self.$$.dirty[0] & 262656) {
        $:
          if (instance13) {
            instance13.setAnchorMargin(anchorMargin);
          }
      }
    };
    return [
      open,
      use,
      className,
      style,
      isStatic,
      fixed,
      managed,
      fullWidth,
      element2,
      instance13,
      internalClasses,
      internalStyles,
      forwardEvents,
      $$restProps,
      anchorElement,
      anchor,
      quickOpen,
      anchorCorner,
      anchorMargin,
      maxHeight,
      horizontallyCenteredOnViewport,
      isOpen,
      setOpen,
      setAbsolutePosition,
      setIsHoisted,
      isFixed,
      getElement,
      _a2,
      _b2,
      _c,
      $$scope,
      slots,
      click_handler,
      div_binding,
      keydown_handler
    ];
  }
  var MenuSurface = class extends SvelteComponent {
    constructor(options) {
      super();
      init(this, options, instance_1, create_fragment, safe_not_equal, {
        use: 1,
        class: 2,
        style: 3,
        static: 4,
        anchor: 15,
        fixed: 5,
        open: 0,
        managed: 6,
        fullWidth: 7,
        quickOpen: 16,
        anchorElement: 14,
        anchorCorner: 17,
        anchorMargin: 18,
        maxHeight: 19,
        horizontallyCenteredOnViewport: 20,
        isOpen: 21,
        setOpen: 22,
        setAbsolutePosition: 23,
        setIsHoisted: 24,
        isFixed: 25,
        getElement: 26
      }, null, [-1, -1]);
    }
    get isOpen() {
      return this.$$.ctx[21];
    }
    get setOpen() {
      return this.$$.ctx[22];
    }
    get setAbsolutePosition() {
      return this.$$.ctx[23];
    }
    get setIsHoisted() {
      return this.$$.ctx[24];
    }
    get isFixed() {
      return this.$$.ctx[25];
    }
    get getElement() {
      return this.$$.ctx[26];
    }
  };
  var MenuSurface_default = MenuSurface;

  // node_modules/@smui/menu-surface/dist/Anchor.js
  function Anchor(node, { addClass = (className) => node.classList.add(className), removeClass = (className) => node.classList.remove(className) } = {}) {
    addClass("mdc-menu-surface--anchor");
    return {
      destroy() {
        removeClass("mdc-menu-surface--anchor");
      }
    };
  }

  // node_modules/@smui/menu-surface/dist/index.js
  var dist_default2 = MenuSurface_default;

  // node_modules/@smui/menu/dist/Menu.svelte
  function create_default_slot(ctx) {
    let current;
    const default_slot_template = ctx[16].default;
    const default_slot = create_slot(default_slot_template, ctx, ctx[21], null);
    return {
      c() {
        if (default_slot)
          default_slot.c();
      },
      m(target, anchor) {
        if (default_slot) {
          default_slot.m(target, anchor);
        }
        current = true;
      },
      p(ctx2, dirty) {
        if (default_slot) {
          if (default_slot.p && (!current || dirty & 2097152)) {
            update_slot_base(default_slot, default_slot_template, ctx2, ctx2[21], !current ? get_all_dirty_from_scope(ctx2[21]) : get_slot_changes(default_slot_template, ctx2[21], dirty, null), null);
          }
        }
      },
      i(local) {
        if (current)
          return;
        transition_in(default_slot, local);
        current = true;
      },
      o(local) {
        transition_out(default_slot, local);
        current = false;
      },
      d(detaching) {
        if (default_slot)
          default_slot.d(detaching);
      }
    };
  }
  function create_fragment2(ctx) {
    let menusurface;
    let updating_open;
    let current;
    const menusurface_spread_levels = [
      { use: ctx[5] },
      {
        class: classMap({
          [ctx[1]]: true,
          "mdc-menu": true
        })
      },
      ctx[9]
    ];
    function menusurface_open_binding(value) {
      ctx[18](value);
    }
    let menusurface_props = {
      $$slots: { default: [create_default_slot] },
      $$scope: { ctx }
    };
    for (let i = 0; i < menusurface_spread_levels.length; i += 1) {
      menusurface_props = assign(menusurface_props, menusurface_spread_levels[i]);
    }
    if (ctx[0] !== void 0) {
      menusurface_props.open = ctx[0];
    }
    menusurface = new dist_default2({ props: menusurface_props });
    ctx[17](menusurface);
    binding_callbacks.push(() => bind(menusurface, "open", menusurface_open_binding));
    menusurface.$on("SMUIMenuSurface:mount", ctx[7]);
    menusurface.$on("SMUIList:mount", ctx[8]);
    menusurface.$on("SMUIMenuSurface:opened", ctx[19]);
    menusurface.$on("keydown", ctx[6]);
    menusurface.$on("SMUIList:action", ctx[20]);
    return {
      c() {
        create_component(menusurface.$$.fragment);
      },
      m(target, anchor) {
        mount_component(menusurface, target, anchor);
        current = true;
      },
      p(ctx2, [dirty]) {
        const menusurface_changes = dirty & 546 ? get_spread_update(menusurface_spread_levels, [
          dirty & 32 && { use: ctx2[5] },
          dirty & 2 && {
            class: classMap({
              [ctx2[1]]: true,
              "mdc-menu": true
            })
          },
          dirty & 512 && get_spread_object(ctx2[9])
        ]) : {};
        if (dirty & 2097152) {
          menusurface_changes.$$scope = { dirty, ctx: ctx2 };
        }
        if (!updating_open && dirty & 1) {
          updating_open = true;
          menusurface_changes.open = ctx2[0];
          add_flush_callback(() => updating_open = false);
        }
        menusurface.$set(menusurface_changes);
      },
      i(local) {
        if (current)
          return;
        transition_in(menusurface.$$.fragment, local);
        current = true;
      },
      o(local) {
        transition_out(menusurface.$$.fragment, local);
        current = false;
      },
      d(detaching) {
        ctx[17](null);
        destroy_component(menusurface, detaching);
      }
    };
  }
  function instance_12($$self, $$props, $$invalidate) {
    let usePass;
    const omit_props_names = [
      "use",
      "class",
      "open",
      "isOpen",
      "setOpen",
      "setDefaultFocusState",
      "getSelectedIndex",
      "getElement"
    ];
    let $$restProps = compute_rest_props($$props, omit_props_names);
    let { $$slots: slots = {}, $$scope } = $$props;
    const { closest: closest2 } = ponyfill_exports;
    const forwardEvents = forwardEventsBuilder(get_current_component());
    let { use = [] } = $$props;
    let { class: className = "" } = $$props;
    let { open = false } = $$props;
    let element2;
    let instance13;
    let menuSurfaceAccessor;
    let listAccessor;
    onMount(() => {
      $$invalidate(3, instance13 = new MDCMenuFoundation({
        addClassToElementAtIndex: (index, className2) => {
          listAccessor.addClassForElementIndex(index, className2);
        },
        removeClassFromElementAtIndex: (index, className2) => {
          listAccessor.removeClassForElementIndex(index, className2);
        },
        addAttributeToElementAtIndex: (index, attr2, value) => {
          listAccessor.setAttributeForElementIndex(index, attr2, value);
        },
        removeAttributeFromElementAtIndex: (index, attr2) => {
          listAccessor.removeAttributeForElementIndex(index, attr2);
        },
        getAttributeFromElementAtIndex: (index, attr2) => listAccessor.getAttributeFromElementIndex(index, attr2),
        elementContainsClass: (element3, className2) => element3.classList.contains(className2),
        closeSurface: (skipRestoreFocus) => menuSurfaceAccessor.closeProgrammatic(skipRestoreFocus),
        getElementIndex: (element3) => listAccessor.getOrderedList().map((accessor) => accessor.element).indexOf(element3),
        notifySelected: (evtData) => dispatch(getElement(), "SMUIMenu:selected", {
          index: evtData.index,
          item: listAccessor.getOrderedList()[evtData.index].element
        }, void 0, true),
        getMenuItemCount: () => listAccessor.items.length,
        focusItemAtIndex: (index) => listAccessor.focusItemAtIndex(index),
        focusListRoot: () => "focus" in listAccessor.element && listAccessor.element.focus(),
        isSelectableItemAtIndex: (index) => !!closest2(listAccessor.getOrderedList()[index].element, `.${cssClasses5.MENU_SELECTION_GROUP}`),
        getSelectedSiblingOfItemAtIndex: (index) => {
          const orderedList = listAccessor.getOrderedList();
          const selectionGroupEl = closest2(orderedList[index].element, `.${cssClasses5.MENU_SELECTION_GROUP}`);
          const selectedItemEl = selectionGroupEl === null || selectionGroupEl === void 0 ? void 0 : selectionGroupEl.querySelector(`.${cssClasses5.MENU_SELECTED_LIST_ITEM}`);
          return selectedItemEl ? orderedList.map((item) => item.element).indexOf(selectedItemEl) : -1;
        }
      }));
      dispatch(getElement(), "SMUIMenu:mount", instance13);
      instance13.init();
      return () => {
        instance13.destroy();
      };
    });
    function handleKeydown2(event) {
      instance13 && instance13.handleKeydown(event);
    }
    function handleMenuSurfaceAccessor(event) {
      if (!menuSurfaceAccessor) {
        menuSurfaceAccessor = event.detail;
      }
    }
    function handleListAccessor(event) {
      if (!listAccessor) {
        $$invalidate(4, listAccessor = event.detail);
      }
    }
    function isOpen() {
      return open;
    }
    function setOpen(value) {
      $$invalidate(0, open = value);
    }
    function setDefaultFocusState(focusState) {
      instance13.setDefaultFocusState(focusState);
    }
    function getSelectedIndex() {
      return instance13.getSelectedIndex();
    }
    function getElement() {
      return element2.getElement();
    }
    function menusurface_binding($$value) {
      binding_callbacks[$$value ? "unshift" : "push"](() => {
        element2 = $$value;
        $$invalidate(2, element2);
      });
    }
    function menusurface_open_binding(value) {
      open = value;
      $$invalidate(0, open);
    }
    const SMUIMenuSurface_opened_handler = () => instance13 && instance13.handleMenuSurfaceOpened();
    const SMUIList_action_handler = (event) => instance13 && instance13.handleItemAction(listAccessor.getOrderedList()[event.detail.index].element);
    $$self.$$set = ($$new_props) => {
      $$props = assign(assign({}, $$props), exclude_internal_props($$new_props));
      $$invalidate(9, $$restProps = compute_rest_props($$props, omit_props_names));
      if ("use" in $$new_props)
        $$invalidate(10, use = $$new_props.use);
      if ("class" in $$new_props)
        $$invalidate(1, className = $$new_props.class);
      if ("open" in $$new_props)
        $$invalidate(0, open = $$new_props.open);
      if ("$$scope" in $$new_props)
        $$invalidate(21, $$scope = $$new_props.$$scope);
    };
    $$self.$$.update = () => {
      if ($$self.$$.dirty & 1024) {
        $:
          $$invalidate(5, usePass = [forwardEvents, ...use]);
      }
    };
    return [
      open,
      className,
      element2,
      instance13,
      listAccessor,
      usePass,
      handleKeydown2,
      handleMenuSurfaceAccessor,
      handleListAccessor,
      $$restProps,
      use,
      isOpen,
      setOpen,
      setDefaultFocusState,
      getSelectedIndex,
      getElement,
      slots,
      menusurface_binding,
      menusurface_open_binding,
      SMUIMenuSurface_opened_handler,
      SMUIList_action_handler,
      $$scope
    ];
  }
  var Menu = class extends SvelteComponent {
    constructor(options) {
      super();
      init(this, options, instance_12, create_fragment2, safe_not_equal, {
        use: 10,
        class: 1,
        open: 0,
        isOpen: 11,
        setOpen: 12,
        setDefaultFocusState: 13,
        getSelectedIndex: 14,
        getElement: 15
      });
    }
    get isOpen() {
      return this.$$.ctx[11];
    }
    get setOpen() {
      return this.$$.ctx[12];
    }
    get setDefaultFocusState() {
      return this.$$.ctx[13];
    }
    get getSelectedIndex() {
      return this.$$.ctx[14];
    }
    get getElement() {
      return this.$$.ctx[15];
    }
  };
  var Menu_default = Menu;

  // node_modules/@smui/common/dist/elements/Div.svelte
  function create_fragment3(ctx) {
    let div;
    let useActions_action;
    let forwardEvents_action;
    let current;
    let mounted;
    let dispose;
    const default_slot_template = ctx[6].default;
    const default_slot = create_slot(default_slot_template, ctx, ctx[5], null);
    let div_levels = [ctx[3]];
    let div_data = {};
    for (let i = 0; i < div_levels.length; i += 1) {
      div_data = assign(div_data, div_levels[i]);
    }
    return {
      c() {
        div = element("div");
        if (default_slot)
          default_slot.c();
        set_attributes(div, div_data);
      },
      m(target, anchor) {
        insert(target, div, anchor);
        if (default_slot) {
          default_slot.m(div, null);
        }
        ctx[7](div);
        current = true;
        if (!mounted) {
          dispose = [
            action_destroyer(useActions_action = useActions.call(null, div, ctx[0])),
            action_destroyer(forwardEvents_action = ctx[2].call(null, div))
          ];
          mounted = true;
        }
      },
      p(ctx2, [dirty]) {
        if (default_slot) {
          if (default_slot.p && (!current || dirty & 32)) {
            update_slot_base(default_slot, default_slot_template, ctx2, ctx2[5], !current ? get_all_dirty_from_scope(ctx2[5]) : get_slot_changes(default_slot_template, ctx2[5], dirty, null), null);
          }
        }
        set_attributes(div, div_data = get_spread_update(div_levels, [dirty & 8 && ctx2[3]]));
        if (useActions_action && is_function(useActions_action.update) && dirty & 1)
          useActions_action.update.call(null, ctx2[0]);
      },
      i(local) {
        if (current)
          return;
        transition_in(default_slot, local);
        current = true;
      },
      o(local) {
        transition_out(default_slot, local);
        current = false;
      },
      d(detaching) {
        if (detaching)
          detach(div);
        if (default_slot)
          default_slot.d(detaching);
        ctx[7](null);
        mounted = false;
        run_all(dispose);
      }
    };
  }
  function instance($$self, $$props, $$invalidate) {
    const omit_props_names = ["use", "getElement"];
    let $$restProps = compute_rest_props($$props, omit_props_names);
    let { $$slots: slots = {}, $$scope } = $$props;
    let { use = [] } = $$props;
    const forwardEvents = forwardEventsBuilder(get_current_component());
    let element2;
    function getElement() {
      return element2;
    }
    function div_binding($$value) {
      binding_callbacks[$$value ? "unshift" : "push"](() => {
        element2 = $$value;
        $$invalidate(1, element2);
      });
    }
    $$self.$$set = ($$new_props) => {
      $$props = assign(assign({}, $$props), exclude_internal_props($$new_props));
      $$invalidate(3, $$restProps = compute_rest_props($$props, omit_props_names));
      if ("use" in $$new_props)
        $$invalidate(0, use = $$new_props.use);
      if ("$$scope" in $$new_props)
        $$invalidate(5, $$scope = $$new_props.$$scope);
    };
    return [
      use,
      element2,
      forwardEvents,
      $$restProps,
      getElement,
      $$scope,
      slots,
      div_binding
    ];
  }
  var Div = class extends SvelteComponent {
    constructor(options) {
      super();
      init(this, options, instance, create_fragment3, safe_not_equal, { use: 0, getElement: 4 });
    }
    get getElement() {
      return this.$$.ctx[4];
    }
  };
  var Div_default = Div;

  // node_modules/@smui/common/dist/classadder/ClassAdder.svelte
  function create_default_slot2(ctx) {
    let current;
    const default_slot_template = ctx[10].default;
    const default_slot = create_slot(default_slot_template, ctx, ctx[12], null);
    return {
      c() {
        if (default_slot)
          default_slot.c();
      },
      m(target, anchor) {
        if (default_slot) {
          default_slot.m(target, anchor);
        }
        current = true;
      },
      p(ctx2, dirty) {
        if (default_slot) {
          if (default_slot.p && (!current || dirty & 4096)) {
            update_slot_base(default_slot, default_slot_template, ctx2, ctx2[12], !current ? get_all_dirty_from_scope(ctx2[12]) : get_slot_changes(default_slot_template, ctx2[12], dirty, null), null);
          }
        }
      },
      i(local) {
        if (current)
          return;
        transition_in(default_slot, local);
        current = true;
      },
      o(local) {
        transition_out(default_slot, local);
        current = false;
      },
      d(detaching) {
        if (default_slot)
          default_slot.d(detaching);
      }
    };
  }
  function create_fragment4(ctx) {
    let switch_instance;
    let switch_instance_anchor;
    let current;
    const switch_instance_spread_levels = [
      {
        use: [ctx[7], ...ctx[0]]
      },
      {
        class: classMap({
          [ctx[1]]: true,
          [ctx[5]]: true,
          ...ctx[4]
        })
      },
      ctx[6],
      ctx[8]
    ];
    var switch_value = ctx[2];
    function switch_props(ctx2) {
      let switch_instance_props = {
        $$slots: { default: [create_default_slot2] },
        $$scope: { ctx: ctx2 }
      };
      for (let i = 0; i < switch_instance_spread_levels.length; i += 1) {
        switch_instance_props = assign(switch_instance_props, switch_instance_spread_levels[i]);
      }
      return { props: switch_instance_props };
    }
    if (switch_value) {
      switch_instance = new switch_value(switch_props(ctx));
      ctx[11](switch_instance);
    }
    return {
      c() {
        if (switch_instance)
          create_component(switch_instance.$$.fragment);
        switch_instance_anchor = empty();
      },
      m(target, anchor) {
        if (switch_instance) {
          mount_component(switch_instance, target, anchor);
        }
        insert(target, switch_instance_anchor, anchor);
        current = true;
      },
      p(ctx2, [dirty]) {
        const switch_instance_changes = dirty & 499 ? get_spread_update(switch_instance_spread_levels, [
          dirty & 129 && {
            use: [ctx2[7], ...ctx2[0]]
          },
          dirty & 50 && {
            class: classMap({
              [ctx2[1]]: true,
              [ctx2[5]]: true,
              ...ctx2[4]
            })
          },
          dirty & 64 && get_spread_object(ctx2[6]),
          dirty & 256 && get_spread_object(ctx2[8])
        ]) : {};
        if (dirty & 4096) {
          switch_instance_changes.$$scope = { dirty, ctx: ctx2 };
        }
        if (switch_value !== (switch_value = ctx2[2])) {
          if (switch_instance) {
            group_outros();
            const old_component = switch_instance;
            transition_out(old_component.$$.fragment, 1, 0, () => {
              destroy_component(old_component, 1);
            });
            check_outros();
          }
          if (switch_value) {
            switch_instance = new switch_value(switch_props(ctx2));
            ctx2[11](switch_instance);
            create_component(switch_instance.$$.fragment);
            transition_in(switch_instance.$$.fragment, 1);
            mount_component(switch_instance, switch_instance_anchor.parentNode, switch_instance_anchor);
          } else {
            switch_instance = null;
          }
        } else if (switch_value) {
          switch_instance.$set(switch_instance_changes);
        }
      },
      i(local) {
        if (current)
          return;
        if (switch_instance)
          transition_in(switch_instance.$$.fragment, local);
        current = true;
      },
      o(local) {
        if (switch_instance)
          transition_out(switch_instance.$$.fragment, local);
        current = false;
      },
      d(detaching) {
        ctx[11](null);
        if (detaching)
          detach(switch_instance_anchor);
        if (switch_instance)
          destroy_component(switch_instance, detaching);
      }
    };
  }
  var internals = {
    component: Div_default,
    class: "",
    classMap: {},
    contexts: {},
    props: {}
  };
  function instance2($$self, $$props, $$invalidate) {
    const omit_props_names = ["use", "class", "component", "getElement"];
    let $$restProps = compute_rest_props($$props, omit_props_names);
    let { $$slots: slots = {}, $$scope } = $$props;
    let { use = [] } = $$props;
    let { class: className = "" } = $$props;
    let element2;
    const smuiClass = internals.class;
    const smuiClassMap = {};
    const smuiClassUnsubscribes = [];
    const contexts = internals.contexts;
    const props = internals.props;
    let { component = internals.component } = $$props;
    Object.entries(internals.classMap).forEach(([name, context]) => {
      const store = getContext(context);
      if (store && "subscribe" in store) {
        smuiClassUnsubscribes.push(store.subscribe((value) => {
          $$invalidate(4, smuiClassMap[name] = value, smuiClassMap);
        }));
      }
    });
    const forwardEvents = forwardEventsBuilder(get_current_component());
    for (let context in contexts) {
      if (contexts.hasOwnProperty(context)) {
        setContext(context, contexts[context]);
      }
    }
    onDestroy(() => {
      for (const unsubscribe of smuiClassUnsubscribes) {
        unsubscribe();
      }
    });
    function getElement() {
      return element2.getElement();
    }
    function switch_instance_binding($$value) {
      binding_callbacks[$$value ? "unshift" : "push"](() => {
        element2 = $$value;
        $$invalidate(3, element2);
      });
    }
    $$self.$$set = ($$new_props) => {
      $$props = assign(assign({}, $$props), exclude_internal_props($$new_props));
      $$invalidate(8, $$restProps = compute_rest_props($$props, omit_props_names));
      if ("use" in $$new_props)
        $$invalidate(0, use = $$new_props.use);
      if ("class" in $$new_props)
        $$invalidate(1, className = $$new_props.class);
      if ("component" in $$new_props)
        $$invalidate(2, component = $$new_props.component);
      if ("$$scope" in $$new_props)
        $$invalidate(12, $$scope = $$new_props.$$scope);
    };
    return [
      use,
      className,
      component,
      element2,
      smuiClassMap,
      smuiClass,
      props,
      forwardEvents,
      $$restProps,
      getElement,
      slots,
      switch_instance_binding,
      $$scope
    ];
  }
  var ClassAdder = class extends SvelteComponent {
    constructor(options) {
      super();
      init(this, options, instance2, create_fragment4, safe_not_equal, {
        use: 0,
        class: 1,
        component: 2,
        getElement: 9
      });
    }
    get getElement() {
      return this.$$.ctx[9];
    }
  };
  var ClassAdder_default = ClassAdder;

  // node_modules/@smui/common/dist/classadder/classAdderBuilder.js
  var defaults = Object.assign({}, internals);
  function classAdderBuilder(props) {
    return new Proxy(ClassAdder_default, {
      construct: function(target, args) {
        Object.assign(internals, defaults, props);
        return new target(...args);
      },
      get: function(target, prop) {
        Object.assign(internals, defaults, props);
        return target[prop];
      }
    });
  }

  // node_modules/@smui/common/dist/elements/A.svelte
  function create_fragment5(ctx) {
    let a;
    let useActions_action;
    let forwardEvents_action;
    let current;
    let mounted;
    let dispose;
    const default_slot_template = ctx[7].default;
    const default_slot = create_slot(default_slot_template, ctx, ctx[6], null);
    let a_levels = [{ href: ctx[1] }, ctx[4]];
    let a_data = {};
    for (let i = 0; i < a_levels.length; i += 1) {
      a_data = assign(a_data, a_levels[i]);
    }
    return {
      c() {
        a = element("a");
        if (default_slot)
          default_slot.c();
        set_attributes(a, a_data);
      },
      m(target, anchor) {
        insert(target, a, anchor);
        if (default_slot) {
          default_slot.m(a, null);
        }
        ctx[8](a);
        current = true;
        if (!mounted) {
          dispose = [
            action_destroyer(useActions_action = useActions.call(null, a, ctx[0])),
            action_destroyer(forwardEvents_action = ctx[3].call(null, a))
          ];
          mounted = true;
        }
      },
      p(ctx2, [dirty]) {
        if (default_slot) {
          if (default_slot.p && (!current || dirty & 64)) {
            update_slot_base(default_slot, default_slot_template, ctx2, ctx2[6], !current ? get_all_dirty_from_scope(ctx2[6]) : get_slot_changes(default_slot_template, ctx2[6], dirty, null), null);
          }
        }
        set_attributes(a, a_data = get_spread_update(a_levels, [
          (!current || dirty & 2) && { href: ctx2[1] },
          dirty & 16 && ctx2[4]
        ]));
        if (useActions_action && is_function(useActions_action.update) && dirty & 1)
          useActions_action.update.call(null, ctx2[0]);
      },
      i(local) {
        if (current)
          return;
        transition_in(default_slot, local);
        current = true;
      },
      o(local) {
        transition_out(default_slot, local);
        current = false;
      },
      d(detaching) {
        if (detaching)
          detach(a);
        if (default_slot)
          default_slot.d(detaching);
        ctx[8](null);
        mounted = false;
        run_all(dispose);
      }
    };
  }
  function instance3($$self, $$props, $$invalidate) {
    const omit_props_names = ["use", "href", "getElement"];
    let $$restProps = compute_rest_props($$props, omit_props_names);
    let { $$slots: slots = {}, $$scope } = $$props;
    let { use = [] } = $$props;
    let { href = "javascript:void(0);" } = $$props;
    const forwardEvents = forwardEventsBuilder(get_current_component());
    let element2;
    function getElement() {
      return element2;
    }
    function a_binding($$value) {
      binding_callbacks[$$value ? "unshift" : "push"](() => {
        element2 = $$value;
        $$invalidate(2, element2);
      });
    }
    $$self.$$set = ($$new_props) => {
      $$props = assign(assign({}, $$props), exclude_internal_props($$new_props));
      $$invalidate(4, $$restProps = compute_rest_props($$props, omit_props_names));
      if ("use" in $$new_props)
        $$invalidate(0, use = $$new_props.use);
      if ("href" in $$new_props)
        $$invalidate(1, href = $$new_props.href);
      if ("$$scope" in $$new_props)
        $$invalidate(6, $$scope = $$new_props.$$scope);
    };
    return [
      use,
      href,
      element2,
      forwardEvents,
      $$restProps,
      getElement,
      $$scope,
      slots,
      a_binding
    ];
  }
  var A = class extends SvelteComponent {
    constructor(options) {
      super();
      init(this, options, instance3, create_fragment5, safe_not_equal, { use: 0, href: 1, getElement: 5 });
    }
    get getElement() {
      return this.$$.ctx[5];
    }
  };
  var A_default = A;

  // node_modules/@smui/common/dist/elements/H3.svelte
  function create_fragment6(ctx) {
    let h3;
    let useActions_action;
    let forwardEvents_action;
    let current;
    let mounted;
    let dispose;
    const default_slot_template = ctx[6].default;
    const default_slot = create_slot(default_slot_template, ctx, ctx[5], null);
    let h3_levels = [ctx[3]];
    let h3_data = {};
    for (let i = 0; i < h3_levels.length; i += 1) {
      h3_data = assign(h3_data, h3_levels[i]);
    }
    return {
      c() {
        h3 = element("h3");
        if (default_slot)
          default_slot.c();
        set_attributes(h3, h3_data);
      },
      m(target, anchor) {
        insert(target, h3, anchor);
        if (default_slot) {
          default_slot.m(h3, null);
        }
        ctx[7](h3);
        current = true;
        if (!mounted) {
          dispose = [
            action_destroyer(useActions_action = useActions.call(null, h3, ctx[0])),
            action_destroyer(forwardEvents_action = ctx[2].call(null, h3))
          ];
          mounted = true;
        }
      },
      p(ctx2, [dirty]) {
        if (default_slot) {
          if (default_slot.p && (!current || dirty & 32)) {
            update_slot_base(default_slot, default_slot_template, ctx2, ctx2[5], !current ? get_all_dirty_from_scope(ctx2[5]) : get_slot_changes(default_slot_template, ctx2[5], dirty, null), null);
          }
        }
        set_attributes(h3, h3_data = get_spread_update(h3_levels, [dirty & 8 && ctx2[3]]));
        if (useActions_action && is_function(useActions_action.update) && dirty & 1)
          useActions_action.update.call(null, ctx2[0]);
      },
      i(local) {
        if (current)
          return;
        transition_in(default_slot, local);
        current = true;
      },
      o(local) {
        transition_out(default_slot, local);
        current = false;
      },
      d(detaching) {
        if (detaching)
          detach(h3);
        if (default_slot)
          default_slot.d(detaching);
        ctx[7](null);
        mounted = false;
        run_all(dispose);
      }
    };
  }
  function instance4($$self, $$props, $$invalidate) {
    const omit_props_names = ["use", "getElement"];
    let $$restProps = compute_rest_props($$props, omit_props_names);
    let { $$slots: slots = {}, $$scope } = $$props;
    let { use = [] } = $$props;
    const forwardEvents = forwardEventsBuilder(get_current_component());
    let element2;
    function getElement() {
      return element2;
    }
    function h3_binding($$value) {
      binding_callbacks[$$value ? "unshift" : "push"](() => {
        element2 = $$value;
        $$invalidate(1, element2);
      });
    }
    $$self.$$set = ($$new_props) => {
      $$props = assign(assign({}, $$props), exclude_internal_props($$new_props));
      $$invalidate(3, $$restProps = compute_rest_props($$props, omit_props_names));
      if ("use" in $$new_props)
        $$invalidate(0, use = $$new_props.use);
      if ("$$scope" in $$new_props)
        $$invalidate(5, $$scope = $$new_props.$$scope);
    };
    return [
      use,
      element2,
      forwardEvents,
      $$restProps,
      getElement,
      $$scope,
      slots,
      h3_binding
    ];
  }
  var H3 = class extends SvelteComponent {
    constructor(options) {
      super();
      init(this, options, instance4, create_fragment6, safe_not_equal, { use: 0, getElement: 4 });
    }
    get getElement() {
      return this.$$.ctx[4];
    }
  };
  var H3_default = H3;

  // node_modules/@smui/common/dist/elements/Li.svelte
  function create_fragment7(ctx) {
    let li;
    let useActions_action;
    let forwardEvents_action;
    let current;
    let mounted;
    let dispose;
    const default_slot_template = ctx[6].default;
    const default_slot = create_slot(default_slot_template, ctx, ctx[5], null);
    let li_levels = [ctx[3]];
    let li_data = {};
    for (let i = 0; i < li_levels.length; i += 1) {
      li_data = assign(li_data, li_levels[i]);
    }
    return {
      c() {
        li = element("li");
        if (default_slot)
          default_slot.c();
        set_attributes(li, li_data);
      },
      m(target, anchor) {
        insert(target, li, anchor);
        if (default_slot) {
          default_slot.m(li, null);
        }
        ctx[7](li);
        current = true;
        if (!mounted) {
          dispose = [
            action_destroyer(useActions_action = useActions.call(null, li, ctx[0])),
            action_destroyer(forwardEvents_action = ctx[2].call(null, li))
          ];
          mounted = true;
        }
      },
      p(ctx2, [dirty]) {
        if (default_slot) {
          if (default_slot.p && (!current || dirty & 32)) {
            update_slot_base(default_slot, default_slot_template, ctx2, ctx2[5], !current ? get_all_dirty_from_scope(ctx2[5]) : get_slot_changes(default_slot_template, ctx2[5], dirty, null), null);
          }
        }
        set_attributes(li, li_data = get_spread_update(li_levels, [dirty & 8 && ctx2[3]]));
        if (useActions_action && is_function(useActions_action.update) && dirty & 1)
          useActions_action.update.call(null, ctx2[0]);
      },
      i(local) {
        if (current)
          return;
        transition_in(default_slot, local);
        current = true;
      },
      o(local) {
        transition_out(default_slot, local);
        current = false;
      },
      d(detaching) {
        if (detaching)
          detach(li);
        if (default_slot)
          default_slot.d(detaching);
        ctx[7](null);
        mounted = false;
        run_all(dispose);
      }
    };
  }
  function instance5($$self, $$props, $$invalidate) {
    const omit_props_names = ["use", "getElement"];
    let $$restProps = compute_rest_props($$props, omit_props_names);
    let { $$slots: slots = {}, $$scope } = $$props;
    let { use = [] } = $$props;
    const forwardEvents = forwardEventsBuilder(get_current_component());
    let element2;
    function getElement() {
      return element2;
    }
    function li_binding($$value) {
      binding_callbacks[$$value ? "unshift" : "push"](() => {
        element2 = $$value;
        $$invalidate(1, element2);
      });
    }
    $$self.$$set = ($$new_props) => {
      $$props = assign(assign({}, $$props), exclude_internal_props($$new_props));
      $$invalidate(3, $$restProps = compute_rest_props($$props, omit_props_names));
      if ("use" in $$new_props)
        $$invalidate(0, use = $$new_props.use);
      if ("$$scope" in $$new_props)
        $$invalidate(5, $$scope = $$new_props.$$scope);
    };
    return [
      use,
      element2,
      forwardEvents,
      $$restProps,
      getElement,
      $$scope,
      slots,
      li_binding
    ];
  }
  var Li = class extends SvelteComponent {
    constructor(options) {
      super();
      init(this, options, instance5, create_fragment7, safe_not_equal, { use: 0, getElement: 4 });
    }
    get getElement() {
      return this.$$.ctx[4];
    }
  };
  var Li_default = Li;

  // node_modules/@smui/common/dist/elements/Nav.svelte
  function create_fragment8(ctx) {
    let nav;
    let useActions_action;
    let forwardEvents_action;
    let current;
    let mounted;
    let dispose;
    const default_slot_template = ctx[6].default;
    const default_slot = create_slot(default_slot_template, ctx, ctx[5], null);
    let nav_levels = [ctx[3]];
    let nav_data = {};
    for (let i = 0; i < nav_levels.length; i += 1) {
      nav_data = assign(nav_data, nav_levels[i]);
    }
    return {
      c() {
        nav = element("nav");
        if (default_slot)
          default_slot.c();
        set_attributes(nav, nav_data);
      },
      m(target, anchor) {
        insert(target, nav, anchor);
        if (default_slot) {
          default_slot.m(nav, null);
        }
        ctx[7](nav);
        current = true;
        if (!mounted) {
          dispose = [
            action_destroyer(useActions_action = useActions.call(null, nav, ctx[0])),
            action_destroyer(forwardEvents_action = ctx[2].call(null, nav))
          ];
          mounted = true;
        }
      },
      p(ctx2, [dirty]) {
        if (default_slot) {
          if (default_slot.p && (!current || dirty & 32)) {
            update_slot_base(default_slot, default_slot_template, ctx2, ctx2[5], !current ? get_all_dirty_from_scope(ctx2[5]) : get_slot_changes(default_slot_template, ctx2[5], dirty, null), null);
          }
        }
        set_attributes(nav, nav_data = get_spread_update(nav_levels, [dirty & 8 && ctx2[3]]));
        if (useActions_action && is_function(useActions_action.update) && dirty & 1)
          useActions_action.update.call(null, ctx2[0]);
      },
      i(local) {
        if (current)
          return;
        transition_in(default_slot, local);
        current = true;
      },
      o(local) {
        transition_out(default_slot, local);
        current = false;
      },
      d(detaching) {
        if (detaching)
          detach(nav);
        if (default_slot)
          default_slot.d(detaching);
        ctx[7](null);
        mounted = false;
        run_all(dispose);
      }
    };
  }
  function instance6($$self, $$props, $$invalidate) {
    const omit_props_names = ["use", "getElement"];
    let $$restProps = compute_rest_props($$props, omit_props_names);
    let { $$slots: slots = {}, $$scope } = $$props;
    let { use = [] } = $$props;
    const forwardEvents = forwardEventsBuilder(get_current_component());
    let element2;
    function getElement() {
      return element2;
    }
    function nav_binding($$value) {
      binding_callbacks[$$value ? "unshift" : "push"](() => {
        element2 = $$value;
        $$invalidate(1, element2);
      });
    }
    $$self.$$set = ($$new_props) => {
      $$props = assign(assign({}, $$props), exclude_internal_props($$new_props));
      $$invalidate(3, $$restProps = compute_rest_props($$props, omit_props_names));
      if ("use" in $$new_props)
        $$invalidate(0, use = $$new_props.use);
      if ("$$scope" in $$new_props)
        $$invalidate(5, $$scope = $$new_props.$$scope);
    };
    return [
      use,
      element2,
      forwardEvents,
      $$restProps,
      getElement,
      $$scope,
      slots,
      nav_binding
    ];
  }
  var Nav = class extends SvelteComponent {
    constructor(options) {
      super();
      init(this, options, instance6, create_fragment8, safe_not_equal, { use: 0, getElement: 4 });
    }
    get getElement() {
      return this.$$.ctx[4];
    }
  };
  var Nav_default = Nav;

  // node_modules/@smui/common/dist/elements/Span.svelte
  function create_fragment9(ctx) {
    let span;
    let useActions_action;
    let forwardEvents_action;
    let current;
    let mounted;
    let dispose;
    const default_slot_template = ctx[6].default;
    const default_slot = create_slot(default_slot_template, ctx, ctx[5], null);
    let span_levels = [ctx[3]];
    let span_data = {};
    for (let i = 0; i < span_levels.length; i += 1) {
      span_data = assign(span_data, span_levels[i]);
    }
    return {
      c() {
        span = element("span");
        if (default_slot)
          default_slot.c();
        set_attributes(span, span_data);
      },
      m(target, anchor) {
        insert(target, span, anchor);
        if (default_slot) {
          default_slot.m(span, null);
        }
        ctx[7](span);
        current = true;
        if (!mounted) {
          dispose = [
            action_destroyer(useActions_action = useActions.call(null, span, ctx[0])),
            action_destroyer(forwardEvents_action = ctx[2].call(null, span))
          ];
          mounted = true;
        }
      },
      p(ctx2, [dirty]) {
        if (default_slot) {
          if (default_slot.p && (!current || dirty & 32)) {
            update_slot_base(default_slot, default_slot_template, ctx2, ctx2[5], !current ? get_all_dirty_from_scope(ctx2[5]) : get_slot_changes(default_slot_template, ctx2[5], dirty, null), null);
          }
        }
        set_attributes(span, span_data = get_spread_update(span_levels, [dirty & 8 && ctx2[3]]));
        if (useActions_action && is_function(useActions_action.update) && dirty & 1)
          useActions_action.update.call(null, ctx2[0]);
      },
      i(local) {
        if (current)
          return;
        transition_in(default_slot, local);
        current = true;
      },
      o(local) {
        transition_out(default_slot, local);
        current = false;
      },
      d(detaching) {
        if (detaching)
          detach(span);
        if (default_slot)
          default_slot.d(detaching);
        ctx[7](null);
        mounted = false;
        run_all(dispose);
      }
    };
  }
  function instance7($$self, $$props, $$invalidate) {
    const omit_props_names = ["use", "getElement"];
    let $$restProps = compute_rest_props($$props, omit_props_names);
    let { $$slots: slots = {}, $$scope } = $$props;
    let { use = [] } = $$props;
    const forwardEvents = forwardEventsBuilder(get_current_component());
    let element2;
    function getElement() {
      return element2;
    }
    function span_binding($$value) {
      binding_callbacks[$$value ? "unshift" : "push"](() => {
        element2 = $$value;
        $$invalidate(1, element2);
      });
    }
    $$self.$$set = ($$new_props) => {
      $$props = assign(assign({}, $$props), exclude_internal_props($$new_props));
      $$invalidate(3, $$restProps = compute_rest_props($$props, omit_props_names));
      if ("use" in $$new_props)
        $$invalidate(0, use = $$new_props.use);
      if ("$$scope" in $$new_props)
        $$invalidate(5, $$scope = $$new_props.$$scope);
    };
    return [
      use,
      element2,
      forwardEvents,
      $$restProps,
      getElement,
      $$scope,
      slots,
      span_binding
    ];
  }
  var Span = class extends SvelteComponent {
    constructor(options) {
      super();
      init(this, options, instance7, create_fragment9, safe_not_equal, { use: 0, getElement: 4 });
    }
    get getElement() {
      return this.$$.ctx[4];
    }
  };
  var Span_default = Span;

  // node_modules/@smui/common/dist/elements/Ul.svelte
  function create_fragment10(ctx) {
    let ul;
    let useActions_action;
    let forwardEvents_action;
    let current;
    let mounted;
    let dispose;
    const default_slot_template = ctx[6].default;
    const default_slot = create_slot(default_slot_template, ctx, ctx[5], null);
    let ul_levels = [ctx[3]];
    let ul_data = {};
    for (let i = 0; i < ul_levels.length; i += 1) {
      ul_data = assign(ul_data, ul_levels[i]);
    }
    return {
      c() {
        ul = element("ul");
        if (default_slot)
          default_slot.c();
        set_attributes(ul, ul_data);
      },
      m(target, anchor) {
        insert(target, ul, anchor);
        if (default_slot) {
          default_slot.m(ul, null);
        }
        ctx[7](ul);
        current = true;
        if (!mounted) {
          dispose = [
            action_destroyer(useActions_action = useActions.call(null, ul, ctx[0])),
            action_destroyer(forwardEvents_action = ctx[2].call(null, ul))
          ];
          mounted = true;
        }
      },
      p(ctx2, [dirty]) {
        if (default_slot) {
          if (default_slot.p && (!current || dirty & 32)) {
            update_slot_base(default_slot, default_slot_template, ctx2, ctx2[5], !current ? get_all_dirty_from_scope(ctx2[5]) : get_slot_changes(default_slot_template, ctx2[5], dirty, null), null);
          }
        }
        set_attributes(ul, ul_data = get_spread_update(ul_levels, [dirty & 8 && ctx2[3]]));
        if (useActions_action && is_function(useActions_action.update) && dirty & 1)
          useActions_action.update.call(null, ctx2[0]);
      },
      i(local) {
        if (current)
          return;
        transition_in(default_slot, local);
        current = true;
      },
      o(local) {
        transition_out(default_slot, local);
        current = false;
      },
      d(detaching) {
        if (detaching)
          detach(ul);
        if (default_slot)
          default_slot.d(detaching);
        ctx[7](null);
        mounted = false;
        run_all(dispose);
      }
    };
  }
  function instance8($$self, $$props, $$invalidate) {
    const omit_props_names = ["use", "getElement"];
    let $$restProps = compute_rest_props($$props, omit_props_names);
    let { $$slots: slots = {}, $$scope } = $$props;
    let { use = [] } = $$props;
    const forwardEvents = forwardEventsBuilder(get_current_component());
    let element2;
    function getElement() {
      return element2;
    }
    function ul_binding($$value) {
      binding_callbacks[$$value ? "unshift" : "push"](() => {
        element2 = $$value;
        $$invalidate(1, element2);
      });
    }
    $$self.$$set = ($$new_props) => {
      $$props = assign(assign({}, $$props), exclude_internal_props($$new_props));
      $$invalidate(3, $$restProps = compute_rest_props($$props, omit_props_names));
      if ("use" in $$new_props)
        $$invalidate(0, use = $$new_props.use);
      if ("$$scope" in $$new_props)
        $$invalidate(5, $$scope = $$new_props.$$scope);
    };
    return [
      use,
      element2,
      forwardEvents,
      $$restProps,
      getElement,
      $$scope,
      slots,
      ul_binding
    ];
  }
  var Ul = class extends SvelteComponent {
    constructor(options) {
      super();
      init(this, options, instance8, create_fragment10, safe_not_equal, { use: 0, getElement: 4 });
    }
    get getElement() {
      return this.$$.ctx[4];
    }
  };
  var Ul_default = Ul;

  // node_modules/@smui/common/dist/elements/index.js
  var A2 = A_default;
  var Div2 = Div_default;
  var H32 = H3_default;
  var Li2 = Li_default;
  var Nav2 = Nav_default;
  var Span2 = Span_default;
  var Ul2 = Ul_default;

  // node_modules/@smui/list/dist/List.svelte
  function create_default_slot3(ctx) {
    let current;
    const default_slot_template = ctx[37].default;
    const default_slot = create_slot(default_slot_template, ctx, ctx[43], null);
    return {
      c() {
        if (default_slot)
          default_slot.c();
      },
      m(target, anchor) {
        if (default_slot) {
          default_slot.m(target, anchor);
        }
        current = true;
      },
      p(ctx2, dirty) {
        if (default_slot) {
          if (default_slot.p && (!current || dirty[1] & 4096)) {
            update_slot_base(default_slot, default_slot_template, ctx2, ctx2[43], !current ? get_all_dirty_from_scope(ctx2[43]) : get_slot_changes(default_slot_template, ctx2[43], dirty, null), null);
          }
        }
      },
      i(local) {
        if (current)
          return;
        transition_in(default_slot, local);
        current = true;
      },
      o(local) {
        transition_out(default_slot, local);
        current = false;
      },
      d(detaching) {
        if (default_slot)
          default_slot.d(detaching);
      }
    };
  }
  function create_fragment11(ctx) {
    let switch_instance;
    let switch_instance_anchor;
    let current;
    const switch_instance_spread_levels = [
      {
        use: [ctx[17], ...ctx[0]]
      },
      {
        class: classMap({
          [ctx[1]]: true,
          "mdc-deprecated-list": true,
          "mdc-deprecated-list--non-interactive": ctx[2],
          "mdc-deprecated-list--dense": ctx[3],
          "mdc-deprecated-list--textual-list": ctx[4],
          "mdc-deprecated-list--avatar-list": ctx[5] || ctx[18],
          "mdc-deprecated-list--icon-list": ctx[6],
          "mdc-deprecated-list--image-list": ctx[7],
          "mdc-deprecated-list--thumbnail-list": ctx[8],
          "mdc-deprecated-list--video-list": ctx[9],
          "mdc-deprecated-list--two-line": ctx[10],
          "smui-list--three-line": ctx[11] && !ctx[10]
        })
      },
      { role: ctx[15] },
      ctx[23]
    ];
    var switch_value = ctx[12];
    function switch_props(ctx2) {
      let switch_instance_props = {
        $$slots: { default: [create_default_slot3] },
        $$scope: { ctx: ctx2 }
      };
      for (let i = 0; i < switch_instance_spread_levels.length; i += 1) {
        switch_instance_props = assign(switch_instance_props, switch_instance_spread_levels[i]);
      }
      return { props: switch_instance_props };
    }
    if (switch_value) {
      switch_instance = new switch_value(switch_props(ctx));
      ctx[38](switch_instance);
      switch_instance.$on("keydown", ctx[39]);
      switch_instance.$on("focusin", ctx[40]);
      switch_instance.$on("focusout", ctx[41]);
      switch_instance.$on("click", ctx[42]);
      switch_instance.$on("SMUIListItem:mount", ctx[19]);
      switch_instance.$on("SMUIListItem:unmount", ctx[20]);
      switch_instance.$on("SMUI:action", ctx[21]);
    }
    return {
      c() {
        if (switch_instance)
          create_component(switch_instance.$$.fragment);
        switch_instance_anchor = empty();
      },
      m(target, anchor) {
        if (switch_instance) {
          mount_component(switch_instance, target, anchor);
        }
        insert(target, switch_instance_anchor, anchor);
        current = true;
      },
      p(ctx2, dirty) {
        const switch_instance_changes = dirty[0] & 8818687 ? get_spread_update(switch_instance_spread_levels, [
          dirty[0] & 131073 && {
            use: [ctx2[17], ...ctx2[0]]
          },
          dirty[0] & 266238 && {
            class: classMap({
              [ctx2[1]]: true,
              "mdc-deprecated-list": true,
              "mdc-deprecated-list--non-interactive": ctx2[2],
              "mdc-deprecated-list--dense": ctx2[3],
              "mdc-deprecated-list--textual-list": ctx2[4],
              "mdc-deprecated-list--avatar-list": ctx2[5] || ctx2[18],
              "mdc-deprecated-list--icon-list": ctx2[6],
              "mdc-deprecated-list--image-list": ctx2[7],
              "mdc-deprecated-list--thumbnail-list": ctx2[8],
              "mdc-deprecated-list--video-list": ctx2[9],
              "mdc-deprecated-list--two-line": ctx2[10],
              "smui-list--three-line": ctx2[11] && !ctx2[10]
            })
          },
          dirty[0] & 32768 && { role: ctx2[15] },
          dirty[0] & 8388608 && get_spread_object(ctx2[23])
        ]) : {};
        if (dirty[1] & 4096) {
          switch_instance_changes.$$scope = { dirty, ctx: ctx2 };
        }
        if (switch_value !== (switch_value = ctx2[12])) {
          if (switch_instance) {
            group_outros();
            const old_component = switch_instance;
            transition_out(old_component.$$.fragment, 1, 0, () => {
              destroy_component(old_component, 1);
            });
            check_outros();
          }
          if (switch_value) {
            switch_instance = new switch_value(switch_props(ctx2));
            ctx2[38](switch_instance);
            switch_instance.$on("keydown", ctx2[39]);
            switch_instance.$on("focusin", ctx2[40]);
            switch_instance.$on("focusout", ctx2[41]);
            switch_instance.$on("click", ctx2[42]);
            switch_instance.$on("SMUIListItem:mount", ctx2[19]);
            switch_instance.$on("SMUIListItem:unmount", ctx2[20]);
            switch_instance.$on("SMUI:action", ctx2[21]);
            create_component(switch_instance.$$.fragment);
            transition_in(switch_instance.$$.fragment, 1);
            mount_component(switch_instance, switch_instance_anchor.parentNode, switch_instance_anchor);
          } else {
            switch_instance = null;
          }
        } else if (switch_value) {
          switch_instance.$set(switch_instance_changes);
        }
      },
      i(local) {
        if (current)
          return;
        if (switch_instance)
          transition_in(switch_instance.$$.fragment, local);
        current = true;
      },
      o(local) {
        if (switch_instance)
          transition_out(switch_instance.$$.fragment, local);
        current = false;
      },
      d(detaching) {
        ctx[38](null);
        if (detaching)
          detach(switch_instance_anchor);
        if (switch_instance)
          destroy_component(switch_instance, detaching);
      }
    };
  }
  function instance_13($$self, $$props, $$invalidate) {
    const omit_props_names = [
      "use",
      "class",
      "nonInteractive",
      "dense",
      "textualList",
      "avatarList",
      "iconList",
      "imageList",
      "thumbnailList",
      "videoList",
      "twoLine",
      "threeLine",
      "vertical",
      "wrapFocus",
      "singleSelection",
      "selectedIndex",
      "radioList",
      "checkList",
      "hasTypeahead",
      "component",
      "layout",
      "setEnabled",
      "getTypeaheadInProgress",
      "getSelectedIndex",
      "getFocusedItemIndex",
      "getElement"
    ];
    let $$restProps = compute_rest_props($$props, omit_props_names);
    let { $$slots: slots = {}, $$scope } = $$props;
    var _a2;
    const { closest: closest2, matches: matches3 } = ponyfill_exports;
    const forwardEvents = forwardEventsBuilder(get_current_component());
    let { use = [] } = $$props;
    let { class: className = "" } = $$props;
    let { nonInteractive = false } = $$props;
    let { dense = false } = $$props;
    let { textualList = false } = $$props;
    let { avatarList = false } = $$props;
    let { iconList = false } = $$props;
    let { imageList = false } = $$props;
    let { thumbnailList = false } = $$props;
    let { videoList = false } = $$props;
    let { twoLine = false } = $$props;
    let { threeLine = false } = $$props;
    let { vertical = true } = $$props;
    let { wrapFocus = (_a2 = getContext("SMUI:list:wrapFocus")) !== null && _a2 !== void 0 ? _a2 : false } = $$props;
    let { singleSelection = false } = $$props;
    let { selectedIndex = -1 } = $$props;
    let { radioList = false } = $$props;
    let { checkList = false } = $$props;
    let { hasTypeahead = false } = $$props;
    let element2;
    let instance13;
    let items = [];
    let role = getContext("SMUI:list:role");
    let nav = getContext("SMUI:list:nav");
    const itemAccessorMap = /* @__PURE__ */ new WeakMap();
    let selectionDialog = getContext("SMUI:dialog:selection");
    let addLayoutListener = getContext("SMUI:addLayoutListener");
    let removeLayoutListener;
    let { component = nav ? Nav2 : Ul2 } = $$props;
    setContext("SMUI:list:nonInteractive", nonInteractive);
    setContext("SMUI:separator:context", "list");
    if (!role) {
      if (singleSelection) {
        role = "listbox";
        setContext("SMUI:list:item:role", "option");
      } else if (radioList) {
        role = "radiogroup";
        setContext("SMUI:list:item:role", "radio");
      } else if (checkList) {
        role = "group";
        setContext("SMUI:list:item:role", "checkbox");
      } else {
        role = "list";
        setContext("SMUI:list:item:role", void 0);
      }
    }
    if (addLayoutListener) {
      removeLayoutListener = addLayoutListener(layout);
    }
    onMount(() => {
      $$invalidate(13, instance13 = new MDCListFoundation({
        addClassForElementIndex,
        focusItemAtIndex,
        getAttributeForElementIndex: (index, name) => {
          var _a3, _b2;
          return (_b2 = (_a3 = getOrderedList()[index]) === null || _a3 === void 0 ? void 0 : _a3.getAttr(name)) !== null && _b2 !== void 0 ? _b2 : null;
        },
        getFocusedElementIndex: () => document.activeElement ? getOrderedList().map((accessor2) => accessor2.element).indexOf(document.activeElement) : -1,
        getListItemCount: () => items.length,
        getPrimaryTextAtIndex,
        hasCheckboxAtIndex: (index) => {
          var _a3, _b2;
          return (_b2 = (_a3 = getOrderedList()[index]) === null || _a3 === void 0 ? void 0 : _a3.hasCheckbox) !== null && _b2 !== void 0 ? _b2 : false;
        },
        hasRadioAtIndex: (index) => {
          var _a3, _b2;
          return (_b2 = (_a3 = getOrderedList()[index]) === null || _a3 === void 0 ? void 0 : _a3.hasRadio) !== null && _b2 !== void 0 ? _b2 : false;
        },
        isCheckboxCheckedAtIndex: (index) => {
          var _a3;
          const listItem = getOrderedList()[index];
          return (_a3 = (listItem === null || listItem === void 0 ? void 0 : listItem.hasCheckbox) && listItem.checked) !== null && _a3 !== void 0 ? _a3 : false;
        },
        isFocusInsideList: () => element2 != null && getElement() !== document.activeElement && getElement().contains(document.activeElement),
        isRootFocused: () => element2 != null && document.activeElement === getElement(),
        listItemAtIndexHasClass,
        notifyAction: (index) => {
          $$invalidate(24, selectedIndex = index);
          if (element2 != null) {
            dispatch(getElement(), "SMUIList:action", { index }, void 0, true);
          }
        },
        removeClassForElementIndex,
        setAttributeForElementIndex,
        setCheckedCheckboxOrRadioAtIndex: (index, isChecked) => {
          getOrderedList()[index].checked = isChecked;
        },
        setTabIndexForListItemChildren: (listItemIndex, tabIndexValue) => {
          const listItem = getOrderedList()[listItemIndex];
          const selector = "button:not(:disabled), a";
          Array.prototype.forEach.call(listItem.element.querySelectorAll(selector), (el) => {
            el.setAttribute("tabindex", tabIndexValue);
          });
        }
      }));
      const accessor = {
        get element() {
          return getElement();
        },
        get items() {
          return items;
        },
        get typeaheadInProgress() {
          return instance13.isTypeaheadInProgress();
        },
        typeaheadMatchItem(nextChar, startingIndex) {
          return instance13.typeaheadMatchItem(nextChar, startingIndex, true);
        },
        getOrderedList,
        focusItemAtIndex,
        addClassForElementIndex,
        removeClassForElementIndex,
        setAttributeForElementIndex,
        removeAttributeForElementIndex,
        getAttributeFromElementIndex,
        getPrimaryTextAtIndex
      };
      dispatch(getElement(), "SMUIList:mount", accessor);
      instance13.init();
      return () => {
        instance13.destroy();
      };
    });
    onDestroy(() => {
      if (removeLayoutListener) {
        removeLayoutListener();
      }
    });
    function handleItemMount(event) {
      items.push(event.detail);
      itemAccessorMap.set(event.detail.element, event.detail);
      if (singleSelection && event.detail.selected) {
        $$invalidate(24, selectedIndex = getListItemIndex(event.detail.element));
      }
      event.stopPropagation();
    }
    function handleItemUnmount(event) {
      var _a3;
      const idx = (_a3 = event.detail && items.indexOf(event.detail)) !== null && _a3 !== void 0 ? _a3 : -1;
      if (idx !== -1) {
        items.splice(idx, 1);
        items = items;
        itemAccessorMap.delete(event.detail.element);
      }
      event.stopPropagation();
    }
    function handleAction(event) {
      if (radioList || checkList) {
        const index = getListItemIndex(event.target);
        if (index !== -1) {
          const item = getOrderedList()[index];
          if (item && (radioList && !item.checked || checkList)) {
            item.checked = !item.checked;
            item.activateRipple();
            window.requestAnimationFrame(() => {
              item.deactivateRipple();
            });
          }
        }
      }
    }
    function getOrderedList() {
      if (element2 == null) {
        return [];
      }
      return [...getElement().children].map((element3) => itemAccessorMap.get(element3)).filter((accessor) => accessor && accessor._smui_list_item_accessor);
    }
    function focusItemAtIndex(index) {
      const accessor = getOrderedList()[index];
      accessor && "focus" in accessor.element && accessor.element.focus();
    }
    function listItemAtIndexHasClass(index, className2) {
      var _a3;
      const accessor = getOrderedList()[index];
      return (_a3 = accessor && accessor.hasClass(className2)) !== null && _a3 !== void 0 ? _a3 : false;
    }
    function addClassForElementIndex(index, className2) {
      const accessor = getOrderedList()[index];
      accessor && accessor.addClass(className2);
    }
    function removeClassForElementIndex(index, className2) {
      const accessor = getOrderedList()[index];
      accessor && accessor.removeClass(className2);
    }
    function setAttributeForElementIndex(index, name, value) {
      const accessor = getOrderedList()[index];
      accessor && accessor.addAttr(name, value);
    }
    function removeAttributeForElementIndex(index, name) {
      const accessor = getOrderedList()[index];
      accessor && accessor.removeAttr(name);
    }
    function getAttributeFromElementIndex(index, name) {
      const accessor = getOrderedList()[index];
      if (accessor) {
        return accessor.getAttr(name);
      } else {
        return null;
      }
    }
    function getPrimaryTextAtIndex(index) {
      var _a3;
      const accessor = getOrderedList()[index];
      return (_a3 = accessor && accessor.getPrimaryText()) !== null && _a3 !== void 0 ? _a3 : "";
    }
    function getListItemIndex(element3) {
      const nearestParent = closest2(element3, ".mdc-deprecated-list-item, .mdc-deprecated-list");
      if (nearestParent && matches3(nearestParent, ".mdc-deprecated-list-item")) {
        return getOrderedList().map((item) => item === null || item === void 0 ? void 0 : item.element).indexOf(nearestParent);
      }
      return -1;
    }
    function layout() {
      return instance13.layout();
    }
    function setEnabled(itemIndex, isEnabled) {
      return instance13.setEnabled(itemIndex, isEnabled);
    }
    function getTypeaheadInProgress() {
      return instance13.isTypeaheadInProgress();
    }
    function getSelectedIndex() {
      return instance13.getSelectedIndex();
    }
    function getFocusedItemIndex() {
      return instance13.getFocusedItemIndex();
    }
    function getElement() {
      return element2.getElement();
    }
    function switch_instance_binding($$value) {
      binding_callbacks[$$value ? "unshift" : "push"](() => {
        element2 = $$value;
        $$invalidate(14, element2);
      });
    }
    const keydown_handler = (event) => instance13 && instance13.handleKeydown(event, event.target.classList.contains("mdc-deprecated-list-item"), getListItemIndex(event.target));
    const focusin_handler = (event) => instance13 && instance13.handleFocusIn(getListItemIndex(event.target));
    const focusout_handler = (event) => instance13 && instance13.handleFocusOut(getListItemIndex(event.target));
    const click_handler = (event) => instance13 && instance13.handleClick(getListItemIndex(event.target), !matches3(event.target, 'input[type="checkbox"], input[type="radio"]'));
    $$self.$$set = ($$new_props) => {
      $$props = assign(assign({}, $$props), exclude_internal_props($$new_props));
      $$invalidate(23, $$restProps = compute_rest_props($$props, omit_props_names));
      if ("use" in $$new_props)
        $$invalidate(0, use = $$new_props.use);
      if ("class" in $$new_props)
        $$invalidate(1, className = $$new_props.class);
      if ("nonInteractive" in $$new_props)
        $$invalidate(2, nonInteractive = $$new_props.nonInteractive);
      if ("dense" in $$new_props)
        $$invalidate(3, dense = $$new_props.dense);
      if ("textualList" in $$new_props)
        $$invalidate(4, textualList = $$new_props.textualList);
      if ("avatarList" in $$new_props)
        $$invalidate(5, avatarList = $$new_props.avatarList);
      if ("iconList" in $$new_props)
        $$invalidate(6, iconList = $$new_props.iconList);
      if ("imageList" in $$new_props)
        $$invalidate(7, imageList = $$new_props.imageList);
      if ("thumbnailList" in $$new_props)
        $$invalidate(8, thumbnailList = $$new_props.thumbnailList);
      if ("videoList" in $$new_props)
        $$invalidate(9, videoList = $$new_props.videoList);
      if ("twoLine" in $$new_props)
        $$invalidate(10, twoLine = $$new_props.twoLine);
      if ("threeLine" in $$new_props)
        $$invalidate(11, threeLine = $$new_props.threeLine);
      if ("vertical" in $$new_props)
        $$invalidate(25, vertical = $$new_props.vertical);
      if ("wrapFocus" in $$new_props)
        $$invalidate(26, wrapFocus = $$new_props.wrapFocus);
      if ("singleSelection" in $$new_props)
        $$invalidate(27, singleSelection = $$new_props.singleSelection);
      if ("selectedIndex" in $$new_props)
        $$invalidate(24, selectedIndex = $$new_props.selectedIndex);
      if ("radioList" in $$new_props)
        $$invalidate(28, radioList = $$new_props.radioList);
      if ("checkList" in $$new_props)
        $$invalidate(29, checkList = $$new_props.checkList);
      if ("hasTypeahead" in $$new_props)
        $$invalidate(30, hasTypeahead = $$new_props.hasTypeahead);
      if ("component" in $$new_props)
        $$invalidate(12, component = $$new_props.component);
      if ("$$scope" in $$new_props)
        $$invalidate(43, $$scope = $$new_props.$$scope);
    };
    $$self.$$.update = () => {
      if ($$self.$$.dirty[0] & 33562624) {
        $:
          if (instance13) {
            instance13.setVerticalOrientation(vertical);
          }
      }
      if ($$self.$$.dirty[0] & 67117056) {
        $:
          if (instance13) {
            instance13.setWrapFocus(wrapFocus);
          }
      }
      if ($$self.$$.dirty[0] & 1073750016) {
        $:
          if (instance13) {
            instance13.setHasTypeahead(hasTypeahead);
          }
      }
      if ($$self.$$.dirty[0] & 134225920) {
        $:
          if (instance13) {
            instance13.setSingleSelection(singleSelection);
          }
      }
      if ($$self.$$.dirty[0] & 151003136) {
        $:
          if (instance13 && singleSelection && getSelectedIndex() !== selectedIndex) {
            instance13.setSelectedIndex(selectedIndex);
          }
      }
    };
    return [
      use,
      className,
      nonInteractive,
      dense,
      textualList,
      avatarList,
      iconList,
      imageList,
      thumbnailList,
      videoList,
      twoLine,
      threeLine,
      component,
      instance13,
      element2,
      role,
      matches3,
      forwardEvents,
      selectionDialog,
      handleItemMount,
      handleItemUnmount,
      handleAction,
      getListItemIndex,
      $$restProps,
      selectedIndex,
      vertical,
      wrapFocus,
      singleSelection,
      radioList,
      checkList,
      hasTypeahead,
      layout,
      setEnabled,
      getTypeaheadInProgress,
      getSelectedIndex,
      getFocusedItemIndex,
      getElement,
      slots,
      switch_instance_binding,
      keydown_handler,
      focusin_handler,
      focusout_handler,
      click_handler,
      $$scope
    ];
  }
  var List = class extends SvelteComponent {
    constructor(options) {
      super();
      init(this, options, instance_13, create_fragment11, safe_not_equal, {
        use: 0,
        class: 1,
        nonInteractive: 2,
        dense: 3,
        textualList: 4,
        avatarList: 5,
        iconList: 6,
        imageList: 7,
        thumbnailList: 8,
        videoList: 9,
        twoLine: 10,
        threeLine: 11,
        vertical: 25,
        wrapFocus: 26,
        singleSelection: 27,
        selectedIndex: 24,
        radioList: 28,
        checkList: 29,
        hasTypeahead: 30,
        component: 12,
        layout: 31,
        setEnabled: 32,
        getTypeaheadInProgress: 33,
        getSelectedIndex: 34,
        getFocusedItemIndex: 35,
        getElement: 36
      }, null, [-1, -1]);
    }
    get layout() {
      return this.$$.ctx[31];
    }
    get setEnabled() {
      return this.$$.ctx[32];
    }
    get getTypeaheadInProgress() {
      return this.$$.ctx[33];
    }
    get getSelectedIndex() {
      return this.$$.ctx[34];
    }
    get getFocusedItemIndex() {
      return this.$$.ctx[35];
    }
    get getElement() {
      return this.$$.ctx[36];
    }
  };
  var List_default = List;

  // node_modules/@smui/list/dist/Item.svelte
  function create_if_block(ctx) {
    let span;
    return {
      c() {
        span = element("span");
        attr(span, "class", "mdc-deprecated-list-item__ripple");
      },
      m(target, anchor) {
        insert(target, span, anchor);
      },
      d(detaching) {
        if (detaching)
          detach(span);
      }
    };
  }
  function create_default_slot4(ctx) {
    let if_block_anchor;
    let current;
    let if_block = ctx[7] && create_if_block(ctx);
    const default_slot_template = ctx[32].default;
    const default_slot = create_slot(default_slot_template, ctx, ctx[35], null);
    return {
      c() {
        if (if_block)
          if_block.c();
        if_block_anchor = empty();
        if (default_slot)
          default_slot.c();
      },
      m(target, anchor) {
        if (if_block)
          if_block.m(target, anchor);
        insert(target, if_block_anchor, anchor);
        if (default_slot) {
          default_slot.m(target, anchor);
        }
        current = true;
      },
      p(ctx2, dirty) {
        if (ctx2[7]) {
          if (if_block) {
          } else {
            if_block = create_if_block(ctx2);
            if_block.c();
            if_block.m(if_block_anchor.parentNode, if_block_anchor);
          }
        } else if (if_block) {
          if_block.d(1);
          if_block = null;
        }
        if (default_slot) {
          if (default_slot.p && (!current || dirty[1] & 16)) {
            update_slot_base(default_slot, default_slot_template, ctx2, ctx2[35], !current ? get_all_dirty_from_scope(ctx2[35]) : get_slot_changes(default_slot_template, ctx2[35], dirty, null), null);
          }
        }
      },
      i(local) {
        if (current)
          return;
        transition_in(default_slot, local);
        current = true;
      },
      o(local) {
        transition_out(default_slot, local);
        current = false;
      },
      d(detaching) {
        if (if_block)
          if_block.d(detaching);
        if (detaching)
          detach(if_block_anchor);
        if (default_slot)
          default_slot.d(detaching);
      }
    };
  }
  function create_fragment12(ctx) {
    let switch_instance;
    let switch_instance_anchor;
    let current;
    const switch_instance_spread_levels = [
      {
        use: [
          ...ctx[6] ? [] : [
            [
              dist_default,
              {
                ripple: !ctx[14],
                unbounded: false,
                color: (ctx[1] || ctx[0]) && ctx[5] == null ? "primary" : ctx[5],
                disabled: ctx[9],
                addClass: ctx[22],
                removeClass: ctx[23],
                addStyle: ctx[24]
              }
            ]
          ],
          ctx[20],
          ...ctx[2]
        ]
      },
      {
        class: classMap({
          [ctx[3]]: true,
          "mdc-deprecated-list-item": true,
          "mdc-deprecated-list-item--activated": ctx[1],
          "mdc-deprecated-list-item--selected": ctx[0],
          "mdc-deprecated-list-item--disabled": ctx[9],
          "mdc-menu-item--selected": !ctx[21] && ctx[8] === "menuitem" && ctx[0],
          "smui-menu-item--non-interactive": ctx[6],
          ...ctx[16]
        })
      },
      {
        style: Object.entries(ctx[17]).map(func2).concat([ctx[4]]).join(" ")
      },
      ctx[21] && ctx[1] ? { "aria-current": "page" } : {},
      !ctx[21] ? { role: ctx[8] } : {},
      !ctx[21] && ctx[8] === "option" ? {
        "aria-selected": ctx[0] ? "true" : "false"
      } : {},
      !ctx[21] && (ctx[8] === "radio" || ctx[8] === "checkbox") ? {
        "aria-checked": ctx[14] && ctx[14].checked ? "true" : "false"
      } : {},
      !ctx[21] ? {
        "aria-disabled": ctx[9] ? "true" : "false"
      } : {},
      {
        "data-menu-item-skip-restore-focus": ctx[10] || void 0
      },
      { tabindex: ctx[19] },
      { href: ctx[11] },
      ctx[18],
      ctx[27]
    ];
    var switch_value = ctx[12];
    function switch_props(ctx2) {
      let switch_instance_props = {
        $$slots: { default: [create_default_slot4] },
        $$scope: { ctx: ctx2 }
      };
      for (let i = 0; i < switch_instance_spread_levels.length; i += 1) {
        switch_instance_props = assign(switch_instance_props, switch_instance_spread_levels[i]);
      }
      return { props: switch_instance_props };
    }
    if (switch_value) {
      switch_instance = new switch_value(switch_props(ctx));
      ctx[33](switch_instance);
      switch_instance.$on("click", ctx[13]);
      switch_instance.$on("keydown", ctx[25]);
      switch_instance.$on("SMUIGenericInput:mount", ctx[26]);
      switch_instance.$on("SMUIGenericInput:unmount", ctx[34]);
    }
    return {
      c() {
        if (switch_instance)
          create_component(switch_instance.$$.fragment);
        switch_instance_anchor = empty();
      },
      m(target, anchor) {
        if (switch_instance) {
          mount_component(switch_instance, target, anchor);
        }
        insert(target, switch_instance_anchor, anchor);
        current = true;
      },
      p(ctx2, dirty) {
        const switch_instance_changes = dirty[0] & 167726975 ? get_spread_update(switch_instance_spread_levels, [
          dirty[0] & 30425703 && {
            use: [
              ...ctx2[6] ? [] : [
                [
                  dist_default,
                  {
                    ripple: !ctx2[14],
                    unbounded: false,
                    color: (ctx2[1] || ctx2[0]) && ctx2[5] == null ? "primary" : ctx2[5],
                    disabled: ctx2[9],
                    addClass: ctx2[22],
                    removeClass: ctx2[23],
                    addStyle: ctx2[24]
                  }
                ]
              ],
              ctx2[20],
              ...ctx2[2]
            ]
          },
          dirty[0] & 2163531 && {
            class: classMap({
              [ctx2[3]]: true,
              "mdc-deprecated-list-item": true,
              "mdc-deprecated-list-item--activated": ctx2[1],
              "mdc-deprecated-list-item--selected": ctx2[0],
              "mdc-deprecated-list-item--disabled": ctx2[9],
              "mdc-menu-item--selected": !ctx2[21] && ctx2[8] === "menuitem" && ctx2[0],
              "smui-menu-item--non-interactive": ctx2[6],
              ...ctx2[16]
            })
          },
          dirty[0] & 131088 && {
            style: Object.entries(ctx2[17]).map(func2).concat([ctx2[4]]).join(" ")
          },
          dirty[0] & 2097154 && get_spread_object(ctx2[21] && ctx2[1] ? { "aria-current": "page" } : {}),
          dirty[0] & 2097408 && get_spread_object(!ctx2[21] ? { role: ctx2[8] } : {}),
          dirty[0] & 2097409 && get_spread_object(!ctx2[21] && ctx2[8] === "option" ? {
            "aria-selected": ctx2[0] ? "true" : "false"
          } : {}),
          dirty[0] & 2113792 && get_spread_object(!ctx2[21] && (ctx2[8] === "radio" || ctx2[8] === "checkbox") ? {
            "aria-checked": ctx2[14] && ctx2[14].checked ? "true" : "false"
          } : {}),
          dirty[0] & 2097664 && get_spread_object(!ctx2[21] ? {
            "aria-disabled": ctx2[9] ? "true" : "false"
          } : {}),
          dirty[0] & 1024 && {
            "data-menu-item-skip-restore-focus": ctx2[10] || void 0
          },
          dirty[0] & 524288 && { tabindex: ctx2[19] },
          dirty[0] & 2048 && { href: ctx2[11] },
          dirty[0] & 262144 && get_spread_object(ctx2[18]),
          dirty[0] & 134217728 && get_spread_object(ctx2[27])
        ]) : {};
        if (dirty[0] & 128 | dirty[1] & 16) {
          switch_instance_changes.$$scope = { dirty, ctx: ctx2 };
        }
        if (switch_value !== (switch_value = ctx2[12])) {
          if (switch_instance) {
            group_outros();
            const old_component = switch_instance;
            transition_out(old_component.$$.fragment, 1, 0, () => {
              destroy_component(old_component, 1);
            });
            check_outros();
          }
          if (switch_value) {
            switch_instance = new switch_value(switch_props(ctx2));
            ctx2[33](switch_instance);
            switch_instance.$on("click", ctx2[13]);
            switch_instance.$on("keydown", ctx2[25]);
            switch_instance.$on("SMUIGenericInput:mount", ctx2[26]);
            switch_instance.$on("SMUIGenericInput:unmount", ctx2[34]);
            create_component(switch_instance.$$.fragment);
            transition_in(switch_instance.$$.fragment, 1);
            mount_component(switch_instance, switch_instance_anchor.parentNode, switch_instance_anchor);
          } else {
            switch_instance = null;
          }
        } else if (switch_value) {
          switch_instance.$set(switch_instance_changes);
        }
      },
      i(local) {
        if (current)
          return;
        if (switch_instance)
          transition_in(switch_instance.$$.fragment, local);
        current = true;
      },
      o(local) {
        if (switch_instance)
          transition_out(switch_instance.$$.fragment, local);
        current = false;
      },
      d(detaching) {
        ctx[33](null);
        if (detaching)
          detach(switch_instance_anchor);
        if (switch_instance)
          destroy_component(switch_instance, detaching);
      }
    };
  }
  var counter = 0;
  var func2 = ([name, value]) => `${name}: ${value};`;
  function instance9($$self, $$props, $$invalidate) {
    let tabindex;
    const omit_props_names = [
      "use",
      "class",
      "style",
      "color",
      "nonInteractive",
      "ripple",
      "activated",
      "role",
      "selected",
      "disabled",
      "skipRestoreFocus",
      "tabindex",
      "inputId",
      "href",
      "component",
      "action",
      "getPrimaryText",
      "getElement"
    ];
    let $$restProps = compute_rest_props($$props, omit_props_names);
    let { $$slots: slots = {}, $$scope } = $$props;
    var _a2;
    const forwardEvents = forwardEventsBuilder(get_current_component());
    let uninitializedValue = () => {
    };
    function isUninitializedValue(value) {
      return value === uninitializedValue;
    }
    let { use = [] } = $$props;
    let { class: className = "" } = $$props;
    let { style = "" } = $$props;
    let { color = void 0 } = $$props;
    let { nonInteractive = (_a2 = getContext("SMUI:list:nonInteractive")) !== null && _a2 !== void 0 ? _a2 : false } = $$props;
    setContext("SMUI:list:nonInteractive", void 0);
    let { ripple = !nonInteractive } = $$props;
    let { activated = false } = $$props;
    let { role = getContext("SMUI:list:item:role") } = $$props;
    setContext("SMUI:list:item:role", void 0);
    let { selected = false } = $$props;
    let { disabled = false } = $$props;
    let { skipRestoreFocus = false } = $$props;
    let { tabindex: tabindexProp = uninitializedValue } = $$props;
    let { inputId = "SMUI-form-field-list-" + counter++ } = $$props;
    let { href = void 0 } = $$props;
    let element2;
    let internalClasses = {};
    let internalStyles = {};
    let internalAttrs = {};
    let input;
    let addTabindexIfNoItemsSelectedRaf;
    let nav = getContext("SMUI:list:item:nav");
    let { component = nav ? href ? A2 : Span2 : Li2 } = $$props;
    setContext("SMUI:generic:input:props", { id: inputId });
    setContext("SMUI:separator:context", void 0);
    onMount(() => {
      if (!selected && !nonInteractive) {
        let first = true;
        let el = element2;
        while (el.previousSibling) {
          el = el.previousSibling;
          if (el.nodeType === 1 && el.classList.contains("mdc-deprecated-list-item") && !el.classList.contains("mdc-deprecated-list-item--disabled")) {
            first = false;
            break;
          }
        }
        if (first) {
          addTabindexIfNoItemsSelectedRaf = window.requestAnimationFrame(addTabindexIfNoItemsSelected);
        }
      }
      const accessor = {
        _smui_list_item_accessor: true,
        get element() {
          return getElement();
        },
        get selected() {
          return selected;
        },
        set selected(value) {
          $$invalidate(0, selected = value);
        },
        hasClass,
        addClass,
        removeClass,
        getAttr,
        addAttr,
        removeAttr,
        getPrimaryText,
        get checked() {
          var _a3;
          return (_a3 = input && input.checked) !== null && _a3 !== void 0 ? _a3 : false;
        },
        set checked(value) {
          if (input) {
            $$invalidate(14, input.checked = !!value, input);
          }
        },
        get hasCheckbox() {
          return !!(input && "_smui_checkbox_accessor" in input);
        },
        get hasRadio() {
          return !!(input && "_smui_radio_accessor" in input);
        },
        activateRipple() {
          if (input) {
            input.activateRipple();
          }
        },
        deactivateRipple() {
          if (input) {
            input.deactivateRipple();
          }
        },
        getValue() {
          return $$restProps.value;
        },
        action,
        get tabindex() {
          return tabindex;
        },
        set tabindex(value) {
          $$invalidate(28, tabindexProp = value);
        },
        get disabled() {
          return disabled;
        },
        get activated() {
          return activated;
        },
        set activated(value) {
          $$invalidate(1, activated = value);
        }
      };
      dispatch(getElement(), "SMUIListItem:mount", accessor);
      return () => {
        dispatch(getElement(), "SMUIListItem:unmount", accessor);
      };
    });
    onDestroy(() => {
      if (addTabindexIfNoItemsSelectedRaf) {
        window.cancelAnimationFrame(addTabindexIfNoItemsSelectedRaf);
      }
    });
    function hasClass(className2) {
      return className2 in internalClasses ? internalClasses[className2] : getElement().classList.contains(className2);
    }
    function addClass(className2) {
      if (!internalClasses[className2]) {
        $$invalidate(16, internalClasses[className2] = true, internalClasses);
      }
    }
    function removeClass(className2) {
      if (!(className2 in internalClasses) || internalClasses[className2]) {
        $$invalidate(16, internalClasses[className2] = false, internalClasses);
      }
    }
    function addStyle(name, value) {
      if (internalStyles[name] != value) {
        if (value === "" || value == null) {
          delete internalStyles[name];
          $$invalidate(17, internalStyles);
        } else {
          $$invalidate(17, internalStyles[name] = value, internalStyles);
        }
      }
    }
    function getAttr(name) {
      var _a3;
      return name in internalAttrs ? (_a3 = internalAttrs[name]) !== null && _a3 !== void 0 ? _a3 : null : getElement().getAttribute(name);
    }
    function addAttr(name, value) {
      if (internalAttrs[name] !== value) {
        $$invalidate(18, internalAttrs[name] = value, internalAttrs);
      }
    }
    function removeAttr(name) {
      if (!(name in internalAttrs) || internalAttrs[name] != null) {
        $$invalidate(18, internalAttrs[name] = void 0, internalAttrs);
      }
    }
    function addTabindexIfNoItemsSelected() {
      let noneSelected = true;
      let el = element2.getElement();
      while (el.nextElementSibling) {
        el = el.nextElementSibling;
        if (el.nodeType === 1 && el.classList.contains("mdc-deprecated-list-item")) {
          const tabindexAttr = el.attributes.getNamedItem("tabindex");
          if (tabindexAttr && tabindexAttr.value === "0") {
            noneSelected = false;
            break;
          }
        }
      }
      if (noneSelected) {
        $$invalidate(19, tabindex = 0);
      }
    }
    function handleKeydown2(e) {
      const isEnter = e.key === "Enter";
      const isSpace = e.key === "Space";
      if (isEnter || isSpace) {
        action(e);
      }
    }
    function handleInputMount(e) {
      if ("_smui_checkbox_accessor" in e.detail || "_smui_radio_accessor" in e.detail) {
        $$invalidate(14, input = e.detail);
      }
    }
    function action(e) {
      if (!disabled) {
        dispatch(getElement(), "SMUI:action", e);
      }
    }
    function getPrimaryText() {
      var _a3, _b2, _c;
      const element3 = getElement();
      const primaryText = element3.querySelector(".mdc-deprecated-list-item__primary-text");
      if (primaryText) {
        return (_a3 = primaryText.textContent) !== null && _a3 !== void 0 ? _a3 : "";
      }
      const text2 = element3.querySelector(".mdc-deprecated-list-item__text");
      if (text2) {
        return (_b2 = text2.textContent) !== null && _b2 !== void 0 ? _b2 : "";
      }
      return (_c = element3.textContent) !== null && _c !== void 0 ? _c : "";
    }
    function getElement() {
      return element2.getElement();
    }
    function switch_instance_binding($$value) {
      binding_callbacks[$$value ? "unshift" : "push"](() => {
        element2 = $$value;
        $$invalidate(15, element2);
      });
    }
    const SMUIGenericInput_unmount_handler = () => $$invalidate(14, input = void 0);
    $$self.$$set = ($$new_props) => {
      $$props = assign(assign({}, $$props), exclude_internal_props($$new_props));
      $$invalidate(27, $$restProps = compute_rest_props($$props, omit_props_names));
      if ("use" in $$new_props)
        $$invalidate(2, use = $$new_props.use);
      if ("class" in $$new_props)
        $$invalidate(3, className = $$new_props.class);
      if ("style" in $$new_props)
        $$invalidate(4, style = $$new_props.style);
      if ("color" in $$new_props)
        $$invalidate(5, color = $$new_props.color);
      if ("nonInteractive" in $$new_props)
        $$invalidate(6, nonInteractive = $$new_props.nonInteractive);
      if ("ripple" in $$new_props)
        $$invalidate(7, ripple = $$new_props.ripple);
      if ("activated" in $$new_props)
        $$invalidate(1, activated = $$new_props.activated);
      if ("role" in $$new_props)
        $$invalidate(8, role = $$new_props.role);
      if ("selected" in $$new_props)
        $$invalidate(0, selected = $$new_props.selected);
      if ("disabled" in $$new_props)
        $$invalidate(9, disabled = $$new_props.disabled);
      if ("skipRestoreFocus" in $$new_props)
        $$invalidate(10, skipRestoreFocus = $$new_props.skipRestoreFocus);
      if ("tabindex" in $$new_props)
        $$invalidate(28, tabindexProp = $$new_props.tabindex);
      if ("inputId" in $$new_props)
        $$invalidate(29, inputId = $$new_props.inputId);
      if ("href" in $$new_props)
        $$invalidate(11, href = $$new_props.href);
      if ("component" in $$new_props)
        $$invalidate(12, component = $$new_props.component);
      if ("$$scope" in $$new_props)
        $$invalidate(35, $$scope = $$new_props.$$scope);
    };
    $$self.$$.update = () => {
      if ($$self.$$.dirty[0] & 268452417) {
        $:
          $$invalidate(19, tabindex = isUninitializedValue(tabindexProp) ? !nonInteractive && !disabled && (selected || input && input.checked) ? 0 : -1 : tabindexProp);
      }
    };
    return [
      selected,
      activated,
      use,
      className,
      style,
      color,
      nonInteractive,
      ripple,
      role,
      disabled,
      skipRestoreFocus,
      href,
      component,
      action,
      input,
      element2,
      internalClasses,
      internalStyles,
      internalAttrs,
      tabindex,
      forwardEvents,
      nav,
      addClass,
      removeClass,
      addStyle,
      handleKeydown2,
      handleInputMount,
      $$restProps,
      tabindexProp,
      inputId,
      getPrimaryText,
      getElement,
      slots,
      switch_instance_binding,
      SMUIGenericInput_unmount_handler,
      $$scope
    ];
  }
  var Item = class extends SvelteComponent {
    constructor(options) {
      super();
      init(this, options, instance9, create_fragment12, safe_not_equal, {
        use: 2,
        class: 3,
        style: 4,
        color: 5,
        nonInteractive: 6,
        ripple: 7,
        activated: 1,
        role: 8,
        selected: 0,
        disabled: 9,
        skipRestoreFocus: 10,
        tabindex: 28,
        inputId: 29,
        href: 11,
        component: 12,
        action: 13,
        getPrimaryText: 30,
        getElement: 31
      }, null, [-1, -1]);
    }
    get action() {
      return this.$$.ctx[13];
    }
    get getPrimaryText() {
      return this.$$.ctx[30];
    }
    get getElement() {
      return this.$$.ctx[31];
    }
  };
  var Item_default = Item;

  // node_modules/@smui/list/dist/Text.js
  var Text_default = classAdderBuilder({
    class: "mdc-deprecated-list-item__text",
    component: Span2
  });

  // node_modules/@smui/list/dist/PrimaryText.js
  var PrimaryText_default = classAdderBuilder({
    class: "mdc-deprecated-list-item__primary-text",
    component: Span2
  });

  // node_modules/@smui/list/dist/SecondaryText.js
  var SecondaryText_default = classAdderBuilder({
    class: "mdc-deprecated-list-item__secondary-text",
    component: Span2
  });

  // node_modules/@smui/list/dist/Graphic.svelte
  function create_fragment13(ctx) {
    let span;
    let span_class_value;
    let useActions_action;
    let forwardEvents_action;
    let current;
    let mounted;
    let dispose;
    const default_slot_template = ctx[8].default;
    const default_slot = create_slot(default_slot_template, ctx, ctx[7], null);
    let span_levels = [
      {
        class: span_class_value = classMap({
          [ctx[1]]: true,
          "mdc-deprecated-list-item__graphic": true,
          "mdc-menu__selection-group-icon": ctx[4]
        })
      },
      ctx[5]
    ];
    let span_data = {};
    for (let i = 0; i < span_levels.length; i += 1) {
      span_data = assign(span_data, span_levels[i]);
    }
    return {
      c() {
        span = element("span");
        if (default_slot)
          default_slot.c();
        set_attributes(span, span_data);
      },
      m(target, anchor) {
        insert(target, span, anchor);
        if (default_slot) {
          default_slot.m(span, null);
        }
        ctx[9](span);
        current = true;
        if (!mounted) {
          dispose = [
            action_destroyer(useActions_action = useActions.call(null, span, ctx[0])),
            action_destroyer(forwardEvents_action = ctx[3].call(null, span))
          ];
          mounted = true;
        }
      },
      p(ctx2, [dirty]) {
        if (default_slot) {
          if (default_slot.p && (!current || dirty & 128)) {
            update_slot_base(default_slot, default_slot_template, ctx2, ctx2[7], !current ? get_all_dirty_from_scope(ctx2[7]) : get_slot_changes(default_slot_template, ctx2[7], dirty, null), null);
          }
        }
        set_attributes(span, span_data = get_spread_update(span_levels, [
          (!current || dirty & 2 && span_class_value !== (span_class_value = classMap({
            [ctx2[1]]: true,
            "mdc-deprecated-list-item__graphic": true,
            "mdc-menu__selection-group-icon": ctx2[4]
          }))) && { class: span_class_value },
          dirty & 32 && ctx2[5]
        ]));
        if (useActions_action && is_function(useActions_action.update) && dirty & 1)
          useActions_action.update.call(null, ctx2[0]);
      },
      i(local) {
        if (current)
          return;
        transition_in(default_slot, local);
        current = true;
      },
      o(local) {
        transition_out(default_slot, local);
        current = false;
      },
      d(detaching) {
        if (detaching)
          detach(span);
        if (default_slot)
          default_slot.d(detaching);
        ctx[9](null);
        mounted = false;
        run_all(dispose);
      }
    };
  }
  function instance10($$self, $$props, $$invalidate) {
    const omit_props_names = ["use", "class", "getElement"];
    let $$restProps = compute_rest_props($$props, omit_props_names);
    let { $$slots: slots = {}, $$scope } = $$props;
    const forwardEvents = forwardEventsBuilder(get_current_component());
    let { use = [] } = $$props;
    let { class: className = "" } = $$props;
    let element2;
    let menuSelectionGroup = getContext("SMUI:list:graphic:menu-selection-group");
    function getElement() {
      return element2;
    }
    function span_binding($$value) {
      binding_callbacks[$$value ? "unshift" : "push"](() => {
        element2 = $$value;
        $$invalidate(2, element2);
      });
    }
    $$self.$$set = ($$new_props) => {
      $$props = assign(assign({}, $$props), exclude_internal_props($$new_props));
      $$invalidate(5, $$restProps = compute_rest_props($$props, omit_props_names));
      if ("use" in $$new_props)
        $$invalidate(0, use = $$new_props.use);
      if ("class" in $$new_props)
        $$invalidate(1, className = $$new_props.class);
      if ("$$scope" in $$new_props)
        $$invalidate(7, $$scope = $$new_props.$$scope);
    };
    return [
      use,
      className,
      element2,
      forwardEvents,
      menuSelectionGroup,
      $$restProps,
      getElement,
      $$scope,
      slots,
      span_binding
    ];
  }
  var Graphic = class extends SvelteComponent {
    constructor(options) {
      super();
      init(this, options, instance10, create_fragment13, safe_not_equal, { use: 0, class: 1, getElement: 6 });
    }
    get getElement() {
      return this.$$.ctx[6];
    }
  };
  var Graphic_default = Graphic;

  // node_modules/@smui/list/dist/Meta.js
  var Meta_default = classAdderBuilder({
    class: "mdc-deprecated-list-item__meta",
    component: Span2
  });

  // node_modules/@smui/list/dist/Group.js
  var Group_default = classAdderBuilder({
    class: "mdc-deprecated-list-group",
    component: Div2
  });

  // node_modules/@smui/list/dist/Subheader.js
  var Subheader_default = classAdderBuilder({
    class: "mdc-deprecated-list-group__subheader",
    component: H32
  });

  // node_modules/@smui/list/dist/index.js
  var Item2 = Item_default;
  var Graphic2 = Graphic_default;
  var dist_default3 = List_default;

  // node_modules/@smui/menu/dist/SelectionGroupIcon.js
  var SelectionGroupIcon_default = classAdderBuilder({
    class: "mdc-menu__selection-group-icon",
    component: Graphic2
  });

  // node_modules/@smui/menu/dist/index.js
  var dist_default4 = Menu_default;

  // node_modules/@smui/floating-label/dist/FloatingLabel.svelte
  function create_else_block(ctx) {
    let label;
    let label_class_value;
    let label_style_value;
    let label_for_value;
    let useActions_action;
    let forwardEvents_action;
    let current;
    let mounted;
    let dispose;
    const default_slot_template = ctx[22].default;
    const default_slot = create_slot(default_slot_template, ctx, ctx[21], null);
    let label_levels = [
      {
        class: label_class_value = classMap({
          [ctx[3]]: true,
          "mdc-floating-label": true,
          "mdc-floating-label--float-above": ctx[0],
          "mdc-floating-label--required": ctx[1],
          ...ctx[8]
        })
      },
      {
        style: label_style_value = Object.entries(ctx[9]).map(func_1).concat([ctx[4]]).join(" ")
      },
      {
        for: label_for_value = ctx[5] || (ctx[11] ? ctx[11].id : void 0)
      },
      ctx[12]
    ];
    let label_data = {};
    for (let i = 0; i < label_levels.length; i += 1) {
      label_data = assign(label_data, label_levels[i]);
    }
    return {
      c() {
        label = element("label");
        if (default_slot)
          default_slot.c();
        set_attributes(label, label_data);
      },
      m(target, anchor) {
        insert(target, label, anchor);
        if (default_slot) {
          default_slot.m(label, null);
        }
        ctx[24](label);
        current = true;
        if (!mounted) {
          dispose = [
            action_destroyer(useActions_action = useActions.call(null, label, ctx[2])),
            action_destroyer(forwardEvents_action = ctx[10].call(null, label))
          ];
          mounted = true;
        }
      },
      p(ctx2, dirty) {
        if (default_slot) {
          if (default_slot.p && (!current || dirty & 2097152)) {
            update_slot_base(default_slot, default_slot_template, ctx2, ctx2[21], !current ? get_all_dirty_from_scope(ctx2[21]) : get_slot_changes(default_slot_template, ctx2[21], dirty, null), null);
          }
        }
        set_attributes(label, label_data = get_spread_update(label_levels, [
          (!current || dirty & 267 && label_class_value !== (label_class_value = classMap({
            [ctx2[3]]: true,
            "mdc-floating-label": true,
            "mdc-floating-label--float-above": ctx2[0],
            "mdc-floating-label--required": ctx2[1],
            ...ctx2[8]
          }))) && { class: label_class_value },
          (!current || dirty & 528 && label_style_value !== (label_style_value = Object.entries(ctx2[9]).map(func_1).concat([ctx2[4]]).join(" "))) && { style: label_style_value },
          (!current || dirty & 32 && label_for_value !== (label_for_value = ctx2[5] || (ctx2[11] ? ctx2[11].id : void 0))) && { for: label_for_value },
          dirty & 4096 && ctx2[12]
        ]));
        if (useActions_action && is_function(useActions_action.update) && dirty & 4)
          useActions_action.update.call(null, ctx2[2]);
      },
      i(local) {
        if (current)
          return;
        transition_in(default_slot, local);
        current = true;
      },
      o(local) {
        transition_out(default_slot, local);
        current = false;
      },
      d(detaching) {
        if (detaching)
          detach(label);
        if (default_slot)
          default_slot.d(detaching);
        ctx[24](null);
        mounted = false;
        run_all(dispose);
      }
    };
  }
  function create_if_block2(ctx) {
    let span;
    let span_class_value;
    let span_style_value;
    let useActions_action;
    let forwardEvents_action;
    let current;
    let mounted;
    let dispose;
    const default_slot_template = ctx[22].default;
    const default_slot = create_slot(default_slot_template, ctx, ctx[21], null);
    let span_levels = [
      {
        class: span_class_value = classMap({
          [ctx[3]]: true,
          "mdc-floating-label": true,
          "mdc-floating-label--float-above": ctx[0],
          "mdc-floating-label--required": ctx[1],
          ...ctx[8]
        })
      },
      {
        style: span_style_value = Object.entries(ctx[9]).map(func3).concat([ctx[4]]).join(" ")
      },
      ctx[12]
    ];
    let span_data = {};
    for (let i = 0; i < span_levels.length; i += 1) {
      span_data = assign(span_data, span_levels[i]);
    }
    return {
      c() {
        span = element("span");
        if (default_slot)
          default_slot.c();
        set_attributes(span, span_data);
      },
      m(target, anchor) {
        insert(target, span, anchor);
        if (default_slot) {
          default_slot.m(span, null);
        }
        ctx[23](span);
        current = true;
        if (!mounted) {
          dispose = [
            action_destroyer(useActions_action = useActions.call(null, span, ctx[2])),
            action_destroyer(forwardEvents_action = ctx[10].call(null, span))
          ];
          mounted = true;
        }
      },
      p(ctx2, dirty) {
        if (default_slot) {
          if (default_slot.p && (!current || dirty & 2097152)) {
            update_slot_base(default_slot, default_slot_template, ctx2, ctx2[21], !current ? get_all_dirty_from_scope(ctx2[21]) : get_slot_changes(default_slot_template, ctx2[21], dirty, null), null);
          }
        }
        set_attributes(span, span_data = get_spread_update(span_levels, [
          (!current || dirty & 267 && span_class_value !== (span_class_value = classMap({
            [ctx2[3]]: true,
            "mdc-floating-label": true,
            "mdc-floating-label--float-above": ctx2[0],
            "mdc-floating-label--required": ctx2[1],
            ...ctx2[8]
          }))) && { class: span_class_value },
          (!current || dirty & 528 && span_style_value !== (span_style_value = Object.entries(ctx2[9]).map(func3).concat([ctx2[4]]).join(" "))) && { style: span_style_value },
          dirty & 4096 && ctx2[12]
        ]));
        if (useActions_action && is_function(useActions_action.update) && dirty & 4)
          useActions_action.update.call(null, ctx2[2]);
      },
      i(local) {
        if (current)
          return;
        transition_in(default_slot, local);
        current = true;
      },
      o(local) {
        transition_out(default_slot, local);
        current = false;
      },
      d(detaching) {
        if (detaching)
          detach(span);
        if (default_slot)
          default_slot.d(detaching);
        ctx[23](null);
        mounted = false;
        run_all(dispose);
      }
    };
  }
  function create_fragment14(ctx) {
    let current_block_type_index;
    let if_block;
    let if_block_anchor;
    let current;
    const if_block_creators = [create_if_block2, create_else_block];
    const if_blocks = [];
    function select_block_type(ctx2, dirty) {
      if (ctx2[6])
        return 0;
      return 1;
    }
    current_block_type_index = select_block_type(ctx, -1);
    if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
    return {
      c() {
        if_block.c();
        if_block_anchor = empty();
      },
      m(target, anchor) {
        if_blocks[current_block_type_index].m(target, anchor);
        insert(target, if_block_anchor, anchor);
        current = true;
      },
      p(ctx2, [dirty]) {
        let previous_block_index = current_block_type_index;
        current_block_type_index = select_block_type(ctx2, dirty);
        if (current_block_type_index === previous_block_index) {
          if_blocks[current_block_type_index].p(ctx2, dirty);
        } else {
          group_outros();
          transition_out(if_blocks[previous_block_index], 1, 1, () => {
            if_blocks[previous_block_index] = null;
          });
          check_outros();
          if_block = if_blocks[current_block_type_index];
          if (!if_block) {
            if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx2);
            if_block.c();
          } else {
            if_block.p(ctx2, dirty);
          }
          transition_in(if_block, 1);
          if_block.m(if_block_anchor.parentNode, if_block_anchor);
        }
      },
      i(local) {
        if (current)
          return;
        transition_in(if_block);
        current = true;
      },
      o(local) {
        transition_out(if_block);
        current = false;
      },
      d(detaching) {
        if_blocks[current_block_type_index].d(detaching);
        if (detaching)
          detach(if_block_anchor);
      }
    };
  }
  var func3 = ([name, value]) => `${name}: ${value};`;
  var func_1 = ([name, value]) => `${name}: ${value};`;
  function instance_14($$self, $$props, $$invalidate) {
    const omit_props_names = [
      "use",
      "class",
      "style",
      "for",
      "floatAbove",
      "required",
      "wrapped",
      "shake",
      "float",
      "setRequired",
      "getWidth",
      "getElement"
    ];
    let $$restProps = compute_rest_props($$props, omit_props_names);
    let { $$slots: slots = {}, $$scope } = $$props;
    var _a2;
    const forwardEvents = forwardEventsBuilder(get_current_component());
    let { use = [] } = $$props;
    let { class: className = "" } = $$props;
    let { style = "" } = $$props;
    let { for: forId = void 0 } = $$props;
    let { floatAbove = false } = $$props;
    let { required = false } = $$props;
    let { wrapped = false } = $$props;
    let element2;
    let instance13;
    let internalClasses = {};
    let internalStyles = {};
    let inputProps = (_a2 = getContext("SMUI:generic:input:props")) !== null && _a2 !== void 0 ? _a2 : {};
    let previousFloatAbove = floatAbove;
    let previousRequired = required;
    onMount(() => {
      $$invalidate(18, instance13 = new MDCFloatingLabelFoundation({
        addClass,
        removeClass,
        getWidth: () => {
          var _a3, _b2;
          const el = getElement();
          const clone = el.cloneNode(true);
          (_a3 = el.parentNode) === null || _a3 === void 0 ? void 0 : _a3.appendChild(clone);
          clone.classList.add("smui-floating-label--remove-transition");
          clone.classList.add("smui-floating-label--force-size");
          clone.classList.remove("mdc-floating-label--float-above");
          const scrollWidth = clone.scrollWidth;
          (_b2 = el.parentNode) === null || _b2 === void 0 ? void 0 : _b2.removeChild(clone);
          return scrollWidth;
        },
        registerInteractionHandler: (evtType, handler) => getElement().addEventListener(evtType, handler),
        deregisterInteractionHandler: (evtType, handler) => getElement().removeEventListener(evtType, handler)
      }));
      const accessor = {
        get element() {
          return getElement();
        },
        addStyle,
        removeStyle
      };
      dispatch(element2, "SMUIFloatingLabel:mount", accessor);
      instance13.init();
      return () => {
        dispatch(element2, "SMUIFloatingLabel:unmount", accessor);
        instance13.destroy();
      };
    });
    function addClass(className2) {
      if (!internalClasses[className2]) {
        $$invalidate(8, internalClasses[className2] = true, internalClasses);
      }
    }
    function removeClass(className2) {
      if (!(className2 in internalClasses) || internalClasses[className2]) {
        $$invalidate(8, internalClasses[className2] = false, internalClasses);
      }
    }
    function addStyle(name, value) {
      if (internalStyles[name] != value) {
        if (value === "" || value == null) {
          delete internalStyles[name];
          $$invalidate(9, internalStyles);
        } else {
          $$invalidate(9, internalStyles[name] = value, internalStyles);
        }
      }
    }
    function removeStyle(name) {
      if (name in internalStyles) {
        delete internalStyles[name];
        $$invalidate(9, internalStyles);
      }
    }
    function shake(shouldShake) {
      instance13.shake(shouldShake);
    }
    function float(shouldFloat) {
      $$invalidate(0, floatAbove = shouldFloat);
    }
    function setRequired(isRequired) {
      $$invalidate(1, required = isRequired);
    }
    function getWidth() {
      return instance13.getWidth();
    }
    function getElement() {
      return element2;
    }
    function span_binding($$value) {
      binding_callbacks[$$value ? "unshift" : "push"](() => {
        element2 = $$value;
        $$invalidate(7, element2);
      });
    }
    function label_binding($$value) {
      binding_callbacks[$$value ? "unshift" : "push"](() => {
        element2 = $$value;
        $$invalidate(7, element2);
      });
    }
    $$self.$$set = ($$new_props) => {
      $$props = assign(assign({}, $$props), exclude_internal_props($$new_props));
      $$invalidate(12, $$restProps = compute_rest_props($$props, omit_props_names));
      if ("use" in $$new_props)
        $$invalidate(2, use = $$new_props.use);
      if ("class" in $$new_props)
        $$invalidate(3, className = $$new_props.class);
      if ("style" in $$new_props)
        $$invalidate(4, style = $$new_props.style);
      if ("for" in $$new_props)
        $$invalidate(5, forId = $$new_props.for);
      if ("floatAbove" in $$new_props)
        $$invalidate(0, floatAbove = $$new_props.floatAbove);
      if ("required" in $$new_props)
        $$invalidate(1, required = $$new_props.required);
      if ("wrapped" in $$new_props)
        $$invalidate(6, wrapped = $$new_props.wrapped);
      if ("$$scope" in $$new_props)
        $$invalidate(21, $$scope = $$new_props.$$scope);
    };
    $$self.$$.update = () => {
      if ($$self.$$.dirty & 786433) {
        $:
          if (instance13 && previousFloatAbove !== floatAbove) {
            $$invalidate(19, previousFloatAbove = floatAbove);
            instance13.float(floatAbove);
          }
      }
      if ($$self.$$.dirty & 1310722) {
        $:
          if (instance13 && previousRequired !== required) {
            $$invalidate(20, previousRequired = required);
            instance13.setRequired(required);
          }
      }
    };
    return [
      floatAbove,
      required,
      use,
      className,
      style,
      forId,
      wrapped,
      element2,
      internalClasses,
      internalStyles,
      forwardEvents,
      inputProps,
      $$restProps,
      shake,
      float,
      setRequired,
      getWidth,
      getElement,
      instance13,
      previousFloatAbove,
      previousRequired,
      $$scope,
      slots,
      span_binding,
      label_binding
    ];
  }
  var FloatingLabel = class extends SvelteComponent {
    constructor(options) {
      super();
      init(this, options, instance_14, create_fragment14, safe_not_equal, {
        use: 2,
        class: 3,
        style: 4,
        for: 5,
        floatAbove: 0,
        required: 1,
        wrapped: 6,
        shake: 13,
        float: 14,
        setRequired: 15,
        getWidth: 16,
        getElement: 17
      });
    }
    get shake() {
      return this.$$.ctx[13];
    }
    get float() {
      return this.$$.ctx[14];
    }
    get setRequired() {
      return this.$$.ctx[15];
    }
    get getWidth() {
      return this.$$.ctx[16];
    }
    get getElement() {
      return this.$$.ctx[17];
    }
  };
  var FloatingLabel_default = FloatingLabel;

  // node_modules/@smui/floating-label/dist/index.js
  var dist_default5 = FloatingLabel_default;

  // node_modules/@smui/line-ripple/dist/LineRipple.svelte
  function create_fragment15(ctx) {
    let div;
    let div_class_value;
    let div_style_value;
    let useActions_action;
    let forwardEvents_action;
    let mounted;
    let dispose;
    let div_levels = [
      {
        class: div_class_value = classMap({
          [ctx[1]]: true,
          "mdc-line-ripple": true,
          "mdc-line-ripple--active": ctx[3],
          ...ctx[5]
        })
      },
      {
        style: div_style_value = Object.entries(ctx[6]).map(func4).concat([ctx[2]]).join(" ")
      },
      ctx[8]
    ];
    let div_data = {};
    for (let i = 0; i < div_levels.length; i += 1) {
      div_data = assign(div_data, div_levels[i]);
    }
    return {
      c() {
        div = element("div");
        set_attributes(div, div_data);
      },
      m(target, anchor) {
        insert(target, div, anchor);
        ctx[13](div);
        if (!mounted) {
          dispose = [
            action_destroyer(useActions_action = useActions.call(null, div, ctx[0])),
            action_destroyer(forwardEvents_action = ctx[7].call(null, div))
          ];
          mounted = true;
        }
      },
      p(ctx2, [dirty]) {
        set_attributes(div, div_data = get_spread_update(div_levels, [
          dirty & 42 && div_class_value !== (div_class_value = classMap({
            [ctx2[1]]: true,
            "mdc-line-ripple": true,
            "mdc-line-ripple--active": ctx2[3],
            ...ctx2[5]
          })) && { class: div_class_value },
          dirty & 68 && div_style_value !== (div_style_value = Object.entries(ctx2[6]).map(func4).concat([ctx2[2]]).join(" ")) && { style: div_style_value },
          dirty & 256 && ctx2[8]
        ]));
        if (useActions_action && is_function(useActions_action.update) && dirty & 1)
          useActions_action.update.call(null, ctx2[0]);
      },
      i: noop,
      o: noop,
      d(detaching) {
        if (detaching)
          detach(div);
        ctx[13](null);
        mounted = false;
        run_all(dispose);
      }
    };
  }
  var func4 = ([name, value]) => `${name}: ${value};`;
  function instance_15($$self, $$props, $$invalidate) {
    const omit_props_names = [
      "use",
      "class",
      "style",
      "active",
      "activate",
      "deactivate",
      "setRippleCenter",
      "getElement"
    ];
    let $$restProps = compute_rest_props($$props, omit_props_names);
    const forwardEvents = forwardEventsBuilder(get_current_component());
    let { use = [] } = $$props;
    let { class: className = "" } = $$props;
    let { style = "" } = $$props;
    let { active = false } = $$props;
    let element2;
    let instance13;
    let internalClasses = {};
    let internalStyles = {};
    onMount(() => {
      instance13 = new MDCLineRippleFoundation({
        addClass,
        removeClass,
        hasClass,
        setStyle: addStyle,
        registerEventHandler: (evtType, handler) => getElement().addEventListener(evtType, handler),
        deregisterEventHandler: (evtType, handler) => getElement().removeEventListener(evtType, handler)
      });
      instance13.init();
      return () => {
        instance13.destroy();
      };
    });
    function hasClass(className2) {
      return className2 in internalClasses ? internalClasses[className2] : getElement().classList.contains(className2);
    }
    function addClass(className2) {
      if (!internalClasses[className2]) {
        $$invalidate(5, internalClasses[className2] = true, internalClasses);
      }
    }
    function removeClass(className2) {
      if (!(className2 in internalClasses) || internalClasses[className2]) {
        $$invalidate(5, internalClasses[className2] = false, internalClasses);
      }
    }
    function addStyle(name, value) {
      if (internalStyles[name] != value) {
        if (value === "" || value == null) {
          delete internalStyles[name];
          $$invalidate(6, internalStyles);
        } else {
          $$invalidate(6, internalStyles[name] = value, internalStyles);
        }
      }
    }
    function activate() {
      instance13.activate();
    }
    function deactivate() {
      instance13.deactivate();
    }
    function setRippleCenter(xCoordinate) {
      instance13.setRippleCenter(xCoordinate);
    }
    function getElement() {
      return element2;
    }
    function div_binding($$value) {
      binding_callbacks[$$value ? "unshift" : "push"](() => {
        element2 = $$value;
        $$invalidate(4, element2);
      });
    }
    $$self.$$set = ($$new_props) => {
      $$props = assign(assign({}, $$props), exclude_internal_props($$new_props));
      $$invalidate(8, $$restProps = compute_rest_props($$props, omit_props_names));
      if ("use" in $$new_props)
        $$invalidate(0, use = $$new_props.use);
      if ("class" in $$new_props)
        $$invalidate(1, className = $$new_props.class);
      if ("style" in $$new_props)
        $$invalidate(2, style = $$new_props.style);
      if ("active" in $$new_props)
        $$invalidate(3, active = $$new_props.active);
    };
    return [
      use,
      className,
      style,
      active,
      element2,
      internalClasses,
      internalStyles,
      forwardEvents,
      $$restProps,
      activate,
      deactivate,
      setRippleCenter,
      getElement,
      div_binding
    ];
  }
  var LineRipple = class extends SvelteComponent {
    constructor(options) {
      super();
      init(this, options, instance_15, create_fragment15, safe_not_equal, {
        use: 0,
        class: 1,
        style: 2,
        active: 3,
        activate: 9,
        deactivate: 10,
        setRippleCenter: 11,
        getElement: 12
      });
    }
    get activate() {
      return this.$$.ctx[9];
    }
    get deactivate() {
      return this.$$.ctx[10];
    }
    get setRippleCenter() {
      return this.$$.ctx[11];
    }
    get getElement() {
      return this.$$.ctx[12];
    }
  };
  var LineRipple_default = LineRipple;

  // node_modules/@smui/line-ripple/dist/index.js
  var dist_default6 = LineRipple_default;

  // node_modules/@smui/notched-outline/dist/NotchedOutline.svelte
  function create_if_block3(ctx) {
    let div;
    let div_style_value;
    let current;
    const default_slot_template = ctx[14].default;
    const default_slot = create_slot(default_slot_template, ctx, ctx[13], null);
    return {
      c() {
        div = element("div");
        if (default_slot)
          default_slot.c();
        attr(div, "class", "mdc-notched-outline__notch");
        attr(div, "style", div_style_value = Object.entries(ctx[7]).map(func5).join(" "));
      },
      m(target, anchor) {
        insert(target, div, anchor);
        if (default_slot) {
          default_slot.m(div, null);
        }
        current = true;
      },
      p(ctx2, dirty) {
        if (default_slot) {
          if (default_slot.p && (!current || dirty & 8192)) {
            update_slot_base(default_slot, default_slot_template, ctx2, ctx2[13], !current ? get_all_dirty_from_scope(ctx2[13]) : get_slot_changes(default_slot_template, ctx2[13], dirty, null), null);
          }
        }
        if (!current || dirty & 128 && div_style_value !== (div_style_value = Object.entries(ctx2[7]).map(func5).join(" "))) {
          attr(div, "style", div_style_value);
        }
      },
      i(local) {
        if (current)
          return;
        transition_in(default_slot, local);
        current = true;
      },
      o(local) {
        transition_out(default_slot, local);
        current = false;
      },
      d(detaching) {
        if (detaching)
          detach(div);
        if (default_slot)
          default_slot.d(detaching);
      }
    };
  }
  function create_fragment16(ctx) {
    let div2;
    let div0;
    let t0;
    let t1;
    let div1;
    let div2_class_value;
    let useActions_action;
    let forwardEvents_action;
    let current;
    let mounted;
    let dispose;
    let if_block = !ctx[3] && create_if_block3(ctx);
    let div2_levels = [
      {
        class: div2_class_value = classMap({
          [ctx[1]]: true,
          "mdc-notched-outline": true,
          "mdc-notched-outline--notched": ctx[2],
          "mdc-notched-outline--no-label": ctx[3],
          ...ctx[6]
        })
      },
      ctx[9]
    ];
    let div2_data = {};
    for (let i = 0; i < div2_levels.length; i += 1) {
      div2_data = assign(div2_data, div2_levels[i]);
    }
    return {
      c() {
        div2 = element("div");
        div0 = element("div");
        t0 = space();
        if (if_block)
          if_block.c();
        t1 = space();
        div1 = element("div");
        attr(div0, "class", "mdc-notched-outline__leading");
        attr(div1, "class", "mdc-notched-outline__trailing");
        set_attributes(div2, div2_data);
      },
      m(target, anchor) {
        insert(target, div2, anchor);
        append(div2, div0);
        append(div2, t0);
        if (if_block)
          if_block.m(div2, null);
        append(div2, t1);
        append(div2, div1);
        ctx[15](div2);
        current = true;
        if (!mounted) {
          dispose = [
            action_destroyer(useActions_action = useActions.call(null, div2, ctx[0])),
            action_destroyer(forwardEvents_action = ctx[8].call(null, div2)),
            listen(div2, "SMUIFloatingLabel:mount", ctx[16]),
            listen(div2, "SMUIFloatingLabel:unmount", ctx[17])
          ];
          mounted = true;
        }
      },
      p(ctx2, [dirty]) {
        if (!ctx2[3]) {
          if (if_block) {
            if_block.p(ctx2, dirty);
            if (dirty & 8) {
              transition_in(if_block, 1);
            }
          } else {
            if_block = create_if_block3(ctx2);
            if_block.c();
            transition_in(if_block, 1);
            if_block.m(div2, t1);
          }
        } else if (if_block) {
          group_outros();
          transition_out(if_block, 1, 1, () => {
            if_block = null;
          });
          check_outros();
        }
        set_attributes(div2, div2_data = get_spread_update(div2_levels, [
          (!current || dirty & 78 && div2_class_value !== (div2_class_value = classMap({
            [ctx2[1]]: true,
            "mdc-notched-outline": true,
            "mdc-notched-outline--notched": ctx2[2],
            "mdc-notched-outline--no-label": ctx2[3],
            ...ctx2[6]
          }))) && { class: div2_class_value },
          dirty & 512 && ctx2[9]
        ]));
        if (useActions_action && is_function(useActions_action.update) && dirty & 1)
          useActions_action.update.call(null, ctx2[0]);
      },
      i(local) {
        if (current)
          return;
        transition_in(if_block);
        current = true;
      },
      o(local) {
        transition_out(if_block);
        current = false;
      },
      d(detaching) {
        if (detaching)
          detach(div2);
        if (if_block)
          if_block.d();
        ctx[15](null);
        mounted = false;
        run_all(dispose);
      }
    };
  }
  var func5 = ([name, value]) => `${name}: ${value};`;
  function instance_16($$self, $$props, $$invalidate) {
    const omit_props_names = ["use", "class", "notched", "noLabel", "notch", "closeNotch", "getElement"];
    let $$restProps = compute_rest_props($$props, omit_props_names);
    let { $$slots: slots = {}, $$scope } = $$props;
    const forwardEvents = forwardEventsBuilder(get_current_component());
    let { use = [] } = $$props;
    let { class: className = "" } = $$props;
    let { notched = false } = $$props;
    let { noLabel = false } = $$props;
    let element2;
    let instance13;
    let floatingLabel;
    let internalClasses = {};
    let notchStyles = {};
    onMount(() => {
      instance13 = new MDCNotchedOutlineFoundation({
        addClass,
        removeClass,
        setNotchWidthProperty: (width) => addNotchStyle("width", width + "px"),
        removeNotchWidthProperty: () => removeNotchStyle("width")
      });
      instance13.init();
      return () => {
        instance13.destroy();
      };
    });
    function addClass(className2) {
      if (!internalClasses[className2]) {
        $$invalidate(6, internalClasses[className2] = true, internalClasses);
      }
    }
    function removeClass(className2) {
      if (!(className2 in internalClasses) || internalClasses[className2]) {
        $$invalidate(6, internalClasses[className2] = false, internalClasses);
      }
    }
    function addNotchStyle(name, value) {
      if (notchStyles[name] != value) {
        if (value === "" || value == null) {
          delete notchStyles[name];
          $$invalidate(7, notchStyles);
        } else {
          $$invalidate(7, notchStyles[name] = value, notchStyles);
        }
      }
    }
    function removeNotchStyle(name) {
      if (name in notchStyles) {
        delete notchStyles[name];
        $$invalidate(7, notchStyles);
      }
    }
    function notch(notchWidth) {
      instance13.notch(notchWidth);
    }
    function closeNotch() {
      instance13.closeNotch();
    }
    function getElement() {
      return element2;
    }
    function div2_binding($$value) {
      binding_callbacks[$$value ? "unshift" : "push"](() => {
        element2 = $$value;
        $$invalidate(5, element2);
      });
    }
    const SMUIFloatingLabel_mount_handler = (event) => $$invalidate(4, floatingLabel = event.detail);
    const SMUIFloatingLabel_unmount_handler = () => $$invalidate(4, floatingLabel = void 0);
    $$self.$$set = ($$new_props) => {
      $$props = assign(assign({}, $$props), exclude_internal_props($$new_props));
      $$invalidate(9, $$restProps = compute_rest_props($$props, omit_props_names));
      if ("use" in $$new_props)
        $$invalidate(0, use = $$new_props.use);
      if ("class" in $$new_props)
        $$invalidate(1, className = $$new_props.class);
      if ("notched" in $$new_props)
        $$invalidate(2, notched = $$new_props.notched);
      if ("noLabel" in $$new_props)
        $$invalidate(3, noLabel = $$new_props.noLabel);
      if ("$$scope" in $$new_props)
        $$invalidate(13, $$scope = $$new_props.$$scope);
    };
    $$self.$$.update = () => {
      if ($$self.$$.dirty & 16) {
        $:
          if (floatingLabel) {
            floatingLabel.addStyle("transition-duration", "0s");
            addClass("mdc-notched-outline--upgraded");
            requestAnimationFrame(() => {
              if (floatingLabel) {
                floatingLabel.removeStyle("transition-duration");
              }
            });
          } else {
            removeClass("mdc-notched-outline--upgraded");
          }
      }
    };
    return [
      use,
      className,
      notched,
      noLabel,
      floatingLabel,
      element2,
      internalClasses,
      notchStyles,
      forwardEvents,
      $$restProps,
      notch,
      closeNotch,
      getElement,
      $$scope,
      slots,
      div2_binding,
      SMUIFloatingLabel_mount_handler,
      SMUIFloatingLabel_unmount_handler
    ];
  }
  var NotchedOutline = class extends SvelteComponent {
    constructor(options) {
      super();
      init(this, options, instance_16, create_fragment16, safe_not_equal, {
        use: 0,
        class: 1,
        notched: 2,
        noLabel: 3,
        notch: 10,
        closeNotch: 11,
        getElement: 12
      });
    }
    get notch() {
      return this.$$.ctx[10];
    }
    get closeNotch() {
      return this.$$.ctx[11];
    }
    get getElement() {
      return this.$$.ctx[12];
    }
  };
  var NotchedOutline_default = NotchedOutline;

  // node_modules/@smui/notched-outline/dist/index.js
  var dist_default7 = NotchedOutline_default;

  // node_modules/@smui/select/dist/helper-text/HelperText.svelte
  function create_else_block2(ctx) {
    let t;
    return {
      c() {
        t = text(ctx[8]);
      },
      m(target, anchor) {
        insert(target, t, anchor);
      },
      p(ctx2, dirty) {
        if (dirty & 256)
          set_data(t, ctx2[8]);
      },
      i: noop,
      o: noop,
      d(detaching) {
        if (detaching)
          detach(t);
      }
    };
  }
  function create_if_block4(ctx) {
    let current;
    const default_slot_template = ctx[13].default;
    const default_slot = create_slot(default_slot_template, ctx, ctx[12], null);
    return {
      c() {
        if (default_slot)
          default_slot.c();
      },
      m(target, anchor) {
        if (default_slot) {
          default_slot.m(target, anchor);
        }
        current = true;
      },
      p(ctx2, dirty) {
        if (default_slot) {
          if (default_slot.p && (!current || dirty & 4096)) {
            update_slot_base(default_slot, default_slot_template, ctx2, ctx2[12], !current ? get_all_dirty_from_scope(ctx2[12]) : get_slot_changes(default_slot_template, ctx2[12], dirty, null), null);
          }
        }
      },
      i(local) {
        if (current)
          return;
        transition_in(default_slot, local);
        current = true;
      },
      o(local) {
        transition_out(default_slot, local);
        current = false;
      },
      d(detaching) {
        if (default_slot)
          default_slot.d(detaching);
      }
    };
  }
  function create_fragment17(ctx) {
    let div;
    let current_block_type_index;
    let if_block;
    let div_class_value;
    let div_aria_hidden_value;
    let useActions_action;
    let forwardEvents_action;
    let current;
    let mounted;
    let dispose;
    const if_block_creators = [create_if_block4, create_else_block2];
    const if_blocks = [];
    function select_block_type(ctx2, dirty) {
      if (ctx2[8] == null)
        return 0;
      return 1;
    }
    current_block_type_index = select_block_type(ctx, -1);
    if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
    let div_levels = [
      {
        class: div_class_value = classMap({
          [ctx[1]]: true,
          "mdc-select-helper-text": true,
          "mdc-select-helper-text--validation-msg": ctx[4],
          "mdc-select-helper-text--validation-msg-persistent": ctx[3],
          ...ctx[6]
        })
      },
      {
        "aria-hidden": div_aria_hidden_value = ctx[3] ? void 0 : "true"
      },
      { id: ctx[2] },
      ctx[7],
      ctx[10]
    ];
    let div_data = {};
    for (let i = 0; i < div_levels.length; i += 1) {
      div_data = assign(div_data, div_levels[i]);
    }
    return {
      c() {
        div = element("div");
        if_block.c();
        set_attributes(div, div_data);
      },
      m(target, anchor) {
        insert(target, div, anchor);
        if_blocks[current_block_type_index].m(div, null);
        ctx[14](div);
        current = true;
        if (!mounted) {
          dispose = [
            action_destroyer(useActions_action = useActions.call(null, div, ctx[0])),
            action_destroyer(forwardEvents_action = ctx[9].call(null, div))
          ];
          mounted = true;
        }
      },
      p(ctx2, [dirty]) {
        let previous_block_index = current_block_type_index;
        current_block_type_index = select_block_type(ctx2, dirty);
        if (current_block_type_index === previous_block_index) {
          if_blocks[current_block_type_index].p(ctx2, dirty);
        } else {
          group_outros();
          transition_out(if_blocks[previous_block_index], 1, 1, () => {
            if_blocks[previous_block_index] = null;
          });
          check_outros();
          if_block = if_blocks[current_block_type_index];
          if (!if_block) {
            if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx2);
            if_block.c();
          } else {
            if_block.p(ctx2, dirty);
          }
          transition_in(if_block, 1);
          if_block.m(div, null);
        }
        set_attributes(div, div_data = get_spread_update(div_levels, [
          (!current || dirty & 90 && div_class_value !== (div_class_value = classMap({
            [ctx2[1]]: true,
            "mdc-select-helper-text": true,
            "mdc-select-helper-text--validation-msg": ctx2[4],
            "mdc-select-helper-text--validation-msg-persistent": ctx2[3],
            ...ctx2[6]
          }))) && { class: div_class_value },
          (!current || dirty & 8 && div_aria_hidden_value !== (div_aria_hidden_value = ctx2[3] ? void 0 : "true")) && { "aria-hidden": div_aria_hidden_value },
          (!current || dirty & 4) && { id: ctx2[2] },
          dirty & 128 && ctx2[7],
          dirty & 1024 && ctx2[10]
        ]));
        if (useActions_action && is_function(useActions_action.update) && dirty & 1)
          useActions_action.update.call(null, ctx2[0]);
      },
      i(local) {
        if (current)
          return;
        transition_in(if_block);
        current = true;
      },
      o(local) {
        transition_out(if_block);
        current = false;
      },
      d(detaching) {
        if (detaching)
          detach(div);
        if_blocks[current_block_type_index].d();
        ctx[14](null);
        mounted = false;
        run_all(dispose);
      }
    };
  }
  var counter2 = 0;
  function instance_17($$self, $$props, $$invalidate) {
    const omit_props_names = ["use", "class", "id", "persistent", "validationMsg", "getElement"];
    let $$restProps = compute_rest_props($$props, omit_props_names);
    let { $$slots: slots = {}, $$scope } = $$props;
    const forwardEvents = forwardEventsBuilder(get_current_component());
    let { use = [] } = $$props;
    let { class: className = "" } = $$props;
    let { id = "SMUI-select-helper-text-" + counter2++ } = $$props;
    let { persistent = false } = $$props;
    let { validationMsg = false } = $$props;
    let element2;
    let instance13;
    let internalClasses = {};
    let internalAttrs = {};
    let content = void 0;
    onMount(() => {
      instance13 = new MDCSelectHelperTextFoundation({
        addClass,
        removeClass,
        hasClass,
        getAttr,
        setAttr: addAttr,
        removeAttr,
        setContent: (value) => {
          $$invalidate(8, content = value);
        }
      });
      if (id.startsWith("SMUI-select-helper-text-")) {
        dispatch(getElement(), "SMUISelectHelperText:id", id);
      }
      dispatch(getElement(), "SMUISelectHelperText:mount", instance13);
      instance13.init();
      return () => {
        dispatch(getElement(), "SMUISelectHelperText:unmount", instance13);
        instance13.destroy();
      };
    });
    function hasClass(className2) {
      return className2 in internalClasses ? internalClasses[className2] : getElement().classList.contains(className2);
    }
    function addClass(className2) {
      if (!internalClasses[className2]) {
        $$invalidate(6, internalClasses[className2] = true, internalClasses);
      }
    }
    function removeClass(className2) {
      if (!(className2 in internalClasses) || internalClasses[className2]) {
        $$invalidate(6, internalClasses[className2] = false, internalClasses);
      }
    }
    function getAttr(name) {
      var _a2;
      return name in internalAttrs ? (_a2 = internalAttrs[name]) !== null && _a2 !== void 0 ? _a2 : null : getElement().getAttribute(name);
    }
    function addAttr(name, value) {
      if (internalAttrs[name] !== value) {
        $$invalidate(7, internalAttrs[name] = value, internalAttrs);
      }
    }
    function removeAttr(name) {
      if (!(name in internalAttrs) || internalAttrs[name] != null) {
        $$invalidate(7, internalAttrs[name] = void 0, internalAttrs);
      }
    }
    function getElement() {
      return element2;
    }
    function div_binding($$value) {
      binding_callbacks[$$value ? "unshift" : "push"](() => {
        element2 = $$value;
        $$invalidate(5, element2);
      });
    }
    $$self.$$set = ($$new_props) => {
      $$props = assign(assign({}, $$props), exclude_internal_props($$new_props));
      $$invalidate(10, $$restProps = compute_rest_props($$props, omit_props_names));
      if ("use" in $$new_props)
        $$invalidate(0, use = $$new_props.use);
      if ("class" in $$new_props)
        $$invalidate(1, className = $$new_props.class);
      if ("id" in $$new_props)
        $$invalidate(2, id = $$new_props.id);
      if ("persistent" in $$new_props)
        $$invalidate(3, persistent = $$new_props.persistent);
      if ("validationMsg" in $$new_props)
        $$invalidate(4, validationMsg = $$new_props.validationMsg);
      if ("$$scope" in $$new_props)
        $$invalidate(12, $$scope = $$new_props.$$scope);
    };
    return [
      use,
      className,
      id,
      persistent,
      validationMsg,
      element2,
      internalClasses,
      internalAttrs,
      content,
      forwardEvents,
      $$restProps,
      getElement,
      $$scope,
      slots,
      div_binding
    ];
  }
  var HelperText = class extends SvelteComponent {
    constructor(options) {
      super();
      init(this, options, instance_17, create_fragment17, safe_not_equal, {
        use: 0,
        class: 1,
        id: 2,
        persistent: 3,
        validationMsg: 4,
        getElement: 11
      });
    }
    get getElement() {
      return this.$$.ctx[11];
    }
  };
  var HelperText_default = HelperText;

  // node_modules/@smui/select/dist/Select.svelte
  var get_helperText_slot_changes = (dirty) => ({});
  var get_helperText_slot_context = (ctx) => ({});
  var get_leadingIcon_slot_changes = (dirty) => ({});
  var get_leadingIcon_slot_context = (ctx) => ({});
  var get_label_slot_changes_1 = (dirty) => ({});
  var get_label_slot_context_1 = (ctx) => ({});
  var get_label_slot_changes = (dirty) => ({});
  var get_label_slot_context = (ctx) => ({});
  function create_if_block_6(ctx) {
    let input;
    let input_levels = [
      { type: "hidden" },
      { required: ctx[10] },
      { disabled: ctx[6] },
      { value: ctx[0] },
      prefixFilter(ctx[53], "input$")
    ];
    let input_data = {};
    for (let i = 0; i < input_levels.length; i += 1) {
      input_data = assign(input_data, input_levels[i]);
    }
    return {
      c() {
        input = element("input");
        set_attributes(input, input_data);
      },
      m(target, anchor) {
        insert(target, input, anchor);
        if (input.autofocus)
          input.focus();
      },
      p(ctx2, dirty) {
        set_attributes(input, input_data = get_spread_update(input_levels, [
          { type: "hidden" },
          dirty[0] & 1024 && { required: ctx2[10] },
          dirty[0] & 64 && { disabled: ctx2[6] },
          dirty[0] & 1 && { value: ctx2[0] },
          dirty[1] & 4194304 && prefixFilter(ctx2[53], "input$")
        ]));
      },
      d(detaching) {
        if (detaching)
          detach(input);
      }
    };
  }
  function create_if_block_5(ctx) {
    let span;
    return {
      c() {
        span = element("span");
        attr(span, "class", "mdc-select__ripple");
      },
      m(target, anchor) {
        insert(target, span, anchor);
      },
      d(detaching) {
        if (detaching)
          detach(span);
      }
    };
  }
  function create_if_block_4(ctx) {
    let floatinglabel;
    let current;
    const floatinglabel_spread_levels = [
      { id: ctx[11] + "-smui-label" },
      {
        floatAbove: ctx[43] !== ""
      },
      { required: ctx[10] },
      prefixFilter(ctx[53], "label$")
    ];
    let floatinglabel_props = {
      $$slots: { default: [create_default_slot_5] },
      $$scope: { ctx }
    };
    for (let i = 0; i < floatinglabel_spread_levels.length; i += 1) {
      floatinglabel_props = assign(floatinglabel_props, floatinglabel_spread_levels[i]);
    }
    floatinglabel = new dist_default5({ props: floatinglabel_props });
    ctx[66](floatinglabel);
    return {
      c() {
        create_component(floatinglabel.$$.fragment);
      },
      m(target, anchor) {
        mount_component(floatinglabel, target, anchor);
        current = true;
      },
      p(ctx2, dirty) {
        const floatinglabel_changes = dirty[0] & 3072 | dirty[1] & 4198400 ? get_spread_update(floatinglabel_spread_levels, [
          dirty[0] & 2048 && { id: ctx2[11] + "-smui-label" },
          dirty[1] & 4096 && {
            floatAbove: ctx2[43] !== ""
          },
          dirty[0] & 1024 && { required: ctx2[10] },
          dirty[1] & 4194304 && get_spread_object(prefixFilter(ctx2[53], "label$"))
        ]) : {};
        if (dirty[0] & 512 | dirty[2] & 134217728) {
          floatinglabel_changes.$$scope = { dirty, ctx: ctx2 };
        }
        floatinglabel.$set(floatinglabel_changes);
      },
      i(local) {
        if (current)
          return;
        transition_in(floatinglabel.$$.fragment, local);
        current = true;
      },
      o(local) {
        transition_out(floatinglabel.$$.fragment, local);
        current = false;
      },
      d(detaching) {
        ctx[66](null);
        destroy_component(floatinglabel, detaching);
      }
    };
  }
  function create_default_slot_5(ctx) {
    let t_value = (ctx[9] == null ? "" : ctx[9]) + "";
    let t;
    let current;
    const label_slot_template = ctx[63].label;
    const label_slot = create_slot(label_slot_template, ctx, ctx[89], get_label_slot_context);
    return {
      c() {
        t = text(t_value);
        if (label_slot)
          label_slot.c();
      },
      m(target, anchor) {
        insert(target, t, anchor);
        if (label_slot) {
          label_slot.m(target, anchor);
        }
        current = true;
      },
      p(ctx2, dirty) {
        if ((!current || dirty[0] & 512) && t_value !== (t_value = (ctx2[9] == null ? "" : ctx2[9]) + ""))
          set_data(t, t_value);
        if (label_slot) {
          if (label_slot.p && (!current || dirty[2] & 134217728)) {
            update_slot_base(label_slot, label_slot_template, ctx2, ctx2[89], !current ? get_all_dirty_from_scope(ctx2[89]) : get_slot_changes(label_slot_template, ctx2[89], dirty, get_label_slot_changes), get_label_slot_context);
          }
        }
      },
      i(local) {
        if (current)
          return;
        transition_in(label_slot, local);
        current = true;
      },
      o(local) {
        transition_out(label_slot, local);
        current = false;
      },
      d(detaching) {
        if (detaching)
          detach(t);
        if (label_slot)
          label_slot.d(detaching);
      }
    };
  }
  function create_if_block_2(ctx) {
    let notchedoutline;
    let current;
    const notchedoutline_spread_levels = [
      {
        noLabel: ctx[8] || ctx[9] == null && !ctx[52].label
      },
      prefixFilter(ctx[53], "outline$")
    ];
    let notchedoutline_props = {
      $$slots: { default: [create_default_slot_3] },
      $$scope: { ctx }
    };
    for (let i = 0; i < notchedoutline_spread_levels.length; i += 1) {
      notchedoutline_props = assign(notchedoutline_props, notchedoutline_spread_levels[i]);
    }
    notchedoutline = new dist_default7({ props: notchedoutline_props });
    ctx[68](notchedoutline);
    return {
      c() {
        create_component(notchedoutline.$$.fragment);
      },
      m(target, anchor) {
        mount_component(notchedoutline, target, anchor);
        current = true;
      },
      p(ctx2, dirty) {
        const notchedoutline_changes = dirty[0] & 768 | dirty[1] & 6291456 ? get_spread_update(notchedoutline_spread_levels, [
          dirty[0] & 768 | dirty[1] & 2097152 && {
            noLabel: ctx2[8] || ctx2[9] == null && !ctx2[52].label
          },
          dirty[1] & 4194304 && get_spread_object(prefixFilter(ctx2[53], "outline$"))
        ]) : {};
        if (dirty[0] & 3840 | dirty[1] & 6296064 | dirty[2] & 134217728) {
          notchedoutline_changes.$$scope = { dirty, ctx: ctx2 };
        }
        notchedoutline.$set(notchedoutline_changes);
      },
      i(local) {
        if (current)
          return;
        transition_in(notchedoutline.$$.fragment, local);
        current = true;
      },
      o(local) {
        transition_out(notchedoutline.$$.fragment, local);
        current = false;
      },
      d(detaching) {
        ctx[68](null);
        destroy_component(notchedoutline, detaching);
      }
    };
  }
  function create_if_block_3(ctx) {
    let floatinglabel;
    let current;
    const floatinglabel_spread_levels = [
      { id: ctx[11] + "-smui-label" },
      {
        floatAbove: ctx[43] !== ""
      },
      { required: ctx[10] },
      prefixFilter(ctx[53], "label$")
    ];
    let floatinglabel_props = {
      $$slots: { default: [create_default_slot_4] },
      $$scope: { ctx }
    };
    for (let i = 0; i < floatinglabel_spread_levels.length; i += 1) {
      floatinglabel_props = assign(floatinglabel_props, floatinglabel_spread_levels[i]);
    }
    floatinglabel = new dist_default5({ props: floatinglabel_props });
    ctx[67](floatinglabel);
    return {
      c() {
        create_component(floatinglabel.$$.fragment);
      },
      m(target, anchor) {
        mount_component(floatinglabel, target, anchor);
        current = true;
      },
      p(ctx2, dirty) {
        const floatinglabel_changes = dirty[0] & 3072 | dirty[1] & 4198400 ? get_spread_update(floatinglabel_spread_levels, [
          dirty[0] & 2048 && { id: ctx2[11] + "-smui-label" },
          dirty[1] & 4096 && {
            floatAbove: ctx2[43] !== ""
          },
          dirty[0] & 1024 && { required: ctx2[10] },
          dirty[1] & 4194304 && get_spread_object(prefixFilter(ctx2[53], "label$"))
        ]) : {};
        if (dirty[0] & 512 | dirty[2] & 134217728) {
          floatinglabel_changes.$$scope = { dirty, ctx: ctx2 };
        }
        floatinglabel.$set(floatinglabel_changes);
      },
      i(local) {
        if (current)
          return;
        transition_in(floatinglabel.$$.fragment, local);
        current = true;
      },
      o(local) {
        transition_out(floatinglabel.$$.fragment, local);
        current = false;
      },
      d(detaching) {
        ctx[67](null);
        destroy_component(floatinglabel, detaching);
      }
    };
  }
  function create_default_slot_4(ctx) {
    let t_value = (ctx[9] == null ? "" : ctx[9]) + "";
    let t;
    let current;
    const label_slot_template = ctx[63].label;
    const label_slot = create_slot(label_slot_template, ctx, ctx[89], get_label_slot_context_1);
    return {
      c() {
        t = text(t_value);
        if (label_slot)
          label_slot.c();
      },
      m(target, anchor) {
        insert(target, t, anchor);
        if (label_slot) {
          label_slot.m(target, anchor);
        }
        current = true;
      },
      p(ctx2, dirty) {
        if ((!current || dirty[0] & 512) && t_value !== (t_value = (ctx2[9] == null ? "" : ctx2[9]) + ""))
          set_data(t, t_value);
        if (label_slot) {
          if (label_slot.p && (!current || dirty[2] & 134217728)) {
            update_slot_base(label_slot, label_slot_template, ctx2, ctx2[89], !current ? get_all_dirty_from_scope(ctx2[89]) : get_slot_changes(label_slot_template, ctx2[89], dirty, get_label_slot_changes_1), get_label_slot_context_1);
          }
        }
      },
      i(local) {
        if (current)
          return;
        transition_in(label_slot, local);
        current = true;
      },
      o(local) {
        transition_out(label_slot, local);
        current = false;
      },
      d(detaching) {
        if (detaching)
          detach(t);
        if (label_slot)
          label_slot.d(detaching);
      }
    };
  }
  function create_default_slot_3(ctx) {
    let if_block_anchor;
    let current;
    let if_block = !ctx[8] && (ctx[9] != null || ctx[52].label) && create_if_block_3(ctx);
    return {
      c() {
        if (if_block)
          if_block.c();
        if_block_anchor = empty();
      },
      m(target, anchor) {
        if (if_block)
          if_block.m(target, anchor);
        insert(target, if_block_anchor, anchor);
        current = true;
      },
      p(ctx2, dirty) {
        if (!ctx2[8] && (ctx2[9] != null || ctx2[52].label)) {
          if (if_block) {
            if_block.p(ctx2, dirty);
            if (dirty[0] & 768 | dirty[1] & 2097152) {
              transition_in(if_block, 1);
            }
          } else {
            if_block = create_if_block_3(ctx2);
            if_block.c();
            transition_in(if_block, 1);
            if_block.m(if_block_anchor.parentNode, if_block_anchor);
          }
        } else if (if_block) {
          group_outros();
          transition_out(if_block, 1, 1, () => {
            if_block = null;
          });
          check_outros();
        }
      },
      i(local) {
        if (current)
          return;
        transition_in(if_block);
        current = true;
      },
      o(local) {
        transition_out(if_block);
        current = false;
      },
      d(detaching) {
        if (if_block)
          if_block.d(detaching);
        if (detaching)
          detach(if_block_anchor);
      }
    };
  }
  function create_if_block_1(ctx) {
    let lineripple;
    let current;
    const lineripple_spread_levels = [prefixFilter(ctx[53], "ripple$")];
    let lineripple_props = {};
    for (let i = 0; i < lineripple_spread_levels.length; i += 1) {
      lineripple_props = assign(lineripple_props, lineripple_spread_levels[i]);
    }
    lineripple = new dist_default6({ props: lineripple_props });
    ctx[70](lineripple);
    return {
      c() {
        create_component(lineripple.$$.fragment);
      },
      m(target, anchor) {
        mount_component(lineripple, target, anchor);
        current = true;
      },
      p(ctx2, dirty) {
        const lineripple_changes = dirty[1] & 4194304 ? get_spread_update(lineripple_spread_levels, [get_spread_object(prefixFilter(ctx2[53], "ripple$"))]) : {};
        lineripple.$set(lineripple_changes);
      },
      i(local) {
        if (current)
          return;
        transition_in(lineripple.$$.fragment, local);
        current = true;
      },
      o(local) {
        transition_out(lineripple.$$.fragment, local);
        current = false;
      },
      d(detaching) {
        ctx[70](null);
        destroy_component(lineripple, detaching);
      }
    };
  }
  function create_default_slot_2(ctx) {
    let current;
    const default_slot_template = ctx[63].default;
    const default_slot = create_slot(default_slot_template, ctx, ctx[89], null);
    return {
      c() {
        if (default_slot)
          default_slot.c();
      },
      m(target, anchor) {
        if (default_slot) {
          default_slot.m(target, anchor);
        }
        current = true;
      },
      p(ctx2, dirty) {
        if (default_slot) {
          if (default_slot.p && (!current || dirty[2] & 134217728)) {
            update_slot_base(default_slot, default_slot_template, ctx2, ctx2[89], !current ? get_all_dirty_from_scope(ctx2[89]) : get_slot_changes(default_slot_template, ctx2[89], dirty, null), null);
          }
        }
      },
      i(local) {
        if (current)
          return;
        transition_in(default_slot, local);
        current = true;
      },
      o(local) {
        transition_out(default_slot, local);
        current = false;
      },
      d(detaching) {
        if (default_slot)
          default_slot.d(detaching);
      }
    };
  }
  function create_default_slot_1(ctx) {
    let list_1;
    let updating_selectedIndex;
    let current;
    const list_1_spread_levels = [
      { role: "listbox" },
      { wrapFocus: ctx[36] },
      prefixFilter(ctx[53], "list$")
    ];
    function list_1_selectedIndex_binding(value) {
      ctx[76](value);
    }
    let list_1_props = {
      $$slots: { default: [create_default_slot_2] },
      $$scope: { ctx }
    };
    for (let i = 0; i < list_1_spread_levels.length; i += 1) {
      list_1_props = assign(list_1_props, list_1_spread_levels[i]);
    }
    if (ctx[24] !== void 0) {
      list_1_props.selectedIndex = ctx[24];
    }
    list_1 = new dist_default3({ props: list_1_props });
    binding_callbacks.push(() => bind(list_1, "selectedIndex", list_1_selectedIndex_binding));
    list_1.$on("SMUIList:mount", ctx[77]);
    return {
      c() {
        create_component(list_1.$$.fragment);
      },
      m(target, anchor) {
        mount_component(list_1, target, anchor);
        current = true;
      },
      p(ctx2, dirty) {
        const list_1_changes = dirty[1] & 4194336 ? get_spread_update(list_1_spread_levels, [
          list_1_spread_levels[0],
          dirty[1] & 32 && { wrapFocus: ctx2[36] },
          dirty[1] & 4194304 && get_spread_object(prefixFilter(ctx2[53], "list$"))
        ]) : {};
        if (dirty[2] & 134217728) {
          list_1_changes.$$scope = { dirty, ctx: ctx2 };
        }
        if (!updating_selectedIndex && dirty[0] & 16777216) {
          updating_selectedIndex = true;
          list_1_changes.selectedIndex = ctx2[24];
          add_flush_callback(() => updating_selectedIndex = false);
        }
        list_1.$set(list_1_changes);
      },
      i(local) {
        if (current)
          return;
        transition_in(list_1.$$.fragment, local);
        current = true;
      },
      o(local) {
        transition_out(list_1.$$.fragment, local);
        current = false;
      },
      d(detaching) {
        destroy_component(list_1, detaching);
      }
    };
  }
  function create_if_block5(ctx) {
    let helpertext;
    let current;
    const helpertext_spread_levels = [prefixFilter(ctx[53], "helperText$")];
    let helpertext_props = {
      $$slots: { default: [create_default_slot5] },
      $$scope: { ctx }
    };
    for (let i = 0; i < helpertext_spread_levels.length; i += 1) {
      helpertext_props = assign(helpertext_props, helpertext_spread_levels[i]);
    }
    helpertext = new HelperText_default({ props: helpertext_props });
    helpertext.$on("SMUISelectHelperText:id", ctx[86]);
    helpertext.$on("SMUISelectHelperText:mount", ctx[87]);
    helpertext.$on("SMUISelectHelperText:unmount", ctx[88]);
    return {
      c() {
        create_component(helpertext.$$.fragment);
      },
      m(target, anchor) {
        mount_component(helpertext, target, anchor);
        current = true;
      },
      p(ctx2, dirty) {
        const helpertext_changes = dirty[1] & 4194304 ? get_spread_update(helpertext_spread_levels, [get_spread_object(prefixFilter(ctx2[53], "helperText$"))]) : {};
        if (dirty[2] & 134217728) {
          helpertext_changes.$$scope = { dirty, ctx: ctx2 };
        }
        helpertext.$set(helpertext_changes);
      },
      i(local) {
        if (current)
          return;
        transition_in(helpertext.$$.fragment, local);
        current = true;
      },
      o(local) {
        transition_out(helpertext.$$.fragment, local);
        current = false;
      },
      d(detaching) {
        destroy_component(helpertext, detaching);
      }
    };
  }
  function create_default_slot5(ctx) {
    let current;
    const helperText_slot_template = ctx[63].helperText;
    const helperText_slot = create_slot(helperText_slot_template, ctx, ctx[89], get_helperText_slot_context);
    return {
      c() {
        if (helperText_slot)
          helperText_slot.c();
      },
      m(target, anchor) {
        if (helperText_slot) {
          helperText_slot.m(target, anchor);
        }
        current = true;
      },
      p(ctx2, dirty) {
        if (helperText_slot) {
          if (helperText_slot.p && (!current || dirty[2] & 134217728)) {
            update_slot_base(helperText_slot, helperText_slot_template, ctx2, ctx2[89], !current ? get_all_dirty_from_scope(ctx2[89]) : get_slot_changes(helperText_slot_template, ctx2[89], dirty, get_helperText_slot_changes), get_helperText_slot_context);
          }
        }
      },
      i(local) {
        if (current)
          return;
        transition_in(helperText_slot, local);
        current = true;
      },
      o(local) {
        transition_out(helperText_slot, local);
        current = false;
      },
      d(detaching) {
        if (helperText_slot)
          helperText_slot.d(detaching);
      }
    };
  }
  function create_fragment18(ctx) {
    let div1;
    let t0;
    let div0;
    let t1;
    let t2;
    let t3;
    let t4;
    let span1;
    let span0;
    let t5;
    let span0_id_value;
    let span0_class_value;
    let span0_aria_labelledby_value;
    let useActions_action;
    let span1_class_value;
    let useActions_action_1;
    let t6;
    let span2;
    let svg;
    let polygon0;
    let polygon1;
    let span2_class_value;
    let useActions_action_2;
    let t7;
    let div0_class_value;
    let div0_aria_required_value;
    let div0_aria_disabled_value;
    let useActions_action_3;
    let t8;
    let menu;
    let updating_open;
    let div1_class_value;
    let div1_style_value;
    let Ripple_action;
    let Anchor_action;
    let useActions_action_4;
    let forwardEvents_action;
    let t9;
    let if_block5_anchor;
    let current;
    let mounted;
    let dispose;
    let if_block0 = ctx[12] && create_if_block_6(ctx);
    let if_block1 = ctx[7] === "filled" && create_if_block_5(ctx);
    let if_block2 = ctx[7] !== "outlined" && !ctx[8] && (ctx[9] != null || ctx[52].label) && create_if_block_4(ctx);
    let if_block3 = ctx[7] === "outlined" && create_if_block_2(ctx);
    const leadingIcon_slot_template = ctx[63].leadingIcon;
    const leadingIcon_slot = create_slot(leadingIcon_slot_template, ctx, ctx[89], get_leadingIcon_slot_context);
    let span0_levels = [
      {
        id: span0_id_value = ctx[11] + "-smui-selected-text"
      },
      {
        class: span0_class_value = classMap({
          [ctx[19]]: true,
          "mdc-select__selected-text": true
        })
      },
      { role: "button" },
      { "aria-haspopup": "listbox" },
      {
        "aria-labelledby": span0_aria_labelledby_value = ctx[11] + "-smui-label"
      },
      prefixFilter(ctx[53], "selectedText$")
    ];
    let span0_data = {};
    for (let i = 0; i < span0_levels.length; i += 1) {
      span0_data = assign(span0_data, span0_levels[i]);
    }
    let span1_levels = [
      {
        class: span1_class_value = classMap({
          [ctx[17]]: true,
          "mdc-select__selected-text-container": true
        })
      },
      prefixFilter(ctx[53], "selectedTextContainer$")
    ];
    let span1_data = {};
    for (let i = 0; i < span1_levels.length; i += 1) {
      span1_data = assign(span1_data, span1_levels[i]);
    }
    let span2_levels = [
      {
        class: span2_class_value = classMap({
          [ctx[21]]: true,
          "mdc-select__dropdown-icon": true
        })
      },
      prefixFilter(ctx[53], "dropdownIcon$")
    ];
    let span2_data = {};
    for (let i = 0; i < span2_levels.length; i += 1) {
      span2_data = assign(span2_data, span2_levels[i]);
    }
    let if_block4 = ctx[7] !== "outlined" && ctx[5] && create_if_block_1(ctx);
    let div0_levels = [
      {
        class: div0_class_value = classMap({
          [ctx[15]]: true,
          "mdc-select__anchor": true
        })
      },
      {
        "aria-required": div0_aria_required_value = ctx[10] ? "true" : void 0
      },
      {
        "aria-disabled": div0_aria_disabled_value = ctx[6] ? "true" : void 0
      },
      { "aria-controls": ctx[31] },
      { "aria-describedby": ctx[31] },
      ctx[29],
      prefixFilter(ctx[53], "anchor$")
    ];
    let div0_data = {};
    for (let i = 0; i < div0_levels.length; i += 1) {
      div0_data = assign(div0_data, div0_levels[i]);
    }
    const menu_spread_levels = [
      {
        class: classMap({
          [ctx[22]]: true,
          "mdc-select__menu": true,
          ...ctx[33]
        })
      },
      { fullWidth: true },
      { anchor: false },
      { anchorElement: ctx[34] },
      { anchorCorner: ctx[35] },
      prefixFilter(ctx[53], "menu$")
    ];
    function menu_open_binding(value) {
      ctx[78](value);
    }
    let menu_props = {
      $$slots: { default: [create_default_slot_1] },
      $$scope: { ctx }
    };
    for (let i = 0; i < menu_spread_levels.length; i += 1) {
      menu_props = assign(menu_props, menu_spread_levels[i]);
    }
    if (ctx[32] !== void 0) {
      menu_props.open = ctx[32];
    }
    menu = new dist_default4({ props: menu_props });
    binding_callbacks.push(() => bind(menu, "open", menu_open_binding));
    menu.$on("SMUIMenu:selected", ctx[79]);
    menu.$on("SMUIMenuSurface:closing", ctx[80]);
    menu.$on("SMUIMenuSurface:closed", ctx[81]);
    menu.$on("SMUIMenuSurface:opened", ctx[82]);
    let div1_levels = [
      {
        class: div1_class_value = classMap({
          [ctx[3]]: true,
          "mdc-select": true,
          "mdc-select--required": ctx[10],
          "mdc-select--disabled": ctx[6],
          "mdc-select--filled": ctx[7] === "filled",
          "mdc-select--outlined": ctx[7] === "outlined",
          "smui-select--standard": ctx[7] === "standard",
          "mdc-select--with-leading-icon": ctx[45](ctx[13]) ? ctx[52].leadingIcon : ctx[13],
          "mdc-select--no-label": ctx[8] || ctx[9] == null && !ctx[52].label,
          "mdc-select--invalid": ctx[1],
          "mdc-select--activated": ctx[32],
          "mdc-data-table__pagination-rows-per-page-select": ctx[46] === "data-table:pagination",
          ...ctx[26]
        })
      },
      {
        style: div1_style_value = Object.entries(ctx[27]).map(func6).concat([ctx[4]]).join(" ")
      },
      exclude(ctx[53], [
        "input$",
        "anchor$",
        "label$",
        "outline$",
        "selectedTextContainer$",
        "selectedText$",
        "dropdownIcon$",
        "ripple$",
        "menu$",
        "list$",
        "helperText$"
      ])
    ];
    let div1_data = {};
    for (let i = 0; i < div1_levels.length; i += 1) {
      div1_data = assign(div1_data, div1_levels[i]);
    }
    let if_block5 = ctx[52].helperText && create_if_block5(ctx);
    return {
      c() {
        div1 = element("div");
        if (if_block0)
          if_block0.c();
        t0 = space();
        div0 = element("div");
        if (if_block1)
          if_block1.c();
        t1 = space();
        if (if_block2)
          if_block2.c();
        t2 = space();
        if (if_block3)
          if_block3.c();
        t3 = space();
        if (leadingIcon_slot)
          leadingIcon_slot.c();
        t4 = space();
        span1 = element("span");
        span0 = element("span");
        t5 = text(ctx[43]);
        t6 = space();
        span2 = element("span");
        svg = svg_element("svg");
        polygon0 = svg_element("polygon");
        polygon1 = svg_element("polygon");
        t7 = space();
        if (if_block4)
          if_block4.c();
        t8 = space();
        create_component(menu.$$.fragment);
        t9 = space();
        if (if_block5)
          if_block5.c();
        if_block5_anchor = empty();
        set_attributes(span0, span0_data);
        set_attributes(span1, span1_data);
        attr(polygon0, "class", "mdc-select__dropdown-icon-inactive");
        attr(polygon0, "stroke", "none");
        attr(polygon0, "fill-rule", "evenodd");
        attr(polygon0, "points", "7 10 12 15 17 10");
        attr(polygon1, "class", "mdc-select__dropdown-icon-active");
        attr(polygon1, "stroke", "none");
        attr(polygon1, "fill-rule", "evenodd");
        attr(polygon1, "points", "7 15 12 10 17 15");
        attr(svg, "class", "mdc-select__dropdown-icon-graphic");
        attr(svg, "viewBox", "7 10 10 5");
        attr(svg, "focusable", "false");
        set_attributes(span2, span2_data);
        set_attributes(div0, div0_data);
        set_attributes(div1, div1_data);
      },
      m(target, anchor) {
        insert(target, div1, anchor);
        if (if_block0)
          if_block0.m(div1, null);
        append(div1, t0);
        append(div1, div0);
        if (if_block1)
          if_block1.m(div0, null);
        append(div0, t1);
        if (if_block2)
          if_block2.m(div0, null);
        append(div0, t2);
        if (if_block3)
          if_block3.m(div0, null);
        append(div0, t3);
        if (leadingIcon_slot) {
          leadingIcon_slot.m(div0, null);
        }
        append(div0, t4);
        append(div0, span1);
        append(span1, span0);
        append(span0, t5);
        ctx[69](span0);
        append(div0, t6);
        append(div0, span2);
        append(span2, svg);
        append(svg, polygon0);
        append(svg, polygon1);
        append(div0, t7);
        if (if_block4)
          if_block4.m(div0, null);
        ctx[71](div0);
        append(div1, t8);
        mount_component(menu, div1, null);
        ctx[83](div1);
        insert(target, t9, anchor);
        if (if_block5)
          if_block5.m(target, anchor);
        insert(target, if_block5_anchor, anchor);
        current = true;
        if (!mounted) {
          dispose = [
            action_destroyer(useActions_action = useActions.call(null, span0, ctx[18])),
            action_destroyer(useActions_action_1 = useActions.call(null, span1, ctx[16])),
            action_destroyer(useActions_action_2 = useActions.call(null, span2, ctx[20])),
            action_destroyer(useActions_action_3 = useActions.call(null, div0, ctx[14])),
            listen(div0, "focus", ctx[72]),
            listen(div0, "blur", ctx[73]),
            listen(div0, "click", ctx[74]),
            listen(div0, "keydown", ctx[75]),
            listen(div0, "focus", ctx[64]),
            listen(div0, "blur", ctx[65]),
            action_destroyer(Ripple_action = dist_default.call(null, div1, {
              ripple: ctx[7] === "filled",
              unbounded: false,
              addClass: ctx[49],
              removeClass: ctx[50],
              addStyle: ctx[51]
            })),
            action_destroyer(Anchor_action = Anchor.call(null, div1, {
              addClass: ctx[49],
              removeClass: ctx[50]
            })),
            action_destroyer(useActions_action_4 = useActions.call(null, div1, ctx[2])),
            action_destroyer(forwardEvents_action = ctx[44].call(null, div1)),
            listen(div1, "SMUISelectLeadingIcon:mount", ctx[84]),
            listen(div1, "SMUISelectLeadingIcon:unmount", ctx[85])
          ];
          mounted = true;
        }
      },
      p(ctx2, dirty) {
        if (ctx2[12]) {
          if (if_block0) {
            if_block0.p(ctx2, dirty);
          } else {
            if_block0 = create_if_block_6(ctx2);
            if_block0.c();
            if_block0.m(div1, t0);
          }
        } else if (if_block0) {
          if_block0.d(1);
          if_block0 = null;
        }
        if (ctx2[7] === "filled") {
          if (if_block1) {
          } else {
            if_block1 = create_if_block_5(ctx2);
            if_block1.c();
            if_block1.m(div0, t1);
          }
        } else if (if_block1) {
          if_block1.d(1);
          if_block1 = null;
        }
        if (ctx2[7] !== "outlined" && !ctx2[8] && (ctx2[9] != null || ctx2[52].label)) {
          if (if_block2) {
            if_block2.p(ctx2, dirty);
            if (dirty[0] & 896 | dirty[1] & 2097152) {
              transition_in(if_block2, 1);
            }
          } else {
            if_block2 = create_if_block_4(ctx2);
            if_block2.c();
            transition_in(if_block2, 1);
            if_block2.m(div0, t2);
          }
        } else if (if_block2) {
          group_outros();
          transition_out(if_block2, 1, 1, () => {
            if_block2 = null;
          });
          check_outros();
        }
        if (ctx2[7] === "outlined") {
          if (if_block3) {
            if_block3.p(ctx2, dirty);
            if (dirty[0] & 128) {
              transition_in(if_block3, 1);
            }
          } else {
            if_block3 = create_if_block_2(ctx2);
            if_block3.c();
            transition_in(if_block3, 1);
            if_block3.m(div0, t3);
          }
        } else if (if_block3) {
          group_outros();
          transition_out(if_block3, 1, 1, () => {
            if_block3 = null;
          });
          check_outros();
        }
        if (leadingIcon_slot) {
          if (leadingIcon_slot.p && (!current || dirty[2] & 134217728)) {
            update_slot_base(leadingIcon_slot, leadingIcon_slot_template, ctx2, ctx2[89], !current ? get_all_dirty_from_scope(ctx2[89]) : get_slot_changes(leadingIcon_slot_template, ctx2[89], dirty, get_leadingIcon_slot_changes), get_leadingIcon_slot_context);
          }
        }
        if (!current || dirty[1] & 4096)
          set_data(t5, ctx2[43]);
        set_attributes(span0, span0_data = get_spread_update(span0_levels, [
          (!current || dirty[0] & 2048 && span0_id_value !== (span0_id_value = ctx2[11] + "-smui-selected-text")) && { id: span0_id_value },
          (!current || dirty[0] & 524288 && span0_class_value !== (span0_class_value = classMap({
            [ctx2[19]]: true,
            "mdc-select__selected-text": true
          }))) && { class: span0_class_value },
          { role: "button" },
          { "aria-haspopup": "listbox" },
          (!current || dirty[0] & 2048 && span0_aria_labelledby_value !== (span0_aria_labelledby_value = ctx2[11] + "-smui-label")) && {
            "aria-labelledby": span0_aria_labelledby_value
          },
          dirty[1] & 4194304 && prefixFilter(ctx2[53], "selectedText$")
        ]));
        if (useActions_action && is_function(useActions_action.update) && dirty[0] & 262144)
          useActions_action.update.call(null, ctx2[18]);
        set_attributes(span1, span1_data = get_spread_update(span1_levels, [
          (!current || dirty[0] & 131072 && span1_class_value !== (span1_class_value = classMap({
            [ctx2[17]]: true,
            "mdc-select__selected-text-container": true
          }))) && { class: span1_class_value },
          dirty[1] & 4194304 && prefixFilter(ctx2[53], "selectedTextContainer$")
        ]));
        if (useActions_action_1 && is_function(useActions_action_1.update) && dirty[0] & 65536)
          useActions_action_1.update.call(null, ctx2[16]);
        set_attributes(span2, span2_data = get_spread_update(span2_levels, [
          (!current || dirty[0] & 2097152 && span2_class_value !== (span2_class_value = classMap({
            [ctx2[21]]: true,
            "mdc-select__dropdown-icon": true
          }))) && { class: span2_class_value },
          dirty[1] & 4194304 && prefixFilter(ctx2[53], "dropdownIcon$")
        ]));
        if (useActions_action_2 && is_function(useActions_action_2.update) && dirty[0] & 1048576)
          useActions_action_2.update.call(null, ctx2[20]);
        if (ctx2[7] !== "outlined" && ctx2[5]) {
          if (if_block4) {
            if_block4.p(ctx2, dirty);
            if (dirty[0] & 160) {
              transition_in(if_block4, 1);
            }
          } else {
            if_block4 = create_if_block_1(ctx2);
            if_block4.c();
            transition_in(if_block4, 1);
            if_block4.m(div0, null);
          }
        } else if (if_block4) {
          group_outros();
          transition_out(if_block4, 1, 1, () => {
            if_block4 = null;
          });
          check_outros();
        }
        set_attributes(div0, div0_data = get_spread_update(div0_levels, [
          (!current || dirty[0] & 32768 && div0_class_value !== (div0_class_value = classMap({
            [ctx2[15]]: true,
            "mdc-select__anchor": true
          }))) && { class: div0_class_value },
          (!current || dirty[0] & 1024 && div0_aria_required_value !== (div0_aria_required_value = ctx2[10] ? "true" : void 0)) && {
            "aria-required": div0_aria_required_value
          },
          (!current || dirty[0] & 64 && div0_aria_disabled_value !== (div0_aria_disabled_value = ctx2[6] ? "true" : void 0)) && {
            "aria-disabled": div0_aria_disabled_value
          },
          (!current || dirty[1] & 1) && { "aria-controls": ctx2[31] },
          (!current || dirty[1] & 1) && { "aria-describedby": ctx2[31] },
          dirty[0] & 536870912 && ctx2[29],
          dirty[1] & 4194304 && prefixFilter(ctx2[53], "anchor$")
        ]));
        if (useActions_action_3 && is_function(useActions_action_3.update) && dirty[0] & 16384)
          useActions_action_3.update.call(null, ctx2[14]);
        const menu_changes = dirty[0] & 4194304 | dirty[1] & 4194332 ? get_spread_update(menu_spread_levels, [
          dirty[0] & 4194304 | dirty[1] & 4 && {
            class: classMap({
              [ctx2[22]]: true,
              "mdc-select__menu": true,
              ...ctx2[33]
            })
          },
          menu_spread_levels[1],
          menu_spread_levels[2],
          dirty[1] & 8 && { anchorElement: ctx2[34] },
          dirty[1] & 16 && { anchorCorner: ctx2[35] },
          dirty[1] & 4194304 && get_spread_object(prefixFilter(ctx2[53], "menu$"))
        ]) : {};
        if (dirty[0] & 16777216 | dirty[1] & 4194400 | dirty[2] & 134217728) {
          menu_changes.$$scope = { dirty, ctx: ctx2 };
        }
        if (!updating_open && dirty[1] & 2) {
          updating_open = true;
          menu_changes.open = ctx2[32];
          add_flush_callback(() => updating_open = false);
        }
        menu.$set(menu_changes);
        set_attributes(div1, div1_data = get_spread_update(div1_levels, [
          (!current || dirty[0] & 67119050 | dirty[1] & 2097154 && div1_class_value !== (div1_class_value = classMap({
            [ctx2[3]]: true,
            "mdc-select": true,
            "mdc-select--required": ctx2[10],
            "mdc-select--disabled": ctx2[6],
            "mdc-select--filled": ctx2[7] === "filled",
            "mdc-select--outlined": ctx2[7] === "outlined",
            "smui-select--standard": ctx2[7] === "standard",
            "mdc-select--with-leading-icon": ctx2[45](ctx2[13]) ? ctx2[52].leadingIcon : ctx2[13],
            "mdc-select--no-label": ctx2[8] || ctx2[9] == null && !ctx2[52].label,
            "mdc-select--invalid": ctx2[1],
            "mdc-select--activated": ctx2[32],
            "mdc-data-table__pagination-rows-per-page-select": ctx2[46] === "data-table:pagination",
            ...ctx2[26]
          }))) && { class: div1_class_value },
          (!current || dirty[0] & 134217744 && div1_style_value !== (div1_style_value = Object.entries(ctx2[27]).map(func6).concat([ctx2[4]]).join(" "))) && { style: div1_style_value },
          dirty[1] & 4194304 && exclude(ctx2[53], [
            "input$",
            "anchor$",
            "label$",
            "outline$",
            "selectedTextContainer$",
            "selectedText$",
            "dropdownIcon$",
            "ripple$",
            "menu$",
            "list$",
            "helperText$"
          ])
        ]));
        if (Ripple_action && is_function(Ripple_action.update) && dirty[0] & 128)
          Ripple_action.update.call(null, {
            ripple: ctx2[7] === "filled",
            unbounded: false,
            addClass: ctx2[49],
            removeClass: ctx2[50],
            addStyle: ctx2[51]
          });
        if (useActions_action_4 && is_function(useActions_action_4.update) && dirty[0] & 4)
          useActions_action_4.update.call(null, ctx2[2]);
        if (ctx2[52].helperText) {
          if (if_block5) {
            if_block5.p(ctx2, dirty);
            if (dirty[1] & 2097152) {
              transition_in(if_block5, 1);
            }
          } else {
            if_block5 = create_if_block5(ctx2);
            if_block5.c();
            transition_in(if_block5, 1);
            if_block5.m(if_block5_anchor.parentNode, if_block5_anchor);
          }
        } else if (if_block5) {
          group_outros();
          transition_out(if_block5, 1, 1, () => {
            if_block5 = null;
          });
          check_outros();
        }
      },
      i(local) {
        if (current)
          return;
        transition_in(if_block2);
        transition_in(if_block3);
        transition_in(leadingIcon_slot, local);
        transition_in(if_block4);
        transition_in(menu.$$.fragment, local);
        transition_in(if_block5);
        current = true;
      },
      o(local) {
        transition_out(if_block2);
        transition_out(if_block3);
        transition_out(leadingIcon_slot, local);
        transition_out(if_block4);
        transition_out(menu.$$.fragment, local);
        transition_out(if_block5);
        current = false;
      },
      d(detaching) {
        if (detaching)
          detach(div1);
        if (if_block0)
          if_block0.d();
        if (if_block1)
          if_block1.d();
        if (if_block2)
          if_block2.d();
        if (if_block3)
          if_block3.d();
        if (leadingIcon_slot)
          leadingIcon_slot.d(detaching);
        ctx[69](null);
        if (if_block4)
          if_block4.d();
        ctx[71](null);
        destroy_component(menu);
        ctx[83](null);
        if (detaching)
          detach(t9);
        if (if_block5)
          if_block5.d(detaching);
        if (detaching)
          detach(if_block5_anchor);
        mounted = false;
        run_all(dispose);
      }
    };
  }
  var counter3 = 0;
  function getNormalizedXCoordinate(evt) {
    const targetClientRect = evt.currentTarget.getBoundingClientRect();
    const xCoordinate = isTouchEvent(evt) ? evt.touches[0].clientX : evt.clientX;
    return xCoordinate - targetClientRect.left;
  }
  function isTouchEvent(evt) {
    return "touches" in evt;
  }
  var func6 = ([name, value]) => `${name}: ${value};`;
  function instance_18($$self, $$props, $$invalidate) {
    const omit_props_names = [
      "use",
      "class",
      "style",
      "ripple",
      "disabled",
      "variant",
      "noLabel",
      "label",
      "value",
      "key",
      "dirty",
      "invalid",
      "updateInvalid",
      "required",
      "inputId",
      "hiddenInput",
      "withLeadingIcon",
      "anchor$use",
      "anchor$class",
      "selectedTextContainer$use",
      "selectedTextContainer$class",
      "selectedText$use",
      "selectedText$class",
      "dropdownIcon$use",
      "dropdownIcon$class",
      "menu$class",
      "getUseDefaultValidation",
      "setUseDefaultValidation",
      "focus",
      "layout",
      "getElement"
    ];
    let $$restProps = compute_rest_props($$props, omit_props_names);
    let $selectedTextStore;
    let $valueStore;
    let { $$slots: slots = {}, $$scope } = $$props;
    const $$slots = compute_slots(slots);
    const forwardEvents = forwardEventsBuilder(get_current_component());
    let uninitializedValue = () => {
    };
    function isUninitializedValue(value2) {
      return value2 === uninitializedValue;
    }
    let { use = [] } = $$props;
    let { class: className = "" } = $$props;
    let { style = "" } = $$props;
    let { ripple = true } = $$props;
    let { disabled = false } = $$props;
    let { variant = "standard" } = $$props;
    let { noLabel = false } = $$props;
    let { label = void 0 } = $$props;
    let { value = "" } = $$props;
    let { key = (item) => item } = $$props;
    let { dirty = false } = $$props;
    let { invalid = uninitializedValue } = $$props;
    let { updateInvalid = isUninitializedValue(invalid) } = $$props;
    const useDefaultValidation = isUninitializedValue(invalid);
    if (isUninitializedValue(invalid)) {
      invalid = false;
    }
    let { required = false } = $$props;
    let { inputId = "SMUI-select-" + counter3++ } = $$props;
    let { hiddenInput = false } = $$props;
    let { withLeadingIcon = uninitializedValue } = $$props;
    let { anchor$use = [] } = $$props;
    let { anchor$class = "" } = $$props;
    let { selectedTextContainer$use = [] } = $$props;
    let { selectedTextContainer$class = "" } = $$props;
    let { selectedText$use = [] } = $$props;
    let { selectedText$class = "" } = $$props;
    let { dropdownIcon$use = [] } = $$props;
    let { dropdownIcon$class = "" } = $$props;
    let { menu$class = "" } = $$props;
    let element2;
    let instance13;
    let internalClasses = {};
    let internalStyles = {};
    let selectAnchor;
    let selectAnchorAttrs = {};
    let selectText;
    let selectedIndex = -1;
    let helperId = void 0;
    let addLayoutListener = getContext("SMUI:addLayoutListener");
    let removeLayoutListener;
    let menuOpen = false;
    let menuClasses = {};
    let anchorElement = void 0;
    let anchorCorner = void 0;
    let wrapFocus = false;
    let list;
    let context = getContext("SMUI:select:context");
    let leadingIcon = void 0;
    let helperText = void 0;
    let floatingLabel = void 0;
    let lineRipple = void 0;
    let notchedOutline = void 0;
    setContext("SMUI:list:role", "");
    setContext("SMUI:list:nav", false);
    const selectedTextStore = writable("");
    component_subscribe($$self, selectedTextStore, (value2) => $$invalidate(43, $selectedTextStore = value2));
    setContext("SMUI:select:selectedText", selectedTextStore);
    const valueStore = writable(value);
    component_subscribe($$self, valueStore, (value2) => $$invalidate(91, $valueStore = value2));
    setContext("SMUI:select:value", valueStore);
    let previousSelectedIndex = selectedIndex;
    if (addLayoutListener) {
      removeLayoutListener = addLayoutListener(layout);
    }
    onMount(() => {
      $$invalidate(23, instance13 = new MDCSelectFoundation({
        setSelectedText: (text2) => {
          set_store_value(selectedTextStore, $selectedTextStore = text2, $selectedTextStore);
        },
        isSelectAnchorFocused: () => document.activeElement === selectAnchor,
        getSelectAnchorAttr,
        setSelectAnchorAttr: addSelectAnchorAttr,
        removeSelectAnchorAttr,
        addMenuClass,
        removeMenuClass,
        openMenu: () => {
          $$invalidate(32, menuOpen = true);
        },
        closeMenu: () => {
          $$invalidate(32, menuOpen = false);
        },
        getAnchorElement: () => selectAnchor,
        setMenuAnchorElement: (value2) => {
          $$invalidate(34, anchorElement = value2);
        },
        setMenuAnchorCorner: (value2) => {
          $$invalidate(35, anchorCorner = value2);
        },
        setMenuWrapFocus: (value2) => {
          $$invalidate(36, wrapFocus = value2);
        },
        getSelectedIndex: () => selectedIndex,
        setSelectedIndex: (index) => {
          $$invalidate(62, previousSelectedIndex = index);
          $$invalidate(24, selectedIndex = index);
          $$invalidate(0, value = getMenuItemValues()[selectedIndex]);
        },
        focusMenuItemAtIndex: (index) => {
          list.focusItemAtIndex(index);
        },
        getMenuItemCount: () => list.items.length,
        getMenuItemValues: () => getMenuItemValues().map(key),
        getMenuItemTextAtIndex: (index) => list.getPrimaryTextAtIndex(index),
        isTypeaheadInProgress: () => list.typeaheadInProgress,
        typeaheadMatchItem: (nextChar, startingIndex) => list.typeaheadMatchItem(nextChar, startingIndex),
        addClass,
        removeClass,
        hasClass,
        setRippleCenter: (normalizedX) => lineRipple && lineRipple.setRippleCenter(normalizedX),
        activateBottomLine: () => lineRipple && lineRipple.activate(),
        deactivateBottomLine: () => lineRipple && lineRipple.deactivate(),
        notifyChange: (_selectedValue) => {
          $$invalidate(54, dirty = true);
          if (updateInvalid) {
            $$invalidate(1, invalid = !instance13.isValid());
          }
          dispatch(getElement(), "SMUISelect:change", { value, index: selectedIndex }, void 0, true);
        },
        hasOutline: () => !!notchedOutline,
        notchOutline: (labelWidth) => notchedOutline && notchedOutline.notch(labelWidth),
        closeOutline: () => notchedOutline && notchedOutline.closeNotch(),
        hasLabel: () => !!floatingLabel,
        floatLabel: (shouldFloat) => floatingLabel && floatingLabel.float(shouldFloat),
        getLabelWidth: () => floatingLabel ? floatingLabel.getWidth() : 0,
        setLabelRequired: (isRequired) => floatingLabel && floatingLabel.setRequired(isRequired)
      }, {
        get helperText() {
          return helperText;
        },
        get leadingIcon() {
          return leadingIcon;
        }
      }));
      $$invalidate(24, selectedIndex = getMenuItemValues().indexOf(value));
      instance13.init();
      setUseDefaultValidation(useDefaultValidation);
      return () => {
        instance13.destroy();
      };
    });
    onDestroy(() => {
      if (removeLayoutListener) {
        removeLayoutListener();
      }
    });
    function hasClass(className2) {
      return className2 in internalClasses ? internalClasses[className2] : getElement().classList.contains(className2);
    }
    function addClass(className2) {
      if (!internalClasses[className2]) {
        $$invalidate(26, internalClasses[className2] = true, internalClasses);
      }
    }
    function removeClass(className2) {
      if (!(className2 in internalClasses) || internalClasses[className2]) {
        $$invalidate(26, internalClasses[className2] = false, internalClasses);
      }
    }
    function addStyle(name, value2) {
      if (internalStyles[name] != value2) {
        if (value2 === "" || value2 == null) {
          delete internalStyles[name];
          $$invalidate(27, internalStyles);
        } else {
          $$invalidate(27, internalStyles[name] = value2, internalStyles);
        }
      }
    }
    function addMenuClass(className2) {
      if (!menuClasses[className2]) {
        $$invalidate(33, menuClasses[className2] = true, menuClasses);
      }
    }
    function removeMenuClass(className2) {
      if (!(className2 in menuClasses) || menuClasses[className2]) {
        $$invalidate(33, menuClasses[className2] = false, menuClasses);
      }
    }
    function getSelectAnchorAttr(name) {
      var _a2;
      return name in selectAnchorAttrs ? (_a2 = selectAnchorAttrs[name]) !== null && _a2 !== void 0 ? _a2 : null : getElement().getAttribute(name);
    }
    function addSelectAnchorAttr(name, value2) {
      if (selectAnchorAttrs[name] !== value2) {
        $$invalidate(29, selectAnchorAttrs[name] = value2, selectAnchorAttrs);
      }
    }
    function removeSelectAnchorAttr(name) {
      if (!(name in selectAnchorAttrs) || selectAnchorAttrs[name] != null) {
        $$invalidate(29, selectAnchorAttrs[name] = void 0, selectAnchorAttrs);
      }
    }
    function getMenuItemValues() {
      return list.getOrderedList().map((accessor) => accessor.getValue());
    }
    function getUseDefaultValidation() {
      return instance13.getUseDefaultValidation();
    }
    function setUseDefaultValidation(useDefaultValidation2) {
      instance13.setUseDefaultValidation(useDefaultValidation2);
    }
    function focus() {
      selectAnchor.focus();
    }
    function layout() {
      instance13.layout();
    }
    function getElement() {
      return element2;
    }
    function focus_handler(event) {
      bubble.call(this, $$self, event);
    }
    function blur_handler(event) {
      bubble.call(this, $$self, event);
    }
    function floatinglabel_binding($$value) {
      binding_callbacks[$$value ? "unshift" : "push"](() => {
        floatingLabel = $$value;
        $$invalidate(40, floatingLabel);
      });
    }
    function floatinglabel_binding_1($$value) {
      binding_callbacks[$$value ? "unshift" : "push"](() => {
        floatingLabel = $$value;
        $$invalidate(40, floatingLabel);
      });
    }
    function notchedoutline_binding($$value) {
      binding_callbacks[$$value ? "unshift" : "push"](() => {
        notchedOutline = $$value;
        $$invalidate(42, notchedOutline);
      });
    }
    function span0_binding($$value) {
      binding_callbacks[$$value ? "unshift" : "push"](() => {
        selectText = $$value;
        $$invalidate(30, selectText);
      });
    }
    function lineripple_binding($$value) {
      binding_callbacks[$$value ? "unshift" : "push"](() => {
        lineRipple = $$value;
        $$invalidate(41, lineRipple);
      });
    }
    function div0_binding($$value) {
      binding_callbacks[$$value ? "unshift" : "push"](() => {
        selectAnchor = $$value;
        $$invalidate(28, selectAnchor);
      });
    }
    const focus_handler_1 = () => instance13 && instance13.handleFocus();
    const blur_handler_1 = () => instance13 && instance13.handleBlur();
    const click_handler = (event) => {
      selectAnchor.focus();
      if (instance13) {
        instance13.handleClick(getNormalizedXCoordinate(event));
      }
    };
    const keydown_handler = (event) => instance13 && instance13.handleKeydown(event);
    function list_1_selectedIndex_binding(value2) {
      selectedIndex = value2;
      $$invalidate(24, selectedIndex);
    }
    const SMUIList_mount_handler = (event) => $$invalidate(37, list = event.detail);
    function menu_open_binding(value2) {
      menuOpen = value2;
      $$invalidate(32, menuOpen);
    }
    const SMUIMenu_selected_handler = (event) => instance13 && instance13.handleMenuItemAction(event.detail.index);
    const SMUIMenuSurface_closing_handler = () => instance13 && instance13.handleMenuClosing();
    const SMUIMenuSurface_closed_handler = () => instance13 && instance13.handleMenuClosed();
    const SMUIMenuSurface_opened_handler = () => instance13 && instance13.handleMenuOpened();
    function div1_binding($$value) {
      binding_callbacks[$$value ? "unshift" : "push"](() => {
        element2 = $$value;
        $$invalidate(25, element2);
      });
    }
    const SMUISelectLeadingIcon_mount_handler = (event) => $$invalidate(38, leadingIcon = event.detail);
    const SMUISelectLeadingIcon_unmount_handler = () => $$invalidate(38, leadingIcon = void 0);
    const SMUISelectHelperText_id_handler = (event) => $$invalidate(31, helperId = event.detail);
    const SMUISelectHelperText_mount_handler = (event) => $$invalidate(39, helperText = event.detail);
    const SMUISelectHelperText_unmount_handler = () => {
      $$invalidate(31, helperId = void 0);
      $$invalidate(39, helperText = void 0);
    };
    $$self.$$set = ($$new_props) => {
      $$props = assign(assign({}, $$props), exclude_internal_props($$new_props));
      $$invalidate(53, $$restProps = compute_rest_props($$props, omit_props_names));
      if ("use" in $$new_props)
        $$invalidate(2, use = $$new_props.use);
      if ("class" in $$new_props)
        $$invalidate(3, className = $$new_props.class);
      if ("style" in $$new_props)
        $$invalidate(4, style = $$new_props.style);
      if ("ripple" in $$new_props)
        $$invalidate(5, ripple = $$new_props.ripple);
      if ("disabled" in $$new_props)
        $$invalidate(6, disabled = $$new_props.disabled);
      if ("variant" in $$new_props)
        $$invalidate(7, variant = $$new_props.variant);
      if ("noLabel" in $$new_props)
        $$invalidate(8, noLabel = $$new_props.noLabel);
      if ("label" in $$new_props)
        $$invalidate(9, label = $$new_props.label);
      if ("value" in $$new_props)
        $$invalidate(0, value = $$new_props.value);
      if ("key" in $$new_props)
        $$invalidate(55, key = $$new_props.key);
      if ("dirty" in $$new_props)
        $$invalidate(54, dirty = $$new_props.dirty);
      if ("invalid" in $$new_props)
        $$invalidate(1, invalid = $$new_props.invalid);
      if ("updateInvalid" in $$new_props)
        $$invalidate(56, updateInvalid = $$new_props.updateInvalid);
      if ("required" in $$new_props)
        $$invalidate(10, required = $$new_props.required);
      if ("inputId" in $$new_props)
        $$invalidate(11, inputId = $$new_props.inputId);
      if ("hiddenInput" in $$new_props)
        $$invalidate(12, hiddenInput = $$new_props.hiddenInput);
      if ("withLeadingIcon" in $$new_props)
        $$invalidate(13, withLeadingIcon = $$new_props.withLeadingIcon);
      if ("anchor$use" in $$new_props)
        $$invalidate(14, anchor$use = $$new_props.anchor$use);
      if ("anchor$class" in $$new_props)
        $$invalidate(15, anchor$class = $$new_props.anchor$class);
      if ("selectedTextContainer$use" in $$new_props)
        $$invalidate(16, selectedTextContainer$use = $$new_props.selectedTextContainer$use);
      if ("selectedTextContainer$class" in $$new_props)
        $$invalidate(17, selectedTextContainer$class = $$new_props.selectedTextContainer$class);
      if ("selectedText$use" in $$new_props)
        $$invalidate(18, selectedText$use = $$new_props.selectedText$use);
      if ("selectedText$class" in $$new_props)
        $$invalidate(19, selectedText$class = $$new_props.selectedText$class);
      if ("dropdownIcon$use" in $$new_props)
        $$invalidate(20, dropdownIcon$use = $$new_props.dropdownIcon$use);
      if ("dropdownIcon$class" in $$new_props)
        $$invalidate(21, dropdownIcon$class = $$new_props.dropdownIcon$class);
      if ("menu$class" in $$new_props)
        $$invalidate(22, menu$class = $$new_props.menu$class);
      if ("$$scope" in $$new_props)
        $$invalidate(89, $$scope = $$new_props.$$scope);
    };
    $$self.$$.update = () => {
      if ($$self.$$.dirty[0] & 25165825 | $$self.$$.dirty[2] & 1) {
        $:
          if (previousSelectedIndex !== selectedIndex) {
            $$invalidate(62, previousSelectedIndex = selectedIndex);
            if (instance13) {
              instance13.setSelectedIndex(selectedIndex, false, true);
            } else {
              const values = getMenuItemValues();
              if (value !== values[selectedIndex]) {
                $$invalidate(0, value = values[selectedIndex]);
              }
            }
          }
      }
      if ($$self.$$.dirty[0] & 1) {
        $:
          set_store_value(valueStore, $valueStore = value, $valueStore);
      }
      if ($$self.$$.dirty[0] & 8388609 | $$self.$$.dirty[1] & 16777216) {
        $:
          if (instance13 && instance13.getValue() !== key(value)) {
            instance13.setValue(key(value));
          }
      }
      if ($$self.$$.dirty[0] & 8388672) {
        $:
          if (instance13 && instance13.getDisabled() !== disabled) {
            instance13.setDisabled(disabled);
          }
      }
      if ($$self.$$.dirty[0] & 8388610 | $$self.$$.dirty[1] & 41943040) {
        $:
          if (instance13 && dirty && instance13.isValid() !== !invalid) {
            if (updateInvalid) {
              $$invalidate(1, invalid = !instance13.isValid());
            } else {
              instance13.setValid(!invalid);
            }
          }
      }
      if ($$self.$$.dirty[0] & 8389632) {
        $:
          if (instance13 && instance13.getRequired() !== required) {
            instance13.setRequired(required);
          }
      }
    };
    return [
      value,
      invalid,
      use,
      className,
      style,
      ripple,
      disabled,
      variant,
      noLabel,
      label,
      required,
      inputId,
      hiddenInput,
      withLeadingIcon,
      anchor$use,
      anchor$class,
      selectedTextContainer$use,
      selectedTextContainer$class,
      selectedText$use,
      selectedText$class,
      dropdownIcon$use,
      dropdownIcon$class,
      menu$class,
      instance13,
      selectedIndex,
      element2,
      internalClasses,
      internalStyles,
      selectAnchor,
      selectAnchorAttrs,
      selectText,
      helperId,
      menuOpen,
      menuClasses,
      anchorElement,
      anchorCorner,
      wrapFocus,
      list,
      leadingIcon,
      helperText,
      floatingLabel,
      lineRipple,
      notchedOutline,
      $selectedTextStore,
      forwardEvents,
      isUninitializedValue,
      context,
      selectedTextStore,
      valueStore,
      addClass,
      removeClass,
      addStyle,
      $$slots,
      $$restProps,
      dirty,
      key,
      updateInvalid,
      getUseDefaultValidation,
      setUseDefaultValidation,
      focus,
      layout,
      getElement,
      previousSelectedIndex,
      slots,
      focus_handler,
      blur_handler,
      floatinglabel_binding,
      floatinglabel_binding_1,
      notchedoutline_binding,
      span0_binding,
      lineripple_binding,
      div0_binding,
      focus_handler_1,
      blur_handler_1,
      click_handler,
      keydown_handler,
      list_1_selectedIndex_binding,
      SMUIList_mount_handler,
      menu_open_binding,
      SMUIMenu_selected_handler,
      SMUIMenuSurface_closing_handler,
      SMUIMenuSurface_closed_handler,
      SMUIMenuSurface_opened_handler,
      div1_binding,
      SMUISelectLeadingIcon_mount_handler,
      SMUISelectLeadingIcon_unmount_handler,
      SMUISelectHelperText_id_handler,
      SMUISelectHelperText_mount_handler,
      SMUISelectHelperText_unmount_handler,
      $$scope
    ];
  }
  var Select = class extends SvelteComponent {
    constructor(options) {
      super();
      init(this, options, instance_18, create_fragment18, safe_not_equal, {
        use: 2,
        class: 3,
        style: 4,
        ripple: 5,
        disabled: 6,
        variant: 7,
        noLabel: 8,
        label: 9,
        value: 0,
        key: 55,
        dirty: 54,
        invalid: 1,
        updateInvalid: 56,
        required: 10,
        inputId: 11,
        hiddenInput: 12,
        withLeadingIcon: 13,
        anchor$use: 14,
        anchor$class: 15,
        selectedTextContainer$use: 16,
        selectedTextContainer$class: 17,
        selectedText$use: 18,
        selectedText$class: 19,
        dropdownIcon$use: 20,
        dropdownIcon$class: 21,
        menu$class: 22,
        getUseDefaultValidation: 57,
        setUseDefaultValidation: 58,
        focus: 59,
        layout: 60,
        getElement: 61
      }, null, [-1, -1, -1, -1]);
    }
    get getUseDefaultValidation() {
      return this.$$.ctx[57];
    }
    get setUseDefaultValidation() {
      return this.$$.ctx[58];
    }
    get focus() {
      return this.$$.ctx[59];
    }
    get layout() {
      return this.$$.ctx[60];
    }
    get getElement() {
      return this.$$.ctx[61];
    }
  };
  var Select_default = Select;

  // node_modules/@smui/select/dist/Option.svelte
  function create_default_slot6(ctx) {
    let current;
    const default_slot_template = ctx[11].default;
    const default_slot = create_slot(default_slot_template, ctx, ctx[13], null);
    return {
      c() {
        if (default_slot)
          default_slot.c();
      },
      m(target, anchor) {
        if (default_slot) {
          default_slot.m(target, anchor);
        }
        current = true;
      },
      p(ctx2, dirty) {
        if (default_slot) {
          if (default_slot.p && (!current || dirty & 8192)) {
            update_slot_base(default_slot, default_slot_template, ctx2, ctx2[13], !current ? get_all_dirty_from_scope(ctx2[13]) : get_slot_changes(default_slot_template, ctx2[13], dirty, null), null);
          }
        }
      },
      i(local) {
        if (current)
          return;
        transition_in(default_slot, local);
        current = true;
      },
      o(local) {
        transition_out(default_slot, local);
        current = false;
      },
      d(detaching) {
        if (default_slot)
          default_slot.d(detaching);
      }
    };
  }
  function create_fragment19(ctx) {
    let item;
    let current;
    const item_spread_levels = [
      { use: ctx[3] },
      { "data-value": ctx[0] },
      { value: ctx[0] },
      { selected: ctx[2] },
      ctx[6]
    ];
    let item_props = {
      $$slots: { default: [create_default_slot6] },
      $$scope: { ctx }
    };
    for (let i = 0; i < item_spread_levels.length; i += 1) {
      item_props = assign(item_props, item_spread_levels[i]);
    }
    item = new Item2({ props: item_props });
    ctx[12](item);
    return {
      c() {
        create_component(item.$$.fragment);
      },
      m(target, anchor) {
        mount_component(item, target, anchor);
        current = true;
      },
      p(ctx2, [dirty]) {
        const item_changes = dirty & 77 ? get_spread_update(item_spread_levels, [
          dirty & 8 && { use: ctx2[3] },
          dirty & 1 && { "data-value": ctx2[0] },
          dirty & 1 && { value: ctx2[0] },
          dirty & 4 && { selected: ctx2[2] },
          dirty & 64 && get_spread_object(ctx2[6])
        ]) : {};
        if (dirty & 8192) {
          item_changes.$$scope = { dirty, ctx: ctx2 };
        }
        item.$set(item_changes);
      },
      i(local) {
        if (current)
          return;
        transition_in(item.$$.fragment, local);
        current = true;
      },
      o(local) {
        transition_out(item.$$.fragment, local);
        current = false;
      },
      d(detaching) {
        ctx[12](null);
        destroy_component(item, detaching);
      }
    };
  }
  function instance11($$self, $$props, $$invalidate) {
    let usePass;
    let selected;
    const omit_props_names = ["use", "class", "value", "getElement"];
    let $$restProps = compute_rest_props($$props, omit_props_names);
    let $selectedText;
    let $selectedValue;
    let { $$slots: slots = {}, $$scope } = $$props;
    const forwardEvents = forwardEventsBuilder(get_current_component());
    let { use = [] } = $$props;
    const className = "";
    let { value = "" } = $$props;
    let element2;
    const selectedText = getContext("SMUI:select:selectedText");
    component_subscribe($$self, selectedText, (value2) => $$invalidate(14, $selectedText = value2));
    const selectedValue = getContext("SMUI:select:value");
    component_subscribe($$self, selectedValue, (value2) => $$invalidate(10, $selectedValue = value2));
    setContext("SMUI:list:item:role", "option");
    onMount(setSelectedText);
    onDestroy(setSelectedText);
    function setSelectedText() {
      if (selected && element2) {
        set_store_value(selectedText, $selectedText = element2.getPrimaryText(), $selectedText);
      }
    }
    function getElement() {
      return element2.getElement();
    }
    function item_binding($$value) {
      binding_callbacks[$$value ? "unshift" : "push"](() => {
        element2 = $$value;
        $$invalidate(1, element2);
      });
    }
    $$self.$$set = ($$new_props) => {
      $$props = assign(assign({}, $$props), exclude_internal_props($$new_props));
      $$invalidate(6, $$restProps = compute_rest_props($$props, omit_props_names));
      if ("use" in $$new_props)
        $$invalidate(7, use = $$new_props.use);
      if ("value" in $$new_props)
        $$invalidate(0, value = $$new_props.value);
      if ("$$scope" in $$new_props)
        $$invalidate(13, $$scope = $$new_props.$$scope);
    };
    $$self.$$.update = () => {
      if ($$self.$$.dirty & 128) {
        $:
          $$invalidate(3, usePass = [forwardEvents, ...use]);
      }
      if ($$self.$$.dirty & 1025) {
        $:
          $$invalidate(2, selected = value != null && value !== "" && $selectedValue === value);
      }
    };
    return [
      value,
      element2,
      selected,
      usePass,
      selectedText,
      selectedValue,
      $$restProps,
      use,
      className,
      getElement,
      $selectedValue,
      slots,
      item_binding,
      $$scope
    ];
  }
  var Option = class extends SvelteComponent {
    constructor(options) {
      super();
      init(this, options, instance11, create_fragment19, safe_not_equal, {
        use: 7,
        class: 8,
        value: 0,
        getElement: 9
      });
    }
    get class() {
      return this.$$.ctx[8];
    }
    get getElement() {
      return this.$$.ctx[9];
    }
  };
  var Option_default = Option;

  // node_modules/@smui/select/dist/index.js
  var Option2 = Option_default;
  var dist_default8 = Select_default;

  // node_modules/@smui/select/dist/icon/Icon.svelte
  function create_else_block3(ctx) {
    let t;
    return {
      c() {
        t = text(ctx[7]);
      },
      m(target, anchor) {
        insert(target, t, anchor);
      },
      p(ctx2, dirty) {
        if (dirty & 128)
          set_data(t, ctx2[7]);
      },
      i: noop,
      o: noop,
      d(detaching) {
        if (detaching)
          detach(t);
      }
    };
  }
  function create_if_block6(ctx) {
    let current;
    const default_slot_template = ctx[12].default;
    const default_slot = create_slot(default_slot_template, ctx, ctx[11], null);
    return {
      c() {
        if (default_slot)
          default_slot.c();
      },
      m(target, anchor) {
        if (default_slot) {
          default_slot.m(target, anchor);
        }
        current = true;
      },
      p(ctx2, dirty) {
        if (default_slot) {
          if (default_slot.p && (!current || dirty & 2048)) {
            update_slot_base(default_slot, default_slot_template, ctx2, ctx2[11], !current ? get_all_dirty_from_scope(ctx2[11]) : get_slot_changes(default_slot_template, ctx2[11], dirty, null), null);
          }
        }
      },
      i(local) {
        if (current)
          return;
        transition_in(default_slot, local);
        current = true;
      },
      o(local) {
        transition_out(default_slot, local);
        current = false;
      },
      d(detaching) {
        if (default_slot)
          default_slot.d(detaching);
      }
    };
  }
  function create_fragment20(ctx) {
    let i;
    let current_block_type_index;
    let if_block;
    let i_class_value;
    let i_aria_hidden_value;
    let i_aria_disabled_value;
    let useActions_action;
    let forwardEvents_action;
    let current;
    let mounted;
    let dispose;
    const if_block_creators = [create_if_block6, create_else_block3];
    const if_blocks = [];
    function select_block_type(ctx2, dirty) {
      if (ctx2[7] == null)
        return 0;
      return 1;
    }
    current_block_type_index = select_block_type(ctx, -1);
    if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
    let i_levels = [
      {
        class: i_class_value = classMap({
          [ctx[1]]: true,
          "mdc-select__icon": true
        })
      },
      { tabindex: ctx[3] },
      {
        "aria-hidden": i_aria_hidden_value = ctx[3] === -1 ? "true" : "false"
      },
      {
        "aria-disabled": i_aria_disabled_value = ctx[2] === "button" ? ctx[4] ? "true" : "false" : void 0
      },
      { role: ctx[2] },
      ctx[6],
      ctx[9]
    ];
    let i_data = {};
    for (let i2 = 0; i2 < i_levels.length; i2 += 1) {
      i_data = assign(i_data, i_levels[i2]);
    }
    return {
      c() {
        i = element("i");
        if_block.c();
        set_attributes(i, i_data);
      },
      m(target, anchor) {
        insert(target, i, anchor);
        if_blocks[current_block_type_index].m(i, null);
        ctx[13](i);
        current = true;
        if (!mounted) {
          dispose = [
            action_destroyer(useActions_action = useActions.call(null, i, ctx[0])),
            action_destroyer(forwardEvents_action = ctx[8].call(null, i))
          ];
          mounted = true;
        }
      },
      p(ctx2, [dirty]) {
        let previous_block_index = current_block_type_index;
        current_block_type_index = select_block_type(ctx2, dirty);
        if (current_block_type_index === previous_block_index) {
          if_blocks[current_block_type_index].p(ctx2, dirty);
        } else {
          group_outros();
          transition_out(if_blocks[previous_block_index], 1, 1, () => {
            if_blocks[previous_block_index] = null;
          });
          check_outros();
          if_block = if_blocks[current_block_type_index];
          if (!if_block) {
            if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx2);
            if_block.c();
          } else {
            if_block.p(ctx2, dirty);
          }
          transition_in(if_block, 1);
          if_block.m(i, null);
        }
        set_attributes(i, i_data = get_spread_update(i_levels, [
          (!current || dirty & 2 && i_class_value !== (i_class_value = classMap({
            [ctx2[1]]: true,
            "mdc-select__icon": true
          }))) && { class: i_class_value },
          (!current || dirty & 8) && { tabindex: ctx2[3] },
          (!current || dirty & 8 && i_aria_hidden_value !== (i_aria_hidden_value = ctx2[3] === -1 ? "true" : "false")) && { "aria-hidden": i_aria_hidden_value },
          (!current || dirty & 20 && i_aria_disabled_value !== (i_aria_disabled_value = ctx2[2] === "button" ? ctx2[4] ? "true" : "false" : void 0)) && { "aria-disabled": i_aria_disabled_value },
          (!current || dirty & 4) && { role: ctx2[2] },
          dirty & 64 && ctx2[6],
          dirty & 512 && ctx2[9]
        ]));
        if (useActions_action && is_function(useActions_action.update) && dirty & 1)
          useActions_action.update.call(null, ctx2[0]);
      },
      i(local) {
        if (current)
          return;
        transition_in(if_block);
        current = true;
      },
      o(local) {
        transition_out(if_block);
        current = false;
      },
      d(detaching) {
        if (detaching)
          detach(i);
        if_blocks[current_block_type_index].d();
        ctx[13](null);
        mounted = false;
        run_all(dispose);
      }
    };
  }
  function instance_19($$self, $$props, $$invalidate) {
    const omit_props_names = ["use", "class", "role", "tabindex", "disabled", "getElement"];
    let $$restProps = compute_rest_props($$props, omit_props_names);
    let { $$slots: slots = {}, $$scope } = $$props;
    const forwardEvents = forwardEventsBuilder(get_current_component());
    let { use = [] } = $$props;
    let { class: className = "" } = $$props;
    let { role = void 0 } = $$props;
    let { tabindex = role === "button" ? 0 : -1 } = $$props;
    let { disabled = false } = $$props;
    let element2;
    let instance13;
    let internalAttrs = {};
    let content = void 0;
    onMount(() => {
      instance13 = new MDCSelectIconFoundation({
        getAttr,
        setAttr: addAttr,
        removeAttr,
        setContent: (value) => {
          $$invalidate(7, content = value);
        },
        registerInteractionHandler: (evtType, handler) => getElement().addEventListener(evtType, handler),
        deregisterInteractionHandler: (evtType, handler) => getElement().removeEventListener(evtType, handler),
        notifyIconAction: () => dispatch(getElement(), "SMUISelect:icon", void 0, void 0, true)
      });
      dispatch(getElement(), "SMUISelectLeadingIcon:mount", instance13);
      instance13.init();
      return () => {
        dispatch(getElement(), "SMUISelectLeadingIcon:unmount", instance13);
        instance13.destroy();
      };
    });
    function getAttr(name) {
      var _a2;
      return name in internalAttrs ? (_a2 = internalAttrs[name]) !== null && _a2 !== void 0 ? _a2 : null : getElement().getAttribute(name);
    }
    function addAttr(name, value) {
      if (internalAttrs[name] !== value) {
        $$invalidate(6, internalAttrs[name] = value, internalAttrs);
      }
    }
    function removeAttr(name) {
      if (!(name in internalAttrs) || internalAttrs[name] != null) {
        $$invalidate(6, internalAttrs[name] = void 0, internalAttrs);
      }
    }
    function getElement() {
      return element2;
    }
    function i_binding($$value) {
      binding_callbacks[$$value ? "unshift" : "push"](() => {
        element2 = $$value;
        $$invalidate(5, element2);
      });
    }
    $$self.$$set = ($$new_props) => {
      $$props = assign(assign({}, $$props), exclude_internal_props($$new_props));
      $$invalidate(9, $$restProps = compute_rest_props($$props, omit_props_names));
      if ("use" in $$new_props)
        $$invalidate(0, use = $$new_props.use);
      if ("class" in $$new_props)
        $$invalidate(1, className = $$new_props.class);
      if ("role" in $$new_props)
        $$invalidate(2, role = $$new_props.role);
      if ("tabindex" in $$new_props)
        $$invalidate(3, tabindex = $$new_props.tabindex);
      if ("disabled" in $$new_props)
        $$invalidate(4, disabled = $$new_props.disabled);
      if ("$$scope" in $$new_props)
        $$invalidate(11, $$scope = $$new_props.$$scope);
    };
    return [
      use,
      className,
      role,
      tabindex,
      disabled,
      element2,
      internalAttrs,
      content,
      forwardEvents,
      $$restProps,
      getElement,
      $$scope,
      slots,
      i_binding
    ];
  }
  var Icon = class extends SvelteComponent {
    constructor(options) {
      super();
      init(this, options, instance_19, create_fragment20, safe_not_equal, {
        use: 0,
        class: 1,
        role: 2,
        tabindex: 3,
        disabled: 4,
        getElement: 10
      });
    }
    get getElement() {
      return this.$$.ctx[10];
    }
  };
  var Icon_default = Icon;

  // node_modules/@smui/select/dist/icon/index.js
  var icon_default = Icon_default;

  // src/components/App.svelte
  function get_each_context(ctx, list, i) {
    const child_ctx = ctx.slice();
    child_ctx[6] = list[i];
    return child_ctx;
  }
  function create_default_slot_52(ctx) {
    let t_value = ctx[6] + "";
    let t;
    return {
      c() {
        t = text(t_value);
      },
      m(target, anchor) {
        insert(target, t, anchor);
      },
      p: noop,
      d(detaching) {
        if (detaching)
          detach(t);
      }
    };
  }
  function create_each_block(ctx) {
    let option;
    let current;
    option = new Option2({
      props: {
        value: ctx[6],
        $$slots: { default: [create_default_slot_52] },
        $$scope: { ctx }
      }
    });
    return {
      c() {
        create_component(option.$$.fragment);
      },
      m(target, anchor) {
        mount_component(option, target, anchor);
        current = true;
      },
      p(ctx2, dirty) {
        const option_changes = {};
        if (dirty & 512) {
          option_changes.$$scope = { dirty, ctx: ctx2 };
        }
        option.$set(option_changes);
      },
      i(local) {
        if (current)
          return;
        transition_in(option.$$.fragment, local);
        current = true;
      },
      o(local) {
        transition_out(option.$$.fragment, local);
        current = false;
      },
      d(detaching) {
        destroy_component(option, detaching);
      }
    };
  }
  function create_default_slot_42(ctx) {
    let each_1_anchor;
    let current;
    let each_value = ctx[3];
    let each_blocks = [];
    for (let i = 0; i < each_value.length; i += 1) {
      each_blocks[i] = create_each_block(get_each_context(ctx, each_value, i));
    }
    const out = (i) => transition_out(each_blocks[i], 1, 1, () => {
      each_blocks[i] = null;
    });
    return {
      c() {
        for (let i = 0; i < each_blocks.length; i += 1) {
          each_blocks[i].c();
        }
        each_1_anchor = empty();
      },
      m(target, anchor) {
        for (let i = 0; i < each_blocks.length; i += 1) {
          each_blocks[i].m(target, anchor);
        }
        insert(target, each_1_anchor, anchor);
        current = true;
      },
      p(ctx2, dirty) {
        if (dirty & 8) {
          each_value = ctx2[3];
          let i;
          for (i = 0; i < each_value.length; i += 1) {
            const child_ctx = get_each_context(ctx2, each_value, i);
            if (each_blocks[i]) {
              each_blocks[i].p(child_ctx, dirty);
              transition_in(each_blocks[i], 1);
            } else {
              each_blocks[i] = create_each_block(child_ctx);
              each_blocks[i].c();
              transition_in(each_blocks[i], 1);
              each_blocks[i].m(each_1_anchor.parentNode, each_1_anchor);
            }
          }
          group_outros();
          for (i = each_value.length; i < each_blocks.length; i += 1) {
            out(i);
          }
          check_outros();
        }
      },
      i(local) {
        if (current)
          return;
        for (let i = 0; i < each_value.length; i += 1) {
          transition_in(each_blocks[i]);
        }
        current = true;
      },
      o(local) {
        each_blocks = each_blocks.filter(Boolean);
        for (let i = 0; i < each_blocks.length; i += 1) {
          transition_out(each_blocks[i]);
        }
        current = false;
      },
      d(detaching) {
        destroy_each(each_blocks, detaching);
        if (detaching)
          detach(each_1_anchor);
      }
    };
  }
  function create_default_slot_32(ctx) {
    let t;
    return {
      c() {
        t = text("hub");
      },
      m(target, anchor) {
        insert(target, t, anchor);
      },
      d(detaching) {
        if (detaching)
          detach(t);
      }
    };
  }
  function create_leadingIcon_slot_1(ctx) {
    let icon;
    let current;
    icon = new icon_default({
      props: {
        class: "material-icons",
        slot: "leadingIcon",
        $$slots: { default: [create_default_slot_32] },
        $$scope: { ctx }
      }
    });
    return {
      c() {
        create_component(icon.$$.fragment);
      },
      m(target, anchor) {
        mount_component(icon, target, anchor);
        current = true;
      },
      p(ctx2, dirty) {
        const icon_changes = {};
        if (dirty & 512) {
          icon_changes.$$scope = { dirty, ctx: ctx2 };
        }
        icon.$set(icon_changes);
      },
      i(local) {
        if (current)
          return;
        transition_in(icon.$$.fragment, local);
        current = true;
      },
      o(local) {
        transition_out(icon.$$.fragment, local);
        current = false;
      },
      d(detaching) {
        destroy_component(icon, detaching);
      }
    };
  }
  function create_default_slot_22(ctx) {
    let t;
    return {
      c() {
        t = text("all");
      },
      m(target, anchor) {
        insert(target, t, anchor);
      },
      d(detaching) {
        if (detaching)
          detach(t);
      }
    };
  }
  function create_default_slot_12(ctx) {
    let option;
    let current;
    option = new Option2({
      props: {
        value: "all",
        $$slots: { default: [create_default_slot_22] },
        $$scope: { ctx }
      }
    });
    return {
      c() {
        create_component(option.$$.fragment);
      },
      m(target, anchor) {
        mount_component(option, target, anchor);
        current = true;
      },
      p(ctx2, dirty) {
        const option_changes = {};
        if (dirty & 512) {
          option_changes.$$scope = { dirty, ctx: ctx2 };
        }
        option.$set(option_changes);
      },
      i(local) {
        if (current)
          return;
        transition_in(option.$$.fragment, local);
        current = true;
      },
      o(local) {
        transition_out(option.$$.fragment, local);
        current = false;
      },
      d(detaching) {
        destroy_component(option, detaching);
      }
    };
  }
  function create_default_slot7(ctx) {
    let t;
    return {
      c() {
        t = text("spoke");
      },
      m(target, anchor) {
        insert(target, t, anchor);
      },
      d(detaching) {
        if (detaching)
          detach(t);
      }
    };
  }
  function create_leadingIcon_slot(ctx) {
    let icon;
    let current;
    icon = new icon_default({
      props: {
        class: "material-icons",
        slot: "leadingIcon",
        $$slots: { default: [create_default_slot7] },
        $$scope: { ctx }
      }
    });
    return {
      c() {
        create_component(icon.$$.fragment);
      },
      m(target, anchor) {
        mount_component(icon, target, anchor);
        current = true;
      },
      p(ctx2, dirty) {
        const icon_changes = {};
        if (dirty & 512) {
          icon_changes.$$scope = { dirty, ctx: ctx2 };
        }
        icon.$set(icon_changes);
      },
      i(local) {
        if (current)
          return;
        transition_in(icon.$$.fragment, local);
        current = true;
      },
      o(local) {
        transition_out(icon.$$.fragment, local);
        current = false;
      },
      d(detaching) {
        destroy_component(icon, detaching);
      }
    };
  }
  function create_fragment21(ctx) {
    let main;
    let div2;
    let div0;
    let select0;
    let updating_value;
    let t0;
    let pre;
    let t1;
    let t2;
    let t3;
    let div1;
    let select1;
    let updating_value_1;
    let t4;
    let h1;
    let t5;
    let t6;
    let t7;
    let current;
    function select0_value_binding(value) {
      ctx[4](value);
    }
    let select0_props = {
      label: "Context",
      $$slots: {
        leadingIcon: [create_leadingIcon_slot_1],
        default: [create_default_slot_42]
      },
      $$scope: { ctx }
    };
    if (ctx[1] !== void 0) {
      select0_props.value = ctx[1];
    }
    select0 = new dist_default8({ props: select0_props });
    binding_callbacks.push(() => bind(select0, "value", select0_value_binding));
    function select1_value_binding(value) {
      ctx[5](value);
    }
    let select1_props = {
      label: "Namespace",
      $$slots: {
        leadingIcon: [create_leadingIcon_slot],
        default: [create_default_slot_12]
      },
      $$scope: { ctx }
    };
    if (ctx[2] !== void 0) {
      select1_props.value = ctx[2];
    }
    select1 = new dist_default8({ props: select1_props });
    binding_callbacks.push(() => bind(select1, "value", select1_value_binding));
    return {
      c() {
        main = element("main");
        div2 = element("div");
        div0 = element("div");
        create_component(select0.$$.fragment);
        t0 = space();
        pre = element("pre");
        t1 = text("Context: ");
        t2 = text(ctx[1]);
        t3 = space();
        div1 = element("div");
        create_component(select1.$$.fragment);
        t4 = space();
        h1 = element("h1");
        t5 = text("Hello ");
        t6 = text(ctx[0]);
        t7 = text("!");
        attr(pre, "class", "status");
        attr(div0, "class", "svelte-1leh42g");
        attr(div1, "class", "svelte-1leh42g");
        attr(div2, "class", "topnav svelte-1leh42g");
        attr(h1, "class", "svelte-1leh42g");
        attr(main, "class", "svelte-1leh42g");
      },
      m(target, anchor) {
        insert(target, main, anchor);
        append(main, div2);
        append(div2, div0);
        mount_component(select0, div0, null);
        append(div0, t0);
        append(div0, pre);
        append(pre, t1);
        append(pre, t2);
        append(div2, t3);
        append(div2, div1);
        mount_component(select1, div1, null);
        append(main, t4);
        append(main, h1);
        append(h1, t5);
        append(h1, t6);
        append(h1, t7);
        current = true;
      },
      p(ctx2, [dirty]) {
        const select0_changes = {};
        if (dirty & 512) {
          select0_changes.$$scope = { dirty, ctx: ctx2 };
        }
        if (!updating_value && dirty & 2) {
          updating_value = true;
          select0_changes.value = ctx2[1];
          add_flush_callback(() => updating_value = false);
        }
        select0.$set(select0_changes);
        if (!current || dirty & 2)
          set_data(t2, ctx2[1]);
        const select1_changes = {};
        if (dirty & 512) {
          select1_changes.$$scope = { dirty, ctx: ctx2 };
        }
        if (!updating_value_1 && dirty & 4) {
          updating_value_1 = true;
          select1_changes.value = ctx2[2];
          add_flush_callback(() => updating_value_1 = false);
        }
        select1.$set(select1_changes);
        if (!current || dirty & 1)
          set_data(t6, ctx2[0]);
      },
      i(local) {
        if (current)
          return;
        transition_in(select0.$$.fragment, local);
        transition_in(select1.$$.fragment, local);
        current = true;
      },
      o(local) {
        transition_out(select0.$$.fragment, local);
        transition_out(select1.$$.fragment, local);
        current = false;
      },
      d(detaching) {
        if (detaching)
          detach(main);
        destroy_component(select0);
        destroy_component(select1);
      }
    };
  }
  function instance12($$self, $$props, $$invalidate) {
    let { name = "Flux Web UI" } = $$props;
    let contextNames = ["gcp", "kind-kind"];
    let selectedContext = contextNames[0];
    let selectedNamespace = "all";
    function select0_value_binding(value) {
      selectedContext = value;
      $$invalidate(1, selectedContext);
    }
    function select1_value_binding(value) {
      selectedNamespace = value;
      $$invalidate(2, selectedNamespace);
    }
    $$self.$$set = ($$props2) => {
      if ("name" in $$props2)
        $$invalidate(0, name = $$props2.name);
    };
    return [
      name,
      selectedContext,
      selectedNamespace,
      contextNames,
      select0_value_binding,
      select1_value_binding
    ];
  }
  var App = class extends SvelteComponent {
    constructor(options) {
      super();
      init(this, options, instance12, create_fragment21, safe_not_equal, { name: 0 });
    }
  };
  var App_default = App;

  // src/main.js
  var app = new App_default({
    target: document.body
  });
  var main_default = app;
})();
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
***************************************************************************** */
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
/**
 * @license
 * Copyright 2019 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
/**
 * @license
 * Copyright 2020 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
//# sourceMappingURL=bundle.js.map
