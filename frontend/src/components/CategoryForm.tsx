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
            className="form-card"
            onSubmit={handleSubmit((data) => {
                createCategory(data).then(() => navigate("/categorie"));
            })}
        >
            <h1 className="page-title">Ajouter une catégorie</h1>
            <div className="field-group">
                <label>Nom de la catégorie</label>

                <input
                    {...register("name", { required: true })}
                    placeholder="Nom"
                />

                {errors.name && <span>Ce champ est requis</span>}
            </div>

            <div className="field-group">
                <label>Description</label>

                <textarea
                    {...register("description", { required: true })}
                    placeholder="Description"
                />

                {errors.description && <span>Ce champ est requis</span>}
            </div>

            <button type="submit">Enregistrer</button>
        </form>
    );
}