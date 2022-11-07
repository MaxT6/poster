import '../styles/globals.css'
import Layout from '../components/Layout'

function MyApp({ Component, pageProps }) {
  return(
    <Layout>
      <Component {...pageProps} /> 
      {/* This will make all pages children of the Layout component */}
    </Layout>
  );
}

export default MyApp
