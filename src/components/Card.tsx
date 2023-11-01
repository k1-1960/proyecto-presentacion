import React from 'react';

type CardProperties = {
  body: React.JSX.Element;
  header: React.JSX.Element;
  footer: React.JSX.Element;
};

export function CardVertical({ body, footer, header }: CardProperties) {
  return (
    <div className='flex flex-col light:bg-white rounded-md border-[2px] border-gray-700 w-[24rem] h-[24rem]'>
      {header}
      <div className='flex flex-col'>{body}</div>
      <div className='flex flex-row'>{footer}</div>
    </div>
  );
}

export function CardHeader({
  title,
  startContent,
  endContent,
}: {
  title: string | React.JSX.Element;
  startContent?: React.JSX.Element;
  endContent?: React.JSX.Element;
}) {
  return (
    <div className='flex flex-row border-b-2 font-bold text-xl h-8 items-center p-2 justify-between m-2'>
      {startContent || <div></div>}
      {title}
      {endContent || <div></div>}
    </div>
  );
}
