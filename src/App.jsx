import { useEffect, useState } from "react";
import { AnimatePresence, motion, useScroll, useSpring } from "framer-motion";
import {
  ArrowUpRight, ArrowRight, Menu, X, Sun, Moon, ChevronDown,
  BookOpen, Compass, HeartHandshake, Trophy, Music2, Globe2,
  MapPin, Mail, Phone, Instagram, Facebook, Youtube, CheckCircle2
} from "lucide-react";

const nav = [
  { label: "Our story", id: "story" },
  { label: "Learning", id: "learning" },
  { label: "Campus life", id: "campus" },
  { label: "Admissions", id: "admissions" },
];
const programs = [
  { no: "01", title: "Academic learning", tag: "Curiosity, every day", desc: "A CBSE learning journey built around strong foundations, thoughtful questions, and the confidence to keep discovering.", icon: BookOpen },
  { no: "02", title: "Sports & movement", tag: "Find your rhythm", desc: "Tulas highlights more than 16 sports, including archery, swimming, football, basketball, cricket, and other opportunities to build skill and confidence.", icon: Trophy },
  { no: "03", title: "Arts & expression", tag: "Make ideas visible", desc: "Students can explore creative activities such as pottery, visual arts, music, and dance as part of learning beyond the classroom.", icon: Music2 },
  { no: "04", title: "A wider world", tag: "Think beyond borders", desc: "Students are encouraged to stay curious about different perspectives and the world they are growing into.", icon: Globe2 },
];
const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: .65, ease: [ .22, 1, .36, 1 ] } },
};

function Progress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: .001 });
  return <motion.div className="scroll-progress" style={{ scaleX }} />;
}
function Header({ dark, setDark }) {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const close = () => setOpen(false);
    window.addEventListener("resize", close);
    return () => window.removeEventListener("resize", close);
  }, []);
  return <header className="site-header">
    <a className="wordmark" href="#home" aria-label="Tulas International School home">
      <span className="wordmark-symbol">T<span>+</span></span>
      <span className="wordmark-text">TULAS<small>INTERNATIONAL SCHOOL</small></span>
    </a>
    <nav className="desktop-nav" aria-label="Main navigation">
      {nav.map(item => <a key={item.id} href={`#${item.id}`}>{item.label}</a>)}
    </nav>
    <div className="header-actions">
      <button className="theme-toggle" onClick={() => setDark(!dark)} aria-label="Toggle color theme">{dark ? <Sun size={17}/> : <Moon size={17}/>}</button>
      <a className="header-apply" href="#admissions">Enquire <ArrowUpRight size={15}/></a>
      <button className="menu-toggle" onClick={() => setOpen(!open)} aria-label={open ? "Close menu" : "Open menu"}>{open ? <X/> : <Menu/>}</button>
    </div>
    <AnimatePresence>
      {open && <motion.nav className="mobile-nav" initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }}>
        {nav.map(item => <a key={item.id} href={`#${item.id}`} onClick={() => setOpen(false)}>{item.label}<ArrowUpRight size={16}/></a>)}
        <a href="#admissions" onClick={() => setOpen(false)}>Enquire now<ArrowUpRight size={16}/></a>
      </motion.nav>}
    </AnimatePresence>
  </header>;
}
function Reveal({ children, className = "", delay = 0 }) {
  return <motion.div className={className} variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, amount: .16 }} transition={{ delay }}>{children}</motion.div>;
}
function Hero() {
  return <section className="hero" id="home">
    <div className="hero-image" role="img" aria-label="Students learning together in a bright school environment"/>
    <div className="hero-shade"/>
    <div className="hero-content">
      <motion.div className="hero-kicker" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .15 }}><span/> DEHRADUN · EST. 2012</motion.div>
      <motion.h1 initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .75, delay: .22 }}>A world of<br/><em>possibility.</em></motion.h1>
      <motion.p initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .38 }}>A place to grow curious, find your confidence, and shape what comes next.</motion.p>
      <motion.div className="hero-links" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .55 }}>
        <a className="button button-light" href="#story">Discover Tulas <ArrowUpRight size={16}/></a>
        <a className="hero-text-link" href="#admissions">Explore admissions <ArrowRight size={16}/></a>
      </motion.div>
    </div>
    <div className="hero-side-note"><span>LEARN</span><i/> <span>LEAD</span><i/> <span>BELONG</span></div>
    <a className="hero-scroll" href="#story">SCROLL TO EXPLORE <ChevronDown size={14}/></a>
    <div className="hero-index">01 <span/> 04</div>
  </section>;
}
function Intro() {
  return <section className="story section-shell" id="story">
    <div className="section-label"><span>01</span> THE TULAS EXPERIENCE</div>
    <div className="story-grid">
      <Reveal className="story-heading"><p className="eyebrow">More than a school</p><h2>Learning is the beginning of <em>becoming.</em></h2></Reveal>
      <Reveal className="story-copy" delay={.1}><p>Established in 2012 under Rishabh Educational Trust, Tulas International School is a CBSE boarding and day school in Dehradun. We believe education is a journey of discovery—one that helps students build knowledge, confidence, and a sense of possibility.</p><a className="inline-link" href="#learning">Explore our approach <ArrowUpRight size={16}/></a></Reveal>
    </div>
    <div className="story-photo-row">
      <Reveal className="story-photo"><img src="https://tis.edu.in/_next/static/media/pot.6f7c2ee3.webp" alt="Tulas student taking part in a pottery activity"/><span>Curiosity in action</span></Reveal>
      <Reveal className="story-quote" delay={.1}><span className="quote-mark">“</span><p>Every learner has a story still being written.</p><span className="quote-caption">THE TULAS SPIRIT</span></Reveal>
    </div>
  </section>;
}
function Highlights() {
  return <section className="highlight-band" aria-label="School highlights">
    <div className="highlight-intro"><span className="eyebrow">ROOM TO GROW</span><p>A campus and community designed to make space for every kind of potential.</p></div>
    <div className="highlight-stat"><strong>22<span>acres</span></strong><small>Campus</small></div>
    <div className="highlight-stat"><strong>16<span>+</span></strong><small>Sports</small></div>
    <div className="highlight-stat"><strong>6:1</strong><small>Student–teacher ratio</small></div>
    <div className="highlight-stat"><strong>24/7</strong><small>Medical assistance</small></div>
  </section>;
}
function Learning() {
  const [active, setActive] = useState(0);
  const item = programs[active];
  const Icon = item.icon;
  return <section className="learning section-shell" id="learning">
    <div className="learning-top"><div><div className="section-label"><span>02</span> LEARNING AT TULAS</div><Reveal><h2>Find your spark.<br/><em>Follow it further.</em></h2></Reveal></div><Reveal className="learning-intro"><p>Learning is not one-size-fits-all. Explore the experiences that help students build skills, uncover interests, and keep asking questions.</p></Reveal></div>
    <div className="learning-explorer">
      <div className="program-menu" role="tablist" aria-label="Learning areas">
        {programs.map((p, i) => <button key={p.no} role="tab" aria-selected={active === i} className={active === i ? "program-choice active" : "program-choice"} onClick={() => setActive(i)}><span>{p.no}</span><b>{p.title}</b><ArrowUpRight size={17}/></button>)}
      </div>
      <AnimatePresence mode="wait"><motion.div key={active} className="program-panel" role="tabpanel" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -12 }} transition={{ duration: .28 }}>
        <div className="panel-top"><span>{item.tag}</span><div className="panel-icon"><Icon size={24}/></div></div>
        <div className="panel-body"><span className="panel-number">{item.no}</span><h3>{item.title}</h3><p>{item.desc}</p><a href="#admissions" className="panel-link">Start a conversation <ArrowUpRight size={16}/></a></div>
        <div className="panel-watermark"><Icon size={150} strokeWidth={.7}/></div>
      </motion.div></AnimatePresence>
    </div>
  </section>;
}
function Campus() {
  return <section className="campus" id="campus">
    <div className="campus-heading section-shell"><div className="section-label"><span>03</span> LIFE ON CAMPUS</div><div className="campus-title-row"><Reveal><h2>Small moments.<br/><em>Big memories.</em></h2></Reveal><Reveal className="campus-description" delay={.1}><p>From shared discoveries to the energy of the playing field, campus life is where friendships grow and confidence takes shape.</p><a className="inline-link" href="#admissions">Visit Tulas <ArrowUpRight size={16}/></a></Reveal></div></div>
    <div className="campus-mosaic">
      <Reveal className="mosaic-main"><img src="https://tis.edu.in/_next/static/media/dance.88843edb.webp" alt="Tulas student taking part in an art activity"/><span className="photo-label">01 / LEARNING TOGETHER</span></Reveal>
      <Reveal className="mosaic-side" delay={.1}><img src="https://tis.edu.in/_next/static/media/swimming.d4285534.png" alt="Tulas student swimming"/><span className="photo-label">02 / ACTIVE MINDS, ACTIVE LIVES</span></Reveal>
      <div className="mosaic-note"><span className="note-star">✳</span><p>There is more than one way to shine.</p><span>MAKE YOUR MARK</span></div>
    </div>
  </section>;
}
function Admissions() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", grade: "", message: "" });
  const update = e => setForm({ ...form, [e.target.name]: e.target.value });
  const submit = e => { e.preventDefault(); setSent(true); };
  return <section className="admissions section-shell" id="admissions">
    <div className="admissions-copy"><div className="section-label"><span>04</span> YOUR NEXT CHAPTER</div><Reveal><p className="eyebrow">Come meet your possibilities</p><h2>Let’s see what<br/><em>you can become.</em></h2><p className="admissions-desc">Explore the Tulas experience and connect with our admissions team to learn about current opportunities for your family.</p></Reveal>
      <div className="contact-details"><a href="mailto:info@tis.edu.in"><Mail size={16}/> info@tis.edu.in</a><span><MapPin size={16}/> Dhoolkot, Selaqui, Chakrata Road, Dehradun</span><span><Phone size={16}/> +91-9837983791</span></div>
    </div>
    <Reveal className="enquiry-panel" delay={.12}><div className="enquiry-head"><span>ENQUIRE ABOUT ADMISSIONS</span><span className="enquiry-dot"/></div>
      {sent ? <div className="form-success"><CheckCircle2 size={34}/><h3>Thank you for reaching out.</h3><p>This is a front-end demo; your enquiry has not been sent. Please use the official school contact details to submit it.</p><button className="inline-link" onClick={() => setSent(false)}>Send another enquiry <ArrowRight size={15}/></button></div> :
      <form onSubmit={submit}>
        <label>Parent / guardian name<input required name="name" value={form.name} onChange={update} placeholder="Your full name"/></label>
        <label>Email address<input required type="email" name="email" value={form.email} onChange={update} placeholder="you@example.com"/></label>
        <label>Interested grade<select required name="grade" value={form.grade} onChange={update}><option value="">Choose a level</option>{["Early years","Primary school","Middle school","Senior school","Not sure yet"].map(x => <option key={x}>{x}</option>)}</select></label>
        <label>Message <span className="optional">(optional)</span><textarea name="message" rows="2" value={form.message} onChange={update} placeholder="Tell us what you'd like to know"/></label>
        <button className="button button-green" type="submit">Send enquiry <ArrowUpRight size={16}/></button>
        <small>Demo form only. No information is transmitted or stored.</small>
      </form>}
    </Reveal>
  </section>;
}
function Footer() {
  return <footer className="footer"><div className="footer-top"><div className="footer-brand"><a className="wordmark footer-wordmark" href="#home"><span className="wordmark-symbol">T<span>+</span></span><span className="wordmark-text">TULAS<small>INTERNATIONAL SCHOOL</small></span></a><p>Learn with purpose.<br/>Grow with possibility.</p></div><div className="footer-nav"><span>EXPLORE</span>{nav.map(n => <a key={n.id} href={`#${n.id}`}>{n.label}</a>)}</div><div className="footer-nav"><span>CONNECT</span><a href="mailto:info@tis.edu.in">Email the school</a><a href="#admissions">Admissions enquiry</a><a href="#home">Back to top ↑</a></div><div className="footer-note"><span>DEHRADUN, INDIA</span><p>A school community for curious minds and open horizons.</p></div></div><div className="footer-bottom"><span>© {new Date().getFullYear()} Tulas International School</span><span>Learn · Lead · Belong</span><div className="footer-social"><a href="https://www.instagram.com/" aria-label="Instagram"><Instagram size={16}/></a><a href="https://www.facebook.com/" aria-label="Facebook"><Facebook size={16}/></a><a href="https://www.youtube.com/" aria-label="YouTube"><Youtube size={16}/></a></div></div></footer>;
}
export default function App() {
  const [dark, setDark] = useState(false);
  useEffect(() => { document.documentElement.dataset.theme = dark ? "dark" : "light"; }, [dark]);
  return <div className="site"><a className="skip-link" href="#main-content">Skip to content</a><Progress/><Header dark={dark} setDark={setDark}/><main id="main-content"><Hero/><Intro/><Highlights/><Learning/><Campus/><Admissions/></main><Footer/></div>;
}
