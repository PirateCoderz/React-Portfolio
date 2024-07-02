import { useForm } from 'react-hook-form';
import axios from 'axios';
import { Container, Row, Col } from 'react-bootstrap';
import contactImg from '../assets/img/contact-img.svg';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Contact = () => {
  const { 
    register, 
    handleSubmit, 
    formState: { errors }, 
    reset 
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await axios.post('/api/sendMail', data);
      if (response.status === 200) {
        reset();
        alert('Form submitted successfully');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src={contactImg} alt="Contact Us" />
              }
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Get In Touch</h2>
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <Row>
                      <Col size={12} sm={6} className="px-1">
                        <input 
                          type="text" 
                          placeholder="First Name" 
                          {...register('firstName', { required: 'Please enter your first name' })} 
                        />
                        {errors.firstName && <p className="danger">{errors.firstName.message}</p>}
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input 
                          type="text" 
                          placeholder="Last Name" 
                          {...register('lastName', { required: 'Please enter your last name' })} 
                        />
                        {errors.lastName && <p className="danger">{errors.lastName.message}</p>}
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input 
                          type="email" 
                          placeholder="Email Address" 
                          {...register('email', {
                            required: 'Please enter your email',
                            pattern: {
                              value: /\S+@\S+\.\S+/,
                              message: 'Please enter a valid email address',
                            },
                          })}
                        />
                        {errors.email && <p className="danger">{errors.email.message}</p>}
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input 
                          type="tel" 
                          placeholder="Phone No." 
                          {...register('phone', {
                            required: 'Please enter your phone number',
                            pattern: {
                              value: /^\d+$/,
                              message: 'Please enter a valid phone number',
                            },
                          })}
                        />
                        {errors.phone && <p className="danger">{errors.phone.message}</p>}
                      </Col>
                      <Col size={12} className="px-1">
                        <textarea 
                          rows="6" 
                          placeholder="Message" 
                          {...register('message', { required: 'Please enter your message' })} 
                        ></textarea>
                        {errors.message && <p className="danger">{errors.message.message}</p>}
                        <button type="submit"><span>Submit</span></button>
                      </Col>
                    </Row>
                  </form>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
