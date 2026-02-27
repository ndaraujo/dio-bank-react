export const login = (email: string): boolean => {
    if (!email.includes('@')) {
        return false;
    }
    return true;
}