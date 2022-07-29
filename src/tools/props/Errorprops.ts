export const setError = (errorElement: HTMLElement, message: string) => {
    errorElement.innerHTML = message;
    errorElement.style.opacity = '1';
}