# 🌊 WealthWave

> **WealthWave** is a modern expense tracker app built with **React**, **Vite**, and **TypeScript**. It helps users manage their finances with features like account tracking, budgeting, transaction management, and rich visual analytics.

![WealthWave Logo](<!-- Update with actual logo path -->)


---

## 🚀 Features

### 🏠 Home Page
- Displays **total balance** with a **burn graph** showing trends.
- Lists **bank accounts and credit cards** with support for multiple accounts.
- **Cash flow insights** with a **pie chart** for income vs. expenses.
- Add and track multiple **budgets** with subcategories and dynamic progress.

### 🗂 Categories
- Add/manage **categories** and **subcategories**.
- View a **pie chart** of spending per subcategory.
- Apply filters: _All Time, This Year, This Month, This Week_.

### 📊 Analytics
- Visualize **current vs. previous month’s spending**.
- Apply **time-based filters** for detailed breakdowns.

### 💸 Transactions
- Add, view, and manage **income, expenses, and transfers**.
- **Filter** transactions by category, date, or type.

### 🎨 Theme Switching
- Toggle **light/dark** themes from the top-right corner.

### 📱 Responsive Design
- Fully optimized for **mobile and desktop**.
- **Bottom navigation bar** for easy access.

---

## 📁 Folder Structure

wealthwave/
├── public/
│   └── assets/
│       ├── images/
│       └── fonts/
├── src/
│   ├── assets/
│   │   ├── icons/
│   │   └── images/
│   ├── components/
│   │   ├── common/
│   │   │   ├── Button.tsx
│   │   │   └── Input.tsx
│   │   ├── charts/
│   │   │   └── PieChart.tsx
│   │   └── layout/
│   │       ├── BottomBar.tsx
│   │       └── ThemeSwitch.tsx
│   ├── features/
│   │   ├── home/
│   │   │   ├── components/
│   │   │   │   └── BalanceOverview.tsx
│   │   │   ├── homeSlice.ts
│   │   │   └── HomePage.tsx
│   │   └── theme/
│   │       ├── themeSlice.ts
│   │       └── ThemeProvider.tsx
│   ├── hooks/
│   │   └── useTheme.ts
│   ├── pages/
│   │   ├── Home.tsx
│   │   ├── Categories.tsx
│   │   ├── Analytics.tsx
│   │   └── Transactions.tsx
│   ├── redux/
│   │   ├── store.ts
│   │   └── rootReducer.ts
│   ├── styles/
│   │   ├── global.css
│   │   └── themes/
│   │       ├── light.css
│   │       └── dark.css
│   ├── utils/
│   │   └── formatCurrency.ts
│   ├── App.tsx
│   ├── main.tsx
│   └── vite-env.d.ts
├── .eslintrc.js
├── .prettierrc
├── tsconfig.json
├── vite.config.ts
├── package.json
└── README.md



---

## 🛠 Technologies Used

### Frontend
- React 18
- TypeScript
- Vite
- Redux Toolkit
- React Router
- Chart.js with react-chartjs-2

### Styling
- CSS Variables for theming
- Modular CSS

### Tools
- ESLint
- Prettier
- Axios (planned for future use)

---

## 📦 Prerequisites

- **Node.js** v16 or higher
- **npm** v8 or higher

---

## 🔧 Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/zccott/wealthwave.git
cd wealthwave
