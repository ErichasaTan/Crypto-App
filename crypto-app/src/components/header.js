import "../styles/Header.css";
function Header() {
  return (
    <nav>
      <div className="personal_logo">CRYPTO CHARTS APP 📈</div>
      <ul className="nav_link--list">
        <li>
          <a
            href="https://github.com/ErichasaTan/Crypto-App.git"
            className="
                nav_link--anchor
                link_hover-effect
                link_hover-effect--black
                "
          >
            Source Code
          </a>
        </li>
        <li>
          <a
            href="https://openai.com/api/"
            className="
                nav_link--anchor
                link_hover-effect
                link_hover-effect--black
                "
          >
            OpenAI
          </a>
        </li>
        <li>
          <a
            href="mailto:etan34@my.bcit.ca"
            className="
                nav_link--anchor
                nav_link--anchor-primary
                "
          >
            Contact Me!
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Header;
