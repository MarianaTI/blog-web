import Layout from "@/layout";
import "@/styles/globals.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

export default function App({ Component, pageProps }) {
  return (
    <div>
      <Layout>
        <Component {...pageProps} />
        <ToastContainer
          position="top-center"
          autoClose={2000}
          hideProgressBar
          closeOnClick
          newestOnTop
          style={{fontSize: "14px",fontFamily: "Poppins"}}
        />
      </Layout>
    </div>
  );
}
