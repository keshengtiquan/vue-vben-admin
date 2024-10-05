<script setup lang="ts">
import { Page, type VbenFormProps } from '@vben/common-ui';

import { message } from 'ant-design-vue';

import { useVbenVxeGrid, type VxeGridProps } from '#/adapter';
import { listListApi } from '#/api/schedule/list';

interface RowType {
  category: string;
  color: string;
  id: string;
  price: string;
  productName: string;
  releaseDate: string;
}
const formOptions: VbenFormProps = {
  schema: [
    {
      label: '序号',
      componentProps: {
        placeholder: '请输入序号',
      },
      fieldName: 'serialNumber',
      component: 'Input',
    },
    {
      label: '项目编码',
      fieldName: 'itemCode',
      component: 'Input',
    },
    {
      label: '项目名称',
      fieldName: 'listName',
      component: 'Input',
    },
    {
      label: '项目特征',
      fieldName: 'listTrait',
      component: 'Input',
    },
  ],
};

const gridOptions: VxeGridProps<RowType> = {
  checkboxConfig: {
    highlight: true,
    labelField: 'name',
  },
  columns: [
    { title: '序号', field: 'serialNumber', width: 50 },
    { align: 'left', title: 'Name', type: 'checkbox', width: 100 },
    { title: '项目编码', field: 'itemCode' },
    { title: '项目名称', field: 'listName' },
    { title: '项目特征', field: 'listTrait' },
    { title: '单位', field: 'field' },
    { title: '清单工程量', field: 'listQuantity' },
    { title: '单价', field: 'unitPrice' },
    { title: '合价', field: 'combinedPrice' },
  ],
  height: 'auto',
  keepSource: true,
  pagerConfig: {},
  proxyConfig: {
    ajax: {
      query: async ({ page }, formValues) => {
        message.success(`Query params: ${JSON.stringify(formValues)}`);
        await listListApi({
          page: page.currentPage,
          pageSize: page.pageSize,
          ...formValues,
        });
        return {};
      },
    },
  },
};

const [Grid] = useVbenVxeGrid({ formOptions, gridOptions });
</script>

<template>
  <Page auto-content-height>
    <Grid />
  </Page>
</template>

<style scoped></style>
