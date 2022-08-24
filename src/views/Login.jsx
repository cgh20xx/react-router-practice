import { useForm } from 'react-hook-form';

export const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div>
      <h1>這是登入頁</h1>
      <div>
        <label>
          帳號:
          <input
            {...register('email', {
              required: { value: true, message: '帳號未填' },
            })}
          />
          {errors.email?.message}
        </label>
      </div>
      <div>
        <label>
          密碼:
          <input
            type="password"
            {...register('password', {
              required: { value: true, message: '密碼未填' },
            })}
          />
        </label>
        {errors.password?.message}
      </div>
      <button onClick={handleSubmit(onSubmit)}>登入</button>
    </div>
  );
};
