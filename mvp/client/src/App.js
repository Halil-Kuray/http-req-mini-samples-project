import React, {useState, useEffect} from 'react'
import Form from "./components/Form";
import Table from "./components/Table";

function App() {
  const [items, setItems] = useState([]);

  const handleSubmit = name => {
    fetch("/api/items", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name
      })
    })
      .then(res => res.json())
      .then(item => {
        setItems([item, ...items]);
      });
  };

  useEffect(() => {
    fetch("/api/items")
      .then(res => res.json())
      .then(items => setItems(items));
  }, []);

  return (
    <div className="App">
      <h1>Registration System</h1>
      <Form onSubmit={handleSubmit} />
      <Table items={items} />
    </div>
  );
}

export default App;
