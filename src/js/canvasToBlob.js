const canvasToBlob = (canvas, mimeType, qualityArgument) =>
  new Promise((resolve, reject) => {
    try {
      canvas.toBlob(resolve, mimeType, qualityArgument)
    } catch (e) {
      reject(e)
    }
  })

export default canvasToBlob
