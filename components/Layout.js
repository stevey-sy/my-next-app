import NavBar from "./NavBars";

export default function Layout ({children}){
    return (
        <>
            <NavBar />
            <div>{children}</div>
        </>
    );
}