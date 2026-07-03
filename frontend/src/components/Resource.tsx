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

export default  function Resource() {

const [resourceList, setResourceList] = useState<ResourceProps[]>([]);

 useEffect(()=>{
   loadResources()
     .then((data) => setResourceList(data)
        )
},[])
  return (
    <> 
    
    <ul>
        {resourceList.map((resource)=>(
            <li key={resource.id}>
                <p className="fr-tag">{resource.type}</p>
                <p className="fr-tag">{resource.status}</p>
                <p className="fr-tag">{resource.category.name}</p>
               <Link to={`/ressources/${resource.id}`}><h2>{resource.title}</h2></Link>
                
            </li>
        ))}
    </ul>
      
    </>
  );
}
