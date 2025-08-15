"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.writeTrFieldSchema = void 0;
const writeTrFieldSchema = ({ fileWriter: { writer, writeImport }, dmmf, getSingleFileContent = false, }) => {
    const { useMultipleFiles } = dmmf.generatorConfig;
    if (useMultipleFiles && !getSingleFileContent) {
        writeImport('{ z }', 'zod');
    }
    writer
        .blankLine()
        .writeLine(`export const TrFieldSchema = z.object({`)
        .withIndentationLevel(1, () => {
        writer.writeLine('th: z.string(),').withIndentationLevel(1, () => {
            writer.writeLine(`en: z.string()`);
        });
    })
        .writeLine(`});`);
    writer
        .blankLine()
        .writeLine(`export type TrFieldType = z.infer<typeof TrFieldSchema>;`);
    if (useMultipleFiles && !getSingleFileContent) {
        writer.blankLine().writeLine(`export default TrFieldSchema`);
    }
};
exports.writeTrFieldSchema = writeTrFieldSchema;
//# sourceMappingURL=writeTrFieldSchema.js.map