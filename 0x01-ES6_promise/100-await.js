import { createUser, uploadPhoto } from './utils';

export default async function asyncUploadUser() {
  return Promise.allSettled([await uploadPhoto(), await createUser()])
    .then((d) => {
      for (const i of d) {
        if (i.status === 'rejected') return { photo: null, user: null};
      }
      return { photo: d[0].value, user: d[1].value};
    });
}
