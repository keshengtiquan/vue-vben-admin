import type { BaseEntity, PageQuery } from '#/api/base';

export interface ListVO {
  /**
   * 清单ID
   */
  listId: number | string;

  /**
   * 序号
   */
  serialNumber: number;

  /**
   * 项目编码
   */
  itemCode: string;

  /**
   * 项目名称
   */
  listName: string;

  /**
   * 项目特征
   */
  listTrait: string;

  /**
   * 单位
   */
  unit: string;

  /**
   * 清单工程量
   */
  listQuantity: number;

  /**
   * 单价
   */
  unitPrice: number;

  /**
   * 合价
   */
  combinedPrice: number;
}

export interface ListForm extends BaseEntity {
  /**
   * 清单ID
   */
  listId?: number | string;

  /**
   * 序号
   */
  serialNumber?: number;

  /**
   * 项目编码
   */
  itemCode?: string;

  /**
   * 项目名称
   */
  listName?: string;

  /**
   * 项目特征
   */
  listTrait?: string;

  /**
   * 单位
   */
  unit?: string;

  /**
   * 清单工程量
   */
  listQuantity?: number;

  /**
   * 单价
   */
  unitPrice?: number;

  /**
   * 合价
   */
  combinedPrice?: number;
}

export interface ListQuery extends PageQuery {
  /**
   * 序号
   */
  serialNumber?: number;

  /**
   * 项目编码
   */
  itemCode?: string;

  /**
   * 项目名称
   */
  listName?: string;

  /**
   * 项目特征
   */
  listTrait?: string;

  /**
   * 单位
   */
  unit?: string;

  /**
   * 清单工程量
   */
  listQuantity?: number;

  /**
   * 单价
   */
  unitPrice?: number;

  /**
   * 合价
   */
  combinedPrice?: number;

  /**
   * 日期范围参数
   */
  params?: any;
}
