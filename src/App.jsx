import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import TemplateList from "./pages/TemplateList";
import FormPage from "./pages/FormPage";
import { Toaster } from "react-hot-toast";
import CreateTemplate from "./pages/CreateTemplate";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/templates" element={<TemplateList />} />
          <Route path="/templates/create" element={<CreateTemplate />} />
          <Route path="/templates/:id" element={<FormPage />} />
        </Routes>
      </Router>

      <Toaster
        position="top-center"
        gutter={12}
        containerStyle={{ margin: "8px" }}
        toastOptions={{
          success: { duration: 300 },
          error: { duration: 5000 },
          style: {
            fontSize: "16px",
            maxWidth: "500px",
            padding: "16px 24px",
            backgroundColor: "var(--color-grey-0)",
            color: "var(--color-grey-700)",
          },
        }}
      />
    </>
  );
}

export default App;
