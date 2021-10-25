import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import TextInput from './TextInput';
import Select from './Select';
import './styles.css';
import './styles-custom.css';
import Story from './Story';

/* Renders a Mad lib form using Formik */

const Madlib = () => {
  function refreshPage() {
    window.location.reload(false);
  }

  return (
    <>
      <Formik
        initialValues={{
          breathsOne: '',
          nounOne: '',
          nounTwo: '',
          nounThree: '',
          moodOne: '',
          nounFour: '',
          nounFive: '',
          nounSix: '',
          moodTwo: '',
          breathsTwo: '',
        }}
        validationSchema={Yup.object({
          breathsOne: Yup.string()
            .oneOf(['1', '2', '3', '4'], 'Invalid choice')
            .required('Required'),
          nounOne: Yup.string().required('Required'),
          nounTwo: Yup.string().required('Required'),
          nounThree: Yup.string().required('Required'),
          moodOne: Yup.string()
            .oneOf(['happy', 'calm', 'peaceful'], 'Invalid choice')
            .required('Required'),
          nounFour: Yup.string().required('Required'),
          nounFive: Yup.string().required('Required'),
          nounSix: Yup.string().required('Required'),
          moodTwo: Yup.string()
            .oneOf(['content', 'relaxed', 'calm'], 'Invalid choice')
            .required('Required'),
          breathsTwo: Yup.string()
            .oneOf(['1', '2', '3', '4'], 'Invalid choice')
            .required('Required'),
        })}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          setTimeout(() => {
            setSubmitting(false);
            resetForm();
          }, 60000);
        }}
      >
        {({ values, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
          <form onSubmit={handleSubmit}>
            <div className={isSubmitting ? 'hidden' : 'madlib-form'}>
              <h1>Mad Libs Guided Imagery</h1>
              <p>A mindfulness exercise by Chicago Mind</p>
              <Select
                name="breathsOne"
                value={values.breathsOne}
                onChange={handleChange}
                onBlur={handleBlur('nounOne')}
              >
                <option value="">Choose a number</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
              </Select>
              <TextInput
                name="nounOne"
                type="text"
                placeholder="Name a relaxing place"
                onChange={handleChange}
                value={values.nounOne}
                onBlur={handleBlur('nounOne')}
              />
              <TextInput
                name="nounTwo"
                type="text"
                placeholder="Name one thing in your relaxing place"
                onChange={handleChange}
                value={values.nounTwo}
                onBlur={handleBlur('nounTwo')}
              />
              <TextInput
                name="nounThree"
                type="text"
                placeholder="Name another thing in your relaxing place"
                onChange={handleChange}
                value={values.nounThree}
                onBlur={handleBlur('nounThree')}
              />
              <Select
                name="moodOne"
                value={values.moodOne}
                onChange={handleChange}
                onBlur={handleBlur('moodOne')}
              >
                <option value="">Choose a word</option>
                <option value="happy">happy</option>
                <option value="calm">calm</option>
                <option value="peaceful">peaceful</option>
              </Select>
              <TextInput
                name="nounFour"
                type="text"
                placeholder="Name a soothing or favorite smell"
                onChange={handleChange}
                value={values.nounFour}
                onBlur={handleBlur('nounFour')}
              />
              <TextInput
                name="nounFive"
                type="text"
                placeholder="Name a favorite food"
                onChange={handleChange}
                value={values.nounFive}
                onBlur={handleBlur('nounFive')}
              />
              <TextInput
                name="nounSix"
                type="text"
                placeholder="Name your favorite animal with fur"
                onChange={handleChange}
                value={values.nounSix}
                onBlur={handleBlur('nounSix')}
              />
              <Select
                name="moodTwo"
                value={values.moodTwo}
                onChange={handleChange}
                onBlur={handleBlur('moodTwo')}
              >
                <option value="">Choose a word</option>
                <option value="content">content</option>
                <option value="relaxed">relaxed</option>
                <option value="calm">calm</option>
              </Select>
              <Select
                name="breathsTwo"
                value={values.breathsTwo}
                onChange={handleChange}
                onBlur={handleBlur('breathsTwo')}
              >
                <option value="">Choose a number</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
              </Select>
              <div className="submit">
                <button type="submit" disabled={isSubmitting}>
                  Submit
                </button>
              </div>
            </div>
            <div className={!isSubmitting ? 'hidden' : 'madlib'}>
              <Story formValues={values} />
              <div className="refresh-button">
                <button type="button" onClick={refreshPage}>
                  Restart
                </button>
              </div>
            </div>
          </form>
        )}
      </Formik>
    </>
  );
};

export default Madlib;