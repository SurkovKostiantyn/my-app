// app/utils/formatText.ts

/**
 * Преобразует первую букву строки в заглавную.
 * @param {string} str - Строка для преобразования.
 * @returns {string} Строка с первой заглавной буквой.
 */
export function capitalizeFirstLetter(str: string): string {
    if (!str) return str;
    return str.charAt(0).toUpperCase() + str.slice(1);
}

/**
 * Обрезает текст до указанной длины и добавляет многоточие, если текст длиннее.
 * @param {string} str - Текст для обрезки.
 * @param {number} length - Максимальная длина текста.
 * @returns {string} Обрезанный текст с многоточием.
 */
export function truncateText(str: string, length: number): string {
    if (str.length <= length) return str;
    return str.substring(0, length) + '...';
}
