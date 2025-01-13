// components/Loader.jsx
import Image from "next/image";
const Loader = () => {
    return (
      <div className="fixed inset-0 bg-white flex items-center justify-center z-50">
        <div className="animate-bounce">
          <Image
            src="/images/logo.png" 
            alt="Logo"
            width={600} height={600}
            className="w-48 h-48"
          />
        </div>
      </div>
    );
  };
  
  export default Loader;
  