"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.writeTrField = void 0;
const writeTrField = ({ writer, field }, needTransform) => {
    const zodField = needTransform
        ? 'JsonValueSchema.transform(TrFieldSchema.parse)'
        : 'TrFieldSchema';
    writer
        .conditionalWrite(field.omitInModel(), '// omitted: ')
        .write(`${field.formattedNames.original}: ${zodField}`)
        .conditionalWrite(field.isList, `.array()`)
        .conditionalWrite(field.isNullable, `.nullable()`)
        .write(`,`)
        .newLine();
};
exports.writeTrField = writeTrField;
//# sourceMappingURL=writeTrField.js.map