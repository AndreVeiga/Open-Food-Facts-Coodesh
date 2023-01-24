import Router from 'express'

import Produtc from '@/infra/http/controllers/produtc'

const routes = Router()

routes.get("/v1/products", Produtc.index)
routes.post("/v1/products", Produtc.create)

routes.put("/v1/products/:code", Produtc.update)
routes.delete("/v1/products/:code", Produtc.delete)
routes.get("/v1/products/:code", Produtc.getByCode)
export default routes