import React from "react";

function Card({dev}) {
  return (
    <div className="max-w-[30rem]">
      <div className="course_image max-w-[20rem]">
        <img src={dev.image.url} alt={dev.image.alt} />
      </div>
      <div className="icon"><i className="fa-sharp fa-solid fa-heart text-red-600 h-5"></i></div>
      <div className="title text-xl">{dev.title}</div>
      <div className="desc text-sm">{dev.description}</div>
    </div>
  );
}

export default Card;
