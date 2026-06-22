import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-dark-section-bg border-t border-white/10 pt-section-v-padding pb-10">
      <div className="grid grid-cols-2 md:grid-cols-5 gap-stack-lg max-w-7xl mx-auto px-8 mb-16">
        <div className="col-span-2 md:col-span-1">
          <div className="text-headline-md font-headline-md font-bold text-white mb-6">MarTechAdda</div>
          <p className="text-surface-variant text-sm leading-relaxed max-w-xs">
            Connecting ambitious brands with world-class, vetted marketing expertise through data and performance insights.
          </p>
        </div>
        <div>
          <h6 className="text-white font-bold mb-6">About</h6>
          <ul className="space-y-4">
            <li><Link to="/profile" className="text-surface-variant hover:text-primary-fixed-dim transition-colors text-sm">Our Story</Link></li>
            <li><Link to="#" className="text-surface-variant hover:text-primary-fixed-dim transition-colors text-sm">The Network</Link></li>
            <li><Link to="#" className="text-surface-variant hover:text-primary-fixed-dim transition-colors text-sm">Careers</Link></li>
          </ul>
        </div>
        <div>
          <h6 className="text-white font-bold mb-6">Platform</h6>
          <ul className="space-y-4">
            <li><Link to="#" className="text-surface-variant hover:text-primary-fixed-dim transition-colors text-sm">Find an Agency</Link></li>
            <li><Link to="#" className="text-surface-variant hover:text-primary-fixed-dim transition-colors text-sm">List your Agency</Link></li>
            <li><Link to="#" className="text-surface-variant hover:text-primary-fixed-dim transition-colors text-sm">Verification</Link></li>
          </ul>
        </div>
        <div>
          <h6 className="text-white font-bold mb-6">Resources</h6>
          <ul className="space-y-4">
            <li><Link to="/" className="text-white font-bold transition-colors text-sm underline decoration-primary underline-offset-4">Blog</Link></li>
            <li><Link to="#" className="text-surface-variant hover:text-primary-fixed-dim transition-colors text-sm">Case Studies</Link></li>
            <li><Link to="#" className="text-surface-variant hover:text-primary-fixed-dim transition-colors text-sm">Tools</Link></li>
          </ul>
        </div>
        <div>
          <h6 className="text-white font-bold mb-6">Support</h6>
          <ul className="space-y-4">
            <li><Link to="#" className="text-surface-variant hover:text-primary-fixed-dim transition-colors text-sm">Help Center</Link></li>
            <li><Link to="/contact" className="text-surface-variant hover:text-primary-fixed-dim transition-colors text-sm">Contact Us</Link></li>
            <li><Link to="#" className="text-surface-variant hover:text-primary-fixed-dim transition-colors text-sm">Legal</Link></li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-8 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-surface-variant text-sm">© 2024 MarTechAdda. All rights reserved.</p>
        <div className="flex gap-6">
          <Link to="#" className="text-surface-variant hover:text-white transition-colors"><span className="material-symbols-outlined text-[20px]">language</span></Link>
          <Link to="#" className="text-surface-variant hover:text-white transition-colors"><span className="material-symbols-outlined text-[20px]">share</span></Link>
          <Link to="#" className="text-surface-variant hover:text-white transition-colors"><span className="material-symbols-outlined text-[20px]">rss_feed</span></Link>
        </div>
      </div>
    </footer>
  );
}
