import { useNavigate } from 'react-router-dom';
import './directory-item.scss';



const DirectoryItem = ({category}) => {
    const navigate = useNavigate();
  
const { imageUrl, title } = category;


const categoryClickHandler = () => {
  console.log(`Category ${title} clicked!`);
    navigate(`/shop/${title.toLowerCase()}`);
  
}

  return (
     <div onClick={categoryClickHandler} className="directory-item-container">
          <div 
            className="background-image" 
            style={{backgroundImage: `url(${imageUrl})`}}
          />
          <div className="body">
            <h2>{title}</h2>
            <p>Shop Now</p>
          </div>
        </div>
  )
}

export default DirectoryItem