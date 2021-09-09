import { Button, Form, Input } from 'antd';
import React from 'react';
import { useState } from 'react';
import { useActions } from '../hooks/useActions';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { rules } from '../utils/rules';

const LoginForm: React.FC = () => {
  const { error, isLoading } = useTypedSelector(state => state.auth);
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useActions();

  const submit = () => {
    login(userName, password);
  };

  return (
    <Form onFinish={submit}>
      {error && <div style={{ color: 'red' }}>{error}</div>}
      <Form.Item
        label="Имя пользователя"
        name="username"
        rules={[rules.required('Пожалуйста введите имя пользователя')]}
      >
        <Input value={userName} onChange={e => setUserName(e.target.value)} />
      </Form.Item>
      <Form.Item
        label="пароль"
        name="password"
        rules={[rules.required('Пожалуйста введите пароль')]}
      >
        <Input.Password
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit" loading={isLoading}>
          Войти
        </Button>
      </Form.Item>
    </Form>
  );
};

export default LoginForm;
