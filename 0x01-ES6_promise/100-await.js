import { createUser, uploadPhoto } from './utils';

export default async function asyncUploadUser() {
  return Promise.all([createUser(), uploadPhoto()])
    .then((d) => d);
}
