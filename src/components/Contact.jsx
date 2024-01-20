import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { styles } from '../styles';
import { EarthCanvas } from './canvas';
import { SectionWrapper } from '../hoc';
import { slideIn } from '../utils/motion';


const InputField = ({ label, type, name, value, onChange, placeholder, rows }) => {
  const InputComponent = rows ? 'textarea' : 'input';

  return (
    <label className="flex flex-col">
      <span className="text-white font-medium mb-4">{label}</span>
      <InputComponent
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        rows={rows}
        className={`bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium resize-none ${rows ? 'textarea' : ''}`}
      />
    </label>
  );
};

const Alert = ({ type, message }) => {
  return (
    <div className={`bg-${type}-100 border-t-4 border-${type}-500 rounded-b text-${type}-900 px-4 py-3 shadow-md`} role="alert">
      <div className="flex">
        <div className="py-1">
          <svg className="fill-current h-6 w-6 text-teal-500 mr-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
            <path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z" />
          </svg>
        </div>
        <div>
          <p className="font-bold">{message.title}</p>
          <p className="text-sm">{message.text}</p>
        </div>
      </div>
    </div>
  );
};


const Contact = () => {
  const formRef = useRef();
  const [alert, setAlert] = useState(null);
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const {name, value} = e.target;

    setForm({...form, [name]: value})
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)
    emailjs.send(
      'service_da5drbs', 
      'template_urvcgj2',
      {
        from_name: form.name,
        to_name: 'Mauricio Garcia',
        from_email: form.email,
        to_email: 'mau.villanueva2002@gmail.com',
        message: form.message
      },
      'u99cCvdVEKMIzGCe2'
    )
    .then(() => {
      setLoading(false)

      setAlert({
        type: 'teal',
        message: {
          title: 'Success!',
          text: 'Your message has been received.'
        }
      });

      setForm({
        name: '',
        email: '',
        message: '',
      })
    }, (error) => {
      setLoading(false)
      console.log(error)
      setAlert({
        type: 'red',
        message: {
          title: 'Error!',
          text: 'An error occurred. Please try again later.'
        }
      });
    })
  };

  return (
    <>
      <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">

        <motion.div
          variants={slideIn('left', 'tween', 0.2, 1)}
          className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
          >
          <p className={styles.sectionSubText}>Get in touch</p>
          <h3 className={styles.sectionHeadText}>Contact.</h3>

          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="mt-12 flex flex-col gap-8"
            >
            <InputField
              label="Your name"
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What's your name"
              />

            <InputField
              label="Your email"
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What's your email"
              />

            <InputField
              label="Your message"
              rows='7'
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What's do you want to say"
              />

            <button
              type='submit'
              className='bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-lg shadow-primary rounded-xl'
              >
              {loading ? 'Sending...' : 'Sent'}
            </button>
          </form>
        </motion.div>

        <motion.div
          variants={slideIn('right', 'tween', 0.2, 1)}
          className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
          >
          <EarthCanvas/>
        </motion.div>  
      </div>
      <div className='mt-10 flex justify-center'>
        {alert && <Alert type={alert.type} message={alert.message} />}
      </div>
    </>
  );
};

const ContactWrapper = SectionWrapper(Contact, 'contact');
export default ContactWrapper;
