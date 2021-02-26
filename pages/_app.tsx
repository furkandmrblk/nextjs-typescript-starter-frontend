import type { AppProps } from 'next/app';
import GlobalStyle from '../theme/GlobalStyle';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      {/* <GlobalFontStyle /> */}
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
