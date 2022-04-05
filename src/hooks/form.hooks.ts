import { useState, ChangeEvent, useContext, FormEvent } from "react";
import { useDispatch } from "react-redux";
import { userLogIn } from "../actions";

export const useForm = (inputs: IContentInput[]) => {
  const [formInput, setFormInput] = useState<Array<IFormInput>>(
    inputs.map(item => ({
      ...item,
      value: ''
    }))
  );

  const onValueChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormInput(formInput => formInput.map(item => {
      if (item.label.split(' ').join('-') ===  e.target.id) {
        item.value = e.target.value;
      }
      return item;
    }));
  }

  const dispatch = useDispatch();
  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(userLogIn());
    localStorage.setItem('auth', 'true');
  }

  return { submit, formInput, onValueChange }
}

// ? Interface
interface IContentInput {
  label: string;
  type: string;
}

export interface IContentProps {
  inputs: IContentInput[];
  primaryText: string;
  btnText: string;
  spanText: string;
  forgot?: boolean;
}

export interface IFormInput {
  label: string;
  type: string;
  value: string;
}
