import { saveArticle } from './newsStorage';

const demoArticles = [
  {
    id: '1',
    title: 'Breaking News: Local Hero Saves Day',
    content: 'In a remarkable turn of events, a local hero stepped in to save the day when a crisis struck in downtown.'
  },
  {
    id: '2',
    title: 'Tech Trends: The Rise of AI in Everyday Life',
    content: 'Artificial Intelligence (AI) is becoming increasingly prevalent in our daily lives, from smart home devices to advanced data analytics.'
  },
  {
    id: '3',
    title: 'Health Watch: Tips for a Balanced Diet',
    content: 'Maintaining a balanced diet is crucial for good health. Here are some tips to ensure you are getting the right nutrients.'
  }
];

// Function to seed demo articles into localStorage
export function seedDemoArticles() {
  demoArticles.forEach(article => saveArticle(article));
  console.log('Demo articles seeded into localStorage');
}

// Call the function to seed demo articles
seedDemoArticles();