import React from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { useFormik } from "formik";
import Input from "../../../components/Input/Input";
import Button from "../../../components/Button/Button";
import { actionResetLocalStorage } from "../../../store/slices/store.slice";
import { validationSchema } from "./validation";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 3px solid #4d5757;
  box-shadow: 0px 4px 10px rgba(20, 21, 26, 0.4);
  border-radius: 16px;
  width: 280px;
  margin-inline: auto;
  margin-top: 30px;
  margin-bottom: 30px;
  padding-inline: clamp(16px, 4vw, 40px);
`;

const Legend = styled.legend`
  font-family: "Causten", sans-serif;
  font-weight: 600;
  font-size: 16px;
  color: #3c4242;
  margin: 0;
  padding-bottom: 5px;
  padding-top: 10px;
`;

const ShoppingForm = () => {
  const dispatch = useDispatch();
  const formData = useSelector((state) => state.selectorFormData); //* цей рядок відповідав би за те щоб отримати дані зі стору але тут просто використовую функцію для видалення карток з кошика
  const { errors, touched, getFieldProps, handleSubmit } = useFormik({
    initialValues: formData || {
      firstName: "",
      lastName: "",
      age: "",
      address: "",
      phone: "",
    },
    validationSchema,
    onSubmit: (values) => {
      console.log("Дані користувача: ", values);
      alert(
        "Дякую за замовлення! \nМи з вами зв'яжемося в найближчий час \nВсі товари з кошика будуть видалені",
      );
      dispatch(actionResetLocalStorage("productShopping"));
    },
  });

  return (
    <Form onSubmit={handleSubmit}>
      <Legend>Дані користувача для замовлення</Legend>
      <Input
        label="Ім'я користувача"
        name="firstName"
        placeholder="Ім'я користувача"
        isError={touched.firstName && errors.firstName}
        errorMessage={errors.firstName}
        {...getFieldProps("firstName")}
      />
      <Input
        label="Прізвище користувача"
        name="lastName"
        placeholder="Прізвище користувача"
        isError={touched.lastName && errors.lastName}
        errorMessage={errors.lastName}
        {...getFieldProps("lastName")}
      />
      <Input
        label="Вік користувача"
        name="age"
        type="number"
        min="18"
        max="100"
        placeholder="Вік користувача"
        isError={touched.age && errors.age}
        errorMessage={errors.age}
        {...getFieldProps("age")}
      />
      <Input
        label="Адреса доставки"
        name="address"
        placeholder="Адреса доставки"
        isError={touched.address && errors.address}
        errorMessage={errors.address}
        {...getFieldProps("address")}
      />
      <Input
        label="Номер мобільного телефону"
        name="phone"
        type="tel"
        placeholder="380-00-00-0000"
        isError={touched.phone && errors.phone}
        errorMessage={errors.phone}
        {...getFieldProps("phone")}
      />
      <Button
        type="submit"
        $styles="padding: 10px 20px; margin-bottom: 10px; border-radius: 10px; background-color: #328484; color: #fff; border: none; cursor: pointer;"
      >
        Замовити
      </Button>
    </Form>
  );
};

export default ShoppingForm;
