import React from 'react';

const fetchUser = async (id) => {
  const res = await fetch(`https://reqres.in/api/users/${id}`);
  const { data } = await res.json();
  return data;
};

const UserPage = async ({ params }) => {
  const user = await fetchUser(params.id);

  return (
    <div className="bg-slate-400 p-10 rounded-md">
      <img src={user.avatar} alt="User avatar" className="m-auto my-4" />
      <h3 className="text-3xl font-bold">
        {user.id} {user.first_name} {user.last_name}
      </h3>
      <p>email: {user.email}</p>
    </div>
  );
};

export default UserPage;
