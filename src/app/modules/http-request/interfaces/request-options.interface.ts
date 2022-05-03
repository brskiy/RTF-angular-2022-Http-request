import { HttpHeaders } from '@angular/common/http';
import { Subject } from 'rxjs';
import { RequestMethodType, RequestResponseType, ContentType } from '../enums';

export interface IRequestOptions<F = null> {
    url: string;
    method?: RequestMethodType;
    timeout?: number;
    params?: string | URLSearchParams | {
        [key: string]: any | any[];
    };
    headers?: HttpHeaders;
    withCredentials?: boolean;
    responseType?: RequestResponseType;
    unsubscriber?: Subject<void>,
    contentType?: ContentType,
    body?: F | null;
}
