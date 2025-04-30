
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Search, ShoppingBag, LogOut } from "lucide-react";
import { supabase } from "@/lib/supabaseClient";

const Header = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Check for user session on component mount
    const checkUser = async () => {
      const { data } = await supabase.auth.getSession();
      setUser(data.session?.user || null);
    };
    
    checkUser();

    // Subscribe to auth changes
    const { data: authListener } = supabase.auth.onAuthStateChange(
      (event, session) => {
        setUser(session?.user || null);
      }
    );

    // Cleanup subscription
    return () => {
      authListener?.subscription.unsubscribe();
    };
  }, []);

  const handleSignOut = async () => {
    await supabase.auth.signOut();
  };

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
          
          {user ? (
            <Button onClick={handleSignOut} size="sm" variant="outline" className="flex gap-2">
              <LogOut className="h-4 w-4" />
              <span>Logout</span>
            </Button>
          ) : (
            <Link to="/login">
              <Button size="sm">Login</Button>
            </Link>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
