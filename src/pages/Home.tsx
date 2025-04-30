
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Search, TrendingUp, DollarSign, ShieldCheck } from "lucide-react";

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="hero-gradient py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                Find the <span className="price-gradient">best prices</span> online instantly
              </h1>
              <p className="text-lg text-gray-600 max-w-md">
                Compare products across hundreds of retailers and save money on every purchase with Smart Price Finder.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/search">
                  <Button size="lg" className="gap-2">
                    <Search size={18} />
                    Start Searching
                  </Button>
                </Link>
                <Link to="/signup">
                  <Button variant="outline" size="lg">
                    Create Free Account
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white shadow-xl rounded-lg p-6 md:p-8 transform rotate-3">
                <div className="bg-gray-100 rounded p-4 mb-4">
                  <h3 className="font-medium text-lg">MacBook Pro M2</h3>
                  <div className="mt-2 flex items-center justify-between">
                    <span className="text-sm font-medium">Best Price:</span>
                    <span className="text-lg font-bold text-brand-blue">$1,899</span>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Amazon</span>
                    <span className="font-medium">$2,099</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Best Buy</span>
                    <span className="font-medium">$1,949</span>
                  </div>
                  <div className="flex justify-between items-center bg-green-50 p-2 rounded">
                    <span className="text-sm">Costco</span>
                    <span className="font-bold text-green-600">$1,899</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">B&H Photo</span>
                    <span className="font-medium">$1,999</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">How It Works</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Smart Price Finder makes shopping smarter and more affordable in just a few simple steps.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-lg p-6 text-center">
              <div className="h-12 w-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="h-6 w-6 text-brand-blue" />
              </div>
              <h3 className="text-xl font-bold mb-2">Search Products</h3>
              <p className="text-gray-600">
                Enter any product you're looking for and we'll find it across hundreds of retailers.
              </p>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6 text-center">
              <div className="h-12 w-12 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-6 w-6 text-brand-indigo" />
              </div>
              <h3 className="text-xl font-bold mb-2">Compare Prices</h3>
              <p className="text-gray-600">
                See all available prices in one place, sortable by price, shipping, and reviews.
              </p>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6 text-center">
              <div className="h-12 w-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <DollarSign className="h-6 w-6 text-brand-purple" />
              </div>
              <h3 className="text-xl font-bold mb-2">Save Money</h3>
              <p className="text-gray-600">
                Purchase at the best price with confidence and save on every shopping trip.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Plans Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Choose Your Plan</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Find a plan that fits your shopping needs, from casual shoppers to power users.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-6 border-b">
                <h3 className="text-xl font-bold mb-2">Free</h3>
                <p className="text-3xl font-bold mb-4">$0<span className="text-sm font-normal text-gray-600">/month</span></p>
                <p className="text-gray-600 mb-4">Perfect for occasional shoppers</p>
                <Button className="w-full" variant="outline">Get Started</Button>
              </div>
              <div className="p-6">
                <ul className="space-y-3">
                  <li className="flex items-center gap-2">
                    <ShieldCheck className="h-5 w-5 text-green-500" />
                    <span className="text-sm">10 price comparisons/day</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <ShieldCheck className="h-5 w-5 text-green-500" />
                    <span className="text-sm">Basic search functionality</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <ShieldCheck className="h-5 w-5 text-green-500" />
                    <span className="text-sm">Email support</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md overflow-hidden border-2 border-brand-blue">
              <div className="p-6 border-b bg-brand-blue text-white">
                <div className="absolute top-0 right-0 transform translate-x-2 -translate-y-2 bg-yellow-500 text-xs font-bold px-3 py-1 rounded-full">POPULAR</div>
                <h3 className="text-xl font-bold mb-2">Premium</h3>
                <p className="text-3xl font-bold mb-4">$9.99<span className="text-sm font-normal">/month</span></p>
                <p className="mb-4">For regular online shoppers</p>
                <Button className="w-full">Sign Up Now</Button>
              </div>
              <div className="p-6">
                <ul className="space-y-3">
                  <li className="flex items-center gap-2">
                    <ShieldCheck className="h-5 w-5 text-green-500" />
                    <span className="text-sm">Unlimited price comparisons</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <ShieldCheck className="h-5 w-5 text-green-500" />
                    <span className="text-sm">Price drop alerts</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <ShieldCheck className="h-5 w-5 text-green-500" />
                    <span className="text-sm">Historical price tracking</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <ShieldCheck className="h-5 w-5 text-green-500" />
                    <span className="text-sm">Priority customer support</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-6 border-b">
                <h3 className="text-xl font-bold mb-2">Business</h3>
                <p className="text-3xl font-bold mb-4">$29.99<span className="text-sm font-normal text-gray-600">/month</span></p>
                <p className="text-gray-600 mb-4">For power users & businesses</p>
                <Button className="w-full" variant="outline">Contact Sales</Button>
              </div>
              <div className="p-6">
                <ul className="space-y-3">
                  <li className="flex items-center gap-2">
                    <ShieldCheck className="h-5 w-5 text-green-500" />
                    <span className="text-sm">Everything in Premium</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <ShieldCheck className="h-5 w-5 text-green-500" />
                    <span className="text-sm">API access</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <ShieldCheck className="h-5 w-5 text-green-500" />
                    <span className="text-sm">Bulk product lookup</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <ShieldCheck className="h-5 w-5 text-green-500" />
                    <span className="text-sm">Dedicated account manager</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
