module.exports = {
    url: process.env.URL || 'http://localhost:8080',
    siteName: 'Edda Seelenbilder',
    siteDescription: 'Auf meiner Seite finden Sie Informationen und aktuelle Termine zu den Themen Astrologie, Reinkarnationstherapie, Farbgestaltung & Malerei.',
    siteType: 'Person', // schema
    locale: 'de-DE',
    lang: 'de',
    skipContent: 'Zum Inhalt springen',
    author: 'Malte Bär',
    authorEmail: 'maltebaer@posteo.de',
    authorWebsite: 'https://cv.maltebaer.vercel.app/',
    themeColor: '#de3b53', //  Manifest: defines the default theme color for the application
    themeBgColor: '#F3F3F3', // Manifest: defines a placeholder background color for the application page to display before its stylesheet is loaded
    meta_data: {
        opengraph_default: '/assets/images/opengraph-default.jpg', // fallback/default meta image
        opengraph_default_alt:
            'Visible content: Eleventy starter based on workflow for Cube CSS, Every Layout, Design Tokens and Tailwind for uitility, based on the concepts explained in buildexcellentwebsit.es ', // alt text for default meta image
        twitterSite: '', // i.e. @site - twitter profile of the site
        twitterCreator: '', // i.e. @author -  twitter profile of the site
        mastodonProfile: '' // i.e. https://front-end.social/@lene - url to your mastodon instance/profile
    },
    address: {
        // edit all presets or leave empty. They are being used in the pages for privacy.md and imprint.md
        firma: 'Edda Weisheit',
        street: 'Dorfstraße 31c',
        city: 'Stellshagen',
        state: 'Deutschland',
        zip: '23948',
        mobileDisplay: '+49 (0) 157 39 42 34 96',
        mobileCall: '+4915739423496',
        email: 'info@edda-seelenbilder.de',
    },
    menu: {
        closedText: 'Menu'
    }
};
