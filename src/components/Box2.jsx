import "../styles/box2.css";

const Box2 = () => {
  return (
    <div className="B2">
      <h1 className="textB2">
        LARGE STATISTICS OF CLIENTS AND INDICATORS AS A SIGN OF OUR
        PROFESSIONALISM
      </h1>
      <div className="data">
        <div className="data1">
          <div className="D1">
            <p className="para">Accounts boosted</p>
            <p className="num">3,834 +</p>
          </div>
          <div className="D2"></div>
          <div className="D3"></div>
        </div>
        <div className="data2">
          <div className="D4"></div>
          <div className="D5"></div>
          <div className="D6">
            <p className="para1">data analysed</p>
            <p className="num1">11,210 +</p>
          </div>
        </div>
      </div>
      <div className="statistic">
        <img src="follow.svg" alt="" className="follow" />
        {/* <img src="Piechart.svg" alt="" className="piechart" /> */}

        <div className="profit">
          <h1 className="control">control profit and audience</h1>
          <p className="desc">
            using our platform, you can be sure that only artificial
            intelligence will help you, but ALSO REAL PROFESSIONALS WHO HAVE
            BEEN DOING FOR MANY YEARS.
          </p>
        </div>
        <div className="graph2">
          <img src="ticks.svg" alt="" className="ticks" />
        </div>
      </div>
    </div>
  );
};

export default Box2;
