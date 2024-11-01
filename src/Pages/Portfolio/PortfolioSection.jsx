import { Link } from 'react-router-dom'; 

const PortfolioSection = () => {
  const portfolioItems = [
    {
      img: "https://i.postimg.cc/JzMmF6hC/statistics.png",
      category1: "BUSINESS",
      category2: "CASE STUDY",
      name: "Statistics",
      descriptionClass: "one",
    },
    {
      img: "https://i.postimg.cc/9XZ6jdKm/design.png",
      category1: "EDUCATION",
      category2: "CASE STUDY",
      name: "Design",
      descriptionClass: "two",
    },
    {
      img: "https://i.postimg.cc/X7gtrVnt/solution.png",
      category1: "EDUCATION",
      category2: "CASE STUDY",
      name: "Solution",
      descriptionClass: "three",
    },
    {
      img: "https://i.postimg.cc/1XQYzd29/creativity.png",
      category1: "INNOVATION",
      category2: "CASE STUDY",
      name: "Creativity",
      descriptionClass: "four",
    },
    {
      img: "https://i.postimg.cc/8CfymDVp/brainstorm.png",
      category1: "INNOVATION",
      category2: "CASE STUDY",
      name: "Brainstorm",
      descriptionClass: "five",
    },
    {
      img: "https://i.postimg.cc/j2tZT7n2/analyzing.png",
      category1: "BUSINESS",
      category2: "CASE STUDY",
      name: "Analyzing",
      descriptionClass: "six",
    },
  ];

  return (
    <div className="portfolio-section">
      <div className="container">
        <div className="portfolio-area">
          <div className="row">
            <div className="col-lg-6">
              {portfolioItems.slice(0, 3).map((item, index) => (
                <div className="port-component" key={index}>
                  <div style={{ overflow: "hidden", borderRadius: "40px" }}>
                    <img
                      className="port-img img-fluid w-100"
                      src={item.img}
                      alt="img"
                    />
                  </div>
                  <div className="btn-outline-group">
                    <button type="button" className="btn btn-outline-secondary">
                      {item.category1}
                    </button>
                    <button type="button" className="btn btn-outline-secondary">
                      {item.category2}
                    </button>
                  </div>
                  <div className={`description-area ${item.descriptionClass}`}>
                    <h3 className="component-name">{item.name}</h3>
                      <Link to="/"><i className="fa-solid fa-arrow-right-long icon"></i></Link>
                  </div>
                </div>
              ))}
                   <div className="btn-res">
                <button
                 style={{padding:"18px" ,border:"none",backgroundColor:"#12182b" , color:"#fff" ,borderRadius:"8px"}}
                  type="submit"
                >
                  View More
                  <i className="fa-solid fa-arrow-right-long icon"></i>
                </button>
              </div>
            </div>

            <div className="col-lg-6">
              {portfolioItems.slice(3).map((item, index) => (
                <div className="port-component" key={index + 3}>
                  <div style={{ overflow: "hidden", borderRadius: "40px" }}>
                    <img
                      className="port-img img-fluid w-100"
                      src={item.img}
                      alt="img"
                    />
                  </div>
                  <div className="btn-outline-group">
                    <button type="button" className="btn btn-outline-secondary">
                      {item.category1}
                    </button>
                    <button type="button" className="btn btn-outline-secondary">
                      {item.category2}
                    </button>
                  </div>
                  <div className={`description-area ${item.descriptionClass}`}>
                    <h3 className="component-name">{item.name}</h3>
                    <Link to=""><i className="fa-solid fa-arrow-right-long icon"></i></Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioSection;
