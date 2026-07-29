import type { Type } from "../Enum/Type.ts";
import type { Category } from "./Category.tsx";
import type { Status } from "../Enum/Status.ts";

import { useEffect, useState } from "react";
import { loadResources } from "../Api.tsx";
import { Link } from "react-router";

export interface ResourceProps {
  id: string;
  title: string;
  description: string;
  url: string;
  type: Type;
  status: Status;
  createdAt: Date;
  category: Category;
}

export default function Resource() {
  const [resourceList, setResourceList] = useState<ResourceProps[]>([]);
  const [selectedType, setSelectedType] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("");

  useEffect(() => {
    loadResources().then((data) => setResourceList(data));
  }, []);

  const filteredResources = resourceList.filter((resource) => {
    const typeMatch =
      selectedType === "" || resource.type === selectedType;

    const statusMatch =
      selectedStatus === "" || resource.status === selectedStatus;

    return typeMatch && statusMatch;
  });

  return (
    <>
      <h1 className="page-title">Ressources</h1>
      <p className="page-subtitle">Découvrez vos ressources de formation par catégorie et statut.</p>

      <div className="filters">
        <select
          value={selectedType}
          onChange={(e) => setSelectedType(e.target.value)}
        >
          <option value="">Tous les types</option>
          <option value="ARTICLE">Article</option>
          <option value="VIDEO">Vidéo</option>
          <option value="DOCUMENTATION">Documentation</option>
          <option value="COURSE">Cours</option>
          <option value="OTHER">Autre</option>
        </select>

        <select
          value={selectedStatus}
          onChange={(e) => setSelectedStatus(e.target.value)}
        >
          <option value="">Tous les statuts</option>
          <option value="TODO">À faire</option>
          <option value="IN_PROGRESS">En cours</option>
          <option value="DONE">Terminé</option>
        </select>
      </div>

      <ul className="resource-list">
        {filteredResources.map((resource) => (
          <li key={resource.id} className="resource-card">
            <div className="tag-row">
              <span className="fr-tag">{resource.type}</span>
              <span className="fr-tag">{resource.status}</span>
              <span className="fr-tag">{resource.category.name}</span>
            </div>

            <Link to={`/ressources/${resource.id}`}>
              <h2>{resource.title}</h2>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}