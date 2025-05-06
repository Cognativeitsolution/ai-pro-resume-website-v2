export const getTailwindTransitionClass = (
    show: boolean,
    direction: 'left' | 'right' | 'top' | 'bottom' = 'left'
  ): string => {
    const base = 'transition-all duration-700 ease-out transform';
  
    const hiddenMap = {
      left: 'opacity-0 -translate-x-20',
      right: 'opacity-0 translate-x-20',
      top: 'opacity-0 -translate-y-20',
      bottom: 'opacity-0 translate-y-20',
    };
  
    const visible = 'opacity-100 translate-x-0 translate-y-0';
  
    return `${base} ${show ? visible : hiddenMap[direction]}`;
  };
  