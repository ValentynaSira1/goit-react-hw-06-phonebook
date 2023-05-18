import css from './filter.module.css';
import { useDispatch } from 'react-redux';
import { filterSlice } from '../Redux/FilterSlice';

export const Filter = () => {
  const dispatch = useDispatch();
  return (
    <label className={css.label}>
      Find contacts by name
      <input
        type="text"
        name="filter"
        onChange={(e) => dispatch(filterSlice(e.target.value))}
        className={css.input}
       
      />
    </label>
  );
};
