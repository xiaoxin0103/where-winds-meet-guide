import DefaultTheme from 'vitepress/theme'
import { h } from 'vue'
import './custom.css'

// Share buttons component
const ShareButtons = {
  setup() {
    return () => h('div', { class: 'share-buttons' }, [
      h('span', { class: 'share-label' }, 'Share this guide:'),
      h('a', {
        href: '#',
        class: 'share-btn share-x',
        target: '_blank',
        rel: 'noopener',
        onClick: (e) => {
          e.preventDefault()
          const url = encodeURIComponent(window.location.href)
          const title = encodeURIComponent(document.title)
          window.open(`https://x.com/intent/tweet?url=${url}&text=${title}`, '_blank', 'width=600,height=400')
        }
      }, '𝕏 Tweet'),
      h('a', {
        href: '#',
        class: 'share-btn share-fb',
        target: '_blank',
        rel: 'noopener',
        onClick: (e) => {
          e.preventDefault()
          const url = encodeURIComponent(window.location.href)
          window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`, '_blank', 'width=600,height=400')
        }
      }, '📘 Share'),
      h('a', {
        href: '#',
        class: 'share-btn share-reddit',
        target: '_blank',
        rel: 'noopener',
        onClick: (e) => {
          e.preventDefault()
          const url = encodeURIComponent(window.location.href)
          const title = encodeURIComponent(document.title)
          window.open(`https://www.reddit.com/submit?url=${url}&title=${title}`, '_blank', 'width=800,height=600')
        }
      }, '🤖 Reddit'),
      h('a', {
        href: '#',
        class: 'share-btn share-copy',
        onClick: (e) => {
          e.preventDefault()
          navigator.clipboard.writeText(window.location.href)
          const btn = e.target
          btn.textContent = '✅ Copied!'
          setTimeout(() => { btn.textContent = '🔗 Copy Link' }, 2000)
        }
      }, '🔗 Copy Link')
    ])
  }
}

export default {
  extends: DefaultTheme,
  Layout: (props) => {
    // Add share buttons at the bottom of doc pages
    return h(DefaultTheme.Layout, props, {
      'doc-after': () => h(ShareButtons)
    })
  }
}
