(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
  var __esm = (fn, res) => function __init() {
    return fn && (res = (0, fn[Object.keys(fn)[0]])(fn = 0)), res;
  };
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[Object.keys(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __export = (target, all) => {
    __markAsModule(target);
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };
  var __reExport = (target, module, desc) => {
    if (module && typeof module === "object" || typeof module === "function") {
      for (let key of __getOwnPropNames(module))
        if (!__hasOwnProp.call(target, key) && key !== "default")
          __defProp(target, key, { get: () => module[key], enumerable: !(desc = __getOwnPropDesc(module, key)) || desc.enumerable });
    }
    return target;
  };
  var __toModule = (module) => {
    return __reExport(__markAsModule(__defProp(module != null ? __create(__getProtoOf(module)) : {}, "default", module && module.__esModule && "default" in module ? { get: () => module.default, enumerable: true } : { value: module, enumerable: true })), module);
  };

  // preserved-external-deps:react
  var require_react = __commonJS({
    "preserved-external-deps:react"(exports, module) {
      module.exports = React;
    }
  });

  // preserved-external-deps:react-dom
  var require_react_dom = __commonJS({
    "preserved-external-deps:react-dom"(exports, module) {
      module.exports = ReactDOM;
    }
  });

  // ../../node_modules/.pnpm/web-vitals@1.1.2/node_modules/web-vitals/dist/web-vitals.js
  var web_vitals_exports = {};
  __export(web_vitals_exports, {
    getCLS: () => s,
    getFCP: () => l,
    getFID: () => L,
    getLCP: () => T,
    getTTFB: () => b
  });
  var e, t, n, i, a, r, o, c, u, f, s, m, p, v, d, l, h, S, y, g, E, w, L, T, b;
  var init_web_vitals = __esm({
    "../../node_modules/.pnpm/web-vitals@1.1.2/node_modules/web-vitals/dist/web-vitals.js"() {
      a = function(e2, t2) {
        return { name: e2, value: t2 === void 0 ? -1 : t2, delta: 0, entries: [], id: "v1-".concat(Date.now(), "-").concat(Math.floor(8999999999999 * Math.random()) + 1e12) };
      };
      r = function(e2, t2) {
        try {
          if (PerformanceObserver.supportedEntryTypes.includes(e2)) {
            if (e2 === "first-input" && !("PerformanceEventTiming" in self))
              return;
            var n2 = new PerformanceObserver(function(e3) {
              return e3.getEntries().map(t2);
            });
            return n2.observe({ type: e2, buffered: true }), n2;
          }
        } catch (e3) {
        }
      };
      o = function(e2, t2) {
        var n2 = function n3(i2) {
          i2.type !== "pagehide" && document.visibilityState !== "hidden" || (e2(i2), t2 && (removeEventListener("visibilitychange", n3, true), removeEventListener("pagehide", n3, true)));
        };
        addEventListener("visibilitychange", n2, true), addEventListener("pagehide", n2, true);
      };
      c = function(e2) {
        addEventListener("pageshow", function(t2) {
          t2.persisted && e2(t2);
        }, true);
      };
      u = typeof WeakSet == "function" ? new WeakSet() : new Set();
      f = function(e2, t2, n2) {
        var i2;
        return function() {
          t2.value >= 0 && (n2 || u.has(t2) || document.visibilityState === "hidden") && (t2.delta = t2.value - (i2 || 0), (t2.delta || i2 === void 0) && (i2 = t2.value, e2(t2)));
        };
      };
      s = function(e2, t2) {
        var n2, i2 = a("CLS", 0), u2 = function(e3) {
          e3.hadRecentInput || (i2.value += e3.value, i2.entries.push(e3), n2());
        }, s2 = r("layout-shift", u2);
        s2 && (n2 = f(e2, i2, t2), o(function() {
          s2.takeRecords().map(u2), n2();
        }), c(function() {
          i2 = a("CLS", 0), n2 = f(e2, i2, t2);
        }));
      };
      m = -1;
      p = function() {
        return document.visibilityState === "hidden" ? 0 : 1 / 0;
      };
      v = function() {
        o(function(e2) {
          var t2 = e2.timeStamp;
          m = t2;
        }, true);
      };
      d = function() {
        return m < 0 && (m = p(), v(), c(function() {
          setTimeout(function() {
            m = p(), v();
          }, 0);
        })), { get timeStamp() {
          return m;
        } };
      };
      l = function(e2, t2) {
        var n2, i2 = d(), o2 = a("FCP"), s2 = function(e3) {
          e3.name === "first-contentful-paint" && (p2 && p2.disconnect(), e3.startTime < i2.timeStamp && (o2.value = e3.startTime, o2.entries.push(e3), u.add(o2), n2()));
        }, m2 = performance.getEntriesByName("first-contentful-paint")[0], p2 = m2 ? null : r("paint", s2);
        (m2 || p2) && (n2 = f(e2, o2, t2), m2 && s2(m2), c(function(i3) {
          o2 = a("FCP"), n2 = f(e2, o2, t2), requestAnimationFrame(function() {
            requestAnimationFrame(function() {
              o2.value = performance.now() - i3.timeStamp, u.add(o2), n2();
            });
          });
        }));
      };
      h = { passive: true, capture: true };
      S = new Date();
      y = function(i2, a2) {
        e || (e = a2, t = i2, n = new Date(), w(removeEventListener), g());
      };
      g = function() {
        if (t >= 0 && t < n - S) {
          var a2 = { entryType: "first-input", name: e.type, target: e.target, cancelable: e.cancelable, startTime: e.timeStamp, processingStart: e.timeStamp + t };
          i.forEach(function(e2) {
            e2(a2);
          }), i = [];
        }
      };
      E = function(e2) {
        if (e2.cancelable) {
          var t2 = (e2.timeStamp > 1e12 ? new Date() : performance.now()) - e2.timeStamp;
          e2.type == "pointerdown" ? function(e3, t3) {
            var n2 = function() {
              y(e3, t3), a2();
            }, i2 = function() {
              a2();
            }, a2 = function() {
              removeEventListener("pointerup", n2, h), removeEventListener("pointercancel", i2, h);
            };
            addEventListener("pointerup", n2, h), addEventListener("pointercancel", i2, h);
          }(t2, e2) : y(t2, e2);
        }
      };
      w = function(e2) {
        ["mousedown", "keydown", "touchstart", "pointerdown"].forEach(function(t2) {
          return e2(t2, E, h);
        });
      };
      L = function(n2, s2) {
        var m2, p2 = d(), v2 = a("FID"), l2 = function(e2) {
          e2.startTime < p2.timeStamp && (v2.value = e2.processingStart - e2.startTime, v2.entries.push(e2), u.add(v2), m2());
        }, h2 = r("first-input", l2);
        m2 = f(n2, v2, s2), h2 && o(function() {
          h2.takeRecords().map(l2), h2.disconnect();
        }, true), h2 && c(function() {
          var r2;
          v2 = a("FID"), m2 = f(n2, v2, s2), i = [], t = -1, e = null, w(addEventListener), r2 = l2, i.push(r2), g();
        });
      };
      T = function(e2, t2) {
        var n2, i2 = d(), s2 = a("LCP"), m2 = function(e3) {
          var t3 = e3.startTime;
          t3 < i2.timeStamp && (s2.value = t3, s2.entries.push(e3)), n2();
        }, p2 = r("largest-contentful-paint", m2);
        if (p2) {
          n2 = f(e2, s2, t2);
          var v2 = function() {
            u.has(s2) || (p2.takeRecords().map(m2), p2.disconnect(), u.add(s2), n2());
          };
          ["keydown", "click"].forEach(function(e3) {
            addEventListener(e3, v2, { once: true, capture: true });
          }), o(v2, true), c(function(i3) {
            s2 = a("LCP"), n2 = f(e2, s2, t2), requestAnimationFrame(function() {
              requestAnimationFrame(function() {
                s2.value = performance.now() - i3.timeStamp, u.add(s2), n2();
              });
            });
          });
        }
      };
      b = function(e2) {
        var t2, n2 = a("TTFB");
        t2 = function() {
          try {
            var t3 = performance.getEntriesByType("navigation")[0] || function() {
              var e3 = performance.timing, t4 = { entryType: "navigation", startTime: 0 };
              for (var n3 in e3)
                n3 !== "navigationStart" && n3 !== "toJSON" && (t4[n3] = Math.max(e3[n3] - e3.navigationStart, 0));
              return t4;
            }();
            if (n2.value = n2.delta = t3.responseStart, n2.value < 0)
              return;
            n2.entries = [t3], e2(n2);
          } catch (e3) {
          }
        }, document.readyState === "complete" ? setTimeout(t2, 0) : addEventListener("pageshow", t2);
      };
    }
  });

  // src/index.tsx
  var import_react2 = __toModule(require_react());
  var import_react_dom = __toModule(require_react_dom());

  // src/App.tsx
  var import_react = __toModule(require_react());

  // src/logo.svg
  var logo_default = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA4NDEuOSA1OTUuMyI+PGcgZmlsbD0iIzYxREFGQiI+PHBhdGggZD0iTTY2Ni4zIDI5Ni41YzAtMzIuNS00MC43LTYzLjMtMTAzLjEtODIuNCAxNC40LTYzLjYgOC0xMTQuMi0yMC4yLTEzMC40LTYuNS0zLjgtMTQuMS01LjYtMjIuNC01LjZ2MjIuM2M0LjYgMCA4LjMuOSAxMS40IDIuNiAxMy42IDcuOCAxOS41IDM3LjUgMTQuOSA3NS43LTEuMSA5LjQtMi45IDE5LjMtNS4xIDI5LjQtMTkuNi00LjgtNDEtOC41LTYzLjUtMTAuOS0xMy41LTE4LjUtMjcuNS0zNS4zLTQxLjYtNTAgMzIuNi0zMC4zIDYzLjItNDYuOSA4NC00Ni45Vjc4Yy0yNy41IDAtNjMuNSAxOS42LTk5LjkgNTMuNi0zNi40LTMzLjgtNzIuNC01My4yLTk5LjktNTMuMnYyMi4zYzIwLjcgMCA1MS40IDE2LjUgODQgNDYuNi0xNCAxNC43LTI4IDMxLjQtNDEuMyA0OS45LTIyLjYgMi40LTQ0IDYuMS02My42IDExLTIuMy0xMC00LTE5LjctNS4yLTI5LTQuNy0zOC4yIDEuMS02Ny45IDE0LjYtNzUuOCAzLTEuOCA2LjktMi42IDExLjUtMi42Vjc4LjVjLTguNCAwLTE2IDEuOC0yMi42IDUuNi0yOC4xIDE2LjItMzQuNCA2Ni43LTE5LjkgMTMwLjEtNjIuMiAxOS4yLTEwMi43IDQ5LjktMTAyLjcgODIuMyAwIDMyLjUgNDAuNyA2My4zIDEwMy4xIDgyLjQtMTQuNCA2My42LTggMTE0LjIgMjAuMiAxMzAuNCA2LjUgMy44IDE0LjEgNS42IDIyLjUgNS42IDI3LjUgMCA2My41LTE5LjYgOTkuOS01My42IDM2LjQgMzMuOCA3Mi40IDUzLjIgOTkuOSA1My4yIDguNCAwIDE2LTEuOCAyMi42LTUuNiAyOC4xLTE2LjIgMzQuNC02Ni43IDE5LjktMTMwLjEgNjItMTkuMSAxMDIuNS00OS45IDEwMi41LTgyLjN6bS0xMzAuMi02Ni43Yy0zLjcgMTIuOS04LjMgMjYuMi0xMy41IDM5LjUtNC4xLTgtOC40LTE2LTEzLjEtMjQtNC42LTgtOS41LTE1LjgtMTQuNC0yMy40IDE0LjIgMi4xIDI3LjkgNC43IDQxIDcuOXptLTQ1LjggMTA2LjVjLTcuOCAxMy41LTE1LjggMjYuMy0yNC4xIDM4LjItMTQuOSAxLjMtMzAgMi00NS4yIDItMTUuMSAwLTMwLjItLjctNDUtMS45LTguMy0xMS45LTE2LjQtMjQuNi0yNC4yLTM4LTcuNi0xMy4xLTE0LjUtMjYuNC0yMC44LTM5LjggNi4yLTEzLjQgMTMuMi0yNi44IDIwLjctMzkuOSA3LjgtMTMuNSAxNS44LTI2LjMgMjQuMS0zOC4yIDE0LjktMS4zIDMwLTIgNDUuMi0yIDE1LjEgMCAzMC4yLjcgNDUgMS45IDguMyAxMS45IDE2LjQgMjQuNiAyNC4yIDM4IDcuNiAxMy4xIDE0LjUgMjYuNCAyMC44IDM5LjgtNi4zIDEzLjQtMTMuMiAyNi44LTIwLjcgMzkuOXptMzIuMy0xM2M1LjQgMTMuNCAxMCAyNi44IDEzLjggMzkuOC0xMy4xIDMuMi0yNi45IDUuOS00MS4yIDggNC45LTcuNyA5LjgtMTUuNiAxNC40LTIzLjcgNC42LTggOC45LTE2LjEgMTMtMjQuMXpNNDIxLjIgNDMwYy05LjMtOS42LTE4LjYtMjAuMy0yNy44LTMyIDkgLjQgMTguMi43IDI3LjUuNyA5LjQgMCAxOC43LS4yIDI3LjgtLjctOSAxMS43LTE4LjMgMjIuNC0yNy41IDMyem0tNzQuNC01OC45Yy0xNC4yLTIuMS0yNy45LTQuNy00MS03LjkgMy43LTEyLjkgOC4zLTI2LjIgMTMuNS0zOS41IDQuMSA4IDguNCAxNiAxMy4xIDI0IDQuNyA4IDkuNSAxNS44IDE0LjQgMjMuNHpNNDIwLjcgMTYzYzkuMyA5LjYgMTguNiAyMC4zIDI3LjggMzItOS0uNC0xOC4yLS43LTI3LjUtLjctOS40IDAtMTguNy4yLTI3LjguNyA5LTExLjcgMTguMy0yMi40IDI3LjUtMzJ6bS03NCA1OC45Yy00LjkgNy43LTkuOCAxNS42LTE0LjQgMjMuNy00LjYgOC04LjkgMTYtMTMgMjQtNS40LTEzLjQtMTAtMjYuOC0xMy44LTM5LjggMTMuMS0zLjEgMjYuOS01LjggNDEuMi03Ljl6bS05MC41IDEyNS4yYy0zNS40LTE1LjEtNTguMy0zNC45LTU4LjMtNTAuNiAwLTE1LjcgMjIuOS0zNS42IDU4LjMtNTAuNiA4LjYtMy43IDE4LTcgMjcuNy0xMC4xIDUuNyAxOS42IDEzLjIgNDAgMjIuNSA2MC45LTkuMiAyMC44LTE2LjYgNDEuMS0yMi4yIDYwLjYtOS45LTMuMS0xOS4zLTYuNS0yOC0xMC4yek0zMTAgNDkwYy0xMy42LTcuOC0xOS41LTM3LjUtMTQuOS03NS43IDEuMS05LjQgMi45LTE5LjMgNS4xLTI5LjQgMTkuNiA0LjggNDEgOC41IDYzLjUgMTAuOSAxMy41IDE4LjUgMjcuNSAzNS4zIDQxLjYgNTAtMzIuNiAzMC4zLTYzLjIgNDYuOS04NCA0Ni45LTQuNS0uMS04LjMtMS0xMS4zLTIuN3ptMjM3LjItNzYuMmM0LjcgMzguMi0xLjEgNjcuOS0xNC42IDc1LjgtMyAxLjgtNi45IDIuNi0xMS41IDIuNi0yMC43IDAtNTEuNC0xNi41LTg0LTQ2LjYgMTQtMTQuNyAyOC0zMS40IDQxLjMtNDkuOSAyMi42LTIuNCA0NC02LjEgNjMuNi0xMSAyLjMgMTAuMSA0LjEgMTkuOCA1LjIgMjkuMXptMzguNS02Ni43Yy04LjYgMy43LTE4IDctMjcuNyAxMC4xLTUuNy0xOS42LTEzLjItNDAtMjIuNS02MC45IDkuMi0yMC44IDE2LjYtNDEuMSAyMi4yLTYwLjYgOS45IDMuMSAxOS4zIDYuNSAyOC4xIDEwLjIgMzUuNCAxNS4xIDU4LjMgMzQuOSA1OC4zIDUwLjYtLjEgMTUuNy0yMyAzNS42LTU4LjQgNTAuNnpNMzIwLjggNzguNHoiLz48Y2lyY2xlIGN4PSI0MjAuOSIgY3k9IjI5Ni41IiByPSI0NS43Ii8+PHBhdGggZD0iTTUyMC41IDc4LjF6Ii8+PC9nPjwvc3ZnPg==";

  // src/App.tsx
  function App() {
    return /* @__PURE__ */ import_react.default.createElement("div", {
      className: "App"
    }, /* @__PURE__ */ import_react.default.createElement("header", {
      className: "App-header"
    }, /* @__PURE__ */ import_react.default.createElement("img", {
      src: logo_default,
      className: "App-logo",
      alt: "logo"
    }), /* @__PURE__ */ import_react.default.createElement("p", null, "Edit ", /* @__PURE__ */ import_react.default.createElement("code", null, "src/App.tsx"), " and save to reload."), /* @__PURE__ */ import_react.default.createElement("p", null, "Develop with LinbuduLab"), /* @__PURE__ */ import_react.default.createElement("a", {
      className: "App-link",
      href: "https://reactjs.org",
      target: "_blank",
      rel: "noopener noreferrer"
    }, "Learn React")));
  }
  var App_default = App;

  // src/reportWebVitals.ts
  var reportWebVitals = (onPerfEntry) => {
    if (onPerfEntry && onPerfEntry instanceof Function) {
      Promise.resolve().then(() => (init_web_vitals(), web_vitals_exports)).then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
        getCLS(onPerfEntry);
        getFID(onPerfEntry);
        getFCP(onPerfEntry);
        getLCP(onPerfEntry);
        getTTFB(onPerfEntry);
      });
    }
  };
  var reportWebVitals_default = reportWebVitals;

  // src/index.tsx
  import_react_dom.default.render(/* @__PURE__ */ import_react2.default.createElement(import_react2.default.StrictMode, null, /* @__PURE__ */ import_react2.default.createElement(App_default, null)), document.getElementById("root"));
  reportWebVitals_default();
})();
