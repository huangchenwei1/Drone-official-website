/* ================================
   设计系统JavaScript工具
   无人机企业网站设计系统
   ================================ */

class DesignSystem {
  constructor() {
    this.init();
  }

  init() {
    this.setupScrollAnimations();
    this.setupNavbar();
    this.setupTabs();
  }

  // 滚动动画系统
  setupScrollAnimations() {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);

    // 观察所有滑入动画元素
    document.querySelectorAll('.ds-slide-in-left, .ds-slide-in-right').forEach(el => {
      observer.observe(el);
    });
  }

  // 导航栏控制
  setupNavbar() {
    let lastScrollY = window.scrollY;
    let ticking = false;

    const updateNavbar = () => {
      const navbar = document.querySelector('.ds-navbar');
      if (!navbar) return;

      const currentScrollY = window.scrollY;
      
      if (currentScrollY < 10) {
        navbar.classList.remove('ds-navbar-hidden');
      } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        navbar.classList.add('ds-navbar-hidden');
      } else if (currentScrollY < lastScrollY) {
        navbar.classList.remove('ds-navbar-hidden');
      }
      
      lastScrollY = currentScrollY;
      ticking = false;
    };

    const requestUpdate = () => {
      if (!ticking) {
        requestAnimationFrame(updateNavbar);
        ticking = true;
      }
    };

    window.addEventListener('scroll', requestUpdate);
  }

  // 标签切换系统
  setupTabs() {
    document.querySelectorAll('[data-tab-group]').forEach(group => {
      const tabs = group.querySelectorAll('[data-tab]');
      const panels = group.querySelectorAll('[data-tab-panel]');

      tabs.forEach(tab => {
        tab.addEventListener('click', () => {
          const targetPanel = tab.dataset.tab;

          // 移除所有活跃状态
          tabs.forEach(t => t.classList.remove('active'));
          panels.forEach(p => p.classList.remove('active'));

          // 添加活跃状态
          tab.classList.add('active');
          const panel = group.querySelector(`[data-tab-panel="${targetPanel}"]`);
          if (panel) panel.classList.add('active');
        });
      });
    });
  }

  // 平滑滚动
  setupSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', (e) => {
        e.preventDefault();
        const target = document.querySelector(anchor.getAttribute('href'));
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      });
    });
  }
}

/* ================================
   组件工厂函数
   ================================ */

const DS = {
  // 创建按钮
  createButton(text, variant = 'primary', size = 'md', options = {}) {
    const button = document.createElement('button');
    button.className = `ds-btn ds-btn-${variant} ds-btn-${size}`;
    button.textContent = text;
    
    if (options.icon) {
      const icon = document.createElement('i');
      icon.className = options.icon;
      if (options.iconPosition === 'right') {
        icon.style.marginLeft = 'var(--space-2)';
        button.appendChild(document.createTextNode(text));
        button.appendChild(icon);
      } else {
        icon.style.marginRight = 'var(--space-2)';
        button.appendChild(icon);
        button.appendChild(document.createTextNode(text));
      }
      button.textContent = '';
    }
    
    if (options.onClick) {
      button.addEventListener('click', options.onClick);
    }
    
    return button;
  },

  // 创建卡片
  createCard(options = {}) {
    const { icon, title, content, tags = [], actions = [] } = options;
    
    const card = document.createElement('div');
    card.className = 'ds-card';
    
    let cardHTML = '';
    
    if (icon) {
      cardHTML += `
        <div class="ds-card-icon">
          <i class="${icon}"></i>
        </div>
      `;
    }
    
    if (title) {
      cardHTML += `<h3 class="ds-card-title">${title}</h3>`;
    }
    
    if (content) {
      cardHTML += `<p class="ds-card-content">${content}</p>`;
    }
    
    if (tags.length > 0) {
      cardHTML += '<div class="ds-tags">';
      tags.forEach(tag => {
        cardHTML += `<span class="ds-tag">${tag}</span>`;
      });
      cardHTML += '</div>';
    }
    
    card.innerHTML = cardHTML;
    
    // 添加操作按钮
    if (actions.length > 0) {
      const actionsContainer = document.createElement('div');
      actionsContainer.style.marginTop = 'var(--space-6)';
      actionsContainer.style.display = 'flex';
      actionsContainer.style.gap = 'var(--space-3)';
      
      actions.forEach(action => {
        const btn = this.createButton(action.text, action.variant || 'ghost', action.size || 'sm', {
          onClick: action.onClick
        });
        actionsContainer.appendChild(btn);
      });
      
      card.appendChild(actionsContainer);
    }
    
    return card;
  },

  // 创建区块标题
  createSectionHeader(options = {}) {
    const { subtitle, title, description } = options;
    
    const header = document.createElement('div');
    header.className = 'ds-section-header';
    
    let headerHTML = '';
    
    if (subtitle) {
      headerHTML += `<p class="ds-section-subtitle">${subtitle}</p>`;
    }
    
    if (title) {
      headerHTML += `
        <div class="ds-section-title">
          <h2>${title}</h2>
        </div>
      `;
    }
    
    if (description) {
      headerHTML += `<p class="ds-section-description">${description}</p>`;
    }
    
    header.innerHTML = headerHTML;
    return header;
  },

  // 创建特色列表
  createFeatureList(features = []) {
    const list = document.createElement('div');
    list.className = 'ds-feature-list';
    
    features.forEach(feature => {
      const item = document.createElement('div');
      item.className = 'ds-feature-item';
      
      item.innerHTML = `
        <div class="ds-feature-dot"></div>
        <div class="ds-feature-content">
          <h4>${feature.title}</h4>
          <p>${feature.description}</p>
        </div>
      `;
      
      list.appendChild(item);
    });
    
    return list;
  },

  // 创建导航栏
  createNavbar(options = {}) {
    const { logo, menuItems = [], actions = [] } = options;
    
    const navbar = document.createElement('header');
    navbar.className = 'ds-navbar';
    
    // 顶部栏
    if (options.showTopBar) {
      const topBar = document.createElement('div');
      topBar.className = 'ds-navbar-top';
      topBar.innerHTML = `
        <div class="ds-container">
          <div class="ds-navbar-top-content">
            <div></div>
            <div style="display: flex; align-items: center; gap: var(--space-6);">
              <div style="display: flex; align-items: center; gap: var(--space-2);">
                <span style="color: var(--color-neutral-600);">EN</span>
                <span style="color: var(--color-neutral-300);">|</span>
                <span style="color: var(--color-neutral-400);">ES</span>
              </div>
              <button style="background: none; border: none; color: var(--color-neutral-500); cursor: pointer;">
                <i class="fas fa-search"></i>
              </button>
              <a href="#login" style="color: var(--color-neutral-600); text-decoration: none;">Log in</a>
            </div>
          </div>
        </div>
      `;
      navbar.appendChild(topBar);
    }
    
    // 主导航
    const mainNav = document.createElement('nav');
    mainNav.innerHTML = `
      <div class="ds-container">
        <div class="ds-navbar-main-content">
          <div class="ds-navbar-logo">
            <img src="${logo || 'logo.png'}" alt="Logo">
          </div>
          
          <div class="ds-navbar-menu">
            ${menuItems.map(item => `
              <a href="${item.href || '#'}" class="ds-navbar-link">${item.text}</a>
            `).join('')}
          </div>
          
          <div style="display: flex; gap: var(--space-4);">
            ${actions.map(action => `
              <button class="ds-btn ds-btn-${action.variant || 'secondary'} ds-btn-sm">
                ${action.text}
              </button>
            `).join('')}
          </div>
        </div>
      </div>
    `;
    
    navbar.appendChild(mainNav);
    return navbar;
  },

  // 创建网格布局
  createGrid(items = [], columns = 3) {
    const grid = document.createElement('div');
    grid.className = `ds-grid ds-grid-cols-1 ds-grid-md-cols-2 ds-grid-lg-cols-${columns}`;
    
    items.forEach(item => {
      grid.appendChild(item);
    });
    
    return grid;
  },

  // 工具函数：添加动画类
  addAnimation(element, animation = 'slide-in-left', delay = 0) {
    element.classList.add(`ds-${animation}`);
    if (delay > 0) {
      element.classList.add(`ds-stagger-${delay}`);
    }
    return element;
  }
};

/* ================================
   主题切换器
   ================================ */

const ThemeManager = {
  // 切换到深色主题
  enableDarkMode() {
    document.documentElement.style.setProperty('--color-neutral-50', '#1a1a1a');
    document.documentElement.style.setProperty('--color-neutral-100', '#262626');
    document.documentElement.style.setProperty('--color-neutral-200', '#404040');
    document.documentElement.style.setProperty('--color-white', '#171717');
    document.documentElement.style.setProperty('--color-neutral-900', '#fafafa');
  },

  // 切换到浅色主题
  enableLightMode() {
    document.documentElement.style.setProperty('--color-neutral-50', '#fafafa');
    document.documentElement.style.setProperty('--color-neutral-100', '#f5f5f5');
    document.documentElement.style.setProperty('--color-neutral-200', '#e5e5e5');
    document.documentElement.style.setProperty('--color-white', '#ffffff');
    document.documentElement.style.setProperty('--color-neutral-900', '#171717');
  },

  // 切换品牌色
  setBrandColor(color) {
    document.documentElement.style.setProperty('--color-brand', color);
  }
};

/* ================================
   自动初始化
   ================================ */

// 页面加载完成后初始化动画控制器
document.addEventListener('DOMContentLoaded', () => {
  new DesignSystem();
  
  // 为现有元素添加平滑滚动
  document.html?.classList.add('scroll-smooth');
});

// 导出到全局
window.DesignSystem = DesignSystem;
window.DS = DS;
window.ThemeManager = ThemeManager;
