export function loadRoutes(data) {

    return {
      type: '@routes/REQUEST_SUCCESS',
      data   
    };
  }
  
  export function loadRoutesSuccess(data) {
     
    return {
      type: '@routes/LOAD_SUCCESS',
      data
    };
  }
