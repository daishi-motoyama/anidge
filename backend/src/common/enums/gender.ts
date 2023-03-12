import { registerEnumType } from '@nestjs/graphql'

export enum Gender {
  Female = 'FEMALE',
  Male = 'MALE',
  Other = 'OTHER',
  Unknown = 'UNKNOWN',
}

registerEnumType(Gender, {
  description: '性別',
  name: 'Gender',
  valuesMap: {
    Female: { description: '女性' },
    Male: { description: '男性' },
    Other: { description: 'その他' },
    Unknown: { description: '未選択' },
  },
})
