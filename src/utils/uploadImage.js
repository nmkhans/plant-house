const imageUploadUrl = `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_APP_IMGBB_API_KEY}`;

async function uploadImageFetch(data) {
  const res = await fetch(imageUploadUrl, {
    method: "POST",
    body: data
  })
  const imageData = await res.json()
  return imageData
}

export default uploadImageFetch;