import { Schema } from 'form-render';

export const schemaTemplate: Schema = {
  type: 'object',
  properties: {
    cmd: {
      title: '命令',
      type: 'string',
      required: true,
      rules: [
        {
          pattern: '^[A-Za-z0-9]+$',
          message: '只允许填写英文字母和数字',
        },
      ],
    },
    args: {
      title: '目标',
      description: '设置要修改的目标数据',
      type: 'array',
      items: {
        type: 'object',
        properties: {
          target: {
            title: '组件',
            type: 'string',
            required: true,
            widget: 'select',
            props: {
              options: [],
            },
          },
          field: {
            title: '数据',
            type: 'string',
            required: true,
            widget: 'select',
            props: {
              options: [],
            },
          },
          type: {
            title: '类型',
            type: 'string',
            required: true,
            widget: 'select',
            props: {
              options: [],
            },
          },
        },
      },
    },
    desc: {
      title: '描述',
      type: 'string',
      required: true,
      rules: [
        {
          // pattern: '^[A-Za-z0-9]+$',
          message: '',
        },
      ],
    },
  },
};
