export const navigationLinks = [
  { name: "Home", href: "/" },
  { name: "Solutions", href: "/#solutions" },
  { name: "Work", href: "/#work" },
  { name: "Services", href: "/#services" },
  { name: "FAQ", href: "/#faq" },
  { name: "Contact", href: "/#contact" },
]

export const solutions = [
  {
    id: 1,
    title: "Strategy",
    description: "We create personalised social media and digital strategies for brands across industries.From understanding your audience and niche to defining content direction, brand positioning, and growth objectives — every strategy is tailored to build a strong and authentic online presence.",
    icon: "📊",
  },
  {
    id: 2,
    title: "Execution",
    description: "We handle end-to-end social media execution — from content and creatives to performance marketing and ads — ensuring consistent, professional, and result-driven presence across platforms.",
    icon: "⚡",
  },
  {
    id: 3,
    title: "Optimization",
    description: "We continuously track performance and audience behaviour.Based on insights and analytics, content, ads, and posting strategies are regularly optimised to improve reach, engagement, inquiries, and conversions.",
    icon: "🎯",
  },
  {
    id: 4,
    title: "Scaling",
    description: "Once consistent results are achieved, we focus on growth and expansion.We scale reach through advanced content strategies, strategic collaborations, paid promotions, and lead-focused campaigns — helping brands increase visibility, demand, and long-term impact.",
    icon: "📈",
  },
]

export const services = [
  {
    id: "social-media-management",
    title: "Social Media Management",
    slug: "social-media-management",
    description: "We manage your social media to build visibility, engagement, and consistent growth.",
    image: "/services/Social-Media-Managment.png",
    benefits: [
      "Increased brand visibility",
      "Consistent audience engagement",
      "Steady follower growth",
      "Professional content scheduling",
      "Community building",
    ],
    process: [
      "Social media audit",
      "Content strategy development",
      "Content calendar creation",
      "Daily posting and scheduling",
      "Community engagement",
      "Performance analytics and reporting",
    ],
    pricing: [
      { tier: "Starter", price: "₹8,000", description: "Perfect for small businesses" },
      { tier: "Professional", price: "₹18,000", description: "For growing companies" },
      { tier: "Enterprise", price: "₹35,000+", description: "Custom solutions for large brands" },
    ],
  },
  {
    id: "meta-ads",
    title: "Meta Ads",
    slug: "meta-ads",
    description: "We run targeted Facebook and Instagram ads to generate leads and inquiries.",
    image: "/services/meta-ads.png",
    benefits: [
      "Targeted lead generation",
      "Increased brand awareness",
      "Higher conversion rates",
      "Cost-effective advertising",
      "Detailed audience targeting",
    ],
    process: [
      "Audience research and targeting",
      "Ad creative development",
      "Campaign setup and launch",
      "A/B testing optimization",
      "Budget management",
      "Performance tracking and reporting",
    ],
    pricing: [
      { tier: "Starter", price: "₹10,000", description: "Perfect for small businesses" },
      { tier: "Professional", price: "₹25,000", description: "For growing companies" },
      { tier: "Enterprise", price: "₹50,000+", description: "Custom solutions for large brands" },
    ],
  },
  {
    id: "google-my-business",
    title: "Google My Business (GMB)",
    slug: "google-my-business",
    description: "We optimise your Google My Business profile to improve local SEO, increase visibility in local searches, attract nearby customers, and build trust through accurate information, reviews, and consistent updates.",
    image: "/services/gmb.png",
    benefits: [
      "Improved local SEO rankings",
      "Increased visibility in local searches",
      "Attract nearby customers",
      "Build trust through reviews",
      "Accurate business information",
    ],
    process: [
      "GMB profile audit",
      "Profile optimization",
      "Category and keyword setup",
      "Photo and content updates",
      "Review management strategy",
      "Monthly performance reports",
    ],
    pricing: [
      { tier: "Starter", price: "₹5,000", description: "Perfect for small businesses" },
      { tier: "Professional", price: "₹12,000", description: "For growing companies" },
      { tier: "Enterprise", price: "₹25,000+", description: "Custom solutions for large brands" },
    ],
  },
  {
    id: "gmb-ads",
    title: "GMB Ads",
    slug: "gmb-ads",
    description: "We run local search ads to help customers find you faster.",
    image: "/services/gmb-ads.png",
    benefits: [
      "Appear at top of local searches",
      "Reach customers actively searching",
      "Drive foot traffic to your business",
      "Measurable local ROI",
      "Competitive local advantage",
    ],
    process: [
      "Local keyword research",
      "Ad campaign setup",
      "Location targeting",
      "Budget optimization",
      "Call tracking setup",
      "Performance monitoring",
    ],
    pricing: [
      { tier: "Starter", price: "₹8,000", description: "Perfect for small businesses" },
      { tier: "Professional", price: "₹18,000", description: "For growing companies" },
      { tier: "Enterprise", price: "₹40,000+", description: "Custom solutions for large brands" },
    ],
  },
  {
    id: "website",
    title: "Website",
    slug: "website",
    description: "We design professional, easy-to-navigate websites that clearly represent your brand and help turn visitors into real enquiries and customers.",
    image: "/services/website.png",
    benefits: [
      "Professional brand representation",
      "Easy navigation for visitors",
      "Higher conversion rates",
      "Mobile responsive design",
      "SEO-friendly structure",
    ],
    process: [
      "Discovery and requirements gathering",
      "Wireframe and design mockups",
      "Development and coding",
      "Content integration",
      "Testing and quality assurance",
      "Launch and ongoing support",
    ],
    pricing: [
      { tier: "Starter", price: "₹15,000", description: "Perfect for small businesses" },
      { tier: "Professional", price: "₹35,000", description: "For growing companies" },
      { tier: "Enterprise", price: "₹75,000+", description: "Custom solutions for large brands" },
    ],
  },
  {
    id: "seo",
    title: "SEO",
    slug: "seo",
    description: "We improve your Google ranking to drive organic traffic and long-term growth.",
    image: "/services/seo.png",
    benefits: [
      "Higher Google rankings",
      "Increased organic traffic",
      "Long-term sustainable growth",
      "Better quality leads",
      "Lower cost per acquisition",
    ],
    process: [
      "Website audit and analysis",
      "Keyword research and strategy",
      "On-page optimization",
      "Technical SEO improvements",
      "Content optimization",
      "Monthly ranking reports",
    ],
    pricing: [
      { tier: "Starter", price: "₹10,000", description: "Perfect for small businesses" },
      { tier: "Professional", price: "₹25,000", description: "For growing companies" },
      { tier: "Enterprise", price: "₹50,000+", description: "Custom solutions for large brands" },
    ],
  },
  {
    id: "video-editing",
    title: "Video Editing",
    slug: "video-editing",
    description: "We edit engaging videos and reels optimised for social media.",
    image: "/services/video-editing.png",
    benefits: [
      "Engaging social media content",
      "Professional video quality",
      "Optimized for each platform",
      "Increased viewer retention",
      "Brand consistency in videos",
    ],
    process: [
      "Raw footage review",
      "Storyboard and concept planning",
      "Video editing and cutting",
      "Color correction and grading",
      "Audio enhancement",
      "Final delivery in multiple formats",
    ],
    pricing: [
      { tier: "Starter", price: "₹3,000", description: "Per video for small projects" },
      { tier: "Professional", price: "₹8,000", description: "Per video with advanced editing" },
      { tier: "Enterprise", price: "₹15,000+", description: "Custom packages for bulk content" },
    ],
  },
  {
    id: "graphic-designing",
    title: "Graphic Designing",
    slug: "graphic-designing",
    description: "We design clean and attractive creatives for a strong brand presence.",
    image: "/services/graphic.png",
    benefits: [
      "Strong visual brand identity",
      "Eye-catching social media posts",
      "Professional marketing materials",
      "Consistent brand aesthetics",
      "Increased engagement rates",
    ],
    process: [
      "Design brief and requirements",
      "Concept development",
      "Initial design drafts",
      "Client feedback and revisions",
      "Final design delivery",
      "Multiple format exports",
    ],
    pricing: [
      { tier: "Starter", price: "₹5,000", description: "Basic design package" },
      { tier: "Professional", price: "₹12,000", description: "Comprehensive design solutions" },
      { tier: "Enterprise", price: "₹25,000+", description: "Full brand design package" },
    ],
  },
  {
    id: "company-profile",
    title: "Company Profile",
    slug: "company-profile",
    description: "We create professional company profiles that clearly showcase your business.",
    image: "/content-marketing-strategy-blog.png",
    benefits: [
      "Professional business presentation",
      "Clear brand messaging",
      "Credibility building",
      "Investor-ready documentation",
      "Comprehensive business overview",
    ],
    process: [
      "Business information gathering",
      "Content writing and structuring",
      "Visual design and layout",
      "Image and graphic integration",
      "Review and revisions",
      "Final PDF and print-ready delivery",
    ],
    pricing: [
      { tier: "Starter", price: "₹8,000", description: "Basic company profile" },
      { tier: "Professional", price: "₹18,000", description: "Detailed company profile" },
      { tier: "Enterprise", price: "₹35,000+", description: "Premium corporate profile" },
    ],
  },
  {
    id: "whatsapp-marketing",
    title: "WhatsApp Marketing",
    slug: "whatsapp-marketing",
    description: "We help you reach customers directly through effective WhatsApp campaigns.",
    image: "/email-marketing-automation-campaign.jpg",
    benefits: [
      "Direct customer communication",
      "High open and response rates",
      "Personalized messaging",
      "Cost-effective outreach",
      "Instant customer engagement",
    ],
    process: [
      "Contact list building strategy",
      "Campaign message creation",
      "Broadcast list setup",
      "Automated response setup",
      "Campaign execution",
      "Performance tracking and optimization",
    ],
    pricing: [
      { tier: "Starter", price: "₹5,000", description: "Basic WhatsApp campaigns" },
      { tier: "Professional", price: "₹12,000", description: "Advanced automation included" },
      { tier: "Enterprise", price: "₹25,000+", description: "Full WhatsApp marketing suite" },
    ],
  },
]

export const brandLogos = [
  { name: "/images/1.jpg", color: "bg-[rgb(200,150,240)]" },
  { name: "/images/2.jpg", color: "bg-[rgb(150,200,255)]" },
  { name: "/images/3.jpeg", color: "bg-[rgb(255,180,150)]" },
  { name: "/images/4.jpeg", color: "bg-[rgb(200,150,240)]" },
  { name: "/images/5.jpeg", color: "bg-[rgb(150,200,255)]" },
  { name: "/images/6.jpeg", color: "bg-[rgb(255,180,150)]" },
  { name: "/images/7.png", color: "bg-[rgb(200,150,240)]" },
  { name: "/images/8.png", color: "bg-[rgb(150,200,255)]" },
]

export const instagramCards = [
  {
    id: 1,
    image: "/instagram-post-creative-design.jpg",
    likes: "2.5K",
    comments: "145",
  },
  {
    id: 2,
    image: "/instagram-story-marketing-content.jpg",
    likes: "3.1K",
    comments: "198",
  },
  {
    id: 3,
    image: "/instagram-reel-video-marketing.jpg",
    likes: "4.8K",
    comments: "267",
  },
  {
    id: 4,
    image: "/instagram-carousel-post.jpg",
    likes: "2.2K",
    comments: "123",
  },
  {
    id: 5,
    image: "/instagram-feed-aesthetic-design.jpg",
    likes: "5.3K",
    comments: "312",
  },
  {
    id: 6,
    image: "/instagram-promotional-campaign.jpg",
    likes: "3.9K",
    comments: "201",
  },
  {
    id: 7,
    image: "/instagram-influencer-collaboration.jpg",
    likes: "6.2K",
    comments: "378",
  },
  {
    id: 8,
    image: "/placeholder.svg?height=500&width=300",
    likes: "2.8K",
    comments: "156",
  },
]

export const faqs = [
  {
    id: 1,
    question: "Do you handle content planning, regular posting, and audience engagement for our business?",
    answer: "Yes, we take care of everything—content planning, regular posting, and handling comments and messages. The idea is to keep your page active, consistent, and engaging so people actually connect with your brand, not just scroll past it.",
  },
  {
    id: 2,
    question: "How do you decide the ad budget, and how long does it take to start seeing results from Meta ads?",
    answer: "The budget depends on what you want to achieve and how competitive your industry is. We usually start with a small test budget, check what’s working, and then scale it. You’ll start seeing reach or leads within a week, but proper results take a little time and optimization.",
  },
  {
    id: 3,
    question: "Can you optimize our Google My Business profile to improve local visibility and customer calls?",
    answer:
      "Yes, we properly optimize your GMB profile—business details, services, keywords, images, and regular updates. This helps your business show up more in local searches and increases calls and inquiries from nearby customers.",
  },
  {
    id: 4,
    question: "How do GMB ads help in reaching nearby customers, and are they effective for small businesses?",
    answer:
      "GMB ads work really well for local and small businesses because they target people who are already searching nearby. If someone is looking for your service in your area, these ads help your business show up first and get more calls.",
  },
  {
    id: 5,
    question: "Do you create SEO-friendly, mobile-responsive, and fast-loading websites?",
    answer:
      "Yes, we create websites that are mobile-friendly, fast, and SEO-ready. Our focus is on clean design, easy navigation, and making sure visitors can quickly understand your services and contact you.",
  },
  {
    id: 6,
    question: "How long does SEO usually take to bring a website to the first page of Google?",
    answer:
      "SEO takes time—itU+2019s not instant. Usually, it takes around 3 to 6 months to see solid improvement, depending on competition. With consistent work, rankings improve gradually and stay long-term.",
  },
  {
    id: 7,
    question: "Do you edit reels, ads, and promotional videos in formats suitable for social media platforms?",
    answer:
      "Yes, we edit reels, ads, and promotional videos specifically for social media. We keep them clean, engaging, and in the right format so they actually perform well on Instagram and Facebook.",
  },
  {
    id: 8,
    question: "Do you design creatives, banners, and social media posts that match our brand identity?",
    answer:
      "Yes, we design posts, banners, and creatives that match your brand style. Everything stays consistent—colors, fonts, and overall look—so your brand feels professional and trustworthy.",
  },
  {
    id: 9,
    question: "Do you provide both content writing and design for professional company profiles?",
    answer:
      "Yes, we handle both content writing and design for company profiles. We keep the language clear and professional, and the design clean, so itU+2019s easy for clients to understand what you do.",
  },
  {
    id: 10,
    question: "Can WhatsApp marketing really help in generating leads and engaging with customers effectively?",
    answer:
      "Yes, WhatsApp marketing works very well when done properly. It helps in direct communication, faster follow-ups, and better customer engagement, which often leads to higher conversions.",
  },
]

export const achievements = {
  clientsServed: "250+",
  campaignsLaunched: "500+",
  roiGrowth: "120%",
  awardWinning: "Award Winning",
}

export const portfolioImages = [
  { id: 1, image: "/placeholder.svg?height=300&width=300" },
  { id: 2, image: "/placeholder.svg?height=300&width=300" },
  { id: 3, image: "/placeholder.svg?height=300&width=300" },
  { id: 4, image: "/placeholder.svg?height=300&width=300" },
  { id: 5, image: "/placeholder.svg?height=300&width=300" },
  { id: 6, image: "/placeholder.svg?height=300&width=300" },
]
