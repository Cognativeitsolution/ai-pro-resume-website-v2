export const getTailwindTransitionClass = (
  show: boolean,
  direction: 'left' | 'right' | 'top' | 'bottom' = 'left',
  duration: number = 1000
): string => {
  const baseDurations : any = {
    200: 'duration-200',
    500: 'duration-500',
    1000: 'duration-1000',
    1500: 'duration-[1500ms]',
    2000: 'duration-[2000ms]',
    2500: 'duration-[2500ms]',
  };

  const base = `transition-all ${baseDurations[duration] || 'duration-2000'} ease-out transform`;

  const hiddenMap = {
    left: 'opacity-0 -translate-x-20',
    right: 'opacity-0 translate-x-20',
    top: 'opacity-0 -translate-y-20',
    bottom: 'opacity-0 translate-y-20',
  };

  const visible = 'opacity-100 translate-x-0 translate-y-0';

  return `${base} ${show ? visible : hiddenMap[direction]}`;
};
