import "./User.css";
import { IUser } from "../redux-toolkit/interfaces/IUser";

interface UserProps {
  user: IUser;
}

function User({ user }: UserProps) {
  return (
    <div>
      <p className={user.isActive ? "success" : "error"}>
        {user.name}
      </p>
    </div>
  );
}

export default User;
