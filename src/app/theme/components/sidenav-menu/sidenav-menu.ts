import { SidenavMenu } from './sidenav-menu.model';

export const sidenavMenuItems = [ 
    new SidenavMenu (1, 'NAV.HOME', '/', null, null, false, 0),
    new SidenavMenu (2, 'Fashion', null, null, null, true, 0), 
    new SidenavMenu (10, 'Women', null, null, null, true, 2),   
    new SidenavMenu (11, 'Dresses & Skirts', '/products/dresses & skirts', null, null, false, 10),
    new SidenavMenu (12, 'Jackets', '/products/jackets', null, null, false, 10),
    new SidenavMenu (13, 'Tops & Blouses', '/products/tops & blouses', null, null, false, 10), 
    new SidenavMenu (14, 'Shoes & Boots', '/products/shoes & boots', null, null, false, 10), 
    new SidenavMenu (15, 'Knitwear', '/products/knitwear', null, null, false, 10), 
    new SidenavMenu (20, 'Men', null, null, null, true, 2),  
    new SidenavMenu (21, 'T-shirts & Polos', '/products/t-shirts & polos', null, null, false, 20),
    new SidenavMenu (22, 'Shoe & Boots', '/products/shoe & boots', null, null, false, 20),
    new SidenavMenu (23, 'Jeans', '/products/jeans', null, null, false, 20),
    new SidenavMenu (24, 'Coats', '/products/coats', null, null, false, 20),
    new SidenavMenu (30, 'Kids', null, null, null, true, 2), 
    new SidenavMenu (31, 'Top', '/products/top', null, null, false, 30),
    new SidenavMenu (32, 'Pants & Shorts', '/products/pants & shorts', null, null, false, 30),
    new SidenavMenu (33, 'Dresses', '/products/dresses', null, null, false, 30),
    new SidenavMenu (34, 'Skirts', '/products/skirts', null, null, false, 30),
    new SidenavMenu (35, 'Set & Body', '/products/set & body', null, null, false, 30),
    new SidenavMenu (40, 'Accessories', null, null, null, true, 2), 
    new SidenavMenu (41, 'Watches', '/products/watches', null, null, false, 40),
    new SidenavMenu (42, 'Bags & Wallet', '/products/bags & wallet', null, null, false, 40),
    new SidenavMenu (43, 'Sunglasses', '/products/sunglasses', null, null, false, 40),
    new SidenavMenu (44, 'Belts & Hats', '/products/belts & hats', null, null, false, 40),
    new SidenavMenu (50, 'Jewellery', '/products/jewellery', null, null, false, 0), 
    new SidenavMenu (51, 'Electronics', '/products/electronics', null, null, false, 0), 
    new SidenavMenu (52, 'Sports', '/products/sports', null, null, false, 0), 
    new SidenavMenu (60, 'NAV.PAGES', null, null, null, true, 0),   
    new SidenavMenu (61, 'NAV.SHOP', null, null, null, true, 60), 
    new SidenavMenu (62, 'NAV.ALL_PRODUCTS', '/products', null, null, false, 61),  
    new SidenavMenu (63, 'NAV.PRODUCT_DETAIL', '/products/2/PC All-in-One', null, null, false, 61), 
    new SidenavMenu (64, 'NAV.CART', '/cart', null, null, false, 61), 
    new SidenavMenu (65, 'NAV.CHECKOUT', '/checkout', null, null, false, 61),  
    new SidenavMenu (70, 'LOGIN', '/sign-in', null, null, false, 60), 
    new SidenavMenu (71, 'NAV.404_PAGE', '/404', null, null, false, 60), 
    new SidenavMenu (72, 'NAV.LANDING', '/landing', null, null, false, 60), 
    new SidenavMenu (80, 'NAV.CONTACT', '/contact', null, null, false, 0),  
    new SidenavMenu (90, 'NAV.ADMIN', '/admin', null, null, false, 0),  
    new SidenavMenu (140, 'Level 1', null, null, null, true, 0),
    new SidenavMenu (141, 'Level 2', null, null, null, true, 140),
    new SidenavMenu (142, 'Level 3', null, null, null, true, 141),
    new SidenavMenu (143, 'Level 4', null, null, null, true, 142),
]