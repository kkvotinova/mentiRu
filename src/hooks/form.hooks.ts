import { useState, ChangeEvent, useContext, FormEvent } from "react";
import { AuthContext } from "../context";

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

  const {setIsAuth} = useContext(AuthContext);
  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsAuth(true);
    localStorage.setItem('auth', 'true');
  }

  return { submit, formInput, onValueChange }
}

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

interface IFormInput {
  label: string;
  type: string;
  value: string;
}
