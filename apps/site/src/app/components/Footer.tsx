import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <p>
            &copy; {new Date().getFullYear()} Your Name. All rights reserved.
          </p>
        </div>
        <nav className="mb-4 md:mb-0">
          <ul className="flex space-x-4">
            <li>
              <Link href="/" className="hover:text-gray-300">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-gray-300">
                About
              </Link>
            </li>
            <li>
              <Link href="/articles" className="hover:text-gray-300">
                Articles
              </Link>
            </li>
            <li>
              <Link href="/projects" className="hover:text-gray-300">
                Projects
              </Link>
            </li>
          </ul>
        </nav>
        <div>
          <a
            href="https://twitter.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-300 mr-4"
          >
            Twitter
          </a>
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-300 mr-4"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-300"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
