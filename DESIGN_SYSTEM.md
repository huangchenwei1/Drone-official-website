# 无人机企业网站设计系统指南

## 🎯 设计系统概述

这是一个基于 **Trimble网站** 风格的极简主义设计系统，确保您在开发后续页面时能保持完美的设计一致性。

---

## 🎨 品牌色彩系统

### 主色调
```css
'brand': '#028985'           /* 深青绿色 - 仅用于关键元素 */
'brand-light': '#0ABAB5'     /* 浅青绿色 - 辅助色 */
```

### 中性色系统
```css
'neutral-50': '#fafafa'      /* 最浅背景 */
'neutral-100': '#f5f5f5'     /* 浅灰背景 */
'neutral-200': '#e5e5e5'     /* 边框色 */
'neutral-300': '#d4d4d4'     /* 分割线 */
'neutral-400': '#a3a3a3'     /* 占位符文字 */
'neutral-500': '#737373'     /* 次要文字 */
'neutral-600': '#525252'     /* 正文文字 */
'neutral-700': '#404040'     /* 标题文字 */
'neutral-800': '#262626'     /* 主标题 */
'neutral-900': '#171717'     /* 最深文字/背景 */
```

### ⚠️ 色彩使用原则
- **品牌色克制使用**：仅用于关键交互元素（按钮、强调文字）
- **主体设计黑白灰**：营造专业、高端的企业感
- **避免彩色图标**：统一使用黑色图标

---

## 📝 字体系统

### 字体族
```css
font-family: 'Open Sans', system-ui, sans-serif
```

### 字重规范
```css
font-extralight: 200    /* 特殊场景 */
font-light: 300         /* 主要标题 - 符合Trimble风格 */
font-normal: 400        /* 正文内容 */
font-medium: 500        /* 次级标题 */
font-semibold: 600      /* 强调文字 */
font-bold: 700          /* 数据展示 */
font-extrabold: 800     /* 特殊强调 */
```

### 字体层级系统
```html
<!-- 主标题 - 大量使用font-light -->
<h1 class="text-5xl lg:text-7xl font-light">Enterprise AI Platform</h1>

<!-- 二级标题 -->
<h2 class="text-3xl lg:text-4xl font-light">Meet <span class="font-semibold">CBI</span></h2>

<!-- 三级标题 -->
<h3 class="text-xl font-medium">Security Features</h3>

<!-- 正文 -->
<p class="text-lg text-neutral-600 font-light">Leading relaxed paragraph text...</p>

<!-- 导航链接 -->
<a class="font-normal uppercase text-sm tracking-wide">INDUSTRIES</a>
```

---

## 📏 间距与布局系统

### 大间距设计原则
```css
py-28        /* 区块间距 - 7rem (112px) */
py-32        /* 英雄区间距 */
py-40        /* 英雄区大间距 */

mb-20        /* 标题与内容间距 - 5rem (80px) */
mb-12        /* 组件间距 - 3rem (48px) */
mb-8         /* 元素间距 - 2rem (32px) */
gap-12       /* 网格间距 - 3rem (48px) */
gap-20       /* 大网格间距 - 5rem (80px) */
```

### 布局容器
```html
<!-- 标准页面容器 -->
<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <!-- 内容 -->
</div>
```

---

## 🔷 圆角与形状

### 统一圆角值
```css
rounded-trimble: 4px     /* 小圆角 - 所有组件统一使用 */
```

### 应用场景
```html
<!-- 按钮 -->
<button class="rounded-trimble">Contact Us</button>

<!-- 卡片 -->
<div class="border rounded-trimble p-8">...</div>

<!-- 图片 -->
<img class="rounded-trimble">

<!-- 输入框 -->
<input class="rounded-trimble">
```

---

## 🧩 核心组件库

### 1. 导航栏（两行设计）
```html
<header class="bg-white sticky top-0 z-50 navbar-transition">
    <!-- 顶部工具栏 -->
    <div class="bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex justify-between items-center h-12">
                <!-- 语言切换等工具 -->
            </div>
        </div>
    </div>
    
    <!-- 主导航 -->
    <nav class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between items-center h-20">
            <!-- Logo + 导航菜单 + 按钮 -->
        </div>
    </nav>
</header>
```

### 2. 区块标题组件
```html
<div class="text-center mb-20">
    <!-- 小标题（可选） -->
    <p class="text-sm font-medium text-brand uppercase tracking-widest mb-6">
        PLATFORM CAPABILITIES
    </p>
    
    <!-- 主标题 -->
    <div class="flex items-center justify-center mb-8">
        <div class="w-1 h-8 bg-brand mr-4"></div>
        <h2 class="text-3xl lg:text-4xl font-light text-neutral-900">
            Meet <span class="font-semibold">DroneFlow</span>
        </h2>
    </div>
    
    <!-- 副标题 -->
    <p class="text-lg text-neutral-600 max-w-3xl mx-auto font-light">
        Description text goes here...
    </p>
</div>
```

### 3. 按钮组件
```html
<!-- 主要按钮 -->
<button class="bg-brand hover:bg-brand-light text-white px-8 py-4 rounded-trimble font-medium text-lg transition-colors duration-300">
    Get Started - It's Free
</button>

<!-- 次要按钮 -->
<button class="border border-neutral-900 hover:bg-neutral-900 text-neutral-900 hover:text-white px-6 py-3 rounded-trimble font-medium transition-colors text-sm uppercase tracking-wide">
    CONTACT SALES
</button>

<!-- 反色按钮（深色背景用） -->
<button class="bg-white hover:bg-brand text-brand hover:text-white px-10 py-4 rounded-trimble font-medium text-lg transition-colors duration-300">
    Contact Us
</button>
```

### 4. 卡片组件
```html
<!-- 基础卡片 -->
<div class="border border-neutral-200 p-8 rounded-trimble hover-subtle bg-white">
    <!-- 图标 -->
    <div class="w-12 h-12 rounded-trimble flex items-center justify-center mb-6 border border-neutral-200">
        <i class="fas fa-database text-neutral-900 text-xl"></i>
    </div>
    
    <!-- 标题 -->
    <h3 class="text-xl font-medium text-neutral-900 mb-4">Card Title</h3>
    
    <!-- 内容 -->
    <p class="text-neutral-600 mb-4">Card description text...</p>
    
    <!-- 标签 -->
    <div class="flex flex-wrap gap-2">
        <span class="bg-neutral-100 text-neutral-700 px-3 py-1 rounded-full text-sm">Tag</span>
    </div>
</div>
```

### 5. 特色列表组件
```html
<div class="space-y-6">
    <div class="flex items-start">
        <div class="perfect-dot"></div>
        <div>
            <h4 class="font-medium text-neutral-900 mb-2">Feature Title</h4>
            <p class="text-neutral-600">Feature description...</p>
        </div>
    </div>
</div>
```

---

## 🎭 交互动效系统

### 悬停效果
```css
/* 简洁的卡片悬停 - 边框描边 */
.hover-subtle {
    transition: all 0.3s ease;
    border: 1px solid transparent;
}

.hover-subtle:hover {
    border-color: #171717;
}
```

### 滚动动画
```css
/* 左侧滑入 */
.slide-in-left {
    opacity: 0;
    transform: translateX(-30px);
    transition: all 0.6s ease-out;
}

.slide-in-left.visible {
    opacity: 1;
    transform: translateX(0);
}

/* 右侧滑入 */
.slide-in-right {
    opacity: 0;
    transform: translateX(30px);
    transition: all 0.6s ease-out;
}

.slide-in-right.visible {
    opacity: 1;
    transform: translateX(0);
}

/* 交错延迟 */
.stagger-1 { animation-delay: 0.1s; }
.stagger-2 { animation-delay: 0.2s; }
.stagger-3 { animation-delay: 0.3s; }
.stagger-4 { animation-delay: 0.4s; }
```

### 导航栏滚动控制
```css
.navbar-transition {
    transition: transform 0.3s ease-in-out;
}

.navbar-hidden {
    transform: translateY(-100%);
}

.navbar-visible {
    transform: translateY(0);
}
```

---

## 📱 响应式设计规范

### 断点系统
```css
sm: 640px     /* 小平板 */
md: 768px     /* 大平板 */
lg: 1024px    /* 桌面 */
xl: 1280px    /* 大桌面 */
```

### 响应式应用
```html
<!-- 网格布局 -->
<div class="grid md:grid-cols-2 lg:grid-cols-3 gap-12">

<!-- 字体大小 -->
<h1 class="text-4xl lg:text-6xl">

<!-- 间距调整 -->
<section class="py-16 lg:py-28">

<!-- 图片适配 -->
<img class="w-full h-64 lg:h-96 object-cover">
```

---

## 🏗️ 页面布局模板

### 标准页面结构
```html
<!DOCTYPE html>
<html lang="en" class="scroll-smooth">
<head>
    <!-- 标准Meta标签 -->
    <!-- Tailwind + Open Sans + FontAwesome -->
    <!-- Tailwind配置 -->
    <!-- 自定义样式 -->
</head>
<body class="font-sans text-neutral-800 antialiased">
    <!-- 导航栏 -->
    <header>...</header>
    
    <!-- 英雄区 -->
    <section class="bg-hero py-32 lg:py-40">...</section>
    
    <!-- 内容区块（交替背景色） -->
    <section class="bg-white py-28">...</section>
    <section class="bg-neutral-100 py-28">...</section>
    <section class="bg-white py-28">...</section>
    
    <!-- CTA区域 -->
    <section class="bg-brand py-28">...</section>
    
    <!-- 页脚 -->
    <footer class="bg-neutral-900 py-16">...</footer>
    
    <!-- JavaScript动画控制器 -->
    <script>...</script>
</body>
</html>
```

---

## 🚀 新页面开发检查清单

### ✅ 设计一致性检查
- [ ] 使用了正确的品牌色 (#028985, #0ABAB5)
- [ ] 标题大量使用 `font-light`
- [ ] 使用了4px小圆角 (`rounded-trimble`)
- [ ] 采用了大间距设计 (`py-28`)
- [ ] 图标为黑色 (`text-neutral-900`)
- [ ] 去掉了所有外阴影效果

### ✅ 组件复用检查
- [ ] 导航栏使用两行设计
- [ ] 区块标题包含品牌色竖线
- [ ] 按钮使用标准样式
- [ ] 卡片使用 `hover-subtle` 效果
- [ ] 使用了 `perfect-dot` 列表样式

### ✅ 动画效果检查
- [ ] 添加了滚动触发动画 (`slide-in-left/right`)
- [ ] 使用了交错延迟 (`stagger-1/2/3/4`)
- [ ] 按钮悬停为颜色过渡（不是上浮阴影）
- [ ] 导航栏有滚动隐藏/显示效果

### ✅ 响应式检查
- [ ] 使用了标准容器 (`max-w-7xl mx-auto`)
- [ ] 网格布局适配多端
- [ ] 字体大小响应式调整
- [ ] 间距在移动端有适当缩减

---

## 📋 必需的CSS文件内容

### Tailwind配置
```javascript
tailwind.config = {
    theme: {
        extend: {
            fontFamily: {
                'sans': ['Open Sans', 'system-ui', 'sans-serif'],
            },
            fontWeight: {
                'extralight': '200',
                'light': '300',
                'normal': '400',
                'medium': '500',
                'semibold': '600',
                'bold': '700',
                'extrabold': '800',
            },
            colors: {
                'brand': '#028985',
                'brand-light': '#0ABAB5',
                'neutral-50': '#fafafa',
                'neutral-100': '#f5f5f5',
                'neutral-200': '#e5e5e5',
                'neutral-300': '#d4d4d4',
                'neutral-400': '#a3a3a3',
                'neutral-500': '#737373',
                'neutral-600': '#525252',
                'neutral-700': '#404040',
                'neutral-800': '#262626',
                'neutral-900': '#171717',
            },
            borderRadius: {
                'trimble': '4px',
            }
        }
    }
}
```

### 必需的自定义CSS类
```css
.hover-subtle {
    transition: all 0.3s ease;
    border: 1px solid transparent;
}

.hover-subtle:hover {
    border-color: #171717;
}

.slide-in-left {
    opacity: 0;
    transform: translateX(-30px);
    transition: all 0.6s ease-out;
}

.slide-in-left.visible {
    opacity: 1;
    transform: translateX(0);
}

.slide-in-right {
    opacity: 0;
    transform: translateX(30px);
    transition: all 0.6s ease-out;
}

.slide-in-right.visible {
    opacity: 1;
    transform: translateX(0);
}

.perfect-dot {
    width: 8px;
    height: 8px;
    background-color: #028985;
    border-radius: 50%;
    flex-shrink: 0;
    margin-right: 12px;
    margin-top: 0.6em;
}

.navbar-transition {
    transition: transform 0.3s ease-in-out;
}

.navbar-hidden {
    transform: translateY(-100%);
}

.navbar-visible {
    transform: translateY(0);
}
```

---

## 🎯 重要提醒

### 设计哲学
1. **极简主义** - 去除不必要的视觉装饰
2. **功能优先** - 每个元素都有明确目的
3. **空间美学** - 大量留白，舒适的阅读体验
4. **品牌一致** - 精确控制品牌色使用
5. **企业级** - 专业、可信、高端的视觉呈现

### 避免的设计元素
❌ 外阴影效果 (`shadow-lg`, `shadow-xl`)  
❌ 夸张的动画效果  
❌ 彩色图标  
❌ 过多的品牌色使用  
❌ 紧凑的间距设计  

### 推荐的设计元素
✅ 边框描边悬停效果  
✅ 简洁的颜色过渡  
✅ 黑白灰主色调  
✅ 品牌色精准控制  
✅ 宽松的大间距布局  

---

## 📖 使用说明

### 开始新页面开发时：
1. **复制页面结构模板**
2. **引入相同的CSS依赖**
3. **使用组件库中的标准组件**
4. **按照检查清单验证设计一致性**
5. **测试响应式布局和动画效果**

### 遇到设计疑问时：
1. **参考首页 `index.html` 的具体实现**
2. **严格遵循本设计系统的规范**
3. **保持与Trimble网站风格的一致性**

---

*这个设计系统确保您的后续页面开发能够完美延续当前的设计语言，维持整站的专业性和一致性。*
