import { createUser, uploadPhoto } from './utils';

export default async function asyncUploadUser() {
  const u = await createUser();
  const p = await uploadPhoto();

  u.then((d) => console.log(d));
  p.then((d) => console.log(d));
  return {};
}
