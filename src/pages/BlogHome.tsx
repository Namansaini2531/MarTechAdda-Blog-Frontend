import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function BlogHome() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 3;

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 5000);
    return () => clearInterval(slideInterval);
  }, []);

  return (
    <div className="bg-background text-on-surface font-body-md overflow-x-hidden">
      <main className="max-w-7xl mx-auto px-8">
        {/* Page Header */}
        <header className="py-16 flex flex-col md:flex-row justify-between items-end gap-8">
          <div className="flex-1">
            <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg text-on-surface mb-2">The MarTechAdda Blog</h1>
            <p className="font-body-lg text-body-lg text-text-muted">Marketing insights and expert hiring guidance.</p>
          </div>
          <div className="flex items-center gap-4">
            <button className="w-12 h-12 flex items-center justify-center rounded-full border border-border-light hover:bg-surface-container transition-colors">
              <span className="material-symbols-outlined">search</span>
            </button>
            <button className="bg-on-surface text-white px-8 py-3 rounded-full font-semibold flex items-center gap-2 hover:bg-opacity-90 transition-all">
              Explore categories
              <span className="material-symbols-outlined text-[20px]">expand_more</span>
            </button>
          </div>
        </header>

        {/* Hero Section with Slider */}
        <section className="mb-section-v-padding">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-stack-lg">
            {/* Sliding Area */}
            <div className="lg:col-span-7 relative overflow-hidden">
              <div 
                className="slider-track" 
                style={{ transform: `translateX(-${currentSlide * 100}%)`, display: 'flex', transition: 'transform 0.7s cubic-bezier(0.4, 0, 0.2, 1)' }}
              >
                {/* Slide 1 */}
                <article className="slide group cursor-pointer flex-shrink-0 w-full pr-4">
                  <div className="aspect-[16/9] bg-card-fill-sage rounded-lg overflow-hidden mb-6 relative">
                    <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC-Aa9VAWnw1qDnZCvBgcL64G5FKrjyCPFhF0tWr2zB5iOq4LFlcgY_JEUvUusjfkH1YRXijRKrIi4mtGf0wAb2jVtKVOAi6-aaBeHj73jBDOxoh33eLwgMLkfYVjeO2kFjeqmh5Pd_gFimk5v6nxkbDmhOwvx7WA3QzaRXpBG4a4ZWVnm7FBUw_TQANsXfuDsYsdypj-sqCHgWwxtFctV6yMDAT7KPAbIFfDzDUIxQZ681Og8ZYrLyvKBldMlDA3e2a6pnM3EyxGg" alt="Slide 1" />
                    <div className="absolute top-6 left-6 flex items-center gap-2 bg-white/90 backdrop-blur-md px-4 py-2 rounded-full border border-white/20">
                      <span className="accent-dot bg-[#FF6A39] w-3 h-3 rounded-full inline-block"></span>
                      <span className="font-label-caps text-label-caps text-on-surface tracking-widest">FEATURED</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="font-label-caps text-label-caps text-primary tracking-widest uppercase">STRATEGIC MARKETING</span>
                    <span className="w-1 h-1 bg-border-light rounded-full"></span>
                    <span className="font-label-caps text-label-caps text-text-muted tracking-widest uppercase">8 MIN READ</span>
                  </div>
                  <h2 className="font-headline-md text-headline-md text-on-surface mb-6 group-hover:text-primary transition-colors">How Generative AI is Rewriting the Playbook for Performance Marketing Agencies</h2>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full overflow-hidden border border-border-light bg-surface-container">
                      <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBBqw3E7XDLa5L79ZBRABlRJMz_CKRvCxSl46Midi1SykJD9IuK4ae16MHFUvMc-fO0udJGijNVZpudxYkoCi4i9AdNuOXjSej-Xwbyj6TkaBLYiW55g1zvq4wKduYJlpzerndgIl499X8iu4NwdJpaRsYfVwCTOrAh0bci00TV3k-U8YOVn2affb3VzhXDazVdCUL8b27dNJzu9MtiVhRnN9moiR573XzDcA2V1wM8A_EbLC4MUuckLrNz9YVVJwvSxuEXhvYTiXM" alt="Sarah Jenkins" />
                    </div>
                    <div>
                      <p className="font-body-md font-bold text-on-surface">Sarah Jenkins</p>
                      <p className="font-label-caps text-[10px] tracking-widest uppercase text-text-muted">Chief Marketing Officer, MarTechAdda</p>
                    </div>
                  </div>
                </article>

                {/* Slide 2 */}
                <article className="slide group cursor-pointer flex-shrink-0 w-full pr-4">
                  <div className="aspect-[16/9] bg-card-fill-cream rounded-lg overflow-hidden mb-6 relative">
                    <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC_7eiUmmhUhc3O_1W9EvN6_sB2RP7-Vai4FGiMCL-AUOO6A3CIwBMDZBf5O5KjUEvPwFaOlM9Kp8tW39admKpL0j2nmHHivY9XZe7i1YxE3p0V_L6YDin1W2xjyLvmG2YPng1C3Txda3uSemBWOs84aa4l_u44H_UWuQxhe3N_cAHxMZC3nmCbzXHv6fVYgdzXuZusJKgWpk0dyVbIeooYvGOsjD5D5JgnGoAjMCoFwfsP8kuU_opwj9KQEBx9_iYwC1XZYyCIugs" alt="Slide 2" />
                    <div className="absolute top-6 left-6 flex items-center gap-2 bg-white/90 backdrop-blur-md px-4 py-2 rounded-full border border-white/20">
                      <span className="accent-dot bg-secondary w-3 h-3 rounded-full inline-block"></span>
                      <span className="font-label-caps text-label-caps text-on-surface tracking-widest uppercase">TRENDING</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="font-label-caps text-label-caps text-primary tracking-widest uppercase">DATA & ANALYTICS</span>
                    <span className="w-1 h-1 bg-border-light rounded-full"></span>
                    <span className="font-label-caps text-label-caps text-text-muted tracking-widest uppercase">6 MIN READ</span>
                  </div>
                  <h2 className="font-headline-md text-headline-md text-on-surface mb-6 group-hover:text-primary transition-colors">The Future of Zero-Party Data: Building Direct Customer Relationships</h2>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full overflow-hidden border border-border-light bg-surface-container">
                      <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBBqw3E7XDLa5L79ZBRABlRJMz_CKRvCxSl46Midi1SykJD9IuK4ae16MHFUvMc-fO0udJGijNVZpudxYkoCi4i9AdNuOXjSej-Xwbyj6TkaBLYiW55g1zvq4wKduYJlpzerndgIl499X8iu4NwdJpaRsYfVwCTOrAh0bci00TV3k-U8YOVn2affb3VzhXDazVdCUL8b27dNJzu9MtiVhRnN9moiR573XzDcA2V1wM8A_EbLC4MUuckLrNz9YVVJwvSxuEXhvYTiXM" alt="David Chen" />
                    </div>
                    <div>
                      <p className="font-body-md font-bold text-on-surface">David Chen</p>
                      <p className="font-label-caps text-[10px] tracking-widest uppercase text-text-muted">Head of Strategy, MarTechAdda</p>
                    </div>
                  </div>
                </article>

                {/* Slide 3 */}
                <article className="slide group cursor-pointer flex-shrink-0 w-full pr-4">
                  <div className="aspect-[16/9] bg-card-fill-sage rounded-lg overflow-hidden mb-6 relative">
                    <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAVYyw0yvBynF4N6xdqgKT6n-pbCz6txCI38y92j9Sz2YNueCcxghXZ68bh2RJX6PnB79IVeE2rH7e8lde48p_HL90HmtGcw1vw8MFkBoB3gzVEFQidu7B8Brm6kzaRvyjtSPrYnz_V4vbMCTN4DGUiC_qGO7GeJ0m3G5WplbWlqBz79ULg1PrInchqu1DauT-lWKxaaN3QGYXcxLrlz8F2-GN2qfI3zQqsgIP0QXrccDfS8eQ2MnLBhw_a8d4mzRTiY2-jOunIG5M" alt="Slide 3" />
                    <div className="absolute top-6 left-6 flex items-center gap-2 bg-white/90 backdrop-blur-md px-4 py-2 rounded-full border border-white/20">
                      <span className="accent-dot bg-tertiary w-3 h-3 rounded-full inline-block"></span>
                      <span className="font-label-caps text-label-caps text-on-surface tracking-widest uppercase">INSIGHTS</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="font-label-caps text-label-caps text-primary tracking-widest uppercase">AGENCY GROWTH</span>
                    <span className="w-1 h-1 bg-border-light rounded-full"></span>
                    <span className="font-label-caps text-label-caps text-text-muted tracking-widest uppercase">10 MIN READ</span>
                  </div>
                  <h2 className="font-headline-md text-headline-md text-on-surface mb-6 group-hover:text-primary transition-colors">Why Your Attribution Model is Probably Lying to You (And How to Fix It)</h2>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full overflow-hidden border border-border-light bg-surface-container">
                      <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBBqw3E7XDLa5L79ZBRABlRJMz_CKRvCxSl46Midi1SykJD9IuK4ae16MHFUvMc-fO0udJGijNVZpudxYkoCi4i9AdNuOXjSej-Xwbyj6TkaBLYiW55g1zvq4wKduYJlpzerndgIl499X8iu4NwdJpaRsYfVwCTOrAh0bci00TV3k-U8YOVn2affb3VzhXDazVdCUL8b27dNJzu9MtiVhRnN9moiR573XzDcA2V1wM8A_EbLC4MUuckLrNz9YVVJwvSxuEXhvYTiXM" alt="Michael Ross" />
                    </div>
                    <div>
                      <p className="font-body-md font-bold text-on-surface">Michael Ross</p>
                      <p className="font-label-caps text-[10px] tracking-widest uppercase text-text-muted">Marketing Analyst</p>
                    </div>
                  </div>
                </article>
              </div>

              {/* Slider Indicators */}
              <div className="mt-8 flex items-center gap-3">
                {[0, 1, 2].map((idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentSlide(idx)}
                    className={`h-3 rounded-full transition-all duration-300 ${currentSlide === idx ? 'w-6 bg-primary' : 'w-3 bg-border-light'}`}
                    aria-label={`Go to slide ${idx + 1}`}
                  ></button>
                ))}
              </div>
            </div>

            {/* Fixed Interactive Widget */}
            <div className="lg:col-span-5 bg-on-surface rounded-lg p-10 text-white flex flex-col justify-between relative overflow-hidden h-fit">
              <div className="relative z-10">
                <div className="font-label-caps text-[10px] tracking-widest uppercase text-secondary-fixed mb-4">INTERACTIVE TOOLS</div>
                <h3 className="font-headline-md text-[28px] leading-tight mb-8">Calculate your expert match score in seconds.</h3>
                {/* Visual Widget Data Viz */}
                <div className="space-y-6 bg-white/5 p-6 rounded-lg border border-white/10 backdrop-blur-sm">
                  <div className="flex justify-between items-end gap-2 h-32">
                    <div className="w-full bg-primary-container/20 rounded-t-sm h-[40%]"></div>
                    <div className="w-full bg-primary-container/40 rounded-t-sm h-[60%]"></div>
                    <div className="w-full bg-primary-container/60 rounded-t-sm h-[85%]"></div>
                    <div className="w-full bg-primary-container rounded-t-sm h-[70%] animate-pulse"></div>
                    <div className="w-full bg-primary-container/50 rounded-t-sm h-[50%]"></div>
                  </div>
                  <div className="flex justify-between text-[10px] font-label-caps text-surface-variant uppercase tracking-widest">
                    <span>SEO</span>
                    <span>PPC</span>
                    <span>SOCIAL</span>
                    <span>EMAIL</span>
                    <span>DATA</span>
                  </div>
                  <div className="pt-4 border-t border-white/10 flex justify-between items-center">
                    <span className="text-body-md font-semibold">Your Match Score</span>
                    <span className="text-headline-md text-primary-container">92%</span>
                  </div>
                </div>
              </div>
              <button className="relative z-10 w-full mt-8 bg-white text-on-surface py-4 rounded-full font-bold hover:bg-primary-container hover:text-white transition-all flex justify-center items-center gap-2">
                Start Matching
                <span className="material-symbols-outlined">trending_up</span>
              </button>
              {/* Background aesthetic flare */}
              <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-primary rounded-full blur-[100px] opacity-20"></div>
            </div>
          </div>
        </section>

        {/* Slim Inline Bar */}
        <section className="mb-section-v-padding">
          <div className="bg-surface-container-low rounded-full px-8 py-4 flex flex-col md:flex-row items-center justify-between gap-6 border border-border-light">
            <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
              <p className="font-body-md font-semibold text-on-surface whitespace-nowrap">Stay updated:</p>
              <div className="flex w-full md:w-80 bg-white rounded-full p-1 border border-border-light focus-within:border-primary transition-all">
                <input className="bg-transparent border-none focus:ring-0 px-4 py-2 w-full text-body-md" placeholder="Your work email" type="email" />
                <button className="bg-on-surface text-white px-6 py-2 rounded-full font-semibold text-sm hover:bg-primary transition-colors">Subscribe</button>
              </div>
            </div>
            <div className="h-6 w-px bg-border-light hidden md:block"></div>
            <div className="flex items-center gap-4">
              <p className="font-body-md text-text-muted">Explore verified marketing experts</p>
              <Link to="#" className="w-10 h-10 bg-white border border-border-light rounded-full flex items-center justify-center hover:bg-on-surface hover:text-white transition-all group">
                <span className="material-symbols-outlined transition-transform group-hover:translate-x-1">arrow_forward</span>
              </Link>
            </div>
          </div>
        </section>

        {/* Category Sections Container */}
        <div className="space-y-section-v-padding pb-section-v-padding">
          {/* Category Block Helper Component */}
          <section>
            <div className="flex justify-between items-end mb-10">
              <div>
                <span className="font-label-caps text-label-caps text-primary mb-2 block uppercase tracking-widest">Insights</span>
                <h3 className="font-headline-md text-headline-md text-on-surface">MarTechAdda News</h3>
              </div>
              <Link to="#" className="font-body-md font-semibold text-on-surface flex items-center gap-2 hover:text-primary transition-colors">
                View all <span className="material-symbols-outlined text-[18px]">open_in_new</span>
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Article Card 1 */}
              <div className="tonal-card bg-transparent p-4 rounded-lg group cursor-pointer">
                <div className="aspect-[4/3] bg-card-fill-cream rounded-md overflow-hidden mb-6">
                  <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD95UMrQeAJ79eEgGEWkhKWPqcJGJrATXrS9JokSYDI3GABhyPEaZ-HT2Di878EICLJc7MJepQfjNQ5ePz0htQZ6n2TVlloBYbcaKigN4pXM930Aq-G3AF7KBeXSOGfmmdEmrcM4n9Pm07LCrXUylJTznpi6cUhDFCu0tUYflxYN3fm9suk7jOEAy_31D8l9LvnYOnyCEzDi7cAEW0epBtWveG-U6BzRCtZW1nIcB1SUUh1fl62eQNUFMB4opnIBjyXGjOgn2epckQ" alt="MarTechAdda News 1" />
                </div>
                <span className="font-label-caps text-[10px] tracking-widest uppercase text-text-muted mb-3 block">APRIL 12, 2024</span>
                <h4 className="font-body-lg font-bold text-on-surface leading-snug group-hover:text-primary transition-colors mb-4">MarTechAdda Raises $12M to Redefine the Marketing Talent Marketplace</h4>
                <p className="font-body-md text-text-muted line-clamp-2">How our latest funding round will help us build a more transparent future for agency hiring.</p>
              </div>
              {/* Article Card 2 */}
              <div className="tonal-card bg-transparent p-4 rounded-lg group cursor-pointer">
                <div className="aspect-[4/3] bg-card-fill-sage rounded-md overflow-hidden mb-6">
                  <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAVYyw0yvBynF4N6xdqgKT6n-pbCz6txCI38y92j9Sz2YNueCcxghXZ68bh2RJX6PnB79IVeE2rH7e8lde48p_HL90HmtGcw1vw8MFkBoB3gzVEFQidu7B8Brm6kzaRvyjtSPrYnz_V4vbMCTN4DGUiC_qGO7GeJ0m3G5WplbWlqBz79ULg1PrInchqu1DauT-lWKxaaN3QGYXcxLrlz8F2-GN2qfI3zQqsgIP0QXrccDfS8eQ2MnLBhw_a8d4mzRTiY2-jOunIG5M" alt="MarTechAdda News 2" />
                </div>
                <span className="font-label-caps text-[10px] tracking-widest uppercase text-text-muted mb-3 block">APRIL 08, 2024</span>
                <h4 className="font-body-lg font-bold text-on-surface leading-snug group-hover:text-primary transition-colors mb-4">Announcing our New Global Agency Verification Standards</h4>
                <p className="font-body-md text-text-muted line-clamp-2">Setting the bar for performance transparency in the digital marketing industry.</p>
              </div>
              {/* Article Card 3 */}
              <div className="tonal-card bg-transparent p-4 rounded-lg group cursor-pointer">
                <div className="aspect-[4/3] bg-surface-container rounded-md overflow-hidden mb-6">
                  <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB-SagkUpqTzu5JCKidMBhf_TbTnPIKOsHwLFK9qQJrXYU2fBFRixbjWvweFnQmHFODrsoCosodfYXcSbyzhYh8J3641vVjQ-0JzRINQUCHBKGa9vT-e__DRB8K6RD8kgTDqmQb-tjOLDYVpDZow_DO6TGBuw_-J7fuY2IXBYISf9WJqXtIshrqCX_Ey2LfEcoYACC5C95xfskTmanBy39kGK9szrGWSeryk-0DzPpiT5wmoHAd6a1W5ymzbXNPqFz85cqRTHeV_Sk" alt="MarTechAdda News 3" />
                </div>
                <span className="font-label-caps text-[10px] tracking-widest uppercase text-text-muted mb-3 block">APRIL 01, 2024</span>
                <h4 className="font-body-lg font-bold text-on-surface leading-snug group-hover:text-primary transition-colors mb-4">The Q2 2024 State of MarTech Report: Download Now</h4>
                <p className="font-body-md text-text-muted line-clamp-2">Deep dive into the latest trends across 15+ marketing technology categories.</p>
              </div>
            </div>
          </section>

          {/* Marketing Trends & AI */}
          <section>
            <div className="flex justify-between items-end mb-10 border-b border-border-light pb-6">
              <h3 className="font-headline-md text-headline-md text-on-surface flex items-center gap-3">
                Marketing Trends & AI
                <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>auto_awesome</span>
              </h3>
              <Link to="#" className="font-body-md font-semibold text-on-surface flex items-center gap-2 hover:text-primary transition-colors">
                View all <span className="material-symbols-outlined text-[18px]">chevron_right</span>
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-stack-lg">
              {/* Trending Card 1 */}
              <div className="group cursor-pointer">
                <div className="aspect-video bg-on-surface rounded-lg mb-6 overflow-hidden relative">
                  <img className="w-full h-full object-cover opacity-80 group-hover:scale-110 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDSImh4f2E2NnFtLFwyRNhiLphtNfiiI8RqG2uen0ppuwkJRblWu-PWhg3SqUiVqPQyfH6Jp9jHROZyUioS_ovBAX2-IijzpTCx4cqZBaANSb_dJ7LWRgInP_cUOObL44XC9q4pjU-PLgEXxsedsDxID5WqxneZPx9jy0jrddTaFtz33gRWQI2SeEcYNuTeFD7suuc90tYdrqmNrtRRvLpQTukvhQfLl6uSe5ldqj9sJSGj4uBU-jn7PCEC06Sv-98dLVJFkWSYUd4" alt="Trending 1" />
                  <div className="absolute inset-0 bg-gradient-to-t from-on-surface via-transparent to-transparent opacity-60"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="bg-primary text-white text-[10px] font-bold px-2 py-1 rounded uppercase mb-2 inline-block tracking-widest">Hot Now</span>
                  </div>
                </div>
                <h4 className="font-body-lg font-bold text-on-surface group-hover:text-primary transition-colors">Can AI Outperform Human Media Buyers? The 2024 Verdict</h4>
                <p className="font-body-md text-text-muted mt-2">A side-by-side comparison of manual vs. automated bidding strategies.</p>
              </div>
              {/* Trending Card 2 */}
              <div className="group cursor-pointer">
                <div className="aspect-video bg-card-fill-sage rounded-lg mb-6 overflow-hidden relative border border-border-light">
                  <img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAIeBj-6HvHYyYXGWQVERy-9iYWT2GsBuT_6qj8WLYqiKpteoBAOFcsPeUDQCTRmWokKj5ea8ctdXVr6hjQD2di8-TnKBnmzFVAyK3J22j5MMWsQzLGm1HVAmyzd6daIPilLKqmKp7TQ5NIfyFa7gjyguj6jyhWEMUYJCE74NrW2wMbIgD-Nwl9Vd33ls6_TY-00vC6JmOIo3SwCcsiJ8YCCwGDOlsMOGczZi14TM0XTvyzw7gEE33vb9OcGAKuyH7huBaDGekXnjI" alt="Trending 2" />
                </div>
                <h4 className="font-body-lg font-bold text-on-surface group-hover:text-primary transition-colors">The Ethical Implications of Predictive Customer Modeling</h4>
                <p className="font-body-md text-text-muted mt-2">Balancing conversion rates with consumer privacy in the age of data regulation.</p>
              </div>
              {/* Trending Card 3 */}
              <div className="group cursor-pointer">
                <div className="aspect-video bg-card-fill-cream rounded-lg mb-6 overflow-hidden relative border border-border-light">
                  <img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC_7eiUmmhUhc3O_1W9EvN6_sB2RP7-Vai4FGiMCL-AUOO6A3CIwBMDZBf5O5KjUEvPwFaOlM9Kp8tW39admKpL0j2nmHHivY9XZe7i1YxE3p0V_L6YDin1W2xjyLvmG2YPng1C3Txda3uSemBWOs84aa4l_u44H_UWuQxhe3N_cAHxMZC3nmCbzXHv6fVYgdzXuZusJKgWpk0dyVbIeooYvGOsjD5D5JgnGoAjMCoFwfsP8kuU_opwj9KQEBx9_iYwC1XZYyCIugs" alt="Trending 3" />
                </div>
                <h4 className="font-body-lg font-bold text-on-surface group-hover:text-primary transition-colors">Top 10 Generative AI Tools Every Marketer Should Master in 2024</h4>
                <p className="font-body-md text-text-muted mt-2">Beyond ChatGPT: The specialized stack for creative and data automation.</p>
              </div>
            </div>
          </section>
        </div>
      </main>

      {/* Recently Published Section */}
      <section className="bg-surface-container-lowest py-section-v-padding">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-stack-lg">
            <div className="lg:col-span-8">
              <h3 className="font-headline-md text-headline-md text-on-surface mb-10">Recently published</h3>
              <div className="space-y-8">
                {/* Recent Article Row 1 */}
                <div className="flex gap-6 group cursor-pointer border-b border-border-light pb-8">
                  <div className="w-24 h-24 md:w-32 md:h-32 shrink-0 bg-card-fill-sage rounded-lg overflow-hidden">
                    <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAeEu1nDYvNPitKFIVCpPHMol_07ER7Xx9vdNnDvhB5X9i4QwTkK2iruLwkkgYl3p7DTpiLkdapmlamajovJpURGo64eNfJpReSjMVAm34RFiD7Th3BZA8T_ZnRwJjpeAA4tEUSV3IkrySvi7iN86RrZB5pWSDqVln8zaNrmSlTXEcLQcIhaW09aNDEUKCnzILTh1m5nYychnZRyGi2udz8hOC4PTumVaA38Bm24vH0zQgcm5j5pBtchPvHn2SopPsiwWJfy8Xlg0w" alt="Recent 1" />
                  </div>
                  <div>
                    <span className="font-label-caps text-[10px] tracking-widest text-text-muted uppercase mb-1 block">Hiring & Agencies • 2 days ago</span>
                    <h4 className="font-body-lg font-bold text-on-surface group-hover:text-primary transition-colors mb-2">How to Vet Performance Marketing Agencies for SaaS Growth</h4>
                    <p className="font-body-md text-text-muted line-clamp-1">The five red flags you should look for in any agency pitch deck before signing a contract.</p>
                  </div>
                </div>
                {/* Recent Article Row 2 */}
                <div className="flex gap-6 group cursor-pointer border-b border-border-light pb-8">
                  <div className="w-24 h-24 md:w-32 md:h-32 shrink-0 bg-card-fill-cream rounded-lg overflow-hidden">
                    <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCRhiiEpUUjy-l5Muivf4PM-Scti0jfnqWSUr1EeaVMEW8IDXa-zCvjFzixeWUYjpGCKJmE1qJb9BlXrZ8TRRl5mTU8BpfGJaRJZkUDk7V_nTqFpR50xUuY8gTCrUgLRC5Wx-UtHtVaGmjt0a8rj4K-qiVMubqMlXKTIE8bCGnsqhBRcSlpfLc06l9v9ns3FwqY3Wkbi-RbIK13Im21jvg6gf0bIQL25h8KucHhT21p4R_OWWxyW2QuElGtLV6xlKEkdYoacKoV0wE" alt="Recent 2" />
                  </div>
                  <div>
                    <span className="font-label-caps text-[10px] tracking-widest text-text-muted uppercase mb-1 block">Branding • 5 days ago</span>
                    <h4 className="font-body-lg font-bold text-on-surface group-hover:text-primary transition-colors mb-2">Why Consistency is the Most Underrated Growth Strategy</h4>
                    <p className="font-body-md text-text-muted line-clamp-1">Lessons from top B2B brands that stayed the course while others pivoted too early.</p>
                  </div>
                </div>
                {/* Recent Article Row 3 */}
                <div className="flex gap-6 group cursor-pointer border-b border-border-light pb-8">
                  <div className="w-24 h-24 md:w-32 md:h-32 shrink-0 bg-surface-container rounded-lg overflow-hidden">
                    <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBBDjskbL2H8qZsR5Cu02H72puI66Hx53MGdMcwC-KPRpZGnUjAe6ldWgAvoKFSL9UCXqfPELhn7w79E0d0zK-bOwxt-7b4GDF_Mi1yDhhy4RPDORZQDuEYpM7BM39SEemZYR91JDxGpPeM058L3JFiyYsflW12dJeZXdiEXmttBUrlAptb1rRHoN3zw2pjgq5iJRHpy4t_RwaYG6771c6H2a_dBh14z-uHh5WjEJliLCtCZOu4sv1USnPkQlc8HEKu_hmanO18ous" alt="Recent 3" />
                  </div>
                  <div>
                    <span className="font-label-caps text-[10px] tracking-widest text-text-muted uppercase mb-1 block">Strategic Marketing • 1 week ago</span>
                    <h4 className="font-body-lg font-bold text-on-surface group-hover:text-primary transition-colors mb-2">The Hidden Costs of Premature Scaling in Ad Spend</h4>
                    <p className="font-body-md text-text-muted line-clamp-1">Data-driven insights on why increasing your budget too fast often leads to diminishing ROAS.</p>
                  </div>
                </div>
              </div>

              {/* Pagination */}
              <div className="mt-12 flex items-center gap-2">
                <button className="w-10 h-10 flex items-center justify-center rounded-full bg-on-surface text-white font-bold">1</button>
                <button className="w-10 h-10 flex items-center justify-center rounded-full border border-border-light hover:bg-surface-container transition-colors">2</button>
                <button className="w-10 h-10 flex items-center justify-center rounded-full border border-border-light hover:bg-surface-container transition-colors">3</button>
                <span className="mx-2 text-text-muted">...</span>
                <button className="w-10 h-10 flex items-center justify-center rounded-full border border-border-light hover:bg-surface-container transition-colors">12</button>
                <button className="ml-4 flex items-center gap-2 font-semibold hover:text-primary transition-colors">
                  Next <span className="material-symbols-outlined">trending_flat</span>
                </button>
              </div>
            </div>

            {/* Sidebar Content / Ads */}
            <aside className="lg:col-span-4 space-y-stack-lg">
              <div className="bg-card-fill-sage p-8 rounded-lg border border-border-light">
                <h5 className="font-headline-md text-[24px] mb-4">Want specialized advice?</h5>
                <p className="font-body-md text-text-muted mb-6">Talk to our concierge team about finding the perfect agency for your specific niche and budget.</p>
                <button className="w-full bg-on-surface text-white py-3 rounded-full font-bold hover:bg-primary transition-colors">Book a Free Consult</button>
              </div>
              <div className="p-8 border border-border-light rounded-lg">
                <h5 className="font-label-caps text-[10px] tracking-widest text-on-surface mb-6 uppercase">Popular Categories</h5>
                <div className="flex flex-wrap gap-2">
                  {['Advertising', 'Branding', 'MarTech News', 'Hiring Agencies', 'Strategic Marketing', 'Trends & AI', 'Collateral'].map(cat => (
                    <Link key={cat} to="#" className="px-4 py-2 border border-border-light rounded-full text-sm font-semibold hover:bg-on-surface hover:text-white transition-all">
                      {cat}
                    </Link>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Newsletter Band */}
      <section className="bg-dark-section-bg py-section-v-padding text-white">
        <div className="max-w-7xl mx-auto px-8 text-center">
          <h2 className="font-display-lg text-[40px] md:text-[56px] font-bold mb-6">Join 25,000+ marketing leaders.</h2>
          <p className="font-body-lg text-surface-variant max-w-2xl mx-auto mb-10">Get the weekly MarTechAdda briefing. No fluff, just high-performance strategy and vetted agency insights delivered to your inbox.</p>
          <div className="max-w-md mx-auto relative flex flex-col md:flex-row gap-2">
            <input className="flex-1 bg-white text-on-surface px-8 py-4 rounded-full border-none focus:ring-2 focus:ring-primary-container text-lg" placeholder="Your work email address" type="email" />
            <button className="bg-primary-container text-white px-8 py-4 rounded-full font-bold hover:bg-primary-container/90 transition-all whitespace-nowrap">Join Now</button>
          </div>
          <p className="mt-6 text-sm text-surface-variant/60 font-body-md">By subscribing, you agree to our Privacy Policy and Terms of Service.</p>
        </div>
      </section>
    </div>
  );
}
