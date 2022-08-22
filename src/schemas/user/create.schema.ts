import * as yup from "yup";

const createUserSchema = yup.object().shape({
  name: yup.string().required(),
  function: yup.string().required(),
  contact: yup.object().shape({
    contact: yup.string().required(),
    type: yup.string().required(),
  })
});

const userUpdateSchema = yup.object().shape({
  name: yup.string().optional(),
  function: yup.string().optional(),
});

const serializedCreateUserSchema = yup.object().shape({
  id: yup.string().uuid().required(),
  name: yup.string().required(),
  function: yup.string().required(),
  contacts: yup.array().of(
    yup.object().shape({
      contact: yup.string().required(),
      type: yup.string().required(),
    })
  )
});

export { createUserSchema, serializedCreateUserSchema, userUpdateSchema  }