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
          { text: 'Thiết lập 5 bước Onboarding', link: '/dna-thuong-hieu/thiet-lap' },
          { text: 'Chỉnh sửa & Theo dõi DNA Score', link: '/dna-thuong-hieu/chinh-sua' },
        ]
      },
      {
        text: '✍️ AI Viết Bài & Chăm Sóc',
        collapsed: false,
        items: [
          { text: 'Tổng quan', link: '/viet-bai/' },
          { text: 'Hướng dẫn viết bài & Lịch nội dung', link: '/viet-bai/huong-dan-viet' },
          { text: 'Tương tác & Seeding đánh giá', link: '/ho-tro/review-seeding' },
        ]
      },
      {
        text: '🎨 Visual Studio AI',
        collapsed: false,
        items: [
          { text: 'Tổng quan', link: '/studio-ai/' },
          { text: 'Tạo ảnh món chuyên nghiệp', link: '/studio-ai/anh-mon-ai' },
          { text: 'Thiết kế poster & Camera AI', link: '/studio-ai/poster-banner' },
        ]
      },
      {
        text: '🗺️ Bản Đồ & Chiến Lược',
        collapsed: false,
        items: [
          { text: 'Bản đồ 6 vùng điểm chạm', link: '/chien-luoc/diem-cham-khach-hang' },
          { text: 'Phân tích SWOT & Lộ trình', link: '/chien-luoc/swot-4p' },
        ]
      },
      {
        text: '🍵 Matcha AI',
        collapsed: true,
        items: [
          { text: 'Matcha AI là ai?', link: '/matcha-ai/' },
          { text: 'Trò chuyện hiệu quả với Matcha AI', link: '/matcha-ai/tro-ly-matcha' },
        ]
      },
      {
        text: '🪙 Tích Luỹ & Thành Viên',
        collapsed: true,
        items: [
          { text: 'Điểm danh nhận Gold & Affiliate', link: '/ho-tro/gold-affiliate' },
          { text: 'Bảng giá dịch vụ', link: '/goi-dich-vu/' },
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
