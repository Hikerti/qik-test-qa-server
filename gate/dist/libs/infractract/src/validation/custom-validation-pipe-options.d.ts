import { ValidationPipeOptions as IValidationPipeOptions } from '@nestjs/common';
import { ValidationError as ClassValidatorValidationError } from 'class-validator';
import { CustomValidationError } from './custom-validation-error';
export declare class ValidationPipeOptions implements IValidationPipeOptions {
    transform: boolean;
    whitelist: true;
    forbidNonWhitelisted: true;
    constructor();
    exceptionFactory(errors: ClassValidatorValidationError[]): CustomValidationError;
}
export declare namespace ValidationPipeOptions {
    const handleSingleError: (e: ClassValidatorValidationError) => string | null;
    const handleErrorsArray: (errors: ClassValidatorValidationError[]) => string;
}
