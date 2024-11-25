# Cool Cpp Online

To non-Chinese speakers: This is a complete C/C++ editor running on your browser, based on Deno+Fresh+Monaco. `tree-sitter`, language servers, tiny compilers and debuggers are available within the browser. I18n works may start in the future.

一款在浏览器中运行的 C/C++ 编辑器，基于 Deno+Fresh+Monaco。支持 `tree-sitter` 语法解析，内置语言服务器支持，内置基于 WebAssembly 的 gcc（还有 gdb！）。所有功能完全不依赖后端服务器或本地计算机。

## 如何运行

依赖：

* Deno 2+。
* 没了。

获取仓库，然后运行：

```
deno task start
```

就 OK 了。接下来启动浏览器，运行 <http://localhost:8000>。

## 已知问题

### 不兼容 `window` 对象

Deno [从 2.0 开始不允许使用 `global` 全局对象](https://github.com/denoland/deno/issues/13367)，因为前端框架在服务端渲染阶段操作 `window` 对象时会出现问题。Deno 要求改用 `globalThis` 对象，但是 Monaco 编辑器没有这样做。

### 不支持响应式布局

切换窗口以后本 Fresh 项目不能根据新的窗口大小自动调整布局，必须重新加载。