import { Formik, Form, Field } from "formik";
import { IoSearch } from "react-icons/io5";
import css from "./SearchBar.module.css";

export default function SearchBar ({ onSearch }) {
    return (
        <header>
            <Formik
                initialValues={{ query: "" }}
                onSubmit={(values, actions) => {
                    onSearch(values.query)
                    actions.resetForm()
                }}
            >
                <Form className={css.form}>
                    <Field className={css.input} type="text" name="query"/>
                    <button className={css.button} type="submit"><IoSearch className={css.icon} size={15} />Search</button>
                </Form>
            </Formik>
        </header>
    )
}