import React from "react";
import s from "./Loader.module.css";
import { Comment } from "react-loader-spinner";

const Loader = () => (
  <div className={s.Loader}>
    <Comment
      visible={true}
      height="180"
      width="180"
      ariaLabel="comment-loading"
      wrapperStyle={{}}
      wrapperClass="comment-wrapper"
      color="#fff"
      backgroundColor="#F4442E"
    />
  </div>
);

export default Loader;
