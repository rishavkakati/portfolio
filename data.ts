import { Project, Testimonial } from './types';

export const PROJECTS: Project[] = [
  {
    id: 'graphic-design',
    title: 'Elysium Typography Series',
    category: 'graphics design',
    description: 'A minimalist poster campaign combining bold Swiss typographic principles and abstract geometric visual layouts.',
    longDescription: 'The Elysium poster series explores the deep intersection of classic Swiss grid systems with contemporary abstract visual art. By deploying mathematical layout proportions, carefully tuned kerning, and an offbeat muted color scheme, we crafted a visually stimulating series of exhibition materials that communicate complex cultural events with elegant restraint.',
    imageUrl: 'portfolio/src/assets/images/graphic_design_project_1784015445004.jpg',
    client: 'Geneva Art Institute',
    year: '2025',
    tags: ['Editorial', 'Swiss Style', 'Typography', 'Branding'],
    details: [
      { label: 'Medium', value: 'Print & Digital Exhibition' },
      { label: 'Role', value: 'Lead Graphic Designer' },
      { label: 'Software', value: 'Adobe Illustrator, InDesign' },
      { label: 'Typography', value: 'Helvetica Neue, Akzidenz-Grotesk' }
    ],
    challenges: 'Communicating complex cultural and architectural concepts using purely abstract elements while maintaining supreme legibility, balance, and modern aesthetic rhythm.',
    solutions: 'We designed a strict typographic grid system, then deliberately broke it at key focal points using bold scale contrast, overlapping primary circles in terracotta, and solid charcoal blocks to command visual attention.'
  },
  {
    id: 'web-development',
    title: 'Nova Premium Finance',
    category: 'web development',
    description: 'An ultra-premium financial analytics application featuring high-fidelity custom charts and smooth parallax dashboards.',
    longDescription: 'Nova Finance redefines enterprise financial tracking. Tailored for modern investment teams, the application features glassmorphic frosted-glass panels, custom responsive interactive charting, and dynamic client-side animations. The entire layout is structured as an interactive bento grid, optimizing complex multi-tiered data without overwhelming the user.',
    imageUrl: 'portfolio/src/assets/images/web_dev_project_1784015460585.jpg',
    client: 'Nova Holdings Ltd',
    year: '2026',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'D3.js'],
    details: [
      { label: 'Platform', value: 'Responsive Web Application' },
      { label: 'Role', value: 'Lead Frontend Developer' },
      { label: 'Performance', value: '99% Lighthouse Score' },
      { label: 'API Layer', value: 'GraphQL & WebSockets' }
    ],
    challenges: 'Rendering heavy, fast-moving financial analytics on a client-side dashboard without causing scroll lag, layout shifting, or browser memory bottlenecks.',
    solutions: 'Leveraged highly optimized canvas renders, lazy component rendering, memoized computations, and layout animations to make state transitions feel buttery smooth.'
  },
  {
    id: 'photography',
    title: 'Serenity of the Horizon',
    category: 'photography',
    description: 'A fine-art landscape photography series capturing minimal coastal borders and the ethereal play of light.',
    longDescription: 'Serenity of the Horizon is an editorial and fine-art photography collection focused on minimal ocean borders and the quiet dialogue of light during twilight hours. Shot with long-exposure techniques across remote archipelagos, this collection strips away visual noise to invoke quiet contemplation and ecological awareness.',
    imageUrl: 'portfolio/src/assets/images/photography_project_1784015476413.jpg',
    client: 'Solo Gallery & Prints',
    year: '2024',
    tags: ['Fine Art', 'Long Exposure', 'Landscape', 'Pastel Tones'],
    details: [
      { label: 'Camera', value: 'Phase One XF Medium Format' },
      { label: 'Lens', value: 'Schneider Kreuznach 80mm f/2.8' },
      { label: 'Location', value: 'Lofoten Islands & Faroe Islands' },
      { label: 'Edition', value: 'Limited 1 of 10 Fine Art Prints' }
    ],
    challenges: 'Capturing natural color gradations and transitions in extremely low light conditions near the coast while avoiding high-ISO digital noise or shutter shake.',
    solutions: 'Utilized professional-grade heavy neutral density filters to extend exposure times up to 4 minutes, transforming the shifting tides into smooth velvet-like sheets of color while preserving rich chromatic range.'
  },
  {
    id: 'creative-content',
    title: 'Acoustics Studio Campaign',
    category: 'creative content',
    description: 'A comprehensive branding and stylized 3D auditory campaign designed for an innovative sound collective.',
    longDescription: 'Acoustics Studio represents the next level of sonic branding. We built a comprehensive, tactile marketing campaign combining physical acoustics installations with digital content, floating 3D glass renders, and organic wave animations. This campaign successfully visualizes sound, bridging digital interactions and physical presence.',
    imageUrl: 'portfolio/src/assets/images/creative_content_project_1784015487831.jpg',
    client: 'Acoustics Lab Co',
    year: '2025',
    tags: ['Brand Strategy', '3D Motion Design', 'Content Creation', 'Sound Direction'],
    details: [
      { label: 'Deliverables', value: 'Brand Book & Motion Assets' },
      { label: 'Role', value: 'Creative Director' },
      { label: 'Visuals', value: 'Cinematic 3D Render Loops' },
      { label: 'Duration', value: '6 Months Retainer Campaign' }
    ],
    challenges: 'Translating sound—which is entirely non-visual—into high-impact visual content that feels tactile, professional, and resonates with sound enthusiasts.',
    solutions: 'Constructed an abstract visual system where sound is represented as pulsing glass spheres, floating chrome trajectories, and light waves. We paired this visual language with minimal copy and immersive audio cues.'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    quote: 'They brought an unparalleled level of craft to our platform. The parallax experience and visual clarity received overwhelming praise from our board and clients alike.',
    author: 'Elena Rostova',
    role: 'VP of Product, Nova Holdings Ltd',
    avatarUrl: 'portfolio/src/assets/images/avatar_portrait_1784015503247.jpg'
  },
  {
    id: '2',
    quote: 'The Swiss typography campaign for Elysium perfectly captured our institution\'s identity. Rigorous, clean, and profoundly striking. A masterclass in modern design.',
    author: 'Marc Dubois',
    role: 'Director, Geneva Art Institute',
    avatarUrl: 'portfolio/src/assets/images/avatar_portrait_1784015503247.jpg'
  }
];

export const AVATAR_URL = 'portfolio/src/assets/images/avatar_portrait_1784015503247.jpg';
