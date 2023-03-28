// 获取图片url
export const getImgUrl = (name:string) => {
  return new URL(`../static/img/${name}`, import.meta.url).href;
};
