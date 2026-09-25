import { FormEvent, useState } from "react";
import { useAddUserMutation } from "../redux-toolkit/api/usersApi";

function UserForm() {
  const [name, setName] = useState("");
  const [addUser, { isLoading }] = useAddUserMutation();

  const handlerAddUser = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const trimmedName = name.trim();

    if (!trimmedName) {
      return;
    }

    try {
      await addUser({
        name: trimmedName,
        isActive: true,
      }).unwrap();

      setName("");
    } catch (error) {
      console.error("Failed to add user:", error);
    }
  };

  return (
    <form onSubmit={handlerAddUser}>
      <label>
        Name:{" "}
        <input
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
          placeholder="Enter name"
        />
      </label>{" "}
      <button type="submit" disabled={isLoading}>
        {isLoading ? "Saving..." : "Save"}
      </button>
    </form>
  );
}

export default UserForm;
