import { Player } from "https://esm.sh/textalive-app-api@latest";

// ここにあなたのアプリトークンを入れる
const APP_TOKEN = "YOUR_APP_TOKEN";

const logEl = document.getElementById("log");
const log = (...args) => { logEl.textContent += "\n" + args.join(" "); };

// Playerを作成
const player = new Player({
  app: { token: APP_TOKEN }
});

// イベントを購読
player.addListener({
  onAppReady: () => {
    log("App Ready");
    if (!player.video) {
      player.createFromSongUrl("https://www.youtube.com/watch?v=QjoJRBWwYLM");
    }
  },
  onVideoReady: (v) => log("Video Ready: " + v.duration),
  onPlay: () => log("Play"),
  onPause: () => log("Pause")
});

// ボタン制御
document.getElementById("play").addEventListener("click", () => player.requestPlay());
document.getElementById("pause").addEventListener("click", () => player.requestPause());
