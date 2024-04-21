import { Formik, Form, Field } from "formik";
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
                    <button className={css.button} type="submit">Search</button>
                </Form>
            </Formik>
        </header>
    )
}