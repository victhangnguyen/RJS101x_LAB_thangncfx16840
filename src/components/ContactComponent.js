import React from 'react';
import {
  Breadcrumb,
  BreadcrumbItem,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Col,
  FormFeedback,
} from 'reactstrap';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';
import { useFormik } from 'formik';

const Contact = () => {
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      telNum: '',
      email: '',
      agree: false,
      contactType: 'Tel.',
      message: '',
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .required('Required')
        .min(3, 'Must be greater then 2 characters')
        .max(15, 'Must be 15 characters or less'),
      lastName: Yup.string()
        .required('Required')
        .min(3, 'Must be greater then 2 characters')
        .max(15, 'Must be 15 characters or less'),
      telNum: Yup.string('Must be a number')
        .matches(/^[0-9]+$/, 'Must be a number')
        .required('Required')
        .min(3, 'Must be greater then 2 characters')
        .max(15, 'Must be 15 characters or less'),
      email: Yup.string().email('Invalid email address').required('Required'),
    }),

    onSubmit: (values) => {
      console.log(values);
      alert(JSON.stringify(values, null, 2));
    },
  });

  console.log('formik.values: ', formik.values); //! __DEBUG __props
  console.log('formik.errors: ', formik.errors); //! __DEBUG __props

  return (
    <div className="container">
      <div className="row">
        <Breadcrumb>
          <BreadcrumbItem>
            <Link to="/home">Home</Link>
          </BreadcrumbItem>
          <BreadcrumbItem active>Contact Us</BreadcrumbItem>
        </Breadcrumb>

        <div className="col-12">
          <h3>Contact Us</h3>
          <hr />
        </div>
      </div>
      <div className="row row-content">
        <div className="col-12">
          <h3>Location Information</h3>
        </div>
        <div className="col-12 col-sm-4 offset-sm-1">
          <h5>Our Address</h5>
          <address>
            121, Clear Water Bay Road
            <br />
            Clear Water Bay, Kowloon
            <br />
            HONG KONG
            <br />
            <i className="fa fa-phone"></i>: +852 1234 5678
            <br />
            <i className="fa fa-fax"></i>: +852 8765 4321
            <br />
            <i className="fa fa-envelope"></i>:{' '}
            <a href="mailto:confusion@food.net">confusion@food.net</a>
          </address>
        </div>
        <div className="col-12 col-sm-6 offset-sm-1">
          <h5>Map of our Location</h5>
        </div>
        <div className="col-12 col-sm-11 offset-sm-1">
          <div className="btn-group" role="group">
            <a
              role="button"
              className="btn btn-primary"
              href="tel:+85212345678"
            >
              <i className="fa fa-phone"></i> Call
            </a>
            <a role="button" className="btn btn-info">
              <i className="fa fa-skype"></i> Skype
            </a>
            <a
              role="button"
              className="btn btn-success"
              href="mailto:confusion@food.net"
            >
              <i className="fa fa-envelope-o"></i> Email
            </a>
          </div>
        </div>
      </div>
      <div className="row row-content">
        <div className="col-12">
          <h3>Send us your feedback</h3>
        </div>
        <div className="col-12 col-md-9">
          <Form onSubmit={formik.handleSubmit}>
            <FormGroup row>
              <Label htmlFor="firstName" md={2}>
                First name
              </Label>
              <Col md={10}>
                {
                  //! __firstName
                }
                <Input
                  id="firstName"
                  name="firstName"
                  type="text"
                  placeholder="Fist Name"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.firstName}
                  valid={
                    formik.touched.firstName &&
                    formik.errors.firstName === undefined
                  }
                  invalid={
                    formik.touched.firstName &&
                    formik.errors.firstName !== undefined
                  }
                />
                {formik.touched.firstName && formik.errors.firstName ? (
                  <FormFeedback>{formik.errors.firstName}</FormFeedback>
                ) : null}
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="lastName" md={2}>
                Last name
              </Label>
              <Col md={10}>
                {
                  //! __lastName
                }
                <Input
                  id="lastName"
                  name="lastName"
                  type="text"
                  placeholder="Last Name"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.lastName}
                  valid={
                    formik.touched.lastName &&
                    formik.errors.lastName === undefined
                  }
                  invalid={
                    formik.touched.lastName &&
                    formik.errors.lastName !== undefined
                  }
                />
                {formik.touched.lastName && formik.errors.lastName ? (
                  <FormFeedback>{formik.errors.lastName}</FormFeedback>
                ) : null}
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="telNum" md={2}>
                Contact Tel.
              </Label>
              <Col md={10}>
                {
                  //! __telNum
                }
                <Input
                  id="telNum"
                  name="telNum"
                  type="text"
                  placeholder="Tel. Number"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.telNum}
                  valid={
                    formik.touched.telNum && formik.errors.telNum === undefined
                  }
                  invalid={
                    formik.touched.telNum && formik.errors.telNum !== undefined
                  }
                />
                {formik.touched.telNum && formik.errors.telNum ? (
                  <FormFeedback>{formik.errors.telNum}</FormFeedback>
                ) : null}
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label htmlFor="email" md={2}>
                Email
              </Label>
              <Col md={10}>
                {
                  //! __email
                }
                <Input
                  type="text"
                  id="email"
                  name="email"
                  placeholder="Email"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.email}
                  valid={
                    formik.touched.email && formik.errors.email === undefined
                  }
                  invalid={
                    formik.touched.email && formik.errors.email !== undefined
                  }
                />
                {formik.touched.email && formik.errors.email ? (
                  <FormFeedback>{formik.errors.email}</FormFeedback>
                ) : null}
              </Col>
            </FormGroup>
            <FormGroup row>
              <Col md={{ size: 6, offset: 2 }}>
                <FormGroup check>
                  <Label check>
                    <Input
                      type="checkbox"
                      name="agree"
                      onChange={formik.handleChange}
                      checked={formik.values.agree}
                    />{' '}
                    <strong>May we contact you?</strong>
                  </Label>
                </FormGroup>
              </Col>
              <Col md={{ size: 3, offset: 1 }}>
                <FormGroup check>
                  <Label check>
                    <Input
                      type="select"
                      name="contactType"
                      onChange={formik.handleChange}
                      value={formik.values.contactType}
                    >
                      <option value="Tel.">Tel.</option>
                      <option value="Email">Email</option>
                    </Input>
                  </Label>
                </FormGroup>
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label htmlFor="feedback" md={2}>
                Your Feedback
              </Label>
              <Col md={10}>
                <Input
                  type="textarea"
                  id="message"
                  name="message"
                  rows="12"
                  onChange={formik.handleChange}
                  value={formik.values.message}
                />
              </Col>
            </FormGroup>

            <FormGroup row>
              <Col md={{ size: 10, offset: 2 }}>
                <Button type="submit" color="primary">
                  Send Feedback
                </Button>
              </Col>
            </FormGroup>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
