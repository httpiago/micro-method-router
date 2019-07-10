declare module 'micro-method-router' {
  import { RequestHandler } from 'micro'

  export interface ValidHttpMethods {
    get?: RequestHandler,
    head?: RequestHandler,
    post?: RequestHandler,
    put?: RequestHandler,
    delete?: RequestHandler,
    connect?: RequestHandler,
    options?: RequestHandler,
    trace?: RequestHandler,
  };

  export default function(methods: ValidHttpMethods): RequestHandler;
}
