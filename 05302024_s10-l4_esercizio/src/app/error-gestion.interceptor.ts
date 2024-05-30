import { HttpInterceptorFn } from '@angular/common/http';

export const errorGestionInterceptor: HttpInterceptorFn = (req, next) => {
  return next(req);
};
