import { createUser, uploadPhoto } from './utils';

export default async function asyncUploadUser() {
  const u = createUser();
  const p = uploadPhoto();
  let r = {};

  u.then((d) => {
    r.user = d;
  })
    .catch(() => {
      r = { photo: null, user: null };
      return r;
    });

  p.then((d) => {
    r.photo = d;
  })
    .catch(() => {
      r = { photo: null, user: null };
      return r;
    });

  return r;
}
