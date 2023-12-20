export const generatePassword = (length: number) => {
    const characters =
        "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

    let password = "";

    for (var i = 0, n = characters.length; i < length; ++i) {
        password += characters.charAt(Math.floor(Math.random() * n));
    }

    return password;
};