'use client'

import { zodResolver } from "@hookform/resolvers/zod"
import { useState } from 'react'
import { useForm } from "react-hook-form"

import { registrationUserStatusMessages } from "./registrationUserStatusMessages"
import { UserSchema } from "./user.schema"
import { RegistrationResult, UserRegisterData } from "./user.type"

import { useMutationUser } from "@/Mutate/UserMutate/useMutationUser"
import { IUserService } from "@/services/UserService/User.service"

export const useUserModel = (userService: IUserService) => {
  const [registrationResult, setRegistrationResult] = useState<RegistrationResult | null>(null)
  const onRegistrationSuccess = () => setRegistrationResult(registrationUserStatusMessages.success)
  const onRegistrationError = () => setRegistrationResult(registrationUserStatusMessages.error)
  const handleSubmitMentoring = (data: UserRegisterData) => createUser(data)

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<UserRegisterData>({
    resolver: zodResolver(UserSchema),
  })
  const submitButtonLabel = isSubmitting ? 'Registrando...' : 'Cadastrar'

  const { mutate: createUser } = useMutationUser({
    service: userService,
    onError: onRegistrationError,
    onSuccess: onRegistrationSuccess,
  })

  return {
    register,
    handleSubmit,
    handleSubmitMentoring,
    errors,
    registrationResult,
    isSubmitting,
    submitButtonLabel,
  }
}


