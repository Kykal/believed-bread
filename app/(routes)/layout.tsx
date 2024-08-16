//NextJS
'use client';


//MATERIAL DESIGN
import { useDisclosure } from '@mantine/hooks';
//Components
import { AppShell, Burger, Group, Title } from '@mantine/core';


//Components
import NavLinks from './_components/NavLinks';


//Types
import type { AppShellHeaderConfiguration } from '@mantine/core';


//Types
type PageProps = {
  children: React.ReactNode;
};


//Main component content
const Page = ({children}: PageProps): JSX.Element => {

  const [ drawerOpened, { toggle } ] = useDisclosure();

  const header: AppShellHeaderConfiguration = {
    height: 60,
  };
  

  //Main component render
  return (
    <AppShell
      header={header}
      navbar={{
        width: 300,
        breakpoint: 'sm',
        collapsed: {
          mobile: !drawerOpened,
        }
      }}

      padding='md'
    >
      <AppShell.Header>
        <Group h='100%' align='center' px='md' >
          <Burger
            opened={drawerOpened}
            onClick={toggle}
            hiddenFrom='sm'
          />
          <Title order={1} size='h2' >
            Dashboard
          </Title>
        </Group>
      </AppShell.Header>

      <AppShell.Navbar p='md' >
        <NavLinks />
      </AppShell.Navbar>

      <AppShell.Main>
        {children}
      </AppShell.Main>
    </AppShell>
  );
};


export default Page; //Export main component
