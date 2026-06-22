import { Link } from 'react-router-dom';

export default function BlogList() {
  return (
    <div className="bg-background-surface font-body-md text-on-surface">
      <main className="max-w-[1280px] mx-auto px-gutter py-section-v-padding">
        {/* Featured Blog Hero */}
        <section className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-stack-lg items-center">
            <div className="lg:col-span-7">
              <div className="aspect-[16/9] overflow-hidden rounded-lg bg-card-fill-sage group cursor-pointer relative">
                <div className="absolute top-6 left-6 z-10">
                  <span className="bg-primary-container text-white px-4 py-1.5 rounded-full font-label-caps text-label-caps">FEATURED</span>
                </div>
                <img
                  className="article-image w-full h-full object-cover transition-transform duration-700 ease-out"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAYYmLY3gfIhhrt0TkVw8sjqGNBXxPNFBSFZlxouIfv0F9xWOFmarJ2E94l0kkowMnBpkj8j4TL_TN_qegmKiWovphpplDoQTH55lsaalk87DtQNKbjC0-Jj2wxPHgAUA0fvonWQ5ycpdHHtxZoYRk9i1RXiOk-7m_PIhsq4szt7_ZMnTam7spLHWDQ8FIl095N38p1sIT8e7yj-wRiXymk8DCoZyqDxipuLjzu7qOflD7vdG09syPMmu2K_x2jtdgf67DJnYLOaps"
                  alt="Featured article"
                />
              </div>
            </div>
            <div className="lg:col-span-5 flex flex-col gap-stack-sm">
              <p className="font-label-caps text-[10px] tracking-widest uppercase text-primary">DATA STRATEGY & AI</p>
              <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg text-on-surface mb-4">
                The Convergence of Generative AI and Customer Data Platforms
              </h1>
              <p className="font-body-lg text-body-lg text-text-muted mb-8 max-w-lg">
                Explore how the next generation of CDPs is leveraging large language models to automate segmentation, predict churn, and create hyper-personalized customer journeys at scale.
              </p>
              <div className="flex items-center gap-4 mb-8">
                <div className="w-10 h-10 rounded-full bg-surface-container-high overflow-hidden">
                  <img
                    className="w-full h-full object-cover"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDe_w1kml28WZQeRLkH4XX63HYUvurCpqLMuhZJqeeqyP6CJISuNPqTYX9TjecnKQlAB_suRf5duv0uO3LHNzDYQKaYAdR60GonrF91TdTxu5ZEa3wb_-LBr-2geVa0YTNFnu3QC0LE5mI6IaXFCMkb5tkqQX05dRUFmtUmoh_LxlTVQvmp7Z1sBI2IYoWMsj_ATyqaWt_RZCBh_T0ZvHWogflOTEMZmOslMnCgs6h5AFz-e2CCRA1xMVyZKQVwzq74HFSZ_bZ7SE8"
                    alt="Author"
                  />
                </div>
                <div>
                  <p className="font-body-md font-semibold">Elena Vance</p>
                  <p className="font-label-caps text-[10px] tracking-widest text-text-muted uppercase">Chief Strategist • 6 min read</p>
                </div>
              </div>
              <Link to="#" className="font-body-md font-semibold text-primary flex items-center gap-2 hover:opacity-80 transition-opacity">
                Read Full Article <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
              </Link>
            </div>
          </div>
        </section>

        {/* Filter and Search Bar */}
        <section className="mb-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="relative w-full md:w-96">
            <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-text-muted">search</span>
            <input
              type="text"
              placeholder="Search articles, topics, or authors..."
              className="w-full bg-surface-container-low border border-border-light rounded-full pl-12 pr-4 py-3 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
            />
          </div>
          <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 hide-scrollbar">
            <button className="whitespace-nowrap px-6 py-2 bg-on-surface text-white rounded-full font-semibold">All Insights</button>
            <button className="whitespace-nowrap px-6 py-2 bg-white border border-border-light text-on-surface hover:bg-surface-container-low transition-colors rounded-full font-semibold">Branding</button>
            <button className="whitespace-nowrap px-6 py-2 bg-white border border-border-light text-on-surface hover:bg-surface-container-low transition-colors rounded-full font-semibold">Data Strategy</button>
            <button className="whitespace-nowrap px-6 py-2 bg-white border border-border-light text-on-surface hover:bg-surface-container-low transition-colors rounded-full font-semibold">Architecture</button>
            <button className="whitespace-nowrap px-6 py-2 bg-white border border-border-light text-on-surface hover:bg-surface-container-low transition-colors rounded-full font-semibold">AI Integration</button>
            <button className="whitespace-nowrap px-6 py-2 bg-white border border-border-light text-on-surface hover:bg-surface-container-low transition-colors rounded-full font-semibold">Analytics</button>
          </div>
        </section>

        {/* Article Grid */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12 mb-16">
          {/* Article 1 */}
          <article className="group cursor-pointer flex flex-col h-full">
            <div className="aspect-[4/3] rounded-lg overflow-hidden mb-6 bg-card-fill-cream relative">
              <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD95UMrQeAJ79eEgGEWkhKWPqcJGJrATXrS9JokSYDI3GABhyPEaZ-HT2Di878EICLJc7MJepQfjNQ5ePz0htQZ6n2TVlloBYbcaKigN4pXM930Aq-G3AF7KBeXSOGfmmdEmrcM4n9Pm07LCrXUylJTznpi6cUhDFCu0tUYflxYN3fm9suk7jOEAy_31D8l9LvnYOnyCEzDi7cAEW0epBtWveG-U6BzRCtZW1nIcB1SUUh1fl62eQNUFMB4opnIBjyXGjOgn2epckQ" alt="Article 1" />
              <div className="absolute top-4 left-4">
                <span className="w-2 h-2 rounded-full bg-primary inline-block"></span>
              </div>
            </div>
            <p className="font-label-caps text-[10px] tracking-widest text-text-muted mb-2 uppercase">Architecture</p>
            <h3 className="font-body-lg font-bold text-on-surface mb-3 group-hover:text-primary transition-colors line-clamp-2">Mastering the Modern MarTech Stack: A 2024 Blueprint</h3>
            <p className="font-body-md text-text-muted mb-6 line-clamp-2">A deep dive into why modularity is winning over monolithic suites in the enterprise landscape.</p>
            <div className="flex items-center gap-3 mt-auto">
              <div className="w-8 h-8 rounded-full bg-surface-variant overflow-hidden">
                <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="Marcus Thorne" className="w-full h-full object-cover" />
              </div>
              <div>
                <p className="font-body-md font-semibold text-sm">Marcus Thorne</p>
                <p className="text-[12px] text-text-muted">Oct 12, 2024</p>
              </div>
            </div>
          </article>

          {/* Article 2 */}
          <article className="group cursor-pointer flex flex-col h-full">
            <div className="aspect-[4/3] rounded-lg overflow-hidden mb-6 bg-card-fill-sage relative">
              <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDSImh4f2E2NnFtLFwyRNhiLphtNfiiI8RqG2uen0ppuwkJRblWu-PWhg3SqUiVqPQyfH6Jp9jHROZyUioS_ovBAX2-IijzpTCx4cqZBaANSb_dJ7LWRgInP_cUOObL44XC9q4pjU-PLgEXxsedsDxID5WqxneZPx9jy0jrddTaFtz33gRWQI2SeEcYNuTeFD7suuc90tYdrqmNrtRRvLpQTukvhQfLl6uSe5ldqj9sJSGj4uBU-jn7PCEC06Sv-98dLVJFkWSYUd4" alt="Article 2" />
            </div>
            <p className="font-label-caps text-[10px] tracking-widest text-text-muted mb-2 uppercase">Analytics</p>
            <h3 className="font-body-lg font-bold text-on-surface mb-3 group-hover:text-primary transition-colors line-clamp-2">Beyond the Dashboard: Narrative Data Storytelling</h3>
            <p className="font-body-md text-text-muted mb-6 line-clamp-2">Why your C-suite doesn't care about your metrics—and how to speak their language using impact-driven data narratives.</p>
            <div className="flex items-center gap-3 mt-auto">
              <div className="w-8 h-8 rounded-full bg-surface-variant overflow-hidden">
                <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="Sarah Jenkins" className="w-full h-full object-cover" />
              </div>
              <div>
                <p className="font-body-md font-semibold text-sm">Sarah Jenkins</p>
                <p className="text-[12px] text-text-muted">Oct 10, 2024</p>
              </div>
            </div>
          </article>

          {/* Article 3 */}
          <article className="group cursor-pointer flex flex-col h-full">
            <div className="aspect-[4/3] rounded-lg overflow-hidden mb-6 bg-surface-container relative">
              <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCRhiiEpUUjy-l5Muivf4PM-Scti0jfnqWSUr1EeaVMEW8IDXa-zCvjFzixeWUYjpGCKJmE1qJb9BlXrZ8TRRl5mTU8BpfGJaRJZkUDk7V_nTqFpR50xUuY8gTCrUgLRC5Wx-UtHtVaGmjt0a8rj4K-qiVMubqMlXKTIE8bCGnsqhBRcSlpfLc06l9v9ns3FwqY3Wkbi-RbIK13Im21jvg6gf0bIQL25h8KucHhT21p4R_OWWxyW2QuElGtLV6xlKEkdYoacKoV0wE" alt="Article 3" />
              <div className="absolute top-4 left-4">
                <span className="w-2 h-2 rounded-full bg-primary-container inline-block"></span>
              </div>
            </div>
            <p className="font-label-caps text-[10px] tracking-widest text-text-muted mb-2 uppercase">Branding</p>
            <h3 className="font-body-lg font-bold text-on-surface mb-3 group-hover:text-primary transition-colors line-clamp-2">The Algorithmic Brand: Identity in the Age of AI</h3>
            <p className="font-body-md text-text-muted mb-6 line-clamp-2">How brands are maintaining human resonance while optimizing for machine-driven discovery and recommendation engines.</p>
            <div className="flex items-center gap-3 mt-auto">
              <div className="w-8 h-8 rounded-full bg-surface-variant overflow-hidden">
                <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="David Chen" className="w-full h-full object-cover" />
              </div>
              <div>
                <p className="font-body-md font-semibold text-sm">David Chen</p>
                <p className="text-[12px] text-text-muted">Oct 08, 2024</p>
              </div>
            </div>
          </article>

          {/* Article 4 */}
          <article className="group cursor-pointer flex flex-col h-full">
            <div className="aspect-[4/3] rounded-lg overflow-hidden mb-6 bg-on-surface relative">
              <img className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAIeBj-6HvHYyYXGWQVERy-9iYWT2GsBuT_6qj8WLYqiKpteoBAOFcsPeUDQCTRmWokKj5ea8ctdXVr6hjQD2di8-TnKBnmzFVAyK3J22j5MMWsQzLGm1HVAmyzd6daIPilLKqmKp7TQ5NIfyFa7gjyguj6jyhWEMUYJCE74NrW2wMbIgD-Nwl9Vd33ls6_TY-00vC6JmOIo3SwCcsiJ8YCCwGDOlsMOGczZi14TM0XTvyzw7gEE33vb9OcGAKuyH7huBaDGekXnjI" alt="Article 4" />
              <div className="absolute top-4 left-4">
                <span className="w-2 h-2 rounded-full bg-error inline-block"></span>
              </div>
            </div>
            <p className="font-label-caps text-[10px] tracking-widest text-text-muted mb-2 uppercase">Data Strategy</p>
            <h3 className="font-body-lg font-bold text-on-surface mb-3 group-hover:text-primary transition-colors line-clamp-2">Zero-Party Data: The Ultimate Competitive Moat</h3>
            <p className="font-body-md text-text-muted mb-6 line-clamp-2">Building a value exchange that encourages users to share their preferences voluntarily in a cookieless world.</p>
            <div className="flex items-center gap-3 mt-auto">
              <div className="w-8 h-8 rounded-full bg-surface-variant overflow-hidden">
                <img src="https://lh3.googleusercontent.com/aida-public/AB6AXuDe_w1kml28WZQeRLkH4XX63HYUvurCpqLMuhZJqeeqyP6CJISuNPqTYX9TjecnKQlAB_suRf5duv0uO3LHNzDYQKaYAdR60GonrF91TdTxu5ZEa3wb_-LBr-2geVa0YTNFnu3QC0LE5mI6IaXFCMkb5tkqQX05dRUFmtUmoh_LxlTVQvmp7Z1sBI2IYoWMsj_ATyqaWt_RZCBh_T0ZvHWogflOTEMZmOslMnCgs6h5AFz-e2CCRA1xMVyZKQVwzq74HFSZ_bZ7SE8" alt="Elena Vance" className="w-full h-full object-cover" />
              </div>
              <div>
                <p className="font-body-md font-semibold text-sm">Elena Vance</p>
                <p className="text-[12px] text-text-muted">Oct 05, 2024</p>
              </div>
            </div>
          </article>
          
          {/* Article 5 */}
          <article className="group cursor-pointer flex flex-col h-full">
            <div className="aspect-[4/3] rounded-lg overflow-hidden mb-6 bg-surface-container relative">
              <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBBDjskbL2H8qZsR5Cu02H72puI66Hx53MGdMcwC-KPRpZGnUjAe6ldWgAvoKFSL9UCXqfPELhn7w79E0d0zK-bOwxt-7b4GDF_Mi1yDhhy4RPDORZQDuEYpM7BM39SEemZYR91JDxGpPeM058L3JFiyYsflW12dJeZXdiEXmttBUrlAptb1rRHoN3zw2pjgq5iJRHpy4t_RwaYG6771c6H2a_dBh14z-uHh5WjEJliLCtCZOu4sv1USnPkQlc8HEKu_hmanO18ous" alt="Article 5" />
              <div className="absolute top-4 left-4">
                <span className="w-2 h-2 rounded-full bg-secondary inline-block"></span>
              </div>
            </div>
            <p className="font-label-caps text-[10px] tracking-widest text-text-muted mb-2 uppercase">AI Integration</p>
            <h3 className="font-body-lg font-bold text-on-surface mb-3 group-hover:text-primary transition-colors line-clamp-2">Ethical AI in Marketing Operations</h3>
            <p className="font-body-md text-text-muted mb-6 line-clamp-2">Navigating the gray areas of automated decision-making and bias in customer selection algorithms.</p>
            <div className="flex items-center gap-3 mt-auto">
              <div className="w-8 h-8 rounded-full bg-surface-variant overflow-hidden">
                <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="Marcus Thorne" className="w-full h-full object-cover" />
              </div>
              <div>
                <p className="font-body-md font-semibold text-sm">Marcus Thorne</p>
                <p className="text-[12px] text-text-muted">Oct 02, 2024</p>
              </div>
            </div>
          </article>

          {/* Article 6 - Julian Sterling */}
          <article className="group cursor-pointer flex flex-col h-full">
            <div className="aspect-[4/3] rounded-lg overflow-hidden mb-6 bg-card-fill-sage relative">
              <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC_7eiUmmhUhc3O_1W9EvN6_sB2RP7-Vai4FGiMCL-AUOO6A3CIwBMDZBf5O5KjUEvPwFaOlM9Kp8tW39admKpL0j2nmHHivY9XZe7i1YxE3p0V_L6YDin1W2xjyLvmG2YPng1C3Txda3uSemBWOs84aa4l_u44H_UWuQxhe3N_cAHxMZC3nmCbzXHv6fVYgdzXuZusJKgWpk0dyVbIeooYvGOsjD5D5JgnGoAjMCoFwfsP8kuU_opwj9KQEBx9_iYwC1XZYyCIugs" alt="Article 6" />
              <div className="absolute top-4 left-4">
                <span className="w-2 h-2 rounded-full bg-primary-container inline-block"></span>
              </div>
            </div>
            <p className="font-label-caps text-[10px] tracking-widest text-text-muted mb-2 uppercase">Strategic Marketing</p>
            <h3 className="font-body-lg font-bold text-on-surface mb-3 group-hover:text-primary transition-colors line-clamp-2">The Human Element in Revenue Operations</h3>
            <p className="font-body-md text-text-muted mb-6 line-clamp-2">Why behavioral psychology remains the most important foundation for building sustainable marketing architecture.</p>
            <div className="flex items-center gap-3 mt-auto">
              <Link to="/profile" className="w-8 h-8 rounded-full bg-surface-variant overflow-hidden hover:opacity-80 transition-opacity">
                <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&h=256&q=80" alt="Julian Sterling" className="w-full h-full object-cover" />
              </Link>
              <div>
                <p className="font-body-md font-semibold text-sm">
                  <Link to="/profile" className="hover:text-primary transition-colors">
                    Julian Sterling
                  </Link>
                </p>
                <p className="text-[12px] text-text-muted">Sep 28, 2024</p>
              </div>
            </div>
          </article>
        </section>

        {/* Load More */}
        <div className="flex flex-col items-center justify-center mb-section-v-padding">
          <button className="flex items-center gap-2 border-2 border-primary text-primary px-8 py-3 rounded-full font-bold hover:bg-primary/5 transition-colors mb-4">
            Load More Articles <span className="material-symbols-outlined text-[20px]">expand_more</span>
          </button>
          <p className="font-label-caps text-[10px] tracking-widest text-text-muted uppercase">Showing 6 of 48 Articles</p>
        </div>
      </main>

      {/* CTA Section */}
      <section className="bg-dark-section-bg rounded-t-[3rem] p-12 md:p-20 text-center relative overflow-hidden mt-8">
        <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '32px 32px' }}></div>
        <div className="relative z-10 max-w-2xl mx-auto">
          <h2 className="font-display-lg text-[40px] md:text-[56px] text-white mb-6 leading-tight font-bold">Stay ahead of the curve.</h2>
          <p className="text-surface-variant font-body-lg mb-10">Join 15,000+ MarTech leaders receiving our weekly strategic briefing on the future of marketing technology.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <input type="email" placeholder="work@company.com" className="px-6 py-4 rounded-full min-w-[300px] border-none focus:ring-2 focus:ring-primary-container" />
            <button className="bg-primary-container text-white px-8 py-4 rounded-full font-bold hover:bg-primary-container/90 transition-colors whitespace-nowrap">Subscribe Now</button>
          </div>
        </div>
      </section>
    </div>
  );
}
