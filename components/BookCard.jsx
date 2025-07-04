import React from 'react';
import { Card, CardMedia, CardContent, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const BookCard = ({ book }) => {
  const navigate = useNavigate();

  return (
    <Card
      sx={{ maxWidth: 250, m: 2, cursor: 'pointer' }}
      onClick={() => navigate(`/book/${book.id}`)}
    >
      <CardMedia
        component="img"
        height="200"
        image={book.image}
        alt={book.title}
      />
      <CardContent>
        <Typography variant="h6">{book.title}</Typography>
        <Typography variant="body2" color="text.secondary">{book.author}</Typography>
        <Typography variant="subtitle1" color="primary">₹{book.price}</Typography>
      </CardContent>
    </Card>
  );
};

export default BookCard;
