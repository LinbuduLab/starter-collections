import { expectType, expectError } from 'tsd';
import { Promisable } from './tool-type';

declare const promisable: Promisable<string>;
expectType<PromiseLike<string> | string>(promisable);

declare const promisableError: Promisable<string>;
expectError<PromiseLike<string> | string>(promisableError);
