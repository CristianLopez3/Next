"use client";
import classes from "./image-picker.module.css";
import { useRef, useState } from "react";
import Image from "next/image";

export default function ImagePicker({ label, name }) {
  const [pickImage, setPickImage] = useState();
  const imageInputRef = useRef();
  function handleClickPick() {
    imageInputRef.current.click();
  }
  function handleImageChange(e) {
    const file = e.target.files[0];
    if (!file) {
      setPickImage(null);
      return;
    }

    const fileReader = new FileReader();
    fileReader.onload = () => {
      setPickImage(fileReader.result);
    };
    fileReader.readAsDataURL(file);
  }
  return (
    <div className={classes.picker}>
      <label htmlFor={name}>{label}</label>
      <div className={classes.controls}>
        <div className={classes.preview}>
          {!pickImage && <p>No image picked yet.</p>}
          {pickImage && (
            <Image src={pickImage} alt="the image selected by the user" fill />
          )}
        </div>
        <input
          className={classes.input}
          type="file"
          id={name}
          accept="image/png, image/jpeg"
          name={name}
          ref={imageInputRef}
          onChange={handleImageChange}
          required
        />
        <button
          className={classes.button}
          type="button"
          onClick={handleClickPick}
        >
          Pick an Image
        </button>
      </div>
    </div>
  );
}
