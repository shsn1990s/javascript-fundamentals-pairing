const notifyByEmail = (email) => {
  return `Email sent to: ${email}`;
}

const notifyByText = (text) => {
  return `Text sent to: ${text}`;
}

const notify = (email_or_text, method) => {
  return method(email_or_text);
}

module.exports = {
  notifyByEmail,
  notifyByText,
  notify,
}