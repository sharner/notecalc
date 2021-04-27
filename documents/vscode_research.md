# 1. Research VS Code Plugins

This document research different different VS Code extensions that are relevant to what we're doing. Based on this research, it seems we could build on Monoco, if we can run it inside Webkit on iOS and Android. 

# 2. Table of Contents

- [1. Research VS Code Plugins](#1-research-vs-code-plugins)
- [2. Table of Contents](#2-table-of-contents)
- [3. Monoco](#3-monoco)
- [4. Standard Lib and Assembly Script](#4-standard-lib-and-assembly-script)
- [5. Extensions for Markdown](#5-extensions-for-markdown)
  - [5.1. Markdown All in One](#51-markdown-all-in-one)
  - [5.2. Markdown+Math](#52-markdownmath)
- [6. Rendering and Doing Math](#6-rendering-and-doing-math)
- [R and R Markdown Plugins](#r-and-r-markdown-plugins)
  - [RMarkdown-VS Code](#rmarkdown-vs-code)
- [Wathon](#wathon)
- [DuckDB](#duckdb)

# 3. Monoco

[Monoco](https://microsoft.github.io/monaco-editor/) is the open source editor based on VS Code. However, it is not supported in mobile apps or browsers. Could it be? This is unclear. In any case, we should use it on the desktop to support Mac, Windows, and Linux. However, there are potentially other markdown renders that could work on iOS and Android, some of which could run in webkit.

# 4. Standard Lib and Assembly Script

[stdlib-js](https://github.com/stdlib-js/stdlib) brings a whole host of functional computational methods from Boost and BLAS to Javascript. This would support on device computations and scripting. It should run fine in mobile browsers or components that run Javascript.

[Ismaël](https://twitter.com/ghalimi) from [Stoic](https://stoic.com/) is porting things from stdlib-js  from Typescript to [AssemblyScript](https://twitter.com/ghalimi/status/1371090200890241024?s=20). This brings very fast runtimes to these methods.

AssemblyScript can be embedding in other languages. Ismaël recommends [Wasmtime](https://wasmtime.dev/). Can it run on iOS? Dunno but [Wasm3](https://github.com/wasm3/wasm3) does.

# 5. Extensions for Markdown

## 5.1. Markdown All in One

[Markdown All in One](https://github.com/yzhang-gh/vscode-markdown) has over 2.3M downloads and 5 stars. It has support for checklists, github-style markdown, autocompetions and more. It also creates the table of contents below for this document. It has keyboard shortcuts for making things **bold** or *italic*, etc.  It supports list editing

1. List editing
   1. Another list
   2. A list
2. Another list

Checkbox Items

- [ ] todo item
- [x] todo item

And it supports math with $\TeX$ format. For example:

$$
f(x) = \int_{-\infty}^{\infty} \hat f(\xi)\,e^{2 \pi i \xi x}
  \,d\xi
$$

It is based on [CommonMark](https://commonmark.org/). Math support is from [KaTex](https://github.com/KaTeX/KaTeX). I'm using it to create this document, and I'm enjoying it.

## 5.2. Markdown+Math

[Markdown+Math](https://github.com/goessner/mdmath) is a more advanced extension for $\KaTeX$ that can replace the math support in Markdown All in One.

# 6. Rendering and Doing Math

[$\KaTeX$](https://github.com/KaTeX/KaTeX) is very interesting. It is a Javascript implementation of $\TeX$ style typesetting written in Javascript with no dependencies.

# R and R Markdown Plugins

I still need to do an evaluation here.

## RMarkdown-VS Code

[RMarkdown - VSCode](https://github.com/TianyiShi2001/rmarkdown-vscode) has shortcuts for putting codeblocks in Markdown in VS Code and running Knitr. It doesn't support a preview mode, which is pretty essential, but he plans to add it.

# Wathon

Ismaël is also working on a transpiler from typed python to typescript, which could serve as a better interactive language for notebooks.

# DuckDB

Ismaël and Yves are in deep discussions with [DuckDB](https://duckdb.org/docs/sql/introduction), which is an embeddable database for Analytics. It works off Arrow Parquet files and provides columnar OLAP queries.