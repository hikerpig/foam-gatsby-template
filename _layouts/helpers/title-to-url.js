const slugify = require('slugify')

module.exports = function titleToURL(title) {
  const segs = title.split('/')
  const slugifiedTitle = slugify(segs.pop())
  return `${segs.join('/')}/${slugifiedTitle}`
}
