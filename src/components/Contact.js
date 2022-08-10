import React from 'react'

export default function Contact() {
  return (
    <div className='container-contact' id='contact' >
      <form action="https://formspree.io/f/xnqleqrk" method='post'>
        <label htmlFor='fullNames' >Name</label>
          <input className='field' type='text' placeholder='Name' name='fullName' />
        <label htmlFor='Email' >Email</label>
          <input className='field' type='email' placeholder='Email' name='Email' />
        <label htmlFor="message">how can I help you?</label>
              <textarea required
                name="message"
                id="message"
                cols="40"
                rows="3"
                placeholder="Please enter your message"
              ></textarea>
              <div className="submit">
              <input type="submit" value="send" />
              <input type="reset" value="reset" />
            </div>
      </form>
    </div>
  )
}
