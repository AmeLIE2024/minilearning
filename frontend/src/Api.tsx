import type { ResourceProps } from "./components/Resource.tsx";
import type { Category } from "./components/Category.tsx";
import type { ResourceFormData } from "./components/ResourceForm.tsx";

const API_Resources = "http://localhost:8080/api/resources";
const API_Category = "http://localhost:8080/api/categories";

export function loadResources(): Promise<ResourceProps[]> {
  return fetch(API_Resources).then((response) => response.json());
}


export function loadResourceById(id:string): Promise<ResourceProps> {
  return fetch(`${API_Resources}/${id}`).then((response) => response.json());
}

export function loadCategories(): Promise<Category[]> {
  return fetch(API_Category).then((response) => response.json());
}

export function loadCategoryById(id:string): Promise<Category> {
  return fetch(`${API_Category}/${id}`).then((response) => response.json());
}

export function createResource(data: ResourceFormData): Promise<ResourceProps>{
  const { categoryId, ...rest}= data;

  const payload = {
    ...rest,
    category: {id: categoryId}
  }

  return fetch(API_Resources,{
    method:"POST",
    headers: { "Content-Type": "application/json"},
    body: JSON.stringify(payload),
  })
  .then((response) => response.json())

}

export function createCategory(data:): Promise<Category>{
  const {}
}