import { useState } from 'react';
import Head from 'next/head';
import { RegisterResponseBody } from './api/register';
import { useRouter } from 'next/router';

type Props = {
  refreshUserProfile: () => Promise<void>;
};

export default function Register(props: Props) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState<
    {
      message: string;
    }[]
  >([]);

  const router = useRouter();

  async function registerHandler() {
    const registerResponse = await fetch('/api/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    });

    const registerResponseBody: RegisterResponseBody =
      await registerResponse.json();
    console.log(registerResponseBody);

    if ('errors' in registerResponseBody) {
      setErrors(registerResponseBody.errors);
      return;
    }
    localStorage.setItem('user', JSON.stringify(registerResponseBody));
    const returnTo = router.query.returnTo;

    if (
      returnTo &&
      !Array.isArray(returnTo) &&
      // Security: Validate returnTo parameter against valid path
      // (because this is untrusted user input)
      /^\/[a-zA-Z0-9-?=/]*$/.test(returnTo)
    ) {
      await router.push(returnTo);
    } else {
      // redirect user to user profile
      // if you want to use userProfile with username redirect to /users/username
      // await router.push(`/users/${loginResponseBody.user.id}`);
      // await router.push(`/`);
      await props.refreshUserProfile();
      await router.push(`/`);
    }
  }

  return (
    <div>
      <Head>
        <title>Register</title>
        <meta name="description" content="Register a new user" />
      </Head>
      <main
        className="my-4"
        style={{ minHeight: '500px', textAlign: 'center' }}
      >
        <h1>Register</h1>
        <div className="my-5">
          <label>
            username:{' '}
            <input
              value={username}
              onChange={(event) => {
                setUsername(event.currentTarget.value);
              }}
            />
          </label>

          <label>
            password:{' '}
            <input
              value={password}
              onChange={(event) => {
                setPassword(event.currentTarget.value);
              }}
            />
          </label>
          <button onClick={() => registerHandler()}>Register</button>

          {errors.map((error) => (
            <span key={`error${error.message}`}>{error.message}</span>
          ))}
        </div>
      </main>
    </div>
  );
}
