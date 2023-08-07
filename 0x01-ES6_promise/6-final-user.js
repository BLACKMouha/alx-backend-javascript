import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, filename) {

  return Promise.allSettled([signUpUser(firstName, lastName), uploadPhoto(filename)])
    .then((d) => {
      const r = [];

      for (const i of d) {
        if (i.status === 'fulfilled') {
          r.push({ status: i.status, value: i.value });
        } else {
          r.push({
            status: i.status,
            value: `Error: ${filename} cannot be processed`,
          });
        }
      }
      return r;
    });
}
