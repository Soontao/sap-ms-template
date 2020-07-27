using {Example} from '../db/Example';

// add annotations here, e.g. security or impl
service ExampleService {

  // just expose a full projection for 'Example' table
  entity Examples as projection on Example;

}
