// inner business logic for domain entities
// ref: https://cap.cloud.sap/docs/get-started/in-a-nutshell#defining-services

/**
 * @param {import("@sap/cds/apis/services").Service} srv
 */
module.exports = (srv) => {

  const { Examples } = srv.entities; // so access the table projection by service

  srv.before('CREATE', Examples, _ctx => {
    // event triggered before record saving to DB
    // force change the payload, do some business logic here
    _ctx.data.Name = '123';
    // console.log("before create")
  });

};
