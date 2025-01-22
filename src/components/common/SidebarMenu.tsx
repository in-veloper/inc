import { Divider, ListItemText, MenuItem, MenuList, Paper } from "@mui/material"
import { useLocation, Link } from "react-router-dom"
import { menuItems } from "../../consts/MenuItems"

const SidebarMenu = () => {
    const location = useLocation()

    // 현재 활성화된 대메뉴 탐색
    const activeMainMenu = menuItems.find((menu) => menu.subItems.some((subItem) => location.pathname === subItem.path))

    // 활성화된 대메뉴 없는 경우 Sidebar 비움
    if(!activeMainMenu) return null

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
            <Paper sx={{ width: 220, marginRight: 5 }}>
                <MenuList>
                    <MenuItem>
                        <ListItemText 
                            primary={activeMainMenu.title}
                            primaryTypographyProps={{ fontWeight: 'bold', fontSize: '16px' }}
                        />
                    </MenuItem>
                    <Divider />
                    
                    {activeMainMenu.subItems.map((subItem, index) => (
                        <MenuItem
                            key={index}
                            component={Link}
                            to={subItem.path}
                            selected={location.pathname === subItem.path}
                            sx={{
                                '&.Mui-selected': {
                                    backgroundColor: '#9E0011',
                                    borderRadius: 1,
                                    opacity: 0.8,
                                    color: '#FFF',
                                    '&:hover': {
                                        backgroundColor: '#7C0011'
                                    }
                                }
                            }}
                        >
                            <ListItemText>{subItem.title}</ListItemText>
                        </MenuItem>
                    ))}
                </MenuList>
            </Paper>
        </div>
    )
}

export default SidebarMenu