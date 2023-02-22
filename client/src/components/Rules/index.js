const Rules = () => {
  return (
    <main className="flex-row justify-center px-3 py-4 p-lg-5">
      <div className="row-12 row-lg-12">
        <div
          id="customLeaderboard"
          className="card m-auto"
          style={{ backgroundColor: "#bebebe" }}
        >
          <h4
            className="card-header  text-light p-2"
            style={{ backgroundColor: "#0e1a40" }}
          >
            Rules
          </h4>
          <div className="card-body">
            <ul>
              <li>Match 2 cards together.</li>
              <li>Time will begin when the first card is selected.</li>
              <li>Lower time = better score.</li>
              <li>Spells can only be used once per game.</li>
            </ul>
          </div>
        </div>
      </div>
    </main>
    //     <div className="card border-secondary mb-3" style="max-width: 18rem;">
    //     <div className="card-header">Rules</div>
    //     <div className="card-body text-secondary">
    //       <h5 className="card-title">Secondary card title</h5>
    //       <p className="card-text"></p>
    //     </div>
    //   </div>
  );
};

export default Rules;
