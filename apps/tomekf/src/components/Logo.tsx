import logo from '../assets/logo.svg';

export interface Props {
  class?: string;
  url?: string;
  size?: 'small' | 'large';
}

const Logo = ({ class: className, url, size = 'large' }: Props) => {
  const sizeClassNames = size === 'large' ? 'w-36 md:w-56' : 'w-24 md:w-44';
  const image = (
    <img
      alt="logo"
      className={['h-auto', sizeClassNames, className].filter(Boolean).join(' ')}
      height={75}
      src={logo}
      width={220}
    />
  );

  if (url) {
    return <a href={url}>{image}</a>;
  }

  return image;
};

export default Logo;
