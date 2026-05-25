import DefaultTheme from 'vitepress/theme'
import './style.css'

export default {
  extends: DefaultTheme,
  enhanceApp({ router }) {
    if (typeof window !== 'undefined') {
      let isNavigating = false;
      
      // Khôi phục cờ điều hướng sau khi chuyển route thành công
      const originalCallback = router.onAfterRouteChanged;
      router.onAfterRouteChanged = (to) => {
        isNavigating = false;
        if (originalCallback) {
          originalCallback(to);
        }
      };
      
      window.addEventListener('scroll', () => {
        if (isNavigating) return;
        
        const threshold = 150; // Khoảng cách từ đáy trang (px) để kích hoạt
        const isBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - threshold;
        const hasScrolled = window.scrollY > 50; // Đảm bảo người dùng thực sự đã cuộn trang
        
        if (isBottom && hasScrolled) {
          const nextLink = document.querySelector('a.pager-link.next') as HTMLAnchorElement;
          if (nextLink) {
            isNavigating = true;
            nextLink.click();
          }
        }
      });
    }
  }
}
