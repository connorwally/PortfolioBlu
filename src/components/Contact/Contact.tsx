import { Button } from "../Button";
import "./Contact.css";

export function Contact() {
  return (
    <div className='contact-content'>
      <div className='title-stack contact-title'>
        <h1 className='title-text title-text--bg'>Contact</h1>
        <h1 className='title-text title-text--fg'>Contact</h1>
        <hr className='contact-title-shadow title-shadow'></hr>
      </div>
      <form
        className='contact-form'
        action='https://api.web3forms.com/submit'
        method='POST'
      >
        <input
          type='hidden'
          name='access_key'
          value='9fbeaf69-9294-4a75-81dc-9f83b48e603d'
        />
        <div className='form-group'>
          <input type='text' id='name' name='name' placeholder='Name' />
        </div>

        <div className='form-group'>
          <input type='email' id='email' name='email' placeholder='Email' />
        </div>

        <div className='form-group'>
          <textarea
            id='message'
            name='message'
            rows={4}
            placeholder='Message...'
          />
        </div>

        <Button label='Send' type='submit' />
      </form>
    </div>
  );
}
