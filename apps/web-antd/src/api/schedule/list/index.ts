import type { ListQuery, ListVO } from './module';

import { requestClient } from '#/api/request';

/**
 * 查询项目清单列表
 */
export function listListApi(params?: ListQuery) {
  return requestClient.get<ListVO[]>('/schedule/list/list', { params });
}

/**
 * 导出项目清单列表
 * @param params
 * @returns
 */
// export function listExport(params?: ListQuery) {
//   return commonExport('/schedule/list/export', params ?? {});
// }

/**
 * 查询项目清单详细
 * @param listId id
 * @returns
 */
// export function listInfo(listId: ID) {
//   return requestClient.get<ListVO>({ url: `/schedule/list/${listId}` });
// }

/**
 * 新增项目清单
 * @param data
 * @returns
 */
// export function listAdd(data: ListForm) {
//   return requestClient.postWithMsg<void>({ url: '/schedule/list', data });
// }

/**
 * 更新项目清单
 * @param data
 * @returns
 */
// export function listUpdate(data: ListForm) {
//   return requestClient.putWithMsg<void>({ url: '/schedule/list', data });
// }

/**
 * 删除项目清单
 * @param listId id
 * @returns
 */
// export function listRemove(listId: ID | IDS) {
//   return requestClient.deleteWithMsg<void>({ url: `/schedule/list/${listId}` });
// }
