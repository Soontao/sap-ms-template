// split db definitions in different (npm) package is OK
using {cuid} from '@sap/cds/common';

entity Example : cuid {
  Name : String(20)
}
