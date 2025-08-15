import { WriteFieldOptions } from '../../types';

export const writeTrField = (
  { writer, field }: WriteFieldOptions,
  needTransform?: boolean,
) => {
  const zodField = needTransform
    ? 'JsonValueSchema.transform(TrFieldSchema.parse)'
    : 'TrFieldSchema';
  writer
    .conditionalWrite(field.omitInModel(), '// omitted: ')
    .write(`${field.formattedNames.original}: ${zodField}`)
    .conditionalWrite(field.isList, `.array()`)
    .conditionalWrite(field.isNullable, `.nullable()`) // needs to be nullable instead of optional to adhere to the type returned by Prisma
    .write(`,`)
    .newLine();
};
