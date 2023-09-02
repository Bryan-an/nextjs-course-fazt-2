import Users from '@/components/users';

const fetchUsers = async () => {
  const res = await fetch('https://reqres.in/api/users');
  const { data } = await res.json();
  return data;
};

const HomePage = async () => {
  const users = await fetchUsers();

  return <Users users={users} />;
};

export default HomePage;
