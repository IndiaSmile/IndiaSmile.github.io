export default function(title, url = '', platform = 'whatsapp') {
  console.log(title, url)
  if (navigator.share) {
    const object = { text: title }

    if (url) {
      object.url = url
    }

    navigator
      .share(object)
      .then(() => {})
      .catch(console.error)
  } else {
    const text = encodeURIComponent(`${title} ${url}`)

    let openUrl = ''

    if (platform === 'whatsapp') {
      openUrl = `https://wa.me?text=${text}`
    } else if (platform === 'twitter') {
      openUrl = `https://twitter.com/share?text=${text}`
    } else if (platform === 'facebook') {
      openUrl =
        `https://www.facebook.com/sharer/sharer.php?u=` +
        (url || window.location.href) +
        '&quote=' +
        encodeURIComponent(title)
    }

    console.log(openUrl)

    window.open(openUrl)
  }
}
