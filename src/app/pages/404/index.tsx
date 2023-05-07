import { IoHomeOutline, IoLogoOctocat } from 'react-icons/io5';
import { ReactElement } from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

const NotFound = (): ReactElement<any> => {
  return (
    <main className="error-container">
      <div className="error-content">
        <h1>4<IoLogoOctocat className="ghost-icon"/>4</h1>
        <span>Ops!! Could not find this page, please return to the main page</span>
        <Link to="/">
          <IoHomeOutline className="home-icon"/>
        </Link>
      </div>
    </main>
  );
}

export default NotFound;
