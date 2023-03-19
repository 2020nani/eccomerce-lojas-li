export function signInRequest(nome, senha) {
  return {
    type: '@auth/SIGN_IN_REQUEST',
    payload: { nome, senha },
  };
}

export function signInSuccess(token, user) {
  return {
    type: '@auth/SIGN_IN_SUCCESS',
    payload: { token, user },
  };
}

export function signUpRequest(nome, cpf, telefone, senha) {
  return {
    type: '@auth/SIGN_UP_REQUEST',
    payload: { nome, cpf, telefone, senha },
  };
}

export function signFailure() {
  return {
    type: '@auth/SIGN_IN_FAILURE',
  };
}

export function signOut() {
  return {
    type: '@auth/SIGN_OUT',
  };
}
