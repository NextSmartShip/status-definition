export enum UnshelveStatusEnum {
  NEW = 'NEW',
  PICKING = 'PICKING',
  PARTIAL_FINISHED = 'PARTIAL_FINISHED',
  FINISHED = 'FINISHED',
}

const status = {
  [UnshelveStatusEnum.NEW]: UnshelveStatusEnum.NEW,
  [UnshelveStatusEnum.PICKING]: UnshelveStatusEnum.PICKING,
  [UnshelveStatusEnum.PARTIAL_FINISHED]: UnshelveStatusEnum.PARTIAL_FINISHED,
  [UnshelveStatusEnum.FINISHED]: UnshelveStatusEnum.FINISHED,
};

const unshelve = {
  status,
  statusEnum: UnshelveStatusEnum,
};

export default unshelve;
