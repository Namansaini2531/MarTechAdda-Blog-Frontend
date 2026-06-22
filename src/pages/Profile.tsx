import { Link } from 'react-router-dom';

export default function Profile() {
  return (
    <div className="bg-background-surface">
      <div className="max-w-[1280px] mx-auto px-gutter py-section-v-padding">
        {/* Header Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-stack-lg items-center mb-section-v-padding">
          <div className="lg:col-span-6">
            <p className="font-label-caps text-label-caps text-primary tracking-widest mb-4">THE ARCHITECT</p>
            <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg text-on-surface mb-6">
              Meet <span className="text-primary-container">Julian Sterling</span>
            </h1>
            <div className="space-y-4 font-body-md text-text-muted mb-8 max-w-lg mt-8">
              <p>
                Julian Sterling is a MarTech architect with over 15 years of experience leading digital transformation for Fortune 500 companies. With a unique background spanning both software engineering and behavioral psychology, Julian brings a clinical yet human-centric approach to marketing operations.
              </p>
              <p>
                Founded in 2024, MarTechAdda is the culmination of Julian's vision to democratize high-level marketing intelligence. His work focuses on distilling noise into actionable strategy, ensuring that technology serves the marketer, not the other way around.
              </p>
            </div>
            <div className="flex items-center gap-6">
              <Link to="#" className="flex items-center gap-2 font-semibold text-primary hover:opacity-80 transition-opacity">
                <span className="material-symbols-outlined text-[20px]">link</span> Portfolio
              </Link>
              <Link to="/contact" className="flex items-center gap-2 font-semibold text-primary hover:opacity-80 transition-opacity">
                <span className="material-symbols-outlined text-[20px]">mail</span> Contact Julian
              </Link>
            </div>
          </div>
          
          <div className="lg:col-span-6 space-y-6">
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-surface-container">
              <img 
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                alt="Julian Sterling" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
              <p className="absolute bottom-6 left-6 right-6 text-white font-body-md font-semibold text-lg leading-snug">
                "In an era of AI and automation, the most valuable currency is still genuine human insight."
              </p>
            </div>
            
          </div>
        </div>

        {/* Core Competencies */}
        <div className="text-center mb-16">
          <p className="font-label-caps text-label-caps text-primary tracking-widest mb-4">MARTECH</p>
          <h2 className="font-headline-md text-headline-md text-on-surface mb-4">Core Competencies</h2>
          <p className="font-body-md text-text-muted max-w-2xl mx-auto mb-8">
            Bridging technical precision with strategic business outcomes through a decade of hands-on experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-section-v-padding">
          {[
            { icon: "analytics", title: "MarTech Stack Audits", desc: "Optimizing complex software ecosystems to reduce redundancy, eliminate shadow IT, and maximize enterprise ROI." },
            { icon: "psychology", title: "Behavioral Data Science", desc: "Translating heavy user behavior into predictive models that drive conversion and long-term customer lifetime value." },
            { icon: "memory", title: "Strategic AI Integration", desc: "Deploying LLMs and machine learning workflows that actually work within established marketing operations frameworks." }
          ].map((comp, idx) => (
            <div key={idx} className="border border-border-light rounded-2xl p-8 bg-surface-bright relative group hover:border-primary transition-colors cursor-pointer">

              <div className="w-12 h-12 rounded-full bg-surface-container flex items-center justify-center mb-6 text-primary">
                <span className="material-symbols-outlined">{comp.icon}</span>
              </div>
              <h3 className="font-body-lg font-bold mb-3">{comp.title}</h3>
              <p className="font-body-md text-text-muted">{comp.desc}</p>
            </div>
          ))}
        </div>

        {/* Professional Journey */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-stack-lg mb-section-v-padding">
          <div className="lg:col-span-4">
            <p className="font-label-caps text-label-caps text-text-muted tracking-widest mb-4">THE NARRATIVE</p>
            <h2 className="font-headline-md text-headline-md text-on-surface mb-6">Professional Journey</h2>
            <p className="font-body-md text-text-muted mb-8 mt-8">
              Julian's career began at the intersection of early-stage SaaS and digital media, evolving from a technical developer into a strategic growth leader. His path is defined by a constant curiosity about how systems—both technical and human—interact.
            </p>
            <div className="border border-border-light rounded-xl p-6 bg-surface-bright">
              <p className="italic text-text-muted text-sm leading-relaxed">
                "Every career pivot was driven by a single question: How can we make the technology feel more human?"
              </p>
            </div>
          </div>
          
          <div className="lg:col-span-8">
            <div className="relative border-l border-border-light pl-10 space-y-12 pb-8 ml-4">
              {[
                { title: "The Technical Foundation", desc: "Started as a Full Stack Engineer at a Silicon Valley growth agency, building custom analytics dashboards before standard tools existed. This era provided Julian with a deep appreciation for the 'plumbing' of digital marketing—the APIs, databases, and tracking pixels that make everything possible." },
                { title: "The Strategic Pivot", desc: "Transitioned to VP of Marketing Technology, bridging the gap between engineering teams and CMO objectives at a global fintech firm. Here, he mastered the art of 'translation'—explaining complex technical debt to stakeholders while ensuring creative teams had the tools needed to innovate at scale." },
                { title: "The Consultancy Era & MarTechAdda", desc: "Founded a boutique consultancy focused on high-growth B2B startups, specializing in revenue operations and attribution modeling. This direct exposure to the challenges of modern CMOs led to the creation of MarTechAdda—a platform dedicated to clinical precision in marketing intelligence." }
              ].map((item, idx) => (
                <div key={idx} className="relative group">
                  <div className="absolute -left-[45px] top-1 w-3 h-3 bg-primary-container rounded-full ring-4 ring-white"></div>
                  <div className="border border-border-light rounded-2xl p-8 bg-white group-hover:border-primary-container transition-colors relative">

                    <div className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center mb-6">
                      <span className="material-symbols-outlined text-[20px]">corporate_fare</span>
                    </div>
                    <h3 className="font-body-lg font-bold mb-3">{item.title}</h3>
                    <p className="font-body-md text-text-muted">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Key Milestones (Dark Section) */}
      <section className="bg-dark-section-bg py-section-v-padding text-white">
        <div className="max-w-[1280px] mx-auto px-gutter">
          <div className="text-center mb-16">
            <p className="font-label-caps text-label-caps text-primary tracking-widest mb-4">LEADERSHIP</p>
            <h2 className="font-headline-md text-headline-md mb-8">Key Professional Milestones</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { year: "2014", icon: "emoji_events", title: "MarTech Disruptor Award", desc: "Recognized for innovative use of data in customer acquisition at the Global Marketing Summit." },
              { year: "2018", icon: "menu_book", title: "Bestselling Author", desc: "Published 'The Human Algorithm', which reached #1 on industry charts for behavioral marketing." },
              { year: "2022", icon: "rocket_launch", title: "Strategic Exit", desc: "Successfully negotiated the acquisition of a proprietary attribution software platform by a Top 10 CRM." },
              { year: "2024", icon: "hub", title: "MarTechAdda Launch", desc: "Launched the world's most focused community for technical marketers and operations professionals." }
            ].map((milestone, idx) => (
              <div key={idx} className="relative group cursor-pointer">

                <div className="w-10 h-10 rounded-full bg-primary-container flex items-center justify-center mb-6">
                  <span className="material-symbols-outlined text-[20px]">{milestone.icon}</span>
                </div>
                <p className="font-label-caps text-primary-fixed-dim mb-3">{milestone.year}</p>
                <h3 className="font-body-lg font-bold mb-3">{milestone.title}</h3>
                <p className="font-body-md text-surface-variant/80 text-sm leading-relaxed">{milestone.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="bg-surface-container-low py-16 text-center">
        <h3 className="font-headline-md mb-8">Inspired by Julian's vision?</h3>
        <div className="flex justify-center gap-4">
          <button className="bg-primary-container text-white px-8 py-3 rounded-full font-bold hover:bg-primary-container/90 transition-colors">
            Find MarTech Experts
          </button>
          <button className="border border-border-light bg-white px-8 py-3 rounded-full font-bold hover:bg-surface-container transition-colors">
            Join our Network
          </button>
        </div>
      </section>
      
      {/* Newsletter */}
      <section className="bg-surface-container-highest py-16">
        <div className="max-w-[1280px] mx-auto px-gutter flex flex-col md:flex-row justify-between items-center gap-8">
          <div>
            <h2 className="font-display-lg text-[40px] font-bold mb-2">Stay Ahead of the Curve.</h2>
            <p className="text-text-muted">Expert insights from industry leaders, delivered weekly to your inbox.</p>
          </div>
          <div className="flex w-full md:w-auto gap-2 bg-white rounded-full p-1 border border-border-light focus-within:border-primary transition-all">
            <input type="email" placeholder="Enter your work email" className="bg-transparent border-none focus:ring-0 px-6 py-3 min-w-[250px]" />
            <button className="bg-primary-container text-white px-8 py-3 rounded-full font-bold hover:bg-primary-container/90 transition-colors">
              Subscribe Now
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
