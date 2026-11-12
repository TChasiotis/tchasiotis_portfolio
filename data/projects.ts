export type BilingualText = { en: string; el: string };

export type ProjectFeature = {
  title: BilingualText;
  description: BilingualText;
  type: "iframe" | "image";
  mediaUrl: string;
};

export type SubApp = {
  id: string;
  title: BilingualText;
  features: ProjectFeature[];
};

export type Ecosystem = {
  id: string;
  title: string;
  shortDescription: BilingualText;
  team: string[];
  roles: BilingualText[];
  releaseDate: string;
  platforms: string[];
  techStack: string[];
  liveUrl?: string;
  githubUrl?: string;
  apps: SubApp[];
};

export const projectsData: Ecosystem[] = [
  {
    id: "urban-fade",
    title: "Urban Fade CMS",
    shortDescription: {
      en: "Bilingual Booking System with Full Admin Dashboard & Automated Reminders.",
      el: "Δίγλωσσο Σύστημα Κρατήσεων με Πλήρες Admin Dashboard και Αυτόματες Υπενθυμίσεις.",
    },
    team: ["Thomas Chasiotis"],
    roles: [
      { en: "Creator & Owner", el: "Δημιουργός & Ιδιοκτήτης" },
      { en: "Full-Stack Developer", el: "Full-Stack Προγραμματιστής" },
    ],
    releaseDate: "2026-09",
    platforms: ["Web"],
    techStack: ["Next.js", "Prisma", "Tailwind CSS", "PostgreSQL", "Stripe"],
    liveUrl: "https://barbershop-demo-theta.vercel.app",
    githubUrl: "https://github.com/TChasiotis/barbershop-cms",
    apps: [
      {
        id: "client-app",
        title: { en: "Client Booking App", el: "Εφαρμογή Πελατών" },
        features: [
          {
            title: { en: "The Digital Storefront", el: "Η Ψηφιακή Βιτρίνα" },
            description: {
              en: "A premium, fully responsive landing page built with Next.js, serving as the first point of contact for clients.",
              el: "Μια premium, πλήρως responsive αρχική σελίδα, που αποτελεί το πρώτο σημείο επαφής με τον πελάτη.",
            },
            type: "iframe",
            mediaUrl: "https://barbershop-demo-theta.vercel.app",
          },
          {
            title: { en: "Dynamic Gallery", el: "Δυναμικό Carousel" },
            description: {
              en: "An interactive gallery showcasing haircuts and styles, instantly capturing the visitor's attention.",
              el: "Ένα διαδραστικό carousel με φωτογραφίες που τραβάει αμέσως την προσοχή του επισκέπτη.",
            },
            type: "iframe",
            mediaUrl: "https://barbershop-demo-theta.vercel.app/#gallery",
          },
          {
            title: { en: "Offerings & Trust", el: "Υπηρεσίες & Αξιοπιστία" },
            description: {
              en: "Real-time fetching of services, products, and customer reviews to build trust before the booking process.",
              el: "Άντληση υπηρεσιών, προϊόντων και αξιολογήσεων σε πραγματικό χρόνο για χτίσιμο εμπιστοσύνης πριν την κράτηση.",
            },
            type: "iframe",
            mediaUrl: "https://barbershop-demo-theta.vercel.app/#services",
          },
          {
            title: {
              en: "Interactive Booking Flow",
              el: "Διαδραστική Ροή Κράτησης",
            },
            description: {
              en: "Try it out! Select a service, date, time, and details. (Stripe checkout is blocked inside iframes—visit the live URL to test). Post-booking, emails are dispatched via Cron Jobs.",
              el: "Δοκιμάστε το! Επιλογή υπηρεσίας, ημέρας, ώρας και στοιχείων. (Η πληρωμή Stripe απαιτεί το κανονικό URL). Με την ολοκλήρωση, τα emails στέλνονται μέσω Cron Job.",
            },
            type: "iframe",
            mediaUrl:
              "https://barbershop-demo-theta.vercel.app/booking?lang=en",
          },
        ],
      },
      {
        id: "admin-dashboard",
        title: { en: "Admin Dashboard", el: "Πίνακας Ελέγχου Admin" },
        features: [
          {
            title: { en: "Admin: Daily Agenda", el: "Admin: Ημερήσια Ατζέντα" },
            description: {
              en: "Navigate the dashboard! Start with full control over appointments (reschedule, cancel). Note: NextAuth middleware.ts was bypassed specifically for this demo.",
              el: "Περιηγηθείτε στο dashboard! Ξεκινήστε με την πλήρη διαχείριση ραντεβού. (Σημείωση: Το middleware.ts του NextAuth αφαιρέθηκε αποκλειστικά για την παρουσίαση).",
            },
            type: "iframe",
            mediaUrl: "https://barbershop-demo-theta.vercel.app/admin",
          },
          {
            title: {
              en: "Content Management (CMS)",
              el: "Διαχείριση Περιεχομένου",
            },
            description: {
              en: "Click on the 'Services' or 'Products' tabs. The owner can effortlessly update pricing, durations, and homepage carousel images without touching code.",
              el: "Πατήστε στα tabs 'Services' ή 'Products'. Ο ιδιοκτήτης ενημερώνει άμεσα τιμές, διάρκειες και το Carousel φωτογραφιών χωρίς να γράψει γραμμή κώδικα.",
            },
            type: "iframe",
            mediaUrl: "https://barbershop-demo-theta.vercel.app/admin",
          },
          {
            title: { en: "Business Analytics", el: "Στατιστικά Επιχείρησης" },
            description: {
              en: "Switch to the 'Statistics' tab for deep insights. Tracks revenue, most booked services, and identifies peak booking hours.",
              el: "Μεταβείτε στο tab 'Στατιστικά' για λεπτομερή ανάλυση. Παρακολούθηση εσόδων, δημοφιλέστερων υπηρεσιών και ωρών αιχμής.",
            },
            type: "iframe",
            mediaUrl: "https://barbershop-demo-theta.vercel.app/admin",
          },
          {
            title: {
              en: "Smart Anti-No-Show System",
              el: "Σύστημα Προστασίας",
            },
            description: {
              en: "Check the 'Blocked Days' and 'Strikes' sections. Features a calendar to block dates, plus an automated blacklist for clients missing 3 appointments.",
              el: "Δείτε τα tabs 'Blocked Days' και 'Strikes'. Περιλαμβάνει κλείσιμο ημερομηνιών και ένα αυτόματο σύστημα blacklist για 3 ακυρωμένα ραντεβού.",
            },
            type: "iframe",
            mediaUrl: "https://barbershop-demo-theta.vercel.app/admin",
          },
        ],
      },
    ],
  },
  {
    id: "zucchero",
    title: "Zucchero Ecosystem",
    shortDescription: {
      en: "Enterprise solution for order management (Customer Menu, Admin, Waiter PDA).",
      el: "Ολοκληρωμένη λύση παραγγελιών (Μενού Πελατών, Διαχείριση, PDA Σερβιτόρων).",
    },
    team: ["Thomas Chasiotis"],
    roles: [
      { en: "Full-Stack Developer", el: "Full-Stack Προγραμματιστής" },
      { en: "IT & Tech Support", el: "Τεχνική Υποστήριξη & IT" },
    ],
    releaseDate: "2025-11",
    platforms: ["Web", "Mobile"],
    techStack: ["React", "Kotlin", "Tailwind CSS", "PostgreSQL"],
    liveUrl: "https://zucchero.gr",
    githubUrl: "https://github.com/TChasiotis/zucchero.cafe",
    apps: [
      {
        id: "customer-web",
        title: { en: "Customer Web App", el: "Εφαρμογή Πελατών" },
        features: [
          {
            title: { en: "The Digital Storefront", el: "Η Ψηφιακή Βιτρίνα" },
            description: {
              en: "A premium landing page capturing the essence of the historic pastry shop. Features an 8-language selector directly in the header.",
              el: "Μια premium αρχική σελίδα σχεδιασμένη να αποπνέει την αίσθηση του ιστορικού ζαχαροπλαστείου. Διαθέτει επιλογή 8 γλωσσών ψηλά στο μενού.",
            },
            type: "iframe",
            mediaUrl: "https://zucchero.gr",
          },
          {
            title: { en: "Dynamic Anchor Routing", el: "Ομαλή Πλοήγηση" },
            description: {
              en: "Seamless scroll-to-anchor routing. Notice how the iframe flawlessly handles the '#' URL changes, syncing the view with the scroll.",
              el: "Ομαλή μετάβαση στα anchors της σελίδας. Παρατηρήστε πώς το iframe συγχρονίζει τέλεια την προβολή με το URL.",
            },
            type: "iframe",
            mediaUrl: "https://zucchero.gr/#specialties",
          },
          {
            title: {
              en: "In-Store QR Experience",
              el: "Εμπειρία QR στο Κατάστημα",
            },
            description: {
              en: "Bridging physical and digital worlds. Customers scanning the table QR code land on this custom, scrollable welcome screen to select their preferred language.",
              el: "Γεφυρώνοντας το φυσικό με το ψηφιακό. Οι πελάτες σκανάρουν το QR του τραπεζιού και επιλέγουν γλώσσα σε αυτή την ειδικά διαμορφωμένη welcome screen.",
            },
            type: "iframe",
            mediaUrl: "https://zucchero.gr/menu/welcome",
          },
          {
            title: {
              en: "Interactive Digital Menu",
              el: "Ψηφιακός Κατάλογος & Αλλεργιογόνα",
            },
            description: {
              en: "The core product catalog. Features live search, horizontal category filtering, and highly visible, color-coded allergen & dietary tags (Vegan, Gluten-Free) ensuring customer safety.",
              el: "Ο βασικός κατάλογος. Διαθέτει ζωντανή αναζήτηση, φίλτρα κατηγοριών και χρωματικά κωδικοποιημένες ετικέτες αλλεργιογόνων (Vegan, Gluten-Free) για την απόλυτη ασφάλεια του πελάτη.",
            },
            type: "iframe",
            mediaUrl: "https://zucchero.gr/menu?lang=en",
          },
        ],
      },
      {
        id: "waiter-pda",
        title: { en: "Waiter PDA", el: "Σύστημα PDA" },
        features: [
          {
            title: { en: "Fast Order Taking", el: "Λήψη Παραγγελιών" },
            description: {
              en: "Mobile optimized interface tailored for high-speed restaurant environments.",
              el: "Περιβάλλον βελτιστοποιημένο για κινητά, ιδανικό για τις γρήγορες ταχύτητες του καταστήματος.",
            },
            type: "image",
            mediaUrl: "/images/zucchero-pda.jpg",
          },
        ],
      },
    ],
  },
];
