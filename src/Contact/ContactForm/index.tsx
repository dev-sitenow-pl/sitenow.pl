import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { MessageStatus } from '../../types/types';
import { FormMessage } from './FormMessage/FormMessage';

interface FormData {
  firstname: string;
  email: string;
  message: string;
}

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    firstname: '',
    email: '',
    message: '',
  });

  const [messageStatus, setMessageStatus] = useState<MessageStatus>({
    message: null,
    status: ''
  });
  const messageDisplayTime = 5000;

  const [loading, setLoading] = useState<boolean>(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSetTimeoutMessageStatusNull = () => {
    setTimeout(() => {
      setMessageStatus({
        message: null,
        status: ''
      });
    }, messageDisplayTime);
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Wstaw swój USER_ID i SERVICE_ID
    const USER_ID = '0C4SojbR--xoK71NC';
    const SERVICE_ID = 'service_jxr1kqy';
    const TEMPLATE_ID = 'template_ywz96tc';


    const templateParams = {
      firstname: formData.firstname,
      email: formData.email,
      message: formData.message,
    };

    emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, USER_ID)
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);

        setMessageStatus({
          message: 'Twoja wiadomość poszybowała :)',
          status: 'success'
        });

        setFormData({
          firstname: '',
          email: '',
          message: '',
        });

        handleSetTimeoutMessageStatusNull();

      }, (error) => {
        console.log('FAILED...', error);

        setMessageStatus({
          message: 'Upsss :/ Coś poszło nie tak. Spróbujmy ponownie.',
          status: 'error'
        });

        handleSetTimeoutMessageStatusNull();
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return <>

    <form onSubmit={handleSubmit}>
      {loading || messageStatus ? <FormMessage mes_stat={messageStatus} loading_stat={loading} countdown_time={messageDisplayTime} /> : null}

      <input className={!formData.firstname ? '' : 'ready'} type="text" id="firstname" name="firstname" placeholder='Imię i nazwisko:' value={formData.firstname} onChange={handleChange} required />

      <input className={!formData.email ? '' : 'ready'} type="email" id="email" name="email" placeholder='E-mail:' value={formData.email} onChange={handleChange} required />

      <textarea className={!formData.message ? '' : 'ready'} id="message" name="message" placeholder='Treść wiadomości:' value={formData.message} onChange={handleChange} required></textarea>

      <button
        className={!formData.firstname || !formData.email || !formData.message ? 'btn red' : 'btn green'}
        type="submit"
        disabled={loading}>
        Wyślij
      </button>
    </form>
  </>


};

export { ContactForm };
