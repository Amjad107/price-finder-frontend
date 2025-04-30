
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Search, ShoppingBag } from "lucide-react";

const Header = () => {
  return (
    <header className="border-b bg-white">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link to="/" className="flex items-center gap-2">
          <ShoppingBag className="h-6 w-6 text-brand-blue" />
          <span className="text-xl font-bold">
            Smart<span className="price-gradient">Price</span>Finder
          </span>
        </Link>
        
        <nav className="hidden md:flex items-center gap-6">
          <Link to="/" className="text-sm font-medium hover:text-brand-blue transition-colors">
            Home
          </Link>
          <Link to="/about" className="text-sm font-medium hover:text-brand-blue transition-colors">
            About Us
          </Link>
          <Link to="/plans" className="text-sm font-medium hover:text-brand-blue transition-colors">
            Plans
          </Link>
          <Link to="/app" className="text-sm font-medium hover:text-brand-blue transition-colors">
            Download Our App
          </Link>
        </nav>
        
        <div className="flex items-center gap-4">
          <Button variant="outline" size="sm" className="hidden md:flex gap-2">
            <Search className="h-4 w-4" />
            <span>Search</span>
          </Button>
          <Link to="/login">
            <Button size="sm">Login</Button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
