import { useEffect, useState } from "react"
import { loadCategories } from "../Api";

export interface Category {
    id: string,
    name: string,
    description: string
}

export default function CategoryList(){

    const [categoryList, setCategoryList] = useState<Category[]>([]);

    useEffect(()=> {
        loadCategories()
        .then((data) => setCategoryList(data))
    },[])
    return (
        <>
        <ul>
            {categoryList.map((category)=>(
                <li key={category.id}>
                    <h2>{category.name}</h2>
                    <p>{category.description}</p>
                </li>
            ))}
        </ul>

        </>
    )
}