export interface Role {
  name: string;
  validationFunction: () => boolean | Promise<boolean>;
}
