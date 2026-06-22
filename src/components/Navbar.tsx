import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const location = useLocation();

  return (
    <header className="sticky top-0 w-full h-[72px] bg-background-surface/90 backdrop-blur-md border-b border-border-light z-50">
      <div className="flex justify-between items-center max-w-[1280px] mx-auto px-gutter h-full">
        <Link to="/" className="font-display-lg text-headline-md font-bold text-on-surface tracking-tighter">
          MarTechAdda
        </Link>
        <nav className="hidden md:flex items-center gap-8">
          <Link
            to="/"
            className="font-body-md font-semibold text-on-surface dark:text-on-surface-variant hover:text-primary transition-colors"
          >
            Home
          </Link>
          <Link
            to="/blog"
            className={`font-body-md font-semibold ${
              location.pathname === '/blog'
                ? 'text-primary font-bold border-b-2 border-primary pb-1'
                : 'text-on-surface dark:text-on-surface-variant hover:text-primary transition-colors'
            }`}
          >
            Blog
          </Link>
          <span className="font-body-md font-semibold text-on-surface dark:text-on-surface-variant">
            About
          </span>
          <span className="font-body-md font-semibold text-on-surface dark:text-on-surface-variant">
            Contact
          </span>
        </nav>
        <div className="flex items-center space-x-4">
          <button className="text-on-surface font-semibold px-4 py-2 hidden md:block">Login</button>
          <button className="bg-primary-container text-white px-6 py-2 rounded-full font-semibold hover:opacity-80 transition-opacity active:scale-95 transition-transform">
            Get Started
          </button>
        </div>
      </div>
    </header>
  );
}
