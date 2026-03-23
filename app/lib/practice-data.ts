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
    label: "About Me",
    title: "Receive The Highest Quality Of Care Right In Your Home",
    text: "Dr. Woods provides the highest quality comprehensive psychiatric evaluations and medication management right in the comfort of your own home, making it easy to receive the quality of care you and your family deserve. With over 25 years of clinical experience and a deeply personal understanding of healthcare, Dr. Woods brings exceptional psychiatric care directly to you.",
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
  ],
  services: [
    {
      slug: "psychiatric-diagnostic-evaluation",
      name: "Psychiatric Diagnostic Evaluation",
      description:
        "Includes face to face meeting with patient, also gathering additional information from family, friends, the referral source and careful review of any medical records. Duration: 90 minute interview. Blood tests or other medical tests may be ordered. Usually a working diagnosis is established followed by some initial lab tests and an interim treatment plan may be proposed. A report will be sent to the referencing entity.",
      duration: "90 minutes",
      hasBookButton: true,
    },
    {
      slug: "individual-psychotherapy",
      name: "Individual Psychotherapy",
      description:
        "I am trained in a variety of psychotherapies including psychodynamic, cognitive behavioral psychotherapy, supportive therapy, mindfulness and relaxation, and the array of PTSD therapies. Therapy sessions generally are 50 minutes.",
      duration: "45-50 minutes",
    },
    {
      slug: "medication-management",
      name: "Medication Management",
      description:
        "I may prescribe and monitor psychotropic medications for my patients. This is determined best during the Psychiatric Diagnostic Evaluation. I will discuss the risks, benefits, side effects, and if a medication is best for you. Appointments generally are 30 minutes. Once a dosing schedule has been finalized, more routine Medication Management is needed, and each appointment is approximately 30 minutes.",
      duration: "25 minutes",
    },
    {
      slug: "case-management",
      name: "Case Management",
      description:
        "I oversee the responsibilities of treatment plan where a multi-disciplinary team of professionals are working with the patient. This is typically required in settings of an involuntary nature involving court orders. Another may require placement in a residential or long-term care facility. I work with each of the team members to predict how much time is required for this service.",
      duration: "Varies",
    },
    {
      slug: "competency-evaluations",
      name: "Competency Evaluations",
      description:
        "In probate and criminal matters, a psychiatrist or psychologist may be asked by courts to make informed decisions regarding healthcare and financial issues involving the individual. These evaluations are set from 45-50 minutes.",
      duration: "45-50 minutes",
    },
    {
      slug: "other-treatments",
      name: "Other Treatments",
      description:
        "I also have training in various additional treatment modalities including EMDR, hypnotherapy, electroconvulsive therapy (ECT), brain stimulation, neurofeedback, and refer to some trained specialists for ketamine infusion or treatment-resistant depression.",
    },
    {
      slug: "family-group-therapies",
      name: "Family/Group Therapies",
      description:
        "Family and group psychotherapies are probably the most powerful of all therapy types. I am trained in both modalities and also have several excellent referral sources in the Orange County Area.",
      hasBookButton: true,
    },
    {
      slug: "telepsychiatry",
      name: "Telepsychiatry",
      description:
        "I currently offer telepsychiatry sessions using Apple's FaceTime as well as the Zoom platform. With FaceTime the patient must have access to an iPhone, iPad, Mac Laptop, or Mac computer. Zoom works on all Apple and Android devices as well as on PC's. Using this technology allows me to communicate face to face but remotely.",
      hasBookButton: true,
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
        title: "A Journey Of Passion",
        paragraphs: [
          "Being a native of Orange County, I moved at the age of eight to Napa, California where I attended local schools. My first taste of passion came to me in Napa when I was introduced to the world of classical ballet. I studied with Shirley Carson Ray, a former dancer with the San Francisco Ballet. After two years of intense training under Mrs. Ray, I received a scholarship for advanced training with the San Francisco Ballet. I eventually became an apprentice with the company. At the age of 18, I decided to relocate to New York City for additional training. I studied with Richard Thomas and Barbara Fallis at the New York School of Ballet. After a school recital, Alfonso Catá, director of the Frankfurt Opera Ballet in Frankfurt Germany, offered me a position with the company. I performed with that company for three years obtaining the role of soloist dancer. From there I was hired by the Zürich Opera Ballet under the direction of Patricia Neary and George Balanchine. After three years of living and dancing in Zürich Switzerland, I returned to the United States and danced with several companies including The Los Angeles Ballet, Pacific Northwest Ballet, and Ballet Pacifica in Laguna Beach. I had returned to Orange County.",
          "After 15 years of professional dancing, I decided it was time to focus on my academic career. A guidance counselor at Saddleback Community College recognized my interest in mathematics and the new technology of computers. She suggested I pursue an education in the area of computer science. I had found a new passion and enrolled at Saddleback, where I graduated with a 4.0 GPA and earned the award for Outstanding Performance in Mathematics 1984. I transferred to the University of California Irvine (UCI) to complete my education and received a Bachelor of Science degree in Information and Computer Sciences, graduating Cum Laude also receiving an appointment to Phi Beta Kappa. During my senior year as a computer science major, I found my passion shifting to medicine after working on a dance medicine project with the Department of Dance at UCI. I completed an additional year at UCI earning a Bachelor of Science degree in biology, again graduating Cum Laude.",
          "After the lengthy application process for medical school, I received a number of offers including Harvard Medical School. Because of my strong ties to Orange County, I accepted a position at the University of California, Irvine, College of Medicine (UCI-MC). After four years of medical school, I found that psychiatry provided me with the level of passion I had come to expect from life. I completed my medical internship, psychiatric residency, and one year of the Child and Adolescent Fellowship at UCI-MC and opened my private practice in Orange, California. My first office only blocks from my birthplace: St. Joseph's Hospital in Orange.",
          "During medical school, still imbibed with the passion of computers, I co-founded a medical software company with James Jones, MBA. The company, ComputerBooks, produced medical software designed especially for physicians on handheld devices. Our company was the first to produce such products. Apple Computer invited ComputerBooks to include our software on the Newton Message Pad when it launched in 1993. The Message Pad, considered by many to be the precursor to the iPhone, was not widely accepted and physicians were not ready to adopt the software produced by my company. So I decided to focus my passion on medicine.",
          "I continued in private practice and joined the staff of Western Medical Center Santa Ana's, geriatric psychiatry unit. I worked as an attending physician and associate medical director for several years. I also provided consultation services to several different skilled nursing facilities in Orange County. I was a principal owner in the Neuropsychiatric Management Group (NPMG) when it first started in 1995. NPMG provided the management of several different geriatric psychiatry units in hospitals in Orange and Los Angeles Counties.",
          "I volunteered with the Orange County Mental Health Association where for two years I moderated workshops in their annual \"Meeting of the Minds\" seminar. I also provided lectures throughout Orange County focusing on the mental health issues of seniors. Together with Patricia Lenahan, LCSW, I created and taught a behavioral science program for the family practice residents at UCI's Department of Family Practice.",
          "I took a medical leave of absence in June 2013. Now several years later, I find myself ready to return to a lifelong passion of helping others. Rather than returning to what I had established in the past, I decided to reinvent myself and created this concept of \"Concierge Psychiatry\". I no longer have an office. I go to the patient rather than having the patient come to me. I visit patients in any number of settings: home, school, workplace, and/or facilities. Concierge physicians traditionally charge an annual retainer in addition to their regular fees and provide more attention and other value-added services for their patients. I feel the practice of medicine should include complete attention and whatever services necessary for one's patients without charging an extra fee. In that way I am different. I find great passion in my new model of providing mental health care to my patients.",
          "Please refer to other pages on this website for additional information. Thank you for reading about my Journey of Passion. Respectfully, Robert L Woods MD",
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
        paragraphs: [
          "Acceptance letter to Harvard Medical School (1987).",
          "Top Psychiatrist in California, Top Doctor Competition (Winter 2013).",
          "Further honors and testimonials will be added here over time. Dr. Woods's patients consistently praise his personalized approach, accessibility, and genuine commitment to their well-being.",
        ],
      },
    ],
    /** Hero images from current site about-us page */
    aboutDoctorImages: {
      journey: '/images/about/about-us-1.jpeg',
      computerBooks: '/images/about/about-us-2.jpeg',
      accolades: '/images/about/about-us-3.jpeg',
    },
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
    danceGallery: [
      { src: "/images/about/dance/dance-1.webp", caption: "Robert Woods, Debra Bernard in pas de deux by Shirley Carson Ray, Silverado Ballet Troupe, Napa (1972)." },
      { src: "/images/about/dance/dance-2.webp", caption: "Ellen Mingst, Robert Woods in ballet by Shirley Carson Ray, Silverado Ballet Troupe, Napa (1972)." },
      { src: "/images/about/dance/dance-3.webp", caption: "Robert Woods in Divertimento #15 by George Balanchine, Frankfurt Opera Ballet (1976)." },
      { src: "/images/about/dance/dance-4.webp", caption: "Gisella Schneider, Robert Woods in Divertimento #15 by George Balanchine, Frankfurt Opera Ballet (1975)." },
      { src: "/images/about/dance/dance-5.webp", caption: "Curtain call after Don Quixote. Rudolph Nureyev, Cynthia Gregory, Zürich Opera Ballet (1979)." },
      { src: "/images/about/dance/dance-6.webp", caption: "Floris Alexander, Jonas Kage, Alain Debrus, Robert Woods in Agon by George Balanchine, Zürich Opera Ballet (1978)." },
      { src: "/images/about/dance/dance-7.webp", caption: "Maureen Horrigan, Robert Woods in neoclassical ballet by Alfonso Catá, Frankfurt Opera Ballet (1974)." },
      { src: "/images/about/dance/dance-8.webp", caption: "Trudi Campbell, Maria Gurero, Robert Woods in Divertimento #15 by George Balanchine, Frankfurt Opera Ballet (1975)." },
      { src: "/images/about/dance/dance-9.webp", caption: "April Anderson, Robert Woods in Imperial Ballet by Alfonso Catá, Frankfurt Opera Ballet (1974)." },
      { src: "/images/about/dance/dance-10.webp", caption: "Original Costume Sketch for Robert Woods from Schemenstadt by Jürge Burth, Zürich Opera Ballet (1977)." },
    ],
  },
  hipaa: {
    title: "Policies and Procedures",
    intro:
      "I, Robert Woods MD, strictly adhere to certain clinical policies and procedures as a concierge psychiatrist. These are outlined below. Please read on to discover interesting facts about working with me and should you have inquiries or concerns contact me in Irvine, California.",
    privacyNotice:
      "THIS NOTICE DESCRIBES HOW MEDICAL INFORMATION ABOUT YOU MAY BE USED AND DISCLOSED AND HOW YOU CAN GET ACCESS TO THIS INFORMATION. PLEASE REVIEW IT CAREFULLY.",
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
