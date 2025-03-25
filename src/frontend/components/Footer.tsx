'use client'

const data = {
  copyright: {
    textBeforeLink: `© ${new Date().getFullYear()} `,
    linkText: 'Estonian Young Academy of Sciences',
    linkUrl: 'https://www.akadeemia.ee/en/eyas/',
    textAfterLink: '. All rights reserved.',
  },
}

export function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <p>
          {data.copyright.textBeforeLink}
          <a href={data.copyright.linkUrl} target="_blank" rel="noopener noreferrer">
            {data.copyright.linkText}
          </a>
          {data.copyright.textAfterLink}
        </p>
        <p>Designed and developed by Visual Solutions OÜ.</p>
      </div>
    </footer>
  )
}
