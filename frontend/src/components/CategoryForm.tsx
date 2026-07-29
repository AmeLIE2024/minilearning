import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { createCategory } from "../Api";

type CategoryFormData = {
  name: string;
  description: string;
};

export default function CategoryForm() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CategoryFormData>();

  return (
    <form
      onSubmit={handleSubmit((data) => {
        createCategory(data).then(() => navigate("/categorie"));
      })}
    >
      <label>Nom de la catégorie</label>

      <input
        {...register("name", { required: true })}
        placeholder="Nom"
      />

      {errors.name && <span>Ce champ est requis</span>}

      <label>Description</label>

      <textarea
        {...register("description", { required: true })}
        placeholder="Description"
      />

      {errors.description && <span>Ce champ est requis</span>}

      <button type="submit">Enregistrer</button>
    </form>
  );
}