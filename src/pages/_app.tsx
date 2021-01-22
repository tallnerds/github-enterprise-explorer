import '@/styles/global.css';
import Head from '@/components/Head';
import Foot from '@/components/Foot';

export default function MyApp({ Component, pageProps }) {
  return (
    <div className="min-h-screen bg-gray-100">
      <Head />
      <Component {...pageProps} />
      <Foot />
    </div>
  );
}
