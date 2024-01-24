import NewsletterSignup from "./NewsletterSignup";
import Reviews from "./Reviews";
import "../styles/app.scss";


const App = () => {
  return (
    <>
      <div className="App">
        <NewsletterSignup />
        <Reviews />
      </div>
    </>
  );
};

export default App;