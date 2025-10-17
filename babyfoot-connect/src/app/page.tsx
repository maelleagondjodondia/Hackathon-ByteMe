async function getUsers() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL ?? ''}/api/users`, { cache: 'no-store' });
  if (!res.ok) throw new Error('Failed to fetch');
  return res.json();
}

export default async function Home() {
  const users = await getUsers();
  return (
    <main className="p-6">
      <h1 className="text-2xl font-semibold mb-4">Users</h1>
      <ul className="space-y-2">
        {users.map((u: any) => (
          <li key={u.id} className="border rounded p-3">
            {u.email}
          </li>
        ))}
      </ul>
    </main>
  );
}
