import { Github, Linkedin, Mail, Heart } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-lg font-bold mb-4">Isha.</h3>
            <p className="text-gray-400">Software Engineer & Frontend Developer</p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="/" className="hover:text-purple-400 transition">
                  Home
                </a>
              </li>
              <li>
                <a href="/projects" className="hover:text-purple-400 transition">
                  Projects
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-purple-400 transition">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Social</h4>
            <div className="flex gap-3">
              <a href="#" className="text-gray-400 hover:text-purple-400 transition">
                <Github size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-purple-400 transition">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-purple-400 transition">
                <Mail size={20} />
              </a>
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <p className="text-gray-400 text-sm">email@example.com</p>
            <p className="text-gray-400 text-sm">+1 (555) 123-4567</p>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 flex items-center gap-1">
            Made with <Heart size={16} className="text-red-500" /> by Isha Moradiya
          </p>
          <p className="text-gray-400 text-sm">&copy; 2025 Isha Moradiya. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
