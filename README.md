<div>
  <h3 align="center">BXM Taishou HUD</h3>

  <p align="center">
    一个简易的直播间抬头显示
    <br />
    <a href="https://github.com/otomad/BXM-Taishou-HUD/issues">汇报 BUG</a>
    ·
    <a href="https://github.com/otomad/BXM-Taishou-HUD/issues">功能请求</a>
  </p>
</div>

## 关于项目

这个项目是为 **BILIBILI 音 MAD 作者选** 量身定制的，提供了通过两个页面发送和显示信息的功能，输出页用于放入 OBS 中。

### 使用技术

- HTML
- CSS
- JavaScript
- WebSocket

## 开始

使用 NPM 作为包管理器。

### 安装依赖

```sh
npm install
```

### 运行

```sh
npm run dev
```

### 使用
1. 打开浏览器，进入 http://localhost:2333/control 即可进行控制。
2. 将 http://localhost:2333/obs 放入 OBS 的浏览器源中。

## 自定义

内容在 `src/phrases.json` 中，请注意按照格式。
