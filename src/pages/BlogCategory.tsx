import { Link } from 'react-router-dom';

export default function BlogCategory() {
  return (
    <div className="bg-background-surface font-body-md text-on-surface">
      <main className="max-w-[1280px] mx-auto px-gutter py-section-v-padding">
        {/* Breadcrumbs */}
        <div className="mb-6 flex items-center gap-2 font-label-caps text-[10px] tracking-widest text-text-muted uppercase">
          <Link to="/blog" className="hover:text-primary transition-colors">Blog</Link>
          <span className="material-symbols-outlined text-[12px]">chevron_right</span>
          <span className="text-on-surface">Branding</span>
        </div>

        {/* Page Header */}
        <header className="mb-12 flex flex-col md:flex-row justify-between items-end gap-8">
          <div className="flex-1 max-w-2xl">
            <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg text-on-surface mb-4">
              Branding
            </h1>
            <p className="font-body-lg text-text-muted">
              Deep dives into identity systems, emotional connectivity, and the strategic art of making a mark in a saturated marketplace.
            </p>
          </div>
          <div className="flex items-center gap-4">
            <button className="w-10 h-10 flex items-center justify-center rounded-full border border-border-light hover:bg-surface-container transition-colors">
              <span className="material-symbols-outlined text-[20px]">search</span>
            </button>
            <button className="border border-border-light bg-white text-on-surface px-6 py-2 rounded-full font-semibold flex items-center gap-2 hover:bg-surface-container transition-all text-sm">
              Explore categories
            </button>
          </div>
        </header>

        {/* Featured Article */}
        <section className="mb-20">
          <Link to="/blog/the-psychology-of-color" className="group block bg-white rounded-3xl overflow-hidden shadow-sm border border-border-light hover:shadow-md transition-shadow">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 items-stretch">
              <div className="lg:col-span-3 aspect-[4/3] md:aspect-auto relative bg-surface-container overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop" 
                  alt="Abstract shapes" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="lg:col-span-2 p-8 md:p-12 flex flex-col justify-center">
                <p className="font-label-caps text-[10px] tracking-widest uppercase text-primary mb-3">ARTICLE</p>
                <h2 className="font-headline-md text-3xl font-bold mb-4 text-on-surface group-hover:text-primary transition-colors">
                  The Psychology of Color in Modern B2B SaaS Branding
                </h2>
                <p className="font-body-md text-text-muted mb-8 line-clamp-3">
                  How enterprise software giants are moving away from "Safe Blue" towards high-velocity palettes that command attention in crowded dashboards.
                </p>
                <div className="flex items-center gap-3 mt-auto">
                  <div className="w-10 h-10 rounded-full bg-surface-variant overflow-hidden">
                    <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuDe_w1kml28WZQeRLkH4XX63HYUvurCpqLMuhZJqeeqyP6CJISuNPqTYX9TjecnKQlAB_suRf5duv0uO3LHNzDYQKaYAdR60GonrF91TdTxu5ZEa3wb_-LBr-2geVa0YTNFnu3QC0LE5mI6IaXFCMkb5tkqQX05dRUFmtUmoh_LxlTVQvmp7Z1sBI2IYoWMsj_ATyqaWt_RZCBh_T0ZvHWogflOTEMZmOslMnCgs6h5AFz-e2CCRA1xMVyZKQVwzq74HFSZ_bZ7SE8" alt="Elena Vance" className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <p className="font-body-md font-semibold text-sm">Elena Vance</p>
                    <p className="font-label-caps text-[10px] tracking-widest text-text-muted uppercase">Brand Strategist • 6 min read</p>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </section>

        {/* Latest Articles Header & Filters */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-4">
          <h3 className="font-headline-md text-2xl font-bold text-on-surface">Latest Articles</h3>
          <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 hide-scrollbar">
            <button className="whitespace-nowrap px-6 py-2 bg-on-surface text-white rounded-full font-semibold text-sm">All</button>
            <button className="whitespace-nowrap px-6 py-2 bg-white border border-border-light text-on-surface hover:bg-surface-container transition-colors rounded-full font-semibold text-sm">Case Studies</button>
            <button className="whitespace-nowrap px-6 py-2 bg-white border border-border-light text-on-surface hover:bg-surface-container transition-colors rounded-full font-semibold text-sm">Articles</button>
            <button className="whitespace-nowrap px-6 py-2 bg-white border border-border-light text-on-surface hover:bg-surface-container transition-colors rounded-full font-semibold text-sm">Guides</button>
          </div>
        </div>

        {/* Grid */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12 mb-16">
          {/* Article 1 */}
          <article className="group flex flex-col h-full">
            <div className="block relative">
              <div className="aspect-[16/9] rounded-lg overflow-hidden mb-6 bg-card-fill-sage relative">
                <img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=2564&auto=format&fit=crop" alt="Article 1" />
              </div>
            </div>
            <p className="font-label-caps text-[10px] tracking-widest text-text-muted mb-2 uppercase">Case Study</p>
            <div className="block">
              <h4 className="font-body-lg font-bold text-on-surface mb-3">Rebranding the Grid: How EnergyLogiq Found Its Voice</h4>
            </div>
            <p className="font-body-md text-text-muted mb-6 line-clamp-2">A deep dive into the 12-month transformation of a legacy utility provider into a tech innovator.</p>
            <div className="mt-auto">
              <p className="text-[10px] font-label-caps tracking-widest uppercase text-text-muted">May 12, 2024</p>
            </div>
          </article>

          {/* Article 2 */}
          <article className="group cursor-pointer flex flex-col h-full">
            <Link to="/blog/the-typography-of-trust" className="block relative">
              <div className="aspect-[16/9] rounded-lg overflow-hidden mb-6 bg-card-fill-cream relative">
                <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&w=2564&auto=format&fit=crop" alt="Article 2" />
              </div>
            </Link>
            <p className="font-label-caps text-[10px] tracking-widest text-text-muted mb-2 uppercase">Guide</p>
            <Link to="/blog/the-typography-of-trust" className="block">
              <h4 className="font-body-lg font-bold text-on-surface mb-3 group-hover:text-primary transition-colors">The Typography of Trust: Selecting Fonts for FinTech</h4>
            </Link>
            <p className="font-body-md text-text-muted mb-6 line-clamp-2">Why sans-serif isn't always the answer for modern banking brands aiming for authority.</p>
            <div className="mt-auto">
              <p className="text-[10px] font-label-caps tracking-widest uppercase text-text-muted">May 08, 2024</p>
            </div>
          </article>

          {/* Article 3 */}
          <article className="group flex flex-col h-full">
            <div className="block relative">
              <div className="aspect-[16/9] rounded-lg overflow-hidden mb-6 bg-surface-container relative">
                <img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1614850523459-c2f4c699c52e?q=80&w=2564&auto=format&fit=crop" alt="Article 3" />
              </div>
            </div>
            <p className="font-label-caps text-[10px] tracking-widest text-text-muted mb-2 uppercase">Article</p>
            <div className="block">
              <h4 className="font-body-lg font-bold text-on-surface mb-3">Micro-Interactions as Brand Equity</h4>
            </div>
            <p className="font-body-md text-text-muted mb-6 line-clamp-2">How small UI details reinforce the broader brand promise in digital-native companies.</p>
            <div className="mt-auto">
              <p className="text-[10px] font-label-caps tracking-widest uppercase text-text-muted">May 02, 2024</p>
            </div>
          </article>

          {/* Article 4 */}
          <article className="group flex flex-col h-full">
            <div className="block relative">
              <div className="aspect-[16/9] rounded-lg overflow-hidden mb-6 bg-on-surface relative">
                <img className="w-full h-full object-cover opacity-80" src="https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?q=80&w=2564&auto=format&fit=crop" alt="Article 4" />
              </div>
            </div>
            <p className="font-label-caps text-[10px] tracking-widest text-text-muted mb-2 uppercase">Guide</p>
            <div className="block">
              <h4 className="font-body-lg font-bold text-on-surface mb-3">Scaling Design Systems Across Global Teams</h4>
            </div>
            <p className="font-body-md text-text-muted mb-6 line-clamp-2">Techniques for maintaining brand consistency when your creative team spans four continents.</p>
            <div className="mt-auto">
              <p className="text-[10px] font-label-caps tracking-widest uppercase text-text-muted">April 28, 2024</p>
            </div>
          </article>

          {/* Article 5 */}
          <article className="group flex flex-col h-full">
            <div className="block relative">
              <div className="aspect-[16/9] rounded-lg overflow-hidden mb-6 bg-surface-bright relative border border-border-light">
                <img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1603513492128-ba7bc9b3e143?q=80&w=2564&auto=format&fit=crop" alt="Article 5" />
              </div>
            </div>
            <p className="font-label-caps text-[10px] tracking-widest text-text-muted mb-2 uppercase">Case Study</p>
            <div className="block">
              <h4 className="font-body-lg font-bold text-on-surface mb-3">From Startup to Icon: The Visual Evolution of Stripe</h4>
            </div>
            <p className="font-body-md text-text-muted mb-6 line-clamp-2">Analyzing the subtle but powerful shifts in the world's most imitated digital brand identity.</p>
            <div className="mt-auto">
              <p className="text-[10px] font-label-caps tracking-widest uppercase text-text-muted">April 20, 2024</p>
            </div>
          </article>

          {/* Article 6 */}
          <article className="group flex flex-col h-full">
            <div className="block relative">
              <div className="aspect-[16/9] rounded-lg overflow-hidden mb-6 bg-surface-container relative">
                <img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop" alt="Article 6" style={{ filter: 'grayscale(100%)' }} />
              </div>
            </div>
            <p className="font-label-caps text-[10px] tracking-widest text-text-muted mb-2 uppercase">Article</p>
            <div className="block">
              <h4 className="font-body-lg font-bold text-on-surface mb-3">The Death of the Minimalist Logo?</h4>
            </div>
            <p className="font-body-md text-text-muted mb-6 line-clamp-2">Why maximalist tendencies are returning to luxury and high-fashion branding this year.</p>
            <div className="mt-auto">
              <p className="text-[10px] font-label-caps tracking-widest uppercase text-text-muted">April 14, 2024</p>
            </div>
          </article>
        </section>

        {/* Pagination */}
        <div className="flex justify-center items-center gap-2 mb-12">
          <button className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-surface-container transition-colors text-text-muted">
            <span className="material-symbols-outlined text-[16px]">chevron_left</span>
          </button>
          <button className="w-8 h-8 flex items-center justify-center rounded-full bg-on-surface text-white text-sm font-bold">1</button>
          <button className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-surface-container transition-colors text-sm font-bold">2</button>
          <button className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-surface-container transition-colors text-sm font-bold">3</button>
          <span className="text-text-muted text-sm mx-1">...</span>
          <button className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-surface-container transition-colors text-sm font-bold">12</button>
          <button className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-surface-container transition-colors text-text-muted">
            <span className="material-symbols-outlined text-[16px]">chevron_right</span>
          </button>
        </div>
      </main>

      {/* Explore More Categories */}
      <section className="bg-[#FF6A39] py-16">
        <div className="max-w-[1280px] mx-auto px-gutter">
          <h2 className="font-headline-md text-2xl font-bold text-on-primary mb-8">Explore more categories</h2>
          <div className="flex flex-wrap gap-4">
            <Link to="/blog/category/branding" className="px-6 py-3 bg-on-surface text-white rounded-full font-semibold text-sm hover:opacity-90 transition-opacity">Branding</Link>
            <Link to="#" className="px-6 py-3 bg-white text-on-surface rounded-full font-semibold text-sm hover:bg-surface-bright transition-colors">Content Strategy</Link>
            <Link to="#" className="px-6 py-3 bg-white text-on-surface rounded-full font-semibold text-sm hover:bg-surface-bright transition-colors">Growth Marketing</Link>
            <Link to="#" className="px-6 py-3 bg-white text-on-surface rounded-full font-semibold text-sm hover:bg-surface-bright transition-colors">Marketing Ops</Link>
            <Link to="#" className="px-6 py-3 bg-white text-on-surface rounded-full font-semibold text-sm hover:bg-surface-bright transition-colors">Product Marketing</Link>
            <Link to="#" className="px-6 py-3 bg-white text-on-surface rounded-full font-semibold text-sm hover:bg-surface-bright transition-colors">AdTech</Link>
            <Link to="#" className="px-6 py-3 bg-white text-on-surface rounded-full font-semibold text-sm hover:bg-surface-bright transition-colors">Customer...</Link>
          </div>
        </div>
      </section>

      {/* Newsletter Block */}
      <section className="bg-dark-section-bg py-24 text-center">
        <div className="max-w-[1280px] mx-auto px-gutter">
          <h2 className="font-display-lg text-[40px] md:text-[56px] font-bold text-white mb-6 leading-tight max-w-3xl mx-auto">
            Get the latest branding insights delivered weekly.
          </h2>
          <p className="text-surface-variant font-body-lg mb-10 max-w-xl mx-auto">
            No noise. Just high-performance strategies for the modern marketer. Join 25,000+ professionals.
          </p>
          <div className="max-w-md mx-auto relative flex flex-col md:flex-row gap-2 bg-white rounded-full p-1 mb-4">
            <input className="flex-1 bg-transparent border-none focus:ring-0 px-6 py-3 text-on-surface" placeholder="Your work email" type="email" />
            <button className="bg-primary text-white px-8 py-3 rounded-full font-bold hover:bg-primary/90 transition-colors whitespace-nowrap">Subscribe</button>
          </div>
          <p className="text-[10px] tracking-widest text-surface-variant/50 uppercase font-label-caps">JOIN THE 25K+ TODAY. UNSUBSCRIBE ANYTIME.</p>
        </div>
      </section>
    </div>
  );
}
