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
        opengraph_default: '/assets/images/opengraph-default.png', // fallback/default meta image
        opengraph_default_alt:
            'Sichtbarer Inhalt: Vorschau der Website von Edda Weisheit', // alt text for default meta image
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
