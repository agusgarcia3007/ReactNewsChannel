import React from 'react';
import styles from'./Form.module.css';
import useSelector from '../hooks/useSelector'

const Form = ({setCategory}) => {


    
    const categories = [
        { value: 'general', label:'General'},
        { value: 'business', label: 'Business'},
        { value: 'entertainment', label: 'Entertainment'},
        { value: 'health', label: 'Health'},
        { value: 'science', label: 'Science'},
        { value: 'sports', label: 'Sports'},
        { value: 'technology', label: 'Tech'},
    ]
    
    //using useSelector
    const [category, SelectNews] = useSelector('general', categories);


    const handleSubmit = e => {
        e.preventDefault();

        setCategory(category);

    }

    return ( 
        <div className={`${styles.searching} row`}>
            <div className="col s12 m8 offset-m2">
                <form
                    onSubmit={handleSubmit}
                >
                    <h2 className={styles.heading}>Find Word's News by Category</h2>

                    <SelectNews />

                    <div className="input-field col s12">
                        <input 
                            type="submit" 
                            value="Search" 
                            className={`${styles.btn_block} btn-large amber darken-2`}
                        />
                    </div>
                </form>
            </div>
        </div>
     );
}
 
export default Form;