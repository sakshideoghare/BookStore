import React from 'react';
import { Card, CardContent, CardMedia, Typography, Button, Grid } from '@mui/material';
import './Books.css';
import Atomichabit from '../assets/Atomichabit.jpeg';
import Bigmagic from '../assets/Bigmagic.jpg';
import Whenthunder from '../assets/Whenthunder.jpg';
import Yearofyes from '../assets/Yearofyes.jpg';
import Ikigai from '../assets/Ikigai.jpg';
import Think from '../assets/Think.jpg';
import Alchemist from '../assets/Alchemist.jpg';
import Sepiens from '../assets/Sepiens.jpg';

const books = [
  {
    id: 1,
    title: 'Atomic Habits',
    price: '₹499',
    image: Atomichabit,
  },
  {
    id: 2,
    title: 'Big Magic',
    price: '₹349',
    image: Bigmagic,
  },
  {
    id: 3,
    title: 'When Thunder',
    price: '₹399',
    image: Whenthunder,
  },
  {
    id: 4,
    title: 'Year of Yes',
    price: '₹299',
    image: Yearofyes,
  },
  {
    id: 5,
    title: 'Ikigai',
    price: '₹279',
    image: Ikigai,
  },
  {
    id: 6,
    title: 'Think Like a Monk',
    price: '₹399',
    image: Think,
  },
  {
    id: 7,
    title: 'The Alchemist',
    price: '₹299',
    image: Alchemist,
  },
  {
    id: 8,
    title: 'Sapiens',
    price: '₹499',
    image: Sepiens,
  },
  {
    id: 9,
    title: 'Atomic Habits',
    price: '₹499',
    image: Atomichabit,
  },
  {
    id: 10,
    title: 'Big Magic',
    price: '₹349',
    image: Bigmagic,
  },
  {
    id: 11,
    title: 'When Thunder',
    price: '₹399',
    image: Whenthunder,
  },
  {
    id: 12,
    title: 'Year of Yes',
    price: '₹299',
    image: Yearofyes,
  },
  {
    id: 13,
    title: 'Ikigai',
    price: '₹279',
    image: Ikigai,
  },
  {
    id: 14,
    title: 'Think Like a Monk',
    price: '₹399',
    image: Think,
  },
  {
    id: 15,
    title: 'The Alchemist',
    price: '₹299',
    image: Alchemist,
  },
  {
    id: 16,
    title: 'Sapiens',
    price: '₹499',
    image: Sepiens,
  },
  
];

const Books = () => {
  return (
    <div className="home-page">
      <h2 className="home-heading">📚 Featured Books</h2>
      <Grid container spacing={4} justifyContent="center">
        {books.map((book) => (
         <Grid item xs={12} sm={6} md={3} key={book.id}>
            <Card className="book-card">
              <CardMedia
                component="img"
                image={book.image}
                alt={book.title}
                className="card-image"
              />
              <CardContent className="card-content">
                <Typography variant="h6" className="card-title">{book.title}</Typography>
                <Typography variant="body2" color="text.secondary">{book.price}</Typography>
                <Button variant="contained" color="primary" fullWidth sx={{ mt: 1 }}>
                  Buy Now
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Books;
