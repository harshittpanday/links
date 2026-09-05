const links = [
  { number: '01', title: 'Portfolio', description: 'Personal website', href: '#' },
  { number: '02', title: 'GitHub', description: 'Projects & open source', href: '#' },
  { number: '03', title: 'LinkedIn', description: 'Professional profile', href: '#' },
  { number: '04', title: 'X', description: 'Notes & updates', href: '#' },
  { number: '05', title: 'Email', description: 'Get in touch', href: 'mailto:hello@example.com' },
] as const;

export default function Home() {
  return (
    <main className="page-shell">
      <div className="page-frame">
        <header className="hero">
          <div className="hero-mark" aria-hidden="true" />
          <h1>HARSHIT PANDEY</h1>
          <p className="role">Student <span>·</span> Builder <span>·</span> Developer</p>

          <div className="metadata" aria-label="Location and year">
            <span>Lucknow, India</span>
            <span>2026</span>
          </div>
        </header>

        <section className="links-section" aria-labelledby="selected-links-title">
          <h2 id="selected-links-title">Selected links</h2>
          <nav aria-label="Selected links">
            <ol className="link-list">
              {links.map((link) => (
                <li key={link.number}>
                  <a href={link.href} className="link-row" aria-label={`${link.title} — ${link.description}`}>
                    <span className="link-number" aria-hidden="true">{link.number}</span>
                    <span className="link-copy">
                      <span className="link-title">{link.title}</span>
                      <span className="link-description">{link.description}</span>
                    </span>
                    <span className="link-arrow" aria-hidden="true">↗</span>
                  </a>
                </li>
              ))}
            </ol>
          </nav>
        </section>

        <footer>
          <span>harshit</span><span aria-hidden="true">/</span><span>2026</span>
        </footer>
      </div>
    </main>
  );
}
