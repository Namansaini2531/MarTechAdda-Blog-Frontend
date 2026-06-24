import { useParams, Link } from 'react-router-dom';

const POST_DATA = {
  'the-human-element-in-revenue-operations': {
    category: 'Strategic Marketing',
    title: 'The Human Element in Revenue Operations',
    author: {
      name: 'Julian Sterling',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&h=256&q=80',
      role: 'MarTech Architect'
    },
    date: 'Sep 28, 2024',
    readTime: '10 MIN READ',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC_7eiUmmhUhc3O_1W9EvN6_sB2RP7-Vai4FGiMCL-AUOO6A3CIwBMDZBf5O5KjUEvPwFaOlM9Kp8tW39admKpL0j2nmHHivY9XZe7i1YxE3p0V_L6YDin1W2xjyLvmG2YPng1C3Txda3uSemBWOs84aa4l_u44H_UWuQxhe3N_cAHxMZC3nmCbzXHv6fVYgdzXuZusJKgWpk0dyVbIeooYvGOsjD5D5JgnGoAjMCoFwfsP8kuU_opwj9KQEBx9_iYwC1XZYyCIugs',
    content: (
      <>
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
      </>
    )
  },
  'the-psychology-of-color': {
    category: 'Article',
    title: 'The Psychology of Color in Modern B2B SaaS Branding',
    author: {
      name: 'Elena Vance',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDe_w1kml28WZQeRLkH4XX63HYUvurCpqLMuhZJqeeqyP6CJISuNPqTYX9TjecnKQlAB_suRf5duv0uO3LHNzDYQKaYAdR60GonrF91TdTxu5ZEa3wb_-LBr-2geVa0YTNFnu3QC0LE5mI6IaXFCMkb5tkqQX05dRUFmtUmoh_LxlTVQvmp7Z1sBI2IYoWMsj_ATyqaWt_RZCBh_T0ZvHWogflOTEMZmOslMnCgs6h5AFz-e2CCRA1xMVyZKQVwzq74HFSZ_bZ7SE8',
      role: 'Brand Strategist'
    },
    date: 'May 12, 2024',
    readTime: '6 MIN READ',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop',
    content: (
      <>
        <p className="text-xl text-on-surface font-medium leading-relaxed">
          How enterprise software giants are moving away from "Safe Blue" towards high-velocity palettes that command attention in crowded dashboards.
        </p>

        <p>
          For over two decades, B2B software was defined by a single color: IBM Blue. It signaled trust, reliability, and corporate safety. But in an era where enterprise users expect consumer-grade design, the visual language of SaaS is experiencing a radical shift. We are witnessing the death of "Safe Blue."
        </p>

        <h2 className="font-headline-md text-on-surface mt-12 mb-6">The High-Velocity Palette</h2>
        <p>
          Today's fastest-growing SaaS companies use color not just to soothe, but to energize. Vibrant purples, neon greens, and assertive oranges are becoming standard fare. This isn't just an aesthetic trend—it's a psychological one. When users spend 8 hours a day in a software environment, they need a visual landscape that keeps them alert and engaged, not sedated.
        </p>
        
        <blockquote className="border-l-4 border-primary pl-6 py-2 my-10 italic font-medium text-xl text-on-surface bg-surface-bright rounded-r-lg">
          "We don't want our software to feel like a spreadsheet. We want it to feel like a control center."
        </blockquote>

        <p>
          Color also serves a critical functional role. High-contrast palettes improve data visualization, allowing users to parse complex analytics dashboards at a glance. By assigning specific, vibrant colors to key metrics or actions, brands create a subconscious visual hierarchy that accelerates user decision-making.
        </p>
      </>
    )
  },
  'the-typography-of-trust': {
    category: 'Guide',
    title: 'The Typography of Trust: Selecting Fonts for FinTech',
    author: {
      name: 'Sarah Jenkins',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      role: 'UX Researcher'
    },
    date: 'May 08, 2024',
    readTime: '8 MIN READ',
    image: 'https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&w=2564&auto=format&fit=crop',
    content: (
      <>
        <p className="text-xl text-on-surface font-medium leading-relaxed">
          Why sans-serif isn't always the answer for modern banking brands aiming for authority.
        </p>

        <p>
          When designing for FinTech, the margin for error is zero. Users are entrusting these platforms with their life savings, business capital, and financial future. Before a single word of copy is read, the typography must establish one thing above all else: absolute trustworthiness.
        </p>

        <h2 className="font-headline-md text-on-surface mt-12 mb-6">The Neobank Trap</h2>
        <p>
          Over the last decade, a wave of challenger banks and payment apps adopted a ubiquitous visual style: friendly, rounded, geometric sans-serif fonts. While this effectively communicated "we aren't a traditional, stuffy bank," it often drifted too far into approachability at the expense of authority.
        </p>
        
        <blockquote className="border-l-4 border-primary pl-6 py-2 my-10 italic font-medium text-xl text-on-surface bg-surface-bright rounded-r-lg">
          "Your app might be easy to use, but if the typography looks like it belongs on a dating app, I'm not giving you my routing number."
        </blockquote>

        <p>
          We are now seeing a correction. The most successful FinTech brands in 2024 are blending the modern cleanliness of sans-serif interfaces with the institutional gravity of serif headlines. This hybrid approach signals both technological competence and historical stability.
        </p>
      </>
    )
  }
};

export default function BlogPost() {
  const { slug } = useParams();
  const postKey = slug && POST_DATA[slug as keyof typeof POST_DATA] ? slug : 'the-human-element-in-revenue-operations';
  const post = POST_DATA[postKey as keyof typeof POST_DATA];

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
            <p className="font-label-caps text-[10px] tracking-widest text-primary mb-4 uppercase">{post.category}</p>
            <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg text-on-surface mb-6 leading-tight">
              {post.title}
            </h1>
            
            {/* Author Info */}
            <div className="flex items-center gap-4 py-6 border-t border-b border-border-light">
              <div className="w-12 h-12 rounded-full overflow-hidden bg-surface-variant">
                <img 
                  src={post.author.image} 
                  alt={post.author.name} 
                  className="w-full h-full object-cover" 
                />
              </div>
              <div className="flex-1">
                <p className="font-body-md font-bold text-on-surface">{post.author.name}</p>
                <div className="flex items-center gap-2 font-label-caps text-[10px] tracking-widest text-text-muted uppercase mt-1">
                  <span>{post.date}</span>
                  <span className="w-1 h-1 bg-border-light rounded-full"></span>
                  <span>{post.readTime}</span>
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
              src={post.image} 
              alt={post.title} 
              className="w-full h-full object-cover"
            />
            <figcaption className="text-center text-xs text-text-muted mt-3">
              Image source: MarTechAdda visual assets.
            </figcaption>
          </figure>

          {/* Article Content */}
          <div className="font-body-lg text-text-muted space-y-8 leading-relaxed">
            {post.content}

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
                src={post.author.image} 
                alt={post.author.name} 
                className="w-full h-full object-cover" 
              />
            </div>
            <div>
              <p className="font-label-caps text-[10px] tracking-widest text-primary uppercase mb-2">ABOUT THE AUTHOR</p>
              <h3 className="font-headline-md text-xl font-bold mb-2 text-on-surface">{post.author.name}</h3>
              <p className="font-body-md text-text-muted text-sm leading-relaxed mb-4">
                {post.author.name} is a {post.author.role} with extensive experience in the digital transformation space. Their work focuses on distilling noise into actionable strategy, ensuring that technology serves the marketer, not the other way around.
              </p>
              <Link to="/profile" className="font-body-md font-semibold text-primary hover:opacity-80 transition-opacity">
                View Full Profile
              </Link>
            </div>
          </div>

          {/* Comments Section */}
          <div className="mt-16 pt-12 border-t border-border-light">
            <h3 className="font-headline-md text-2xl font-bold text-on-surface mb-8">Responses (3)</h3>
            
            {/* Comment Form */}
            <div className="flex gap-4 mb-12 bg-white p-6 rounded-2xl border border-border-light">
              <div className="w-10 h-10 rounded-full overflow-hidden bg-surface-container shrink-0">
                 <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="Current user" className="w-full h-full object-cover" />
              </div>
              <div className="flex-1">
                <textarea 
                  rows={3} 
                  placeholder="What are your thoughts?" 
                  className="w-full border border-border-light rounded-xl px-4 py-3 focus:ring-1 focus:ring-primary focus:border-primary outline-none transition-all text-sm resize-none mb-3"
                ></textarea>
                <div className="flex justify-end">
                  <button className="bg-on-surface text-white px-6 py-2 rounded-full font-semibold hover:bg-primary transition-colors text-sm">
                    Post Comment
                  </button>
                </div>
              </div>
            </div>

            {/* Comment Thread */}
            <div className="space-y-8">
              {/* Comment 1 */}
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full overflow-hidden bg-surface-container shrink-0">
                  <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="Michael Ross" className="w-full h-full object-cover" />
                </div>
                <div>
                  <div className="bg-surface-bright rounded-2xl rounded-tl-none p-5 border border-border-light">
                    <div className="flex justify-between items-start mb-2">
                      <p className="font-body-md font-bold text-on-surface">Michael Ross</p>
                      <p className="text-xs text-text-muted">2 days ago</p>
                    </div>
                    <p className="text-sm text-text-muted leading-relaxed">
                      Absolutely spot on. We recently audited our tech stack and realized we were over-automating touchpoints that desperately needed a human touch. Reducing the automation actually increased our conversion rates by 12%.
                    </p>
                  </div>
                  <div className="flex gap-4 mt-2 ml-2">
                    <button className="text-xs font-semibold text-text-muted hover:text-primary flex items-center gap-1">
                      <span className="material-symbols-outlined text-[14px]">thumb_up</span> 14
                    </button>
                    <button className="text-xs font-semibold text-text-muted hover:text-primary">Reply</button>
                  </div>
                </div>
              </div>

              {/* Comment 2 - Reply */}
              <div className="flex gap-4 ml-12">
                <div className="w-8 h-8 rounded-full overflow-hidden bg-surface-container shrink-0">
                  <img src={post.author.image} alt={post.author.name} className="w-full h-full object-cover" />
                </div>
                <div>
                  <div className="bg-white rounded-2xl rounded-tl-none p-5 border border-primary/20">
                    <div className="flex justify-between items-start mb-2">
                      <div className="flex items-center gap-2">
                        <p className="font-body-md font-bold text-on-surface">{post.author.name}</p>
                        <span className="bg-surface-variant text-text-muted px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-widest">Author</span>
                      </div>
                      <p className="text-xs text-text-muted">1 day ago</p>
                    </div>
                    <p className="text-sm text-text-muted leading-relaxed">
                      Thanks Michael! That 12% bump is exactly the "strategic friction" I talk about. Not all automation is good automation.
                    </p>
                  </div>
                  <div className="flex gap-4 mt-2 ml-2">
                    <button className="text-xs font-semibold text-text-muted hover:text-primary flex items-center gap-1">
                      <span className="material-symbols-outlined text-[14px]">thumb_up</span> 5
                    </button>
                    <button className="text-xs font-semibold text-text-muted hover:text-primary">Reply</button>
                  </div>
                </div>
              </div>

              {/* Comment 3 */}
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full overflow-hidden bg-surface-container shrink-0">
                  <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="Amanda Chen" className="w-full h-full object-cover" />
                </div>
                <div>
                  <div className="bg-surface-bright rounded-2xl rounded-tl-none p-5 border border-border-light">
                    <div className="flex justify-between items-start mb-2">
                      <p className="font-body-md font-bold text-on-surface">Amanda Chen</p>
                      <p className="text-xs text-text-muted">5 hours ago</p>
                    </div>
                    <p className="text-sm text-text-muted leading-relaxed">
                      Great read. I've shared this with my entire RevOps team. It's a much needed perspective shift from the pure data-driven approaches we usually see.
                    </p>
                  </div>
                  <div className="flex gap-4 mt-2 ml-2">
                    <button className="text-xs font-semibold text-text-muted hover:text-primary flex items-center gap-1">
                      <span className="material-symbols-outlined text-[14px]">thumb_up</span> 2
                    </button>
                    <button className="text-xs font-semibold text-text-muted hover:text-primary">Reply</button>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-8 text-center">
              <button className="text-sm font-semibold text-primary hover:underline">Load more comments</button>
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
