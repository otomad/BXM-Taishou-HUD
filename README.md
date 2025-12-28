<div>
  <h3 align="center">BXM Taishou HUD</h3>

  <p align="center">
    一个简易的直播间抬头显示与播放器
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
1. 准备好文字内容放在 `src/phrases.json` 中，请注意按照格式。
2. 准备好视频内容放在 `src/public/videos`中，文件名格式保持 `标题 [注释].mp4` ，例如 `【合作】蔚蓝档案学园祭　～嘹亮 基沃托斯三銃奏～【蔚蓝档案三周年】 [BV1tK421k7nL].mp4`。
3. 如需字幕，将字幕文件与视频一起放置在视频文件夹中，目前只支持 vtt 格式，文件名除后缀为 vtt 外保持与视频文件一致即可。从哔哩哔哩下载 vtt 字幕可以使用 [Bilibili CC字幕工具](https://greasyfork.org/zh-CN/scripts/378513-bilibili-cc%E5%AD%97%E5%B9%95%E5%B7%A5%E5%85%B7)。
4. 打开浏览器，进入 http://localhost:2333/control 即可进行控制。
5. 将 http://localhost:2333/obs 放入 OBS 的浏览器源中。

