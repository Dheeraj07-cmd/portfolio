import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./ui/SocialIcons"; 

export default function Footer() {
    return (
        <footer className="bg-[#030712] border-t border-white/5 py-10 mt-auto">
            <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">

                <p className="text-gray-500 text-sm">
                    © {new Date().getFullYear()} Dheeraj Choudhary. Thoughtfully designed and developed with a passion for creating impactful digital experiences.
                </p>

                <div className="flex items-center gap-5">
                    <a href="https://github.com/Dheeraj07-cmd" target="_blank" rel="noreferrer" className="text-gray-500 hover:text-white transition-colors">
                        <GithubIcon className="w-5 h-5" />
                    </a>
                    <a href="https://www.linkedin.com/in/dheerajChoudhary07" target="_blank" rel="noreferrer" className="text-gray-500 hover:text-white transition-colors">
                        <LinkedinIcon className="w-5 h-5" />
                    </a>
                    <a href="#contact" className="text-gray-500 hover:text-white transition-colors">
                        <Mail className="w-5 h-5" />
                    </a>
                </div>

            </div>
        </footer>
    );
}