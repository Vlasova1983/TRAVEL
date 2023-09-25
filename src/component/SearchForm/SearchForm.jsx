import { useState  } from 'react';
import { useFormik } from 'formik';
import { formatDate } from '../../utils/helpers/date/';
import { Loader } from "../../component/Loader/Loader";
import { Calendar } from '../Calendar/Calendar';
import FormSchema from './FormSchema';
// import { ReactComponent as IconSearch } from './akar-icons_search.svg';
// import { ReactComponent as IconDelete } from './cross-small.svg';
import { ReactComponent as IconCalendar } from './akar-icons_calendar.svg';
import { ReactComponent as IconСhoice } from "./chevron-down-small.svg";
import { ReactComponent as IconСhoiceUp } from "./chevron-up-small.svg";
import { ReactComponent as Avatar } from "./fontisto_male.svg";
import SelectList from '../SelectList/SelectList';
import styles from '../SearchForm/SearchForm.module.css';

const listCategory = [1, 2, 3, 4, 5,6];
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'fa73223830mshf481b8f164cb924p1cbd2ajsn68731027f3fd',
        'X-RapidAPI-Host': 'booking-com.p.rapidapi.com'
	}
}; 
const SearchForm = () => { 
    const [isShowListCategory, setIsShowCategory] = useState(false);
    const [isShowDateIn, setIsShowDateIn] = useState(false);
    const [isShowDateOut, setIsShowDateOut] = useState(false);
    const [dateIn, setDateIn] = useState(new Date());
    const [dateOut, setDateOut] = useState(new Date());   
    const [isLoadingHotel, setIsisLoadingHotel] = useState(false);

    const onSubmit = async (values) => {
        setIsisLoadingHotel(true)
        const url=`https://booking-com.p.rapidapi.com/v1/hotels/search?checkin_date=2023-10-15&dest_type=city&units=metric&checkout_date=2023-10-20&adults_number=${values.adults_number}&order_by=popularity&dest_id=-553173&filter_by_currency=AED&locale=en-gb&room_number=1&children_number=2&children_ages=5%2C0&categories_filter_ids=class%3A%3A2%2Cclass%3A%3A4%2Cfree_cancellation%3A%3A1&page_number=0&include_adjacency=true`;       
        try {    
        const response = await fetch( url, options);
        const result = await response.text();
        const travels = JSON.parse(result);        
            localStorage.setItem('data', JSON.stringify(travels.result)) ;
            localStorage.setItem('adults_number', JSON.stringify(values.adults_number));
            localStorage.setItem('checkin_date', JSON.stringify(values.checkin_date));
            localStorage.setItem('checkout_date', JSON.stringify(values.checkout_date));
            window.location.reload()
        } catch (e) {    
            return e.message;
        }        
        
    }
    
     const onChangeInput = e => {    
        const { name, value } = e.target;
        formik.setFieldValue(name, value);    
    }
    
    const formik = useFormik({    
        initialValues: {
            checkin_date: JSON.parse(localStorage.getItem('checkin_date')) || '',
            checkout_date: JSON.parse(localStorage.getItem('checkout_date')) || '',
            adults_number:JSON.parse(localStorage.getItem('adults_number')) || '',            
            // name: JSON.parse(localStorage.getItem('name')) || '',          
        },
        validationSchema: FormSchema,        
        onSubmit
    })   

    const onSelect = (e) => {    
        const { id, name } = e.target;     
        switch (id) {
            case 'adults_number':
            formik.setFieldValue('adults_number', name);       
            break
            case 'checkin_date':
                formik.setFieldValue('checkin_date', formatDate(dateIn, 'YYYY-MM-DD'));       
            break
            case 'checkin_date_clear':
            formik.setFieldValue('checkin_date', 'Check in')       
            break
            case 'checkout_date':
            formik.setFieldValue('checkout_date', formatDate(dateOut, 'YYYY-MM-DD'));       
            break
            case 'checkout_date_clear':
            formik.setFieldValue('checkout_date', 'Check in')       
            break 
            default:
        throw new Error(`Unsupported variant prop value - ${id}`);
    }    
  }   

    return (
        <div className={styles.conteiner}>
            {isLoadingHotel && <Loader/>}
            <form className={styles.form} onSubmit={formik.handleSubmit}>
            {/* <div className={styles.wrap}>                    
                <label className=className={styles.box}>
                    <IconSearch  className={styles.searchIcon} aria-label={'icon-search'}/>                                   
                    <input                   
                        className={`${styles.input} ${
                            formik.touched.name && formik.errors.name
                            ? styles.errorInput
                            :""                
                        }`}
                        type="text"
                        name='name'
                        value={formik.values.name}                        
                        placeholder="Search name"
                        autoComplete="off"
                        onBlur={formik.handleBlur}
                        onChange={onChangeValue}                            
                    />                            
                    <button type="button" className={styles.deleteName} 
                        onClick={() => {                        
                        formik.setFieldValue('name','')                   
                    }}
                    >                
                        <IconDelete aria-label={'icon-cross'}/>
                    </button>                        
                </label>                                       
                {formik.touched.name && formik.errors.name ? (
                    <div className={styles.errorLabel}>{formik.errors.name}</div>
                    ) : <div className={styles.label}> 1</div>
                } 
            </div>     */}
            <div className={styles.containerDate}>
                <div className={styles.wrap}>
                    <label  className={styles.box} > 
                        <IconCalendar className={styles.calendarIcon}/>
                        <button type="button" id='checkin_date' onClick={() => { isShowDateIn === false ? setIsShowDateIn(true) : setIsShowDateIn(false) }} className={styles.dateButton} > 
                            {!isShowDateIn && <IconСhoice className={styles.icon} id='checkin_date' aria-label={'icon-choice'} />}
                            {isShowDateIn && <IconСhoiceUp className={styles.icon} id='checkin_date' aria-label={'icon-choice'} />}
                        </button>                
                        <input 
                            readOnly  
                            className={`${styles.input} ${
                            formik.touched.checkin_date && formik.errors.checkin_date
                            ? styles.errorInput
                            :""                
                            }`}
                            name='checkin_date'
                            id='checkin_date'
                            onBlur={formik.handleBlur}
                            onChange={onChangeInput}
                            value={formik.values.checkin_date}
                            placeholder="check in"
                            disabled
                        />
                        {/* <button type="button" className={styles.datainDelete} 
                            onClick={() => {                        
                                formik.setFieldValue('checkin_date', '');
                                localStorage.setItem('checkin_date', JSON.stringify(''))
                            }}
                        >                
                            <IconDelete  className={styles.icon} aria-label={'icon-cross'}/>
                        </button> */}
                    </label>                                
                    {formik.touched.checkin_date && formik.errors.checkin_date ? (
                    <div className={styles.errorLabel}>{formik.errors.checkin_date}</div>
                    ) : <div className={styles.label}> 1</div>}
                    {isShowDateIn &&
                        <div className={styles.conteinerCalendar}>
                            <Calendar locale={'en'} selectedDate={dateIn} selectDate={(date) => setDateIn(date)} />                    
                            <div className={styles.conteinerButton}> 
                            <button className={styles.canselButton} onClick={onSelect} id='checkin_date_clear' type='button'>Cancel</button>
                            <button className={styles.chooseButton} onClick={onSelect} id='checkin_date' type='button'>Choose date</button>
                            </div>                                
                        </div>
                    }
                </div> 
                <div className={styles.wrap}>
                    <label  className={styles.box} > 
                        <IconCalendar className={styles.calendarIcon}/>
                        <button type="button" id='checkout_date' onClick={() => { isShowDateOut === false ? setIsShowDateOut(true) : setIsShowDateOut(false) }} className={styles.dateButton} > 
                            {!isShowDateOut && <IconСhoice className={styles.icon} id='checkout_date' aria-label={'icon-choice'} />}
                            {isShowDateOut && <IconСhoiceUp className={styles.icon} id='checkout_date' aria-label={'icon-choice'} />}
                        </button>                
                        <input 
                            readOnly  
                            className={`${styles.input} ${
                            formik.touched.checkout_date && formik.errors.checkout_date
                            ? styles.errorInput
                            :""                
                            }`}
                            name='checkout_date'
                            id='checkout_date'
                            onBlur={formik.handleBlur}
                            onChange={onChangeInput}
                            value={formik.values.checkout_date}
                            placeholder="check out"
                            disabled
                        />
                        {/* <button type="button" className={styles.dataoutDelete} 
                            onClick={() => {                        
                                formik.setFieldValue('checkout_date', '');
                                localStorage.setItem('checkout_date', JSON.stringify(''))
                            }}
                        >                
                            <IconDelete className={styles.icon}aria-label={'icon-cross'}/>
                        </button> */}
                    </label>                            
                    {formik.touched.checkout_date && formik.errors.checkout_date ? (
                    <div className={styles.errorLabel}>{formik.errors.checkout_date}</div>
                    ) : <div className={styles.label}> 1</div>}
                    {isShowDateOut &&
                        <div className={styles.conteinerCalendar}>
                            <Calendar locale={'en'} selectedDate={dateOut} selectDate={(date) => setDateOut(date)} />                    
                            <div className={styles.conteinerButton}> 
                            <button className={styles.canselButton} onClick={onSelect} id='checkout_date_clear' type='button'>Cancel</button>
                            <button className={styles.chooseButton} onClick={onSelect} id='checkout_date' type='button'>Choose date</button>
                            </div>                                
                        </div>
                    }
                </div>
            </div>
            <div className={styles.wrap}>
                <label className={styles.box} >
                    <Avatar className={styles.avatarIcon}/>                    
                    <input
                        className={`${styles.input} ${
                        formik.touched.adults_number&& formik.errors.adults_number
                        ? styles.errorInput
                        :""                
                        }`}
                        readOnly
                        type="text"
                        name='adults_number'                        
                        value={formik.values.adults_number}                       
                        placeholder="adults"
                        onChange={onChangeInput}
                        onBlur={formik.handleBlur}                                   
                    />
                    <button  type="button" onClick={()=>isShowListCategory === false? setIsShowCategory(true):setIsShowCategory(false)} className={styles.selectButton} > 
                        {!isShowListCategory && <IconСhoice className={styles.icon} aria-label={'icon-choice'} />}
                        {isShowListCategory && <IconСhoiceUp className={styles.icon} aria-label={'icon-choice'} />}             
                    </button>                      
                    {isShowListCategory && <SelectList id={'adults_number'} onSelect={onSelect}  data={listCategory} />}
                    {/* <button type="button" className={styles.deleteCategory} 
                        onClick={() => {                        
                            formik.setFieldValue('adults_number', '');
                            localStorage.setItem('adults_number', JSON.stringify(''))
                        }}
                    >                
                        <IconDelete className={styles.icon} aria-label={'icon-cross'}/>
                    </button> */}
                </label>                    
                {formik.touched.adults_number && formik.errors.adults_number ? (
                    <div className={styles.errorLabel}>{formik.errors.adults_number}</div>
                    ) : <div className={styles.label}> 1</div>
                } 
            </div>                
            <button  type="submit"  className={styles.submitButton}>Search </button> 
            </form>
        </div>
                       
    ) 
}

export default SearchForm;