import React from "react";
import { ButtonContainer, CardStyled, Info, Top } from "./index.style";

const CardCrud = ({ image, title, alt, date, user, onClick, onDelete }) => {
  return (
    <CardStyled onClick={onClick}>
      <Top>
        <img
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
      <ButtonContainer>
        <button >
            Editar
        </button>
        <button onClick={onDelete} type="submit">
            Eliminar
        </button>
      </ButtonContainer>
    </CardStyled>
  );
};

export default CardCrud;
