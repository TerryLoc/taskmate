import Robin from '../assets/BMW.png';

export const Header = () => {
  return (
    <header>
      <img className="logo" src={Robin} alt="" />
      <a href="/">Home</a>
    </header>
  );
};
