import { Mail, Phone, MapPin, Instagram, Twitter, Linkedin } from "lucide-react"
import Link from "next/link"

export function ContactInfo() {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold mb-6">Get in touch</h2>
        <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
          Ready to start your next project? We'd love to hear from you. Let's discuss how we can bring your creative
          vision to life.
        </p>
      </div>

      <div className="space-y-6">
        <div className="flex items-center space-x-4">
          <div className="w-12 h-12 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center">
            <Mail className="h-6 w-6 text-gray-600 dark:text-gray-400" />
          </div>
          <div>
            <p className="font-medium">Email</p>
            <Link
              href="mailto:artsofnow@gmail.com"
              className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors"
            >
              artsofnow@gmail.com
            </Link>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <div className="w-12 h-12 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center">
            <Phone className="h-6 w-6 text-gray-600 dark:text-gray-400" />
          </div>
          <div>
            <p className="font-medium">Phone</p>
            <Link
              href="tel:+1234567890"
              className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors"
            >
              +20 01154555112
            </Link>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <div className="w-12 h-12 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center">
            <MapPin className="h-6 w-6 text-gray-600 dark:text-gray-400" />
          </div>
          <div>
            <p className="font-medium">Location</p>
            <p className="text-gray-600 dark:text-gray-400">October, NY</p>
          </div>
        </div>
      </div>

      <div>
        <h3 className="font-medium mb-4">Follow us</h3>
        <div className="flex space-x-4">
          <Link
            href="https://www.instagram.com/arts_of_now/?utm_source=ig_web_button_share_sheet"
            className="w-10 h-10 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
          >
            <Instagram className="h-5 w-5" />
          </Link>
          <Link
            href="#"
            className="w-10 h-10 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
          >
            <Twitter className="h-5 w-5" />
          </Link>
          <Link
            href="#"
            className="w-10 h-10 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
          >
            <Linkedin className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </div>
  )
}
