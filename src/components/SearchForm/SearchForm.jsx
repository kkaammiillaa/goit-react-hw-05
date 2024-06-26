import { CiSearch } from 'react-icons/ci';
import { Field, Form, Formik } from 'formik';
import css from './SearchForm.module.css';
import { toast } from 'react-hot-toast';
import { useSearchParams } from 'react-router-dom';

const SearchForm = ({ onSearch }) => {
  const [params, setParams] = useSearchParams();
  const handleSubmit = (values, actions) => {
    params.set('query', values.query.trim());
    setParams(params);
    if (!values.query.trim()) {
      toast.error('Enter please at least 1 symbol to start searching');
      return;
    }
    onSearch();
    actions.resetForm();
  };
  return (
    <Formik initialValues={{ query: '' }} onSubmit={handleSubmit}>
      <Form>
        <div className={css.form}>
          <Field
            className={css.input}
            name="query"
            autoComplete="off"
            autoFocus
            placeholder="Search movies"
          />
          <button className={css.button} type="submit">
            <CiSearch size={28} />
          </button>
        </div>
      </Form>
    </Formik>
  );
};

export default SearchForm;
