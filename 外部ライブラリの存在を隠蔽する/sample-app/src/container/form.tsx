import { useForm } from "react-hook-form";
import { Text } from "../components/text";
import { Email } from "../components/email";
import { Telephone } from "../components/telephone";
import { Title } from "../components/title";
import { RadioButton } from "../components/radioButton";
import { useFormHandler } from "@/hooks/useFormHandler";

export const Form = () => {
  const { register, handleSubmit, errors } = useFormHandler();
  const onSubmit = (data: any) => {
    window.alert(JSON.stringify(data));
  };
  console.log(errors);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Text
        placeholder='First name'
        required={true}
        max={2}
        min={1}
        maxLength={80}
      />
      <Text placeholder='Last name' required={true} maxLength={100} />
      <Email placeholder='Email' required={true} pattern={/^\S+@\S+$/i} />
      <Telephone
        placeholder='Mobile number'
        required={true}
        minLength={6}
        maxLength={12}
      />
      <Title name='Title' required={true} />

      <RadioButton name='Developer' required={true} value='Yes' />
      <RadioButton name='Developer' required={true} value='No' />

      <input type='submit' />
    </form>
  );
};
