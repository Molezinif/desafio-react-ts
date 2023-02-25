import { AxiosResponse } from 'axios'

/**
 * Tipar corretamente interfaces
 */
// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface IUser {}

type TFetchUsers = () => any

export type { IUser, TFetchUsers }
