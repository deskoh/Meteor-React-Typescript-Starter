// Type definitions for aldeed:simple-schema meteor package
// Project: https://atmospherejs.com/aldeed/simple-schema
// Definitions by:  Dave Allen <https://github.com/fullflavedave>

interface IAldeedSimpleSchemaPropertyAttributes {
  type: any | any[];
  label?: string | Function;
  min?: number | Date;
  max?: number | Date;
  exclusiveMin?: boolean;
  exclusiveMax?: boolean;
  minCount?: number;
  maxCount?: number;
  optional?: boolean;
  allowedValues?: any[];
  regEx?: RegExp;
  blackbox?: boolean;
  trim?: boolean;
  custom?: Function;
  defaultValue?: any;
  autoValue?: Function;
  decimal?: boolean;

  /**
   * Index for collection
   * Can be true, -1 or 1
   * @type {number|boolean}
   */
  index?:number|boolean;

  /**
   * Unique flag for index
   * @type {boolean}
   */
  unique?: boolean;

  /**
   * Sparce flag for index
   * @type {boolean}
   */
  sparse?: boolean;
}

interface SimpleSchemaDefinition {
  [property: string]: IAldeedSimpleSchemaPropertyAttributes;
}

interface ValidateOptions {
  modifier?: boolean;
  upsert?: boolean;
  extendedCustomContext: { [key: string]: any };
}

interface SimpleSchemaCleanOptions {
  filter?: boolean;
  autoConvert?: boolean;
  removeEmptyStrings?: boolean;
  trimStrings?: boolean;
  getAutoValues?: boolean;
  isModifier?: boolean;
  extendedAutoValueContext?: any;
}

interface SimpleSchema_Static {
  new(definition: SimpleSchemaDefinition|SimpleSchema_Instance[]): SimpleSchema_Instance;
  extendOptions(options: { [option: string]: any }): void;
  addValidator(validator: Function): void;
  messages(messageKeysAndTexts: { [errorKey: string]: string; /** Text for that error **/ } | { exp: RegExp; msg: string; }[]): void;
  debug(isDebugging: boolean): void;
  RegEx: { Email: RegExp, WeakDomain: RegExp, Url: RegExp, Domain: RegExp, IP: RegExp, IPv4: RegExp, IPv6: RegExp, Id: RegExp, ZipCode: RegExp};
}

interface SimpleSchema_Instance {
  messages(messages: Object): void;
  schema(): SimpleSchema_Static;
  validate(obj: any, options?: ValidateOptions): boolean;
  validateOne(obj: any, key: string, options: ValidateOptions): boolean;
  clean(obj: any, options?: SimpleSchemaCleanOptions): void;
  addValidator(validator: Function): void;
  newContext(): {
    validate(obj: any, options?: ValidateOptions): boolean;
    validateOne(obj: any, key: string, options: ValidateOptions): boolean;
    isValid(): boolean;
    invalidKeys(): { name: string; type: any }[];
    keyIsInvalid(key: string): boolean;
    keyErrorMessage(key: string): string;
    resetValidation(): void;
  };
  validator(): (...args: any[]) => boolean;
}

declare const SimpleSchema: SimpleSchema_Static;

declare module 'meteor/aldeed:simple-schema' {
  export const SimpleSchema: SimpleSchema_Static;
  type SimpleSchema = SimpleSchema_Instance;
}
