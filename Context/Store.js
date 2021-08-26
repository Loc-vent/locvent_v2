import React, {useState, createContext} from 'react';

const initState = {
  broadCast: {
    id: '',
    message: '',
  },
  centralAdmin: {
    id: '',
    isAdmin: false,
  },
  experts: {
    id: '',
    lastLogin: '',
    region: '',
    woreda: '',
  },
  generalUsers: {
    id: '',
    woreda: '',
    region: '',
    report: '',
  },
  locust: {
    id: '',
    locustColor: '',
    locustImageLocation: '',
    locustDescription: '',
    locustTypeId: '',
    licustPhaseId: '',
  },
  locustPhase: {
    id: '',
    name: '',
    locustPhaseDescription: '',
  },
  locustType: {
    id: '',
    name: '',
  },
  messages: {
    userId: '',
    message: '',
    date: '',
  },
  news: {
    id: '',
    newsHeader: '',
    date: '',
    newsContent: '',
    newsPhotoLocation: '',
    newscategory: '',
  },

  newsCategory: {
    id: '',
    categoryName: '',
  },
  region: {
    id: '',
    regionName: '',
  },
  report: {
    id: '',
    reporterId: '',
    reportLatitude: '',
    reportLongitude: '',
    reportPhotoLocation: '',
    DdetectedLocust: '',
  },
  user: {
    id: '',
    userName: '',
    phoneNumber: '',
    firstName: '',
    lastName: '',
    gender: '',
    centralAdmin: '',
    experts: '',
    generalUsers: '',
    role: '',
    lastLogin: '',
    notification: [],
  },

};
export const Context = createContext(initState);
export default function Store({children}) {
  const [state, setState] = useState(initState);
  return <Context.Provider value={{...state}}>{children}</Context.Provider>;
}
