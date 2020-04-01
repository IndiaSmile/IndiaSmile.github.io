export default function(title, url = '') {
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
    const text = `${title} ${url}`
    window.open(`https://wa.me?text=${encodeURIComponent(text)}`)
  }
}
