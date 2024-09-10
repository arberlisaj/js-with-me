async function displayUsers(users) {
  const usersList = document.getElementById("usersList");

  if (usersList) {
    usersList.innerHTML = "";

    users.forEach((user) => {
      const li = document.createElement("li");
      li.textContent = user.name;
      usersList.appendChild(li);
    });
  } else {
    console.error('Element with ID "usersList" not found');
  }
}

export default displayUsers;
