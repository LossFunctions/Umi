export interface Project {
  id: string;
  title: string;
  media: {
    src: string;
    type: 'gif' | 'mp4' | 'png';
    alt: string;
  };
  summary: string;
  details: {
    problem: string;
    solution: string;
    time_saved_hours_per_month: number;
    tools_used: string[];
    repo?: string;
  };
}

export const projects: Project[] = [
  {
    id: 'slack-report-bot',
    title: 'Slack Daily Campaign Report',
    media: {
      src: 'https://images.pexels.com/photos/965345/pexels-photo-965345.jpeg?auto=compress&cs=tinysrgb&w=800',
      type: 'png',
      alt: 'Dashboard showing automated Slack reporting system'
    },
    summary: 'Automates pulling spend & play-rate data and pushes a Slack digest.',
    details: {
      problem: 'Manual daily exports took 30 minutes each morning for campaign reports',
      solution: 'Python automation with Google Sheets API integration and Slack webhooks',
      time_saved_hours_per_month: 10,
      tools_used: ['Python', 'Google Sheets API', 'Slack SDK', 'Pandas'],
      repo: 'https://github.com/example/slack-report-bot'
    }
  },
  {
    id: 'email-classifier',
    title: 'Smart Email Classification System',
    media: {
      src: 'https://images.pexels.com/photos/1591062/pexels-photo-1591062.jpeg?auto=compress&cs=tinysrgb&w=800',
      type: 'png',
      alt: 'Email inbox with AI-powered classification labels'
    },
    summary: 'AI-powered system that automatically categorizes and prioritizes incoming emails.',
    details: {
      problem: 'Support team spent 2 hours daily manually sorting and prioritizing emails',
      solution: 'Machine learning model with NLP to classify emails by urgency and category',
      time_saved_hours_per_month: 40,
      tools_used: ['Python', 'scikit-learn', 'NLTK', 'Gmail API', 'FastAPI'],
      repo: 'https://github.com/example/email-classifier'
    }
  },
  {
    id: 'inventory-optimizer',
    title: 'Inventory Demand Predictor',
    media: {
      src: 'https://images.pexels.com/photos/1267338/pexels-photo-1267338.jpeg?auto=compress&cs=tinysrgb&w=800',
      type: 'png',
      alt: 'Warehouse with AI-powered inventory management dashboard'
    },
    summary: 'Predicts inventory needs using ML to prevent stockouts and reduce overstock.',
    details: {
      problem: 'Frequent stockouts and overstock issues causing $50K+ monthly losses',
      solution: 'Time series forecasting model with automated purchase order generation',
      time_saved_hours_per_month: 25,
      tools_used: ['Python', 'TensorFlow', 'PostgreSQL', 'Apache Airflow', 'Streamlit']
    }
  },
  {
    id: 'social-media-scheduler',
    title: 'AI Content Scheduler & Optimizer',
    media: {
      src: 'https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=800',
      type: 'png',
      alt: 'Social media dashboard with automated posting schedule'
    },
    summary: 'Generates, schedules, and optimizes social media content across platforms.',
    details: {
      problem: 'Marketing team spent 15 hours weekly creating and scheduling social content',
      solution: 'GPT-powered content generation with optimal timing analysis and auto-posting',
      time_saved_hours_per_month: 60,
      tools_used: ['OpenAI API', 'Facebook API', 'Twitter API', 'Python', 'MongoDB', 'Celery'],
      repo: 'https://github.com/example/social-scheduler'
    }
  }
];

// Helper function to get project by ID
export const getProjectById = (id: string): Project | undefined => {
  return projects.find(project => project.id === id);
};

// Helper function to get next/previous project
export const getAdjacentProject = (currentId: string, direction: 'next' | 'prev'): Project => {
  const currentIndex = projects.findIndex(project => project.id === currentId);
  
  if (direction === 'next') {
    return projects[(currentIndex + 1) % projects.length];
  } else {
    return projects[currentIndex === 0 ? projects.length - 1 : currentIndex - 1];
  }
};