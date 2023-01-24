import Router from 'express'

import Produtc from '@/infra/http/controllers/produtc'

const routes = Router()

routes.get("/products", Produtc.index)
routes.post("/products", Produtc.create)

export default routes