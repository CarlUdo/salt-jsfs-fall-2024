export const convertBytesToMB = (bytes: number, decimals: number) => Number((bytes * 0.000001).toFixed(decimals));

export const convertMBToBytes = (mbs: number) => Math.floor((mbs / 0.000001));
