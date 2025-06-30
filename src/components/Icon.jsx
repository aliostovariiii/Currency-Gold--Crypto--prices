import Clock from '../assets/icons/clock.svg?react';
import Calendar from '../assets/icons/calendar.svg?react';
import TrendingUp from '../assets/icons/trending-up.svg?react';
import TrendingDown from '../assets/icons/trending-down.svg?react';
import Plus from '../assets/icons/plus.svg?react';
import Minus from '../assets/icons/minus.svg?react';
import X from '../assets/icons/x.svg?react';
import Rate from '../assets/icons/rate.svg?react';

const icons = {
  clock: Clock,
  calendar: Calendar,
  'trending-up': TrendingUp,
  'trending-down': TrendingDown,
  plus: Plus,
  minus: Minus,
  x: X,
  rate: Rate,
};

export default function Icon({ name, size = 24, color = 'currentColor', className = '' }) {
  const SvgIcon = icons[name];

  if (!SvgIcon) {
    console.warn(`آیکون "${name}" پیدا نشد.`);
    return null;
  }

  return (
    <SvgIcon width={size} height={size} fill={color} className={className} />
  );
}
