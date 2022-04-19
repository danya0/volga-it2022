export const checkDevelopmentMode = (text: string): string | null => {
    return process.env.NODE_ENV === 'development' ? text : null
}