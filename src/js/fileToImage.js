const fileToImage = (file) =>
  new Promise((resolve, reject) => {
    const image = document.createElement('img')

    image.onload = () => {
      resolve(image)
    }
    image.onerror = (e) => {
      reject(e)
    }

    image.src = URL.createObjectURL(file)
  })

export default fileToImage
