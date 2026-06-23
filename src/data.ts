import { Treatment, Testimonial, ChooseCard } from "./types";

export const TREATMENTS: Treatment[] = [
  {
    id: "stroke",
    name: "Stroke",
    title: "Stroke & Cerebrovascular Care",
    description: "Acute cerebrovascular condition requiring rapid diagnostic profiling and medical intervention to restore blood flow and preserve neurological function.",
    image: "https://www.covenanthealth.com/wp-content/uploads/2024/05/Stroke-Care-iStock-1927703857.jpg",
    symptoms: ["Sudden weakness in face or limbs", "Slurred or distorted speech", "Loss of balance or coordination"],
    careApproach: "Thromboembolic guidelines, custom secondary prevention, and continuous neuro-restoration routing."
  },
  {
    id: "epilepsy",
    name: "Epilepsy",
    title: "Epilepsy & Seizure Control",
    description: "Chronic neurological disorder characterized by recurrent unprovoked seizures, managed via advanced clinical EEG mapping and personalized pharmaceutical care.",
    image: "https://oxfordneurologyservices.co.uk/wp-content/uploads/2023/06/neuro2.jpg",
    symptoms: ["Temporary blank staring or aura", "Uncontrolled muscle jerking", "Sudden transient loss of consciousness"],
    careApproach: "High-precision pharmacotherapy selection, clinical seizure charting, and lifestyle support."
  },
  {
    id: "migraine",
    name: "Migraine",
    title: "Chronic Migraine & Headaches",
    description: "Sustained sensory and throbbing headache disorder treated through advanced target blocking, preventative agents, and specialized trigger therapy.",
    image: "https://tse1.mm.bing.net/th/id/OIP.cgFR0d02jxE4r7F-qpdYdgHaLG?pid=ImgDet&w=202&h=303&c=7&dpr=1.3&o=7&rm=3",
    symptoms: ["Severe unilateral throbbing pain", "Heightened light and sound sensitivity", "Visual aura flashes or blind spots"],
    careApproach: "Modern preventative CGRP inhibitors, acute rescue mapping, and dietary trigger management."
  },
  {
    id: "parkinsons",
    name: "Parkinson's Disease",
    title: "Parkinson's & Movement Disorders",
    description: "Progressive central nervous system pathology affecting motor control, sluggishness, and gait stability, managed through customized dopamine regulators.",
    image: "https://tse2.mm.bing.net/th/id/OIP.JxayfmIQF-nbbv8-fBusVwHaE9?w=2000&h=1339&rs=1&pid=ImgDetMain&o=7&rm=3",
    symptoms: ["Unilateral resting tremors", "Bradykinesia and rigid limbs", "Posture instability while walking"],
    careApproach: "Dopaminergic medication titration, tailored motor therapies, and disease progression tracking."
  },
  {
    id: "dementia",
    name: "Dementia",
    title: "Dementia & Cognitive Memory Care",
    description: "Decline of cognitive abilities and functional memory including Alzheimer's, slowed through structured neuropsychological coaching and therapy.",
    image: "https://media.istockphoto.com/id/1404531599/photo/worried-millennial-compassionate-woman-supporting-stressed-mother.jpg?s=170667a&w=0&k=20&c=5tYAaxavj8d4wsaJDLwg78NkgdAwDwjme6LHcARmCbU=",
    symptoms: ["Progressive memory loss affecting tasks", "Spatial disorientation or confusion", "Difficulty solving daily problems"],
    careApproach: "Comprehensive vascular cognitive support, targeted medication schemes, and active caregiver coaching."
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "t1",
    name: "Amit Kumar",
    city: "Patna",
    rating: 5,
    text: "Dr. Nitish Kumar provided excellent diagnosis and treatment. His approach was highly meticulous, helping me fully recover from my nerve compression issues. He listens with absolute patience and treats with precision.",
    initials: "AK"
  },
  {
    id: "t2",
    name: "Priya Shrivastava",
    city: "Muzaffarpur",
    rating: 5,
    text: "Our family is incredibly grateful to Dr Nitish. He accurately diagnosed my mother's early-stage Parkinson's. His care plan was deeply evidence-based, explaining the timeline and medications with total clarity.",
    initials: "PS"
  },
  {
    id: "t3",
    name: "Rajesh Verma",
    city: "Patna",
    rating: 5,
    text: "My chronic migraine had been unresolved for five years. Under Dr. Nitish Kumar's targeted treatment and CGRP protocol, the frequency of my headaches has dropped by 80%. He is a top-tier neurology specialist in Bihar.",
    initials: "RV"
  },
  {
    id: "t4",
    name: "Dr. S. K. Sinha",
    city: "Gaya",
    rating: 5,
    text: "As a practicing physician, I only trust Dr. Nitish Kumar with my complex neuro patients. His NIMHANS Bangalore background combined with over two decades of experience ensures clinical excellence and elite diagnostics.",
    initials: "SS"
  }
];

export const CHOOSE_CARDS: ChooseCard[] = [
  {
    id: "c1",
    number: "01",
    title: "NIMHANS-Trained Specialist",
    description: "Formally trained at the National Institute of Mental Health and Neurosciences (Bangalore), India's premier apex brain institute, ensuring world-class clinical expertise."
  },
  {
    id: "c2",
    number: "02",
    title: "20+ Years Clinical Practice",
    description: "Two decades of experience diagnosing complex central, peripheral, autonomic, and spinal neurological conditions with extreme clinical precision."
  },
  {
    id: "c3",
    number: "03",
    title: "Evidence-Based Protocols",
    description: "Treatments are carefully aligned with international medical standards and research-backed therapeutics — avoiding excessive medicine."
  },
  {
    id: "c4",
    number: "04",
    title: "Trusted by 100K+ Patients",
    description: "A patient-centric legacy built on empathy, extensive diagnosis reviews, high-efficacy outcomes, and dedication to long-term neurovascular health."
  }
];
