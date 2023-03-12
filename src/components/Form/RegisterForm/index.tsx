import { SubmitHandler, useForm } from 'react-hook-form';
import { useContext } from 'react';
import Input from '../Input';
import { StyledButton } from '../../../styles/button';
import { StyledForm } from '../../../styles/form';
import { IRegisterFormValue } from '../../../providers/@types';
import { UserContext } from '../../../providers/UserContext';


const RegisterForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<IRegisterFormValue>();

  const { registerUser } = useContext(UserContext);

  const renderSubmit: SubmitHandler<IRegisterFormValue> = (data) => {
    registerUser(data)
  }

  return (
    <StyledForm onSubmit={handleSubmit(renderSubmit)}>

      <Input label='Nome' register={register('name')} type='text' error={errors.name} />

      <Input label='E-mail' register={register("email")} type='email' error={errors.email} />

      <Input label='Crie uma Senha' register={register('password')} type='password' error={errors.password} />

      <Input label='Confirme sua Senha' register={register("confirmationPassword")} type='password' error={errors.confirmationPassword} />

      <StyledButton $buttonSize='default' $buttonStyle='gray'> Cadastrar</StyledButton>

    </StyledForm>
  )


};

export default RegisterForm;
