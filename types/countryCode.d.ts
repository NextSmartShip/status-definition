export type CountryCodeStatus = "Operating" | "Suspended"

export type CountryCode = {
  status: Record<CountryCodeStatus, number>
}