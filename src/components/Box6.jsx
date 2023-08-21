import "../styles/box6.css";

const Box6 = () => {
  return (
    <div className="box6">
      <img src="user.svg" alt="" className="user" />
      <div className="useranalysis">
        <p className="analysis">
          Our all-in-one social media management platform unlocks the full
          potential of social to transform not just your marketing strategy -
          but every area of your organisation.
        </p>
        <div className="get">
          {/* <img src="gets1.svg" alt="" className="get1" />
          <img src="gets2.svg" alt="" className="get2" /> */}
          <p className="get1">GET STARTED</p>
          <p className="get2">GET STARTED</p>
        </div>
      </div>
      <p className="social">social effective active</p>
    </div>
  );
};

export default Box6;
