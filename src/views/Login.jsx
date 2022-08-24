import { useForm } from 'react-hook-form';

export const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data, e) => {
    console.log('onSubmit');
    console.log(data, e);
  };

  const onError = (errors, e) => {
    console.log('onError');
    console.log(errors, e);
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
              pattern: {
                value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
                message: '請輸入 Email 格式',
              },
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
              minLength: { value: 8, message: '密碼至少8碼' },
            })}
          />
        </label>
        {errors.password?.message}
      </div>
      <button
        onClick={handleSubmit(onSubmit, onError)}
        disabled={Object.keys(errors).length > 0}
      >
        登入
      </button>
    </div>
  );
};
