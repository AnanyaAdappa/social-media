import "../styles/box2.css";

const Box2 = () => {
  return (
    <div className="B2">
      <h1 className="TextB2">
        LARGE STATISTICS OF CLIENTS AND INDICATORS AS A SIGN OF OUR
        PROFESSIONALISM
      </h1>

      <div className="data">
        <div className="data1">
          <div className="D1">
            <p className="P1">Accounts boosted</p>
            <p className="P2">3,834 +</p>
          </div>
          <div className="D2"></div>
          <div className="D3"></div>
        </div>
        <div className="data2">
          <div className="D4"></div>
          <div className="D5"></div>
          <div className="D6">
            <p className="P3">data analysed</p>
            <p className="P4">11,210 +</p>
          </div>
        </div>
      </div>

      <div className="statistics">
        <img src="graph.svg" alt="" className="graph" />
        <div className="profit">
          <h1 className="ctrlprofit">control profit and audience</h1>

          <p className="description">
            using our platform, you can be sure that only artificial
            intelligence will help you, but ALSO REAL PROFESSIONALS WHO HAVE
            BEEN DOING FOR MANY YEARS.
          </p>
        </div>
        <div className="graph2">
          <img src="ticks.svg" alt="" className="tick" />
        </div>
      </div>
    </div>
  );
};

export default Box2;
