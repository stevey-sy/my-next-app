import Link from "next/link";
import { useRouter } from "next/router";

export default function NavBar() {
  const router = useRouter();
  return (
     <nav>
     <div className="nav-header">
        <div className="nav-header-right">
          <img src="/hamburger.png" />
        </div>
        <div className="nav-header-center">
          <img src="/vercel.svg" />
        </div>
        <div className="nav-header-left">
          <img src="/shopping-cart.png" />
        </div>
      </div>
      <div>
        <Link href="/" legacyBehavior>
          <a className={router.pathname === "/" ? "active" : ""}>Home</a>
        </Link>
        <Link href="/about" legacyBehavior>
          <a className={router.pathname === "/about" ? "active" : ""}>About</a>
        </Link>
        <Link href="/cart" legacyBehavior>
          <a className={router.pathname === "/cart" ? "active" : ""}>Cart</a>
        </Link>
        <Link href="/cart2" legacyBehavior>
          <a className={router.pathname === "/cart2" ? "active" : ""}>Cart2</a>
        </Link>
      </div>
      <style jsx>{`

        .nav-header {
          display: flex;
          position: relative;
          align-items: center;
          padding: 0 16px;
          justify-content: space-between;
          height: 50px;
          box-sizing: border-box;
          line-height: 0;
          width: 100%;
        }

        .nav-header-center {
          flex: 0 0 40%; /* Set the width to 15% */
          display: flex;
          justify-content: center; /* Center horizontally */
          align-items: center;
          color: #212629;
        }

        .nav-header-center img {
          max-width: 100%;
          height: auto;
        }

        .nav-header-left {
          flex: 0 0 10%;
          display: flex;
          justify-content: flex-end;
          align-items: center;
        }

        .nav-header-left img {
          max-width: 100%;
          height: auto;
        }


        .nav-header-right {
          flex: 0 0 5%;
          display: flex;
          justify-content: flex-end;
          align-items: center;
        }

        .nav-header-right img {
          max-width: 100%;
          height: auto;
        }



        nav {
          display: flex;
          gap: 10px;
          flex-direction: column;
          align-items: center;
          padding-top: 20px;
          padding-bottom: 10px;
          box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
            rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
        }
        img {
          max-width: 100px;
          margin-bottom: 5px;
        }
        nav a {
          font-weight: 600;
          font-size: 18px;
        }
        .active {
          color: tomato;
        }
        nav div {
          display: flex;
          gap: 10px;
        }

      `}</style>
    </nav>

   
  );
}