interface LoadingProps {
  size?: 'sm' | 'md' | 'lg';
  text?: string;
  fullScreen?: boolean;
}

export default function Loading({
  size = 'md',
  text = 'Loading...',
  fullScreen = false,
}: LoadingProps) {
  const sizes = {
    sm: 'h-8 w-8 border-2',
    md: 'h-12 w-12 border-3',
    lg: 'h-16 w-16 border-4',
  };

  const spinner = (
    <div className="text-center">
      <div
        className={`${sizes[size]} border-blue-600 border-t-transparent rounded-full animate-spin mx-auto`}
      />
      {text && <p className="mt-4 text-gray-600">{text}</p>}
    </div>
  );

  if (fullScreen) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        {spinner}
      </div>
    );
  }

  return spinner;
}