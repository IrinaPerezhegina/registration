export function generateAuthError(message) {
    switch (message) {
        case "INVALID_PASSWORD":
            return "Пароль или  Email введены некорректно";
        case "EMAIL_EXISTS":
            return "Пользователь с таким Email уже существует";
        default:
            return "Слишком много попыток входа. Попробуйте позднее";
    }
}
