import { registerEnumType } from '@nestjs/graphql'

export enum Gender {
  Female = '女性',
  Male = '男性',
  Other = 'その他',
  Unknown = '未選択',
}

registerEnumType(Gender, {
  description: '性別',
  name: 'Gender',
  valuesMap: {
    Female: { description: Gender.Female },
    Male: { description: Gender.Male },
    Other: { description: Gender.Other },
    Unknown: { description: Gender.Unknown },
  },
})
