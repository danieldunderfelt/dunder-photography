const sharp = require('sharp')
const glob = require('glob')
const path = require('path')
const fsExtra = require('fs-extra')

glob('./import_images/**.*', (err, files) => {
  files.forEach(file => {
    const name = path.basename(file)

    sharp(file)
      .resize(1080, 1350, {
        fit: 'outside',
      })
      .jpeg({
        quality: 75,
      })
      .toFile(`./static/img/${name}`, () => {
        fsExtra.removeSync(file)
      })
  })
})
