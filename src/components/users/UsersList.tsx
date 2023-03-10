import { useGlobalContext } from '../../context'
import UserCard from './UserCard'

export const ListUsers: React.FC = () => {
  const { users } = useGlobalContext()
  return (
    <>
      {users.map((user) => (
        <UserCard key={`user-card-${user.id}`} user={user} />
      ))}
    </>
  )
}
