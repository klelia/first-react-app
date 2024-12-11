import HeaderComponent from "./components/HeaderComponent.jsx";
import pizzas from "./data/menu.js";

/**
 * The main App component.
 *
 * Renders the header, main content, and footer.
 *
 * The main content is divided into two sections:
 * - Pizze con mozzarella
 * - Pizze senza mozzarella
 *
 * Uses the `renderPizzasMozzarella` and `renderPizzasWithoutMozzarella` functions
 * to generate the list of pizzas for each section.
 */
function App() {
  //parte logica
  //const names = ["Adriano", "Luca", "Sofia", "Filippo"];
  // const person = {
  //   name: "Adriano",
  //   age: 32,
  // };

  function renderPizzasMozzarella() {
    let pizzeMozzarella = pizzas
      .filter((pizza) => pizza.ingredients.includes("mozzarella"))
      .map((pizza) => <li key={pizza.id}>{pizza.name}</li>);

    return pizzeMozzarella;
  }

  function renderPizzasWithoutMozzarella() {
    let pizzeMozzarella = pizzas
      .filter((pizza) => !pizza.ingredients.includes("mozzarella"))
      .map((pizza) => <li key={pizza.id}>{pizza.name}</li>);

    return pizzeMozzarella;
  }
  // parte html
  return (
    <>
      <HeaderComponent />
      <main className="container">
        <h2>Pizze con mozzarella</h2>
        <ul>{renderPizzasMozzarella()}</ul>
        <h2>Pizze senza mozzarella</h2>
        <ul>{renderPizzasWithoutMozzarella()}</ul>
      </main>
      <footer>sono il footer</footer>
    </>
  );
}

export default App;

// > **Esercizio**
// >
// >
// > Mostriamo in due liste diverse gli elementi dell’array *tasks*. Nella prima lista mostriamo solo i task (title, priority e estimatedTime) che hanno stato “backlog” o “in_progress”. Nella seconda lista mostriamo i task che hanno stato “completed”.
// > Infine riprodurre il layout lasciato in allegato.
// >
// > **BONUS**
// >
// > Mostrare lo stato di ogni task in un piccolo tag di fianco al titolo, associando però ad ogni stato un colore diverso.
// >
