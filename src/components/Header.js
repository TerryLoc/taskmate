import Logo from '../assets/icontask.jpeg';
import './Header.css';

export const Header = () => {
  return (
    <header>
      <img src={Logo} alt="" />
      <a href="/">Home</a>
    </header>
  );
};
