import express, { type NextFunction, type Request, type Response } from 'express'
import http from 'http'
import { ApolloServer } from '@apollo/server'
import { expressMiddleware } from '@apollo/server/express4'
import { type GraphQLFormattedError } from 'graphql'
import { buildSubgraphSchema } from '@apollo/subgraph'
import { ApolloServerPluginDrainHttpServer } from '@apollo/server/plugin/drainHttpServer'
import cors from 'cors'
import schema from './graphql/schema/schema'
import initCtx from './graphql/context'
import { createRootRoute } from './routes/api.route'
import { graphqlAuthenticate, restAuthenticate } from './middlewares/auth.middleware'

interface ICustomError {
  message: string
  status?: number
  name: string
}

// eslint-disable-next-line
async function start () {
  const app = express()
  const httpServer = http.createServer(app)
  const server = new ApolloServer({
    schema: buildSubgraphSchema(schema),
    plugins: [
      // Proper shutdown for the HTTP server.
      ApolloServerPluginDrainHttpServer({ httpServer })
    ],
    formatError: (formattedError: GraphQLFormattedError, error: unknown) => {
      console.error('formattedError----', formattedError)
      return formattedError
    }
  })

  await server.start()

  // app.use(logger('dev'));
  // app.use(cookieParser());
  app.use(express.json())
  // app.use(bodyParser.graphql())
  app.use(express.urlencoded({ extended: true }))
  app.use(graphqlAuthenticate)
  app.use(restAuthenticate)

  app.use('/api', createRootRoute())

  app.use(
    '/graphql',
    cors<cors.CorsRequest>(),
    // expressMiddleware accepts the same arguments:
    // an Apollo Server instance and optional configuration options
    expressMiddleware(server, {
      context: initCtx
    })
  )

  app.use((err: ICustomError, req: Request, res: Response, next: NextFunction) => {
    // eslint-disable-next-line
    if (!err.status || (err.status >= 500 && err.status <= 599)) {
      err.status = 500
      err.name = 'INTERNAL_ERROR'
      err.message = 'Internal error'
    }
    res.status(err.status).json({
      name: err.name,
      message: err.message,
      data: null,
      status: err.name
    })
  })

  httpServer.listen({ port: 4003 }, function () {
    console.log('🚀 Server ready at http://localhost:4003/')
  })
}

start().catch((err) => {
  console.log('err', err)
})
