import { Mutation, useMutation } from '@tanstack/react-query'

import { UserRegisterData } from '@/app/(users)/register/user.type'
import { IUserService } from '@/services/UserService/User.service'

type MutationUserProps = {
    service: IUserService
} & Omit<Mutation<string, Error, UserRegisterData>, 'mutationFn'>

export const useMutationUser =
    ({ service, 
    ... MutationUserProps
}: MutationUserProps) => {
    return useMutation<string, Error, UserRegisterData>({
        mutationFn: data => service.RegisterUser(data),
        ...MutationUserProps,
    })
}