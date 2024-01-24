import "../styles/reviews.scss";

const Reviews = () => {

  return (
    <div className="review-content" data-testid="review__content">
      <div className="item">
        <div className="review-cards-container">
          <div className="title-date-container">
            <div className="title">Excellent</div>
            <div className="date">01/12/2023</div>
          </div>
          <div className="rating-name-container">
           <div className="rating" data-testid="review_rating">
             ★★★★☆
           </div>
          <div className="name">Anonymous</div>
          </div>
          <p className="body">The classes are very well prepared and organised. All the teachers are very friendly and knowledgeable. All topics are broken down into small pieces and taught step-by-step.</p>
        </div>
      </div>
      <div className="item">
        <div className="review-cards-container">
          <div className="title-date-container">
            <div className="title">Amazing platform</div>
            <div className="date">01/12/2023</div>
          </div>
          <div className="rating-name-container">
           <div className="rating" data-testid="review_rating">
             ★★★★★
           </div>
          <div className="name">Anonymous</div>
          </div>
          <p className="body">The online learning platform provides educational resources and tools for remote learning. It enables users to access courses, lectures, and educational content from anywhere with an internet connection.</p>
        </div>
      </div>
      <div className="item">
        <div className="review-cards-container">
          <div className="title-date-container">
            <div className="title">Highly recommended</div>
            <div className="date">01/12/2023</div>
          </div>
          <div className="rating-name-container">
           <div className="rating" data-testid="review_rating">
             ★★★★★
           </div>
          <div className="name">Anonymous</div>
          </div>
          <p className="body">The online learning platform provides educational resources and tools for remote learning. It enables users to access courses, lectures, and educational content from anywhere with an internet connection.</p>
        </div>
      </div>
    </div>
  );
};

export default Reviews;