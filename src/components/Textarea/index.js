import React from "react";
import { useController } from "react-hook-form";
import { ErrorMessage, IconWrapper, InputWrapper, Label, TextareaStyled } from "./index.style";

const Textarea = ({ label, icon, error, control, name, fullWidth, type, placeholder }) => {
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
        <TextareaStyled {...field} fullWidth={fullWidth} type={type} placeholder={placeholder}/>
        {icon && <IconWrapper>{icon}</IconWrapper>}
      </InputWrapper>
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </>
  );
};

export default Textarea;
