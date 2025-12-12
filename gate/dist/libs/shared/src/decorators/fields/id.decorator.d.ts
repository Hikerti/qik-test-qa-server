type Options = {
    isOptional?: boolean;
    each?: boolean;
};
export declare const IdField: (options?: Options) => <TFunction extends Function, Y>(target: TFunction | object, propertyKey?: string | symbol, descriptor?: TypedPropertyDescriptor<Y>) => void;
export {};
