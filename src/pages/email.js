import React from 'react'
import Layout from '../components/layout'

const EmailPage = () => (
  <Layout>
      <form class="fieldset" action="https://formspree.io/nashvillettc@gmail.com" method="POST">
          <input class="email-form" type="text" name="name" placeholder="name"/>
          <input class="email-form" type="email" name="_replyto" placeholder="email"/>
          <textarea class="email-text" name="message" placeholder="message"></textarea>
          <input type="submit" value="Send"/>
      </form>
  </Layout>
)

export default EmailPage
