'use client'

import { routes } from '@/constants'
import { NavigationLink } from './NavigationLink'

export function SidebarNavigation() {
  return (
    <div className='flex-1 px-3 lg:py-3 space-y-1'>
      <div className='hidden lg:block'>
        <ul className='space-y-1'>
          {routes[0].items.map((item, j) => (
            <NavigationLink key={j} link={item} />
          ))}
        </ul>
      </div>

      {/* Rest of the routes visible on all screen sizes */}
      {routes.slice(1).map((route, i) => {
        return (
          <ul key={i} className='space-y-1'>
            {route.label ? (
              <h4
                key={i}
                className='px-2 pt-5 pb-2 text-xs font-semibold text-gray-500 dark:text-white dark:text-opacity-40'
              >
                {route.label}
              </h4>
            ) : null}
            {route.items.map((item, j) => (
              <NavigationLink key={j} link={item} />
            ))}
          </ul>
        )
      })}
    </div>
  )
}
