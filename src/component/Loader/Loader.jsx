import { Watch } from  'react-loader-spinner'
import styles  from '../Loader/Loader.module.css';

export const Loader = () => { 
  return (
  <div className={styles.Loader}>
    <Watch   
      height="250"
      width="250"
      radius="48"
      color="#303f9f"   
      ariaLabel="watch-loading"
      wrapperStyle={{}}
      wrapperClassName=""
      visible={true}   
   />
  </div>
  )
}