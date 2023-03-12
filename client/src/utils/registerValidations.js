export const PASSWORD_REGEX = /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/;
export const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const isFormCompleted = (data) => {
  const form = { ...data };
  delete form.image;
  for (let key in form) {
    if (!data[key]) return false;
  }
  if (form.password !== form._confirmed_password) return false;
  return true;
};
export const validateFields = (data, errors) => {
  const newErrors = { ...errors };
  if (!PASSWORD_REGEX.test(data.password) && data.password) {
    newErrors.password = true;
  } else {
    newErrors.password = false;
  }
  if (data.password !== data._confirmed_password && data.password) {
    newErrors._confirmed_password = true;
  } else {
    newErrors._confirmed_password = false;
  }
  if (!EMAIL_REGEX.test(data.email) && data.email) {
    newErrors.email = true;
  } else {
    newErrors.email = false;
  }
  return newErrors;
};
