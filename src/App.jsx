import { useState, useEffect } from "react";
import axios from "axios";

const App = () => {
  const [message, setMessage] = useState("");

  useEffect(() => {
    axios
      // .get("http://localhost:3000/")
      .get("https://customizable-forms-ab996e6d17b2.herokuapp.com/")
      .then((response) => setMessage(response.data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center">
      <h1 className="text-lg">
        <span className="text-2xl  font-bold">Message from server:</span> <br />
        {message}
      </h1>
    </div>
  );
};

export default App;
