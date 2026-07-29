import { useForm } from "react-hook-form";
import type { ResourceProps } from "./Resource";
import { useEffect, useState } from "react";
import type { Category } from "./Category";
import { createResource, loadCategories } from "../Api";
import { Link, useNavigate } from "react-router";

export type ResourceFormData = Omit<ResourceProps, "id" | "createdAt" | "category"> & {
  categoryId: string;
};

export default function ResourceForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ResourceFormData>();

  const [categoryList, setCategoryList] = useState<Category[]>([]);


  useEffect(() => {
    loadCategories().then((data) => setCategoryList(data));
  }, []);


  const navigate = useNavigate();

  return (
    <>
      <Link to="/" className="nav-btn">← Retour à l'accueil</Link>
      <form
        className="form-card"
        onSubmit={handleSubmit((data) => {
          createResource(data)
            .then(() => navigate("/ressources"));
          return data
        })}
      >
        <h1 className="page-title">Ajouter une ressource</h1>
        <div className="field-group">
          <label>Titre de la ressource</label>
          <input
            {...register("title", { required: true, maxLength: 50 })}
            placeholder="Titre"
          />
          {errors.title && <span>Ce champ est requis</span>}
        </div>
        <div className="field-group">
          <label>Description</label>
          <textarea
            {...register("description", { required: true, maxLength: 500 })}
            placeholder="Description"
          />
          {errors.description && <span>Ce champ est requis</span>}
        </div>
        <div className="field-group">
          <label>Lien URL</label>
          <input {...register("url")} placeholder="Lien url" />
        </div>

        <div className="field-group">
          <label>Type</label>
          <select id="type" {...register("type", { required: true })}>
            <option value="">Choisir un type</option>
            <option value="ARTICLE">Article</option>
            <option value="VIDEO">Vidéo</option>
            <option value="DOCUMENTATION">Documentation</option>
            <option value="COURSE">Cours</option>
            <option value="OTHER">Autre</option>
          </select>
          {errors.type && <span>Ce champ est requis</span>}
        </div>
        <div className="field-group">
          <label>Statut</label>
          <select id="status" {...register("status", { required: true })}>
            <option value="">Choisir un statut</option>
            <option value="TODO">A faire</option>
            <option value="IN_PROGRESS">En cours</option>
            <option value="DONE">Terminé</option>
          </select>
          {errors.status && <span>Ce champ est requis</span>}
        </div>
        <div className="field-group">
          <label>Catégorie</label>
          <select id="category" {...register("categoryId", { required: true })}>
            <option value="">Choisir une catégorie</option>
            {categoryList.map((category) => (
              <option key={category.id} value={category.id}>{category.name}</option>
            ))}
          </select>
          {errors.categoryId && <span>Ce champ est requis</span>}
        </div>

        <button type="submit">Enregistrer</button>
      </form>
    </>
  );
}
