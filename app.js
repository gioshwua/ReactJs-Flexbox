function MainPage() {
  return (
    <div>
      <Header />
      <MainContent />
    </div>
  );
}

function Header() {
  return (
    <div className="Header">
      <h1>CSS Responsive</h1>
      <h1>Flexbox Cards</h1>
    </div>
  );
}
function MainContent() {
  return (
    <div className="MainContent">
      <div className="React">
        <h1>REACT</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, illum
          aspernatur iusto, architecto corrupti est ipsa obcaecati officia earum
        </p>
        <button>
          <a href="">READ MORE</a>
        </button>
      </div>

      <div className="VUE">
        <h1>VUE</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, illum
          aspernatur iusto, architecto corrupti est ipsa obcaecati officia earum
        </p>
        <button>
          <a href="">READ MORE</a>
        </button>
      </div>

      <div className="Angular">
        <h1> ANGULAR</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, illum
          aspernatur iusto, architecto corrupti est ipsa obcaecati officia earum
        </p>
        <button>
          <a href="">READ MORE</a>
        </button>
      </div>

      <div className="jQuery">
        <h1>jQuery</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, illum
          aspernatur iusto, architecto corrupti est ipsa obcaecati officia earum
        </p>
        <button>
          <a href="">READ MORE</a>
        </button>
      </div>
    </div>
  );
}

ReactDOM.render(<MainPage />, document.querySelector("#root"));
