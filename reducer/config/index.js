const initialState = {
  identification: {
    version: '1.0.0',
    state: 'production',
  },
}

const config = (state = initialState, {
  type,
  payload
}) => {
  switch (type) {

    default:
      return state;
  }
};
export default config;