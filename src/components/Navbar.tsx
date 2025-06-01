import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo Image */}
        <div className="flex items-center space-x-2">
          <Image src="/img_1.jpg" alt="Logo" width={40} height={40} />
          <span className="font-bold text-xl">&nbsp; MyWebsite</span>
        </div>

        {/* Nav Links */}
        <div className="space-x-4">
          <a href="#about" className="hover:underline">
            About &nbsp;
          </a>
          <a href="#services" className="hover:underline">
            Services &nbsp;
          </a>
          <a href="#contact" className="hover:underline">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
