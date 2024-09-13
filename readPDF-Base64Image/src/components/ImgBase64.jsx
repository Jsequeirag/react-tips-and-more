import { React, useState } from "react";

const ImgBase64 = () => {
  const [image, setImage] = useState({});
  const handleImage = (e) => {
    var file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      let encoded = reader.result.toString().replace(/^data:(.*,)?/, "");
      if (encoded.length % 4 > 0) {
        encoded += "=".repeat(4 - (encoded.length % 4));
      }
      console.log(encoded);
      setImage({
        ...image,
        ["imgBase64"]: encoded,
      });
    };
  };
  return (
    <>
      <div>
        <input
          type="file"
          className="block w-full text-sm text-slate-500
      file:mr-4 file:py-2 file:px-4
      file:rounded-full file:border-0
      file:text-sm file:font-semibold
      file:bg-bg-gray-50 file:black
      hover:file:bg-gray-400
    "
          accept="image/png, image/jpeg"
          onChange={handleImage}
        />
      </div>
      <div className="flex justify-center">
        <img
          width={"60px"}
          height={"60px"}
          className="h-40 w-40 object-contain rounded border border-solid p-2"
          src={`data:image/png;base64,${image.imgBase64}`}
          alt="Company photo"
        />
      </div>
    </>
  );
};

export default ImgBase64;
