import {Injectable} from '@angular/core';

export interface BadgeItem {
  type: string;
  value: string;
}

export interface ChildrenItems {
  state: string;
  target?: boolean;
  name: string;
  type?: string;
  children?: ChildrenItems[];
}

export interface MainMenuItems {
  state: string;
  main_state?: string;
  target?: boolean;
  name: string;
  type: string;
  icon: string;
  badge?: BadgeItem[];
  children?: ChildrenItems[];
}

export interface Menu {
  label: string;
  main: MainMenuItems[];
}

const MENUITEMS = [
  {
    label: 'Compañia',
    main: [
      {
        state: 'companies',
        name: 'Listar',
        type: 'link',
        icon: 'ti-home'
      },
    ]
  },
  {
    label: 'ADMINISTRATIVO',
    main: 
    [
      {
        main_state: 'admin',
        state: 'centro-costo',
        name: 'Centro de costos',
        type: 'link',
        icon: 'ti-layers'
      },
      {
        main_state: 'admin',
        state: 'jobs',
        name: 'Cargos',
        type: 'link',
        icon: 'ti-receipt'
      },
    ],
  },
  {
    label: 'VACACIONES',
    main: [
      {
        state: 'map',
        name: 'Listar',
        type: 'link',
        icon: 'ti-map-alt'
      },
      {
        state: 'authentication',
        name: 'Solicitar',
        type: 'sub',
        icon: 'ti-id-badge',
        children: [
          {
            state: 'login',
            type: 'link',
            name: 'Login',
            target: true
          },
          {
            state: 'forgot',
            name: 'Forgot Password',
            target: true
          },
          {
            state: 'lock-screen',
            name: 'Lock Screen',
            target: true
          },
        ]
      },
      /*{
        state: 'error',
        external: 'http://lite.codedthemes.com/flatable/error.html',
        name: 'Error',
        type: 'external',
        icon: 'ti-layout-list-post',
        target: true
      },*/
      {
        state: 'simple-page',
        name: 'Solicitar',
        type: 'link',
        icon: 'ti-layout-sidebar-left'
      }
    ]
  },
  {
    label: 'APROBADORES',
    main: [
      {
        state: '',
        name: 'Menu Levels',
        type: 'sub',
        icon: 'ti-direction-alt',
        children: [
          {
            state: '',
            name: 'Menu Level 2.1',
            target: true
          }, {
            state: '',
            name: 'Menu Level 2.2',
            type: 'sub',
            children: [
              {
                state: '',
                name: 'Menu Level 2.2.1',
                target: true
              },
              {
                state: '',
                name: 'Menu Level 2.2.2',
                target: true
              }
            ]
          }, {
            state: '',
            name: 'Menu Level 2.3',
            target: true
          }, {
            state: '',
            name: 'Menu Level 2.4',
            type: 'sub',
            children: [
              {
                state: '',
                name: 'Menu Level 2.4.1',
                target: true
              },
              {
                state: '',
                name: 'Menu Level 2.4.2',
                target: true
              }
            ]
          }
        ]
      }
    ]
  }
];

@Injectable()
export class MenuItems {
  getAll(): Menu[] {
    return MENUITEMS;
  }

  /*add(menu: Menu) {
    MENUITEMS.push(menu);
  }*/
}
