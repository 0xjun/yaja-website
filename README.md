# YAJA Inc. — 公式コーポレートサイト

> **대한민국 No.1 숏폼 드라마 스튜디오**
> https://yajacamp.com (deployment pending)

## 構成 (Tech Stack)

| Layer | Tech |
|---|---|
| フレームワーク | [Astro 6](https://astro.build) — 静的サイト生成 |
| UI ライブラリ | React 19（インタラクティブな部品のみ） |
| スタイル | Tailwind CSS v4 |
| ホスティング | Vercel（CDN 配信、無料枠） |
| ドメイン | yajacamp.com（GABIA 管理） |

## デザインシステム

`reference/DESIGN.md` に完全準拠。

- カラー: `#1E1E1E` ベース / `#FFFFFF` テキスト / `#FF4848` (YAJA Red) アクセント
- フォント: Nohemi (英・数字) / Pretendard (韓国語)
- スタイル: フラット・シネマティック・大余白

## 開発手順

```sh
cd /Users/yoojunkang/Documents/YAJA/yaja-website
npm install      # 初回のみ
npm run dev      # http://localhost:4321
npm run build    # 本番ビルド (./dist 出力)
npm run preview  # 本番ビルドのプレビュー
```

## ファイル構成

```
src/
├── layouts/Layout.astro       共通レイアウト・<head> 設定
├── pages/index.astro          トップページ
├── lib/
│   ├── site.ts                ★ 全コンテンツ・数字の単一管理ファイル
│   └── utils.ts               ヘルパー関数
├── components/
│   ├── Header.astro           固定ナビゲーション
│   ├── Footer.astro
│   ├── CountUp.tsx            数字カウントアップ（React 島）
│   └── sections/              ホームページ各セクション
│       ├── Hero.astro
│       ├── Stats.astro
│       ├── Accounts.astro
│       ├── Services.astro
│       ├── Works.astro
│       ├── Clients.astro
│       ├── Founders.astro
│       └── Contact.astro
└── styles/global.css          Tailwind v4 テーマ + フォント定義

public/
├── fonts/                     Nohemi (woff) / Pretendard (otf)
└── logos/                     YAJA ロゴ各種
```

## 更新フロー

数字や文章を変更したいとき → **`src/lib/site.ts` を編集**するだけ。
全セクションが自動で再描画されます。

例: 累計再生数を 19억 → 25억 に変える
```ts
{ label: "누적 조회수", value: "25억", numeric: 25, unit: "억" },
```

## 公開（デプロイ）

GitHub に push すると Vercel が自動でビルド・公開します。
本番反映までの目安: **30 秒〜2 分**。

## デザイン参考

- [oasiz.org](https://oasiz.org) — 数値 KPI の見せ方
- [gokkoclub.jp](https://gokkoclub.jp) — 詩的ヘッドコピー
- [playliststudio.kr](http://playliststudio.kr) — ブランドハブ構造

## ライセンス

(c) YAJA Inc. — All rights reserved.
