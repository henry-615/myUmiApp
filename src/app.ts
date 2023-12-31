// 运行时配置

import { RunTimeLayoutConfig } from '@umijs/max';

// 全局初始化数据配置，用于 Layout 用户信息和权限初始化
// 更多信息见文档：https://umijs.org/docs/api/runtime-config#getinitialstate
export async function getInitialState(): Promise<{
  name: string;
  title: string;
}> {
  return { name: '@umijs/max', title: 'MyZP1' };
}

export const layout: RunTimeLayoutConfig = ({ initialState }: any) => {
  return {
    title: initialState.title,
    logo: 'https://img.alicdn.com/tfs/TB1YHEpwUT1gK0jSZFhXXaAtVXa-28-27.svg',
    menu: {
      locale: false,
    },
  };
};
