//MATERIAL DESIGN
//Components
import { ColorSchemeScript, MantineProvider } from '@mantine/core';


//Styles
import "./globals.css";
import '@mantine/core/styles.css';
import { Montserrat } from "next/font/google";


const monsterrat = Montserrat({
  subsets: ['latin']
});


export const metadata: Metadata = {
  title: 'Prueba de desarrollo - Admira',
  creator: 'Alan Xavier Benavides Benavides',

  authors: [
    {
      name: 'Alan Xavier Benavides Benavides',
      url: 'https://github.com/Kykal',
    }
  ],
};


//Types
import type { Metadata } from "next";
type LayoutProps = {
  children: React.ReactNode;
};


//Main component content
const RootLayout = ({children}: LayoutProps): JSX.Element => {
  //Main component render
  return (
    <html lang='en' >
      <head>
        <ColorSchemeScript />
      </head>
      <body className={monsterrat.className}>
        <MantineProvider>
          {children}
        </MantineProvider>
      </body>
    </html>
  );
};


export default RootLayout; //Export main component
