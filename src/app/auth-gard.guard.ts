import { CanActivateFn } from '@angular/router';

export const authGardGuard: CanActivateFn = (route, state) => {
  console.log(route, state)
  const [token, cookie, ...rest] = document.cookie.split("=");
  
  if(!token || !cookie) {
    return false;
  }

  return true;
};
