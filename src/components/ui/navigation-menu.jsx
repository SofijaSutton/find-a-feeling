import React from "react";
import * as NavigationMenuPrimitive from "@radix-ui/react-navigation-menu";
import { ChevronDownIcon } from "lucide-react";
import { Link, NavLink, useLocation } from "react-router-dom";

import { cn } from "../../lib/utils";

function NavigationMenu({ className, children, viewport = true, ...props }) {
  return (
    <NavigationMenuPrimitive.Root
      data-slot="navigation-menu"
      data-viewport={viewport}
      className={cn("text-nowrap flex text-xl justify-end text-brand-white-cream bg-brand-brown-dark custom-nav-menu", className)}
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

// function NavigationMenuViewport({ className, ...props }) {
//   return (
//     <div className={cn("absolute top-full left-0 z-50 flex justify-center")}>
//       <NavigationMenuPrimitive.Viewport
//         data-slot="navigation-menu-viewport"
//         className={cn(
//           "origin-top-center bg-popover text-popover-foreground relative mt-1.5 h-[var(--radix-navigation-menu-viewport-height)] w-full overflow-hidden rounded-md border shadow md:w-[var(--radix-navigation-menu-viewport-width)]",
//           className
//         )}
//         {...props}
//       />
//     </div>
//   );
// }

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
          "flex items-center font-light text-2xl transition-all duration-100 p-4 hover:text-brand-pink-light hover:text-[1.35em]",
          isActive ? "text-brand-yellow-dark hover:text-brand-pink" : "",
          className
        )}
      >
        {children}
      </Link>
    </NavigationMenuPrimitive.Link>
  );
}

// function NavigationMenuIndicator({ className, ...props }) {
//   return (
//     <NavigationMenuPrimitive.Indicator
//       data-slot="navigation-menu-indicator"
//       className={cn(
//         "top-full z-[1] flex h-1.5 items-end justify-center overflow-hidden",
//         className
//       )}
//       {...props}
//     >
//       <div className="bg-border relative top-[60%] h-2 w-2 rotate-45 rounded-tl-sm shadow-md" />
//     </NavigationMenuPrimitive.Indicator>
//   );
// }

export {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuContent,
  NavigationMenuTrigger,
  NavigationMenuLink,
//   NavigationMenuIndicator,
//   NavigationMenuViewport,
};