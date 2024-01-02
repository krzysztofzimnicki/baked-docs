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
      /* @__PURE__ */ jsxDEV2("h1", { children: "Hello world!" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 17,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV2(Outlet, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 18,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ jsxDEV2(Scripts, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 19,
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

// app/utils/componentToString.tsx
import { renderToString } from "react-dom/server";
import { jsxDEV as jsxDEV3 } from "react/jsx-dev-runtime";
function simpleFormatCode(code) {
  let indentLevel = 0, indentSize = 2, formattedCode = "", isInTag = !1;
  for (let i = 0; i < code.length; i++) {
    let char = code[i];
    char === "<" && code[i + 1] !== "/" ? (formattedCode += `
` + " ".repeat(indentLevel * indentSize) + char, indentLevel++, isInTag = !0) : char === ">" && isInTag ? (formattedCode += char, isInTag = !1) : char === "<" && code[i + 1] === "/" ? (indentLevel--, formattedCode += `
` + " ".repeat(indentLevel * indentSize) + char) : formattedCode += char;
  }
  return formattedCode.trim();
}
function ComponentToString(component) {
  let componentString = renderToString(component);
  console.log(componentString);
  let formattedCode = simpleFormatCode(componentString);
  return /* @__PURE__ */ jsxDEV3("code", { className: "language-html", children: formattedCode }, void 0, !1, {
    fileName: "app/utils/componentToString.tsx",
    lineNumber: 43,
    columnNumber: 10
  }, this);
}

// app/utils/syntaxHighlighter.tsx
import Prism from "prismjs";
import { jsxDEV as jsxDEV4 } from "react/jsx-dev-runtime";

// _components/react-button.tsx
import { jsxDEV as jsxDEV5 } from "react/jsx-dev-runtime";
function ReactButton() {
  return /* @__PURE__ */ jsxDEV5("button", { className: "bg-red-500 rounded-xl p-4", children: /* @__PURE__ */ jsxDEV5("p", { children: "Click me!" }, void 0, !1, {
    fileName: "_components/react-button.tsx",
    lineNumber: 7,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "_components/react-button.tsx",
    lineNumber: 6,
    columnNumber: 5
  }, this);
}

// mdx:routes/components/route.mdx
import "prismjs";
import { Fragment, jsxDEV as jsxDEV6 } from "react/jsx-dev-runtime";
function _createMdxContent(props) {
  return /* @__PURE__ */ jsxDEV6(Fragment, { children: [
    /* @__PURE__ */ jsxDEV6(ReactButton, {}, void 0, !1, {
      fileName: "mdx:routes/components/route.mdx",
      lineNumber: 8,
      columnNumber: 12
    }, this),
    `
`,
    /* @__PURE__ */ jsxDEV6("pre", { children: ComponentToString(/* @__PURE__ */ jsxDEV6(ReactButton, {}, void 0, !1, {
      fileName: "mdx:routes/components/route.mdx",
      lineNumber: 8,
      columnNumber: 57
    }, this)) }, void 0, !1, {
      fileName: "mdx:routes/components/route.mdx",
      lineNumber: 8,
      columnNumber: 33
    }, this)
  ] }, void 0, !0, {
    fileName: "mdx:routes/components/route.mdx",
    lineNumber: 8,
    columnNumber: 10
  }, this);
}
function MDXContent(props = {}) {
  let { wrapper: MDXLayout } = props.components || {};
  return MDXLayout ? /* @__PURE__ */ jsxDEV6(MDXLayout, { ...props, children: /* @__PURE__ */ jsxDEV6(_createMdxContent, { ...props }, void 0, !1, {
    fileName: "mdx:routes/components/route.mdx",
    lineNumber: 12,
    columnNumber: 44
  }, this) }, void 0, !1, {
    fileName: "mdx:routes/components/route.mdx",
    lineNumber: 12,
    columnNumber: 22
  }, this) : _createMdxContent(props);
}
var route_default = MDXContent, filename = "route.mdx", headers = typeof attributes < "u" && attributes.headers, meta = typeof attributes < "u" && attributes.meta, handle = typeof attributes < "u" && attributes.handle;

// app/routes/component.tsx
var component_exports = {};
__export(component_exports, {
  default: () => Component
});
import { jsxDEV as jsxDEV7 } from "react/jsx-dev-runtime";
function Component() {
  return /* @__PURE__ */ jsxDEV7("main", { children: /* @__PURE__ */ jsxDEV7("p", { children: "Component" }, void 0, !1, {
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
var assets_manifest_default = { entry: { module: "/build/entry.client-XFCPLNET.js", imports: ["/build/_shared/chunk-ZWGWGGVF.js", "/build/_shared/chunk-4TB67T4M.js", "/build/_shared/chunk-GIAAE3CH.js", "/build/_shared/chunk-XU7DNSPJ.js", "/build/_shared/chunk-N2GCAXRV.js", "/build/_shared/chunk-UWV35TSL.js", "/build/_shared/chunk-BOXFZXVX.js", "/build/_shared/chunk-PNG5AS42.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-BDSOXRQQ.js", imports: void 0, hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/component": { id: "routes/component", parentId: "root", path: "component", index: void 0, caseSensitive: void 0, module: "/build/routes/component-MXG77LB2.js", imports: void 0, hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 }, "routes/components": { id: "routes/components", parentId: "root", path: "components", index: void 0, caseSensitive: void 0, module: "/build/routes/components-NBUF32BU.js", imports: void 0, hasAction: !1, hasLoader: !1, hasClientAction: !1, hasClientLoader: !1, hasErrorBoundary: !1 } }, version: "baf07c6f", hmr: { runtime: "/build/_shared/chunk-N2GCAXRV.js", timestamp: 1704195214893 }, url: "/build/manifest-BAF07C6F.js" };

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
