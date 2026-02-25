import { useAppSelector } from '../hooks';

export default function useAuth() {
  const { error, initialLoading, loading, user } = useAppSelector(state => state.auth)
  return { error, initialLoading, loading, user }
}