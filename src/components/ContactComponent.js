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
import { Link } from 'react-router-dom';
import { useFormik } from 'formik';

const Contact = () => {
  const formik = useFormik({
    initialValues: {
      firstname: '',
      lastname: '',
      telnum: '',
      email: '',
      agree: false,
      contactType: 'Tel.',
      message: '',
    },
    onSubmit: (values) => {
      console.log(values);
      alert(JSON.stringify(values, null, 2));
    },
  });

  console.log('formik.values: ', formik.values); //! __DEBUG __props

  const handleSubmit = function (e) {
    e.preventDefault();
    // console.log('Current State is: ', JSON.stringify(this.state));
  };

  // validate(firstname, lastname, telnum, email) {
  //   const errors = {
  //     firstname: '',
  //     lastname: '',
  //     telnum: '',
  //     email: '',
  //   };

  //   // if (this.state.touched.firstname && firstname.length < 3)
  //   if (this.state.touched.firstname && firstname.length < 3) {
  //     errors.firstname = 'First name should be >= 3 characters';
  //   } else if (this.state.touched.firstname?.length > 10) {
  //     errors.firstname = 'First name should be <= 10 characters';
  //   }

  //   if (this.state.touched.lastname && lastname.length < 3) {
  //     errors.lastname = 'Last name should be >= 3 characters';
  //   } else if (this.state.touched.lastname?.length > 10) {
  //     errors.lastname = 'Last name should be <= 10 characters';
  //   }
  //   //! this is not include any other characters
  //   const reg = /^\d+$/;
  //   if (this.state.touched.telnum && !reg.test(telnum)) {
  //     errors.telnum = 'Tel. Number should contain only numbers';
  //   }

  //   if (
  //     this.state.touched.email &&
  //     email.split('').filter((x) => x === '@').length !== 1
  //   ) {
  //     errors.email = 'Email should contain a @ sign';
  //   }

  //   return errors;
  // }

  //! ~context component
  // const errors = this.validate(
  //   this.state.firstname,
  //   this.state.lastname,
  //   this.state.telnum,
  //   this.state.email
  // );
  // console.log('erros: ', errors);

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
              <Label htmlFor="firstname" md={2}>
                First name
              </Label>
              <Col md={10}>
                {
                  //! __firstname
                }
                <Input
                  type="text"
                  id="firstname"
                  name="firstname"
                  placeholder="Fist Name"
                  onChange={formik.handleChange}
                  value={formik.values.firstname}
                />
                {/* <FormFeedback>{errors.firstname}</FormFeedback> */}
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="lastname" md={2}>
                Last name
              </Label>
              <Col md={10}>
                {
                  //! __lastname
                }
                <Input
                  type="text"
                  id="lastname"
                  name="lastname"
                  placeholder="Last Name"
                  onChange={formik.handleChange}
                  value={formik.values.lastname}
                />
                {/* <FormFeedback>{errors.lastname}</FormFeedback> */}
              </Col>
            </FormGroup>
            <FormGroup row>
              <Label for="telnum" md={2}>
                Contact Tel.
              </Label>
              <Col md={10}>
                {
                  //! __telnum
                }
                <Input
                  type="text"
                  id="telnum"
                  name="telnum"
                  placeholder="Tel. Number"
                  onChange={formik.handleChange}
                  value={formik.values.telnum}
                />
                {/* <FormFeedback>{errors.telnum}</FormFeedback> */}
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
                  value={formik.values.email}
                />
                {/* <FormFeedback>{errors.email}</FormFeedback> */}
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
