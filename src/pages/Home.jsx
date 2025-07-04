import React from 'react';
import { Card, CardContent, Typography, Button, Grid } from '@mui/material';
import './Home.css';
import Biography from '../assets/Biography.avif';


const categories = [
  {
    id: 1,
    title: 'Fiction',
    description: 'Explore the world of imagination and stories.',
    image: 'https://images.unsplash.com/photo-1551022372-0bdac482b9d6', 
  },
  {
    id: 2,
    title: 'Self-Help',
    description: 'Books to help improve your life and mindset.',
    image: 'https://images.unsplash.com/photo-1544717305-2782549b5136', 
  },
  {
    id: 3,
    title: 'Biography',
    description: 'Inspiring stories of real people and legends.',
    image: Biography, 
  },
  {
    id: 4,
    title: 'Non-Fiction',
    description: 'Learn real facts, history, science, and more.',
    image: 'https://images.unsplash.com/photo-1553729784-e91953dec042', 
  },
];

const Home = () => {
  return (
    <div className="category-home">
      <h2 className="category-heading">📚 Book Categories</h2>
      <Grid container spacing={4} justifyContent="center">
        {categories.map((cat) => (
          <Grid item xs={12} sm={6} md={3} key={cat.id}>
            <Card className="category-card">
              <div className="category-image" style={{ backgroundImage: `url(${cat.image})` }} />
              <CardContent>
                <Typography variant="h6" gutterBottom>{cat.title}</Typography>
                <Typography variant="body2" color="text.secondary">{cat.description}</Typography>
                <Button variant="contained" fullWidth sx={{ mt: 2 }}>
                  Explore
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Home;
