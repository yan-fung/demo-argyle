import "../styles/newsletterSignup.scss";

const NewsletterSignup = () => {
 
  return (
    <div className="subscription-container">
      <div> Stay up-to-date with</div>
      <p>
        News, updates, promos, and exclusives from{" "}
        <span className="noted">Argyle.</span>
      </p>

      <div className="subscription-form">
        {!alert.isSuccess && (
          <form className="form">
            <label className="label">
              <input
                className="input"
                type="email"
                placeholder="Enter your email"
              />
            </label>
            <button className="button" type="submit">
              Subscribe
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default NewsletterSignup;
