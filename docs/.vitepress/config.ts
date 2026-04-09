import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'vi-VN',
  title: 'FnB Ăn Liền',
  description: 'Hướng dẫn sử dụng app marketing AI cho chủ quán F&B Việt Nam',

  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['meta', { name: 'theme-color', content: '#1D9E75' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:site_name', content: 'FnB Ăn Liền Docs' }],
    ['meta', { property: 'og:image', content: 'https://huongdan.fnbanlien.com/og-image.png' }],
  ],

  themeConfig: {
    logo: '/logo.png',
    siteTitle: 'FnB Ăn Liền',

    nav: [
      { text: 'Trang chủ', link: '/chao-mung/' },
      { text: 'Bắt đầu', link: '/bat-dau/' },
      { text: 'Bảng giá', link: '/goi-dich-vu/' },
      {
        text: 'Vào app ↗',
        link: 'https://app.fnbanlien.com',
        target: '_blank'
      }
    ],

    sidebar: [
      {
        text: '👋 Chào Mừng',
        items: [
          { text: 'Giới thiệu', link: '/chao-mung/' },
          { text: 'FnB Ăn Liền là gì?', link: '/chao-mung/app-la-gi' },
          { text: 'Về Long Hoàng', link: '/chao-mung/ve-long-hoang' },
          { text: 'Lộ trình tính năng', link: '/chao-mung/lo-trinh' },
        ]
      },
      {
        text: '🚀 Bắt Đầu Nhanh',
        items: [
          { text: 'Tổng quan', link: '/bat-dau/' },
          { text: 'Đăng ký và Đăng nhập', link: '/bat-dau/dang-ky-dang-nhap' },
          { text: 'Thiết lập thông tin quán', link: '/bat-dau/thiet-lap-quan' },
          { text: 'Bước đầu tiên nên làm', link: '/bat-dau/buoc-dau-tien' },
        ]
      },
      {
        text: '🧬 DNA Thương Hiệu',
        items: [
          { text: 'Tổng quan', link: '/dna-thuong-hieu/' },
          { text: 'DNA Thương Hiệu là gì?', link: '/dna-thuong-hieu/la-gi' },
          { text: 'Thiết lập 5 bước', link: '/dna-thuong-hieu/thiet-lap' },
        ]
      },
      {
        text: '✍️ AI Viết Bài Facebook',
        collapsed: true,
        items: [
          { text: 'Tổng quan', link: '/viet-bai/' },
          { text: 'Hướng dẫn tạo bài', link: '/viet-bai/huong-dan' },
        ]
      },
      {
        text: '🎨 Studio AI',
        collapsed: true,
        items: [
          { text: 'Tổng quan', link: '/studio-ai/' },
          { text: 'Hướng dẫn tạo poster', link: '/studio-ai/huong-dan' },
        ]
      },
      {
        text: '🍵 Matcha AI',
        collapsed: true,
        items: [
          { text: 'Matcha AI là ai?', link: '/matcha-ai/' },
          { text: 'Mẹo hỏi cho tốt', link: '/matcha-ai/meo-chat' },
        ]
      },
      {
        text: '💳 Gói và Thanh Toán',
        collapsed: true,
        items: [
          { text: 'Bảng giá', link: '/goi-dich-vu/' },
          { text: 'Hướng dẫn thanh toán', link: '/goi-dich-vu/thanh-toan' },
        ]
      },
      {
        text: '🆘 Hỗ Trợ',
        collapsed: true,
        items: [
          { text: 'Trung tâm hỗ trợ', link: '/ho-tro/' },
          { text: 'Câu hỏi thường gặp', link: '/ho-tro/cau-hoi-thuong-gap' },
        ]
      },
    ],

    search: {
      provider: 'local',
      options: {
        locales: {
          root: {
            translations: {
              button: { buttonText: 'Tìm kiếm', buttonAriaLabel: 'Tìm kiếm' },
              modal: {
                noResultsText: 'Không tìm thấy kết quả cho',
                resetButtonTitle: 'Xoá từ khoá',
                footer: { selectText: 'chọn', navigateText: 'di chuyển', closeText: 'đóng' }
              }
            }
          }
        }
      }
    },

    socialLinks: [
      { icon: 'facebook', link: 'https://facebook.com/Long2492' }
    ],

    footer: {
      message: 'Trợ lý marketing AI cho chủ quán F&B Việt Nam',
      copyright: '© 2026 FnB Ăn Liền — Long Hoàng FnB'
    },

    lastUpdated: {
      text: 'Cập nhật lần cuối',
      formatOptions: { dateStyle: 'short' }
    },

    docFooter: {
      prev: 'Trang trước',
      next: 'Trang sau'
    },

    outline: {
      label: 'Mục lục trang này'
    },

    returnToTopLabel: 'Về đầu trang',
    sidebarMenuLabel: 'Menu',
    darkModeSwitchLabel: 'Giao diện',
  }
})
