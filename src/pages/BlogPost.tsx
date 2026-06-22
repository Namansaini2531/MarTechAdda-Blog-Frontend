import { Link } from 'react-router-dom';

export default function BlogPost() {
  return (
    <div className="bg-background-surface font-body-md text-on-surface">
      <main className="max-w-[1280px] mx-auto px-gutter py-section-v-padding">
        <article className="max-w-3xl mx-auto">
          {/* Breadcrumb / Back Link */}
          <div className="mb-8">
            <Link to="/blog" className="font-label-caps text-[10px] tracking-widest text-text-muted hover:text-primary transition-colors flex items-center gap-2 uppercase">
              <span className="material-symbols-outlined text-[16px]">arrow_back</span> Back to Blog
            </Link>
          </div>

          {/* Article Header */}
          <header className="mb-10">
            <p className="font-label-caps text-[10px] tracking-widest text-primary mb-4 uppercase">Strategic Marketing</p>
            <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg text-on-surface mb-6 leading-tight">
              The Human Element in Revenue Operations
            </h1>
            
            {/* Author Info */}
            <div className="flex items-center gap-4 py-6 border-t border-b border-border-light">
              <div className="w-12 h-12 rounded-full overflow-hidden bg-surface-variant">
                <img 
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&h=256&q=80" 
                  alt="Julian Sterling" 
                  className="w-full h-full object-cover" 
                />
              </div>
              <div className="flex-1">
                <p className="font-body-md font-bold text-on-surface">Julian Sterling</p>
                <div className="flex items-center gap-2 font-label-caps text-[10px] tracking-widest text-text-muted uppercase mt-1">
                  <span>Sep 28, 2024</span>
                  <span className="w-1 h-1 bg-border-light rounded-full"></span>
                  <span>10 MIN READ</span>
                </div>
              </div>
              <div className="flex gap-2">
                <button className="w-10 h-10 rounded-full border border-border-light flex items-center justify-center text-text-muted hover:bg-surface-container hover:text-primary transition-colors">
                  <span className="material-symbols-outlined text-[20px]">share</span>
                </button>
                <button className="w-10 h-10 rounded-full border border-border-light flex items-center justify-center text-text-muted hover:bg-surface-container hover:text-primary transition-colors">
                  <span className="material-symbols-outlined text-[20px]">bookmark</span>
                </button>
              </div>
            </div>
          </header>

          {/* Hero Image */}
          <figure className="mb-12 aspect-[16/9] rounded-2xl overflow-hidden bg-card-fill-sage">
            <img 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuC_7eiUmmhUhc3O_1W9EvN6_sB2RP7-Vai4FGiMCL-AUOO6A3CIwBMDZBf5O5KjUEvPwFaOlM9Kp8tW39admKpL0j2nmHHivY9XZe7i1YxE3p0V_L6YDin1W2xjyLvmG2YPng1C3Txda3uSemBWOs84aa4l_u44H_UWuQxhe3N_cAHxMZC3nmCbzXHv6fVYgdzXuZusJKgWpk0dyVbIeooYvGOsjD5D5JgnGoAjMCoFwfsP8kuU_opwj9KQEBx9_iYwC1XZYyCIugs" 
              alt="The Human Element in Revenue Operations" 
              className="w-full h-full object-cover"
            />
            <figcaption className="text-center text-xs text-text-muted mt-3">
              Image source: MarTechAdda visual assets.
            </figcaption>
          </figure>

          {/* Article Content */}
          <div className="font-body-lg text-text-muted space-y-8 leading-relaxed">
            <p className="text-xl text-on-surface font-medium leading-relaxed">
              Why behavioral psychology remains the most important foundation for building sustainable marketing architecture. While tools like CDPs and AI-driven bidding platforms dominate the conversation, the ultimate success of revenue operations depends on understanding human nuance.
            </p>

            <p>
              In my 15 years as a MarTech architect, I’ve seen countless organizations attempt to solve strategic deficiencies with raw technological horsepower. They invest millions in predictive analytics suites, deploy elaborate multi-touch attribution models, and automate every conceivable touchpoint in the customer journey. Yet, their conversion rates remain stagnant, or worse, their customer lifetime value (CLTV) begins to erode.
            </p>

            <h2 className="font-headline-md text-on-surface mt-12 mb-6">The Automation Illusion</h2>
            <p>
              The trap is what I call "The Automation Illusion"—the belief that because a process can be automated, it should be. We optimize for machine-driven discovery and algorithmic efficiency, entirely forgetting that at the end of the data pipeline is a human being making a fundamentally emotional decision to purchase.
            </p>
            
            <blockquote className="border-l-4 border-primary pl-6 py-2 my-10 italic font-medium text-xl text-on-surface bg-surface-bright rounded-r-lg">
              "Every career pivot was driven by a single question: How can we make the technology feel more human?"
            </blockquote>

            <p>
              When revenue operations (RevOps) teams isolate themselves from behavioral psychology, they build pipelines that are mathematically perfect but experientially abrasive. The solution is not to abandon the technology, but to recalibrate our implementation frameworks to prioritize psychological resonance.
            </p>

            <h2 className="font-headline-md text-on-surface mt-12 mb-6">Building a Human-Centric Stack</h2>
            <ul className="list-disc pl-6 space-y-4">
              <li>
                <strong className="text-on-surface">Data with Empathy:</strong> Look beyond transactional metrics. Implement behavioral tracking that seeks to understand intent and friction, rather than just clicks and cart abandonment.
              </li>
              <li>
                <strong className="text-on-surface">Strategic Friction:</strong> Sometimes, making a process "too easy" reduces the perceived value of the product. Know when to introduce positive friction that validates the user's decision-making process.
              </li>
              <li>
                <strong className="text-on-surface">Narrative Reporting:</strong> Your C-suite doesn't care about your metrics in a vacuum. Learn to speak their language using impact-driven data narratives.
              </li>
            </ul>

            <p>
              The most successful digital ecosystems I've designed weren't the ones with the most advanced AI integrations; they were the ones where the technology was effectively invisible, operating as a quiet facilitator of a compelling human narrative.
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 pt-10 mt-12 border-t border-border-light">
              {['Revenue Operations', 'Behavioral Psychology', 'MarTech Stack', 'Strategy'].map(tag => (
                <Link key={tag} to="#" className="px-4 py-2 border border-border-light rounded-full text-xs font-semibold hover:bg-on-surface hover:text-white transition-all text-text-muted">
                  {tag}
                </Link>
              ))}
            </div>
          </div>
          
          {/* Author Bio Box */}
          <div className="mt-16 bg-surface-bright border border-border-light rounded-2xl p-8 flex flex-col md:flex-row gap-6 items-start md:items-center">
            <div className="w-24 h-24 rounded-full overflow-hidden bg-surface-variant shrink-0">
              <img 
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&h=256&q=80" 
                alt="Julian Sterling" 
                className="w-full h-full object-cover" 
              />
            </div>
            <div>
              <p className="font-label-caps text-[10px] tracking-widest text-primary uppercase mb-2">ABOUT THE AUTHOR</p>
              <h3 className="font-headline-md text-xl font-bold mb-2 text-on-surface">Julian Sterling</h3>
              <p className="font-body-md text-text-muted text-sm leading-relaxed mb-4">
                Julian Sterling is a MarTech architect with over 15 years of experience leading digital transformation for Fortune 500 companies. With a unique background spanning both software engineering and behavioral psychology, Julian brings a clinical yet human-centric approach to marketing operations.
              </p>
              <Link to="/profile" className="font-body-md font-semibold text-primary hover:opacity-80 transition-opacity">
                View Full Profile
              </Link>
            </div>
          </div>

        </article>
      </main>

      {/* Newsletter Band */}
      <section className="bg-dark-section-bg py-section-v-padding text-white mt-12">
        <div className="max-w-7xl mx-auto px-8 text-center">
          <h2 className="font-display-lg text-[40px] md:text-[56px] font-bold mb-6">Enjoyed this article?</h2>
          <p className="font-body-lg text-surface-variant max-w-2xl mx-auto mb-10">Get the weekly MarTechAdda briefing. No fluff, just high-performance strategy and vetted agency insights delivered to your inbox.</p>
          <div className="max-w-md mx-auto relative flex flex-col md:flex-row gap-2">
            <input className="flex-1 bg-white text-on-surface px-8 py-4 rounded-full border-none focus:ring-2 focus:ring-primary-container text-lg" placeholder="Your work email address" type="email" />
            <button className="bg-primary-container text-white px-8 py-4 rounded-full font-bold hover:bg-primary-container/90 transition-all whitespace-nowrap">Subscribe</button>
          </div>
        </div>
      </section>
    </div>
  );
}
