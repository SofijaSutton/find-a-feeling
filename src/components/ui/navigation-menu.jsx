import React from "react";
import * as NavigationMenuPrimitive from "@radix-ui/react-navigation-menu";
import { ChevronDownIcon } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

import { cn } from "../../lib/utils";

function NavigationMenu({ className, children, viewport = true, ...props }) {
  return (
    <NavigationMenuPrimitive.Root
      data-slot="navigation-menu"
      data-viewport={viewport}
      className={cn("text-nowrap flex text-xl justify-end text-foreground bg-background custom-nav-menu", className)}
      style={{
        "--radix-navigation-menu-viewport-width": "50%",
        "--radix-navigation-menu-viewport-padding": "0px"
      }}
      {...props}
    >
      {children}
      {/* {viewport && <NavigationMenuViewport />} */}
    </NavigationMenuPrimitive.Root>
  );
}

function NavigationMenuList({ className, ...props }) {
  return (
    <NavigationMenuPrimitive.List
      data-slot="navigation-menu-list"
      className={cn("flex list-none min-w-[50%]", className)} // Use Tailwind's arbitrary value feature
      {...props}
    />
  );
}

function NavigationMenuItem({ className, ...props }) {
  return (
    <NavigationMenuPrimitive.Item
      data-slot="navigation-menu-item"
      className={cn("relative", className)}
      {...props}
    />
  );
}

function NavigationMenuTrigger({ className, children, ...props }) {
  return (
    <NavigationMenuPrimitive.Trigger
      data-slot="navigation-menu-trigger"
      className={cn(
        "inline-flex items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground disabled:pointer-events-none disabled:opacity-50 transition-colors",
        className
      )}
      {...props}
    >
      {children}
      <ChevronDownIcon
        className="ml-1 transition-transform duration-100 group-data-[state=open]:rotate-180"
        aria-hidden="true"
      />
    </NavigationMenuPrimitive.Trigger>
  );
}

function NavigationMenuContent({ className, ...props }) {
  return (
    <NavigationMenuPrimitive.Content
      data-slot="navigation-menu-content"
      className={cn(
        "absolute top-0 left-0 w-full p-2 md:absolute md:w-auto bg-popover text-popover-foreground rounded-md shadow-md transition-transform",
        className
      )}
      {...props}
    />
  );
}

function NavigationMenuLink({ className, to, children, ...props }) {
  const location = useLocation();
  const isActive = location.pathname === to || 
                  (to !== "/" && location.pathname.startsWith(to));
  
  return (
    <NavigationMenuPrimitive.Link
      asChild
      data-slot="navigation-menu-link"
      {...props}
    >
      <Link 
        to={to}
        className={cn(
          "flex items-center font-light text-2xl transition-all duration-100 p-4 hover:text-accent hover:text-[1.35em]",
          isActive ? "text-primary hover:text-accent" : "",
          className
        )}
      >
        {children}
      </Link>
    </NavigationMenuPrimitive.Link>
  );
}

export {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuContent,
  NavigationMenuTrigger,
  NavigationMenuLink,
};