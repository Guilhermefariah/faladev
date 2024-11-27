'use client'

import { RegisterView } from './register.view'
import { useUserModel } from './user.model'

import { HttpAxiosAdapter } from '@/infra/http/HttpClient'
import { UserService } from '@/services/UserService/User.service'

export default function RegisterHome() {
	const httpAxiosAdapter = new HttpAxiosAdapter()
	const userService = new UserService(httpAxiosAdapter)
	const methods = useUserModel(userService)
	return <RegisterView {...methods} />
}
