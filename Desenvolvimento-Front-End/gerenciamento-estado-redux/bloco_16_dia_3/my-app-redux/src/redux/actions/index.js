export const VALID_EMAIL = 'VALID-EMAIL';
export const VALID_CLIENTE = 'VALID-CLIENTE';

export const setValidEmail = (payload) => ({
  type: VALID_EMAIL,
  payload,
});

export const setValidCliente = (payload) => ({
  type: VALID_CLIENTE,
  payload,
});
