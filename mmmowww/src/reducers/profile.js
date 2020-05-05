//TODO - reducer
import {profile} from 'action/profile';
export const profile =  {
  name: "Сергей",
   subname: "Иванов",
     age: 34,
};

export const profile = (name,subname,age) => ({
		type: PROFILE,
		payload: dataProfile,
});