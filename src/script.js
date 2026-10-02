const projects = [
  { id: '01', title: 'HELENA PONK', category: 'Branding / Motion / Social Media', year: '2026', type: 'image', description: '[DESCRIPTION - agrega aqui el contexto, objetivo y alcance del proyecto.]', heroImage: '[PROJECT IMAGE]', images: ['[PROCESS IMAGE]', '[PROCESS IMAGE]', '[PROCESS IMAGE]'], videos: [] },
  { id: '02', title: 'TACOS DON CHUY', category: 'Branding / Graphic Design', year: '2026', type: 'image', description: '[DESCRIPTION - agrega aqui la historia visual de la identidad.]', heroImage: '[PROJECT IMAGE]', images: ['[PROCESS IMAGE]', '[PROCESS IMAGE]'], videos: [] },
  { id: '03', title: '3D / PERSONAL PROJECT', category: '3D / Blender / Substance Painter', year: '2026', type: 'image', description: '[DESCRIPTION - describe el universo, modelado y tratamiento de materiales.]', heroImage: '[PROJECT IMAGE]', images: ['[PROCESS IMAGE]', '[PROCESS IMAGE]', '[PROCESS IMAGE]'], videos: [] },
  { id: '04', title: 'COLABORADORES ', category: 'Formato corto / Vertical video', year: '2026', type: 'video', group: 'formato-corto', description: 'Introducción a los de colaboradores de Dimeca', heroImage: '[VIDEO POSTER]', images: [], videos: [{ label: 'COLABORADORES 3', src: '/media/formato%20corto/COLABORADORES%203.mp4', poster: '' }] },
  { id: '05', title: 'PHOTOGRAPHY', category: 'Photography / Color', year: '2026', type: 'image', description: '[DESCRIPTION - agrega aqui la serie o direccion de la sesion.]', heroImage: '[PROJECT IMAGE]', images: ['[PHOTO]', '[PHOTO]', '[PHOTO]'], videos: [] },
  { id: '06', title: 'PANTALONES REINING', category: 'Formato corto / Vertical video', year: '2026', type: 'video', group: 'formato-corto', description: 'Presentación de la línea de pantalones Reining', heroImage: '[VIDEO POSTER]', images: [], videos: [{ label: 'PANTALONES REINING', src: '/media/formato%20corto/pantalones%20reining.mp4', poster: '' }] },
  { id: '07', title: 'POV MARISOL CANDIDATA', category: 'Formato corto / Vertical video', year: '2026', type: 'video', group: 'formato-corto', description: 'Un poco de diversión en la campaña de la candidata Marisol en Jurisprudencia', heroImage: '[VIDEO POSTER]', images: [], videos: [{ label: 'POV MARISOL CANDIDATA', src: '/media/formato%20corto/pov%20Marisol%20candidata.mp4', poster: '' }] },
  { id: '13', title: 'WAFFLES', category: 'Formato corto / Vertical video', year: '2026', type: 'video', group: 'formato-corto', description: 'Formato corto y delicioso para la presentación de Waffles con huevo y tocino', heroImage: '[VIDEO POSTER]', images: [], videos: [{ label: 'WAFFLES', src: '/media/formato%20corto/Waffles.mp4', poster: '' }] },
  { id: '08', title: 'BULL RIDERS', category: 'After movies / Event film', year: '2026', type: 'video', group: 'after-movies', description: 'Aftermovie Rodeo BullRiders 2026 por parte de JR Ticket', heroImage: '[VIDEO POSTER]', images: [], videos: [{ label: 'BULL RIDERS', src: '/media/after%20movie/Bull_Riders_v1.mp4', poster: '' }] },
  { id: '09', title: 'AFTER MOVIE AAA', category: 'After movies / Event film', year: '2026', type: 'video', group: 'after-movies', description: 'Noche de Rivaidades de las luchas AAA en Saltillo', heroImage: '[VIDEO POSTER]', images: [], videos: [{ label: 'AFTER MOVIE AAA', src: '/media/after%20movie/After%20movie%20AAA%20v3.mp4', poster: '' }] },
  { id: '10', title: '30 AÑOS RESPALDANDO GOBIERNOS', category: 'Motion graphics / Animation', year: '2026', type: 'video', group: 'motion-graphics', description: ' Video en motion graphics mostrando datos sobre los 30 años de respaldo al gobierno', heroImage: '[VIDEO POSTER]', images: [], videos: [{ label: '30 AÑOS RESPALDANDO GOBIERNOS', src: '/media/motion%20graphics/30%20a%C3%B1os%20respaldando%20gobiernos%20v3.mp4', poster: '' }] },
  { id: '11', title: '40 AÑOS', category: 'Motion graphics / Animation', year: '2026', type: 'video', group: 'motion-graphics', description: 'Promocional para el rodeo de aniversario 40 años JR Sombreros', heroImage: '[VIDEO POSTER]', images: [], videos: [{ label: '40 AÑOS', src: '/media/motion%20graphics/40%20a%C3%B1os%20v4.mp4', poster: '' }] },
  { id: '12', title: 'RISK OF RAIN', category: 'Motion graphics / Animation', year: '2026', type: 'video', group: 'motion-graphics', description: 'Tiktok rapido y dinamico para el videojuego RIsk of Rain 2', heroImage: '[VIDEO POSTER]', images: [], videos: [{ label: 'RISK OF RAIN', src: '/media/motion%20graphics/Risk%20of%20Rain.mp4', poster: '' }] }
];

const disciplines = ['VIDEO EDITING', 'AUDIO'];
const clients = ['REINING', 'JR SOMBREROS', 'HORNO Y PIEDRA', 'LOS GONZALES', 'EL FOGON', 'CAFEZZITO', 'DOCE DIEZ', 'HUGO SKULL', 'MARISOL DIAZ', 'DIMECA', 'CIP', 'EKVILIBRIO', 'ABS', 'HELENA PONK', 'MIENTEME' ];
const root = document.querySelector('#root');

const placeholder = (label, poster = false) => `<div class="placeholder ${poster ? 'poster' : ''}"><span>${label}</span><i>+</i></div>`;
const marker = (number, label) => `<div class="section-marker mono"><span>${number}</span><span>${label}</span><span class="marker-line"></span></div>`;

function videoPreview(project) {
  const video = project.videos?.[0];
  if (!video?.src) return placeholder(project.heroImage, true);
  return `<video class="video-preview" autoplay muted loop playsinline preload="metadata"${video.poster ? ` poster="${video.poster}"` : ''}><source src="${video.src}" type="video/mp4"></video>`;
}

function renderNav() {
  return `<nav class="nav"><button class="wordmark" data-home>DEINEL<span class="red-dot">.</span></button><div class="nav-links"><a href="#video">VIDEO</a><a href="#skills">SKILLS</a><a href="#clients">CLIENTS</a><a href="#about">ABOUT</a><a href="#contact">CONTACT</a></div><span class="nav-index">[ MX / 26 ]</span></nav>`;
}

function renderHero() {
  return `<section class="hero section-pad" id="top"><div class="hero-grid-mark">+<br><span>25 25'N<br>101 00'W</span></div><div class="hero-kicker mono">[ AUDIOVISUAL PRACTICE / 001 ]</div><div class="hero-name"><span>ALEXIS DANIEL</span><span>LIRA ROSALES</span></div><div class="hero-signature">DEINEL</div><div class="hero-bottom"><div class="hero-meta"><span>SALTILLO, MX</span><span>2026</span><span>VIDEO EDITING<br>PROGRAMMING / AUDIO / MOTION</span></div><a class="hero-scroll mono" href="#about">SCROLL TO EXPLORE <b>DOWN</b></a></div><div class="hero-red-line"></div></section>`;
}

function renderAbout() {
  const destinations = {
    'VIDEO EDITING': { href: '#video', action: 'VIEW WORK' },
    'AUDIO': { href: '#skills', action: 'VIEW SKILLS' }
  };
  const rows = disciplines.map((item, index) => {
    const destination = destinations[item];
    return `<a class="discipline" href="${destination.href}" aria-label="${item}: ${destination.action}"><span class="mono">0${index + 1}</span><strong>${item}</strong><span class="discipline-arrow">${destination.action} <b>↗</b></span></a>`;
  }).join('');
  return `<section class="about section-pad" id="about">${marker('01', 'ABOUT')}<div class="about-layout"><h2>IMAGEN QUE<br><em>SUENA</em> Y<br>SE MUEVE.</h2><div class="about-copy"><p>Soy Alexis Daniel Lira Rosales, conocido creativamente como Deinel. Trabajo principalmente con edicion de video, motion graphics y audio, creando piezas que mezclan imagen, movimiento, sonido y tecnologia.</p><p class="muted">Una practica audiovisual desde Saltillo, Coahuila. Entre el montaje, el codigo y la experimentacion.</p></div></div><div class="discipline-list">${rows}</div></section>`;
}

function renderSkillsLegacy() {
  return `<section class="skills section-pad" id="skills">${marker('02', 'SKILLS / CAPABILITIES')}<div class="skills-intro"><h2>TOOLS<br><em>IN MOTION.</em></h2><p>Una mezcla de herramientas técnicas y criterio visual para construir piezas audiovisuales con ritmo, identidad y detalle.</p></div><div class="skills-grid"><div class="skills-block"><span class="skills-label mono">[ CORE SKILLS ]</span><div class="skills-list"><div><span class="mono">01</span><strong>VIDEO EDITING</strong></div><div><span class="mono">02</span><strong>MOTION DESIGN</strong></div><div><span class="mono">03</span><strong>PROGRAMMING</strong></div><div><span class="mono">04</span><strong>AUDIO</strong></div></div></div><div class="skills-block format-copy"><span class="skills-label mono">[ FORMATS / OUTPUTS ]</span><p>Desde una pieza corta para redes hasta una experiencia audiovisual completa: edición, animación, sonido y código trabajando en conjunto.</p><div class="format-list"><span>REELS</span><span>SHORT FILM</span><span>IDENTITY</span><span>3D</span><span>EXPERIMENTAL</span></div></div></div><div class="event-service"><span class="skills-label mono">[ OPEN TO ]</span><h3>LET'S MAKE<br><em>SOMETHING MOVE.</em></h3><p>Colaboraciones, encargos y proyectos que necesiten una mirada audiovisual sensible al ritmo, la imagen y la tecnología.</p></div></section>`;
}

function renderSkills() {
  return `<section class="skills section-pad" id="skills">${marker('02', 'SKILLS / CAPABILITIES')}<div class="skills-intro"><h2>TOOLS<br><em>IN MOTION.</em></h2><p>Una mezcla de herramientas técnicas y criterio visual para construir piezas audiovisuales con ritmo, identidad y detalle.</p></div><div class="skills-grid"><div class="skills-block"><span class="skills-label mono">[ SOFTWARE / TOOLS ]</span><div class="skills-list"><div><span class="mono">01</span><strong>PREMIERE</strong></div><div><span class="mono">02</span><strong>AFTER EFFECTS</strong></div><div><span class="mono">03</span><strong>PHOTOSHOP</strong></div><div><span class="mono">04</span><strong>ILLUSTRATOR</strong></div><div><span class="mono">05</span><strong>FL STUDIO</strong></div><div><span class="mono">06</span><strong>REAPER</strong></div></div></div><div class="skills-block format-copy"><span class="skills-label mono">[ FORMATS / OUTPUTS ]</span><p>Creo contenido para redes sociales y formatos audiovisuales de cobertura de eventos, desde piezas verticales hasta after movies de formato largo.</p><div class="format-list"><span>TIKTOK</span><span>INSTAGRAM</span><span>FACEBOOK</span><span>AFTER MOVIES</span></div></div></div><div class="event-service"><span class="skills-label mono">[ OPEN TO ]</span><h3>LET'S MAKE<br><em>SOMETHING MOVE.</em></h3><p>Colaboraciones, encargos y proyectos que necesiten una mirada audiovisual sensible al ritmo, la imagen y la tecnología.</p></div></section>`;
}

function renderClients() {
  const clientRows = clients.map((client, index) => `<div class="client-row"><span class="mono">${String(index + 1).padStart(2, '0')}</span><strong>${client}</strong><span class="client-arrow">↗</span></div>`).join('');
  const ticker = [...clients, ...clients].map(client => `<span>${client}</span>`).join('');
  return `<section class="clients section-pad" id="clients">${marker('03', 'CLIENTS / COLLABORATIONS')}<div class="clients-hero"><div class="clients-count"><span class="mono">[ SELECTED CLIENTS ]</span><strong>25<b>+</b></strong><em>CLIENTES</em><em>Y MARCAS</em></div><div class="clients-heading"><h2>CLIENTES<br><em>CON LOS QUE</em><br>HE TRABAJADO.</h2><p>Marcas, negocios y proyectos que han confiado en una mirada audiovisual para contar lo que hacen.</p></div></div><div class="client-ticker" aria-hidden="true"><div>${ticker}</div></div><div class="client-list">${clientRows}</div><p class="clients-more mono">+ Y MÁS COLABORACIONES EN DESARROLLO</p></section>`;
}

function renderVideoSection() {
  const groups = [
    { id: 'formato-corto', number: '01', title: 'FORMATO CORTO', note: '4 VIDEOS / VERTICAL CONTENT' },
    { id: 'after-movies', number: '02', title: 'AFTER MOVIES', note: '2 VIDEOS / EVENT FILMS' },
    { id: 'motion-graphics', number: '03', title: 'MOTION GRAPHICS', note: '3 VIDEOS / ANIMATION' }
  ];
  const categories = groups.map(group => {
    const videos = projects.filter(project => project.group === group.id).map(project => `<article class="video-card" data-project="${project.id}"><div class="video-card-media">${videoPreview(project)}<span class="video-card-play">PLAY <b>↗</b></span></div><div class="video-card-foot"><span>${project.id} / ${project.title}</span><span>${project.category}</span></div></article>`).join('');
    return `<div class="video-category video-category--${group.id}"><button class="video-category-toggle" type="button" aria-expanded="false" aria-controls="${group.id}-videos"><span class="video-category-index mono">${group.number}</span><strong>${group.title}</strong><span class="video-category-note mono">${group.note}</span><span class="video-category-plus">+</span></button><div class="video-category-content" id="${group.id}-videos" hidden><div class="video-card-grid">${videos}</div></div></div>`;
  }).join('');
  return `<section class="video-section section-pad" id="video">${marker('04', 'VIDEO / AUDIOVISUAL')}<div class="video-intro"><h2>VIDEO<br><em>WORK.</em></h2><p class="mono">[ SELECT A CATEGORY TO EXPLORE ]</p></div><div class="video-categories">${categories}</div></section>`;
}

function renderContact() {
  return `<section class="contact section-pad" id="contact">${marker('05', 'CONTACT')}<div class="contact-title"><span>LET'S MAKE</span><em>SOMETHING.</em></div><div class="contact-bottom"><div><span class="mono muted">AVAILABLE FOR COLLABORATIONS / COMMISSIONS</span><a class="email" href="mailto:alexisdeinel626@hotmail.com">alexisdeinel626@hotmail.com</a></div><div class="socials"><a href="https://www.instagram.com/deinel626/">INSTAGRAM</a><a href="https://www.linkedin.com/in/alexis-rosales-a06710326/?isSelfProfile=true">LINKEDIN</a></div></div></section>`;
}

function renderFooter() {
  return `<footer class="footer"><div class="footer-brand">DEINEL<span class="red-dot">.</span></div><div class="footer-info"><span>DEINEL - 2026</span><span>SALTILLO, MX</span><span>VIDEO EDITING / PROGRAMMING / AUDIO / MOTION</span></div><a href="#top" class="to-top">BACK TO TOP</a></footer>`;
}

function renderPage() {
  root.innerHTML = `${renderNav()}<main>${renderHero()}${renderAbout()}${renderSkills()}${renderClients()}${renderVideoSection()}${renderContact()}</main>${renderFooter()}<div class="cursor" aria-hidden="true"></div>`;
  bindInteractions();
  runEntranceAnimations();
}

function renderVideo(video) {
  if (video.src) return `<video class="video-player" controls preload="metadata" poster="${video.poster || ''}"><source src="${video.src}" type="video/mp4"></video>`;
  return `<div class="video-placeholder"><span>${video.label || '[VIDEO FILE]'}</span><b>PLAY</b></div>`;
}

function openProject(id) {
  const project = projects.find(item => item.id === id);
  if (!project) return;
  const detail = document.createElement('div');
  detail.className = `detail detail--${project.group || 'project'}`;
  const videoContent = project.videos.map(renderVideo).join('') || videoPreview(project);
  detail.innerHTML = project.type === 'video'
    ? `<button class="detail-close">CLOSE <span>X</span></button><div class="detail-top section-pad"><span class="mono">VIDEO ${project.id}</span><h1>${project.title}</h1><div class="detail-meta"><span>${project.category}</span><span>${project.year}</span></div></div><div class="video-detail section-pad">${videoContent}<div class="video-detail-description"><span class="mono">ABOUT THE VIDEO</span><p>${project.description}</p></div></div>`
    : `<button class="detail-close">CLOSE <span>X</span></button><div class="detail-top section-pad"><span class="mono">PROJECT ${project.id}</span><h1>${project.title}</h1><div class="detail-meta"><span>${project.category}</span><span>${project.year}</span></div></div><div class="detail-hero section-pad">${placeholder(project.heroImage, false)}</div><div class="detail-copy section-pad">${marker('01', 'ABOUT THE PROJECT')}<p>${project.description}</p></div><div class="detail-process section-pad">${marker('02', 'PROCESS')}<div class="process-grid">${project.images.map(image => placeholder(image)).join('')}</div>${project.videos.map(renderVideo).join('')}</div><div class="detail-final section-pad">${marker('03', 'FINAL RESULT')}${placeholder('[FINAL IMAGE]')}</div>`;
  document.body.appendChild(detail);
  document.querySelector('.cursor').classList.add('is-modal');
  detail.animate([{ opacity: 0 }, { opacity: 1 }], { duration: 450, easing: 'ease-out', fill: 'both' });
  const close = () => { window.activeDetail = null; detail.animate([{ opacity: 1 }, { opacity: 0 }], { duration: 220, easing: 'ease-in', fill: 'forwards' }).finished.then(() => { detail.remove(); document.querySelector('.cursor')?.classList.remove('is-modal'); }); };
  detail.querySelector('.detail-close').addEventListener('click', close);
  detail.addEventListener('click', event => { if (event.target === detail) close(); });
  detail._close = close;
  window.activeDetail = detail;
}

function bindInteractions() {
  document.querySelectorAll('[data-project]').forEach(item => item.addEventListener('click', () => openProject(item.dataset.project)));
  document.querySelectorAll('.video-category-toggle').forEach(toggle => toggle.addEventListener('click', () => {
    const content = document.getElementById(toggle.getAttribute('aria-controls'));
    const isOpen = toggle.getAttribute('aria-expanded') === 'true';
    toggle.setAttribute('aria-expanded', String(!isOpen));
    content.hidden = isOpen;
    toggle.closest('.video-category').classList.toggle('is-open', !isOpen);
  }));
  document.querySelector('[data-home]').addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
  const cursor = document.querySelector('.cursor');
  window.addEventListener('mousemove', event => { cursor.style.transform = `translate3d(${event.clientX}px, ${event.clientY}px, 0)`; });
  window.addEventListener('keydown', event => { if (event.key === 'Escape' && window.activeDetail) { window.activeDetail._close(); window.activeDetail = null; } });
}

function runEntranceAnimations() {
  const animate = (selector, keyframes, options) => document.querySelectorAll(selector).forEach((element, index) => element.animate(keyframes, { ...options, delay: (options.delay || 0) + index * 100, fill: 'both' }));
  animate('.hero-kicker, .hero-meta, .hero-scroll', [{ opacity: 0, transform: 'translateY(20px)' }, { opacity: 1, transform: 'translateY(0)' }], { duration: 800, easing: 'cubic-bezier(.16,1,.3,1)', delay: 350 });
  animate('.hero-name span', [{ opacity: 0, transform: 'translateY(110%)' }, { opacity: 1, transform: 'translateY(0)' }], { duration: 1100, easing: 'cubic-bezier(.16,1,.3,1)', delay: 200 });
  animate('.hero-signature', [{ opacity: 0, transform: 'translateX(40px) rotate(-8deg)' }, { opacity: .8, transform: 'translateX(0) rotate(-8deg)' }], { duration: 1200, easing: 'cubic-bezier(.16,1,.3,1)', delay: 800 });
}

renderPage();
