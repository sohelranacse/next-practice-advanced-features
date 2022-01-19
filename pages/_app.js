import '../styles/globals.css'
import Navbar from "../components/Navbar";

function MyApp({ Component, pageProps }) {
  return (
    <div className="flex flex-wrap w-full h-screen">
      <Navbar />
      <div className="w-10/12 p-4">
        <Component {...pageProps} />
      </div>
    </div>
  )
}

export default MyApp
