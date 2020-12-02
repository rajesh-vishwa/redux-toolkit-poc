export type LayoutItem = {
    w: number,
    h: number,
    x: number,
    y: number,
    i: string,
    minW?: number,
    minH?: number,
    maxW?: number,
    maxH?: number,
    moved?: boolean,
    static?: boolean,
    isDraggable?: boolean,
    isResizable?: boolean
  };

  export type Layout = Array<LayoutItem>;