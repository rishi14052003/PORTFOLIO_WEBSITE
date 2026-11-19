export const projects = [
  { 
    id: 1, 
    title: 'Movie Ticket Booking Website', 
    blurb: 'Full-stack platform handling 50+ movies and 100+ users',
    description: 'Engineered a full-stack booking platform handling 50+ movie listings and 100+ user accounts with MongoDB backend. Implemented RESTful APIs that improved query response times by 30%, enhancing database efficiency. Delivered a responsive UI that improved user interaction speed by 25%, increasing session duration and engagement.',
    outcomes: [
      { value: '50+', label: 'movie listings' },
      { value: '100+', label: 'user accounts' },
      { value: '30%', label: 'faster API response' },
      { value: '25%', label: 'faster UI interactions' }
    ],
    link: 'https://github.com/rishi14052003/ShowTimeBooker',
    tags: ['React', 'Node.js', 'MongoDB', 'REST API']
  },
  { 
    id: 2, 
    title: 'Sentiment Analysis using NLP', 
    blurb: 'NLP classifier with 83.2% accuracy on 10,000+ reviews',
    description: 'Designed and trained a Naive Bayes classifier on 10,000+ labeled reviews, achieving 83.2% accuracy. Optimized preprocessing (tokenization, vectorization, feature scaling), boosting accuracy by 7% compared to baseline. Deployed a real-time text classifier capable of processing 100+ live inputs per second, enabling practical customer feedback analysis.',
    outcomes: [
      { value: '83.2%', label: 'classification accuracy' },
      { value: '10,000+', label: 'labeled reviews' },
      { value: '100+', label: 'live inputs per second' },
      { value: '+7%', label: 'accuracy over baseline' }
    ],
    link: 'https://github.com/rishi14052003/sentiment-analysis',
    tags: ['Python', 'NLP', 'Machine Learning', 'scikit-learn']
  },
  { 
    id: 3, 
    title: 'Random Image Generator using AI/ML', 
    blurb: 'Generative AI model for creative image synthesis',
    description: 'Built a generative model capable of creating 1,000+ unique images from random seeds and text prompts. Reduced design workload by 80% faster image prototyping for creative applications in gaming.',
    outcomes: [
      { value: '1,000+', label: 'unique generated images' },
      { value: '80%', label: 'faster image prototyping' }
    ],
    link: 'https://github.com/rishi14052003/image-generator',
    tags: ['TensorFlow', 'GANs', 'Python', 'Deep Learning']
  }
];
