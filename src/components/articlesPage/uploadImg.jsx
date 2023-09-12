import React, { useRef } from "react";
import { useGlobalContext } from "../context";

function UploadImg() {
  const { selectedImg, setSelectedImg } = useGlobalContext();
  const fileRef = useRef(null);

  const uploadImg = (event) => {
    const file = event.target.files[0];
    if (file) {
      const selectFile = new FileReader();
      selectFile.onload = (event) => setSelectedImg(event.target.result);
      selectFile.readAsDataURL(file);
    }
  };
  return (
    <div className="flex items-center justify-between w-full max-h-60 mb-5">
      <input
        type="file"
        accept="image/*"
        onChange={uploadImg}
        ref={fileRef}
        style={{ display: "none" }}
      />
      <button
        className="border border-border-light px-2 py-4 rounded-lg my-2"
        type="button"
        onClick={() => fileRef.current.click()}
      >
        Upload Image
      </button>
      {selectedImg && <img className="w-20" src={selectedImg} alt="post" />}
    </div>
  );
}

export default UploadImg;
