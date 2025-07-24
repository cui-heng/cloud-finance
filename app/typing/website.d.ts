declare namespace Website {
  interface Menu {
    menuCode: string;
    menuName: string;
    sonMenus?: Menu[];
  }

  interface Article {
    id: string;
    title: string;
    content: string;
    coverImg: string;
    newsType: string;
    dataStatus: string;
    likeNumber: string;
    browseNumber: number;
    createTime: string;
    updateTime?: string;
  }

  interface FetchListResponse<T = any> {
    list?: T[];
    total: number;
  }
}
