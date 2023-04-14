import { useState } from 'react';
import Input from './form-fields/Input';

function App() {
  const [values, setValues] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const formFields = [
    {
      id: 1,
      name: 'username',
      type: 'text',
      placeholder: 'Username',
      label: 'Username',
      errorMessage:
        "Username should be 3-16 characters and shouldn't include any special character!",
      pattern: '^[A-Za-z0-9]{3,16}$',
      autoComplete: 'off',
    },
    {
      id: 2,
      name: 'email',
      type: 'email',
      placeholder: 'Email',
      label: 'Email',
      errorMessage: 'It should be valid email address!',
      autoComplete: 'off',
    },
    {
      name: 'password',
      type: 'password',
      placeholder: 'Password',
      label: 'Password',
      errorMessage:
        'Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!',
      pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
      autoComplete: 'off',
    },
    {
      id: 4,
      name: 'confirmPassword',
      type: 'password',
      placeholder: 'Confirm Password',
      label: 'Confirm Password',
      errorMessage: "Password don't match!",
      pattern: values.password,
      autoComplete: 'off',
    },
    {
      id: 5,
      name: 'url',
      type: 'text',
      placeholder: 'Url',
      label: 'Url',
      errorMessage: 'Url is not valid',
      pattern: `^((http|https)://)[-a-zA-Z0-9@:%._\\+~#?&//=]{2,256}\\.[a-z]{2,6}\\b([-a-zA-Z0-9@:%._\\+~#?&//=]*)$`,
      autoComplete: 'off',
    },
  ];

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    e.target.reset();
    setValues('');
  };
  return (
    <form onSubmit={handleSubmit}>
      {formFields.map((field) => (
        <Input
          key={field.id}
          {...field}
          onChange={onChange}
          value={values[field.name]}
        />
      ))}

      <button className="button">Submit</button>
    </form>
  );
}

export default App;
