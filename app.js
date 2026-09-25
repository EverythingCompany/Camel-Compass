(function () {
  var SUPPORTED = ['en', 'it', 'fr', 'de', 'es'];

  var UI = {
    en: {
      nav_hosting: 'Hosting', nav_resources: 'Resources', nav_recommend: 'Recommended for you', nav_legal: 'Privacy & Legal',
      crumb_home: 'Home', crumb_compare: 'Comparison',
      disclose: 'CamelCompass is reader-supported. We show ads and include Amazon affiliate links — if you buy through them, we may earn a commission at no extra cost to you.',
      disclose_link: 'How we pick products',
      home_badge: 'Independent reviews, updated every month',
      home_title: 'Pick the right software, before you pay for it.',
      home_sub: "We test web hosting and hand-pick tools worth buying — for small businesses, freelancers, and bloggers — and tell you straight up what's actually worth your money.",
      home_cta: 'Compare WordPress Hosting →',
      home_cat_title: 'What we cover',
      cat_hosting_t: 'Hosting', cat_hosting_d: 'Real-world comparisons of the top providers for WordPress and small business sites.', cat_hosting_link: 'See the comparison →',
      cat_res_t: 'Recommended tools', cat_res_d: 'A short, honest list of gear and tools we personally use or recommend — available on Amazon.', cat_res_link: 'See the picks →',
      soon: 'Coming soon',
      resources_title: 'Tools we recommend', resources_sub: 'A short, honest list of things we personally use to run this site and others like it — hosting aside. All links go to Amazon.', resources_disclosure: 'As an Amazon Associate, CamelCompass earns from qualifying purchases. Prices and availability are set by Amazon and can change at any time.', resources_item_cta: 'View on Amazon →',
      home_featured_title: 'Featured content',
      featured_compare_t: 'Best WordPress Hosting: 2026 Comparison', featured_compare_d: 'Hostinger, Bluehost, and SiteGround compared on price, renewal cost, and support.',
      eyebrow_compare: 'Comparison', eyebrow_review: 'Review',
      home_method_title: 'How we pick what to recommend',
      method1_t: 'Real-world testing', method1_d: 'We run every tool on an actual project ourselves — not just a rundown of the spec sheet.',
      method2_t: 'Pricing and renewals verified', method2_d: "We check pricing pages regularly, including renewal rates, and call it out clearly when a price jumps after year one.",
      method3_t: 'Full transparency', method3_d: 'We always disclose when a link is an affiliate link, and commissions never sway our ratings.',
      compare_title: 'Best WordPress Hosting: 2026 Comparison',
      compare_lede: 'We compared Hostinger, Bluehost, and SiteGround on launch price, renewal price, storage, and support. Prices are shown in US dollars for consistency across languages — most hosts also let you pick EUR or GBP billing at checkout. Last updated: September 2026.',
      col_launch: 'Launch price', col_renew: 'Renewal price*', col_storage: 'Storage included', col_sites: 'Sites included', col_ssl: 'Free SSL', col_backup: 'Backups', col_migration: 'Free migration', col_support: 'Support', col_rating: 'Editorial rating',
      visit_site: 'Visit site', read_review: 'Read the review →', read_full_review: 'Read the full review →',
      pick_tag: "Editor's pick", our_pick: 'Our pick',
      compare_footnote: '*Renewal price shown for the entry-level plan of each host. Always verify current pricing on the official site before publishing or buying.',
      review_badge: 'Review · Hosting', review_rating_label: 'Editorial rating',
      review_cta: 'Visit {name}’s official site →', review_affiliate_note: 'This is an affiliate link. If you buy through it, we may earn a commission at no extra cost to you.',
      fact_price: 'Starting price', fact_bestfor: 'Best for', fact_deal: 'Current deal', fact_refund: 'Money-back guarantee',
      liked_title: 'What we liked', held_back_title: 'What held it back',
      plans_title: 'Pricing and plans', plans_lede: 'Prices shown reflect the introductory term — always check the current offer on the official site before publishing.',
      plans_footnote: '*Launch price on a multi-year term; renewal rises to around ${renew}/mo on the base plan. Always update with the real, current pricing before this goes live.',
      perf_title: 'Performance', ease_title: 'Ease of use', support_title: 'Customer support',
      alt_title: '{name} alternatives', most_popular: 'Most popular',
      recommend_title: 'Which host fits your region?',
      recommend_sub: 'Pick where you and your visitors mostly are, and we’ll point you to the host that makes the most sense there — based on data center location, currency, and support hours.',
      recommend_privacy: "You choose your region yourself below. We don't detect, track, or store your location — nothing here is sent anywhere, it's all calculated on this page.",
      region_eu: 'European Union', region_uk: 'United Kingdom', region_us: 'United States & Canada', region_row: 'Rest of the world',
      recommend_pick_label: 'Best pick for this region', recommend_alt_label: 'Also worth a look',
      legal_title: 'Privacy & Legal',
      legal_updated: 'Last updated: September 22, 2026',
      legal_about_h: 'About this site',
      legal_about_p: 'CamelCompass is an independent review and comparison site for web hosting, plus a small collection of tools and products we personally recommend. Our goal is to give you honest, practical information so you can make your own decision — not to push you toward the highest-paying option.',
      legal_affiliate_h: 'Advertising & Amazon affiliate disclosure',
      legal_affiliate_p: 'This site is monetized in exactly two ways: Google AdSense display ads, and the Amazon Associates program. As an Amazon Associate, CamelCompass earns from qualifying purchases — if you click an Amazon link on this site and buy something, we may receive a small commission at no extra cost to you. Ads are served by Google and may be personalized based on your consent choice; see Privacy & cookies below. Neither ads nor Amazon links ever influence our ratings, which are based on our own research and testing.',
      legal_privacy_h: 'Privacy & cookies',
      legal_privacy_p: "We built this site to need as little of your data as possible. We don't run analytics, we don't use advertising or tracking cookies, and we never collect or store your location or IP address. The only things this site can store in your browser are:",
      legal_privacy_li1: 'Your cookie-consent choice (accept/decline), so we don’t ask again on every visit.',
      legal_privacy_li2: 'Your chosen language, but only if you accepted the notice below.',
      legal_privacy_li3: 'On the "Recommended for you" page, the region you select — this stays in your browser and is never sent to us or to anyone else.',
      legal_privacy_p2: 'You can clear this at any time from your browser settings. Declining the cookie notice simply means we won’t remember your language choice between visits.',
      legal_disclaimer_h: 'Disclaimer',
      legal_disclaimer_p: 'Prices, plans, and features are based on publicly available information at the time of writing and can change at any time — always check the provider’s official site before buying. This content is general information, not professional, legal, or financial advice, and we are not responsible for decisions made based on it. All product names and trademarks belong to their respective owners.',
      legal_terms_h: 'Terms of use',
      legal_terms_p: 'You’re welcome to read and share this content. We ask that you don’t copy it wholesale onto another site without permission. This is a project prototype; contact details will be added once the site is live.',
      cookie_text: 'We use a couple of small, strictly functional entries in your browser to remember your cookie choice and your language — nothing is tracked, and nothing is shared with anyone. See our Privacy & Legal page for details.',
      cookie_accept: 'Accept', cookie_decline: 'Decline',
      footer_desc: 'Independent hosting reviews and hand-picked tools for small businesses and freelancers.',
      footer_cat_title: 'Categories', footer_site_title: 'Site',
      footer_disclosure: 'Advertising disclosure: this site displays ads and contains Amazon affiliate links. If you buy a product through them, we may earn a commission at no extra cost to you. This never affects our ratings, which are based on our own testing.',
      footer_copyright: '© 2026 CamelCompass — Project prototype, for review before publishing'
    },
    it: {
      nav_hosting: 'Hosting', nav_resources: 'Strumenti', nav_recommend: 'Consigliato per te', nav_legal: 'Privacy e note legali',
      crumb_home: 'Home', crumb_compare: 'Confronto',
      disclose: 'CamelCompass si sostiene con la pubblicità e i link di affiliazione Amazon: se acquisti tramite i nostri link potremmo ricevere una commissione, senza costi per te.',
      disclose_link: 'Come selezioniamo i prodotti',
      home_badge: 'Guide indipendenti, aggiornate ogni mese',
      home_title: 'Scegli il software giusto, prima di pagarlo.',
      home_sub: 'Testiamo l’hosting web e selezioniamo strumenti che vale la pena comprare — per piccole imprese, freelance e blogger — e ti diciamo onestamente cosa vale davvero i tuoi soldi.',
      home_cta: 'Confronta gli hosting WordPress →',
      home_cat_title: 'Le categorie che copriamo',
      cat_hosting_t: 'Hosting', cat_hosting_d: 'Confronti reali tra i principali provider per aprire un sito WordPress o e-commerce.', cat_hosting_link: 'Vedi il confronto →',
      cat_res_t: 'Strumenti consigliati', cat_res_d: 'Una lista breve e onesta di strumenti che usiamo o consigliamo personalmente, disponibili su Amazon.', cat_res_link: 'Vedi la selezione →',
      soon: 'In arrivo',
      resources_title: 'Strumenti che consigliamo', resources_sub: "Una lista breve e onesta di cose che usiamo personalmente per gestire questo sito e altri simili, a parte l'hosting. Tutti i link portano ad Amazon.", resources_disclosure: 'In qualità di affiliato Amazon, CamelCompass riceve un guadagno dagli acquisti idonei. Prezzi e disponibilità sono stabiliti da Amazon e possono cambiare in qualsiasi momento.', resources_item_cta: 'Vedi su Amazon →',
      home_featured_title: 'Contenuti in evidenza',
      featured_compare_t: 'Miglior hosting per WordPress: confronto 2026', featured_compare_d: 'Hostinger, Bluehost e SiteGround messi a confronto su prezzo, rinnovo e assistenza.',
      eyebrow_compare: 'Comparativo', eyebrow_review: 'Recensione',
      home_method_title: 'Come selezioniamo i software',
      method1_t: 'Test reali', method1_d: 'Proviamo ogni strumento in prima persona su un progetto vero, non ci basiamo solo sulle schede tecniche.',
      method2_t: 'Prezzi e rinnovi verificati', method2_d: 'Controlliamo listini e rinnovi regolarmente: se un fornitore alza le tariffe dopo il primo anno, lo scriviamo chiaramente.',
      method3_t: 'Trasparenza totale', method3_d: 'Indichiamo sempre quando un link è di affiliazione, e le commissioni non cambiano il nostro giudizio.',
      compare_title: 'Miglior hosting per WordPress: confronto 2026',
      compare_lede: 'Abbiamo confrontato Hostinger, Bluehost e SiteGround su prezzo di lancio, prezzo di rinnovo, spazio incluso e assistenza. I prezzi sono mostrati in dollari USA per coerenza tra le lingue — quasi tutti i provider permettono comunque di fatturare in euro o sterline al checkout. Ultimo aggiornamento: settembre 2026.',
      col_launch: 'Prezzo di lancio', col_renew: 'Prezzo al rinnovo*', col_storage: 'Spazio incluso', col_sites: 'Siti inclusi', col_ssl: 'SSL gratuito', col_backup: 'Backup', col_migration: 'Migrazione gratuita', col_support: 'Assistenza', col_rating: 'Voto redazione',
      visit_site: 'Vai al sito', read_review: 'Leggi la recensione →', read_full_review: 'Leggi la recensione completa →',
      pick_tag: 'Scelta redazione', our_pick: 'La nostra scelta',
      compare_footnote: '*Prezzo di rinnovo del piano base di ciascun provider. Verifica sempre il listino aggiornato sul sito ufficiale prima di pubblicare o acquistare.',
      review_badge: 'Recensione · Hosting', review_rating_label: 'Voto redazione',
      review_cta: 'Vai al sito ufficiale di {name} →', review_affiliate_note: 'Link di affiliazione — se acquisti riceviamo una piccola commissione, a te non costa nulla in più.',
      fact_price: 'Prezzo da', fact_bestfor: 'Miglior per', fact_deal: 'Offerta attuale', fact_refund: 'Rimborso',
      liked_title: 'Cosa ci è piaciuto', held_back_title: 'Cosa ci ha convinto meno',
      plans_title: 'Prezzi e piani', plans_lede: "Prezzi indicativi riferiti al primo termine promozionale: verifica sempre l'offerta in corso sul sito ufficiale prima di pubblicare.",
      plans_footnote: '*Prezzo di lancio con impegno pluriennale; il rinnovo sale a circa ${renew}/mese sul piano base. Aggiorna sempre con il listino reale prima della pubblicazione.',
      perf_title: 'Prestazioni', ease_title: "Facilità d'uso", support_title: 'Assistenza clienti',
      alt_title: 'Alternative a {name}', most_popular: 'Più popolare',
      recommend_title: 'Quale hosting fa per la tua zona?',
      recommend_sub: 'Scegli dove ti trovi tu (o dove si trovano principalmente i tuoi visitatori) e ti indichiamo l’hosting più sensato per quella zona — in base a data center, valuta e orari di assistenza.',
      recommend_privacy: 'La scelta della zona è tua: qui sotto la selezioni tu stesso. Non rileviamo, non tracciamo e non salviamo la tua posizione — nulla viene inviato da nessuna parte, tutto viene calcolato in questa pagina.',
      region_eu: 'Unione Europea', region_uk: 'Regno Unito', region_us: 'Stati Uniti e Canada', region_row: 'Resto del mondo',
      recommend_pick_label: 'Scelta migliore per questa zona', recommend_alt_label: 'Da valutare anche',
      legal_title: 'Privacy e note legali',
      legal_updated: 'Ultimo aggiornamento: 22 settembre 2026',
      legal_about_h: 'Chi siamo',
      legal_about_p: 'CamelCompass è un sito indipendente di recensioni e confronti sull’hosting web, insieme a una piccola selezione di strumenti e prodotti che consigliamo personalmente. Il nostro obiettivo è darti informazioni oneste e pratiche per decidere da solo — non spingerti verso l’opzione che ci paga di più.',
      legal_affiliate_h: 'Pubblicità e affiliazione Amazon',
      legal_affiliate_p: 'Questo sito si finanzia in due soli modi: gli annunci di Google AdSense e il programma Amazon Associates (affiliazione Amazon). In qualità di affiliato Amazon, CamelCompass riceve un guadagno dagli acquisti idonei: se clicchi su un link Amazon presente su questo sito e acquisti qualcosa, potremmo ricevere una piccola commissione, senza alcun costo aggiuntivo per te. Gli annunci sono forniti da Google e possono essere personalizzati in base alla tua scelta sui cookie; vedi Privacy e cookie qui sotto. Né gli annunci né i link Amazon influenzano mai le nostre valutazioni, basate sui nostri test e sulla nostra ricerca.',
      legal_privacy_h: 'Privacy e cookie',
      legal_privacy_p: 'Abbiamo costruito questo sito per aver bisogno del minor numero possibile di tuoi dati. Non usiamo strumenti di analytics, non usiamo cookie pubblicitari o di tracciamento, e non raccogliamo né conserviamo mai la tua posizione o il tuo indirizzo IP. Le uniche cose che questo sito può salvare nel tuo browser sono:',
      legal_privacy_li1: 'La tua scelta sul banner cookie (accetta/rifiuta), così non te la richiediamo a ogni visita.',
      legal_privacy_li2: 'La lingua che hai scelto, ma solo se hai accettato l’avviso qui sotto.',
      legal_privacy_li3: 'Nella pagina "Consigliato per te", la zona che selezioni — resta nel tuo browser e non viene mai inviata a noi né a nessun altro.',
      legal_privacy_p2: 'Puoi cancellare tutto questo in qualsiasi momento dalle impostazioni del tuo browser. Rifiutare l’avviso sui cookie significa semplicemente che non ricorderemo la tua lingua tra una visita e l’altra.',
      legal_disclaimer_h: 'Disclaimer',
      legal_disclaimer_p: 'Prezzi, piani e funzionalità sono basati su informazioni pubblicamente disponibili al momento della scrittura e possono cambiare in qualsiasi momento — verifica sempre il sito ufficiale del provider prima di acquistare. Questo contenuto è un’informazione generale, non una consulenza professionale, legale o finanziaria, e non siamo responsabili per decisioni prese sulla base di esso. Tutti i nomi di prodotto e i marchi appartengono ai rispettivi proprietari.',
      legal_terms_h: 'Termini di utilizzo',
      legal_terms_p: 'Sei libero di leggere e condividere questo contenuto. Ti chiediamo di non copiarlo integralmente su un altro sito senza permesso. Questo è un prototipo di progetto; i dati di contatto verranno aggiunti quando il sito sarà online.',
      cookie_text: 'Usiamo un paio di piccole voci strettamente funzionali nel tuo browser per ricordare la tua scelta sui cookie e la tua lingua — nulla viene tracciato, nulla viene condiviso con nessuno. Dettagli nella pagina Privacy e note legali.',
      cookie_accept: 'Accetta', cookie_decline: 'Rifiuta',
      footer_desc: 'Recensioni indipendenti sull’hosting e strumenti selezionati per piccole imprese e freelance.',
      footer_cat_title: 'Categorie', footer_site_title: 'Sito',
      footer_disclosure: 'Messaggio pubblicitario: questo sito mostra annunci pubblicitari e contiene link di affiliazione Amazon. Se acquisti un prodotto tramite questi link potremmo ricevere una commissione, senza alcun costo aggiuntivo per te. Questo non influenza le nostre valutazioni, basate sui nostri test.',
      footer_copyright: '© 2026 CamelCompass — Prototipo di progetto, da rivedere prima della pubblicazione'
    },
    fr: {
      nav_hosting: 'Hébergement', nav_resources: 'Ressources', nav_recommend: 'Recommandé pour vous', nav_legal: 'Confidentialité & mentions légales',
      crumb_home: 'Accueil', crumb_compare: 'Comparatif',
      disclose: "CamelCompass est financé par la publicité et des liens d'affiliation Amazon : si vous achetez via nos liens, nous pouvons toucher une commission, sans frais supplémentaires pour vous.",
      disclose_link: 'Comment nous sélectionnons les produits',
      home_badge: 'Avis indépendants, mis à jour chaque mois',
      home_title: 'Choisissez le bon logiciel, avant de le payer.',
      home_sub: "Nous testons l'hébergement web et sélectionnons des outils qui valent la peine d'être achetés — pour les petites entreprises, les freelances et les blogueurs — et vous disons honnêtement ce qui vaut vraiment votre argent.",
      home_cta: "Comparer les hébergements WordPress →",
      home_cat_title: 'Ce que nous couvrons',
      cat_hosting_t: 'Hébergement', cat_hosting_d: "Comparatifs concrets des meilleurs hébergeurs pour WordPress et les sites de petites entreprises.", cat_hosting_link: 'Voir le comparatif →',
      cat_res_t: 'Outils recommandés', cat_res_d: "Une courte liste honnête d'outils que nous utilisons ou recommandons personnellement, disponibles sur Amazon.", cat_res_link: 'Voir la sélection →',
      soon: 'Bientôt disponible',
      resources_title: 'Outils que nous recommandons', resources_sub: "Une courte liste honnête de choses que nous utilisons personnellement pour gérer ce site et d'autres semblables, l'hébergement mis à part. Tous les liens mènent vers Amazon.", resources_disclosure: 'En tant que partenaire Amazon, CamelCompass perçoit une rémunération sur les achats éligibles. Les prix et la disponibilité sont fixés par Amazon et peuvent changer à tout moment.', resources_item_cta: 'Voir sur Amazon →',
      home_featured_title: 'Contenus à la une',
      featured_compare_t: "Meilleur hébergement WordPress : comparatif 2026", featured_compare_d: 'Hostinger, Bluehost et SiteGround comparés sur le prix, le renouvellement et le support.',
      eyebrow_compare: 'Comparatif', eyebrow_review: 'Avis',
      home_method_title: 'Comment nous choisissons nos recommandations',
      method1_t: 'Tests en conditions réelles', method1_d: "Nous testons chaque outil nous-mêmes sur un vrai projet — pas seulement en lisant la fiche technique.",
      method2_t: 'Prix et renouvellements vérifiés', method2_d: "Nous vérifions régulièrement les pages tarifaires, renouvellement compris, et le signalons clairement quand un prix grimpe après la première année.",
      method3_t: 'Transparence totale', method3_d: "Nous indiquons toujours quand un lien est un lien d'affiliation, et les commissions n'influencent jamais nos notes.",
      compare_title: "Meilleur hébergement WordPress : comparatif 2026",
      compare_lede: "Nous avons comparé Hostinger, Bluehost et SiteGround sur le prix de lancement, le prix de renouvellement, le stockage et le support. Les prix sont affichés en dollars américains par souci de cohérence entre les langues — la plupart des hébergeurs permettent aussi une facturation en euros ou en livres sterling au moment du paiement. Dernière mise à jour : septembre 2026.",
      col_launch: 'Prix de lancement', col_renew: 'Prix au renouvellement*', col_storage: 'Stockage inclus', col_sites: 'Sites inclus', col_ssl: 'SSL gratuit', col_backup: 'Sauvegardes', col_migration: 'Migration gratuite', col_support: 'Support', col_rating: 'Note de la rédaction',
      visit_site: 'Visiter le site', read_review: "Lire l'avis →", read_full_review: "Lire l'avis complet →",
      pick_tag: 'Choix de la rédaction', our_pick: 'Notre choix',
      compare_footnote: "*Prix de renouvellement indiqué pour le forfait d'entrée de gamme de chaque hébergeur. Vérifiez toujours le tarif en vigueur sur le site officiel avant de publier ou d'acheter.",
      review_badge: 'Avis · Hébergement', review_rating_label: 'Note de la rédaction',
      review_cta: 'Visiter le site officiel de {name} →', review_affiliate_note: "Ceci est un lien d'affiliation. Si vous achetez via ce lien, nous pouvons toucher une commission, sans frais supplémentaires pour vous.",
      fact_price: 'Prix de départ', fact_bestfor: 'Idéal pour', fact_deal: 'Offre actuelle', fact_refund: 'Garantie satisfait ou remboursé',
      liked_title: 'Ce que nous avons aimé', held_back_title: 'Ce qui nous a moins convaincus',
      plans_title: 'Tarifs et forfaits', plans_lede: "Les prix affichés correspondent à la période d'introduction — vérifiez toujours l'offre en cours sur le site officiel avant de publier.",
      plans_footnote: "*Prix de lancement sur engagement pluriannuel ; le renouvellement grimpe à environ ${renew}/mois sur le forfait de base. Mettez toujours à jour avec le tarif réel avant la mise en ligne.",
      perf_title: 'Performances', ease_title: "Facilité d'utilisation", support_title: 'Support client',
      alt_title: 'Alternatives à {name}', most_popular: 'Le plus populaire',
      recommend_title: 'Quel hébergeur convient à votre région ?',
      recommend_sub: "Indiquez où vous (ou l'essentiel de vos visiteurs) vous trouvez, et nous vous indiquons l'hébergeur le plus pertinent pour cette zone — selon l'emplacement des centres de données, la devise et les horaires du support.",
      recommend_privacy: "Vous choisissez vous-même votre région ci-dessous. Nous ne détectons, ne suivons ni ne stockons votre position — rien n'est envoyé où que ce soit, tout est calculé directement sur cette page.",
      region_eu: 'Union européenne', region_uk: 'Royaume-Uni', region_us: 'États-Unis et Canada', region_row: 'Reste du monde',
      recommend_pick_label: 'Meilleur choix pour cette région', recommend_alt_label: 'À considérer aussi',
      legal_title: 'Confidentialité & mentions légales',
      legal_updated: 'Dernière mise à jour : 22 septembre 2026',
      legal_about_h: 'À propos de ce site',
      legal_about_p: "CamelCompass est un site indépendant d'avis et de comparatifs sur l'hébergement web, ainsi qu'une petite sélection d'outils et de produits que nous recommandons personnellement. Notre objectif est de vous donner des informations honnêtes et pratiques pour décider par vous-même — pas de vous pousser vers l'offre qui nous rapporte le plus.",
      legal_affiliate_h: 'Publicité et affiliation Amazon',
      legal_affiliate_p: "Ce site n'est monetisé que de deux façons : les publicités Google AdSense et le programme Amazon Associates (partenaires Amazon). En tant que partenaire Amazon, CamelCompass perçoit une rémunération sur les achats éligibles : si vous cliquez sur un lien Amazon présent sur ce site et achetez quelque chose, nous pouvons percevoir une petite commission, sans frais supplémentaires pour vous. Les publicités sont fournies par Google et peuvent être personnalisées selon votre choix de cookies ; voir Confidentialité et cookies ci-dessous. Ni les publicités ni les liens Amazon n'influencent nos notes, basées sur nos propres tests et recherches.",
      legal_privacy_h: 'Confidentialité et cookies',
      legal_privacy_p: "Nous avons conçu ce site pour avoir besoin du moins de données possible sur vous. Nous n'utilisons pas d'outils d'analyse, pas de cookies publicitaires ou de suivi, et nous ne collectons ni ne conservons jamais votre position ou votre adresse IP. Les seules choses que ce site peut enregistrer dans votre navigateur sont :",
      legal_privacy_li1: "Votre choix concernant les cookies (accepter/refuser), pour ne pas vous le redemander à chaque visite.",
      legal_privacy_li2: "La langue que vous avez choisie, mais uniquement si vous avez accepté l'avis ci-dessous.",
      legal_privacy_li3: "Sur la page « Recommandé pour vous », la région que vous sélectionnez — elle reste dans votre navigateur et n'est jamais envoyée ni à nous ni à personne d'autre.",
      legal_privacy_p2: "Vous pouvez effacer tout cela à tout moment depuis les paramètres de votre navigateur. Refuser l'avis sur les cookies signifie simplement que nous ne nous souviendrons pas de votre langue d'une visite à l'autre.",
      legal_disclaimer_h: 'Avertissement',
      legal_disclaimer_p: "Les prix, forfaits et fonctionnalités sont basés sur des informations publiques au moment de la rédaction et peuvent changer à tout moment — vérifiez toujours le site officiel du fournisseur avant d'acheter. Ce contenu est une information générale, pas un conseil professionnel, juridique ou financier, et nous ne sommes pas responsables des décisions prises sur cette base. Tous les noms de produits et marques appartiennent à leurs propriétaires respectifs.",
      legal_terms_h: "Conditions d'utilisation",
      legal_terms_p: "Vous êtes libre de lire et de partager ce contenu. Nous vous demandons de ne pas le recopier intégralement sur un autre site sans autorisation. Ceci est un prototype de projet ; les coordonnées de contact seront ajoutées une fois le site en ligne.",
      cookie_text: "Nous utilisons quelques éléments strictement fonctionnels dans votre navigateur pour retenir votre choix sur les cookies et votre langue — rien n'est suivi, rien n'est partagé avec qui que ce soit. Détails sur la page Confidentialité & mentions légales.",
      cookie_accept: 'Accepter', cookie_decline: 'Refuser',
      footer_desc: "Avis indépendants sur l'hébergement et outils sélectionnés pour petites entreprises et freelances.",
      footer_cat_title: 'Catégories', footer_site_title: 'Site',
      footer_disclosure: "Mention publicitaire : ce site affiche des publicités et contient des liens d'affiliation Amazon. Si vous achetez un produit via ces liens, nous pouvons toucher une commission, sans frais supplémentaires pour vous. Cela n'affecte jamais nos notes, basées sur nos propres tests.",
      footer_copyright: '© 2026 CamelCompass — Prototype de projet, à valider avant publication'
    },
    de: {
      nav_hosting: 'Hosting', nav_resources: 'Ressourcen', nav_recommend: 'Für dich empfohlen', nav_legal: 'Datenschutz & Rechtliches',
      crumb_home: 'Startseite', crumb_compare: 'Vergleich',
      disclose: 'CamelCompass finanziert sich über Werbung und Amazon-Affiliate-Links: Wenn du über unsere Links kaufst, erhalten wir eventuell eine Provision, ohne Mehrkosten für dich.',
      disclose_link: 'Wie wir Produkte auswählen',
      home_badge: 'Unabhängige Tests, jeden Monat aktualisiert',
      home_title: 'Wähle die richtige Software, bevor du dafür bezahlst.',
      home_sub: 'Wir testen Webhosting und wählen Tools aus, die sich wirklich lohnen — für kleine Unternehmen, Freiberufler und Blogger — und sagen dir ehrlich, was wirklich sein Geld wert ist.',
      home_cta: 'WordPress-Hosting vergleichen →',
      home_cat_title: 'Was wir abdecken',
      cat_hosting_t: 'Hosting', cat_hosting_d: 'Praxisnahe Vergleiche der besten Anbieter für WordPress- und Kleinunternehmens-Websites.', cat_hosting_link: 'Zum Vergleich →',
      cat_res_t: 'Empfohlene Tools', cat_res_d: 'Eine kurze, ehrliche Liste an Tools, die wir selbst nutzen oder empfehlen — erhältlich bei Amazon.', cat_res_link: 'Zur Auswahl →',
      soon: 'Demnächst',
      resources_title: 'Tools, die wir empfehlen', resources_sub: 'Eine kurze, ehrliche Liste an Dingen, die wir persönlich zum Betrieb dieser und ähnlicher Seiten nutzen — Hosting ausgenommen. Alle Links führen zu Amazon.', resources_disclosure: 'Als Teilnehmer des Amazon-Partnerprogramms verdient CamelCompass an qualifizierten Käufen. Preise und Verfügbarkeit werden von Amazon festgelegt und können sich jederzeit ändern.', resources_item_cta: 'Bei Amazon ansehen →',
      home_featured_title: 'Empfohlene Inhalte',
      featured_compare_t: 'Bestes WordPress-Hosting: Vergleich 2026', featured_compare_d: 'Hostinger, Bluehost und SiteGround im Vergleich bei Preis, Verlängerung und Support.',
      eyebrow_compare: 'Vergleich', eyebrow_review: 'Test',
      home_method_title: 'Wie wir unsere Empfehlungen auswählen',
      method1_t: 'Praxistests', method1_d: 'Wir testen jedes Tool selbst an einem echten Projekt — nicht nur anhand des Datenblatts.',
      method2_t: 'Preise und Verlängerungen geprüft', method2_d: 'Wir prüfen Preisseiten regelmäßig, auch die Verlängerungspreise, und weisen klar darauf hin, wenn ein Preis nach dem ersten Jahr steigt.',
      method3_t: 'Volle Transparenz', method3_d: 'Wir kennzeichnen Affiliate-Links immer deutlich, und Provisionen beeinflussen niemals unsere Bewertungen.',
      compare_title: 'Bestes WordPress-Hosting: Vergleich 2026',
      compare_lede: 'Wir haben Hostinger, Bluehost und SiteGround bei Einstiegspreis, Verlängerungspreis, Speicherplatz und Support verglichen. Die Preise werden zur Konsistenz zwischen den Sprachen in US-Dollar angezeigt — die meisten Anbieter erlauben an der Kasse auch eine Abrechnung in Euro oder Pfund. Letzte Aktualisierung: September 2026.',
      col_launch: 'Einstiegspreis', col_renew: 'Verlängerungspreis*', col_storage: 'Enthaltener Speicher', col_sites: 'Enthaltene Websites', col_ssl: 'Kostenloses SSL', col_backup: 'Backups', col_migration: 'Kostenlose Migration', col_support: 'Support', col_rating: 'Redaktionsbewertung',
      visit_site: 'Zur Website', read_review: 'Test lesen →', read_full_review: 'Vollständigen Test lesen →',
      pick_tag: 'Redaktionsempfehlung', our_pick: 'Unsere Empfehlung',
      compare_footnote: '*Verlängerungspreis für den Einstiegstarif jedes Anbieters. Prüfe vor Veröffentlichung oder Kauf immer die aktuellen Preise auf der offiziellen Website.',
      review_badge: 'Test · Hosting', review_rating_label: 'Redaktionsbewertung',
      review_cta: 'Zur offiziellen Website von {name} →', review_affiliate_note: 'Dies ist ein Affiliate-Link. Wenn du darüber kaufst, erhalten wir eventuell eine Provision, ohne Mehrkosten für dich.',
      fact_price: 'Ab', fact_bestfor: 'Am besten für', fact_deal: 'Aktuelles Angebot', fact_refund: 'Geld-zurück-Garantie',
      liked_title: 'Was uns gefallen hat', held_back_title: 'Was uns weniger überzeugt hat',
      plans_title: 'Preise und Tarife', plans_lede: 'Die gezeigten Preise gelten für den Einführungszeitraum — prüfe vor Veröffentlichung immer das aktuelle Angebot auf der offiziellen Website.',
      plans_footnote: '*Einstiegspreis bei mehrjähriger Laufzeit; die Verlängerung steigt beim Basistarif auf etwa ${renew}/Monat. Aktualisiere vor dem Livegang immer mit den echten, aktuellen Preisen.',
      perf_title: 'Leistung', ease_title: 'Benutzerfreundlichkeit', support_title: 'Kundensupport',
      alt_title: 'Alternativen zu {name}', most_popular: 'Am beliebtesten',
      recommend_title: 'Welcher Anbieter passt zu deiner Region?',
      recommend_sub: 'Wähle, wo du dich (oder hauptsächlich deine Besucher) befindest, und wir zeigen dir den Anbieter, der dort am meisten Sinn ergibt — basierend auf Rechenzentrums-Standort, Währung und Support-Zeiten.',
      recommend_privacy: 'Du wählst deine Region unten selbst aus. Wir erkennen, verfolgen oder speichern deinen Standort nicht — hier wird nichts irgendwohin gesendet, alles wird direkt auf dieser Seite berechnet.',
      region_eu: 'Europäische Union', region_uk: 'Vereinigtes Königreich', region_us: 'USA & Kanada', region_row: 'Rest der Welt',
      recommend_pick_label: 'Beste Wahl für diese Region', recommend_alt_label: 'Ebenfalls einen Blick wert',
      legal_title: 'Datenschutz & Rechtliches',
      legal_updated: 'Zuletzt aktualisiert: 22. September 2026',
      legal_about_h: 'Über diese Seite',
      legal_about_p: 'CamelCompass ist eine unabhängige Test- und Vergleichsseite für Webhosting sowie eine kleine Auswahl an Tools und Produkten, die wir persönlich empfehlen. Unser Ziel ist es, dir ehrliche, praktische Informationen zu geben, damit du selbst entscheiden kannst — nicht dich zur bestbezahlten Option zu drängen.',
      legal_affiliate_h: 'Werbung und Amazon-Partnerprogramm',
      legal_affiliate_p: 'Diese Seite finanziert sich ausschließlich auf zwei Wegen: über Google-AdSense-Werbeanzeigen und das Amazon-Partnerprogramm (Amazon-Affiliate). Als Teilnehmer des Amazon-Partnerprogramms verdient CamelCompass an qualifizierten Käufen: Wenn du auf dieser Seite einen Amazon-Link anklickst und etwas kaufst, erhalten wir möglicherweise eine kleine Provision, ohne Mehrkosten für dich. Die Anzeigen werden von Google bereitgestellt und können je nach deiner Cookie-Entscheidung personalisiert sein; Details im Abschnitt Datenschutz & Cookies weiter unten. Weder Anzeigen noch Amazon-Links beeinflussen unsere Bewertungen, die auf eigenen Tests und Recherchen beruhen.',
      legal_privacy_h: 'Datenschutz & Cookies',
      legal_privacy_p: 'Wir haben diese Seite so gebaut, dass sie so wenig Daten von dir wie möglich braucht. Wir verwenden keine Analysetools, keine Werbe- oder Tracking-Cookies und erfassen oder speichern niemals deinen Standort oder deine IP-Adresse. Das Einzige, was diese Seite in deinem Browser speichern kann, ist:',
      legal_privacy_li1: 'Deine Cookie-Entscheidung (akzeptieren/ablehnen), damit wir dich nicht bei jedem Besuch erneut fragen.',
      legal_privacy_li2: 'Deine gewählte Sprache, aber nur, wenn du den Hinweis unten akzeptiert hast.',
      legal_privacy_li3: 'Auf der Seite „Für dich empfohlen“ die von dir gewählte Region — sie bleibt in deinem Browser und wird nie an uns oder sonst jemanden gesendet.',
      legal_privacy_p2: 'Du kannst all das jederzeit über die Einstellungen deines Browsers löschen. Wenn du den Cookie-Hinweis ablehnst, merken wir uns lediglich deine Sprachwahl nicht zwischen den Besuchen.',
      legal_disclaimer_h: 'Haftungsausschluss',
      legal_disclaimer_p: 'Preise, Tarife und Funktionen basieren auf öffentlich zugänglichen Informationen zum Zeitpunkt der Erstellung und können sich jederzeit ändern — prüfe vor dem Kauf immer die offizielle Website des Anbieters. Dieser Inhalt ist eine allgemeine Information, keine professionelle, rechtliche oder finanzielle Beratung, und wir haften nicht für Entscheidungen, die darauf basieren. Alle Produktnamen und Marken gehören ihren jeweiligen Inhabern.',
      legal_terms_h: 'Nutzungsbedingungen',
      legal_terms_p: 'Du darfst diesen Inhalt gerne lesen und teilen. Wir bitten dich, ihn nicht vollständig ohne Erlaubnis auf einer anderen Seite zu übernehmen. Dies ist ein Projektprototyp; Kontaktdaten werden ergänzt, sobald die Seite live ist.',
      cookie_text: 'Wir verwenden ein paar kleine, rein funktionale Einträge in deinem Browser, um deine Cookie-Entscheidung und deine Sprache zu merken — nichts wird getrackt, nichts wird geteilt. Details auf der Seite Datenschutz & Rechtliches.',
      cookie_accept: 'Akzeptieren', cookie_decline: 'Ablehnen',
      footer_desc: 'Unabhängige Hosting-Tests und ausgewählte Tools für kleine Unternehmen und Freiberufler.',
      footer_cat_title: 'Kategorien', footer_site_title: 'Seite',
      footer_disclosure: 'Werbehinweis: Diese Seite zeigt Werbung und enthält Amazon-Affiliate-Links. Wenn du ein Produkt darüber kaufst, erhalten wir eventuell eine Provision, ohne Mehrkosten für dich. Das beeinflusst nie unsere Bewertungen, die auf eigenen Tests beruhen.',
      footer_copyright: '© 2026 CamelCompass — Projektprototyp, vor Veröffentlichung zu prüfen'
    },
    es: {
      nav_hosting: 'Hosting', nav_resources: 'Recursos', nav_recommend: 'Recomendado para ti', nav_legal: 'Privacidad y legal',
      crumb_home: 'Inicio', crumb_compare: 'Comparativa',
      disclose: 'CamelCompass se sostiene con publicidad y enlaces de afiliados de Amazon: si compras a través de nuestros enlaces, podríamos recibir una comisión, sin coste extra para ti.',
      disclose_link: 'Cómo elegimos los productos',
      home_badge: 'Análisis independientes, actualizados cada mes',
      home_title: 'Elige el software adecuado, antes de pagar por él.',
      home_sub: 'Probamos hosting web y seleccionamos herramientas que realmente valen la pena — para pequeñas empresas, autónomos y bloggers — y te decimos con honestidad qué merece realmente tu dinero.',
      home_cta: 'Comparar hosting para WordPress →',
      home_cat_title: 'Lo que cubrimos',
      cat_hosting_t: 'Hosting', cat_hosting_d: 'Comparativas reales de los mejores proveedores para WordPress y sitios de pequeñas empresas.', cat_hosting_link: 'Ver la comparativa →',
      cat_res_t: 'Herramientas recomendadas', cat_res_d: 'Una lista breve y honesta de herramientas que usamos o recomendamos personalmente, disponibles en Amazon.', cat_res_link: 'Ver la selección →',
      soon: 'Próximamente',
      resources_title: 'Herramientas que recomendamos', resources_sub: 'Una lista breve y honesta de cosas que usamos personalmente para gestionar este sitio y otros similares, aparte del hosting. Todos los enlaces llevan a Amazon.', resources_disclosure: 'Como afiliado de Amazon, CamelCompass obtiene ingresos por las compras que califican. Los precios y la disponibilidad los establece Amazon y pueden cambiar en cualquier momento.', resources_item_cta: 'Ver en Amazon →',
      home_featured_title: 'Contenido destacado',
      featured_compare_t: 'Mejor hosting para WordPress: comparativa 2026', featured_compare_d: 'Hostinger, Bluehost y SiteGround comparados en precio, renovación y soporte.',
      eyebrow_compare: 'Comparativa', eyebrow_review: 'Análisis',
      home_method_title: 'Cómo elegimos qué recomendar',
      method1_t: 'Pruebas reales', method1_d: 'Probamos cada herramienta nosotros mismos en un proyecto real, no nos limitamos a leer la ficha técnica.',
      method2_t: 'Precios y renovaciones verificados', method2_d: 'Revisamos las páginas de precios con regularidad, incluidas las renovaciones, y lo señalamos con claridad cuando un precio sube tras el primer año.',
      method3_t: 'Transparencia total', method3_d: 'Siempre indicamos cuándo un enlace es de afiliado, y las comisiones nunca influyen en nuestras valoraciones.',
      compare_title: 'Mejor hosting para WordPress: comparativa 2026',
      compare_lede: 'Comparamos Hostinger, Bluehost y SiteGround en precio de lanzamiento, precio de renovación, almacenamiento y soporte. Los precios se muestran en dólares estadounidenses por coherencia entre idiomas — la mayoría de proveedores también permite facturar en euros o libras al finalizar la compra. Última actualización: septiembre de 2026.',
      col_launch: 'Precio de lanzamiento', col_renew: 'Precio de renovación*', col_storage: 'Almacenamiento incluido', col_sites: 'Sitios incluidos', col_ssl: 'SSL gratis', col_backup: 'Copias de seguridad', col_migration: 'Migración gratuita', col_support: 'Soporte', col_rating: 'Valoración de la redacción',
      visit_site: 'Visitar el sitio', read_review: 'Leer el análisis →', read_full_review: 'Leer el análisis completo →',
      pick_tag: 'Elección de la redacción', our_pick: 'Nuestra elección',
      compare_footnote: '*Precio de renovación mostrado para el plan de entrada de cada proveedor. Verifica siempre el precio actual en el sitio oficial antes de publicar o comprar.',
      review_badge: 'Análisis · Hosting', review_rating_label: 'Valoración de la redacción',
      review_cta: 'Visitar el sitio oficial de {name} →', review_affiliate_note: 'Este es un enlace de afiliado. Si compras a través de él, podríamos recibir una comisión, sin coste extra para ti.',
      fact_price: 'Precio desde', fact_bestfor: 'Ideal para', fact_deal: 'Oferta actual', fact_refund: 'Garantía de devolución',
      liked_title: 'Lo que nos gustó', held_back_title: 'Lo que nos convenció menos',
      plans_title: 'Precios y planes', plans_lede: 'Los precios mostrados corresponden al periodo introductorio — verifica siempre la oferta vigente en el sitio oficial antes de publicar.',
      plans_footnote: '*Precio de lanzamiento con permanencia plurianual; la renovación sube a unos ${renew}/mes en el plan base. Actualiza siempre con el precio real antes de publicar.',
      perf_title: 'Rendimiento', ease_title: 'Facilidad de uso', support_title: 'Atención al cliente',
      alt_title: 'Alternativas a {name}', most_popular: 'Más popular',
      recommend_title: '¿Qué proveedor encaja con tu región?',
      recommend_sub: 'Indica dónde estás tú (o donde está la mayoría de tus visitantes) y te señalamos el proveedor más adecuado para esa zona — según la ubicación de los centros de datos, la moneda y el horario de soporte.',
      recommend_privacy: 'Eliges tu región tú mismo aquí abajo. No detectamos, rastreamos ni guardamos tu ubicación — nada se envía a ningún sitio, todo se calcula en esta misma página.',
      region_eu: 'Unión Europea', region_uk: 'Reino Unido', region_us: 'Estados Unidos y Canadá', region_row: 'Resto del mundo',
      recommend_pick_label: 'Mejor opción para esta región', recommend_alt_label: 'También vale la pena mirar',
      legal_title: 'Privacidad y legal',
      legal_updated: 'Última actualización: 22 de septiembre de 2026',
      legal_about_h: 'Sobre este sitio',
      legal_about_p: 'CamelCompass es un sitio independiente de análisis y comparativas de hosting web, junto con una pequeña selección de herramientas y productos que recomendamos personalmente. Nuestro objetivo es darte información honesta y práctica para que decidas por ti mismo, no empujarte hacia la opción que más nos paga.',
      legal_affiliate_h: 'Publicidad y afiliación de Amazon',
      legal_affiliate_p: 'Este sitio se financia únicamente de dos formas: los anuncios de Google AdSense y el programa Amazon Associates (afiliados de Amazon). Como afiliado de Amazon, CamelCompass obtiene ingresos por las compras que califican: si haces clic en un enlace de Amazon en este sitio y compras algo, podríamos recibir una pequeña comisión, sin coste extra para ti. Los anuncios los proporciona Google y pueden personalizarse según tu elección de cookies; más detalles en Privacidad y cookies. Ni los anuncios ni los enlaces de Amazon influyen nunca en nuestras valoraciones, basadas en nuestras propias pruebas e investigación.',
      legal_privacy_h: 'Privacidad y cookies',
      legal_privacy_p: 'Hemos diseñado este sitio para necesitar la menor cantidad de datos tuyos posible. No usamos herramientas de analítica, no usamos cookies publicitarias ni de rastreo, y nunca recopilamos ni guardamos tu ubicación o tu dirección IP. Lo único que este sitio puede guardar en tu navegador es:',
      legal_privacy_li1: 'Tu elección sobre las cookies (aceptar/rechazar), para no volver a preguntarte en cada visita.',
      legal_privacy_li2: 'El idioma que elegiste, pero solo si aceptaste el aviso de abajo.',
      legal_privacy_li3: 'En la página "Recomendado para ti", la región que selecciones — se queda en tu navegador y nunca se envía ni a nosotros ni a nadie más.',
      legal_privacy_p2: 'Puedes borrar todo esto en cualquier momento desde la configuración de tu navegador. Rechazar el aviso de cookies simplemente significa que no recordaremos tu idioma entre visitas.',
      legal_disclaimer_h: 'Aviso legal',
      legal_disclaimer_p: 'Los precios, planes y funciones se basan en información disponible públicamente en el momento de escribir esto y pueden cambiar en cualquier momento — verifica siempre el sitio oficial del proveedor antes de comprar. Este contenido es información general, no asesoramiento profesional, legal o financiero, y no nos hacemos responsables de las decisiones tomadas a partir de él. Todos los nombres de producto y marcas pertenecen a sus respectivos propietarios.',
      legal_terms_h: 'Términos de uso',
      legal_terms_p: 'Eres bienvenido a leer y compartir este contenido. Te pedimos que no lo copies íntegramente en otro sitio sin permiso. Esto es un prototipo de proyecto; los datos de contacto se añadirán cuando el sitio esté en línea.',
      cookie_text: 'Usamos un par de elementos pequeños y estrictamente funcionales en tu navegador para recordar tu elección sobre cookies y tu idioma — no se rastrea nada, no se comparte nada con nadie. Más detalles en la página de Privacidad y legal.',
      cookie_accept: 'Aceptar', cookie_decline: 'Rechazar',
      footer_desc: 'Análisis independientes de hosting y herramientas seleccionadas para pequeñas empresas y autónomos.',
      footer_cat_title: 'Categorías', footer_site_title: 'Sitio',
      footer_disclosure: 'Divulgación publicitaria: este sitio muestra anuncios y contiene enlaces de afiliados de Amazon. Si compras un producto a través de ellos, podríamos recibir una comisión, sin coste extra para ti. Esto nunca afecta a nuestras valoraciones, basadas en nuestras propias pruebas.',
      footer_copyright: '© 2026 CamelCompass — Prototipo de proyecto, pendiente de revisión antes de publicarse'
    }
  };

  var HOSTS = [
    {
      slug: 'hostinger', order: 1, rating: '4.6', url: 'https://www.hostinger.com/',
      price: '2.99', renew: '11.99',
      storage: '20 GB SSD', sites: '3', ssl: true, migration: true,
      backup: { en: 'Weekly, daily from Unlimited plan', it: 'Settimanali, giornalieri dal piano Illimitato', fr: 'Hebdomadaires, quotidiennes à partir du forfait Illimité', de: 'Wöchentlich, ab „Unlimited“ täglich', es: 'Semanales, diarias desde el plan Ilimitado' },
      support: { en: '24/7 live chat', it: 'Chat 24/7', fr: 'Chat 24 h/24, 7 j/7', de: '24/7-Live-Chat', es: 'Chat 24/7' },
      badge: { en: 'Best overall value', it: 'Miglior rapporto qualità-prezzo', fr: 'Meilleur rapport qualité-prix', de: 'Bestes Preis-Leistungs-Verhältnis', es: 'Mejor relación calidad-precio' },
      bestFor: { en: 'First WordPress site on a tight budget', it: 'Primo sito WordPress, budget contenuto', fr: 'Premier site WordPress avec un petit budget', de: 'Erste WordPress-Seite mit kleinem Budget', es: 'Primer sitio WordPress con presupuesto ajustado' },
      deal: { en: 'Up to 75% off', it: 'Fino al 75% di sconto', fr: "Jusqu'à 75 % de réduction", de: 'Bis zu 75 % Rabatt', es: 'Hasta un 75 % de descuento' },
      refund: { en: '30 days', it: '30 giorni', fr: '30 jours', de: '30 Tage', es: '30 días' },
      tagline: {
        en: 'The Premium plan is the best entry point for a first WordPress site, with a simple dashboard and one of the highest affiliate payouts in the industry.',
        it: 'Il piano Premium offre il miglior punto di ingresso per chi apre il primo sito WordPress, con un pannello semplice e commissioni di affiliazione tra le più alte del settore.',
        fr: "Le forfait Premium est le meilleur point de départ pour un premier site WordPress, avec un tableau de bord simple et l'une des meilleures commissions d'affiliation du secteur.",
        de: 'Der Premium-Tarif ist der beste Einstieg für die erste WordPress-Seite – mit einfachem Dashboard und einer der höchsten Affiliate-Provisionen der Branche.',
        es: 'El plan Premium es el mejor punto de partida para un primer sitio WordPress, con un panel sencillo y una de las comisiones de afiliados más altas del sector.'
      },
      pros: {
        en: ['One of the lowest entry prices on the market', 'Free domain included for the first year', 'Free site migration on every plan', 'hPanel, the custom dashboard, is simple even for non-technical users', 'Daily backups with easy restore from the Unlimited plan up'],
        it: ['Tra i prezzi di ingresso più bassi del mercato', 'Dominio gratuito incluso nel primo anno', 'Migrazione del sito inclusa gratis su tutti i piani', 'hPanel, il pannello proprietario, è semplice anche per chi non ha esperienza tecnica', 'Backup giornalieri con ripristino facile dal piano Illimitato in su'],
        fr: ["L'un des prix d'entrée les plus bas du marché", 'Nom de domaine gratuit la première année', 'Migration du site gratuite sur tous les forfaits', 'hPanel, le tableau de bord maison, est simple même pour les débutants', 'Sauvegardes quotidiennes avec restauration facile à partir du forfait Illimité'],
        de: ['Einer der niedrigsten Einstiegspreise am Markt', 'Kostenlose Domain im ersten Jahr inklusive', 'Kostenlose Website-Migration bei allen Tarifen', 'hPanel, das eigene Dashboard, ist auch für Einsteiger einfach', 'Tägliche Backups mit einfacher Wiederherstellung ab „Unlimited“'],
        es: ['Uno de los precios de entrada más bajos del mercado', 'Dominio gratis incluido el primer año', 'Migración del sitio gratuita en todos los planes', 'hPanel, el panel propio, es sencillo incluso sin experiencia técnica', 'Copias de seguridad diarias con restauración fácil desde el plan Ilimitado']
      },
      cons: {
        en: ['The Premium plan caps out at 3 sites and 20 GB — fine to start, tight if the project grows fast', 'Renewal price roughly triples the intro rate', 'The best discounts require a 48-month commitment'],
        it: ['Il piano Premium include solo 3 siti e 20 GB: basta per iniziare, stretto se il progetto cresce in fretta', 'Il prezzo di rinnovo triplica rispetto al prezzo di lancio', 'Gli sconti migliori richiedono un impegno di 48 mesi'],
        fr: ['Le forfait Premium est limité à 3 sites et 20 Go : suffisant pour démarrer, juste si le projet grandit vite', 'Le prix de renouvellement triple environ le tarif de lancement', 'Les meilleures remises nécessitent un engagement de 48 mois'],
        de: ['Der Premium-Tarif ist auf 3 Websites und 20 GB begrenzt – zum Start okay, bei schnellem Wachstum knapp', 'Der Verlängerungspreis verdreifacht sich etwa gegenüber dem Einführungspreis', 'Die besten Rabatte erfordern eine Laufzeit von 48 Monaten'],
        es: ['El plan Premium se limita a 3 sitios y 20 GB: suficiente para empezar, ajustado si el proyecto crece rápido', 'El precio de renovación casi triplica el precio de lanzamiento', 'Los mejores descuentos requieren un compromiso de 48 meses']
      },
      plans: [
        { name: 'Premium', price: '2.99', feat: { en: '3 sites · 20 GB SSD · Weekly backups', it: '3 siti · 20 GB SSD · Backup settimanali', fr: '3 sites · 20 Go SSD · Sauvegardes hebdomadaires', de: '3 Websites · 20 GB SSD · Wöchentliche Backups', es: '3 sitios · 20 GB SSD · Copias semanales' } },
        { name: 'Unlimited', price: '3.99', popular: true, feat: { en: 'Unlimited sites · 50 GB NVMe · Daily backups', it: 'Siti illimitati · 50 GB NVMe · Backup giornalieri', fr: 'Sites illimités · 50 Go NVMe · Sauvegardes quotidiennes', de: 'Unbegrenzte Websites · 50 GB NVMe · Tägliche Backups', es: 'Sitios ilimitados · 50 GB NVMe · Copias diarias' } },
        { name: 'Cloud Startup', price: '7.99', feat: { en: 'Unlimited sites · 100 GB NVMe · Daily + on-demand backups', it: 'Siti illimitati · 100 GB NVMe · Backup giornalieri e su richiesta', fr: 'Sites illimités · 100 Go NVMe · Sauvegardes quotidiennes et à la demande', de: 'Unbegrenzte Websites · 100 GB NVMe · Tägliche und On-Demand-Backups', es: 'Sitios ilimitados · 100 GB NVMe · Copias diarias y bajo demanda' } }
      ],
      performance: { en: 'In our testing, hPanel stayed responsive even with several sites running at once, and the built-in caching helps load times without needing extra plugins.', it: 'Nel nostro test hPanel resta reattivo anche con più siti attivi, e la cache integrata aiuta i tempi di caricamento senza plugin aggiuntivi.', fr: 'Dans nos tests, hPanel est resté réactif même avec plusieurs sites actifs, et la mise en cache intégrée améliore les temps de chargement sans plugin supplémentaire.', de: 'In unserem Test blieb hPanel auch mit mehreren aktiven Websites reaktionsschnell, und das integrierte Caching verbessert die Ladezeiten ganz ohne Zusatz-Plugins.', es: 'En nuestra prueba, hPanel se mantuvo ágil incluso con varios sitios activos a la vez, y la caché integrada mejora los tiempos de carga sin plugins adicionales.' },
      ease: { en: 'hPanel is simpler than cPanel for anyone starting from scratch: one-click WordPress install, and domains and email are managed from a single screen.', it: "hPanel è più semplice di cPanel per chi parte da zero: installazione di WordPress in un clic, dominio ed email in un'unica schermata.", fr: "hPanel est plus simple que cPanel pour qui débute : installation de WordPress en un clic, domaines et e-mails gérés depuis un seul écran.", de: 'hPanel ist für Einsteiger einfacher als cPanel: WordPress-Installation mit einem Klick, Domains und E-Mails auf einem Bildschirm.', es: 'hPanel es más sencillo que cPanel para quien empieza de cero: instalación de WordPress en un clic, dominios y correo desde una sola pantalla.' },
      supportText: { en: '24/7 live chat is the fastest way to resolve domain or configuration issues.', it: 'La chat live 24/7 è il canale più rapido per risolvere problemi di dominio o configurazione.', fr: 'Le chat en direct 24 h/24 et 7 j/7 est le moyen le plus rapide de résoudre les problèmes de domaine ou de configuration.', de: 'Der 24/7-Live-Chat ist der schnellste Weg, um Domain- oder Konfigurationsprobleme zu lösen.', es: 'El chat en vivo 24/7 es la forma más rápida de resolver problemas de dominio o configuración.' }
    },
    {
      slug: 'bluehost', order: 2, rating: '4.3', url: 'https://www.bluehost.com/',
      price: '3.99', renew: '9.99',
      storage: '10 GB NVMe', sites: '10', ssl: true, migration: true,
      backup: { en: 'Weekly on every plan', it: 'Settimanali su tutti i piani', fr: 'Hebdomadaires sur tous les forfaits', de: 'Wöchentlich bei allen Tarifen', es: 'Semanales en todos los planes' },
      support: { en: 'Chat and phone', it: 'Chat e telefono', fr: 'Chat et téléphone', de: 'Chat und Telefon', es: 'Chat y teléfono' },
      badge: { en: 'Recommended by WordPress.org', it: 'Consigliato da WordPress.org', fr: 'Recommandé par WordPress.org', de: 'Empfohlen von WordPress.org', es: 'Recomendado por WordPress.org' },
      bestFor: { en: 'Anyone managing multiple sites from day one', it: 'Chi gestisce più siti fin dal piano base', fr: "Idéal pour gérer plusieurs sites dès le départ", de: 'Für alle, die von Anfang an mehrere Websites verwalten', es: 'Quienes gestionan varios sitios desde el principio' },
      deal: { en: 'Discount on the first term', it: 'Sconto sul primo termine', fr: 'Réduction sur la première période', de: 'Rabatt für den ersten Zeitraum', es: 'Descuento en el primer periodo' },
      refund: { en: '30 days', it: '30 giorni', fr: '30 jours', de: '30 Tage', es: '30 días' },
      tagline: {
        en: 'The most sensible pick for anyone who wants to manage several WordPress sites right away, backed by an official WordPress.org recommendation.',
        it: 'La scelta più sensata per chi vuole gestire diversi siti WordPress fin da subito, con la garanzia di essere un host ufficialmente raccomandato.',
        fr: "Le choix le plus sensé pour gérer plusieurs sites WordPress dès le départ, avec la garantie d'être un hébergeur officiellement recommandé.",
        de: 'Die sinnvollste Wahl, um von Anfang an mehrere WordPress-Seiten zu verwalten – mit der Sicherheit eines offiziell empfohlenen Anbieters.',
        es: 'La opción más sensata para gestionar varios sitios WordPress desde el principio, con la garantía de un proveedor recomendado oficialmente.'
      },
      pros: {
        en: ['One of only three hosts officially recommended by WordPress.org', 'The base plan already includes 10 sites — generous for multiple projects', '99.99% uptime SLA as stated by the provider', 'Free domain for the first year and free assisted migration', 'A free one-month trial of professional email is included'],
        it: ['Uno dei tre host ufficialmente consigliati da WordPress.org', 'Il piano base include già 10 siti, generoso per chi gestisce più progetti', 'SLA di uptime del 99,99% dichiarato dal fornitore', 'Dominio gratuito il primo anno e migrazione assistita gratuita', 'Un mese di prova gratuita del servizio email professionale incluso'],
        fr: ["L'un des trois seuls hébergeurs officiellement recommandés par WordPress.org", 'Le forfait de base inclut déjà 10 sites, généreux pour plusieurs projets', "SLA de disponibilité de 99,99 % annoncé par l'hébergeur", 'Nom de domaine gratuit la première année et migration assistée gratuite', "Un mois d'essai gratuit de l'e-mail professionnel inclus"],
        de: ['Einer von nur drei offiziell von WordPress.org empfohlenen Anbietern', 'Der Basistarif enthält bereits 10 Websites – großzügig für mehrere Projekte', 'Vom Anbieter angegebene Verfügbarkeits-SLA von 99,99 %', 'Kostenlose Domain im ersten Jahr und kostenlose unterstützte Migration', 'Ein kostenloser einmonatiger Test der professionellen E-Mail ist inbegriffen'],
        es: ['Uno de los tres únicos proveedores recomendados oficialmente por WordPress.org', 'El plan base ya incluye 10 sitios, generoso para varios proyectos', 'SLA de disponibilidad del 99,99% declarado por el proveedor', 'Dominio gratis el primer año y migración asistida gratuita', 'Se incluye un mes de prueba gratis del correo profesional']
      },
      cons: {
        en: ['The entry-level storage (10 GB NVMe) is the lowest of the three providers compared here', 'The price roughly doubles at renewal', "The eCommerce plan only makes sense if you sell online — overkill for a blog"],
        it: ['Lo storage di ingresso (10 GB NVMe) è il più basso dei tre provider confrontati', 'Il prezzo raddoppia praticamente al rinnovo', 'Il piano eCommerce ha senso solo se vendi online: per un blog è sovradimensionato'],
        fr: ["Le stockage d'entrée de gamme (10 Go NVMe) est le plus faible des trois hébergeurs comparés ici", 'Le prix double quasiment au renouvellement', "Le forfait eCommerce n'a de sens que si vous vendez en ligne — surdimensionné pour un blog"],
        de: ['Der Einstiegsspeicher (10 GB NVMe) ist der niedrigste der drei verglichenen Anbieter', 'Der Preis verdoppelt sich bei der Verlängerung nahezu', 'Der eCommerce-Tarif lohnt sich nur, wenn du online verkaufst – für einen Blog überdimensioniert'],
        es: ['El almacenamiento de entrada (10 GB NVMe) es el más bajo de los tres proveedores comparados', 'El precio prácticamente se duplica al renovar', 'El plan eCommerce solo tiene sentido si vendes online: excesivo para un blog']
      },
      plans: [
        { name: 'Starter', price: '3.99', feat: { en: '10 sites · 10 GB NVMe · Weekly backups', it: '10 siti · 10 GB NVMe · Backup settimanali', fr: '10 sites · 10 Go NVMe · Sauvegardes hebdomadaires', de: '10 Websites · 10 GB NVMe · Wöchentliche Backups', es: '10 sitios · 10 GB NVMe · Copias semanales' } },
        { name: 'Business', price: '6.99', popular: true, feat: { en: '50 sites · 50 GB NVMe · Weekly backups', it: '50 siti · 50 GB NVMe · Backup settimanali', fr: '50 sites · 50 Go NVMe · Sauvegardes hebdomadaires', de: '50 Websites · 50 GB NVMe · Wöchentliche Backups', es: '50 sitios · 50 GB NVMe · Copias semanales' } },
        { name: 'eCommerce Essentials', price: '14.99', feat: { en: '100 sites · 100 GB NVMe · Built for online stores', it: '100 siti · 100 GB NVMe · Pensato per negozi online', fr: '100 sites · 100 Go NVMe · Conçu pour les boutiques en ligne', de: '100 Websites · 100 GB NVMe · Für Onlineshops konzipiert', es: '100 sitios · 100 GB NVMe · Pensado para tiendas online' } }
      ],
      performance: { en: "Performance is in line with industry standards thanks to NVMe storage on every plan; the stated uptime SLA is a plus compared to hosts that don't publish one.", it: "Le prestazioni sono in linea con gli standard del settore grazie allo storage NVMe su tutti i piani; l'SLA di uptime dichiarato è un punto a favore.", fr: "Les performances sont conformes aux standards du secteur grâce au stockage NVMe sur tous les forfaits ; le SLA de disponibilité annoncé est un vrai plus.", de: 'Die Leistung entspricht dank NVMe-Speicher bei allen Tarifen dem Branchenstandard; die angegebene Verfügbarkeits-SLA ist ein Pluspunkt.', es: 'El rendimiento está en línea con el estándar del sector gracias al almacenamiento NVMe en todos los planes; el SLA de disponibilidad declarado es un punto a favor.' },
      ease: { en: 'The guided WordPress install is quick, but the dashboard leans closer to classic cPanel than some of the more simplified custom panels out there.', it: "L'installazione guidata di WordPress è immediata, ma il pannello richiama più cPanel rispetto a soluzioni proprietarie più semplificate.", fr: "L'installation guidée de WordPress est rapide, mais le tableau de bord se rapproche plus du cPanel classique que d'autres panneaux maison plus simplifiés.", de: 'Die geführte WordPress-Installation ist schnell, aber das Dashboard ähnelt eher klassischem cPanel als vereinfachten Eigenentwicklungen.', es: 'La instalación guiada de WordPress es rápida, pero el panel se parece más a cPanel clásico que a otros paneles propios más simplificados.' },
      supportText: { en: 'Support is available via chat and phone; response times are generally solid during US business hours.', it: 'Assistenza via chat e telefono; i tempi di risposta sono generalmente buoni nelle ore diurne USA.', fr: 'Le support est disponible par chat et téléphone ; les temps de réponse sont généralement bons aux heures ouvrées américaines.', de: 'Support ist per Chat und Telefon verfügbar; die Reaktionszeiten sind während der US-Geschäftszeiten meist gut.', es: 'El soporte está disponible por chat y teléfono; los tiempos de respuesta suelen ser buenos en horario laboral de EE. UU.' }
    },
    {
      slug: 'siteground', order: 3, rating: '4.5', url: 'https://www.siteground.com/',
      price: '2.99', renew: '17.99',
      storage: '10 GB', sites: '1', ssl: true, migration: true,
      backup: { en: 'Daily, plus on-demand from GrowBig', it: 'Giornalieri, più su richiesta dal piano GrowBig', fr: 'Quotidiennes, plus à la demande à partir de GrowBig', de: 'Täglich, ab GrowBig zusätzlich auf Anfrage', es: 'Diarias, más bajo demanda desde GrowBig' },
      support: { en: '24/7 chat', it: 'Chat 24/7', fr: 'Chat 24 h/24, 7 j/7', de: '24/7-Chat', es: 'Chat 24/7' },
      badge: { en: 'Best performance', it: 'Migliori prestazioni', fr: 'Meilleures performances', de: 'Beste Leistung', es: 'Mejor rendimiento' },
      bestFor: { en: 'Anyone who wants the best performance and can budget for renewal', it: 'Chi vuole le prestazioni migliori ed è disposto a pagarle al rinnovo', fr: 'Idéal pour les meilleures performances, en anticipant le prix au renouvellement', de: 'Für alle, die beste Leistung wollen und die Verlängerung einplanen', es: 'Para quienes quieren el mejor rendimiento y pueden asumir la renovación' },
      deal: { en: 'Discount on the first term', it: 'Sconto sul primo periodo', fr: 'Réduction sur la première période', de: 'Rabatt für den ersten Zeitraum', es: 'Descuento en el primer periodo' },
      refund: { en: '30 days', it: '30 giorni', fr: '30 jours', de: '30 Tage', es: '30 días' },
      tagline: {
        en: 'The right pick for anyone who wants the strongest performance and has already budgeted for the renewal price.',
        it: 'Il pick giusto per chi vuole le prestazioni migliori e ha già valutato il costo del rinnovo nel proprio budget.',
        fr: 'Le bon choix pour qui veut les meilleures performances et a déjà budgétisé le prix de renouvellement.',
        de: 'Die richtige Wahl für alle, die höchste Leistung wollen und den Verlängerungspreis bereits eingeplant haben.',
        es: 'La opción adecuada para quienes quieren el mejor rendimiento y ya han previsto el precio de renovación.'
      },
      pros: {
        en: ['Among the most consistent performers in independent third-party tests', 'Free CDN and daily backups on the base plan already', 'A genuinely well-built custom control panel', 'A strong fit for higher-traffic or more complex WordPress sites', 'Free site migration on every plan'],
        it: ['Prestazioni tra le più costanti nei test indipendenti di terze parti', 'CDN gratuita e backup giornalieri già sul piano base', 'Pannello di controllo proprietario molto curato', 'Ottimo per siti WordPress con più traffico o più complessi', 'Migrazione gratuita del sito su tutti i piani'],
        fr: ["Parmi les performances les plus constantes dans les tests indépendants", 'CDN gratuit et sauvegardes quotidiennes dès le forfait de base', 'Un panneau de contrôle maison vraiment bien conçu', 'Un très bon choix pour des sites WordPress à fort trafic ou complexes', 'Migration du site gratuite sur tous les forfaits'],
        de: ['Zählt in unabhängigen Tests zu den beständigsten Anbietern', 'Kostenloses CDN und tägliche Backups schon im Basistarif', 'Ein wirklich gut gebautes eigenes Kontrollpanel', 'Sehr gut geeignet für stark frequentierte oder komplexere WordPress-Seiten', 'Kostenlose Website-Migration bei allen Tarifen'],
        es: ['Entre los proveedores más constantes en pruebas independientes de terceros', 'CDN gratis y copias de seguridad diarias ya en el plan base', 'Un panel de control propio realmente bien construido', 'Muy adecuado para sitios WordPress con más tráfico o complejidad', 'Migración del sitio gratuita en todos los planes']
      },
      cons: {
        en: ['The StartUp plan is limited to a single site — you need GrowBig to manage more than one', 'The renewal price is the highest of the three, nearly six times the launch price', 'The affiliate commission is a flat amount, so it scales less with higher-priced plans'],
        it: ['Il piano StartUp include un solo sito: per gestirne più di uno serve passare a GrowBig', 'Il prezzo di rinnovo è il più alto dei tre provider, quasi sei volte il prezzo di lancio', 'La commissione di affiliazione è a importo fisso, quindi meno proporzionale sui piani più costosi'],
        fr: ['Le forfait StartUp est limité à un seul site : il faut passer à GrowBig pour en gérer plusieurs', "Le prix de renouvellement est le plus élevé des trois, près de six fois le tarif de lancement", "La commission d'affiliation est un montant fixe, donc moins proportionnelle sur les forfaits plus chers"],
        de: ['Der StartUp-Tarif ist auf eine einzige Website beschränkt — für mehrere braucht es GrowBig', 'Der Verlängerungspreis ist der höchste der drei, fast sechsmal so hoch wie der Einführungspreis', 'Die Affiliate-Provision ist ein fester Betrag, skaliert also weniger bei teureren Tarifen'],
        es: ['El plan StartUp se limita a un solo sitio: para gestionar más de uno hace falta pasar a GrowBig', 'El precio de renovación es el más alto de los tres, casi seis veces el precio de lanzamiento', 'La comisión de afiliado es un importe fijo, así que escala menos en los planes más caros']
      },
      plans: [
        { name: 'StartUp', price: '2.99', feat: { en: '1 site · 10 GB · Daily backups + free CDN', it: '1 sito · 10 GB · Backup giornalieri + CDN gratuita', fr: '1 site · 10 Go · Sauvegardes quotidiennes + CDN gratuit', de: '1 Website · 10 GB · Tägliche Backups + kostenloses CDN', es: '1 sitio · 10 GB · Copias diarias + CDN gratis' } },
        { name: 'GrowBig', price: '4.99', popular: true, feat: { en: 'Unlimited sites · 50 GB · On-demand backups', it: 'Siti illimitati · 50 GB · Backup su richiesta', fr: 'Sites illimités · 50 Go · Sauvegardes à la demande', de: 'Unbegrenzte Websites · 50 GB · Backups auf Anfrage', es: 'Sitios ilimitados · 50 GB · Copias bajo demanda' } },
        { name: 'GoGeek', price: '7.99', feat: { en: 'Unlimited sites · 100 GB · Built for agencies', it: 'Siti illimitati · 100 GB · Pensato per agenzie', fr: 'Sites illimités · 100 Go · Conçu pour les agences', de: 'Unbegrenzte Websites · 100 GB · Für Agenturen konzipiert', es: 'Sitios ilimitados · 100 GB · Pensado para agencias' } }
      ],
      performance: { en: 'SiteGround is generally the most consistent performer of the three, thanks to Google Cloud infrastructure and a more advanced proprietary caching layer.', it: "SiteGround è generalmente il provider con le prestazioni più costanti, grazie a un'infrastruttura Google Cloud e un caching proprietario più avanzato.", fr: "SiteGround est généralement le plus performant des trois, grâce à l'infrastructure Google Cloud et une mise en cache maison plus avancée.", de: 'SiteGround ist dank Google-Cloud-Infrastruktur und einem fortschrittlicheren eigenen Caching-System meist der beständigste der drei Anbieter.', es: 'SiteGround suele ser el proveedor más constante de los tres, gracias a la infraestructura de Google Cloud y una caché propia más avanzada.' },
      ease: { en: 'The Site Tools dashboard is feature-rich but a bit more technical than hPanel — a good fit for anyone who has run a WordPress site before.', it: 'Il pannello Site Tools è ricco di funzioni ma leggermente più tecnico rispetto a hPanel: perfetto per chi ha già gestito un sito WordPress.', fr: 'Le tableau de bord Site Tools est riche en fonctionnalités mais un peu plus technique que hPanel — idéal pour qui a déjà géré un site WordPress.', de: 'Das Site-Tools-Dashboard ist funktionsreich, aber etwas technischer als hPanel — gut geeignet für alle mit WordPress-Erfahrung.', es: 'El panel Site Tools es muy completo pero algo más técnico que hPanel: ideal para quien ya ha gestionado un sitio WordPress.' },
      supportText: { en: "24/7 chat with generally fast response times; SiteGround's support reputation is among the best in the industry.", it: 'Chat 24/7 con tempi di risposta generalmente rapidi; la reputazione del supporto è tra le migliori del settore.', fr: 'Chat 24 h/24 et 7 j/7 avec des temps de réponse généralement rapides ; la réputation du support de SiteGround est parmi les meilleures du secteur.', de: '24/7-Chat mit meist schnellen Reaktionszeiten; der Support-Ruf von SiteGround gehört zu den besten der Branche.', es: 'Chat 24/7 con tiempos de respuesta generalmente rápidos; la reputación del soporte de SiteGround está entre las mejores del sector.' }
    }
  ];

  var RESOURCES = [
    {
      key: 'ssd', query: 'portable+ssd+1tb',
      name: { en: 'Portable SSD backup drive', it: 'Unità SSD portatile per backup', fr: 'Disque SSD portable pour sauvegarde', de: 'Tragbare SSD-Festplatte für Backups', es: 'Disco SSD portátil para copias de seguridad' },
      desc: { en: "Keep a local backup of your site's files and database — cheap insurance against a bad update or a hosting mishap.", it: "Tieni un backup locale dei file e del database del tuo sito: un'assicurazione economica contro un aggiornamento andato male o un problema con l'hosting.", fr: "Gardez une sauvegarde locale des fichiers et de la base de données de votre site — une assurance bon marché contre une mauvaise mise à jour ou un incident d'hébergement.", de: 'Behalte eine lokale Sicherung der Dateien und der Datenbank deiner Seite — eine günstige Versicherung gegen ein missglücktes Update oder ein Hosting-Problem.', es: 'Mantén una copia local de los archivos y la base de datos de tu sitio: un seguro barato ante una mala actualización o un contratiempo del hosting.' }
    },
    {
      key: 'yubikey', query: 'yubikey+security+key',
      name: { en: 'Hardware security key', it: 'Chiave di sicurezza hardware', fr: 'Clé de sécurité matérielle', de: 'Hardware-Sicherheitsschlüssel', es: 'Llave de seguridad física' },
      desc: { en: 'A physical 2FA key for your GitHub, Google and hosting accounts — the single best upgrade against account takeover.', it: 'Una chiave 2FA fisica per gli account GitHub, Google e hosting: il miglior upgrade contro il furto dell\'account.', fr: 'Une clé 2FA physique pour vos comptes GitHub, Google et hébergeur — la meilleure mise à niveau contre le piratage de compte.', de: 'Ein physischer 2FA-Schlüssel für deine GitHub-, Google- und Hosting-Konten — das beste Upgrade gegen Account-Diebstahl.', es: 'Una llave 2FA física para tus cuentas de GitHub, Google y hosting: la mejor mejora contra el robo de cuentas.' }
    },
    {
      key: 'book', query: 'web+design+seo+book',
      name: { en: 'Web design & SEO reference book', it: 'Libro di riferimento su web design e SEO', fr: 'Livre de référence sur le web design et le SEO', de: 'Nachschlagewerk zu Webdesign & SEO', es: 'Libro de referencia de diseño web y SEO' },
      desc: { en: "A solid primer if you're building and optimizing your first few pages yourself.", it: 'Un buon punto di partenza se stai costruendo e ottimizzando le prime pagine da solo.', fr: 'Une bonne base si vous construisez et optimisez vous-même vos premières pages.', de: 'Ein solider Einstieg, wenn du deine ersten Seiten selbst baust und optimierst.', es: 'Un buen punto de partida si estás creando y optimizando tus primeras páginas tú mismo.' }
    },
    {
      key: 'headphones', query: 'noise+cancelling+headphones',
      name: { en: 'Noise-cancelling headphones', it: 'Cuffie con cancellazione del rumore', fr: 'Casque à réduction de bruit', de: 'Noise-Cancelling-Kopfhörer', es: 'Auriculares con cancelación de ruido' },
      desc: { en: 'For the hours spent writing reviews, comparing pricing tables and debugging CSS.', it: 'Per le ore passate a scrivere recensioni, confrontare tabelle di prezzo e sistemare il CSS.', fr: 'Pour les heures passées à écrire des avis, comparer des tableaux de prix et déboguer du CSS.', de: 'Für die Stunden, die du mit dem Schreiben von Tests, dem Vergleichen von Preistabellen und CSS-Debugging verbringst.', es: 'Para las horas dedicadas a escribir análisis, comparar tablas de precios y depurar CSS.' }
    },
    {
      key: 'standlaptop', query: 'ergonomic+laptop+stand',
      name: { en: 'Ergonomic laptop stand', it: 'Supporto ergonomico per laptop', fr: 'Support ergonomique pour ordinateur portable', de: 'Ergonomischer Laptop-Ständer', es: 'Soporte ergonómico para portátil' },
      desc: { en: "Small desk upgrade, real difference if you're at the keyboard every day.", it: 'Un piccolo upgrade alla scrivania, ma fa una vera differenza se stai alla tastiera ogni giorno.', fr: 'Une petite amélioration de bureau qui fait une vraie différence si vous êtes au clavier tous les jours.', de: 'Ein kleines Schreibtisch-Upgrade mit echtem Effekt, wenn du jeden Tag an der Tastatur sitzt.', es: 'Una pequeña mejora de escritorio que marca una diferencia real si pasas el día frente al teclado.' }
    }
  ];

  var PICK_SLUG = 'hostinger';

  var REGIONS = ['eu', 'uk', 'us', 'row'];
  var RECOMMEND = {
    eu: { primary: 'hostinger', secondary: 'siteground' },
    uk: { primary: 'hostinger', secondary: 'siteground' },
    us: { primary: 'bluehost', secondary: 'hostinger' },
    row: { primary: 'hostinger', secondary: 'siteground' }
  };
  var RECOMMEND_TEXT = {
    eu: {
      en: 'Hostinger runs data centers in the Netherlands, Germany, France, and Lithuania, so an EU-based site can stay on EU infrastructure without upgrading plans — useful if data residency matters to you. SiteGround also lets you pick a European data center at signup and is worth a look if performance matters more than price. Bluehost’s standard WordPress plans are US-based, so it’s a weaker fit if you specifically want your site hosted in the EU.',
      it: 'Hostinger ha data center in Paesi Bassi, Germania, Francia e Lituania, quindi un sito europeo può restare su infrastruttura UE senza dover salire di piano — utile se la residenza dei dati ti interessa. Anche SiteGround permette di scegliere un data center europeo in fase di attivazione, ed è da valutare se le prestazioni contano più del prezzo. I piani WordPress standard di Bluehost sono invece basati negli USA, quindi è una scelta meno adatta se vuoi ospitare il sito specificamente in UE.',
      fr: "Hostinger dispose de centres de données aux Pays-Bas, en Allemagne, en France et en Lituanie : un site européen peut donc rester sur une infrastructure européenne sans changer de forfait — utile si la localisation des données compte pour vous. SiteGround permet aussi de choisir un centre de données européen à l'inscription, à considérer si la performance prime sur le prix. Les forfaits WordPress standards de Bluehost sont hébergés aux États-Unis, ce qui les rend moins adaptés si vous voulez héberger votre site spécifiquement dans l'UE.",
      de: 'Hostinger betreibt Rechenzentren in den Niederlanden, Deutschland, Frankreich und Litauen — eine EU-Website kann also ohne Tarifwechsel auf EU-Infrastruktur bleiben, was bei Fragen zum Datenstandort hilfreich ist. Auch SiteGround erlaubt die Wahl eines europäischen Rechenzentrums bei der Anmeldung und lohnt sich, wenn Leistung wichtiger ist als der Preis. Die Standard-WordPress-Tarife von Bluehost laufen dagegen über US-Infrastruktur und eignen sich daher weniger, wenn die Seite gezielt in der EU gehostet werden soll.',
      es: 'Hostinger tiene centros de datos en Países Bajos, Alemania, Francia y Lituania, así que un sitio europeo puede permanecer en infraestructura de la UE sin cambiar de plan — útil si te importa la localización de los datos. SiteGround también permite elegir un centro de datos europeo al contratar, y merece la pena si el rendimiento pesa más que el precio. Los planes WordPress estándar de Bluehost están basados en EE. UU., por lo que encajan menos si quieres alojar tu sitio específicamente en la UE.'
    },
    uk: {
      en: 'Hostinger has a dedicated UK data center, which is a natural fit if your audience is mostly in the UK. SiteGround’s global network also covers Europe well and is worth comparing on performance. Bluehost’s standard shared/WordPress plans don’t currently offer UK-based hosting, only US infrastructure.',
      it: 'Hostinger ha un data center dedicato nel Regno Unito, una scelta naturale se il tuo pubblico è prevalentemente britannico. Anche la rete globale di SiteGround copre bene l’Europa ed è da confrontare sulle prestazioni. I piani standard di Bluehost non offrono al momento hosting basato nel Regno Unito, solo infrastruttura USA.',
      fr: "Hostinger dispose d'un centre de données dédié au Royaume-Uni, un choix naturel si votre audience est majoritairement britannique. Le réseau mondial de SiteGround couvre également bien l'Europe et mérite une comparaison sur les performances. Les forfaits standards de Bluehost n'offrent pas actuellement d'hébergement basé au Royaume-Uni, uniquement une infrastructure américaine.",
      de: 'Hostinger betreibt ein eigenes Rechenzentrum im Vereinigten Königreich — naheliegend, wenn dein Publikum überwiegend britisch ist. Auch das globale Netzwerk von SiteGround deckt Europa gut ab und lohnt einen Leistungsvergleich. Die Standardtarife von Bluehost bieten derzeit kein Hosting im Vereinigten Königreich, nur US-Infrastruktur.',
      es: 'Hostinger tiene un centro de datos dedicado en el Reino Unido, una opción natural si tu audiencia es mayoritariamente británica. La red global de SiteGround también cubre bien Europa y merece compararse en rendimiento. Los planes estándar de Bluehost no ofrecen actualmente hosting con base en el Reino Unido, solo infraestructura de EE. UU.'
    },
    us: {
      en: 'Bluehost is one of only three hosts officially recommended by WordPress.org and runs on US infrastructure with US-hours support — a solid default for a US-focused site. Hostinger is also fully available in the US and is the cheapest of the three if budget is the priority. SiteGround is a strong performance alternative if you’re comfortable with the higher renewal price.',
      it: "Bluehost è uno dei tre host ufficialmente consigliati da WordPress.org e opera su infrastruttura USA con assistenza in orario americano — un'ottima scelta predefinita per un sito rivolto agli USA. Anche Hostinger è pienamente disponibile negli USA ed è il più economico dei tre se il budget è la priorità. SiteGround resta una valida alternativa se punti sulle prestazioni e accetti un rinnovo più caro.",
      fr: "Bluehost est l'un des trois seuls hébergeurs officiellement recommandés par WordPress.org et fonctionne sur une infrastructure américaine avec un support aux horaires américains — un excellent choix par défaut pour un site destiné aux États-Unis. Hostinger est également pleinement disponible aux États-Unis et reste le moins cher des trois si le budget prime. SiteGround est une bonne alternative côté performance si le prix de renouvellement plus élevé ne vous freine pas.",
      de: 'Bluehost ist einer von nur drei offiziell von WordPress.org empfohlenen Anbietern und läuft auf US-Infrastruktur mit Support zu US-Zeiten — eine solide Standardwahl für eine auf die USA ausgerichtete Website. Hostinger ist ebenfalls voll in den USA verfügbar und bei knappem Budget die günstigste der drei Optionen. SiteGround ist eine starke Alternative bei Fokus auf Leistung, wenn der höhere Verlängerungspreis kein Problem ist.',
      es: 'Bluehost es uno de los tres únicos proveedores recomendados oficialmente por WordPress.org y funciona sobre infraestructura de EE. UU. con soporte en horario estadounidense — una opción sólida por defecto para un sitio orientado a EE. UU. Hostinger también está totalmente disponible en EE. UU. y es el más económico de los tres si el presupuesto es la prioridad. SiteGround es una buena alternativa centrada en el rendimiento si no te importa el precio de renovación más alto.'
    },
    row: {
      en: 'Hostinger has the broadest global footprint of the three, with data centers in Brazil, India, Indonesia, and Malaysia plus CDN coverage in South Africa, Japan, and Australia — a strong pick if your audience is spread across several continents. SiteGround also runs data centers in Asia and Australia and is worth checking for your specific location. Bluehost’s standard plans are US-based only, so expect higher latency the further your audience is from North America.',
      it: 'Hostinger ha la copertura globale più ampia dei tre, con data center in Brasile, India, Indonesia e Malesia oltre a CDN in Sudafrica, Giappone e Australia — un’ottima scelta se il tuo pubblico è distribuito su più continenti. Anche SiteGround ha data center in Asia e Australia, da verificare per la tua zona specifica. I piani standard di Bluehost sono basati solo negli USA, quindi aspettati latenza maggiore quanto più il pubblico è lontano dal Nord America.',
      fr: "Hostinger a la couverture mondiale la plus large des trois, avec des centres de données au Brésil, en Inde, en Indonésie et en Malaisie, ainsi qu'une couverture CDN en Afrique du Sud, au Japon et en Australie — un excellent choix si votre audience est répartie sur plusieurs continents. SiteGround dispose aussi de centres de données en Asie et en Australie, à vérifier selon votre zone précise. Les forfaits standards de Bluehost sont uniquement basés aux États-Unis, attendez-vous donc à plus de latence si votre audience est éloignée de l'Amérique du Nord.",
      de: 'Hostinger hat von den dreien die breiteste globale Abdeckung, mit Rechenzentren in Brasilien, Indien, Indonesien und Malaysia sowie CDN-Abdeckung in Südafrika, Japan und Australien — eine starke Wahl, wenn dein Publikum über mehrere Kontinente verteilt ist. Auch SiteGround betreibt Rechenzentren in Asien und Australien, die je nach Standort einen Blick wert sind. Die Standardtarife von Bluehost basieren nur auf US-Infrastruktur, daher ist mit höherer Latenz zu rechnen, je weiter das Publikum von Nordamerika entfernt ist.',
      es: 'Hostinger tiene la cobertura global más amplia de los tres, con centros de datos en Brasil, India, Indonesia y Malasia, además de cobertura CDN en Sudáfrica, Japón y Australia — una gran opción si tu audiencia está repartida por varios continentes. SiteGround también tiene centros de datos en Asia y Australia, algo que conviene comprobar según tu zona concreta. Los planes estándar de Bluehost se basan solo en EE. UU., así que espera más latencia cuanto más lejos esté tu audiencia de Norteamérica.'
    }
  };

  var state = { lang: 'en', consent: null, region: null };

  function safeGet(key) { try { return localStorage.getItem(key); } catch (e) { return null; } }
  function safeSet(key, val) { try { localStorage.setItem(key, val); } catch (e) {} }

  function detectLang() {
    var stored = safeGet('sv_lang');
    if (stored && SUPPORTED.indexOf(stored) !== -1) return stored;
    var nav = (navigator.language || 'en').slice(0, 2).toLowerCase();
    return SUPPORTED.indexOf(nav) !== -1 ? nav : 'en';
  }

  function t(key) { return (UI[state.lang] && UI[state.lang][key]) || UI.en[key] || key; }
  function tr(field) { return field[state.lang] || field.en; }

  function icon(kind) {
    if (kind === 'check') return '<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="9" cy="9" r="9" fill="var(--success-tint)"></circle><path d="M5.5 9.3l2.2 2.2 4.8-4.8" stroke="var(--success)" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" fill="none"></path></svg>';
    if (kind === 'x') return '<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="9" cy="9" r="9" fill="var(--danger-tint)"></circle><path d="M6.5 6.5l5 5M11.5 6.5l-5 5" stroke="var(--danger)" stroke-width="1.6" stroke-linecap="round"></path></svg>';
    return '';
  }

  function applyGlobalText() {
    document.getElementById('disclose-text').innerHTML = t('disclose') + ' <a href="index.html">' + t('disclose_link') + ' \u2192</a>';
    document.querySelector('[data-nav="resources"]').textContent = t('nav_resources');
    document.querySelector('[data-nav="compare"]').textContent = t('nav_hosting');
    document.querySelector('[data-nav="recommend"]').textContent = t('nav_recommend');
    document.querySelector('[data-nav="legal"]').textContent = t('nav_legal');
    document.querySelectorAll('[data-t]').forEach(function (el) { el.textContent = t(el.getAttribute('data-t')); });

    document.getElementById('footer-desc').textContent = t('footer_desc');
    document.getElementById('footer-cat-title').textContent = t('footer_cat_title');
    document.getElementById('footer-site-title').textContent = t('footer_site_title');
    document.getElementById('footer-disclosure').textContent = t('footer_disclosure');
    document.getElementById('footer-copyright').textContent = t('footer_copyright');

    document.getElementById('cookie-text').textContent = t('cookie_text');
    document.getElementById('cookie-accept').textContent = t('cookie_accept');
    document.getElementById('cookie-decline').textContent = t('cookie_decline');

    document.getElementById('lang-select').value = state.lang;
    document.documentElement.lang = state.lang;
  }

  function applyHomeText() {
    document.getElementById('home-badge').textContent = t('home_badge');
    document.getElementById('home-title').textContent = t('home_title');
    document.getElementById('home-sub').textContent = t('home_sub');
    document.getElementById('home-cta').textContent = t('home_cta');
    document.getElementById('home-cat-title').textContent = t('home_cat_title');
    document.getElementById('home-featured-title').textContent = t('home_featured_title');
    document.getElementById('home-method-title').textContent = t('home_method_title');

    document.getElementById('home-categories').innerHTML =
      '<a href="compare.html" class="card cat-card"><svg width="34" height="34" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="3" y="4" width="18" height="6" rx="1.5" stroke="currentColor" stroke-width="1.6"></rect><rect x="3" y="14" width="18" height="6" rx="1.5" stroke="currentColor" stroke-width="1.6"></rect><circle cx="7" cy="7" r="0.9" fill="currentColor"></circle><circle cx="7" cy="17" r="0.9" fill="currentColor"></circle></svg><div><div class="cat-title">' + t('cat_hosting_t') + '</div><div class="cat-desc">' + t('cat_hosting_d') + '</div></div><span class="link-accent">' + t('cat_hosting_link') + '</span></a>' +
      '<a href="resources.html" class="card cat-card"><svg width="34" height="34" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 8h12l-1 11a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2L6 8z" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"></path><path d="M9 8V6a3 3 0 0 1 6 0v2" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"></path></svg><div><div class="cat-title">' + t('cat_res_t') + '</div><div class="cat-desc">' + t('cat_res_d') + '</div></div><span class="link-accent">' + t('cat_res_link') + '</span></a>';

    document.getElementById('home-methods').innerHTML =
      '<div class="method-item"><svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9 3v6l-4 8a2 2 0 0 0 1.8 3h8.4a2 2 0 0 0 1.8-3l-4-8V3" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"></path><path d="M7 3h6" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"></path></svg><div class="method-title">' + t('method1_t') + '</div><p>' + t('method1_d') + '</p></div>' +
      '<div class="method-item"><svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11 3H5a2 2 0 0 0-2 2v6l10 10 8-8L11 3z" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"></path><circle cx="7.5" cy="7.5" r="1" fill="currentColor"></circle></svg><div class="method-title">' + t('method2_t') + '</div><p>' + t('method2_d') + '</p></div>' +
      '<div class="method-item"><svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 3l7 3v6c0 5-3.5 7.5-7 9-3.5-1.5-7-4-7-9V6l7-3z" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"></path><path d="M9 12l2 2 4-4" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"></path></svg><div class="method-title">' + t('method3_t') + '</div><p>' + t('method3_d') + '</p></div>';

    document.getElementById('home-featured').innerHTML =
      '<a href="compare.html" class="card featured-card"><span class="eyebrow">' + t('eyebrow_compare') + '</span><span class="featured-title">' + t('featured_compare_t') + '</span><span class="featured-desc">' + t('featured_compare_d') + '</span></a>' +
      HOSTS.map(function (h) {
        return '<a href="review-' + h.slug + '.html" class="card featured-card"><span class="eyebrow">' + t('eyebrow_review') + '</span><span class="featured-title">' + capitalize(h.slug) + '</span><span class="featured-desc">' + tr(h.tagline) + '</span></a>';
      }).join('');

  }

  function applyCompareStaticText() {
    document.getElementById('compare-title').textContent = t('compare_title');
    document.getElementById('compare-lede').textContent = t('compare_lede');
    document.getElementById('compare-footnote').textContent = t('compare_footnote');
  }

  function applyRecommendStaticText() {
    document.getElementById('recommend-title').textContent = t('recommend_title');
    document.getElementById('recommend-sub').textContent = t('recommend_sub');
    document.getElementById('recommend-privacy').textContent = t('recommend_privacy');
    document.getElementById('region-grid').innerHTML = REGIONS.map(function (r) {
      return '<button type="button" class="region-btn' + (state.region === r ? ' active' : '') + '" data-region="' + r + '">' + t('region_' + r) + '</button>';
    }).join('');
  }

  function capitalize(s) { return s.charAt(0).toUpperCase() + s.slice(1); }

  function renderCompareTable() {
    var head = '<tr><th></th>' + HOSTS.map(function (h) {
      return '<th class="' + (h.slug === PICK_SLUG ? 'picked' : '') + '">' + (h.slug === PICK_SLUG ? '<span class="pick-tag">' + t('pick_tag') + '</span>' : '') + '<span class="name">' + capitalize(h.slug) + '</span></th>';
    }).join('') + '</tr>';

    function row(label, val) { return '<tr><td>' + label + '</td>' + HOSTS.map(val).join('') + '</tr>'; }
    function checkRow(label, key) {
      return row(label, function (h) { return '<td>' + (h[key] ? icon('check') : '—') + '</td>'; });
    }

    var priceRow = row(t('col_launch'), function (h) { return '<td>$' + h.price + '/mo</td>'; });
    var renewRow = row(t('col_renew'), function (h) { return '<td>$' + h.renew + '/mo</td>'; });
    var storageRow = row(t('col_storage'), function (h) { return '<td>' + h.storage + '</td>'; });
    var sitesRow = row(t('col_sites'), function (h) { return '<td>' + h.sites + '</td>'; });
    var sslRow = checkRow(t('col_ssl'), 'ssl');
    var backupRow = row(t('col_backup'), function (h) { return '<td>' + tr(h.backup) + '</td>'; });
    var migRow = checkRow(t('col_migration'), 'migration');
    var supportRow = row(t('col_support'), function (h) { return '<td>' + tr(h.support) + '</td>'; });
    var ratingRow = row(t('col_rating'), function (h) { return '<td style="font-family:\'Space Grotesk\',sans-serif; font-weight:700; color:' + (h.slug === PICK_SLUG ? 'var(--success)' : 'var(--text)') + ';">' + h.rating + ' / 5</td>'; });
    var ctaRow = row('', function (h) {
      return '<td class="cta"><div class="cta-stack"><a href="' + h.url + '" target="_blank" rel="noopener" class="btn ' + (h.slug === PICK_SLUG ? 'btn-primary' : 'btn-dark') + ' btn-sm">' + t('visit_site') + '</a><a href="review-' + h.slug + '.html" class="link-accent" style="text-align:center;">' + t('read_review') + '</a></div></td>';
    });

    document.getElementById('compare-table-wrap').innerHTML = '<table class="compare"><thead>' + head + '</thead><tbody>' + priceRow + renewRow + storageRow + sitesRow + sslRow + backupRow + migRow + supportRow + ratingRow + ctaRow + '</tbody></table>';

    document.getElementById('compare-callouts').innerHTML = HOSTS.map(function (h) {
      return '<div class="callout"><span class="badge' + (h.slug === PICK_SLUG ? '' : ' amber') + '">' + (h.slug === PICK_SLUG ? t('our_pick') : tr(h.badge)) + '</span><h3>' + capitalize(h.slug) + '</h3><p>' + tr(h.tagline) + '</p><a href="review-' + h.slug + '.html" class="link-accent">' + t('read_full_review') + '</a></div>';
    }).join('');
  }

  function proconList(items, positive) {
    return items.map(function (txt) {
      return '<div class="list-item">' + icon(positive ? 'check' : 'x') + '<span>' + txt + '</span></div>';
    }).join('');
  }

  function renderReview(slug) {
    var h = HOSTS.filter(function (x) { return x.slug === slug; })[0];
    if (!h) { window.location.href = 'compare.html'; return; }
    var name = capitalize(h.slug);
    document.getElementById('review-crumb').textContent = name;
    var others = HOSTS.filter(function (x) { return x.slug !== slug; });

    var html = '';
    html += '<section class="review-head"><div class="wrap" style="display:flex; gap:40px; flex-wrap:wrap; padding:0;">';
    html += '<div class="main"><span class="badge">' + t('review_badge') + '</span>';
    html += '<h1 class="hero-title" style="font-size:clamp(26px,3.4vw,34px); margin-top:14px;">' + name + '</h1>';
    html += '<p class="lede" style="margin-top:14px;">' + tr(h.tagline) + '</p>';
    html += '<div style="display:flex; align-items:center; gap:16px; margin-top:16px;"><div class="rating-badge"><b>' + h.rating + '</b><span>/5</span></div><span style="font-size:13.5px; color:var(--text-2);">' + t('review_rating_label') + '</span></div>';
    html += '<a href="' + h.url + '" target="_blank" rel="noopener" class="btn btn-primary" style="margin-top:16px; align-self:flex-start;">' + t('review_cta').replace('{name}', name) + '</a>';
    html += '</div>';
    html += '<div class="card facts" style="align-self:flex-start;">';
    html += '<div class="facts-row"><span>' + t('fact_price') + '</span><span>$' + h.price + '/mo*</span></div>';
    html += '<div class="facts-row"><span>' + t('fact_bestfor') + '</span><span>' + tr(h.bestFor) + '</span></div>';
    html += '<div class="facts-row"><span>' + t('fact_deal') + '</span><span>' + tr(h.deal) + '</span></div>';
    html += '<div class="facts-row"><span>' + t('fact_refund') + '</span><span>' + tr(h.refund) + '</span></div>';
    html += '</div></div></section>';

    html += '<section class="block tight"><div class="wrap grid-2">';
    html += '<div class="card" style="display:flex; flex-direction:column; gap:16px;"><h3 style="font-size:18px;">' + t('liked_title') + '</h3><div style="display:flex; flex-direction:column; gap:12px;">' + proconList(tr(h.pros), true) + '</div></div>';
    html += '<div class="card" style="display:flex; flex-direction:column; gap:16px;"><h3 style="font-size:18px;">' + t('held_back_title') + '</h3><div style="display:flex; flex-direction:column; gap:12px;">' + proconList(tr(h.cons), false) + '</div></div>';
    html += '</div></section>';

    html += '<section class="block tight"><div class="wrap" style="display:flex; flex-direction:column; gap:18px;">';
    html += '<h2 class="section-title">' + t('plans_title') + '</h2><p class="lede">' + t('plans_lede') + '</p>';
    html += '<div class="grid-3">' + h.plans.map(function (p) {
      return '<div class="card plan-card' + (p.popular ? ' popular' : '') + '">' + (p.popular ? '<span class="plan-tag">' + t('most_popular') + '</span>' : '') + '<span style="font-family:\'Space Grotesk\',sans-serif; font-weight:700;">' + p.name + '</span><span class="plan-price">$' + p.price + '<small>/mo*</small></span><span style="font-size:13px; color:var(--text-2);">' + tr(p.feat) + '</span></div>';
    }).join('') + '</div>';
    html += '<span class="foot-star">' + t('plans_footnote').replace('${renew}', h.renew) + '</span></div></section>';

    html += '<section class="block tight"><div class="wrap prose-block">';
    html += '<div><h2>' + t('perf_title') + '</h2><p>' + tr(h.performance) + '</p></div>';
    html += '<div><h2>' + t('ease_title') + '</h2><p>' + tr(h.ease) + '</p></div>';
    html += '<div><h2>' + t('support_title') + '</h2><p>' + tr(h.supportText) + '</p></div>';
    html += '</div></section>';

    html += '<section class="block"><div class="wrap" style="display:flex; flex-direction:column; gap:18px;">';
    html += '<h2 class="section-title">' + t('alt_title').replace('{name}', name) + '</h2><div class="grid-2">';
    html += others.map(function (o) {
      return '<a href="review-' + o.slug + '.html" class="card alt-card"><span class="alt-title">' + capitalize(o.slug) + '</span><p>' + tr(o.badge) + '.</p><span class="link-accent">' + t('read_review') + '</span></a>';
    }).join('');
    html += '</div></div></section>';

    document.getElementById('review-body').innerHTML = html;

    var ld = document.getElementById('review-jsonld');
    if (ld) ld.remove();
    var script = document.createElement('script');
    script.type = 'application/ld+json';
    script.id = 'review-jsonld';
    script.text = JSON.stringify({ '@context': 'https://schema.org', '@type': 'Review', itemReviewed: { '@type': 'Service', name: name + ' Web Hosting' }, reviewRating: { '@type': 'Rating', ratingValue: h.rating, bestRating: '5' }, author: { '@type': 'Organization', name: 'CamelCompass' }, datePublished: '2026-09-22', inLanguage: state.lang });
    document.head.appendChild(script);
  }

  function renderRecommendResult() {
    var box = document.getElementById('recommend-result');
    if (!state.region) { box.innerHTML = ''; return; }
    var rec = RECOMMEND[state.region];
    var text = RECOMMEND_TEXT[state.region][state.lang] || RECOMMEND_TEXT[state.region].en;
    var primary = HOSTS.filter(function (h) { return h.slug === rec.primary; })[0];
    var secondary = HOSTS.filter(function (h) { return h.slug === rec.secondary; })[0];
    box.innerHTML =
      '<div class="callout" style="max-width:820px;">' +
      '<span class="badge">' + t('recommend_pick_label') + '</span>' +
      '<h3>' + capitalize(primary.slug) + '</h3>' +
      '<p>' + text + '</p>' +
      '<a href="review-' + primary.slug + '.html" class="link-accent">' + t('read_full_review') + '</a>' +
      '<div style="margin-top:8px; padding-top:14px; border-top:1px solid var(--border);"><span style="font-size:12.5px; font-weight:600; color:var(--text-2);">' + t('recommend_alt_label') + ':</span> <a href="review-' + secondary.slug + '.html" class="link-accent">' + capitalize(secondary.slug) + '</a></div>' +
      '</div>';
  }

  function renderLegal() {
    document.getElementById('legal-body').innerHTML =
      '<div><h1 class="hero-title" style="font-size:clamp(26px,3.4vw,34px);">' + t('legal_title') + '</h1><p class="lede" style="margin-top:8px;">' + t('legal_updated') + '</p></div>' +
      '<div class="legal-section"><h2>' + t('legal_about_h') + '</h2><p>' + t('legal_about_p') + '</p></div>' +
      '<div class="legal-section"><h2>' + t('legal_affiliate_h') + '</h2><p>' + t('legal_affiliate_p') + '</p></div>' +
      '<div class="legal-section"><h2>' + t('legal_privacy_h') + '</h2><p>' + t('legal_privacy_p') + '</p><ul><li>' + t('legal_privacy_li1') + '</li><li>' + t('legal_privacy_li2') + '</li><li>' + t('legal_privacy_li3') + '</li></ul><p>' + t('legal_privacy_p2') + '</p></div>' +
      '<div class="legal-section"><h2>' + t('legal_disclaimer_h') + '</h2><p>' + t('legal_disclaimer_p') + '</p></div>' +
      '<div class="legal-section"><h2>' + t('legal_terms_h') + '</h2><p>' + t('legal_terms_p') + '</p></div>';
  }
  function setLang(lang) {
    if (SUPPORTED.indexOf(lang) === -1) lang = 'en';
    state.lang = lang;
    if (state.consent === 'accepted') safeSet('sv_lang', lang);
    applyGlobalText();
    renderPage();
  }

  function initCookieBar() {
    var choice = safeGet('sv_cookie_choice');
    state.consent = choice;
    if (!choice) document.getElementById('cookie-bar').hidden = false;
    document.getElementById('cookie-accept').addEventListener('click', function () {
      state.consent = 'accepted';
      safeSet('sv_cookie_choice', 'accepted');
      safeSet('sv_lang', state.lang);
      document.getElementById('cookie-bar').hidden = true;
    });
    document.getElementById('cookie-decline').addEventListener('click', function () {
      state.consent = 'declined';
      safeSet('sv_cookie_choice', 'declined');
      document.getElementById('cookie-bar').hidden = true;
    });
  }

  var renderPage = function () {};

  function init(pageRenderFn) {
    renderPage = pageRenderFn || function () {};
    state.lang = detectLang();
    initCookieBar();
    applyGlobalText();
    renderPage();
    document.getElementById('lang-select').addEventListener('change', function (e) { setLang(e.target.value); });
    var regionGrid = document.getElementById('region-grid');
    if (regionGrid) {
      regionGrid.addEventListener('click', function (e) {
        var btn = e.target.closest('.region-btn');
        if (!btn) return;
        state.region = btn.getAttribute('data-region');
        document.querySelectorAll('.region-btn').forEach(function (b) { b.classList.toggle('active', b === btn); });
        renderRecommendResult();
      });
    }
  }

  function renderResources() {
    document.getElementById('resources-title').textContent = t('resources_title');
    document.getElementById('resources-sub').textContent = t('resources_sub');
    document.getElementById('resources-disclosure').textContent = t('resources_disclosure');
    document.getElementById('resources-grid').innerHTML = RESOURCES.map(function (r) {
      var url = 'https://www.amazon.com/s?k=' + r.query + '&tag=YOURTAG-20';
      return '<a href="' + url + '" target="_blank" rel="noopener sponsored" class="card featured-card"><span class="featured-title">' + tr(r.name) + '</span><span class="featured-desc">' + tr(r.desc) + '</span><span class="link-accent">' + t('resources_item_cta') + '</span></a>';
    }).join('');
  }

  window.SV = {
    init: init,
    renderReview: renderReview,
    renderCompareTable: renderCompareTable,
    renderRecommendResult: renderRecommendResult,
    renderLegal: renderLegal,
    renderResources: renderResources,
    applyHomeText: applyHomeText,
    applyCompareStaticText: applyCompareStaticText,
    applyRecommendStaticText: applyRecommendStaticText
  };
})();
