// src/components/Footer.jsx

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6 mt-10 h-36">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
     
        <div className="text-xl font-bold text-red-500">🍽️ Foodie Finder</div>

      
        <div className="flex flex-wrap justify-center gap-4 text-sm">
          <a href="/" className="hover:underline">Home</a>
          <a href="/about" className="hover:underline">About</a>
          <a href="/random" className="hover:underline">Random Meal</a>
          <a href="/search" className="hover:underline">Search</a>
        </div>

      
        <div className="text-xs text-gray-400">
          &copy; {new Date().getFullYear()} Foodie Finder. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
