import {
  registerDecorator,
  ValidationArguments,
  ValidationOptions,
} from 'class-validator'

export function IsEqualTo(
  property: string,
  validationOptions?: ValidationOptions
) {
  return (object: unknown, propertyName: string) => {
    registerDecorator({
      constraints: [property],
      name: 'isEqualTo',
      options: validationOptions,
      propertyName,
      target: object.constructor,
      validator: {
        defaultMessage(args: ValidationArguments) {
          const [relatedPropertyName] = args.constraints
          return `${propertyName}と${relatedPropertyName}が一致しません`
        },

        validate(value: unknown, args: ValidationArguments) {
          const [relatedPropertyName] = args.constraints
          const relatedValue = (args.object as unknown)[relatedPropertyName]
          return value === relatedValue
        },
      },
    })
  }
}
