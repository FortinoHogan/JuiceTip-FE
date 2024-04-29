import React, { useEffect, useState } from 'react'
import addImgLogo from '../../assets/images/add-image-logo.png'

const InsertPicture = () => {
  const [img, setImg] = useState(null);
  const [imgPreview, setImgPreview] = useState<any | null>(null);

  useEffect(() => {
    if (img) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImgPreview(reader.result);
      };
      reader.readAsDataURL(img);
    } else {
      setImgPreview(null);
    }
  }, [img]);
  return (
    <div className="relative cursor-pointer w-56 h-56 flex items-center justify-center bg-[#d9d9d9] rounded-xl">
      {imgPreview ? (
        <img src={imgPreview} alt="preview" className="w-full h-full object-cover rounded-xl" />
      ) : (
        <img src={addImgLogo} alt="" />
      )}                <input
        type="file"
        id="file"
        className="cursor-pointer absolute inset-0 opacity-0 w-full h-full"
        onChange={(e: any) => setImg(e.target.files[0])}
      />
    </div>
  )
}

export default InsertPicture