import { Field, Form, Formik } from "formik";
import * as Yup from "yup";

const searchBarSchema = Yup.object().shape({
  searchTerm: Yup.string().required("Search term is required"),
});

const FORM_INITIAL_VALUES = { searchTerm: "" };

const SearchBar = ({ onSetSearchQuery }) => {
  const handleSubmit = (values) => {
    onSetSearchQuery(values.searchTerm);
  };

  return (
    <Formik
      initialValues={FORM_INITIAL_VALUES}
      validationSchema={searchBarSchema}
      onSubmit={handleSubmit}
    >
      <Form>
        <label>
          <Field type="text" name="searchTerm" />
        </label>
        <button type="submit" aria-label="Search"></button>
      </Form>
    </Formik>
  );
};

export default SearchBar;
