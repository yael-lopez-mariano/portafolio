export type ThemeToggleDesign = {
  button: string;
  moon: string;
  stars: string;
  sun: string;
  thumb: string;
  trackDecor: string;
};

const baseButton =
  'relative h-8 w-[72px] shrink-0 overflow-hidden rounded-full border shadow-soft transition duration-300';

const baseMoon =
  'absolute right-4 top-1/2 z-20 grid h-5 w-5 -translate-y-1/2 place-items-center transition duration-300';

const baseSun =
  'absolute right-2.5 top-1/2 z-20 grid h-5 w-5 -translate-y-1/2 place-items-center rounded-full transition duration-300';

export function getThemeToggleDesign(isDark: boolean): ThemeToggleDesign {
  return {
    button: `${baseButton} ${
      isDark
        ? 'border-[#2f4f8f] bg-[#0f315f]'
        : 'border-[#6be9f2] bg-[#4fe1ec]'
    }`,
    moon: `${baseMoon} ${isDark ? 'text-white opacity-100' : 'opacity-0'}`,
    stars: `absolute right-4 top-1/2 z-20 h-8 w-9 -translate-y-1/2 transition duration-300 ${
      isDark ? 'opacity-100' : 'opacity-0'
    }`,
    sun: `${baseSun} ${
      isDark ? 'opacity-0' : 'bg-[#fff76a] text-[#fff76a] opacity-100 shadow-[4px_3px_0_rgba(216,211,73,0.7)]'
    }`,
    thumb: `absolute left-2 top-1/2 z-10 h-5 w-5 -translate-y-1/2 rounded-full bg-white shadow-[4px_4px_0_rgba(185,192,229,0.95)] transition-all duration-300 ${
      isDark ? 'scale-100 opacity-100' : 'scale-75 opacity-0'
    }`,
    trackDecor: `absolute inset-0 transition duration-300 ${
      isDark
        ? 'bg-[radial-gradient(circle_at_68%_36%,#fff76a_0_2.5px,transparent_3px),radial-gradient(circle_at_86%_56%,#fff76a_0_2px,transparent_2.5px)]'
        : 'bg-[radial-gradient(circle_at_24%_58%,#ffffff_0_9px,transparent_10px),radial-gradient(circle_at_35%_48%,#ffffff_0_11px,transparent_12px),radial-gradient(circle_at_45%_58%,rgba(255,255,255,0.55)_0_8px,transparent_9px)]'
    }`,
  };
}
