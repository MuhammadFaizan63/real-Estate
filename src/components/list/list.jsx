import { listData } from '../../routes/lib/dummydata';
import './list.scss';
import Card from '../card/card';

export default function List(){
    return(
        <div className="list">
            {listData.map(item=>(<Card key={item.id}item={item}/>))}
        </div>
    )
}