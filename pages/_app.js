import { Global } from '@emotion/react';
import { useCallback, useEffect, useState } from 'react';
import CookiesModal from '../components/cookies/CookiesModal';
import Layout from '../components/Layout';
import '../styles/globals.css';
import { getLocalStorage, setLocalStorage } from '../util/localStorage';

const cookie = (isOpen) => css`
  height: ${isOpen ? '100px' : 0};
  overflow: hidden;
  transition: all 200ms ease-in;
`;
function MyApp({ Component, pageProps }) {
  const [user, setUser] = useState();
  const [areCookiesAccepted, setAreCookiesAccepted] = useState(false);
  const [dietCounter, setDietCounter] = useState(0);

  const refreshUserProfile = useCallback(async () => {
    const profileResponse = await fetch('/api/profile');

    const profileResponseBody = await profileResponse.json();

    if (!('errors' in profileResponseBody)) {
      setUser(profileResponseBody.user);
    } else {
      profileResponseBody.errors.forEach((error) => console.log(error.message));
      setUser(undefined);
    }
  }, []);

  useEffect(() => {
    // 1. we need to check if there is already a value for the cookieBanner

    refreshUserProfile().catch(() => console.log('fetch api failed'));
  }, [refreshUserProfile]);
  return (
    <div>
      {/* <CookiesModal /> */}
      <Layout user={user}>
        {/*
          The "Component" component refers to
          the current page that is being rendered
        */}
        <Component {...pageProps} refreshUserProfile={refreshUserProfile} />
      </Layout>
    </div>
  );
}

export default MyApp;
