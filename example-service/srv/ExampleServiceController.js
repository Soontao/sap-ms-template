// define background service or some domain un-related logics
// like custom API, nodejs background job, cache or external call like multi-tenant
const cds = require('@sap/cds');
const { declareHandler, express: { Router } } = require('@sap/ct-server');
const logger = require('@sap/ct-logging').createLogger('example.service');


// for ct-server 'service' lifecycle
// ref: https://github.wdf.sap.corp/ct-server/ct-server#service-lifecycle

// name the ct-server 'service' as 'Controller' to avoid confusing developers (CAP also have 'service')

class ExampleServiceController {

  async init() {

    try {

      logger.debug('initializing example service');

      const router = new Router();

      // expose CDS OData service
      await cds.serve('ExampleService', { logLevel: process.env.CT_LOG_LEVEL || 'info', crashOnError: false })
        .at('/')
        .in(router);

      // access the API at: http://localhost:9000/api/example/$metadata
      declareHandler('/api/example/', router);

      // also, define other custom APIs here

      logger.info('example service initialized');

    } catch (err) {

      logger.error(err, 'Failed to initialize invoice service');

      throw err;

    }

  }

}

module.exports = ExampleServiceController;
