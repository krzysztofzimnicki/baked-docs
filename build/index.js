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
  default: () => App
});
import { Links, Meta, Outlet, Scripts } from "@remix-run/react";
import { jsxDEV as jsxDEV2 } from "react/jsx-dev-runtime";
function App() {
  return /* @__PURE__ */ jsxDEV2("html", { children: [
    /* @__PURE__ */ jsxDEV2("head", { children: [
      /* @__PURE__ */ jsxDEV2(Meta, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 7,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV2(Links, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 8,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 6,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ jsxDEV2("body", { children: [
      /* @__PURE__ */ jsxDEV2("h1", { children: "Hello world!" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 11,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV2(Outlet, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 12,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV2(Scripts, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 13,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 10,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.tsx",
    lineNumber: 5,
    columnNumber: 5
  }, this);
}

// app/routes/component.tsx
var component_exports = {};
__export(component_exports, {
  default: () => Component
});
import { jsxDEV as jsxDEV3 } from "react/jsx-dev-runtime";
function Component() {
  return /* @__PURE__ */ jsxDEV3("main", { children: /* @__PURE__ */ jsxDEV3("p", { children: "Component" }, void 0, !1, {
    fileName: "app/routes/component.tsx",
    lineNumber: 4,
    columnNumber: 9
  }, this) }, void 0, !1, {
    fileName: "app/routes/component.tsx",
    lineNumber: 3,
    columnNumber: 5
  }, this);
}

// mdx:routes/button.mdx
var button_exports = {};
__export(button_exports, {
  default: () => button_default,
  filename: () => filename,
  handle: () => handle,
  headers: () => headers,
  meta: () => meta
});

// app/utils/componentToString.tsx
import { renderToString } from "react-dom/server";
import { jsxDEV as jsxDEV4 } from "react/jsx-dev-runtime";
function ComponentToString(component) {
  let componentString = renderToString(component);
  return console.log(componentString), /* @__PURE__ */ jsxDEV4("pre", { children: componentString }, void 0, !1, {
    fileName: "app/utils/componentToString.tsx",
    lineNumber: 9,
    columnNumber: 10
  }, this);
}

// mdx:routes/button.mdx
import { Fragment, jsxDEV as jsxDEV5 } from "react/jsx-dev-runtime";
function _createMdxContent(props) {
  let _components = Object.assign({
    h1: "h1",
    pre: "pre",
    code: "code",
    div: "div"
  }, props.components);
  return /* @__PURE__ */ jsxDEV5(Fragment, { children: [
    /* @__PURE__ */ jsxDEV5(_components.h1, { children: "Hello MDX!" }, void 0, !1, {
      fileName: "mdx:routes/button.mdx",
      lineNumber: 11,
      columnNumber: 12
    }, this),
    `
`,
    /* @__PURE__ */ jsxDEV5(_components.pre, { children: /* @__PURE__ */ jsxDEV5(_components.code, { className: "language-js", children: `console.log(1)
` }, void 0, !1, {
      fileName: "mdx:routes/button.mdx",
      lineNumber: 11,
      columnNumber: 82
    }, this) }, void 0, !1, {
      fileName: "mdx:routes/button.mdx",
      lineNumber: 11,
      columnNumber: 65
    }, this),
    `
`,
    /* @__PURE__ */ jsxDEV5("pre", { children: ComponentToString(/* @__PURE__ */ jsxDEV5(_components.div, {}, void 0, !1, {
      fileName: "mdx:routes/button.mdx",
      lineNumber: 11,
      columnNumber: 211
    }, this)) }, void 0, !1, {
      fileName: "mdx:routes/button.mdx",
      lineNumber: 11,
      columnNumber: 187
    }, this)
  ] }, void 0, !0, {
    fileName: "mdx:routes/button.mdx",
    lineNumber: 11,
    columnNumber: 10
  }, this);
}
function MDXContent(props = {}) {
  let { wrapper: MDXLayout } = props.components || {};
  return MDXLayout ? /* @__PURE__ */ jsxDEV5(MDXLayout, { ...props, children: /* @__PURE__ */ jsxDEV5(_createMdxContent, { ...props }, void 0, !1, {
    fileName: "mdx:routes/button.mdx",
    lineNumber: 15,
    columnNumber: 44
  }, this) }, void 0, !1, {
    fileName: "mdx:routes/button.mdx",
    lineNumber: 15,
    columnNumber: 22
  }, this) : _createMdxContent(props);
}
var button_default = MDXContent, filename = "button.mdx", headers = typeof attributes < "u" && attributes.headers, meta = typeof attributes < "u" && attributes.meta, handle = typeof attributes < "u" && attributes.handle;

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { entry: { module: "/build/entry.client-5MH5CVPY.js", imports: ["/build/_shared/chunk-ZWGWGGVF.js", "/build/_shared/chunk-NYO3GUPC.js", "/build/_shared/chunk-GIAAE3CH.js", "/build/_shared/chunk-XU7DNSPJ.js", "/build/_shared/chunk-BX4DQHXW.js", "/build/_shared/chunk-UWV35TSL.js", "/build/_shared/chunk-BOXFZXVX.js", "/build/_shared/chunk-PNG5AS42.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-MFQXYO3J.js", imports: void 0, hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/button": { id: "routes/button", parentId: "root", path: "button", index: void 0, caseSensitive: void 0, module: "/build/routes/button-WXRNWKND.js", imports: void 0, hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/component": { id: "routes/component", parentId: "root", path: "component", index: void 0, caseSensitive: void 0, module: "/build/routes/component-LSXLKKCW.js", imports: void 0, hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 } }, version: "4529af5b", hmr: { runtime: "/build/_shared/chunk-BX4DQHXW.js", timestamp: 1703187453891 }, url: "/build/manifest-4529AF5B.js" };

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
  "routes/component": {
    id: "routes/component",
    parentId: "root",
    path: "component",
    index: void 0,
    caseSensitive: void 0,
    module: component_exports
  },
  "routes/button": {
    id: "routes/button",
    parentId: "root",
    path: "button",
    index: void 0,
    caseSensitive: void 0,
    module: button_exports
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
