import React from "react";
import { useController } from "react-hook-form";
import { IconWrapper, InputStyled, InputWrapper, Label } from "./index.style";

const Input = ({ label, icon, error, control, name, fullWidth, type }) => {
  const {
    field,
    fieldState: { invalid, isTouched, isDirty },
    formState: { touchedFields, dirtyFields },
  } = useController({
    name,
    control,
  });
  return (
    <>
      <Label>{label}</Label>
      <InputWrapper>
        <InputStyled {...field} fullWidth={fullWidth} type={type}/>
        {icon && <IconWrapper>{icon}</IconWrapper>}
      </InputWrapper>
    </>
  );
};

export default Input;
