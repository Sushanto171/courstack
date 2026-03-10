export function generateSecurePassword(length: number = 12): string {
  const lower = "abcdefghijklmnopqrstuvwxyz"
  const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  const numbers = "0123456789"
  const special = "@$!%*?&"

  const all = lower + upper + numbers + special

  const random = (chars: string) =>
    chars[Math.floor(Math.random() * chars.length)]

  let password = [
    random(lower),
    random(upper),
    random(numbers),
    random(special),
  ]

  for (let i = password.length; i < length; i++) {
    password.push(random(all))
  }

  password = password.sort(() => Math.random() - 0.5)

  return password.join("")
}