import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_PASS,
  },
});

const confirmationToSender = async (recipient: string) => {
  const option = {
    from: process.env.GMAIL_USER,
    to: recipient,
    subject: 'Thank you for contacting me!',
    text: `Hi,

      Thank you for reaching out to me.

      I've received your message and will get back to you as soon as possible.

      Regards,
      Noor Muhammad

      `,
  };

  try {
    await transporter.sendMail(option);

    return true;
  } catch (error) {
    console.log(error);

    return false;
  }
};

const receiveMessage = async (name: string, sender: string, text: string) => {
  const option = {
    from: sender,
    to: process.env.GMAIL_USER,
    subject: 'New Message from ConnectWithNoor Website',
    text: `
      Sender name: ${name}
      Sener Email: ${sender}
      Sender Message: ${text}
      `,
  };

  try {
    await transporter.sendMail(option);

    return true;
  } catch (error) {
    console.log(error);

    return false;
  }
};

export { confirmationToSender, receiveMessage };
