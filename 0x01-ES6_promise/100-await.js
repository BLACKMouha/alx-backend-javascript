import { createUser, uploadPhoto } from './utils';

export default async function asyncUploadUser() {
  return Promise.all([uploadPhoto(), createUser()])
    .then((d) => {
      for (const i of d) {
        if (i.status === 'rejected') return { photo: null, user: null };
      }

      return { photo: d[0], user: d[1] };
    });
}
