import { getReq, postReq } from "@/utils/request"
export const getMenuInfo = (data: any): Promise<any> =>
   getReq(`v1/article`, data)
export const getSearchByKeyword = (data: any): Promise<any> =>
   getReq(`v1/article/search`, data)
export const getArticleDetail = (data: any): Promise<any> =>
   getReq(`v1/article/detail`, data)
export const getArticleStatistics = (data: any): Promise<any> =>
   getReq(`v1/article/statistics`, data)
export const addArticle = (data: any): Promise<any> =>
   postReq(`v1/article/add`, data)
export const operatArticlePraise = (data: any): Promise<any> =>
   postReq(`v1/article/praise`, data)
export const operatArticleView = (data: any): Promise<any> =>
   postReq(`v1/article/view`, data)
export const getArticlePraiseNum = (data: any): Promise<any> =>
   getReq(`v1/article/praisenum`, data)
export const getCategory = (data: any): Promise<any> =>
   getReq(`v1/category`, data)