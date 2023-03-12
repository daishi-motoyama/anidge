import { registerEnumType } from '@nestjs/graphql'

export enum OrganizationEntityType {
  Corporation = 'CORPORATION',
  Organization = 'ORGANIZATION',
  Person = 'PERSON',
}

registerEnumType(OrganizationEntityType, {
  description: '組織の種類',
  name: 'OrganizationEntityType',
  valuesMap: {
    Corporation: { description: '法人' },
    Organization: { description: '団体' },
    Person: { description: '個人' },
  },
})
