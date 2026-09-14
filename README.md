# CANKANO

客製化商品電商平台專題，讓使用者自由設計商品，並將設計保存、分享與重新匯入。

## 專題簡介

本專題旨在開發一個類真實商業網站的客製化商品電商平台，始於某遊戲的人物卡啟發。

使用者可以在 Design Editor 中自由建立與編輯商品設計，並透過設計卡（Design Card）將完整設計保存成可攜帶、可分享及可重新匯入的檔案。

目前預計以帆布袋與 T-shirt 作為主要客製化商品，實際商品種類將依開發進度調整。

## 操作說明
- 左鍵點選 物件選取
- 左鍵拖曳 調整物件位置
- 滾輪 調整物件大小
- Shift+滾輪 調整物件角度
- Ctrl+D 複製當前物件
- Delete或Backspace 刪除物件
- 支持拖曳圖片匯入功能

## 核心功能

### Design Editor

提供使用者建立與編輯商品設計的功能：

- 新增文字
- 上傳圖片
- 移動設計元素
- 調整大小
- 旋轉元素
- 複製與刪除元素
- 圖層順序管理
- 文字顏色、大小與對齊
- Undo / Redo
- 清空目前設計

### Design Card

本專題的主要特色之一。

使用者完成設計後，可以將設計匯出為專屬 PNG 檔案。

PNG 中除了圖片資料外，也會儲存自訂 Metadata，讓設計檔案能夠攜帶原始 Design 資訊。

因此使用者可以：

1. 建立商品設計
2. 匯出 Design Card
3. 將 Design Card 分享給其他使用者
4. 重新匯入 Design Card
5. 還原原始設計並繼續編輯

### 商品客製化

目前預計支援：

- 帆布袋
- T-shirt

商品種類將依實際開發進度進行調整。

## 專案架構

目前 Design Editor 採用物件導向的模組化架構，將不同功能拆分至獨立模組，以降低模組之間的耦合，並提高後續維護與擴充的彈性。

<details>
<summary>點擊查看frontend專案架構</summary>

```text
frontend
│
├── Layout                       ← 網站骨架
│
├── components/                  ← 共用 UI 元件
│   ├── cart/                    ← 購物車
│   ├── common/                  ← 全站共用
│   │   ├── Footer.css
│   │   ├── Footer.jsx
│   │   ├── Header.css
│   │   └── Header.jsx
│   │
│   ├── product/                 ← 商品
│   └── user/                    ← 會員
│
├── pages/                       ← 各頁面
│   │
│   ├── Abouts/                  ← 關於我們
│   │   ├── AboutBrand.css
│   │   ├── AboutBrand.jsx
│   │   ├── BrandStory.css
│   │   ├── BrandStory.jsx
│   │   ├── ContactUs.css
│   │   ├── ContactUs.jsx
│   │   ├── index.css
│   │   └── index.jsx
│   │
│   ├── Auth/                    ← 登入 / 註冊
│   │   ├── AuthCards.css
│   │   ├── AuthCards.jsx
│   │   ├── Background.css
│   │   ├── Background.jsx
│   │   ├── index.css
│   │   └── index.jsx
│   │
│   ├── Cart/                    ← 購物車
│   │   ├── CartItem.css
│   │   ├── CartItem.jsx
│   │   ├── CartSummary.css
│   │   ├── CartSummary.jsx
│   │   ├── index.css
│   │   └── index.jsx
│   │
│   ├── Contact/                 ← 聯絡我們
│   │   ├── index.css
│   │   └── index.jsx
│   │
│   ├── Design/                  ← 設計 / 客製化
│   │   ├── index.css
│   │   └── index.jsx
│   │
│   ├── Home/                    ← 首頁
│   │   ├── Hero.css
│   │   ├── Hero.jsx
│   │   ├── FeaturedProducts.css
│   │   ├── FeaturedProducts.jsx
│   │   ├── CustomizationProcess.css
│   │   ├── CustomizationProcess.jsx
│   │   ├── index.css
│   │   └── index.jsx
│   │
│   ├── News/                    ← 最新消息 / 新聞列表
│   │   ├── NewsHeader.css
│   │   ├── NewsHeader.jsx
│   │   ├── NewsFeatured.css
│   │   ├── NewsFeatured.jsx
│   │   ├── NewsFilter.css
│   │   ├── NewsFilter.jsx
│   │   ├── NewsList.css
│   │   ├── NewsList.jsx
│   │   ├── NewsCard.css
│   │   ├── NewsCard.jsx
│   │   ├── index.css
│   │   └── index.jsx
│   │
│   ├── NewsDetail/              ← 最新消息詳細
│   │   ├── NewsDetailHeader.css
│   │   ├── NewsDetailHeader.jsx
│   │   ├── NewsArticle.css
│   │   ├── NewsArticle.jsx
│   │   ├── NewsDetailFooter.css
│   │   ├── NewsDetailFooter.jsx
│   │   ├── index.css
│   │   └── index.jsx
│   │
│   ├── Orders/                  ← 訂單列表 / 訂單查詢
│   │   ├── OrdersHeader.css
│   │   ├── OrdersHeader.jsx
│   │   ├── OrderSummaryLeft.css
│   │   ├── OrderSummaryLeft.jsx
│   │   ├── OrderSummaryRight.css
│   │   ├── OrderSummaryRight.jsx
│   │   ├── OrderDetailLeft.css
│   │   ├── OrderDetailLeft.jsx
│   │   ├── OrderDetailRight.css
│   │   ├── OrderDetailRight.jsx
│   │   ├── index.css
│   │   └── index.jsx
│   │
│   ├── OrderSuccess/            ← 訂單完成
│   │   ├── OrderSuccessContent.css
│   │   ├── OrderSuccessContent.jsx
│   │   ├── index.css
│   │   └── index.jsx
│   │
│   ├── ProductDetail/           ← 商品詳細
│   │   ├── ProductDetailHeader.css
│   │   ├── ProductDetailHeader.jsx
│   │   ├── ProductGallery.css
│   │   ├── ProductGallery.jsx
│   │   ├── ProductInfo.css
│   │   ├── ProductInfo.jsx
│   │   ├── ProductAccordion.css
│   │   ├── ProductAccordion.jsx
│   │   ├── RelatedProducts.css
│   │   ├── RelatedProducts.jsx
│   │   ├── index.css
│   │   └── index.jsx
│   │
│   └── Products/                ← 商品列表
│       ├── ProductsHeader.css
│       ├── ProductsHeader.jsx
│       ├── ProductFilters.css
│       ├── ProductFilters.jsx
│       ├── MainProducts.css
│       ├── MainProducts.jsx
│       ├── CustomProducts.css
│       ├── CustomProducts.jsx
│       ├── ProductCard.css
│       ├── ProductCard.jsx
│       ├── CustomProductCard.css
│       ├── CustomProductCard.jsx
│       ├── index.css
│       └── index.jsx
│
├── layouts/                     ← 網站版型
│
├── hooks/                       ← React 邏輯
│
├── stores/                      ← 全域狀態
│
├── services/                    ← API
│
├── types/                       ← TS 型別
│
├── utils/                       ← 工具函式
│
├── routes/                      ← 路由
│
└── assets/                      ← 靜態資源
```
</details>

## 開發目標

本專題除了實作一般電商網站的商品瀏覽與購買流程外，主要希望建立一套完整的「商品設計 → 儲存 → 分享 → 匯入 → 再編輯」流程。

透過 Design Card，使使用者的設計不只是一次性的商品客製化結果，而能成為可以保存、分享與再次使用的設計資料。

## Project Status

🚧 **開發中**

本專案目前仍處於開發階段，功能與架構可能持續調整。
