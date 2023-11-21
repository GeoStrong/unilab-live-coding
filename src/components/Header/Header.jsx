import './Header.scss';

const Header = ({ timer, test }) => {
  return (
    <header className="header">
      <div className="header__wrapper">
        <p className="header__element">{timer}</p>
      </div>
      <h1 className="header__title">Color Quiz</h1>
      {test < 10 && (
        <div className="header__wrapper">
          <p className="header__element">{test}/10</p>
        </div>
      )}
    </header>
  );
};
export default Header;
