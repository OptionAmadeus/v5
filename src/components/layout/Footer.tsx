import React from 'react';
import { Link } from 'react-router-dom';
import { Logo } from '../ui/Logo';

const currentYear = new Date().getFullYear();

const legalLinks = [
  { name: 'Privacy Policy', href: '/privacy' },
  { name: 'Terms of Service', href: '/terms' },
  { name: 'Cookie Policy', href: '/cookies' },
  { name: 'GDPR', href: '/gdpr' }
];

export function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-2">
            <Logo size="sm" />
            <p className="mt-4 text-gray-500 text-sm">
              Self AI empowers investors with artificial intelligence to make smarter, 
              data-driven decisions in their portfolio management journey.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
              Quick Links
            </h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link to="/about" className="text-gray-500 hover:text-gray-900">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-500 hover:text-gray-900">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-gray-500 hover:text-gray-900">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-500 hover:text-gray-900">
                  Blog
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Legal Footer */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {currentYear} Self AI. All rights reserved.
            </p>
            <nav className="flex space-x-4 mt-4 md:mt-0">
              {legalLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className="text-sm text-gray-500 hover:text-gray-900"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
}