import { z } from 'zod'

import { UserSchema } from './user.schema'

export type Status = 'success' | 'error'

export type RegistrationResult = {
    title: string
    description: string
    status: Status
}

export type UserRegisterData = z.infer<typeof UserSchema>