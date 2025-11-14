const downloadBlob = (blob, fileName) => {
  const a = document.createElement('a')
  a.href = URL.createObjectURL(blob)
  a.download = fileName

  a.click()
}

export default downloadBlob
