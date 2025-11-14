import fileToImage from './fileToImage.js'
import imageToCanvas from './imageToCanvas.js'
import canvasToBlob from './canvasToBlob.js'
import downloadBlob from './downloadBlob.js'

const onDrag = (e) => {
  e.preventDefault()
  e.stopPropagation()

  e.originalEvent.dataTransfer.dropEffect = 'copy'
}

const onDrop = async (e) => {
  e.preventDefault()
  e.stopPropagation()

  for (const origFile of e.originalEvent.dataTransfer.files) {
    const image = await fileToImage(origFile)

    const canvas = imageToCanvas(image)

    const blob = await canvasToBlob(canvas)

    const origFileName = origFile.name
    const convertedFileName =
      origFileName.substring(0, origFileName.lastIndexOf('.')) + '.png'

    downloadBlob(blob, convertedFileName)
  }
}

$('body').on({
  'dragenter dragover': onDrag,
  drop: onDrop
})
