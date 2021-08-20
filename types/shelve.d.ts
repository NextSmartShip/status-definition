export type ShelveStatus = 'NEW' | 'SENT_FAILED' | 'SENT' | 'PENDING' | 'FINISH' 

export interface Shelve {
  status: Record<ShelveStatus, number>;
}
