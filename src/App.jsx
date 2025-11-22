import "./App.css";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "Pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "Pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "Pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "Pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "Pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "Pizzas/prosciutto.jpg",
    soldOut: false,
  },
];
function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
      <div>
        <Card />
      </div>
    </div>
  );
}

export default App;

function Header() {
  return (
    <header className="header">
      <h1>Fast React Pizza Co.</h1>
    </header>
  );
}

function Menu() {
  const pizzas = pizzaData;
  const numPizzas = pizzas.length;
  return (
    <main className="menu">
      <h2 className="menuu">Our menu</h2>

      {numPizzas > 0 ? (
        <>
          <p>
            Authentic Italian cusine. 6 creative dishes to choose from. All from
            our stone oven, all organic, all delicious.
          </p>
          <ul className="pizzas">
            {pizzas.map((pizza) => (
              <Pizza pizzaObj={pizza} key={pizza.name} />
            ))}
          </ul>
        </>
      ) : (
        <p>We're still woeking on our menu. Please come back later: </p>
      )}
    </main>
  );
}

function Footer() {
  const hour = new Date().getHours();
  // console.log(hour);
  const openHour = 1;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;
  return (
    <footer>
      {isOpen ? (
        <Order closeHour={closeHour} openHour={openHour} />
      ) : (
        <p>
          We're happy to welcome you between {openHour} am and {closeHour} pm
        </p>
      )}
    </footer>
  );
}

function Pizza({ pizzaObj }) {
  return (
    <li className={`pizza ${pizzaObj.soldOut ? "sold-out" : ""}`}>
      <img src={pizzaObj.photoName} alt={pizzaObj.name} />
      <div>
        <h2>{pizzaObj.name}</h2>
        <p>{pizzaObj.ingredients}</p>
        <span>{pizzaObj.soldOut ? "Sold Out" : pizzaObj.price}</span>
      </div>
    </li>
  );
}

function Order({ closeHour, openHour }) {
  return (
    <>
      <div className="order">
        <p>
          We'r open from {openHour}:15 to {closeHour}:15 Come visit us or order
          online
        </p>
        <button className="btn">Order</button>
      </div>
    </>
  );
}

const Skillss = [
  { skill: " HTML+CSS", level: "advanced", emoji: "💪", color: "#2662EA" },
  { skill: " Java-script", level: "advanced", emoji: "💪", color: "#EAD41C" },
  {
    skill: " Web Design",
    level: "intermediate",
    emoji: "🤞",
    color: "#E37E2D",
  },
  {
    skill: " Git and GitHub",
    level: "intermediate",
    emoji: "🤞",
    color: "#E94E31",
  },
  { skill: " React", level: "advanced", emoji: "💪", color: "#61DBFB" },
  { skill: "Nodejs", level: "beginner", emoji: "👶", color: "#3C873A" },
];
function Card() {
  return (
    <>
      <div className="flex justify-center">
        <div className="w-100 border-2">
          <Avatar />
          <div className="data">
            <Intro />

            <SkillList />
          </div>
        </div>
      </div>
    </>
  );
}

function Avatar() {
  return (
    <>
      <img
        className="avatar w-100 h-50 object-cover"
        src="Pizzas/zia.png"
        alt="Zia"
      />
    </>
  );
}

function Intro() {
  return (
    <div className="gap-4">
      <h1 className="m-1 p-2">Zia Ur Rehman</h1>
      <p className="p-1">
        Full-stack web developer and teacher at Udemy. When not coding or
        preparing a course, I like o play board games, to cool (and eat), or to
        just enjoy the Portuguese sun at the beach
      </p>
    </div>
  );
}

function SkillList() {
  return (
    <div className="skill-list m-2 ">
      {Skillss.map((skill) => (
        <Skills
          className="skill-item p-1 m-1"
          skill={skill.skill}
          emoji={skill.emoji}
          color={skill.color}
          level={skill.level}
          key={skill.skill}
        />
      ))}
    </div>
  );
}

function Skills({ skill, level, color }) {
  return (
    <div
      className="skills inline-block m-1 p-1 rounded-lg"
      style={{ background: color }}
    >
      <span>{skill}</span>
      {/* <span> {skillObj.level} </span> */}
      <span>
        {level === "beginner" && "👶"}
        {level === "intermediate" && "🤞"}
        {level === "advanced" && "💪"}
      </span>
      {/* <span> {skillObj.color}</span> */}
    </div>
  );
}
