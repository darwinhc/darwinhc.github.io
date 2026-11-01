/** Short form of the CV, used on the home page. HTML is allowed for emphasis. */
export const experience = [
  {
    years: '2025 — 2026',
    title: 'Senior Backend Engineer',
    company: 'BairesDev',
    context: 'Remote, for a US healthcare communication platform',
    highlights: [
      'Sent <strong>10,000+ personalised notifications a day</strong> through an event-driven architecture on SNS, SQS, EventBridge and SES.',
      'Built Python / FastAPI microservices and ETL pipelines on AWS ECS and Lambda, with idempotency, dead-letter handling and automated retries.',
      'Kept automated test coverage above 80% with Pytest, SonarQube and CI/CD.',
    ],
  },
  {
    years: '2022 — 2025',
    title: 'Backend Engineer',
    company: 'SETI',
    context: 'Enterprise integration platform for a 40,000-employee retailer, plus banking clients',
    highlights: [
      'Created a reusable Spring Boot migration framework that <strong>cut development and testing effort by about 80%</strong> for a five-person team.',
      'Supported <strong>50+ ETL and integration processes</strong>, ten of them business-critical.',
      'Automated the conversion of 100+ legacy reporting tables, saving about five hours per screen, and moved a legacy Python platform to cloud-native services.',
    ],
  },
  {
    years: '2021 — 2022',
    title: 'Backend Engineer',
    company: 'AI messaging SaaS',
    context: 'Messaging platform for enterprise clients',
    highlights: [
      'Led the architecture and backend: Python APIs and AWS serverless services with hexagonal, framework-independent components.',
      'Integrated an AI-powered workflow with the customer helpdesk and event-driven messaging over SNS, SQS and webhooks.',
      '<strong>Lowered AWS operating cost by about 25%</strong> with a serverless-first design.',
    ],
  },
  {
    years: '2020 — 2021',
    title: 'Python Developer',
    company: 'Freelance',
    context: 'Marketing automation and AI analytics',
    highlights: [
      'Built CNN models for facial and voice emotion detection, REST APIs, ETL pipelines and scrapers, with React (Next.js) front ends.',
    ],
  },
];

export const certificationsLine =
  'AWS Certified Cloud Practitioner · HiveMQ Certified MQTT Associate · B.Sc. Systems and Computer Engineering, National University of Colombia · English (C2), Spanish (native), German (A2)';
