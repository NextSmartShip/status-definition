export type CycleCountStatus = "New" | "SendFailed" | "SendSuccess" | "ConfirmFailed" | "Confirm"

export type CycleCount = {
  status: Record<CycleCountStatus, number>
}