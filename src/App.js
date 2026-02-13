import ProductCard from "./components/ProductCard";

function App() {
  return (
    <div style={styles.container}>
      <ProductCard
        name="Wireless Headphones"
        price={129.99}
        status="In Stock"
      />

      <ProductCard
        name="Mechanical Keyboard"
        price={89.99}
        status="Out of Stock"
      />

      <ProductCard
        name="Smart Watch"
        price={199.99}
        status="In Stock"
      />
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    gap: "30px",
    padding: "40px",
    justifyContent: "center",
    background: "#f4f7fb",
    minHeight: "100vh",
  },
};

export default App;
