import Link from 'next/link';
import Image from 'next/image';

const Sidebar = () => {
  const navItems = [
    { name: 'Explore', href: '/' },
    { name: 'Education', href: '/education' },
    { name: 'Work Experience', href: '/experience' },
    { name: 'Projects', href: '/projects' },
    { name: 'Blog', href: '/blog' },
  ];

  const socialLinks = [
    { name: 'Email', href: 'mailto:your.email@example.com', icon: '↗' },
    { name: 'LinkedIn', href: 'https://www.linkedin.com/in/kith14/', icon: '↗' },
    { name: 'GitHub', href: 'https://github.com/kith420', icon: '↗' },
  ];

  return (
    <div className="fixed left-0 top-0 h-screen w-64 border-r border-gray-200 p-8">
      <div className="mb-8">
        <div className="relative w-32 h-32 mb-4 rounded-full overflow-hidden">
          <Image
            src="/images/kith.jpg"
            alt="Profile picture"
            fill
            className="object-cover"
            priority
          />
        </div>
        <h1 className="text-xl font-bold text-gray-900">Nathan Keith Poernama</h1>
        <p className="text-gray-600">Full-stack Developer</p>
      </div>

      <nav className="mb-8">
        <ul className="space-y-4">
          {navItems.map((item) => (
            <li key={item.name}>
              <Link 
                href={item.href}
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                {item.name}
              </Link>
            </li>
          ))}
          <li>
            <Link 
              href="/resume"
              className="inline-block px-4 py-2 bg-gray-100 text-gray-900 rounded-full text-sm hover:bg-gray-200 transition-colors"
            >
              Resume
            </Link>
          </li>
        </ul>
      </nav>

      <div>
        <h2 className="text-sm font-semibold mb-4 text-gray-900">SOCIAL</h2>
        <ul className="space-y-2">
          {socialLinks.map((link) => (
            <li key={link.name}>
              <a 
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-900 transition-colors flex items-center gap-1"
              >
                {link.name}
                <span>{link.icon}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar; 