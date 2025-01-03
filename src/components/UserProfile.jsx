import { UserFavouriteFoods } from "./UserFavouriteFoods";

export const UserProfile = () =>{
  return (
    <div>
      <p>Username: Bob</p>
      <div>
        <span>Email: </span>
        <span>example@gmail.com</span>
      </div>
      <UserFavouriteFoods />
    </div>
  );
}
