/** Archive photos on About; opening pair use a dedicated layout. */
export type DanceGalleryEntry = {
  src: string
  caption: string
  color?: boolean
  showCaption?: boolean
  captionVariant?: 'serif-bottom-left' | 'serif-bottom-center'
}

export const practiceData = {
  doctor: {
    name: "Robert L Woods MD",
    title: "Board-Certified Psychiatrist",
    subtitle: "Concierge Psychiatry",
    tagline: "Treating Mental Health Across The Lifespan",
    phone: "(714) 336-8042",
    phoneHref: "tel:+17143368042",
    email: "rwoodsmd@me.com",
    address: {
      street: "3305 Molino",
      city: "Irvine",
      state: "California",
      zip: "92618",
      country: "United States",
    },
    yearsExperience: "25+",
  },
  nav: [
    { label: "Home", href: "/" },
    {
      label: "About Me",
      href: "/about",
      children: [
        { label: "Journey of Passion", href: "/about#journey" },
        { label: "Dance Career", href: "/about#dance-section" },
        { label: "Computer books", href: "/about#computer-books" },
        { label: "Accolades and testimonials", href: "/about#accolades" },
      ],
    },
    {
      label: "Services",
      href: "/services",
      children: [
        { label: "Psychiatric Diagnostic Evaluation", href: "/services#psychiatric-diagnostic-evaluation" },
        { label: "Individual Psychotherapy", href: "/services#individual-psychotherapy" },
        { label: "Medication Management", href: "/services#medication-management" },
        { label: "Case Management", href: "/services#case-management" },
        { label: "Competency Evaluations", href: "/services#competency-evaluations" },
        { label: "Other Treatments", href: "/services#other-treatments" },
        { label: "Family/Group Therapies", href: "/services#family-group-therapies" },
        { label: "Telepsychiatry", href: "/services#telepsychiatry" },
      ],
    },
    { label: "Policies and Procedures", href: "/policies" },
    { label: "Contact Me", href: "/contact" },
  ] as Array<{ label: string; href: string; children?: Array<{ label: string; href: string }> }>,
  hero: {
    line1: "Empowering Minds",
    line2: "Enriching Lives",
  },
  homeAbout: {
    label: "Concierge Psychiatry",
    title: "Receive The Highest Quality Of Care Right In Your Home",
    paragraphs: [
      "Your mental health is just as important as your physical health; therefore, you must not settle for less. With a concierge psychiatrist such as Robert Woods MD, you can receive the highest quality of personalized care right in the comfort of your own home.",
      "I travel to my patients' homes, schools, places of work, or anywhere they so desire, to help diagnose and treat various psychiatric conditions.",
      "As a psychiatrist in private practice for more than 25 years, I had to stop my clinical practice to focus on my health. I was diagnosed with stage IV cancer and underwent chemotherapy for six months. By 2019, I had been cancer-free for more than five years. Without a traditional office, I returned to practice in a new way: concierge psychiatry, with care in your home and telepsychiatry when appropriate. For more about my background, visit the About page.",
    ],
  },
  mission: {
    title: "Our Mission",
    paragraphs: [
      "The primary mission of my practice is to ensure that my patients are as free from mental illness and suffering as possible. I also believe it is my duty to evaluate and provide assistance to those individuals or family members who are affected by another's struggles. I also want to make certain that my patients have access to state-of-the-art psychiatric care.",
      "Continuing education is paramount for us all. My practice is not limited to a single modality or a single therapeutic approach. As a physician, I rely upon my research colleagues to provide me the statistical information gathered in the study of mental illness. But each patient is not a statistic, and though I may use this statistical information to help guide me in developing a treatment plan, each plan must be individualized to the specific needs of the patient.",
    ],
  },
  conditions: [
    { name: "Addiction", gradient: "from-amber-900 to-amber-800" },
    { name: "ADHD", gradient: "from-stone-700 to-stone-600" },
    { name: "Depression", gradient: "from-zinc-700 to-zinc-600" },
    { name: "OCD", gradient: "from-amber-800 to-amber-700" },
    { name: "Anxiety Disorders", gradient: "from-stone-800 to-stone-700" },
    { name: "Bipolar Disorders", gradient: "from-zinc-800 to-zinc-700" },
    { name: "Eating Disorders", gradient: "from-amber-900 to-stone-800" },
    { name: "And More", gradient: "from-stone-700 to-zinc-700" },
  ],
  serviceCards: [
    {
      name: "Psychiatric Services",
      description: "Comprehensive evaluations, medication management, and individualized treatment plans.",
      gradient: "from-amber-900/60 to-stone-900/60",
    },
    {
      name: "Family/Group Therapy",
      description: "Family and group psychotherapies for comprehensive mental health support.",
      gradient: "from-stone-800/60 to-zinc-900/60",
    },
    {
      name: "Telepsychiatry",
      description: "Secure virtual consultations via FaceTime, Zoom, and other platforms.",
      gradient: "from-zinc-800/60 to-amber-900/60",
    },
    {
      name: "Concierge & in-home care",
      description:
        "Personalized visits where you are most comfortable—home, school, workplace, or another setting you choose—alongside telepsychiatry when appropriate.",
      gradient: "from-stone-700/60 to-amber-900/60",
    },
  ],
  services: [
    {
      slug: "psychiatric-diagnostic-evaluation",
      name: "Psychiatric Diagnostic Evaluation",
      shortName: "Diagnostic Evaluation",
      description:
        "Includes face-to-face meeting with the patient, also gathering additional information from family, friends, the referral source, and careful review of any medical records. Duration: 90-minute interview. Blood tests or other medical tests may be ordered. Usually a working diagnosis is formulated by the end of the interview, followed by some initial lab tests, and an interim treatment plan may be proposed. A report will be sent to the referring entity.",
      duration: "90 minutes",
      hasBookButton: true,
      image: "/images/services/psychiatric-evaluation.jpeg",
      icon: "clipboard-check",
      featured: true,
      category: "Psychiatric Services",
    },
    {
      slug: "individual-psychotherapy",
      name: "Individual Psychotherapy",
      shortName: "Psychotherapy",
      description:
        "I am skilled in a number of psychotherapies including psychodynamic psychotherapy, cognitive behavioral psychotherapy, supportive therapy, mindful meditation, and play therapy for children. I customize each treatment using one or more of the aforementioned therapies. I also draw on PTSD-focused approaches where appropriate. Therapy sessions generally last 50 minutes.",
      duration: "45-50 minutes",
      image: "/images/services/psychotherapy.jpeg",
      icon: "brain",
      featured: true,
      category: "Psychiatric Services",
    },
    {
      slug: "medication-management",
      name: "Medication Management",
      shortName: "Medication Management",
      description:
        "I may recommend psychotropic medications for some patients. This is determined during the Psychiatric Diagnostic Evaluation. I will discuss the risks, benefits, and side effects of any medication I prescribe, and review your current medications and over-the-counter supplements to avoid interactions. Once a dosing strategy is in place, patients receiving medication are typically seen at least every three months unless we agree otherwise. Medication management visits are billed in line with the fee schedule (commonly 25-minute sessions; longer visits when clinically needed).",
      duration: "25 minutes",
      image: "/images/services/medication-management.jpeg",
      icon: "pill",
      category: "Psychiatric Services",
    },
    {
      slug: "case-management",
      name: "Case Management",
      shortName: "Case Management",
      description:
        "I provide coordination and execution of treatment plans where a multi-disciplinary treatment approach is the most effective. Some patients may need physical or occupational therapy; others may require placement in a residential or long-term care facility. I work with many excellent licensed clinical social workers, psychiatric nurse practitioners, and other ancillary staff. It is impossible to predict how much time is required for this service.",
      duration: "Varies",
      image: "/images/services/case-management.jpeg",
      icon: "users",
      category: "Psychiatric Services",
    },
    {
      slug: "competency-evaluations",
      name: "Competency Evaluations",
      shortName: "Competency Evaluations",
      description:
        "When a patient's competency is in question regarding the ability to make informed decisions about healthcare and financial matters, I evaluate the patient and render an opinion for use by attorneys and the court. These evaluations typically last from 90 to 120 minutes.",
      duration: "90-120 minutes",
      image: "/images/services/competency-evaluation.jpeg",
      icon: "scale",
      category: "Psychiatric Services",
    },
    {
      slug: "other-treatments",
      name: "Other Treatments",
      shortName: "Other Treatments",
      description:
        "I have referral resources for a number of therapeutic modalities including EMDR, hypnotherapy, electroconvulsive therapy (ECT), deep brain stimulation, and ketamine for severe suicidal ideation or treatment-resistant depression, in coordination with trained specialists.",
      image: "/images/services/other-treatments.jpeg",
      icon: "sparkles",
      category: "Psychiatric Services",
    },
    {
      slug: "family-group-therapies",
      name: "Family/Group Therapies",
      shortName: "Family Therapy",
      description:
        "Family and group psychotherapies are probably the most powerful of all therapy types. I am trained in both modalities and also have several excellent referral sources in the Orange County area.",
      hasBookButton: true,
      image: "/images/services/family-therapy.jpeg",
      icon: "heart",
      featured: true,
      category: "Family/Group Therapies",
    },
    {
      slug: "telepsychiatry",
      name: "Telepsychiatry",
      shortName: "Telepsychiatry",
      description:
        "I currently offer telepsychiatry using Apple's FaceTime as well as the Zoom platform. With FaceTime, the patient must have access to an iPhone, iPad, Mac laptop, or Mac computer. Zoom works on Apple and Android devices as well as PCs. This allows us to meet face-to-face remotely with the same attention as in-person care when appropriate.",
      hasBookButton: true,
      image: "/images/services/telepsychiatry.jpeg",
      icon: "video",
      featured: true,
      category: "Telepsychiatry",
    },
  ],
  testimonials: [
    {
      text: "Dr. Woods provided exceptional care during my most challenging time. His personalized approach and availability gave me the confidence to focus on my recovery.",
      author: "Sarah M.",
      role: "Executive",
    },
    {
      text: "Having Dr. Woods come to my home for consultations was life-changing. The level of personal attention and medical expertise is unmatched.",
      author: "Michael R.",
      role: "Business Owner",
    },
    {
      text: "After 25 years in traditional healthcare, Dr. Woods' concierge approach is exactly what modern medicine should be - personal, thorough, and accessible.",
      author: "Jennifer L.",
      role: "Healthcare Professional",
    },
  ],
  fees: [
    { service: "Psychiatric Diagnostic Evaluation (90 minutes)*", price: "$375.00" },
    { service: "Individual Psychotherapy (45-50 minutes)**", price: "$275.00" },
    { service: "Individual Psychotherapy (25 minutes)*", price: "$180.00" },
    { service: "Medication Management (25 minutes)*", price: "$180.00" },
    { service: "Family Therapy (45-50 minutes)*", price: "$275.00" },
    { service: "Couples Therapy (45-50 minutes)*", price: "$275.00" },
    { service: "Forms, Letters, Reports**", price: "see below" },
    { service: "Forensic Services**", price: "see below" },
  ],
  feesNotes: [
    "*These fees apply no matter the manner in which the service is rendered including face-to-face meetings, telephone sessions, text messaging, and telepsychiatry sessions.",
    "**Forensic evaluations are charged at $400.00 per hour or $100.00 per every 15 minute increment. This includes evaluations, interviews, record reviews, court appearances, depositions, and telephone consultations.",
    "***Completion of forms, letters, and other reports. There is a minimum cost of $50.00 for any written document. The exact price charged will reflect the complexity and the length of time required to complete the document.",
  ],
  payment: {
    title: "Payment",
    text: "Payment is due at the time the service is rendered unless other arrangements are made before your appointment. I do not accept any type of insurance. I do not accept Medicare or Medi-Cal. Forms of payment are cash, check, money order, credit, or debit card. You will incur a $10.00 fee for non-electronic payment or in-person payment. A $100.00 service fee applies for returned checks.",
  },
  cancellations: {
    title: "Cancellations and Missed Appointments",
    text: "You are financially responsible for any session you cancel with less than 24 hours notice, without a valid excuse, and especially if an appointment is cancelled the same day of service without prior notification. The cancellation period begins on the previous Friday, Saturday, Sunday, or Holidays for any Monday appointment. For emergencies, you may have since or text messages ONLY for any confirmed canceled or new Follow-Up appointments. For cancellations scheduled less than 24 hours prior to the appointment time, I will normally charge for the session. For appointments where no advance notice is given, you will be charged for the session becomes your amount due.",
  },
  about: {
    intro: {
      label: "About Me",
      title: "Receive The Highest Quality Of Care Right In Your Home",
      paragraphs: [
        "Your mental health is just as important as your physical health; therefore, you must not settle for less. With a concierge psychiatrist such as Robert Woods MD, you can receive the highest quality of personalized care right in the comfort of your own home.",
        "I travel to my patients' homes, schools, places of work, or anywhere they so desire, to help diagnose and treat various psychiatric conditions, including, but not limited to:",
      ],
    },
    sections: [
      {
        title: "A journey of passion",
        paragraphs: [
          "Being a native of Orange County, I moved at the age of eight to Napa, California where I attended local schools. My first taste of passion came to me in Napa when I was introduced to the world of classical ballet. I studied with Shirley Carson Ray, a former dancer with the San Francisco Ballet. After two years of intense training under Mrs. Ray, I received a scholarship for advanced training with the San Francisco Ballet. I eventually became an apprentice with the company. At the age of 18, I decided to relocate to New York City for additional training. I studied with Richard Thomas and Barbara Fallis at the New York School of Ballet. After a school recital, Alfonso Catá, director of the Frankfurt Opera Ballet in Frankfurt Germany, offered me a position with the company. I performed with that company for three years obtaining the role of soloist dancer. From there I was hired by the Zürich Opera Ballet under the direction of Patricia Neary and George Balanchine. After three years of living and dancing in Zürich Switzerland, I returned to the United States and danced with several companies including The Los Angeles Ballet, Pacific Northwest Ballet, and Ballet Pacifica in Laguna Beach. I had returned to Orange County.",
          "After 15 years of professional dancing, I decided it was time to focus on my academic career. A guidance counselor at Saddleback Community College recognized my interest in mathematics and the new technology of computers. She suggested I pursue an education in the area of computer science. I had found a new passion and enrolled at Saddleback, where I graduated with a 4.0 GPA and earned the award for Outstanding Performance in Mathematics 1984. I transferred to the University of California Irvine (UCI) to complete my education and received a Bachelor of Science degree in Information and Computer Sciences, graduating Cum Laude also receiving an appointment to Phi Beta Kappa. During my senior year as a computer science major, I found my passion shifting to medicine after working on a dance medicine project with the Department of Dance at UCI. I completed an additional year at UCI earning a Bachelor of Science degree in biology, again graduating Cum Laude.",
          "After the lengthy application process for medical school, I received a number of offers including Harvard Medical School. Because of my strong ties to Orange County, I accepted a position at the University of California, Irvine, College of Medicine (UCI-MC). After four years of medical school, I found that psychiatry provided me with the level of passion I had come to expect from life. I completed my medical internship, psychiatric residency, and one year of the Child and Adolescent Fellowship at UCI-MC and opened my private practice in Orange, California. My first office only blocks from my birthplace: St. Joseph's Hospital in Orange.",
          "During medical school, still imbibed with the passion of computers, I co-founded a medical software company with James Jones, MBA. The company, ComputerBooks, produced medical software designed especially for physicians on handheld devices. Our company was the first to produce such products. Apple Computer invited ComputerBooks to include our software on the Newton Message Pad when it launched in 1993. The Message Pad, considered by many to be the precursor to the iPhone, was not widely accepted and physicians were not ready to adopt the software produced by my company. So I decided to focus my passion on medicine.",
          "I continued in private practice and joined the staff of Western Medical Center Santa Ana's, geriatric psychiatry unit. I worked as an attending physician and associate medical director for several years. I also provided consultation services to several different skilled nursing facilities in Orange County. I was a principal owner in the Neuropsychiatric Management Group (NPMG) when it first started in 1995. NPMG provided the management of several different geriatric psychiatry units in hospitals in Orange and Los Angeles Counties.",
          "I volunteered with the Orange County Mental Health Association where for two years I moderated workshops in their annual \"Meeting of the Minds\" seminar. I also provided lectures throughout Orange County focusing on the mental health issues of seniors. Together with Patricia Lenahan, LCSW, I created and taught a behavioral science program for the family practice residents at UCI's Department of Family Practice.",
          "I took a medical leave of absence in June 2013. Now several years later, I find myself ready to return to a lifelong passion of helping others. Rather than returning to what I had established in the past, I decided to reinvent myself and created this concept of \"Concierge Psychiatry\". I no longer have an office. I go to the patient rather than having the patient come to me. I visit patients in any number of settings: home, school, workplace, and/or facilities. Concierge physicians traditionally charge an annual retainer in addition to their regular fees and provide more attention and other value-added services for their patients. I feel the practice of medicine should include complete attention and whatever services necessary for one's patients without charging an extra fee. In that way I am different. I find great passion in my new model of providing mental health care to my patients.",
          "Please refer to other pages on this website for additional information. Thank you for reading about my Journey of Passion. Respectfully,",
        ],
      },
      {
        title: "Dance Career",
        content:
          "As in most things I studied hard and excelled. Not particularly talented, but I certainly made up for it in hard work. Within a year and a half, I was dancing lead roles with the Silverado Ballet Troupe under the direction of Mrs. Ray. Noting my enthusiasm for the dance, Mrs. Ray facilitated an audition for the summer session with San Francisco Ballet. I was accepted on full scholarship and commuted five days a week from Napa to the San Francisco Ballet school. When the summer session ended I knew that I would one day be a professional ballet dancer. I subsequently received a scholarship for the next summer session and then the school offered me a scholarship for Fall 1972. During my senior year of high school, I would attend academic classes at Napa High School from 7:00 am until 1:00 pm, then drive ninety minutes to San Francisco, take two ballet classes, and be back home about 11:00 pm. This arrangement did not last long: I moved to San Francisco and graduated from George Washington High School in January 1973. I remained in San Francisco the next year and a half, where I eventually became an apprentice with the San Francisco Ballet. Not satisfied with my training there, I set my sights on New York City—the center of the dance world.",
        content2:
          "While performing in a recital at the New York School of Ballet, I was selected to dance the poet in Les Sylphides. After the performance, I was introduced to Alfonso Catà, director of the Frankfurt Opera Ballet in Germany. Mr. Catà offered me a one-year contract. I spent three years in Frankfurt dancing roles in Swan Lake, Sleeping Beauty, Coppelia, and many works by George Balanchine—Serenade, Allegro Brillante, Divertimento No. 15, and La Valse. I was promoted to soloist and toured to Birmingham, Lichtenstein, Belgrade, and Brighton. In July 1977 I joined the Zürich Opera Ballet. Mr. Balanchine had selected the company to be the European sibling of New York City Ballet. We performed Agon, Symphony in C, Don Quixote with Rudolph Nureyev, and many more. I left in June 1980 after six years in Europe—a fitting end performing Don Quixote at the London Coliseum.",
      },
      {
        title: "Computer Books",
        paragraphs: [
          "During my third year of medical school at the University of California, Irvine, College of Medicine in 1989, I realized that the traditional 3×5 cards carried by physicians were woefully inadequate, especially with the advent of handheld computers. Together with James Jones, MBA, we founded ComputerBooks and produced the first-ever medical software for handheld computers. We chose the Atari Portfolio for our first hardware platform. We offered four different software applications: Physician's Reference I, an interactive program that contains 26 applications used in the diagnosis and treatment of patients; Pharmaceuticals, with more than 1,900 generic and brand-name drugs with adult and pediatric dosing; Drug Interactions, so a physician can enter up to 20 different drugs and the computer will instantly display any potential drug interactions; and Patient Management, an early electronic health record (EHR).",
          "Below are some pictures from the early marketing of ComputerBooks. Initially using the Atari Portfolio, we later partnered with HP with their small DOS-based handheld computer, and we were invited to put our software on Apple's Newton Message Pad when it launched in 1993. Despite the innovation and utility of our products, physicians were not ready to adopt this new technology, and ComputerBooks closed after three years.",
        ],
      },
      {
        title: "Accolades and Testimonials",
        paragraphs: [],
      },
    ],
    /** Hero images from current site about-us page */
    aboutDoctorImages: {
      journey: '/images/about/about-us-1.jpeg',
      computerBooks: '/images/about/about-us-2.jpeg',
      accolades: '/images/about/about-us-3.jpeg',
    },
    /** Accolades images */
    accoladesGallery: [
      { src: '/images/about/accolades/harvard-letter.webp', caption: 'Acceptance letter to Harvard Medical School (1987).' },
      { src: '/images/about/accolades/top-doctor-award.webp', caption: 'Top Psychiatrist in California, Top Doctor Competition (Winter 2013).' },
    ],
    /** ComputerBooks gallery images from early marketing */
    computerBooksGallery: [
      { src: '/images/about/computerbooks/cb-01.webp', alt: 'ComputerBooks marketing material' },
      { src: '/images/about/computerbooks/cb-02.webp', alt: 'ComputerBooks product display' },
      { src: '/images/about/computerbooks/cb-03.webp', alt: 'ComputerBooks software demonstration' },
      { src: '/images/about/computerbooks/cb-04.webp', alt: 'ComputerBooks on handheld device' },
      { src: '/images/about/computerbooks/cb-05.webp', alt: 'ComputerBooks promotional material' },
      { src: '/images/about/computerbooks/cb-06.webp', alt: 'ComputerBooks trade show display' },
      { src: '/images/about/computerbooks/cb-07.webp', alt: 'ComputerBooks software features' },
      { src: '/images/about/computerbooks/cb-08.webp', alt: 'ComputerBooks product brochure' },
      { src: '/images/about/computerbooks/cb-09.webp', alt: 'Projected sales of palmtop units graph' },
      { src: '/images/about/computerbooks/cb-10.webp', alt: 'ComputerBooks documentation' },
    ],
    educationTraining: {
      title: 'Education & Training',
      body: 'This section is being expanded with details about medical school, residency, and continuing education. Check back soon for the full story.',
    },
    medicalCareer: {
      title: 'Medical Career',
      body: 'More on my path in psychiatry and private practice will appear here soon.',
    },
    patientResources: {
      title: 'Patient Resources (Coming Soon)',
      body: 'I will curate books, trusted websites, medical apps, and other tools to support your journey toward improved mental health.',
    },
    /** Subheading under “Dance Career” on the archival gallery section */
    danceArchiveSubtitle: 'Frankfurt, Germany · Zürich, Switzerland',
    /** Two-column narrative text from legacy site */
    danceNarrative: {
      column1: [
        "While performing in a recital at the New York School of Ballet, I was selected to dance the poet in a classical ballet known as Les Sylphide. I was honored that Ricard Thomas and Barbara Fallis, my teachers, selected me for this role. After the performance, Mr. Thomas pulled me aside and introduced me to Alphonso Catà, director of the Frankfurt Opera Ballet in Frankfurt Germany. Mr. Catà offered me a one-year contract as a member of the corps de ballet. So within four weeks I made a hasty trip to California to bid farewell to my family and arrived in Frankfurt in late July of 1974.",
        "The company had many American dancers so I felt right at home. I spent the next three years dancing many different roles in classical ballets such as Swan Lake, Sleeping Beauty, and Coppelia; neo-classical ballets especially ballets of George Balanchine including Serenade, Allegro Briliant, Divertimento Number Fifteen, and La Valse; modern ballets by various artists including Kent Stowell, and John Butler. At the end of my second year with the company, I was promoted to soloist. I had the good fortune to tour with the company to Birmingham England, Lichtenstein, Belgrade Yugoslavia, and Brighton England. At the end of my third year, the management changed and I left the company for the Zürich Opera Ballet in July 1977.",
      ],
      column2: [
        "The Zürich Opera Ballet was quite a different experience. Aside from living in the cleanest, charming, old world town, the theater was subsidized by the Swiss government and produced lavish productions both opera and ballet. Mr. George Balanchine, of the New York City Ballet, selected the Zürich Opera Ballet to be the European sibling of his world famous New York City Ballet. He would come to work with our company once or twice a year. He selected former New York City Ballerina, Patrica Neary, to run the company. Our repertoire was filled again with classical, neo-classical and modern dance works.",
        "We performed the following works by Mr. Balanchine; Agon, Symphony in C, Western Symphony, Midsummer's Night Dream, Who Cares, La Valse and Bugaku just to mention a few. Our classical repertoire included Rudolph Nurevey's full length ballet Don Quixote. Mr. Neurevey often danced the lead role with a number guess ballerinas including Cynthia Gregory, Eva Ednokimiva, and Yoko Morishito. We performed experimental pieces in various venues around Zürich with Mata Hari by Jürge Burth as one my favorites. I left the company in June of 1980 to head back to the United States. I spent my final two weeks with the Zürich Opera ballet performing Don Quixote at the London Coliseum. It was a fitting end to my six years in Europe.",
      ],
    },
    /**
     * Full dance gallery from legacy site. 17 photos total.
     * - #1-2: Opening pair (Silverado/Napa, young Robert)
     * - #3: Hero (pas de deux)
     * - #4-6: Frankfurt/Zürich performances
     * - #7: Agon full-width
     * - #8, #10: Maureen Horrigan & Trudi Campbell pair
     * - #11: Costume sketch (COLOR)
     * - #12: April Anderson
     * - #13-15: Three-across gallery
     * - #16-17: Newspaper articles
     */
    danceGallery: [
      {
        src: "/images/about/dance/legacy/01-debra-bernard-napa-1972.webp",
        caption: "Robert Woods, Debra Bernard in pas de deux by Shirley Carson Ray, Silverado Ballet Troupe, Napa (1972).",
        captionVariant: "serif-bottom-left",
      },
      {
        src: "/images/about/dance/legacy/02-ellen-mingst-napa-1972.webp",
        caption: "Ellen Mingst, Robert Woods in ballet by Shirley Carson Ray, Silverado Ballet Troupe, Napa (1972).",
        captionVariant: "serif-bottom-center",
      },
      {
        src: "/images/about/dance/legacy/03-pas-de-deux-frankfurt.webp",
        caption: "",
      },
      {
        src: "/images/about/dance/legacy/04-don-quixote-curtain-call-1979.webp",
        caption: "Curtain call after Zürich Opera Ballet performs Don Quixote. From left to right: Rudy Budavary, Rudolph Nureyev, James Jones, Cynthia Gregory, and Cathy Prescott. Zürich, Switzerland (1979).",
      },
      {
        src: "/images/about/dance/legacy/05-divertimento-solo-frankfurt-1976.webp",
        caption: "Robert Woods in Divertimento #15 by George Balanchine, Frankfurt Opera Ballet (1976).",
      },
      {
        src: "/images/about/dance/legacy/06-gisella-schneider-frankfurt-1975.webp",
        caption: "Gisella Schneider, Robert Woods in Divertimento #15 by George Balanchine, Frankfurt Opera Ballet (1975).",
      },
      {
        src: "/images/about/dance/legacy/07-agon-zurich-1978.webp",
        caption: "Floris Alexander, Jonas Kage, Alain Debrus, Robert Woods (left to right, front to back) in Agon by George Balanchine, Zürich Opera Ballet (1978).",
      },
      {
        src: "/images/about/dance/legacy/08-maureen-horrigan-frankfurt-1974.webp",
        caption: "Maureen Horrigan, Robert Woods, Ilka Doubek (front), Gerrard Synja, Lucio Zarlenga (back) in neoclassical ballet by Alfonso Catá, Frankfurt Opera Ballet Kammerspiel (1974).",
      },
      {
        src: "/images/about/dance/legacy/09-neoclassical-alfonso-cata-1974.webp",
        caption: "Neoclassical ballet by Alfonso Catá, Frankfurt Opera Ballet (1974).",
      },
      {
        src: "/images/about/dance/legacy/10-trudi-campbell-frankfurt-1975.webp",
        caption: "Trudi Campbell, Maria Gurero, Don Edwards (rear), Wilhelm Burman, Robert Woods (front) in Divertimento #15 by George Balanchine, Frankfurt Opera Ballet (1975).",
      },
      {
        src: "/images/about/dance/legacy/11-costume-sketch-schemenstadt-1977.webp",
        caption: "Original Costume Sketch for Robert Woods from Schemenstadt by Jürge Burth, Zürich Opera Ballet (1977).",
        color: true,
      },
      {
        src: "/images/about/dance/legacy/12-april-anderson-imperial-1974.webp",
        caption: "April Anderson, Robert Woods in Imperial Ballet by Alfonso Catá, Frankfurt Opera Ballet (1974).",
      },
      {
        src: "/images/about/dance/legacy/13-jillana-liebeslieder-1965.webp",
        caption: "Jillana in Liebeslieder Waltzes by George Balanchine (1965).",
      },
      {
        src: "/images/about/dance/legacy/14-cyndi-lauper-ballet-1985.webp",
        caption: "Jennifer Morgan, Cynthia Strang, Leslie Wiesner, Robert Woods, Yvette De Marco in Cyndi Lauper Ballet by James Jones (1985).",
        color: true,
      },
      {
        src: "/images/about/dance/legacy/15-four-temperaments-1983.webp",
        caption: "Jillana, James Jones in The Four Temperaments by George Balanchine (1983).",
      },
      {
        src: "/images/about/dance/legacy/16-newspaper-article-1.webp",
        caption: "Article in Orange County Register — Public relations article written by Chris Paslas announcing South Coast Ballet's performances at the Southland Home and Garden Show in Anaheim, California (1985).",
      },
      {
        src: "/images/about/dance/legacy/17-newspaper-article-2.webp",
        caption: "",
      },
    ] satisfies DanceGalleryEntry[],
  },
  hipaa: {
    title: "Policies and Procedures",
    intro:
      "I, Robert Woods MD, strictly adhere to certain clinical policies and procedures as a concierge psychiatrist. These are outlined below. Please read on to discover interesting facts about working with me and should you have inquiries or concerns contact me in Irvine, California.",
    privacyNotice:
      "THIS NOTICE DESCRIBES HOW MEDICAL INFORMATION ABOUT YOU MAY BE USED AND DISCLOSED AND HOW YOU CAN GET ACCESS TO THIS INFORMATION. PLEASE REVIEW IT CAREFULLY.",
  },
  /** Website / marketing privacy (distinct from HIPAA notice). Migrated from legacy data-privacy page. */
  websitePrivacy: {
    title: "Data Privacy Policy",
    lastUpdated: "This policy was last updated on July 7, 2024.",
    intro: [
      "This privacy policy sets out how Robert L Woods MD uses and protects any information that you give Robert L Woods MD when you use this website.",
      "Robert L Woods MD is committed to ensuring that your privacy is protected. Should we ask you to provide certain information by which you can be identified when using this website, you can be assured that it will only be used in accordance with this privacy statement.",
      "Robert L Woods MD may change this policy from time to time by updating this page. You should check this page from time to time to ensure that you are happy with any changes.",
    ],
    sections: [
      {
        heading: "What we collect",
        list: [
          "Name",
          "Contact information including email address",
          "Demographic information such as zip code, preferences, and interests",
          "Other information relevant to customer surveys and/or offers",
        ],
      },
      {
        heading: "What we do with the information we gather",
        paragraphs: [
          "We require this information to understand your needs and provide you with a better service, and in particular for the following reasons:",
        ],
        list: [
          "Internal record keeping.",
          "We may use the information to improve our products and services.",
          "We may periodically send promotional emails about new products, special offers, or other information which we think you may find interesting using the email address which you have provided.",
          "From time to time, we may also use your information to contact you for market research purposes. We may contact you by email, SMS, or phone. We may use the information to customize the website according to your interests.",
        ],
      },
      {
        heading: "Security",
        paragraphs: [
          "We are committed to ensuring that your information is secure. In order to prevent unauthorized access or disclosure, we have put in place suitable physical, electronic, and managerial procedures to safeguard and secure the information we collect online.",
        ],
      },
      {
        heading: "How we use cookies",
        paragraphs: [
          "A cookie is a small file that asks permission to be placed on your computer's hard drive. Once you agree, the file is added and the cookie helps analyze web traffic or lets you know when you visit a particular site. Cookies allow web applications to respond to you as an individual. The web application can tailor its operations to your needs, likes, and dislikes by gathering and remembering information about your preferences.",
          "We may use traffic log cookies to identify which pages are being used. This helps us analyze data about webpage traffic and improve our website in order to tailor it to customer needs. We only use this information for statistical analysis purposes and then the data is removed from the system.",
          "Overall, cookies help us provide you with a better website experience, by enabling us to monitor which pages you find useful and which you do not. A cookie in no way gives us access to your computer or any information about you, other than the data you choose to share with us.",
          "Your web browser will allow you to choose to accept or decline cookies. Most web browsers automatically accept cookies, but you can usually modify your browser setting to decline cookies if you prefer. This may prevent you from taking full advantage of the website.",
        ],
      },
      {
        heading: "Links to other websites",
        paragraphs: [
          "Our website may contain links to other websites of interest. However, once you have used these links to leave our site, you should note that we do not have any control over that other website. Therefore, we cannot be responsible for the protection and privacy of any information which you provide whilst visiting such sites and such sites are not governed by this privacy statement. You should exercise caution and look at the privacy statement applicable to the website in question.",
        ],
      },
      {
        heading: "Controlling your personal information",
        paragraphs: [
          "You may choose to restrict the collection or use of your personal information in the following ways:",
        ],
        list: [
          "Whenever you are asked to fill in a form on the website, look for a box that you can click to indicate that you do not want the information to be used by anybody for direct marketing purposes.",
          "If you have previously agreed to us using your personal information for direct marketing purposes, you may change your mind at any time by emailing us at rwoodsmd@me.com.",
        ],
        footerParagraphs: [
          "We will not sell, distribute, or lease your personal information to third parties unless we have your permission or are required by law to do so. We may use your personal information to send you promotional information about third parties which we think you may find interesting if you tell us that you wish this to happen.",
          "You may request details of personal information which we hold about you.",
          "If you believe that any information we are holding on you is incorrect or incomplete, please write to or email us as soon as possible. We will promptly correct any information found to be incorrect. To request a copy of the information disclosure provided by Robert L Woods MD, please contact us via email at rwoodsmd@me.com. Please allow 30 days for a response.",
        ],
      },
    ],
  },
  faq: [
    {
      q: "What is concierge psychiatry?",
      a: "Concierge psychiatry is a personalized model of care where Dr. Woods comes directly to you—at your home, office, school, or via telepsychiatry. This allows for unhurried, private consultations focused entirely on your needs.",
    },
    {
      q: "What areas do you serve?",
      a: "Dr. Woods is based in Irvine, California and serves patients throughout Orange County and surrounding areas. Telepsychiatry sessions are also available for patients who prefer virtual visits.",
    },
    {
      q: "Do you accept insurance?",
      a: "I do not accept any type of insurance, Medicare, or Medi-Cal. Forms of payment are cash, check, money order, credit, or debit card. I can provide superbills for patients to submit for potential out-of-network reimbursement.",
    },
    {
      q: "What conditions do you treat?",
      a: "Dr. Woods treats a wide range of psychiatric conditions including addiction, ADHD, depression, OCD, anxiety disorders, bipolar disorders, eating disorders, and more.",
    },
    {
      q: "How much does an initial evaluation cost?",
      a: "A Psychiatric Diagnostic Evaluation (90 minutes) is $375.00. Individual Psychotherapy sessions (45-50 minutes) are $275.00. Please see our Policies and Procedures page for a full fee schedule.",
    },
    {
      q: "How do I schedule an appointment?",
      a: "You can schedule by calling (714) 336-8042, emailing rwoodsmd@me.com, or using the contact form on our website.",
    },
    {
      q: "Is telepsychiatry available?",
      a: "Yes! Dr. Woods offers telepsychiatry sessions using Apple's FaceTime as well as the Zoom platform. The patient needs access to an iPhone, iPad, Mac, or a device with Zoom.",
    },
  ],
}

export type PracticeData = typeof practiceData
