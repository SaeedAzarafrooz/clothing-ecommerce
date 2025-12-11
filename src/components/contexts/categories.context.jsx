import { createContext, useEffect, useState } from "react";


import { getCategoriesAndDocuments } from "../../utils/firebase/firebase.js";
// import { addCollectionAndDocuments, getCategoriesAndDocuments } from "../../utils/firebase/firebase.js";
// import SHOP_DADA from '../../shop-data.js'

export const CategoriesContext = createContext({
    categoriesMap: {},

});

export const CategoriesProvider = ({ children }) => {
    const [categoriesMap, setCategoriesMap] = useState({});

    // just for one time upload data to firebase
    // useEffect(() => {
    //     addCollectionAndDocuments('categories', SHOP_DADA);
    // }, []);

    useEffect(() => {
        const getCategoriesMap = async () => {
            const categoryMap = await getCategoriesAndDocuments('categories');
            console.log(categoryMap);
            
            setCategoriesMap(categoryMap);
        }

        getCategoriesMap();
    }, [])

    const value = { categoriesMap };

    return (
        <CategoriesContext.Provider value={value}>
            {children}
        </CategoriesContext.Provider>);

}