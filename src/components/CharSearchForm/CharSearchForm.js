import './charSearchForm.scss'
import {Formik, Form, Field, ErrorMessage as FormikErrorMessage} from 'formik'

const CharSearchForm = () => {
	return (
		<div className="char__search-form">
			<Formik>
				<Form>
					<label className="char__search-label" htmlFor="charName">Or find a character by name:</label>
					<div className="char__search-wrapper">
						<Field
							id="charName"
							name='charName'
							type='text'
							placeholder="Enter name"/>
						<button
							type='submit'
							className="button button__main">
							<div className="inner">find</div>
						</button>
					</div>
				</Form>
			</Formik>
		</div>
	)
}

export default CharSearchForm;