export type ShelveStatus = 'New' | 'SentFailed' | 'Sent' | 'Pending' | 'PartialShelve' | 'Close' | 'Finish';

export type Shelve = {
  status: Record<ShelveStatus, number>;
};
