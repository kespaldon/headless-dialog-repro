/**
 * use this composable to check if user is authenticated
 * if guest (unauthenticated), return null,
 * else return user profile
 */
export default function () {
  return useState('user', () => null)
}
