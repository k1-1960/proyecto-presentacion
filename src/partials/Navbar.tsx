import { useState } from 'react';
import { Button, Link } from '@nextui-org/react';
import { Moon, Sun } from '@geist-ui/icons';
import { toggleTheme, getTheme } from '../functions/theming';

export default function Navbar() {
  let [theme, setTheme] = getTheme();

  return (
    <div className='flex flex-col justify-center items-center w-[100%] h-[4rem] z-[9999]'>
      <nav className='flex flex-row justify-between items-center m-2 bg-[transparent] p-2 backdrop-blur-[5px] border-[1px] border-slate-400 border-opacity-[25%] rounded-md h-[3rem] w-[90vw] fixed'>
        <b>Desde CONALEP 115, Navolato.</b>
        <div>
          <Button
            as={Link}
            href='https://github.com/k1-1960/proyecto-de-presentacion'
            color='primary'
          >
            Código fuente
          </Button>
        </div>
        <Button
          variant='light'
          color='default'
          onClick={toggleTheme}
          isIconOnly
        >
          {theme ? (
            theme === 'dark' ? (
              <Moon size={32}></Moon>
            ) : (
              <Sun size={32}></Sun>
            )
          ) : null}
        </Button>
      </nav>
    </div>
  );
}
