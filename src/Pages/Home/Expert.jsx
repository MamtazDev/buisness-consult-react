const mentors = [
  {
    name: 'Salehdin Ahdam',
    designation: 'Head of Power MTI',
    image: 'https://i.postimg.cc/fLRwL9vJ/mentor-1.png',
  },
  {
    name: 'Muhadi Ahmat',
    designation: 'Senior Client Partner',
    image: 'https://i.postimg.cc/6qDwY1xv/mentor-2.png',
  },
  {
    name: 'Jessica Angel',
    designation: 'Director ACT',
    image: 'https://i.postimg.cc/RZx4t8Rr/mentor-3.png',
  },
];

const Expert = () => {
  return (
    <div className="expert__section">
      <div className="container">
        <div className="expert__area">
          <h3 className="expert-title wow fadeInUp" data-wow-duration="1.05s" data-wow-delay="250ms">
            Our mentors are <br className="d-block d-lg-none" />
            <br className="d-none d-lg-block" />
            experts in different fields.
          </h3>

          {/* Slick Slider Using */}
          <div className="expert-slider-class">
            {mentors.map((mentor, index) => (
              <div className="wow fadeInUp" data-wow-duration="1.05s" data-wow-delay={`${300 + index * 50}ms`} key={index}>
                <img className="img-fluid" src={mentor.image} alt={mentor.name} />
                <h4 className="mentor-name">{mentor.name}</h4>
                <p className="mentor-designation">{mentor.designation}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Expert;
