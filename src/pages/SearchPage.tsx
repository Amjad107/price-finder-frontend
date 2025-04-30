
import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabaseClient";
import { useToast } from "@/components/ui/use-toast";
import { useNavigate } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, ShoppingBag, Tag, Clock, Star, DollarSign, Filter, ArrowDown, TrendingDown } from "lucide-react";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";

interface Product {
  id: number;
  name: string;
  price: number;
  store: string;
  rating: number;
  image: string;
  discount?: number;
}

const demoProducts: Product[] = [
  {
    id: 1,
    name: "Apple iPhone 14 Pro - 128GB",
    price: 999,
    store: "Apple Store",
    rating: 4.8,
    image: "/placeholder.svg",
  },
  {
    id: 2,
    name: "Apple iPhone 14 Pro - 128GB",
    price: 979,
    store: "Amazon",
    rating: 4.7,
    image: "/placeholder.svg",
    discount: 20,
  },
  {
    id: 3,
    name: "Apple iPhone 14 Pro - 128GB",
    price: 989,
    store: "Best Buy",
    rating: 4.6,
    image: "/placeholder.svg",
    discount: 10,
  },
  {
    id: 4,
    name: "Samsung Galaxy S23 Ultra - 256GB",
    price: 1199,
    store: "Samsung",
    rating: 4.9,
    image: "/placeholder.svg",
  },
  {
    id: 5,
    name: "Samsung Galaxy S23 Ultra - 256GB",
    price: 1149,
    store: "Amazon",
    rating: 4.7,
    image: "/placeholder.svg",
    discount: 50,
  },
  {
    id: 6,
    name: "Google Pixel 7 Pro - 128GB",
    price: 899,
    store: "Google Store",
    rating: 4.6,
    image: "/placeholder.svg",
  },
];

const recentSearches = ["iPhone 14 Pro", "Samsung Galaxy S23", "Airpods Pro", "Macbook Air M2", "iPad Pro"];

const SearchPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [results, setResults] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();

  useEffect(() => {
    const checkSession = async () => {
      const { data } = await supabase.auth.getSession();
      if (!data.session) {
        toast({
          title: "Authentication required",
          description: "Please log in to access the search feature.",
          variant: "destructive",
        });
        navigate("/login");
      } else {
        setIsLoggedIn(true);
      }
    };

    checkSession();
  }, [navigate, toast]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulating API call
    setTimeout(() => {
      const filteredProducts = demoProducts.filter(product => 
        product.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
      
      setResults(filteredProducts);
      setIsLoading(false);
      
      if (filteredProducts.length === 0) {
        toast({
          title: "No results found",
          description: "Try a different search term.",
        });
      }
    }, 800);
  };

  if (!isLoggedIn) {
    return null; // Don't render anything while checking auth
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Search Header */}
      <div className="search-gradient text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center max-w-2xl mx-auto">
            <h1 className="text-2xl md:text-3xl font-bold mb-6 text-center">
              Find the Best Price for Any Product
            </h1>
            <form onSubmit={handleSearch} className="w-full">
              <div className="flex gap-2">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                  <Input
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search for products..."
                    className="pl-10 bg-white border-0 w-full"
                  />
                </div>
                <Button type="submit" disabled={isLoading}>
                  {isLoading ? "Searching..." : "Search"}
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Recent Searches */}
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center gap-2 mb-2">
          <Clock size={16} className="text-gray-500" />
          <h2 className="text-sm font-medium text-gray-500">Recent Searches</h2>
        </div>
        <div className="flex flex-wrap gap-2">
          {recentSearches.map((search, index) => (
            <button
              key={index}
              onClick={() => setSearchQuery(search)}
              className="bg-white hover:bg-gray-100 text-sm px-3 py-1 rounded-full border transition-colors"
            >
              {search}
            </button>
          ))}
        </div>
      </div>

      {/* Results Section */}
      {results.length > 0 && (
        <div className="container mx-auto px-4 py-6">
          <div className="bg-white rounded-lg shadow-sm p-4 mb-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <h2 className="font-bold text-lg">
                  Results for "{searchQuery}"
                </h2>
                <p className="text-sm text-gray-600">
                  {results.length} results found across {new Set(results.map(r => r.store)).size} stores
                </p>
              </div>
              
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-600">Sort by:</span>
                <Button variant="outline" size="sm" className="flex items-center gap-2">
                  <DollarSign size={16} />
                  Price
                  <ArrowDown size={14} />
                </Button>
                <Button variant="ghost" size="sm">
                  <Star size={16} />
                  Rating
                </Button>
                <Button variant="ghost" size="icon" size-sm>
                  <Filter size={16} />
                </Button>
              </div>
            </div>
          </div>
          
          <Tabs defaultValue="all">
            <TabsList className="mb-4">
              <TabsTrigger value="all">All Results</TabsTrigger>
              <TabsTrigger value="best-price">Best Price</TabsTrigger>
              <TabsTrigger value="highest-rated">Highest Rated</TabsTrigger>
            </TabsList>
            
            <TabsContent value="all" className="space-y-4">
              {results.map((product) => (
                <div key={product.id} className="bg-white rounded-lg shadow-sm p-4 flex gap-4">
                  <div className="flex-shrink-0 w-20 h-20 bg-gray-100 rounded flex items-center justify-center">
                    <ShoppingBag className="text-gray-400" size={24} />
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex justify-between">
                      <h3 className="font-medium">{product.name}</h3>
                      <div className="text-right">
                        {product.discount && (
                          <div className="flex items-center gap-1 text-green-600 text-sm font-medium">
                            <TrendingDown size={14} />
                            <span>${product.discount} off</span>
                          </div>
                        )}
                        <span className="text-lg font-bold text-brand-blue">
                          ${product.price}
                        </span>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-4 mt-2">
                      <span className="text-sm flex items-center gap-1">
                        <Tag size={14} className="text-gray-500" />
                        {product.store}
                      </span>
                      <span className="text-sm flex items-center gap-1">
                        <Star size={14} className="text-yellow-500" fill="currentColor" />
                        {product.rating}
                      </span>
                    </div>
                    
                    <div className="flex justify-between items-center mt-2 pt-2 border-t">
                      <div className="text-xs text-gray-500">
                        Updated 6 hours ago
                      </div>
                      <Button variant="outline" size="sm">View Deal</Button>
                    </div>
                  </div>
                </div>
              ))}
            </TabsContent>
            
            <TabsContent value="best-price">
              {results.length > 0 && (
                <div className="bg-white rounded-lg shadow-sm p-4 flex gap-4 border-2 border-green-500">
                  <div className="flex-shrink-0 w-20 h-20 bg-gray-100 rounded flex items-center justify-center">
                    <ShoppingBag className="text-gray-400" size={24} />
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex justify-between">
                      <div>
                        <div className="inline-block px-2 py-1 rounded bg-green-100 text-green-800 text-xs font-medium mb-2">
                          BEST PRICE
                        </div>
                        <h3 className="font-medium">{results.sort((a, b) => a.price - b.price)[0].name}</h3>
                      </div>
                      <div className="text-right">
                        {results.sort((a, b) => a.price - b.price)[0].discount && (
                          <div className="flex items-center gap-1 text-green-600 text-sm font-medium">
                            <TrendingDown size={14} />
                            <span>${results.sort((a, b) => a.price - b.price)[0].discount} off</span>
                          </div>
                        )}
                        <span className="text-lg font-bold text-brand-blue">
                          ${results.sort((a, b) => a.price - b.price)[0].price}
                        </span>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-4 mt-2">
                      <span className="text-sm flex items-center gap-1">
                        <Tag size={14} className="text-gray-500" />
                        {results.sort((a, b) => a.price - b.price)[0].store}
                      </span>
                      <span className="text-sm flex items-center gap-1">
                        <Star size={14} className="text-yellow-500" fill="currentColor" />
                        {results.sort((a, b) => a.price - b.price)[0].rating}
                      </span>
                    </div>
                    
                    <div className="flex justify-between items-center mt-2 pt-2 border-t">
                      <div className="text-xs text-gray-500">
                        You save ${results.reduce((max, product) => Math.max(max, product.price), 0) - results.sort((a, b) => a.price - b.price)[0].price} 
                        compared to the highest price
                      </div>
                      <Button size="sm">View Deal</Button>
                    </div>
                  </div>
                </div>
              )}
            </TabsContent>
            
            <TabsContent value="highest-rated">
              {results.length > 0 && (
                <div className="bg-white rounded-lg shadow-sm p-4 flex gap-4">
                  <div className="flex-shrink-0 w-20 h-20 bg-gray-100 rounded flex items-center justify-center">
                    <ShoppingBag className="text-gray-400" size={24} />
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex justify-between">
                      <div>
                        <div className="inline-block px-2 py-1 rounded bg-yellow-100 text-yellow-800 text-xs font-medium mb-2">
                          HIGHEST RATED
                        </div>
                        <h3 className="font-medium">{results.sort((a, b) => b.rating - a.rating)[0].name}</h3>
                      </div>
                      <div className="text-right">
                        <span className="text-lg font-bold text-brand-blue">
                          ${results.sort((a, b) => b.rating - a.rating)[0].price}
                        </span>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-4 mt-2">
                      <span className="text-sm flex items-center gap-1">
                        <Tag size={14} className="text-gray-500" />
                        {results.sort((a, b) => b.rating - a.rating)[0].store}
                      </span>
                      <span className="text-sm flex items-center gap-1">
                        <Star size={14} className="text-yellow-500" fill="currentColor" />
                        {results.sort((a, b) => b.rating - a.rating)[0].rating}
                      </span>
                    </div>
                    
                    <div className="flex justify-between items-center mt-2 pt-2 border-t">
                      <div className="text-xs text-gray-500">
                        Highest customer satisfaction rating
                      </div>
                      <Button variant="outline" size="sm">View Deal</Button>
                    </div>
                  </div>
                </div>
              )}
            </TabsContent>
          </Tabs>
        </div>
      )}
      
      {/* Empty State */}
      {searchQuery === "" && results.length === 0 && (
        <div className="container mx-auto px-4 py-16">
          <div className="bg-white rounded-lg shadow-sm p-8 text-center max-w-md mx-auto">
            <div className="mx-auto w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
              <Search className="h-8 w-8 text-brand-blue" />
            </div>
            <h2 className="text-xl font-bold mb-2">Start your price search</h2>
            <p className="text-gray-600 mb-6">
              Enter a product name or model number to find the best prices across hundreds of retailers.
            </p>
            <div className="space-y-2 text-sm text-gray-600">
              <p>Try searching for:</p>
              <div className="flex flex-wrap justify-center gap-2">
                <button 
                  onClick={() => setSearchQuery("iPhone 14")}
                  className="bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded-full transition-colors"
                >
                  iPhone 14
                </button>
                <button 
                  onClick={() => setSearchQuery("Samsung TV 4K")}
                  className="bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded-full transition-colors"
                >
                  Samsung TV 4K
                </button>
                <button 
                  onClick={() => setSearchQuery("PlayStation 5")}
                  className="bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded-full transition-colors"
                >
                  PlayStation 5
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchPage;
