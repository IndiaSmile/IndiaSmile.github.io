export default function(title, url = '') {
  console.log(title, url)
  if (navigator.share) {
    navigator
      .share({
        text: title,
        url,
      })
      .then(() => {})
      .catch(console.error)
  } else {
    const text = `${title} ${url}`
    window.open(`whatsapp://send?text=${encodeURIComponent(text)}`)
  }
}
