export default function signUpUser(firstName, lastName) {
  return new Promise((resolve, reject) => {
    if (resolve) resolve({ firstName, lastName }); else reject();
  });
}
