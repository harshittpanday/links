import { ThemeToggle } from './theme-toggle';

const links = [
  { number: '01', title: 'Portfolio', description: 'Work, projects & about', href: 'https://harshittpanday.is-a.dev/', icon: 'portfolio' },
  { number: '02', title: 'GitHub', description: 'Code & open source', href: 'https://github.com/harshittpanday', icon: 'github' },
  { number: '03', title: 'LinkedIn', description: 'Professional profile', href: 'https://www.linkedin.com/in/harshit-r-pandey-02842b410/', icon: 'linkedin' },
  { number: '04', title: 'X', description: 'Posts & updates', href: 'https://x.com/harshittpandayy', icon: 'x' },
] as const;

type Platform = (typeof links)[number]['icon'];

function PlatformIcon({ platform }: { platform: Platform }) {
  if (platform === 'portfolio') {
    return (
      <svg className="platform-icon" viewBox="0 0 24 24" aria-hidden="true">
        <circle cx="12" cy="12" r="8.5" />
        <path d="M3.8 12h16.4M12 3.5c2.2 2.3 3.3 5.1 3.3 8.5s-1.1 6.2-3.3 8.5c-2.2-2.3-3.3-5.1-3.3-8.5S9.8 5.8 12 3.5Z" />
      </svg>
    );
  }

  if (platform === 'github') {
    return (
      <svg className="platform-icon platform-icon-fill" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 2.4a9.8 9.8 0 0 0-3.1 19.1c.5.1.7-.2.7-.5v-1.9c-2.8.6-3.4-1.2-3.4-1.2-.5-1.2-1.1-1.5-1.1-1.5-.9-.6.1-.6.1-.6 1 .1 1.6 1.1 1.6 1.1.9 1.6 2.4 1.1 2.9.9.1-.7.4-1.1.7-1.4-2.3-.3-4.7-1.1-4.7-5a3.9 3.9 0 0 1 1-2.7c-.1-.3-.4-1.3.1-2.7 0 0 .9-.3 2.8 1a9.7 9.7 0 0 1 5.1 0c2-1.3 2.8-1 2.8-1 .5 1.4.2 2.4.1 2.7a3.9 3.9 0 0 1 1 2.7c0 3.9-2.4 4.8-4.7 5 .4.3.7 1 .7 2V21c0 .3.2.6.7.5A9.8 9.8 0 0 0 12 2.4Z" />
      </svg>
    );
  }

  if (platform === 'linkedin') {
    return (
      <svg className="platform-icon platform-icon-fill" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M5.4 3.5a2 2 0 1 1 0 4 2 2 0 0 1 0-4ZM3.7 9h3.4v11.2H3.7V9Zm5.4 0h3.3v1.5h.1c.5-.9 1.6-1.9 3.3-1.9 3.5 0 4.2 2.3 4.2 5.3v6.3h-3.4v-5.6c0-1.3 0-3-1.9-3s-2.2 1.4-2.2 3v5.6H9.1V9Z" />
      </svg>
    );
  }

  return (
    <svg className="platform-icon" viewBox="0 0 24 24" aria-hidden="true">
      <path d="m4.5 4 15 16M19.5 4l-15 16" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg className="instagram-icon" viewBox="0 0 24 24" aria-hidden="true">
      <rect x="3.5" y="3.5" width="17" height="17" rx="4.5" />
      <circle cx="12" cy="12" r="4" />
      <circle className="instagram-dot" cx="17.4" cy="6.8" r="1" />
    </svg>
  );
}

export default function Home() {
  return (
    <main className="page-shell">
      <div className="page-frame">
        <ThemeToggle />
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
                    rel="noopener noreferrer"
                    className="link-row"
                    aria-label={`${link.title} — ${link.description} (opens in a new tab)`}
                  >
                    <span className="link-number" aria-hidden="true">{link.number}</span>
                    <span className="link-copy">
                      <span className="link-heading">
                        <PlatformIcon platform={link.icon} />
                        <span className="link-title">{link.title}</span>
                      </span>
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
            rel="noopener noreferrer"
            aria-label="Instagram (opens in a new tab)"
          >
            <InstagramIcon />
            <span>Instagram</span>
            <span aria-hidden="true">↗</span>
          </a>
        </footer>
      </div>
    </main>
  );
}
