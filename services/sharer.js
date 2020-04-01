export default function(title, url = '', platform = 'whatsapp') {
  console.log(title, url)
  if (navigator.share) {
    navigator
      .share({
        text: title,
        url: url || undefined,
      })
      .then(() => {})
      .catch(console.error)
  } else {
    const text = encodeURIComponent(`${title} ${url}`)

    const urlsMap = {
      facebook: () => {
        return (
          `https://www.facebook.com/sharer/sharer.php?u=` +
          (url || window.location.href) +
          '&quote=' +
          encodeURIComponent(title.replace(/[^\x00-\x7F]/g, ''))
        )
      },

      whatsapp() {
        return `https://wa.me?text=${text}`
      },

      twitter() {
        return `https://twitter.com/share?text=${text}`
      },
    }

    window.open(urlsMap[platform]())
  }
}
