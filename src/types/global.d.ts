interface LatLang {
  latitude: number;
  longitude: number;
}

interface User {
  firstName: string;
  lastName: string;
  location: LatLang;
  picture: string;
  department: string;
  jobTitle: string;
}

interface SetUserAction {
  type: string;
  payload?: Partial<User>;
}

type UserReducer = User;
