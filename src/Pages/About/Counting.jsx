import { countingData } from '../../utils/data'; 

const Counting = () => {
  return (
    <div className="counting-section">
      <div className="container">
        <div className="counting-area">
          <div className="row">
            {countingData.map((item, index) => (
              <div className="col-12 col-md-6 col-lg-4" key={index}>
                <div className="count-parent">
                  <div className="img-sec">
                    <img className="img-fluid" src={item.imgSrc} alt={item.altText} />
                  </div>
                  <div className="info-sec">
                    <div className="d-flex align-items-center gap-2">
                      <h2 className="count-number number">{item.number}</h2>
                      {item.unit && <span className="count-number">{item.unit}</span>}
                    </div>
                    <p className="count-text">{item.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Counting;
