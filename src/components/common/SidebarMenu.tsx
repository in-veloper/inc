import { Divider, ListItemText, MenuItem, MenuList, Paper, Typography } from "@mui/material"
import { useLocation, Link } from "react-router-dom"
import { menuItems } from "../../consts/MenuItems"
import './style/sidebarMenu.css'

const SidebarMenu = () => {
    const location = useLocation()

    const basePath = `/${location.pathname.split('/')[1]}`

    // 현재 활성화된 대메뉴 탐색
    const activeMainMenu = menuItems.find((menu) => menu.subItems.some((subItem) => basePath === subItem.path))

    // 활성화된 대메뉴 없는 경우 Sidebar 비움
    if(!activeMainMenu) return null

    return (
        <div className="sidebar-menu">
            <Paper className="sidebar-paper">
                <MenuList>
                    <MenuItem
                        disableRipple
                        sx={{
                            cursor: 'default',
                            '&:hover': {
                                backgroundColor: 'transparent'
                            }
                        }}
                    >
                        <ListItemText 
                            primary={
                                <Typography
                                    variant="body1"
                                    className="sidebar-list-item-text"
                                >
                                    {activeMainMenu.title}
                                </Typography>
                            }
                        />
                    </MenuItem>
                    <Divider />
                    
                    {activeMainMenu.subItems.map((subItem, index) => (
                        <MenuItem
                            key={index}
                            component={Link}
                            to={subItem.path}
                            selected={basePath === subItem.path}
                            sx={{
                                '&.Mui-selected': {
                                    backgroundColor: '#9E0011',
                                    borderRadius: 1,
                                    opacity: 0.8,
                                    color: '#FFF',
                                    '&:hover': {
                                        backgroundColor: '#9E0011'
                                    }
                                },
                                // '&:hover': {
                                //     backgroundColor: '#7C0011'
                                // }
                            }}
                        >
                            <ListItemText>
                                <Typography>
                                    {subItem.title}
                                </Typography>
                            </ListItemText>
                        </MenuItem>
                    ))}
                </MenuList>
            </Paper>
        </div>
    )
}

export default SidebarMenu