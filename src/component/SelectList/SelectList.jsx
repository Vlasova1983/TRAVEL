import { PropTypes } from 'prop-types';
import styles from "./SelectList.module.css";

const SelectList = ({ data, id, onSelect }) => {    
    return (
        <div className={styles.box} >
            {data.map (event=>(
                <button type='button' onClick={(e)=>onSelect(e)} className={styles.item} key={event} name={event} id={id} >{event}</button>))}
        </div>
    )
}

export default SelectList;

SelectList.propTypes = {   
    data: PropTypes.array,   
    onSelect:PropTypes.func
}