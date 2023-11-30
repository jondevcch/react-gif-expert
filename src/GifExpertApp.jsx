import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {

    //hook para mantener el listado, espacio en memoria para mantener las categorias.
    const [categories, setCategories] = useState(['Naruto']);

    const onAddCategory = (newCategory) => {
        //console.log(newCategory);
        //categories.push(newCategory)
        //setCategories([...categories, 'Dragon Ball']);

        if (categories.includes(newCategory)) return;
        setCategories(categorias => [newCategory, ...categorias ]);
    }

    return (
        <>
            {/* titulo */}
            <h1>GifExpertApp</h1>

            {/* Input emite un evento  al padre*/}
            <AddCategory
                // setCategories= { setCategories }
                onNewCategory={event => onAddCategory(event)}
            />


            {/* <button onClick={onAddCategory}>Agregar</button> */}

            {
                categories.map((category) => (
                    <GifGrid
                        key={category}
                        category={category} />
                ))
            }

            {/* Gif Items */}
        </>
    )
}
