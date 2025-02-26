import { useState } from "react";

type FieldState = "neutral" | "error" | "success";

interface FieldConfig {
  validators: ((value: string) => boolean)[]; 
}

export default function useFormValidation(fields: Record<string, FieldConfig>) {
  const [values, setValues] = useState<Record<string, string>>({});
  const [states, setStates] = useState<Record<string, FieldState>>({});
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleChange = (field: string, value: string) => {
    setValues((prev) => ({ ...prev, [field]: value }));

    if (!formSubmitted) return; 

    const isValid = fields[field].validators.every((check) => check(value));

    setStates((prev) => ({
      ...prev,
      [field]: prev[field] === "error" || prev[field] === "success"
        ? isValid ? "success" : "error"
        : "neutral",
    }));
  };

  const validateForm = () => {
    setFormSubmitted(true);
    let isValid = true;

    const newStates: Record<string, FieldState> = {};

    Object.entries(fields).forEach(([field, { validators }]) => {
      const value = values[field] || "";
      const fieldIsValid = validators.every((check) => check(value));

      newStates[field] = fieldIsValid ? "neutral" : "error";

      if (!fieldIsValid) isValid = false;
    });

    setStates(newStates);

    return isValid;
  };

  return { values, states, handleChange, validateForm };
}
