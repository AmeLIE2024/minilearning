import { useEffect, useState } from "react"
import { loadCategories } from "../Api";

export interface Category {
    id: string,
    name: string,
    description: string
}

export default function CategoryList() {

    const [categoryList, setCategoryList] = useState<Category[]>([]);

    useEffect(() => {
        loadCategories()
            .then((data) => setCategoryList(data))
    }, [])
    return (
        <>
            <h1 className="page-title">Catégories</h1>
            <p className="page-subtitle">Organisez vos ressources par thème.</p>
            <ul className="resource-list">
                {categoryList.map((category) => (
                    <li key={category.id} className="resource-card">
                        <h2>{category.name}</h2>
                        <p>{category.description}</p>
                    </li>
                ))}
            </ul>

        </>
    )
}