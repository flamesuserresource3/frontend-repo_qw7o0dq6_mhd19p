import { Github, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contact" className="border-t border-black/5 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <p className="text-sm font-medium text-gray-900">Tenant Pulse</p>
            <p className="text-sm text-gray-500">Multi-tenant HRMS platform</p>
          </div>
          <div className="flex items-center gap-4 text-gray-600">
            <a href="#" aria-label="GitHub" className="hover:text-gray-900"><Github size={18} /></a>
            <a href="#" aria-label="LinkedIn" className="hover:text-gray-900"><Linkedin size={18} /></a>
          </div>
        </div>
        <p className="mt-6 text-xs text-gray-500 text-center md:text-left">© {new Date().getFullYear()} Tenant Pulse. All rights reserved.</p>
      </div>
    </footer>
  );
}
