/// <reference types="@types/google.maps" />

import { User } from './interface/User/User'
import { Company } from './interface/Company/Company'
import { CustomMap } from './interface/CustomMap/CustomMap'
// terminal: npx parcel index.html in ./maps dir

const user = new User();
const company = new Company();
const customMap = new CustomMap('map');

customMap.addMarker(user);
customMap.addMarker(company);