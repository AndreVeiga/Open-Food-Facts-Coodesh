import { ImportProductUseCase } from "@/core/useCases/product/importProdutcs"

const import_data = require('../../../data/file.js')

export class ImportDataIntegration {
  public async importData(useCase: ImportProductUseCase): Promise<void> {
    await import_data(useCase)
  }
}