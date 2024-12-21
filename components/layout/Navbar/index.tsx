import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router';
import logo from '/public/logo.svg'
import styles from "./navbar.module.scss";

const navData = [
  { linkText: "About Us", href: '#', subMenu: [
    { linkText: "About", href: '/about' },
    { linkText: "Our Work", href: '/Our-Work' },
    { linkText: "Press", href: '/press' },
    { linkText: "Contact", href: '#contactForm' }
  ]
},
{ linkText: "Meet the RPD", href: '/Meet-RPD' },
{ linkText: "Donors", href: '/donors' },
{ linkText: "Fallen Officers", href: '/fallen-officers' },
{ linkText: "Honor the Badge", href: '/htb' },
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
              data.subMenu ? (
                <li className="nav-item dropdown" key={index}>
                  <a className={`nav-link dropdown-toggle ${router.pathname === data.href ? "active" : ""}`} href={data.href} id={`navbarDropdown${index}`} role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    {data.linkText}
                  </a>
                  <ul className="dropdown-menu" aria-labelledby={`navbarDropdown${index}`}>
                    {data.subMenu.map((subData, subIndex) => (
                      <li key={subIndex}>
                        <Link href={subData.href}>
                          <a className={`dropdown-item ${router.pathname === subData.href ? "active" : ""}`}>{subData.linkText}</a>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>
              ) : (
                <li className="nav-item" key={index}>
                  <Link href={data.href}>
                    <a className={`nav-link ${router.pathname === data.href ? "active" : ""}`}>
                      {data.linkText}
                    </a>
                  </Link>
                </li>
              )
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
};

export default Navbar;