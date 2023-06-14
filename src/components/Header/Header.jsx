import "./header.scss";
export default function Header() {
  return (
    <div className="header">
      <div className="header__logo">
        <a href="#">PipScript.</a>
      </div>
      <div className="header__nav">
        <ul className="header__nav-item">
          <li className="header__nav-item-link">
            <a href="#">Home</a>
          </li>
          <li className="header__nav-item-link">
            <a href="#">Blog</a>
          </li>
          <li className="header__nav-item-link">
            <a href="#">Project</a>
          </li>
          <li className="header__nav-item-link">
            <a href="#">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
