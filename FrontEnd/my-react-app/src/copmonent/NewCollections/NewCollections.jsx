import new_collections from '../../assets/newcollections';
import Item from '../Item/Item';
import './NewCollections.css';
const NewCollections = () => {
  return (
    <div className="newcollections">
      <h1>New Collections</h1>
      <hr />
      <div className='colletions'>
        {new_collections.map((item,i)=> {
            return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
        })}
      </div>
    </div>
  );
};

export default NewCollections;