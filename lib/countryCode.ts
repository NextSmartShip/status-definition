import type { LabelDataType } from '../types/common';
import type { CountryCode, CountryCodeStatus } from '../types/countryCode';

const status: Record<CountryCodeStatus, number> = {
  Operating: 1,
  Suspended: 0,
};

const statusLabels: LabelDataType[] = [
  { id: status.Operating, label: 'Operating' },
  { id: status.Suspended, label: 'Suspended' },
];

const countryCode: CountryCode = {
  status,
  statusLabels,
};

export default countryCode;
