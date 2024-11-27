import { RegistrationResult, Status } from "./user.type"

export const registrationUserStatusMessages: Record<Status, RegistrationResult> = {
    success: {
        status: 'success',
        title: 'Bem vindo à plataforma!',
        description: ' Vocé vai receber um email de confirmação em breve.',
    },
    error: {
        status: 'error',
        title: 'Oops...',
        description: 'Ocorreu um erro durante seu cadastro.',
    },
}