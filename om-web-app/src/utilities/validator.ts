export const FieldFormatValidator = {
  email: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
  password:
    /(^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&.-])[A-Za-z\d@$!%*?&.-]{8,}$)+/,
};