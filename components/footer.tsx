'use client'

export default function Footer() {
  const footerLinks = {
    product: {
      title: 'Product',
      links: [
        { name: 'Company Registration', href: '#' },
        { name: 'GST Registration', href: '#' },
        { name: 'Compliance Autopilot', href: '#' },
        { name: 'Document Vault', href: '#' },
      ],
    },
    licenses: {
      title: 'Licenses',
      links: [
        { name: 'Private Limited', href: '#' },
        { name: 'LLP', href: '#' },
        { name: 'OPC', href: '#' },
        { name: 'Trade License', href: '#' },
      ],
    },
    resources: {
      title: 'Resources',
      links: [
        { name: 'Blog', href: '#' },
        { name: 'Guides', href: '#' },
        { name: 'Help Center', href: '#' },
        { name: 'API Docs', href: '#' },
      ],
    },
    company: {
      title: 'Company',
      links: [
        { name: 'About Us', href: '#' },
        { name: 'Careers', href: '#' },
        { name: 'Contact', href: '#' },
        { name: 'Partner Program', href: '#' },
      ],
    },
  }

  return (
    <footer className="w-full bg-white border-t border-gray-200">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid md:grid-cols-5 gap-8 mb-12">
          {/* Left - Branding */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-5 h-5 bg-blue-600 rounded-sm flex items-center justify-center">
                <span className="text-white text-xs font-bold">F</span>
              </div>
              <span className="font-bold text-gray-900">FILINX</span>
            </div>
            <p className="text-gray-600 text-sm mb-4">Fast, transparent company registration for Indian startups.</p>
            <div className="flex gap-4 text-sm">
              <span className="text-gray-900 font-medium">4.8★</span>
              <span className="text-gray-600">2000+ companies</span>
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">{footerLinks.product.title}</h4>
            <ul className="space-y-3">
              {footerLinks.product.links.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-gray-600 hover:text-blue-600 transition text-sm">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Licenses Links */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">{footerLinks.licenses.title}</h4>
            <ul className="space-y-3">
              {footerLinks.licenses.links.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-gray-600 hover:text-blue-600 transition text-sm">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">{footerLinks.resources.title}</h4>
            <ul className="space-y-3">
              {footerLinks.resources.links.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-gray-600 hover:text-blue-600 transition text-sm">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-semibold text-gray-900 mb-4">{footerLinks.company.title}</h4>
            <ul className="space-y-3">
              {footerLinks.company.links.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-gray-600 hover:text-blue-600 transition text-sm">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom divider and legal links */}
        <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row items-center justify-between">
          <p className="text-gray-600 text-sm">© 2025 Filinx Technologies Pvt Ltd. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-600 hover:text-blue-600 transition text-sm">
              Privacy
            </a>
            <a href="#" className="text-gray-600 hover:text-blue-600 transition text-sm">
              Terms
            </a>
            <a href="#" className="text-gray-600 hover:text-blue-600 transition text-sm">
              Security
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
