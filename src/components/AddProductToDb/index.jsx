import React, { useState } from "react";
import local from "../../api/local";

const AddProductToDb = () => {
  const [files, setFiles] = useState([]);
  const [uploading, setUploading] = useState(false);

  const onChange = (e) => {
    const files = Array.from(e.target.files);
    setUploading({ uploading: true });

    const formData = new FormData();

    files.forEach((file, i) => {
      formData.append(i, file);
    });

    local(`products/`, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((images) => {
        setUploading(false);
        setFiles(images);
      });
  };
  //   const removeImage = (id) => {
  //     setFiles({
  //       images: files.filter((image) => image.public_id !== id),
  //     });
  //   };
  const content = () => {
    switch (true) {
      case uploading:
        return "Loading...";
      case files.length > 0:
        return files.map((image) => <img src={image.secure_url} alt="" />);
      default:
        return files.map((image) => <img src={image.secure_url} alt="" />);
    }
  };
  return (
    <>
      <div className="buttons">{content()}</div>
      <input type="file" onChange={(e) => onChange(e)} />;
    </>
  );
};

export default AddProductToDb;
