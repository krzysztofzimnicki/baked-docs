var __defProp = Object.defineProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
};

// node_modules/@remix-run/dev/dist/config/defaults/entry.server.node.tsx
var entry_server_node_exports = {};
__export(entry_server_node_exports, {
  default: () => handleRequest
});
import { PassThrough } from "node:stream";
import { createReadableStreamFromReadable } from "@remix-run/node";
import { RemixServer } from "@remix-run/react";
import isbot from "isbot";
import { renderToPipeableStream } from "react-dom/server";
import { jsxDEV } from "react/jsx-dev-runtime";
var ABORT_DELAY = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, remixContext, loadContext) {
  return isbot(request.headers.get("user-agent")) ? handleBotRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  ) : handleBrowserRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  );
}
function handleBotRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = !1, { pipe, abort } = renderToPipeableStream(
      /* @__PURE__ */ jsxDEV(
        RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        },
        void 0,
        !1,
        {
          fileName: "node_modules/@remix-run/dev/dist/config/defaults/entry.server.node.tsx",
          lineNumber: 42,
          columnNumber: 7
        },
        this
      ),
      {
        onAllReady() {
          shellRendered = !0;
          let body = new PassThrough(), stream = createReadableStreamFromReadable(body);
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500, shellRendered && console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}
function handleBrowserRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = !1, { pipe, abort } = renderToPipeableStream(
      /* @__PURE__ */ jsxDEV(
        RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        },
        void 0,
        !1,
        {
          fileName: "node_modules/@remix-run/dev/dist/config/defaults/entry.server.node.tsx",
          lineNumber: 92,
          columnNumber: 7
        },
        this
      ),
      {
        onShellReady() {
          shellRendered = !0;
          let body = new PassThrough(), stream = createReadableStreamFromReadable(body);
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500, shellRendered && console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}

// app/root.tsx
var root_exports = {};
__export(root_exports, {
  default: () => App,
  links: () => links
});
import { Links, Meta, Outlet, Scripts } from "@remix-run/react";

// app/styles/tailwind.css
var tailwind_default = "/build/_assets/tailwind-HBYR4COC.css";

// app/root.tsx
import { jsxDEV as jsxDEV2 } from "react/jsx-dev-runtime";
var links = () => [
  { rel: "stylesheet", href: tailwind_default }
];
function App() {
  return /* @__PURE__ */ jsxDEV2("html", { children: [
    /* @__PURE__ */ jsxDEV2("head", { children: [
      /* @__PURE__ */ jsxDEV2(Meta, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 13,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV2(Links, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 14,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 12,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV2("body", { children: [
      /* @__PURE__ */ jsxDEV2(Outlet, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 17,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV2(Scripts, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 18,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 16,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.tsx",
    lineNumber: 11,
    columnNumber: 5
  }, this);
}

// mdx:routes/components/route.mdx
var route_exports = {};
__export(route_exports, {
  default: () => route_default,
  filename: () => filename,
  handle: () => handle,
  headers: () => headers,
  meta: () => meta
});

// app/components/CodePreview.tsx
import { useState } from "react";

// app/utils/ReactToString.ts
var ReactToString = (ReactComponent) => {
  let propsToString = (props) => Object.entries(props).map(([key, value]) => {
    let valueStr = typeof value == "string" ? `"${value}"` : `{${JSON.stringify(value)}}`;
    return `${key}=${valueStr}`;
  }).join(" "), componentName = ReactComponent.displayName || ReactComponent.name || "Component", componentPropsString = propsToString(ReactComponent.defaultProps || {});
  return `<${componentName} ${componentPropsString} />`;
};

// app/utils/ReactToHTML.tsx
import { renderToString } from "react-dom/server";
var ReactToHTML = (ReactComponent) => renderToString(ReactComponent());

// app/components/CodePreview.tsx
import { jsxDEV as jsxDEV3 } from "react/jsx-dev-runtime";
var CodePreview = ({ component }) => {
  let [isHTMLPreview, setIsHTMLPreview] = useState(!1), ReactPreview = ReactToString(component), HTMLPreview = ReactToHTML(component);
  return /* @__PURE__ */ jsxDEV3("div", { children: [
    /* @__PURE__ */ jsxDEV3("button", { onClick: () => setIsHTMLPreview(!isHTMLPreview), children: "Toogle Preview" }, void 0, !1, {
      fileName: "app/components/CodePreview.tsx",
      lineNumber: 21,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV3("div", { children: isHTMLPreview ? /* @__PURE__ */ jsxDEV3("div", { children: /* @__PURE__ */ jsxDEV3("code", { children: HTMLPreview }, void 0, !1, {
      fileName: "app/components/CodePreview.tsx",
      lineNumber: 24,
      columnNumber: 16
    }, this) }, void 0, !1, {
      fileName: "app/components/CodePreview.tsx",
      lineNumber: 24,
      columnNumber: 11
    }, this) : /* @__PURE__ */ jsxDEV3("div", { children: /* @__PURE__ */ jsxDEV3("code", { children: ReactPreview }, void 0, !1, {
      fileName: "app/components/CodePreview.tsx",
      lineNumber: 26,
      columnNumber: 16
    }, this) }, void 0, !1, {
      fileName: "app/components/CodePreview.tsx",
      lineNumber: 26,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/components/CodePreview.tsx",
      lineNumber: 22,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/CodePreview.tsx",
    lineNumber: 20,
    columnNumber: 5
  }, this);
};

// _components/react-button.tsx
import { jsxDEV as jsxDEV4 } from "react/jsx-dev-runtime";
ReactButton.defaultProps = {
  props: "Test Prop"
};
function ReactButton(props) {
  return /* @__PURE__ */ jsxDEV4("button", { className: "bg-red-500 rounded-xl p-4", onClick: props, children: /* @__PURE__ */ jsxDEV4("p", { children: "Click me!" }, void 0, !1, {
    fileName: "_components/react-button.tsx",
    lineNumber: 11,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "_components/react-button.tsx",
    lineNumber: 10,
    columnNumber: 5
  }, this);
}

// mdx:routes/components/route.mdx
import { Fragment, jsxDEV as jsxDEV5 } from "react/jsx-dev-runtime";
function _createMdxContent(props) {
  return /* @__PURE__ */ jsxDEV5(Fragment, { children: [
    /* @__PURE__ */ jsxDEV5(ReactButton, {}, void 0, !1, {
      fileName: "mdx:routes/components/route.mdx",
      lineNumber: 6,
      columnNumber: 12
    }, this),
    `
`,
    /* @__PURE__ */ jsxDEV5(CodePreview, { component: ReactButton }, void 0, !1, {
      fileName: "mdx:routes/components/route.mdx",
      lineNumber: 6,
      columnNumber: 33
    }, this)
  ] }, void 0, !0, {
    fileName: "mdx:routes/components/route.mdx",
    lineNumber: 6,
    columnNumber: 10
  }, this);
}
function MDXContent(props = {}) {
  let { wrapper: MDXLayout } = props.components || {};
  return MDXLayout ? /* @__PURE__ */ jsxDEV5(MDXLayout, { ...props, children: /* @__PURE__ */ jsxDEV5(_createMdxContent, { ...props }, void 0, !1, {
    fileName: "mdx:routes/components/route.mdx",
    lineNumber: 10,
    columnNumber: 44
  }, this) }, void 0, !1, {
    fileName: "mdx:routes/components/route.mdx",
    lineNumber: 10,
    columnNumber: 22
  }, this) : _createMdxContent(props);
}
var route_default = MDXContent, filename = "route.mdx", headers = typeof attributes < "u" && attributes.headers, meta = typeof attributes < "u" && attributes.meta, handle = typeof attributes < "u" && attributes.handle;

// app/routes/component.tsx
var component_exports = {};
__export(component_exports, {
  default: () => Component
});
import { jsxDEV as jsxDEV6 } from "react/jsx-dev-runtime";
function Component() {
  return /* @__PURE__ */ jsxDEV6("main", { children: /* @__PURE__ */ jsxDEV6("p", { children: "Component" }, void 0, !1, {
    fileName: "app/routes/component.tsx",
    lineNumber: 4,
    columnNumber: 9
  }, this) }, void 0, !1, {
    fileName: "app/routes/component.tsx",
    lineNumber: 3,
    columnNumber: 5
  }, this);
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { entry: { module: "/build/entry.client-XFCPLNET.js", imports: ["/build/_shared/chunk-ZWGWGGVF.js", "/build/_shared/chunk-4TB67T4M.js", "/build/_shared/chunk-GIAAE3CH.js", "/build/_shared/chunk-XU7DNSPJ.js", "/build/_shared/chunk-N2GCAXRV.js", "/build/_shared/chunk-UWV35TSL.js", "/build/_shared/chunk-BOXFZXVX.js", "/build/_shared/chunk-PNG5AS42.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-TFOELRCJ.js", imports: void 0, hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/component": { id: "routes/component", parentId: "root", path: "component", index: void 0, caseSensitive: void 0, module: "/build/routes/component-MXG77LB2.js", imports: void 0, hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/components": { id: "routes/components", parentId: "root", path: "components", index: void 0, caseSensitive: void 0, module: "/build/routes/components-ICM62OG2.js", imports: void 0, hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 } }, version: "6d1e08ce", hmr: { runtime: "/build/_shared/chunk-N2GCAXRV.js", timestamp: 1704201277553 }, url: "/build/manifest-6D1E08CE.js" };

// server-entry-module:@remix-run/dev/server-build
var mode = "development", assetsBuildDirectory = "public/build", future = { v3_fetcherPersist: !1, v3_relativeSplatPath: !1 }, publicPath = "/build/", entry = { module: entry_server_node_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/components": {
    id: "routes/components",
    parentId: "root",
    path: "components",
    index: void 0,
    caseSensitive: void 0,
    module: route_exports
  },
  "routes/component": {
    id: "routes/component",
    parentId: "root",
    path: "component",
    index: void 0,
    caseSensitive: void 0,
    module: component_exports
  }
};
export {
  assets_manifest_default as assets,
  assetsBuildDirectory,
  entry,
  future,
  mode,
  publicPath,
  routes
};
//# sourceMappingURL=index.js.map
