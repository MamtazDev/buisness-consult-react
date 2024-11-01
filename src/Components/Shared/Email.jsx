import { Link } from 'react-router-dom'; 

const Email = () => {
  return (
    <div className="email__section">
      <div className="container">
        <div className="email__area">
          <h2 className="email-title wow fadeInUp" data-wow-duration="1.05s" data-wow-delay="250ms">
            Ready to change <br className="d-block d-lg-none" /> your business route
          </h2>

          <p className="email-text wow fadeInUp" data-wow-duration="1.05s" data-wow-delay="300ms">
            Contact with us now and get the all efficient
            <br className="d-block d-lg-none" />
            {`service on your door let's`}
            <br className="d-none d-lg-block" />
            have a chat. Shall we?
          </p>

          <form className="email_field wow fadeInUp" data-wow-duration="1.05s" data-wow-delay="350ms">
            <input required type="email" className="form-control" placeholder="Your email here" />
           <Link to="/"> <button className="btn btn-success get-started" type="submit">
                Get Started
              </button></Link>
          
          </form>
        </div>
      </div>
    </div>
  );
};

export default Email;
