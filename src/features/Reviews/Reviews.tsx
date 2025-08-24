import React from 'react';
import { reviewsList } from './reviewsList';
import './Reviews.scss';


// 🔹 Componente memoizado para cada reseña
const ReviewItem = React.memo(({ review }: { review: typeof reviewsList[number] }) => (
  <article className="review">
    <p className="review-text">“{review.text}”</p>
    <p className="review-name">- {review.name}</p>
    <div className="review-rating">
      {'★'.repeat(review.rating)}
      {'☆'.repeat(5 - review.rating)}
    </div>
  </article>
));

const Reviews = () => {
  return (
    <section className="reviews" id="reviews" aria-label="Customer reviews">
      <h2>Opinión de Clientes</h2>
      <p className="reviews-summary">⭐ 4.8/5 en Google con 19 reseñas</p>
      <div className="reviews-grid">
        {reviewsList.map((review) => (
          <ReviewItem key={review.name} review={review} />
        ))}
      </div>
    </section>
  );
};

export default Reviews;
