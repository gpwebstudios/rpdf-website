import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router';
import logo from '/public/logo.svg'
import styles from "./navbar.module.scss";

const navData = [
  { linkText: "About Us", href: '/about' },
  { linkText: "Our Work", href: '/Our-Work' },
  { linkText: "Meet the RPD", href: '/Meet-RPD' },
  { linkText: "Contact", href: '#contactForm' },


]

const Navbar = () => {
  const router = useRouter();
  return (
    <nav className={`navbar navbar-expand-lg ${styles.rpdfNav}`}>
      <div className="container">
        <Link href="/">
          <a className={`navbar-brand ${styles.logoLink}`} href="#">
            <Image src={logo} alt="RPDF Logo" width={340} />
          </a>
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#rpdfNavbar" aria-controls="rpdfNavbar" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="rpdfNavbar">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            {navData.map((data, index) => (
              <li className={`nav-item ${index == 3 ? 'pe-2' : ''}`} key={index}>
                <Link href={data.href}>
                  <a className={`${router.pathname === data.href ? "active" : ""} nav-link`}>{data.linkText}</a>
                </Link>
              </li>
            ))}
            <li className="nav-item">
              <a target="_blank" href="https://www.paypal.com/donate/?hosted_button_id=W37M2CD6UA62Y" rel="noreferrer">
                <button className="btn btn-outline-primary" type="submit">Donate</button>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;