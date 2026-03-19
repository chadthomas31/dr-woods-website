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
    { label: "About Me", href: "/about" },
    { label: "My Services", href: "/services" },
    { label: "Policies and Procedures", href: "/policies" },
    { label: "Contact Me", href: "/contact" },
  ],
  hero: {
    headline: "Enriching Lives",
    description:
      "Experience personalized psychiatric care that comes to you. Dr. Woods brings decades of expertise directly to your home, office, or preferred location.",
  },
  homeAbout: {
    label: "About Me",
    title: "Receive The Highest Quality Of Care Right In Your Home",
    text: "Dr. Woods provides the highest quality comprehensive psychiatric evaluations and medication management right in the comfort of your own home, making it easy to receive the quality of care you and your family deserve. With over 25 years of clinical experience and a deeply personal understanding of healthcare, Dr. Woods brings exceptional psychiatric care directly to you.",
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
      name: "Psychiatric Diagnostic Evaluation",
      description:
        "Includes face to face meeting with patient, also gathering additional information from family, friends, the referral source and careful review of any medical records. Duration: 90 minute interview. Blood tests or other medical tests may be ordered. Usually a working diagnosis is established followed by some initial lab tests and an interim treatment plan may be proposed. A report will be sent to the referencing entity.",
      duration: "90 minutes",
      hasBookButton: true,
    },
    {
      name: "Individual Psychotherapy",
      description:
        "I am trained in a variety of psychotherapies including psychodynamic, cognitive behavioral psychotherapy, supportive therapy, mindfulness and relaxation, and the array of PTSD therapies. Therapy sessions generally are 50 minutes.",
      duration: "45-50 minutes",
    },
    {
      name: "Medication Management",
      description:
        "I may prescribe and monitor psychotropic medications for my patients. This is determined best during the Psychiatric Diagnostic Evaluation. I will discuss the risks, benefits, side effects, and if a medication is best for you. Appointments generally are 30 minutes. Once a dosing schedule has been finalized, more routine Medication Management is needed, and each appointment is approximately 30 minutes.",
      duration: "25 minutes",
    },
    {
      name: "Case Management",
      description:
        "I oversee the responsibilities of treatment plan where a multi-disciplinary team of professionals are working with the patient. This is typically required in settings of an involuntary nature involving court orders. Another may require placement in a residential or long-term care facility. I work with each of the team members to predict how much time is required for this service.",
      duration: "Varies",
    },
    {
      name: "Competency Evaluations",
      description:
        "In probate and criminal matters, a psychiatrist or psychologist may be asked by courts to make informed decisions regarding healthcare and financial issues involving the individual. These evaluations are set from 45-50 minutes.",
      duration: "45-50 minutes",
    },
    {
      name: "Other Treatments",
      description:
        "I also have training in various additional treatment modalities including EMDR, hypnotherapy, electroconvulsive therapy (ECT), brain stimulation, neurofeedback, and refer to some trained specialists for ketamine infusion or treatment-resistant depression.",
    },
    {
      name: "Family/Group Therapies",
      description:
        "Family and group psychotherapies are probably the most powerful of all therapy types. I am trained in both modalities and also have several excellent referral sources in the Orange County Area.",
      hasBookButton: true,
    },
    {
      name: "Telepsychiatry",
      description:
        "I currently offer telepsychiatry sessions using Apple's FaceTime as well as the Zoom platform. With FaceTime the patient must have access to an iPhone, iPad, Mac Laptop, or Mac computer. Zoom works on all Apple and Android devices as well as on PC's. Using this technology allows me to communicate face to face but remotely.",
      hasBookButton: true,
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
      label: "About Us",
      title: "Receive The Highest Quality Of Care Right In Your Home",
      paragraphs: [
        "Your mental health is just as important as your physical health; therefore, you must not settle for less. With a concierge psychiatrist such as Robert Woods MD, you can receive the highest quality of personalized care right in the comfort of your own home.",
        "I travel to my patients' homes, schools, places of work, or anywhere they so desire, to help diagnose and treat various psychiatric conditions, including, but not limited to:",
      ],
    },
    sections: [
      {
        title: "A Journey Of Passion",
        content: "Being a native of Orange County, I believe my path in life is best described as a journey that has led me to where I am today. From an early age, I was consumed with a passion for performing arts, specifically ballet, and this ultimately led me to a professional career in dance before transitioning to medicine. After years of performing and teaching, I pursued my passion for helping others through psychiatry, combining my understanding of the human experience with clinical expertise. My journey through a stage IV cancer diagnosis and recovery further deepened my commitment to personalized, compassionate care.",
      },
      {
        title: "Dance Career",
        content: "Dr. Woods had a distinguished career as a professional ballet dancer, performing with companies across the United States and Europe, including the Zurich Opera Ballet in Switzerland. His artistic background gives him a unique perspective on the mind-body connection and the importance of creative expression in mental health.",
      },
      {
        title: "ComputerBooks",
        content: "Before entering medicine, Dr. Woods co-founded a successful software company and authored several computer books, demonstrating his versatility and entrepreneurial spirit.",
      },
      {
        title: "Accolades and Testimonials",
        content: "Dr. Woods has received recognition for his dedication to patient care and his innovative approach to concierge psychiatry. His patients consistently praise his personalized approach, accessibility, and genuine commitment to their well-being.",
      },
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
