export const generateStdError = errorObj => {
  const errorResponseObject = errorObj.response.data;

  if (errorResponseObject.status === 400) {
    return 'invalid_email_or_pass'
  }
  
  // throw new Error(errorResponseObject)
  // if (errorResponseObject.description) {
  //   console.log(errorResponseObject);
  //   switch (errorResponseObject.status) {
  //     case "400":
  //       throw new Error("errorResponseObject.description");
  //     default:
  //       console.error(errorResponseObject);
  //       throw new Error("errorResponseObject.description");
  //   }
  // }

  // if (errorResponseObject.status === 400) {
  //   console.log(errorResponseObject.description);
    
  //   switch (errorResponseObject.description) {
  //     case "Invalid email or password":
  //       throw new Error("Invalid email or password!");

  //     case "token_expired":
  //       throw new Error("Токен авторизации просрочен");
  //     default:
  //       console.error(errorResponseObject);
  //       throw new Error("errorResponseObject.error");
  //   }
  // }
};