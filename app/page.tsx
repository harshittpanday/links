const links = [
  { number: '01', title: 'Portfolio', description: 'Personal website', href: 'https://harshittpanday.is-a.dev/' },
  { number: '02', title: 'GitHub', description: 'Projects & open source', href: 'https://github.com/harshittpanday' },
  { number: '03', title: 'LinkedIn', description: 'Professional profile', href: 'https://www.linkedin.com/in/harshit-r-pandey-02842b410/' },
  { number: '04', title: 'X', description: 'Posts & updates', href: 'https://x.com/harshittpandayy' },
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
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    className="link-row"
                    aria-label={`${link.title} — ${link.description} (opens in a new tab)`}
                  >
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
          <p>© 2026 Harshit Pandey</p>
          <a
            href="https://instagram.com/harshittpanday"
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram (opens in a new tab)"
          >
            Instagram <span aria-hidden="true">↗</span>
          </a>
        </footer>
      </div>
    </main>
  );
}
