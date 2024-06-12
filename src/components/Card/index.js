import Image from "next/image";
import React from "react";
import { CardStyled, Info, Top } from "./index.style";

const Card = ({ image, title, alt, date, user }) => {
  return (
    <CardStyled>
      <Top>
        <Image
          src={image}
          width={220}
          height={180}
          loading="lazy"
          alt={alt}
          style={{
            objectFit: "cover",
          }}
        />
        <h5>{title}</h5>
      </Top>
      <Info>
        <span>{date}</span>
        <span>{user}</span>
      </Info>
    </CardStyled>
  );
};

export default Card;
