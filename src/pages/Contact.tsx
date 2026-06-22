export default function Contact() {
  return (
    <div className="bg-background-surface">
      <div className="max-w-[1280px] mx-auto px-gutter py-section-v-padding">
        {/* Header Section */}
        <div className="mb-12 max-w-2xl">
          <p className="font-label-caps text-label-caps text-primary tracking-widest mb-4 uppercase">Connect with Julian Sterling</p>
          <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg text-on-surface mb-6">Let's Connect</h1>
          <p className="font-body-lg text-text-muted">
            Discussing strategic MarTech architecture, high-stakes editorial collaboration, or speaking engagements. Julian is currently vetting partnerships for transformative digital ecosystem development.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Form Side */}
          <div className="lg:col-span-7">
            <div className="bg-white border border-border-light rounded-[2rem] p-8 md:p-12 shadow-sm">
              <form className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="font-label-caps text-[10px] tracking-widest text-text-muted uppercase">Full Name</label>
                    <input type="text" placeholder="e.g. Elena Vance" className="w-full border border-border-light rounded-full px-6 py-3 focus:ring-1 focus:ring-primary focus:border-primary outline-none transition-all text-sm" />
                  </div>
                  <div className="space-y-2">
                    <label className="font-label-caps text-[10px] tracking-widest text-text-muted uppercase">Email Address</label>
                    <input type="email" placeholder="elena@martech-corp.com" className="w-full border border-border-light rounded-full px-6 py-3 focus:ring-1 focus:ring-primary focus:border-primary outline-none transition-all text-sm" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="font-label-caps text-[10px] tracking-widest text-text-muted uppercase">Inquiry Type</label>
                  <div className="relative">
                    <select className="w-full border border-border-light rounded-full px-6 py-3 appearance-none focus:ring-1 focus:ring-primary focus:border-primary outline-none transition-all text-sm bg-white">
                      <option>Consultancy & Architecture</option>
                      <option>Editorial & Media</option>
                      <option>Speaking Engagement</option>
                      <option>Other</option>
                    </select>
                    <span className="material-symbols-outlined absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none text-text-muted">expand_more</span>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="font-label-caps text-[10px] tracking-widest text-text-muted uppercase">Message</label>
                  <textarea rows={6} placeholder="Briefly describe your project or proposal..." className="w-full border border-border-light rounded-2xl px-6 py-4 focus:ring-1 focus:ring-primary focus:border-primary outline-none transition-all text-sm resize-none"></textarea>
                </div>

                <button type="button" className="bg-primary text-white px-8 py-3 rounded-full font-bold hover:bg-primary/90 transition-colors flex items-center gap-2">
                  Send Inquiry <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                </button>
              </form>
            </div>
          </div>

          {/* Info Side */}
          <div className="lg:col-span-5 space-y-6">
            {/* Availability Card */}
            <div className="bg-card-fill-sage rounded-2xl p-8 border border-border-light">
              <div className="flex items-center gap-2 mb-4">
                <span className="w-2 h-2 rounded-full bg-secondary"></span>
                <span className="font-label-caps text-[10px] tracking-widest text-secondary uppercase">Current Availability</span>
              </div>
              <h3 className="font-headline-md text-[24px] font-bold mb-3">Accepting Q3 Projects</h3>
              <p className="font-body-md text-text-muted text-sm leading-relaxed">
                Currently reviewing large-scale stack audit and data orchestration consultancy requests for the upcoming quarter.
              </p>
            </div>

            {/* Channels Card */}
            <div className="bg-white rounded-2xl p-8 border border-border-light">
              <span className="font-label-caps text-[10px] tracking-widest text-text-muted uppercase mb-6 block border-b border-border-light pb-2">Professional Channels</span>
              <div className="space-y-4">
                <a href="#" className="flex items-center justify-between group py-2">
                  <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-primary">share</span>
                    <span className="font-semibold text-sm">LinkedIn Professional</span>
                  </div>
                  <span className="material-symbols-outlined text-text-muted group-hover:text-primary transition-colors text-[18px]">north_east</span>
                </a>
                <div className="h-px bg-border-light"></div>
                <a href="#" className="flex items-center justify-between group py-2">
                  <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-primary">alternate_email</span>
                    <span className="font-semibold text-sm">Twitter / X</span>
                  </div>
                  <span className="material-symbols-outlined text-text-muted group-hover:text-primary transition-colors text-[18px]">north_east</span>
                </a>
                <div className="h-px bg-border-light"></div>
                <a href="#" className="flex items-center justify-between group py-2">
                  <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-primary">mail</span>
                    <span className="font-semibold text-sm">Direct Email</span>
                  </div>
                  <span className="material-symbols-outlined text-text-muted group-hover:text-primary transition-colors text-[18px]">north_east</span>
                </a>
              </div>
            </div>

            {/* Location Card */}
            <div className="bg-surface-bright rounded-2xl p-8 border border-border-light relative overflow-hidden">
              <div className="relative z-10 flex items-start gap-4 mb-4">
                <span className="material-symbols-outlined text-text-muted">location_on</span>
                <div>
                  <h4 className="font-semibold text-sm">Based in London</h4>
                  <p className="text-xs text-text-muted mt-1">Available for worldwide consultancy and speaking engagements. Digital-first by design.</p>
                </div>
              </div>
              <div className="mt-6 aspect-[2/1] rounded-lg overflow-hidden border border-border-light bg-surface-container">
                <img src="https://images.unsplash.com/photo-1526129318478-62ed807ebdf9?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="London Map" className="w-full h-full object-cover grayscale opacity-70" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Architect's Ledger CTA */}
      <section className="bg-dark-section-bg py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ background: 'linear-gradient(to right, transparent 49%, rgba(255,255,255,0.5) 50%, transparent 51%)' }}></div>
        <div className="max-w-[1280px] mx-auto px-gutter relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-display-lg text-[40px] text-white mb-4">The Architect's Ledger.</h2>
            <p className="font-body-md text-surface-variant max-w-md">
              Strategic insights on marketing technology, delivered bi-weekly. No fluff, just architecture.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <input type="email" placeholder="Your professional email" className="w-full px-6 py-4 rounded-full border-none focus:ring-2 focus:ring-primary-container" />
            <button className="bg-primary-container text-white px-8 py-4 rounded-full font-bold hover:bg-primary-container/90 transition-colors whitespace-nowrap">
              Join 15k+ Peers
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
