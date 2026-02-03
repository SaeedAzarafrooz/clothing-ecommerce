import { useSelector } from "react-redux";
import Carousel from "../../components/Carousel";
import Directory from "../../components/directory/directory";
import Slider from "../../components/Slider";
import { selectCategoriesMap } from "../../store/categories/category.selector";


function Home() {
      const categoriesMap = useSelector(selectCategoriesMap);

    const categories = [
        { id: 1, title: 'Hats', imageUrl: 'https://i.ibb.co/cvpntL1/hats.png' },
        { id: 2, title: 'Jackets', imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png' },
        { id: 3, title: 'Sneakers', imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png' },
        { id: 4, title: 'Womens', imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png' },
        {
            id: 5, title: 'Mens', imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
        },
    ];
    console.log('test:',categoriesMap);
    
    return (<>
        <Slider />
        <Carousel />
        <Directory categories={categoriesMap} />

        {/* footer component */}
        {/* add brands to product data */}

    </>
    );
}

export default Home; 