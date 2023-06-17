import { useForm } from "react-hook-form";
import { Text } from "../components/text";
import { Email } from "../components/email";
import { Telephone } from "../components/telephone";
import { Title } from "../components/title";
import { RadioButton } from "../components/radioButton";

export const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
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
        register={register}
      />
      <Text
        placeholder='Last name'
        required={true}
        maxLength={100}
        register={register}
      />
      <Email
        placeholder='Email'
        required={true}
        pattern='/^\S+@\S+$/i'
        register={register}
      />
      <Telephone
        placeholder='Mobile number'
        required={true}
        minLength={6}
        maxLength={12}
        register={register}
      />
      <Title name='Title' required={true} register={register} />

      <RadioButton
        name='Developer'
        required={true}
        value='Yes'
        register={register}
      />
      <RadioButton
        name='Developer'
        required={true}
        value='No'
        register={register}
      />

      <input type='submit' />
    </form>
  );
};
