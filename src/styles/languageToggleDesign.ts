import type { Language } from '../types/language';

export type LanguageToggleDesign = {
  wrapper: string;
  button: string;
  enLabel: string;
  esLabel: string;
  flag: string;
  spainFlag: string;
  ukFlag: string;
  thumb: string;
};

const baseButton =
  'relative h-8 w-[72px] shrink-0 overflow-hidden rounded-full border border-white/80 bg-white shadow-soft transition duration-300';

const baseLabel =
  'text-xs font-black tracking-wide transition duration-300';

export function getLanguageToggleDesign(language: Language): LanguageToggleDesign {
  const isSpanish = language === 'es';

  return {
    wrapper: 'inline-flex h-8 shrink-0 items-center gap-1.5',
    button: baseButton,
    enLabel: `${baseLabel} ${isSpanish ? 'text-[var(--color-muted)]' : 'text-white'}`,
    esLabel: `${baseLabel} ${isSpanish ? 'text-white' : 'text-[var(--color-muted)]'}`,
    flag: `absolute inset-0 transition duration-300 ${
      isSpanish ? 'opacity-100' : 'opacity-100'
    }`,
    spainFlag:
      'absolute inset-0 bg-[linear-gradient(180deg,#aa151b_0_25%,#f1bf00_25%_75%,#aa151b_75%_100%)]',
    ukFlag:
      'absolute inset-0 bg-[linear-gradient(32deg,transparent_0_43%,#ffffff_43%_48%,#c8102e_48%_52%,#ffffff_52%_57%,transparent_57%),linear-gradient(148deg,transparent_0_43%,#ffffff_43%_48%,#c8102e_48%_52%,#ffffff_52%_57%,transparent_57%),linear-gradient(90deg,transparent_0_42%,#ffffff_42%_46%,#c8102e_46%_54%,#ffffff_54%_58%,transparent_58%),linear-gradient(0deg,transparent_0_38%,#ffffff_38%_44%,#c8102e_44%_56%,#ffffff_56%_62%,transparent_62%),linear-gradient(90deg,#012169,#012169)]',
    thumb: `absolute top-1/2 z-30 h-6 w-6 -translate-y-1/2 rounded-full bg-white shadow-[0_6px_12px_rgba(0,0,0,0.35)] transition-all duration-300 ${
      isSpanish ? 'left-[44px]' : 'left-1'
    }`,
  };
}
