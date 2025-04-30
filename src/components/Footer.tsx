
import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter, Linkedin, Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-4">
          <div>
            <h3 className="text-lg font-bold mb-4">Smart Price Finder</h3>
            <p className="text-sm text-gray-600 mb-6">
              Find the best prices online. Compare products across multiple retailers 
              and save money on your purchases.
            </p>
            <div className="flex gap-4">
              <a href="#" aria-label="Facebook" className="text-gray-600 hover:text-brand-blue transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" aria-label="Instagram" className="text-gray-600 hover:text-brand-blue transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" aria-label="Twitter" className="text-gray-600 hover:text-brand-blue transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" aria-label="LinkedIn" className="text-gray-600 hover:text-brand-blue transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-sm font-bold uppercase mb-4">Company</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-sm text-gray-600 hover:text-brand-blue transition-colors">About Us</Link></li>
              <li><Link to="/careers" className="text-sm text-gray-600 hover:text-brand-blue transition-colors">Careers</Link></li>
              <li><Link to="/blog" className="text-sm text-gray-600 hover:text-brand-blue transition-colors">Blog</Link></li>
              <li><Link to="/press" className="text-sm text-gray-600 hover:text-brand-blue transition-colors">Press</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-bold uppercase mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><Link to="/plans" className="text-sm text-gray-600 hover:text-brand-blue transition-colors">Plans</Link></li>
              <li><Link to="/faq" className="text-sm text-gray-600 hover:text-brand-blue transition-colors">FAQ</Link></li>
              <li><Link to="/support" className="text-sm text-gray-600 hover:text-brand-blue transition-colors">Support</Link></li>
              <li><Link to="/app" className="text-sm text-gray-600 hover:text-brand-blue transition-colors">Download App</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-bold uppercase mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <Mail size={16} className="text-gray-600" />
                <a href="mailto:info@smartpricefinder.com" className="text-sm text-gray-600 hover:text-brand-blue transition-colors">
                  info@smartpricefinder.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} className="text-gray-600" />
                <a href="tel:+1234567890" className="text-sm text-gray-600 hover:text-brand-blue transition-colors">
                  (123) 456-7890
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-4 border-t border-gray-200">
          <p className="text-sm text-gray-600 text-center">
            © {new Date().getFullYear()} Smart Price Finder. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
