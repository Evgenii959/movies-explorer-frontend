import { useState } from "react";

function useFormAndValidation() {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState(true);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setValues({ ...values, [name]: value });
    setErrors({ ...errors, [name]: e.target.validationMessage });
    setIsValid(e.target.closest("form").checkValidity());

    if (name === 'name') {
      const nameRegex = /^[A-Za-zА-Яа-яЁё\s-]*$/;
      if (!nameRegex.test(value)) {
        setErrors({ ...errors, [name]: 'поле Имя должно содержать только латиницу, кириллицу, пробел или дефис' });
        setIsValid(false)
      }
    }
  };

  return {
    values,
    handleChange,
    errors,
    isValid,
    setValues,
    setIsValid
  };
}

export default useFormAndValidation;
