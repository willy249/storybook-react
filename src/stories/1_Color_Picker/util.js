/**
 * hsl 函數，用於產生 hsl 格式的顏色值
 * @param {*} h - 色相值，範圍從 0 到 359
 * @param {*} s - 飽和度值，範圍從 0 到 100
 * @param {*} l - 亮度值，範圍從 0 到 100
 * @returns 返回 hsl 格式的顏色值
 */
export const hsl = (h, s, l) => `hsl(${h},${s}%,${l}%)`;
