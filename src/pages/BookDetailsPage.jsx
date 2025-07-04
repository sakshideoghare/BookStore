import React from 'react';
import { useParams } from 'react-router-dom';
import books from '../data/books';
import { Box, Typography, Grid, CardMedia } from '@mui/material';

const BookDetailsPage = () => {
  const { id } = useParams();
  const book = books.find(b => b.id === id);

  if (!book) {
    return <Typography variant="h6" sx={{ p: 4 }}>Book not found.</Typography>;
  }

  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h4" gutterBottom>{book.title}</Typography>
      <Typography variant="subtitle1" gutterBottom>By {book.author}</Typography>
      <Typography variant="h6" color="primary" gutterBottom>Price: ₹{book.price}</Typography>
      <Typography variant="body1" sx={{ maxWidth: 600, mt: 2 }}>{book.summary}</Typography>

      <Typography variant="h6" sx={{ mt: 4 }}>Images:</Typography>
      <Grid container spacing={2} sx={{ mt: 1 }}>
        {book.images.map((img, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <CardMedia
              component="img"
              image={img}
              alt={`Book image ${index + 1}`}
              sx={{ borderRadius: 2 }}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default BookDetailsPage;
