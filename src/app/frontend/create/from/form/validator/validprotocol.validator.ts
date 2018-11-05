// Copyright 2018 The XCloud Team.
// Copyright 2017 The Kubernetes Authors.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import {HttpClient} from '@angular/common/http';
import {Directive, forwardRef, Input} from '@angular/core';
import {AbstractControl, AsyncValidator, AsyncValidatorFn, NG_ASYNC_VALIDATORS} from '@angular/forms';
import {Observable} from 'rxjs/Observable';
import {debounceTime, map} from 'rxjs/operators';

export const validProtocolValidationKey = 'validProtocol';

/**
 * A validator directive which checks the underlining ngModel's given name is unique or not.
 * If the name exists, error with name `uniqueName` will be added to errors.
 */
@Directive({
  selector: '[kdValidProtocol]',
  providers: [
    {provide: NG_ASYNC_VALIDATORS, useExisting: forwardRef(() => ProtocolValidator), multi: true}
  ]
})
export class ProtocolValidator implements AsyncValidator {
  @Input() isExternal: boolean;

  constructor(private readonly http: HttpClient) {}

  validate(control: AbstractControl): Observable<{[key: string]: boolean}|null> {
    return validateProtocol(this.http, this.isExternal)(control) as
        Observable<{[key: string]: boolean}|null>;
  }
}

export function validateProtocol(http: HttpClient, isExternal: boolean): AsyncValidatorFn {
  return (control: AbstractControl): Observable<{[key: string]: boolean}|null> => {
    if (!control.value) {
      return Observable.of(null);
    } else {
      const protocol = control.value;
      return http
          .post<{valid: boolean}>('api/v1/appdeployment/validate/protocol', {protocol, isExternal})
          .first()
          .pipe(debounceTime(500), map(res => {
                  return !res.valid ? {[validProtocolValidationKey]: true} : null;
                }));
    }
  };
}
