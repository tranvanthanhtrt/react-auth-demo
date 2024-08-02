import React from 'react';
import { useForm } from 'react-hook-form';
import { Form, Input, Button, Checkbox } from 'antd';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../provider/authProvider';
import LoginStyle from './index.module.css';

const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = data => {
    // Mock login function
    const user = { name: data.username, password: data.password };
    const permissions = ['home'];
    const role = data.username === 'admin' ? 'admin' : 'user'; // Mock role based on username
    login(user);
    navigate("/profile", { replace: true });
  };

  return (
    <div style={{ maxWidth: '400px', margin: 'auto', padding: '50px' }}>
      <h1 className={LoginStyle.title}>Login</h1>
      <Form onFinish={onSubmit}>
        <Form.Item
          label="Username"
          validateStatus={errors.username ? 'error' : ''}
          help={errors.username ? 'Username is required' : ''}
        >
          <Input
            {...register('username', { required: true })}
            placeholder="Username"
          />
        </Form.Item>

        <Form.Item
          label="Password"
          validateStatus={errors.password ? 'error' : ''}
          help={errors.password ? 'Password is required' : ''}
        >
          <Input.Password
            {...register('password', { required: true })}
            placeholder="Password"
          />
        </Form.Item>

        <Form.Item>
          <Checkbox {...register('remember')}>Remember me</Checkbox>
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" block>
            Login
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Login;
