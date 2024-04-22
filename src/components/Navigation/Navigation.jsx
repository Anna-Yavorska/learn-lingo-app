import { Link, MainNav } from './Navigation.styled';

export const Navigation = () => {
  return (
    <MainNav>
      <Link to="/">Home</Link>
      <Link to="/teachers">Teachers</Link>
      <Link to="/favorite">Favorite</Link>
    </MainNav>
  );
};