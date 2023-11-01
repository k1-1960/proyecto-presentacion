import { Button, Card, Spacer } from '@nextui-org/react';
import { LuPalette, LuHeart, LuBookmarkPlus } from 'react-icons/lu';
import { AiFillHeart } from 'react-icons/ai';
import { BiLogoReact, BiLogoTypescript } from 'react-icons/bi';
import { CardVertical, CardHeader } from '../components/Card';

import { toggleTheme } from '../functions/theming';

export default function Main() {
  return (
    <div className='flex flex-col w-[100%] h-[100%] justify-center items-center'>
      <h1 className='text-2xl font-black'>¡Hola mundo!</h1>
      <Spacer y={10} />
      <Button color='primary' variant='shadow' onClick={toggleTheme}>
        Cambiar tema
      </Button>
      <Spacer y={24}></Spacer>
      <div className='flex flex-col justify-center items-center'>
        <h1 className='relative flex flex-col text-4xl font-black justify-center items-center w-[100%] h-[100%]'>
          Hice una presentación sobre Programación
        </h1>
        <p className='font-thin'>Y creé una página web para ejemplo B)</p>
        <img
          src='/imgs/mockup-work.png'
          alt='My hard work pipipi'
          className=' w-[80vw]'
        />
      </div>
      <Spacer y={72}></Spacer>
      <p className='text-sm flex flex-row gap-1'>
        Hecho con <AiFillHeart color='red' size={24}></AiFillHeart> por Enrique
        de Conalep 115, grupo #107.
      </p>
    </div>
  );
}
