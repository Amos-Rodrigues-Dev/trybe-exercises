export const VALID_EMAIL = 'VALID-EMAIL';
export const VALID_CLIENTE = 'VALID-CLIENTE';
export const VALID_REMOVE = 'VALID_REMOVE';

export const setValidEmail = (payload) => ({
  type: VALID_EMAIL,
  payload,
});

export const setValidCliente = (payload) => ({
  type: VALID_CLIENTE,
  payload,
});

export const setValidRemove = (payload) => ({
  type: VALID_REMOVE,
  payload,
});
