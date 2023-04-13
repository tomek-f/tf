import classnames from 'classnames';

interface Props {
  className?: string;
  active?: boolean;
}

export function linkClasses({ className, active }: Props) {
  return classnames(
    'inline-flex gap-2 items-center link link-hover',
    'transition-colors duration-300',
    active ? 'link-accent' : 'link-secondary',
    className,
  );
}
