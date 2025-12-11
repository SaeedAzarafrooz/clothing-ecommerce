import DirectoryItem from '../directory-item/Directory-Item';
import './directory.scss';



const Directory = ({ categories }) => {
  return (
    <div className="directory-container">
      {categories.map((category) => (
        <DirectoryItem key={category.id} category={category} />
      ))}
    </div>
  )
}

export default Directory
