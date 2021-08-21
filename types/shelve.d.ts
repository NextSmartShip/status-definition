export type ShelveStatus = 'NEW' | 'SENT_FAILED' | 'SENT' | 'PENDING' | 'FINISH' 

export type Shelve = {
  status: Record<ShelveStatus, number>;
}
