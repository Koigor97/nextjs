"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import styles from "./image-picker.module.css";

function ImagePicker({ label, name }) {
  const imageInput = useRef(null);
  const [pickedImg, setPickedImg] = useState("");

  function handlePickImageClick() {
    imageInput.current.click();
  }

  function handleImageChange(e) {
    // e.preventDefault();
    const file = e.target.files[0];
    if (!file) {
      setPickedImg(null);
      return;
    }

    const fileReader = new FileReader();
    fileReader.onload = () => {
      setPickedImg(fileReader.result);
    };

    fileReader.readAsDataURL(file);
  }

  return (
    <div className={styles.picker}>
      <label htmlFor={name}>{label}</label>
      <div className={styles.controls}>
        <div className={styles.preview}>
          {!pickedImg && <p>Select an image</p>}
          {pickedImg && (
            <Image src={pickedImg} alt="The choosen image from the user" fill />
          )}
        </div>
        <input
          className={styles.input}
          type="file"
          name={name}
          id={name}
          accept="image/png, image/jpeg, image/webp"
          ref={imageInput}
          onChange={handleImageChange}
          required
        />
        <button
          className={styles.button}
          type="button"
          onClick={handlePickImageClick}
        >
          Pick an Image
        </button>
      </div>
    </div>
  );
}

export default ImagePicker;
