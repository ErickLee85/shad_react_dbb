import { memo, useMemo } from 'react';
import '../App.css';

const ShinyText = memo(({ text, disabled = false, speed = 5, className = '' }) => {
  const style = useMemo(() => ({ 
    animationDuration: `${speed}s` 
  }), [speed]);

  const combinedClassName = useMemo(() => 
    `shiny-text ${disabled ? 'disabled' : ''} ${className}`.trim(), 
    [disabled, className]
  );

  return (
    <div className={combinedClassName} style={style}>
      {text}
    </div>
  );
});

export default ShinyText;
