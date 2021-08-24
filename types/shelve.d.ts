export type ShelveStatus = 'New' | 'SentFailed' | 'Sent' | 'Pending' | 'PartialShelve' | 'Finish';

export type Shelve = {
  status: Record<ShelveStatus, number>;
};

