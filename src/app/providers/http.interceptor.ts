import { HttpInterceptor, HttpEvent, HttpRequest, HttpHandler } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

/**
 * Interceptor là một angular service và bắt buộc phải có function `intercept` như dưới đây.
 * (Nó phải `implements interface HttpInterceptor`)
 *
 * Interceptor sẽ đi cùng với TẤT CẢ các request khi gửi từ angular app.
 *
 * Để sử dụng được interceptor, xem app.module.ts phần providers
 */
@Injectable()
export class AuthHttpInterceptor implements HttpInterceptor {
  public intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // Angular bắt buộc chúng ta phải tạo mới request mỗi khi chúng ta thay đổi thuộc tính
    // nên ta sử dụng function `clone` và gắn thuộc tính mong muốn
    // ở đây là header
    const reqClone = req.clone({
      setHeaders: {
        'x-access-token': 'acb-xyz',
      },
    });
    return next.handle(reqClone);
  }
}
