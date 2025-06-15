import { Outlet } from 'react-router';
import Footer from './Footer';

function Layout() {
  return (
    <div>
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
