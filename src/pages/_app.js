import NavBar from "../../components/NavBars";
import "../styles/globals.css"

export default function App({Component, pageProps}) {
    return (
        <>
            <NavBar />
            <Component {...pageProps} />
        </>

    );
}