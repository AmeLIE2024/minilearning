import { useEffect, useState } from "react";
import { useParams } from "react-router"
import type { ResourceProps } from "./Resource";
import { loadResourceById } from "../Api";

export default function ResourceDetail(){
    const {id} = useParams();
    const [resourceDetail, setResourceDetail] = useState<ResourceProps>();
    
    useEffect(()=>{
        if(!id) return;
        loadResourceById(id).then((data)=> setResourceDetail(data))
    },[id])

    if(resourceDetail === undefined) return <p>Chargement en cours</p>

    const createdAtDate = new Date(resourceDetail.createdAt);
    return (
        <>
        <article>
            <p className="fr-tag">{resourceDetail.category.name}{resourceDetail.type}{resourceDetail.status}</p>
            <a href={resourceDetail.url}>Lien supplémentaire</a>            
            <h2>{resourceDetail.title}</h2>
            <p>{resourceDetail.description}</p>
            <p>
                Date de création : 
                <time dateTime={createdAtDate.toISOString()}>
                    {createdAtDate.toLocaleDateString("fr-FR")}
                </time>
            </p>
        </article>


        </>
    )
}