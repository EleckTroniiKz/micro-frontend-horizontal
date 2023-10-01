const API_SERVER = "http://localhost:8080";

export const getUsers = () =>
  fetch(`${API_SERVER}/users`).then((res) => res.json());

export const getUserById = (id) =>
  fetch(`${API_SERVER}/users/${id}`).then((res) => res.json());

export const saveUser = (user) => {
  fetch(`${API_SERVER}/users/save/${JSON.stringify(user)}`, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({ user }),
  });
};

export const deleteUser = (id) => {
  fetch(`${API_SERVER}/users/delete/${JSON.stringify(id)}`, {
    method: "DELETE",
    headers: {
      "Content-type": "application/json",
    },
  });
};
