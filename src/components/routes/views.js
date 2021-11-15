import LoguinPage from '../views/LoguinPage';
import ModulePage from '../views/ModulePage';
import SalesPage from '../views/SalesPage';
import UsersPage from '../views/UsersPage';
import ProductsPage from '../views/ProductsPage';
import SalesformPage from '../views/SalesformPage';
import SalesupgradePage from '../views/SalesupgradePage';
import SalesdeletePage from '../views/SalesdelePage';
import UsersformPage from '../views/UsersformPage';
import UsersupgradePage from '../views/UsersupgradePage';
import UsersdeletePage from '../views/UsersdeletePage';
import ProductsformPage from '../views/ProductsformPage';
import ProductsupgradePage from '../views/ProductsupgradePage';
import ProductsdeletePage from '../views/ProductsdeletePage';


export const views ={
    '/': {view: LoguinPage, name: 'LoguinPage', isPublic: true},
    '/module': {view: ModulePage, name: 'ModulePage', isPublic: true},
    '/module/sales': {view: SalesPage, name: 'SalesPage', isPublic: true},
    '/module/users': {view: UsersPage, name: 'UsersPage', isPublic: true},
    '/module/products': {view: ProductsPage, name: 'ProductsPage', isPublic: true},
    '/module/sales/form': {view: SalesformPage, name: 'SalesformPage', isPublic: true},
    '/module/sales/upgrade': {view: SalesupgradePage, name: 'SalesupgradePage', isPublic: true},
    '/module/sales/delete': {view: SalesdeletePage, name: 'SalesdeletePage', isPublic: true},
    '/module/users/form': {view: UsersformPage, name: 'UsersformPage', isPublic: true},
    '/module/users/upgrade': {view: UsersupgradePage, name: 'UsersupgradePage', isPublic: true},
    '/module/users/delete': {view: UsersdeletePage, name: 'UsersdeletePage', isPublic: true},
    '/module/products/form': {view: ProductsformPage, name: 'ProductsformPage', isPublic: true},
    '/module/products/upgrade': {view: ProductsupgradePage, name: 'ProductsupgradePage', isPublic: true},
    '/module/products/delete': {view: ProductsdeletePage, name: 'ProductsdeletePage', isPublic: true},
}