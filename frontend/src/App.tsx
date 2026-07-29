import { Route, Routes } from "react-router";
import "./App.css";
import Resource from "./components/Resource.tsx";
import ResourceDetail from "./components/ResourceDetail.tsx";
import Category from "./components/Category.tsx";
import ResourceForm from "./components/ResourceForm.tsx";
import CategoryForm from "./components/CategoryForm.tsx";

function App() {
  return (
    <div className="app-shell">
      <Routes>
        <Route path="/" element={<Resource />} />
        <Route path="ressources" element={<Resource />} />
        <Route path="ressource/form" element={<ResourceForm />} />
        <Route path="ressources/:id" element={<ResourceDetail />} />
        <Route path="categorie" element={<Category />} />
        <Route path="categorie/form" element={<CategoryForm />} />
      </Routes>
    </div>
  );
}

export default App;
