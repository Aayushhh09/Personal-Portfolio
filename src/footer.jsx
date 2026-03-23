export default function Footer() {
  return (
    <footer className="bg-black text-white py-10 px-6">
      <div className="max-w-6xl mx-auto text-center">
        
        {/* Name / Branding */}
        <h2 className="text-2xl font-bold mb-2">Aayush Ambastha</h2>
        <p className="text-gray-400 mb-6">
          Building modern web experiences 🚀
        </p>

        {/* Social Links */}
        <div className="flex justify-center gap-6 mb-6">
          
          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/aayushambastha/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition duration-300"
          >
            LinkedIn
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/Aayushhh09"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400 transition duration-300"
          >
            GitHub
          </a>

        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 my-4"></div>

        {/* Copyright */}
        <p className="text-gray-500 text-sm">
          © {new Date().getFullYear()} Aayush Ambastha. All rights reserved.
        </p>
      </div>
    </footer>
  );
}