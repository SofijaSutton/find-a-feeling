import React from 'react'
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink } from '../../components/ui/navigation-menu'
function AppNavigationMenu() {
  return (
    <NavigationMenu>
      <NavigationMenuItem>
        <NavigationMenuLink to="/">About</NavigationMenuLink>
      </NavigationMenuItem>
      <NavigationMenuItem>
        <NavigationMenuLink to="/quiz">Start Quiz</NavigationMenuLink>
      </NavigationMenuItem>
      <NavigationMenuItem>
        <NavigationMenuLink to="/resources">Resources</NavigationMenuLink>
      </NavigationMenuItem>
    </NavigationMenu>
  );
}

export default AppNavigationMenu