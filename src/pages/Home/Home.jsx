import { Component } from "react";
import { Loader } from "../../component/Loader/Loader";
import Card from '../../component/Card/Card';
import { ReactComponent as IconСhoice } from "./chevron-down-small.svg";
import { ReactComponent as IconСhoiceUp } from "./chevron-up-small.svg";
import { ReactComponent as IconSearch } from './akar-icons_search.svg'
import styles from './Home.module.css';
import SelectList from "../../component/SelectList/SelectList";


const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'fa73223830mshf481b8f164cb924p1cbd2ajsn68731027f3fd',
        'X-RapidAPI-Host': 'booking-com.p.rapidapi.com'
	}
}; 
const listCategory = ['Kiev', 'Berlin', 'London', 'Odessa'];

class Home extends Component  {
    state = {
        city:JSON.parse(localStorage.getItem('city')) ||'London',
        place: JSON.parse(localStorage.getItem('place')) || null,
        adults_number:JSON.parse(localStorage.getItem('adults_number'))||'1',
        data:JSON.parse(localStorage.getItem('data'))||null,
        isLoadingHotel: true, 
        isLoadingPlece:true,
        isShowListCity: false,        
    };

    async componentDidMount() {       
        const urlCity = `https://booking-com.p.rapidapi.com/v1/hotels/locations?name=${this.state.city}&locale=en-gb`;
        if (this.state.city !== JSON.parse(localStorage.getItem('city'))) {
            try {
             
                const response = await fetch(urlCity, options);
                const result = await response.text();
                const travels = JSON.parse(result);
                this.setState({ place: travels, isLoadingPlece: false });
                localStorage.setItem('place', JSON.stringify(travels));
                localStorage.setItem('city', JSON.stringify(this.state.city))
            } catch (e) {
                return e.message;
            }
            finally {
                this.setState({ isLoadingPlece: false });
            }
            
        } else {
            this.setState({ isLoadingPlece: false });
            this.place=JSON.parse(localStorage.getItem('place'))
        }
        
        const url=`https://booking-com.p.rapidapi.com/v1/hotels/search?checkin_date=2023-10-15&dest_type=city&units=metric&checkout_date=2023-10-20&adults_number=${this.state.adults_number}&order_by=popularity&dest_id=-553173&filter_by_currency=AED&locale=en-gb&room_number=1&children_number=2&children_ages=5%2C0&categories_filter_ids=class%3A%3A2%2Cclass%3A%3A4%2Cfree_cancellation%3A%3A1&page_number=0&include_adjacency=true`;   
        if (this.state.adults_number !== JSON.parse(localStorage.getItem('adults_number'))) {    
        try {                  
            const response = await fetch(url, options);
            const result = await response.text();           
            const travels = JSON.parse(result);            
            this.setState({ data:travels.result,isLoadingHotel: false  });
            localStorage.setItem('data', JSON.stringify(travels.result)) ;
            localStorage.setItem('adults_number', JSON.stringify(this.state.adults_number))           
        } catch (error) {
           return error
        }
        finally {
            this.setState({ isLoadingHotel: false });            
        }
        } else {
            this.setState({ isLoadingHotel: false });
            this.data=JSON.parse(localStorage.getItem('data'))
        }

    }
    

    onChange = e => {    
        const { value } = e.target;
        this.setState({ city: value })    
    }

    onSelect = (e) => {    
        const { name } = e.target;       
        this.setState({ city: name });
    }     
    
    fetchPlace = async () => {
        console.log('zapros2')
        const urlCity=`https://booking-com.p.rapidapi.com/v1/hotels/locations?name=${this.state.city}&locale=en-gb`;       
        try {    
        const response = await fetch(urlCity, options);
        const result = await response.text();
        const travels = JSON.parse(result);      
        this.setState({ place: travels })
        localStorage.setItem('place', JSON.stringify(travels));
        localStorage.setItem('city', JSON.stringify(this.state.city))    
        } catch (e) {    
        return e.message;
        }
        finally {
            this.setState({ isLoadingPlece: false });            
        }  
    }   
    render() {       
        const { isLoadingHotel,isLoadingPlece, data, city, place, isShowListCity } = this.state; 
       
        return (           
            <>
                <section >
                    <div className={styles.conteinerTitle}>
                        <h2 className={styles.titel}>The best places in </h2>
                        <form>
                            <label className={styles.boxLable}>                                              
                                <input
                                    className={styles.input}                                
                                    readOnly
                                    type="text"
                                    name='city'                        
                                    value={city}                       
                                    placeholder="London"
                                    onChange={this.onChange}                                                                 
                                />
                                <button  type="button" onClick={()=>isShowListCity === false? this.setState({ isShowListCity: true })  :this.setState({ isShowListCity: false })} className={styles.selectButton} > 
                                    {!isShowListCity && <IconСhoice  aria-label={'icon-choice'} />}
                                    {isShowListCity && <IconСhoiceUp  aria-label={'icon-choice'} />}             
                                </button>                      
                                {isShowListCity && <SelectList id={'city'} onSelect={this.onSelect} data={listCategory} />}
                                <button onClick={this.fetchPlace} type="button" className={styles.searchButton} >
                                <IconSearch/>
                                </button>
                            </label>                            
                        </form>
                    </div>                    
                    <div className={styles.wrapper}>
                        {isLoadingPlece && <Loader />}
                        {place?.map(event => (
                        <div className={styles.box} key={event.dest_id}>
                            <div className={styles.boxImage}>
                                <img className={styles.image} src={event.image_url} alt="" loading="lazy"/>
                            </div>
                            <h3 className={styles.label}>{event.name}</h3>                       
                        </div>
                        ))}
                    </div>                    
                </section >                      
                <section >
                    <h2 className={styles.titel}>Offers</h2>                   
                    <div className={styles.wrapper}> 
                        {isLoadingHotel && <Loader />} 
                        {data?.map(event => (
                            <Card item={event} key={event.id} />))}
                    </div>
                </section>
            </>
        )
    }
};

export default Home;

